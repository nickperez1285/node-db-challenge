exports.seed = function(knex) {
      return knex('projects').insert([
        { project_name: '1', description: "mix everything" },
        { project_name: '2' , description:" bake stuff"}
        
      ]);
    }