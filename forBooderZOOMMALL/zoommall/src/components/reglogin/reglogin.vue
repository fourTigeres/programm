<template>
  <div>
    <div class="regloginWrap">
      <div class="regloginContent">
        <mt-header class="headerLogin">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="logoImg"><img src="./login/logo.png" alt=""></div>
      </div>

      <!--登录注册-->
      <div class="logoRegistorMS">
        <div class="page-navbar">
          <!-- navbar -->
          <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item class="pageword" id="1">登录</mt-tab-item>
            <mt-tab-item id="2">验证码登录</mt-tab-item>
            <mt-tab-item id="3">注册</mt-tab-item>
          </mt-navbar>
        </div>

        <!-- tabcontainer -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-field label="" class="iconfont icon-xingmingyonghumingnicheng" placeholder="手机号/邮箱/用户名"
                      v-model="usernamed"></mt-field>
            <mt-field label="" class="iconfont icon-mima" placeholder="输入密码" type="password"
                      v-model="passwordd"></mt-field>
            <div class="wangjimima"><a><span>忘记密码？</span></a></div>
            <div class="loginWords"  @click="handleSubmit(false)"><a href="javascript:;">登录</a></div>
            <div class="partiner"><span>合作网站登录</span><br>
              <div class="loginImgali"><a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https://wap.epet.com/user/UserCenter.html"><img src="./login/login_ico4.png" alt=""></a>
                <a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https://wap.epet.com/user/UserCenter.html"><img src="./login/login_ico2.png"/></a></div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-field label="" class="iconfont icon-shouji" placeholder="已注册的手机号" type="tel" v-model="phoned"></mt-field>
            <mt-field label="" class="iconfont icon-mima" v-model="captcha1" placeholder="请输入图片内容">
              <img @click="messageImg()" ref="messa" src="./login/e1.png" height="45px" width="100px">
            </mt-field>
            <mt-field label="" class="iconfont icon-mima" placeholder="请输入动态密码" type="password" v-model="passwordm">
              <span @click="sendmessage(1)" ref="mes1" class="moveMessage">获取动态密码</span>
            </mt-field>
            <div class="wangjimima"><a><span>忘记密码？</span></a></div>
            <div class="loginWords" @click="handleSubmit(true)"><a href="javascript:;">登录</a></div>
            <div class="partiner"><span>合作网站登录</span><br>
              <div class="loginImgali"><a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https://wap.epet.com/user/UserCenter.html"><img src="./login/login_ico4.png" alt=""></a>
                <a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https://wap.epet.com/user/UserCenter.html"><img src="./login/login_ico2.png"/></a></div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">

            <mt-field label=""  ref="phoneNum" class="iconfont icon-shouji" placeholder="请输入11位手机号" type="tel" v-model="phone"></mt-field>
              <div style="display: none" ref="regismsg">
                <mt-field label="" class="iconfont icon-mima" placeholder="输入密码" type="password"
                          v-model="password"></mt-field>
            <mt-field label="" class="iconfont icon-mima" v-model="captcha" placeholder="请输入图片内容">
              <img @click="messageImg()" ref="mesaimg" src="./login/e1.png" height="45px" width="100px">
            </mt-field>
            <mt-field label="" class="iconfont icon-mima" placeholder="请输入动态密码" type="password" v-model="passwordme">
              <span class="moveMessage" @click="sendmessage(2)" ref="mes2">获取动态密码</span>
            </mt-field>
              </div>
            <div ref="nextBtn" class="nextBtn" @click="register()">下一步</div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>

</template>

