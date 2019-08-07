import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Detail from './components/Detail'
import Edit from './components/Edit'
import axios from "axios"


Vue.config.productionTip = false;

Vue.use(VueRouter);
//设置路由
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customer/detail/:id",component:Detail},
    {path:"/customer/Edit/:id",component:Edit}
  ]
});

//全局配置axios
axios.defaults.baseURL = "http://localhost:3000";


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
