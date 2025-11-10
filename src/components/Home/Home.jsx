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

export default function Home() {
    return (

        <div className="container-home">

            <img src="/img/animacion/matafuego-bienvenido.png" className="img-bienvenido"/>

            {/* ----------- Seccion home ----------- */}
            <section className="mt-5">
                <Container-fluid>
                    <Row className="row-cards" >
                        <Col xs={10} sm={9} md={5} lg={4} xl={3} className="col-card">
                            <Card className="home-card">
                                <Card.Img variant="top" src="/img/frente.jpg" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>VENTA Y RECARGA DE MATAFUEGOS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={10} sm={9} md={5} lg={4} xl={3} className="col-card">
                            <Card className="home-card">
                                <Card.Img variant="top" src="/img/local.jpg" className="object-fit-cover"/>
                                <Card.Body className="home-card-body">
                                    <Card.Text>ELEMENTOS DE PREVENCION Y SEGURIDAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={10} sm={9} md={5} lg={4} xl={3} className="col-card">
                             <Card className="home-card">
                                <Card.Img variant="top" src="/img/servicios/camioneta.png" className="object-fit-contain" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>RETIRO Y ENTREGA A DOMICILIO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={10} sm={9} md={5} lg={4} xl={3} className="col-card">
                            <Card className="home-card">
                                <Card.Img variant="top" src="/img/prevencion.png"/>
                                <Card.Body className="home-card-body">
                                    <Card.Text>CONOCIMIENTO Y EXPERIENCIA EN PREVENCION DE INCENDIOS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container-fluid>
            </section>

            {/* ----------- Seccion ubicacion ----------- */}
            <section className="mt-5">
                <Container-fluid>
                        <Row className="justify-content-around align-items-center">
                            <Col xs={12} lg={6} > 
                                <Row className="row-center-center">
                                    <Col xs={12} lg={10} xl={12} >
                                        <div className="column-center-center">
                                            <h3 className="titulo">PODES ENCONTRARNOS EN</h3>
                                            <ul className="ul-ubicacion">
                                                <li>LA PLATA,</li>
                                                <li><FaMapLocationDot /> Calle 519 N° 1820 esq. 13</li>
                                            </ul>
                                        </div>
                                    </Col> 
                                    <Col xs={12} sm={11} md={12} className="row-center-center">
                                        <img src="/img/animacion/matafuego-mapa.png" className="img-extintor" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={11} md={9} lg={6} className="col-mapa">
                                <Mapa />
                            </Col>
                        </Row>
                </Container-fluid>
            </section>

            {/* ----------- Seccion contacto/horario ----------- */}
            <section className="w-100 mt-5">   
                <Container-fluid>
                        <Row className="row-contacto_horario">             
                                <Col xs={12} sm={12} md={8} lg={7} xl={4}>
                                    <div className="column-center-center">
                                        <h3 className="titulo">CONTACTANOS POR</h3>
                                        <ul className="ul-contacto">
                                            <li><a href="mailto:extintoresnorte@hotmail.com" className="color-rojo"><MdAlternateEmail/> extintoresnorte@hotmail.com <MdOutlineAdsClick className="icon-click"/></a></li>
                                            <li><a href="tel:02214710750" className="color-gris"><FaPhone/> 0221 471-0750 <MdOutlineAdsClick className="icon-click"/></a></li>
                                            <li><a href="https://wa.me/2215448911" className="color-gris"><IoLogoWhatsapp/> 221-544-8911 <MdOutlineAdsClick className="icon-click"/></a></li>
                                            <li><a href="https://wa.me/2215369997" className="color-gris"><IoLogoWhatsapp/> 221-536-9997 <MdOutlineAdsClick className="icon-click"/></a></li>
                                            <li><a href="https://www.instagram.com/extintores_norte/" className="color-rojo"><BsInstagram/> Extintores_norte <MdOutlineAdsClick className="icon-click"/></a></li>
                                            <li><a href="https://www.facebook.com/extintoresnorte/?locale=es_LA" className="color-rojo"><FaFacebook/> Extintores Norte <MdOutlineAdsClick className="icon-click"/></a></li>
                                        </ul>
                                    </div>  
                                </Col>
                                <Col xs={12} sm={12} md={7} lg={7} xl={5} className="h-100">
                                    <Row>
                                            <Col xs={12} sm={12} md={8} lg={11} xl={8}>
                                                <div className="d-flex flex-column justify-content-around align-items-center mt-5">
                                                    <h3 className="titulo">HORARIOS</h3>
                                                    <ul className="ul-horario">
                                                        <li>LUNES a VIERNES</li>
                                                        <li><p className="hora"><FaClock/> 8.30hs  a  17hs</p></li>
                                                        <li>SABADOS</li>
                                                        <li><p className="hora"><FaClock/> 8.30hs  a  13hs</p></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={4} lg={1} xl={3} className="col-extintor-reloj">
                                                <img src="/img/animacion/matafuego-reloj.png" className="img-extintor"/>
                                            </Col>
                                    </Row>
                                </Col>
                        </Row>
                </Container-fluid>
            </section>

            {/* ----------- Seccion video ----------- */}

            <section className="mt-5 pb-5">
                    <Container-fluid> 
                        <Row className="row-center-center">
                            <Col xs={12} md={11} lg={9} xl={7} className="row-center-center w-75">
                                <div className="container-video">
                                    <video src="/video/video.mp4" controls/>
                                </div>
                            </Col>
                        </Row>
                    </Container-fluid> 
                </section>  

            {/* ----------- Seccion whatsapp ----------- */}

            <section className="mty-5">
                    <a href="https://wa.me/2215369997" >
                        <img src="/img/whats2.png" className="whatsapp"/>
                    </a>
            </section>   
                
        </div>
    )
}