

$(document).ready(function () {

   


    // particles effect
particlesJS.load("particals","./js/particlesjs-config.json")
    // scroll magic plugins
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter"

        }

    })
    // animation for partical section
     var timeline =new TimelineMax()
    timeline    
    .from($("#particals"),.8,{opacity:0})
    .from(".particles-js-canvas-el",1,{scale:0})
    .from(".navbar",.5,{y:"-100%"}) 
    .staggerFrom(".navbar .nav-item",.8,{opacity:0,x:-50},.2,1.2)
      .from("#particals .jumbotron",.8,{opacity:0,y:100},1.8)

// animation for slider


    var controller2 = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    })
     var tween2= TweenMax.to("#particals", 1, {
        backgroundPosition: "0 70%"
    })
    var scen2 = new ScrollMagic.Scene({
        triggerElement: "#particals",
        duration: 300,
    }).setTween(tween2).addTo(controller2)




// new scene for work section
var tween3=TweenMax.staggerFrom("#cardGroup .card-img-top img",1,{opacity:0,y:100},.2)
var scen3 = new ScrollMagic.Scene({
    triggerElement: "#cardGroup",
    reverse: false,
    offset: 100
}).setTween(tween3).addTo(controller)

// for work section while scrolling
if(window.innerWidth>768){
    // animation with scroll
var tween4 = TweenMax.to("#cardGroup .card-img-top img",8,{y:"-=30%"})
}
else{
    var tween4 = TweenMax.staggerTo("#cardGroup .card-img-top img",8,{y:"-=30%"},2)
}
var scene4=new ScrollMagic.Scene({
    triggerElement: "#cardGroup",
    offset: 400,
    duration:1000
}).setTween(tween4).addTo(controller)









    // tween for icon cards
    var skillTimeline = new TimelineMax()
    skillTimeline.add( TweenMax.staggerFrom("#iconSec .card", 1, {
        opacity: 0,
        left: "-100%"
    },.2),
    TweenMax.from(
        "#iconSec .progress .progress-bar", 1, {width:"0%"}))
    // scene for icon section
    var scen = new ScrollMagic.Scene({
        triggerElement: "#iconSec",
        reverse: false,
        offset: 100
    }).setTween(skillTimeline).addTo(controller)

   
    // animation for imgsec  for parallex effect
   
   
    // navbar on scroll event
    $(window).scroll(function () {
        if (scrollY >= 600) {
            if (scrollY >= 2300)
                TweenMax.to(".navbar", 1, {
                    background: "linear-gradient(to right, rgb(0, 128, 107), rgb(3, 150, 142))",
                    ease: Power2.easeOut
                });

            else {
                TweenMax.to(".navbar", 1, {
                    background: "#00000088"


                })
            }
        } else {
            TweenMax.to(".navbar", 1, {
                background: "none"


            })
        }


    });
  
    var scrll2 = $("#iconSec").offset().top 

    $("#skills").click(function () {
       
        window.scroll(0, scrll2);

    })
    var scrll1 = $(".about-me").offset().top

    $("#about").click(function () {
       
        window.scroll(0, scrll1);

    })



 
})