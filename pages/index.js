import Link from "next/link";
import styles from "./pages.module.css";

function Home() {
  return (
    <>
    <h1>Disciplinas</h1>
    <section className={styles.section}>
      <article>
        <h2>Técnico de Ensino Médio em Ciência de dados</h2>
        <span>
          O curso técnico de ensino médio em ciência de dados tem como objetivo formar profissionais capazes de coletar, organizar, analisar e interpretar dados, utilizando ferramentas e técnicas de estatística, matemática e computação. O curso tem duração de 3 anos e é oferecido na modalidade presencial. O curso é dividido em 3 módulos, cada módulo tem duração de 1 ano. O curso é oferecido no período noturno.
        </span>
        <Link href="/ciencia-de-dados">Aulas</Link>
      </article>
      <article>
        <h2>Backend</h2>
        <span>Desenvolvimento de aplicações e serviços</span>
        <Link href="/backend">Aulas</Link>
      </article>
      <article>
        <h2>Frontend</h2>
        <span>Desenvolvimento de interfaces web</span>
        <Link href="/frontend">Aulas</Link>
      </article>
      <article>
        <h2>UX/UI</h2>
        <span>
          Design de interfaces e experiências de usuário, focando na usabilidade,
          acessibilidade, e consistência
        </span>
        <Link href="/ux-ui">Aulas</Link>
      </article>
    </section>
    
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
        <article>
          <h2>Importância do UX/UI</h2>
          <span>
            Uma boa UX/UI têm muito impacto no sucesso de um produto, físico ou
            digital, conhecer os princípios e importância de considerar pontos
            que podem indicar o sucesso ou queda de um produto
          </span>
          <a
            href="files/ux-ui-aula003.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            slides
          </a>
        </article>
        <article>
          <h2>Design e prototipagem: a arte de construir sistemas</h2>
          <span>
            Construir bons sistemas é um processo de prática. Uma combinação de
            conhecimento, inspiração, ferramentas e ação. Começamos a trilhar a
            trilha do conhecimento, vamos seguir nessa trilha, mas agora pela
            estrada das ferramentas.
          </span>
          <a
            href="files/ux-ui-aula004.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            slides
          </a>
        </article>
        <article>
          <h2>Usabilidade e interação</h2>
          <span>Compreensão das necessidades do usuário</span>
          <a
            href="files/ux-ui-aula005.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            slides
          </a>
        </article>
        <article>
          <h2>Sobre o Trabalho de Conclusão do Curso</h2>
          <span>
            Para a concluir o curso técnico deve-se fazer além das atividades um
            projeto que envolva o uso dos conhecimentos tratados nas matérias
            tecnicas como Frontend e UX-UI. Conte-me um pouco sobre o que vão
            fazer para que possa entender o que irão fazer.
          </span>
          <a
            href="https://forms.gle/qxSL7Y56dhb8fMHh9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formulário sobre o Projeto de conclusão do curso
          </a>
        </article>
        <article>
          <h2>Sobre a aulas de UX-UI</h2>
          <span>
            Formulário para dúvidas, dificuldades e sugestões sobre a matéria de
            UX e UI.
          </span>
          <a
            href="https://forms.gle/pXwtSeZ6YbnAg2Nw7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dúvidas, dificuldades e sugestões
          </a>
        </article>
        <Link href="/frontend">Aulas de Frontend</Link>
      </section>
    </>
  );
}
export default Home;
