// declarando um vetor em JS
let vetor1 = []  // forma "moderna"
let vetor2 = Array() // forma "tradicional"

// declarando vetores já com valores
let vetor3 = ['azul','vermelho','verde']    // modo "moderno"
let vetor4 = Array(2,3,5,7)

// como adicionar novos valores a um vetor

// forma 1: push() - inclui no fim
vetor1.push('laranja')
vetor1.push('melancia')
vetor1.push('pera')

// forma 2: unshift() - inclui no começo
vetor1.unshift('jabuticaba')
vetor1.unshift('acerola')

// forma 3: splice ()
// 1° parâmetro: posição de inserção
// 2° parâmetro: quantos elementos deseja remover na dada posição
// 3° parâmetro: valor a ser inserido
vetor1.splice(2,0,'abacaxi')
vetor1.splice(2,0,'uva')
vetor1.splice(4,1,'maçã')

console.log(vetor1)

// remoção de itens de um vetor

// forma 1: pop() - remove o último
let removido = vetor1.pop()
let removido2 = vetor1.pop()

console.log(vetor1, removido, removido2)

// forma 2: shift() - remove o primeiro
let removido3 = vetor1.shift()
let removido4 = vetor1.shift()
console.log(vetor1,removido3, removido4)

// acrescentando mais alguns elementos para exemplificar o splice
vetor1.push('abacate')
vetor1.push('morango')
vetor1.push('jaca')
console.log(vetor1)

// forma 3: splice() - retira os itens de uma posição específica
// 1° parâmetro: a posição de remoção
// 2° parâmetro: a quantidade de parâmetros a remover (> 0)
// observação: o splice sempre retornará um vetor como resultado, mesmo que o número de elementos removidos esteja entre 0 e 1
let removido5 = vetor1.splice(3,1)
console.log(vetor1,removido5)
