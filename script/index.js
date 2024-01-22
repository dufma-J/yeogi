$('.search-input').click(function () {
    $('.search>ul>li').find('.search-option').show()
})
$(document).click(function (event) {
    var searchOption = $('.search-option');
    var searchInput = $('.search-input');

    if (!searchOption.is(event.target) && !searchInput.is(event.target)) {
        searchOption.hide();
    }
});

let index;
$('.search-option ul:nth-child(2) li').each(function (index) {
    $(this).find('a').prepend((index + 1) + ' ');
});