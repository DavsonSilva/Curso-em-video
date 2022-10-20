//criando um vetor/Lista
let num = [ 5, 8 ,4]

//colocar um numero a mais na lista
num[3] = 6

//Colocar na ultima posicao
num.push(7)

//deixar a lista ordenada 
num.sort()

//Mostrar a lista
console.log(`Nossso vetor e o ${num}`)

//ver quantos numeros tem na lista
console.log(`O nosso vetor tem ${num.length} posicoes`)

//mostrar somente o numero da lista na posicao desejada
console.log(`O valor do vetor desejado e ${num[2]}`)

//Porcurar um numero no vetor
let pos = num.indexOf(1)
console.log(`O valor 8 esta na posicao ${pos}`)