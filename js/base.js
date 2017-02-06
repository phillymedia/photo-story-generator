$(document).ready(function() {


    var data = [{
            "imageURL": "https://scontent.xx.fbcdn.net/v/t31.0-8/13517572_10154252286083794_8520530179382894686_o.jpg?oh=c36400b0b2551ae59b3a8c5a8fb680e9&oe=59117DFE",
            "text": "Headline",
            "textPosition": "",
            "subhead": "sample subhead.",
            "byline": "By Jared Whalen",
            "publishDate": "Feb. 10, 2017"
        },
        {
            "imageURL": "https://scontent.xx.fbcdn.net/v/t31.0-8/13482819_10154252288273794_656890906005006841_o.jpg?oh=6af33b6dde4ccc68170e3fa5e192e27c&oe=5902E65A",
            "text": "Nulla nibh erat, consequat varius posuere sit amet, hendrerit in dui. Proin eu fringilla magna. Phasellus tempus lacus ipsum, sollicitudin porttitor enim porttitor quis. Duis tempor diam vel mi vehicula aliquam. Curabitur eu ex massa. Vivamus metus massa, convallis a imperdiet ut, lacinia at sem.",
            "textPosition": "center",
            "subhead": "",
            "byline": "",
            "publishDate": ""
        },
        {
            "imageURL": "https://scontent.xx.fbcdn.net/v/t31.0-8/13475060_10154252287313794_8050554397553032215_o.jpg?oh=96cf0e35d20b5b7e5d57a203a7f17820&oe=5903F344",
            "text": "Curabitur posuere justo at orci sagittis vehicula. Sed orci mauris, feugiat aliquam pretium ut, vestibulum nec augue.",
            "textPosition": "bottom",
            "subhead": "",
            "byline": "",
            "publishDate": ""
        }
    ];


    $(".control-button").hide();
    $(".controls-container").css("pointer-events", "none");

    $.each(data, function(i, value) {
        console.log(data[i].imageURL);
        var imageURL = data[i].imageURL,
            text = data[i].text,
            textPosition = data[i].textPosition,
            subhead = data[i].subhead,
            byline = data[i].byline,
            publishDate = data[i].publishDate;
        if (i == 0) {
            var slides = '<div class="slide" style="background-image:url(' + imageURL + ')">';
            slides += '<div class="text-container text-container-headline">';
            slides += '<div class="text text-headline">';
            slides += '<div class="headline">' + text + '</div>';
            slides += '<div class="subhead">' + subhead + '</div>';
            slides += '<div class="byline">' + byline + '</div>';
            slides += '<div class="publishDate">' + publishDate + '</div>';
            slides += '<button class="start">Start</button>';
            slides += '</div>';
            slides += '</div>';
            slides += '</div>';
            $(".slide-deck").append(slides);
        }
        if (i > 0 && i < (data.length - 1)) {
            var slides = '<div class="slide" style="background-image:url(' + imageURL + ')">';
            slides += '<div class="text-container text-container-' + textPosition + '">';
            slides += '<div class="text text-' + textPosition + '">';
            slides += '<p>' + text + '</p>';
            slides += '</div>';
            slides += '</div>';
            slides += '</div>';
            $(".slide-deck").append(slides);
        }
        if (i == (data.length - 1)) {
            var slides = '<div class="slide" style="background-image:url(' + imageURL + ')">';
            slides += '<div class="text-container text-container-' + textPosition + '">';
            slides += '<div class="text text-' + textPosition + '">';
            slides += '<div class="credits">The End</div>';
            slides += '</div>';
            slides += '</div>';
            slides += '</div>';
            $(".slide-deck").append(slides);
        }
    });


    //get viewport height
    var vh = $(window).height();
    console.log(vh);
    $(".slide-deck").css("height", vh);
    //set array
    var i = 0,
        array = $('.slide'),
        arrayLength = array.length;
    array.hide();
    var slide = $('.slide').eq(i);
    slide.show();
    console.log(array[i]); // your initial value
    // the next line, of course, assumes you have an element with id="next"

    function update() {
        if (i == 0) {
            $(".control-button").fadeOut();
            $(".controls-container").css("pointer-events", "none");
        }
        if (i == arrayLength - 1) {
            $("#next").fadeOut();
            $(".controls-container").css("pointer-events", "auto");
        }
        if (i > 0 && i < arrayLength - 1) {
            $(".control-button").fadeIn();
            $(".controls-container").css("pointer-events", "auto");
        }
    }

    $('.start').click(function() {
        i = (i + 1) % arrayLength; // increment your i
        // the modulus (%) operator resets the i to 0
        // when it reaches the length of the array
        console.log(array[i]); // the new incremented value
        array.fadeOut(600);
        $(array[i]).delay(100).fadeIn(1200);
        update();
    });

    $('#next').click(function() {
        i = (i + 1) % arrayLength; // increment your i
        // the modulus (%) operator resets the i to 0
        // when it reaches the length of the array
        console.log(array[i]); // the new incremented value
        array.hide();
        $(array[i]).show();
        update();
    });
    $('#prev').click(function() {
        i = (i - 1) % arrayLength; // increment your i
        // the modulus (%) operator resets the i to 0
        // when it reaches the length of the array
        console.log(array[i]); // the new incremented value
        array.hide();
        $(array[i]).show();
        update();
    });
});
