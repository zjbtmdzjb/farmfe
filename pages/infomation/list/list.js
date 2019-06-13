// pages/infomation/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    link:'',
    token:'',
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    this.setData({
      name: options.name,
      link: options.link
    })
    wx.getStorage({
      key: 'token',
      success: function(res) {
        self.setData({
          token: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this
    wx.request({
      url: 'http://localhost:8000/api/v1/' + self.data.link + '?token=' + self.data.token,
      method: 'GET',
      success: function (res) {
        if(res.data.code == 200) {
          self.setData({
            content: res.data.data.lists
          })
          console.log(self.data.content)
        }
      }
    })
  },
  ViewRecord: function (e) {
    var num = e.currentTarget.dataset.num
    console.log(num)
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