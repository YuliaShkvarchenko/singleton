<!DOCTYPE>
<html>
<head>
  <title>Array</title>
</head>
  <body>
    <ul id="myList">
    </ul>
    <script>
    var toDoList=["Clean my room","Buy some fruits","Do my homework","Check the counter"];
    var list=document.getElementById("myList");
    toDoList.forEach(function(item){
      var newLi = document.createElement('li');
      newLi.innerHTML=item;
      list.appendChild(newLi);
      });
    </script>
  </body>
</html>