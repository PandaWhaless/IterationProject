const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/api/', userController.createUser, (req, res) => {
//   res.status(201).json({...res.locals})  
// });

// on 'create' add user to DB
//this is route handler for signup
router.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json();
})

router.post('/login', userController.findUser, userController.setCookie, (req, res) => {
    return res.status(200).json();
})

router.get('/', userController.findUsername, (req, res) => {
    return res.status(200).json(res.locals.data);
})


module.exports = router;