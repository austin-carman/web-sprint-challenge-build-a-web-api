const express = require('express');
const Actions = require('./actions-model');
const {
    validateActionsId
} = require('../middleware/middlewareActions');

const router = express.Router()

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(next)
})

router.get('/', validateActionsId, (req, res, next) => {
    
})

module.exports = router;