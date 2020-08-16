function fun1()
        {
            var datapoints1 = [];
            datapoints1.push({ x: 0, y: 0 });
            datapoints1.push({ x: 2.5, y: 0.11 });
            datapoints1.push({ x: 5, y: 0.22 });
            datapoints1.push({ x: 6.25, y: 0.275 });
            datapoints1.push({ x: 7.5, y: 0.33 });
            datapoints1.push({ x: 10, y: 0.44 });
            graphline("l11", datapoints1, "concentration", "optical density(absorbance)");
        }
var a1,a2,a3,a4;
var avg;
function cal()
{
    document.getElementById('ob1').style.display='block';
    a1 =Number(document.getElementById("A1").value);
    a2 =Number(document.getElementById("A2").value);
    a3 =Number(document.getElementById("A3").value);
    a4 =Number(document.getElementById("A4").value);
    if(a1==0.11 && a2==0.22 && a3==0.33 && a4==0.44)
    {
        avg=(a1+a2+a3+a4)/4;
        document.getElementById("B1").innerHTML =avg;
    }
    else
        alert("wrong");
}
function ob1()
{
    document.getElementById('q4').style.display='none';
    document.getElementById('q5').style.display='block';
}
function p0()
{
    document.getElementById('q1').style.display='block';
    document.getElementById('p0').style.display='none';
    document.getElementById('im1').style.display='none';
}






$(document).ready(function () {
    $('#p1').click(function () {
        $('#solid2').animate({top: '120px', left: '470px'}, 'slow')
        $('#solid2').animate({top: '120px', left: '270px'}, 'slow')
    });
});


$(document).ready(function () {
    $('#p2').click(function () {
        $('#solid2').animate({top: '120px', left: '270px'}, 'slow'),

            $('#solid2').css({"transform": "rotate(270deg)" });

    });
});
$(document).ready(function () {
        $('#p3').click(function () {
            $('#waterbottle2').animate({top: '85px', left: '450px'}, 'slow')
            $('#waterbottle2').animate({top: '85px', left: '270px'}, 'slow')

        });
    });
$(document).ready(function () {
        $('#p4').click(function () {
                $('#waterbottle2').css({"transform": "rotate(270deg)" });
                $('#flask2').css({"display": "block" });

        });
    });

$(document).ready(function () {
        $('#p5').click(function () {
            $('#conch2so42').animate({top: '85px', left: '450px'}, 'slow')
            $('#conch2so42').animate({top: '85px', left: '270px'}, 'slow')
            $('#waterbottle2').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6').click(function () {
                $('#conch2so42').css({"transform": "rotate(270deg)" });

        });
    });
function p1()
{
    document.getElementById('solid').style.display='none';
    document.getElementById('w1').style.display='none';
    document.getElementById('solid2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w3").style.display='block';
    },1400);
}
function p2()
{
    document.getElementById('w3').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask1").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("solid2").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w2').style.display='block';
        document.getElementById('waterbottle').style.display='block';
    },3000);
}
function p3()
{
    document.getElementById('w2').style.display='none';
    document.getElementById('waterbottle').style.display='none';
    document.getElementById('waterbottle2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w4").style.display='block';
    },1400);
}
function p4()
{
    document.getElementById('w4').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("waterbottle2").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w5').style.display='block';
        document.getElementById('conch2so4').style.display='block';
    },3000);
}
function p5()
{
    document.getElementById('w5').style.display='none';
    document.getElementById('conch2so4').style.display='none';
    document.getElementById('conch2so42').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w6").style.display='block';
    },1400);
}
function p6()
{
    document.getElementById('w6').style.display='none';
    setTimeout(function()
    {
        document.getElementById("conch2so42").style.display='none';
    },1500);
    setTimeout(function()
    {
        document.getElementById('w7').style.display='block';
    },3000);
}
function p7()
{
    document.getElementById('flask2').style.display='none';
    document.getElementById('w7').style.display='none';
    document.getElementById('flask1').style.display='none';
    document.getElementById('flask100ml').style.display='none';
    document.getElementById('q2').style.display='block';
    setTimeout(function()
    {
        document.getElementById('ww1').style.display='block';
    },300);
}









