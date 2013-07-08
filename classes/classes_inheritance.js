function Man(){
	this.inheritedProperty = 5;
}

Man.prototype.setName = function(name) {
	if (typeof name === 'string'){
		this.name = name;
	}
};

Man.prototype.introduce = function() {
	console.log("Hi, my name is " + this.name);
};

var kelly = new Man();
kelly.setName('Kelly');
kelly.introduce();

function Programmer(){
	this.selfProperty = 5;
}

Programmer.prototype = new Man();

var joe = new Programmer();
joe.setName('Joe');
joe.introduce();

// Programmer
// 	name: "Joe"
// 	selfProperty: 5
// 	__proto__: Man
// 		inheritedProperty: 5
// 		__proto__: Man
// 			constructor: function Man(){
// 			introduce: function () {
// 			setName: function (name) {
// 			__proto__: Object
// 				__defineGetter__: function __defineGetter__() { [native code] }
// 				__defineSetter__: function __defineSetter__() { [native code] }
// 				....