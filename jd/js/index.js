/*当dom元素加载完毕后执行*/
window.onload = function () {
	/*当用户点击areas中的li的时候，将li中的文本设置到current-area的span中*/
	var aLi = document.querySelector(".areas").getElementsByTagName("li");//查询.areas中的li,这是一个数组
//	var aLi = document.querySelector(".areas").querySelectorAll("li");
	var len = aLi.length;
	for(var i=0;i<len;i++){
		//事件绑定
		aLi[i].onclick = function () {
			var carea = document.getElementById("c-area");
//			var carea = document.querySelector(".current-area").getElementsByTagName("span")[0];
			carea.innerHTML = this.innerHTML;
		}
	}
	
	
}