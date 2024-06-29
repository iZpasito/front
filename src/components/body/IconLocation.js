import L from "leaflet"
import iconLocationUrl from '../../assets/mark.svg';
import iconStoreLocationUrl from '../../assets/markstore.svg';

const IconLocation = new L.icon({
    iconUrl: iconLocationUrl,
    iconRetinaUrl: iconLocationUrl,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    iconSize: [35, 35],
    className: "Ubication",
});
const IconStoreLocation = new L.icon({
    iconUrl: iconStoreLocationUrl,
    iconRetinaUrl: iconStoreLocationUrl,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    iconSize: [35, 35],
    className: "Ubication",
});

export { IconLocation,  IconStoreLocation};