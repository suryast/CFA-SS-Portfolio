// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .
//= require typed
//= require instafeed

$(function() {
    $(document).foundation();
});
$(function() {
    $(".typed-script").typed({
        strings: ["$^2000Surya here^1000", "$^2000How can I help?"],
        typeSpeed: 22,
        startDelay: 500,
        backSpeed: 12,
    });
});

$(function() {
    $(".typed-script-mobile").typed({
        strings: ["HELLO!", "Hi,\nI'm SURYA"],
        typeSpeed: 25,
        startDelay: 500,
        backSpeed: 10,
    });
});
$(function() {
    $("#back-button").click(function() {
        $("html,body").animate({
            scrollTop: $("#target1").offset().top
        }, "1500");
        return false
    })
})
$(function() {
    $("#back-about").click(function() {
        $("html,body").animate({
            scrollTop: $("#target2").offset().top
        }, "1500");
        return false
    })
})

$(function() {
    $("#back-button-medium").click(function() {
        $("html,body").animate({
            scrollTop: $("#target1").offset().top
        }, "1500");
        return false
    })
})
