
exports.seed = function(knex, Promise) {
  return knex('contexts').insert([
    {name: 'context1'},
    {name: 'context2'},
    {name: 'context3'}
  ]);
};
