import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <Logo/>
        <ul className="menu">
            <li>
                <a href="#">Menú salados</a>
            </li>
            <li>
                <a href="#">Postres</a>
            </li>
            <li>
                <a href="#">Vegetariano</a>
            </li>
        </ul>
        <CartWidget/>   
    </nav>
  )
}

export default Navbar