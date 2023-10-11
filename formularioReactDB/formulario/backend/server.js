const express = require('express');
const app = express();
const path = require('path'); // Importe a biblioteca 'path' para lidar com caminhos de arquivo
const port = 3310; // Sua porta correta

// Configurar middleware para servir recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com o envio de dados via POST
app.post('/inserir_dados', (req, res) => {
  // Lógica para processar os dados recebidos
  const formData = req.body;
  console.log('Dados recebidos:', formData);

  // Responder ao cliente, se necessário
  res.json({ message: 'Dados recebidos com sucesso' });
});

// Rota para lidar com solicitação GET para a raiz do aplicativo
app.get('/', (req, res) => {
  // Lógica para lidar com a solicitação GET para a raiz do aplicativo
  res.send('Bem-vindo à minha aplicação!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
