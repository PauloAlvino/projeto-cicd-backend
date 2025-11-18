const express = require('express');
const cors = require('cors');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;
const { version } = require('./package.json'); 

app.use(cors({ origin: 'https://projeto-cicd-front.vercel.app' }));

app.get('/', (req, res) => {
  const uptime = process.uptime();
  const uptimeFormatado = new Date(uptime * 1000).toISOString().substr(11, 8);

  res.json({
    status: "OPERACIONAL 🟢",
    mensagem: "API de Monitoramento CI/CD",
    versao: version,
    sistema: {
      os: os.type(),
      hostname: os.hostname(),
      memoriaLivre: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
      tempoOnline: uptimeFormatado
    },
    timestamp: new Date().toLocaleString('pt-BR')
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});