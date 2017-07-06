var minionBuffer = function() {
  var minionHome = [];

  return function() {
  if (arguments.length === 0){
     		minionHome.pop();
     }
		for (var i = 0; i < arguments.length; i++) {
    
    	var parameterType = typeof(arguments[i]);
			switch (parameterType) {
      
        case("object"):
        case("string"):
        	minionHome.unshift(arguments[i]);
        break;
        
        default:
        	console.log("Wrong data type! Try again.");
        }
   
      }
      return minionHome; 	
    } 

    this.clean = function() {
    	minionHome = [];
    }
  };

var myBuffer = minionBuffer();
console.log( myBuffer("Erick") );
console.log( myBuffer("Patrick") );