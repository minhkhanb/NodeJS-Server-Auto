var express= require('express');
var compression = require('compression');
var mysql      = require('mysql');
var app= express();
var port = process.env.PORT || '3000';
var oneDay = 86400000;
app.use(compression());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.set('view engine','ejs');
app.set('views','./views')

var server= require('http').Server(app);
var io= require('socket.io')(server);
server.listen(port);

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'antuongshop'
// });

var pool= mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME,
});
// pool.connect(function(err){
// if(!!err) {
// 	    console.log("Error");
// 	} else {
// 	    console.log("Connected");
// 	}
// });

var count=0;
io.sockets.on('connection', function(socket) {
	count++;
	console.log('Co nguoi vua ket noi toi server: '+ socket.id);
	io.sockets.emit('count_user', { count: count });
	socket.on('disconnect', function(){
		count--;
		io.sockets.emit('count_user', { count: count });
	});
});
console.log("NODE_ENV : ", process.env.NODE_ENV);
app.get('/', function(req,res){
	pool.getConnection(function(err, connection) {
	  if(!!err){
	  	connection.release();
	  	console.log('error');
	  }else{
	  	console.log('connected');
	  	connection.query( 'SELECT id,name,quantity,price,cover_photo from products ORDER BY id DESC LIMIT 20', function(err, rows, fields) {
	  		connection.release();
	  		if(!!err){
	  			console.log('Error in the query');
	  		}else{
	  			var locals={
					title:'Demo node js',
					description:'Page description',
					keyword:'keyword node js',
					header:'Page header'
				};
				console.log(rows.length);
				//res.json(rows);
	  			res.render('index',{data:rows,local:locals})
	  		}
	  	});
	  }

	});
	// var queryString = 'SELECT id,name,quantity,price,cover_photo from products ORDER BY id DESC LIMIT 100';
	// connection.query(queryString, function(err, rows, fields) {
	// connection.end();
	// 	var locals={
	// 		title:'Demo node js',
	// 		description:'Page description',
	// 		keyword:'keyword node js',
	// 		header:'Page header'
	// 	};
	// 	if (!err)
	// 		res.render('index',{data:rows,local:locals})
	//   	else
	//     	console.log('Error while performing Query.');
 //  	});
});
