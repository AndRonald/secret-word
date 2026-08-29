import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

import styles from "./styles.module.css";

type StartScreenProps = {
  startGame: () => void;
};

export function StartScreen({ startGame }: StartScreenProps) {
  function handleChangeGame() {
    startGame();
  }
  return (
    <div className={styles.container}>
      <p>Clique no botão abaixo para começar a jogar</p>
      <DefaultButton children={<PlayCircleIcon />} onClick={handleChangeGame} />
    </div>
  );
}
