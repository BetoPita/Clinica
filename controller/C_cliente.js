//https://www.youtube.com/watch?v=VDgXAw7VynQ
const Cliente = require('../src/models/Clientes');
const Antecedentes = require('../src/models/Antecedentes_familiares');

const errHandler = (err) =>{
    console.log("Error: ",err);
}

let saveCliente = async (body) =>{
    const Cliente = require('../src/models/Clientes');
    const Antecedentes = require('../src/models/Antecedentes_familiares');
    const Indicadores = require('../src/models/indicadores');
    Indicadores.belongsTo(Cliente);
    Antecedentes.belongsTo(Cliente);

    const ClienteDB  = await Cliente.create({
        nombre:body.nombre,
        ap: body.ap,
        am: body.am,
        fecha_nacimiento: body.fecha_nacimiento,
        telefono: body.telefono,
        ocupacion: body.ocupacion,
        motivo: body.motivo,
        enfermedad: body.enfermedad,
        toma_medicamentos: body.toma_medicamentos,
        ejercicio: body.ejercicio,
        tiempo_ejercicio: body.tiempo_ejercicio,
    }).catch(errHandler)
    const antecedentesDB = await Antecedentes.create({
        obesidad: body.obesidad,
        clienteId : ClienteDB.id,
        diabetes: body.diabetes,
        cancer: body.cancer,
        hta: body.hta,
        cardiacos: body.cardiacos,
    }).catch(errHandler);

    const indicadoresDB = await Indicadores.create({
        comidas_dias: body.comidas_dias,
        preparacion: body.preparacion,
        come_entre_comidas: body.come_entre_comidas,
        hora_hambre: body.hora_hambre,
        alimentos_no_agradan: body.alimentos_no_agradan,
        toma_suplementos: body.toma_suplementos,
        cantidad_suplementos : body.cantidad_suplementos,
        dieta_especial: body.dieta_especial,
        tipo_dieta_especial: body.tipo_dieta_especial,
        tiempo_dieta_especial: body.tiempo_dieta_especial,
        razon_dieta_especial: body.razon_dieta_especial,
        resultados_dieta_especial: body.resultados_dieta_especial,
        medicamentos_bajar_peso : body.medicamentos_bajar_peso,
        consumo_agua: body.consumo_agua,
        consumo_alcohol: body.consumo_alcohol,
        consumo_tabaco: body.consumo_tabaco,
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

