//https://www.youtube.com/watch?v=VDgXAw7VynQ
const Cliente = require('../src/models/Clientes');
const Antecedentes = require('../src/models/Antecedentes_familiares');

const errHandler = (err) =>{
    console.log("Error: ",err);
}

let saveCliente = async (body) =>{
    const Cliente = require('../src/models/Clientes');
    const Antecedentes = require('../src/models/Antecedentes_familiares');
    Antecedentes.belongsTo(Cliente);

    const ClienteDB  = await Cliente.create({
        nombre:body.nombre,
        ap: body.ap
    }).catch(errHandler)
    const antecedentesDB = await Antecedentes.create({
        obesidad: body.obesidad,
        clienteId : ClienteDB.id
    })
}


const getAll = () =>{
    
    return Cliente.findAll({ raw: true });
}

const getById = async(id)=>{
    return new Promise((resolve,reject)=>{
        Cliente.findByPk(id).then(cliente => {
            console.log("Cliente",cliente);
            if(cliente==null){
                reject({
                    exito:false,
                    message:"El cliente no existe"
                })
            }else{
                resolve({
                    exito:true,
                    cliente: cliente.dataValues
                })
            }
        });
        
    });
    
    

    
} 

module. exports = {
    saveCliente,
    getAll,
    getById
}

