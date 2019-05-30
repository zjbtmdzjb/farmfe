// pages/record/pregnancy/pregnancy.js
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
    checkdate: '请选择',              //检查日期
    breeddate: '自动生成',            //配种日期
    calculatechildbirth: '自动生成',  //预计分娩日期
    ispregnancy: '',     //妊娠
    isnonpregnant: '',   //空怀
    oariumdiam: '',      //卵巢直径
    folliclediam: '',    //卵泡直径
    endometritis: '',    //子宫炎症
    vaginitis: '',       //阴道炎症
    pregnancyperiod: '自动生成'  //妊娠期
  },

  /**
   * 组件的方法列表
   */
  methods: {
    CheckDateChange(e) {
      this.setData({
        checkdate: e.detail.value
      })
    },
  }
})
