<template>
  <div>
    <div class="goodsWrap" ref="goodsWrap">
      <div class="goodsContent">
        <goods-swipe></goods-swipe>
        <!--进口猫粮-->
        <div class="catgoodsWrap">
          <ul class="catgoodsList">
            <li><a href="javascript:;"><img src="./goodsImg/catgoods1.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="./goodsImg/catgoods2.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="./goodsImg/catgoods3.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="./goodsImg/catgoods4.png" alt=""></a></li>
          </ul>
        </div>
        <div class="split"></div>
        <div class="speicialGoods">
          <div class="specialWords"><span>皇家猫努节</span></div>
          <a class="imgCan" href="javascript:;"><img
            src="./goodsImg/lunbo4.jpg"/></a>
        </div>
        <div class="speicialGoods">
          <div class="specialWords"><span>妙多乐</span></div>
          <a class="imgCan" href="javascript:;"><img
            src="./goodsImg/lunbo3.jpg"/></a>
        </div>
        <div class="split"></div>
        <div class="goodsContentWrap">
          <div class="goodsNavWrap" ref="goodsnavScrollref">
            <ul class="goodsNavList">
              <li> <router-link class="active" to="/goodsall">全部</router-link></li>
              <li> <router-link to="/goodsimport">进口猫粮</router-link></li>
              <li> <router-link to="/goodsChina">国产猫粮</router-link></li>
              <li> <router-link to="/goodsloose">拆零试吃</router-link></li>
              <li> <router-link to="/goodsrecipe">处方猫粮</router-link></li>
            </ul>
          </div>
          <ul class="goodsList">
            <li>
              <a class="goodsLink" href="javascript:;">
              <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
              <div class="goodsDetail">
                <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                <div class="emptyDiv"></div>
                <div class="pricegoods">
                  <span class="priceRed">￥380.00</span>
                  <span>41.66元/斤</span><br/>
                  <span>互动:0(100%好评) <span>售出：4</span></span>
                 <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                </div>
              </div>
            </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods2.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods2.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="goodsLink" href="javascript:;">
                <div class="goodsimg"><img class="flag" src="./goodsImg/america.jpg" alt=""><img src="./goodsImg/goods1.jpg" alt=""></div>
                <div class="goodsDetail">
                  <div class="goodspost"><img src="./goodsImg/gtype_1.png" alt=""><span>美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)</span></div>
                  <div class="emptyDiv"></div>
                  <div class="pricegoods">
                    <span class="priceRed">￥380.00</span>
                    <span>41.66元/斤</span><br/>
                    <span>互动:0(100%好评) <span>售出：4</span></span>
                    <a href="javascript:;"> <img class="shopcartImg" src="./goodsImg/addcart.png" alt=""></a>
                  </div>
                </div>
              </a>
            </li>
          </ul>



        </div>





        <!--以下是包裹div-->
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import goodsSwipe from "../swipeShow/goodsSwipe/goodsSwipe.vue"

  export default {
    data () {
      return {}
    },
    created(){
      this.goodsWrapSwipe()
    },
    components: {
      goodsSwipe
    },
    methods:{
      goodsWrapSwipe(){
        //注意事项：BScroll 加在最外层的容器
        //设置改变一个容器的css是要用style的
        //vue获得元素节点通过$refs

        this.$nextTick(() => {
          if (!this.scroll) { // 如果不存在才创建, 并保存
            this.scroll = new BScroll(this.$refs.goodsWrap, {
              click: true
            })

          } else {
            //刷新scroll对象
            this.scroll.refresh()
          }
          if (!this.scrollg) { // 如果不存在才创建, 并保存
            this.scrollg = new BScroll(this.$refs.goodsnavScrollref, {
              scrollX: true,
            })

          } else {
            //刷新scroll对象
            this.scrollg.refresh()
          }

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goodsWrap
    width 100%
    height (460/r)
    .goodsContent
      z-index 5
      overflow hidden
      position absolute
      width 100%
      left 0
      overflow hidden
      top (147 / r)
      .catgoodsWrap
        width 100%
        height (94/r)
        padding (10/r) 0
        .catgoodsList
          display flex
          height 100%
          width 100%
          li
            flex 1
            a
              display inline-block
              height 100%
              width 100%
              img
                height (94/r)
                width (94/r)
      .split
        background #eee
        height (10 / r)
      .speicialGoods
        height (209 / r)
        width 100%
        font-size (15 / r)
        .specialWords
          height (44 / r)
          width 100%
          span
            line-height (44 / r)
            width 100%
            margin-left (10 / r)
        .imgCan
          display inline-block
          height (165 / r)
          width 100%
          img
            height (165 / r)
            width 100%
    .goodsContentWrap
      width  100%
      .goodsNavWrap
        height (23 / r)
        line-height (23 / r)
        font-size (12 / r)
        width 100%
        padding (10/r) 0
        border-1px(#ccc)
        .goodsNavList
          display flex
          width 126%
          text-align center
          li
            flex 1
            a
              background-color #eee
              width (79/r)
              box-sizing border-box
              padding 0 (15/r)
              border-radius (5/r)
              line-height (21/r)
              display inline-block
            .active
              color #e35356
              border (1/r) solid #e35356
              background-color white
      .goodsList
        width 100%
        li
          border-1px(#ddd)
          height (126/r)
          display inline-block
          box-sizing border-box
          padding (10/r)
          .goodsLink
            display inline-block
            width 100%
            height (105/r)
            .goodsimg
              position relative
              width (100/r)
              height (100/r)
              float left
              img
                width 100%
                height 100%
              .flag
                width (25/r)
                height (25/r)
                position absolute
                left 0
                top 0
            .goodsDetail
              height 100%
              width  (240/r)
              float right
              position relative
              font-size (12/r)
              .goodspost
                width (240/r)
                height (33/r)
                img
                  width (30/r)
                  height (17/r)
                span
                  line-height (17/r)
                  vertical-align top
              .emptyDiv
                width 100%
                height (25/r)
              .pricegoods
                width 100%
                .priceRed
                  font-size (15/r)
                  color #e35356
                  font-weight bold
                  margin-right (5/r)
                span
                  line-height (17/r)
                  vertical-align top
                  &:nth-child(2)
                    text-decoration line-through
                  &:nth-child(4)
                    display inline-block
                    line-height (17/r)
                    margin-top (5/r)
                .shopcartImg
                  width (25/r)
                  height (25/r)
                  position absolute
                  right 0
                  bottom 0

</style>
