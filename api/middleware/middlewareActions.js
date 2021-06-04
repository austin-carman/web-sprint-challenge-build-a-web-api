const Actions = require('../actions/actions-model');

function validateActionsId(req, res, next) {
    Actions.get(req.params.id)
        .then(action => {
            if(!action) {
                res.status(404).json({
                    message: `action with id ${req.params.id} not found`
                })
            } else {
                req.action = action
                next()
            }
        })
        .catch(next)
}

function validateAction(req, res, next) {
    const { project_id, description, notes } = req.body
    if(!project_id || !description || !notes) {
        res.status(400).json({
            message: 'must provide project_id, description, and notes'
        })
    } else {
        req.action = {
            project_id: req.body.project_id,
            description: req.body.description,
            notes: req.body.notes
        }
        next()
    }
}

module.exports = {
    validateActionsId,
    validateAction,
}