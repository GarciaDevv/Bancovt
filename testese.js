let usersDB = [ 
    { name: 'Lucas Garcia', salary: 10000, cash: 20000, type: "MASTER", purchaseHistory: [],historicemp:[] },
    { name: "Isadora Pereira", salary: 5000, cash: 4500, type: "GOLD", purchaseHistory: [] },
    { name: "Leticia Ferreira", salary: 7000, cash: 6000, type: "GOLD", purchaseHistory: [] },
    { name: "Eduarda Damasceno", salary: 4600, cash: 9000, type: "GOLD", purchaseHistory: [] },
    { name: "Fabiana Souza", salary: 5000, cash: 8000, type: "GOLD", purchaseHistory: [] },
    { name: "Mariana Gengibre", salary: 4800, cash: 2000, type: "GOLD", purchaseHistory: [] },
    { name: "Bruna Victória", salary: 5000, cash: 7000, type: "GOLD", purchaseHistory: [] },
    { name: "Regiane Fraga", salary: 8000, cash: 9000, type: "VIP", purchaseHistory: [] },
    { name: "Tatiana Lisíta", salary: 16000, cash: 20000, type: "MASTER", purchaseHistory: [] }
];

let products = [
    { name: "Washing Machine", price: 2800, stock: 5 },
    { name: "PCGAMER", price: 2800, stock: 5 },
    { name: "Book", price: 2800, stock: 5 },
    { name: "Notebook", price: 2800, stock: 5 },
    { name: "Gamer Chair", price: 2800, stock: 5 },
    { name: "AOC Monitor", price: 2800, stock: 5 },
    { name: "MousePad", price: 2800, stock: 5 },
    { name: "Red Mouse", price: 2800, stock: 5 },
    { name: "Mechanical Keyboard", price: 2800, stock: 5 }
];

function join(userName, productName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0 || isNaN(quantity)) {
        console.log("Invalid quantity.");
        return;
    }

    let user = usersDB.find(u => u.name === userName);
    let product = products.find(p => p.name === productName);

    if (user && product && product.stock >= quantity && user.cash >= product.price * quantity) {
        user.cash -= product.price * quantity;
        product.stock -= quantity;
        user.purchaseHistory.push({ product: product.name, quantity: quantity });

        console.log(`Success! Client: ${user.name}, Product: ${product.name}, Quantity: ${quantity}`);
    } else {
        console.log(`Purchase failed :(`);
    }
}

function readStock(productName) {
    let product = products.find(p => p.name === productName);
    console.log(`Current stock for ${product.name} is ${product.stock}`);
}

function readCash(userName) {
    let user = usersDB.find(u => u.name === userName);
    console.log(`Current cash for ${user.name} is $${user.cash}`);
}

function showPurchaseHistory(userName) {
    let user = usersDB.find(u => u.name === userName);

    if (!user) {
        console.log("User not found.");
        return;
    }

    if (user.purchaseHistory.length === 0) {
        console.log(`${user.name} hasn't purchased anything yet.`);
        return;
    }

    console.log(`Purchase history of ${user.name}:`);
    user.purchaseHistory.forEach((item, index) => {
        console.log(`${index + 1}. Product: ${item.product}, Quantity: ${item.quantity}`);
    });
}


function solicitarEmprestimo(nomeUsuario, valorEmprestimo) {
    let usuario = usersDB.find(u => u.name === nomeUsuario);

    if (
        usuario &&
        usuario.cash >= 3000 &&
        (
            usuario.type === "VIP" ||
            usuario.type === "GOLD" ||
            usuario.type === "MASTER"
        )
    ) {
        usuario.cash += valorEmprestimo;

        // Marcar que o usuário possui um empréstimo ativo
        usuario.possuiEmprestimo = true;
        usuario.valorEmprestimo = valorEmprestimo;
        usuario.cash += valorEmprestimo

// Registro do empréstimo no histórico
usuario.historicemp.push({ valor: valorEmprestimo });

        console.log(`Empréstimo de R$${valorEmprestimo} concedido para ${usuario.name}`);
        console.log(`Seu novo saldo é de ${usuario.cash}`)
    } else{
        console.log("Empréstimo negado. Verifique os critérios.");
    }
}


// Example usage

solicitarEmprestimo("Lucas Garcia",20000)
