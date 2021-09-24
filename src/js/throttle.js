var cssbasic = cssbasic || {};
cssbasic.throttle = function (func, wait) {
  return function () {
    var that = this,
      args = [].slice(arguments);
    clearTimeout(func._throttleTimeout);
    func._throttleTimeout = setTimeout(function () {
      func.apply(that, args);
    }, wait);
  };
};
