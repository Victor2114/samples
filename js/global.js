/**
 * ͨ��ѡ�����ַ�����ȡԪ�ػ�Ԫ�����Ի��Ԫ�����Ը�ֵ
 * @param  string selector e.g. '#id','.class'
 * @param  string attrN    ��������'innerHTML','id'
 * @param  string/boolean attrV  ����ֵ
 * @return null/object/string/undefined  ����ֵ
 */
function $(selector,attrN,attrV){
	//û���κβ�����ֱ�ӷ���null
	if(selector==undefined){
		return null;
	//������һ������������δȡ��Ԫ�أ�����null
	}else if(!document.querySelector(selector)){
		return null;
	}else{
		//ֻ��һ������������ȡ��Ԫ�أ�����Ԫ�ض���
		if(attrN==undefined){
			return document.querySelector(selector);
		//����������������Ԫ�ض����attrN����
		}else if(attrV==undefined){
			return document.querySelector(selector)[attrN];
		//��������������Ԫ�ص�attrN���Ը�ֵΪattrV,�����ظ�ֵ
		}else{
			return document.querySelector(selector)[attrN] = attrV;
		}
	}
}

//��ȡ���Ԫ��
function _$(selector){
	//û���κβ�����ֱ�ӷ���null
	if(selector==undefined){
		return null;
	//������һ������������δȡ��Ԫ�أ�����null
	}else if(!document.querySelector(selector)){
		return null;
	}else{
		return document.querySelectorAll(selector);
	}
}

function getStyle(element,attr) {
 if(typeof window.getComputedStyle!='undefined'){ 
//���֧��W3C��ʹ��getComputedStyle����ȡ��ʽ 
return parseInt(window.getComputedStyle(element,null)[attr]);            
}else if(element.currentStyle){ 
return parseInt(element.currentStyle[attr]);       
} 
}
