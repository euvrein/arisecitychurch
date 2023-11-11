carousel_img = [
    {
        "image_url": "../img/carousel/1001.png",
        "description": "Carousel Image 1"
    },
    {
        "image_url": "../img/carousel/1002.png",
        "description": "Carousel Image 2"
    }
]

function display_carousel() {

    $('#carousel_div').html("\
        <div id='main-page-carousel' class='carousel slide' data-bs-ride='carousel'>\
            <!-- Indicators/dots -->\
            <div class='carousel-indicators'></div>\
            <!-- The slideshow/carousel -->\
            <div class='carousel-inner'></div>\
        </div>\
    ");

    for (i = 0; i < carousel_img.length; i++) {    
        $('.carousel-indicators').append("<button type='button' id='cinds" + i + "' data-bs-target='#main-page-carousel' data-bs-slide-to='" + i + "'></button>");
    };

    for (i = 0; i < carousel_img.length; i++) {    
        $('.carousel-inner').append("\
            <div class='carousel-item' id='cinns" + i + "'>\
                <img src='" + carousel_img[i].image_url + "' alt='" + carousel_img[i].description + "' class='d-block w-100'>\
            </div>\
        ");
    };

    $("#cinds0").addClass("active");
    $("#cinns0").addClass("active");

}
