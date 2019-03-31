const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/controller');
const actionsRouter = require('./actions/controller');
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);
server.use('/', (req, res) => res.send('API up and running'));
const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n*** API running on http://localhost:${port} ***\n`)
);
