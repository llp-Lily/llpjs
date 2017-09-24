/*//侧导航
$(".asli").each(function(i,ele){
	$(this).mouseenter(function(){
		$(".downlist1")[i].style.display="block";
	})
	$(this).mouseleave(function(){
		$(".downlist1")[i].style.display="none";
	})
})

let num=0;
//自动轮播
let t=setInterval(fn,2000);
function fn(){
	num++;
	if(num==$(".xmbn img").length){
		num=0;
	}
	$(".xmbn img").each(function(index,element){
		element.style.display="none"
	    $(".dians")[index].style.backgroundColor='rgba(0, 0, 0, 0.46)';
	})
	$(".xmbn img")[num].style.display="block";
	$(".dians")[num].style.backgroundColor='rgba(255, 255, 255, 1)';
}
//左右按钮
$(".jlb").click(function(){
	num--;
	if(num<0){
		num=$(".xmbn img").length-1;
	}
	$(".xmbn img").each(function(index,element){
		    element.style.display="none";
		    $(".dians")[index].style.backgroundColor='rgba(0, 0, 0, 0.46)';
	    })
	$(".xmbn img")[num].style.display="block";
	$(".dians")[num].style.backgroundColor='rgba(255, 255, 255, 1)';
})
$(".jrb").click(function(){
	fn();
});
//鼠标移入
$(".banner").mouseenter(function(){ 
	clearInterval(t);
})
$(".banner").mouseleave(function(){
	t=setInterval(fn,2000);
})*/

