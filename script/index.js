$('a.bar').click(function (e) {
    e.preventDefault()

    if ($(this).hasClass('on')) {
        $('ul.bar-menu').slideUp()
        $(this).removeClass('on')
    }
    else {
        $('ul.bar-menu').slideDown()
        $(this).addClass('on')
    }
})

$('#search1').click(function () {
    $('.pop1').slideDown()
})
$('#search3').click(function () {
    $('.pop3').slideDown()
})

$(document).ready(function () {
    $('.search-option').click(function (event) {
        event.stopPropagation();
    });

    $('.search-input').click(function (event) {
        $('.search-option').not($(this).siblings('.search-option')).slideUp();
        $(this).siblings('.search-option').slideDown();
        event.stopPropagation();
    });

    $(document).click(function () {
        $('.search-option').slideUp();
    });
});

let index;
$('.pop1 ol li').each(function (index) {
    $(this).find('a').prepend((index + 1) + '  ');
});

$('.pop3 .minus').click(function () {
    var currentnum = parseInt($('.pop3 .num').text());
    var newnum = currentnum - 1;

    if (newnum < 1) {
        alert('최소 인원은 1명입니다.')
        newnum = 1;
    }

    $('.pop3 .num').text(newnum);

    var placeholderValue = newnum + "명";
    $("#search3").attr("placeholder", placeholderValue);

});
$('.pop3 .plus').click(function () {
    var currentnum = parseInt($('.pop3 .num').text());
    var newnum = currentnum + 1;

    if (newnum > 10) {
        newnum = '10+';
    }

    $('.pop3 .num').text(newnum);

    var placeholderValue = newnum + "명";
    $("#search3").attr("placeholder", placeholderValue);
});

$('.hotel-btn a').click(function (e) {
    e.preventDefault();

    let class_name;
    class_name = $(this).attr('class');

    if (class_name === 'check on') {
        $('.check').removeClass('on')
        $('.hot').addClass('on')
    }
    if (class_name === 'hot on') {
        $('.hot').removeClass('on')
        $('.check').addClass('on')
    }
})

$('.popular-btn a').click(function (e) {
    e.preventDefault();

    let index;
    index = $(this).index();

    $('.popular-contents').removeClass('on')
    $('.popular-btn a').removeClass('on')
    $('.swiper-slide a span').removeClass('on')



    if (index === 0) {
        $('.swiper').addClass('on')
        $('.swiper-slide a span:even').addClass('on')
    }
    if (index === 1) {
        $('.swiper').removeClass('on')
        $('.swiper-slide a span:odd').addClass('on')
    }

    $(this).addClass('on')
})

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: true,
    speed:1500,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        482:{
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 10,
        },
        912:{
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1160:{
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        482:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        912:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1160:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: true,
    speed:1500,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        482:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        912:{
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1160:{
            direction: "vertical",
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

var swiper4 = new Swiper(".mySwiper4", {
    loop:true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints:{
        482:{
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
        },
        912:{
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        1160:{
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
    },
});

$('.slide-menu ul li a').click(function(e){
    e.preventDefault();
    let house = $(this).attr('class')

    $('.slide-menu ul li a').removeClass('on')
    $(this).addClass('on')

    $('.mySwiper4 .swiper-slide').removeClass('on')
})

var swiper5 = new Swiper(".mySwiper5", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: false,
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: -15,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});

// $(document).ready(function() {
//     // 각 섹션의 위치를 저장
//     var sections = $('section');
//     var index = 0;
//     var scrolling = false;

//     // 스크롤 이벤트 처리
//     $(document).on('wheel', function(e) {
//         if (scrolling) return;
        
//         scrolling = true;

//         if (e.originalEvent.deltaY > 0 && index < sections.length - 1) {
//             // 스크롤 다운
//             index++;
//         } else if (e.originalEvent.deltaY < 0 && index > 0) {
//             // 스크롤 업
//             index--;
//         }

//         // 해당 섹션으로 애니메이션 스크롤
//         $('html, body').animate({
//             scrollTop: sections.eq(index).offset().top
//         }, 800, function() {
//             scrolling = false;
//         });

//         // 이벤트의 기본 동작을 막음 (스크롤 바 이동을 취소)
//         e.preventDefault();
//     });
// });