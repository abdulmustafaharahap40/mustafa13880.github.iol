(function () {

    'use strich';

    $(ul.filters > li).on('click', function(e){

        e.preventDefault();

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});
    });

})(jquery);