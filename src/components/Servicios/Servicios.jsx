import './Servicios.css';
import { Container, Row, Col } from 'react-bootstrap';
import Servicio from "../Servicio/Servicio.jsx";

const containerServicios = [
    {id:1, titulo:"VENTA DE MATAFUEGOS", url:"/img/servicios/1.jpg"},
    {id:2, titulo:"RECARGA Y MANTENIMIENTO DE MATAFUEGOS", url:"/img/servicios/2.jpg"},
    {id:3, titulo:"VENTA DE ACCESORIOS DE SEGURIDAD VIAL", url:"/img/servicios/3.png"},
    {id:4, titulo:"VENTA DE ILUMINACION", url:"/img/servicios/4.png"},
    {id:5, titulo:"VENTA DE ACCESORIOS DE SEGURIDAD INDUSTRIAL", url:"/img/servicios/5.jpg"},
    {id:6, titulo:"CAPACITACION Y ASESORAMIENTO", url:"/img/servicios/6.jpg"},
    {id:7, titulo:"RETIROS A DOMICILIO", url:"/img/home/camioneta-perfil.png"},
    {id:8, titulo:"ENVIOS", url:"/img/servicios/correo.png"},
    {id:9, titulo:"DISTINTOS MEDIOS DE PAGO", url:"/img/servicios/pago.jpg"}
];

export default function Servicios (){
    return (
        
         <div className='section-servicios'>
            <h3><span>S</span>ERVICIOS</h3>

            <Container className='column-center-center'>
            
                    <Row>
                        <Col xs={12} md={6} lg={4} xl={12} className='row-center-center'>
                            <div className='container-servicios-leyenda'>
                                <p>Nuestros servicios estan orientados a todo tipo de usuarios, desde particulares hasta grandes empresas, adaptandose con precision a cada necesidad y nivel de riesgo. 
                                    En Extintores Norte, entendemos que la seguridad no es universal, es por esto que hemos desarrollado un paquete de soluciones integrales que abarcan el ciclo completo 
                                    de proteccion contra incendios, manteniendo siempre nuestra premisa de brindar la maxima calidad y asistencia permanente:<br/>
                                    
                                    <br/><span>Venta de Equipos y Accesorios de Seguridad: </span> Proveemos una amplia gama de extintores nuevos, homologados y especificos para cada riesgo (ABC, CO2, Humedo, etc.), ademas de accesorios de seguridad esenciales como gabinetes, carteleria de señalizacion y balizas, entre otros.<br/>
                                    <br/><span>Recarga, Control y Mantenimiento de Matafuegos: </span> Garantizamos la operatividad y eficacia de sus equipos. Realizamos el servicio completo de recarga, control de presion y mantenimiento periodico, incluyendo la Prueba Hidrostatica (PH) obligatoria, para que sus extintores cumplan con los estandares de la norma IRAM y las leyes vigentes.<br/>
                                    <br/><span>Capacitacion y Asesoramiento Integral: </span> No solo vendemos equipos, sino conocimiento. Ofrecemos capacitacion práctica y teorica que incluye el asesoramiento para el correcto cumplimiento normativo y la enseñanza del uso correcto del extintor, asegurando que su personal este preparado para actuar en una emergencia.<br/>

                                    <br/>Le quitamos la preocupación de la gestion de la seguridad, permitiendole concentrarse en sus actividades, con la tranquilidad de saber que esta protegido y dentro de la ley.</p>
                            </div> 
                        </Col>
                    </Row>

                    <Row className='row-center-center mb-5 g-5'>
                        {containerServicios.map((servicio) => (
                            <Col key={servicio.id} xs={12} md={6} lg={4} xl={4} className="row-center-center">
                                <Servicio
                                    titulo={servicio.titulo}
                                    url={servicio.url}
                                />
                            </Col>
                        ))}
                    </Row>
            </Container>
           
        </div>
    )
}

            
 