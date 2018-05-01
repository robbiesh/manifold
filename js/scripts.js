var controller = new ScrollMagic.Controller();

var move_polygon = new TimelineMax()
  .to("#polygon", 0.5, {attr: {points:"0,100 75,100 75,0 0,0"}});

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
  })
  .setTween(move_polygon) // trigger a TweenMax.to tween
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
  })
  .setTween("#polygon", 0.5, {attr: {points:"0,100 100,100 100,0 0,0"}}) // trigger a TweenMax.to tween
  .addTo(controller);


// $(function () { // wait for document ready
// 	// init
// 	var controller = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onLeave'
// 		}
// 	});
//
// 	// get all slides
// 	var slides = document.querySelectorAll("section");
//
// 	// create scene for every slide
// 	for (var i=0; i<slides.length; i++) {
// 		new ScrollMagic.Scene({
// 				triggerElement: slides[i]
// 			})
// 			.setPin(slides[i])
// 			.addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);
// 	}
// });

jQuery(function($) {

  

  $('.typed').typist({speed: 12, text: 'asdfjkl\n'})
    .typistPause(3000)
    .typistAdd('./deploy.sh <bucket asdfjk> <stack>\n')
    .typistPause(3000)
    .typistAdd('aws --profile mlp lambda invoke -- function-name mlp-init');

});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
