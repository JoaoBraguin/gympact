import style from './style.module.css';
import Video from '../../videos/academia.mp4';

export default function Hero() {
    return (
        <div className={style.containerHero}>
            <div className={style.frase}>
                <h1>No Pain No Gain</h1>
            </div>
            <video autoPlay loop muted className={style.video}>
                <source src={Video} type='video/mp4' />
            </video>




        </div>
    );
}