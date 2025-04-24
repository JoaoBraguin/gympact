import Avaliacoes from "../components/Avaliacoes";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Planos from "../components/Planos/indes";
import Treinos from "../components/Treinos";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Planos />
            <Treinos />
            <Avaliacoes/>
            <Footer />
            
            

        </>
    )
}