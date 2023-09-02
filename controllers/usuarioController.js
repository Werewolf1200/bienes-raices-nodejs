const formularioLogin = (req, res) => {
    res.render('auth/login', { // Render -> Renderiza una vista
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', { 
    });
}

export {
    formularioLogin,
    formularioRegistro
}