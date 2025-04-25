import { FaStar } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";
import style from './style.module.css'

export default function Exercicio({ titulo, imagem, descricao, inteira }) {
    return (
       <div className={style.item}>
        <a href="">Ver mais</a>
         <div className={style.exercicio}>
            <div>
                <h3>{titulo} {inteira ? (<FaStar color="yellow" size={20} />) : <FaRegStar color="yellow" size={20} />}</h3>
            </div>
            <img src={imagem} alt="" />
        </div>
       </div>
    )
}