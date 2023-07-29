faqs = [
    {
        'question':'What is Christianity?',
        'answer':'It is a Movement, belief and religion that has originated from the Lord Jesus Christ as he ascended to heaven in <i>Acts 1</i> when he appointed certain apostles to become his witnesses in Jerusalem, Judea, Samaria and to the furthermost parts of the world. <br/><br/>\
        Christianity holds the idea that <strong>Christ is the Centre of everything</strong>, not only is he the Centre of our Worship but he (Jesus Christ) is the Centre of History, Centre of Geography and Centre of our Lives, and as believers of Christ we believe that Christ is involved in every aspect of our being, that whether we eat or drink or whatsoever we do, we do it all in the name of Lord Jesus Christ.'
    },
    {
        'question':'Who is Jesus Christ in our Life?',
        'answer':'God presented Christ as a sacrifice of atonement,[i] through the shedding of his blood—to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished— he did it to demonstrate his righteousness at the present time, so as to be just and the one who justifies those who have faith in Jesus.\
        <p class="text-end"><i>Romans 3:25-26</i><p><hr />\
        Christ to a Christian is the passageway to God, we were at once enemies of God and distant from our Creator, but Christ became our peace meal offering, he became the propitiation, meaning the only sacrifice that was pleasing to God for us to be able to sit at his table, knowing that God lives in an unapproachable light, <strong>Jesus Christ became the way the truth and life</strong> to bring us back to the Father.'
    },
    {
        'question':'What is the Holy Trinity?',
        'answer':'<p>Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit</p>\
        <p class="text-end"><i>Matthew 28:19</i></p>\
        <p>May the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with you all</p>\
        <p class="text-end"><i>2 Corinthians 13:14</i></p><hr />\
        Even though the 66 Books of the Bible did not make one mention of the word Trinity, we believe that There’s Three Persons that makes God. <strong>Three different Entities but same existential power</strong> meaning there’s nothing the Father can do that the Son cannot do nor the Spirit cannot do. They’ve always existed as one forever, no beginning, no end.'
    },
    {
        'question':'Why do we need to go to Church?',
        'answer':'"not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."\
        <p class="text-end"><i>Hebrews 10:25</i><p><hr/>\
        God created a big family of believers even though there are many churches, and even though these churches don’t meet at the same time, in the Eyes of the Living God they are His, our limitation as humans are the only barrier that keeps us from worshipping Him altogether at the same time. We go to Church to hear the Preaching of the Word, to hear Christ lifted up and exalted, to sing the songs of adoration and of fervent Love for our Saviour and at the same time, to admonish, encourage other believers.\
        '
    },
    {
        'question':'Mission of Our Church',
        'answer':'Our Church exists to bring glory to Our Lord and Saviour Jesus Christ and to preach and teach people and make them disciples of our Lord. <strong>We aim to equip every member with the Armour of God</strong> preparing them to always be ready to give an answer to everyone who ask them to give a reason for their hope in Christ doing it with gentleness and respect. We work to reach our Community with the glorious Gospel of the Living God and bring light to this age of darkness and prepare each heart to meet the Saviour with a transcendent joy in their heart.'
    }
]


function display_footer() {
    $('footer').html("\
    <div class='col-md-3 p-5 bg-147ecf text-white d-none d-md-block'>\
        <p><q>Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.</q></p>\
        <p class='text-end'>Matthew 28:19-20</p>\
    </div>\
    <div class='col-md-9 p-3 bg-arise text-white'>\
        <div class='row'>\
            <h5>Arise City Church</h5>\
        </div>\
        <div class='row col-md-12'>\
            <div class='col-md-3 p-sm-3'>\
                <h6>Arise City Church</h6>\
                <p>Welcome to our modest church, which fosters a friendly environment. Join us as we celebrate a common spiritual path and sharing in the joy of worship.</p>\
            </div>\
            <div class='col-md-3 p-sm-3'>\
                <h6>Frequently Asked Questions</h6>\
                <p id='faq-footer'></p>\
            </div>\
            <div class='col-md-3 p-sm-3'>\
                <h6>Our Branches</h6>\
                <p>\
                    <a class='footer-link' href='https://www.facebook.com/AriseCityChurchAU'  target='_blank'>Doveton Victoria AU</a><br />\
                    <a class='footer-link' href='https://www.facebook.com/AriseImus' target='_blank'>Imus Cavite PH</a><br />\
                    <a class='footer-link' href='https://www.facebook.com/arisecitychurch.pamp' target='_blank'>Magalang Pampanga PH</a><br />\
                    <a class='footer-link' href='https://www.facebook.com/profile.php?id=100087763931126' target='_blank'>Labuan Pangasinan PH</a><br />\
                </p>\
            </div>\
            <div class='col-md-3 p-sm-3'>\
                <h6>Other Links</h6>\
                <p>Discover valuable resources, insightful teachings, and connect with a community of believers through these links.</p>\
                <p>\
                    <a class='fa-brands fa-facebook fa-xl footer-link' href='https://www.facebook.com/AriseCityChurchAU' target='_blank' ></a>\
                    <a class='fa-brands fa-facebook-messenger fa-xl footer-link' href='https://m.me/arise.citychurch' target='_blank' ></a>\
                    <a class='fa-brands fa-spotify fa-xl footer-link' href='#' target='_blank'></a>\
                    <a class='fa-brands fa-youtube fa-xl footer-link' href='https://www.youtube.com/channel/UCuLu-rVQxYVBCOfcsD5YTAQ' target='_blank' ></i></a>\
                    <a class='fa-brands fa-soundcloud fa-xl footer-link' href='https://soundcloud.com/user-296602812-620079985' target='_blank' ></a>\
                </p>\
            </div>\
        </div>\
    </div>\
    ");

    for (i = 0; i < faqs.length; i++) {
        $('#faq-footer').append("\
            <a href='' class='footer-link' data-bs-toggle='modal' data-bs-target='#FAQ-Modal-" + i + "'>" + faqs[i].question + "</a><br />\
        ");
    }

    for (i = 0; i < faqs.length; i++) {
        $("body").append("\
        <div class='modal fade' id='FAQ-Modal-" + i + "'>\
            <div class='modal-dialog text-arise'>\
                <div class='modal-content'>\
                <div class='modal-header'>\
                    <h4 class='modal-title'>" + faqs[i].question + "</h4>\
                    <button type='button' class='btn-close' data-bs-dismiss='modal'></button>\
                </div>\
                <div class='modal-body'>\
                    <p>" + faqs[i].answer + "</p>\
                </div>\
            </div>\
        </div>\
        ");
    }

}