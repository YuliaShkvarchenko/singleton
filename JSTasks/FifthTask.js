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
 this.addMethod = function(methodnName, func) {
    this.name = func;
  };
  
}
var myLib = new Library();
myLib.add("Ice and Fire");
var myLib1 = new Library();
myLib.add("Stones");
var myLib2 = new Library();
myLib.add(1);
myLib.addMethod("search", function(book_name) {
    var notPrivetLib = this.getAllBooks();
    for ( var i = 0; i < notPrivetLib.length; i++){
      if (notPrivetLib[i] === bookName){
        console.log ("We have this book!");
      }
      else{
        console.log("We can't help you.");
      }
    }
});
