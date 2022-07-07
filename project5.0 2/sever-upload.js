var mysql = require('mysql')
var express = require('express');
var app = express();
var con = mysql.createConnection({
    host: '10.11.90.15',
    port:'3306',
    password:'Study1111%', // Replace with your host name
    user: 'study',      // Replace with your database username
    Schema: 'Study',      // Replace with your database password
    table: 'files' // // Replace with your database Name
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query(`SELECT * from my_node.files`, function(err,result,fields){
//         if(err)throw err;
//         console.log(result)
//     })
// });



var PORT = 3009;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});



app.get('/', function(req, res) {
    con.query('SELECT * FROM my_node.files ', function(err, rows) {
        console.log(rows);
        res.render(__dirname + '/concept.ejs', {
            data: rows
        });
        console.log("AAA: ");
        console.log (__dirname + '/views/datatable.ejs')
    });
});
