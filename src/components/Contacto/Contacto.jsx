import './Contacto.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contacto (){
    return (
        <Container>
            <h3>Contactanos</h3>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese aquí su email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese aquí su nombre completo" />
                        </Form.Group>

<                       Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese aquí su telefono" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMensaje">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" aria-label="Ingrese aquí su mensaje o consulta" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}