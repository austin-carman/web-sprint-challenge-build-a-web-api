const Projects = require('../projects/projects-model');

function validateId(req, res, next) {
   Projects.get(req.params.id)
    .then(project => {
        if(!project) {
            res.status(404).json({ 
                message: `project with id ${req.params.id} not found`
            })
        } else {
            req.project = project
            next()
        }
    })
    .catch(next)
}

function validateProject(req, res, next) {
    const { name, description, completed } = req.body
        if(!name || !description) {
            res.status(400).json({
                message: 'Must have name and description in body'
            })
        } else {
            req.project = { 
                name: req.body.name.trim(),
                description: req.body.description.trim(),
                completed: true
            }
            next()
        }
}

function errHandling(err, req, res, next) {
    console.log('Error handling middleware');
    res.status(err.status || 5000).json({
        customMessage: 'Error loading app',
        message: err.message,
        stack: err.stack
    })
}

module.exports = {
    validateId,
    validateProject,
    errHandling
}