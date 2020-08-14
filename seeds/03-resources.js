
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'react', description: 'for front end'},
        {id: 2, name: 'javascript', description: ''},
        {id: 3, name: 'python', description: ''},
      ]);
    });
};
