import s from './contato.module.scss'
import github from '../../assets/githubs.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

export default function Contato() {
    return(
        <section className={s.seccontato} id="contato">
            <h2>Vamos construir algo juntos?</h2>
            <p>Estou aberta para aplicar meus conhecimentos em projetos reais. <div></div>Se você tem uma vaga aberta ou quer apenas dar um feedback sobre meu portfólio, sinta-se à vontade para me mandar uma mensagem!</p>
            <h3>📧 <a href="mailto:millaedite1324@gmail.com" target='_blank'>millaedite1324@gmail.com</a></h3>

            <div className={s.divimg}>
                <a href="https://www.linkedin.com/in/camillaeditesbezerrra/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                <a href="https://www.instagram.com/camillaedite?igsh=aW5hNWRkdWp4djlr" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
                <a href="https://github.com/camilla-editeb" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
            </div>
        </section>
    )
}