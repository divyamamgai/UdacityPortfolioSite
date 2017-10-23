(function (w, d, $, t) {
  $(function () {
    var $logo = $('.logo', d);
    $logo.Trail({
      stagger: true,
      staggerDelay: 0.1,
      duration: 2,
      ease: Power4.easeInOut,
      onComplete: function () {
        var trail = $logo.GetTrail();
        t.to(trail.paths, 2, {
          fillOpacity: 1,
          strokeOpacity: 0,
          ease: Power4.easeInOut
        });
      }
    });
    $logo.GetTrail().play();
  });
})(window, document, jQuery, TweenMax);
