/// características da função abaixo
// - tem apenas um parâmetro (argumento)
// - possui uma única linha de código com return

let quadrado = function(x){
    return x * x
}

// Arrow function: sintaxe simplificada
// - não usa a palavra-chave "function"
// - o único argumento não precisa de parênteses
// - entre o argumento e o corpo da função vem o sinal de => (arrow)
// - a única linha de código não precisa nem de {} nem da palavra-chave "return"
let quadrado2 = x => x*x

console.log(quadrado(7))
console.log(quadrado2(7))

let potencia = function(base,expoente){
    return base ** expoente
}

let potencia2 = (base,expoente) =>  base ** expoente

console.log(potencia(2,5))
console.log(potencia2(2,5))
