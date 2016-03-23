// SCROLL ACTIONS
$("#getStarted").click(function() {
    $('html, body').animate({
        scrollTop: $("#colorBlock").offset().top
    }, 600);
});

// MODAL ACTIONS

$(function() {                       //run when the DOM is ready
  $(".learnMore").click(function() {  //use a class, since your ID gets mangled
    $('.modal').addClass("is-active");      //add the class to the clicked element
  });
});

$(function() {                       //run when the DOM is ready
  $(".modal-close, .modal-background").click(function() {  //use a class, since your ID gets mangled
    $('.modal').removeClass("is-active");      //add the class to the clicked element
  });
});
