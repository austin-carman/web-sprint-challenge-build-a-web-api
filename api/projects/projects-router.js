// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const { 
    validateProjectId, 
    validateProject 
} = require('../middleware/middleware');

const router = express.Router();

router.get('/', (req, res, next) => { 
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.get('/:id', validateProjectId, (req, res, next) => {
    res.json(req.project)
});

router.post('/', validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
});

router.put('/:id', validateProjectId, (req, res, next) => {
    
});

router.delete('/:id', validateProjectId, (req, res, next) => {
    
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
    
});

module.exports = router;