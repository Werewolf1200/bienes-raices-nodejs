import express from "express";

// Crear la app
const app = express();

// Routing
app.get('/', function (req, res) {
    res.send('Hola Mundo en Express');
});

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
}); 