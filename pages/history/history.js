const app = getApp()

Page({

  data: {

    des: '',
    time: '',
    /**
     * 任务列表集合
     */
    tasks: [],

    //检索使用的临时变量
    dydjList: [],
    timeList: [],

    task: {
      taskId: '',
      time: '',
      record: '',
      des: '',
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
    ]
  },



  delete: function (event) {
    var position = event.currentTarget.id
    // console.log("delete: " +position)
    var tempTask=this.data.tasks.splice(position,1);

    this.setData({
      tasks: this.data.tasks
    })
    var link = "删除成功"
    wx.setStorageSync("01", this.data.tasks);
    wx.setClipboardData({
      data: link,
      success: function(res) {
        wx.showToast({
          title: '删除成功',
          icon: 'success'
        })
      }
    })
  },

  update: function (event) {
    var position = event.currentTarget.id
    // console.log("position" + position)

    wx.setClipboardData({
      data: "xxx",
      success: function (res) {
        wx.showToast({
          title: '已修改待开发',
          icon: 'success'
        })
      }
    })
  },







  onLoad: function(options) {

    console.log("重新执行了方法")
    var that = this
    var des = options.des;
    var time = options.time;


    wx.getStorage({
      key: '01',
      success: function(res) {
        //==搜索业务逻辑==

        var list = res.data;

        // that.setData({
        //   tasks: res.data

        // })



        if (des != "") {
          for (var i in list) {
            if (des == list[i].des) {

              that.data.dydjList.push(list[i]);
            }
          }
        } else {
          that.data.dydjList = list;
        }



        // timeList = [];
        if (time != "") {
          var year=time.slice(0,4)
          var month=time.slice(5,7)
          var day=time.slice(8,10)
          time=year+"/"+month+"/"+day
          console.log(year+'=='+month+"==="+day)
          for (var i in that.data.dydjList) {
            if (time == that.data.dydjList[i].time) {
              that.data.timeList.push(that.data.dydjList[i]);
            }
          }
        } else {
          that.data.timeList = that.data.dydjList;
        }

        that.setData({
          tasks: that.data.timeList

        })

  

      },
    })


  }

})