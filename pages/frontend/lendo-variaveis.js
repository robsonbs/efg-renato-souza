import Image from "next/image";
import Link from "next/link";

function LendoVariaveis() {
  return (
    <>
      <h1>Lendo variáveis em JavaScript</h1>
      <p>
        Agora que sabemos que podemos escrever coisas por meio de scripts e que
        posso criar espaços na memória para usar mais tarde, que tal começar a
        pegar valores do usuário? Podemos fazer isso de diversas maneiras, mas
        inicialmente vamos usar um comando chamado{" "}
        <em style={{ color: "#FF204E" }}>prompt</em> ele é parecido com o alert,
        ele abre uma caixa mostrando o conteúdo dos parênteses, mas espera
        alguma resposta que é passada para onde foi chamado.
      </p>
      <p>
        Uma observação é que ele devolve o que é digitado como um texto, assim
        se estiver perguntando algum tipo diferente de variável, precisará fazer
        a troca (conversão) do tipo, por exemplo, se fizer prompt perguntando
        algum número, ele irá mostrar esse número normalmente, mas se tiver algo
        como <code>valor + 3</code> é esse valor for 5, teriamos algo como:{" "}
        <code>53</code> pois ele num primeiro momento entende o 5 como sendo um
        texto, de maneira que o símbolo de &quot;+&quot; seria lido como uma
        concatenação e não uma soma.
      </p>
      <p>
        Vamos imaginar uma situação simples, fazer um script que pergunte nome e
        idade e responda dando boas vindas e mostre qual é o dobro da idade
        digitada.
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
                    let nome <br />
                    let idade <br />
                    nome = prompt(&quot;Qual seu nome?&quot;) <br />
                    idade = Number(prompt(&quot;Qual sua idade?&quot;)) <br />
                    {`/** Number é um comando especial que faz com que o valor dentro dos parênteses tente ser transformado em um número.*/`}{" "}
                    <br />
                    document.write( `
                    {`Boas vindas, \${nome}. O dobro de sua idade atual é: \${idade*2}.`}
                    ` )
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
        <li>cria um espaço na memória chamado nome;</li>
        <li>cria um espaço na memória chamado idade;</li>
        <li>
          chama a variável &quot;nome&quot; e faz ela <em>receber</em> o
          resultado da função <em>prompt</em>, que mostrará a mensagem:
          &quot;Qual seu nome?&quot;;
        </li>
        <li>
          chama a variável &quot;idade&quot; e faz ela <em>receber</em> o
          resultado da função <em>Number</em> que vai converter o que o{" "}
          <em>prompt</em> recebeu como resposta a mensagem: &quot;Qual sua
          idade?&quot; (Lembre-se prompt devolve textos, e uma idade é um
          número, por isso da conversão);
        </li>
        <li>
          document.write escreve o que tem nos parênteses, que no caso é uma
          mensagem que onde tem ${"\u007B\u007d"} vai chamar a variável,
          colocando os valores guardados no lugar. Por exemplo, se nome =&gt;
          &quot;Robson&quot; e idade =&gt; 32, a mensagem que será escrita será:{" "}
          <br /> Boas vindas, Robson. O dobro de sua idade atual é: 64.
        </li>
      </ul>
      <h2>Operações matemáticas</h2>
      <p>
        Agora temos como fazer códigos mais interessantes, por exemplo fazer
        somas de dois valores. vamos lá: Faça um script que pergunte dois
        números e escreva o resultado na página.
      </p>
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
                  let valor1 <br />
                  let valor2 <br />
                  let resultado <br />
                  valor1 = Number(prompt(&quot;Digite o primeiro valor&quot;))
                  <br />
                  valor2 = Number(prompt(&quot;Digite o segundo valor&quot;))
                  <br />
                  resultado = valor1 + valor2 <br />
                  {`/** atenção: usar o acento grave, para que possa funcionar o uso da variável. */`}
                  <br />
                  document.write(`O resultado da soma dos dois valores é: $
                  {"\u007Bresultado\u007d"}`)
                  <br />
                  &lt;script&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <h4>Explicando:</h4>
      <ul>
        <li>cria um espaço na memória chamado valor1;</li>
        <li>cria um espaço na memória chamado valor2;</li>
        <li>cria um espaço na memória chamado resultado;</li>
        <li>
          chama a variável &quot;valor1&quot; e faz ela <em>receber</em> o
          resultado da função <em>Number</em> que vai converter o que o{" "}
          <em>prompt</em> recebeu como resposta a mensagem: &quot;Digite o
          primeiro valor&quot; (Lembre-se prompt devolve textos, e para soma
          precisamos de números, por isso da conversão);
        </li>
        <li>
          chama a variável &quot;valor2&quot; e faz ela <em>receber</em> o
          resultado da função <em>Number</em> que vai converter o que o{" "}
          <em>prompt</em> recebeu como resposta a mensagem: &quot;Digite o
          segundo valor&quot; (Lembre-se prompt devolve textos, e para soma
          precisamos de números, por isso da conversão);
        </li>
        <li>
          chama a variável &quot;resultado&quot;e faz ela <em>receber</em> a
          soma de &quot;valor1&quot; e &quot;valor2&quot;;
        </li>
        <li>
          document.write escreve o que tem nos parênteses, que no caso é uma
          mensagem que onde tem ${"\u007B\u007d"} vai chamar a variável,
          colocando o valor guardado no lugar. Por exemplo, se resultado =&gt;
          10, a mensagem que será escrita será: <br /> O resultado da soma dos
          dois valores é: 10.
        </li>
      </ul>
      <p>O fluxograma seria próximo a isso:</p>
      <Image src="/files/soma.png" alt="Fluxograma" />
      <br />
      <br />
      <Link href="/frontend/">Aulas Frontend</Link>
    </>
  );
}

export default LendoVariaveis;
