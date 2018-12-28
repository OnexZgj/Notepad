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


  search: function(e) {
    wx.navigateTo({
      url: '../history/history'
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