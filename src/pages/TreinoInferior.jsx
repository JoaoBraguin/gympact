import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/TreinoInferior.module.css';
import banner2 from "../images/BannerInferior.png";
import Quadriceps1 from "../images/Quadriceps1.png";
import Quadriceps2 from "../images/Quadriceps2.png";
import Quadriceps3 from "../images/Quadriceps3.png";
import Quadriceps4 from "../images/Quadriceps4.png";
import Posteriordecoxa2 from "../images/Posterior de coxa2.png";
import Posteriordecoxa4 from "../images/Posterior de coxa4.png";
import Posteriordecoxa5 from "../images/Posterior de coxa5.png";
import Posteriordecoxa6 from "../images/Posterior de coxa6.png";
import Gluteo1 from "../images/Gluteo1.png";
import Gluteo2 from "../images/Gluteo2.png";
import Gluteo3 from "../images/Gluteo3.png";
import Gluteo4 from "../images/Gluteo4.png";
import Gluteo5 from "../images/Gluteo5.png";
import Gluteo6 from "../images/Gluteo6.png";
import Panturrilha1 from "../images/Panturiilha1.png";
import Panturrilha2 from "../images/Panturiilha2.png";
import Exercicioinf from "../components/ExercicioInf";

export default function TreinoInferior() {
    return (
        <>
            <Header />

            <div className={style["espacamento-superior-grande"]}>
                <div className={style["centro-flexivel"]}>
                    <h2 className={style["titulo-secundario"]}>Sessão de treinos personalizados</h2>
                </div>
            </div>

            <div className={style["banner-inferior"]}>
                <img src={banner2} alt="Banner Inferior" />
                <h1>Inferior</h1>
            </div>

            <h2 className={style["titulo-secao"]}>Quadríceps</h2>
            <section className={style["secao-quadriceps"]}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Cadeira Extensora" inteira imagem={Quadriceps2} />
                <Exercicioinf titulo="Agachamento Sumô" imagem={Quadriceps3} />
                <Exercicioinf titulo="Agachamento" imagem={Quadriceps4} />
            </section>

            <hr className={style["linha-separadora"]} />

            <h2 className={style["titulo-secao"]}>Posterior de coxa</h2>
            <section className={style["secao-posterior"]}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Mesa Flexora" inteira imagem={Posteriordecoxa2} />
                <Exercicioinf titulo="Agachamento" imagem={Quadriceps4} />
                <Exercicioinf titulo="Stiff" imagem={Posteriordecoxa4} />
                <Exercicioinf titulo="Cadeira Flexora" inteira imagem={Posteriordecoxa5} />
                <Exercicioinf titulo="Levantamento terra" imagem={Posteriordecoxa6} />
            </section>

            <hr className={style["linha-separadora"]} />

            <h2 className={style["titulo-secao"]}>Glúteo</h2>
            <section className={style["secao-gluteo"]}>
                <Exercicioinf titulo="Leg Press" inteira imagem={Quadriceps1} />
                <Exercicioinf titulo="Afundo" imagem={Gluteo1} />
                <Exercicioinf titulo="Agachamento" imagem={Gluteo2} />
                <Exercicioinf titulo="Elevação Pélvica" imagem={Gluteo3} />
                <Exercicioinf titulo="Cadeira Adutora" inteira imagem={Gluteo4} />
                <Exercicioinf titulo="Levantamento terra" imagem={Gluteo5} />
            </section>

            <hr className={style["linha-separadora"]} />

            <h2 className={style["titulo-secao"]}>Panturrilha</h2>
            <section className={style["secao-panturrilha"]}>
                <Exercicioinf titulo="Panturrilha Sentado" imagem={Panturrilha1} />
                <Exercicioinf titulo="Panturrilha em Pé" inteira imagem={Panturrilha2} />
            </section>

            <Footer />
        </>
    );
}
