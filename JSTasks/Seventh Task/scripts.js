function createForm(){
	


    var newForm = document.createElement('form');
	document.body.appendChild(newForm);
	newForm.style.marginBottom = "10px";
	newForm.setAttribute("action","http://jsonplaceholder.typicode.com/posts");
	newForm.setAttribute("method","get");


	var authorInput = document.createElement('input');
	newForm.appendChild(authorInput);
	newForm.firstChild.focus();
	authorInput.setAttribute("type","text");
	authorInput.setAttribute("required","required");
	authorInput.setAttribute("name","authorInput");
	authorInput.style.marginBottom = "10px";
	authorInput.style.display = "block";

	var textInput = document.createElement('input');
	newForm.appendChild(textInput);
	textInput.setAttribute("type","textarea");
	textInput.setAttribute("required","required");
	textInput.setAttribute("name","textInput");
	textInput.style.marginBottom = "10px";
	textInput.style.display = "block";

    var submitButton = document.createElement('input');
    submitButton.style.display = "block";
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Send");
	newForm.appendChild(submitButton);


	newForm.onsubmit = function(){

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