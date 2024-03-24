const Home = () => {
  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título do evento"
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date" id="date" />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Insira a URL da imagem"
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input type="color" name="color" id="color" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