function pp1()
{
    document.getElementById('ww1').style.display='none';
    $('#dropper').animate({top: '20px', left: '480px'}, 'slow')
    $('#dropper').animate({top: '120px', left: '480px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("ww2").style.display='block';
    },1500);
}
function pp2()
{
    document.getElementById('testtube').style.display='none';
    document.getElementById('t1').style.display='block';
    setTimeout(function()
    {
        document.getElementById("dropper2").style.display='none';
        document.getElementById("ww3").style.display='none';
        document.getElementById("flaskwithsoln").style.display='none';
    },1600);
    setTimeout(function()
    {
        document.getElementById("ww4").style.display='block';
    },1900);
    setTimeout(function()
    {
        document.getElementById("nh4no3").style.display='block';
    },2050);
}
function pp3()
{
    document.getElementById('ww4').style.display='none';
    $('#nh4no3').animate({top: '80px', left: '450px'}, 'slow')
    $('#nh4no3').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("nh4no3").style.display='none';
        document.getElementById("nh4no32").style.display='block';
        document.getElementById("ww5").style.display='block';
    },1800);
}
function pp4()
{
    document.getElementById('ww5').style.display='none';
    document.getElementById('nh4no32').style.transform='rotate(-90deg)';
    setTimeout(function()
    {
        document.getElementById("t2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('ww5').style.display='none';
        document.getElementById("nh4no32").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('ww6').style.display='block';
        document.getElementById('k4fecn6').style.display='block';
    },3000);
}
function pp5()
{
    document.getElementById('ww6').style.display='none';
    $('#k4fecn6').animate({top: '80px', left: '450px'}, 'slow')
    $('#k4fecn6').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("k4fecn6").style.display='none';
        document.getElementById("k4fecn62").style.display='block';
        document.getElementById('ww7').style.display='block';
    },1400);
}
function pp6()
{
    document.getElementById('t1').style.display='none';
    document.getElementById('k4fecn62').style.transform='rotate(-90deg)';
    document.getElementById("ww7").style.display='none';
    setTimeout(function()
    {
        document.getElementById("t2").style.display='none';
        document.getElementById("t3").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('k4fecn62').style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('t3').style.display='none';
    },2800);
    setTimeout(function()
    {
        document.getElementById('ww8').style.display='block';
    },3300);
}
function pp7()
{
    document.getElementById('ww8').style.display='none';
    document.getElementById('q3').style.display='block';
    document.getElementById('www1').style.display='block';
}
function ww2()
{
    var x=document.getElementById('l1').value;
    if (x==2.5)
    {
        document.getElementById('ww2').style.display='none';
        setTimeout(function()
        {
            $('#dropper').animate({top: '25px', left: '480px'}, 'slow')
            $('#dropper').animate({top: '25px', left: '100px'}, 'slow')
            $('#dropper').animate({top: '50px', left: '100px'}, 'slow')
        },500);
        setTimeout(function()
        {
            document.getElementById('dropper').style.display='none';
            document.getElementById('dropper2').style.display='block';
            document.getElementById('ww3').style.display='block';
        },2500);
    }
    else
    {
        document.getElementById('l2').style.display='block';
    }
}












function ppp1()
{
    document.getElementById('www1').style.display='none';
    $('#t32').animate({top: '10px', left: '550px'}, 'slow')
    $('#t32').animate({top: '10px', left: '322px'}, 'slow')
    $('#t32').animate({top: '70px', left: '322px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("www2").style.display='block';
        document.getElementById("ppp2").style.display='block';
    },1400);
}
function ppp2()
{
    document.getElementById('www2').style.display='none';
    document.getElementById("l3").style.display='block';
    setTimeout(function()
    {
        document.getElementById("ppp3").style.display='block';
        document.getElementById('www3').style.display='block';
    },200);
}
function ppp3()
{
    document.getElementById('www3').style.display='none';
    document.getElementById("l4").style.display='block';
    setTimeout(function()
    {
        document.getElementById("l5").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("www4").style.display='block';
    },1500);
    setTimeout(function()
    {
        document.getElementById("www5").style.display='block';
        
    },2500);
}
function ppp4()
{
    
    document.getElementById('www5').style.display='none';
    document.getElementById("t32").style.display='none';
    document.getElementById("t3").style.display='none';
    document.getElementById('www4').style.display='none';
    document.getElementById('ppp2').style.display='none';
    document.getElementById('ppp3').style.display='none';
    document.getElementById('l3').style.display='none';
    document.getElementById('l4').style.display='none';
    document.getElementById('l5').style.display='none';
    document.getElementById("calmeter").style.display='none';
    document.getElementById("q1r2").style.display='block';
}
































   $(document).ready(function () {
        $('#p1r2').click(function () {
            $('#solid2r2').animate({top: '120px', left: '470px'}, 'slow')
            $('#solid2r2').animate({top: '120px', left: '270px'}, 'slow')
        });
    });
    

    $(document).ready(function () {
        $('#p2r2').click(function () {
            $('#solid2r2').animate({top: '120px', left: '270px'}, 'slow'),

                $('#solid2r2').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p3r2').click(function () {
            $('#waterbottle2r2').animate({top: '85px', left: '450px'}, 'slow')
            $('#waterbottle2r2').animate({top: '85px', left: '270px'}, 'slow')

        });
    });
