// ======
//VERIFICAR TOKEN
// ======
const jwt = require('jsonwebtoken');
let verificaToken = (req,res,next) =>{
    //Obtener los headers
    let token = req.get('Authorization');


    // jwt.verify(token,'SEMILLA',(err,decoded)=>{
    //     if(err){
    //         return res.status(401).json({
    //             ok:false,
    //             err
    //         })
    //     }

    //     req.usuario = decoded.usuario;
    //     next();
    // })
    next();
}

module.exports = {
    verificaToken
}