function Library() {
  var wholeLib = [];
    this.add = function(name) {
    wholeLib.push(name.toString());
    wholeLib.sort();
    console.log( wholeLib);
  };
  this.getAllBooks = function(){
    return wholeLib;
  };
 this.addMethod = function(methodName, func) {
    this.methodName = func;
  };
  this.implement = function(methodName, arg){
    this.methodName.call(this, arg);
  };
}
var myLib = new Library();
myLib.add("Ice and Fire");
var myLib1 = new Library();
myLib.add("Stones");
var myLib2 = new Library();
myLib.add(1);
myLib.addMethod("search", function(bookName) {
     var notPrivetLib = this.getAllBooks();
   if (notPrivetLib.indexOf(bookName)>=0){
     console.log("We have this book!");
   }
   else{
     console.log("Sorry. We can't help you.");
   }
});
myLib.implement("search","Ice and Fire");
