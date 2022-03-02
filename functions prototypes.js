console.log("IF - ELSE");
// This is a conditional statement "IF ELSE"
    var letter = "B";
    if (letter== ""){
        console.log("empty string")
    } else if (letter== "B"){
        console.log("this is B")
    } else {
        console.log("not b or empty")
    }

 
console.log("SWITCH loop");
// this is a "SWITCH" statement
    var bot = "johny";
        switch (bot){
        case 'johny':
        case 'done':
            console.log("false");
            break;
        case 'jad':
        case 'jou':
            console.log("true");
            break;
        default:
            console.log("all wrong");
    }


console.log("For loop")
// This is a "FOR" loop
    var i =0;
    var b =0;
    for (i=0; i<5; i++){
        console.log(b)
        b++;
    }


console.log("While loop");
// This is a "WHILE" loop
    var w=2;
    while (w<5){
        w++;
        console.log(w)
    }

console.log("Function add()");
// This is a "Function"
    function add(n,m){
        return (n+m);
    }
// adds numbers or concatenate strings
console.log(add("jad", " amine"));
console.log(add(1,5));

var x = add(1.3, 1.3);
console.log(x)

// Car function
console.log("Car function");

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getName = function() {
        return this.make + ' ' + this.model + ' ' + this.year;
    }
}

var c = new Car("Meridian", "saber", "2012");
//alert(c.getName());
//alert(c.make);
//alert(c.year);
Car.prototype.new = 'jad';
//alert(c.new); 
var honda = new Car();
//alert(honda.new);
