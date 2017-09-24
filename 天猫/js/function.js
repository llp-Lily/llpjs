/*
* @Author: Administrator
* @Date:   2017-08-14 17:29:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 14:40:34
*/

'use strict';
function $(select,range=document){
	if(typeof select=='string'){
		let selector=select.trim();//去空
	    let firstChar=selector.charAt(0);//标签首字符
	    if(firstChar=='#'){
		   return document.getElementById(selector.substring(1));
	    }else if(firstChar=='.'){
		   return range.getElementsByClassName(selector.substring(1));
	    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
		   return range.getElementsByTagName(selector);
	    }  
	}else if(typeof select=='function'){
		window.onload=function(){
			select();
		}
	}
}
