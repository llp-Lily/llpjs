window.onload=function(){
	let header=document.querySelector('header');
	let icon1=document.querySelector('.icon1');
	let flag=0;
	icon1.onclick=function(){
		if(flag%2==0){
			flag++;
			header.style.top='0';
		}else{
			flag++;
			header.style.top='-40px';
		}
   }
	//banner轮播
  let nav=document.querySelector(".nav")
	let bans=document.getElementsByClassName('bans')[0];
	let imgs=bans.getElementsByTagName('img');
	let dots=document.getElementsByClassName('dots')[0];
	let dot=dots.getElementsByTagName('li');
	let num1=0;
	let t1=setInterval(fn1,2000);
    function fn1(){
     	num1++;  
   	    if(num1==imgs.length){
   		     num1=0;
   	    }	
   	    for(let i=0;i<imgs.length;i++){
   		    imgs[i].style.display='none';
           dot[i].style.background= 'rgba(0, 0, 0, 0.46)';  		
   	    }
        imgs[num1].style.display='block';
        dot[num1].style.background= 'rgba(255, 255, 255, 1)';
    }
    for (let i = 0; i <dot.length; i++) {
      dot[i].onclick=function(){
        for (var j=0; j<imgs.length; j++) {
          imgs[j].style.display="none";
          dot[j].style.background= 'rgba(0, 0, 0, 0.46)';  
        }
        imgs[i].style.display="block";
        dot[i].style.background= 'rgba(255, 255, 255, 1)';
      }
    }
    nav.onmouseenter=function(){
      clearInterval(t1);
    }
    nav.onmouseleave=function(){
      t1=setInterval(fn1,2000);
    }
    
    //馨悦单品
   let dpul=$('.sful')[0];
   let num2=0;
   let flag1=true;
   //自动轮播
   let t2=setInterval(fn2,2000);
   function fn2(){
      if(flag1){
        if(num2==0){
          flag1=false;
          return;
        }
        num2++;
        dpul.style.marginLeft='-1200px';

      }else{
         flag1=true;
         num2--;
         dpul.style.marginLeft='0';
      }
   }

   //首页导航
   let navli=document.getElementsByClassName("navli");
   let syli=document.getElementsByClassName("syli");
   let cir=document.getElementsByClassName("circle");
   let ciricon=document.getElementsByClassName("ciricon");
   let num3=0;
   for (let i = 0; i < navli.length; i++) {
     navli[i].onclick=function(){
        for (let j = 0; j <syli.length; j++) {
           syli[j].style.display="none";
        }
        syli[i].style.display="block";
     }
   }
}