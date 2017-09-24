/*
* @Author: Administrator
* @Date:   2017-08-28 09:33:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-28 11:16:24
*/
window.onload=function(){
	//屏幕变小时顶部下拉菜单
	/*let navBtn=document.getElementsByClassName('navicon');
	let djlist=document.getElementsByClassName('djlist');
	let small=document.getElementsByClassName('small')[0];
	console.log(navBtn)
	navBtn.onclick=function(){
		console.log(small)
		small.style.display='none'
		djlist.style.display='block';
	}*/
	//自动轮播图
	let banimgs=document.getElementsByClassName('banimgs')[0];
	let imgs=document.getElementsByClassName('bimg');
	let list=document.getElementsByClassName('list')[0];
	let xian=document.getElementsByClassName('xian');
	let num=0;//当前窗口显示的图片
	//后退、前进
	let back=document.getElementsByClassName('jtleft')[0];
	let forward=document.getElementsByClassName('jtright')[0];
    //获取banner
    let banner=document.getElementsByClassName('banner')[0];
    //点击按钮轮播图
	for(let i=0;i<xian.length;i++){
       xian[i].onclick=function(){
       	 for(let j=0;j<imgs.length;j++){
       	 	imgs[j].style.display='none';
            xian[j].style.background= '#262626';
       	 }
         imgs[i].style.display='block';
       	 xian[i].style.background= '#FFFFFF';
       }
	}
    	//自动轮播图
    let t=setInterval(fn,2000);
   function fn(){
   	num++;  
   	if(num==imgs.length){
   		 num=0;
   	}	
   	for(let i=0;i<imgs.length;i++){
   		imgs[i].style.display='none';
       xian[i].style.background= '#262626';  		
   	}
    imgs[num].style.display='block';
    xian[num].style.background= '#FFFFFF';
   }
	
	//左右翻页
	forward.onclick=fn;
    back.onclick=function(){
   	num--;  
   	if(num<0){
   		 num=imgs.length-1;
   	}	
   	for(let i=0;i<imgs.length;i++){
   		imgs[i].style.display='none';
     	xian[i].style.background= '#262626';
   	}
    imgs[num].style.display='block';
    xian[num].style.background= '#FFFFFF';   
   }
    //鼠标移入轮播停止
   banner.onmouseenter=function(){
    	clearInterval(t);
   }
   banner.onmouseleave=function(){
       t=setInterval(fn,2000);
   }
}