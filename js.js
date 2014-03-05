var checkboxId=0, result=1500, arrayValueCheckbox=[1500,2900,4500,0,1200,600,0,150,100,0,300];
var arrayPathofImages=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg","image/img5.jpg","image/img6.png"];


function createCheckbox(iterator)
{
	var cell = document.getElementById('cellCheck'+iterator);
	
	var newCheckbox = document.createElement('input');
		newCheckbox.type='checkbox';
		newCheckbox.id='checkbox'+checkboxId;
		if(iterator==0 || iterator==3 || iterator==6 || iterator==9)
		{
			newCheckbox.checked=true;
		}
		else
		{
			newCheckbox.checked=false;
		}
		newCheckbox.value=arrayValueCheckbox[iterator];
		newCheckbox.addEventListener("click", isCheck, false);
	checkboxId++;
	cell.appendChild(newCheckbox);	
}

function isCheck(e)
{
	if(e.target.checked)
	{
		for(var i=0;i<6;i++)
		{
			if(e.target.id=='checkbox'+i)
			{
				showImages(arrayPathofImages[i]);
			}
		}
		
		result=result+parseInt(e.target.value);
		 createResultCell()
	}
	else
	{
		result-=e.target.value;
		 createResultCell()
	}
}

function createResultCell()
{
	document.getElementById('cellResult').innerHTML = '';
	var cell = document.getElementById('cellResult');
	var newDiv = document.createElement('div');
	
	newDiv.appendChild(document.createTextNode(result));
	cell.appendChild(newDiv);
}

function showImages(path)
{
	document.getElementById('cellImages').innerHTML = '';
	var cell = document.getElementById('cellImages');
	var newImage=document.createElement('img');
		newImage.src=path;
		newImage.className="image";
		cell.appendChild(newImage);
}


function init()
{
	for(var i=0;i<11;i++)
	{
		
		createCheckbox(i);
	}
	createResultCell();
	showImages(arrayPathofImages[0]);
}