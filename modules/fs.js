const fs = require('fs');
const path = require('path');

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error) return console.log("A pasta já existe.\n" + error);
    console.log('Pasta criada com sucesso.');
});

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'Hello node!\n', (error) => {
    if (error) return console.log("Algo deu errado: \n" + error);
    console.log("success!");

    // Adicionar à um arquivo
    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello, world!', (error) => {
        if (error) return console.log(error);
        console.log("Arquivo modificado com sucesso!");
    });

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf8', (error, data) => {
        if (error) return console.log(+error);
        console.log(data);
    });
});