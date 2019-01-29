$(function(){
      $('.home-btn').click(function(){
      $('html, body').animate({
      'scrollTop': 0
    }, 300);
    });
        $('.nav-item a,#arrow a').click(function(){
       var id = $(this).attr('href');
       var position = $(id).offset().top;
       $('html, body').animate({
         'scrollTop': position
       }, 300);
     });



    $('.fa-arrow-alt-circle-down ').hover(
    function(){
      $(this).animate({
        'font-size':'56px'
      },300);
    },
    function(){
      $(this).animate({
        'font-size':'48px'
      },300);
    }
    );

    // $('.portfolio-img ').hover(
    // function(){
    //   $(this).animate({
    //     'width':'100%'
    //   },300);
    // },
    // function(){
    //   $(this).animate({
    //     'width':'70%'
    //   },300);
    // }
    // );

  $('.portfolio-img').click(function() {
    var $answer = $(this).find('.text-content');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠す
      $answer.slideUp();
    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示
      $answer.slideDown();
    }
  });
});
