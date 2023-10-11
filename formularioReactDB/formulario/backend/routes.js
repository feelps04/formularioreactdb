// Rota para buscar dados do banco de dados
router.get('/dados', (req, res) => {
  const query = 'SELECT * FROM formulario'; // Use o nome correto da tabela

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar dados' });
      return;
    }

    res.json(results);
  });
});
