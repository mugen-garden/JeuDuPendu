const Express = require('express');
const Config = require('./config/config.js');

const app = Express();

app.set('view engine', 'ejs');

app.use(Express.static('public'));

app.get('**', (req, res) => {
	res.render('home', { config: Config });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running... ' + PORT));
