import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Pregunta from "../Pregunta/Pregunta.jsx";

const contenedorPreguntas = [
  { titulo: "1. ¿Qué tipo de extintor necesito comprar?", respuesta: "La elección depende directamente de la Clase de Fuego que exista en el lugar a proteger. El extintor más versátil y común es el de Polvo Químico Seco (ABC), que combate fuegos sólidos (A), líquidos y gases (B), y eléctricos (C). Para áreas con equipos electrónicos delicados (servidores, oficinas), se recomienda el Dióxido de Carbono (CO2) porque no deja residuos. En cocinas industriales, es indispensable el Acetato de Potasio (Clase K). Nuestro servicio de asesoramiento le garantiza que elegirá el extintor exacto para su riesgo." },
  { titulo: "2. ¿Cada cuánto tiempo debo recargar mi extintor?", respuesta: "La normativa exige que todos los extintores sean sometidos a un control y recarga anual. Esto se hace para asegurar que el agente extintor mantenga sus propiedades y que el gas propelente tenga la presión adecuada. Además, si el extintor fue utilizado (incluso por un segundo), debe recargarse inmediatamente, ya que pierde su capacidad de presurización." },
  { titulo: "3. ¿Cada cuánto se realiza el control y mantenimiento?", respuesta: "El control periódico (mantenimiento) y la recarga se realizan de forma conjunta, una vez al año. En este proceso, nuestra empresa habilitada verifica la presión, el estado de las válvulas, mangueras y seguros, y coloca la oblea reglamentaria que certifica su aptitud por el siguiente período." },
  { titulo: "4. ¿Qué es la Prueba Hidrostática (PH) y cuándo se hace?", respuesta: "La Prueba Hidrostática (PH) es una prueba de seguridad obligatoria que se realiza para verificar la resistencia estructural del cilindro del extintor. Consiste en someter el envase a alta presión hidráulica para detectar fisuras o fatiga. Debe realizarse cada cinco (5) años o en caso de que el cilindro haya sufrido un daño visible (golpe, corrosión)." },
  { titulo: "5. ¿Puedo recargar mi extintor yo mismo o en cualquier lugar?", respuesta: "No. El mantenimiento y la recarga deben ser realizados exclusivamente por empresas habilitadas y certificadas (como Extintores Norte) bajo el cumplimiento de la normativa provincial y nacional. Esto garantiza que el proceso se realice con equipos calibrados y que el extintor reciba la oblea de certificación legal, indispensable ante cualquier inspección." },
  { titulo: "6. ¿Cuál es el lugar correcto para instalar el extintor?", respuesta: "El extintor debe estar ubicado en un punto de fácil y rápido acceso, preferentemente cerca de las salidas o de las áreas de mayor riesgo. Debe estar colgado a una altura donde el cabezal no supere 1.5 metros del suelo, y nunca debe estar obstruido por muebles o mercadería. También es crucial que esté señalizado correctamente." },
  { titulo: "7. ¿Cómo sé si mi extintor está cargado y listo para usar?", respuesta: "Debe revisar el manómetro (el pequeño reloj que tienen la mayoría de los extintores). La aguja debe estar siempre apuntando a la zona verde. Si la aguja está en la zona roja o en cero, el extintor ha perdido la presión interna y necesita mantenimiento urgente." },
  { titulo: "8. ¿Los extintores CO2 (Dióxido de Carbono) dejan residuos?", respuesta: "No. El CO2 es un gas inerte que actúa desplazando el oxígeno. Es un agente limpio que se disipa en el aire sin dejar ningún tipo de residuo, lo que lo hace la opción ideal para proteger equipos electrónicos, servidores y maquinaria delicada (Clase C)." },
  { titulo: "9. ¿Qué significa la oblea que tiene pegada el extintor?", respuesta: "La oblea (o marbete) es el certificado de garantía y aptitud del extintor. Indica el mes y año exacto en que se realizó la última recarga y cuándo vence (generalmente un año después). Es la prueba legal de que el equipo fue mantenido por una empresa habilitada y está listo para funcionar." },
  { titulo: "10. ¿Se pueden usar extintores a base de agua en fuegos eléctricos (Clase C)?", respuesta: "Absolutamente no. El agua es conductora de electricidad, por lo que usar un extintor a base de agua en un fuego eléctrico energizado (Clase C) puede provocar una electrocución grave o fatal al usuario. Para fuegos eléctricos, solo use extintores de Polvo Químico Seco (ABC/BC) o Dióxido de Carbono CO2." },
];

export default function Preguntas (){
        
    return (

        <div className='section-servicios'>
            <h3><span>P</span>REGUNTAS <span>F</span>RECUENTES</h3>

            <Container>
                {contenedorPreguntas.map((pregunta) => (
                    <Row className='row-center-center my-5'>
                        <Col xs={12} md={6} lg={4} xl={12} className='row-center-center'>
                            <Pregunta
                                titulo={pregunta.titulo}
                                respuesta={pregunta.respuesta}
                            />
                        </Col>
                    </Row>
                ))}
            </Container>

        </div>
    );
    
}