import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";

const Home: NextPage = () => {
  const router = useRouter();

  const [bub_acertos, setBubAcertos] = useState(0);
  const [bub_erros, setBubErros] = useState(0);
  const [bub_tentativas, setBubTentativas] = useState(0);
  const [dij_acertos, setDijAcertos] = useState(0);
  const [dij_erros, setDijErros] = useState(0);
  const [dij_tentativas, setDijTentativas] = useState(0);
  const [sel_acertos, setSelAcertos] = useState(0);
  const [sel_erros, setSelErros] = useState(0);
  const [sel_tentativas, setSelTentativas] = useState(0);

  /*
  const item2 = JSON.parse(localStorage.getItem(`bubleSort`)); (NextJS não deixa)
 Quando você está renderizando no servidor, você não tem um navegador e, 
 portanto, não tem acesso a todas as APIs que o navegador fornece, 
 incluindo localStorage e por isso tem que colocar dentro do useEffect 
  */

  useEffect(() => {
    const item2 = JSON.parse(localStorage.getItem(`bubleSort`));
    setBubAcertos(item2.acertos);
    setBubErros(item2.erros);
    setBubTentativas(item2.tentativas);
    const item = JSON.parse(localStorage.getItem(`dijkstra`));
    setDijAcertos(item.acertos);
    setDijErros(item.erros);
    setDijTentativas(item.tentativas);
    const item3 = JSON.parse(localStorage.getItem(`selection`));
    setSelAcertos(item3?.acertos);
    setSelErros(item3?.erros);
    setSelTentativas(item3?.tentativas);
  }, []);

  return (
    <div className="wrapper">
      <div className="table">
        <div className="row header">
          <div className="cell">Algoritmo</div>
          <div className="cell">Aprender</div>
          <div className="cell">Acertos</div>
          <div className="cell">Erros</div>
          <div className="cell">Tentativas</div>
          <div className="cell">Última tentativa</div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            <Link
              href={{ pathname: "/coding", query: { algoritmo: "dijkstra" } }}
            >
              <a style={{ color: "blue" }}>Algoritmo de Dijkstra</a>
            </Link>
          </div>
          <div className="cell" data-title="Age">
            aaa
          </div>
          <div className="cell" data-title="Occupation">
            {dij_acertos}
          </div>
          <div className="cell" data-title="Location">
            {dij_erros}
          </div>
          <div className="cell" data-title="Location">
            {dij_tentativas}
          </div>
          <div className="cell" data-title="Location">
            17/04/2022
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            <Link
              href={{ pathname: "/coding", query: { algoritmo: "bubleSort" } }}
            >
              <a style={{ color: "blue" }}>Buble Sort</a>
            </Link>
          </div>
          <div className="cell" data-title="Age">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=GiNPe_678Ms&list=PL5TJqBvpXQv4l7nH-08fMfyl7aDFNW_fC&index=3"
            >
              <AiFillYoutube fontSize="20px" color="red" />
            </a>
          </div>
          <div className="cell" data-title="Occupation">
            {bub_acertos}
          </div>
          <div className="cell" data-title="Location">
            {bub_erros}
          </div>
          <div className="cell" data-title="Location">
            {bub_tentativas}
          </div>
          <div className="cell" data-title="Location">
            Somerville, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Selection Sort
          </div>
          <div className="cell" data-title="Age">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtu.be/ZT_dT8yn48s?list=PL5TJqBvpXQv4l7nH-08fMfyl7aDFNW_fC"
            >
              <AiFillYoutube fontSize="20px" color="red" />
            </a>
          </div>
          <div className="cell" data-title="Occupation">
            {sel_acertos}
          </div>
          <div className="cell" data-title="Location">
            {sel_erros}
          </div>
          <div className="cell" data-title="Location">
            {sel_tentativas}
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Harry Harrison
          </div>
          <div className="cell" data-title="Age">
            25
          </div>
          <div className="cell" data-title="Occupation">
            Front-End Developer
          </div>
          <div className="cell" data-title="Location">
            Boston, MA
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
