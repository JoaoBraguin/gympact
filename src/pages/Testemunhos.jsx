import style from '../styles/Testemunhos.module.css'
import imagem from '../images/127Perfil.png'
import star1 from '../images/star1.jpeg'
import star2 from '../images/star2.jpeg'
import { FaStar } from 'react-icons/fa'
import gympactsemfundo from '../images/gympactsemfundo.png'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Testemhunhos() {
    return (
        <>

            <Header />
            <div className={style.inicio}>
                <h1>Testemhunhos </h1>
            </div>
            <section className={style.testemunhos}>
                <div className={style.equipe}>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1>Emanuel</h1>
                        <h2>Aluno</h2>
                    </div>
                    <div className={style.infocontainer}>
                        <div className={style.info}>
                            <h2>“O GymPact é um site de treinos personalizados fácil de usar, com programas bem adaptáveis para diferentes objetivos. A personalização e o acompanhamento de progresso são ótimos, mas poderia incluir mais interação com treinadores e dicas nutricionais. No geral, é uma excelente plataforma para quem busca treinos focados e eficientes.”</h2>
                        </div>
                        <div className={style.stars}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                </div>

                <div className={style.equipe}>
                    <div className={style.infocontainer}>
                     
                        <div className={style.info}>
                            <h2>"Eu sou iniciante e estava com medo de começar a treinar, mas os treinos aqui são super acessíveis e as instruções são claras. Já vejo melhorias no meu corpo e, mais importante, estou me divertindo! Vou continuar acompanhando e fazendo os treinos."</h2>
                        </div>
                        <div className={style.starsleft}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1> Joao Vitor </h1>
                        <h2>Aluno</h2>
                    </div>
                </div>

                <div className={style.equipe}>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1>Gisele</h1>
                        <h2>Aluna</h2>
                    </div>
                    <div className={style.infocontainer}>
                        <div className={style.info}>
                            <h2>"Os treinos são ótimos! Gosto de como você pode ajustar a intensidade de acordo com o seu nível. Além disso, os vídeos demonstrativos ajudam bastante a manter a forma correta, o que é essencial para evitar lesões. Uma experiência de treino incrível!"</h2>
                        </div>
                        <div className={style.stars}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                </div>

                <div className={style.equipe}>
                    <div className={style.infocontainer}>
                   
                        <div className={style.info}>
                            <h2>"Os treinos são desafiadores, mas de uma forma que eu gosto! A cada sessão, consigo ver o quanto melhorei em relação ao meu desempenho anterior. Não consigo mais parar de treinar! Esse site realmente me ajudou a mudar minha mentalidade sobre exercícios."</h2>
                        </div>
                        <div className={style.starsleft}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1> Esthevão </h1>
                        <h2>Aluno</h2>
                    </div>
                </div>

                <div className={style.equipe}>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1>Tiago</h1>
                        <h2>Aluno</h2>
                    </div>
                    <div className={style.infocontainer}>
                        <div className={style.info}>
                            <h2>"Adoro como cada treino é bem estruturado e como é fácil seguir a sequência de exercícios. A plataforma também tem ótimos recursos de acompanhamento, como o histórico de treinos, que me ajuda a ver minha evolução. Super recomendo para quem quer resultados de forma consistente!"</h2>
                        </div>
                        <div className={style.stars}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                </div>

                <div className={style.equipe}>
                    <div className={style.infocontainer}>
                      
                        <div className={style.info}>
                            <h2>"Treinar com esse site tem sido uma experiência transformadora. Não só os treinos são eficientes, mas também recebo dicas valiosas sobre alimentação e recuperação. Isso tudo está me ajudando a atingir meus objetivos muito mais rápido!"</h2>
                        </div>
                        <div className={style.starsleft}>
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                            <FaStar size={20} color='yellow' />
                        </div>
                    </div>
                    <div className={style.indentidadeUser}>
                        <img src={imagem} alt="" />
                        <h1> Rian </h1>
                        <h2>Aluno</h2>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}