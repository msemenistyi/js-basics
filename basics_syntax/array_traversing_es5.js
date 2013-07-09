var ar = [10, 20, -5];

ar.forEach(function(el, idx, array){ 
	console.log(el, idx);
});

ar.filter(function(el){
	if (el > 0) return true;
});

ar.map(function(el){
	return el * 2;
});

ar.reduce(function(a, b){
	return a + b;
});

ar.reduceRight(function(a, b){
	return a + 0.5 * b;
});