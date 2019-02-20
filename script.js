$(document).ready(function () {

    var jumbo = $(".jumbotron")
    TweenLite.from(jumbo, 2, {
        translateX: 100,
        opacity: 0,
        ease: Power3.easeOut
    });
    $(window).scroll(function () {
        if (scrollY >= 600) {
            if (scrollY >= 2300)
                TweenLite.to(".navbar", 1, {
                    background: "linear-gradient(to right, rgb(0, 128, 107), rgb(3, 150, 142))",
                    ease: Power2.easeOut
                });

            else {
                TweenLite.to(".navbar", 1, {
                    background: "#00000088"


                })
            }
        } else {
            TweenLite.to(".navbar", 1, {
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