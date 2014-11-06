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
})();
