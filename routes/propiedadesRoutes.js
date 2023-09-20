import express from "express";
import { admin, crear, guardar } from '../controllers/propiedadController.js';
import { body } from "express-validator";

const router = express.Router();

router.get('/mis-propiedades', admin);
router.get('/propiedades/crear', crear)
router.post('/propiedades/crear',
    body('titulo').notEmpty().withMessage('El Titulo del Anuncio es Obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La Descripción no puede ir vacia')
        .isLength({ max: 200 }).withMessage('La Descripcion es muy larga'),
    body('categoria').isNumeric().withMessage('Selecciona una Categoría'),
    body('precio').isNumeric().withMessage('Selecciona un Rango de Precios'),
    body('habitaciones').isNumeric().withMessage('Selecciona la Cantidad de Habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona la Cantidad de Estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la Cantidad de Baños'),
    body('lat').notEmpty().withMessage('Ubica la Propiedad en el Mapa'),
    guardar)

export default router;