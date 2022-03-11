import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Group from '@/views/Group'

import First from '@/views/First'
import Second from '@/views/Second'
import About from '@/views/About'



Vue.use(Router)
export default new Router({ 
  routes: [
    {
      path: '/',
      redirect: '/index'
  },{
    path: '/index', 
    component: Index, 
    name: '官网首页', 
  },
  {
     path: '/', component: First, name: '服务',
  },
  {
    path: '/group', 
    component: Group, 
    name: '集团简介', 
  },
  {
    path: '/', component: Second, name: '产品'
  },
  {
    path: '/', 
    component: About, 
    name: '联系我们', 
  },
  ]
})

// export default new Router({ 
//   routes: [{
//     path: '/',
//     component: Home,
//     name: 'Home',
//     leaf: true,//只有一个节点
//     children: [
//         { 
//           path: '/index', 
//           component: Index, 
//           name: '官网首页', 
//         }
//     ]
//   },
//   {
//     path: '/',
//     component: Home,
//     name: '服务',
//     leaf: true,
//     children: [
//         { path: '/first', component: First, name: '服务1'},
//     ]
//   },
//   {
//     path: '/',
//     component: Home,
//     name: '产品',
//     leaf: true,
//     children: [
//         { path: '/second', component: Second, name: '产品2'}
//     ]
//   },
//   {
//     path: '/',
//     component: Home,
//     name: 'Home',
//     leaf: true,//只有一个节点
//     children: [
//         { 
//           path: '/about', 
//           component: About, 
//           name: '联系我们', 
//         }
//     ]
//   },
//   ]
// })
