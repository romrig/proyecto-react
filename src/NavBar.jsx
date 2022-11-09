import {  } from "./CartWidget";
import {  } from "./ItemListContainer";

const NavBar = () => {
    return(
        <div className="container">
            <div><h3>Proyecto React</h3></div>
            <ul className="List">
                <li><a href="">Inicio</a></li>
                <li><a href="">Contactanos</a></li>
                <li><a href="">Tienda</a></li>
            </ul>
            <div className="navbar-cart"><CartWidget/></div>
        </div>
    )
}

export default NavBar