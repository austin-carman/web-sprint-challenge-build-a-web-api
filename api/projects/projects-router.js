// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const {
    validateUser
} = require('../middleware/middleware');

const router = express.Router();

router.get('/', (req, res, next) => { // need to test error
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.get('/:id', validateUser, (req, res, next) => {
    
});

router.post('/', (req, res, next) => {
    
});

router.put('/:id', (req, res, next) => {
    
});

router.delete('/:id', (req, res, next) => {
    
});

router.get('/:id/actions', (req, res, next) => {
    
});

module.exports = router;