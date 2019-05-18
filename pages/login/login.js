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
  },
  toRegister: function() {
    wx.navigateTo({
      url: '/pages/register/register',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
      success: function () { },        //成功后的回调；
      fail: function () { },          //失败后的回调；
      complete: function () { },      //结束后的回调(成功，失败都会执行)
    })
  }
})
