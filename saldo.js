let usuarios = [
    { nome: "Lucas Garcia", saldo: 10000, tc: 5, tipocliente: "Master", situacao: "empregado" },
    { nome: "Ana Castela", saldo: 1000, tc: 2, tipocliente: "Bronze", situacao: "empregado" },
    { nome: "Joaquina", saldo: 7000, tc: 3, tipocliente: "Prata", situacao: "empregado" },
    { nome: "Bruna Victoria", saldo: 7000, tc: 5, tipocliente: "Gold", situacao: "empregado" },
    { nome: "Alessandra", saldo: 1800, tc: 1, tipocliente: "Ferro", situacao: "empregado" },
    { nome: "Katarina", saldo: 1700, tc: 1, tipocliente: "Ferro", situacao: "empregado" },
    { nome: "Mikaele", saldo: 2900, tc: 5, tipocliente: "Master", situacao: "empregado" }
];

let produtos = [
    { nome: "Maquina de lavar", preco: 2800, estoque: 5 },
    { nome: "PCGAMER", preco: 2800, estoque: 5 },
    { nome: "Livro", preco: 2800, estoque: 5 },
    { nome: "Notebook", preco: 2800, estoque: 5 },
    { nome: "Cadeira Gamer", preco: 2800, estoque: 5 },
    { nome: "Monitor AOC", preco: 2800, estoque: 5 },
    { nome: "MousePad", preco: 2800, estoque: 5 },
    { nome: "Mouse Red", preco: 2800, estoque: 5 },
    { nome: "Teclado Mecanico", preco: 2800, estoque: 5 }
];

function comprar(nomecli, nomep) {
    let user = usuarios.find(a => a.nome === nomecli);
    let prod = produtos.find(b => b.nome === nomep);

    if (user && prod && prod.estoque > 0 && user.saldo >= prod.preco) {
        user.saldo -= prod.preco;
        prod.estoque -= 1;

        console.log(`Parabéns! Sua compra foi realizada com sucesso. Seu novo saldo é de ${user.saldo} e a quantidade de estoque é de ${prod.estoque}`);
    } else {
        console.log(`Sua compra não teve êxito.`);
    }
}

comprar("Lucas Garcia", "MousePad");
comprar("Lucas Garcia", "MousePad");
