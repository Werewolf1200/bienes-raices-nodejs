import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";
import { generarId } from "../helpers/tokens.js";

const formularioLogin = (req, res) => {
    res.render('auth/login', { // Render -> Renderiza una vista
        pagina: 'Iniciar Sesión'
    });
}

// Primer parametro es la vista a renderizar, segundo parametro: Objeto con la vista
const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    });
}

const registrar = async (req, res) => {

    console.log(req.body);

    // Validación
    await check('nombre').notEmpty().withMessage('El Nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El Password debe ser de almenos 6 caracteres').run(req)
    await check('repetir_password').equals('password').withMessage('Los Passwords no son iguales').run(req)

    let resultado = validationResult(req);

    // Verificar que el resultado esté vacio
    if (!resultado.isEmpty()) {
        // Errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario: { // Autollenado de campos validados
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }

    // Extraer datos
    const { nombre, email, password } = req.body;

    // Verificar que el usuario no esté duplicado
    const existeusuario = await Usuario.findOne({ where: { email } });
    if (existeusuario) {
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: [{msg: 'El usuario ya está registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }

    // Almacenar un Usuario
    await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    // Mostrar mensaje de confirmación
    res.render('templates/mensaje', {
        pagina: 'Cuenta Creada Correctamente',
        mensaje: 'Hemos Enviado un Email de Confirmación, presiona en el enlace'
    })
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu Acceso a Bienes Raices'
    });
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}