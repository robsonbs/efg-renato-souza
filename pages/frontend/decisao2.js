import React from "react";

const DecisionStructures = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Estruturas de Decisão em JavaScript</h1>

      <h2>Introdução</h2>
      <p>
        Quando programamos, muitas vezes precisamos que nosso código tome
        decisões, como &quot;se isso for verdadeiro, faça isso; caso contrário,
        faça outra coisa.&quot; Essas decisões são feitas usando{" "}
        <strong>estruturas de decisão</strong>. Em JavaScript, as principais
        estruturas de decisão são <code>if</code>, <code>else</code>, e{" "}
        <code>else if</code>. Elas nos permitem controlar o fluxo do programa
        com base em condições específicas.
      </p>

      <h2>
        <code>if</code> e <code>else</code>
      </h2>
      <p>
        A estrutura <code>if</code> verifica se uma condição é verdadeira. Se
        for, o código dentro do bloco <code>if</code> é executado. Caso
        contrário, podemos usar o <code>else</code> para executar um código
        diferente.
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
          {`if (condicao) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
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
          {`let idade = 17;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}`}
        </code>
      </pre>

      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          Se <code>idade</code> for maior ou igual a 18, a mensagem &quot;Você é
          maior de idade.&quot; é exibida.
        </li>
        <li>
          Se <code>idade</code> for menor que 18, a mensagem &quot;Você é menor
          de idade.&quot; aparece.
        </li>
      </ul>

      <h2>
        <code>else if</code>
      </h2>
      <p>
        Se você precisa verificar várias condições, pode usar{" "}
        <code>else if</code> entre o <code>if</code> e o <code>else</code>. Isso
        permite que o programa escolha entre mais de duas opções.
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
          {`if (condicao1) {
  // Código a ser executado se a condicao1 for verdadeira
} else if (condicao2) {
  // Código a ser executado se a condicao2 for verdadeira
} else {
  // Código a ser executado se nenhuma das condições anteriores for verdadeira
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
          {`let nota = 85;

if (nota >= 90) {
  console.log("Você tirou um A!");
} else if (nota >= 80) {
  console.log("Você tirou um B!");
} else if (nota >= 70) {
  console.log("Você tirou um C!");
} else {
  console.log("Você precisa estudar mais.");
}`}
        </code>
      </pre>

      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          Dependendo da <code>nota</code>, uma mensagem diferente é exibida,
          mostrando como a decisão do programa muda com base nos dados.
        </li>
      </ul>

      <h2>Operadores Lógicos</h2>
      <p>
        Às vezes, você quer combinar várias condições em uma única decisão. É aí
        que entram os operadores lógicos:
      </p>
      <ul>
        <li>
          <strong>
            <code>&&</code> (E lógico)
          </strong>
          : Todas as condições devem ser verdadeiras.
        </li>
        <li>
          <strong>
            <code>||</code> (OU lógico)
          </strong>
          : Pelo menos uma das condições deve ser verdadeira.
        </li>
        <li>
          <strong>
            <code>!</code> (Não lógico)
          </strong>
          : Inverte o valor da condição (verdadeiro se torna falso, e
          vice-versa).
        </li>
      </ul>

      <h3>
        Exemplo com <code>&&</code>
      </h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}`}
        </code>
      </pre>

      <h3>
        Exemplo com <code>||</code>
      </h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Você pode fazer a compra.");
} else {
  console.log("Você não pode fazer a compra.");
}`}
        </code>
      </pre>

      <h3>
        Exemplo com <code>!</code>
      </h3>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`let estaChovendo = false;

if (!estaChovendo) {
  console.log("Você pode sair sem guarda-chuva.");
} else {
  console.log("Melhor levar um guarda-chuva.");
}`}
        </code>
      </pre>

      <h2>Conclusão</h2>
      <p>
        As estruturas de decisão são ferramentas poderosas que permitem ao seu
        código se adaptar a diferentes situações. Com <code>if</code>,{" "}
        <code>else</code>, <code>else if</code>, e operadores lógicos, você pode
        criar programas que tomam decisões inteligentes com base em condições
        dinâmicas.
      </p>
      <p>
        <strong>Agora é sua vez!</strong> Experimente criar suas próprias
        estruturas de decisão em JavaScript. Veja como elas afetam o fluxo do
        seu programa e tente resolver problemas reais usando essas ferramentas.
        A prática é o melhor caminho para o aprendizado!
      </p>
    </div>
  );
};

export default DecisionStructures;
