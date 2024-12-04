import logo from '../../assets/img/logo.svg'
import menuIcon from '../../assets/icons/menu-list-icon.svg'
import style from './Navbar.module.scss'

export default function Navbar(): React.JSX.Element {
    return  (
        <nav>
            <img src={logo} className={style.navbarLogo}></img>
            <span className={style.navbarTitle}>Gabi Kamui</span>
            <span className={style.navbarMenuIcon}><img src={menuIcon}></img></span>
        </nav>
    )
}