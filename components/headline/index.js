import Image from "next/image";
import bro from "public/images/bro.svg";

import styles from "./headline.module.css";

export default function HeadLine() {
  return (
    <div className={styles.headline}>
      <div className={styles.container}>
        <h1>Olá, Eu sou Robson</h1>
        <article className={styles.text}>
          <h2>Desenvolvedor Fullstack e entusiasta de inovações</h2>
          <p>
            Mais de 6 anos de experiência na indústria de tecnologia. Sou
            especialista na construção de aplicações web e mobile inovadoras
            usando tecnologias como React, React Native e Node.js.
          </p>
        </article>
        <div className={styles.cta}>
          <button className={styles.ctaPrimary}> Meu cúrriculo </button>
          <button className={styles.ctaSecondary}> Entre em contato </button>
        </div>
      </div>
      <Image src={bro} alt="persona" />
    </div>
  );
}
