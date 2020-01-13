
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../src/models/usuarios');

const getLogin = async (email,password) =>{
    return await Usuario.findOne({
        where: {
            email: email
        
        },
      }).then(usuario => {
        if(bcrypt.compareSync(password,usuario.dataValues.password)){
            const usuario_logueado = {
                nombre: usuario.nombre,
                usuario: usuario.usuario,
                email: usuario.email
            }
            let token = jwt.sign({
                usuario_logueado
            },process.env.SEED,{
                expiresIn: process.env.CADUCIDAD_TOKEN
            })
            return {
                exito:true,
                message:"Usuario logueado correctamente",
                usuario_logueado,
                token
                
            }
        }else{
            return {
                exito:false,
                message:"Correo o contraseña inválidos "
            }
        }
      })
      .catch((err)=>{
          console.log(err);
      });
}
module.exports = {
    getLogin
}