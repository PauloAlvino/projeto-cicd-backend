const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const { version } = require('./package.json');

app.use(cors({ origin: 'https://projeto-cicd-frontend.vercel.app' }));

app.get('/', (req, res) => {
  res.json({
    mensagem: "API FUNCIONANDO COM SUCESSO COM ALTERAÇÃO!",
    versao_atual: version
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});