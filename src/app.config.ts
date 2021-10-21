/*
 * @Author: your name
 * @Date: 2021-10-21 11:42:04
 * @LastEditTime: 2021-10-21 16:20:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ReactDemo\myapp\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/mall/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000000',
    selectColor: 'yellowGreen',
    backgroundColor: 'pink',
    borderStyle: 'white',
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./images/home.png",
        selectedIconPath:'./images/home_active.png',
        text: "首页"
      },
      {
        pagePath: "pages/mall/index",
        iconPath: "./images/order.png",
        selectedIconPath:'./images/order_active.png',
        text: "商城"
      }
    ]
  }
}
