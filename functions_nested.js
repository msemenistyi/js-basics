function countToNumber(first, last){
	
	var countOnce = function (options){
		return options.interim + options.number + options.divider; 
	}

	var result = '';
	if (arguments.length === 1) last = 10;
	while (typeof first === 'number' && typeof last === 'number' && first <= last){
			var params = {
				number: first,
				divider: '-',
				interim: result 
			};
		result = countOnce(params);
		first++;
	}
	return result;
}
console.log(countToNumber(1));