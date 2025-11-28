import "./Producto.css";
import { Card } from 'react-bootstrap';

export default function Producto({ titulo, detalle, url }) {
    return (

        <div class="contenedor-principal">
            <div class="div-inicial">
                <Card className="producto-card">
                    <Card.Img variant="top" src={url} className="object-fit-contain"/>
                    <Card.Body className="producto-card-body">
                        <Card.Text>{titulo}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="div-oculto">
                <div className="producto-card-detalle">
                    <p>{detalle}</p>
                </div>
            </div>
        </div>
    )
}