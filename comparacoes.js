// propriedade comutativa

// valores numéricos
let x = 5
let y = 11
console.log(x > y)
console.log(y > x)

console.log('----------------------------------------')

// valores string
let a = 'Abel'
let b = 'Bartira'
console.log(a > b)
console.log(b > a)

console.log('----------------------------------------')

// valores do tipo objeto - não funciona pq o js considera o objeto como grandezas
// não comparáveis. por isso, por default o resultado de tentativas de comparação
// dará sempre o resultado "false"
let p1 = {
    nome: 'Abel',
    sexo: 'M',
    idade: 38
}
let p2 = {
    nome: 'Bartira',
    sexo: 'F',
    idade: 29
}

console.log(p1 > p2)
console.log(p2 > p1)

console.log(p1.idade > p2.idade)
console.log(p2.idade > p2.idade)

console.log('----------------------------------------')

// valores booleanos - por padrão consideramo true maior do que false
let i = true
let j = false
console.log(i > j)
console.log(j > i)

// MORAL DA HISTÓRIA: a propriedade comutativa de comparação de valores distintos
// funciona para os seguintes tipos de dados:
// - number
// - string do rolê
// - string
