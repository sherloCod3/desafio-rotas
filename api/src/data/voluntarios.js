// Armazenamento em memória dos profissionais voluntários cadastrados.
// Os dados são reiniciados a cada reinicialização do servidor. Sem banco de dados.
const profissionais = [];

// Contador monotônico de IDs — evita colisões em caso de remoções futuras.
export let nextId = 1;
export const incrementId = () => nextId++;

export default profissionais;

