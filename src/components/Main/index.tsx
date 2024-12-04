import style from './Main.module.scss'

export default function Main() {
    return (
        <main className={`${style.mainBody}`} >
            <div className={style.backgroundDiv}>
                <div className={style.textContent}>
                    <h1>Eu sou um Designer <br/>gráfico, e amo sapos.</h1>
                    <span>Olá! Boas vindas ao meu portfólio, sou um estudante de Design Gráfico <br/> que adora aprender coisas novas, aqui você pode conhecer mais sobre mim e meus trabalhos.</span>
                </div>
            </div>
        </main>
    )
}