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

const registrar = (req, res) => {
    console.log('registrando...')
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