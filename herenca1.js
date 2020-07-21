const ferrari = {
    modelo : 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // resultado undefined, pois não tem esse atributo. Atributo tem em funcoes
// __proto__  (dois underline)
console.log(ferrari.__proto__)//__proto__ procura dento do prototipo (objeto pai ou cadeia acima)
console.log(ferrari.__proto__ === Object.prototype) // result true
console.log(volvo.__proto__ === Object.prototype) // result true
console.log(Object.prototype.__proto__) // nao tem, ele é o topo da hierarquia. Resultado é null

console.log(Object.prototype.__proto__ === null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
