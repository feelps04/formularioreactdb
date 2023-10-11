const express = require('express');
const router = express.Router();
const db = require('./db'); // Certifique-se de que o arquivo db.js está configurado corretamente

// Rota para inserir os dados no banco de dados
router.post('/inserir_dados', (req, res) => {
  const formData = req.body;

  console.log('Dados recebidos para inserção:', formData); // Adicione este log

  // Substitua 'sua_tabela' pelo nome correto da tabela
  const sql = 'INSERT INTO sua_tabela SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).json({ message: 'Erro ao inserir os dados no banco de dados' });
    } else {
      console.log('Dados inseridos com sucesso');
      res.status(200).json({ message: 'Dados inseridos com sucesso' });
    }
  });
});

module.exports = router;
