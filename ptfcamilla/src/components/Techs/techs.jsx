import s from'./techs.module.scss'
import cssicon from '../../assets/cssicon.png'
import figma from '../../assets/figma.png'
import htmlicon from '../../assets/htmlicon.png'
import javascripticon from '../../assets/javascript.png'
import sassicon from '../../assets/sassicon.png'
import nodeicon from '../../assets/nodejsicon.png'
import reacticon from '../../assets/reacticon.png'
import githubicon from '../../assets/githubicon.png'



export default function Techs(){
    return(
        <section className={s.tech} id="techs">
            <h2 data-aos="fade-down" data-aos-delay="200">Tecnologias</h2>
            <div className={s.iconesContainer} data-aos="fade-down" data-aos-delay="200">
                <img src={htmlicon} alt="icone Html 5" />
                <img src={cssicon} alt="icone Css 3" />
                <img src={javascripticon} alt="icone JavaScript" />
                <img src={nodeicon} alt="icone NodeJs" />
                <img src={reacticon} alt="icone React.Js" />
                <img src={githubicon} alt="icone da rede social do Git Hub" />
                <img src={sassicon} alt="icone Sass" />
                <img src={figma} alt="icone Figma" />
            </div>
        </section>
    )
}