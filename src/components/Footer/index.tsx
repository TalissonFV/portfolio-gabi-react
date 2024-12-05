import logo from '../../assets/img/logo-light.svg'
import style from './Footer.module.scss'

export default function Footer() {
    return  (
        <footer>
            <div >
                <img src={logo} className={style.footerLogo}></img>
                <span className={style.footerTitle}>Gabi Kamui</span>
            </div>
            <div className={style.footerRights}>
                <span> <i className="fa fa-copyright" aria-hidden="true"></i> {new Date().getFullYear()} Todos os direitos reservados </span>
            </div>
            <div className={style.footerSocials}>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <i className="fa fa-behance" aria-hidden="true"></i>
                
            </div>
        </footer>
    )
}