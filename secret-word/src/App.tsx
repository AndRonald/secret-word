import { Game } from "./components/Game";
import { GameOver } from "./components/GameOver";
import { StartScreen } from "./components/StartScreen";
import { Container } from "./components/Container";
import { useState } from "react";
// import { wordsList } from "./data/words";

import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

import "./styles/themes.css";
import "./styles/global.css";

const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "end" },
];

// const guessesQty: number = 0;

export function App() {
  const [gameStage] = useState<string>(stages[0].name);
  // const [words] = useState(wordsList);
  // const [pickedWord, setPickedWord] = useState<string | null>("");
  // const [pickedCategory, setPickedCategory] = useState<string | null>("");
  // const [letters, setLetters] = useState<string[]>([''])

  // const [guessedLetters, setGuessedLetters] = useState<string[]>(['']);
  // const [wrongLetters, setWrongLetters] = useState<[]>()
  // const [guesses, setGuesses] = useState<number>(guessesQty)

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        {gameStage === "start" && <StartScreen />}
        {gameStage === "game" && <Game />}
        {gameStage === "end" && <GameOver />}
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