$(document).ready(function () {
        $('#p4r2').click(function () {
                $('#waterbottle2r2').css({"transform": "rotate(270deg)" });
                $('#flask2r2').css({"display": "block" });

        });
    });

$(document).ready(function () {
        $('#p5r2').click(function () {
            $('#conch2so42r2').animate({top: '85px', left: '450px'}, 'slow')
            $('#conch2so42r2').animate({top: '85px', left: '270px'}, 'slow')
            $('#waterbottle2r2').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6r2').click(function () {
                $('#conch2so42r2').css({"transform": "rotate(270deg)" });

        });
    });
function p1r2()
{
    document.getElementById('solidr2').style.display='none';
    document.getElementById('w1r2').style.display='none';
    document.getElementById('solid2r2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w3r2").style.display='block';
    },1400);
}
function p2r2()
{
    document.getElementById('w3r2').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask1r2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("solid2r2").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w2r2').style.display='block';
        document.getElementById('waterbottler2').style.display='block';
    },3000);
}
function p3r2()
{
    document.getElementById('w2r2').style.display='none';
    document.getElementById('waterbottler2').style.display='none';
    document.getElementById('waterbottle2r2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w4r2").style.display='block';
    },1400);
}
function p4r2()
{
    document.getElementById('w4r2').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask2r2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("waterbottle2r2").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w5r2').style.display='block';
        document.getElementById('conch2so4r2').style.display='block';
    },3000);
}
function p5r2()
{
    document.getElementById('w5r2').style.display='none';
    document.getElementById('conch2so4r2').style.display='none';
    document.getElementById('conch2so42r2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w6r2").style.display='block';
    },1400);
}
function p6r2()
{
    document.getElementById('w6r2').style.display='none';
    setTimeout(function()
    {
        document.getElementById("conch2so42r2").style.display='none';
    },1500);
    setTimeout(function()
    {
        document.getElementById('w7r2').style.display='block';
    },3000);
}
function p7r2()
{
    document.getElementById('flask2r2').style.display='none';
    document.getElementById('w7r2').style.display='none';
    document.getElementById('flask1r2').style.display='none';
    document.getElementById('flask100mlr2').style.display='none';
    document.getElementById('q2r2').style.display='block';
    setTimeout(function()
    {
        document.getElementById('ww1r2').style.display='block';
    },300);
}


