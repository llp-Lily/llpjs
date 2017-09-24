/*
* @Author: Administrator
* @Date:   2017-08-17 19:52:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-28 02:25:36
*/
window.onload=function(){
  //固定定位侧导航
  let ch=window.innerHeight;
  let floor=document.querySelectorAll('.floor');
  let posArr=[];
  let slide=document.querySelector('.slide')
  let sli=document.querySelectorAll('.sli');
  let nthF=0;
  let search=document.querySelector('.search');
  let sli1=document.getElementsByClassName('sli');
  let flags=true;
  floor.forEach(element=>{
    posArr.push(element.offsetTop);
  })
  //slide li
  //点击对应栏目
  sli.forEach(function(element,index){
    element.onclick=function(){
      sli1[nthF].classList.remove('active1');
      sli1[index].classList.add('active1');
      if(index==0){
      	sli1[nthF].style.background='#626262';
      	sli1[index].style.background='#EA5F8D';
      }else if(index==1){
      	sli1[index].style.background='#0AA6E8';
      	sli1[nthF].style.background='#626262';
      }else if(index==2){
      	sli1[index].style.background='#64C333';
      	sli1[nthF].style.background='#626262';     	
      }else if(index==3){
      	sli1[index].style.background='#F15453';
      	sli1[nthF].style.background='#626262';
      }else if(index==4){
      	sli1[index].style.background='#19C8A9';
      	sli1[nthF].style.background='#626262';     	
      }
      else if(index==5){
      	sli1[index].style.background='#F7A945';
      	sli1[nthF].style.background='#626262';
      }else if(index==6){
      	sli1[index].style.background='#FF0036';
      	sli1[nthF].style.background='#626262';     	
      }
      nthF=index;
      animate(document.body,{scrollTop:posArr[index]-50});
    }
  })
  //滚动滚轮
  window.onscroll=function(){
    st=document.body.scrollTop;
    posArr.forEach((element,index)=>{
    	if(ch+st>=element+600){
    		sli1[nthF].classList.remove('active1');
        sli1[index].classList.add('active1');
      if(index==0){
      	sli1[nthF].style.background='#626262';
      	sli1[index].style.background='#EA5F8D';
      }else if(index==1){
      	sli1[index].style.background='#0AA6E8';
      	sli1[nthF].style.background='#626262';
      }else if(index==2){
      	sli1[index].style.background='#64C333';
      	sli1[nthF].style.background='#626262';     	
      }else if(index==3){
      	sli1[index].style.background='#F15453';
      	sli1[nthF].style.background='#626262';
      }else if(index==4){
      	sli1[index].style.background='#19C8A9';
      	sli1[nthF].style.background='#626262';     	
      }
      else if(index==5){
      	sli1[index].style.background='#F7A945';
      	sli1[nthF].style.background='#626262';
      }else if(index==6){
      	sli1[index].style.background='#FF0036';
      	sli1[nthF].style.background='#626262';     	
      }
      nthF=index;
    	}
    })
    if(st>=700){
       animate(slide,{left:0});
       animate(search,{top:0});
    }else{
       animate(slide,{left:-50});
       animate(search,{top:-50});
    }
  }
    //侧导航下拉列表
		let rightlist=document.getElementsByClassName('rightlist');
		let asli=document.getElementsByClassName('asideli');
		// console.log(rightlist[0])
		//下标
		for(let i=0;i<asli.length;i++){
			asli[i].onmouseenter=function(){
			rightlist[i].style.display='block';
		    }
		    asli[i].onmouseleave=function(){
			rightlist[i].style.display='none';
		    }
		}
	//轮播图
	let banimgs=document.getElementsByClassName('banimgs')[0];
	let imgsli=banimgs.getElementsByTagName('li');
	let after=document.getElementsByClassName('after');
	let circle=document.getElementsByClassName('circle');
	let num=0;//当前窗口显示的图片
	// console.log(imgsli);
	// console.log(circle)
    //点击按钮轮播图
	for(let i=0;i<circle.length;i++){
       circle[i].onmouseenter=function(){
       	 for(let j=0;j<imgsli.length;j++){
       	 	after[j].style.display='none';
       	 	imgsli[j].style.display='none';
            circle[j].style.background='#233756';
       	 }
       	 after[i].style.display='block';
         imgsli[i].style.display='block';
       	 circle[i].style.background= '#8B8B8E';
       }
	}
    	//自动轮播图
    let t=setInterval(fn,2000);
   function fn(){
   	num++;  
   	if(num==imgsli.length){
   		 num=0;
   	}	
   	for(let i=0;i<imgsli.length;i++){
   		after[i].style.display='none';
   		imgsli[i].style.display='none';
        circle[i].style.background= '#233756';
   		
   	}
   	after[num].style.display='block';
    imgsli[num].style.display='block';
    circle[num].style.background= '#8B8B8E';

   }
    //鼠标移入轮播停止
   imgsli.onmouseenter=function(){
    	clearInterval(t);
   }
   imgsli.onmouseleave=function(){
       t=setInterval(fn,2000);
   }
}