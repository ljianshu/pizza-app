import Vue from 'vue'
import App from './App.vue'
import Admin from "./components/Admin"
import Home from "./components/Home"
import Login from "./components/Login"
import Menu from "./components/Menu"
import Register from "./components/Register"
import About from "./components/about/About"
import axios from "axios"
import {store} from "./store/store"

axios.defaults.baseURL="https://wd2523271475puuiue.wilddogio.com/"

//二级路由
import History from "./components/about/History"
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import OrderingGuide from "./components/about/OrderingGuide"

//三级路由
import PersonName from "./components/about/contact/PersonName"
import Phone from "./components/about/contact/Phone"


import VueRouter from "vue-router"

Vue.use(VueRouter);

let routes = [
  {
    path: "/", name: "homeLink", components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {path: "/admin", name: "adminLink", component: Admin},
  {path: "/login", name: "loginLink", component: Login},
  {path: "/menu", name: "menuLink", component: Menu},
  {path: "/register", name: "registerLink", component: Register},
  {
    path: "/about",
    name: "aboutLink",
    component: About,
    redirect: "/contact",
    children: [{path: "/history", name: "historyLink", component: History},
      {
        path: "/contact",
        name: "contactLink",
        component: Contact,
        redirect: "/contact/personName",
        children: [{path: "/contact/phone", name: "phoneLink", component: Phone},
          {path: "/contact/personName", name: "personNameLink", component: PersonName}
        ]
      },
      {path: "/about/delivery", name: "deliveryLink", component: Delivery},
      {path: "/order", name: "orderingGuideLink", component: OrderingGuide}
    ]
  },
  {path: "*", redirect: "/"}
]

let router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 50, y: 50}
    }
  }
})


// router.beforeEach((to,from,next)=>{
//   if(to.path==="/login"||to.path==="/register"){
//     next()
//   }else(alert("还未登录，请先登录"))
// })

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
