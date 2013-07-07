function parent(){
	var width = 5;
	var keyword = 'ages';
	console.log(width);
	console.log(keyword);
	console.log(age);
	child();
	function child(){ // separate scope
		var width = 20,
			age = 5;
		console.log(width);
		console.log(keyword);
		console.log(age);
	}
	console.log(age);
	console.log(width);
}
