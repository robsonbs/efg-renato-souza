import React from "react";

const RepetitionStructures = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Estruturas de Repetição em JavaScript</h1>

      <h2>Introdução</h2>
      <p>
        Em programação, muitas vezes precisamos repetir a execução de um bloco
        de código várias vezes. Para fazer isso de maneira eficiente, usamos{" "}
        <strong>estruturas de repetição</strong>. Em JavaScript, as estruturas
        de repetição mais comuns são <code>for</code>, <code>while</code>, e{" "}
        <code>do...while</code>.
      </p>

      <h2>
        <code>for</code>
      </h2>
      <p>
        A estrutura <code>for</code> é usada quando sabemos antecipadamente
        quantas vezes queremos repetir um bloco de código.
      </p>

      <h3>Sintaxe</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`for (inicialização; condição; incremento) {
  // Código a ser repetido
}`}
        </code>
      </pre>

      <h3>Exemplo</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}`}
        </code>
      </pre>

      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          A variável <code>i</code> é inicializada com o valor 0.
        </li>
        <li>
          O bloco de código dentro do <code>for</code> é executado enquanto a
          condição <code>i &lt; 5</code> for verdadeira.
        </li>
        <li>
          Após cada iteração, <code>i</code> é incrementado em 1.
        </li>
      </ul>

      <h2>
        <code>while</code>
      </h2>
      <p>
        A estrutura <code>while</code> é usada quando queremos repetir um bloco
        de código enquanto uma condição for verdadeira.
      </p>

      <h3>Sintaxe</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`while (condição) {
  // Código a ser repetido
}`}
        </code>
      </pre>

      <h3>Exemplo</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`let i = 0;

while (i < 5) {
  console.log("Número: " + i);
  i++;
}`}
        </code>
      </pre>

      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          A variável <code>i</code> é inicializada com o valor 0.
        </li>
        <li>
          O bloco de código dentro do <code>while</code> é executado enquanto a
          condição <code>i &lt; 5</code> for verdadeira.
        </li>
        <li>
          Após cada iteração, <code>i</code> é incrementado em 1.
        </li>
      </ul>

      <h2>
        <code>do...while</code>
      </h2>
      <p>
        A estrutura <code>do...while</code> é semelhante ao <code>while</code>,
        mas a condição é verificada depois que o bloco de código é executado.
        Isso garante que o código seja executado pelo menos uma vez.
      </p>

      <h3>Sintaxe</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`do {
  // Código a ser repetido
} while (condição);`}
        </code>
      </pre>

      <h3>Exemplo</h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`let i = 0;

do {
  console.log("Número: " + i);
  i++;
} while (i < 5);`}
        </code>
      </pre>

      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          A variável <code>i</code> é inicializada com o valor 0.
        </li>
        <li>
          O bloco de código dentro do <code>do</code> é executado uma vez, e
          depois a condição <code>i &lt; 5</code> é verificada.
        </li>
        <li>
          Se a condição for verdadeira, o bloco é repetido; se não, o loop
          termina.
        </li>
      </ul>

      <h2>Conclusão</h2>
      <p>
        As estruturas de repetição são ferramentas poderosas que permitem ao seu
        código executar ações repetidas com eficiência. Com <code>for</code>,{" "}
        <code>while</code>, e <code>do...while</code>, você pode controlar o
        fluxo do seu programa e realizar tarefas repetitivas de maneira fácil e
        organizada.
      </p>
      <p>
        <strong>Agora é sua vez!</strong> Experimente criar suas próprias
        estruturas de repetição em JavaScript. Veja como elas afetam o fluxo do
        seu programa e tente resolver problemas reais usando essas ferramentas.
        A prática é o melhor caminho para o aprendizado!
      </p>
    </div>
  );
};

export default RepetitionStructures;
