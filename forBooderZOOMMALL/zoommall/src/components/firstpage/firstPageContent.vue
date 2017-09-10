<template>
  <div class="contentWrapClient" ref="ContentFisrt">
    <div class="contentWrap">
      <!--轮播图-->
      <swipe-show  :swipeImgs="infos.carousel" ></swipe-show>
      <!--一元换购-->
      <div class="giftContent">
        <div class="newPersonGift">
          <a href="javascript:;">
            <img src="./firstPageImg/contentImgs/yiyuanqi.gif" alt=""/>
          </a>
        </div>
        <div class="goods">
          <ul class="goodsList">
            <li><a href="http://wap.epet.com/brandsale.html?pet_type=cat&fw=0"><img src="./firstPageImg/contentImgs/a.png"/> </a></li>
            <li><a href="http://wap.epet.com/brandsale.html?pet_type=cat&fw=0"><img src="./firstPageImg/contentImgs/b.png"/> </a></li>
            <li><a href="http://wap.epet.com/trial/?pet_type=cat&fw=0"> <img src="./firstPageImg/contentImgs/c.png"/> </a></li>
            <li><a href="https://wap.epet.com/activity/cleargoods.html?pet_type=cat&fw=0"><img src="./firstPageImg/contentImgs/d.png"/> </a></li>
            <li><a href="http://wap.epet.com/hotpacks/main.html?pet_type=cat&fw=0"><img src="./firstPageImg/contentImgs/e.png"/> </a></li>
          </ul>
        </div>
        <div class="split"></div>
      </div>
      <!--特价抢购-->
      <div class="specialGoodsWrap">
        <div class="imgSuper">
          <div>
            <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=cat&fw=0"><img class="imgSp" src="./firstPageImg/contentImgs/suprice.png"/></a>
          </div>
          <div class="countDown">
            <span>距本场结束 <span>00</span>：<span>27</span>：<span>{{timing}}</span></span>
          </div>
          <div class="more"><a href="https://wap.epet.com/surprise/Main.html?fw=0"><img src="./firstPageImg/contentImgs/more.png" alt=""></a></div>
        </div>
        <div class="goodsListWrap" ref="picWrapper" >
          <ul class="goodslist">
            <li v-for="(good,index) in infos.goods " :key="index">
              <a>
              <img :src="good.image.image" alt="">
              <div>￥{{good.sale_price}}</div>
              <span>{{good.little_price}}</span>
            </a>
            </li>

          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="split"></div>
      <!--潮流视频-->

      <div class="trend">
        <div>
          <img src="./firstPageImg/contentImgs/mo1.png" alt="">
        </div>
        <a>
          <img src="./firstPageImg/contentImgs/more.png" alt="">
        </a>
      </div>
      <div class="EchongTV">
        <div class="echongMv">
          <a>
            <video class="videoE" src="http://player.epetbar.com/b51b3fa2eecc447690060674155c4934/5910ac5ff27248059121d449ab1680ee-5287d2089db37e62345123a1be272f8b.mp4"
 controls poster="https://img1.epetbar.com/2017-08/01/10/b74020c78e97fd082f6ae2796dbea567.jpg@!water" ></video>
            <span>01:12</span>

          </a>
        </div>
        <div class="echongWord">
          <span> 一飞冲天：把太阳射下来</span>
          <span>3794</span>
        </div>
      </div>
      <div class="split"></div>
      <!--体验馆-->
      <div class="trend">
        <div>
          <img src="./firstPageImg/contentImgs/mo2.png" alt="">
        </div>
        <a>
          <img src="./firstPageImg/contentImgs/more.png" alt="">
        </a>
      </div>
      <div class="EchongTV">
        <div class="echongMv">
          <a>
            <img src="./firstPageImg/contentImgs/nali.jpg" alt="">
            <span>01:34</span>
            <audio></audio>
          </a>
        </div>
        <div class="echongWord">
          <span> 一飞冲天：把太阳射下来</span>
          <span>3794</span>
        </div>
      </div>
      <div class="split"></div>
      <!--品牌特卖-->
      <div class="trend">
        <div>
          <img src="./firstPageImg/contentImgs/mo3.png" alt="">
        </div>
      </div>
      <ul>
        <li class="speicialGoods" v-for="(ad,index) in infos.ads" :key="index">
          <div><span>{{ad.title}}</span></div>
          <a class="imgCan" href="javascript:;"><img
            :src="ad.image"/></a>
        </li>
      </ul>

      <div class="split"></div>
      <!--ta公益-->

        <div class="benefit">
          <div>
            <img src="./firstPageImg/contentImgs/tabenefit.jpg" alt="">
          </div>
          <a class="beneMore">
            <img src="./firstPageImg/contentImgs/more.png" alt="">
          </a>
        </div>
        <div class="taBenewrap">
          <div class="taBeneimg">
            <a>
              <img src="./firstPageImg/contentImgs/benefita.jpg" alt="">
            </a>
          </div>
          <div class="taBeneword">
            <span> 截止今日，TA公益已联合E宠商城和<strong style="background: white;color: red;border-radius: 5px">13</strong>家品牌</span>
            <span>累计捐赠<strong style="color: red;font-weight: bold">876,129,35</strong>元</span>
          </div>
        </div>
        <div class="sponsor">
            <div class="sponsorF"><a class="sponsorFimg"><img src="./firstPageImg/contentImgs/sponsor/sponsor.png" alt=""></a></div>
            <div>
              <div class="sponsorSwipe" ref="sponsorSwipe">
                <ul class="Sponsorlist" >
                  <li v-for="(sponsor,index) in sponsors" :key="index" ><a><img :src="sponsor.logo.image" alt=""><span>{{sponsor.donate_money_txt}}</span></a></li>
                </ul>
              </div>
            </div>
          </div>
      <!--口碑评价-->
      <div class="benefit">
        <div>
          <img src="./firstPageImg/contentImgs/koubei.png" alt="">
        </div>
        <a class="beneMore">
          <span>好评率99.64%</span>
        </a>
      </div>
      <div class="praiseWrap">
        <ul class="praiseE">
          <li  v-for="(review,key) in infos.reviews">
            <a class="praiseLink" :href="review.target.param">
              <div class="praiseImg">
                <img :src="review.main_image.image" alt="">
                <span>{{review.join_time}}</span>
              </div>
              <p><span>{{review.username}}</span><span>{{review.pet_des}}</span></p>
              <span class="detailWord">{{review.comment_content}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="split"></div>
      <!--以下是主页底部-->

        <div class="footerFirstPage" style="display: block;">
          <div class="ft">
            <span class="bt" title="触屏版">触屏版</span>
            <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
            <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
            <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
          </div>
          <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>

      <!--以下是包裹div结束标签-->
    </div>
  </div>
</template>

<script>
  import swipeShow from "../swipeShow/swipeShow.vue"
  import BScroll from 'better-scroll'
  export default {
    props:["firstPageMsg"],
    data(){
      return{
        infos:"",
        timing:"",
        sponsors:''
      }
    },

    created(){
      this.getinfo()
      this.updateContentFisrt()
    },
    components: {
      swipeShow
    },
    methods: {
      getinfo(){
        setTimeout(()=>{
          if(this.firstPageMsg){
            this.infos= this.firstPageMsg
            this.sponsors=this.firstPageMsg.sponsors.list
          }
        },1200)

        //动态时间
        var  tim =60
        setInterval(()=>{
          tim--
          tim=tim<0?60:tim
          this.timing=tim
        },1000)

      },
      updateContentFisrt(){
        //注意事项：BScroll 加在最外层的容器
        //设置改变一个容器的css是要用style的
        //vue获得元素节点通过$refs


          this.$nextTick(() => {
            if (!this.scroll) { // 如果不存在才创建, 并保存
              this.scrola = new BScroll(this.$refs.ContentFisrt, {
                click: true
              })

            } else {
              //刷新scroll对象
              this.scrola.refresh()
            }
            if (!this.scroll) { // 如果不存在才创建, 并保存
              this.scrolb = new BScroll(this.$refs.sponsorSwipe, {
                scrollX: true,
              })

            } else {
              //刷新scroll对象
              this.scrolb.refresh()
            }
            if (!this.scroll) { // 如果不存在才创建, 并保存
              this.scrolc = new BScroll(this.$refs.picWrapper, {
                scrollX: true,
              })

            } else {
              //刷新scroll对象
              this.scrolc.refresh()
            }

          })


      }
    },
    watch: {
      infos(){
        setTimeout(()=>{
          this.updateContentFisrt()
        },100)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
 .contentWrapClient
   width 100%
   height (460/r)
  .contentWrap
    overflow hidden
    position absolute
    width 100%
    left 0
    top (147 / r)
    .itemList
      height (160 / r)
      width 100%
      .list
        li
          height (160 / r)
          width 100%
          img
            height (160 / r)
            width 100%
    .giftContent
      width 100%
      .newPersonGift
      img
        height (120 / r)
        width 100%
      .goods
        line-height (90 / r)
        font-size (14 / r)
        border-1px(#eee)
        .goodsList
          display flex
          width 100%
          text-align center
          li
            flex 1
            height (90 / r)
            a
              height (90 / r)
              display block
              color rgb(77, 85, 93)
              text-align center
              img
                height (90 / r)
    .split
      background #eee
      height (10 / r)
    .specialGoodsWrap
      height (190 / r)
      width 100%
      .imgSuper
        height (40 / r)
        width 100%
        padding (10 / r) 0
        div
          float left
          .imgSp
            width (105 / r)
            height (24 / r)
        .countDown
          font-size (13 / r)
          margin 0 (20 / r)
          span
            span
              display inline-block
              border (0.5 / r) solid
              font-size (12 / r)
              width (18 / r)
              height (15 / r)
              text-align center
              vertical-align middle
              padding-top (3 / r)
        .more
          width (70 / r)
          height (41 / r)
          img
            height (45 / r)
            margin (-10 / r) 0 0 (18 / r)
      .goodsListWrap
        overflow hidden
        height (130 / r)
        width 100%
        .goodslist
          width 150%
          height (130 / r)
          li
            height (130 / r)
            font-size (12 / r)
            float left
            margin-right (10 / r)
            a
              display inline-block
              width (98 / r)
              height (130 / r)
              img
                width (84 / r)
                height (84 / r)
    .trend
      width 100%
      height (52 / r)
      padding-top (10 / r)
      position relative
      div
        position absolute
        height (52 / r)
        width (188 / r)
        left (95 / r)
        top (10 / r)
        img
          height (52 / r)
          width (188 / r)
      a
        position absolute
        right 0
        top (15 / r)
        display inline-block
        width (62 / r)
        height 100%
        img
          height (48 / r)
    .EchongTV
      height (250 / r)
      width 100%
      .echongMv
        width 100%
        height (211 / r)
        a
          position relative
          display inline-block
          height 100%
          width 100%
          .videoE
            height 100%
            width 100%
          span
            position absolute
            font-size (12 / r)
            display inline-block
            right (10 / r)
            top (10 / r)
            color white
      .echongWord
        line-height (19 / r)
        box-sizing border-box
        width 100%
        padding (10 / r)
        span
          font-size (12 / r)
          &:last-child
            float right
    .speicialGoods
      height (199 / r)
      width 100%
      font-size (15 / r)
      div
        height (44 / r)
        width 100%
        span
          line-height (44 / r)
          width 100%
          margin-left (10 / r)
      .imgCan
        display inline-block
        height (155 / r)
        width 100%
        img
          height (155 / r)
          width 100%
    .benefit
      width 100%
      height (52 / r)
      position relative
      div
        position absolute
        height (52 / r)
        width (188 / r)
        left (95 / r)
        img
          height (52 / r)
          width (188 / r)

      .beneMore
        position absolute
        top 0
        right 0
        display inline-block
        width (62 / r)
        height 100%
        img
          height (45 / r)
        span
          margin-top (15/r)
          display inline-block
          font-size (18/r)
          width (62/r)
          width: 200%  //以下4行是缩小字体
          margin-left: -50%;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);

    .taBenewrap
      position relative
      width 100%
      overflow hidden
      .taBeneimg
        height (140 / r)
        width 100%
        a
          img
            height (140 / r)
            width 100%
      .taBeneword
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        color white
        font-size (14 / r)
        span
          margin-left (50 / r)
          margin-top (30 / r)
          display block
    .sponsor
      position relative
      width 100%
      height (76/r)
      .sponsorF
        position absolute
        display inline-block
        height (46/r)
        width (45/r)
        left 0
        top 0
        z-index 2
        background-color white
        padding (10/r)
        border-right 1px solid #ddd
        .sponsorFimg
          line-height (76/r)
          display inline-block
          width (50/r)
          img
            width (50/r)
            height (50/r)
      .sponsorSwipe
          height (76/r)
          width (375/r)
          box-sizing border-box
          padding-left (55/r)
          overflow hidden
          .Sponsorlist
            height (76/r)
            width 400%
            li
              position relative
              float left
              width (80/r)
              height (66/r)
              border-right 1px solid #ddd
              img
                width (80/r)
              span
                position absolute
                left (5/r)
                bottom (10/r)
                font-size (10/r)
                display inline-block
                width (75/r)
                text-align center
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                font-size (18/r)
                width: 200%
                margin-left: -50%
                -webkit-transform: scale(0.5)
                transform: scale(0.5)
    .praiseWrap
      width 100%
      height (538/r)
      overflow hidden
      .praiseE
        width 100%
        height 100%
        li
          float left
          height (264/r)
          width (173/r)
          margin-left  (10/r)
          margin-top  (10/r)
          background-color #EEEEEE
          .praiseLink
            width 100%
            height 100%
            .praiseImg
              width (173/r)
              height (173/r)
              position relative
              img
                height (154/r)
                width (173/r)
              span
                background-color rgba(0,0,0,.3)
                display inline-block
                width 100%
                line-height  (39/r)
                text-align center
                color white
                font-size (20/r)
                width: 200%
                margin-left: -50%
                -webkit-transform: scale(0.5)
                transform: scale(0.5)
                position absolute
                bottom (8/r)
            p
              height (19/r)
              width (173/r)
              margin-top (-19/r)
              background-color #eee
              span
                font-size (12/r)
                line-height (19/r)
                vertical-align top
                &:last-child
                  padding 0 (5/r)
                  float right
                  background-color rgba(0,0,0,.2)
                  border-radius (5/r)
            .detailWord
              display inline-block
              line-height (20/r)
              width (170/r)
              height (60/r)
              color #999
              font-size (12/r)
              overflow hidden
    .footerFirstPage
      height (86/r)
      width 100%
      .ft
        margin-top (20/r)
        height (42/r)
        width 100%
        font-size (14/r)
        display flex
        span
          display inline-block
          flex 1
          line-height (42/r)
          text-align center
          &:first-child
            color red

</style>
