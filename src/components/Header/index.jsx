import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import style from './style.module.css'
import gympactsemfundo from '../../images/gympactsemfundo.png'
import { useState, useEffect } from 'react'
import { IoInformationCircle } from "react-icons/io5";
export default function Header() {
    const [menuLateral, setmenuLateral] = useState(false);
    const [pesquisar, setPesquisar] = useState(false);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (login) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [login]);


    return (
        <>
            <header>
                <button onClick={() => setmenuLateral(true)} className={style.menuIcon}>
                    <FaBars size={20} color='white' />
                </button>
                <div>

                    <img className={style.gympact} src={gympactsemfundo} alt="" />
                </div>

                <nav className={style.menu}>
                    <a href="/"> Home</a>
                    <a href="/favorito"> Favoritos</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/minhaconta"> Minha Conta</a>
                    <a href="/Testemunhos"> Testemunhos</a>
                    <a href="/login"> Login</a>
                    


                </nav>
            </header>
            {menuLateral && (
                <div onClick={() => setmenuLateral(false)} className={style.overlayMenuLateral}>
                    <div onClick={(e) => e.stopPropagation()} className={style.menuLateral}>
                        <div className={style.cabecalho}>
                            <h2>Menu</h2>
                            <button onClick={() => setmenuLateral(false)}>
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <nav className={style.navMenuLateral}>
                            <a href="/treinos-superiores">Superiores</a>
                            <a href="/treinos-inferiores">Inferiores</a>
                            <a href="/Testemunhos">Testemunhos</a>
                            <a href="/Sobre">Sobre Nós</a>
                            <a href="/Favorito">Favoritos</a>
                            <a href="/">Home</a>


                        </nav>
                        <div className={style.linha}>
                            ________________________
                        </div>
                        <nav className={style.navMenuLateral}>
                            <button onClick={() => setLogin(true)}> <IoInformationCircle size={20} />Minha Conta</button>

                        </nav>

                    </div>
                </div>
            )
            }
            {pesquisar && (
                <div onClick={() => setPesquisar(false)} className={style.overlayPesquisar}>
                    <div onClick={(e) => e.stopPropagation()} className={style.pesquisaContainer}>
                        <input type="text"
                            className={style.pesquisaInput}
                            placeholder='Pesquisar' />
                        <FaSearch />
                    </div>
                </div>
            )}
            {login && (
                <div onClick={() => setLogin(false)} className={style.overlayLogin}>
                    <div onClick={(e) => e.stopPropagation()} className={style.LoginContainer}>
                        <img className={style.gympact1} src={gympactsemfundo} alt="" />
                        <h1>Login</h1>
                        <input type="text" className={style.loginInput} placeholder='Email' />
                        <input type="text" className={style.loginInput} placeholder='Senha' />
                        <button>Login</button>
                        <a href="">Esqueceu sua Senha?</a>
                    </div>
                </div>
            )}
        </>
    )
}