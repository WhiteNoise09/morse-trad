const morseCode = {
				A: '.-',
				B: '-...',
				C: '-.-.',
				D: '-..',
				E: '.',
				F: '..-.',
				G: '--.',
				H: '....',
				I: '..',
				J: '.---',
				K: '-.-',
				L: '.-..',
				M: '--',
				N: '-.',
				O: '---',
				P: '.--.',
				Q: '--.-',
				R: '.-.',
				S: '...',
				T: '-',
				U: '..-',
				V: '...-',
				W: '.--',
				X: '-..-',
				Y: '-.--',
				Z: '--..',
				' ': '   '
};

const textArea = document.querySelector('#text');
const morseArea = document.querySelector('#morse');

textArea.addEventListener('input', () => {
	morseArea.value = convertToMorse(textArea.value);
});

morseArea.addEventListener('click', () => {
  navigator.clipboard.writeText(morseArea.textContent).then(console.log);
});

function convertToMorse(string) {
  return Array.from(string)
							.map(convertCharToMorse)
							.join(' ');
}				

function convertCharToMorse(char) {
	return morseCode[char.toUpperCase()];
}
