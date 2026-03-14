import { Router } from 'express';
import profissionais from '../data/voluntarios.js';
import validateProfissional from '../validators/voluntario.validator.js';

const router = Router();

/**
 * GET /api/profissionais
 * Retorna todos os profissionais voluntários cadastrados.
 */
router.get('/', (req, res) => {
  res.status(200).json({
    total: profissionais.length,
    profissionais,
  });
});

/**
 * POST /api/profissionais
 * Cadastra um novo profissional voluntário.
 *
 * Campos obrigatórios no corpo da requisição:
 *   - nome          {string} mínimo 3 caracteres
 *   - email         {string} endereço de e-mail válido
 *   - telefone      {string} 10 ou 11 dígitos numéricos
 *   - especialidade {string} não pode ser vazio
 *
 * Campos opcionais:
 *   - mensagem      {string} máximo 500 caracteres
 */
router.post('/', (req, res) => {
  const { valid, errors } = validateProfissional(req.body);

  if (!valid) {
    return res.status(400).json({
      mensagem: 'Dados inválidos. Corrija os erros abaixo.',
      erros: errors,
    });
  }

  const { nome, email, telefone, especialidade, mensagem } = req.body;

  const novoProfissional = {
    id: profissionais.length + 1,
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    telefone: telefone.replace(/[\s\-().+]/g, ''), // armazena apenas os dígitos
    especialidade: especialidade.trim(),
    mensagem: mensagem?.trim() ?? null,
    cadastradoEm: new Date().toISOString(),
  };

  profissionais.push(novoProfissional);

  return res.status(201).json({
    mensagem: 'Profissional cadastrado com sucesso!',
    profissional: novoProfissional,
  });
});

export default router;
