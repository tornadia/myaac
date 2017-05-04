var list = new Array();
list[0] = 'news';
list[1] = 'account';
list[2] = 'community';
list[3] = 'library';
list[4] = 'shops';

function initMenu()
{
	var length = list.length;
	for(i = 0; i < length; i++)
	{
		if(list[i] == category)
		{
			document.getElementById(list[i]).className = 'tab-active';
			document.getElementById(list[i] + "-submenu").style.display = 'block';
		}
		else
		{
			document.getElementById(list[i]).className = 'tab';
			document.getElementById(list[i] + "-submenu").style.display = 'none';
		}
	}
}

function menuSwitch(cat)
{
	category = cat;
	initMenu();
}
