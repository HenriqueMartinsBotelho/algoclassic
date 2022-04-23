import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { MdRefresh } from "react-icons/md";
import axios from "axios";
import { buble_initial } from "initial_codes/initial_codes";
import { VscRunAll } from "react-icons/vsc";

const Coding = () => {
  const [code, setCode] = useState("print('hello')");
  const [testCaseResults, setTestCaseResults] = useState([]);

  // const [resultado, setResultado] = useState({});
  const router = useRouter();
  // console.log(router.query);
  const [localData, setLocalData] = useState<any>({});

  useEffect(() => {
    const l = JSON.parse(localStorage.getItem(`${router.query.algoritmo}`));
    setLocalData(l);

    if (router.query.algoritmo === "bubleSort") {
      setCode(buble_initial);
    } else {
      setCode("algoritmo sem template");
    }
  }, []);

  const checkCode = () => {
    axios
      .post(`http://localhost:3333/python/${router.query.algoritmo}`, { code })
      .then(({ data }) => {
        setTestCaseResults(data.testCaseResults);
        console.log("dt", data.testCaseResults);
        console.log("tt", testCaseResults);
        // Se não tem o algoritmo em questão no localstore define ele
        if (!localStorage.getItem(`${router.query.algoritmo}`)) {
          localStorage.setItem(
            `${router.query.algoritmo}`,
            JSON.stringify({
              acertos: 0,
              erros: 0,
              tentativas: 0,
            })
          );
        }
        const { acertos, erros, tentativas } = JSON.parse(
          localStorage.getItem(`${router.query.algoritmo}`)
        );
        // Se acerto todas
        // debugger;
        let acertei = true;
        for (const iterator of data.testCaseResults) {
          console.log("ola for");
          console.log(iterator);
          if (iterator["ans"] === "False") {
            console.log("aceitar vai ser falso");
            // debugger;
            acertei = false;
          }
        }
        let resultado = {};
        // debugger;
        if (acertei) {
          // debugger;
          resultado = {
            acertos: acertos + 1,
            erros: erros,
            tentativas: tentativas + 1,
          };

          console.log("if", resultado);
        } else {
          debugger;
          console.log("aumentando erros");
          console.log("else", resultado);
          resultado = {
            acertos: acertos,
            erros: erros + 1,
            tentativas: tentativas + 1,
          };
        }
        console.log("indo setar localstorage");
        localStorage.setItem(
          `${router.query.algoritmo}`,
          JSON.stringify(resultado)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ height: "200vh", background: "aliceblue" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black" }}>{router.query.algoritmo}</h1>
        <div>
          Acertos: {localData?.acertos} - Erros: {localData?.erros} -
          Tentativas: {localData?.tentativas}
        </div>
        <button
          style={{
            marginTop: "8px",
            padding: "8px 16px",
            background: "#00F700",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => checkCode()}
        >
          <VscRunAll color="white" fontSize="24px" />
        </button>
      </div>
      <div
        style={{
          width: "80vw",
          backgroundColor: "#ABACB2",
          margin: "auto",
          marginTop: "20px",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CodeMirror
          value={code}
          height="70vh"
          width="80vw"
          extensions={[javascript({ jsx: true })]}
          // extensions={[python()]}
          // onChange={(value, viewUpdate) => {
          //   setCode(value);
          // }}
          onChange={(value) => {
            setCode(value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // background: "red",
          padding: "10px",
        }}
      ></div>
      <div
        style={{
          background: "white",
          width: "80vw",
          margin: "auto",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            // width: "15vw",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // background: "red",
                gap: "5px",
              }}
            >
              Input:{" "}
              <div
                style={{ background: "blue", width: "10px", height: "10px" }}
              ></div>
              Output:{" "}
              <div
                style={{ background: "pink", width: "10px", height: "10px" }}
              ></div>
              Expected:{" "}
              <div
                style={{ background: "green", width: "10px", height: "10px" }}
              ></div>
            </div>
          </div>
          <div>
            <ul>
              {testCaseResults.map((res, i) => {
                return (
                  <li
                    style={{
                      background: "aliceblue",
                      display: "flex",
                      width: "60vw",
                    }}
                    key={i}
                  >
                    <div>{JSON.stringify(res["input"])} -</div>
                    <div style={{ color: "pink" }}>
                      {JSON.stringify(res["output"])} -
                    </div>
                    <div style={{ color: "green" }}>
                      {JSON.stringify(res["expected"])}
                    </div>
                    {res["ans"] === "True" ? "✅ Certo" : "❌ Errado"}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coding;
