import s from './home.module.scss'
import Typewriter from 'typewriter-effect';

export default function Home(){
    return(
        <section className={s.onesection} id="home">
            <h1>
                   <Typewriter options={{ 
                    strings:[
                        `Oi, eu sou <span class="${s.spanname}">Camilla Edite! </span>`, 
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }} /> 
                <span>👋🏽</span>
            </h1>
            <p>Desenvolvedora WEB e Estudante de SISTEMAS</p>
        </section>
    )
}