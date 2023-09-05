import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <h1>Hello World!!</h1>
      <div>
        <FontAwesomeIcon icon="check-square" />
        Seu café está <FontAwesomeIcon icon="coffee" /> quente e pronto!
      </div>
    </>
  );
}

export default App;
