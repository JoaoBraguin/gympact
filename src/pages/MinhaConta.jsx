import style from "../styles/minhaconta.module.css"
import Header from "../components/Header";
import imagem from '../images/127Perfil.png'
import Footer from "../components/Footer";

export default function MinhaConta() {
    return (
        <>
            <Header />
            <div className={style.info}>
                <img src={imagem} alt="" />
                <div className={style.info2}>
                    <div>
                        <h1>Seu Nome</h1>
                        <p>Eduardo Junqueira dos Santos</p>
                    </div>
                    <div>
                        <h1>Seu Email</h1>
                        <p>eduardojunqueira@gmail.com</p>
                    </div>
                    <div>
                        <h1>Seu Telefone</h1>
                        <p>16998989898</p>
                    </div>
                </div>
            </div>
            <hr className={style.linha} />
            <section className={style.dados}>
                <div className={style.esq}>
                    <div className={style.a1}>
                        <h1>Plano Atual</h1>
                        <p>Premium👑</p>
                    </div>
                    <div className={style.a1}>
                        <h1>Objetivo Atual</h1>
                        <p>Hipertrofia🦾</p>
                    </div>
                    <div className={style.a1}>
                        <h1>Preferencia De Treino</h1>
                        <div className={style.textos}>
                            <p>Upper/Lower 🏋️‍♀️</p>
                            <p>FullBody 🏋️‍♀️</p>
                            <p>ABC 🏋️‍♀️</p>

                        </div>
                    </div>
                </div>
                <div className={style.dir}>
                    <div className={style.a1}>
                        <h1>Peso e Altura</h1>
                        <div className={style.textos}>
                            <p>180cm | 82kg</p>
                        </div>
                    </div>
                    <div className={style.a1}>
                        <h1>BF</h1>
                        <div className={style.textos}>
                            <p>20%</p>
                        </div>
                    </div>
                    <div className={style.a1}>
                        <h1>Consquistas</h1>
                        <div className={style.textos}>
                            <p>18 dias 🔥</p>
                            <p>60 dias </p>
                            <p>20kg Ganhos</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className={style.linha} />
            <div className={style.conta}>
                <h1>Trocar Senha</h1>
            </div>
            <div className={style.conta}>
                <div className={style.a1}>
                    <h1>Senha Atual</h1>
                    <div className={style.senha}>
                        <p>**************</p>
                    </div>
                </div>
                <div className={style.a1}>
                    <h1>Senha Nova</h1>
                    <div className={style.senha}>
                        <p>*************</p>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                    <button>Salvar</button>
                </div>
                <Footer />
        </>
    )
}