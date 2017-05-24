$(document).ready(function () {
    // generate kittens
    var $kittenElem = $('#kittens');

    var kittens = ['Chester', 'Fluffernutter'];

    $.each(kittens, function(index) {
        $kittenElem.append('<div class="col-md-3">' + '<h3>'
                            + kittens[index] + '</h3>' + '<img src="img/'
                            + kittens[index]
                            + '.jpg" class="img-responsive" id="kitten">'
                            + '</div>');
    });


    // increment click count
    var counter = 0;
    $('img').click(function() {
        counter++;
        $('#number').html(counter);
    });
    return false;
});
