import { useState } from "react";
import "./Navbar.css";
import "../Sobre/index"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const [ setClick ] = useState(false)
  const closeMenu = () => setClick(false)

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src="https://i.imgur.com/MldCmf7.png" alt="Logo" />
        </a>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link" onClick={closeMenu}>
            Sobre
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contato
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>
      </div>
    </nav>
  );
}

export default Navbar;
