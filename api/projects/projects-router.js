// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const { 
    validateId, 
    validateProject, 
} = require('../middleware/middleware');

const router = express.Router();

router.get('/', (req, res, next) => { 
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.get('/:id', validateId, (req, res, next) => {
    res.json(req.project)
});

router.post('/', validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
});

router.put('/:id', validateId, validateProject, (req, res, next) => {
    Projects.update(req.params.id, req.body)
        .then(updateProject => {
            res.json(updateProject)
        })
        .catch(next)
});

router.delete('/:id', validateId, (req, res, next) => {
    Projects.remove(req.params.id)
        .then(deleted => {
            res.json(deleted)
        })
        .catch(next)
});

router.get('/:id/actions', validateId, (req, res, next) => {
    Projects.get(req.params.id)
        .then(project => {
            res.json(project.actions)
        })
        .catch(next)
});

module.exports = router;