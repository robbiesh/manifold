var controller = new ScrollMagic.Controller();

// var tl = new TimelineMax();

var tween1 = TweenMax.to("#polygon", 1.5, {attr: {points:"0,100 20,100 100,0 100,0 0,0"}});
// var tween2 = tl.to("#polygon", 1.5, {attr: {points:"0,100 0,100 100,80 100,0 0,0"}});

var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: "25%"
        })
        .setTween(tween1) // trigger a TweenMax.to tween
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger2",
          duration: "50%"
        })
        .setTween("#polygon", 1.5, {attr: {points:"0,100 0,100 100,80 100,0 0,0"}}) // trigger a TweenMax.to tween
        .addTo(controller);
