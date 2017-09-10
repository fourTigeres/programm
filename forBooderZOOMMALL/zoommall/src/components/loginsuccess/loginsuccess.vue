<template>
  <div>
    <div class="loginsuccessWrap">
      <div class="regloginContent">
        <div class="regloginContent">
          <mt-header class="headerLogin" title="用户中心">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
          </mt-header>
          <div class="logoImg"><img class="ogo" src="./loginsuccessimg/6.jpg" alt="">
            <span class="username">{{username}}</span>
            <div class="vvvimg">
              <img src="./loginsuccessimg/9.png" alt="">
              <img src="./loginsuccessimg/v0.png" alt="">
            </div>

          </div>
        </div>
        <div class="imgcard" ></div>
        <span class="cardword"> 购物车是空的</span>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1 ref="close" @click="close()">退出登录 </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data () {
      return {
        username:""
      }
    },
    created(){
     this.usernameId()
    },
    methods:{
      close(){

        MessageBox.confirm(this.username+'确定退出吗?').then(action => {
         window.localStorage.removeItem("currentId")
          this.$router.replace({ path: `/reglogin`})
        },(resolve) => {
            console.log(resolve)
        })
      },
      usernameId(){
        setTimeout(()=>{
          this.username = this.$route.params.userId
        },100)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .loginsuccessWrap
    position absolute
    z-index 25
    left 0
    top 0
    width 100%
    height 100%
    overflow hidden
    background-color lightgoldenrodyellow
    .regloginContent
      height (178/r)
      width 100%
      background url("./loginsuccessimg/dog.jpg") no-repeat
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
        text-align left
        margin-top (20/r)
        .ogo
          float left
          width (70/r)
          height (70/r)
          border-radius 50%
          margin-left (20/r)
        .username
          color white
          margin (40/r) 0 0 (20/r)
        .vvvimg
          height (40/r)
          img
            height (40/r)
            margin-top (10/r)
            margin-left (20/r)
    h1
      margin (10/r) auto
      line-height (30/r)
      margin-top (15/r)
      display block
      height (30/r)
      border-radius (15/r)
      width (300/r)
      background-color lightblue
      &:nth-child(2)
        font-size (18/r)
        margin-top (0/r)
        background-color rgba(0,0,0,0)
      &:nth-child(4)
            background-color orange
      &:nth-child(6)
        background-color yellow
      &:nth-child(7)
        height (40/r)
        border-radius (25/r)
        color white
        line-height (40/r)
        text-align center
        width (320/r)
        background-color red
        box-shadow (5/r) (5/r) (5/r) rgba(0,0,0,.5)
        transition 0.2s all
        &:hover
          transform scale(1.1)
          box-shadow (5/r) (5/r) (5/r) rgba(0,0,0,.2)

    .imgcard
      width (129/r)
      height (129/r)
      background: url(./cart-ico.png) no-repeat 0 (-190/r);
      margin (20/r) auto
    .cardword
      color #8e8e8e
      display block
      width 100%
      text-align center

</style>
