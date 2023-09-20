import "./Sobre.css";
import "animate.css";

function Sobre() {
  return (
    <>
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
            src="https://i.imgur.com/GuUklox.jpg"
            alt="Descrição da imagem"
          />
          <br />
          <br />
          <button className="sobreBtn">
            <a
              className="sobreBtn1"
              href="https://drive.google.com/file/d/1Un9kLuEBbYM5DRoa0CWMh3CxpOvanq2V/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Sobre;
