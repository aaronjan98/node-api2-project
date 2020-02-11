const express = require('express');

const apiRouter = require('./routers/api/api-router.js');

const server = express();

server.use(express.json());

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.send(`
        <h1>Hello Again!</h1>
        <p>Remember this project? You practiced Server-Side Routing with Express.</p>
  `);
});

const port = 5000;
server.listen(port, () => console.log(`API running on port ${port}`));