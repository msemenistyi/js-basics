Programmer = function (options){
	var languages = ['python', 'js']; 
	this.yearsXP = 1;

	this.projects = [];
	this.projects['Academy'] = {
		monthsEstimated: 2,
		codeLinesEstimated: 10000
	};
}

Programmer.prototype.justCode = function(projectName) { // public method
	if (typeof projectName !== 'undefined' && typeof this.projects[projectName] !== 'undefined')
	var percents = 30;
	var linesScaffolded = scaffold.call(this, projectName, percents); // passing parameters as usual
	var linesCoded = codeWithHands.apply(this, [projectName, linesScaffolded]); // passing parameters within array
	console.log('scaffolded ' + linesScaffolded, ' coded ' + linesCoded);
};

function scaffold(projectName, percents){ // private method
	if (this.projects[projectName].codeLinesEstimated > 0 && percents > 0 && percents < 100){
		return Math.ceil(this.projects[projectName].codeLinesEstimated / 100) * percents;
	}
}

function codeWithHands(projectName, linesScaffolded){ // private method
	return this.projects[projectName].codeLinesEstimated - linesScaffolded;
}

var lee = new app.Programmer();
lee.justCode('Academy');