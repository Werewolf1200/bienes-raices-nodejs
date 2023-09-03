import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

// Crear la app
const app = express();

// Habilitar Pug
app.set('view engine', 'pug'); // Set - Agregar configuración
app.set('views', './views');

// Carpeta Publica
app.use(express.static('public')); // Indicar los archivos estaticos a usar

// Routing
app.use('/', usuarioRoutes);

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
}); 