type GameOverProps = {
  retry: () => void;
};

export function GameOver({ retry }: GameOverProps) {
  return (
    <div>
      <h2>Fim de Jogo!</h2>
      <h2>
        A sua pontuação foi: <span>SCORE</span>
      </h2>
      <button onClick={retry}>Jogar Novamente</button>
    </div>
  );
}
