import "./Projetos.css";

function Projetos() {
  return (
    <>
      {/* Projetos */}
      <section className="expe">
        <h3 className="pages">Projetos</h3>
        <h1 className="titulo">Meu Protifólio</h1>

        {/* Criar Slide dos projetos seguindo esse padrao */}
        <div className="Album">
          <div className="projDivAlbum">
            <div className="biulding"></div>
            <p>Em construção...</p>
            {/* <img
                className="projImg"
                src=""
                alt="Descrição da imagem"
              />
              <div className="projDescricao">
                <p>Descrição da Foto</p>
                <a
                  className="projBotao"
                  href="link-da-foto.html"
                  target="_blank"
                >
                  Ver Foto
                </a>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
