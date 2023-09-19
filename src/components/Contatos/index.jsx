import "./Contatos.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contatos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name == "" || email == "" || message == "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_2i8fmsb",
        "template_j7m4wd9",
        templateParams,
        "F0IC7AOACuhIQi0Hz"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err);
        }
      );
  }
  return (
    <>
      <section className="contatos">
        <div className="container">
          <h3 className="pages">Contatos</h3>
          <h1 className="titulo">Como posso te ajudar?</h1>
          <p>Entre em contato para te ajudar a esclarecer suas ideias e marcar um briefing.</p>

          <form className="form" onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="cttbutton" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
}
export default Contatos;
