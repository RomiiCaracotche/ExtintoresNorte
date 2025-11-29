import './Productos.css';
import { Container, Row, Col } from 'react-bootstrap';
import Producto from "../Producto/Producto.jsx";

const contenedorProductos = [
    {id:1, titulo:"EXTINTORES", url:"/img/servicios/1.jpg", detalle:"Ofrecemos una gama completa de agentes extintores diseñados para cubrir cada clase de fuego existente: desde el versátil POLVO ABC para riesgos generales, hasta el agente limpio CO2 ideal para equipos electrónicos delicados. Contamos con soluciones basadas en Agua (Pura y con AFFF para líquidos), extintores con Acetato de Potasio específicos para cocinas (Grasas K), y agentes avanzados como Hcfc 123 y Hfc 236 para áreas críticas. Además de Polvos Especiales para fuegos de metales Clase D."},
    {id:2, titulo:"SEGURIDAD VIAL", url:"/img/productos/seguridad-vial.jpg", detalle:"Ofrecemos una amplia gama de elementos de delimitación de zonas peligrosas con cintas, conos, vallas y balizas, hasta la protección activa de la infraestructura con cable canal y la respuesta rápida ante incidentes con botiquines y kits vehiculares. Sumamos la detección de humo y la alta visibilidad garantizada por los chalecos reflectarios, entre otros elementos."},
    {id:3, titulo:"ILUMINACION", url:"/img/productos/iluminacion.jpg", detalle:"Nuestra línea de Iluminación de Seguridad está diseñada para garantizar la visibilidad y facilitar la evacuación en situaciones críticas, asegurando que su espacio se mantenga operativo y seguro en todo momento. Ofrecemos soluciones de vanguardia, desde la señalización LED de bajo consumo que demarca rutas de escape, hasta potentes luces de emergencia que se activan automáticamente, y faros LED portátiles robustos para inspecciones y trabajos fuera de la red."},
    {id:4, titulo:"SEÑALIZACION", url:"/img/productos/senalizacion.jpg", detalle:"Cubrimos todo el espectro de Señalización Vial (preventivas, reglamentarias, informativas, transitorias y horizontales) para organizar el tránsito interno y externo. A esto se suma nuestra línea de Señalización de Seguridad (prohibición, obligación, advertencia y emergencia), esencial para delimitar riesgos, identificar equipos y marcar rutas de evacuación."},
    {id:5, titulo:"ACCESORIOS CONTRA INCENDIOS", url:"/img/productos/accesorios.jpg", detalle:"Ofrecemos mangueras resistentes a la presión y el desgaste, lanzas ergonómicas para un control efectivo del chorro, y gabinetes diseñados para proteger los equipos y asegurar una activación inmediata."},
    {id:6, titulo:"SEGURIDAD INDUSTRIAL", url:"/img/productos/seguridad-industrial.jpg", detalle:"Nuestra línea de Elementos de Protección Personal (EPP) está diseñada para proteger al trabajador de los riesgos inherentes a su labor. Ofrecemos desde cascos y gafas resistentes a impactos, hasta barbijos, tapones auditivos y respiradores con filtro para ambientes contaminados. Además, suministramos equipos vitales para el trabajo en altura como arneses, y la protección de manos con diversos tipos de guantes."},
    {id:7, titulo:"SIFONES Y SODA STREAM", url:"/img/productos/sifones.png", detalle:"Venta de sifones, y recarga de soda stream y capsulas de dioxido de carbono"},
    {id:8, titulo:"PURIFICADORES DE AGUA", url:"/img/productos/purificadores.png", detalle:"Soluciones completas diseñadas para garantizar que el agua que consume tu familia o tu empresa sea de la más alta calidad, libre de contaminantes y con un sabor excepcional."}
];

export default function Productos (){
    return (

        <div className='section-productos'>
            <h3><span>P</span>RODUCTOS</h3>

            <Container>
                <Row className='row-productos'>
                    {contenedorProductos.map((producto) => (
                        <Col key={producto.id} xs={12} md={6} lg={4} xl={4} className='row-center-center mb-4'>
                            <Producto
                                titulo={producto.titulo}
                                url={producto.url}
                                detalle={producto.detalle}
                            />
                        </Col>
                    ))}      
                </Row>
            </Container>
        </div>
    )
}