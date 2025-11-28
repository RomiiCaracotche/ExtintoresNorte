import './Nosotros.css';
import {Container, Row, Col, Card } from 'react-bootstrap';

const containerNosotros = [
     {id:1, titulo:"Desde 2016, Protegiendo lo que Importa en La Plata", url:"/img/nosotros/frente.jpg", detalle:"Extintores Norte es una empresa familiar que nacio en 2016 en la ciudad de La Plata con el objetivo de ser el referente de seguridad y tranquilidad para la comunidad platense y sus alrededores. Lo que nos define es nuestro compromiso de ofrecerle una atención personalizada, donde cada cliente es tratado como parte de la casa, y un trabajo meticuloso que prioriza su protección por encima de todo."},
     {id:2, titulo:"Nuestra Mision", url:"/img/nosotros/esquina.jpg", detalle:"Nuestra misión es proteger la vida y el patrimonio de nuestros clientes en La Plata y la región, proporcionando soluciones integrales de seguridad contra incendios. Lo hacemos mediante la provisión y el mantenimiento certificado de extintores, garantizando el estricto cumplimiento de la normativa vigente. Como empresa familiar, nuestro compromiso es ofrecer la máxima calidad técnica con la confianza y la responsabilidad de un servicio personalizado."},
     {id:3, titulo:"Nuestra Vision", url:"/img/nosotros/cartel.jpg", detalle:"Ser la empresa familiar líder y de mayor confianza en la provisión de seguridad contra incendios en La Plata y la Provincia de Buenos Aires. Buscamos ser reconocidos por la excelencia técnica de nuestros servicios y nuestro inquebrantable compromiso con la tranquilidad y protección de cada cliente."},
     {id:4, titulo:"Nuestros Valores", url:"/img/servicios/camioneta-frente.png", detalle:"Confianza Familiar: Servicio basado en el compromiso y la honestidad."+<br/>+"Excelencia Tecnica: Cumplimiento riguroso de la normativa legal y estándares IRAM. Integridad: Asesoramiento transparente y soluciones necesarias. Compromiso con la Comunidad: Trabajamos para hacer de La Plata un lugar más seguro."}
];

export default function Nosotros (){
    return (

          <Container-fluid className='section-nosotros pb-5'>
               <h3>¿<span>Q</span>UIENES SOMOS?</h3>

               {containerNosotros.map((item, index) => {
                    const par = index % 2 === 0;
                    const rowClass = `row-nosotros ${!par ? 'd-flex flex-row-reverse' : ''}`;

                    return (
                         <Row  className={rowClass} >

                              <Col xs={11} sm={10} md={9} lg={6} xl={5} className='row-center-center'>
                                   <div className='container-nosotros-texto'>
                                        <p className='title'>{item.titulo}</p>
                                        <p className='text'>{item.detalle}</p>
                                   </div> 
                              </Col> 

                              <Col xs={11} sm={10} md={9} lg={5} xl={4} className='row-center-center'>
                                   <div className='container-nosotros-img'>
                                        <img src={item.url}/>
                                   </div>   
                              </Col>
                         </Row>
                    );
               })}

          </Container-fluid>
    )
}  
