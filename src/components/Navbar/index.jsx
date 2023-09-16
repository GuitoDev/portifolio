import "./Navbar.css";
import "animate.css";

function Navbar() {
  return (
    <>
      {/* Navbar Desktop*/}
      <header>
        <nav className="navbar animate__animated animate__fadeInDown">
          <div className="logo">
            <a href="/">
              <img
                src="public\images\logo.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </nav>

        {/* Versao Mobile */}
      </header>
    </>
  );
}

export default Navbar;
