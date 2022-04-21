import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { MdRefresh } from "react-icons/md";
import axios from "axios";

const Coding = () => {
  const [code, setCode] = useState("print('hello')");
  const [testCaseResults, setTestCaseResults] = useState([]);
  const router = useRouter();
  // console.log(router.query);

  const checkCode = () => {
    axios
      .post(`http://localhost:3333/python/${router.query.algoritmo}`, { code })
      .then(({ data }) => {
        setTestCaseResults(data.testCaseResults);
        console.log("dt", data.testCaseResults);
        console.log("tt", testCaseResults);
        // Se não tem o algoritmo em questão no localstore define ele
        if (!localStorage.getItem(`${router.query.algoritmo}`)) {
          const resultado = {
            acertos: 0,
            erros: 0,
            tentativas: 0,
          };
          localStorage.setItem(
            `${router.query.algoritmo}`,
            JSON.stringify(resultado)
          );
        }
        const { acertos, erros, tentativas } = JSON.parse(
          localStorage.getItem(`${router.query.algoritmo}`)
        );
        // Se acerto todas
        let acertei = true;
        for (const iterator of testCaseResults) {
          console.log("ola for");
          console.log(iterator);
          if (iterator["ans"] === "False") {
            console.log("aceitar vai ser falso");
            acertei = false;
            return;
          }
        }
        if (acertei) {
          const resultado = {
            acertos: acertos + 1,
            erros: erros,
            tentativas: tentativas + 1,
          };
          localStorage.setItem(
            `${router.query.algoritmo}`,
            JSON.stringify(resultado)
          );
        } else {
          const resultado = {
            acertos: acertos,
            erros: erros + 1,
            tentativas: tentativas + 1,
          };
          localStorage.setItem(
            `${router.query.algoritmo}`,
            JSON.stringify(resultado)
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "white" }}>{router.query.algoritmo}</h1>
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
          value="console.log('hello world!');"
          height="80vh"
          width="80vw"
          extensions={[javascript({ jsx: true })]}
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
      >
        <button onClick={() => checkCode()}>RUN</button>
      </div>
      <div
        style={{
          background: "yellow",
          width: "80vw",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "15vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "20px" }}>Input</div>
            <MdRefresh />
          </div>
          <div>
            <ul>
              {testCaseResults.map((res, i) => {
                return (
                  <li
                    style={{
                      background: "red",
                      display: "flex",
                      width: "40vw",
                    }}
                    key={i}
                  >
                    Entrada: {res["input"]} - Esperado: {res["expected"]} -
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
