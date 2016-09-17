function btnClick()
{
	var Item = document.getElementById("txtField").value;
    document.getElementById("txtField").value="";
	
	var checkBox = ('<input id="'+ Item +'" type="checkbox" onClick="removeItem(this.id)">');
	var todoTask = ('<span id="'+ Item +'">'+ Item +' </span>');
	var todoDiv = ('<div id="'+ Item +'"> '+ todoTask + checkBox +'</div>');
	
    document.getElementById('ListSection').innerHTML = ListSection.innerHTML + "<center>" + todoDiv + "</center></br>";
};

function removeItem(itemId) 
{
	console.log(itemId);
	var item = document.getElementById(itemId);
	item.remove();
};
