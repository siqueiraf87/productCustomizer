//visualize views

$(document).ready(function(){
$("div.box-view").show();
$("div.back-view").hide();
$("div.front-view").hide();
});

//set variables

var $back_view = $("div.back-view");
var $front_view = $("div.front-view");

//set front view as default

$(document).ready(function() {    
         $( "div.container").replaceWith($front_view);
         $("div.front-view").show();
});

//switch views

$(document).ready(function() {    
    $('.animate').bind('click', function() {
         if($(this).hasClass('activeback')) {
         	var $container = $( "div.container" ).replaceWith($back_view);
            $('div.top-view').hide();
            $('div.front-view').hide();
            $('div.back-view').show();
        }
         if($(this).hasClass('activefront')) {
         	var $container = $( "div.container" ).replaceWith($front_view);
            $('div.top-view').hide();
            $('div.front-view').show();
            $('div.back-view').hide();
        }
    });
});



