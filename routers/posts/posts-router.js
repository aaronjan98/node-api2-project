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

module.exports = router;