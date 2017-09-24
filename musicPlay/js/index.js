window.onload=function(){
	let audio=document.querySelector('audio');
	let imgs=document.querySelector('img');
	let song=document.querySelector('.song');
	let singer=document.querySelector('.singer');
	let list=document.querySelector('.list');
	let pre=document.querySelector('.pre');
	let play=document.querySelector('.icon-player-play');
	let playstop=document.querySelector('.icon-zanting');
	let next=document.querySelector('.next');
	let sname=document.querySelector('#sname');
	let sinName=document.querySelector('#sinName');
	let cur=document.querySelector('#current');
	let alt=document.querySelector('#allt');
	let pro=document.querySelector('.prog');
	let playm=document.querySelector('.playm');//播放模式
	let shunxu=document.querySelector('.icon-ttpodicon-copy');
	let suiji=document.querySelector('.icon-suijibofang');
	let danqu =document.querySelector('.icon-danquxunhuan');
	let voice=document.querySelector('.voice');
	let voiprogress=document.querySelector('.voiprogress');
	let voipro=document.querySelector('.voipro');
	let voidot=document.querySelector('.voidot');
	let download=document.querySelector('.icon-xiazai');
	let ul=document.querySelector('.mlist');
	let listBtn=document.querySelector('.icon-pajian_gequliebiao_');
	let i=0;//当前播放第几首歌
	let pr;
	let state=0;//单曲循环  顺序播放  随机播放
	//初始化
	audio.src=database[i].src;
	render(database[i]);
	audio.volume=0.3;
	//播放暂停
	play.onclick=function(){
		if(audio.paused){
			audio.play();
			playstop.style.display='block';
			play.style.display='none';
		}
	}
	playstop.onclick=function(){
		audio.pause();
        playstop.style.display='none';		
        play.style.display='block';
	}
	//上一首
	pre.onclick=function(){
		i--;
		if(i<0){
			i=5
		}
		render(database[i]);
		audio.play();
		playstop.style.display='block';
		play.style.display='none';
	}
	//下一首
	next.onclick=function(){
		i++;
		if(i==5){
			i=0
		}
		render(database[i]);
		audio.play();
		playstop.style.display='block';
		play.style.display='none';
	}
	//播放完
	audio.onended=function(){
		i++;
		render(database[i]);
		audio.play();
	}
	//播放模式
	playm.onclick=function(){
		state++; 
		//随机播放
		if(state%3==1){
		    playm.title='随机播放';
		    shunxu.style.display='none';
		    suiji.style.display='block';
		}
		//单曲循环
		if(state%3==2){
		   playm.title='单曲循环';	
		   suiji.style.display='none';
		   danqu.style.display='block';
		}
		//顺序播放
		if(state%3==0){
		    playm.title='顺序播放';	
		    sanqu.style.display='none';
		    shunxu.style.display='block';
		}	
	}
	//歌曲列表
	let flag=true;
	database.forEach((element,index)=>{
		ul.innerHTML+=`<li>${index+1}.${element.songs}-${element.name}</li>`
	})
	listBtn.onclick=function(){
		if(flag){
			ul.style.display='block';
		}else{
			ul.style.display='none';
		}
		flag=!flag;
		
	}
	//下载
    download.onclick=function(){
    	download.href=database[i].src;
    	download.download=database[i].songs;
    }
	//当前播放时间进度
	audio.ontimeupdate=function(){
		let lip=audio.currentTime/audio.duration;
		pro.style.width=`${lip*500}px`;
		time(audio.currentTime);
	   function time(date){
	   let min=Math.floor(date/60)>=10?Math.floor(date/60):`0${Math.floor(date/60)}`;
	   let sec=Math.floor(date%60)>=10?Math.floor(date%60):`0${Math.floor(date%60)}`;
	   return cur.innerText=`${min}:${sec}`;
	   }
	   
	   for(let j=0;j<database[i].lyrics.length;j++){  
			if(cur.innerText==database[i].lyrics[j].time){
				list.innerHTML='';
				let a=j;
				if(a<=4){
					a=0;
				}else{
					a-=4;
				}
				for(let k=a;k<database[i].lyrics.length;k++){
					 list.innerHTML+=`<li class='lis${k}'>${database[i].lyrics[k].lyric}</li>`;		
				}
				 let li=document.querySelector(`.lis${j}`);
				 li.style.color='red';
			}
		}
		if(pr==1){
			//自动顺序播放
			if(state%3==0){
				i++;
				if(i==database.length){
				    i=0;
			    }
				audio.src=database[i].src;
		        render(database[i]);
		        audio.play();
			}
			//随机播放
		    if(state%3==1){
			   let r=Math.floor(Math.random()*database.length);
			   i=r;
			   audio.src=database[i].src;
		       render(database[i]);
		       audio.play();
		    }
		    //单曲循环
		    if(state%3==2){			  
			   audio.src=database[i].src;
			   render(database[i]);
			   audio.play();
		    }
	    }		
	   
	   //调节音量
	   let voiceCtrl=false;
		voice.onclick=function(e){	
			   e.stopPropagation();
			   voiprogress.style.display='block';
			   voidot.onmousedown=function(e){ 
			       e.stopPropagation();
			       let cy=e.clientY;  
			       voiprogress.onmousemove=function(e){
			       	  e.stopPropagation();
			       	  e.preventDefault();
			       	  let cy1=e.clientY;
			       	  let len=cy1-cy;
			       	  if(len>30){
			       	  	len=30;
			       	  }else if(len<-70){
			       	  	len=-70;
			       	  }
			       	  voidot.style.bottom=`${30-len}px`;
			       	  voipro.style.height=`${30-len}px`;
			       	  audio.volume=(30-len)/100;			       	   
			        } 
			        voidot.onmouseup=function(){
			       	  	  voiprogress.onmousemove=null;
			       	  	  voidot.onmouseup=null;  			       	  	  
			       	}
		        }
			   document.body.onclick=function(e){
			   voiprogress.style.display='none';
			   	
			   }
				
		} 
	}
	//歌词
	function render(data){
		audio.src=data.src;
		imgs.src=data.photo;
		song.innerText=data.songs;
		singer.innerText=data.name;
		sname.innerText=data.songs;
		sinName.innerText=data.name;
		alt.innerText=data.alltime;
		for(let i=2;i<data.lyrics.length;i++){
			list.innerHTML+=`<li>${data.lyrics[i].lyric}</li>`;	
		}
	}
	
}
