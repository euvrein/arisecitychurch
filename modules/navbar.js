function display_navbar() {
    $("#navbar_div").html("\
        <nav class='navbar navbar-arise navbar-expand-sm fixed-top'>\
            <div class='container-fluid'>\
                <a class='navbar-brand' href='./home.html'>ARISE CITY CHURCH</a>\
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>\
                    <span class='navbar-toggler-icon'></span>\
                </button>\
                <div class='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>\
                    <ul class='navbar-nav'>\
                        <li class='nav-item'>\
                            <a class='nav-link' href='./home.html'>\
                                Home\
                            </a>\
                        </li>\
                        <li class='nav-item dropdown'>\
                            <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown'>Ministries</a>\
                            <ul class='dropdown-menu'>\
                                <li><a class='dropdown-item' href='./hospitality_team.html'>Hospitality Team</a></li>\
                                <li><a class='dropdown-item' href='./kids_ministry.html'>Kids Ministry</a></li>\
                                <li><a class='dropdown-item' href='./youth.html'>Life Group</a></li>\
                                <li><a class='dropdown-item' href='./worship_team.html'>Worship Team</a></li>\
                            </ul>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link' href='./testimonials.html'>\
                                Testimonials\
                            </a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link' href='./donations.html'>\
                                Donations\
                            </a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link' href='./message_us.html'>\
                                Contact Us\
                            </a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
        <div class='navbar navbar-arise navbar-expand-sm row'></div>\
    ");
}