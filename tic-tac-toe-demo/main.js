jQuery(document).ready(function($){
    window.squares = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    $('.square').on('click',function(){
        var i = $(this).data('id');
        squares[i] = 1;
        $(this).addClass('x');
    });

})
