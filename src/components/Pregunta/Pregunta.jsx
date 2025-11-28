import './Pregunta.css';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

export default function Pregunta ({ titulo, respuesta }){

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev); 
    };

    const toggleClassName = isVisible ? 'texto-visible' : 'texto-oculto';

    return (
        <div className="container-pregunta" onClick={handleToggle}>
            <div className='d-flex justify-content-between'>
                <p><span>{titulo}</span></p>
                <IoIosArrowDropdown style={{color:"red"}} size={28}/>
            </div>
            <p className={toggleClassName}>{respuesta}</p>
        </div>

        
    );
}
