Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    wx.request({
      url: 'https://www.lmxljc.xyz/index',
      success: function (res) {
        var setInter = setTimeout(function () {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
          clearInterval(setInter);
        }, 1000)
        console.log(res);
        that.setData({
          "msg":res.data,
        })
      },
      fail: function(){
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      }
    }) 
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
    
  }
})