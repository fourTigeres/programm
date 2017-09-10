<template>
    <div >
      <div class="swipe-wrapper">
        <mt-swipe :auto="2000" ref="swipeWrapper">
          <mt-swipe-item class="swip-item-1 item"><a><img src="./lunbo1.jpg"/></a></mt-swipe-item>
          <mt-swipe-item class="swip-item-1 item"><a><img src="./lunbo2.jpg"/></a></mt-swipe-item>
          <mt-swipe-item class="swip-item-1 item"><a><img src="./lunbo3.jpg"/></a></mt-swipe-item>

        </mt-swipe>
        <button class="prev-button flex-item" @click="prev"><span><</span></button>
        <button class="next-button flex-item" @click="next"> <span>> </span></button>
      </div>

    </div>

</template>

<script>

  export default {
    data () {
      return {}
    },
    methods: {
      prev: function () {
        this.$refs.swipeWrapper.prev();
      },
      next: function () {
        this.$refs.swipeWrapper.next();
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"

  .swipe-wrapper
    height (160 / r)
    width 100%
    position relative
    a
      img
        height (160 / r)
        width 100%
    .flex-item
      position absolute
      background-color rgba(0,0,0,.3)
      font-size (30/r)
      width (30/r)
      height (30/r)
      border-radius 50%
      line-height (30/r)
      text-align center
      border none
      span
        display inline-block
        line-height (30/r)
        width 100%
        color #f1f1f1
    .prev-button
      left (20/r)
      top (65/r)
      outline none
    .next-button
      right (20/r)
      top (65/r)
      outline none
</style>
