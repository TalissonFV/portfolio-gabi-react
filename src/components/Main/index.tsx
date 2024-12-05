import style from './Main.module.scss'

export default function Main() {
    return (
        <div className={`${style.mainBody}`} >
            <div className={style.backgroundDiv}>
                <div className={style.textContent}>
                    <h1>Eu sou um Designer <br/>gráfico, e amo sapos.</h1>
                    <span>Olá! Boas vindas ao meu portfólio, sou um estudante de Design Gráfico <br/> que adora aprender coisas novas, aqui você pode conhecer mais sobre mim e meus trabalhos.</span>
                </div>
            </div>
            <div className={style.botoesMain}>
                <button>Explorar Projetos</button>
                <button>Conhecer Gabi</button>
            </div>
        </div>
    )
}