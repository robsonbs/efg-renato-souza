import styles from "./pages.module.css";
function Home() {
  return (
    <>
      <h1>Aulas de UX/UI</h1>
      <section className={styles.section}>
        <article>
          <h2>Introdução</h2>
          <span>
            Apresentações iniciais de Interface de Usuário(UI) e Experiência do
            Usuário(UX) e os principais conceitos
          </span>
          <a
            href="files/ux-ui-aula001.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>HTML, CSS e JS</h2>
          <span>
            Técnologias que serão fundamentais para desenvolver as ideias
            criadas utilizando UX/UI. Exercícios práticos
          </span>
          <a
            href="files/ux-ui-aula002.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Estudo de interfaces</h2>
          <span>
            Escolha um app, serviço online ou site e descreva conforme
            solicitado no roteiro a seguir
          </span>
          <a
            href="files/estudo-interface.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roteiro
          </a>
        </article>
        <article>
          <h2>Introdução</h2>
          <span>
            Apresentações iniciais de Interface de Usuário(UI) e Experiência do
            Usuário(UX) e os principais conceitos
          </span>
          <a
            href="files/ux-ui-aula001.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            slides
          </a>
        </article>
        <article>
          <h2>Atividade prática online</h2>
          <span>
            Com base nas telas do documento a seguir, utilizando o figma,
            reproduza as telas selecionadas.
          </span>
          <a
            href="files/atividade-pratica-figma.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Referências
          </a>
        </article>
      </section>
    </>
  );
}
export default Home;
