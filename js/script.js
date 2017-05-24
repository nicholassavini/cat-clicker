$(document).ready(function () {
    var $kittenElem = $('#kittens');

    var kittens = ['Chester', 'Fluffernutter'];

    $.each(kittens, function(index) {
        $kittenElem.append('<img src="img/' + kittens[index] +
                           '.jpg" class="img-responsive col-md-3" id="kitten">');
    });
    return false;
});
