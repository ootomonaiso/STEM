$(function () {
    $('.hm_menu').on("click", function () {
        $('nav').slideToggle(400);
        $('.hm_menu').toggleClass('open');
        if ($('.hm_menu').hasClass('open') == true) {
            $('.hm_menu p').text('閉じる');
            $('.hm_menu span:first-child').css({
                'top': '10px',
                'transform': 'rotate(45deg)'
            });
            $('.hm_menu span:nth-child(2)').css({
                'top': '10px',
                'transform': 'rotate(-45deg)'
            });
            $('.hm_menu span:nth-child(3)').css({
                'display': 'none'
            });
        } else {
            $('.hm_menu p').text('MENU');
            $('.hm_menu span:first-child').css({
                'top': '0px',
                'transform': 'rotate(0deg)'
            });
            $('.hm_menu span:nth-child(2)').css({
                'top': '10px',
                'transform': 'rotate(0deg)'
            });
            $('.hm_menu span:nth-child(3)').css({
                'display': 'block'
            });
        }
    });
    $('li.nav-item').hover(function () {
        $('ul.nav-item_list:not(:animated)', this).slideDown();
    }, function () {
        $('ul.nav-item_list', this).slideUp();
    });
    if (navigator.userAgent.match(/(iPad)/)) {
        $(function () {
            $('.nav-item').children("p").children("a").css('pointer-events', 'none');
            if ($(window).width() > 767) {
                $('.nav-item').on("touchstart", function () {
                    $('ul.nav-item_list:not(:animated)', this).slideDown();
                    var jumpPage = $(this).children("p").children("a");
                    setTimeout(function () {
                        window.location.href = $(jumpPage).attr('href');
                    }, 3000);
                });
            }
        });
    }
    if (navigator.userAgent.match(/(iPad)/)) {
        $(function () {
            $("meta[name='viewport']").attr('content', 'width=1024');
        });
    }
    $(function () {
        var ua = navigator.userAgent;
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
            $('.tel-link').each(function () {
                var str = $(this).text();
                $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
            });
        }
        $("#page_top").css("display", "none");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $("#page_top").fadeIn(200);
            } else {
                $("#page_top").fadeOut(200);
            }
        });
        $("#page_top img").click(function () {
            mct = parseInt($("#wrapper").offset().top);
            $("html,body").animate({
                scrollTop: mct
            }, 500);
        });
        var userAgent = window.navigator.userAgent.toLowerCase();
        var appVersion = window.navigator.appVersion.toLowerCase();
        if (!navigator.userAgent.match(/(iPhone|iPad|Android)/)) {
            $("#page_top img").addClass("rollover");
        }
        $('.tab-nav a').on('click', function () {
            $('.tab-content ul').css('z-index', '-2');
            $('.tab-nav a').removeClass('tab-current');
            $(this).addClass('tab-current');
            var current_id = $(this).attr('href');
            current_id = current_id.replace('#', '');
            console.log(current_id);
            var current = $('.tab-content').find('[id="' + current_id + '"]');
            current.css('z-index', '2').addClass('current');
            return false;
        });
    });
    function map_print(imgname) {
        pwin = window.open(imgname, 'img1', 'left=100,top=100,image=1');
        pwin.print();
        pwin.close();
        return false;
    }
});

$(function () {
    var headerHeight = $('header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({
                scrollTop: position
            }, 500);
        }, 100);
    }
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({
            scrollTop: position
        }, 500);
        return false;
    });
});
