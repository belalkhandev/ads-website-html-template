(function($){
    "use-strict"

    //on document ready
    jQuery(document).ready(function() {
        var messageArea = $('.chat-messages');
        messageArea.scrollTop = messageArea.scrollHeight;

        //active owl-carousel for models
        if ($('#model-carousel').length) {
            $('#model-carousel').owlCarousel({
                items: 7,
                loop: true,
                dots: false
            });
        }
        if ($('#amad-carousel').length) {
            $('#amad-carousel').owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                nav: true,
                loop: true,
                autoplay: true,
                navText: ["<i class='bx bx-chevron-left '></i>", "<i class='bx bx-chevron-right'></i>"]
            });
        }
    });

    //on windown load
    jQuery(window).load(function() {
        //
    });

}(jQuery))
