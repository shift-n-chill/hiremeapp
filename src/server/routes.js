module.exports = function(app){

 
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

    // configuration =================
    // create application/json parser
    app.jsonParser = bodyParser.json()

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    var mongoose = require('mongoose');


    var Technology = require(__dirname+"/../models/Technology.js").Technology;
    var Area = require(__dirname+"/../models/Area.js").Area;
    var Question = require(__dirname+"/../models/Question.js").Question;
    var User = require(__dirname+"/../models/User.js").User;
    var Article = require(__dirname+"/../models/Article.js").Article;


    var userController = require(__dirname+'/../controllers/userController.js');
    
    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get a random question from the techology
    app.get('/api/get_question/:area/:technology/:level', function(req, res) {

        var tech = req.params.technology;
        var area = req.params.area;
        var level = req.params.level;

        var questions = [];

        Area.find({'name': area})
            .populate( 'technologies', null, { name: { $in: [tech] } } )
            .exec(function(err, _res){
              Technology.find({'name': tech})
                  .populate( 'questions', null, { level: { $in: [1] } } )
                  .exec(function(err, _res){
                    questions = _res[0].questions;
                    var question = questions[Math.floor(Math.random() * questions.length)];
                    res.send(question);
              })
        })

    });

    //list the areas
    app.get('/api/list_areas', function(req, res) {

        Area.find({}).exec(function(err, _res){
          res.send(_res);
        });

    });

    //list the technologies from an area
    app.get('/api/list_technologies/:area', function(req, res) {

        var area = req.params.area;

        Area.find({'name': area})
            .populate( 'technologies').exec(function(err, _res){
          res.send(_res[0].technologies);
        });

    });

    //list the articles
    app.get('/api/list_articles', function(req, res) {

        Article.find({}).exec(function(err, _res){
          res.send(_res);
        });

    });


    //------------------------------------------ users
        //list the areas
    app.get('/api/list_areas', function(req, res) {

        Area.find({}).exec(function(err, _res){
          res.send(_res);
        });

    });

    //list the articles
    app.get('/api/user/correct_question', function(req, res) {

      var user_id = req.body.user_id;
      var type_id = req.body.type_id;

      User.findByIdAndUpdate(
              user_id,
              {$push: {"correct_questions.technology_score": {type: type_id, value: 22}}},
              {safe: true, upsert: true, new : true},
              function(err, model) {
                  console.log(err);
              }
          );

    });
    
    
    //create user
    app.post('/api/user/new',  app.jsonParser, function(req, res) {
        userController.createUser(req, res);
    });
    
        //create user
    app.get('/api/user',  app.jsonParser, function(req, res) {
        userController.getUser(req, res);
    });


}
