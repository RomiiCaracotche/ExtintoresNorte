import "./servicio.css";
import { Card } from 'react-bootstrap';

export default function Servicio({ titulo, url }) {
    return (
        <div className='container-servicios'>
            <Card className="servicio-card">
                <Card.Img variant="top" src={url} />
                <Card.Body className="servicio-card-body">
                    <Card.Text>{titulo}</Card.Text>
                </Card.Body>
            </Card>
        </div> 
    );
}