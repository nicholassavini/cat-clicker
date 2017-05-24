$(document).ready(function () {
    // generate kittens
    var $kittenElem = $('#kittens');

    var kittens = ['Chester', 'Fluffernutter'];

    $.each(kittens, function(index) {
        $kittenElem.append('<img src="img/' + kittens[index] +
                           '.jpg" class="img-responsive col-md-3" id="kitten">');
    });


    // increment click count
    var counter = 0;
    $('img').click(function() {
        counter++;
        $('#number').html(counter);
    });
    return false;
});
