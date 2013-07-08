function countToNumber(first, last){ //function declaration
	
	var countOnce = function (options){ //function expression <- nested function
		return options.interim + options.number + options.divider; 
	}

	var result = '';
	if (arguments.length === 1) last = 10; //variadic function use
	while (typeof first === 'number' && typeof last === 'number' && first <= last){
			var params = {
				number: first,
				divider: '-',
				interim: result 
			};
		result = countOnce(params); //passing hash as an argument
		first++;
	}
	return result;
}
console.log(countToNumber(1));