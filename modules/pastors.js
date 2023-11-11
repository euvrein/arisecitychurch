var pastors = [
    {
        "pastor_name":"Mike Fernandez",
        "title": "Senior Pastor",
        "description": "Quis ipsum suspendisse ultrices gravida. Ultricies leo integer malesuada nunc vel risus commodo. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        "image_url": "../img/pastors/mike.jpg"
    },
    {
        "pastor_name":"Ben Hadlos",
        "title": "Pastor",
        "description": "Quis ipsum suspendisse ultrices gravida. Ultricies leo integer malesuada nunc vel risus commodo. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        "image_url": "../img/pastors/ben.jpg"
    },
    {
        "pastor_name":"Roger Cortez",
        "title": "Pastor",
        "description": "Quis ipsum suspendisse ultrices gravida. Ultricies leo integer malesuada nunc vel risus commodo. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        "image_url": "../img/pastors/roger.jpg"
    },  
    {
        "pastor_name":"Alex Gocon",
        "title": "Speaker",
        "description": "Quis ipsum suspendisse ultrices gravida. Ultricies leo integer malesuada nunc vel risus commodo. Odio pellentesque diam volutpat commodo sed egestas egestas.",
        "image_url": "../img/pastors/alex.jpg"
    }
];


function display_pastors(){
    $('#pastors_div').html("\
        <h1 class='text-center'>Our Pastors and Speakers</h1>\
        <div id='pastors_sub_div' class='row align-items-center justify-content-center'></div>\
    ");
    for (i = 0; i < pastors.length; i++) {    
        $('#pastors_sub_div').append("\
            <div class='col-md-3 mt-3 text-center'>\
                <img class='rounded-circle p-1 pt-3 pastor-img' src='" + pastors[i].image_url + "' alt='Card image'>\
                <div class='card-body'>\
                    <h4 class='card-title'>" + pastors[i].pastor_name + "</h4>\
                    <p class='card-text'>\
                        " + pastors[i].title + "\
                    </p>\
                </div>\
            </div>\
        ");
    };
}




                

