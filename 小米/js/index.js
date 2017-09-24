/*
* @Author: Administrator
* @Date:   2017-08-12 17:12:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-20 23:00:24
*/
'use strict';
window.onload=function(){
	let gwc=document.getElementsByClassName('gwcs')[0];
	let listshop=document.getElementsByClassName('list-shop')[0];    	
	 gwc.onmouseenter=function(){
    	listshop.style.height='98px';
    	listshop.style.transition='0.3s';
    }
    gwc.onmouseleave=function(){
    	listshop.style.height='0px';
    }
    //搜索
    let text=document.getElementsByClassName('text');
    let ssdownlist=document.getElementsByClassName('ssdownlist');
    for(let i=0;i<ssdownlist.length;i++){
      text[i].onclick=function(){
      ssdownlist[i].style.display='block';
      text[i].style.border='1px solid #FF6700';
        }
        text[i].onmouseleave=function(){
        ssdownlist[i].style.display='none';
        text[i].style.border='1px solid #E0E0E0';
        text[i].style.borderRight='none';
        }
    }
	//导航下拉列表
		let downlist=document.getElementsByClassName('downlist');
		let navt=document.getElementsByClassName('navt');
		//下标
		for(let i=0;i<navt.length;i++){
			navt[i].onmouseenter=function(){
			downlist[i].style.display='block';

      navt[i].style.color='#FF6700';
		    }
		    navt[i].onmouseleave=function(){
			downlist[i].style.display='none';

		    }
		}
    //侧导航下拉列表
		let downlist1=document.getElementsByClassName('downlist1');
		let asli=document.getElementsByClassName('asli');
		//下标
		for(let i=0;i<asli.length;i++){
			asli[i].onmouseenter=function(){
			downlist1[i].style.display='block';
		    }
		    asli[i].onmouseleave=function(){
			downlist1[i].style.display='none';
		    }
		}
	//自动轮播图
	let xmbn=document.getElementsByClassName('xmbn')[0];
	let imgs=xmbn.getElementsByTagName('img');
	let yuan=document.getElementsByClassName('yuan')[0];
	let dian=document.getElementsByClassName('dians');
  console.log(dian[1])
	let num=0;//当前窗口显示的图片
	//后退、前进
	let back=document.getElementsByClassName('jlb')[0];
	let forward=document.getElementsByClassName('jrb')[0];
    //获取banner
    let banner=document.getElementsByClassName('banner')[0];
	// console.log(imgs);
    // gwc.onmouseenter=function(){
    	
    // 	listshop.style.height='98px';

    // }
    // gwc.onmouseleave=function(){
    // 	listshop.style.height='0px';
    // }
    // et t=setInterval(fn,3000);
    //点击按钮轮播图
	for(let i=0;i<dian.length;i++){
       dian[i].onclick=function(){
       	 for(let j=0;j<imgs.length;j++){
       	 	imgs[j].style.display='none';

       	 }
         imgs[i].style.display='block';
         // dian[i].style.background= 'rgba(255, 255, 255, 1)';
       	 dian[num].style.background= 'rgba(0, 0, 0, 0.46)';
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
       dian[i].style.background= 'rgba(0, 0, 0, 0.46)';
   		
   	}
    imgs[num].style.display='block';
    dian[num].style.background= 'rgba(255, 255, 255, 1)';

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
   		dian[i].style.background= 'rgba(0, 0, 0, 0.46)';
   	}
    imgs[num].style.display='block';
    dian[num].style.background= 'rgba(255, 255, 255, 1)';   
   }
    //鼠标移入轮播停止
   banner.onmouseenter=function(){
    	clearInterval(t);
   }
   banner.onmouseleave=function(){
       t=setInterval(fn,2000);
   }

   //明星单品    
    let btns=$('.disabled');
    // console.log(btns);
   let btnl=btns[0];
   let btnr=btns[1];
   let mxbox=$('.mxbox')[0];
   let num1=0;
   let flag=true;
   let childNum=mxbox.childElementCount;
   let childW=mxbox.children[0].offsetW
   mxbox.style.width=`${childNum*childW}px`;
   //点击左右箭头
   btnl.onclick=function(){
    if(num1==1){
      return;
    }
    num1++;
    mxbox.style.marginLeft='0';
   }
   btnr.onclick=function(){
    if (num1==0) {
      return;
    }
    num1--;
    mxbox.style.marginLeft='-1240px';
   }
   //自动轮播
   let t1=setInterval(fn1,2000);
   function fn1(){
      if(flag){
        if(num1==0){
          flag=false;
          return;
        }
        num1++;
        mxbox.style.marginLeft='-1240px';

      }else{
         flag=true;
         num1--;
         mxbox.style.marginLeft='0';
      }
   }

   //家电
   let jdnav=document.getElementsByClassName('jdnav');
   let jdul=document.getElementsByClassName('jdul')
   for(let i=0;i<jdnav.length;i++){
       jdnav[i].onmouseenter=function(){
         for(let j=0;j<jdul.length;j++){
          jdul[j].style.display='none';
          jdnav[j].style.color='#424242';
          jdnav[j].style.border='none';
         }
         jdul[i].style.display='block';
         jdnav[i].style.color='#FF6700';
         // jdnav[i].style.borderBottomColor='#FF6700';
         // jdnav[i].style.borderBottom='2px';
       }
  }

  //智能
   let znnav=document.getElementsByClassName('znnav');
   let znul=document.getElementsByClassName('znul')
   for(let i=0;i<znnav.length;i++){
       znnav[i].onmouseenter=function(){
         for(let j=0;j<znul.length;j++){
          znul[j].style.display='none';
          znnav[j].style.color='#424242';
          znnav[j].style.border='none';
         }
         znul[i].style.display='block';
         znnav[i].style.color='#FF6700';
         // znnav[i].style.borderBottomColor='#FF6700';
       }
  }

  //搭配
   let dpnav=document.getElementsByClassName('dpnav');
   let dpul=document.getElementsByClassName('dpul')
   for(let i=0;i<dpnav.length;i++){
       dpnav[i].onmouseenter=function(){
         for(let j=0;j<dpul.length;j++){
          dpul[j].style.display='none';
          dpnav[j].style.color='#424242';
          dpnav[j].style.border='none';
         }
         dpul[i].style.display='block';
         dpnav[i].style.color='#FF6700';
         // dpnav[i].style.borderBottomColor='#FF6700';
       }
  }

  //配件
   let pjnav=document.getElementsByClassName('pjnav');
   let pjul=document.getElementsByClassName('pjul')
   for(let i=0;i<pjnav.length;i++){
       pjnav[i].onmouseenter=function(){
         for(let j=0;j<pjul.length;j++){
          pjul[j].style.display='none';
          pjnav[j].style.color='#424242';
          pjnav[j].style.border='none';
         }
         pjul[i].style.display='block';
         pjnav[i].style.color='#FF6700';
         // pjnav[i].style.borderBottomColor='#FF6700';
       }
  }

  //周边
   let zbnav=document.getElementsByClassName('zbnav');
   let zbul=document.getElementsByClassName('zbul')
   for(let i=0;i<zbnav.length;i++){
       zbnav[i].onmouseenter=function(){
         for(let j=0;j<zbul.length;j++){
          zbul[j].style.display='none';
          zbnav[j].style.color='#424242';
          zbnav[j].style.border='none';
         }
         zbul[i].style.display='block';
         zbnav[i].style.color='#FF6700';
         // zbnav[i].style.borderBottomColor='#FF6700';
       }
  }

  //为你推荐
   let tjbtn=$('.tjdisabled');
   let tjbtnl=tjbtn[0];
   let tjbtnr=tjbtn[1];
   let tjbox=$('.tjbox')[0];
   let num2=0;
   let flag1=true;
   let childNum1=tjbox.childElementCount;
   let childW1=tjbox.children[0].offsetW
   tjbox.style.width=`${childNum1*childW1}px`;
   //点击左右箭头
   tjbtnl.onclick=function(){
    if (num2==0) {
      return;
    }
    num2--;
    tjbox.style.marginLeft=`${-1240*num2}px`;
   }
   tjbtnr.onclick=function(){
    if(num2==3){
      return;
    }
    num2++;
    tjbox.style.marginLeft=`${-1240*num2}px`; 
   }
    
   //自动轮播
   /*let t2=setInterval(fn2,2000);
   function fn2(){
      if(flag1){
        if(num2==4){
          flag1=false;
          return;
        }else{
          num2++;
        }
      }else{
         if(num2==0){
         flag1=true; 

       }else{
         num2--;  
       }
       tjbox.style.marginLeft=`${-1240*num2}px`; 
   }
 }*/

 //内容
 let nr1=document.getElementsByClassName('nr01');
 let dot1=document.getElementsByClassName('dot1');
 // console.log(nr1[1]);
 for(let i=0;i<dot1.length;i++){
       dot1[i].onclick=function(){
         for(let j=0;j<nr1.length;j++){
          nr1[j].style.display='none';
          dot1[j].style.background='#000';
          }
         nr1[i].style.display='block';
         dot1[i].style.background='#ff6700';
       }
  }
  let nr2=document.getElementsByClassName('nr02');
 let dot2=document.getElementsByClassName('dot2');
 // console.log(nr1[1]);
 for(let i=0;i<dot2.length;i++){
       dot2[i].onclick=function(){
         for(let j=0;j<nr2.length;j++){
          nr2[j].style.display='none';
          dot2[j].style.background='#000';
          }
         nr2[i].style.display='block';
         dot2[i].style.background='#ff6700';
       }
  }

  //内容
  let nrul=$('.neirongbTushu')[0];
  let nrs=$('.nrBox')
  let nrs1=$('.nrBox1')
  let nrs2=$('.nrBox2')
  let nrs3=$('.nrBox3')
  let nrbtn=$('.yuandian1')[0];
  let nrbtns=$('li',nrbtn);
  let nrbtn2=$('.yuandian2')[0];
  let nrbtns2=$('li',nrbtn2);
  let nrbtn3=$('.yuandian3')[0];
  let nrbtns3=$('li',nrbtn3);
  let nrbtn4=$('.yuandian4')[0];
  let nrbtns4=$('li',nrbtn4);
  let numnr=0;
  let numnr1=0;
  let numnr2=0;
  let numnr3=0;
  // console.log(nrs);
  //点击圆点切换内容
   for(let i=0;i<nrs.length;i++){
       nrbtns[i].onclick=function(){
         for(let j=0;j<nrs.length;j++){
          nrs[j].style.display='none';
          nrbtns[j].style.background= '#B0B0B0';
          nrbtns[j].style.border= '0px solid #ff6700';
          nrbtns[j].style.marginTop= '3px';
         }
         nrs[i].style.display='block';
         nrbtns[i].style.background= '#fff';
         nrbtns[i].style.border= '2px solid #ff6700';
         nrbtns[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL=$('.jiantouLeft')[0];
  let jtR=$('.jiantouRight')[0];
  // console.log(jtR);
  jtL.onclick=function(){
    numnr--;
      if(numnr<0){
        numnr=nrs.length-1;
      }
    for(let i=0;i<nrs.length;i++){
          nrs[i].style.display='none';
          nrbtns[i].style.background= '#B0B0B0';
          nrbtns[i].style.border= '0px solid #ff6700';
          nrbtns[i].style.marginTop= '3px';
    }
    nrs[numnr].style.display='block';
    nrbtns[numnr].style.background= '#fff';
    nrbtns[numnr].style.border= '2px solid #ff6700';
    nrbtns[numnr].style.marginTop= '1px';
  }
  jtR.onclick=function(){
    numnr++;
      if(numnr>2){
        numnr=0;
      }
    for(let i=0;i<nrs.length;i++){
          nrs[i].style.display='none';
          nrbtns[i].style.background= '#B0B0B0';
          nrbtns[i].style.border= '0px solid #ff6700';
          nrbtns[i].style.marginTop= '3px';
    }
    nrs[numnr].style.display='block';
    nrbtns[numnr].style.background= '#fff';
    nrbtns[numnr].style.border= '2px solid #ff6700';
    nrbtns[numnr].style.marginTop= '1px';
  }
  //2
  //点击圆点切换内容
   for(let i=0;i<nrs1.length;i++){
       nrbtns2[i].onclick=function(){
         for(let j=0;j<nrs1.length;j++){
          nrs1[j].style.display='none';
           nrbtns2[j].style.background= '#B0B0B0';
           nrbtns2[j].style.border= '0px solid #ff6700';
           nrbtns2[j].style.marginTop= '3px';
         }
         nrs1[i].style.display='block';
          nrbtns2[i].style.background= '#fff';
          nrbtns2[i].style.border= '2px solid #ff6700';
          nrbtns2[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL1=$('.jiantouLeft')[1];
  let jtR1=$('.jiantouRight')[1];
  jtL1.onclick=function(){
    numnr1--;
      if(numnr1<0){
        numnr1=nrs1.length-1;
      }
    for(let i=0;i<nrs1.length;i++){
          nrs1[i].style.display='none';
           nrbtns2[i].style.background= '#B0B0B0';
           nrbtns2[i].style.border= '0px solid #ff6700';
           nrbtns2[i].style.marginTop= '3px';
    }
    nrs1[numnr1].style.display='block';
     nrbtns2[numnr1].style.background= '#fff';
     nrbtns2[numnr1].style.border= '2px solid #ff6700';
     nrbtns2[numnr1].style.marginTop= '1px';
  }
  jtR1.onclick=function(){
    numnr1++;
      if(numnr1>2){
        numnr1=0;
      }
    for(let i=0;i<nrs1.length;i++){
          nrs1[i].style.display='none';
           nrbtns2[i].style.background= '#B0B0B0';
           nrbtns2[i].style.border= '0px solid #ff6700';
           nrbtns2[i].style.marginTop= '3px';
    }
    nrs1[numnr1].style.display='block';
     nrbtns2[numnr1].style.background= '#fff';
     nrbtns2[numnr1].style.border= '2px solid #ff6700';
     nrbtns2[numnr1].style.marginTop= '1px';
  }
   //3
  // 点击圆点切换内容
   for(let i=0;i<nrs2.length;i++){
       nrbtns3[i].onclick=function(){
         for(let j=0;j<nrs2.length;j++){
          nrs2[j].style.display='none';
           nrbtns3[j].style.background= '#B0B0B0';
           nrbtns3[j].style.border= '0px solid #ff6700';
           nrbtns3[j].style.marginTop= '3px';
         }
         nrs2[i].style.display='block';
          nrbtns3[i].style.background= '#fff';
          nrbtns3[i].style.border= '2px solid #ff6700';
          nrbtns3[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL2=$('.jiantouLeft')[2];
  let jtR2=$('.jiantouRight')[2];
  jtL2.onclick=function(){
    numnr2--;
      if(numnr2<0){
        numnr2=nrs2.length-1;
      }
    for(let i=0;i<nrs2.length;i++){
          nrs2[i].style.display='none';
           nrbtns3[i].style.background= '#B0B0B0';
           nrbtns3[i].style.border= '0px solid #ff6700';
           nrbtns3[i].style.marginTop= '3px';
    }
    nrs2[numnr2].style.display='block';
     nrbtns3[numnr2].style.background= '#fff';
     nrbtns3[numnr2].style.border= '2px solid #ff6700';
     nrbtns3[numnr2].style.marginTop= '1px';
  }
  jtR2.onclick=function(){
    numnr2++;
      if(numnr2>2){
        numnr2=0;
      }
    for(let i=0;i<nrs2.length;i++){
          nrs2[i].style.display='none';
           nrbtns3[i].style.background= '#B0B0B0';
           nrbtns3[i].style.border= '0px solid #ff6700';
           nrbtns3[i].style.marginTop= '3px';
    }
    nrs2[numnr2].style.display='block';
     nrbtns3[numnr2].style.background= '#fff';
     nrbtns3[numnr2].style.border= '2px solid #ff6700';
     nrbtns3[numnr2].style.marginTop= '1px';
  }
  //4
  //点击圆点切换内容
   for(let i=0;i<nrs3.length;i++){
       nrbtns4[i].onclick=function(){
         for(let j=0;j<nrs3.length;j++){
          nrs3[j].style.display='none';
           nrbtns4[j].style.background= '#B0B0B0';
           nrbtns4[j].style.border= '0px solid #ff6700';
           nrbtns4[j].style.marginTop= '3px';
         }
         nrs3[i].style.display='block';
          nrbtns4[i].style.background= '#fff';
          nrbtns4[i].style.border= '2px solid #ff6700';
          nrbtns4[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL3=$('.jiantouLeft')[3];
  let jtR3=$('.jiantouRight')[3];
  jtL3.onclick=function(){
    numnr3--;
      if(numnr3<0){
        numnr3=nrs3.length-1;
      }
    for(let i=0;i<nrs3.length;i++){
          nrs3[i].style.display='none';
           nrbtns4[i].style.background= '#B0B0B0';
           nrbtns4[i].style.border= '0px solid #ff6700';
           nrbtns4[i].style.marginTop= '3px';
    }
    nrs3[numnr3].style.display='block';
     nrbtns4[numnr3].style.background= '#fff';
     nrbtns4[numnr3].style.border= '2px solid #ff6700';
     nrbtns4[numnr3].style.marginTop= '1px';
  }
  jtR3.onclick=function(){
    numnr3++;
      if(numnr3>2){
        numnr3=0;
      }
    for(let i=0;i<nrs3.length;i++){
          nrs3[i].style.display='none';
           nrbtns4[i].style.background= '#B0B0B0';
           nrbtns4[i].style.border= '0px solid #ff6700';
           nrbtns4[i].style.marginTop= '3px';
    }
    nrs3[numnr3].style.display='block';
     nrbtns4[numnr3].style.background= '#fff';
     nrbtns4[numnr3].style.border= '2px solid #ff6700';
     nrbtns4[numnr3].style.marginTop= '1px';
  }
}