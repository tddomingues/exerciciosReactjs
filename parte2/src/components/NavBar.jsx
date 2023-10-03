import "./NavBar.css"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="menu-container">
      <ul>
        <li><NavLink to="/">Início</NavLink></li>
        <li><NavLink to="/produtos">Produtos</NavLink></li>
        <li><NavLink to="/saibaMais">Saiba Mais</NavLink></li>  
        <li><NavLink to="/login">Login</NavLink></li>  
      </ul>
    </div>
  )
}

export default NavBar
