window.onload = function () {
	//轮播
	var oUl = document.getElementById("lunbo-imgs");
	/*在js中不能直接获取通过css文件设置的css属性值*/
//	alert(parseInt(getComputedStyle(oUl).left));
	var timer = null;
	function move () {
		var preLeft = parseInt(getComputedStyle(oUl).left);
		if(preLeft<=-3650){
			preLeft=0;
		}
		oUl.style.left = preLeft-10+"px";
		
		timer = setTimeout(move,100);
	}
	
	move();
	
	//当用户的鼠标悬浮到楼层导航的条目，对应的内容div要显示，其他的要隐藏，通过actived这个类来控制
	var aLi = document.querySelectorAll("#floor-6 .nav li:not([class=sperator])");//找出所有的li
	var iLen = aLi.length;
	for(var i=0;i<iLen;i++){
		aLi[i].onmouseover=function () {
			//这个li要加actived,其他的li要删除actived
			var aProductsinfo = document.querySelectorAll("#floor-6 .content .col2>div");
			//要将对应内容div显示出来
			var index = this.dataset.index;
			for(var a=0;a<iLen;a++){
				//删除以前的
				if(aLi[a].classList.contains("actived")){
					aLi[a].classList.remove("actived");//删除li的actived
					
					var tabIndex = aLi[a].dataset.index;
					aProductsinfo[tabIndex].classList.remove("actived");//删除div的actived
				}
			}
			this.classList.add("actived");//添加li的actived
			aProductsinfo[index].classList.add("actived")//添加div的actived
			
			
			
		}
	}
	
}