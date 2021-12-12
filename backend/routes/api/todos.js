const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Todo = require('../../models/Todo');
const User = require('../../models/User');

//@route POST api/todos
//@desc Create a todo
//@access Private

router.post('/', [auth, [
    check('title', 'Title is required').not().isEmpty()
]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const newTodo = new Todo({
                title: req.body.title,
                note: req.body.note,
                date: req.body.date,
                user: req.user.id
            })
            const todo = await newTodo.save();
            res.json(todo);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }

    }
);

//@route GET api/todos
//@desc Get all todo
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const todo = await Todo.find({ user: req.user.id }).sort({ date: -1 });
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route GET api/post/:id
//@desc Get todo by id
//@access Private
router.get('/:id', auth, async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.status(500).send('Server Error');
    }
})

//@route UPDATE api/post/:id
//@desc update todo by id
//@access Private
router.put('/:id', auth, async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.status(500).send('Server Error');
    }
})


//@route DELETE api/post/:id
//@desc delete todo by id
//@access Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Todo not found!' })
        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;