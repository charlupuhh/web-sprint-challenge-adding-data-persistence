
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'design architecture', completed: false, notes: ''},
        { id: 2, project_id: 1, description: 'make it', completed: false, notes: ''},
        { id: 3, project_id: 2, description: 'finish studies', completed: false, notes: 'almost there!'},
        { id: 4, project_id: 2, description: 'get endorsed', completed: false, notes: ''},
      ]);
    });
};
