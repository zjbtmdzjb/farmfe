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
    date: '请选择',
    time3: '请选择',
    time4: '请选择',
    time6: '请选择',
    time7: '请选择',
    time3_minute: '',
    time6_minute: '',
    time7_minute: '',
    index: null,
    index2: null,
    index3: null,
    organs: ['臀','头','前肢','后肢'],
    complete: ['完整','不完整'],
    sex: ['公','母'],
    difficulty: '',
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    TimeChange(e) {
      var time = e.currentTarget.dataset.text
      switch(time) {
        case 'time3':
          this.setData({
            time3:e.detail.value,
            time3_minute: e.detail.value.split(":")
          })
          break
        case 'time4':
          this.setData({
            time4: e.detail.value
          })
          break
        case 'time6':
          this.setData({
            time6: e.detail.value,
            time6_minute: e.detail.value.split(":")
          })
          break
        case 'time7':
          this.setData({
            time7: e.detail.value,
            time7_minute: e.detail.value.split(":")
          })
          break
      }
      if(this.data.time3_minute != "" && this.data.time6_minute != "") {
        //计算产犊难易度时间
        var starttime = parseInt(this.data.time3_minute[0])*60 + parseInt(this.data.time3_minute[1])
        var endtime = parseInt(this.data.time6_minute[0])*60 + parseInt(this.data.time6_minute[1])
        var result = endtime - starttime
        this.setData({
          difficulty: result
        })
      }
    },
    DateChange(e) {
      this.setData({
        date: e.detail.value
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
    PickerSex(e) {
      this.setData({
        index3: e.detail.value
      })
    },
  }
})
