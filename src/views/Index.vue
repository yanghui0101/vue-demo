<template>
    <div class="index-box" >
        <Header></Header>
        <div class="banner-text-box">
            <!-- <p class="p1">行业大数据和人工智能</p>
            <p class="p1 p2"> 解决方案提供商 </p>  -->
            <div class="banner-content">
                <img src="../assets/images/1-2.gif" alt="" width="500">
                <div class="btn-box wow fadeInDown">
                    <a href="#" class="hbtn shadow-drop-2-center">查 &nbsp; 看</a>
                    <a href="#" class="hbtn">联系我们</a>
                </div>        
                <p class="p3">由全球一流的工程师、科学家及行业专家组成<br/>
                    致力于用大数据AI技术解决复杂场景的行业痛点，构建更安全、更智慧、更诚信的美好社会
                </p>
            </div>
        </div>
        <div class="cp-box" style="padding-bottom:0px">
            <div class="banner-bottom-box" >
                <div class="banner-bottom-item">
                    <img src="../assets/images/icon1.png" alt="">
                    <div>
                        <h5>影视</h5>
                        <p>致力于通过大数据、人工智能、知识图谱等信息技术与影视产业的深度融合，为影视产业提供创意、咨询、制作、金融、宣发、人才等全方位、全生产流程服务。</p>
                    </div>
                </div>
                <div class="banner-bottom-item">
                    <img src="../assets/images/icon2.png" alt="" style="width:55px">
                    <div>
                        <h5>金融</h5>
                        <p>打造知识图谱平台：打造一个数据源、展示效果、布局方式、挖掘分析都是可以配置化集成的一站式知识图谱平台、挖掘分析都是可以配置化集成的一站式知识图谱平台。</p>
                    </div>
                </div>
                <div class="banner-bottom-item">
                    <img src="../assets/images/icon3.png" alt="">
                    <div>
                        <h5>司法</h5>
                        <p>深入贯彻“深化智能化建设”的指示要求，建设法院数据汇聚存储，为业务提供知识化、智能化的服务支撑和保障，支撑全面提升全国智慧法院建设水平，从而有效提升工作水平和工作效率。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cp-box p-b-50" >
            <div class="cp-top">
                <img src="../assets/images/cpTitle.png" alt="" width="223">
                <a href="">更多 <i class="el-icon-arrow-right" style="padding-left:10px"></i></a>
            </div>
            <div class="cp-bottom-box">
                <div class="cp-bottom-item">
                    <img src="../assets/images/cp1.png"/>
                    <p class="text1">DSS物联网数据传输平台 </p>
                </div>
                <div class="cp-bottom-item">
                    <img src="../assets/images/cp2.png"/>
                    <p class="text1">大数据平台 </p>
                </div>
                <div class="cp-bottom-item">
                    <img src="../assets/images/cp3.png"/>
                    <p class="text1">技术体系 </p>
                </div>
                <div class="cp-bottom-item">
                    <img src="../assets/images/cp4.png"/>
                    <p class="text1">产品体系 </p>
                </div>
            </div>
        </div>
        <div class="js-box p-b-50">
            <div class="cp-top">
                <img src="../assets/images/hxTitle.png" alt="" width="450">
                <a href="">更多<i class="el-icon-arrow-right" style="padding-left:10px"></i></a>
            </div>
            <div class="js-content">
                <ul>
                    <li v-for="item in jsList" :key="item.id" :class="{'active':isActive==item.id}" @click="jsFn(item)">{{item.title}}</li>
                </ul>
                <div class="js-text-box">
                    <img :src="jsUrl" alt="">
                   <div>
                       <h4>{{jsTitle}}</h4>
                        <p>{{jsText}}</p>
                   </div>
                </div>
            </div>
        </div>
          <div class="cp-box">
            <div class="cp-top">     
                <img src="../assets/images/ptTitle.png" alt="" width="331">
                <a href="">更多<i class="el-icon-arrow-right" style="padding-left:10px"></i></a>
            </div>
           <!-- 轮播 start -->
            <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide v-for="item in sliderList" :key="item.id" >
                    <div class="swiper-item">
                        <img :src="item.img" />
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- 轮播 end -->
        </div>

        <div>
            <div class="cp-top">
                <img src="../assets/images/zxTitle.png" alt="" width="261">
                <a href="">更多<i class="el-icon-arrow-right" style="padding-left:10px"></i></a>
            </div>
            <div class="zx-box">
                <img src="../assets/images/xw.png" alt="" class="wow pulse">
                <div class="wow bounceInUp">
                    <h3 ><a href="http://ah.anhuinews.com/chz/xqyq/nq/202202/t20220223_5826351.html" target="_blank">212项技术落地应用 “黑科技”闪耀冬奥会</a></h3>
                    <p>2022年北京冬奥会上，奥运史上首次机器人水下火炬接力、国家速滑馆“冰丝带”零碳制冰、主媒体中心智慧餐厅机器人烹饪送餐“一条龙”……冰雪之约也是科技之约，这背后到底有着怎样的故事？</p>
                    <p>据2月16日举行的科技冬奥有关情况专场新闻发布会显示，由科技部组织实施的“科技冬奥”专项共安排部署80个科研项目，共有212项技术在北京冬奥会上落地应用，为实现北京冬奥会的“简约、安全、精彩”提供有力支撑。</p>
                    <button>查看</button>
                </div>       
            </div>
        </div>

        <div class="cp-box p-b-50">
            <div class="cp-top">
                <!-- <h3>生态伙伴 <p>Cooperative Partner</p></h3> -->
                <img src="../assets/images/hbTitle.png" alt="" width="406">
            </div>
            <div class="hb-bottom-box">
                 <img :src="item" alt="" v-for="item in imgList" :key="item.id" >     
            </div>
        </div>

        <div class="map-box">
            <img src="../assets/images/map.png" alt="">
        </div>

        <Footer></Footer>

        <Login v-if="isLogin" @closeLogin='closeLogin'></Login>
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import {WOW} from 'wowjs'
import Login from './Login.vue'
export default {
    name: "Index",
    components: {
        Header,
        swiper,
        swiperSlide,
        Footer,
        Login
    },
    data() {
        return {
            isLogin:false,
            // 轮播图的选项
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                },
            },
            sliderList: [
                {
                    id: "1",
                    img: require("../assets/images/rw1.png"),
                },
                {
                    id: "2",
                    img: require("../assets/images/rw2.png"),
                },
                {
                    id: "4",
                    img: require("../assets/images/rw4.png"),
                },
                {
                    id: "5",
                    img: require("../assets/images/rw5.png"),
                },
                {
                    id: "6",
                    img: require("../assets/images/rw6.png"),
                },
            ],
            isActive:'1',
            jsTitle: '实时数联',
            jsText:'通过实时数联平台，搭建全国范围的物理分散逻辑集中的数联网络。',
            jsUrl:require("../assets/images/pic1.png"),
            jsList:[
                {
                    id: "1",
                    title: '实时数联',
                    text:'通过实时数联平台，搭建全国范围的物理分散逻辑集中的数联网络。',
                    imgUrl:require("../assets/images/pic1.png"),
                },
                {
                    id: "2",
                    title: '数据协同开发',
                    text:'数据建模、数据集成、数据开发、任务测试和任务上线的全流程的DataOps开发方式，提升在线协同开发效率和开发规范。 ',
                    imgUrl:require("../assets/images/pic2.png"),
            },
                {
                    id: "3",
                    title: '数字资产管理',
                    text:'数字化企业的部门众多，员工基数大，内容数字资产更加庞杂。标签化、权限化管理后的内容资产，能降低员工的内容工作时间成本，提升协作效率。',
                    imgUrl:require("../assets/images/pic3.png"),
                },
            ],
            imgList:[
                require("../assets/images/Group 60.png"),
                require("../assets/images/Group 61.png"),
                require("../assets/images/Group 62.png"),
                require("../assets/images/Group 63.png"),
                require("../assets/images/Group 64.png"),
                require("../assets/images/Group 65.png"),
                require("../assets/images/Group 66.png"),
                require("../assets/images/Group 67.png"),
                require("../assets/images/Group 68.png"),
                require("../assets/images/Group 70.png"),
                require("../assets/images/Group 71.png"),
                require("../assets/images/Group 72.png"),
                require("../assets/images/Group 73.png"),
                require("../assets/images/Group 74.png"),
                require("../assets/images/Group 75.png"),
                require("../assets/images/Group 76.png"),
                require("../assets/images/Group 77.png"),
                require("../assets/images/Group 78.png"),
                require("../assets/images/Group 79.png"),
                require("../assets/images/Group 80.png"),
                require("../assets/images/Group 81.png"),
                require("../assets/images/Group 82.png"),
                require("../assets/images/Group 83.png"),
                require("../assets/images/Group 84.png"),
            ]
        };
    },
    mounted () {
        if(!localStorage.getItem('user')){
            this.isLogin = true;
            document.body.style.overflow = 'hidden'
        }
        this.$nextTick(() => {
		    var wow = new WOW({
				boxClass: 'wow', ///动画元件css类（默认为wow）
				animateClass: 'animated', //动画css类（默认为animated） 
				offset: 0, //到元素距离触发动画（当默认为0） 
				mobile: true, //在移动设备上触发动画（默认为true） 
				live: true //对异步加载的内容进行操作（默认为true）
			})
            wow.init()
        });
    },
    methods: {
        jsFn(item){
            this.isActive = item.id;
            this.jsTitle = item.title;
            this.jsText = item.text;
            this.jsUrl = item.imgUrl;
        },
        closeLogin(flag){
            this.isLogin = flag
        }
    },
};
</script>
<style scoped lang="less">
@keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes typing {
            from { width: 0 }
        }
