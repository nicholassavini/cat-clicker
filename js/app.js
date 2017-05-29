$(function() {
    var model = {
        kittens: [
            {name: 'Chester', image: 'img/Chester.jpg', clicks: 0},
            {name: 'Fluffernutter', image: 'img/Fluffernutter.jpg', clicks: 0},
            {name: 'Marsha', image: 'img/Marsha.jpg', clicks: 0},
            {name: 'Scruffy', image: 'img/Scruffy.jpg', clicks: 0},
            {name: 'Sherbert', image: 'img/Sherbert.jpg', clicks: 0}
        ]
    };

    var octopus = {
        init: function() {
            listView.render();
        },
        getAllKittens: function() {
            return model.kittens
        },
        getKitten: function(number) {
            return model.kittens[number];
        }
    };

    var listView = {
        render: function() {
            $.each(octopus.getAllKittens(), function(index) {
                $('#kittenList').append('<button class="btn btn-default" type="button" id="'
                + index + '">' + octopus.getKitten(index).name + '</button>');
            });
        }
    }

    var catView = {

    }
    octopus.init();
})
