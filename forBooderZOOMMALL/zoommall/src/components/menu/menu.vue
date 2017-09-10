<template>
  <div>
    <div class="menuWrap">
      <div class="menuNav">
        <div class="menuNavsort">
          <div class="menuNavInner">
            <a  @click="getbrand(0)">分类</a>
            <a  @click="getbrand(1)">品牌</a>
          </div>
          <a class="searchIcon" href="javascript:;"><img src="./menuImgs/search-ico.png" alt=""></a>
        </div>
      </div>
      <!--为您推荐-->
      <div class="menuWrapleft">
        <div class="leftNav" ref="goodsMore">
          <ul class="leftNavlist">
            <li v-for="(sort,index) in sorts.categorys" :key="index" @click="getinfos(index)">
              <a>{{sort.name}}</a>
            </li>
          </ul>
        </div>
        <!--此处下面写分类-->
        <!--日用-->
        <div class="menuWrap2" ref="menuWrap">
          <div class="menuWrapInner" >
          <div class="menuWrapGoods" v-if="everyDaySgoods">
            <div class="menuInnderCaption">
              <span>{{everyDaySgoods.title}}</span>
            </div>
            <div class="listGoodsWrap" >
              <ul class="goodslist">
                <li v-for="(msg,index) in everyDaySgoods.list" :key="index"><a><img :src="msg.photo"
                                                                                    alt=""><span>{{msg.name}}</span></a>
                </li>

              </ul>
            </div>

          </div>
          <!--热门-->
          <div class="menuWrapGoods" v-if="hotGoods" style="top: 300px;">
            <div class="menuInnderCaption"><span>{{hotGoods.title}}</span></div>
            <div class="listGoodsWrap">
              <ul class="goodslist">
                <li v-for="(hotgood,index) in hotGoods.list" :key="index"><a><img :src="hotgood.logo"
                                                                                  alt=""><span>{{hotgood.name}}</span></a>
                </li>
                <li><a><img src="./menuImgs/n1.jpg" alt=""><span>强化免疫</span></a></li>
                <li><a><img src="./menuImgs/n2.jpg" alt=""><span>进口猫粮</span></a></li>
                <li><a><img src="./menuImgs/n3.jpg" alt=""><span>猫砂专家</span></a></li>
                <li><a><img src="./menuImgs/n4.jpg" alt=""><span>罐头适量</span></a></li>
                <li><a><img src="./menuImgs/n5.jpg" alt=""><span>眉毛华贸</span></a></li>
                <li><a><img src="./menuImgs/n6.jpg" alt=""><span>眉毛华贸</span></a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      <!--以下是容器div-->
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from "axios"

  export default {

    data () {
      return {
        sorts: {},
        everyDaySgoods: {},
        hotGoods: {}

      }
    },
    methods: {
      getinfos(index){
        let anodes = document.querySelectorAll(".leftNavlist li a")
        for(let i=0;i<anodes.length;i++){
          anodes[i].className = ""
        }
        anodes[index].className = "active"
        axios.get("/api/menu/tiantianjingxi" + (index%8 + 1))
          .then(response => {
            const result = response.data
            if (result.code === 0) {
              this.everyDaySgoods = result.data.cate_list[0]
              if (result.data.cate_list[1]) {
                this.hotGoods = result.data.cate_list[1]
              } else {
                this.hotGoods = {}
              }
            }
          })
      },
      getbrand(index){
        let anodes1 = document.querySelectorAll(".menuNavInner a")
        for(let i=0;i<anodes1.length;i++){
          anodes1[i].className = ""
        }
        anodes1[index].className = "active"
        axios.get("/api/menu/tiantianjingxi" + (index + 1))
          .then(response => {
            const result = response.data
            if (result.code === 0) {
              if(index==0){
                this.everyDaySgoods = result.data.cate_list[0]
              }else {
                this.everyDaySgoods = {}
              }

              if (result.data.cate_list[1]) {
                this.hotGoods = result.data.cate_list[1]
              } else {
                this.hotGoods = {}
              }
            }
          })
      },
      goodsMoreSwipe(){
        //注意事项：BScroll 加在最外层的容器
        //设置改变一个容器的css是要用style的
        //vue获得元素节点通过$refs
        this.$nextTick(() => {
          if (!this.scroll) { // 如果不存在才创建, 并保存
            this.scroll = new BScroll(this.$refs.goodsMore, {
              click: true
            })

          } else {
            //刷新scroll对象
            this.scroll.refresh()
          }
          if (!this.scroll1) { // 如果不存在才创建, 并保存

            this.scroll1 = new BScroll(this.$refs.menuWrap, {
              click: true
            })

          } else {
            //刷新scroll对象
            this.scroll1.refresh()
          }
        })
      }
    },
    created () {
      this.goodsMoreSwipe()
      //分类
      axios.get("/api/menu/sorts")
        .then(response => {
          setTimeout(function () {
            let anodes = document.querySelectorAll(".leftNavlist li a")
            anodes[0].className="active"
            let anodes1 = document.querySelectorAll(".menuNavInner a")
            anodes1[0].className="active"
          },20)

          const result = response.data
          if (result.code === 0) {
            this.sorts = result.data

          }
        })
      axios.get("/api/menu/tiantianjingxi1")
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            if (result.code === 0) {
              this.everyDaySgoods = result.data.cate_list[0]
              this.hotGoods = result.data.cate_list[1]

            }

          }
        })
    },
    watch: {
      sorts(){
        this.goodsMoreSwipe()
      },
      everyDaySgoods(){
        this.goodsMoreSwipe()
      },
      hotGoods(){
        this.goodsMoreSwipe()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .menuWrap
    z-index 25
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background-color #eee
    .menuNav
      z-index 30
      height (40 / r)
      width 100%
      text-align center
      font-size (13 / r)
      position fixed
      left 0
      top 0
      background-color white
      border-1px(#ccc)
      box-shadow 0 (1 / r) (2 / r) #eee
      .menuNavInner
        line-height (40 / r)
        width (100 / r)
        margin-left (120 / r)
        a
          line-height (34 / r)
          display inline-block
          &:nth-child(1)
            margin-right (20 / r)
        .active
          color #ed4044
          border-bottom (3 / r) solid #ed4044
      .searchIcon
        height (14 / r)
        width (14 / r)
        position absolute
        right (20 / r)
        top (15 / r)
        img
          height (14 / r)
          width (14 / r)
    .menuWrapleft
      width 100%
      height 100%
      position absolute
      left 0
      top (40 / r)
      .leftNav
        width (70 / r)
        height (500 / r)
        font-size (13 / r)
        .leftNavlist
          overflow hidden
          width (70 / r)
          li
            width (70 / r)
            height (50 / r)
            background-color white
            border-1px(#f3f4f5)
            a
              line-height (50 / r)
              display inline-block
              width 100%
              text-align center
            .active
              color #ed4044
              background-color #f3f4f5
    .menuWrap2
      position absolute
      right 0
      top (5 / r)
      width (300/r)
      height (275 / r)
      .menuWrapInner
        width 100%
        overflow hidden
        display inline-block
        background-color white
        .menuWrapGoods
          width (300 / r)
          font-size (13 / r)
          background-color white
          .menuInnderCaption
            display inline-block
            height (19 / r)
            width (290 / r)
            margin-left (5 / r)
            border-1px(#ccc)
            color #6B6B6B
          .listGoodsWrap
            background-color white
            width (300 / r)
            .goodslist
              background-color white
              margin-left (3 / r)
              font-size (12 / r)
              a
                width (87 / r)
                height (117 / r)
                display inline-block
                float left
                text-align center
                margin (6 / r)
                img
                  width (87 / r)
                  height (87 / r)
                  margin-bottom (10 / r)

</style>
