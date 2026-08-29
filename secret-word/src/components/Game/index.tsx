import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import styles from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";

type GameProps = {
  wrongLetters: string[];
  guessedLetters: string[];
  letters: string[];
  pickedCategory: string;
  score: number;
  guesses: number;
  verifyLetter: (letter: string) => void;
};

export function Game({
  guessedLetters,
  letters,
  wrongLetters,
  pickedCategory,
  score,
  guesses,
  verifyLetter,
}: GameProps) {
  const [letter, setLetter] = useState<string>("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleChangeLetters = (e: ChangeEvent<HTMLInputElement>) => {
    setLetter(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current?.focus()
  };


  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory.toUpperCase()}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          ),
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={handleChangeLetters}
            value={letter}
            ref={letterInputRef}
          />
          <DefaultButton children="JOGAR"/>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.length > 0 &&
          wrongLetters.map((letter, i) => <span key={i}>{letter}, </span>)}
      </div>
    </div>
  );
}
