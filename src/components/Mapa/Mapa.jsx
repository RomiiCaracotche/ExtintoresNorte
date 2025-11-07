import './Mapa.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet" ;  

export default function Mapa() {    

	const skater = new Icon ({ iconUrl : "/img/marker.png" , iconSize : [ 60 , 60 ] }); 

	return (
		<MapContainer center={{lat:"-34.8954285", lng:"-57.9912678"}} zoom={16}>
			<TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href=https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
			<Marker position={{lat:"-34.8954285", lng:"-57.9912678"}} icon={skater} >
				<Popup>
					Extintores Norte
				</Popup>
			</Marker>
		</MapContainer>
    )
}
