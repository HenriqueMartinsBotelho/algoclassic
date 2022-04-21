import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  // Erro : TypeError: Cannot read properties of null (reading 'useState')

  const [bub_acertos, setBubAcertos] = useState(0);
  const [bub_erros, setBubErros] = useState(0);
  const [bub_tentativas, setBubTentativas] = useState(0);
  const [dij_acertos, setDijAcertos] = useState(0);
  const [dij_erros, setDijErros] = useState(0);
  const [dij_tentativas, setDijTentativas] = useState(0);

  useEffect(() => {
    return () => {
      const item2 = JSON.parse(localStorage.getItem(`bubleSort`));
      const { bub_a, bub_e, bub_t } = item2;
      setBubAcertos(bub_a);
      setBubErros(bub_e);
      setBubTentativas(bub_t);
      const item = JSON.parse(localStorage.getItem(`dijkstra`));
      const { acertos, erros, tentativas } = item;
      setDijAcertos(acertos);
      setDijErros(erros);
      setDijTentativas(tentativas);
    };
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
            Icon Texto, Icon Vídeo
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
            Icon Texto, Icon Vídeo
          </div>
          <div className="cell" data-title="Occupation">
            a{bub_acertos}
          </div>
          <div className="cell" data-title="Location">
            b{bub_erros}
          </div>
          <div className="cell" data-title="Location">
            c{bub_tentativas}
          </div>
          <div className="cell" data-title="Location">
            Somerville, MA
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Maxwell Johnson
          </div>
          <div className="cell" data-title="Age">
            26
          </div>
          <div className="cell" data-title="Occupation">
            UX Architect &amp; Designer
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
          </div>
          <div className="cell" data-title="Location">
            Arlington, MA
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