@keyframes caret {
    50% { border-right-color: #000; }
}
.banner-text-box{
    background: url('../assets/images/banner.jpg')  no-repeat;
    background-size: cover;
    width: 100%;   
    height: calc(100vh);
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .p1{
        font-weight: bold;
        font-size: 40px;
        line-height:1.5;
        letter-spacing: 5px;
        // text-transform: capitalize;
	    // -webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    //     animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            // width: 100%;
            // white-space: nowrap;
            // overflow: hidden;
            // animation: typing 5s steps(15), 
            //            caret .5s steps(1) 10; 
            // border-right: 1px solid transparent;
   }
    .p2{
        color: #FF4C29;
        position: relative;
        width: 315px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 5s steps(7), 
                    caret .5s steps(1) 5; 
        border-right: 1px solid transparent;
    }
    .p3{
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
        line-height: 1.7;
        -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }
    .btn-box{
        display: flex;
        justify-content: center;
        padding:50px 0 60px;
       a{
            &:hover{
                -webkit-animation: shake-bottom 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
                        animation: shake-bottom 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
            }
       }
    }   
}
.banner-bottom-box{
    width: 1200px;
    margin: -110px auto 0;
    height: 180px;
    background: #fff;
    box-shadow: 8px -8px 16px rgba(102, 117, 128, 0.1);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: all 0.8s;
    &:hover{
        box-shadow: 0 0 20px rgba(102, 117, 128, 0.1);
    }
    .banner-bottom-item{
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: center;
        img{
            width: 60px;
            padding-right: 20px;
        }
        div{
            h5{
                color: #334756;
                font-size: 14px;
                height: 28px;
            }
            p{
                color: #6F7B84;
                font-size: 12px;
            }
        }
    }
}
.cp-box{
    background: #f6f6f6;
    padding:20px 0;
}
.p-b-50{
    padding-bottom: 50px;
}
.cp-top{
    width: 1200px;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    p{
      font-size: 16px;  
    }
    a{
        text-decoration:none;
        color: #086DE0;
        font-size: 14px;
    }
}
.cp-bottom-box{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .cp-bottom-item{
        width: 23%;
        transition: all 0.8s;
        &:hover{
            transform: scale(1.1);
            .text1{
                background: #FF4C29;
            }
        }
        img{
            width: 100%;
        }
        .text1{
            left: 0px;
            bottom: 0;
            background: #2C394B;
            font-size: 16px;
            color: #fff;
            line-height: 50px;
            text-align: left;
            padding-left: 15px;
            margin-top:-6px;
            transition: all 0.8s;
            cursor: pointer;
        }
    }
}
.swiper-box{
    width: 1200px;
    margin: 0 auto;
    .swiper-item{
        position: relative;
        height: 236px;
        box-sizing: border-box;
        cursor: pointer;  
        transition: all 0.8s;
        &:hover{
            transform: scale(1.1);        
        }
        img{
            width: 100%;
        } 
    }
}
.js-top{
    width: 1200px;
    margin: 40px auto;
    text-align: left;
    font-size: 24px;
    p{
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
}
.js-content{
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    ul{      
        li{
            font-size: 24px;
            margin-bottom: 24px;
            list-style-type:none;
            padding: 14px 24px;
            cursor: pointer;
            text-align: center;
            transition: all 0.8s;
        }
        .active{
            background: #FF4C29;
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            color: #fff;
        }
    }
    .js-text-box{
        position: relative;
        transition: all 0.8s;
        div{
            position: absolute;
            top:-20px;
            left:60px;
            background: #fff;
            padding:15px 15px 30px;
            width: 50%;
            box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35);
            h4{
                padding-bottom: 15px;
            }
        }
    }
}
.zx-box{
    display: flex;
    width: 1200px;
    margin: 0 auto 50px;
    height: 500px;
    img{
        padding-right: 70px;
    }
    div{
        padding-right: 30px;
        h3{
            font-size: 34px;
            padding-bottom: 60px;
            a{
                color: #000;
                transition: all 0.8s;
                text-decoration:none;
                 &:hover{              
                    text-decoration:underline;       
                }
            }
        }
        p{
            font-size: 16px;
            color: #666;
            line-height: 2;
            padding-bottom: 60px;
        }
        button{
            border: 0;
            width: 120px;
            height: 40px;
            background: #334756;
            border-radius: 5px;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            &:hover{
                -webkit-animation: shake-bottom 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
                        animation: shake-bottom 1.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
            }
        }
    }
}
.hb-bottom-box{
    width: 1200px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img{
        width: 15%;
        transition: all 0.8s;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
}
.map-box{
    width: 100%;
    overflow: hidden;
    img{
        width: 100%;
    }    
}
</style>
<style  scoped>
*{
    margin: 0;
    padding: 0;
}
.el-carousel__item.is-animating{
    display: flex;
}
.hbtn {
  display: inline-block;
  width: 180px;
  line-height: 48px;
  text-align: center;
  color: #2C394B;
  font-size: 14px;
  background: #fff;
    text-decoration:none;
}

.shadow-drop-2-center {
    background: #FF4C29;
    color: #fff;
    margin-right: 100px;
}
   
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    width: 100%!important;
}
</style>