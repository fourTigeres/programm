/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import firstPage from './firstPage.json'
import sortsItems from "./mock/分类菜单.json"


// 对应分类顺序
import tiantianjingxi1 from "./mock/热门分类.json"
import tiantianjingxi2 from "./mock/猫咪玩具.json"
import tiantianjingxi3 from "./mock/猫咪零食.json"
import tiantianjingxi4 from "./mock/猫猫书籍.json"
import tiantianjingxi5 from "./mock/猫咪主粮.json"
import tiantianjingxi6 from "./mock/猫咪保健.json"
import tiantianjingxi7 from "./mock/猫咪出行.json"
import tiantianjingxi8 from "./mock/猫咪医疗.json"
//注册接口

Mock.mock("/api/firstPage",{
  code:0,  //表示成功的状态
  data: firstPage
})
Mock.mock("/api/menu/sorts",{
  code:0,  //表示成功的状态
  data: sortsItems
})

// 数据
Mock.mock("/api/menu/tiantianjingxi1",{
  code:0,  //表示成功的状态
  data: tiantianjingxi1
})
Mock.mock("/api/menu/tiantianjingxi2",{
  code:0,  //表示成功的状态
  data: tiantianjingxi2
})
Mock.mock("/api/menu/tiantianjingxi3",{
  code:0,  //表示成功的状态
  data: tiantianjingxi3
})
Mock.mock("/api/menu/tiantianjingxi4",{
  code:0,  //表示成功的状态
  data: tiantianjingxi4
})
Mock.mock("/api/menu/tiantianjingxi5",{
  code:0,  //表示成功的状态
  data: tiantianjingxi5
})
Mock.mock("/api/menu/tiantianjingxi6",{
  code:0,  //表示成功的状态
  data: tiantianjingxi6
})
Mock.mock("/api/menu/tiantianjingxi7",{
  code:0,  //表示成功的状态
  data: tiantianjingxi7
})
Mock.mock("/api/menu/tiantianjingxi8",{
  code:0,  //表示成功的状态
  data: tiantianjingxi8
})

// 不用export

// 使用
// created () {
//   axios.get('/api2/ratings')
//     .then(response => {
//       const result = response.data
//       if (result.code === 0) {
//         this.ratings = result.data
//
//         this.$nextTick(()=>{
//           this.scroll = new BScroll(this.$refs.ratings, {
//             click: true
//           })
//         })
//       }
//     })
// },
