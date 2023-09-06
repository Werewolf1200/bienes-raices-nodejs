import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

// Crear la app
const app = express();

// Conexión a la Base de datos
try {
    await db.authenticate();
    console.log("Conexion Exitosa a la base de datos")
} catch (error) {
    console.log(error);
}

// Habilitar Pug
app.set('view engine', 'pug'); // Set - Agregar configuración
app.set('views', './views');

// Carpeta Publica
app.use(express.static('public')); // Indicar los archivos estaticos a usar

// Routing
app.use('/auth', usuarioRoutes);

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
}); 