import React from 'react';
import style from './style.module.css';


export default function Planos() {
    return (
        <section className={style.destaques}>
            <h2>Nossos Planos</h2>
            <div className={style.postsContainer}>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Comum🥈</h1>
                      <ul className={style.lista}>
                      <li>Treino personalizado mensal</li>
                       <li>Acompanhamento básico via aplicativo
                       Suporte para dúvidas via chat</li>
                       <li>Acesso a vídeos e guias de treino básicos</li>
                       <li>Acesso ao grupo de suporte no WhatsApp</li>
                      </ul>
                      <h2 className={style.preco}>
                        R$70,00
                      </h2>
                      <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Plus➕</h1>
                        <ul className={style.lista}>
                      <li>Tudo do plano Comum, mais:</li>
                       <li>Treino personalizado semanal</li>
                       <li>Acompanhamento e ajustes constantes com o personal trainer</li>
                       <li>Sessões de feedback por vídeo (mensais)</li>
                       <li>Acesso a treinos e planos avançados</li>
                       <li>Suporte prioritário via chat e email</li>
                      </ul>
                      <h2 className={style.preco}>
                        R$125,00
                      </h2>
                        <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
                <article className={style.postCard}>
                    <div className={style.postContent}>
                        <h1 className={style.title}>Premium👑</h1>
                        <ul className={style.lista}>
                      <li>Tudo do plano Plus, mais:</li>
                       <li>Treino personalizado diário</li>
                       <li>Acompanhamento individual com videochamadas semanais</li>
                       <li>Planos de nutrição personalizados</li>
                       <li>Acesso a conteúdo exclusivo (webinars, workshops)</li>
                       <li>Suporte 24/7 via chat e chamadas de emergência</li>
                       <li>Acesso antecipado a novos programas de treino e desafios exclusivos</li>
                      </ul>
                        <h2 className={style.preco}>
                        R$200,00
                      </h2>
                        <button className={style.readMore}>Assinar</button>
                    </div>
                </article>
            </div>
        </section>
    );
}