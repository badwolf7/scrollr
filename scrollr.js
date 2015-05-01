// Variables
var scrollInt,loc,pos,dur;

function scrollr(e,pos,dur){
    // scrollr function, this is where the magic happens
    e.preventDefault();
    // animate the scrollTop ... it's that easy
    $('body').animate({
        scrollTop: pos
    }, dur, 'swing');
}

// scroll-href for links to specific locations on a page
$('.scrollr-href').click(function(e){
    // get the location we are going to
    var loc = $(this).attr('href');
    // get the location of the element
    var pos = $(loc).offset().top - 18;
    // duration of animation
    var dur = 1000;
    scrollr(e,pos,dur);
});

$('.scrollr-arrow').mousedown(function(e){
    // variable for carrying over what you clicked on
    var obj = $(this);
    // setInterval for repeating the scroll for as long as the arrow is clicked
    scrollInt = setInterval(function(){
        // get the current location of the page
        var pos = $('body').scrollTop();
        if(obj.hasClass('scrollr-arrow-up')){
            // if we are going up subtract from the amount
            pos -= 100;
        }else if(obj.hasClass('scrollr-arrow-down')){
            // if we are going down add to the amount
            pos += 100;
        }
        if(pos < 0){
            // don't want negative positions so lets keep it above 0
            pos = 0;
        }
        // shorter duration for arrows (less distance)
        var dur = 150;
        scrollr(e,pos,dur);
    },130);
}).mouseup(function(){
    // when mouse comes up cancel the interval, don't want the page still scrolling
    clearInterval(scrollInt);
});