$(function() {
    /* 
        1. .gnb > li에 마우스오버
        2. .gnb > li의 자식요소 ul 나타남/bg_gnb 나타남
    */
   $('.gnb > li').on('mouseover focusin', function() {
        $(this).children('ul').stop().fadeIn(300);
   });
   // 마우스가 벗어나면 자식요소 사라짐
   $('.gnb > li').on('mouseleave focusin', function() {
        $(this).children('ul').stop().fadeOut(300);
   })

   //1. 마우스 올라가면 bg_gnb나와야함.
   $('.gnb > li').on('mouseover focusin', function() {
    $('.bg_gnb').stop().fadeIn(300);
    });
    // 마우스가 벗어나면 자식요소 사라짐
    $('.gnb > li').on('mouseleave focusin', function() {
        $('.bg_gnb').stop().fadeOut(300);
    })
})