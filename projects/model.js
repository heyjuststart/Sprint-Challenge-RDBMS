const db = require('../data/dbConfig.js');

const get = () => db('projects');

const getById = id =>
  db('projects')
    .where({ 'projects.id': id })
    .first().then(project => {
      if (project) {
        return db('actions')
          .where({ 'actions.project_id': id })
          .then(actions => ( { ...project, actions } ));
      } else {
        return null;
      }
    });

const insert = project =>
  db('projects')
    .insert(project)
    .then(ids => getById(ids[0]));

const update = (id, changes) =>
  db('projects')
    .where({ id })
    .update(changes)
    .then(() => getById(id));

const remove = id =>
  db('projects')
    .where({ id })
    .del();


module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
