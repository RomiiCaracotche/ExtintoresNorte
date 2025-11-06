import './Nosotros.css';
import {Container, Row, Col, Card } from 'react-bootstrap';

export default function Nosotros (){
    return (
        <div className='container-nosotros'>
            <h2>¿<span>Q</span>UIENES SOMOS?</h2>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6} className='nosotros-col'>
                        <Card className="nosotros-card">
                            <Card.Img className="nosotros-card-img" variant="top" src="./../../../public/img/frente.jpg" />
                        </Card>
                    </Col>
                    
                    <Col xs={12} md={6} lg={6} className='nosotros-col'>
                        <Card className="nosotros-card">
                            <Card.Img className="nosotros-card-img" variant="top" src="./../../../public/img/cartel.jpg" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className='nosotros-leyenda'>
                        <span>Extintores Norte</span> es una empresa familiar de la ciudad de La Plata que cuenta con un amplio conocimiento y experiencia en el rubro, cuyo objetivo es brindarle un servicio personalizado y eficiente a cada cliente según sus necesidades. Los matafuegos y demás elementos de seguridad no hacen a la rentabilidad de su empresa, pero pueden representar un gran problema si no se encuentran en condiciones reglamentarias. Es por esto que queremos presentar una alternativa para brindarle un medio de comparación con los servicios que actualmente contrata, y así optimizar la atención, pudiendo ofrecerle la misma calidad de servicio a un menor costo.
                    </div>
                </Row>
            </Container>
            <div className='img-camioneta'>
                <img src='./../../../public/img/camioneta.png'/>
            </div>
        </div>
    )
}