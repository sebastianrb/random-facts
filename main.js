$(document).ready(function($) {
    var clicked = false;
    var $gears = $(".gears");
    getFact();

    $(".form__submit-button").on("click", function(event) {
        event.preventDefault();
        clicked = true;
        $(".random-container").addClass("form-hidden");
        //show gears
        $gears.addClass("gears-shown");
        getFact();
    });

    function getFact() {
        var randomNumber = Math.floor(Math.random() * 100 + 1);
        $.ajax({
            url: "http://numbersapi.com/" + randomNumber,
            type: "GET",
            success: function(response) {
                if (!clicked) {
                    $(".random-container").removeClass("load-hidden");
                    $(".random-container").removeClass("form-hidden");
                    $(".random-number").text(randomNumber);
                    $(".random-fact").text(response);
                    $gears.removeClass("gears-shown");
                } else {
                    setTimeout(function() {
                        $(".random-container").removeClass("form-hidden");
                        $(".random-number").text(randomNumber);
                        $(".random-fact").text(response);
                        $gears.removeClass("gears-shown");
                    }, 800);
                }
            }
        })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    }
});