function pp1r2()
{
    document.getElementById('ww1r2').style.display='none';
    $('#dropperr2').animate({top: '20px', left: '480px'}, 'slow')
    $('#dropperr2').animate({top: '120px', left: '480px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("ww2r2").style.display='block';
    },1500);
}
function pp2r2()
{
    document.getElementById('testtuber2').style.display='none';
    document.getElementById('t1r2').style.display='block';
    setTimeout(function()
    {
        document.getElementById("dropper2r2").style.display='none';
        document.getElementById("ww3r2").style.display='none';
        document.getElementById("flaskwithsolnr2").style.display='none';
    },1600);
    setTimeout(function()
    {
        document.getElementById("ww4r2").style.display='block';
    },1900);
    setTimeout(function()
    {
        document.getElementById("nh4no3r2").style.display='block';
    },2050);
}
function pp3r2()
{
    document.getElementById('ww4r2').style.display='none';
    $('#nh4no3r2').animate({top: '80px', left: '450px'}, 'slow')
    $('#nh4no3r2').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("nh4no3r2").style.display='none';
        document.getElementById("nh4no32r2").style.display='block';
        document.getElementById("ww5r2").style.display='block';
    },1800);
}
function pp4r2()
{
    document.getElementById('ww5r2').style.display='none';
    document.getElementById('nh4no32r2').style.transform='rotate(-90deg)';
    setTimeout(function()
    {
        document.getElementById("t2r2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('ww5r2').style.display='none';
        document.getElementById("nh4no32r2").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('ww6r2').style.display='block';
        document.getElementById('k4fecn6r2').style.display='block';
    },3000);
}
function pp5r2()
{
    document.getElementById('ww6r2').style.display='none';
    $('#k4fecn6r2').animate({top: '80px', left: '450px'}, 'slow')
    $('#k4fecn6r2').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("k4fecn6r2").style.display='none';
        document.getElementById("k4fecn62r2").style.display='block';
        document.getElementById('ww7r2').style.display='block';
    },1400);
}
function pp6r2()
{
    document.getElementById('t1r2').style.display='none';
    document.getElementById('k4fecn62r2').style.transform='rotate(-90deg)';
    document.getElementById("ww7r2").style.display='none';
    setTimeout(function()
    {
        document.getElementById("t2r2").style.display='none';
        document.getElementById("t3r2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('k4fecn62r2').style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('t3r2').style.display='none';
    },2800);
    setTimeout(function()
    {
        document.getElementById('ww8r2').style.display='block';
    },3300);
}
function pp7r2()
{
    document.getElementById('l2r2').style.display='none';
    document.getElementById('ww8r2').style.display='none';
    document.getElementById('q3r2').style.display='block';
    document.getElementById('www1r2').style.display='block';
}
function ww2r2()
{
    var x=document.getElementById('l1r2').value;
    if (x==5)
    {
        document.getElementById('ww2r2').style.display='none';
        setTimeout(function()
        {
            $('#dropperr2').animate({top: '25px', left: '480px'}, 'slow')
            $('#dropperr2').animate({top: '25px', left: '100px'}, 'slow')
            $('#dropperr2').animate({top: '50px', left: '100px'}, 'slow')
        },500);
        setTimeout(function()
        {
            document.getElementById('dropperr2').style.display='none';
            document.getElementById('dropper2r2').style.display='block';
            document.getElementById('ww3r2').style.display='block';
        },2500);
    }
    else
    {
        document.getElementById('l2r2').style.display='block';
    }
}





function ppp1r2()
{
    document.getElementById('www1r2').style.display='none';
    $('#t32r2').animate({top: '10px', left: '550px'}, 'slow')
    $('#t32r2').animate({top: '10px', left: '322px'}, 'slow')
    $('#t32r2').animate({top: '70px', left: '322px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("www2r2").style.display='block';
        document.getElementById("ppp2r2").style.display='block';
    },1400);
}
function ppp2r2()
{
    document.getElementById('www2r2').style.display='none';
    document.getElementById("l3r2").style.display='block';
    setTimeout(function()
    {
        document.getElementById("ppp3r2").style.display='block';
        document.getElementById('www3r2').style.display='block';
    },200);
}
function ppp3r2()
{
    document.getElementById('www3r2').style.display='none';
    document.getElementById("l4r2").style.display='block';
    setTimeout(function()
    {
        document.getElementById("l5r2").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("www4r2").style.display='block';
    },1500);
    setTimeout(function()
    {
        document.getElementById("www5r2").style.display='block';
        
    },2500);
}
function ppp4r2()
{
    
    document.getElementById('www5r2').style.display='none';
    document.getElementById("t32r2").style.display='none';
    document.getElementById("t3r2").style.display='none';
    document.getElementById('www4r2').style.display='none';
    document.getElementById('ppp2r2').style.display='none';
    document.getElementById('ppp3r2').style.display='none';
    document.getElementById('l3r2').style.display='none';
    document.getElementById('l4r2').style.display='none';
    document.getElementById('l5r2').style.display='none';
    document.getElementById("calmeterr2").style.display='none';
    document.getElementById("q1r23").style.display='block';
}



























   $(document).ready(function () {
        $('#p1r23').click(function () {
            $('#solid2r23').animate({top: '120px', left: '470px'}, 'slow')
            $('#solid2r23').animate({top: '120px', left: '270px'}, 'slow')
        });
    });
    

    $(document).ready(function () {
        $('#p2r23').click(function () {
            $('#solid2r23').animate({top: '120px', left: '270px'}, 'slow'),

                $('#solid2r23').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p3r23').click(function () {
            $('#waterbottle2r23').animate({top: '85px', left: '450px'}, 'slow')
            $('#waterbottle2r23').animate({top: '85px', left: '270px'}, 'slow')

        });
    });
$(document).ready(function () {
        $('#p4r23').click(function () {
                $('#waterbottle2r23').css({"transform": "rotate(270deg)" });
                $('#flask2r23').css({"display": "block" });

        });
    });

$(document).ready(function () {
        $('#p5r23').click(function () {
            $('#conch2so42r23').animate({top: '85px', left: '450px'}, 'slow')
            $('#conch2so42r23').animate({top: '85px', left: '270px'}, 'slow')
            $('#waterbottle2r23').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6r23').click(function () {
                $('#conch2so42r23').css({"transform": "rotate(270deg)" });

        });
    });
function p1r23()
{
    document.getElementById('solidr23').style.display='none';
    document.getElementById('w1r23').style.display='none';
    document.getElementById('solid2r23').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w3r23").style.display='block';
    },1400);
}
function p2r23()
{
    document.getElementById('w3r23').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask1r23").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("solid2r23").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w2r23').style.display='block';
        document.getElementById('waterbottler23').style.display='block';
    },3000);
}
function p3r23()
{
    document.getElementById('w2r23').style.display='none';
    document.getElementById('waterbottler23').style.display='none';
    document.getElementById('waterbottle2r23').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w4r23").style.display='block';
    },1400);
}
function p4r23()
{
    document.getElementById('w4r23').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask2r23").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("waterbottle2r23").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w5r23').style.display='block';
        document.getElementById('conch2so4r23').style.display='block';
    },3000);
}
function p5r23()
{
    document.getElementById('w5r23').style.display='none';
    document.getElementById('conch2so4r23').style.display='none';
    document.getElementById('conch2so42r23').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w6r23").style.display='block';
    },1400);
}
function p6r23()
{
    document.getElementById('w6r23').style.display='none';
    setTimeout(function()
    {
        document.getElementById("conch2so42r23").style.display='none';
    },1500);
    setTimeout(function()
    {
        document.getElementById('w7r23').style.display='block';
    },3000);
}
function p7r23()
{
    document.getElementById('flask2r23').style.display='none';
    document.getElementById('w7r23').style.display='none';
    document.getElementById('flask1r23').style.display='none';
    document.getElementById('flask100mlr23').style.display='none';
    document.getElementById('q2r23').style.display='block';
    setTimeout(function()
    {
        document.getElementById('ww1r23').style.display='block';
    },300);
}












