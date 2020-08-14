
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 128).notNullable();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(0);
  })
  .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string('description').notNullable();
      tbl.boolean('completed').defaultTo(0);
      tbl.string('notes');
  })
  .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique();
      tbl.string('description');
  })
  .createTable('project_resources', tbl => {
      tbl.increments('id');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
};
