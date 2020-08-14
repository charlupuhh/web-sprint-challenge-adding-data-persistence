const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    getTasks,
    add,
}

function get(){
    return db('projects');
}

function getById(id){
    return db('projects').where('id', id);
}
//needs work
function getTasks(id){
    return db('projects')
        .join('tasks', 'tasks.project_id','projects.id')
        .where(id, 'projects.id')
}

function add(project){
    return db('projects').insert(project);
}