<template>
  <div>
    <div class="regloginWrap">
      <div class="regloginContent">
        <div class="regloginContent">
          <mt-header class="headerLogin" title="品牌特卖">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
          </mt-header>
          <div class="logoImg"><img src="./logo.png" alt=""></div>
        </div>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .regloginWrap
    position absolute
    z-index 60
    left 0
    top 0
    width 100%
    height 100%
    overflow hidden
    background-color lightgoldenrodyellow
    .regloginContent
      height (178/r)
      width 100%
      background url("./registorImg.png") no-repeat
      background-size 100% 100%
      position relative
      .headerLogin
        font-size (16/r)
        background-color rgba(0,0,0,0)
        .registorIcon
          position absolute
          right (10/r)
      .logoImg
        height (84/r)
        width 100%
        text-align center
        margin-top (20/r)
        img
          width (75/r)
          height (48/r)
    h1
      margin (10/r) auto
      margin-top (15/r)
      display block
      height (30/r)
      border-radius (15/r)
      width (300/r)
      background-color lightblue
      line-height (30/r)
      &:nth-child(2)
        font-size (18/r)
        margin-top (0/r)
        background-color rgba(0,0,0,0)
      &:nth-child(4)
        background-color orange
      &:nth-child(6)
        background-color yellow
      &:nth-child(8)
        background-color green
      &:nth-child(10)
        background-color yellowgreen
      &:nth-child(12)
        background-color blue

</style>
