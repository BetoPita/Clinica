//Fecha de vencimiento del token
//60 segundos * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60*60*24*30
//Semilla de autentificación

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

