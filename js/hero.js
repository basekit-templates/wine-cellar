// ----------------------------------------
// Kings Template: JS > Hero JS
// ----------------------------------------


var imageHeight = $(".hero").height();
var imagePosition = $(".hero").position();
var imageTriggerValue = imageHeight + imagePosition.top;
var window_height = window.innerHeight;
var offsetAmount;

function checkImageDimensions() {
    imageHeight = $(".hero").height();
    imagePosition = $(".hero").position();
    imageTriggerValue = imageHeight + imagePosition.top;
    window_height = window.innerHeight;
}




// Feature parralax fade effect
var scrollEffect = function (elem) {

    // How high the window is

    if ( window.pageYOffset > (imageTriggerValue - window_height)  ) {

        if(imageTriggerValue > window_height) {
            offsetAmount = window.pageYOffset - (imageTriggerValue - window_height);
        }
        else {
            offsetAmount = window.pageYOffset;
        }

        // Apply styles as user scrolls
        elem.setAttribute(
            "style", "opacity:" + Math.max(0, parseFloat(1-(2/window_height*offsetAmount)).toFixed(2)) + "; -webkit-transform: translateY(" + offsetAmount + "px)"
        );
     }

};

var elem = document.querySelector('.content-inner-wrap');


window.onscroll = function(e) {
    if (elem) {
        scrollEffect(elem);
    }
};

$( window ).resize(function() {
  checkFeatureDimensions();
});

