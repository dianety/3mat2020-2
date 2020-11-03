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


// função tradicional sem argumentos
let msgErro = function(){
    console.log('Erro inesperado!')
}

// retorna um número aleatório entre 0 e 99
let aleatorio = function(){
    // Math.random():  retorna um número aleatório entre 0 e 1
    // Math.floor(): "corta fora" as casas decimais de um número
    return Math.floor(Math.random() * 100)
}
msgErro()
console.log(aleatorio())

// arrow functions sem argumentos
// - os parênteses vazios são obrigatórios
let msgErro2 = () => console.log('Erro inesperado!')
let aleatorio2 = () => Math.floor(Math.random()*100)

msgErro2()
console.log(aleatorio2())

// função tradicional com 1+ argumentos
let areaTri = function(base,altura){
    return (base*altura)/2  // área de um triângulo
}

// arrow function com 1+ argumentos
// - os argumentos devem estar obrigatoriamente entre parênteses
let areaTri2 = (base,altura) => (base*altura)/2

console.log(areaTri(4,2.5))
console.log(areaTri2(4,2.5))

// função tradicional com mais de uma linha de corpo
let fatorial = function(n){
    let res = 1
    for (let i=n;i>=1;i--){
        res *= i
    }
    return res
}

// arrow function com mais de uma linha de corpo
// - as chaves que delimitam o corpo da função precisam ser mantidas
let fatorial2 = n => {
    let res = 1
    for (let i=n;i>=1;i--){
        res *= i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))
