import CardWidget from "./CardWidget";
import './NavBar.css'


const NavBar = () => {
    return(
        <div className="container">
            <div><h3 className="titulo">Proyecto <br/>React</h3></div>
            <ul className="List">
                <li><a href="">Inicio</a></li>
                <li><a href="">Contactanos</a></li>
                <li><a href="">Tienda</a></li>
            </ul>
            <div className="navbar-cart"><CardWidget/></div>
        </div>
    )
}

export default NavBar