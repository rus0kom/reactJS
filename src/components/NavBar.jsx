import react from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid"> 
      <Link className="navbar-brand" to={"/"}>
    <img src="../img/logo.png" alt="logo" className="w-50"/>
    </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link " to='/cart'>CARRITO
              <CartWidget/>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to='categoria/auriculares'>Auriculares</NavLink></li> 
                <li><NavLink className="dropdown-item" to='categoria/mouse'>Mouse</NavLink></li>
                <li><NavLink className="dropdown-item" to='categoria/teclados'>Teclado</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;