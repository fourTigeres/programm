<template>
  <div>
    <div>
    <e-header></e-header>
      <!--导航-->
      <div class="tabee" ref="navScrollref">
        <ul class="tab-itemee">
          <li> <router-link to="/index">首页</router-link></li>
          <li> <router-link to="/goods">猫粮</router-link></li>
          <li> <router-link to="/temai">特卖</router-link></li>
          <li> <router-link to="/chaoping">罐头超市</router-link></li>
          <li> <router-link to="/xinwang">潮品视频</router-link></li>
        </ul>
      </div>
    <!--内容区开始-->
    <router-view :first-page-msg="firstPageMsg"></router-view>
    <!--内容区结束-->
    <e-footer></e-footer>
  </div>
  </div>
</template>
<script type="text/javascript" src="./common/js/rem.js"></script>
<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import axios from "axios"

  export default {
    data(){
      return {
        firstPageMsg: {}

      }
    }, created () {
      axios.get('/api/firstPage')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            this.firstPageMsg = result.data
          }
        })
//      this.navScroll()
    },
//    methods:{
//      navScroll(){
//        this.$nextTick(() => {
//          new BScroll(this.$refs.navScrollref, {
//            scrollX: true,
//            click:true
//          })
//
//        })
//      }
//    },
    //映射组件 路由组件 <router-link to="/seller">商家</router-link>
    // <router-view :seller="seller"></router-view>
    components: {
      'e-footer': footer,
      'e-header': header
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
        .tabee
          background-color white
          height (37 / r)
          line-height (36 / r)
          font-size (14 / r)
          width 100%
          position fixed
          top (110 / r)
          left 0
          z-index 20
          border-1px(#eee)
          .tab-itemee
            display flex
            width 100%
            text-align center
            li
              flex 1
              a
                line-height (32/r)
                display inline-block
              .active
                color #e73f85
                border-bottom (2/r) solid #e73f85

</style>


