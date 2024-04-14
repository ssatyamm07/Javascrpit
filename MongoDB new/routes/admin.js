// admin.js
const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

// Define your admin routes here
router.post('/signup', (req, res) => {
    //res.send('Admin Dashboard');
    const username = req.body.username;
    const password = req.body.password;
    //check for user is already exist or not

    Admin.create({
        username: username,
        password: password
    })
    .then(function(value) {
        res.status(201).json({
            message: 'Admin Created'
        });
    })
    .catch(function(value) {
        res.status(500).json({
            message: 'Admin Creation Failed'
        });
    });

});


router.post('/courses',adminMiddleware, (req, res) => {
    //res.send('Admin Dashboard');
});

router.get("/courses",adminMiddleware, (req, res) => {
    //res.send('Admin Dashboard');
});

module.exports = router;
