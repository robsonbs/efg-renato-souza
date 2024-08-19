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
      <p>Váriáveis são como caixas capazes de guardar algo dentro:</p>
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
        {" "}
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
        {" "}
        Permite guardar conjuntos de valores, como um conjunto de valores. Ex.:
        Temperaturas dos últimos dias.
      </p>
      <Link href="/frontend/">Aulas Frontend</Link>
    </>
  );
}

export default Introducao;
