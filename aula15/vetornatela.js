let valores = [8, 1, 7, 4, 2, 9]
//organizando a lista 
valores.sort()

//-----modo de mostrar uma lista 
//console.log(valores)

// ----Modo Burro de mostrar uma lsita

// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

//-------Forma inteligente de mostrar as posicoes de uma lsita
// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
// }

// outra forma de fazer - mostrando a lista de posicoes de uma lista 
for(let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}