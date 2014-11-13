/**
 *
 * site
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-06
 * @update 2014-11-06
 */

(function () {

  var _  = {
    one: function (str) {
      return document.querySelector(str);
    },
    all: function (str) {
      return document.querySelectorAll(str);
    }
  };

  if(_.one('#close')) {
    _.one('#close').onclick = function () {
      var _this = this;

      _this.classList.add('active');
      _.one('.aside').classList.add('hide');

      setTimeout(function () {
        _this.classList.remove('active');
      }, 500);
    };
  }

  if (_.one('#open')) {
    _.one('#open').onclick = function () {
      _.one('.aside').classList.remove('hide');
      _.one('#close').classList.add('active');
    }
  }

  var dataForWeixin = {
    "appid": '',
    "img_url": 'http://fantasyshao.qiniudn.com/logo.png',
    "link": location.href,
    "title": _.one('title').innerHTML,
    "desc": _.all('meta[name="description"]').innerHTML
  };

  var onBridgeReady = function() {
    try {
      // 分享給好友
      WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke('sendAppMessage', dataForWeixin, function(res) {});
      });
      // 分享到朋友圈
      WeixinJSBridge.on('menu:share:timeline', function(argv) {
        WeixinJSBridge.invoke('shareTimeline', dataForWeixin, function(res) {});
      });
      // 分享到騰訊微博
      WeixinJSBridge.on('menu:share:weibo', function(argv) {
        WeixinJSBridge.invoke('shareWeibo', dataForWeixin, function(res) {});
      });
    } catch(e) {
      console.debug(e);
    }
  };

  document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);

})();
