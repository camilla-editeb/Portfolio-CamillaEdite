import hambug from '../../assets/hambug.webp'
import livros from '../../assets/livrosvnw.webp'
import conversor from '../../assets/conversord.webp'
import s from './projetos.module.scss'


export default function Projetos(){
    return(
        <section className={s.cardsprojetos} id="projetos">
            <h2>Projetos</h2>
            <div className={s.divcards}>
                <div className={s.divcard}>
                    <img src={hambug} alt="" />
                    <h3 className={s.h3hambug}>HamBug</h3>
                    <p>Cardápio Digital Integrado Aplicação Single Page (SPA) focada na experiência do usuário (UX). Utiliza o gerenciamento de estado do React em tempo real e realiza a integração via API do WhatsApp.</p>
                    <div className={s.botoesCard}>
                        <button><a href="https://ham-bug-two.vercel.app/" target="_blank" rel="noopener noreferrer" >Vercel</a></button>
                        <button><a href="https://github.com/camilla-editeb/HamBug" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                    </div>
                </div>

                <div className={s.divcard}>
                    <img src={conversor} alt="" />
                    <h3>Conversor de Moeda</h3>
                    <p>Ferramenta que consome uma API externa para cálculos em tempo real. Feito 100% em JavaScript Puro para demonstrar domínio de lógica e requisições assíncronas (Fetch).</p>
                    <div className={s.botoesCard}>
                        <button><a href="https://conversordmoeda.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a></button>
                        <button><a href="https://github.com/camilla-editeb/conversordmoeda" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                    </div>
                </div>

                <div className={s.divcard}>
                    <img src={livros} alt="" />
                    <h3>Livros Vai na Web</h3>
                    <p>Plataforma de incentivo à leitura e doação de livros. Projeto focado em UI responsiva e organização de componentes, desenvolvido durante a formação Full Stack.</p>
                    <div className={s.botoesCard}>
                        <button><a href="https://livrosvainaweb-xi.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a></button>
                        <button><a href="https://github.com/camilla-editeb/livrosvainaweb" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}