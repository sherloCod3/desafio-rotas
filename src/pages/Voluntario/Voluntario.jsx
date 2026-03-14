import { useState } from "react";
import { Footer } from "../Footer/Footer";
import estilos from "./voluntario.module.scss";

const API_URL = "http://localhost:3000/api/profissionais";

const camposIniciais = {
  nome: "",
  email: "",
  telefone: "",
  especialidade: "",
  mensagem: "",
};

const Voluntario = () => {
  const [campos, setCampos] = useState(camposIniciais);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [erros, setErros] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErros([]);

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campos),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        // A API retorna { mensagem, erros: string[] } em caso de 400
        setErros(dados.erros ?? [dados.mensagem ?? "Erro desconhecido."]);
        setStatus("error");
        return;
      }

      setStatus("success");
      setCampos(camposIniciais);
    } catch {
      setErros(["Não foi possível conectar ao servidor. Tente novamente."]);
      setStatus("error");
    }
  };

  return (
    <>
      <main>
        <section className={estilos.introducao}>
          <h1 className={estilos.titulo}>Seja Voluntário</h1>
          <p className={estilos.subtitulo}>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>

          <div className={estilos.cardsBeneficios}>
            <div className={estilos.card}>
              <h3>Impacto Direto</h3>
              <p>Sua dedicação salva vidas e transforma comunidades</p>
            </div>
            <div className={estilos.card}>
              <h3>Crescimento Pessoal</h3>
              <p>Desenvolva habilidades e cresça profissionalmente</p>
            </div>
            <div className={estilos.card}>
              <h3>Comunidade</h3>
              <p>Faça parte de uma rede de profissionais comprometidos</p>
            </div>
          </div>
        </section>

        {/* Seção do Formulário */}
        <section className={estilos.secaoFormulario}>
          <div className={estilos.containerForm}>
            <h2>Inscrição para Voluntários</h2>

            {status === "success" ? (
              <div className={estilos.sucesso}>
                <p>✅ Inscrição enviada com sucesso! Entraremos em contato em breve.</p>
                <button
                  className={estilos.btnEnviar}
                  onClick={() => setStatus("idle")}
                >
                  Nova inscrição
                </button>
              </div>
            ) : (
              <form className={estilos.formulario} onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <div className={estilos.grupoInput}>
                  <label>Dados Pessoais</label>
                  <div className={estilos.linhaInputs}>
                    <input
                      type="text"
                      name="nome"
                      value={campos.nome}
                      onChange={handleChange}
                      placeholder="Seu Nome *"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={campos.email}
                      onChange={handleChange}
                      placeholder="Seu Email *"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="telefone"
                    value={campos.telefone}
                    onChange={handleChange}
                    placeholder="Seu Telefone * (ex: 11999998888)"
                    required
                  />
                </div>

                {/* Especialidade */}
                <div className={estilos.grupoInput}>
                  <label>Especialidade *</label>
                  <input
                    type="text"
                    name="especialidade"
                    value={campos.especialidade}
                    onChange={handleChange}
                    placeholder="Ex: Medicina, Odontologia, Enfermagem…"
                    required
                  />
                </div>

                {/* Mensagem opcional */}
                <div className={estilos.grupoInput}>
                  <label>Mensagem Adicional</label>
                  <textarea
                    name="mensagem"
                    value={campos.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos porque você quer ser voluntário..."
                    rows="5"
                    maxLength={500}
                  />
                </div>

                {/* Erros retornados pela API */}
                {status === "error" && erros.length > 0 && (
                  <ul className={estilos.listaErros}>
                    {erros.map((e, i) => (
                      <li key={i}>⚠ {e}</li>
                    ))}
                  </ul>
                )}

                <p className={estilos.aviso}>
                  Entraremos em contato para mais informações
                </p>

                <button
                  type="submit"
                  className={estilos.btnEnviar}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Enviando…" : "Enviar Inscrição"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Voluntario;

