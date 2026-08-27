import { EarthIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="">
        <span>SECRETW<EarthIcon className={styles.logoteste}/>RD</span>
      </a>
    </div>
  );
}
