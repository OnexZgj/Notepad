Page({

  /**
   * 页面的初始数据
   */
  data: {

    dydj: ['1', '3', '10', '20', '50', '60', '80', '100'],
    index: -1,
  },



  bindDydjChange(e) {
    this.setData({
      index: e.detail.value
    })
  },


  formSubmit(e) {
    var des="";
    var time="";
  

    if (e.detail.value.time!=null){
      time = e.detail.value.time
    }
    
    var des = e.detail.value.des
    if (e.detail.value.des!=null){
      des = e.detail.value.des
    }


    wx.navigateTo({
      url: '../history/history?des=' + des + "&time=" + time 
    })
  },


  search: function(e) {

    var des=''
    var time=''
   

    wx.navigateTo({
      url: '../history/history?des='+des+"&time="+time
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {

    var tempTime=e.detail.value;
    console.log(tempTime)
    tempTime = tempTime.replace("-","/");
    console.log(tempTime)
    this.setData({
      time: e.detail.value
    })
  }



})