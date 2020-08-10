    $(document).ready(function () {
        $('#p1').click(function () {
            $('#dropper').animate({top: '50px', left: '625px'}, 'slow')
            $('#dropper').animate({top: '180px', left: '625px'}, 'slow')
        });
    });
    

    $(document).ready(function () {
        $('#p2').click(function () {
            $('#dropper').animate({top: '50px', left: '625px'}, 'quick')
            $('#dropper').animate({top: '50px', left: '230px'}, 'quick')
            $('#dropper').animate({top: '160px', left: '230px'}, 'quick')
        });
    });

$(document).ready(function () {
        $('#p3').click(function () {
            $('#dilnaoh').animate({top: '50px', left: '950px'}, 'slow'),
            $('#dilnaoh').animate({top: '50px', left: '275px'}, 'slow'),
                $('#dropper').css({"display": "none" });
                $('#solid').css({"display": "none" });

        });
    });
$(document).ready(function () {
        $('#p4').click(function () {
                $('#dilnaoh').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p5').click(function () {
            $('#waterbottle').animate({top: '50px', left: '750px'}, 'slow')
            $('#waterbottle').animate({top: '50px', left: '275px'}, 'slow')
            $('#dilnaoh').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6').click(function () {
                $('#waterbottle').animate({top: '60px', left: '275px'}, 'slow')
                $('#waterbottle').css({"transform": "rotate(270deg)" });

        });
    });