<template>
  <div>
    <div class="footerNav">
      <div class="footerNav-item">
        <router-link class="linkclass" to="/index" ></router-link>
         <router-link class="linkclass" to="/menu" ></router-link>
         <router-link class="linkclass" to="/shoping" ></router-link>
        <router-link class="linkclass" ref="link" :to="`/${isshow}`" ><span @click="loginsucc()"></span></router-link>
      </div>
    </div>
    <div class="dogImg"><a href="javascript:;"></a></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isshow:"",
      }
    },
    created(){
      this.loginsucc()
    },
    methods:{
      loginsucc(){

        let {username} = JSON.parse(localStorage.getItem("currentId") || "{}")
        if(username){
          this.isshow= "loginsuccess/"+username
//          this.$router.replace({ path: `/loginsuccess/123456`})
        }else {
          this.isshow= "reglogin"
//          this.$router.replace({ path: "/reglogin"})
        }
      }
    },
    watch:{

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

    .footerNav
      background-color red
      position fixed !important
      background-color white
      left 0
      bottom 0
      z-index 50
      height (55 / r)
      width 100%
      border-right 1px solid white
      border-1px(#eee)
      border-1px-bottom(#eee)
      .footerNav-item
        display flex
        width 100%
        text-align center
        background-color white
        .linkclass
          flex 1
          height (55/r)
          display inline-block
          background-repeat no-repeat
          width 100%
          background-size (48/r) (45/r)
          background-position (18/r) (5/r)
          &:nth-child(1)
            background-image  url(./main_tab_1.png)
            &.active
              background-image url(./main_cattab_1_sel.png)
          &:nth-child(2)
            background-image url(./main_tab_2.png)
            &.active
              background-image url(./main_cattab_2_sel.png)
          &:nth-child(3)
            background-image url(./main_tab_3.png)
          &:nth-child(4)
            background-image url(./main_tab_4.png)
            span
              display inline-block
              width 100%
              height 100%
    .dogImg
      position fixed
      z-index 5
      bottom (80/r)
      right 0
      width (41/r)
      height (46/r)
      background-image  url("./gocat.png")
      background-position (-2/r) 0
      background-repeat no-repeat
      background-size (86/r) (46/r)
      animation 3s dogmove steps(2) infinite
    @keyframes dogmove
      0%
        background-position (-43/r) 0
      100%
        background-position (43/r) 0
      a
        width (41/r)
        height (46/r)

  /*./main_cattab_1_sel.png*/
  /*./main_tab_2.png*/
  /*./main_tab_3.png*/
  /*./main_tab_4.png*/
</style>
