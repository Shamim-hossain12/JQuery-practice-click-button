let out = document.querySelector('.section');


$(document).ready(function() {
    // btn-one Hide button________
    $('.btn-one').click(function() {
        $('.section-two').hide(.8);
    })


    // btn-two Show button_________

    $('.btn-two').click(function() {
        $('.section-two').show(.8);
    })

    // btn-three toggle button_________
    $('.btn-three').click(function() {

        $('.section-two').toggle(4000);

    })

    // btn-four more button_________
    $('.btn-four').click(function() {
        $('.section-two').hide(2000).show(2000, function() {
            alert('ha ha ha ');
        });
    })




    // btn-five fade out button_________
    $('.btn-five').click(function() {
        $('.section-four').fadeOut();
    });
    // btn-six fade in button_________
    $('.btn-six').click(function() {
        $('.section-four').fadeIn();
    });
    // btn-seven toggle button_________
    $('.btn-seven').click(function() {
        $('.section-four').fadeToggle();
    });
    // btn-eight fade to button_________
    $('.btn-eight').click(function() {
        $('.section-four').fadeTo("slow", .5);
    });






    // btn-nine slide up button_________
    $('.btn-nine').click(function() {
        $('.section-six').slideUp(1000);
    });
    // btn-10 slide down button_________
    $('.btn-10').click(function() {
        $('.section-six').slideDown(1000);
    });
    // btn-11 slide toggle button_________
    $('.btn-11').click(function() {
        $('.section-six').slideToggle(2000);
    });
    // btn-12 fade to button_________
    $('.btn-12').click(function() {
        $('.section-six').slideUp(1000).slideDown(1000, function() {
            alert('hi i am shamim');
        })
    });





    // btn-13 Animation  right button_________
    $('.btn-13').click(function() {
        $('.section-eight').animate({ left: '200px' })
    })

    // btn-14 Animation  left button_________
    $('.btn-14').click(function() {
        $('.section-eight').animate({ right: '500px' })
    })

    // btn-15 Animation  toggle button_________
    $('.btn-15').click(function() {
            $('.section-eight').animate({
                left: '100px',
                left: 'toggle',

            })
        })
        // btn-16 Animation  top button_________
    $('.btn-16').click(function() {
            $('.section-eight').animate({
                top: '1000px',

            })
        })
        // btn-17 Animation  bottom button_________
    $('.btn-17').click(function() {
            $('.section-eight').animate({
                bottom: '-500px',

            })
        })
        // btn-18 Animation  bottom button_________
    $('.btn-18').click(function() {
        $('.section-eight').animate({
            left: '20px',
            after: ('content'),
            fontSize: '4em'
        })
    })

    // btn-19  Text hide button________


    $('.btn-19').click(function() {
        $('.section').text('hello world')
    })

    $('.btn-21').click(function() {
        $('.section').val('hello world')
    })

    $('.btn-20').click(function() {
        $('.section').html()
    })
    $('.btn-22').click(function() {
        $('.section').attr('href', 'https://www.w3schools.com/')

    });


    // btn-23  Text append button________

    $('.btn-23').click(function() {
        $('.section-s').append('<b> Hello World')
    })
    $('.btn-24').click(function() {
        $('.section-o').append('<li>list item append</li>')
    })
    $('.btn-25').click(function() {
        $('.section-s').prepend('<b> Hello World')
    })
    $('.btn-26').click(function() {
        $('.section-o').prepend('<li>list item prepend</li>')
    })
    $('.btn-27').click(function() {
        $('.imge').before('<b>Before</b>')
    })
    $('.btn-28').click(function() {
        $('.imge').after('<i>After</i>')
    })

    // btn-29 30  remove empty button________
    $('.btn-29').click(function() {
        $('.content').remove()
    })
    $('.btn-30').click(function() {
        $('.content').empty()
    })

    $(".btn-31").click(function() {
        $(".p-one").addClass("green");
        $(".p-four").addClass("important");

    });

    // btn-33 34 35  css button________

    $(".btn-33").click(function() {
        $(".p-text").css("background-color", 'yellow');
        $(".p-text").css("font-size", '30px');

    });
    $(".btn-34").click(function() {
        $(".p-text").css("color", 'blue');
        $(".p-text").css("font-size", '30px');
    });

    // click hide  button________

    $('.p-tex').click(function() {
        $(this).hide()
    })


});