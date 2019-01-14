
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    article_content: WxParse.wxParse('detail', 'html', "很多小伙伴看到别人家精美的手帐，总是羡慕不已。为什么别人家的手帐就是各种好看？自己明明很用心去做了，却总是看起来那么朴素?尽管网上各种铺天盖地的手绘、拼贴教程，还是不禁有人感叹：你以为我缺的是手帐吗？不，咱缺的是手啊。", that, 0)
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

  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },
})