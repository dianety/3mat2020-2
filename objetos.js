// declaração e inicialização de um objeto vazio
let pessoa1 = {} // forma "moderna"
let pessoa2 = new Object() // forma "tradicional"

// inicialização de objetos já com propriedades e valores
let pessoa3 = {
    // antes do dois pontos: atributo ou chave
    // depois dos dois pontos: valor
    // atributo+valor = propriedade
    nome: 'Fulano da Silva',
    "data de nascimento": '1965-10-03',
    sexo: 'f',
    profissao: 'marceneiro'
}

// exibir o valor de um atributo (nome do atributo SEM espaços)
console.log(pessoa3.nome) // sintaxe do ponto

// exibir o valor de um atributo (nome do atributo CONTÉM espaços)
console.log(pessoa3["data de nascimento"]) // sintaxe dos colchetes

// a sintaxe dos colchetes funcona sempre, mesmo quando o nome
// do atributo não tem espaços
console.log(pessoa3["profissao"])

// criando uma nova propriedade em um objeto
console.log(pessoa1) // antes
pessoa1.nome = 'Beltrano Sousa'
pessoa1["data de nascimento"] = '1988-07-31'
console.log(pessoa1) // depois

// a criação de novas propriedades pode ser feita inclusve em
// objetos que foram inicializados com propriedades

console.log(pessoa3) // antes
pessoa3.altura = 1.73
pessoa3.peso = 87
console.log(pessoa3) // depois

// exclusão de propriedade
delete pessoa3.sexo
console.log(pessoa3)

console.log('----------------------------------------')

// listando os atributos (nomes de propriedades) de um objeto: for..in
for(let atributo in pessoa3){
    console.log(atributo)
}

console.log('----------------------------------------')

// listar as propriedades (atributo+valor) de um objeto
for(let atributo in pessoa3){
    console.log('Atributo: ' + atributo + '; valor: ' + pessoa3[atributo]) // nesse caso,
    // a palavra "atributo" no último termo é uma variável, que dentro dela tem o nome
    // da propriedade, motivo pelo qual não é possível usar a sintaxe do ponto
}
