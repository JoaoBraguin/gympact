import React from 'react';
import style from './style.module.css';
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import fotodeperfil from '../../images/image 20.png';

export default function Avaliacoes() {
    return (
        <section className={style.destaques}>
            <h2>Avaliações</h2>
            <div className={style.avaliacoesContainer}>
                <article className={style.postCard}>

                    {/* Bloco do usuário flutuante por cima */}
                    <div className={style.usuario}>
                        <img className={style.foto} src={fotodeperfil} alt="Foto de perfil" />
                        <div className={style.avaliacao}>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoIosStarOutline />
                        </div>
                        <h3>Emanuel</h3>
                        <span>Aluno</span>
                    </div>

                    {/* Texto da avaliação */}
                    <p>
                        “O GymPact é um site de treinos personalizados fácil de usar,
                        com programas bem adaptáveis para diferentes objetivos.
                        A personalização e o acompanhamento de progresso são ótimos,
                        mas poderia incluir mais interação com treinadores e dicas nutricionais.
                        No geral, é uma excelente plataforma para quem busca treinos focados e eficientes.”
                    </p>
                </article>
                <a className={style.botao} href='/Testemunhos'>Ver Mais</a>
            </div>
        </section>
    );
}