import app from './src/app.js';

// Porta onde o servidor irá escutar as requisições
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`   Servidor rodando em http://localhost:${PORT}`);
  console.log(`   Rotas disponíveis:`);
  console.log(`   GET  http://localhost:${PORT}/api/profissionais`);
  console.log(`   POST http://localhost:${PORT}/api/profissionais`);
});
