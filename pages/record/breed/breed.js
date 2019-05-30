// pages/record/breed/breed.js
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
    childbirth:'自动生成',    //上胎分娩日期
    index:null,
    breedn:['第1次配种','第2次配种','第3次配种','第4次配种'],
    time12:'请选择',          //发情开始时间
    time13:'请选择',          //发情结束时间
    breeddate: '请选择',      //配种日期
    breedtime: '请选择',      //配种时间
    frozensemennum: '请输入', //冻精编号
    lastbreed: '自动生成',    //最后一次配种时间
    breedinterval: '自动生成',//配种间隔
    lastfrozensemennum: '自动生成'  //最后一次配种冻精编号
  },

  /**
   * 组件的方法列表
   */
  methods: {
    TimeChange(e) {
      var time = e.currentTarget.dataset.text
      switch (time) {
        case 'time12':
          this.setData({
            time12: e.detail.value,
          })
          break
        case 'time13':
          this.setData({
            time13: e.detail.value
          })
          break
        case 'breedtime':
          this.setData({
            breedtime: e.detail.value,
          })
          break
        case 'time7':
          this.setData({
            time7: e.detail.value,
            time7_minute: e.detail.value.split(":")
          })
          break
      }
    },
    ChildbirthChange(e) {
      this.setData({
        childbirth: e.detail.value
      })
    },
    BreednChange(e) {
      this.setData({
        index: e.detail.value
      })
    },
    DateChange(e) {
      this.setData({
        breeddate: e.detail.value
      })
    },
  }
})
