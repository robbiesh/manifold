window.onbeforeunload = function(){ window.scrollTo(0,0); }

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
  })
  // .setTween(tween1) // trigger a TweenMax.to tween
  .setTween("#polygon", 0.5, {attr: {points:"0,100 75,100 75,0 0,0"}})
  // .addIndicators({name: "trigger1"})
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
  })
  // .setTween(timeline2) // trigger a TweenMax.to tween
  .setTween("#polygon", 0.5, {attr: {points:"0,100 100,100 100,0 0,0"}})
  // .addIndicators({name: "trigger2"})
  .addTo(controller);


// function start(){
//   console.log('start');
// }
//
// function update(){
//   console.log('animating');
// }
//
// function complete(){
//   console.log('end');
// }


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
