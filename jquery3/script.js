$(document).ready(function(){

    $("#up").click(function() {
    $("#box").animate({
        marginTop: "-=10px"
        });
    });

    $("#down").click(function() {
    $("#box").animate({
        marginTop: "+=10px"
        });
    });

    $("#left").click(function() {
    $("#box").animate({
        marginLeft: "-=10px"
        });
    });

    $("#right").click(function() {
    $("#box").animate({
        marginLeft: "+=10px"
        });
    });


    $("#longDown").click(function() {
    $("#box").animate({
        marginTop: "+=1000px"
        }, 50000);
    });

    $("#stop").click(function() {
    $("#box").stop()
    });

    $("#chain").click(function() { //a little unrealistic but it's fun
    $("#box").css("background", "red").animate({
        marginLeft: "+=10px"
        }).animate({
        marginLeft: "-=10px"
        }).animate({
        marginTop: "+=10px"
        }).animate({
        marginTop: "-=10px"
        }).slideUp(500).slideDown(1000);
    });

});

