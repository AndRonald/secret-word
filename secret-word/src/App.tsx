import "./App.css";

export function App() {
  return (
    <div className="App">
      <div>
        {/* start */}
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button>Começar o jogo</button>
      </div>
      {/* game over */}
      <div>
        <h2>Fim de jogo!</h2>
        <h2>
          A sua pontuação foi: <span>00</span>
        </h2>
        <button>Jogar Novamente</button>
      </div>
      {/* game */}
    </div>
  );
}
