(function($){
    "use-strict"

    //on document ready
    jQuery(document).ready(function() {
        //active owl-carousel for models
        if ($('#model-carousel').length) {
            $('#model-carousel').owlCarousel({
                items: 7,
                loop: true,
                dots: false
            });
        }
    });

    //on windown load
    jQuery(window).load(function() {
        //
    });

}(jQuery))