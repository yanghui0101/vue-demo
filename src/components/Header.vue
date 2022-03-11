<template>
   <div class="header-box">
    <img src="../assets/images/logo.png" alt="" width="220" height="45" class="logo">
    <div>
      <el-menu
        :default-active="$route.path"
        router unique-opened
        class="el-menu-vertical-demo"
        mode="horizontal">
        <template >
          <el-menu-item :index="item.path" :key="index" v-for="(item, index) in $router.options.routes">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
            <!--二级菜单-->
            <!-- <template v-if="!item.leaf" >
                <el-submenu :index="index+''">
                  <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item :index="child.path" :key="index+i" v-for="(child, i) in item.children">
                      {{child.name}}
                    </el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
            </template> -->

            <!--一级菜单-->
            <!-- <template v-else>
                <el-menu-item :index="child.path" :key="index+e+1" v-for="(child, e) in item.children">
                  <i :class="child.iconCls"></i>
                  <span slot="title">{{child.name}}</span>
                </el-menu-item>
            </template> -->
        </template>
      </el-menu>
      <!-- <a href="" class="Blog">Blog</a> -->
    </div>
  </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            activeIndex: '0',
        };
    }
};
</script>
<style scoped lang="less">
 .header-box{
        position: absolute;
        z-index: 1;
        display: flex;
        left: 0;
        top: 30px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding:0 70px;
        box-sizing: border-box;
        align-items: center;
        .Blog{
          display: inline-block;
          width: 80px;
          height: 32px;
          background: #FFFFFF;
          border-radius: 5px;
          color: #334756;
          line-height: 32px;
          font-size: 12px;
          text-align: center;
          text-decoration:none;
          position: absolute;
          right: 70px;
          top: 15px;
        }
    }
</style>
<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom: 0;
    background: none;
}
.el-menu--horizontal>.el-menu-item{
  color: #fff;
  margin-right: 30px;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none;
  color: #fff;
  background: rgba(255, 255, 255, .4);
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background: rgba(255, 255, 255, .4);
  color:  #fff;
  border-bottom: none;
}
</style>
