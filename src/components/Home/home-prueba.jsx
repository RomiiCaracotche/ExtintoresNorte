import "./Home.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Mapa from './../Mapa/Mapa.jsx';

export default function Home (){
    return (
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">

                <section className="w-100 section-home">
                    <Container className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
                        <Row>
                            <Col xs={12} md={6} className="mb-3" >
                                <Card className="home-card rounded-5">
                                    <Card.Img variant="top" src="./../../../public/img/frente.jpg" className="rounded-5"/>
                                    <Card.Body className="rounded-5">
                                        <Card.Text>VENTA Y RECARGA DE MATAFUEGOS</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>  
                            <Col s={12} md={6} className="mb-3" >
                                <Card className="home-card rounded-5">
                                    <Card.Img variant="top" src="./../../../public/img/local.jpg" className="rounded-5"/>
                                    <Card.Body className="rounded-5">
                                        <Card.Text className="">ELEMENTOS DE PREVENCION Y SEGURIDAD</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>  
                        </Row>

                        <Row>
                            <Col xs={12} md={6} className="mb-3" >
                                <Card className="home-card rounded-5">
                                    <Card.Img variant="top" src="./../../../public/img/camioneta.png" className="object-fit-contain rounded-5"/>
                                    <Card.Body className="rounded-5">
                                        <Card.Text>RETIRO Y ENTREGA A DOMICILIO</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>  
                            <Col s={12} md={6} className="mb-3" >
                                <Card className="home-card rounded-5">
                                    <Card.Img variant="top" src="./../../../public/img/prevencion.png" className="rounded-5"/>
                                    <Card.Body className="rounded-5">
                                        <Card.Text className="">CONOCIMIENTO Y EXPERIENCIA EN PREVENCION DE INCENDIOS</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>  
                        </Row>
                    </Container> 
                    <div class="triangle"></div>
                </section>


                <section className="w-100 section-ubicacion">
                    <Container className="mb-5 w-100"> 
                        <Row className="d-flex justify-content-center align-items-center gap-5">
                            <Col xs={12} sm={4} md={5} className="col-mapa" >
                                <Mapa />
                            </Col> 
                            <Col xs={12} sm={4} md={5} className="d-flex justify-content-center align-items-center rounded-5 p-5 flex-grow-1 col-donde-estamos" >
                                
                                <div> 
                                    <h3>¿DONDE ESTAMOS?</h3>
                                    <ul className="list-unstyled ">
                                        <li className="mt-2 fw-bold h5 text-center"><FaMapLocationDot/> 519 N° 1820 esquina 13, 1900 La Plata</li>
                                        <li className="mt-2 fw-bold"><MdAlternateEmail/> <a href="mailto:extintoresnorte@hotmail.com" className="text-decoration-none">extintoresnorte@hotmail.com</a></li>
                                        <li className="mt-2 fw-bold"><FaPhone/> <a href="tel:02214710750" className="text-decoration-none">0221 471-0750</a></li>
                                        <li className="mt-2 fw-bold"><IoLogoWhatsapp/> <a href="https://wa.me/2215448911" className="text-decoration-none">221-544-8911</a></li>
                                        <li className="mt-2 fw-bold"><IoLogoWhatsapp/> <a href="https://wa.me/2215369997" className="text-decoration-none">221-536-9997</a></li>
                                        <li className="mt-2 fw-bold"><FaInstagramSquare/> <a href="https://www.instagram.com/extintores_norte/" className="text-decoration-none">Extintores_norte</a></li>
                                        <li className="mt-2 fw-bold"><FaFacebook/> <a href="https://www.facebook.com/extintoresnorte/?locale=es_LA" className="text-decoration-none">Extintores Norte</a></li>
                                    </ul>
                                </div>

                                <img src="./../../../public/img/animacion/matafuego-mapa.png" className="img-mapa"/>

                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h3 className="fw-bold w-25">HORARIOS</h3>
                                <ul className="list-unstyled ">
                                    <li className="mt-2 fw-bold h5 text-center"><FaClock /> LUNES a VIERNES de 8.30hs a 17hs</li>
                                    <li className="mt-2 fw-bold h5"><FaClock /> SABADOS de 8.30hs a 13hs</li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="./../../../public/img/animacion/matafuego-reloj.png" className="img-reloj"/>
                            </div>
                        </Row>
                        {/* <Row xs={12} md={12} className="d-flex justify-content-center align-items-center w-100">
                            <Col xs={12} md={6} className="w-100 d-flex justify-content-around align-items-center py-3 col-horario" >
                                <img src="./../../../public/img/animacion/matafuego-reloj.png" className="img-reloj"/>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h3 className="fw-bold ">HORARIOS</h3>
                                    <ul className="list-unstyled ">
                                        <li className="mt-2 fw-bold h5 text-center"><FaClock /> LUNES a VIERNES de 8.30hs a 17hs</li>
                                        <li className="mt-2 fw-bold h5"><FaClock /> SABADOS de 8.30hs a 13hs</li>
                                    </ul>
                                </div>
                            </Col>  
                        </Row> */}
                    </Container> 
                    <div class="triangle2"></div>
                </section>      

                <section className="w-100 section-whatsapp position-relative">
                    <img src="./../../../public/img/animacion/matafuego-llamando.png"/>
                    <Container className="d-flex p-0 my-5"> 
                        <Row className="p-0 m-0 d-flex justify-content-center align-items-center gap-5">
                            <Col xs={12} md={12} lg={4} className="d-flex flex-column justify-content-center align-items-center " >
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="text-center">Por cualquier consulta no dudes en escribirnos presionando aquí</h4>
                                    {/* <h4 >Presionando aquí</h4> */}
                                    <div className="arrow"></div>
                                    <a href="https://wa.me/2215369997" className="d-flex justify-content-center align-items-center"><img className="whatsapp" src="./../../../public/img/whatsapp.png"/></a>
                                </div>
                            </Col> 
                            <Col xs={12} md={12} lg={4} className="">
                                <div class="embed-responsive embed-responsive-16by9 container-video">
                                    <iframe class="embed-responsive-item" src="./../../../public/video/video.mp4" allowfullscreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container> 
                </section>      

            </div>
    )
}