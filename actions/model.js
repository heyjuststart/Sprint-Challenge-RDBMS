const db = require('../data/dbConfig.js');

const get = () => db('actions');

const getById = id =>
  db('actions')
    .where({ 'actions.id': id })
    .first();

const insert = action =>
  db('actions')
    .insert(action)
    .then(ids => getById(ids[0]));

const update = (id, changes) =>
  db('actions')
    .where({ id })
    .update(changes)
    .then(() => getById(id));

const remove = id =>
  db('actions')
    .where({ id })
    .del();


module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
