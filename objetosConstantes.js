// pessoa aponta para endreco memoria que contem objeto criado, ou seja, 
// pessoa ->  123 ->  {...}
// quando faco pessoa.nome = 'Pedro' nao altero o endereco de memoria
// altero somente o valor isso é possivel
const pessoa = {nome : 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'} // neste caso da erro pois tenta mudar endereco de memoria

// O modo abaixo congela ate o valor do endereco, nao consegue mexer nele
Object.freeze(pessoa) // coloca todo o objeto constante
pessoa.nome = 'Maria' // não vai conseguir
pessoa.end = 'Rua ABC' // nao vai conseguir
delete pessoa.nome //não vai conseguir

console.log(pessoa.nome)
console.log(pessoa)

// criando desde o inicio o objeto constante (congelado)
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)