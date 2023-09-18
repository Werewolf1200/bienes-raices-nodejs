import { exit } from 'node:process';
import categorias from './categorias.js';
import Categoria from '../models/Categoria.js';
import precios from './precios.js';
import Precio from '../models/Precio.js';
import db from '../config/db.js';

// Seeder -> Inserta datos masivamente en una base de datos

const importarDatos = async () => {
    try {
        // Autenticar en la Base de datos
        await db.authenticate();

        // Generar las columnas
        await db.sync();

        // Insertar los datos
        await Promise.all([
            Categoria.bulkCreate(categorias),
            Precio.bulkCreate(precios)
        ]);

        console.log('Datos importados Correctamente');
        exit(); // Sin error
    } catch (error) {
        console.log(error);
        exit(1) // Con error
    }
}

const eliminarDatos = async () => {
    try {
        await db.sync({ force: true });
        console.log('Datos Eliminados Correctamente');
        exit();
    } catch (error) {
        console.log(error);
        exit(1)
    }
}

if (process.argv[2] === "-i") {
    importarDatos();
} // argv -> Pasar argumentos a un comando desde el ComandLine

if (process.argv[2] === "-e") {
    eliminarDatos();
}