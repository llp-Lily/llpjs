window.onload=function(){
	var arr=[];
    var numF=0;
    var ch=window.innerHeight;
	$(".floor").each(function(index,elemrnt){
		arr.push(elemrnt.offsetTop);
	})
	$(".sli").each(function(index,element){
		$(this).click(function(){
			$(".sli").eq(numF).removeClass("active1");
			$(".sli").eq(index).addClass("active1");
			if(index==0){
		      	$(".sli").eq(numF).css("background",'#626262');
		      	$(".sli").eq(index).css("background",'#EA5F8D');
		      	numF=index;
		      }else if(index==1){
		      	$(".sli").eq(index).css("background",'#0AA6E8');
		      	$(".sli").eq(numF).css("background",'#626262');	
		      	numF=index;
		      }else if(index==2){
		      	$(".sli").eq(index).css("background",'#64C333');
		      	$(".sli").eq(numF).css("background",'#626262'); 
		      	numF=index;
		      }else if(index==3){
		      	$(".sli").eq(index).css("background",'#F15453');
		      	$(".sli").eq(numF).css("background",'#626262'); 
		      }else if(index==4){
		      	$(".sli").eq(index).css("background",'#19C8A9');
		      	$(".sli").eq(numF).css("background",'#626262');    	
		      }else if(index==5){
		      	$(".sli").eq(index).css("background",'#F7A945');
		      	$(".sli").eq(numF).css("background",'#626262'); 
		      }else if(index==6){
		      	$(".sli").eq(index).css("background",'#FF0036');
		      	$(".sli").eq(numF).css("background",'#626262');     	  	
		      }
		      $("body").animate({scrollTop:arr[index]},1000);
		})
	})
	//滚动滚轮
  window.onscroll=function(){
    st=document.body.scrollTop;
    arr.forEach(function(element,index){
    	if(ch+st>=element+400){
 		$(".sli").eq(numF).removeClass('active1');
		    $(".sli").eq(index).addClass('active1');
		      if(index==0){
		      	$(".sli").eq(numF).css("background",'#626262');
		      	$(".sli").eq(index).css("background",'#EA5F8D');
		      }else if(index==1){
		      	$(".sli").eq(index).css("background",'#0AA6E8');
		      	$(".sli").eq(numF).css("background",'#626262');
		      }else if(index==2){
		      	$(".sli").eq(index).css("background",'#64C333');
		      	$(".sli").eq(numF).css("background",'#626262');    	
		      }else if(index==3){
		      	$(".sli").eq(index).css("background",'#F15453');
		      	$(".sli").eq(numF).css("background",'#626262');    
		      }else if(index==4){
		      	$(".sli").eq(index).css("background",'#19C8A9');
		      	$(".sli").eq(numF).css("background",'#626262');        	
		      }else if(index==5){
		      	$(".sli").eq(index).css("background",'#F7A945');
		      	$(".sli").eq(numF).css("background",'#626262'); 
		      }else if(index==6){
		      	$(".sli").eq(index).css("background",'#FF0036');
		      	$(".sli").eq(numF).css("background",'#626262');     	
		      }
		      numF=index;
		}
	})
		if(st>=500){
	       $(".slide").animate({left:0},1000);
	       $(".search").animate({top:0},1000);
		    }else{
	       $(".slide").animate({left:-50},1000);
	       $(".search").animate({top:-50},1000);
	    }
  }
  
  //侧导航下拉列表
	$(".asideli").each(function(index,element){
		$(this).mouseenter(function(){
			$(".rightlist").eq(index).css("display","block")
			$(".rightlist").mouseleave(function(){
				$(this).css("display","none")
			})
		})
		$(this).mouseleave(function(){
			$(".rightlist").eq(index).css("display","none")		
		})
		
	})
	
	//轮播图
	$(".circle").each(function(index,element){
		$(this).mouseenter(function(){
			$(".banimgs>li").each(function(i,ele){
				$(".after").eq(i).css("display","none");
				$(".banimgs>li").eq(i).css("display","none");
				$(".circle").eq(i).css("background","#233756");
			})
			$(".after").eq(index).css("display","block");
			$(".banimgs>li").eq(index).css("display","block");
			$(".circle").eq(index).css("background","#8B8B8E");
		})
	})
	//自动轮播图
    var num=0;
    var t=setInterval(fn,2000);
    function fn(){
	   	num++;  
	   	if(num==$(".banimgs>li").length){
	   		 num=0;
	   	}	
	   	for(var i=0;i<$(".banimgs>li").length;i++){
	   		$(".after").eq(i).css("display","none")
	   		$(".banimgs>li").eq(i).css("display","none");
	        $(".circle").eq(i).css("background","#233756");
	   		
	   	}
	   	$(".after").eq(num).css("display","block")
	   	$(".banimgs>li").eq(num).css("display","block");
	    $(".circle").eq(num).css("background","#8B8B8E");
	}
    
     //鼠标移入轮播停止
   $(".navbottom").hover(function(){
    	clearInterval(t);
   },function(){
       t=setInterval(fn,2000);
   })
}
