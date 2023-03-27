const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const p1 = new Pessoa("Roberto Fagundes",43,new Date("1980-1-16"));
const pf1 = new PessoaFisica("Maria Clara",16,new Date("2007-2-26"),"123.456.789-12");
const pj1 = new PessoaJuridica("Mario Fernandes",18,new Date("2005-2-26"),"12.345.678/0009-12");

console.log(p1.nome)
console.log(pf1.nome)
console.log(pj1.nome)

console.log(p1.idade)
console.log(pf1.idade)
console.log(pj1.idade)

console.log(p1.dataNascimento)
console.log(pf1.dataNascimento)
console.log(pj1.dataNascimento)

//console.log(c1.numero);
//const contaController = new ContaController();
//contaController.adicionarConta(c1);
//.adicionarConta(c2);
//contaController.listar();

//const contaBonificada = new ContaBonificada('10', 100);
//contaBonificada.creditar(10);
//console.log(contaBonificada.getSaldo());


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
