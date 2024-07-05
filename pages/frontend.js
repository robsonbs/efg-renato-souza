import Link from "next/link";
import styles from "./pages.module.css";
function Frontend() {
  return (
    <>
      <h1>Aulas de Frontend</h1>
      <section className={styles.section}>
        <article>
          <h2>Introdução as CSS</h2>
          <span>Introdução as CSS</span>
          <a
            href="files/front-aula003.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Página de receita</h2>
          <span>
            Vamos combinar os conhecimentos, hora de misturar Frontend e UI.
          </span>
          Modelo:{" "}
          <a
            href="https://www.figma.com/community/file/1360315130061454535/pagina-de-receita"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design Figma
          </a>{" "}
          Desafio:{" "}
          <a
            href="https://www.figma.com/design/TXbGJm53NFoAjA0cadFL0v/Receita-Junina-%E2%80%A2-Desafio-26-(Community)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Referência Figma
          </a>
          Iniciando as CSS:{" "}
          <a
            href="https://youtu.be/XkbCeZ8M2zw"
            target="_blank"
            rel="noreferrer"
          >
            Página de receita - Aula 4
          </a>
          Avaliação:{" "}
          <a
            href="https://kahoot.it/challenge/01664726?challenge-id=a6277a3b-9978-4169-bcad-cbaa24acedab_1718734412266"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kahoot
          </a>
        </article>
        <Link href="/"> Aulas de UX-UI</Link>
      </section>
    </>
  );
}
export default Frontend;
