$(document).ready(function () {
    //smooth scrolling
    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {

        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top 
        }, 2000);
    });
    //Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 70;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });


    });

});


$(window).scroll(function () {
    var Beneden = 0;

    if ($(document).scrollTop() > 600) {
        Beneden = Beneden - 80;
        document.getElementById("shit").style.marginTop = Beneden + "vh";
        document.getElementById("home").innerHTML = 'HOME';

    } else if ($(document).scrollTop() < 100 && document.getElementById("shit").style.marginTop == '-80vh') {
        Beneden = Beneden + 0;
        document.getElementById("shit").style.marginTop = Beneden + "%";
        document.getElementById("home").innerHTML = '';
        document.getElementById("home").style.borderRight = 'none';
    }
});


//zorgt er voor dat border right bij home niet komt en gaat bij herladen----
$(window).ready(function () {
    if ($(document).click()) {
        document.getElementById("home").style.borderRight = 'none';

    } else if ($(document).click()) {
        document.getElementById("home").style.borderRight = 'none';
    }
});

//zorgt er voor dat border right bij home komt en gaat------------------------
$(document).click(function (event) {
    if ($(event.target).is('#home')) {
        (document.getElementById('home').style.borderRight = '1px solid none');
    } else  {
        (document.getElementById('home').style.borderRight = '1px solid orange');
    } 
});


$(document).ready(function () {
    $('.item').bind('click', function () {
        // remove the active class from all elements with active class
        $('.active').removeClass('active')
        // add active class to clicked element
        $(this).addClass('active');
    });
});

var Messenger = function (el) {
    'use strict';
    var m = this;

    m.init = function () {
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
      "HELLO"

    ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({
                    c: (Math.floor(Math.random() * 12)) + 1,
                    l: m.messages[m.message].charAt(i)
                });
            }
        }

        var do_cycles = false;
        var message = '';

        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 200);
        } else {
            setTimeout(m.cycleText, 600000);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));

var Messenger = function (el) {
    'use strict';
    var m = this;

    m.init = function () {
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
      "I'M DION"

    ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({
                    c: (Math.floor(Math.random() * 12)) + 1,
                    l: m.messages[m.message].charAt(i)
                });
            }
        }

        var do_cycles = false;
        var message = '';

        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 200);
        } else {
            setTimeout(m.cycleText, 600000);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
}

console.clear();
var messenger = new Messenger($('#messengerr'));

var Messenger = function (el) {
    'use strict';
    var m = this;

    m.init = function () {
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
      "I'AM A CREATIVE WEB DEVELOPER"

    ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({
                    c: (Math.floor(Math.random() * 12)) + 1,
                    l: m.messages[m.message].charAt(i)
                });
            }
        }

        var do_cycles = false;
        var message = '';

        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 200);
        } else {
            setTimeout(m.cycleText, 6000);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
}

console.clear();
var messenger = new Messenger($('#messengerrr'));



$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
  });