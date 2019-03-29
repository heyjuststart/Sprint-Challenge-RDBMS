
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {name: 'project1', description: 'description1' },
    {name: 'project2', description: 'description2' },
    {name: 'project3', description: 'description3' }
  ]);
};
