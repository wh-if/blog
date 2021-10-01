jQuery(document).ready(function ($) {

        'use strict';

        /************** Mixitup (Filter Projects) *********************/
        $('.projects-holder').mixitup({
                effects: ['fade', 'grayscale'],
                easing: 'snap',
                transitionSpeed: 400
        });

        $('header').css({ 'height': $(window).height() });
        $(window).on('resize', function () {

                $('header').css({ 'height': $(window).height() });
                $('body').css({ 'width': $(window).width() })
        });

});