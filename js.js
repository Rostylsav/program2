var id=0, result=0;
function init()
{
	createCheckbox();
	createResultCell();
}


function isCheck(e)
{
	if(e.target)
	{
		result+=document.getElementById('checkbox'+id).value;
	}
	else
	{
		result-=document.getElementById('checkbox'+id).value;
	}
}

function createCheckbox()
{
	var cell = document.getElementById('cellCheck');
	
	var newCheckbox = document.createElement('input');
		newCheckbox.type='checkbox';
		newCheckbox.id='checkbox'+id;
	id++;
	
	cell.appendChild(newCheckbox);
	
	
	document.getElementById('checkbox'+id).addEventListener("click", isCheck, false);
	
}


function createResultCell()
{
	var cell = document.getElementById('cellResult');
	
	var newDiv = document.createElement('div');
		
		newDiv.innerHTML=result;

	cell.appendChild(newDiv);
}