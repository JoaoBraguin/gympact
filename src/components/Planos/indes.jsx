import React from 'react';
import style from './style.module.css';


export default function Planos() {
    return (
        <section className={style.destaques}>
            <h2>Planos</h2>
            <div className={style.postsContainer}>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Comum </h1>
                       <li>Treino personalizado mensal</li>
                       <li>Acompanhamento básico via aplicativo
                       Suporte para dúvidas via chat</li>
                       <li></li>
                       <li></li>
                        <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Plus</h1>
                        <p>Tudo do plano Comum, mais:
                            Treino personalizado semanal
                            Acompanhamento e ajustes constantes com o personal trainer
                            Sessões de feedback por vídeo (mensais)
                            Acesso a treinos e planos avançados
                            Suporte prioritário via chat e email</p>
                        <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Premium</h1>
                        <p>Tudo do plano Comum, mais:
                            Treino personalizado semanal
                            Acompanhamento e ajustes constantes com o personal trainer
                            Sessões de feedback por vídeo (mensais)
                            Acesso a treinos e planos avançados
                            Suporte prioritário via chat e email</p>
                        <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
            </div>
        </section>
    );
}