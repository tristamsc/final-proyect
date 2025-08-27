import React from 'react'
import logo from '../assets/img/logo-car-express.png'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
            
        <nav className="menu-container">
            <Link to='/'><img className="logo" src={logo } alt="Logo" /></Link>
            <input className="search" type="search" placeholder="Buscar un modelo..." />
            <ul>
                <li className="li-vehiculos"><Link to="/vehiculos">Vehiculos</Link></li>
                <li className="li-reservas"><Link to="/reservas">Reservas</Link></li>
                <li className="li-contacto"><Link to="/contacto">Contacto</Link></li>
            </ul>
            <Link className="login"  to='/login'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{enableBackground:'new 0 0 32 32'}} xmlSpace="preserve"><path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM23.942 32H8.058A4.062 4.062 0 0 1 4 27.942c0-6.616 5.383-12 12-12s12 5.384 12 12A4.062 4.062 0 0 1 23.942 32zM16 17.942c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 8.058 30h15.884A2.06 2.06 0 0 0 26 27.942c0-5.514-4.486-10-10-10z" /></svg>
                Iniciar Sesion
            </Link>
            
        </nav>
  )
}
