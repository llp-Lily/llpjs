/*
* @Author: Administrator
* @Date:   2017-08-13 22:31:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 09:04:54
*/

// 'use strict';
window.onload=function(){
  //微信二维码
  let wx=document.getElementsByClassName('wx');
  let erweima=document.getElementsByClassName('erweima');
    wx.onmouseenter=function(){
      erweima.style.display='block';
    }
    wx.onmouseleave=function(){
      erweima.style.display='none';
    }
	//购物车
    let gw=document.getElementsByClassName('gw')[0];
	let listshop=document.getElementsByClassName('list-shop')[0];
	let kong=document.getElementsByClassName('kong')[0];
	 gw.onmouseenter=function(){
    	kong.style.display='block';
    	listshop.style.display='block';

    }
    gw.onmouseleave=function(){
    	kong.style.display='none';
    	listshop.style.display='none';
    }
    //导航
	let downlist=document.getElementsByClassName('downlist');
	let navli=document.getElementsByClassName('navli');		
	//下标
	for(let i=0;i<navli.length;i++){			
		navli[i].onmouseenter=function(){
    downlist[i].style.display='block';
	    }
	    navli[i].onmouseleave=function(){
		downlist[i].style.display='none';
	    }
	}
	//轮播图
	let banul=document.getElementsByClassName('banul')[0];
	let lis=banul.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan')[0];
	let yd=yuan.getElementsByTagName('li');
	let num=0;//当前窗口显示的图片
	//后退、前进
	let back=document.getElementsByClassName('bleft')[0];
	let forward=document.getElementsByClassName('bright')[0];
    //获取banner
    let banner=document.getElementsByClassName('banner')[0];
    //点击按钮轮播图
	for(let i=0;i<yd.length;i++){
       yd[i].onclick=function(){
       	 for(let j=0;j<lis.length;j++){
       	 	lis[j].style.display='none';

       	 }
         lis[i].style.display='block';
         // dian[i].style.background= 'rgba(255, 255, 255, 1)';
       	 yd[num].style.background= '#a10000';
       }
	}
    	//自动轮播图
    let t=setInterval(fn,2000);
   function fn(){
   	num++;  
   	if(num==lis.length){
   		 num=0;
   	}	
   	for(let i=0;i<lis.length;i++){
   		lis[i].style.display='none';
   		// btns[i].classList.remove('hot');
       yd[i].style.background= '#dddddd';
   		
   	}
    lis[num].style.display='block';
   	// btns[num].classList.add('hot'); 
   yd[num].style.background= '#a10000';

   }
	
	//左右翻页
	forward.onclick=fn;
    back.onclick=function(){
   	num--;  
   	if(num<0){
   		 num=lis.length-1;
   	}	
   	for(let i=0;i<lis.length;i++){
   		lis[i].style.display='none';
   		yd[i].style.background= '#dddddd';
   		// dian[i].classList.remove('hots');
   	}
    lis[num].style.display='block';
    yd[num].style.background= '#a10000';
   	// dian[num].classList.add('hots');    
   }
    //鼠标移入轮播停止
   banner.onmouseenter=function(){
    	clearInterval(t);
   }
   banner.onmouseleave=function(){
       t=setInterval(fn,2000);
   }
}