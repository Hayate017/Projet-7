const express = require('express');
const router = express.Router();

const postControl = require('../controllers/post');

const auth = require('../middleware/auth');

const multer = require('../middleware/multer-config')

// Création des routes post
router.post('/', auth, multer, postControl.createPost);
router.get('/', auth, postControl.getAllPosts);
router.get('/:id', auth, postControl.getOnePost);
router.get('/user/:id', auth, postControl.getAllPostsFromOneUser);
router.delete('/:id', auth, postControl.deleteOnePost);
router.put('/:id', auth, multer, postControl.modifyPost);
router.post('/:id/comment', auth, postControl.createComment);
router.get('/:id/comment', auth, postControl.getAllCommentsFromOnePost);
router.get('/:id/comment/:commentid', auth, postControl.getOneCommentFromOnePost);
router.delete('/:id/comment/:commentid', auth, postControl.deleteOneComment);
router.put('/:id/comment/:commentid', auth, postControl.modifyOneComment);
router.post('/:id/like', auth, postControl.likePost);
router.post('/comment/:id/like', auth, postControl.likeComment);
router.get('/:id/like', auth, postControl.checkPostLike);
router.get('/comment/:id/like', auth, postControl.checkCommentLike);

module.exports = router;