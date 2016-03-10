

var $ = jQuery;
$(document).ready(function(){
    var iviewer = {};
    $("#viewer2").iviewer({
        src: "img/1/11.bmp",
        initCallback: function() {
            iviewer = this;
        }
    });

});