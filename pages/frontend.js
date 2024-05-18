import Link from "next/link";
import styles from "./pages.module.css";
import Home from "pages";
function Frontend() {
  return (
    <>
      <h1>Aulas de Front</h1>
      <section className={styles.section}>
        <article>
          <h2>Introdução as CSS</h2>
          <span>
            Introdução as CSS
          </span>
          <a
            href="files/front-aula003.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        
        <Link href="/"> Aulas de UX-UI</Link>
      </section>
    </>
  );
}
export default Frontend;
