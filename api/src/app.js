import express from 'express';
import voluntariosRoutes from './routes/voluntarios.routes.js';

const app = express();

// CORS — permite que o frontend (Vite :5173) acesse a API (:3000)
// Em produção, substitua '*' pela origem real do seu frontend.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Middleware: interpreta o corpo das requisições como JSON
app.use(express.json());

// Montagem das rotas de profissionais voluntários
app.use('/api/profissionais', voluntariosRoutes);

// Tratamento de rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

export default app;

