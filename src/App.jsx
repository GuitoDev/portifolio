import { useState, useEffect } from "react"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true); //loading

  useEffect(() => {
    // Simula um atraso de 4 segundos antes de desativar o loader
    setTimeout(() => {
      setLoading(false); // Desativa o loader após 4 segundos
    }, 2000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div className="loader">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <div className="content">
            <Navbar />
            <Home />
            <Sobre />
            <Projetos />
            <Contatos />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
