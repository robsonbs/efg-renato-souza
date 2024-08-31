import React from "react";

const EventsInJavaScript = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Entendendo Eventos em JavaScript</h1>

      <h2>O que são eventos?</h2>
      <p>
        Em JavaScript, um <strong>evento</strong> é uma ação que ocorre no
        navegador e que pode ser capturada e manipulada pelo código. Exemplos de
        eventos incluem cliques de mouse, pressionamentos de teclas, movimentos
        do cursor, carregamento de páginas, entre outros.
      </p>

      <h2>Sintaxe Básica</h2>
      <p>
        Existem várias maneiras de adicionar eventos em JavaScript. As três
        formas mais comuns são:
      </p>

      <h3>1. Atributo HTML</h3>
      <p>
        Podemos adicionar um evento diretamente no HTML usando um atributo como{" "}
        <code>onclick</code>, <code>onmouseover</code>, etc.
      </p>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`<button onclick="alert('Botão clicado!')">Clique-me</button>`}
        </code>
      </pre>
      <p>
        <strong>Vantagem:</strong> Fácil de implementar em pequenos projetos.
      </p>
      <p>
        <strong>Desvantagem:</strong> Mistura de HTML e JavaScript, o que pode
        dificultar a manutenção.
      </p>

      <h3>2. Atributo DOM (JavaScript)</h3>
      <p>
        Podemos associar eventos diretamente a elementos do DOM usando
        JavaScript, como no exemplo abaixo:
      </p>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`const button = document.getElementById('myButton');
button.onclick = function() {
  alert('Botão clicado!');
};`}
        </code>
      </pre>
      <p>
        <strong>Vantagem:</strong> Separação clara entre HTML e JavaScript.
      </p>
      <p>
        <strong>Desvantagem:</strong> Pode se tornar difícil de gerenciar com
        muitos eventos.
      </p>

      <h3>3. Event Listener</h3>
      <p>
        A maneira mais moderna e recomendada é usar{" "}
        <code>addEventListener</code>, que nos permite adicionar múltiplos
        eventos ao mesmo elemento:
      </p>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Botão clicado!');
});`}
        </code>
      </pre>
      <p>
        <strong>Vantagem:</strong> Flexibilidade e compatibilidade com
        diferentes eventos.
      </p>
      <p>
        <strong>Desvantagem:</strong> Pode ser mais complexo para iniciantes.
      </p>

      <h2>Exemplo Prático</h2>
      <p>
        Vamos criar um exemplo onde um botão muda a cor de um parágrafo quando
        clicado:
      </p>
      <pre
        style={{
          backgroundColor: "#eee",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <code>
          {`<p id="text">Texto inicial</p>
<button id="changeColorButton">Mudar Cor</button>

<script>
  const button = document.getElementById('changeColorButton');
  const text = document.getElementById('text');

  button.addEventListener('click', function() {
    text.style.color = 'blue';
  });
</script>`}
        </code>
      </pre>
      <p>
        <strong>O que acontece aqui?</strong>
      </p>
      <ul>
        <li>
          O botão é identificado pelo ID <code>changeColorButton</code>.
        </li>
        <li>
          O parágrafo é identificado pelo ID <code>text</code>.
        </li>
        <li>
          Quando o botão é clicado, o evento altera a cor do texto para azul.
        </li>
      </ul>

      <h2>Conclusão</h2>
      <p>
        Os eventos são uma parte fundamental do desenvolvimento web interativo.
        Saber como usá-los de maneira eficaz pode transformar a maneira como
        seus usuários interagem com suas páginas.
      </p>
      <p>
        <strong>Agora é sua vez!</strong> Experimente adicionar eventos aos seus
        próprios projetos e veja como eles podem tornar suas páginas mais
        dinâmicas e responsivas. A prática constante ajudará você a dominar essa
        habilidade essencial!
      </p>
    </div>
  );
};

export default EventsInJavaScript;
