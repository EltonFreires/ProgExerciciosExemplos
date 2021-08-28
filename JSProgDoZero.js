// Exercícios - Curso Fundamentos de Programação 1..


/*** Pág 01 ***/

// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.
// Exemplos:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
// cumprimentar("Maria") // retornará "Olá, Maria!"
/* function cumprimentar(nomePessoa){
    return `"Olá, ${nomePessoa}!"`;
}
console.log(cumprimentar("Leonardo"));
function cumprimentar2(nomePessoa){
    const textoSaudacao = "Olá";
    return [textoSaudacao, nomePessoa].join(', ').concat('!');
}
console.log(cumprimentar2("Maria")); */



// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário.
// Exemplos:
// converterIdadeEmAnosParaDias(25) // retornará 9125
// converterIdadeEmAnosParaDias(70) // retornará 25550
/* function converterIdadeEmAnosParaDias(idade){
    const diasPorAno = 365;
    return (idade * diasPorAno).toFixed(0);
}
console.log(converterIdadeEmAnosParaDias(25));
console.log(converterIdadeEmAnosParaDias(70)); */



// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
// 30%, relativo a impostos.
// O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário
// no mês.
// Exemplos:
// calcularSalarioLiquido(180, 60) // retornará "Salário igual a R$ 7560"
/* function calcularSalarioBruto(horasTrabalhadas, valorHora){
    return (horasTrabalhadas * valorHora).toFixed(2);
}
function calcularSalarioLiquido(horasTrabalhadas, valorHora){
    return `Salário líquido é igual a R$ ${(calcularSalarioBruto(horasTrabalhadas, valorHora) * 0.7).toFixed(2)}`;
}
console.log(calcularSalarioLiquido(180, 60)); */



/*** Pág 02 ***/

// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
// Exemplos:
// receberNomeDoMes(1) // retornará "janeiro"
// receberNomeDoMes(4) // retornará "abril"
/* // function receberNomeDoMes(mes) {
//     switch (mes) {
//         case 1: return "Janeiro";
//         case 1: return "Fevereiro";
//         case 1: return "Março";
//         case 4: return "Abril";
//         default:
//             break;
//     }
// }
function receberNomeDoMes(mes) {
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] ;
    return mesesAno[--mes];
}
console.log(receberNomeDoMes(1));
console.log(receberNomeDoMes(4)); */



// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.
// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará true
/* function maiorOuIgual(valor1, valor2){
    if(typeof valor1 === "string" || typeof valor2 === "string")
        return false;
    else if (valor2 > valor1) {
        return false;
    } 
    return true
}
console.log(maiorOuIgual(0,0));
console.log(maiorOuIgual(5,1));
console.log(maiorOuIgual(2,5));
console.log(maiorOuIgual(0,"0"));
console.log(maiorOuIgual("0",0)); */



/*** Pág 03 ***/

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. 
// Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. 
// Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
// Exemplos:
// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) // retornará 2000
// inverso("programação") // retornará "booleano ou números, mas o parâmetro é do tipo string"
/* function inverso(valor){
    if (typeof valor === "boolean") {
        return !valor;
    }
    else if (typeof valor === "number" ) {
        return valor*(-1);
    }
    return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
}
console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação")); */



// Crie uma função que receba quatro números como parâmetro (minimo, maximo, numero, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
// Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. 
// Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.
// Exemplos:
// estaEntre(10, 100, 50) // retornará true
// estaEntre(16, 100, 160) // retornará false
// estaEntre(3, 150, 3) // retornará false
// estaEntre(3, 150, 3, true) // retornará true
/* function estaEntre(minimo, maximo, numero, inclusivo){
    if (numero > minimo && numero < maximo || (inclusivo && (numero === minimo || numero === maximo ))) {
        return true;
    }
    return false;
}
console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true)); */



/*** Pág 04 ***/

/* // Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0
function multiplicar(num1, num2){
    const maiorNum = Math.max(num1, num2);
    const menorNum = Math.min(num1, num2);
    let total = 0;
    if (!(num1 === 0 || num2 === 0)) {
        for (let i = 0; i < menorNum; i++) {
            total += maiorNum;        
        }
    }    
    return total;
}
console.log(multiplicar(4, 5));
console.log(multiplicar(5, 3));
console.log(multiplicar(0, 7)); */



/* // Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:
// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]
function repetir(elemento, qtdRepeticao) {
    let arrElementos = [];
    for (let i = 0; i < qtdRepeticao; i++) {
        arrElementos.push(elemento);
    }
    return arrElementos;
}
function repetir2(elemento, qtdRepeticao) {
    return Array(qtdRepeticao).fill(elemento);
}
console.log(repetir("código", 2));
console.log(repetir(7, 3));
console.log(repetir2("código", 2));
console.log(repetir2(7, 3)); */



/*** Pág 05 ***/

/* // Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"
function simboloMais(qtdRepeticao){
    let str = '';
    for (let i = 0; i < qtdRepeticao; i++) {
        str += "+"        
    }
    return str;
}
function simboloMais2(qtdRepeticao){
    return Array(qtdRepeticao).fill("+").join("");
}
function simboloMais3(qtdRepeticao){
    return "+".repeat(qtdRepeticao);
}
console.log(simboloMais(4));
console.log(simboloMais2(4));
console.log(simboloMais3(4)); */



/* // Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
// function receberPrimeiroEUltimoElemento(elementos){
//     let a = [elementos[0], elementos[elementos.length - 1]];
//     return a;
// }
function receberPrimeiroEUltimoElemento(elementos){
    return [elementos.shift(), elementos.pop()];
}
console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));
let arr = ["a","b","c"];
console.log(arr);
console.log(receberPrimeiroEUltimoElemento(arr));
console.log(arr); */



/*** Pág 06 ***/

/* // Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
// de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
// Exemplos:
// removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
// removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao") // retornará {id: 20, nome: "caneta"}
// A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
// removerPropriedade, você poderá usar a função Object.is(), por exemplo:
// Object.is(removerPropriedade(objeto, "descricao"), objeto) // Retornará false se o objeto não for o mesmo.
function removerPropriedade(obj, parametroDeletar){
    console.log(obj);
    delete obj[parametroDeletar];    
    return obj;
}
console.log(removerPropriedade({a: 1, b: 2}, "a"));
console.log(removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao")); */



// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []
/* function filtrarNumeros(arr){
    return arr.filter(el => typeof el === "number");
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"])); */



/*** Pág 07 ***/

// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, formado pelos pares chave/valor que corresponde a um atributo do objeto. 
// Exemplos:
// objetoParaArray({   nome: "Maria", profissao: "Desenvolvedora de software"}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// objetoParaArray({   codigo: 11111, preco: 12000}) // irá retornar [["codigo", 11111], ["preco", 12000]]
/* // function objetoParaArray(objeto){
//     let arr = [];
//     for (let chave in objeto){ arr.push(chave, objeto[chave]); }
//     return arr;
// }
// function objetoParaArray(objeto){
//     let chave = Object.keys(objeto);
//     return chave.map(chave => [chave, objeto[chave]]);
// }
// function objetoParaArray(objeto){
//     return Object.entries(objeto);
// }
// 1 solução, fazer com for, e apartir da chave pegar o valor
// 2 solução, extrair as chaves, e apartir das chaves pegar o valor
// 3 solução, extrair tudo de uma vez
console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" }));
console.log(objetoParaArray({ codigo: 11111, preco: 12000 })); */



// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
// Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero.
// Exemplos:
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
/* function receberSomenteOsParesDeIndicesPares(obj){
    return obj.filter((value, index) => value % 2 === 0 && index % 2 === 0);
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])); */



/*** Pág 08 ***/

// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.
// function checarAnoBissexto(ano){
//     return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
// }
// function checarAnoBissexto(ano){
//     return new Date(ano, 1,29).getDate() === 29;
// }
// console.log(checarAnoBissexto(2020));   // retornará true
// console.log(checarAnoBissexto(2100));   // retornará false, pois é múltiplo de 100 e não é múltiplo de 400


// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// function somarNumeros(arrNumeros){
//     let soma = 0;
//     arrNumeros.forEach(element => { soma += element});
//     return soma;
// }
// function somarNumeros(arrNumeros){   
//     return arrNumeros.reduce((soma, value) => soma + value, 0);
// }
// console.log(somarNumeros([10, 10, 10]));        // retornará 30
// console.log(somarNumeros([15, 15, 15, 15]));    // retornará 60



/*** Pág 09 ***/

// Crie uma função que receba um array de produtos e retorne o total das despesas.
// function despesasTotais(produtos) {
//     let soma = 0;
//     for (let obj of produtos) {
//         soma += obj.preco;
//     }    
//     return soma;
// }
// function despesasTotais(produtos){
//     return produtos.map(item => item.preco).reduce((acumulador, value) => acumulador += value,0);
// }
// function despesasTotais(produtos){
//     return produtos.reduce((acumulador, value) => acumulador += value.preco,0);
// }
// console.log(despesasTotais([{ nome: "Jornal online", categoria: "Informação", preco: 89.99 }, 
                                // { nome: "Cinema", categoria: "Entretenimento", preco: 150 }]));      // retornará 239.99
// console.log(despesasTotais([{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 }, 
                                // { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }]));  // retornará 34599.89



/*** Pág 10 ***/

// crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
// function calcularMedia(arrNumeros){
//     if (arrNumeros.length === 0) {return 0;}
//     return arrNumeros.reduce((acc, value) => acc += value) / arrNumeros.length;    
// }
// console.log(calcularMedia([]));
// console.log(calcularMedia([0, 10])); // retornará 5
// console.log(calcularMedia([1, 2, 3, 4, 5])); // retornará 3


// função que recebe a base e a altura de um triângulo e retorne a área desse triângulo com duas casas decimais.
// fórmula (base x altura) / 2
// function areaDoTriangulo(base, altura){
//     return ((base * altura)/2).toFixed(2);
// }
// console.log(areaDoTriangulo(10, 15));       // retornará "75,00"
// console.log(areaDoTriangulo(7, 9));         // retornará "31,50"
// console.log(areaDoTriangulo(9.25, 13.1));   // retornará "60.59"


// Criar uma função que receba um array de números e retorne o menor número desse array.
// function menorNumero(arrNumeros){
//    return arrNumeros.reduce((lowerValue, value) => value < lowerValue ? value : lowerValue);    
// }
// function menorNumero(arrNumeros){
//    return Math.min(arrNumeros);    
// }
// console.log(menorNumero([10, 5, 35, 65])); // retornará 5
// console.log(menorNumero([5, -15, 50, 3])); // retornará -15



/*** Pág 11 ***/
/*** Pág 12 ***/
/*** Pág 13 ***/
/*** Pág 14 ***/
/*** Pág 15 ***/

// **************************************************************************************************






// **************************************************************************************************

// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
// um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
// internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
// retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
// Exemplos:
// funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
// Resolução:
// /*mais informações sobre gerar números aleatórios dentro de uma certa faixa
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
// function funcaoDaSorte(numeroEscolhido) {
// const min = 1
// const max = 10
// const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
// return (numeroEscolhido === numeroAleatorio ?
// `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
// `Que pena, o número sorteado foi o ${numeroAleatorio}`
// )
// }
// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// 📕 Considere que todas as palavras só são separadas por um espaço.
// Exemplos:
// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5
// Resolução:
// function contarPalavras(frase){
// const palavras = frase.split(" ")
// Resoluções - Exercícios - Curso Fundamentos de Programação 12
// return palavras.length
// }
// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
// que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
// minúsculas.
// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
// Resolução 1
// function contarCaractere(caractereBuscado, frase) {
// let contador = 0
// for (let i = 0; i < frase.length; i++)
// if (frase.charAt(i) === caractereBuscado)
// contador++
// return contador
// }
// Resolução 2
// function contarCaractere(caractereBuscado, frase) {
// return [...frase].filter(caractere => caractere === caractereBuscado).length
// }
// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
// strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:
// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]
// Resolução 1
// function buscarPalavrasSemelhantes(inicio, palavras) {
// const resultado = []
// for (let palavra of palavras)
// if (palavra.includes(inicio))
// resultado.push(palavra)
// return resultado
// }
// Resolução 2
// function buscarPalavrasSemelhantes(inicio, palavras) {
// return palavras.filter(palavra => palavra.includes(inicio))
// }
// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
// ou seja, sem as vogais.
// Exemplos:
// Resoluções - Exercícios - Curso Fundamentos de Programação 13
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"
// Resolução 1
// function removerVogais(frase) {
// const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
// vogais.forEach( vogal => frase = frase.replace(vogal, '') )
// return frase
// }
// Resolução 2
// function removerVogais(frase) {
// return frase.replace(/[aeiou]/ig, '')
// }
// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
// objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
// seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
// Resolução 1
// function inverter(objeto) {
// const objetoInvertido = {}
// Object.entries(objeto).forEach( parChaveValor => {
// const chave = 0,
// valor = 1
// objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
// })
// return objetoInvertido
// }
// Resolução 2
// function inverter(objeto) {
// const paresDeChaveValorInvertidos = Object.entries(objeto)
// .map( parChaveValor => parChaveValor.reverse() )
// return Object.fromEntries(paresDeChaveValorInvertidos)
// }
// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.
// Exemplos:
// filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
// filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
// Resolução 1
// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
// let resultado = []
// Resoluções - Exercícios - Curso Fundamentos de Programação 14
// for(numero of numeros){
// const quantidadeDeDigitos = String(numero).length
// if(quantidadeDeDigitos === quantidadeDesejada)
// resultado.push(numero)
// }
// return resultado
// }
// Resolução 2
// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
// return numeros.filter(numero => {
// const quantidadeDeDigitos = String(numero).length
// return quantidadeDeDigitos === quantidadeDesejada
// })
// }
// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6
// Resolução 1
// function segundoMaior(numeros) {
// let indiceDoMaior = 0
// let segundoMaior
// numeros.forEach( (numero, indice) => {
// if( numero > numeros[indiceDoMaior] )
// indiceDoMaior = indice
// })
// numeros.splice(indiceDoMaior, 1)
// segundoMaior = numeros[0]
// numeros.forEach(numero => {
// if(numero > segundoMaior)
// segundoMaior = numero
// })
// return segundoMaior
// }
// Resolução 2
// function segundoMaior(numeros) {
// const maiorNumero = Math.max(...numeros)
// numeros = numeros.filter(numero => numero != maiorNumero)
// const segundoMaior = Math.max(...numeros)
// return segundoMaior
// }
// Resolução 3
// function segundoMaior(numeros) {
// const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
// const segundoMaior = numerosOrdenados[1]
// return segundoMaior
// }
// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num
// array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com
// Resoluções - Exercícios - Curso Fundamentos de Programação 15
// os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// recerberMelhorEstudante({
// Joao: [8, 7.6, 8.9, 6], // média 7.625
// Mariana: [9, 6.6, 7.9, 8], // média 7.875
// Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }
// Resolução:
// const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
// const media = array => soma(array) / array.length
// function recerberMelhorEstudante(estudantes) {
// const estudantesComMedias = Object.entries(estudantes).map( estudante => {
// const chave = 0,
// valor = 1
// return { nome: estudante[chave], media: media(estudante[valor]) }
// })
// const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
// const melhorEstudante = estudantesOrdenados[0]
// return melhorEstudante
// }
