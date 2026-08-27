export function Game() {
  return (
    <div>
      <p>
        <span>Pontuação 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3>
        Dica sobre a palavra: <span>DICA</span>
      </h3>
      <p>Você ainda tem "number" tentativas</p>
      <div>
        <p>letras</p>
      </div>
      <div>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div>
        <p>Letras já utilizadas:</p>
      </div>
    </div>
  );
}
