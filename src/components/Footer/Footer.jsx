import './Footer.css';
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Md10K } from 'react-icons/md';

export default function Footer (){
    return (
        <div className='container-footer'>
            <h3>EXTINTORES NORTE</h3>
            <ul className="li-redes">
                <li><a href="https://www.instagram.com/extintores_norte/"><BsInstagram size={30}/></a></li>
                <li><a href="https://www.facebook.com/extintoresnorte/?locale=es_LA"><FaFacebook size={30}/></a></li>
            </ul>
        </div>
    )
}