// pages/infomation/home/home.js
//作者：张晶波
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    cowinfos: [{
      id:1,
      name:'产犊记录',
      link: 'calves'
    },{
      id:2,
      name:'配种记录'
    },{
      id:3,
      name:'妊娠诊断记录'
    },{
      id:4,
      name:'产奶记录'
    },{
      id:5,
      name:'生长发育记录'
    },{
      id:6,
      name:'DHI取样记录'
    },{
      id:7,
      name:'系谱档案'
    }]
  },
  methods: {
    toInfo: function (e) {
      var name = e.currentTarget.dataset.text
      var link = e.currentTarget.dataset.link
      wx.navigateTo({
        url: '/pages/infomation/list/list?name='+name+'&link='+link,  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
        success: function () { },        //成功后的回调；
        fail: function () { },          //失败后的回调；
        complete: function () { },      //结束后的回调(成功，失败都会执行)
      })
    },
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