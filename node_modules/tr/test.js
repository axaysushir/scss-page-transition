var transformer = require('./transform.js');

var before = [
	{name: 'Chris', age: 42, home:'IL', height:5 },
	{name: 'Barack', age:50, home:'IL', height:6 },
	{name: 'George', age:65, home:'TX', height:5 },
	{name: 'Bill', age:70, home:'NY', height:6 }
]

var mapping = {
	name: function(s) { return s + '!'},
	age: function(i) { return i > 50 ? 'old' : 'not old' },
	home: ['place', function(s){ return s }],
	height: ['IQ']
}

var after = transformer.transform(before, mapping)
console.log(JSON.stringify(after, null, 4));

// validate using a validator, older than 50 is an invalid record
var validator = {
  name: function(s) { return s },
  age: function(i) { return i < 50 }, // over 50 returns false
  home: function(s) { return s },
  height: function(s) { return s } 
}

var error = transformer.validator(before, validator);
if(error) console.log('failed records', error);
else console.log('validation OK');

// fail when input has keys not in the validator
var bad_validator = {
  name: function(s) { return s },
  age: function(i) { return i < 50 } // over 50 returns false
}
var error = transformer.validator(before, bad_validator);
if(error) console.log('bad input', error);
else console.log('test is not right');