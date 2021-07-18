import Words from '/scripts/data/Words.js';
import Helper from '/scripts/libs/Helper.js';

class Hangman {
	isRunning = false;
	wordToFind = null;
	word = null;
	state = 1;
	wordWithUnderscores = null;

	reset() {
		this.state = 1;
		this.start();
	}
	isGameFinished() {
		return this.isRunning;
	}
	constructor() {}
	getState() {
		return this.state;
	}
	setState() {
		this.state++;
		if (this.isDead()) this.stop();
	}

	getWordToFind() {
		return this.wordToFind;
	}
	stop() {
		window.dispatchEvent(
			new CustomEvent('EndOfGame', {
				detail: { isWordComplete: Helper.isWordToFindComplete(this.word), wordToFind: this.wordToFind },
			})
		);
		this.isRunning = false;
	}

	/**
	 * @returns {string}
	 */
	getWordWithUnderscoresAsHTMLString() {
		const list = document.createElement('div');
		for (const char of this.wordWithUnderscores) {
			const char_element = document.createElement('span');
			char_element.textContent = char;
			list.append(char_element);
		}
		return list.innerHTML;
	}
	start() {
		this.isRunning = true;
		this.wordToFind = Helper.getRandom(Words);
		this.word = Helper.spreadWordToFind(this.wordToFind);
		this.wordWithUnderscores = Helper.getWordWithUnderscores(this.word);
	}

	isDead() {
		if (this.state === 8) this.stop();
	}

	tryLetter(triedLetter) {
		if (this.isRunning) {
			try {
				let isLetterInside = false;
				Helper.assertLetterValid(triedLetter);

				for (let i in this.word) {
					const [letter, isFound] = this.word[i];

					if (isFound === false && letter === triedLetter) {
						this.word[i][1] = true;
						isLetterInside = true;
						if (Helper.isWordToFindComplete(this.word)) {
							this.stop();
						}
						this.wordWithUnderscores = Helper.getWordWithUnderscores(this.word);
						return;
					}
				}

				if (!isLetterInside) this.setState();
			} catch (error) {
				switch (error.message) {
					case 'LetterNotValid': {
						console.error('Lettre non valide.');
						break;
					}
					case 'EndOfGame': {
						console.error("C'est la fin du jeu !");
						break;
					}
					default: {
						console.error('Une erreur est survenue.');
						break;
					}
				}
			}
		}
	}
}

export default Hangman;
