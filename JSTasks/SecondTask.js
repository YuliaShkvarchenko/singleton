function findRoots(a,b,c){
var start=new Date().getTime();
var n=0;
var d=(Math.pow(b,2))-4*a*c;
  if (d>=0){
      x1=((-b+(Math.sqrt(d)))/2*a).toFixed(4);
        x2=((-b-(Math.sqrt(d)))/2*a).toFixed(4);
    var rootsMessage="x1 = "+x1+";";
    n=1;
    if(x1!=x2){
          n=2;
      rootsMessage+=" x2 = "+x2+";";
    }
  }
var t=new Date().getTime()-start;
return "Для квадратного уравнения ("+a+")x2+("+b+")x+("+c+")=0 количество найденых корней: "+n+". "+rootsMessage+" Время выполнения функции: "+t+" милисекунд.";
}; 
var result=findRoots(4,16,8);

console.log(result);