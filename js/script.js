$(document).ready(function () {
    // generate kittens
    var $kittenElem = $('#kittens');
    var $kittenList = $('#kittenList')

    // information for all the kittens
    var kittens = [
        {name: 'Chester', image: 'img/Chester.jpg', clicks: 0},
        {name: 'Fluffernutter', image: 'img/Fluffernutter.jpg', clicks: 0},
        {name: 'Marsha', image: 'img/Marsha.jpg', clicks: 0},
        {name: 'Scruffy', image: 'img/Scruffy.jpg', clicks: 0},
        {name: 'Sherbert', image: 'img/Sherbert.jpg', clicks: 0}
    ];

    // generate the sidebar list with the kittens
    $.each(kittens, function(index) {
        kitten = kittens[index];
        $kittenList.append('<button class="btn btn-default" type="button" id="'
                            + index + '">' + kitten.name + '</button>');
    });
    $('button').click(function(e) {
        var index = e.target.id.toString();
        kitten = kittens[index];
        $kittenElem.append('<h2>'
                            + kitten.name + '</h2>' + '<img src="'
                            + kitten.image + '" class="img-responsive" id="'
                            + kitten.name + '">' + "<h3>" + kitten.name
                            + ' has been clicked <span id="' + kitten.name
                            + 'Count">0</span> times.</h3>');
    });

    // increment click count
    var counter = 0;
    $('img').click(function(e) {
        var kittenCounter = '#' + e.target.id.toString() + 'Count';
        var count = $(kittenCounter).text();
        count++;
        $(kittenCounter).html(count);
    });
    return false;
});
