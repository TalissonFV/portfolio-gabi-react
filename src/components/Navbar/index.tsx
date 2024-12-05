import logo from '../../assets/img/logo.svg'
import menuIcon from '../../assets/icons/menu-list-icon.svg'
import style from './Navbar.module.scss'

export default function Navbar(): React.JSX.Element {

    const isMobile = window.screen.width < 600
    return  (
        <nav>
            <img src={logo} className={style.navbarLogo}></img>
            <span className={style.navbarTitle}>Gabi Kamui</span>
            { 
            isMobile ? <span className={style.navbarMenuIcon}><img src={menuIcon}></img></span>
            :
            <ul>
                <li><a href="">Projetos</a></li>
                <li><a href="">Sobre mim</a></li>
                <li><a href="">Processo criativo</a></li>
                <li><a href="">Contato</a></li>
            </ul>
            
            }
        </nav>
    )
}