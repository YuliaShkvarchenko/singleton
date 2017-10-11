function createForm(){

    var newForm = document.createElement('form');
	document.body.appendChild(newForm);
	newForm.style.marginBottom = "10px";


	var inputUrl = document.createElement('input');
	newForm.appendChild(inputUrl);
	newForm.firstChild.focus();
	inputUrl.setAttribute("type","url");
	inputUrl.setAttribute("required","required");
	inputUrl.style.marginBottom = "10px";

	var separator = document.createElement('br');
	newForm.appendChild(separator);

    var submitButton = document.createElement('input');
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Check");
	newForm.appendChild(submitButton);

	newForm.onsubmit = function(){

		if (inputUrl.value == "https://www.google.com.ua")
            {
                newForm = document.createElement('iframe');
				document.body.appendChild(newForm);
                return false;
            }
            else if (inputUrl.value == '')
            {
                alert("Url adress is empty");
                return false;
            }
	};

};