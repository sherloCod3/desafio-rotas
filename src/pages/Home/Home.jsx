import { Link } from "react-router-dom";
import NossaMissao from "../../components/NossaMissao/NossaMIssao";
import ImgMedico from "../../assets/medico.png";
import { Footer } from "../Footer/Footer";
import estilos from "./home.module.scss";

const IconeEstetoscopio = () => (
  <img src="../../assets/heart.svg" alt="" />
);
const Home = () => {
  return (
    <>
      <main className={estilos["secao-hero"]}>
        <div className={estilos["hero-container"]}>
          <div className={estilos["hero-texto"]}>
            <div className={estilos["hero-chip"]}>
              <IconeEstetoscopio />
              <span>Saúde para todos</span>
            </div>

            <h1 className={estilos["hero-titulo"]}>
              Saúde e cuidado sem barreiras
            </h1>

            <p className={estilos["hero-subtitulo"]}>
              Um projeto dedicado a oferecer atendimento médico e odontológico
              gratuito para pessoas que mais precisam na nossa comunidade.
            </p>

            <div className={estilos["hero-botoes"]}>
              <Link to="/voluntario" className={estilos["btn-primario"]}>
                Seja Voluntário
              </Link>
              <Link to="/como-ajudar" className={estilos["btn-secundario"]}>
                Como Ajudar
              </Link>
            </div>
          </div>

          <div className={estilos["hero-imagem-container"]}>
            <img src={ImgMedico} alt="imagem de um médico" />
          </div>
        </div>
      </main>
      <NossaMissao />
      <Footer />
    </>
  );
};

export default Home;
