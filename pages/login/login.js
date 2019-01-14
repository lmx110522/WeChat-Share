var app = getApp();
var baseUrl = getApp().baseUrl;
var ctx;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    text: '',
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    drawPic(that);
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
  change: function () {
    var that = this;
    drawPic(that);
  },
  mobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  }
})


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
function randomColor(min, max) {
  var r = randomNum(min, max);
  var g = randomNum(min, max);
  var b = randomNum(min, max);
  return "rgb(" + r + "," + g + "," + b + ")";
}

/**绘制验证码图片**/
function drawPic(that) {
  ctx = wx.createCanvasContext('canvas');
  /**绘制背景色**/
  ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
  ctx.fillRect(0, 0, 90, 28)
  /**绘制文字**/
  var arr;
  var text = '';
  var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
  for (var i = 0; i < 4; i++) {
    var txt = str[randomNum(0, str.length)];
    ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
    ctx.font = randomNum(20, 26) + 'px SimHei'; //随机生成字体大小
    var x = 5 + i * 20;
    var y = randomNum(20, 25);
    var deg = randomNum(-20, 20);
    //修改坐标原点和旋转角度
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(txt, 5, 0);
    text = text + txt;
    //恢复坐标原点和旋转角度
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
  }
  /**绘制干扰线**/
  for (var i = 0; i < 4; i++) {
    ctx.strokeStyle = randomColor(40, 180);
    ctx.beginPath();
    ctx.moveTo(randomNum(0, 90), randomNum(0, 28));
    ctx.lineTo(randomNum(0, 90), randomNum(0, 28));
    ctx.stroke();
  }
  /**绘制干扰点**/
  for (var i = 0; i < 20; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(randomNum(0, 90), randomNum(0, 28), 1, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.draw(false, function () {
    that.setData({
      text: text
    })
  });
}