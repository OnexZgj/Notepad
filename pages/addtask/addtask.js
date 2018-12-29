const sourceType = [
  ['camera'],
  ['album'],
  ['camera', 'album']
]
const sizeType = [
  ['compressed'],
  ['original'],
  ['compressed', 'original']
]

/**
 * 文本框的输入字符串
 */
var inputContent = ''
Page({

  onShareAppMessage() {
    return {
      title: '图片',
      path: 'page/API/pages/image/image'
    }
  },


  data: {
    pagernumber: 0,

    tasks: [],

    task: {
      taskId: '',
      time: '',
      record: '',
      xlmc:'',
      gh:'',
      des: '',
      location: '',
      dydj: '',
      images: []
    },


    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    data: '',
    sizeTypeIndex: 0,
    sizeType: ['压缩', '原图', '压缩或原图'],
    value: '',
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  toselectterm: function(e) {
    wx.navigateTo({
      url: '../selectterm/selectterm'
    })
  },



  savez: function(e) {
    const that = this;
    console.log(this.data.imageList);
    wx.setStorageSync("01", this.data.imageList);

    var value = wx.getStorageSync("01");
    console.log("value" + value);

  },


  onInputChange: function(e) {
    inputContent = e.detail.value;


    console.log("onInputChange:" + inputContent);
  },


  save: function(e) {
    const that = this;
    console.log("save : " + inputContent);
    this.data.task.images = this.data.imageList;
    this.content = '220千伏花苗线12号杆A相小号侧前上方导管破裂';

    let dy = this.content.slice(0, this.content.indexOf('千伏'));
    let xlmc = this.content.slice(this.content.indexOf('千伏') + 2, this.content.indexOf('线') + 1);
    let gh = this.content.slice(this.content.indexOf('线') + 1, this.content.indexOf('杆') + 1);

    console.log(gh);
    console.log(dy);
    console.log(xlmc);
    //TODO字符串的切割 taskId
    this.data.task.des = inputContent.slice(0, this.content.indexOf('千伏'));
    this.data.task.time = inputContent;
    this.data.task.xlmc = inputContent.slice(this.content.indexOf('千伏') + 2, this.content.indexOf('线') + 1);
    this.data.task.location = inputContent;
    this.data.task.gh = inputContent.slice(this.content.indexOf('线') + 1, this.content.indexOf('杆') + 1);
    this.data.task.dydj = inputContent.slice(0, this.content.indexOf('千伏'));


    console.log("save after " + this.data.task.des)
    this.data.tasks.push(this.data.task);
    wx.setStorageSync("01", this.data.tasks);



    //测试保存是否成功
    var value = wx.getStorageSync("01");
    console.log("save value" + value);

  },


  savex: function() {
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://www.mtjsoft.cn/wanandroid/api/banner',
      method: 'GET',
      success: function(res) {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();

        console.log(res.data);
      },
      fail: function() {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
      }
    })
  },


  chooseImagez() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },



  chooseImage() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },

  previewImage(e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  },

  onShow: function(options) {
    var that = this
    wx.getStorage({
      key: '01',
      success: function(res) {
        that.setData({
          tasks: res.data
        })
      },
    })
  }
})