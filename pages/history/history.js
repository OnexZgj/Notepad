const app = getApp()

Page({

  data: {

    dydj: '',
    xlmc: '',
    gh: '',
    time: '',
    /**
     * 任务列表集合
     */
    tasks: [],

    //检索使用的临时变量
    dydjList: [],
    xlmcList: [],
    timeList: [],
    ghList: [],

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
    ]
  },



  delete: function (event) {
    var position = event.currentTarget.id
    console.log("delete: " +position)
    this.data.tasks.splice(position,1)

    console.log("delete: " + this.data.tasks.length)

    // this.setData({
    //   tasks: tempTask
    // })
    var link = "删除成功"

    wx.setClipboardData({
      data: link,
      success: function(res) {
        wx.showToast({
          title: '已删除成功',
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


    // url: '../history/history
    // wx.navigateTo({
    //   url: '../updatetask/updatetask?dydj=' + dydj + "&time=" + time + "&xlmc=" + xlmc + "&gh=" + gh+"&position="+position 
    // })



    // that = this; //不要漏了这句，很重要
    // // var link = event.currentTarget.id
    // var link = 'nice'
    // console.log("detail" +link)
    /**wx.navigateTo({
      url: '../webview/webview?link=' + link,
    })*/
    // wx.setClipboardData({
    //   data: link,
    //   success: function (res) {
    //     wx.showToast({
    //       title: '已复制链接',
    //       icon: 'success'
    //     })
    //   }
    // })
  },







  onLoad: function(options) {

    console.log("重新执行了方法")
    var that = this
    var dydj = options.dydj;
    var xlmc = options.xlmc;
    var gh = options.gh;
    var time = options.time;


    wx.getStorage({
      key: '01',
      success: function(res) {
        //==搜索业务逻辑==

        var list = res.data;

        if (dydj != "") {
          for (var i in list) {
            if (dydj == list[i].dydj) {

              that.data.dydjList.push(list[i]);
            }
          }
        } else {
          that.data.dydjList = list;
        }

        if (xlmc != "") {
          for (var i in that.data.dydjList) {
            if (xlmc == that.data.dydjList[i].xlmc) {
              that.data.xlmcList.push(that.data.dydjList[i]);
            }
          }
        } else {
          that.data.xlmcList = that.data.dydjList;
        }

        if (gh != "") {
          for (var i in that.data.xlmcList) {
            if (gh == that.data.xlmcList[i].gh) {
              that.data.ghList.push(that.data.xlmcList[i]);
            }
          }
        } else {
          that.data.ghList = that.data.xlmcList;
        }


        // timeList = [];
        if (time != "") {
          for (var i in that.data.ghList) {
            if (time == that.data.ghList[i].time) {
              that.data.timeList.push(that.data.ghList[i]);
            }
          }
        } else {
          that.data.timeList = that.data.ghList;
        }

        that.setData({
          tasks: that.data.timeList

        })
      },
    })

    for (var index in this.data.tasks) {
      console.log(this.data.tasks[index].dydj);
    }

  }

})