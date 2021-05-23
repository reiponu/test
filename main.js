$(function () {
    if ($(window).innerWidth() < 600) {
        $('.header-container')
            .addClass('header-min');
    }
    // Likeitのクリック変化
    $('.liblary-img').hide();
    $('.liblary-img.active').show();
    $('.like-it-list-item').click(function () {

        itemNo = $('.like-it-list-item').index(this);

        $('.liblary-img.active').hide().removeClass('active');
        $('.liblary-img').eq(itemNo).show().addClass('active');

    });

    $(window).scroll(function () {
        // スクロールフェードイン
        $('[data-fadeIn]').each(function (index, el) {
            if ($(window).scrollTop() > ($(el).offset().top - $(window).height())) {
                $(el).addClass('is-over');
            }

        });
        // ヘッダースクロール変化
        if ($(window).scrollTop() > $('#About').offset().top) {
            $('.header-container')
                .addClass('header-min');
        } else {
            // ハンバーガーメニュー展開中は変化しない
            if ($('.title-menu').hasClass('open')) {
            } else {
                if ($(window).innerWidth() < 600) {
                    $('.header-container')
                        .addClass('header-min');
                }else{

                    $('.header-container').removeClass('header-min');
                }
            };
        };

    });
    // ページ内スクロール
    $('.menu-item').click(function () {
        var id=$(this).find('a').attr('href');

        var position=$(id).offset().top;

        $('html,body').animate({
            'scrollTop': position
          },500);
    });
    // ハンバーガーメニュー変化
    $('.title-menu').click(function () {
        if ($(this).hasClass('open')) {
            $('.open-menu').removeClass('open');
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
            $('.open-menu').addClass('open');
        }

    });
    // ハンバーガーメニュー内メニュークリック挙動
    $('.menu-item').click(function () {
        $('.open-menu').removeClass('open');
        $('.title-menu').removeClass('open');
    });
});