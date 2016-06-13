var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//set route for register
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

  //Check Errors
  var errors = req.validationErrors();

  if(errors){
    console.log('Errors');
  } else{
    console.log('No Errors');
  }
});

module.exports = router;
