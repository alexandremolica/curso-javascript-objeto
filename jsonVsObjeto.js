const obj = { a : 1, b: 2, c: 3 , soma (){return a + b + c} }
//converte para OBJETO para JSON
console.log(JSON.stringify(obj))

//converte de JSON para OBJETO

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) // formato invalido
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) // formato invalido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // formato valido
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e":[]}')) // formato invalido