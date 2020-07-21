//Object.preventExtentions
//nao permite adicionar novo atributo, ou seja extensao
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
})

 console.log('Extensivel:') 
 produto.descricao = 'Borracha escolar branca'
 delete produto.tag
 console.log(produto)

 //Object.seal
 //nao adiciona e nao exclui novo atributo
 const pessoa = { nome: 'Juliana', idade: 20 }
Object.seal(pessoa)
console.log('Seldado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Objeto.freeze = selado + valores constantes

