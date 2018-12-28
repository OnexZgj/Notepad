Page({

  data:{
    pagerList:[
      { id: "1", recode: "第一天", time: "2018-12-28", des: "one", lcoation: "112,113", dydj:"220"},
      { id: "1", recode: "第二天", time: "2018-11-28", des: "six", lcoation: "112,113", dydj: "110" },
      { id: "1", recode: "第三天", time: "2018-10-20", des: "two", lcoation: "112,113", dydj: "35" },
      { id: "1", recode: "第四天", time: "2018-09-28", des: "thre", lcoation: "112,113", dydj: "220" },
      { id: "1", recode: "第五天", time: "2018-08-28", des: "five", lcoation: "112,113", dydj: "220" },
    ]
  },

  toselectterm: function (e) {
    wx.navigateTo({
      url: '../selectterm/selectterm'
    })
  },
})

