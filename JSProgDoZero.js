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
function objetoParaArray(objeto){
    return Object.entries(objeto);
} */


// 02
/* function receberSomenteOsParesDeIndicesPares(obj){
    return obj.filter((value, index) => value % 2 === 0 && index % 2 === 0);
}*/


// 03
/* function somarNumeros(arrNumeros){
    let soma = 0;
    arrNumeros.forEach(element => { soma += element});
    return soma;
}
function somarNumeros(arrNumeros){
   
    return arrNumeros.reduce((soma, value) => soma + value, 0);
} */

// **************************************************************************************************

// 01
// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, formado pelos pares chave/valor que corresponde a um atributo do objeto. 
// objetoParaArray({   nome: "Maria", profissao: "Desenvolvedora de software"}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// objetoParaArray({   codigo: 11111, preco: 12000}) // irá retornar [["codigo", 11111], ["preco", 12000]]
// 1 solução, fazer com for, e apartir da chave pegar o valor 
// 2 solução, extrair as chaves, e apartir das chaves pegar o valor 
// 3 solução, extrair tudo de uma vez
function objetoParaArray(obj){
    return ;
};
console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" }));
console.log(objetoParaArray({ codigo: 11111, preco: 12000 })); 

// 02
// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
function receberSomenteOsParesDeIndicesPares(obj){
    return ;
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

// 03
// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60
// 1 foreach
// 2 reduce
function somarNumeros(arrNumeros){   
    return ;
}
console.log(somarNumeros([]));
console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));