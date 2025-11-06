import './Mapa.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Mapa() {
	return (
		<MapContainer center={{lat:"-34.8954285", lng:"-57.9912678"}} zoom={17}>
			<TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href=https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
			<Marker position={{lat:"-34.8954285", lng:"-57.9912678"}}>
				<Popup>
					Extintores Norte
				</Popup>
			</Marker>
		</MapContainer>
    )
}
