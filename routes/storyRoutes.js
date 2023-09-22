const express = require('express');

const router = express.Router();

// GET /stories: send all stories to the user
router.get('/', (req, res) => {
    res.send('send all stories');
});

// GET /stories/new: send the HTML form for creating a new story
router.get('/new', (req, res) => {
    res.send('send the new form');
});

// POST /stories: create a new story
router.post('/', (req, res) => {
    res.send('create a new story');
});

// GET /stories/:id: send the details of story identify by id with id = :id
router.get('/:id', (req, res) => {
    res.send('send story with id ' + req.params.id);
});

// GET /stories/:id/edit: send the HTML form for editing a story
router.get('/:id/edit', (req, res) => {
    res.send('send the edit form for story with id ' + req.params.id);
});

// PUT /stories/:id: update the story identify by id
router.put('/:id', (req, res) => {
    res.send('update the story with id ' + req.params.id);
});

// DELETE /stories/:id: delete the story identify by id
router.delete('/:id', (req, res) => {
    res.send('delete the story with id ' + req.params.id);
});

module.exports = router;