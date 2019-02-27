$(document).ready(function () {

    // scroll magic plugins
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter"

        }

    })
    // tween for icon cards
    var tween = TweenMax.from("#iconSec .card", 1, {
        opacity: 0,
        left: "-100%"
    })


    // scene for icon section
    var scen = new ScrollMagic.Scene({
        triggerElement: "#iconSec",
        reverse: false,
        offset: 500
    }).setTween(tween).addTo(controller)

    // scene for img content section
    // tween for my introduction
    var tween3 = TweenMax.from("#contentImg", 1, {
        left: "-100%",
        opacity: 0
    })
    var tween4 = TweenMax.from("#imgContent .jumbotron", 1, {
        right: "-100%",
        opacity: 0
    })
    var timeline = new TimelineLite();
    timeline.add(tween3).add(tween4)
    var scen3 = new ScrollMagic.Scene({
        triggerElement: "#imgContent",
        offset: 300,
        reverse: false

    }).setTween(timeline).addTo(controller)
    // animation for imgsec  for parallex effect
    var controller2 = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    })
    var tween2 = TweenMax.to("#imgSec", 1, {
        backgroundPosition: "0 50%"
    })
    var scen2 = new ScrollMagic.Scene({
        triggerElement: "#imgSec",
        duration: 300,
    }).setTween(tween2).addTo(controller2)

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
    $("#about").click(function () {
        var scrll = $("#imgContent").offset().top - 100;
        window.scrollTo(0, scrll);

    })
    $("#skills").click(function () {
        var scrll = $("#iconSec").offset().top - 100
        window.scrollTo(0, scrll);

    })



})