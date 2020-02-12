const express = require("express");

const postsRouter = require("../posts/posts-router.js");

const router = express.Router();

// this router handles requests beginning in /api

// handle /api /posts
router.use("/posts", postsRouter);
// router.use("/accounts", accountsRouter);

module.exports = router;
