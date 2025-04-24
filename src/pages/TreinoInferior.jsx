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
            <div className={style.padding}>
                <div className={style.destaque}>
                    <h2>Sessão de treinos personalizados</h2>
                </div>
            </div>
            <div className={style.banner1}>
                <img src={banner2} alt="" />
                <h1>Inferior</h1>
            </div>
            <h2 className={style.titulo1}>Quadriceps</h2>
            <section className={style.Quadriceps}>
                <Exercicioinf titulo="Leg Press" imagem={Quadriceps1} />
                <Exercicioinf titulo="Cadeira Extensora" imagem={Quadriceps2} />
                <Exercicioinf titulo="Agachamento Sumô" imagem={Quadriceps3} />
                <Exercicioinf titulo="Agachamento" imagem={Quadriceps4} />
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Posterior de coxa</h2>
            <section className={style.Posterior}>
                <Exercicioinf titulo="Leg Press" imagem={Quadriceps1} />
                <Exercicioinf titulo="Mesa Flexora" imagem={Posteriordecoxa2} />
                <Exercicioinf titulo="Agachamento" imagem={Quadriceps4} />
                <Exercicioinf titulo="Stiff" imagem={Posteriordecoxa4} />
                <Exercicioinf titulo="Cadeira Flexora" imagem={Posteriordecoxa5} />
                <Exercicioinf titulo="Levantamento terra" imagem={Posteriordecoxa6} />
            </section>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Gluteo</h2>
            <section className={style.Gluteo}>
                <Exercicioinf titulo="Leg Press" imagem={Quadriceps1} />
                <Exercicioinf titulo="Afundo" imagem={Gluteo1} />
                <Exercicioinf titulo="Agachamento" imagem={Gluteo2} />
                <Exercicioinf titulo="Elevação Pelvica" imagem={Gluteo3} />
                <Exercicioinf titulo="Cadeira Adutora" imagem={Gluteo4} />
                <Exercicioinf titulo="Levantamento terra" imagem={Gluteo5} />

            </section>
            <div className={style.seven}>
                <Exercicioinf titulo="Extensão De Quaril com coice" imagem={Gluteo6} />
            </div>
            <hr className={style.linha}></hr>
            <h2 className={style.titulo1}>Panturrilha</h2>
            <section className={style.Panturrilha}>
                <Exercicioinf titulo="Panturiilha Sentado" imagem={Panturrilha1} />
                <Exercicioinf titulo="Panturiilha em Pé" imagem={Panturrilha2} />
            </section>
            <Footer />
        </>
    )
}