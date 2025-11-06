import "./Home.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Mapa from './../Mapa/Mapa.jsx';

export default function Home() {
    return (

        <div className="container-home">

            <section className="seccion-home">
                <div>
                    <img src="/img/animacion/matafuego-bienvenido.png" className="img-bienvenido"/>
                </div>
                <Container-fluid>
                    <Row className="row-center-center">
                        <Col xs={11} sm={10} md={6} lg={5} xl={4} className="col-card">
                            <Card className="home-card card-impar">
                                <Card.Img variant="top" src="/img/frente.jpg" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>VENTA Y RECARGA DE MATAFUEGOS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={11} sm={10} md={6} lg={5} xl={4} className="col-card">
                            <Card className="home-card card-par">
                                <Card.Img variant="top" src="/img/local.jpg" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>ELEMENTOS DE PREVENCION Y SEGURIDAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="row-center-center">
                        <Col xs={11} sm={10} md={6} lg={5} xl={4} className="col-card">
                            <Card className="home-card card-impar">
                                <Card.Img variant="top" src="/img/camioneta.png" className="object-fit-contain" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>RETIRO Y ENTREGA A DOMICILIO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={11} sm={10} md={6} lg={5} xl={4} className="col-card">
                            <Card className="home-card card-par">
                                <Card.Img variant="top" src="/img/prevencion.png" />
                                <Card.Body className="home-card-body">
                                    <Card.Text>CONOCIMIENTO Y EXPERIENCIA EN PREVENCION DE INCENDIOS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container-fluid>
            </section>

            <section className="seccion-horario">
                <Container-fluid>
                        <Row className="justify-content-around align-items-center">
                            <Col xs={12} sm={12} md={8} lg={7} xl={7} className="">
                                <Row className="row-center-center">
                                    <Col xs={12} sm={11} md={3} lg={3} xl={4} className="col-ubicacion">
                                        <img src="/img/animacion/matafuego-mapa.png" className="img-extintor" />
                                    </Col>
                                    <Col xs={12} sm={11} md={9} lg={7} xl={7}>
                                        <div className="column-center-center">
                                            <h3 className="fw-bold mb-3 mt-5">¿DONDE ESTAMOS?</h3>
                                            <ul className="li-horario">
                                                <li><FaMapLocationDot /> 519 N° 1820 esquina 13, 1900 La Plata</li>
                                                <li><MdAlternateEmail /> <a href="mailto:extintoresnorte@hotmail.com">extintoresnorte@hotmail.com</a></li>
                                                <li><FaPhone /> <a href="tel:02214710750">0221 471-0750</a></li>
                                                <li><IoLogoWhatsapp /> <a href="https://wa.me/2215448911">221-544-8911</a></li>
                                                <li><IoLogoWhatsapp /> <a href="https://wa.me/2215369997">221-536-9997</a></li>
                                                <li><BsInstagram className=""/> <a href="https://www.instagram.com/extintores_norte/">Extintores_norte</a></li>
                                                <li><FaFacebook /> <a href="https://www.facebook.com/extintoresnorte/?locale=es_LA">Extintores Norte</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row> 
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={5} xl={4} className="p-0 col-mapa" >
                                <Mapa />
                            </Col>  
                        </Row>

                        <Row>
                            <Col className="col-horario">
                                <div className="d-flex flex-column justify-content-around align-items-center mt-5">
                                    <h3 className="fw-bold mb-3">HORARIOS</h3>
                                    <ul className="li-horario">
                                        <li><FaClock /> LUNES a VIERNES de 8.30hs a 17hs</li>
                                        <li><FaClock /> SABADOS de 8.30hs a 13hs</li>
                                    </ul>
                                </div>
                                <img src="/img/animacion/matafuego-reloj.png" className="img-extintor"/>
                            </Col>
                        </Row>
                </Container-fluid>
            </section>

            <section className="mt-5 pb-5">
                    <Container-fluid> 
                        <Row className="row-center-center">
                            <Col xs={12} md={11} lg={6} xl={6} className="row-center-center">
                                <div className="container-video">
                                    <video src="/video/video.mp4" controls/>
                                </div>
                            </Col>
                            <Col xs={12} md={11} lg={5} xl={6}>
                                <Row className="row-center-center">
                                    <Col xs={12} sm={10} md={10} lg={12} xl={12}>
                                        <a href="https://wa.me/2215369997" className="row-center-center whatsapp">
                                            <img src="/img/whatsapp.png"/>
                                        </a>
                                    </Col>
                                    <Col xs={12} sm={10} md={12} lg={12} xl={12} className="row-center-center col-extintor-whatsapp">
                                        <img src="/img/animacion/matafuego-llamando.png" className="img-extintor"/>
                                    </Col>
                                </Row>  
                            </Col> 
                        </Row>
                    </Container-fluid> 
                </section>   

        </div>
    )
}