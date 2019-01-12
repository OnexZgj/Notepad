# Notepad
最近由于项目需求，研究了几天小程序，写了一个记事本DEMO,先上效果图，算是一个类似于本地的记事本

## 1.添加记录页面
![.添加记录.png](https://upload-images.jianshu.io/upload_images/5249989-181102466a214d1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2.选择照片界面
![选择照片.png](https://upload-images.jianshu.io/upload_images/5249989-fd9028d0ce7b6cf6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 3.检索记录界面
![检索记录.png](https://upload-images.jianshu.io/upload_images/5249989-41528c801d270e55.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 3.日期选择界面
![日期选择.png](https://upload-images.jianshu.io/upload_images/5249989-5dcfa331bcce60a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 4.历史记录
![历史记录.png](https://upload-images.jianshu.io/upload_images/5249989-f73c7fba15a7a65e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 功能介绍：
该小程序实现记录功能，包括添加照片和关键字进行保存一条便签的功能！
后期想法：因为小程序的后台实现是https并且域名必须是注册合法的，所以限制比较大，待后期实现
## 技术介绍：
1. 使用媒体相机添加照片或者从图库中选择
2. 通过操作微信文件相关的API，保存记录先来的便签
3. 通过特定条件查询和检索出相关的便签
4. 删除和更新功能待后期完善

## 注意事项
1. 该项目也验证了网络请求，但是在请求网络的时候要注意，需要在微信小程序开发后台注册相关的域名才可以访问，并且请求方式为https。

2. 小程序对本地的文件限制比较多，保存产生的文件都是小程序自身维护的路径，在手机的sd卡上是找不到实际路径，有点像ios的文件处理一样，所以不大建议做本地文件操作比较多的项目。

3. 几乎用到的API都可以在官方推荐的示例中都可以找到，至于第三方的语音转文字或者记事本即文件预览，这些相关的需求，网上的解决方案也很多，待后期完善。 


如果您需要一款Android平台的记事本APP,推荐使用我自己开源并维护的一款
https://www.jianshu.com/p/948b3b8ebadc 
#### 本项目已全部上传至Github ,地址如下:
 https://github.com/OnexZgj/Notepad  
如果你觉得不错，请给我一个 star ，这是我最大的动力和支持！٩(๑>◡<๑)۶




