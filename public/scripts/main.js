import Hangman from '/scripts/libs/Hangman.js';
import Dom from '/scripts/libs/Dom.js';

const game = new Hangman();

Dom.getStart().addEventListener('click', function () {
	game.start();

	Dom.runGame(game.getState(), game.getWordWithUnderscoresAsHTMLString());

	Dom.getForm().addEventListener('submit', function (e) {
		e.preventDefault();

		game.tryLetter(e.target.letter.value);

		Dom.cleanFields();

		Dom.setState(game.getState());

		Dom.setWord(game.getWordWithUnderscoresAsHTMLString());
	});
});

window.addEventListener('EndOfGame', () => {
	Dom.endGame(e.detail.isWordComplete, e.detail.wordToFind);
	if (e.detail.isWordComplete) {
		console.log('%cJeu réussie', 'background-color:green;padding:2em;color:white;font-weight:bold;');
	} else {
		console.log('%cJeu perdu', 'background-color:tomato;padding:2em;color:white;font-weight:bold;');
	}
});

Dom.getReset().addEventListener('click', () => {
	game.reset();
	Dom.reset(game.getState(), game.getWordWithUnderscoresAsHTMLString());
});
