(function() {
    const lat = 19.3972878;
    const lng = -99.1376774;
    const mapa = L.map('mapa').setView([lat, lng ], 14);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);


})()