// ======
//VERIFICAR TOKEN
// ======
const jwt = require('jsonwebtoken');
let verificaToken = (req,res,next) =>{
    //Obtener los headers
    let token = req.get('Authorization');

    console.log(token);
    jwt.verify(token,process.env.SEED,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err:{
                    message:"Token no válido"
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    })
}

module.exports = {
    verificaToken
}