function pp1r23()
{
    document.getElementById('ww1r23').style.display='none';
    $('#dropperr23').animate({top: '20px', left: '480px'}, 'slow')
    $('#dropperr23').animate({top: '120px', left: '480px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("ww2r23").style.display='block';
    },1500);
}
function pp2r23()
{
    document.getElementById('testtuber23').style.display='none';
    document.getElementById('t1r23').style.display='block';
    setTimeout(function()
    {
        document.getElementById("dropper2r23").style.display='none';
        document.getElementById("ww3r23").style.display='none';
        document.getElementById("flaskwithsolnr23").style.display='none';
    },1600);
    setTimeout(function()
    {
        document.getElementById("ww4r23").style.display='block';
    },1900);
    setTimeout(function()
    {
        document.getElementById("nh4no3r23").style.display='block';
    },2050);
}
function pp3r23()
{
    document.getElementById('ww4r23').style.display='none';
    $('#nh4no3r23').animate({top: '80px', left: '450px'}, 'slow')
    $('#nh4no3r23').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("nh4no3r23").style.display='none';
        document.getElementById("nh4no32r23").style.display='block';
        document.getElementById("ww5r23").style.display='block';
    },1800);
}
function pp4r23()
{
    document.getElementById('ww5r23').style.display='none';
    document.getElementById('nh4no32r23').style.transform='rotate(-90deg)';
    setTimeout(function()
    {
        document.getElementById("t2r23").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('ww5r23').style.display='none';
        document.getElementById("nh4no32r23").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('ww6r23').style.display='block';
        document.getElementById('k4fecn6r23').style.display='block';
    },3000);
}
function pp5r23()
{
    document.getElementById('ww6r23').style.display='none';
    $('#k4fecn6r23').animate({top: '80px', left: '450px'}, 'slow')
    $('#k4fecn6r23').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("k4fecn6r23").style.display='none';
        document.getElementById("k4fecn62r23").style.display='block';
        document.getElementById('ww7r23').style.display='block';
    },1400);
}
function pp6r23()
{
    document.getElementById('t1r23').style.display='none';
    document.getElementById('k4fecn62r23').style.transform='rotate(-90deg)';
    document.getElementById("ww7r23").style.display='none';
    setTimeout(function()
    {
        document.getElementById("t2r23").style.display='none';
        document.getElementById("t3r23").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('k4fecn62r23').style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('t3r23').style.display='none';
    },2800);
    setTimeout(function()
    {
        document.getElementById('ww8r23').style.display='block';
    },3300);
}
function pp7r23()
{
    document.getElementById('l2r23').style.display='none';
    document.getElementById('ww8r23').style.display='none';
    document.getElementById('q3r23').style.display='block';
    document.getElementById('www1r23').style.display='block';
}
function ww2r23()
{
    var x=document.getElementById('l1r23').value;
    if (x==7.5)
    {
        document.getElementById('ww2r23').style.display='none';
        setTimeout(function()
        {
            $('#dropperr23').animate({top: '25px', left: '480px'}, 'slow')
            $('#dropperr23').animate({top: '25px', left: '100px'}, 'slow')
            $('#dropperr23').animate({top: '50px', left: '100px'}, 'slow')
        },500);
        setTimeout(function()
        {
            document.getElementById('dropperr23').style.display='none';
            document.getElementById('dropper2r23').style.display='block';
            document.getElementById('ww3r23').style.display='block';
        },2500);
    }
    else
    {
        document.getElementById('l2r23').style.display='block';
    }
}





