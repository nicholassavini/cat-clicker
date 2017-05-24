$(document).ready(function () {
    var $body = $('body');
    var kittens = ['Mittens', 'Whiskers'];
    $.each(kittens, function(index) {
        console.log(kittens[index]);
    });
    return false;
});
