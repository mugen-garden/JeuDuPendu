class Helper {
	static getRandom(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	static assertLetterValid(letter) {
		if (!(/^[a-z]+$/i.test(letter) && letter.length === 1)) throw new Error('LetterNotValid');
	}

	static getLetterStateFromSpreadedWordByLetter(word, letter) {
		return word.find((letterState) => letterState.letter === letter && !letterState.isFound);
	}

	/**
	 *
	 * @param {array} spreadedWord
	 * @returns {string} HTML as string
	 */
	static getWordWithUnderscores(spreadedWord) {
		let wordAsUnderscore = [];
		for (let letterState of spreadedWord) wordAsUnderscore.push(letterState[1] ? letterState[0] : '_');
		return wordAsUnderscore;
	}

	static spreadWordToFind(word) {
		const letters = word.split('');

		let spreadedWord = [];

		for (let letter of letters) {
			spreadedWord.push([letter, false]);
		}

		return spreadedWord;
	}

	static isWordToFindComplete(word) {
		return word.every((letterData) => letterData[1]);
	}
}

export default Helper;
