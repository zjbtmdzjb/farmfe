// pages/record/calve/calve.js
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
    cowid:'',   //母牛号
    birthtime: '请选择',    //分娩日期
    flowingtime: '请选择',  //阴道开始流水时间
    fetustime: '请选择',    //胎儿露出阴门时间
    fetusbirthtime: '请选择',   //胎儿娩出时间
    placentatime: '请选择',        //胎盘排出时间
    flowingtime_minute: '',
    fetusbirthtime_minute: '',
    placentatime_minute: '',
    index: null,
    index2: null,
    index3: null,
    fetusorgan: ['臀', '头', '前肢', '后肢'],  //露出阴门的胎儿器官
    iscomplete: ['完整', '不完整'],  //胎衣排出是否完整
    isabortion: ['无', '流产或难产'],  //是否流产或者难产
    yakid: '',      //犊牛编号
    yakindex: '',   //犊牛综合指数
    milkproduction: '', //泌乳期产奶量
	  cream: '',  //乳脂量
	  protein: '',  //乳蛋白量
    token: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    TimeChange(e) {
      var time = e.currentTarget.dataset.text
      switch(time) {
        case 'flowingtime':
          this.setData({
            flowingtime:e.detail.value,
            flowingtime_minute: e.detail.value.split(":")
          })
          break
        case 'fetustime':
          this.setData({
            fetustime: e.detail.value
          })
          break
        case 'fetusbirthtime':
          this.setData({
            fetusbirthtime: e.detail.value,
            fetusbirthtime_minute: e.detail.value.split(":")
          })
          break
        case 'placentatime':
          this.setData({
            placentatime: e.detail.value,
            placentatime_minute: e.detail.value.split(":")
          })
          break
      }
      //这样的计算方法好像不太好，可能未来会改进(暂时弃用)
      /*
      if (this.data.flowingtime_minute != "" && this.data.placentatime_minute != "") {
        //计算胎盘排出时间
        var starttime = parseInt(this.data.flowingtime_minute[0]) * 60 + parseInt(this.data.flowingtime_minute[1])
        var endtime = parseInt(this.data.placentatime_minute[0]) * 60 + parseInt(this.data.placentatime_minute[1])
        var result = endtime - starttime
        this.setData({
          placentadifference: result
        })
      } */
    },
    BirthTimeChange (e) {
      this.setData({
        birthtime: e.detail.value
      })
    },
    PickerChange(e) {
      this.setData({
        index: e.detail.value
      })
    },
    PickerComplete(e) {
      this.setData({
        index2: e.detail.value
      })
    },
    PickerAbortion(e) {
      this.setData({
        index3: e.detail.value
      })
    },
    //监听Input并赋值，这个方法不错
    InputWatch (e) {
      let item = e.currentTarget.dataset.model
      this.setData({
        [item]: e.detail.value
      })
      console.log(this.data)
    },
    CheckCalve () {
      var self = this
      //表单完整性验证
      if (self.data.cowid == '' ||
        self.data.birthtime == '请选择' ||
        self.data.flowingtime == '请选择' ||
        self.data.fetustime == '请选择' ||
        self.data.fetusbirthtime == '请选择' ||
        self.data.placentatime == '请选择' ||
        self.data.index == null ||
        self.data.index2 == null ||
        self.data.index3 == null ||
        self.data.yakid == '' ||
        self.data.yakindex == '' ||
        self.data.milkproduction == '' ||
        self.data.cream == '' ||
        self.data.protein == '') {
        wx.showToast({
          title: '请完整填写',
          icon: 'none',
          duration: 2000
        })
        return
      }
      wx.getStorage({
        key: 'token',
        success: function(res) {
          self.setData({
            token: res.data
          })
          //用这种办法解决异步好像也不太好，微信小程序支持ES6，应该可以用Promise解决这个问题
          var url = 'http://localhost:8000/api/v1/calves?token=' + self.data.token
          wx.request({
            url: url,
            method: 'POST',
            data: {
              cow_id: self.data.cowid,
              birth_time: self.data.birthtime,
              flowing_time: self.data.flowingtime,
              fetus_time: self.data.fetustime,
              fetus_birth_time: self.data.fetusbirthtime,
              placenta_time: self.data.placentatime,
              fetus_organ: self.data.fetusorgan[self.data.index],
              is_complete: self.data.index2,
              is_abortion: self.data.index3,
              yak_id: self.data.yakid,
              yak_index: self.data.yakindex,
              milk_production: self.data.milkproduction,
              cream: self.data.cream,
              protein: self.data.protein
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },
            success: function (res) {
              if( res.data.code == 200) {
                wx.navigateTo({
                  url: '/pages/index/index',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
                  success: function () {
                    wx.showToast({
                      title: '提交成功',
                      icon: 'none',
                      duration: 2000
                    })
                  },        //成功后的回调；
                  fail: function () { },          //失败后的回调；
                  complete: function () { },      //结束后的回调(成功，失败都会执行)
                })
              } else {
                wx.showToast({
                  title: res.data.msg,
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          })
        },
      })
    }
  }
})
