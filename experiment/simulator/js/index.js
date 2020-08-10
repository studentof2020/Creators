    $(document).ready(function () {
        $('#p1').click(function () {
            $('#solid').animate({top: '160px', left: '650px'}, 'slow')
            $('#solid').animate({top: '160px', left: '300px'}, 'slow')
        });
    });
    

    $(document).ready(function () {
        $('#p2').click(function () {
            $('#solid').animate({top: '160px', left: '300px'}, 'slow'),

                $('#solid').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p3').click(function () {
            $('#waterbottle').animate({top: '90px', left: '750px'}, 'slow')
            $('#waterbottle').animate({top: '90px', left: '300px'}, 'slow'),

                $('#solid').css({"display": "none" });

        });
    });
$(document).ready(function () {
        $('#p4').click(function () {
            $('#waterbottle').animate({top: '90px', left: '300px'}, 'slow'),

                $('#waterbottle').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p5').click(function () {
            $('#dilnaoh').animate({top: '90px', left: '300px'}, 'slow')
            $('#waterbottle').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6').click(function () {
            $('#dilnaoh').animate({top: '90px', left: '300px'}, 'slow'),

                $('#dilnaoh').css({"transform": "rotate(270deg)" });

        });
    });