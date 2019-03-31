
exports.seed = function(knex, Promise) {

  return knex('projects')
    .then(function(projects) {
      // generate random entries
      const entries = [];
      for (let i = 0; i < 30; i++) {
        entries.push({
          project_id: projects[Math.floor(Math.random() * projects.length)].id,
          description: `action description ${i}`,
          notes: `action notes ${i}`
        });
      }
      // Inserts seed entries
      return knex('actions').insert(entries);
    });
};
