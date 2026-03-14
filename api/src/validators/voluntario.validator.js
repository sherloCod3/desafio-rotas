/**
 * Valida os dados do corpo da requisição para um novo profissional voluntário.
 * Retorna { valid, errors } para que a rota decida como responder.
 *
 */
const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_ONLY_REGEX = /^\d+$/;

const validateProfissional = (body) => {
  const errors = [];
  const { nome, email, telefone, especialidade, mensagem } = body;

  // --- Validação do nome ---
  if (!nome || typeof nome !== 'string' || nome.trim().length < 3) {
    errors.push('O campo "nome" é obrigatório e deve ter no mínimo 3 caracteres.');
  }

  // --- Validação do e-mail ---
  if (!email || typeof email !== 'string' || !VALID_EMAIL_REGEX.test(email.trim())) {
    errors.push('O campo "email" é obrigatório e deve ser um endereço válido.');
  }

  // --- Validação do telefone ---
  if (!telefone || typeof telefone !== 'string') {
    errors.push('O campo "telefone" é obrigatório.');
  } else {
    const digits = telefone.replace(/[\s\-().+]/g, ''); // remove caracteres de formatação
    if (!DIGITS_ONLY_REGEX.test(digits) || digits.length < 10 || digits.length > 11) {
      errors.push('O campo "telefone" deve conter entre 10 e 11 dígitos numéricos.');
    }
  }

  // --- Validação da especialidade ---
  if (!especialidade || typeof especialidade !== 'string' || especialidade.trim().length === 0) {
    errors.push('O campo "especialidade" é obrigatório. Ex: Medicina, Odontologia.');
  }

  // --- Validação da mensagem (opcional, máximo 500 caracteres) ---
  if (mensagem !== undefined && mensagem !== null) {
    if (typeof mensagem !== 'string' || mensagem.length > 500) {
      errors.push('O campo "mensagem" deve ser um texto com no máximo 500 caracteres.');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export default validateProfissional;