function ppp1r23()
{
    document.getElementById('www1r23').style.display='none';
    $('#t32r23').animate({top: '10px', left: '550px'}, 'slow')
    $('#t32r23').animate({top: '10px', left: '322px'}, 'slow')
    $('#t32r23').animate({top: '70px', left: '322px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("www2r23").style.display='block';
        document.getElementById("ppp2r23").style.display='block';
    },1400);
}
function ppp2r23()
{
    document.getElementById('www2r23').style.display='none';
    document.getElementById("l3r23").style.display='block';
    setTimeout(function()
    {
        document.getElementById("ppp3r23").style.display='block';
        document.getElementById('www3r23').style.display='block';
    },200);
}
function ppp3r23()
{
    document.getElementById('www3r23').style.display='none';
    document.getElementById("l4r23").style.display='block';
    setTimeout(function()
    {
        document.getElementById("l5r23").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("www4r23").style.display='block';
    },1500);
    setTimeout(function()
    {
        document.getElementById("www5r23").style.display='block';
        
    },2500);
}
function ppp4r23()
{
    
    document.getElementById('www5r23').style.display='none';
    document.getElementById("t32r23").style.display='none';
    document.getElementById("t3r23").style.display='none';
    document.getElementById('www4r23').style.display='none';
    document.getElementById('ppp2r23').style.display='none';
    document.getElementById('ppp3r23').style.display='none';
    document.getElementById('l3r23').style.display='none';
    document.getElementById('l4r23').style.display='none';
    document.getElementById('l5r23').style.display='none';
    document.getElementById("calmeterr23").style.display='none';
    document.getElementById("q1r24").style.display='block';
}












$(document).ready(function () {
        $('#p1r24').click(function () {
            $('#solid2r24').animate({top: '120px', left: '470px'}, 'slow')
            $('#solid2r24').animate({top: '120px', left: '270px'}, 'slow')
        });
    });
    

    $(document).ready(function () {
        $('#p2r24').click(function () {
            $('#solid2r24').animate({top: '120px', left: '270px'}, 'slow'),

                $('#solid2r24').css({"transform": "rotate(270deg)" });

        });
    });

