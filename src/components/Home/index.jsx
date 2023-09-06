import { useState, useEffect } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const palavras = [
  { texto: "Desenvolvedor", cor: "#07BFE0" },
  { texto: "Designer", cor: "#FF7F50" },
  { texto: "Músico", cor: "#32CD32" },
  { texto: "Criativo", cor: "#FFD700" },
];

function Home() {
  const [indice, setIndice] = useState(0);
  const [palavraAtual, setPalavraAtual] = useState(palavras[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndice((indice + 1) % palavras.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [indice]);

  useEffect(() => {
    setPalavraAtual(palavras[indice]);
  }, [indice]);

  return (
    <>
      <div className="home">
        <div>
          <div className="typing-animation">
            <span className="white-text">
              <h1 className="homeOla">Olá, eu sou</h1>
              <h1 className="homeNome">
                Guilherme Alves,{" "}
                <span
                  className="homeTeclar"
                  style={{ color: palavraAtual.cor }}
                >
                  {palavraAtual.texto}
                </span>
              </h1>
            </span>
          </div>
          <p className="homeProfisao">
            Software Developer <span className="homeProfissaoSpan">|</span>
            UI/UX Designer <br />
            Brasil, Brasília
          </p>
          <br />
          <br />
          <div className="homeButtons">
            <button className="instagram">
              <a href="https://www.instagram.com/guito.dev/">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  size="2xl"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
