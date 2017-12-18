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
            url: "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + randomNumber,
            type: "GET",
            success: function(response, textStatus, xhr) {
                console.log("Response code: ", xhr.status);
                if(xhr.status === 200) {
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
                } else {
                    $(".random-number").text("?");
                    $(".random-fact").text("Sorry, we are unable to retrieve a random fact at this time. Please try again.");
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
