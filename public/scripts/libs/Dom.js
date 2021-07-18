class Dom {
	registry = {
		start: document.querySelector('#start'),
		word: document.querySelector('#wordToFind'),
		form: document.querySelector('#formLetter'),
		state: document.querySelector('#state'),
		results: document.querySelector('#results'),
		reset: document.querySelector('#reset'),
	};

	isGameRunOnce = false;

	runGame(state, word) {
		this.isGameRunOnce = true;
		this.hideStart();
		this.showForm();
		this.setWord(word);
		this.setState(state);
		this.registry.reset.hidden = false;
	}
	get(element) {
		return this.registry[element] || null;
	}

	getStart() {
		return this.registry.start;
	}

	getWord() {
		return this.registry.word;
	}

	getForm() {
		return this.registry.form;
	}

	getReset() {
		return this.registry.reset;
	}
	getState() {
		return this.registry.state;
	}

	setWord(word) {
		this.registry.word.innerHTML = word;
	}

	showForm() {
		this.registry.form.hidden = false;
	}

	hideStart() {
		this.registry.start.hidden = true;
	}

	setState(state) {
		this.registry.state.textContent = state;
	}

	cleanFields() {
		for (const field of this.registry.form.getElementsByTagName('input'))
			if (field.type === 'text') field.value = '';
	}

	endGame(isWin, wordToFind) {
		const message = document.createElement('p');
		message.textContent = isWin ? 'Le jeu est réussi !' : 'Le jeu est perdu :(';
		message.textContent += '\n Le mot a trouvé était donc ' + wordToFind;
		this.registry.results.append(message);
	}

	reset(state, word) {
		this.setState(state);
		this.setWord(word);
	}
}

export default new Dom();
