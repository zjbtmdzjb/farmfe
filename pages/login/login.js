//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    login_cow: '/images/login_cow.png',
  },
  changeimg: function () {
    this.setData({
      login_cow: '/images/login_cow2.png'
    })
  },
  recoverimg: function () {
    this.setData({
      login_cow: '/images/login_cow.png'
    })
  }
})
