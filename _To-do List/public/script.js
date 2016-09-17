function btnSubmit()
{
    var input = document.getElementById('input').value;
    document.getElementById('input').value = '';
	
	var check = ('<input type="checkbox" >');
    
    document.getElementById('container').innerHTML = container.innerHTML + input + check + "</br>";

}

