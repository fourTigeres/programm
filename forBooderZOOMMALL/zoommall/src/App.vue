<template>
  <div>
    <div>
    <e-header></e-header>
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
    },
    //映射组件 路由组件 <router-link to="/seller">商家</router-link>
    // <router-view :seller="seller"></router-view>
    components: {
      'e-footer': footer,
      'e-header': header
    },
    created () {

        axios.get('/api/firstPage')
          .then(response => {
            const result = response.data
            if (result.code === 0) {
              this.firstPageMsg = result.data
            }
          })


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>


