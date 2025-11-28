import './Pregunta.css';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

export default function Pregunta ({ id, titulo, respuesta }){

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev); 
    };

    const toggleClassName = isVisible ? 'texto-visible' : 'texto-oculto';

    return (
        <div className="container-pregunta" onClick={handleToggle}>
            <div className='pregunta'>
                <p><span className='color-light'>{id}.&nbsp;&nbsp;</span>{titulo}</p>
                <IoIosArrowDropdown className='icono-flecha' />
            </div>
            <p className={toggleClassName}>{respuesta}</p>
        </div>

        
    );
}
