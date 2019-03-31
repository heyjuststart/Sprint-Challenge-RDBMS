exports.seed = function(knex, Promise) {
  // get all actions and contexts
  return Promise.all([knex('contexts'), knex('actions')]).then(
    ([contexts, actions]) => {
      // select at random from those 2 arrays to create
      // actioncontexts
      const entries = [];
      for (let i = 0; i < 30; i++) {
        entries.push({
          context_id: contexts[Math.floor(Math.random() * contexts.length)].id,
          action_id: actions[Math.floor(Math.random() * actions.length)].id
        });
      }
      return knex('actioncontexts').insert(entries);
    }
  );
};
