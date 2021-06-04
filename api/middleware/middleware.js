const Projects = require('../projects/projects-model');

function validateProject(req, res, next) {
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

function errHandling(err, req, res, next) {
    console.log('Error handling middleware');
    res.status(err.status || 5000).json({
        customMessage: 'Error loading app',
        message: err.message,
        stack: err.stack
    })
}

module.exports = {
    validateProject,
    errHandling
}