Validating data with a schema
=========
Transform can be used to validate JSON data, for instance before inserting into a database.
    
Example..
````
var tr = require('./tr/transform.js');

// OK
var error1 = tr.validator([{name:"chris", age:20}], {
  name: function(s){ return s },
  age: function(s){ return s }
});

// Failed, age < 50
var error2 = tr.validator([{name:"chris", age:20}], {
  name: function(s){ return s },
  age: function(s){ return s > 50 }
});

// Failed, invalid input
var error3 = tr.validator([{name:"chris", age:20, a:1}], {
  name: function(s){ return s },
  age: function(s){ return s }
});

console.log(error1, error2, error3);  

````
