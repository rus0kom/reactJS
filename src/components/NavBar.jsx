import react from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid"> 
      <Link className="navbar-brand" to={"/"}>
    <img src="../img/logo.png" alt="logo" className="w-50"/>
    </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <NavLink class="nav-link " to='/cart'>CARRITO
              <CartWidget/>
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
              </a>
              <ul class="dropdown-menu">
                <li><NavLink class="dropdown-item" to='categoria/auriculares'>Auriculares</NavLink></li> 
                <li><NavLink class="dropdown-item" to='categoria/mouse'>Mouse</NavLink></li>
                <li><NavLink class="dropdown-item" to='categoria/teclados'>Teclado</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;