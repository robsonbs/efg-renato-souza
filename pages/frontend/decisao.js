import Link from "next/link";

function Decisoes() {
  return (
    <>
      <h1>Escolhendo caminhos em JavaScript</h1>
      <p>
        Agora que sabemos criar espaços na memória e colocar algo usando o{" "}
        <em style={{ color: "#FF204E" }}>prompt</em>, vamos começar a escolher
        caminhos a partir da solução de perguntas. Na programação chamamos isso
        de programação condicional, ou seja, baseado em uma condição -
        verdadeiro ou falso - o programa terá comportamentos diferentes. Isso é
        uma das coisas que fazem com que um programa possa fazer tantas coisas
        sem precisar ser reescrito a todo momento.
      </p>
      <p>
        Por exemplo, é usando a condições que conseguimos programar um script
        que diga se um número é par ou ímpar, ou se ele é primo, se uma compra
        pode ser parcelada sem juros, ou com juros e até quantas vezes, etc.
        Nisso vemos que as lojas online amam condições em seus scripts, né? Mas
        um dia chegamos lá, no momento vamos ver como podemos escrever
        condições:
      </p>
      <h2>Se...então</h2>
      <p>
        Quando falamos de condicionais falamos de estruturas que testam alguma
        ideia e podem responder verdadeiro(sim) ou falso(não). A primeira que
        veremos é o <em style={{ color: "#FF204E" }}>if</em> que significa se.
        Assim podemos escrever perguntas que quando resolvidas dirão qual passos
        o script fará.
      </p>
      <p>
        Vamos usar como exemplo um script que diga se um número é par ou ímpar.
        Primeiro precisamos saber, como escrever isso como algo que o{" "}
        <em style={{ color: "#FF204E" }}>if</em> possa dizer se é verdadeiro ou
        falso.
      </p>
      <ul>
        <li>Todo número dividido por 2 que resulte em resto 0 (zero) é par.</li>
        <li>Todo número dividido por 2 que resulte em resto 1 (um) é ímpar.</li>
        <li>
          O operador que faz a divisão e mostra o resultado de resto é o modulo
          (%)
        </li>
      </ul>
      <p>
        Assim, temos como primeira condição o seguinte: um &lt;número&gt; é par
        se esse &lt;número&gt; divido por 2 tem resto igual a zero. e como
        segunda condição: um &lt;número&gt; é ímpar se esse &lt;número&gt;
        divido por 2 tem resto igual a um.
      </p>
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
                    let numero <br />
                    numero = Number(prompt(&quot;Digite um número?&quot;)){" "}
                    <br />
                    {`/** Number é um comando especial que faz com que o valor dentro dos parênteses tente ser transformado em um número.*/`}{" "}
                    <br />
                    <br />
                    if(numero%2==0)
                    {"\u007B"}
                    <br />
                    document.write(`O número \${"\u007B"}numero{"\u007D"} é
                    par!`)
                    <br />
                    {"\u007d"}
                    <br />
                    <br />
                    if(numero%2==1){"\u007B"}
                    <br />
                    document.write(`O número \${"\u007B"}numero{"\u007D"} é
                    ímpar!`)
                    <br />
                    {"\u007d"}
                    <br />
                    document.write(&quot;&lt;br /&gt;&quot;)
                  </span>
                  <br />
                  &lt;script&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <h4>Explicando(linha a linha):</h4>
      <ul>
        <li>cria um espaço na memória chamado numero;</li>
        <li>
          chama a variável &quot;numero&quot; e faz ela <em>receber</em> o
          resultado da função <em>Number</em> que vai converter o que o{" "}
          <em>prompt</em> recebeu como resposta a mensagem: &quot;Digite um
          número?&quot; (Lembre-se prompt devolve textos, e par ou ímpar é um
          condição dos números, por isso da conversão);
        </li>
        <li>
          teste se o numero dividido por 2 resulta em resto 0, se verdadeiro faz
          o que está dentro de chaves:
        </li>
        <ul>
          <li>
            document.write escreve o que tem nos parênteses, que no caso é uma
            mensagem que onde tem ${"\u007B\u007d"} vai chamar a variável,
            colocando os valores guardados no lugar. Por exemplo, se número
            =&gt; 6, a mensagem que será escrita será: <br /> O número 8 é par!
          </li>
        </ul>
        <li>
          teste se o numero dividido por 2 resulta em resto 1, se verdadeiro faz
          o que está dentro de chaves:
        </li>
        <ul>
          <li>
            document.write escreve o que tem nos parênteses, que no caso é uma
            mensagem que onde tem ${"\u007B\u007d"} vai chamar a variável,
            colocando os valores guardados no lugar. Por exemplo, se número
            =&gt; 5, a mensagem que será escrita será: <br /> O número 5 é
            ímpar!
          </li>
        </ul>
      </ul>
      <h2>Operadores relacionais</h2>
      <p>
        como pode observar, para a construção da pergunta fizemos um teste
        usando &quot;==&quot; esse é o símbolo de comparação, lembrando que
        quando usamos apenas um igual ele é chamado de atribuição. A lista a
        seguir apresenta os operadores e seus significados:
      </p>
      <ul>
        <li>
          &quot;==&quot; verifica se a expressão a esquerda é igual a da
          direita;
        </li>
        <li>
          &quot;!=&quot; verifica se a expressão a esquerda é diferente a da
          direita;
        </li>
        <li>
          &quot;&gt;&quot; verifica se a expressão a esquerda é maior a da
          direita;
        </li>
        <li>
          &quot;&gt;=&quot; verifica se a expressão a esquerda é maior ou igual
          a da direita;
        </li>
        <li>
          &quot;&lt;&quot; verifica se a expressão a esquerda é menor a da
          direita;
        </li>
        <li>
          &quot;&lt;=&quot; verifica se a expressão a esquerda é menor ou igual
          a da direita;
        </li>
      </ul>
      <h2>exercícios</h2>
      <ol>
        <li>
          Leia um valor de representando uma nota e imprima &quot;aprovado
          &quot; se a nota recebida for maior que 7 e &quot;reprovado &quot; se
          menor{" "}
        </li>
        <li>
          Leia um valor de representando um número e imprima &quot; divisível
          por 5 &quot; se esse número for divisivel por 5 e seu resto der 0;
        </li>
        <li>
          Leia duas alturas em centimetros e os nomes dessas pessoas é imprima o
          nome da pessoa mais alta
        </li>
        <li>
          Criar um script que leia a idade de uma pessoa e que mostre a sua
          classe eleitoral:
          <ul>
            <li>Não-eleitor (abaixo de 16 anos);</li>
            <li>Eleitor Obrigatório (entre 18 e 65 anos);</li>
            <li>
              Eleitor facultativo (entre 16 e 18 anos e maior de 65 anos).
            </li>
          </ul>
        </li>
        <li>
          Faça um script para ler o nome e a idade de uma pessoa e determinar se
          esta pessoa é ou não maior de idade (idade maior ou igual a 18 anos).
          O programa deve imprimir a seguinte frase: &lt;&lt;nome&gt;&gt; tem
          &lt;&lt;idade&gt;&gt; anos e (é/não é) maior de idade.
        </li>
      </ol>
      <Link href="/frontend/">Aulas Frontend</Link>
    </>
  );
}

export default Decisoes;
