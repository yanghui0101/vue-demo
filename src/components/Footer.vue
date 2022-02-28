<template>
   <div class="footer">
        <ul>
            <li style="padding-top:30px">
                <img src="../assets/images/logo.png" alt="" width="200" class="logo">
                <p><i class="el-icon-phone-outline"></i>+62 (21) 3456 7891</p>
                <p>北京市石景山模式口22号楼</p>
                <p>EchoQuant</p>
            </li>
            <li v-for="(item,index) in list" :key="index">
                <h4>{{item.title}}</h4>
                <p v-for="(data,i) in item.pList" :key="i">{{data}}</p>
            </li>
        </ul>
        <p class="ba">©2021      EchoQuant</p>
   </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
           list:[
               {title:'产品',pList:['Mission','Career','Investors','Newsroom']},
               {title:'服务',pList:['Brokers','Landlords','Landlords','Event Planners']},
               {title:'关于我们',pList:['FAQ','Contact Us','Covid Response']},
           ]
        };
    }
};
</script>
<style scoped lang="less">
.footer{
    background: #000000;
    padding: 30px 0 20px;
    color: #fff;
    ul{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li{
            list-style-type:none;
            p{
                cursor: pointer;
            }
        }
    }
    .ba{
        text-align: center;
        padding-top: 40px;
        font-size: 16px;
    }
}
        
</style>
