function Programmer(options){
	
	var languages = ['python', 'js']; // private property
	
	this.yearsXP = 1;
	
	this.learnLanguage = function(name){
		if (typeof name === 'string'){
			languages.push(name);
			logNewLanguage(name);
		}
	}

	function logNewLanguage(language){ // private method
		console.log(language);
	}
}

Programmer.prototype.gainXP = function(years){
	if (typeof years === 'number'){
		this.yearsXP += years;
	}
}

var suzy = new Programmer();
suzy.learnLanguage('php'); // logs php
// suzy.logNewLanguage('php'); // TypeError: Object #<Programmer> has no method 'logNewLanguage'