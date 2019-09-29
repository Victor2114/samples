/**
 * 通过选择器字符串获取元素或元素属性或给元素属性赋值
 * @param  string selector e.g. '#id','.class'
 * @param  string attrN    属性名如'innerHTML','id'
 * @param  string/boolean attrV  属性值
 * @return null/object/string/undefined  返回值
 */
function $(selector,attrN,attrV){
	//没有任何参数，直接返回null
	if(selector==undefined){
		return null;
	//最少有一个参数，但是未取到元素，返回null
	}else if(!document.querySelector(selector)){
		return null;
	}else{
		//只有一个参数，且能取到元素，返回元素对象
		if(attrN==undefined){
			return document.querySelector(selector);
		//有两个参数，返回元素对象的attrN属性
		}else if(attrV==undefined){
			return document.querySelector(selector)[attrN];
		//有三个参数，将元素的attrN属性赋值为attrV,并返回该值
		}else{
			return document.querySelector(selector)[attrN] = attrV;
		}
	}
}

//获取多个元素
function _$(selector){
	//没有任何参数，直接返回null
	if(selector==undefined){
		return null;
	//最少有一个参数，但是未取到元素，返回null
	}else if(!document.querySelector(selector)){
		return null;
	}else{
		return document.querySelectorAll(selector);
	}
}

function getStyle(element,attr) {
 if(typeof window.getComputedStyle!='undefined'){ 
//如果支持W3C，使用getComputedStyle来获取样式 
return parseInt(window.getComputedStyle(element,null)[attr]);            
}else if(element.currentStyle){ 
return parseInt(element.currentStyle[attr]);       
} 
}
