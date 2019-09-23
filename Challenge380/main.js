var morse = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'.split(' ');

function smorse (word) {
	var word = word.toUpperCase();
	var converted = [];

	for(let i=0; i<word.length; i++){
		converted.push(morse[word.charCodeAt(i) - 65]); 
	}

	return converted.join('');
}

let result = smorse('Hello');
console.log(result);