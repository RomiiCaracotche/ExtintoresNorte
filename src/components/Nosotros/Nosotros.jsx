import './Nosotros.css';
import {Container, Row, Col, Card } from 'react-bootstrap';

const containerNosotros = [
     {id:1, titulo:"Desde 2016, Protegiendo lo que Importa en La Plata", url:"/img/nosotros/frente.jpg", detalle:"Extintores Norte </span> es una empresa familiar que nació en 2016 en la ciudad de La Plata con un objetivo fundamental: ser el referente de seguridad y tranquilidad para la comunidad platense y sus alrededores. Si bien arrancamos con un amplio conocimiento y experiencia en el rubro, lo que realmente nos define es nuestro compromiso como negocio familiar. Esto se traduce en una atención personalizada, donde cada cliente es tratado como parte de la casa, y un trabajo meticuloso que prioriza su protección por encima de todo."},
     {id:2, titulo:"Nuestra Mision", url:"/img/nosotros/esquina.jpg", detalle:"Nuestra misión es proteger la vida y el patrimonio de nuestros clientes en La Plata y la región, proporcionando soluciones integrales de seguridad contra incendios. Lo hacemos mediante la provisión y el mantenimiento certificado de extintores, garantizando el estricto cumplimiento de la normativa vigente. Como empresa familiar, nuestro compromiso es ofrecer la máxima calidad técnica con la confianza y la responsabilidad de un servicio personalizado."},
     {id:3, titulo:"Nuestra Vision", url:"/img/nosotros/cartel.jpg", detalle:"Ser la empresa familiar líder y de mayor confianza en la provisión de seguridad contra incendios en La Plata y la Provincia de Buenos Aires. Buscamos ser reconocidos por la excelencia técnica de nuestros servicios y nuestro inquebrantable compromiso con la tranquilidad y protección de cada cliente."},
     {id:4, titulo:"Nuestros Valores", url:"/img/servicios/camioneta-frente.png", detalle:"Confianza Familiar: Servicio basado en el compromiso y la honestidad."+<br/>+"Excelencia Tecnica: Cumplimiento riguroso de la normativa legal y estándares IRAM. Integridad: Asesoramiento transparente y soluciones necesarias. Compromiso con la Comunidad: Trabajamos para hacer de La Plata un lugar más seguro."}
];

export default function Nosotros (){
    return (

          <Container className='section-nosotros pb-5'>
               <h3>¿<span>Q</span>UIENES SOMOS?</h3>

               {containerNosotros.map((item, index) => {
                    const par = index % 2 === 0;
                    const rowClass = `row-nosotros g-5 ${!par ? 'd-flex flex-row-reverse' : ''}`;

                    return (
                         <Row  className={rowClass}>

                              <Col xs={12} md={6} lg={4} xl={7} className='row-center-center'>
                                   <div className='container-nosotros-texto'>
                                        <p className='title'>{item.titulo}</p>
                                        <p className='text'>{item.detalle}</p>
                                   </div> 
                              </Col> 

                              <Col xs={12} md={6} lg={4} xl={5} className='row-center-center'>
                                   <div className='container-nosotros-img'>
                                        <img src={item.url}/>
                                   </div>   
                              </Col>
                         </Row>
                    );
               })}

          </Container>
    )
}  

/* {item.id % 2 === 0 ? (<Row className='row-center-center mt-5 mb-5'>) : (<Row className='d-flex flex-row-reverse mt-5 mb-5'>)} */
                    <Row className='mt-5 mb-5'></Row>


           {/*  <Row className='mt-5 mb-5'>
               <Col xs={12} md={6} lg={4} xl={7} className='row-center-center'>
                    <div className='container-nosotros'>
                         <p className='title'>Desde 2016, Protegiendo lo que Importa en La Plata</p>
                         <p className='text'><span>Extintores Norte </span> es una empresa familiar que nació en 2016 en la ciudad de La Plata con un objetivo fundamental: ser el referente de seguridad y tranquilidad para la comunidad platense y sus alrededores. Si bien arrancamos con un amplio conocimiento y experiencia en el rubro, lo que realmente nos define es nuestro compromiso como negocio familiar. Esto se traduce en una atención personalizada, donde cada cliente es tratado como parte de la casa, y un trabajo meticuloso que prioriza su protección por encima de todo.</p>
                    </div> 
               </Col> 
               <Col xs={12} md={6} lg={4} xl={5} className='row-center-center'>
                    <div className='container-nosotros'>
                         <img src="./../../../public/img/nosotros/frente.jpg" className=''/>
                    </div>   
               </Col> 
            </Row>

            <Row className='my-5'>
               <Col xs={12} md={6} lg={4} xl={5} className='row-center-center'>
                    <div className='container-nosotros'>
                         <img src="./../../../public/img/nosotros/esquina.jpg"/>
                    </div>
               </Col>
               <Col xs={12} md={6} lg={4} xl={7} className='row-center-center'>
                    <div className='container-nosotros'>
                         <p className='title'>Nuestra Mision</p>
                         <p className='text'>Nuestra misión es proteger la vida y el patrimonio de nuestros clientes en La Plata y la región, proporcionando soluciones integrales de seguridad contra incendios. Lo hacemos mediante la provisión y el mantenimiento certificado de extintores, garantizando el estricto cumplimiento de la normativa vigente. Como empresa familiar, nuestro compromiso es ofrecer la máxima calidad técnica con la confianza y la responsabilidad de un servicio personalizado.</p>
                    </div>  
               </Col>  
            </Row>

            <Row className='mt-3 mb-5'>
               <Col xs={12} md={6} lg={4} xl={7} className='row-center-center'>
                    <div className='container-nosotros'>
                         <p className='title'>Nuestra Vision</p>
                         <p className='text'>Ser la empresa familiar líder y de mayor confianza en la provisión de seguridad contra incendios en La Plata y la Provincia de Buenos Aires. Buscamos ser reconocidos por la excelencia técnica de nuestros servicios y nuestro inquebrantable compromiso con la tranquilidad y protección de cada cliente.</p>
                    </div>
               </Col> 
               <Col xs={12} md={6} lg={4} xl={5} className='row-center-center'>
                    <div className='container-nosotros'>
                         <img src="./../../../public/img/nosotros/cartel.jpg"/>
                    </div>    
               </Col>   
            </Row>

            <Row className='my-5'>
               <Col xs={12} md={6} lg={4} xl={5} className='row-center-center'>
                    <div className='container-nosotros'>
                         <img src="./../../../public/img/servicios/camioneta-frente.png"/>
                    </div>    
               </Col> 
               <Col xs={12} md={6} lg={4} xl={7} className='row-center-center'>
                    <div className='container-nosotros'>
                         <p className='title'>Nuestros Valores</p>
                         <p className='text'>Confianza Familiar: Servicio basado en el compromiso y la honestidad.
                              Excelencia Tecnica: Cumplimiento riguroso de la normativa legal y estándares IRAM.
                              Integridad: Asesoramiento transparente y soluciones necesarias.
                              Compromiso con la Comunidad: Trabajamos para hacer de La Plata un lugar más seguro.</p>
                    </div>
               </Col> 
            </Row> */}
       