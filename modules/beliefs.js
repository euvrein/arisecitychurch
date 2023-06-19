beliefs = [
    "We Give ourselves to Him as a Living Sacrifice",
    "We are being transformed through the renewing of our minds with the Word of God",
    "We are not conformed to the standards of the age in which we live",
    "We respect the Church by seeing ourselves from God’s perspective as members of the body of Christ in proper relationship to each other",
    "We exercise the spiritual gifts God has given us in the Church",
    "We respect the world by loving each other",
    "We practice the principles of Scripture in relation to the unsaved",
    "We overcome evil with good",
    "We respect to governing Authorities submitting to authority",
    "We recognize the purpose God accomplishes through the civil and criminal systems",
    "We do our duty as citizens",
    "We live out the law of love",
    "We reflect godliness in character and conduct",
    "We do not critically judge others",
    "We respect the personal opinions of others on debatable issues",
    "We remember that we account to the Lord Jesus Christ-not each other",
    "We are not being a hindrance or stumbling block to other believers",
    "We build up and please each other",
    "We use or not use our freedom in Christ as is appropriate",
    "We accept each other as Christ has accepted us"    
]

function display_beliefs() {
    $("#beliefs_div").html("\
        <h1>Our Statement of Beliefs</h1>\
        <div id='beliefs_sub_div'></div>\
        <p><i class='text-secondary'>We draw these beliefs and principles from an excerpt of Dennis J Mock New Testament Survey 1989 Atlanta, GA</i></p>\
    ");

    
    for (i = 0; i < beliefs.length; i++) {
        $("#beliefs_sub_div").append("\
            <p><i class='fa-sharp fa-solid fa-circle-check text-success'></i> " + beliefs[i] + "</p>\
        ");
    }
}
