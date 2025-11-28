import './Navegacion.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navegacion() {

    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false); 
    };

    return (
        <Navbar expand="lg" className="navbar py-0" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-toggle bg-dark'> 
                <HiMenuAlt1 className='menu bg-dark text-light'/>
            </Navbar.Toggle> 
            
            <Navbar.Collapse id="basic-navbar-nav" className='nav-collapse'>
                <Nav>
                    <Link to="/" onClick={handleLinkClick}>Inicio</Link>
                    <Link to="/Nosotros" onClick={handleLinkClick}>Nosotros</Link> 
                    <Link to="/Servicios" onClick={handleLinkClick}>Servicios</Link>
                    <Link to="/Productos" onClick={handleLinkClick}>Productos</Link>
                    <Link to="/Preguntas" onClick={handleLinkClick}>FAQ</Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}