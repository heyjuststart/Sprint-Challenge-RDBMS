exports.seed = function(knex) {
  // get all actions and contexts
  Promise.all([knex('contexts'), knex('actions')]).then(
    ([contexts, actions]) => {
      // select at random from those 2 arrays to create
      // actioncontexts
      const entries = [];
      for (let i = 0; i < 30; i++) {
        entries.push({
          context_id: contexts[Math.floor(Math.random() * contexts.length)].id,
          action_id: actions[Math.floor(Math.random() * actions.length)]
        });
        return knex('actioncontexts').insert(entries);
      }
    }
  );
};
