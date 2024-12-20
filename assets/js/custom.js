jQuery(document).ready(function () {
    // sticky_header
    jQuery(function () {
        var shrinkHeader = 2;
        jQuery(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                jQuery('header').addClass('sticky');
            } else {
                jQuery('header').removeClass('sticky');
            }
        });

        function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; }
    });

    // Responsive_navigation
    jQuery(".menu_btn").click(function () {
        jQuery("body").toggleClass("mobile_menu_active");
        jQuery(".overlay").click(function () {
            jQuery("body").removeClass("mobile_menu_active");
        })
    });

    // Sub_menu
    jQuery(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='las la-angle-down'></i></div>");
    jQuery(".sub_menu_opener").click(function () {
        jQuery('.hdr_menu .sub-menu').slideUp();
        jQuery("body").removeClass("sub_menu_active");
        if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
            jQuery(this).parent().find(".sub-menu").slideDown();
            jQuery("body").addClass("sub_menu_active");
        } else {
            jQuery(this).parent().find(".sub-menu").slideUp();
            jQuery("body").removeClass("sub_menu_active");
        }
    });

    jQuery(".sub_menu_opener").click(function () {
        if (jQuery(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
            jQuery(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
        } else {
            jQuery('.hdr_menu ul > li').removeClass("sub_menu_open");
            jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
        }
    });

    // show_modal
    // jQuery("#case_study_dtls_modal").modal({})

    // Scroll_top_top
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery(".scrollup").addClass("active");
        } else {
            jQuery(".scrollup").removeClass("active");
        }
    });

    jQuery(".scrollup").on("click", function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    // AOS
    /*jQuery(function () {
        AOS.init({
            once: false,
            throttleDelay: 0,
            offset: 0,
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    });
    let scrollRef = 0;

    window.addEventListener('scroll', function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });*/
    // scroll to
    jQuery(".banner-text .listItem:nth-child(1)").click(function () {
        jQuery([document.documentElement, document.body]).animate({
            scrollTop: jQuery(".gateRepairServiceWrapper").offset().top - 80
        }, 1000);
    });

    // Service Slider
    new Swiper('.garageServiceSliderOuter .swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slideToClickedSlide: true,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".garageServiceSliderOuter .swiper-button-next",
            prevEl: ".garageServiceSliderOuter .swiper-button-prev",
        },
        autoplay: {
            delay: 400000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            318: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });


    // tabCumAccordian
    jQuery('.tabPan').prepend('<span class="tabTitleHead"></span>');
    jQuery('.tabNav li').each(function () {
        var index = jQuery(this).index();
        var tdt = jQuery(this).text();
        jQuery(this).closest('.tabCumAccordian').find('.tabPan').eq(index).children('.tabTitleHead').text(tdt);
    });
    jQuery('.tabNav li:first-child, .tabPan:first-child .tabTitleHead').addClass('active');
    jQuery('.tabPan .tabInner').hide();
    jQuery('.tabPan:first-child .tabInner').show();
    jQuery('.tabNav li').click(function () {
        var index = jQuery(this).index();
        jQuery(this).siblings().removeClass('active');
        jQuery(this).addClass('active');
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan .tabInner').hide();
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan .tabTitleHead').removeClass('active');
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan').eq(index).children('.tabInner').show();
        jQuery(this).closest('.tabNav').next('.tabMain').find('.tabPan').eq(index).find('.tabTitleHead').addClass('active');
        return false;
    });
    jQuery('.tabTitleHead').click(function () {
        var index = jQuery(this).parent('.tabPan').index();
        jQuery(this).parent('.tabPan').siblings('.tabPan').children('.tabInner').slideUp(200)
        jQuery(this).next('.tabInner').slideToggle(200);
        jQuery(this).closest('.tabMain').prev('.tabNav').find('li').removeClass('active');
        jQuery(this).closest('.tabMain').prev('.tabNav').find('li').eq(index).toggleClass('active');
        jQuery(this).parent('.tabPan').siblings().find('.tabTitleHead').removeClass('active');
        jQuery(this).toggleClass('active');
    });
    jQuery(".tabImage").hide();
    jQuery(".tabImage:first-child").show();
    var tabImg = jQuery('.tabWithImage');
    if (tabImg.length) {
        jQuery('.tabLink').click(function () {
            var index = jQuery(this).index();
            jQuery(this).closest('.tabWithImage').find(".tabImage").eq(index).show();
            jQuery(this).closest('.tabWithImage').find(".tabImage").eq(index).siblings().hide();
        });
    }
    // Sidebar Location Toogle
    jQuery(".toggleBtn p").click(function () {
        jQuery(this).text(function (i, v) {
            return v === 'view More +' ? 'View less' : 'view More +'
        });
    });
    jQuery(".toggleBtn p").click(function () {
        jQuery(".locationMenu").toggleClass("active");
    });

});