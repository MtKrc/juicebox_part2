const express = require('express');
const apiRouter = express.Router();

// users
const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// posts
const postsRouter = require('./posts');
apiRouter.use('/posts', postsRouter);

// tags
const tagsRouter = require('./tags');
apiRouter.use('/tags', tagsRouter);

module.exports = apiRouter;