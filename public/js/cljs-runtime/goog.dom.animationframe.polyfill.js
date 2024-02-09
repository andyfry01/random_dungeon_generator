goog.provide("goog.dom.animationFrame.polyfill");
goog.dom.animationFrame.polyfill.ENABLED = goog.define("goog.dom.animationFrame.polyfill.ENABLED", true);
goog.dom.animationFrame.polyfill.install = function() {
  if (goog.dom.animationFrame.polyfill.ENABLED) {
    var vendors = ["ms", "moz", "webkit", "o"];
    var v;
    for (var i = 0; v = vendors[i] && !goog.global.requestAnimationFrame; ++i) {
      goog.global.requestAnimationFrame = goog.global[v + "RequestAnimationFrame"];
      goog.global.cancelAnimationFrame = goog.global[v + "CancelAnimationFrame"] || goog.global[v + "CancelRequestAnimationFrame"];
    }
    if (!goog.global.requestAnimationFrame) {
      var lastTime = 0;
      goog.global.requestAnimationFrame = function(callback) {
        var currTime = (new Date).getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        lastTime = currTime + timeToCall;
        return goog.global.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
      };
      if (!goog.global.cancelAnimationFrame) {
        goog.global.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }
  }
};

//# sourceMappingURL=goog.dom.animationframe.polyfill.js.map
