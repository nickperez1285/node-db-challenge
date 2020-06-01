exports.seed = function(knex) {
      return knex('resources').insert([
        { resource_name: 'good', description: "mix easdasdverything" },
        { resource_name: 'good' , description:" bakasdasde stuff"}
        
      ]);
    }