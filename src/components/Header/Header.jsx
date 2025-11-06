import './Header.css';

export default function Header(){
    return (
        <div className="container-nav"> 
            <img src="./../../../public/img/animacion/matafuego-bienvenido.png" className="bienvenido"/>
            <div className='nombre'> 
                <span>Extintores Norte</span>
            </div>
        </div>
    )
}