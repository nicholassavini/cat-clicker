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
            listView.init();
            catView.init();
        },
        getAllKittens: function() {
            return model.kittens
        },
        getKitten: function(number) {
            return model.kittens[number];
        },
        addKitten: function(e) {
                var kittenNum = e.target.id.toString();
                var allKittens = this.getAllKittens()
                allKittens[kittenNum].clicks++;
                var currentCount = allKittens[kittenNum].clicks
                $('#' + kittenNum + 'Count').html(currentCount);
        }
    };


    var listView = {
        init: function() {
            this.render();
        },
        render: function() {
            $.each(octopus.getAllKittens(), function(index) {
                $('#kittenList').append('<button class="btn btn-default" type="button" id="'
                + index + '">' + octopus.getKitten(index).name + '</button>');
            });
        }
    }


    var catView = {
        init: function() {
            $('body').delegate("img", "click", function(e) {
                octopus.addKitten(e);
            });

            this.render();
        },
        render: function() {
            $('button').click(function(e) {
                var kittenNum = e.target.id.toString();
                var kitten = octopus.getKitten(kittenNum);
                $('#kittens').html('<h2>' + kitten.name + '</h2>' + '<img src="'
                                    + kitten.image + '" class="img-responsive" id="'
                                    + kittenNum + '">' + "<h3>" + kitten.name
                                    + ' has been clicked <span id="' + kittenNum
                                    + 'Count">' + kitten.clicks
                                        + '</span> times.</h3>');
            });
        }
    }
    octopus.init();
})
