const formularioLogin = (req, res) => {
    res.render('auth/login', { // Render -> Renderiza una vista
    });
}

// Primer parametro es la vista a renderizar, segundo parametro: Objeto con la vista
const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    });
}

export {
    formularioLogin,
    formularioRegistro
}