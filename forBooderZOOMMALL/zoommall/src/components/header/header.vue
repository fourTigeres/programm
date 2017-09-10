<template>
  <div>
    <!--头部下载App开始-->
    <!--头部图片-->
    <div class="xiazaiApp" style="display: block;">
      <div class="rela">
        <span class="clsoebtn">
          <img id="close_down_bar" src="./headerImg/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a href="https://wap.epet.com/download.html?do=market&utm_source=baidu-wap-pz&utm_type=source" style="display: block;">
            <img src="./headerImg/redPacket.png"/>
          </a>
        </div>
      </div>
    </div>
    <!--头部搜索与导航-->
    <div class="headerbox">
      <div class="main">
        <!--位置与搜索-->
        <div class="clearfix">
          <div class="epet-search">
            <div class="location">
              <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
                <span class="catordog">猫猫站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition">广东</span>
                <i class="icon"></i>
              </a>
            </div>
            <p class="search-text">
              <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="serach-ico"></span>
              </a>
            </p>
            <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
              <img src="./headerImg/mydope.png">
            </a>
          </div>
        </div>
        <!--导航-->
        <div class="tab" ref="navScrollref">
          <ul class="tab-item">
            <li> <router-link to="/index">首页</router-link></li>
            <li> <router-link to="/goods">猫粮</router-link></li>
            <li> <router-link to="/temai">特卖</router-link></li>
            <li> <router-link to="/chaoping">罐头超市</router-link></li>
            <li> <router-link to="/xinwang">潮品视频</router-link></li>
            <li> <router-link to="/xinmiao">新喵课堂</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!--头部结束-->
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    data () {
      return {}
    },
    created(){
      this.navScroll()
    },
    methods:{
      navScroll(){
      this.$nextTick(() => {

      new BScroll(this.$refs.navScrollref, {
        scrollX: true,
        click:true
      })

    })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  //      头部红包
  .xiazaiApp
    position fixed
    left 0
    top 0
    z-index 20
    width 100%
    .rela
      height (60 / r)
      width 100%
      .clsoebtn
        display inline-block
        position absolute
        left (20 / r)
        top (20 / r)
        #close_down_bar
          width (20 / r)
          height (20 / r)
      .appdowimg
        width 100%
        height (60 / r)
        img
          height (60 / r)
          width 100%

  //85-50-35
  //    头部搜索与导航
  .headerbox //整个头部容器
    width 100%
    background-color white
    font-size (14 / r)
    height (85 / r)
    position fixed
    top (60 / r)
    left 0
    z-index 20
    .main //头部容器
      .clearfix //位置 搜索包裹
        height (51 / r)
        line-height (51 / r)
        width 100%
        overflow hidden
        .epet-search
          margin (5 / r) (10 / r)
          height (41 / r)
          width (355 / r)
          .location
            line-height (41 / r)
            display inline-block
            text-align center
            float left
            a
              display inline-block
              width (95 / r)
              .icon
                display inline-block
                margin-bottom (-2 / r)
                margin-left (-3 / r)
                width 0
                height 0
                border-bottom (4/r) solid rgba(0, 0, 0, 0)
                border-top (4/r) solid
                border-left (4/r) solid rgba(0, 0, 0, 0)
                border-right (4/r) solid rgba(0, 0, 0, 0)
          .search-text //搜索
            line-height (41 / r)
            float left
            a
              input
                width (220 / r)
                height (25 / r)
                border 0
                color: #bcbcbc
                text-indent: (10 / r)
                font-size: (13/r)
                background: #e9e9e9
                outline: 0
                border-radius (5 / r)
                margin-left (5 / r)
          a
            line-height (41 / r)
            width (45 / r)
            display inline-block
            float right
            img
              margin (10 / r) (20 / r)
              width (25 / r)
              height (25 / r)
      .tab
        height (36 / r)
        line-height (36 / r)
        font-size (14 / r)
        width 100%
        border-1px(#eee)
        .tab-item
          display flex
          width 120%
          text-align center
          li
            flex 1
            a
              line-height (32/r)
              display inline-block
            .active
              color #e73f85
              border-bottom (2/r) solid #e73f85
          .green
            line-height (30 / r)
            width 50%
            display inline-block
            border-bottom (3 / r) solid #459d36

  //头部结束

</style>
