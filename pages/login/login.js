//index.js
//获取应用实例
//作者：张晶波
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    login_cow: '/images/login_cow.png',
    username:'',
    passWord:''
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
  noAction: function () {

  },
  //获取输入的用户名
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  //获取输入的密码
  passWordInput: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  //登陆方法
  checkLogin: function () {
    var self = this
    //验证表单完整性
    if(self.data.userName == '' || self.data.passWord == ''){
      wx.showToast({
        title: '请完整填写',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.request({
      url: 'http://localhost:8000/login',
      data: {
        username: self.data.userName,
        password: self.data.passWord
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method: 'POST',
      success: function (res) {
        if(res.data.code == 200) {
          //登陆成功的情况
          wx.setStorage({
            key: 'token',
            data: res.data.data.token,
          })
          wx.setStorage({
            key: 'username',
            data: self.data.userName
          })
          wx.navigateTo({
            url: '/pages/index/index',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
            success: function () {
              wx.showToast({
                title: '登录成功',
                icon: 'none',
                duration: 2000
              })},        //成功后的回调；
            fail: function () { },          //失败后的回调；
            complete: function () { },      //结束后的回调(成功，失败都会执行)
          })
        } else {
          //登录不成功
          wx.showToast({
            title: '登陆失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
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
