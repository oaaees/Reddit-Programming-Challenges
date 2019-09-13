function warmup1 (arr){
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == 0) {
			arr.splice(i, 1);
			i = i -1;
		}
	}
	return arr;
}

function warmup2 (arr){
	return arr.sort(function(a,b){return b-a;});
}

function warmup3 (num, arr) {
	if (num > arr.length) {
		return true;
	} else {
		return false;
	}
}

function warmup4 (num, arr) {
	for (let i=0;i<num;i++){
		arr[i] = arr[i] - 1;
	}
	return arr;
}

function hh(arr){
	// Remove all 0's from the sequence
	arr = warmup1(arr);

	// If the sequence is now empty (no elements left), stop and return true.
	if (arr.length == 0) {
		return true;
	} else {
		// Sort the sequence in descending order
		arr = warmup2(arr);
		// Remove the first answer (which is also the largest answer, or tied for the largest) 
		// from the sequence and call it N.
		var N = arr[0];
		arr.splice(0,1);
		//If N is greater than the length of this new sequence, stop and return false.
		if (warmup3(N, arr)){
			return false
		} else {
			//Subtract 1 from each of the first N elements of the new sequence.
			arr = warmup4(N, arr);
			return hh(arr);
		}
	}
}

var test = hh([]);
console.log(test);