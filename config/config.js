const Fs = require('fs');
class Config {
	config;
	fs;
	constructor(fs) {
		this.fs = fs;
		this.config = JSON.parse(fs.readFileSync('./config/config.json'));
	}
}

module.exports = new Config(Fs).config;
