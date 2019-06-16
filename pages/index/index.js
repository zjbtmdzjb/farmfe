//index.js
//获取应用实例
//作者：张晶波
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    PageCur: 'infomation',
    userName: '登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeimg: function() {
    this.setData({
      login_cow: '/images/login_cow2.png'
    })
  },
  recoverimg: function() {
    this.setData({
      login_cow: '/images/login_cow.png'
    })
  },
  indexChange: function(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  navChange: function(e) {
    wx.navigateTo({
      url: '/pages/login/login',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
      success: function () { },        //成功后的回调；
      fail:function() { },          //失败后的回调；
      complete:function() { },      //结束后的回调(成功，失败都会执行)
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var self = this
    wx.getStorage({
      key: 'username',
      success: function (res) {
        console.log(res.data)
        self.setData({
          userName: res.data
        })
      },
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
