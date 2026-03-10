import { Link } from "react-router-dom";
import { useState } from "react";

import estilos from "./header.module.scss";

const IconeEstetoscopio = () => (
  <span className={estilos["icone-estetoscopio"]}>
    <img src="/src/assets/heart.svg" alt="heart" width={24} height={24} />
  </span>
);
const Header = () => {
  const [menuAberto, setmenuAberto] = useState(false);

  const alternarMenu = () => {
    setmenuAberto(!menuAberto);
  };
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos["cabecalho-container"]}>
        <div className={estilos["cabecalho-logo"]}>
          <IconeEstetoscopio />
          <Link to="/">Médicos & Dentistas</Link>
        </div>
        <button className={estilos.hamburguer} onClick={alternarMenu}>
          <span
            className={`${estilos.barra} ${menuAberto ? estilos.aberto : ""}`}
          ></span>
          <span
            className={`${estilos.barra} ${menuAberto ? estilos.aberto : ""}`}
          ></span>
          <span
            className={`${estilos.barra} ${menuAberto ? estilos.aberto : ""}`}
          ></span>
        </button>
        <nav
          className={`${estilos.navegacao} ${
            menuAberto ? estilos.menuAtivo : ""
          }`}
        >
          <Link to="/" className={estilos["nav-link"]} onClick={alternarMenu}>
            Home
          </Link>
          <Link to="/voluntario" className={estilos["btn-voluntario"]}>
            Seja Voluntário
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
