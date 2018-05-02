var controller = new ScrollMagic.Controller();

var tween2 = TweenMax.fromTo("#polygon", 0.5, {attr: {points:"0,100 75,100 75,0 0,0"}}, {attr: {points:"0,100 100,100 100,0 0,0"}});
var tween1 = TweenMax.fromTo("#polygon", 0.5, {attr: {points:"0,100 40,100 85,0 0,0"}}, {attr: {points:"0,100 75,100 75,0 0,0"}});

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
  })
  .setTween(tween1) // trigger a TweenMax.to tween
  // .addIndicators({name: "trigger1"})
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
  })
  .setTween(tween2) // trigger a TweenMax.to tween
  // .addIndicators({name: "trigger2"})
  .addTo(controller);


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {

      // console.log($(box));
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated

      if ($(box).hasClass("terminal")) {

        setTimeout(function(){
          $('.typed-1').typist({speed: 12, text: 'asdfjkl'})
          .typistPause(2000)
          .on('end_pause.typist', function() {

            $(".typed-1").addClass("typed--hidden");

            setTimeout(function(){
              $('.typed-2').typist({speed: 12, text: './deploy.sh <bucket asdfjk> <stack>'})
              .typistPause(2000)
              .on('end_pause.typist', function() {

                $(".typed-2").addClass("typed--hidden");

                setTimeout(function(){
                  $('.typed-3').typist({speed: 12, text: 'aws --profile mlp lambda invoke -- function-name mlp-init'});
                }, 1000);

              });
            }, 1000);

          });
        }, 1000);
        //

        //
        // setTimeout(function(){
        //   $('.typed-2').typist({speed: 12, text: './deploy.sh <bucket asdfjk> <stack>'});
        // }, 2000);

      }
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
