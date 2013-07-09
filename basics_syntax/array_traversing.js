var ar = [-2, 4, 7]; 

for (var i = 0; i < ar.length; i++){ // iterating through array
	console.log(ar[i] + 2);
} 

ar.sort(function(a, b){ 
	if (a > b){
		return -1; // a should be earlier than b
	} else if (a === 0) {
		return 0; // do nothing
	} else {
		return 1; // b should be earlier than a
	}
});

ar.sort(function(a, b){
	return b - a; // sorts desc
});
