import jwt from 'jsonwebtoken';

const generarToken = (idUsuario) => {
  return jwt.sign(
    { id: idUsuario },              // payload
    process.env.JWT_SECRET,         // clave secreta
    { expiresIn: process.env.JWT_EXPIRES || '7d' } // opciones
  );
};

export default generarToken;