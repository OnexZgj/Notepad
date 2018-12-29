Page({

  data: {

    tasks:[],

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



    pagerList: [{
        id: "1",
        recode: "第一天",
        time: "2018-12-28",
        des: "one",
        lcoation: "112,113",
        dydj: "220"
      },
      {
        id: "1",
        recode: "第二天",
        time: "2018-11-28",
        des: "six",
        lcoation: "112,113",
        dydj: "110"
      },
      {
        id: "1",
        recode: "第三天",
        time: "2018-10-20",
        des: "two",
        lcoation: "112,113",
        dydj: "35"
      },
      {
        id: "1",
        recode: "第四天",
        time: "2018-09-28",
        des: "thre",
        lcoation: "112,113",
        dydj: "220"
      },
      {
        id: "1",
        recode: "第五天",
        time: "2018-08-28",
        des: "five",
        lcoation: "112,113",
        dydj: "220"
      },
    ]
  },

  toselectterm: function(e) {
    wx.navigateTo({
      url: '../selectterm/selectterm'
    })
  },


  previewImage(e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  },

  onLoad: function (options) {
    var that = this

    wx.getStorage({
      key: '01',
      success: function (res) {
        console.log("history onLoad " + res.data.name);
        that.setData({
          tasks:res.data
          // ms: res.data.task.des,
          // imageList: res.data.task.images
        })
      },
    })

  }

})