const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../models/transactionsModel')

const userController = {};


//MIDDLEWARE TO ADD USERNAME AND PASSWORD TO DATABASE FROM SIGN UP
userController.createUser = (req, res, next) => {
    console.log('in create user')
    const addUserQuery = 'INSERT INTO public.users (username, password) VALUES ($1, $2) RETURNING *';
    const values = [req.body.username, req.body.password];
    db.query(addUserQuery, values)
        .then(data => {
            res.locals = req.body;
            return next();
        })
        .catch( err => {
            console.log('query error', err);
            return next(err);
        });
};

// MIDDLEWARE TO SEARCH DB FOR THE ID THAT PERTAINS TO THE USERNAME AND PASSWORD
userController.findUser = (req, res, next) => {
    console.log('in findUser')
    const findUserId = 'SELECT _id FROM public.users WHERE username=$1 AND password=$2';
    const userId = [req.body.username, req.body.password];
    db.query(findUserId, userId) 
        .then(user => {
            // console.log('user', user)
            res.locals = req.body;
            if (user.rows.length > 0) {
                return next()
            } else return next(err)
        })
        .catch( err => {
            console.log('user not found', err);
            return next(err);
        });
}
// MIDDLEWARE TO FIND USERNAME IN DB 
userController.findUsername = (req, res, next) => {
    console.log('in findUsername')
    const findUsername = 'SELECT username from public.users WHERE _id=$1'
    const values = [req.headers.cookie.replace(/\D/g, "")];
    db.query(findUsername, values)
        .then(data => {
            res.locals.data = data.rows[0].username;
            console.log('locals data', res.locals.data)
            return next();
        })
        .catch(err => {
            console.log('error', err);
            return next(err);
        });
};

// MATCHES TO USENAME AND PASSWORD
// ANOTHER QUERY TO FIND ID WHERE USERNAME AND PASSWORD IS EQUAL TO ID, THEN SET COOKIE
userController.setCookie = (req, res, next) => {
    console.log('in set cookie')
    const getUserID = 'SELECT _id FROM public.users WHERE username=$1 AND password=$2'
    const id = [res.locals.username, res.locals.password]
    db.query(getUserID, id)
    // console.log(getUserID)
    // console.log(id)
        .then(data => {
            // console.log('data', data);
            res.cookie('usercookie', data.rows[0]._id);
            return next();
        })
        .catch( err => {
            console.log('query error on create user', err);
            return next(err);
        });
}

module.exports = userController;