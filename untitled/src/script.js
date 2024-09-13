// Inicializar el mapa centrado en Madrid, España
const map = L.map('map').setView([40.416775, -3.703790], 13);

// Añadir la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Crear un ícono de marcador personalizado
const markerIcon = L.icon({
    iconUrl: 'pixel-marker.png', // Asegúrate de crear este ícono y colocarlo en tu carpeta de proyecto
    iconSize: [32, 32],
    iconAnchor: [16, 32], // Punto donde se ancla el ícono (mitad inferior)
    popupAnchor: [0, -32] // Punto desde el cual se abre el popup hacia arriba
});

// Añadir un marcador inicial en el centro del mapa
const marker = L.marker([40.416775, -3.703790], { icon: markerIcon }).addTo(map);
marker.bindPopup('Ubicación Inicial').openPopup();

// Evento para agregar marcadores al hacer clic en el mapa
map.on('click', function(e) {
    L.marker(e.latLng, { icon: markerIcon }).addTo(map);
});
