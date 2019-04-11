// importing modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

var engines = require('consolidate');
const financeController = require('./controllers').finance;

const router = express.Router();

var app = express();

app.use(express.static(__dirname + '/views/'));

app.engine('html', engines.mustache);
app.set('view engine', 'html');
// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

router.get('/', function(req, res) {
	res.render("login", { error_msg: "" });
});

router.post('/', function(req, res) {
	user_name = req.body.user_name;
	user_pwd = req.body.user_pwd;
	if (user_name == "jonasadmin") {
		if (user_pwd == "jonasadmin") {
			res.render('form');
		} else {
			res.render("login", { error_msg: "Invalid Password" });
		}
	} else {
		res.render("login", { error_msg: "Invalid UserName" });
	}
});

router.post('/store', financeController.add);

app.use('/', router);

app.listen(3000);