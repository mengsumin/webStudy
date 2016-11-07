window.onload=function()
{
	var oLi=document.querySelectorAll(".nav li");
	var oLiLength=oLi.length;    
	for(var temp=0;temp<oLiLength;temp++)
	{
		oLi[temp].onmouseover=function()
		{
			var img=document.querySelectorAll("#view div");
			var index=this.dataset.index;
			for(var del=0;del<oLiLength;del++)
			{
				if(oLi[del].classList.contains("actived"))
				{
					oLi[del].classList.remove("actived");
					
					var tabindex=oLi[del].dataset.index;
					img[tabindex].classList.remove("actived");
				
				}
			}
			this.classList.add("actived");
			img[index].classList.add("actived");
			
		}
	}
}
