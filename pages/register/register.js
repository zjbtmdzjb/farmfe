// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    userName: '',                   //用户名
    passWord: '',                   //密码
    farmName: '',                   //农场名
    role: ['牛场管理员','牛场员工'],  //用户职级
    personalName: '',               //姓名
    telephoneNumber: '',            //电话号码
    email:''                        //邮箱
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
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
  //获取输入的农场名
  farmNameInput: function (e) {
    this.setData({
      farmName: e.detail.value
    })
  },
  //获取输入的姓名
  personalNameInput: function (e) {
    this.setData({
      personalName: e.detail.value
    })
  },
  //获取输入的电话号码
  telephoneNumberInput: function (e) {
    this.setData({
      telephoneNumber: e.detail.value
    })
  },
  //获取输入的邮箱
  emailInput: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  //登陆方法
  checkRegister: function () {
    var self = this
    //验证表单完整性
    if(self.data.userName == '' ||
      self.data.passWord == '' ||
      self.data.farmName == '' ||
      self.data.personalName == '' ||
      self.data.telephoneNumber == '' ||
      self.data.email == '') {
      wx.showToast({
        title: '请完整填写',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.request({
      url: 'http://localhost:8000/register',
      method: 'POST',
      data: {
        username: self.data.userName,
        password: self.data.passWord,
        farmname: self.data.farmName,
        role: self.data.index,
        personalname: self.data.personalName,
        telephonenumber: self.data.telephoneNumber,
        email: self.data.email
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        if(res.data.code == 200) {
          //验证通过
          wx.navigateTo({
            url: '/pages/login/login',
            success: function () {
              wx.showToast({
                title: '注册成功',
                icon: 'none',
                duration: 2000
              })
            },        //成功后的回调；
            fail: function () { },          //失败后的回调；
            complete: function () { },      //结束后的回调(成功，失败都会执行)
          })
        } else {
          //注册不成功
          wx.showToast({
            title: '注册失败，可能是用户名已存在',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})