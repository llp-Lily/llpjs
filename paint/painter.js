/*
* 属性
*   线：宽、端点、颜色
*   多边(角)形：边(角)数
*   橡皮：尺寸
*   history
*   widths  height
*   ctx
*   canvas
* 方法
*   画线、虚线、铅笔、多边形、圆、矩形、多角形
*
*   橡皮、裁切、文字
*
*   新建、保存、
 */

function Palette(canvas,mask){
  this.canvas=canvas;
  this.ctx=this.canvas.getContext("2d");
  this.mask=mask;
  this.history=[];
  this.cw=this.canvas.width;
  this.ch=this.canvas.height;
  //样式
  this.lineWidth=3;
  this.lineCap='round';
  this.style='stroke';
  this.rects='strokeRect'
  this.fillStyle='#000';
  this.strokeStyle='#000';
  
  this.poNum=6;
  this.stNum=5;
  //clip
  this.temp=null;
}
Palette.prototype={
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
        this.ctx.style=this.style;
        this.ctx.rects=this.rects;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.setLineDash([0,0])
	},
	line:function(ox,oy,cx,cy){
      	this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
	    this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
		this.ctx.stroke();		
	},
	dash:function(ox,oy,cx,cy){
        this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		this.ctx.setLineDash([5,10]);
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
		this.ctx.stroke();
	},
	rectangle:function(ox,oy,cx,cy){
        this.ctx.beginPath();
	    this.ctx[this.rects](ox,oy,cx-ox,cy-oy);
	    this.ctx.closePath();    
	    this.ctx[this.style]();
	},
	circle:function(ox,oy,cx,cy){
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
   	    this.ctx.beginPath();
	    this.ctx.arc(ox,oy,r,0,Math.PI*2,false);
	    this.ctx.closePath();    
	    this.ctx[this.style]();
	},
	polygon:function(ox,oy,cx,cy){
		let ang=360*Math.PI/(this.poNum*180);
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));			
        this.ctx.beginPath();
	    this.ctx.moveTo(ox+r,oy);
	    for(let i=1;i<this.poNum;i++){
	    	this.ctx.lineTo(ox+r*Math.cos(i*ang),oy+r*Math.sin(i*ang));
	    }
	    this.ctx.closePath();    
	    this.ctx[this.style]();
	},
	star:function(ox,oy,cx,cy){
		let ang=360*Math.PI/(2*this.stNum*180);
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
		let r1=r/2;
        this.ctx.beginPath();
	    this.ctx.moveTo(ox+r,oy);
	    for(let i=1;i<2*this.stNum;i++){
		  	if(i%2){
		   		this.ctx.lineTo(ox+r1*Math.cos(i*ang),oy+r1*Math.sin(i*ang));
		   	}else{
		   		this.ctx.lineTo(ox+r*Math.cos(i*ang),oy+r*Math.sin(i*ang));
		   	}
			   	
	   }
	    this.ctx.closePath();    
	    this.ctx[this.style]();
	},
	//铅笔
	pencil:function(){
	 	this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.ctx.beginPath();
          	this.ctx.moveTo(ox,oy);
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
                if(this.history.length>0){
            	    this.ctx.putImageData(this.history[this.history.length-1],0,0);
                }
          	   
		        this.ctx.lineTo(cx,cy);
//			    this.ctx.closePath();    
			    this.ctx.stroke();
			}.bind(this)
			this.mask.onmouseup=function(){
         	    this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.mask.onmousemove=null;
                this.mask.onmouseup=null;
            }.bind(this)
		}.bind(this)
	 },
	 //橡皮擦
	erasers:function(obj,w,h){
		this.mask.onmousedown=function(e){
			obj.style.display='block';
			e.preventDefault;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				//鼠标放在橡皮中间
				let lefts=cx-w/2;
				let tops=cy-h/2;
				if(lefts<=0){
					lefts=0;
				}
				if(lefts>this.cw-w){
					lefts=this.cw-w;
				}
				if(tops<=0){
					tops=0;
				}
				if(tops>this.ch-h){
					tops=this.ch-h;
				}
				obj.style.left=`${lefts}px`;
				obj.style.top=`${tops+150}px`;
				this.ctx.clearRect(lefts,tops,w,h);
			}.bind(this)
			this.mask.onmouseup=function(){
				obj.style.display='none';
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.mask.onmousemove=null;
                this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
	//文本
	font:function(){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let divs=document.createElement('div');
			divs.style.cssText=`
			width:100px;height:30px;
			border:'1px dashed #00f';
			background:#fff;			
			position:absolute;
			left:${ox}px;top:${oy}px;
			`;
			this.mask.appendChild(divs);
			divs.contentEditable='true';
			this.mask.onmousedown=null;
			divs.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let ol=e.offsetLeft,ot=e.offsetTop;
				this.mask.onmousemove=function(e){
					let cx=e.clientX,cy=e.clientY;
					lefts=cx-ox+ol;
				    tops=cy-oy+ot;
					divs.style.left=`${lefts}`;
					divs.style.top=`${{tops}}`;
					divs.onmouseup=function(){
						this.mask.onmousemove=null;
						this.mask.onmouseup=null;
					}.bind(this)
				}.bind(this)
			}.bind(this)
			divs.onblur=function(){
				let value=divs.innerText;
				this.mask.removeChild(divs);
                this.ctx.font="20px Georgia";
				this.ctx.fillText(value,ox,oy);
				this.ctx.textAlign='center';
				this.ctx.textBaseline='middle';
				this.ctx.fontStyle='10px #000';
			}.bind(this)			
		}.bind(this)
	},
	//裁切
	clip:function(obj){
		this.mask.onmousedown=function(e){
			this.init();
			let w,h,minX,minY;
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				this.init();
				let cx=e.offsetX,cy=e.offsetY;
				w=Math.abs(ox-cx);
				h=Math.abs(oy-cy);
				minX=cx>ox?ox:cx;
				minY=cy>oy?oy:cy;
				obj.style.cssText=`
				  display:block;
				  left:${minX}px;
				  top:${minY}px;
				  width:${w}px;
				  height:${h}px;
				`;
				console.log(w)
			}.bind(this)
			this.mask.onmouseup=function(){
				this.temp=this.ctx.getImageData(minX,minY,w,h);
				this.ctx.clearRect(minX,minY,w,h);
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
				this.ctx.putImageData(this.temp,minX,minY);
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
				this.drag(minX,minY,w,h,obj);
			}.bind(this)
		}.bind(this)
	},
	drag:function(minX,minY,w,h,obj){
		this.mask.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if(ox>minX && ox<minX+w && oy>minY && oy<minY+h){
				this.mask.style.cursor='move';
			}else{
				this.mask.style.cursor='default';
				return;
			}
		}.bind(this)
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if (ox>minX && ox<minX+w && oy>minY && oy<minY+h) {
                this.mask.style.cursor="move";
            } else {
                this.mask.style.cursor="default";
                return;
            }
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=cx-ox+minX;
				let tops=cy-oy+minY;
				this.ctx.clearRect(0,0,this.cw,this.ch);
				if(this.history.length>0){
					this.ctx.putImageData(this.history[this.history.length-1],0,0);	
				}
                if(lefts<0){
                    lefts=0;
                }
                if(lefts>=this.cw-w){
                    lefts=this.cw-w;
                }

                if(tops<0){
                    tops=0;
                }
                if(tops>=this.ch-h){
                    tops=this.ch-h;
                }
				obj.style.left=`${lefts}px`;
				obj.style.top=`${tops}px`;
				minX=lefts;
                minY=tops;
                this.ctx.putImageData(this.temp,lefts,tops);
			}.bind(this)
			this.mask.onmouseup=function(){
				obj.style.display='none';
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
    //保存
    save:function (img) {
        let data=this.obj.toDataURL('image/png');
        img.src=data;
    },
    //撤销
    back:function () {
        if(this.history.length==0){
            return;
        }
        let last=this.history.pop();
        this.ctx.putImageData(last,0,0);
    },
    //新建
    new:function () {
        this.ctx.clearRect(0,0,this.width,this.height);
    },
    //反相
	reverse:function(){
		let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
		let data=imgData.data;
		for(let i=0;i<data.length;i+=4){
			data[i]=255-data[i];
			data[i+1]=255-data[i+1];
			data[i+2]=255-data[i+2];
		}
		this.ctx.putImageData(imgData,0,0)
	},
	draw:function(type){
	 	this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.clearRect(0, 0, this.cw, this.ch);
                if(this.history.length>0){
            	    this.ctx.putImageData(this.history[this.history.length-1],0,0);
                }
                this.init();
                this[type](ox,oy,cx,cy);                
			}.bind(this)
			this.mask.onmouseup=function(){
         	    
         	    this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.mask.onmousemove=null;
                this.mask.onmouseup=null;
            }.bind(this)
		}.bind(this)
	}
}