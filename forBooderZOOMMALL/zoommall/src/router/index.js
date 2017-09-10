import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPageContent from '../components/firstpage/firstPageContent.vue'
import menu from '../components/menu/menu.vue'
import reglogin from '../components/reglogin/reglogin.vue'
import shoping from '../components/shoping/shoping.vue'
import goods from '../components/goods/goods.vue'
import speciaseller from '../components/specialseller/seller.vue'
import guantousuper from '../components/guantousuper/guantousuper.vue'
import chaopingMv from '../components/chaopingshiping/chaopingshiping.vue'
import loginsuccess from '../components/loginsuccess/loginsuccess.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  mode:"history",//去掉#
  routes: [
    {
      path: '/index',
      component: firstPageContent
    },
    {
      path: '/menu',
      component: menu
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/reglogin',
      component: reglogin
    },
    {
      path: '/shoping',
      component: shoping
    },
    {
      path: '/reglogin',
      component: reglogin
    },
    {
      path: '/temai',
      component: speciaseller
    },
    {
      path: '/loginsuccess/:userId',
      component: loginsuccess
    },
    {
      path: '/chaoping',
      component: guantousuper
    },
    {
      path: '/xinwang',
      component: chaopingMv
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
