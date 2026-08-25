import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import { StartScreen } from "./components/StartScreen";
import { useState } from "react";
// import { wordsList } from "./data/words";

import "./App.css";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
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
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === 'game' && <Game/>}
      {gameStage === 'end' && <GameOver/>}
    </div>
  );
}
