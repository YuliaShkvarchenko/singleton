function Library() {
  var wholeLib = [];
  this.add = function(name) {
    wholeLib.push(name.toString());
    wholeLib.sort();
    console.log( wholeLib);
  };
  this.addMethod = 
  
}

var myLib = new Library();
myLib.add("Ice and Fire");
var myLib1 = new Library();
myLib.add("Stones");
var myLib2 = new Library();
myLib.add(1);