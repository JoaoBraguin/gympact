import style from '../styles/Sobre.module.css'
import imagem from '../images/127Perfil.png'
import imagemlogoj from '../images/joaoperfil.png'
import imagemlogor from '../images/guiperfil.png'
import imagemlogoz from '../images/zaneliperfil.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Sobre() {
    return (
        <>
            <Header />
            <div className={style.sobre}>
                <h1>Sobre Nós </h1>
                <h2>No GymPact, acreditamos que cada pessoa é única e seu treino também deve ser! Nossa missão é oferecer treinos personalizados que se adaptam ao seu estilo de vida, objetivos e nível de condicionamento físico. Com planos sob medida, vídeos explicativos e suporte inteligente, ajudamos você a treinar de forma eficiente e motivadora – onde e quando quiser.
                    Seja para ganhar força, perder peso ou melhorar seu desempenho, estamos aqui para transformar sua jornada fitness de maneira prática e acessível. 💪🚀
                </h2>
                <h1>Equipe</h1>
            </div>
            <section className={style.testemunhos}>
                <div className={style.equipe}>
                    <img src={imagem} alt="" />
                    <div className={style.info}>
                        <h1>Joao Pedro </h1>
                        <h2>Desenvolvedor</h2>
                        <h2>Designer</h2>
                    </div>
                </div>


                <div className={style.equipeesq}>
                    <div className={style.infoesq}>
                        <h1>Guilherme Reis </h1>
                        <h2>Desenvolvedor</h2>
                        <h2>Designer</h2>
                    </div>
                    <img src={imagem} alt="" />
                </div>

                <div className={style.equipe}>
                    <img src={imagem} alt="" />
                    <div className={style.info}>
                        <h1> Eduardo </h1>
                        <h2>Desenvolvedor</h2>
                        <h2>Designer</h2>
                    </div>
                </div>
                <div className={style.equipeesq}>
                    <div className={style.infoesq}>
                        <h1> Gabriel Zanelli </h1>
                        <h2>Desenvolvedor</h2>
                        <h2>Designer</h2>
                    </div>
                    <img src={imagem} alt="" />
                </div>

            </section>
            <Footer />
        </>
    )
}