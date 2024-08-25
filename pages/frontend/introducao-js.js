import Link from "next/link";

function Introducao() {
  return (
    <>
      <h1>Introdução ao JavaScript</h1>
      <p>
        JavaScript(JS) é uma linguagem de programação para web(internet).
        Programar é dar ordens ao computador. Damos ordems ao computador falando
        de forma que ele consiga entender, ou seja, usamos uma linguagem:
        linguagem de programação. JS é uma linguagem de alto nível e
        interpretada.
      </p>
      <p>
        Alto nível por ter uma sintaxe mais próxima da linguagem comum (falada,
        escrita) do que da linguagem de máquina (bits 0&apos;s e 1&apos;s).
        Interpretada pois o computador &quot;lê&quot; e &quot;transforma&quot; o
        conteúdo em zeros e uns para que o computador possa fazer o que foi
        ordenado.
      </p>
      <p>
        Na linguagem JS cada linha representa uma instrução, ou ordem. Cada
        linha é lida, transformada para 0&apos;s ou 1&apos;s e então executada
        pelo computador.
      </p>
      <h2>Variáveis</h2>
      <p>Variáveis são como caixas capazes de guardar algo dentro:</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Grtqa7JGa5M?si=deUFqb9QIXtwMT6a"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        Em JS podemos criar variáveis de duas maneiras, usando as palavras let e
        const, como em:
      </p>
      <pre>
        <code>
          let idade = 18 // inteiro <br />
          const PI = 3.14 // decimal
        </code>
      </pre>
      <p>
        A diferença entre as duas é que const é usando para algo
        &quot;constante&quot;, que não muda e let para algo que pode mudar
        durante a execução. Curiosidade: let vem da expressão &quot;let it
        change&quot;(Deixe isso mudar).
      </p>
      <h2>Tipos de dados</h2>
      <h3>Texto (String)</h3>
      <p> Existem, basicamente, três maneiras de criar textos em JS:</p>
      <ul>
        <li>
          Utilizando aspas simples (&apos;) como em &apos;Olá, mundo!&apos;;
        </li>
        <li>
          Utilizando aspas duplas (&quot;) como em &quot;Olá, mundo!&quot;;
        </li>
        <li>Utilizando o acento grave(`) como em `{`Boa tarde, \${nome}`}`;</li>
      </ul>

      <h3>Inteiro (Integer)</h3>
      <p>
        São números que não tem partes quebradas, como por exemplo quantidade de
        pessoas que cabem em um local, temperaturas. Podem ser positivos ou
        negativos. Por exemplo, 206(pessoas),-4(°C)
      </p>

      <h3>Decimais (Float)</h3>
      <p>
        São números que podem ter valores após a virgula, como preços, pesos,
        distâncias: (R$)9.99, 62.5(KG), 13.3(KM).{" "}
      </p>

      <h3>Boleano (Boolean)</h3>
      <p>É o tipo que indica uma valor lógico: verdadeiro ou falso;</p>

      <h3>Undefined</h3>
      <p>
        Algo não definido ainda, normalmente indica um erro no uso da variável.
      </p>

      <h3>Null</h3>
      <p>Variável não instânciada, ou vazia.</p>

      <h3>Vetor/Matriz (Array)</h3>
      <p>
        Permite guardar conjuntos de valores, como um conjunto de valores. Ex.:
        Temperaturas dos últimos dias.
      </p>
      <h2>Antes de continuarmos: Fluxogramas - vendo os caminhos do script</h2>
      <p>
        Os fluxogramas ajudam a descrever as etapas de um processo em ordem
        sequencial usando apenas formas, linhas e setas.
      </p>
      <h3>O que é um fluxograma?</h3>
      <p>
        Um fluxograma é um tipo de diagrama que explica visualmente um processo
        ou fluxo de trabalho (workflow), por isso também é chamado de diagrama
        de fluxo. Usando símbolos e definições padronizados, os fluxogramas
        descrevem visualmente as diferentes etapas e decisões de um processo.
        Esses diagramas são populares em diversas áreas há muitos anos - desde
        engenharia e educação até programação de softwares e gerenciamento de
        projetos.
      </p>
      <p>
        Os fluxogramas são úteis para a comunicação desde os processos mais
        simples até mesmo os mais complexos, por isso são incrivelmente
        dinâmicos e versáteis. Ao olhar para um fluxograma, um espectador deve
        ser capaz de obter uma visão geral de um processo facilmente.
      </p>
      <p>
        Normalmente, um fluxograma é desenhado usando vários símbolos, cada um
        representando uma etapa diferente dentro de uma sequência ou processo.
        Geralmente usamos uma variedade de elementos e formas para montar um
        fluxograma como: ações, materiais, serviços, entradas e saídas. Se você
        tem uma decisão que precisa ser tomada e não tem certeza do processo,
        usar um fluxograma pode simplificar muito a sua tomada de decisão.
      </p>
      <h3>Símbolos de fluxogramas</h3>
      <p>
        Existem notações e elementos padrões que são usados na maior parte dos
        fluxogramas. Cada símbolo representa uma ação ou etapa diferente dentro
        de uma sequência ou processo. Abaixo destacamos os símbolos mais comuns
        usados em fluxogramas.
      </p>
      <ul>
        <li>
          <strong>Oval:</strong> Um elemento oval em um diagrama de fluxo
          representa o terminal ou terminador. Ou seja, indica o início e a
          parada dentro de uma sequência.
        </li>
        <li>
          <strong>Paralelogramas:</strong> O paralelograma indica uma entrada ou
          saída (&quot;input&quot; ou &quot;output&quot;).
        </li>
        <li>
          <strong>Retângulo:</strong> Os retângulos indicam ações ou o processo
          em si.
        </li>
        <li>
          <strong>Diamantes:</strong> Diamantes indicam as decisões que precisam
          ser tomadas. Estes geralmente resultam em dois caminhos alternativos
          com base na decisão tomada.
        </li>
        <li>
          <strong>Linhas de fluxo ou conectoras:</strong> As linhas de fluxo e
          flechas representam as direções tomadas na sequência.
        </li>
      </ul>
      <p>
        <strong>Acompanhe a imagem e os elementos citados a pouco:</strong>
      </p>
      <img src="/files/fluxograma.png" alt="Fluxograma" />
      <br />
      <h4>Código:</h4>
      <div
        dir="ltr"
        className="sandpack sandpack--codeblock rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg my-8"
        style={{ contain: "content" }}
      >
        <div className="sp-wrapper">
          <div className="sp-stack">
            <div className="sp-code-editor">
              <pre className="sp-cm sp-pristine sp-javascript flex align-start">
                <code className="sp-pre-placeholder grow-[2]">
                  &lt;script&gt; <br />
                  <span>
                    alert(&quot;Bem vindo, isso foi escrito a partir de
                    JS&quot;)
                  </span>
                  <br />
                  &lt;script&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <h4>Explicando:</h4>
      <p>
        o comando(tag) <em style={{ color: "#FF204E" }}>script</em> cria o
        espaço que pode receber os códigos JS.{" "}
        <em style={{ color: "#FF204E" }}>alert</em> é um comando(função) que
        abre uma caixa com o conteúdo dentro dos parênteses.
      </p>
      <p>outra maneira é a seguinte:</p>
      <h4>Código:</h4>
      <div
        dir="ltr"
        className="sandpack sandpack--codeblock rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg my-8"
        style={{ contain: "content" }}
      >
        <div className="sp-wrapper">
          <div className="sp-stack">
            <div className="sp-code-editor">
              <pre className="sp-cm sp-pristine sp-javascript flex align-start">
                <code className="sp-pre-placeholder grow-[2]">
                  &lt;script&gt; <br />
                  <span>
                    document.write(&quot;Bem vindo, isso foi escrito a partir de
                    JS&quot;)
                  </span>
                  <br />
                  &lt;script&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <h4>Explicando:</h4>
      <p>
        o comando(tag) <em style={{ color: "#FF204E" }}>script</em> cria o
        espaço que pode receber os códigos JS.{" "}
        <em style={{ color: "#FF204E" }}>write</em> é um comando(função) que
        escreve diretamente na página o conteúdo dentro dos parênteses, onde{" "}
        <em style={{ color: "#FF204E" }}>document</em> representa a página da
        internet carregada. Nesse caso, o comando write é algo que existe
        &quot;dentro&quot; de document, por isso que escrevemos{" "}
        <em style={{ color: "#FF204E" }}>document.write</em> para conseguir
        escrever na página.
      </p>
      <p>
        Ou seja, <em style={{ color: "#FF204E" }}>alert</em> é uma função da
        linguagem(JS). E <em style={{ color: "#FF204E" }}>document.write</em> é
        uma função ligado a página carregada, isso é uma das coisas
        interessantes no JS.
      </p>
      <br />
      <br />
      <Link href="/frontend/">Aulas Frontend</Link>
    </>
  );
}

export default Introducao;
