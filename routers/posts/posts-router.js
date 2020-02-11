const express = require('express');

const Posts = require('../../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
    const pagination = req.query;
    console.log(pagination);

    Posts.find(pagination).then(posts => {
        res.status(200).json(posts);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The posts information could not be retrieved." })
    });
})

router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if(post[0]) {
            res.status(200).json(post);
        }else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The post information could not be retrieved." });
    });
})

router.get('/:id/comments', (req, res) => {
    const { id } = req.params;

    Posts.findPostComments(id)
    .then(comments => {
        if(comments[0]) {
            res.status(200).json(comments);
        }else res.status(500).json({ message: "The post with the specified ID does not exist." });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "The comments information could not be retrieved." })
    });
})

module.exports = router;