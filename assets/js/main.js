(function ($) {
    ("use strict");


    // -- Password Eye-- //
    $('.eye').on('click', function () {
        var pass = $('.eye-input').attr('type');
        if (pass == 'password') {
            $('.eye-input').attr('type', 'text');
            $('.eye').attr('src', 'assets/images/svg/eye-open.svg');
        } else {
            $('.eye-input').attr('type', 'password');
            $('.eye').attr('src', 'assets/images/svg/eye-close.svg');
        }
    });




    
})(jQuery);