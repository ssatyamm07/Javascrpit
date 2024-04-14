const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');

router.post('/signup', (req, res) => {
    //res.send('User Dashboard');
});

router.get('/courses', userMiddleware, (req, res) => {
    //res.send('User Dashboard');
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    //res.send('User Dashboard');
});

router.get('/purchesedCourses', userMiddleware, (req, res) => {
    //res.send('User Dashboard');
});

module.exports = router;

