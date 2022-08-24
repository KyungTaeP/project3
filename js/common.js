$(function () {
    let w = $('.main_slide li').innerWidth();
    let w2 = $('.sub_slide_con li').innerWidth();

    let intv = setInterval(function () {nextAni()}, 3000)
    let intv2 = setInterval(function () {nextAni2()}, 3000)
    let intv3 = setInterval(function () {
        nextAni3()
    }, 3000)

    $( window ).resize( function() {
        w = $('.main_slide li').innerWidth();
        w2 = $('.sub_slide_con li').innerWidth();
        console.log(w);
        console.log(w2);
      });

    $('.next').on('click', function () {
        clearInterval(intv);
        nextAni();
        intv = setInterval(function () {nextAni()}, 3000)
    })

    $('.prev').on('click', function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function () {nextAni()}, 3000)
    })

    $('.slide_count span').click(function () {
        let nth = $(this).index();
        // console.log(nth);
        clearInterval(intv)
        numAni(nth)
        intv = setInterval(function () {nextAni()}, 3000)
    })

    $('.next2').on('click', function(){
        clearInterval(intv2);
        nextAni2();
        intv2 = setInterval(function () {nextAni2()}, 3000)
    })

    $('.prev2').on('click', function(){
        clearInterval(intv2);
        prevAni2();
        intv2 = setInterval(function () {nextAni2()}, 3000)
    })

    $('.slide_count2 span').click(function () {
        let nth = $(this).index();
        // console.log(nth);
        clearInterval(intv2)
        numAni2(nth)
        intv2 = setInterval(function () {nextAni2()}, 3000)
    })

    function nextAni() {
        $('.main_slide').not(':animated').animate({
            marginLeft: -w
        }, 700, function () {
            $('.main_slide li').eq(0).appendTo('.main_slide')
            $('.main_slide').css({
                marginLeft: 0
            })
            $('.text_slide div').eq(0).appendTo('.text_slide')
            $('.slide_count span').eq(0).appendTo('.slide_count')
        })
    }

    function nextAni2(){
        $('.sub_slide_con').not(':animated').animate({
            marginLeft: -w2
        }, 700, function () {
            $('.sub_slide_con li').eq(0).appendTo('.sub_slide_con')
            $('.sub_slide_con').css({
                marginLeft: 0
            })
            $('.slide_count2 span').eq(0).appendTo('.slide_count2')
        })
    }

    function prevAni(){
        $('.main_slide li').eq(-1).prependTo('.main_slide')
        $('.main_slide').css({
            marginLeft:-w
        })
        $('.text_slide div').eq(-1).prependTo('.text_slide')
        $('.slide_count span').eq(-1).prependTo('.slide_count')
        $('.main_slide').not(':animated').animate({
            marginLeft:0
        }, 700)
    }

    function prevAni2(){
        $('.sub_slide_con li').eq(-1).prependTo('.sub_slide_con')
        $('.sub_slide_con').css({
            marginLeft:-w2
        })
        $('.sub_slide_con').not(':animated').animate({
            marginLeft:0
        }, 700)
        $('.slide_count2 span').eq(-1).prependTo('.slide_count2')
    }

    $('.reivew_slide').animate(function () {
        nextAni3()
    })

    function nextAni3() {
        $('.reivew_slide').not(':animated').animate({
            marginLeft: -100 + 'vw'
        }, 700, function () {
            $('.reivew_slide li').eq(0).appendTo('.reivew_slide')
            $('.reivew_slide').css({
                marginLeft: -18 + 'vw'
            })
            $('.dot_con span').eq(0).appendTo('.dot_con')
        })
    }


    function numAni(Bnth) {
        for (let x = 0; x < Bnth; x++) {
            $('.main_slide>li').eq(0).appendTo('.main_slide')
            $('.text_slide>div').eq(0).appendTo('.text_slide')
            $('.slide_count span').eq(0).appendTo('.slide_count')
        }
    }

    function numAni2(Bnth) {
        for (let x = 0; x < Bnth; x++) {
            $('.sub_slide_con>li').eq(0).appendTo('.sub_slide_con')
            $('.slide_count2 span').eq(0).appendTo('.slide_count2')           
        }
    }




    let h = $('.slide').height();
    // console.log(h);

    $(document).ready(function(){
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll > h) {
            $(".hd").css("background" , "#eaeaea");
          }
          else{
            $(".hd").css("background" , "none");   
          }
        })
      })



    
    $('.ham').on('click', function () {
        $('.ham').toggleClass('on');
        $('.mypage').toggleClass('on');
        $('.nav').toggleClass('on');

        $('.floating_menu').toggleClass('into');
    })

    $('.bs_more').on('click', function () {
        $('.story_con').toggleClass('on');
        $('.bs_more').toggleClass('on');
    })

    $('.floating_menu').on('click', function(){
        $('html').animate({scrollTop : 0}, 600);
        
    })
})