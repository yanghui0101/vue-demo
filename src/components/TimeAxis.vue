<template>
    <div id="timeline">

	<div class="timecenter">    
	
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>1993</h3>
			<p>公司成立</p>
			<p>推出“金牛软件”国内首款财经股票软件</p>
		</div>
		
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>1997</h3>
			<p>“金牛软件”用户过5万，与新华社共同完成了一个技术时代的见证</p>
		</div>
		
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2001</h3>
			<p>发布IEEE802.11bg无线产品，全面转型企业级无线网络业务</p>
		</div>   
		
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2005</h3>
			<p>深耕高校Wi-Fi市场，为上百所大学提供无线网络服务</p>
		</div>
		
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2015</h3>
			<p>公司主打企业数字化转型的数据服务，聚焦中航油集团、首钢集团等</p>
		</div>
		
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2018</h3>
			<p>赛道弘翼公司成立</p>
			<p>发布大数据产品与行业、AI决策、系列产品</p>
		</div>  
		   
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2020</h3>
			<p>影视大数据运营公司成立，全力打造中国影视工业互联网的数据标准</p>
		</div>    
		 
		<div class="timeline-box" >
			<div class="header"><img src="./1.jpg"></div>
			<h3>2021</h3>
			<p>艾坤德成立，确立数字政府主航道战略，深耕影视、金融、司法等</p>
		</div>   


		
		<div class="timeline_div">
			<div class="f-border" style="transform: translateY(0px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="f-border" style="transform: translateY(72px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="f-border" style="transform: translateY(0px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="f-border" style="transform: translateY(72px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="f-border" style="transform: translateY(0px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="f-border" style="transform: translateY(72px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="f-border" style="transform: translateY(0px);"></div>
			<div class="" style="transform: translateY(18px);"></div>
			<div class="" style="transform: translateY(36px);"></div>
			<div class="" style="transform: translateY(54px);"></div>
			<div class="f-border" style="transform: translateY(72px);"></div>
		</div>
		
	</div>
	
</div>

</template>

<script>
export default {
    mounted () {
        this.$nextTick(() => {
		    var odiv_t=document.querySelector('.timeline_div');
            var odiv=document.querySelectorAll('.timeline_div div');
            var odiv_length=odiv.length;
            var num=0,wheel;
            var timeline_box=document.querySelectorAll('.timeline-box');
            var timelenght=timeline_box.length;
            var imgs=document.querySelectorAll('img');
            var ln = 0;  
            for(var i=0;i<odiv_length;i++)
            {
                if(i%4==0)
                {
                    odiv[i].className='f-border';
                }
                var n=parseInt( i / 4) % 2==0?num++:num--
                wheel=odiv_t.offsetHeight/5*n
                odiv[i].style.transform='translateY('+wheel+'px)';

                (function(i){
                
                    setTimeout(function(){

                        odiv[ln].classList.remove('active');
                        odiv[i].classList.add('active'); 

                        ln = i;

                        if(i==odiv_length-1)
                        {
                        setTimeout(function(){
                            odiv[i].classList.remove('active');
                        },500)
                        }
                        timeline_box[parseInt(i/4)].style.opacity= 1;  
                        timeline_box[parseInt(i/4)].style.transform='scaleX(1)';
                            

                    },150*i)

                }(i))
            }

            for(var i=0;i<timelenght;i++)
            {
                timeline_box[i].index=i;
                timeline_box[i].onmouseover=function(){
                    timeline_box[this.index].style.transform=this.index%2?'translateY(10px)':'translateY(-10px)'
                }
                timeline_box[i].onmouseout=function(){
                    timeline_box[this.index].style.transform='translateY(0)';
                }
            }
        });
    },
}
</script>

<style scoped>
h3,p{ margin: 0; padding: 0;}
body{padding: 0; margin: 0;}
h3{font-size: 18px; font-weight: normal; margin: 15px 0 10px; padding-top: 35px; text-align: center;}
p{margin-bottom: 5px; font-size: 14px; color: #999; text-align: center;}
#timeline{
    width: 1200px;
    margin: 50px auto;

}
.timecenter{
    position: relative;
    display: inline-block;
    height: 600px;
    width: 100%;
}
.timeline-box{
   width: 160px;
   height: 190px;
   box-shadow: 0 0 5px 2px rgba(135,135,135, 0.15);
   position: absolute;
   left: 0;
   right: 0;
   background-color: #FFF;
   z-index: 1;
   opacity: 0;
   transition: 0.5s; 
   transform: scaleX(0);
   padding: 0 10px;
   box-sizing: border-box;
}
.timeline-box h3{
    color: #B2302A;
    font-weight: bold;
}
.timeline-box p{
    color: #333;
}
.timeline-box:nth-child(odd){
    top: 35px;
}
.timeline-box:nth-child(even){
    bottom: 35px;
}

.timeline-box::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #FFF;
    z-index: -1;
}
.timeline-box::after{
    content: "";
    width: 15px;
    height:15px;
    position: absolute;

    left: 50%;
    background-color: #FFF;
    transform:translateX(-50%)rotate(45deg);
    box-shadow: 0 0 5px 2px rgba(135,135,135, 0.15);
    z-index: -2;

}




.timeline-box:nth-child(odd)::after{
    bottom:-7.5px;
}
.timeline-box:nth-child(even)::after{
    top:-7.5px;
}
.timeline-box:nth-child(1)
{
    left: 5px;
}
.timeline-box:nth-child(2)
{
    left: 150px;
}
.timeline-box:nth-child(3)
{
    left: 300px;
}
.timeline-box:nth-child(4)
{
    left: 445px;
}
.timeline-box:nth-child(5)
{
    left: 595px;
}
.timeline-box:nth-child(6)
{
    left: 742px;
}
.timeline-box:nth-child(7)
{
    left: 886px;
}
.timeline-box:nth-child(8)
{
    left: 1036px;
}
.header{
    width: 70px;
    height: 70px;

    position: absolute;
    left: 50%;
   
    margin-left: -35px;
   
    display: flex;
    justify-content: center;
    text-anchor: middle;
    background-color: #FFF;
    padding:10px;
    border-radius: 50%;;
    box-sizing: border-box;

}

.timeline-box:nth-child(odd) .header{
    top: -35px;
}
.timeline-box:nth-child(even) .header{
     bottom: -35px;
}
.header::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    
    border-radius: 50%;;
    box-shadow: 0 0 5px 2px rgba(135,135,135, 0.15);
    z-index: -2;
}
.header img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: 0.5s;
}


.timeline_div{
    width: 1050px; 
    height: 90px; 
    position: absolute;


    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    
    margin: auto;
    display: flex;
    justify-content: space-between;
    
}
.timeline_div div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffae12;
    border: 5px solid #f6f6f6;

}

.f-border{

    border-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);

}
.active{

   border:5px;
   border-color: #fff;
   box-shadow: 0 0 10px 3px #ffae12;
}
</style>