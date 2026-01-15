import s from './sobremim.module.scss'
import ftcamilla from '../../assets/ftcamilla.png'

export default function SobreMim (){
    return(
        <section className={s.sectionSobre} id="sobreMim">
            <div className={s.texts}>
                <h2 className={s.sobremim} data-aos="fade-up" data-aos-delay="200">Sobre Mim</h2>
                <h3 data-aos="fade-up" data-aos-delay="200">Estudante de Sistemas de Informação pelo CESMAC, com formação prática em <span className={s.span}>Lógica de Programação, UX Design, Desenvolvimento Full Stack e Inteligência Artificial, além de participação em liga acadêmica da área de Sistemas.</span>
                 Sou movida por desafios, aprendizado contínuo e pela vontade de transformar ideias em soluções reais por meio da tecnologia.
                </h3>
                <p>Buscando: Estágio em Tecnologia | Desenvolvimento | UI/UX</p>
            </div>
            <img className={s.imgcamilla}  data-aos="fade-up" data-aos-delay="200" src={ftcamilla} alt="foto de rosto com fundo lilás"/>
        </section>
    )
}