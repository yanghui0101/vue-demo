<template>
   <div class="group-box" >
        <Header></Header>
         <div class="banner-text-box"></div>
         <div style="background:#fff">
             <div class="text-box">
                <img src="../assets/images/group-pic1.jpg" alt="" width="50%" class="wow rollIn" data-wow-duration="2s">
                <p  class=" wow swing " data-wow-duration="2s">
                    赛施科技集团（原新达网络）创建于1993年，早期由新华社控股。公司创始人及团队均来自清华大学、北京理工大学、北京信息工程学院等。
                    经过20多年的行业探索与技术积累，公司目前业务聚焦于产业数字化建设，
                    助力产业“数”治能力提升和产业智慧化升级；我们提供从软件研发、
                    系统集成到运营服务的完整业务构建形成以关键业务平台、大数据平台、
                    物联网平台为核心的软件件技术服务能力，以及对关键信息基础设施，
                    如：云计算、信息网络、信息安全、物联网设备、IDC等为主的规划设计、建设及运维能力。
                </p>
            </div>
            <div class="jj wow flipInX " data-wow-duration="2s">
                艾坤德（北京）科技有限公司隶属于赛施科技，作为一家行业大数据和人工智能解决方案提供商。
                由全球一流的工程师、科学家及行业专家组成，致力于用大数据AI技术解决复杂场景的行业痛点，构建更安全、更智慧、更诚信的美好社会。
                今天，通过不断打磨多源异构数据融合引擎及自主研发的大数据应用系统、数据治理平台、机器学习平台，艾坤德为影视、金融、司法等领域的客户提供具体场景的大数据解决方案。
                随着AI+垂直领域的融合不断加深，艾坤德科技借助知识图谱、机器学习、数据挖掘等AI技术，结合标杆客户的实战应用，推动影视工业化、金融大数据、智慧法院，努力成为“更懂行业”的数字化转型服务提供商，加速政府和企业数据价值的全面提升。
            </div>
         </div>
        <div class="fz-box">
            <div class="cp-top">
                <img src="../assets/images/fzsTitle.png" alt="" width="406">
            </div>
            <TimeAxis v-if="isShow"></TimeAxis>
        </div>
        <div class="jg-box wow bounceInRight" data-wow-duration="2s">
            <div class="cp-top">
                <img src="../assets/images/jgTitle.png" alt="" width="406">
            </div>
            <img src="../assets/images/jg.jpg" alt="" class="jp">
        </div>
        <Footer></Footer>
</div>
</template>
  <script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TimeAxis from '@/components/TimeAxis'
import {WOW} from 'wowjs'
export default {
    components: {
        Header,
        TimeAxis,
        Footer
    },
  data() {
    return {
        isShow:false
    };
  },
   mounted () {
      window.addEventListener('scroll', this.scroll)

        this.$nextTick(() => {
		    var wow = new WOW({
				boxClass: 'wow', ///动画元件css类（默认为wow）
				animateClass: 'animated', //动画css类（默认为animated） 
				offset: 200, //到元素距离触发动画（当默认为0） 
				mobile: true, //在移动设备上触发动画（默认为true） 
				live: true //对异步加载的内容进行操作（默认为true）
			})
            wow.init()
        });
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
        let h = window.screen.availHeight/2
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > h) {
            this.isShow = true;
        }
    }
  }
};
</script>

<style scoped lang="less">
.banner-text-box{
    background: url('../assets/images/banner2.jpeg')  no-repeat;
    background-size: 100%  100%;
    width: 100%;   
    height: calc(80vh);
}
.text-box{
    width: 1200px;
    margin: 50px auto 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-right: 40px;
    }
    p{
        line-height: 4;
    }
}
.jj{
    width: 1200px;
    margin: 0 auto;
    line-height: 2.5;
}
.fz-box{
    background: #f6f6f6;
    padding: 50px 0;
    margin-top: 50px;
}
.cp-top{
    width: 1200px;
    margin: 0 auto;
}
.jg-box{
    padding: 50px 0;
    .jp{
        display: block;
        margin: 20px auto;
    }
}
</style>