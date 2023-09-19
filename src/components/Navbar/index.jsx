import "./Navbar.css";
import "animate.css";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  
  return (
    <>
      <header>
        <nav className={`navbar animate__animated animate__fadeInDown`}>
          <div className="logo">
            <a href="/">
              <img src="https://i.imgur.com/MldCmf7.png" alt="Logo" />
            </a>
          </div>
          <ul className={`nav-menu ${isActive ? "active" : ""}`}>
            <li className="nav-item">
              <a className="nav-links" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="#">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="#">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="#">
                Contato
              </a>
            </li>
          </ul>
          <div
            className={`burger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;