const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'The projects information could not be retrieved'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getById(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res
        .status(404)
        .json({ message: 'The project with the specified ID does not exist.' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      error: 'The project information could not be retrieved.'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name || ~req.body.description) {
      return res.status(400).json({
        errorMessage: 'Please provide a name and a description'
      });
    }
    const project = await Projects.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'There was an error while saving the project to the database'
    });
  }
});

module.exports = router;
