import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
