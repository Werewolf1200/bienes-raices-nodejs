import bcrypt from 'bcrypt';

const usuarios = [
    {
        nombre: 'Enrique',
        email: 'enrique@correo.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios;