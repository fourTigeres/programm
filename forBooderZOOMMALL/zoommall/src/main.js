import Vue from 'vue'
import app from './app'
import router from './router'
import moment from "moment"
import "./common/stylus/index.styl"
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/js/rem'
import "./mock/mockServer.js"
import "../static/css/reset.css"

Vue.use(Mint)

//滑动屏
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//登陆注册
import { Field,Header,Navbar,TabItem} from 'mint-ui'
Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

// table
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

/* eslint-disable no-new */
// 注册一个全局过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
