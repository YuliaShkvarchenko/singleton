var martixMultiplication = function(a,b){
    if(a.length !== b[0].length){
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
    var comleteElement = function(element, maskLength){
        var currentElementString = element.toString();
        return currentElementString + " ".repeat((maskLength - currentElementString.length));
    };
    var calculateMaskLength = function(array){
        var masks = [];
        array.forEach(function(row){
            masks.push(Math.max.apply(null, row.map(w => w.toString().length)) + 1);
        });
        return Math.max.apply(null, masks);
    };
    var result = "";
    var maskLength = calculateMaskLength(a);
    a.forEach(function(row){
        row.forEach(element => result += comleteElement(element, maskLength));
        result += "\n";
    });
    console.log(result);
};
var result = martixMultiplication(a=[[1,2],[3,4]],b=[[5,6],[7,8]]);
showMatrix(result);