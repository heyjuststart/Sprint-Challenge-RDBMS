
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {name: 'project1' },
    {name: 'project2' },
    {name: 'project3' }
  ]);
};
