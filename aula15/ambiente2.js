let num = [ 5, 8 ,4]
//num[3] = 6
num.push(1)

// console.log(`Nossso vetor e o ${num}`)
// console.log(`O nosso vetor tem ${num.length} posicoes`)
// console.log(`O valor do vetor desejado e ${num[2]}`)

//Porcurar um numero no vetor
let pos = num.indexOf(2)
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
}else{
    
console.log(`O valor 8 esta na posicao ${pos}`)
}

num.sort()