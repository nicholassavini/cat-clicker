$(document).ready(function () {
    // generate kittens
    var $kittenElem = $('#kittens');

    var kittens = ['Chester', 'Fluffernutter'];

    $.each(kittens, function(index) {
        kitten = kittens[index]
        $kittenElem.append('<div class="col-md-3">' + '<h2>'
                            + kitten + '</h2>' + '<img src="img/' + kitten
                            + '.jpg" class="img-responsive" id="' + kitten
                            + '">' + "<h3>" + kitten + ' has been clicked <span id="'
                            + kitten + 'Count">0</span> times.</h3>'
                            + '</div>');
    });

    // increment click count
    var counter = 0;
    $('img').click(function(e) {
        var kittenCount = '#' + e.target.id.toString() + 'Count';
        var counter = $(kittenCount).text();
        counter++;
        $(kittenCount).html(counter);
    });
    return false;
});