<script>
  import { MessageBox,Toast } from 'mint-ui';

  export default {
    name: 'page-navbar',
    data () {
      return {
        captcha1: "",
        captcha:"",
        selected: '1',
        username: "",  //注册
        phone: "",
        password: "",
        passwordme: "",
        usernamed: "",  //登录
        passwordd: "",
        phoned: "",    //短信登录手机
        message: "",    //短信验证
        passwordm: ""

      }
    },
    beforeDestroy(){
      this.cleartimer()
    },
    methods: {

//      清除定时器
      cleartimer(){
        clearInterval(this.timer)
        clearInterval(this.timer2)
      },

      //注册
      register(){
//          手机号判断
        var patm = /^[0-9]{1,20}$/
        var phnum = /^1[34578]{1}\d{9}$/
        if (this.phone == '') {
          Toast('请输入手机号码！');
          return
        } else if (!phnum.exec(Number(this.phone))) {
          Toast('请正确输入手机号！');
          return
        }

        if (this.phone.split("").length === 11) {
          this.$refs.regismsg.style.display = "block"
          this.$refs.nextBtn.innerHtml = "注册"
//          逻辑判断
          if (this.password == '') {
            Toast('请输入密码！');
            return
          } else if (this.passwordme == '') {
            Toast('请输入动态密码！');
            return
          } else if (patm.exec(this.password)) {
            Toast('为了您密码安全,密码不能全由数字组成！');
            return
          } else if (!(this.message === this.passwordme)) {

            Toast('验证码输入错误');
            return
          } else {
            MessageBox('E宠', '注册成功！请登录！');
            if (this.password === '' || this.phone === '') {
              return
            } else {
              localStorage.setItem(this.phone, JSON.stringify({"username": this.phone, "password": this.password}))
              this.passwordme = ""
              this.password = ""
              this.phone = ""
              this.captcha = ""
            }

          }

        }
      },
      //发送动态密码

      sendmessage(num){
        clearInterval(this.timer)
        if(num===1){
          this.$refs.mes1.style.color ="#888"
          this.$refs.mes1.style.border ="1px solid #888"
//        倒计时
          var  tim =60
          this.timer= setInterval(()=>{
            tim--
            tim=tim<0?60:tim
            this.timing=tim
            this.$refs.mes1.innerHTML = "("+tim+")短信已发送"
          },1000)

          this.timer2=setTimeout(()=>{
            clearInterval(this.timer)
            this.$refs.mes1.style =""
            this.$refs.mes1.innerHtml ="获取动态密码"
          },60000)

        }else {
          this.$refs.mes2.style.color ="#888"
          this.$refs.mes2.style.border ="1px solid #888"
//        倒计时
          var  tim =60
          this.timer= setInterval(()=>{
            tim--
            tim=tim<0?60:tim
            this.timing=tim
            this.$refs.mes2.innerHtml = "("+tim+")短信已发送"
          },1000)

          setTimeout(()=>{
            clearInterval(this.timer)
            this.$refs.mes2.style =""
            this.$refs.mes2.innerHtml ="获取动态密码"
          },60000)
        }


        let arr = []
        for (let i = 0; i < 6; i++) {
          arr.push(Math.round(Math.random() * 9))
        }
        let meg = arr.join("")
        this.message = meg
        MessageBox('E宠', '验证码发送成功！');
        setTimeout(function () {
          MessageBox({
            title: 'E宠',
            message: "本次短信验证码为 " + meg + " 有效期为2分钟",
            showCancelButton: true
          });
        }, 5000)

      },
      //图片验证码
      messageImg(){
        this.$refs.messa.src = "https://wap.epet.com/share/seccode.html?hash=" + Math.round(Math.random() * 99) + "&height=30&width=85"
        this.$refs.mesaimg.src = "https://wap.epet.com/share/seccode.html?hash=" + Math.round(Math.random() * 99) + "&height=30&width=85"
      },
//      密码和短信登录
      handleSubmit(isRegister){
        this.cleartimer()
//          isRegister  true 短信登录  false 密码登录
        //准备工作

        var phnum = /^1[34578]{1}\d{9}$/

        if (isRegister) {  //短信登录
          let {username} = JSON.parse(localStorage.getItem(this.phoned) || "{}")
          if (this.phoned === '') {
            Toast('请输入手机号码！');
            return
          } else if (!phnum.exec(Number(this.phoned))) {
            Toast('请检查手机号是否输入正确！');
            return
          }else if (!(this.phoned=== username)) {
            Toast('此手机号还未注册！');
            return
          } else if (this.passwordm == '') {
            Toast('请输入验证码！');
            return
          } else if (!(this.message === this.passwordm)) {
            Toast('验证码输入错误！');
            return
          } else {
            MessageBox('E宠', '恭喜' + username + '登录成功！终于等到您了');
            localStorage.setItem("currentId", JSON.stringify({"username": this.phoned, "password": this.message}))
            this.$router.replace({ path: `/loginsuccess/${username}`})

            this.phoned=""
            this.passwordm = ""
            this.captcha1 = ""
          }

        } else {  //密码登录
          let {username,password} = JSON.parse(localStorage.getItem(this.usernamed) || "{}")

          if (this.usernamed==="") {
            Toast('请输入手机号码！');
            return
          } else if (!phnum.exec(Number(this.usernamed))) {
            Toast('请检查手机号或用户名是否输入正确！！');
            return
          }else if (!(this.usernamed == username)) {
            Toast('此手机号还未注册！');
            return
          } else if (this.passwordd == '') {
            Toast('请输入密码！');
            return
          } else if (!(this.passwordd === password)) {
            Toast('密码输入错误！');
            return
          } else {
            MessageBox('E宠', '恭喜' + username + '登录成功！终于等到您了');
            localStorage.setItem("currentId", JSON.stringify({"username": this.usernamed, "password": this.passwordd}))
            this.$router.replace({ path: `/loginsuccess/${username}`})
            this.passwordd=""
            this.usernamed = ""
          }
        }
      },

    },watch: {
      phone(){
        if (this.phone.split("").length === 11) {

          this.$refs.nextBtn.style.backgroundColor = "#2ec975"
        } else {
          this.$refs.nextBtn.style.backgroundColor = "#d7d7d7"
          this.$refs.regismsg.style.display = "none"
        }

      }
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
    background-color white
    overflow hidden
    .regloginContent
      height (178 / r)
      width 100%
      background url("./login/registorImg.png") no-repeat
      background-size 100% 100%
      position relative
      .headerLogin
        font-size (16 / r)
        background-color rgba(0, 0, 0, 0)
        .registorIcon
          position absolute
          right (10 / r)
      .logoImg
        height (84 / r)
        width 100%
        text-align center
        margin-top (20 / r)
        img
          width (75 / r)
          height (48 / r)
    .logoRegistorMS
      margin-top (-49 / r)
      position relative
      z-index 2
    .mint-navbar
      background-color rgba(255, 255, 255, .3)
      .is-selected
        background-color rgba(0, 0, 255, .2) !important
      .mint-tab-item-label
        font-size (16 / r)
        background-color agba(0, 0, 0, .5)
        color white
    .wangjimima
      height (20 / r)
      width 100%
      font-size (14 / r)
      text-align right
      margin-top (15 / r)
    .loginWords
      height (40 / r)
      width (345 / r)
      background-color #2ec975
      border-radius (5 / r)
      margin (15 / r)
      text-align center
      line-height (40 / r)
      a
        color white
    .partiner
      height (120 / r)
      width 100%
      margin-top (120 / r)
      span
        color #d7d7d7
        font-size (14 / r)
        width 100%
        text-align center
        display block
      .loginImgali
        width 100%
        img
          margin-left (40 / r)
          width (58 / r)
          height (58 / r)
    .moveMessage
      border 1px solid red
      color red
      border-radius (5 / r)
      font-size (12 / r)
      padding (5 / r) (10 / r)
      line-height 18 / r
    .nextBtn
      width (300 / r)
      height (36 / r)
      background-color #d7d7d7
      border-radius (18 / r)
      font-size (18 / r)
      text-align center
      line-height (36 / r)
      margin (18 / r) auto
      color white
    .mint-cell-wrapper
      border-bottom 1px solid #ccc


</style>
