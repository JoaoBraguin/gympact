import React from 'react';
import style from './style.module.css';
import Superiores from '../../images/Superior.png'
import Inferiores from '../../images/Inferior.png'


export default function Treinos() {
  return (
    <section className={style.destaques}>
      <h2>Treinos Personalizdos</h2>
      <div className={style.postsContainer}>
        <a href='/treinos-superiores' className={style.postCard}>
          <div className={style.postContent}>
            <h1 className={style.title}>Superiores</h1>
            <div className={style.imagecontainer}>
            <img src={Superiores} alt="" />
            </div>
            <div className={style.buttoncontainer}>
            <button className={style.readMore}>Acessar Mais</button>
            </div>
          </div>
        </a>
        <a  href='/treinos-inferiores' className={style.postCard}>
          <div className={style.postContent}>
            <h1 className={style.title}>Inferiores</h1>
            <div className={style.imagecontainer}>
            <img src={Inferiores} alt="" />
            </div>
            <div className={style.buttoncontainer}>
            <button className={style.readMore}>Acessar Mais</button>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}