$(document).ready(function () {

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

        window.scrollTo(0, $("#imgContent").offset().top - 100);

    })
    $("#skills").click(function () {

        window.scrollTo(0, $("#iconSec").offset().top - 100);

    })



})