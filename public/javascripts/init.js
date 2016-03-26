// SCROLL ACTIONS
$("#getStarted").click(function() {
    $('html, body').animate({
        scrollTop: $("#brandBlock").offset().top
    }, 600);
});

$("#brandScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#colorBlock").offset().top
    }, 600);
});

$("#colorScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#fontBlock").offset().top
    }, 600);
});

$("#fontScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#logoBlock").offset().top
    }, 600);
});

$("#logoScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#productBlock").offset().top
    }, 600);
});

// MODAL ACTIONS

$(function() {                       
  $(".learnMore").click(function() {  
    $('.modal').addClass("is-active");      
  });
});

$(function() {                     
  $(".modal-close, .modal-background").click(function() {  
    $('.modal').removeClass("is-active");      
  });
});
