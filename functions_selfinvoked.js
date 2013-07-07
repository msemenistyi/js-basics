(function (str, callback){
	if (typeof str === 'string'){
		str = str.replace(/pain/g, 'fun');
		callback(str);
	}
})(str, logFirstWord); //immediately-invoked function <- passing function as an argument

var str = 'invoking function is pain';

function logFirstWord(param){
	if (typeof param === 'string'){
		var words = param.split(' ');
		console.log(words[words.length - 1]);
	} else {
		throw new Error('Parameter is not a string'); //calling function as a constructor
	}
}