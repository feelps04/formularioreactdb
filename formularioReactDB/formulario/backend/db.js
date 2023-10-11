const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root2', // Nome do novo usuário criado ('root2')
  password: '12@Felipe', // Senha do novo usuário criado
  database: 'formulario',
  port: 3307, // Porta correta do MySQL
});

module.exports = db;
