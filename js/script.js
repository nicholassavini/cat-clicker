$(document).ready(function () {
    // get kitten elements
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

    // generate the selected kiitten
    $('button').click(function(e) {
        $kittenElem.empty();
        var index = e.target.id.toString();
        kitten = kittens[index];
        $kittenElem.append('<h2>'
                            + kitten.name + '</h2>' + '<img src="'
                            + kitten.image + '" class="img-responsive" id="'
                            + index + '">' + "<h3>" + kitten.name
                            + ' has been clicked <span id="' + index + 'Count">'
                            + kitten.clicks + '</span> times.</h3>');
    });

    // increment click count
    $('body').delegate("img", "click", function(e) {
        var kittenNum = e.target.id.toString();
        kittens[kittenNum].clicks++
        var currentCount = kittens[kittenNum].clicks
        var kittenCounter = '#' + kittenNum + 'Count';
        console.log(kittenCounter);
        $(kittenCounter).html(currentCount);
    });
    return false;
});
