$(document).ready(function(){
        $(".shirt").hide();
        $(".dress").hide();
        $(".jean").hide();
        $(".jacket").hide();
        $(".gymwear").hide();
        $(".blazer").hide();
        $(".shoes").hide();
        $("#1").hover(function() {
            $(".shirt").fadeIn(200);
        },
        function() {
            $(".shirt").fadeOut(200);
        });
        $("#2").hover(function() {
            $(".dress").fadeIn(200);
        },
        function() {
            $(".dress").fadeOut(200);
        });
        $("#3").hover(function() {
            $(".jean").fadeIn(200);
        },
        function() {
            $(".jean").fadeOut(200);
        });
        $("#4").hover(function() {
            $(".jacket").fadeIn(200);
        },
        function() {
            $(".jacket").fadeOut(200);
        });
        $("#5").hover(function() {
            $(".gymwear").fadeIn(200);
        },
        function() {
            $(".gymwear").fadeOut(200);
        });
        $("#6").hover(function() {
            $(".blazer").fadeIn(200);
        },
        function() {
            $(".blazer").fadeOut(200);
        });
        $("#7").hover(function() {
            $(".shoes").fadeIn(200);
        },
        function() {
            $(".shoes").fadeOut(200);
        });
    })