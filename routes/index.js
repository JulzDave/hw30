var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tv_db'
});
connection.connect(); 

/* GET home page. */
router.get('/thank', function(req, res, next) {
  res.send(`Thanks for leaving your details! <br/><br/> <button onclick="location.href = 'http://localhost:3000/'">Go back</button>`);
});



router.get('/newbuyer1', function(req, res, next) { 
  
      connection.query('SELECT * FROM tv_buyer',(err, data)=>
      {
          if(err) throw err;
          res.json(data); 
      }); 
  
});

// SELECT MAX(ID) FROM tv_db.tv_buyer 
// LIMIT 1 



router.post('/newbuyer1', function(req, res, next) {
  let insertQuery=`
  INSERT INTO tv_buyer (firstname) 
  VALUES ('${req.body[0]}')
  `
  debugger; 
  connection.query(insertQuery, (err, data)=>
  {
      if(err) throw err;
  }); 
});
// UPDATE tv_buyer
//   SET lastname='${req.body[1]}'
//   WHERE [ID] = (SELECT MAX([ID]) FROM tv_buyer);
router.post('/newbuyer2', function(req, res, next) {
  let insertQuery=`
  UPDATE tv_buyer SET lastname='${req.body[1]}' ORDER BY ID DESC LIMIT 1;` 
  debugger; 
  connection.query(insertQuery, (err, data)=>
  {
      if(err) throw err;
  }); 
});

router.post('/newbuyer3', function(req, res, next) {
  let insertQuery=`
  UPDATE tv_buyer SET inches='${req.body[2]}' ORDER BY ID DESC LIMIT 1;` 
  debugger; 
  connection.query(insertQuery, (err, data)=>
  {
      if(err) throw err;
  }); 
});

router.post('/newbuyer4', function(req, res, next) {
  let insertQuery=`
  UPDATE tv_buyer SET model='${req.body[3]}' ORDER BY ID DESC LIMIT 1;` 
  debugger; 
  connection.query(insertQuery, (err, data)=>
  {
      if(err) throw err;
  }); 
});

// router.get('/createdb', function (req, res, next) {
//   //create the DB
//   //connect to  SQL engine 


//   //create db query
//   connection.query("CREATE DATABASE tv_db", (err, data) => {
//       if (err) throw err;
//       res.redirect("/createtable");
//   });

// });

// router.get('/createtable', function (req, res, next) { 
//   //connect to  SQL DB 
//   connection.connect(); 
//   var createTableQuery = `
//  CREATE TABLE tv_buyer (
//   ID int NOT NULL AUTO_INCREMENT,
//   firstname varchar(20) NOT NULL,
//   lastname varchar(20) NOT NULL,
//   inches int NOT NULL,
//   model varchar(20) NOT NULL,
//   PRIMARY KEY (ID)
//   ); 
// `;

//   //create db query
//   connection.query(createTableQuery, (err, data) => {
//       if (err) throw err;
//       res.send("Table and DB created!");
//   });

// });

module.exports = router;
