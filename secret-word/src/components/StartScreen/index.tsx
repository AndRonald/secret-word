import styles from './styles.module.css'

import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from 'lucide-react';

export function StartScreen () {
    return(
        <div className={styles.container}>
            <p>Clique no botão abaixo para começar a jogar</p>
            <DefaultButton children={<PlayCircleIcon/>}/>
        </div>
    )
} 