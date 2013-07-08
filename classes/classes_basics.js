function Programmer(options){ //function-constructor
	this.languages = ['python', 'js'];  //this points to the objects context 
	this.yearsXP = 1;
	this.learnLanguage = function(name){ // defining method by passing function as a property
		if (typeof name === 'string'){
			this.languages.push(name);
		}
	}
}

var stewie = new Programmer(); // creating instance of a Programmer class
stewie.learnLanguage('ruby');
console.log(stewie.languages); 

var hamid = new Programmer(); 
hamid.learnLanguage('c#'); 
console.log(hamid.languages);