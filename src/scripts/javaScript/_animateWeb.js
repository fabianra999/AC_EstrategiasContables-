function animateWeb(item, trigger, durationFn = 300, offsetFn = 0) {
// init controller
    let controller = new ScrollMagic.Controller();
    let animateHome = item;

    //var tween = TweenMax.staggerFromTo(animateHome, 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

    let tween = new TimelineLite().staggerFrom(animateHome, 0.5, {opacity: 0, scale: 0}, 0.3)
        .staggerTo(animateHome, 0.3, {scale: 1}, 0.1, 0.7);


    // build scene
    let scene = new ScrollMagic.Scene({triggerElement: trigger, duration: durationFn, offset: offsetFn})
        .setTween(tween)
        //.addIndicators({name: "staggering"}) // add indicators (requires plugin)
        .addTo(controller);
}

function animateHome() {

}

(() => {
    if (window.matchMedia("(min-width: 769px) and (max-width: 1920px)").matches) {

        /**
         * home
         *  items: animateHome;
         *  triggerHome: #triggerHome
         */
        let animateHome = $('.web__home .animateHome');
        let triggerHome = "#triggerHome";
        let durationHome = 200;
        let offsetHome = 0;
        animateWeb(animateHome, triggerHome, durationHome, offsetHome);

        /**
         * servicios
         *  items: animateServicios;
         *  triggerServicios: #triggerServicios
         */
        let animateServicios = $('.web__servicios .animateServicios');
        let triggerServicios = "#triggerServicios";
        let durationServicios = 400;
        let offsetServicios = 200;
        animateWeb(animateServicios, triggerServicios, durationServicios, offsetServicios);
    }
})();
