import "./Home.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail, MdHeight } from "react-icons/md";
import { MdOutlineAdsClick } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Mapa from './../Mapa/Mapa.jsx';

const containerHome = [
    {id:1, titulo:"VENTA Y RECARGA DE MATAFUEGOS", url:"/img/home/extintores-lugo.jpg"},
    {id:2, titulo:"ELEMENTOS DE PREVENCION Y SEGURIDAD", url:"/img/home/elementos.png"},
    {id:3, titulo:"RETIRO Y ENTREGA A DOMICILIO", url:"/img/home/camioneta-perfil.png"},
    {id:4, titulo:"CONOCIMIENTO Y EXPERIENCIA EN PREVENCION DE INCENDIOS", url:"/img/home/prevencion.png"}
]

export default function Home() {

    return (

        <div className="container-home">
            
            <div className="container-bienvenido"> 
                <img src="/img/animacion/matafuego-bienvenido.png"/>
            </div>

            {/* ----------- Seccion home ----------- */}
            <section className="section-home">
                <Container className="row-center-center">
                    <Row className="row-home" >
                        {containerHome.map((item) => (
                            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="col-home">
                                <Card className="home-card">
                                    <Card.Img variant="top" src={item.url} />
                                    <Card.Body className="home-card-body">
                                        <Card.Text>{item.titulo}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


            {/* ----------- Seccion video ----------- */}
            <section className="section-video">
                <Container className="row-center-center">
                    <Row className="row-video">
                        <Col xs={12} md={12} xl={6} className="p-0">
                            <div className="container-video-info">
                                <p>
                                    "En <span>Extintores Norte</span>, nuestro compromiso principal es tu seguridad y la de tus operaciones. Creemos que la información es la herramienta más poderosa para la prevención. Por ello, estamos interesados en informarte y capacitartre: no todo el fuego se combate de la misma manera. Te presentamos este video esencial sobre los diferentes tipos de fuego. Exploraremos la clasificación internacional (Clases A, B, C, D y K) basada en los materiales combustibles, y te mostraremos cómo la identificación correcta es vital para elegir el agente extintor adecuado y proteger tus activos. La prevención comienza con el conocimiento, y este es el primer paso para dominar la seguridad contra incendios."
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={11} xl={6} className="container-video-video">
                                <video src="/video/video.mp4" controls/>
                        </Col>
                    </Row>
                </Container>
            </section> 


            {/* ----------- Seccion contacto/horario ----------- */}
            <section className="section-contacto_horario">   
                <Container>
                        <Row className="row-contacto_horario">            
                                <Col xs={12} sm={12} md={10} lg={8} xl={5} className="col-contacto_horario">
                                    <div className="container-contacto-info">
                                        <h3 className="titulo">CONTACTANOS POR</h3>
                                        <ul className="ul-contacto">
                                            <li><a href="mailto:extintoresnorte@hotmail.com" className="color-red" style={{color:"red"}}><MdAlternateEmail/> extintoresnorte@hotmail.com <MdOutlineAdsClick className="color-light"/></a></li>
                                            <li><a href="tel:02214710750" className="color-light"><FaPhone/> 0221 471-0750 <MdOutlineAdsClick className="color-light"/></a></li>
                                            <li><a href="https://wa.me/2215448911" className="color-green"><IoLogoWhatsapp/> 221-544-8911 <MdOutlineAdsClick className="color-light"/></a></li>
                                            <li><a href="https://wa.me/2215369997" className="color-green"><IoLogoWhatsapp/> 221-536-9997 <MdOutlineAdsClick className="color-light"/></a></li>
                                            <li><a href="https://www.instagram.com/extintores_norte/" className="color-blue"><BsInstagram/> Extintores_norte <MdOutlineAdsClick className="color-light"/></a></li>
                                            <li><a href="https://www.facebook.com/extintoresnorte/?locale=es_LA" className="color-blue"><FaFacebook/> Extintores Norte <MdOutlineAdsClick className="color-light"/></a></li>
                                        </ul>
                                    </div>   
                                </Col>
                                
                               <Col xs={12} sm={12} md={10} lg={8} xl={5} className="col-contacto_horario">
                                        <div className="container-horario-info">
                                            <div className="container-horario_horario">
                                                <h3 className="titulo">HORARIOS</h3>
                                                <ul className="ul-horario">
                                                    <li className="color-red">LUNES a VIERNES</li>
                                                    <li><p className="hora color-light"><FaClock/> 8.30hs  a  17hs</p></li>
                                                    <li className="color-red">SABADOS</li>
                                                    <li><p className="hora color-light"><FaClock/> 8.30hs  a  13hs</p></li>
                                                </ul>
                                            </div>
                                            <div className="container-horario_img">
                                                <img src="/img/animacion/matafuego-reloj.png"/>
                                            </div>
                                        </div>
                                </Col> 
                        </Row>
                </Container>
            </section>


             {/* ----------- Seccion ubicacion ----------- */}
            <section className="section-ubicacion">
                <Container-fluid className="row-center-center w-100
                ">
                        <Row className="row-ubicacion">   
                            <Col xs={12} md={10} lg={10} className="col-ubicacion"> 
                                <h3 className="titulo">PODES ENCONTRARNOS EN</h3>
                                <ul className="ul-ubicacion">
                                    <li>LA PLATA,</li>
                                    <li><FaMapLocationDot className="color-light"/> Calle 519 N° 1820 esq. 13</li>
                                </ul>
                            </Col>
                            <Col xs={12} lg={7} xl={6}className="col-ubicacion_mapa">
                                <Mapa />
                            </Col>
                            <Col xs={12} lg={3} xl={3} className="col-ubicacion_img">
                                <img src="/img/animacion/matafuego-mapa2.png" />
                            </Col>
                        </Row>
                </Container-fluid>
            </section>
            
 
            {/* ----------- Seccion whatsapp ----------- */}
            <section>
                <a href="https://wa.me/2215369997" >
                    <img src="/img/home/whatsapp.png" className="whatsapp"/>
                </a>
            </section>   
                
        </div>
    )
}