const express = require('express');

const Actions = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'The actions information could not be retrieved'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Actions.getById(req.params.id);

    if (action) {
      res.status(200).json(action);
    } else {
      res
        .status(404)
        .json({ message: 'The action with the specified ID does not exist.' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      error: 'The action information could not be retrieved.'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name || !req.body.description || !req.body.notes) {
      return res.status(400).json({
        errorMessage: 'Please provide a name, description, and notes'
      });
    }
    const action = await Actions.insert(req.body);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'There was an error while saving the action to the database'
    });
  }
});

module.exports = router;
