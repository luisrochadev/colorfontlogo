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

$("#productScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#customBlock").offset().top
    }, 600);
});

$(function() { 
    $("#btnSave").click(function() { 
        html2canvas($("#customIcon"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas); 
                $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
    });
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

var client = new ZeroClipboard( document.getElementById("copy-button") );

$(function() { 
client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    $('#copied').css("visibility", "visible"); 
  } );
  } );
} );