$(document).ready(function () {
        $('#p3r24').click(function () {
            $('#waterbottle2r24').animate({top: '85px', left: '450px'}, 'slow')
            $('#waterbottle2r24').animate({top: '85px', left: '270px'}, 'slow')

        });
    });
$(document).ready(function () {
        $('#p4r24').click(function () {
                $('#waterbottle2r24').css({"transform": "rotate(270deg)" });
                $('#flask2r24').css({"display": "block" });

        });
    });

$(document).ready(function () {
        $('#p5r24').click(function () {
            $('#conch2so42r24').animate({top: '85px', left: '450px'}, 'slow')
            $('#conch2so42r24').animate({top: '85px', left: '270px'}, 'slow')
            $('#waterbottle2r24').css({"display": "none" });
        });
    });

$(document).ready(function () {
        $('#p6r24').click(function () {
                $('#conch2so42r24').css({"transform": "rotate(270deg)" });

        });
    });
function p1r24()
{
    document.getElementById('solidr24').style.display='none';
    document.getElementById('w1r24').style.display='none';
    document.getElementById('solid2r24').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w3r24").style.display='block';
    },1400);
}
function p2r24()
{
    document.getElementById('w3r24').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask1r24").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("solid2r24").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w2r24').style.display='block';
        document.getElementById('waterbottler24').style.display='block';
    },3000);
}
function p3r24()
{
    document.getElementById('w2r24').style.display='none';
    document.getElementById('waterbottler24').style.display='none';
    document.getElementById('waterbottle2r24').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w4r24").style.display='block';
    },1400);
}
function p4r24()
{
    document.getElementById('w4r24').style.display='none';
    setTimeout(function()
    {
        document.getElementById("flask2r24").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("waterbottle2r24").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('w5r24').style.display='block';
        document.getElementById('conch2so4r24').style.display='block';
    },3000);
}
function p5r24()
{
    document.getElementById('w5r24').style.display='none';
    document.getElementById('conch2so4r24').style.display='none';
    document.getElementById('conch2so42r24').style.display='block';
    setTimeout(function()
    {
        document.getElementById("w6r24").style.display='block';
    },1400);
}
function p6r24()
{
    document.getElementById('w6r24').style.display='none';
    setTimeout(function()
    {
        document.getElementById("conch2so42r24").style.display='none';
    },1500);
    setTimeout(function()
    {
        document.getElementById('w7r24').style.display='block';
    },3000);
}
function p7r24()
{
    document.getElementById('flask2r24').style.display='none';
    document.getElementById('w7r24').style.display='none';
    document.getElementById('flask1r24').style.display='none';
    document.getElementById('flask100mlr24').style.display='none';
    document.getElementById('q2r24').style.display='block';
    setTimeout(function()
    {
        document.getElementById('ww1r24').style.display='block';
    },300);
}



