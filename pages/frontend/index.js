import Link from "next/link";
import styles from "/pages/pages.module.css";
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
        </article>
        <article>
          <h2>Iniciando as CSS:</h2>
          <a
            href="https://youtu.be/XkbCeZ8M2zw"
            target="_blank"
            rel="noreferrer"
          >
            Página de receita - Aula 4
          </a>{" "}
          Avaliação:{" "}
          <a
            href="https://kahoot.it/challenge/01664726?challenge-id=a6277a3b-9978-4169-bcad-cbaa24acedab_1718734412266"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kahoot
          </a>
        </article>
        <hr />
        <h2>3º Bimestre</h2>
        <article>
          <h2>Introdução ao JavaScript(JS)</h2>
          Linguagem de programação para web, capaz de permitir adicionar
          interatividades e novas funções nas páginas web.
          <br />
          <a
            href="/frontend/introducao-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Lendo valores em JavaScript(JS)</h2>
          Agora que sabemos que o JS pode guardar valores, precisamos descobrir
          maneiras de passar dados para que o código possa fazer alguma coisa.
          <br />
          <a
            href="/frontend/lendo-variaveis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Escolhendo caminhos em JavaScript(JS)</h2>
          Nem só de seguir em frente é a programação, há momentos que precisamos
          escolher um caminho.
          <br />
          <a href="/frontend/decisao" target="_blank" rel="noopener noreferrer">
            Slides
          </a>
        </article>
        <article>
          <h2>Estruturas de Decisão em JavaScript</h2>
          Explorando conceitos fundamentais como if, else, e else if, o texto
          apresenta a sintaxe básica dessas estruturas, exemplificando com
          trechos de código comentados para facilitar o entendimento. Além
          disso, o artigo introduz operadores lógicos como &&, ||, e !,
          demonstrando como combiná-los para criar condições mais complexas.
          <br />
          <a
            href="/frontend/decisao2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Estruturas de repetição em JavaScript</h2>
          Descubra como utilizar os loops for, while e do...while para
          automatizar tarefas repetitivas e otimizar o fluxo de seus programas,
          com exemplos práticos e explicações passo a passo. Torne-se um mestre
          no controle de iterações e melhore suas habilidades em programação,
          explorando as nuances de cada estrutura e experimentando com desafios
          reais.
          <br />
          <a
            href="/frontend/repeticao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </article>
        <article>
          <h2>Estruturas de eventos em JavaScript</h2>
          Desvende os Segredos dos Eventos em JavaScript: Um Guia Completo para
          Entender e Implementar Eventos de Forma Eficiente! Desde os conceitos
          básicos e explora como capturar, gerenciar e manipular eventos em suas
          aplicações web. Aprenda a utilizar o modelo de eventos, a implementar
          listeners, e a lidar com propagação e delegação para criar interfaces
          interativas e responsivas. Descubra exemplos práticos em JavaScript.
          <br />
          <a href="/frontend/eventos" target="_blank" rel="noopener noreferrer">
            Slides
          </a>
        </article>
        <Link href="/"> Aulas de UX-UI</Link>
      </section>
    </>
  );
}
export default Frontend;
