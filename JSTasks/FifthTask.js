function Library() {
  var wholeLib = [];
  /*
	  var wholeLib = [];
  
  this.add = function(name) {
    wholeLib.push(name.toString());
    wholeLib.sort();
    console.log( wholeLib);
  };
  this.getAllBooks = function(){
    return wholeLib;
  };
  this.search = function(bookName){
    var notPrivetLib = this.getAllBooks();
    for ( var i = 0; i < notPrivetLib.length; i++){
    if (notPrivetLib[i] === bookName) {
    return notPrivetLib[i] ;
    }
    }
  }
}


  
  */
  this.add = function(name) {
    wholeLib.push(name.toString());
    wholeLib.sort();
    console.log( wholeLib);
  };
  this.addMethod = function( methodName, code) {
    Object.defineProperty( this, this.methodName, {
      value: this.code
    })
  };
  this.implement = function (this.methodName){
    return this.methodName(bookName);
  }
  
}

var myLib = new Library();
myLib.add("Ice and Fire");
var myLib1 = new Library();
myLib.add("Stones");
var myLib2 = new Library();
myLib.add(1);

myLib.addMethod(‘search’, function(bookName){
  for ( var i = 0; i < wholeLib.length; i++){
    if (wholeLib.[i] === bookName) 
    return i;
  }
  return -1;

});