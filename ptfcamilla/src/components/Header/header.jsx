import { useState } from 'react';
import s from '../Header/header.module.scss'


export default function Header(){
    const [menuAberto, setMenuAberto] = useState(false)
    const respMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return(
            <header className={s.header}>
                <h1>Camilla Edite</h1>
                <button className={s.buttonresp} onClick={respMenu}>
                    {menuAberto ? "✕" : "☰"}
                </button>
                <nav className={`${s.navHeader} ${menuAberto ? s.ativo : '' }`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuAberto(false)}>Home</a></li>
                        <li><a href="#sobreMim" onClick={() => setMenuAberto(false)}>Sobre Mim</a></li>
                        <li><a href="#techs" onClick={() => setMenuAberto(false)}>Techs</a></li>
                        <li><a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a></li>
                        <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
                    </ul>
                </nav>
        </header>
    )
}
