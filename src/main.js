import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vue 路由器 地址
//先安装vue-router 插件 再导入
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import Book from './components/Book.vue'
import Work from './components/Work.vue'
import Student from './components/Student.vue'
import CNNode from './components/CNNode.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {
     path:'/student',
     component:Student 
  },
  {
    path:'/book',
    component:Book 
  },
  {
    path:'/main',
    component:Main 
  },
  {
    path:'/work',
    component:Work 
  },
  {
    path:'/cnnode',
    component:CNNode 
  }
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
