import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import Productos from './components/Productos/Productos.jsx';
import Servicios from './components/Servicios/Servicios.jsx';
import Header from './components/Header/Header.jsx';
import Navegacion from './components/Navegacion/Navegacion.jsx';

export default function App() {

  return (
    <Router className="app" >
       <Header/>
        <Navegacion/>
        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <Footer/> 
    </Router>
  )
}


