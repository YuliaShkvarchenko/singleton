function Library() {
  var wholeLib = [];
  this.add = function(name) {
    var stringName = name.toString();
    if(!wholeLib.includes(stringName)) {
      wholeLib.push(name.toString());
      wholeLib.sort();
    } else {
      console.log("This book already exists.");
    }
    console.log( wholeLib);
  };
  this.getAllBooks = function(){
    return wholeLib;
  };
 this.addMethod = function(methodName, func) {
    this[methodName] = func;
  };
  this.implement = function(methodName, arg){
    this[methodName].call(this, arg);
  };
}
var myLib = new Library();
myLib.add("Ice and Fire");
myLib.add("Stones");
myLib.add(1);
myLib.add(1);
myLib.addMethod("search", function(bookName) {
  var publicLib = this.getAllBooks();
  if (publicLib.includes(bookName)){
    console.log("We have this book!");
  } else{
    console.log("Sorry. We can't help you.");
  }
});
myLib.implement("search","Ice and Fire");
