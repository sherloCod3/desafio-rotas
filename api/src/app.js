import express from 'express';
import voluntariosRoutes from './routes/voluntarios.routes.js';

const app = express();

// Middleware: interpreta o corpo das requisições como JSON
app.use(express.json());

// Montagem das rotas de profissionais voluntários
app.use('/api/profissionais', voluntariosRoutes);

// Tratamento de rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

export default app;
