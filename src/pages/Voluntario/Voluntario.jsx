import { Footer } from "../Footer/Footer";
import estilos from "./voluntario.module.scss";

const Voluntario = () => {
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

            <form className={estilos.formulario}>
              <div className={estilos.grupoInput}>
                <label>Dados Pessoais</label>
                <div className={estilos.linhaInputs}>
                  <input type="text" placeholder="Seu Nome *" required />
                  <input type="email" placeholder="Seu Email *" required />
                </div>
                <input type="tel" placeholder="Seu Telefone *" required />
              </div>

              <div className={estilos.grupoInput}>
                <label>Mensagem Adicional</label>
                <textarea
                  placeholder="Conte-nos porque você quer ser voluntário..."
                  rows="5"
                ></textarea>
              </div>

              <p className={estilos.aviso}>
                Entraremos em contato para mais informações
              </p>

              <button type="submit" className={estilos.btnEnviar}>
                Enviar Inscrição
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Voluntario;
