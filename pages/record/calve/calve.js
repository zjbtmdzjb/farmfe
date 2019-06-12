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
    cowId:'',   //母牛号
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
      
    }
  }
})
