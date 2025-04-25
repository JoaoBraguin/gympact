import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/Favorito.module.css';
import Exercicio from "../components/Exercicio";
import Exercicioinf from "../components/ExercicioInf";
import peito1 from '../images/supino-articulado-inclinado 1.png'
import peito2 from '../images/peito2.png'
import peito3 from '../images/peito3.png'
import costa4 from '../images/Costa4.png'
import costa6 from '../images/Costa6.png'
import Ombro1 from '../images/Ombro1.png'
import Ombro2 from '../images/Ombro2.png'
import Ombro3 from '../images/Ombro3.png'
import Biceps1 from '../images/Biceps1.png'
import Biceps2 from '../images/Biceps2.png'
import triceps1 from '../images/Triceps1.png'
import triceps2 from '../images/Triceps2.png'
import Ante1 from '../images/Ante1.png'
import Ante2 from '../images/Ante2.png'
import Quadriceps1 from "../images/Quadriceps1.png";
import Quadriceps2 from "../images/Quadriceps2.png";
import Posteriordecoxa2 from "../images/Posterior de coxa2.png";
import Posteriordecoxa5 from "../images/Posterior de coxa5.png";
import Gluteo4 from "../images/Gluteo4.png";
import Panturrilha2 from "../images/Panturiilha2.png";




export default function Favorito() {
    return (
        <>
            <Header />
            <div className={style.padding}>
                <div className={style.destaque}>
                    <h2>Favoritos</h2>
                </div>
            </div>
            <h2 className={style.titulo1}>Peito</h2>
            <section className={style.peito}>
                <Exercicio titulo="Supino Inclinado" inteira imagem={peito1}/>
                <Exercicio titulo="Supino Reto" inteira imagem={peito2}/>
                <Exercicio titulo="Supino Declinado" inteira imagem={peito3}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Costa</h2>
            <section className={style.costa}>
                <Exercicio titulo="Remada Curvada" inteira imagem={costa4}/>
                <Exercicio titulo="Remada com halter" inteira imagem={costa6}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Ombro</h2>
            <section className={style.Ombro}>
            <Exercicio titulo="Elevação Frontal" inteira imagem={Ombro1}/>
            <Exercicio titulo="Elevação Lateral" inteira imagem={Ombro2}/>
            <Exercicio titulo="Desenvolvimento" inteira imagem={Ombro3}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Biceps</h2>
            <section className={style.Biceps}>
            <Exercicio titulo="Rosca Direta" inteira imagem={Biceps1}/>
            <Exercicio titulo="Rosca Scott" inteira imagem={Biceps2}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Triceps</h2>
            <section className={style.Triceps}>
            <Exercicio titulo="Triceps Frances" inteira imagem={triceps1}/>
            <Exercicio titulo="Triceps Corda" inteira imagem={triceps2}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Antebraço</h2>
            <section className={style.Ante}>
            <Exercicio titulo="Rotação De Punho" inteira imagem={Ante1}/>
            <Exercicio titulo="Rosca Inversa" inteira imagem={Ante2}/>
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Quadriceps</h2>
            <section className={style.Quadriceps}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Cadeira Extensora" inteira imagem={Quadriceps2} />
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Posterior de coxa</h2>
            <section className={style.Posterior}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Mesa Flexora" inteira imagem={Posteriordecoxa2} />
                <Exercicioinf titulo="Cadeira Flexora" inteira imagem={Posteriordecoxa5} />
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Gluteo</h2>
            <section className={style.Gluteo}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Cadeira Adutora" inteira imagem={Gluteo4} />
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Panturrilha</h2>
            <section className={style.Panturrilha}>
                <Exercicioinf titulo="Panturiilha em Pé" inteira imagem={Panturrilha2} />
            </section>
            <Footer />
        </>
    )
}