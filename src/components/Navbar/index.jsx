import "./Navbar.css";

function Navbar() {
  return (
    <>
     <header>
         <nav className="navbar">
        <div className="logo">
          <img src="public\images\logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
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
      </nav>
     </header>
    </>
  );
}

export default Navbar;
