import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Game } from "./components/Game";
import { Footer } from "./components/Footer";
import { GameOver } from "./components/GameOver";
import { Container } from "./components/Container";
import { StartScreen } from "./components/StartScreen";

import { useCallback, useState, useEffect } from "react";

import "./styles/themes.css";
import "./styles/global.css";

const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "end" },
];

const guessesQty: number = 0;

export function App() {
  const [gameStage, setGameStage] = useState<string>(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState<string | null>("");
  const [pickedCategory, setPickedCategory] = useState<string | null>("");
  const [letters, setLetters] = useState<string[]>([""]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([""]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([""]);
  const [guesses, setGuesses] = useState<number>(guessesQty);
  const [score, setScore] = useState<number>(0)

  const pickWordAndCategory = useCallback((): {
    word: string;
    category: string;
  } => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const categoryWords = words[category];
    const word =
      categoryWords[Math.floor(Math.random() * categoryWords.length)];

    return { word, category };
  }, [words]);

  const clearLetterStates = (): void => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  const startGame = useCallback((): void => {
    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l: string) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters?.includes(normalizedLetter)
    ) {
      return;
    }

    if (guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }

    if (letters.includes(normalizedLetter)) {
      const updatedGuessedLetters = [... guessedLetters, normalizedLetter]
      setGuessedLetters(updatedGuessedLetters);

      const uniqueLetters = [...new Set(letters)];

      if(uniqueLetters.every((char) => updatedGuessedLetters.includes(char))){
        setScore((actualScore) => actualScore + 100);
        
        startGame();
      }
      
    } else {
      const newGuesses = guesses - 1;
      setGuesses(newGuesses);

      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      if (newGuesses <= 0) {
        clearLetterStates();

        setGameStage(stages[2].name);
      }
    }
  };

  const retry = (): void => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name);
  }

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
        <Footer />
      </Container>
    </>
  );
}
