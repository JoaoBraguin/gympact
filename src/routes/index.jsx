import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Cadastro from '../pages/Cadastro'
import Favorito from '../pages/Favorito'

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Favorito" element={<Favorito />} />
            </Routes>
        </BrowserRouter>
    )   
}