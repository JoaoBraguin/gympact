import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/TreinoSuperior.module.css';
import Banner from '../images/BannerS.png';
import Exercicio from "../components/Exercicio";
import exercicios from "../data/exercicios"; // Array importado com estrutura que você mostrou

export default function TreinoSuperior() {
    // Filtra apenas os do tipo "Superior"
    const exerciciosSuperiores = exercicios.filter(e => e.tipo === "Superior");

    // Agrupa por categoria
    const categorias = {};
    exerciciosSuperiores.forEach((ex) => {
        if (!categorias[ex.categoria]) {
            categorias[ex.categoria] = [];
        }
        categorias[ex.categoria].push(ex);
    });

    return (
        <>
            <Header />
            <div className={style.padding}>
                <div className={style.destaque}>
                    <h2>Sessão de treinos personalizados</h2>
                </div>
            </div>

            <div className={style.banner1}>
                <img src={Banner} alt="Banner Superior" />
                <h1>Superior</h1>
            </div>

            {/* Renderiza dinamicamente cada categoria */}
            {Object.entries(categorias).map(([categoria, lista]) => (
                <div key={categoria}>
                    <h2 className={style.titulo1}>{categoria}</h2>
                    <section className={style.secao} >
                        {lista.map((ex) => (
                            <Exercicio
                                key={ex.id}
                                id={ex.id}
                                titulo={ex.nome}
                                imagem={ex.capa}
                                inteira={ex.inteira}
                            />
                        ))}
                    </section>
                    <hr className={style.linha} />
                </div>
            ))}

            <Footer />
        </>
    );
}
