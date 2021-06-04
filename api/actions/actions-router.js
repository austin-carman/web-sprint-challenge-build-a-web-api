const express = require('express');
const Actions = require('./actions-model');
const {
    validateActionsId,
    validateAction,
} = require('../middleware/middlewareActions');

const router = express.Router()

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(next)
})

router.get('/:id', validateActionsId, (req, res, next) => {
    res.status(200).json(req.action);
})

router.post('/', validateAction, (req, res, next) => {
    Actions.insert(req.action)
        .then(newAction => {
            res.status(201).json(newAction)
        })
        .catch(next)
})

router.put('/:id', validateActionsId, validateAction, (req, res, next) => {

})



module.exports = router;