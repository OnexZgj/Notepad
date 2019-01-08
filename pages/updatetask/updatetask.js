Page({

  data: {

    dydj: ['10kV', '35kV', '110kV', '220kV', '500kV', '660kV', '800kV', '1000kV'],
    index: -1,
    xlmc: '',
    gh: '',
    time: '',


    task: {
      taskId: '',
      time: '',
      record: '',
      xlmc: '',
      gh: '',
      des: '',
      location: '',
      dydj: '',
      images: []
    },



  },


  /**
   * 表单提交修改
   */
  formSubmit(e) {

    var dydj = "";
    var gh = "";
    var time = "";
    var xlmc = "";
    var des = "";
  

    if (e.detail.value.dydj instanceof Array) {
      dydj = ""
    } else {
      dydj = this.data.dydj[e.detail.value.dydj]
    }

    if (e.detail.value.time != null) {
      time = e.detail.value.time
    }

    var xlmc = e.detail.value.xlmc

    var gh = e.detail.value.gh
    if (e.detail.value.gh != null) {
      gh = e.detail.value.gh
    }

    var des = e.detail.value.des
    if (e.detail.value.des != null) {
      des = e.detail.value.des
    }
    var location=e.detail.value.location
    

    console.log("dydj:" + dydj + " gh :" + gh + time + xlmc +des + location);

    //TODO 数据检索并修改


    // wx.navigateTo({
    //   url: '../history/history?dydj=' + dydj + "&time=" + time + "&xlmc=" + xlmc + "&gh=" + gh
    // })
  },




  bindDydjChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

 onLoad: function(options) {
   //点击事件的索引
   var position = options.position;

   console.log("position"+position)
 }


})