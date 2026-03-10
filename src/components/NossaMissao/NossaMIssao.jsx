import React from "react";
import estilos from "./nossa_missao.module.scss";

function NossaMissao() {
  return (
    <div className={estilos["secao-container"]}>
      
      <section className={estilos["secao-missao"]}>
        <div className={estilos["missao-cabecalho"]}>
          <h2 className={estilos["titulo-principal"]}>Nossa Missão</h2>
          <p className={estilos["subtitulo"]}>
            Transformar vidas através do acesso universal à saúde de qualidade
          </p>
        </div>

        <div className={estilos["missao-cards-grid"]}>
          
          <div className={estilos["missao-card"]}>
            <h3 className={estilos["card-titulo"]}>Acesso Equitativo</h3>
            <p className={estilos["card-texto"]}>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </div>

          
          <div className={estilos["missao-card"]}>
            <h3 className={estilos["card-titulo"]}>Comunidade Forte</h3>
            <p className={estilos["card-texto"]}>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </div>

          
          <div className={estilos["missao-card"]}>
            <h3 className={estilos["card-titulo"]}>Bem-estar Total</h3>
            <p className={estilos["card-texto"]}>
              Oferecer atendimento integral em medicina geral e odontologia para
              melhorar a qualidade de vida.
            </p>
          </div>
        </div>
      </section>

     
      <section className={estilos["secao-impacto"]}>
        <div className={estilos["missao-cabecalho"]}>
          <h2 className={estilos["titulo-principal"]}>Nosso Impacto</h2>
          <p className={estilos["subtitulo"]}>
            Transformando a saúde de nossa comunidade, um paciente de cada vez
          </p>
        </div>

        <div className={estilos["impacto-cards-grid"]}>
          
          <div className={estilos["impacto-card"]}>
            <span className={estilos["impacto-numero"]}>2.500+</span>
            <p className={estilos["impacto-descricao"]}>Pessoas Atendidas</p>
          </div>

          
          <div className={estilos["impacto-card"]}>
            <span className={estilos["impacto-numero"]}>150+</span>
            <p className={estilos["impacto-descricao"]}>
              Profissionais Voluntários
            </p>
          </div>

          
          <div className={estilos["impacto-card"]}>
            <span className={estilos["impacto-numero"]}>98%</span>
            <p className={estilos["impacto-descricao"]}>
              Satisfação dos Pacientes
            </p>
          </div>

          
          <div className={estilos["impacto-card"]}>
            <span className={estilos["impacto-numero"]}>5+</span>
            <p className={estilos["impacto-descricao"]}>Anos de Dedicação</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NossaMissao;
