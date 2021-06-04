const express = require('express');
const projectsRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.use((err, req, res, next) => {
    console.log('Error handling middleware');
    res.status(err.status || 5000).json({
        customMessage: 'Error loading app',
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!