$(document).ready(function(){
   //sticky 
    $('.js--services-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
    });
    //mixitup (portfolio section)
    var mixer=mixitup('.container');
});


