exports.seed = function(knex) {
      return knex('tasks').insert([
        { task_name: 'r01',notes: 'dshd', description: "mix everything", project_id: 1},
        { task_name: '-02' ,notes: "sdsd" ,description:" bake stuff", project_id: 2}
        
      ]);
    }