import './Navegacion.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navegacion() {
    return (
        <Navbar expand="lg" className="navbar py-0" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-toggle bg-dark'> 
                    <HiMenuAlt1 className='menu bg-dark text-light'/>
                </Navbar.Toggle> 
                <Navbar.Collapse id="basic-navbar-nav" className='nav-collapse'>
                    <Nav>
                        <Link to="/">Inicio</Link>
                        <Link to="/Nosotros">Nosotros</Link> 
                        <Link to="/Servicios">Servicios</Link>
                        <Link to="/Productos">Productos</Link>
                        <Link to="/Contacto">Contacto</Link> 
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}