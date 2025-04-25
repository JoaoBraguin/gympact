import style from '../styles/Detalhes.module.css'
import imagemsupino from '../images/imagemsupino.png'


export default function Detalhes() {
    return (
        <>
            <div className={style.back}>
                <div className={style.inicio}>
                    <h1>Exercicio </h1>
                    <h1>Supino inclinado</h1>
                </div>

                <div className={style.trabalhar}>
                    <div className={style.escr}>
                        <h1>Trabalhar a parte superior do peitoral</h1>
                        <p>🏋️♂️ Supino Inclinado com Halteres – Como Executar Corretamente</p>
                        <h2>🎯 Músculos Trabalhados</h2>
                        <p>Peitoral maior (porção superior)</p>
                        <p>Deltóide anterior (ombros)</p>
                        <p>Tríceps braquial</p>
                    </div>
                    <div className={style.sup}>
                        <img src={imagemsupino} alt="" />
                    </div>
                </div>

                <div className={style.pai}>
                    <div className={style.textos}>
                        <div className={style.execucao}>
                            <h1>✅ Execução Passo a Passo</h1>
                            <h2> 1. Ajuste o banco inclinado </h2>
                            <p>.  Incline o banco entre 30° a 45°. Menos de 30° ativa mais o peitoral inteiro;</p>
                            <p>.  Mais de 45° ativa mais os ombros.</p>
                            <h2>2. Pegue os halteres </h2>
                            <p>.  Use uma carga que você consiga controlar bem.</p>
                            <p>.  Sente-se com os halteres apoiados sobre as coxas.</p>
                            <h2>3. Deite-se e posicione os halteres</h2>
                            <p>.  Deite-se no banco com os pés bem firmes no chão.</p>
                            <p>.  Traga os halteres para a linha do peito, com os cotovelos levemente</p>
                            <p>.  Abaixo da linha dos ombros.</p>
                        </div>
                        <div className={style.part}>
                            <h2>4. Empurre os halteres para cima</h2>
                            <p>.  Estenda os braços, levando os halteres para cima até quase encostarem (sem bater).</p>
                            <p>. Faça o movimento de forma controlada e sem impulso.</p>
                            <h2>5. Desça lentamente</h2>
                            <p>.  Abaixe os halteres até que fiquem na linha do peito novamente.</p>
                            <p>.  Mantenha o controle, sem deixar os cotovelos descerem demais.</p>
                            <h2>6. Respiração</h2>
                            <p>.  Inspire ao descer os halteres.</p>
                            <p>.  Expire ao empurrar os halteres para cima.</p>
                        </div>
                    </div>


                    <div className={style.filho}>
                        <div className={style.atencao}>
                            <h1>⚠️ Prestar atenção !</h1>
                            <h2>.  Erros Comuns a Evitar</h2>
                            <p>.  Arquear demais a lombar</p>
                            <p>.  Deixar os cotovelos muito abertos (pode forçar o ombro)</p>
                            <p>.  Usar peso excessivo e perder a forma</p>
                            <p>.  Bater os halteres no topo</p>
                        </div>

                        <div className={style.series}>
                            <h1>🔁 Séries e Repetições sugeridas</h1>
                            <h2>   Hipertrofia:</h2>
                            <p>.   3 a 4 séries de 8 a 12 repetições</p>
                            <h2>Força</h2>
                            <p>.   4 a 5 séries de 5 a 8 repetições</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}