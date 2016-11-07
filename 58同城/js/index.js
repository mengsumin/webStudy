function viewfirst()
{
	document.getElementById("content-third").style.display="none";
	document.getElementById("content-second").style.display="none";
	 document.getElementById("content-first").style.display="block";
	
	 event.preventDefault();
}

function viewsecond()
{
	document.getElementById("content-third").style.display="none";
	document.getElementById("content-first").style.display="none";
	document.getElementById("content-second").style.display="block";
	event.preventDefault();
	var oLinput=document.querySelectorAll(".shurukuang");
	console.log(oLinput);
   for( var i=0;i<=2;i++)
   {
   		oLinput[i].addEventListener("onfocus",viewmessage());	
   }
   function viewmessage()
   {
   	   if(this.id=="telephone")
   	   {
   	   	document.getElementById("second-message").style.display="none";
   	   	    document.getElementById("user-message").style.display="block";
   	   }
  }
	
}

function viewthird()
{
	document.getElementById("content-second").style.display="none";
	document.getElementById("content-first").style.display="none";
	document.getElementById("content-third").style.display="block";
	event.preventDefault();
	
}
function viewimg()
{
	document.getElementById("erweima").style.display="hidden";
	document.getElementById("temp").style.display="block";
}
function noviewimg()
{
	document.getElementById("temp").style.display="none";
	document.getElementById("erweima").style.display="block";
	
}

