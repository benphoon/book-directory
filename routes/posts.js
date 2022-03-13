const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

//ROUTES
//get - get info
//post -  eg submit a form (give info)
//delete - delete data
//patch - update a resource
//first parameter = route

// RETRIEVE ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch {
        res.json({ message: err })
    }
});

// RETRIEVE SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch {
        res.json({ message: err })
    }
})

// SUBMIT A POST
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({ message: err })
        })
})

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
        const selectedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set:
                {
                    title: req.body.title,
                    description: req.body.description
                }
            }
        )
        console.log(req.params.postId)
        res.json(selectedPost)
    } catch {
        res.json({ message: err })
    }

})

// DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch {
        res.json({ message: err })
    }
})

module.exports = router;