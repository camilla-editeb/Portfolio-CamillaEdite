import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './components/Home/home'
import './styles/globalstyle.scss'
import SobreMim from './components/SobreMim/sobremim'
import Techs from './components/Techs/techs'
import Contato from './components/Contato/contato'
import Footer from './components/Footer/footer'
import Projetos from './components/Projetos/projetos'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function App(){

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [])

    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Home />
                <SobreMim />
                <Techs />
                <Projetos />
                <Contato />
                <Footer />
            </main>
        </BrowserRouter>
    )
}

