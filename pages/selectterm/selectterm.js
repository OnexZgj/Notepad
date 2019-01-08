Page({

  /**
   * 页面的初始数据
   */
  data: {

    dydj: ['10kV', '35kV', '110kV', '220kV', '500kV', '660kV', '800kV', '1000kV'],
    index: -1,
  },



  bindDydjChange(e) {
    this.setData({
      index: e.detail.value
    })
  },


  formSubmit(e) {
    var dydj ="";
    var gh="";
    var time="";
    if (e.detail.value.dydj   instanceof Array ){
      dydj=""
    }else{
      dydj = this.data.dydj[e.detail.value.dydj]
    }

    if (e.detail.value.time!=null){
      time = e.detail.value.time
    }
    
    var xlmc = e.detail.value.xlmc
    if (e.detail.value.gh!=null){
      gh = e.detail.value.gh
    }

    console.log("dydj:" + dydj + " gh :" + gh + time + xlmc);
    wx.navigateTo({
      url: '../history/history?dydj=' + dydj + "&time=" + time + "&xlmc=" + xlmc + "&gh=" + gh
    })
  },


  search: function(e) {

    var dydj=this.data.dydj[e.detail.value.dydj]
    var time=''
    var xlmc=''
    var gh=''

    wx.navigateTo({
      url: '../history/history?dydj='+dydj+"&time="+time+"&xlmc="+xlmc+"&gh="+gh
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  }



})