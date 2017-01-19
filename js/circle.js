var color= "#09f";

function changeColor(c) {
    color = c;
}

$(document).ready(function() {

    $("#myImg").click(function(e){

        var imageLeft = $(this).offset().left;
        var clickLeft = e.pageX;
        var howFarFromLeft = clickLeft - imageLeft-10;

        var imagetop = $(this).offset().top;
        var clicktop = e.pageY;
        var howFarFromtop = clicktop - imagetop-10;

        $("#print").html("Left : " + howFarFromLeft  + " Top : " + howFarFromtop);

        $("#imgDiv").append("<div id='circle' style='top: "+ howFarFromtop +"px;left: "+ howFarFromLeft +"px;background-color: "+color+";'></div>");

    });
});