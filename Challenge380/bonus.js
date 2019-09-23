//This file is written to be executed in node.js along the enablemorse.txt and enablearr.txt files

const fs = require('fs');

//arrnormal is an array of words gotten from https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt
//arrmorse is arrnormal but transformed into morse code
var arrnormal = fs.readFileSync("enablearr.txt").toString().split(',');
var arrmorse = fs.readFileSync("enablemorse.txt").toString().split(',');


var morse = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'.split(' ');

function smorse (word) {
	var word = word.toUpperCase();
	var converted = [];

	for(let i=0; i<word.length; i++){
		converted.push(morse[word.charCodeAt(i) - 65]); 
	}

	return converted.join('');
}

//BONUS CHALLENGE #1: 
//The sequence -...-....-.--. is the code for four different words (needing, nervate, niding, tiling). 
//Find the only sequence that's the code for 13 different words.

function challenge1(){

	var  count = {};

	for (let index=0;index<arrmorse.length;index++){
	   	function counting (value, index) {
	   		count[value] = (count[value]||0) + 1;
	   	}
	   	counting(arrmorse[index], index);
	}
		
	var best = 0;
	var repeated = '';

	for (const prop in count) {

		if(count[prop] > best){
			best = count[prop];
			repeated = prop.toString();
		}
	}

	var repeatedArr = [];

	for(let i=0;i<arrmorse.length;i++){

		if(repeated === arrmorse[i]){
			repeatedArr.push(arrnormal[i]);
		}

	}

	console.log(repeated + ' is repeated ' + best + ' times.');
	console.log('the words are: ' + repeatedArr.join(', '));
}

// BONUS CHALLENGE #2:
// Autotomous encodes to .-..--------------..-..., which has 14 dashes in a row. 
// Find the only word that has 15 dashes in a row.

function challenge2(){

	for(let i=0; i<arrmorse.length; i++){
		if(/-{15}/.test(arrmorse[i])){
			console.log(arrmorse[i] + ' is ' + arrnormal[i]);
		}
	} 

}

// BONUS CHALLENGE #3: 
// Call a word perfectly balanced if its code has the same number of dots as dashes. 
// Counterdemonstrations is one of two 21-letter words that's perfectly balanced. Find the other one.

function challenge3(){
	var longWords = [];
	var morse = '';

	for(let i=0; i<arrnormal.length; i++){
		if(arrnormal[i].length == 21) {
			longWords.push(arrnormal[i]);
		}
	}

	for(let i=0; i<longWords.length; i++){
		morse = smorse(longWords[i]);
		var dots = morse.replace(/-/g, '').length;
		var dashes = morse.replace(/\./g, '').length;

		if(dots == dashes){
			console.log('found ' + longWords[i] + ' with ' + dots + ' dots and '+ dashes + ' dashes.')
		}
	}

}

//BONUS #4
// Protectorate is 12 letters long and encodes to .--..-.----.-.-.----.-..--., which is a palindrome (i.e. the string is the same when reversed).
// Find the only 13-letter word that encodes to a palindrome.

function challenge4 () {
	var longWords = [];
	var morse = [];

	for(let i=0; i<arrnormal.length; i++){
		if(arrnormal[i].length == 13) {
			longWords.push(arrnormal[i]);
		}
	}

	for(let i=0; i<longWords.length; i++){
		morse = smorse(longWords[i]).split('');

		if (morse.join('') == morse.reverse().join('')) {
			console.log(longWords[i] + ' is a palindrome in morse ' + morse.join('') );
		}
	}

}

//BONUS #5
//--.---.---.-- is one of five 13-character sequences that does not appear in the encoding of any word. 
//Find the other four.

//Creates a Thirteen character long binary number and turns it into morse code.
function createThirteen(i){
	var bin = i.toString(2).split('');

	if(bin.length < 13) {
		var lack = 13 - bin.length;

		for(let j=0;j<lack;j++){
			bin.unshift('0')
		}

		bin = bin.join('')
		bin = bin.replace(/0/g, '-').replace(/1/g, '.');

		return bin;
	} else if (bin.length == 13) {
		bin = bin.join('')
		bin = bin.replace(/0/g, '-').replace(/1/g, '.');

		return bin;
	} else {
		return NaN;
	}
}

//Searchs for the lack of a match in the array of morse coded words
function search(i) {
	var morse = i.replace(/\./g, '\\.');
	var re = new RegExp(morse,"g");

	for(let i=0; i<arrmorse.length; i++){
		if(re.test(arrmorse[i])){
			return false;
		} 
	}

	return true;
}

function challenge5() {
	var clubOf = [];

	for (let i=0; i<8191; i++){
		//creates a 13-long morse code
		var binary = createThirteen(i);
		//checks if there is a match
		if (search(binary)){
			//if there isn't a match it pushes the morse code to the array
			clubOf.push(binary);
		} 
	}

	console.log('None of these \n' + clubOf.join(' \n') + '\nare found in the dictionary.');

}

challenge1();
//challenge2();
//challenge3();
//challenge4();
//challenge5();
