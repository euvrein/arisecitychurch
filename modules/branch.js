var branches = [
    {
        "branch_name":"Dandenong",
        "address": "123 ABC street",
        "contact_number": "+61 234 5698",
        "image_url": "../img/branch/blank.jpg",
        "map_url": "https://maps.google.com",
        "church service": [
            {
                "day": "Sunday",
                "start_time": "08:30am",
                "end_time": "12:00pm"
            }
        ],
    },
    {
        "branch_name":"Dandenong 2",
        "address": "123 ABC street",
        "contact_number": "+61 234 5698",
        "image_url": "../img/branch/blank.jpg",
        "map_url": "https://maps.google.com",
        "church service": [
            {
                "day": "Sunday",
                "start_time": "08:30 AM",
                "end_time": "12:00 PM"
            },
            {
                "day": "Sunday",
                "start_time": "01:30 PM",
                "end_time": "05:00 PM"
            }
        ],
    },
    {
        "branch_name":"Dandenong 3",
        "address": "123 ABC street",
        "contact_number": "+61 234 1234",
        "image_url": "../img/branch/blank.jpg",
        "map_url": "https://maps.google.com",
        "church service": [
            {
                "day": "Sunday",
                "start_time": "08:30 AM",
                "end_time": "12:00 PM"
            }
        ],
    },    {
        "branch_name":"Dandenong 4",
        "address": "123 ABC street",
        "contact_number": "+61 234 5698",
        "image_url": "../img/branch/blank.jpg",
        "map_url": "https://maps.google.com",
        "church service": [
            {
                "day": "Sunday",
                "start_time": "08:30 AM",
                "end_time": "12:00 PM"
            }
        ],
    },    {
        "branch_name":"Dandenong 5",
        "address": "123 ABC street",
        "contact_number": "+61 234 5698",
        "image_url": "../img/branch/blank.jpg",
        "map_url": "https://maps.google.com",
        "church service": [
            {
                "day": "Sunday",
                "start_time": "08:30 AM",
                "end_time": "12:00 PM"
            }
        ],
    },
];


function display_branches(){
    $('#branches_div').html("\
        <h1 class='text-center'>Choose your Branch</h1>\
        <div id='branches_sub_div' class='row align-items-center justify-content-center col-12'></div>\
    ");

    for (i = 0; i < branches.length; i++) {
        $('#branches_sub_div').append("\
            <div class='card col-lg-3 mt-3'>\
                <img class='card-img-top rounded p-1 pt-3' src='" + branches[i].image_url + "' alt='Card image'>\
                <div class='card-body'>\
                    <h4 class='card-title'>" + branches[i].branch_name + "</h4>\
                    <p class='card-text'>\
                        <i class='fas fa-location'></i>" + branches[i].address + "<br/>\
                        <i class='fas fa-phone'></i>" + branches[i].contact_number  + "<br/>\
                        <span id='branch_service_time_" + i + "'></span>\
                    </p>\
                    <p class='text-center'><a type='button' class='btn btn-outline-dark'><i class='fas fa-church'></i> View Map</a></p>\
                </div>\
            </div>\
        ");
        for (i2 = 0; i2 < branches[i]["church service"].length; i2++){
            var church_service = branches[i]["church service"][i2];
            $('#branch_service_time_' + i).append("\
                        <i class='fas fa-calendar-alt'></i> " + church_service.day + ": " + church_service.start_time + " - " + church_service.end_time + "<br/>\
            ");
        }
    }
}

