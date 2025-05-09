import style from '../styles/Detalhes.module.css'
import exercicios from '../data/exercicios'
import { useParams } from 'react-router-dom'

export default function Detalhes() {
    const { id } = useParams()
    const exercicio = exercicios.find(exercicio => exercicio.id === parseInt(id))

    return (
        <>
            <div className={style.back}>
                <div className={style.inicio}>
                    <h1>Exercício</h1>
                    <h1>{exercicio.nome}</h1>
                </div>

                <div className={style.trabalhar}>
                    <div className={style.escr}>
                        <h1>🏋️‍♂️ {exercicio.nome}</h1>
                        <h2>🎯 Músculos Trabalhados</h2>
                        {exercicio.musculosTrabalhados.map(musculo => (
                            <p key={musculo.id}>{musculo.musculo}</p>
                        ))}
                    </div>
                    <div className={style.sup}>
                        <img src={exercicio.imagem} alt={`Imagem de ${exercicio.nome}`} />
                    </div>
                </div>

                <div className={style.pai}>
                    <div className={style.textos}>
                        <div className={style.execucao}>
                            <h1>✅ Execução Passo a Passo</h1>
                            {exercicio.passoAPasso.map(passo => (
                                <div key={passo.id}>
                                    <h2>{passo.id}. {passo.titulo}</h2>
                                    <p>. {passo.descricao1}</p>
                                    {passo.descricao2 && <p>. {passo.descricao2}</p>}
                                </div>
                            ))}
                        </div>

                        <div className={style.part}>
                            {/* Este bloco pode ser usado para etapas adicionais ou separado em blocos conforme necessário */}
                        </div>
                    </div>

                    <div className={style.filho}>
                        <div className={style.atencao}>
                            <h1>⚠️ Prestar atenção!</h1>
                            <h2>. Erros Comuns a Evitar</h2>
                            {exercicio.erros.map(erro => (
                                <p key={erro.id}>. {erro.descricao}</p>
                            ))}
                        </div>

                        <div className={style.series}>
                            <h1>🔁 Séries e Repetições sugeridas</h1>
                            <h2>Hipertrofia:</h2>
                            <p>. {exercicio.series[0].titulo} de {exercicio.series[0].descricao}</p>
                            <h2>Força:</h2>
                            <p>. {exercicio.series[1].titulo} de {exercicio.series[1].descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