$(function(){
	//购物车
	$(".gwcs").hover(function(){
		$(".list-shop").height("98px");
		$(".list-shop").css("transition","all 1s");
	},function(){
		$(".list-shop").height(0);
	})
	
	//搜索
	$(".xmnum").each(function(index,element){
		$(".text").click(function(){
			$(".xmnum").css({height:"330",transition:"all 1s"});
			$(".xmnum").css({
				borderLeft:"1px solid #FF6700",
				borderRight:"1px solid #FF6700",
				borderBottom:"1px solid #FF6700"
			});
			$(".text").css("border","1px solid #FF6700");
		})
		$(".ssuo").mouseleave(function(){
			$(".xmnum").css("height","0");
			$(".text").css("border","1px solid #E0E0E0");
			$(".xmnum").css("border","none");
		})
	})
	
	//导航下拉列表
	$(".navt").each(function(index,element){
		$(this).hover(function(){
			$(this).children(".downlist").css({
				borderTop: "1px solid #B6B4B6",
				height:"240px",
				transition:"all 1s"
			})
		},function(){
			$(this).children(".downlist").css({
				borderTop: "none",
				height:0
			})
			
		})
	})
	
	//侧导航
	$(".asli").hover(function(){
		$(".downlist1").css("display","none");
		$(this).children(".downlist1").css("display","block");
	})
	$("aside>ul").mouseleave(function(){
		$(".downlist1").css("display","none");
	})
	//轮播图
	var num=0;
	let t=setInterval(function(){
		fn1("l");
	},2000);
	function fn1(m){
		if(m=="l"){
			num++;
			if(num==$(".xmbn img").length){
				num=0;
			}
			
		}else if(m=="r"){
			num--;
			if(num==0){
				num==$(".xmbn img").length-1;
			}
		}
		$(".xmbn img").css({opcity:0,"z-index":0})
		$(".xmbn img:eq("+num+")").css({opcity:1,"z-index":3})	
		$(".ydian").css("background","rgba(0, 0, 0, 0.46)").eq(num).css("background","#fff");
	}
	
	$(".xmbn").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(fn1,2000);
	})
	$(".jlb").click(function(){
		fn1("r")
	})
	$(".jrb").click(function(){
		fn1("l")
	})
	$(".ydian").click(function(){
		var index=$(this).index(".ydian");
		num=index;
		fn1();
	})
	
	$(window).blur(function(){
		clearInterval(t);
	})
	$(window).focus(function(){
		t=setInterval(fn1,2000);
	})
	
	//明星单品
	//点击左右键
	$(".btnleft").click(function(){
		if(num=="1"){
			return
		}
		num++;
		$(".mxbox").css("marginLeft",0)
	})
	$(".btnright").click(function(){
		if(num=="0"){
			return
		}
		num--;
		$(".mxbox").css("marginLeft","-1240px")
	})
	//自动轮播
	var flag=true;
	let t1=setInterval(fn2,2000);
	function fn2(){
		if(flag){
			if(num=="0"){
				num=1;
				return;
			}
			flag=false;
		    $(".mxbox").css("marginLeft","-1240px");
		}else if(!flag){
			if(num==1){
				num=0;		
				return;
			}
			flag=true;
			$(".mxbox").css("marginLeft",0);
		}
	}
	//家电
	$(".jdnav").each(function(index,element){
		$(this).mouseenter(function(){
			$(".jdhot").removeClass()
	        $(this).addClass("jdhot")
			$(".jdul").each(function(i,ele){
				$(".jdul").eq(i).css("display","none")
			})
			$(".jdul").eq(index).css("display","block")
		})
	})
	
	
	//智能
	$(".znnav").each(function(index,element){
		$(this).mouseenter(function(){
			$(".znhot").removeClass()
	        $(this).addClass("znhot")
			$(".znul").each(function(i,ele){
				$(".znul").eq(i).css("display","none")
			})
			$(".znul").eq(index).css("display","block")
		})
	})
	//搭配
	$(".dpnav").each(function(index,element){
		$(this).mouseenter(function(){
			$(".dphot").removeClass()
	        $(this).addClass("dphot")
			$(".dpul").each(function(i,ele){
				$(".dpul").eq(i).css("display","none")
			})
			$(".dpul").eq(index).css("display","block")
		})
	})
	//配件
	$(".pjnav").each(function(index,element){
		$(this).mouseenter(function(){
			$(".pjhot").removeClass()
	        $(this).addClass("pjhot")
			$(".pjul").each(function(i,ele){
				$(".pjul").eq(i).css("display","none")
			})
			$(".pjul").eq(index).css("display","block")
		})
	})
	//周边
	$(".zbnav").each(function(index,element){
		$(this).mouseenter(function(){
			$(".zbhot").removeClass()
	        $(this).addClass("zbhot")
			$(".zbul").each(function(i,ele){
				$(".zbul").eq(i).css("display","none")
			})
			$(".zbul").eq(index).css("display","block")
		})
	})
		
	//为你推荐
	$(".tjbtnl").click(function(){
		if(num==0){
			return
		}
		num--;
		$(".tjbox").css("marginLeft",function(){
			return  `${-1240*num}px`
		});
	})
	$(".tjbtnr").click(function(){
		if(num==3){
			return
		}
		num--;
		$(".tjbox").css("marginLeft",function(){
			return  `${-1240*num}px`
		});
	})
	
	//内容
	//01 
	$(".jiantouLeft").click(function(){
		num--;
      	if(num<0){
        	num=$(".nrBox").length-1;
    	}
    	for(let i=0;i<$(".nrBox").length;i++){
          $(".nrBox").eq(i).css("display","none");
          $(".yuandian1>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox").eq(num).css("display","block");
        $(".yuandian1>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
	$(".jiantouRight").click(function(){
		num++;
      	if(num>2){
        	num=0;
    	}
    	for(let i=0;i<$(".nrBox").length;i++){
          $(".nrBox").eq(i).css("display","none");
          $(".yuandian1>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox").eq(num).css("display","block");
        $(".yuandian1>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
    $(".yuandian1>li").click(function(){
    	let index=$(this).index(".yuandian1>li");
		num=index;
         for(let j=0;j<$(".yuandian1>li").length;j++){
          $(".nrBox").eq(j).css("display","none")
          $(".yuandian1>li").eq(j).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop:'3px'
          })
         }
         $(".nrBox").eq(num).css("display","block")
         $(".yuandian1>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop:'1px'
         })
    })
	
	//02 
	$(".jiantouLeft1").click(function(){
		num--;
      	if(num<0){
        	num=$(".nrBox1").length-1;
    	}
    	for(let i=0;i<$(".nrBox1").length;i++){
          $(".nrBox1").eq(i).css("display","none");
          $(".yuandian2>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox1").eq(num).css("display","block");
        $(".yuandian2>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
	$(".jiantouRight1").click(function(){
		num++;
      	if(num>2){
        	num=0;
    	}
    	for(let i=0;i<$(".nrBox1").length;i++){
          $(".nrBox1").eq(i).css("display","none");
          $(".yuandian2>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox1").eq(num).css("display","block");
        $(".yuandian2>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
    $(".yuandian2>li").click(function(){
    	let index=$(this).index(".yuandian2>li");
		num=index;
         for(let j=0;j<$(".yuandian2>li").length;j++){
          $(".nrBox1").eq(j).css("display","none")
          $(".yuandian2>li").eq(j).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop:'3px'
          })
         }
         $(".nrBox1").eq(num).css("display","block")
         $(".yuandian2>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop:'1px'
         })
    })
    
    //03 
	$(".jiantouLeft2").click(function(){
		num--;
      	if(num<0){
        	num=$(".nrBox2").length-1;
    	}
    	for(let i=0;i<$(".nrBox2").length;i++){
          $(".nrBox2").eq(i).css("display","none");
          $(".yuandian3>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox2").eq(num).css("display","block");
        $(".yuandian3>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
	$(".jiantouRight2").click(function(){
		num++;
      	if(num>2){
        	num=0;
    	}
    	for(let i=0;i<$(".nrBox2").length;i++){
          $(".nrBox2").eq(i).css("display","none");
          $(".yuandian3>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox2").eq(num).css("display","block");
        $(".yuandian3>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
    $(".yuandian3>li").click(function(){
    	let index=$(this).index(".yuandian3>li");
		num=index;
         for(let j=0;j<$(".yuandian3>li").length;j++){
          $(".nrBox2").eq(j).css("display","none")
          $(".yuandian3>li").eq(j).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop:'3px'
          })
         }
         $(".nrBox2").eq(num).css("display","block")
         $(".yuandian3>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop:'1px'
         })
    })
    
    //04 
	$(".jiantouLeft3").click(function(){
		num--;
      	if(num<0){
        	num=$(".nrBox3").length-1;
    	}
    	for(let i=0;i<$(".nrBox3").length;i++){
          $(".nrBox3").eq(i).css("display","none");
          $(".yuandian4>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox3").eq(num).css("display","block");
        $(".yuandian4>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
	$(".jiantouRight3").click(function(){
		num++;
      	if(num>2){
        	num=0;
    	}
    	for(let i=0;i<$(".nrBox3").length;i++){
          $(".nrBox3").eq(i).css("display","none");
          $(".yuandian4>li").eq(i).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop: '3px'
          })
    	}
        $(".nrBox3").eq(num).css("display","block");
        $(".yuandian4>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop: '1px'
        })
	})
    $(".yuandian4>li").click(function(){
    	let index=$(this).index(".yuandian4>li");
		num=index;
         for(let j=0;j<$(".yuandian4>li").length;j++){
          $(".nrBox3").eq(j).css("display","none")
          $(".yuandian4>li").eq(j).css({
          	background: '#B0B0B0',
          	border: '0px solid #ff6700',
          	marginTop:'3px'
          })
         }
         $(".nrBox3").eq(num).css("display","block")
         $(".yuandian4>li").eq(num).css({
          	background: '#fff',
          	border: '2px solid #ff6700',
          	marginTop:'1px'
         })
    })
})
