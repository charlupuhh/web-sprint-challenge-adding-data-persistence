
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Create eCommerce software', description: 'Be better than CC', completed: false},
        {id: 2, name: 'Graduate lambda', description: '', completed: false},
      ]);
    });
};
