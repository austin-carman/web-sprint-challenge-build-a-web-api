// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const { validateProject, } = require('../middleware/middleware');

const router = express.Router();

router.get('/', (req, res, next) => { 
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.get('/:id', validateProject, (req, res, next) => {
    res.json(req.project)
});

router.post('/', (req, res, next) => {
    
});

router.put('/:id', validateProject, (req, res, next) => {
    
});

router.delete('/:id', validateProject, (req, res, next) => {
    
});

router.get('/:id/actions', validateProject, (req, res, next) => {
    
});

module.exports = router;