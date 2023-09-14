import "./Sobre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sobre() {
  return (
    <>
      <div className="sobreGeral">
        <h3>Sobre</h3>
        <h1>Como tudo começou</h1>
        <div>
          <img className="sobreDrum" src="public\images\photodrum.jpg"></img>

          <div>
            <p> Minha trajetória na área de tecnologia</p>
            <p>começou aos 12 anos, quando escrevi </p>
            <p>meu primeiro Hello World em Java.</p>
            <p>Desde então, me encantei com o </p>
            <p>desenvolvimento de software. Alem de </p>
            <p>musico eu já trabalhei como UI </p>
            <p>Designer, criando interfaces bonitas.</p>
            <p>Atualmente, sou desenvolvedor Frontend</p>
            <p>e trabalho como freelancer há 2 anos.</p>
            <br />
            <br />
            <h3>Hard Skills</h3>
            <FontAwesomeIcon icon="fa-brands fa-square-js" size="2xl" style={{color: "#ffdd00",}} />
            <FontAwesomeIcon icon="fa-brands fa-react" size="2xl" style={{color: "#00bfff",}} />
            <FontAwesomeIcon icon="fa-brands fa-bootstrap" size="2xl" style={{color: "#3600fa",}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
