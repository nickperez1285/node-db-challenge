
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128)
        .notNullable();
      tbl.string('description', 128)
      tbl.boolean("completed")
      	.defaultTo(false)
      	// check

    }) 
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128)
        .notNullable();
      tbl.string('description', 128)
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_name', 128);
      tbl.string('notes', 128);
      tbl.string('description', 128)
       	 .notNullable()
      tbl.boolean("completed")
      	.defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    })
	    .createTable('projects_resources', tbl => {
	  tbl.integer('project_id')
	    .unsigned()
	    .notNullable()
	    .references('id')
	    // this table must exist already
	    .inTable('projects')
	  tbl.integer('resource_id')
	    .unsigned()
	    .notNullable()
	    .references('id')
	    // this table must exist already
    .inTable('resources')

  // the combination of the two keys becomes our primary key
  // will enforce unique combinations of ids
  tbl.primary(['project_id', 'resource_id']);
})
};


exports.down = function(knex) {
			return knex.schema
			.dropTableIfExists('projects')
			.dropTableIfExists('tasks')
			.dropTableIfExists('resources')
			.dropTableIfExists('projects_resources')

  
};
