$(function() {
    var model = {
        kittens = [
            {name: 'Chester', image: 'img/Chester.jpg', clicks: 0},
            {name: 'Fluffernutter', image: 'img/Fluffernutter.jpg', clicks: 0},
            {name: 'Marsha', image: 'img/Marsha.jpg', clicks: 0},
            {name: 'Scruffy', image: 'img/Scruffy.jpg', clicks: 0},
            {name: 'Sherbert', image: 'img/Sherbert.jpg', clicks: 0}
        ];
    };

    var octopus {
        getAllKittens: function() {
            return model.kittens
        },
        getKitten: function(index) {
            return kittens[index];
        }
    };

    var listView {
        render: function() {
            $.each(getAllKittens(), function(index) {
            $('#kittenList').append('<button class="btn btn-default" type="button" id="'
                + index + '">' + getKitten.name + '</button>');
    };

    var catView {

    }
})
