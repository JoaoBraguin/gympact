import React from "react";
import { FaFacebook, FaYoutube, } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import style from "./style.module.css";
import gympactsemfundo from '../../images/gympactsemfundo.png'

function Footer() {
  return (
    <footer className={style.rodape}>
        <img className={style.gympact} src={gympactsemfundo} alt="" />
        <div className={style.text1}>
        <h2>GymPact - Treinos Personalizados para Você</h2>
        <p> Transforme seus objetivos em resultados com planos de treino adaptados às suas necessidades. Junte-se à nossa comunidade e comece sua jornada fitness hoje mesmo!</p>
        <span>Siga nas redes sociais:</span>
        </div>
      <div className={style.redesSociais}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://Instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube size={24} />
        </a>
      </div>
      <div className={style.text2}>
      <h2>Contato:</h2>
      <p> Email: contato@gympact.com</p>
      <p>Telefone: (xx) xxxx-xxxx</p>
      <span>Termos de Uso | Política de Privacidade | FAQ</span>
      </div>
      <p className={style.direitos}>© 2025 Gympact. Todos os direitos reservados.</p> 
    </footer>
  );
}

export default Footer;