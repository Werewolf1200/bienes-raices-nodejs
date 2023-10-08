import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";

import usuarioRoutes from "./routes/usuarioRoutes.js";
import propiedadesRoutes from "./routes/propiedadesRoutes.js";
import appRoutes from "./routes/appRoutes.js";

import db from "./config/db.js";

// Crear la app
const app = express();

// Habilitar la lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Habilitar Cookie Parser
app.use(cookieParser());

// Habilitar CSRF
app.use(csrf({ cookie: true }));

// Conexión a la Base de datos
try {
    await db.authenticate();
    db.sync();
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
app.use('/', appRoutes)
app.use('/auth', usuarioRoutes);
app.use('/', propiedadesRoutes);

// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
}); 