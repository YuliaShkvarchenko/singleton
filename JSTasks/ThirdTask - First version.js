
var martixMultiplication2 = function(a,b){
        if(a[0].length=b.length){
    var a1=a[0][0],
        a2=a[1][0],
        b1=a[0][1],
        b2=a[1][1],
        c1=b[0][0],
        c2=b[1][0],
        d1=b[0][1],
        d2=b[1][1]
     var c=[];
     c.push([a1*c1+b1*c2, a1*d1+b1*d2]);
     c.push([a2*c1+b2*c2, a2*d1+b2*d2]);
     console.log( a[0][0]+"\t",a[0][1]+"\n",b[1][0]+"\t",b[1][1]);
    }
    else{
    console.log("Error. Operation is impossible");
    };
};
console.log(martixMultiplication2(a=[[1,2],[3,4]],b=[[5,6],[7,8]]));