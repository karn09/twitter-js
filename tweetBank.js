var _ = require('lodash');

var data = [];

function add(name, text, id) {
	name = name.split(' ');
	var firstName = name[0];
	var lastName = name[1];
	data.push({
		name: firstName + ' ' + lastName,
		firstName: firstName,
		text: text,
		id: id
	});
}

function list() {
	// return data
	return _.cloneDeep(data);
}

function find(properties) {
	return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
	add: add,
	list: list,
	find: find
};

var randArrayEl = function(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
	var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
	var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
	return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
	var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
	return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


for (var i = 0; i < 10; i++) {
	module.exports.add(getFakeName(), getFakeTweet(), i);
}


// module.exports.add('John Nieves', "Woohoo")
// module.exports.add('Who this', "what")
// console.log(data);
// console.log(module.exports.find({'id':1}));