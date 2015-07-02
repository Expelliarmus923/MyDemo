window.onload=function(){
	showSubList();
}
function findClass(id,iClassName,iClassName2){
	var id=document.getElementById(id);
	var all=id.getElementsByTagName("*");
	var result=[];
	for (var i in all){
		var str=all[i].className;
		for(var j=1;j<arguments.length;j++){
		if(str==arguments[j]){
			result.push(all[i]);
		}
		}
	}
	return result;
}
function showSubList(){
	var li=findClass("list","nav");
	for(var i in li){
		li[i].index=i;
		li[i].onmouseover=function(){
			var show=findClass("list","sublist","sublist active");
			if(this.index>=show.length){
				return false;
			}
			show[this.index].className+=" active";
		}
		document.onmouseout=function(){
			var show=findClass("list","sublist","sublist active");
			for(var j in show){
				show[j].className="sublist";
			}
		}
	}

}