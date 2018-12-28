const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({

  onShareAppMessage() {
    return {
      title: '图片',
      path: 'page/API/pages/image/image'
    }
  },


  data: {
    pagernumber: 0,

    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    data:'',
    sizeTypeIndex: 0,
    sizeType: ['压缩', '原图', '压缩或原图'],
value:'567',
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]


  },

  toselectterm: function (e) {
    wx.navigateTo({
      url: '../selectterm/selectterm'
    })
  },


  dataChange(e) {
    this.data.data = e.detail.value;
  },


  save: function(e){
    const that = this;
    console.log(this);
    console.log(this.data.imageList);
    wx.setStorageSync("01",  this.data.imageList );

    var value = wx.getStorageSync("01");
    console.log("value"+value);

  },


  

  
  savex: function () {
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://www.mtjsoft.cn/wanandroid/api/banner',
      method: 'GET',
      success: function (res) {
        // 隐藏导航栏加载框
       
        wx.hideNavigationBarLoading();
       
       console.log(res.data);
      },
      fail: function () {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
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
  
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: '01',
      success: function (res) {
        that.setData({ 
          value: res.data,
          imageList:res.data
           })
        
      },
    })
  
  }


})