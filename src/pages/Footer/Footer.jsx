import React from "react";
import estilos from "./estilos.module.scss";

// const LogoCoracao = () => (

// );
export const Footer = () => {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.container}>
        <div className={estilos.coluna}>
          <div className={estilos.logo}>
            <span className={estilos["icone-fundo-verde"]}>❤️</span>
            <p className={estilos["texto-logo"]}>Médicos & Dentistas</p>
          </div>
          <p className={estilos.slogan}>
            Saúde e cuidado sem barreiras para toda comunidade.
          </p>
        </div>

        { }
        <div className={estilos.coluna}>
          <h4 className={estilos.titulo}>Contato</h4>
          <ul className={estilos.lista}>
            <li>
              <span>✉️</span> alexandre.cavalari@outlook.com
            </li>
            <li>
              <span>📞</span> (14) 99116-5008
            </li>
            <li>
              <span>📍</span> Lençóis Paulista, SP
            </li>
          </ul>
        </div>

        { }
        <div className={estilos.coluna}>
          <h4 className={estilos.titulo}>Redes Sociais</h4>
          <ul className={estilos.lista}>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      { }
      <div className={estilos.inferior}>
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
