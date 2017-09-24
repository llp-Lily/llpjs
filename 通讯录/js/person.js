window.onload=function(){
    let person=[
        {'name':'韩娇','tel':'15364588607','shou':'hanjiao'},
        {'name':'卢伟','tel':'18435842563','shou':'luwei'},
        {'name':'燕剑豪','tel':'1863789234','shou':'yanjianhao'},
        {'name':'王晋娟','tel':'13567425893','shou':'wangjinjuan'},
        {'name':'李亚男','tel':'15364556314','shou':'liyanan'},
        {'name':'梁文婧','tel':'15596588607','shou':'liangwenjing'},
        {'name':'爸爸','tel':'18795874254','shou':'baba'},
        {'name':'许文淼','tel':'13597845614','shou':'xuwenmiao'},
        {'name':'杨晓娜','tel':'13857425893','shou':'yangxiaona'},
        {'name':'张鸣','tel':'13597845614','shou':'zhangming'},
        {'name':'姐姐','tel':'13557425893','shou':'jiejie'},
        {'name':'刘宇帆','tel':'15387456314','shou':'liuyufan'}
    ];
    //获取localStorage里面的数据
    function getData(){
        let data=localStorage.getItem('person')?JSON.parse(localStorage.person):false;
        if(!data){
            data=JSON.parse(localStorage.setItem('person',JSON.stringify(person)));
        }
        return data;
    }
    let data=getData();
    let dataObj={};
//  dataObj={
//  	'A':[name,tel,shou]
//  }
//搜索
    let inputs=document.querySelector('input');
    inputs.onkeyup=function(){
        let val=this.value.trim();
        let newData=data.filter(element=>{
            return element.name.includes(val)||element.tel.includes(val)||element.shou.includes(val)

        });
        link(newData);
    }
    let dls=document.querySelector('dl');
    let slide=document.querySelector('.slide');
    link(data);
    function link(datas){
        dataObj={};//筛选时清空原有的
        datas.forEach(function(element,index){
            let key=element.shou.charAt(0).toUpperCase();
            if(!dataObj[key]){
                dataObj[key]=[];
            }
            dataObj[key].push(datas[index]);
        })
        let keys=Object.keys(dataObj).sort();//该方法获取键值返回数组；
        slide.innerHTML='';//筛选时清空原有的
        dls.innerHTML='';
        //页面显示出来
        keys.forEach(element=>{
            dls.innerHTML+=`
    		        <dt>${element}</dt>
    		`;
            dataObj[element].forEach(value=>{
                dls.innerHTML+=`<dd><a href=$tel:{value.tel}>${value.name}</a></dd>`;
            });
            //右侧滑条
            slide.innerHTML+=`
    	           <li>${element}</li>`
        });
        let slideHight=slide.offsetHeight;
        slide.style.marginTop=`-${slideHight/2}px`;
        //固定
        let fix=document.querySelector('.fixchar');
        let arr=[];
        let dts=document.querySelectorAll('dt');
        dts.forEach(value=>{
            arr.push(value.offsetTop)
        })
        let header=document.querySelector('header');
        let h=header.offsetHeight+fix.offsetHeight;
        fix.innerText=dts[0].innerText;
        window.onscroll=function(){
            let st=document.documentElement.scrollTop;
            arr.forEach(function(element,index){
                if(element+dts[index].offsetHeight<st+h){
                    fix.innerText=`${dts[index].innerText}`;
                }
            })
        }

    }
}