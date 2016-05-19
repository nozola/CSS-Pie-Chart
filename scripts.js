$(document).ready(function(){

var percentageValue = $('#percentage-value');
var circleBG = $('.circle-background');

$('.jquery-area input[type="range"]').on("change mousemove", function() {
    var newClass = "percent-"+$(this).val();
    circleBG.attr('class', 'circle-background').addClass(newClass);
    $('.jquery-area input[type="number"]').val($(this).val());
});

$('.jquery-area input[type="number"]').bind('keyup mouseup', function () {
    var newClass = "percent-"+$(this).val();
    circleBG.attr('class', 'circle-background').addClass(newClass);    
    $('.jquery-area input[type="range"]').val($(this).val());
});

});