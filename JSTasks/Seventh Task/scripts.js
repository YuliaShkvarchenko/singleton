function createForm(){
	


    var newForm = document.createElement('form');
	document.body.appendChild(newForm);
	newForm.style.marginBottom = "10px";
	newForm.setAttribute("action","http://jsonplaceholder.typicode.com/%20-%3E%20Resources");
	newForm.setAttribute("method","POST");
	newForm.setAttribute("enctype","multipart/form-data");


	var authorInput = document.createElement('input');
	newForm.appendChild(authorInput);
	newForm.firstChild.focus();
	authorInput.setAttribute("type","text");
	authorInput.setAttribute("required","required");
	authorInput.setAttribute("name","author");
	authorInput.setAttribute("placeholder","Write your name");
	authorInput.style.marginBottom = "10px";
	authorInput.style.display = "block";

	var textInput = document.createElement('textarea');
	newForm.appendChild(textInput);
	textInput.setAttribute("required","required");
	textInput.setAttribute("name","text");
	textInput.setAttribute("placeholder","Type your text here");
	textInput.setAttribute("cols","21");
	textInput.setAttribute("rows","5");
	textInput.style.marginBottom = "10px";
	textInput.style.display = "block";

    var submitButton = document.createElement('input');
    submitButton.style.display = "block";
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Send");
	newForm.appendChild(submitButton);


	newForm.onsubmit = function(data){
		var request = new XMLHttpRequest();

		request.open("POST", "http://jsonplaceholder.typicode.com/%20-%3E%20Resources", true);

		request.onreadystatechange = function(){
			 if (request.readyState === XMLHttpRequest.DONE) {
   				if (request.status === 200) {
     				var response = JSON.parse(request.responseText);
     				newForm = document.createElement('div');
     				document.body.appendChild(newForm);
     				newForm.insertAdjacentHTML('beforeend', response.computedString);
   			} else {
     			alert('There was a problem with the request.');
   			}
		 }
		};

		request.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
		request.send(JSON.stringify(data));
	};
};



/* 
  При успешном 
 ответе, необходимо заменить форму на блок с именем автора,
  самим текстом и датой. Так же в блоке должны быть кнопки 
  редактирования и удаления этого блока. При загрузке страницы, 
  должны отображаться уже ранее созданные блоки.

Урлы:
http://jsonplaceholder.typicode.com/ -> Resources*/