// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    height: "auto",
    bottomCnt: 0,
  },
  onReachBottom: function(event) {
    console.log("onReachBottom triggered");
    this.setData({
      "bottomCnt": this.data.bottomCnt + 1,
    });
  },
  changeHeight: function(event) {
    console.log(event.detail.value);
    this.setData({
      "bottomCnt": 0,
      "height": event.detail.value,
    });
  },
})
