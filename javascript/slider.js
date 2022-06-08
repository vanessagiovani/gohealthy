var x = 0;

$("#nextSliderButton").click(function(){
    x = (x < 100)?(x+618):0;
    $(".sliderImages").css('left', -x + 'px');
});

$("#prevSliderButton").click(function(){
    x = (x > 0)?(x-618):618;
    $(".sliderImages").css('left', -x + 'px');
});


// function funct(e) {
//     alert("You need to Sign Up first!");
//     e.preventDefault();
// }

