import React from 'react'
import { Link } from 'react-router-dom' 
import CarritoContext from '../../Context/CarritoContext'
import "./navBar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav">
    <a className="navbar-brand" href="/" rel="noreferrer">VM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" rel="noreferrer" aria-current="page" to="/Productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" rel="noreferrer" aria-current="page" to="/Carrito"><i class="fa-solid fa-cart-shopping"></i><CarritoContext/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" rel="noreferrer" aria-current="page" to="/Envios">Envios</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar