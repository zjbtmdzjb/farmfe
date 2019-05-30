// pages/record/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    cowrecords:[{
      id:1,
      name:'产犊记录',
      link:'calve'
    },{
      id:2,
      name:'配种记录',
      link:'breed'
    },{
      id:3,
      name:'妊娠诊断记录',
      link:'pregnancy'
    },{
      id:4,
      name:'产奶记录'
    },{
      id:5,
      name:'生长发育记录'
    },{
      id:6,
      name:'DHI取样记录'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toForm: function(e) {
      var name = e.currentTarget.dataset.text
      var link = e.currentTarget.dataset.link
      wx.navigateTo({
        url: '/pages/record/form/form?name='+name+'&link='+link,  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
        success: function () { },        //成功后的回调；
        fail: function () { },          //失败后的回调；
        complete: function () { },      //结束后的回调(成功，失败都会执行)
      })
    }
  }
})
