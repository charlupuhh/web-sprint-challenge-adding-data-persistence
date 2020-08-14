const router = require('express').Router();

const Projects = require('./project-model')

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' })
        })
})

router.get('/:id', (req, res) => {
    Projects.getById(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not find project with given id' })
        })
})

//fix me
router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
        .then(details => res.status(200).json(details))
        .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json( { message: 'Failed to create new project' })
        })
})

module.exports = router;