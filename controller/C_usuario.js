const bcrypt = require('bcrypt');
const Usuario = require('../src/models/usuarios');
const errHandler = (err) =>{
    console.log("Error: ",err);
}

const saveUser = async(body) =>{
    const UsuarioDB = await Usuario.create({
        nombre:body.nombre,
        usuario:body.usuario,
        email:body.email,
        password:bcrypt.hashSync(body.password,10),
        perfilId:body.perfilId,
    })
    .catch(errHandler)

    return UsuarioDB;
}

const getAll = async() =>{
    return Usuario.findAll({raw:true});
}


const getById = async(id)=>{
    return new Promise((resolve,reject)=>{
        Usuario.findByPk(id).then(usuario => {
            if(usuario==null){
                reject({
                    exito:false,
                    message:"El usuario no existe"
                })
            }else{
                resolve({
                    exito:true,
                    usuario: usuario.dataValues
                })
            }
        });
        
    });
} 




module.exports = {
    saveUser,
    getAll,
    getById,
}