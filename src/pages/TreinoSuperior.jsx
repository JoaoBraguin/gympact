import Footer from "../components/Footer";
import Header from "../components/Header";
import style from '../styles/TreinoSuperior.module.css';
import Banner from '../images/BannerS.png'
import peito1 from '../images/supino-articulado-inclinado 1.png'
import peito2 from '../images/peito2.png'
import peito3 from '../images/peito3.png'
import peito4 from '../images/peito4.png'
import peito5 from '../images/peito5.png'
import peito6 from '../images/peito6.png'
import costa1 from '../images/Costa1.png'
import costa2 from '../images/costa2.png'
import costa3 from '../images/Costa3.png'
import costa4 from '../images/Costa4.png'
import costa5 from '../images/Costa5.png'
import costa6 from '../images/Costa6.png'
import Ombro1 from '../images/Ombro1.png'
import Ombro2 from '../images/Ombro2.png'
import Ombro3 from '../images/Ombro3.png'
import Ombro4 from '../images/Ombro4.png'
import Biceps1 from '../images/Biceps1.png'
import Biceps2 from '../images/Biceps2.png'
import Biceps3 from '../images/Biceps3.png'
import Biceps4 from '../images/Biceps4.png'
import triceps1 from '../images/Triceps1.png'
import triceps2 from '../images/Triceps2.png'
import triceps3 from '../images/Triceps3.png'
import triceps4 from '../images/Triceps4.png'
import Ante1 from '../images/Ante1.png'
import Ante2 from '../images/Ante2.png'
import Trapezio1 from '../images/Trapezio1.png'
import Exercicio from "../components/Exercicio";

export default function TreinoSuperior() {
    return (
        <>
            <Header />
            <div className={style.padding}>
                <div className={style.destaque}>
                    <h2>Sessão de treinos personalizados</h2>
                </div>
            </div>
            <div className={style.banner1}>
                <img src={Banner} alt="" />
                <h1>Superior</h1>
            </div>
            <h2 className={style.titulo1}>Peito</h2>
            <section className={style.peito}>
                <Exercicio titulo="Supino Inclinado" inteira imagem={peito1}/>
                <Exercicio titulo="Supino Reto" inteira imagem={peito2}/>
                <Exercicio titulo="Supino Declinado" inteira imagem={peito3}/>
                <Exercicio titulo="Voador" imagem={peito4}/>
                <Exercicio titulo=" Crusifixo na polia" imagem={peito5}/>
                <Exercicio titulo="fly" imagem={peito6}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Costa</h2>
            <section className={style.costa}>
                <Exercicio titulo="Puxada Frente" imagem={costa1}/>
                <Exercicio titulo="Puxada Átras" imagem={costa2}/>
                <Exercicio titulo="Puxada Neutra" imagem={costa3}/>
                <Exercicio titulo="Remada Curvada" inteira imagem={costa4}/>
                <Exercicio titulo="Remada na maquina" imagem={costa5}/>
                <Exercicio titulo="Remada com halter" inteira imagem={costa6}/>
            </section>
            <div className={style.linha}>
                <hr></hr>
            </div>
            <h2 className={style.titulo1}>Ombro</h2>
            <section className={style.Ombro}>
            <Exercicio titulo="Elevação Frontal" inteira imagem={Ombro1}/>
            <Exercicio titulo="Elevação Lateral" inteira imagem={Ombro2}/>
            <Exercicio titulo="Desenvolvimento" inteira imagem={Ombro3}/>
            <Exercicio titulo="Crusifixo Inverso" imagem={Ombro4}/>
            </section>
            <div className={style.linha}>
                <hr></hr>
            </div>
            <h2 className={style.titulo1}>Biceps</h2>
            <section className={style.Biceps}>
            <Exercicio titulo="Rosca Direta" inteira imagem={Biceps1}/>
            <Exercicio titulo="Rosca Scott" inteira imagem={Biceps2}/>
            <Exercicio titulo="Rosca bayersian" imagem={Biceps3}/>
            <Exercicio titulo="Rosca Martelo" imagem={Biceps4}/>
            </section>
            <div className={style.linha}>
                <hr></hr>
            </div>
            <h2 className={style.titulo1}>Triceps</h2>
            <section className={style.Triceps}>
            <Exercicio titulo="Triceps Frances" inteira imagem={triceps1}/>
            <Exercicio titulo="Triceps Corda" inteira imagem={triceps2}/>
            <Exercicio titulo="Triceps na barra W" imagem={triceps3}/>
            <Exercicio titulo="Triceps Testa" imagem={triceps4}/>
            </section>
            <div className={style.linha}>
                <hr></hr>
            </div>
            <h2 className={style.titulo1}>Antebraço</h2>
            <section className={style.Ante}>
            <Exercicio titulo="Rotação De Punho" inteira imagem={Ante1}/>
            <Exercicio titulo="Rosca Inversa" inteira imagem={Ante2}/>
            </section>
            <div className={style.linha}>
                <hr></hr>
            </div>
            <h2 className={style.titulo1}>Trapezio</h2>
            <section className={style.Trapezio}>
            <Exercicio titulo="Encolhimento na polia" imagem={Trapezio1}/>
            </section>
            <Footer />
        </>
    )
}