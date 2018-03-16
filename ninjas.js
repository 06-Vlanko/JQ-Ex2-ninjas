$(document).ready (function () {
    $('img').click (function () {
        $(this).fadeOut ('slow', function () {
            //Todd, why it wont work if I place this outside of the fadeOut
            $(this).css('visibility', 'hidden');
            $(this).css('display','inline');
        });
    })
    $('button').click (function () {
        $('img').css('visibility', 'visible');
    })
})