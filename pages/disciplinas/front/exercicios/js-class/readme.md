# JavaScript express

JavaScript(JS) é uma linguagem de programação para web(internet). Programar é dar ordens ao computador. Damos ordems ao computador falando de forma que ele consiga entender, ou seja, usamos uma linguagem: linguagem de programação. JS é uma linguagem de alto nível e interpretada.

Alto nível por ter uma sintaxe mais próxima da linguagem comum (falada, escrita) do que da linguagem de máquina (bits 0's e 1's). Interpretada pois o computador "lê" e "transforma" o conteúdo em zeros e uns para que o computador possa fazer o que foi ordenado.

Na linguagem JS cada linha representa uma instrução, ou ordem. Cada linha é lida, transformada para 0's ou 1's e então executada pelo computador.

## Variáveis

Váriáveis são como caixas capazes de guardar algo dentro:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Grtqa7JGa5M?si=deUFqb9QIXtwMT6a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Em JS podemos criar variáveis de duas maneiras, usando as palavras **let** e **const**, como em:

```js
let idade = 18; // inteiro
const PI = 3.14; // decimal
```

A diferença entre as duas é que **const** é usando para algo "constante", que não muda e **let** para algo que pode mudar durante a execução. Curiosidade: **let** vem da expressão _"let it change"_(Deixe isso mudar).

### Tipos de dados

#### Texto (String)

Existem, basicamente, três maneiras de criar textos em JS:

- Utilizando aspas simples (`'`) como em `'Olá, mundo!'`;
- Utilizando aspas duplas (`"`) como em `"Olá, mundo!"`;
- Utilizando o acento grave(`` ` ``) como em `` `Boa tarde, ${nome}` ``;

#### Inteiro (Integer)

São números que não tem partes quebradas, como por exemplo quantidade de pessoas que cabem em um local, temperaturas. Podem ser positivos ou negativos. Por exemplo, `206`(pessoas),`-4`(°C)

#### Decimais (Float)

São números que podem ter valores após a virgula, como preços, pesos, distâncias: (R$)`9.99`, `62.5`(KG), `13.3`(KM).

#### Boleano (Boolean)

É o tipo que indica uma valor lógico: verdadeiro ou falso;

#### _Undefined_

Algo não definido ainda, normalmente indica um erro no uso da variável.

#### _Null_

Variável não instânciada, ou vazia.

#### Vetor/Matriz (Array)

Permite guardar conjuntos de valores, como um conjunto de valores. Ex.: Temperaturas dos últimos dias.
