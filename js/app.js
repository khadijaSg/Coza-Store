
//nav

$(window).scroll(function () {
    console.log(Math.floor($(window).scrollTop()))
    if ($(window).scrollTop() > 1) {
        $(".navbar").css({
            background: "gray",
            top: $(window).scrollTop() + "px"
        })
    }
})





//slider

$('.carousel').carousel({
    interval: 700 * 6
});