import { useState, useEffect } from "react";
import "./Home.css";
import "./Sobre.css";
import "./Projetos.css";
import "animate.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { AiFillInstagram } from "react-icons/ai";

const palavras = [
  { texto: "Desenvolvedor", cor: "#d9d9d9" },
  { texto: "Designer", cor: "#FF7F50" },
  { texto: "Músico", cor: "#32CD32" },
  { texto: "Criativo", cor: "#FFD700" },
  { texto: "Comunicativo", cor: "#afffff" },
  { texto: "Focado", cor: "#07bfe0" },
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
      {/* Home */}
      <section className="home animate__animated animate__fadeInLeft">
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
            Software Developer <span className="homeProfissaoSpan">| </span>
            UI/UX Designer <br />
            Brasil, Brasília
          </p>
          <br />
          <br />
          <div className="card">
            <a
              className="socialContainer containerOne"
              href="https://www.instagram.com/guito.dev/"
              rel="noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                {" "}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
              </svg>
            </a>

            <a
              className="socialContainer containerTwo"
              href="https://github.com/GuitoDev"
              rel="noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
                {" "}
                <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>{" "}
              </svg>{" "}
            </a>

            <a
              className="socialContainer containerThree"
              href="https://www.linkedin.com/in/guilhermealvesbr/"
              rel="noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a
              className="socialContainer containerFour"
              href="https://api.whatsapp.com/send?phone=5561992478344&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
              rel="noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
              </svg>
            </a>
          </div>
        </div>

        {/* Sobre */}
        <section className="sobre">
          <h3 className="pages">Sobre</h3>
          <h1 className="titulo">Como tudo começou</h1>
          <div className="sobreTxt">
            <p>Minha trajetória na área de tecnologia</p>
            <p>começou aos 12 anos, quando escrevi</p>
            <p>meu primeiro Hello World em Java.</p>
            <p> Desde então, me encantei com o </p>
            <p>desenvolvimento de software. Alem de</p>
            <p>musico eu já trabalhei como UI </p>
            <p>Designer, criando interfaces bonitas.</p>
            <p>Atualmente, sou desenvolvedor Frontend</p>
            <p>e trabalho como freelancer há 2 anos.</p>
            <br />
            <h3 className="pages skills">Hard Skills</h3>
            <div className="sobreDivLogos">
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="javascript--v1"
              />
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/plasticine/100/react.png"
                alt="react"
              />
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/fluency/48/typescript--v1.png"
                alt="typescript--v1"
              />
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/color-glass/48/bootstrap.png"
                alt="bootstrap"
              />
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/color/48/figma--v1.png"
                alt="figma--v1"
              />
              <img
                className="sobreLogos"
                width="50"
                height="50"
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
                alt="node-js"
              />
            </div>
          </div>
          <div className="sobreDivImg">
            <img
              className="sobreImg"
              src="public\images\photo git (1).jpeg"
              alt="Descrição da imagem"
            />
            <br />
            <br />
            <button className="sobreBtn"><a  className="sobreBtn1" href="https://drive.google.com/file/d/1SVxynS0eG9VqS3C7XcnPJ6WDNPkoy7pS/view?usp=sharing" target="_blank" rel="noreferrer">Download CV</a></button>
          </div>
        </section>

        {/* Projetos */}
        <section className="expe">
          <h3 className="pages">Projetos</h3>
          <h1 className="titulo">Meu Protifólio</h1>

          <div className="Album">
            <div className="projDivAlbum">
              <img
                className="projImg"
                src="public\images\machuPicchu.webp"
                alt="Descrição da imagem"
              />
              <div className="projDescricao">
                <p>Descrição da Foto</p>
                <a
                  className="projBotao"
                  href="link-da-foto.html"
                  target="_blank"
                >
                  Ver Foto
                </a>
              </div>
            </div>
            <div className="projDivAlbum">
              <img
                className="projImg"
                src="public\images\motorv8.webp"
                alt="Descrição da imagem"
              />
              <div className="projDescricao">
                <p>Descrição da Foto</p>
                <a
                  className="projBotao"
                  href="link-da-foto.html"
                  target="_blank"
                >
                  Ver Foto
                </a>
              </div>
            </div>
            <div className="projDivAlbum">
              <img
                className="projImg"
                src="public\images\cinego.webp"
                alt="Descrição da imagem"
              />
              <div className="projDescricao">
                <p>Descrição da Foto</p>
                <a
                  className="projBotao"
                  href="link-da-foto.html"
                  target="_blank"
                >
                  Ver Foto
                </a>
              </div>
            </div>
            <div className="projDivAlbum lastFoto">
              <img
                className="projImg"
                src="public\images\codecafe.webp"
                alt="Descrição da imagem"
              />
              <div className="projDescricao">
                <p>Descrição da Foto</p>
                <a
                  className="projBotao"
                  href="link-da-foto.html"
                  target="_blank"
                >
                  Ver Foto
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section geral */}
      </section>
    </>
  );
}

export default Home;
