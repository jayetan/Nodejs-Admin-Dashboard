const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

hbs.registerPartials("./views/partials");

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("./public"));



app.get('/', (req, res) => {
	res.render('index.hbs', {
		morris: true
	});
});

app.get('/flot', (req, res) => {
	res.render('flot.hbs', {
		flot: true
	});
});

app.get('/morris', (req, res) => {
	res.render('morris.hbs', {
		morris: true
	});
});

app.get('/tables', (req, res) => {
	res.render('tables.hbs', {
		tables: true
	});
});

app.get('/forms', (req, res) => {
	res.render('forms.hbs', {
		morris: true
	});
});

app.get('/panels-wells', (req, res) => {
	res.render('forms.hbs', {
		morris: true
	});
});

app.get('/buttons', (req, res) => {
	res.render('buttons.hbs', {
		morris: true
	});
});

app.get('/notifications', (req, res) => {
	res.render('notifications.hbs', {
		morris: true
	});
});

app.get('/typography', (req, res) => {
	res.render('typography.hbs', {
		morris: true
	});
});

app.get('/icons', (req, res) => {
	res.render('icons.hbs', {
		morris: true
	});
});

app.get('/grid', (req, res) => {
	res.render('grid.hbs', {
		morris: true
	});
});

app.get('/blank', (req, res) => {
	res.render('blank.hbs', {
		morris: true
	});
});

app.get('/login', (req, res) => {
	res.render('login.hbs', {
		morris: true
	});
});

app.listen(1337, () => {
	console.log('serving on port 1337');
});