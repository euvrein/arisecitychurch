function display_carousel() {
    $('#carousel_div').html("\
        <div id='main-page-carousel' class='carousel slide' data-bs-ride='carousel'>\
            <!-- Indicators/dots -->\
            <div class='carousel-indicators'>\
                <button type='button' data-bs-target='#main-page-carousel' data-bs-slide-to='0' class='active'></button>\
                <button type='button' data-bs-target='#main-page-carousel' data-bs-slide-to='1'></button>\
                <button type='button' data-bs-target='#main-page-carousel' data-bs-slide-to='2'></button>\
            </div>\
            <!-- The slideshow/carousel -->\
            <div class='carousel-inner'>\
                <div class='carousel-item active'>\
                    <img src='../img/main-1.jpg' alt='Worship' class='d-block w-100'>\
                </div>\
                <div class='carousel-item'>\
                    <img src='../img/main-2.jpg' alt='Worship' class='d-block w-100'>\
                </div>\
                <div class='carousel-item'>\
                    <img src='../img/main-3.jpg' alt='Worship' class='d-block w-100'>\
                </div>\
            </div>\
        </div>\
    ");
}
