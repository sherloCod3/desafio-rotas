import { Footer } from "../Footer/Footer";
import estilos from "./comoAjudar.module.scss";

const servicos = [
  {
    emoji: "🩺",
    titulo: "Clínica Geral",
    descricao:
      "Consultas de rotina, diagnósticos e acompanhamento de saúde geral para toda a família.",
  },
  {
    emoji: "🦷",
    titulo: "Odontologia",
    descricao:
      "Limpeza, extração, restauração e orientação de saúde bucal para prevenção de doenças.",
  },
  {
    emoji: "👁️",
    titulo: "Oftalmologia",
    descricao:
      "Exames de visão, triagem ocular e encaminhamento para tratamento especializado.",
  },
  {
    emoji: "🧠",
    titulo: "Saúde Mental",
    descricao:
      "Acolhimento psicológico e psiquiátrico, apoio emocional e suporte em saúde mental.",
  },
  {
    emoji: "👶",
    titulo: "Pediatria",
    descricao:
      "Consultas pediátricas, acompanhamento do desenvolvimento e vacinação infantil.",
  },
  {
    emoji: "💊",
    titulo: "Farmácia Social",
    descricao:
      "Distribuição de medicamentos essenciais e orientação farmacêutica gratuita.",
  },
  {
    emoji: "🏃",
    titulo: "Fisioterapia",
    descricao:
      "Reabilitação motora, tratamento de lesões e melhoria da qualidade de vida.",
  },
  {
    emoji: "🍎",
    titulo: "Nutrição",
    descricao:
      "Orientação alimentar personalizada, combate à desnutrição e promoção de hábitos saudáveis.",
  },
];

const ComoAjudar = () => {
  return (
    <>
      <main>
        {/* Hero */}
        <section className={estilos.hero}>
          <h1 className={estilos.titulo}>Como Podemos Ajudar</h1>
          <p className={estilos.subtitulo}>
            Conheça os serviços médicos gratuitos que oferecemos à comunidade
          </p>
        </section>

        {/* Grade de Serviços */}
        <section className={estilos.secaoServicos}>
          <div className={estilos.cabecalho}>
            <h2 className={estilos.secaoTitulo}>Nossos Serviços</h2>
            <p className={estilos.secaoSubtitulo}>
              Atendimento humanizado e profissional, sem custo algum para você
            </p>
          </div>

          <div className={estilos.grade}>
            {servicos.map((s) => (
              <div key={s.titulo} className={estilos.card}>
                <span className={estilos.cardEmoji}>{s.emoji}</span>
                <h3 className={estilos.cardTitulo}>{s.titulo}</h3>
                <p className={estilos.cardTexto}>{s.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={estilos.secaoCta}>
          <h2 className={estilos.ctaTitulo}>Precisa de atendimento?</h2>
          <p className={estilos.ctaSubtitulo}>
            Entre em contato e agende uma consulta gratuitamente
          </p>
          <a href="mailto:alexandre.cavalari@outlook.com" className={estilos.btnCta}>
            Entrar em Contato
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ComoAjudar;
