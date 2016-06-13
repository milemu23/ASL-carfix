var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//render the registration page
router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Register'});
});

//set route for login
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

//post request to register
router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  //Form validator
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Email field not valid').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals();

  //Check Errors
  var errors = req.validationErrors();

  if(errors){
    res.render('register', {
      errors: errors
    });
  } else{
    console.log('No Errors');
  }
});

module.exports = router;
