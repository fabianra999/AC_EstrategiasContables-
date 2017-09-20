function animateWeb(item, trigger) {
    var durationFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var offsetFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    // init controller
    var controller = new ScrollMagic.Controller();
    var animateHome = item;

    //var tween = TweenMax.staggerFromTo(animateHome, 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

    var tween = new TimelineLite().staggerFrom(animateHome, 0.5, { opacity: 0, scale: 0 }, 0.3).staggerTo(animateHome, 0.3, { scale: 1 }, 0.1, 0.7);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: trigger, duration: durationFn, offset: offsetFn }).setTween(tween)
    //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
    .addTo(controller);
}

function animateHome() {}

(function () {
    if (window.matchMedia("(min-width: 769px) and (max-width: 1920px)").matches) {

        /**
         * home
         *  items: animateHome;
         *  triggerHome: #triggerHome
         */
        var _animateHome = $('.web__home .animateHome');
        var triggerHome = "#triggerHome";
        var durationHome = 200;
        var offsetHome = 0;
        animateWeb(_animateHome, triggerHome, durationHome, offsetHome);

        /**
         * servicios
         *  items: animateServicios;
         *  triggerServicios: #triggerServicios
         */
        var animateServicios = $('.web__servicios .animateServicios');
        var triggerServicios = "#triggerServicios";
        var durationServicios = 400;
        var offsetServicios = 200;
        animateWeb(animateServicios, triggerServicios, durationServicios, offsetServicios);
    }
})();
/**
 * Animacion Scroll vinculo
 *    clase activa para efecto "aAnimate"
 */
function linkAnimate() {
    $('body').on('click', 'a.aAnimate', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
        return false;
    });
}

/**
 * Scroll horizontal
 *    rueda mouse solo en div class container-horizontal
 */
function scrollHorizontal() {
    $('.container-horizontal').on('mousewheel', function (event, delta) {
        this.scrollLeft -= delta * 30;
        event.preventDefault();
    });
}

/**
 * Funcion slider
 *
 */
function slideToggle() {

    // Set the effect type (slide slow fast swing linear)
    var effect = 'slide';

    // Set the options for the effect type chosen (Right Left Up Down)
    var options = { direction: "down" };

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('#bannerfullscreen').toggle(effect, options, duration);
}
/**
 *    Info browser
 *        Dispocitivos moviles
 */
function mobileDetecting() {
    var bodyTag = document.getElementsByTagName("body")[0];

    var isMobile = {
        Android: function Android() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function BlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        iPhone: function iPhone() {
            return navigator.userAgent.match(/iPhone|iPod/i);
        },
        ipad: function ipad() {
            return navigator.userAgent.match(/iPad/i);
        },
        Opera: function Opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function Windows() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function any() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };

    // Es movil
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    // Es ios
    if (isMobile.iOS()) {
        $('body').addClass('iOS');
    }

    // tipo de movil
    if (isMobile.Android()) {
        $('body').addClass('Android');
    } else if (isMobile.BlackBerry()) {
        $('body').addClass('BlackBerry');
    } else if (isMobile.ipad()) {
        $('body').addClass('ipad');
    } else if (isMobile.iPhone()) {
        $('body').addClass('iPhone');
    } else if (isMobile.Opera()) {
        $('body').addClass('Opera');
    } else if (isMobile.Windows()) {
        $('body').addClass('Windows');
    }
}

/**
 *    Info browser
 *        Dispocitivos desktop
 *        Nombre version
 */
function detectBrowser() {
    var BrowserDetect = {
        init: function init() {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function searchString(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function searchVersion(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [{ string: navigator.userAgent, subString: "Edge", identity: "MS Edge" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" }, { string: navigator.userAgent, subString: "Trident", identity: "Explorer" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.userAgent, subString: "Opera", identity: "Opera" }, { string: navigator.userAgent, subString: "OPR", identity: "Opera" }, { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "Safari", identity: "Safari" }]
    };

    BrowserDetect.init();

    //body add class
    var bodyTag = document.getElementsByTagName("body")[0];
    //console.log( BrowserDetect.browser + BrowserDetect.version);
    //bodyTag.className += (BrowserDetect.browser + BrowserDetect.version);
    $('body').addClass(BrowserDetect.browser + BrowserDetect.version);
    $('body').addClass(BrowserDetect.browser);
}

/**
 *    Info browser
 *        Dispocitivos desktop
 *        viewportSize
 */
function viewportSize() {
    var ventanaAncho = $(window).width();
    var ventanaAlto = $(window).height();

    var altoViewpor = ventanaAlto + 'px';
    var anchoViewpor = ventanaAncho + 'px';

    if (ventanaAncho <= 480) {
        //console.log('movil :', ventanaAncho);

    } else if (ventanaAncho > 480 && ventanaAncho <= 768) {
        //console.log('tabla :', ventanaAncho);

    } else if (ventanaAncho > 768) {
        //console.log('desktop :', ventanaAncho);
    }
}

/**
 *  Llamados
 *
 ==============================================================================*/
window.addEventListener("resize", function () {// hola mundo
    //detectBrowser();
    //mobileDetecting();
    //viewportSize();
});

(function () {
    //detectBrowser();
    // mobileDetecting();
    //viewportSize();

    if ($('body').is('.mobile')) {}
})();

/**
* mediaQueryJs
* - Tamaño mediasQuery´s de bootstrap 4.
* - function resize and onload.
* - Funcion auto ejecutable.
**/

(function (mediaQueryJs) {

    // mediaQuery -> Tamaños
    var mediaQuery = [matchMedia('(max-width: 576px)'), matchMedia('(min-width: 577px) and (max-width: 768px)'), matchMedia('(min-width: 769px) and (max-width: 992px)'), matchMedia('(min-width: 993px)')];

    // Condicional por mediaQuery
    var changeSize = function changeSize() {
        if (mediaQuery[0].matches) {
            //console.log('1 sm');
            //document.body.style.background = 'red'

        }
        if (mediaQuery[1].matches) {
            //console.log('2 md');
            //document.body.style.background = 'blue'

        }
        if (mediaQuery[2].matches) {
            //console.log('3 lg');
            //document.body.style.background = 'tomato'

        }
        if (mediaQuery[3].matches) {
            //console.log('4 xl');
            //document.body.style.background = 'green'

        }
    };

    var key_1 = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = mediaQuery[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mediaQuerys = _step.value;

            //console.log(key_1);
            //console.log(mediaQuerys);
            // console.log('q es:', mediaQuery[0].matches);

            mediaQuery[key_1].addListener(changeSize);
            changeSize(mediaQuery[key_1]);

            key_1++;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})();

/**
 *  mediaQueryJs b4 (estrictas)
 *
 **/
function mediaQueryEsJs() {
    // mediaQuery -> Tamaños
    var mediaQuery = [matchMedia('(max-width: 576px)'), matchMedia('(min-width: 577px) and (max-width: 768px)'), matchMedia('(min-width: 769px) and (max-width: 992px)'), matchMedia('(min-width: 993px)')];

    if (mediaQuery[0].matches) {// -> sm
        //console.log('1 sm');

    } else if (mediaQuery[1].matches) {// -> md
        //console.log('2 md');

    } else if (mediaQuery[2].matches) {// -> lg
        //console.log('3 lg');

    } else mediaQuery[3].matches; // -> xl
    {
        //console.log('4 xl');

    }
};

/**
 * Funcion Resize
 * Resize mediaQuery
 **/
window.addEventListener("resize", function () {});
