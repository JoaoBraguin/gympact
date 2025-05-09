import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import Favorito from '../pages/Favorito'
import MinhaConta from "../pages/MinhaConta";
import TreinoSuperior from "../pages/TreinoSuperior";
import TreinoInferior from "../pages/TreinoInferior";
import Testemhunhos from "../pages/Testemunhos";
import Detalhes from "../pages/Detalhes";


export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Favorito" element={<Favorito />} />
                <Route path="/MinhaConta" element={<MinhaConta />} />
                <Route path="/treinos-superiores" element={<TreinoSuperior />} />
                <Route path="/treinos-inferiores" element={<TreinoInferior />} />
                <Route path="/Testemunhos" element={<Testemhunhos />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}