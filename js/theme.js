// -----------------------------
// Zest Template: JS > theme.js
// -----------------------------


// ------------------------------
// Ecom Product Slider
// ------------------------------


function ecomproductSlider() {

    // Clone existing gallery and place it outside the widget

    $( ".ecomproduct__product-gallery" ).clone().prependTo( ".bk-zone" );

    // Remove the original gallery

    $( ".product-article .ecomproduct__product-gallery" ).remove();

    // Create Prev and Next buttons

    $(".ecomproduct__product-gallery").append('<li class="btnprev"></li><li class="btnnext"></li>');

    var currentPosition = 0;
    var slide = $( '.ecomproduct__gallery-item' );
    var numberOfSlides = slide.length;
    var nextPosition = 1;
    var prevPosition = numberOfSlides - 1;



    function slideIt(way) {

        if (way == "forward") {
            currentPosition++;
            nextPosition++;
            prevPosition++;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition == numberOfSlides ) {
                prevPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( currentPosition == numberOfSlides ) {
                currentPosition = 0;
            }


        }

        if (way == "backward") {
            currentPosition--;
            nextPosition--;
            prevPosition--;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( nextPosition < 0 ) {
                nextPosition = numberOfSlides - 1;
            }

            if ( currentPosition < 0 ) {
                currentPosition = numberOfSlides - 1;
            }


        }

        // Reset classes
        $( slide ).removeClass("next prev current");

        // Mark Current
        $( slide ).eq(currentPosition).addClass("current");

        // Mark next
        $( slide ).eq(nextPosition).addClass("next");

        // Mark previous
        $( slide ).eq(prevPosition).addClass("prev");


    }

    slideIt();



    // Click next

    $( '.ecomproduct__product-gallery .btnnext' ).click(function() {
        slideIt("forward");
    });



    // Swipe left

    $( '.ecomproduct__product-gallery' ).on("swipeleft",function(){
        slideIt("forward");
    });



    // Click prev

    $( '.ecomproduct__product-gallery .btnprev' ).click(function() {
        slideIt("backward");
    });

    // Swipe right

    $( '.ecomproduct__product-gallery' ).on("swiperight",function(){
        slideIt("backward");
    });

}




// ---------------------------------
// Closing Overlay
// ---------------------------------


function closeEverything() {
    $( ".widget__extendednavigation" ).removeClass( "open" );
    $( "body, html" ).removeClass( "navigation--open" );
    $( "body, html" ).removeClass( "search--open" );
    $( "body, html" ).removeClass( "basket--open" );
    $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    $( ".navigation-item.folder" ).removeClass( "open" );
}




// ---------------------------------
// Ecom Products List
// Make while product tile clickable
// ---------------------------------


function ecomProductClickable() {

    var metaKeyPressed = false;

    // Add class to each clickable item

    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    // Detect meta key press

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });

    // On click open the page or new window

    $('.product-item').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });
}




// ---------------------------------
// Ecom One Image detection
// ---------------------------------

function ecomProductOneImage() {

    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0) {
       $("body").addClass("product--one-image");
    }
}




// ---------------------------------
// Published Mode Detection
// ---------------------------------


var publishedmode = true;


if($("body.edit-mode").length > 0) {
    publishedmode = false;
}




// ---------------------------------
// Basket Overlay
// ---------------------------------

if(publishedmode==true) {

    $(document).on("click", ".ecombasket__basket-toggle", function() {
        $( "body, html" ).toggleClass( "basket--open" );
    });


    $(document).on("click touchstart", ".basket-body", function(event) {
        if( $(event.target).is(".basket-body") ) {
            closeEverything();
        }
    });



    $('.ecombasket__basket-body').click(function(e) {
        if (e.target == this) {
            closeEverything();
        }
    });
}





// On ESC key

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeEverything();
    }
};





// ---------------------------------
// Run it
// ---------------------------------



$(document).ready(function() {
    ecomProductClickable();
    ecomproductSlider();
    ecomProductOneImage();

}); // Document Ready



