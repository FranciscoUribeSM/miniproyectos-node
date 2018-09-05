const descripcion = {
        demand: true,
        alias:'d',
        desc:'Descripcion de la tarea por hacer' 
};
const completado ={
    default: true, 
    alias:'c',
    desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
                .command('crear','Crear un elemento por hacer', {descripcion})
                .command('Actualizar','Actualizar una tarea por hacer',{
                    descripcion,
                    completado
                })
                .command('borrar','Borrar tarea', {descripcion})
                .help()
                .argv;

module.exports = {
    argv
}