import { validationResult } from 'express-validator';
import Precio from '../models/Precio.js';
import Categoria from '../models/Categoria.js';

const admin = (req, res) => {
    res.render('propiedades/admin', {
        pagina: 'Mis propiedades',
        barra: true
    })
}

// Formulario para crear propiedades
const crear = async (req, res) => {
    // Consultar Modelo de Precio y Categorias
    const [categorias, precios] = await Promise.all([
        Categoria.findAll(),
        Precio.findAll()
    ])

    res.render('propiedades/crear', {
        pagina: 'Crear Propiedad',
        barra: true,
        csrfToken: req.csrfToken(),
        categorias,
        precios
    })
}

const guardar = async (req, res) => {
    // validación
    let resultado = validationResult(req);

    if (!resultado.isEmpty()) {

        const [categorias, precios] = await Promise.all([
        Categoria.findAll(),
        Precio.findAll()
        ])

        return res.render('propiedades/crear', {
            pagina: 'Crear Propiedad',
            barra: true,
            csrfToken: req.csrfToken(),
            categorias,
            precios,
            errores: resultado.array()
        })
    }
}

export {
    admin,
    crear,
    guardar
}