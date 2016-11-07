window.onload=function()
{
	var oUI=document.getElementById("lunbo-imgs");
	var timer=null;
	function play()
	{
		var preleft=parseInt(getComputedStyle(oUI).left);
		if(preleft<-3650)
		{
			preleft=0;
		}
		oUI.style.left=preleft-100+"px";
	
	timer=setTimeout(play,100);
	}
	
	
	play();
	
	
	
}
