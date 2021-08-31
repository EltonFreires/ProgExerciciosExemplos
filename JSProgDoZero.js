// 01
// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, formado pelos pares chave/valor que corresponde a um atributo do objeto. 
// 1 solução, fazer com for, e apartir da chave pegar o valor 
// 2 solução, extrair as chaves, e apartir das chaves pegar o valor 
// 3 solução, extrair tudo de uma vez
function objetoParaArray(obj){
    return ;
};
console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" }));   // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray({ codigo: 11111, preco: 12000 }));                              // irá retornar [["codigo", 11111], ["preco", 12000]]

// 02
// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
function receberSomenteOsParesDeIndicesPares(obj){
    return ;
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));     // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])); // retornará [10, 22]

// 03
// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// 1 solução, foreach
// 2 solução, reduce
function somarNumeros(arr){   
    return ;
}
console.log(somarNumeros([]));
console.log(somarNumeros([10, 10, 10])); // retornará 30
console.log(somarNumeros([15, 15, 15, 15])); // retornará 60

// 04
// Crie uma função que receba um array de produtos e retorne o total das despesas.
// 1 for of
// 2 map + reduce
// 3 reduce
function despesasTotais(arr){   
    return ;
}
console.log(despesasTotais([{ }]));
console.log(despesasTotais([]));
console.log(despesasTotais([{ nome: "Jornal online", categoria: "Informação", preco: 89.99 }, { nome: "Cinema", categoria: "Entretenimento", preco: 150 }]));        // retornará 239.99
console.log(despesasTotais([{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 }, { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }])); // retornará 34599.89

// 05
// Criar uma função que receba um array de números e retorne o menor número desse array.
// 1 solução, reduce
// 2 solução, Math
function menorNumero(arr){
   return ;    
}
console.log(menorNumero([10, 5, 35, 65])); // retornará 5
console.log(menorNumero([5, -15, 50, 3])); // retornará -15

// 06
// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.
// 1 solução fill + join
// 2 solução repeat  
function simboloMais(qtd){
    return;
}
console.log(simboloMais(4)); // retornará "++++"



// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************

// 01
/* function objetoParaArray(objeto){
    let arr = [];
    for (let chave in objeto){ arr.push(chave, objeto[chave]); }
    return arr;
}
function objetoParaArray(objeto){
    let chave = Object.keys(objeto);
    return chave.map(chave => [chave, objeto[chave]]);
}
function objetoParaArray(objeto){ return Object.entries(objeto); } */


// 02
/* function receberSomenteOsParesDeIndicesPares(obj){ return obj.filter((value, index) => value % 2 === 0 && index % 2 === 0); }*/


// 03
/* function somarNumeros(arrNumeros){
    let soma = 0;
    arrNumeros.forEach(element => { soma += element});
    return soma;
}
function somarNumeros(arrNumeros){ return arrNumeros.reduce((soma, value) => soma + value, 0); } */


// 04
// function despesasTotais(produtos) {
//     let soma = 0;
//     for (let obj of produtos) { soma += obj.preco;}    
//     return soma;
// }
// function despesasTotais(produtos){ return produtos.map(item => item.preco).reduce((acumulador, value) => acumulador += value,0); }
// function despesasTotais(produtos){ return produtos.reduce((acumulador, value) => acumulador += value.preco,0); }

// 05
// function menorNumero(arrNumeros){ return arrNumeros.reduce((lowerValue, value) => value < lowerValue ? value : lowerValue); }
// function menorNumero(arrNumeros){ return Math.min(arrNumeros); }

// 06
// function simboloMais2(qtdRepeticao){ return Array(qtdRepeticao).fill("+").join(""); }
// function simboloMais3(qtdRepeticao){ return "+".repeat(qtdRepeticao); }




// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// function receberPrimeiroEUltimoElemento(elementos){
//     let a = [elementos[0], elementos[elementos.length - 1]];
//     return a;
// }
// function receberPrimeiroEUltimoElemento(elementos){
//     return [elementos.shift(), elementos.pop()];
// }
// console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])); // retornará [7, "olá"]
// console.log(receberPrimeiroEUltimoElemento([-100, 16])); // retornará [-100, 16]

// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
// de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
// Exemplos:
// removerPropriedade({a: 1, b: 2}, "a")
// removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao") // retornará {id: 20, nome: "caneta"}
// A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
// removerPropriedade, você poderá usar a função Object.is(), por exemplo:
// Object.is(removerPropriedade(objeto, "descricao"), objeto)
// function removerPropriedade(obj, parametroDeletar){
//     console.log(obj);
//     delete obj[parametroDeletar];    
//     return obj;
// }
// console.log(removerPropriedade({a: 1, b: 2}, "a")); // retornará {b: 2}
// console.log(removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao")); // Retornará { id: 20, nome: 'caneta' }

// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. 
// A função deverá ser case-sensitive
// function contarCaractere(char, str){
//    return str.match(new RegExp(char, "g")).length ;
// }
// console.log(contarCaractere("r", "A sorte favorece os audazes")); // retornará 2
// console.log(contarCaractere("c", "Conhece-te a ti mesmo")); // retornará 1

// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
// strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// function buscarPalavrasSemelhantes(word, phrase){
//     console.log("programação".includes("pro"));
//     console.log("mobile".includes("pro"));

//     return phrase.filter(value => value.indexOf(word) !== -1);
// }
// console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])); // retornará ["programação", "profissional"]
// console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])); // retornará ["javascript", "java"]

// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
// strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// function buscarPalavrasSemelhantes(word, phrase) {
//     return phrase.filter(value => value.indexOf(word) !== -1);
//     return phrase.filter(value => value.includes(word));    
// }
// console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])); // retornará ["programação", "profissional"]
// console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])); // retornará ["javascript", "java"]

// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
// function removerVogais(word){
//     const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
//     vowels.forEach( value => word = word.replace(value,""));
//     return word;
// }
// function removerVogais(word){
//     return word.replace(/[aeiou]/ig, '');
// }
// console.log(removerVogais("Cod3r")); // retornará "Cd3r"
// console.log(removerVogais("Fundamentos")); // retornará "Fndmnts"