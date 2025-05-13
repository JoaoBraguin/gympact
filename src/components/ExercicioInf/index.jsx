import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import style from './style.module.css';

export default function Exercicioinf({ id, titulo, imagem, descricao, inteira }) {
    return (
        <div className={style.item}>
            <a href={`/Detalhes/${id}`}>Ver mais</a>
            <div className={style.exercicioinf}>
                <div>
                    <h3>
                        {titulo}{' '}
                        {inteira ? (
                            <FaStar color="yellow" size={20} />
                        ) : (
                            <FaRegStar color="yellow" size={20} />
                        )}
                    </h3>
                </div>

                <div className={style.imgWrapper}>
                    <img src={imagem} alt={descricao || "Imagem do exercício"} />
                    <div className={style.overlay}></div>
                </div>
            </div>
        </div>
    );
}