function pp1r24()
{
    document.getElementById('ww1r24').style.display='none';
    $('#dropperr24').animate({top: '20px', left: '480px'}, 'slow')
    $('#dropperr24').animate({top: '120px', left: '480px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("ww2r24").style.display='block';
    },1500);
}
function pp2r24()
{
    document.getElementById('testtuber24').style.display='none';
    document.getElementById('t1r24').style.display='block';
    setTimeout(function()
    {
        document.getElementById("dropper2r24").style.display='none';
        document.getElementById("ww3r24").style.display='none';
        document.getElementById("flaskwithsolnr24").style.display='none';
    },1600);
    setTimeout(function()
    {
        document.getElementById("ww4r24").style.display='block';
    },1900);
    setTimeout(function()
    {
        document.getElementById("nh4no3r24").style.display='block';
    },2050);
}
function pp3r24()
{
    document.getElementById('ww4r24').style.display='none';
    $('#nh4no3r24').animate({top: '80px', left: '450px'}, 'slow')
    $('#nh4no3r24').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("nh4no3r24").style.display='none';
        document.getElementById("nh4no32r24").style.display='block';
        document.getElementById("ww5r24").style.display='block';
    },1800);
}
function pp4r24()
{
    document.getElementById('ww5r24').style.display='none';
    document.getElementById('nh4no32r24').style.transform='rotate(-90deg)';
    setTimeout(function()
    {
        document.getElementById("t2r24").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('ww5r24').style.display='none';
        document.getElementById("nh4no32r24").style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('ww6r24').style.display='block';
        document.getElementById('k4fecn6r24').style.display='block';
    },3000);
}
function pp5r24()
{
    document.getElementById('ww6r24').style.display='none';
    $('#k4fecn6r24').animate({top: '80px', left: '450px'}, 'slow')
    $('#k4fecn6r24').animate({top: '80px', left: '200px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("k4fecn6r24").style.display='none';
        document.getElementById("k4fecn62r24").style.display='block';
        document.getElementById('ww7r24').style.display='block';
    },1400);
}
function pp6r24()
{
    document.getElementById('t1r24').style.display='none';
    document.getElementById('k4fecn62r24').style.transform='rotate(-90deg)';
    document.getElementById("ww7r24").style.display='none';
    setTimeout(function()
    {
        document.getElementById("t2r24").style.display='none';
        document.getElementById("t3r24").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById('k4fecn62r24').style.display='none';
    },2000);
    setTimeout(function()
    {
        document.getElementById('t3r24').style.display='none';
    },2800);
    setTimeout(function()
    {
        document.getElementById('ww8r24').style.display='block';
    },3300);
}
function pp7r24()
{
    document.getElementById('l2r24').style.display='none';
    document.getElementById('ww8r24').style.display='none';
    document.getElementById('q3r24').style.display='block';
    document.getElementById('www1r24').style.display='block';
}
function ww2r24()
{
    var x=document.getElementById('l1r24').value;
    if (x==10)
    {
        document.getElementById('ww2r24').style.display='none';
        setTimeout(function()
        {
            $('#dropperr24').animate({top: '25px', left: '480px'}, 'slow')
            $('#dropperr24').animate({top: '25px', left: '100px'}, 'slow')
            $('#dropperr24').animate({top: '50px', left: '100px'}, 'slow')
        },500);
        setTimeout(function()
        {
            document.getElementById('dropperr24').style.display='none';
            document.getElementById('dropper2r24').style.display='block';
            document.getElementById('ww3r24').style.display='block';
        },2500);
    }
    else
    {
        document.getElementById('l2r24').style.display='block';
    }
}





function ppp1r24()
{
    document.getElementById('www1r24').style.display='none';
    $('#t32r24').animate({top: '10px', left: '550px'}, 'slow')
    $('#t32r24').animate({top: '10px', left: '322px'}, 'slow')
    $('#t32r24').animate({top: '70px', left: '322px'}, 'slow')
    setTimeout(function()
    {
        document.getElementById("www2r24").style.display='block';
        document.getElementById("ppp2r24").style.display='block';
    },1400);
}
function ppp2r24()
{
    document.getElementById('www2r24').style.display='none';
    document.getElementById("l3r24").style.display='block';
    setTimeout(function()
    {
        document.getElementById("ppp3r24").style.display='block';
        document.getElementById('www3r24').style.display='block';
    },200);
}
function ppp3r24()
{
    document.getElementById('www3r24').style.display='none';
    document.getElementById("l4r24").style.display='block';
    setTimeout(function()
    {
        document.getElementById("l5r24").style.display='block';
    },1000);
    setTimeout(function()
    {
        document.getElementById("www4r24").style.display='block';
    },1500);
    setTimeout(function()
    {
        document.getElementById("www5r24").style.display='block';
        
    },2500);
}
function ppp4r24()
{
    
    document.getElementById('www5r24').style.display='none';
    document.getElementById("t32r24").style.display='none';
    document.getElementById("t3r24").style.display='none';
    document.getElementById('www4r24').style.display='none';
    document.getElementById('ppp2r24').style.display='none';
    document.getElementById('ppp3r24').style.display='none';
    document.getElementById('l3r24').style.display='none';
    document.getElementById('l4r24').style.display='none';
    document.getElementById('l5r24').style.display='none';
    document.getElementById("calmeterr24").style.display='none';
    document.getElementById("q4").style.display='block';
}
