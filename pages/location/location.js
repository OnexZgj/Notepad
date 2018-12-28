// pages/task/task.js

var markersData = {
  latitude: '1.0',//纬度
  longitude: '1.0',//经度
};


Page({

  data: {
    imgUrl: 'http://www.runoob.com/try/demo_source/paris.jpg',
  },

  getLocation:function(e){
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res);
        that.loadCity(latitude, longitude);
      }
    })
 
  },

  loadCity(latitude,longitude){
    this.setData({

      latitude: latitude,
      longitude: longitude,

    })
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