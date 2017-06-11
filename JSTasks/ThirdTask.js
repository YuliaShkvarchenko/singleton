var martixMultiplication = function(a,b){
	if(a.length!=b[0].length){
		console.log("Error. Operation is impossible");
		return;
    }
    var result = [];
    for(let aCurrentRow = 0; aCurrentRow < a.length; aCurrentRow++){
        var tempArray = [];
        for(let bCurrentColumn = 0; bCurrentColumn<b[aCurrentRow].length; bCurrentColumn++){
            var tempElement = 0;
            for(let aCurrentRowElement = 0; aCurrentRowElement<a[aCurrentRow].length; aCurrentRowElement++){
                tempElement+=a[aCurrentRow][aCurrentRowElement]*b[aCurrentRowElement][bCurrentColumn];
            }
            tempArray.push(tempElement);
        }
        result.push(tempArray);
    }
	return result;
};
var showMatrix = function(a){
	var maskLength = 0;
	for(let i = 0; i < a.length; i++){
		var currentMaskLength = Math.max.apply(null, a[i].join(' ').split(' ').map(w => w.length)) + 1;
		if(currentMaskLength>maskLength){
			maskLength = currentMaskLength;
		}
    }
	for(let i = 0; i < a.length; i++){ 		
 		var subArrayToShow = "";
		var currentElementString = "";
 		for (let b = 0; b < a[i].length; b++){
			currentElementString = a[i][b].toString();
  			subArrayToShow += currentElementString + " ".repeat((maskLength - currentElementString.length));
 		}
 	console.log(subArrayToShow);
	}
};
var result = martixMultiplication(a=[[1,2],[3,4]],b=[[5,6],[7,8]]);
showMatrix(result);