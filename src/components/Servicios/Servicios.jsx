import './Servicios.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Servicios (){
    return (
         <div className='container-servicios'>
            <h2><span>S</span>ERVICIOS</h2>
            <div className='container-servicios-leyenda'>
                Nuestros servicios están orientados a todo tipo de usuarios, particulares y empresas, adaptándose a cada necesidad, manteniendo siempre nuestra premisa, brindar máxima calidad y asistencia permanente.

                Venta de matafuegos y accesorios: abastecemos al mercado minorista de importantes marcas. Nuestros productos detentan una óptima relación de calidad y precio. Realizamos entregas en forma inmediata.

                Recarga de matafuegos, control y mantenimiento: realizamos el control, mantenimiento y recarga de matafuegos, equipos autónomos, instalaciones fijas de detención y extinción de incendios, mangas, lanzas y boquillas, de acuerdo a las normativas vigentes.

                Capacitación: brindamos asesoramiento sobre normas legales, técnicas y operatorias de seguridad para cada empresa, y cursos de utilización de extintores. 
            </div>
            <Row className='container-row-servicios'>
                    <Col className='container-col-servicios'>
                        <img src="./../../../public/img/camioneta.png"/>
                        <p>RETIROS A DOMICILIO</p>
                    </Col>
                    
                    <Col className='container-col-servicios'>
                        <img src="./../../../public/img/correo.png"/>
                        <p>ENVIOS POR CORREO</p>
                    </Col>
            </Row>
            <Row className='container-row-servicios'>
                    <Col className='container-col-servicios'>
                        <img src="./../../../public/img/pago.jpg"/>
                        <p>DISTINTOS MEDIOS DE PAGO</p>
                    </Col>
                    
                    <Col className='container-col-servicios'>
                        <img src="./../../../public/img/garantia.webp"/>
                        <p>TRABAJOS CON GARANTIA</p>
                    </Col>
            </Row>
        </div>
    )
}