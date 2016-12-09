"use strict";

function sendBooking() {
    var e = jQuery;
    return e("#ajax-form-search-send").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2
            },
            surname: {
                required: !1
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 9
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: e.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            phone: {
                required: "Please enter your phone.",
                minlength: e.format("At least {0} characters required.")
            }
        },
        submitHandler: function(t) {
            return e(t).ajaxSubmit({
                success: function(i, a, o, n) {
                    e(t).parent().append(i), e(t).remove()
                }
            }), !1
        }
    }), e("#ajax-form-search-send").submit(), !1
}! function(e) {
    function t() {
        var t = e(".navigation"),
            i = 0,
            a = t.data("menu-type"),
            o = window.innerWidth,
            n = e(".book-now-wrap");
        a >= o && (i = 1, e("body").prepend('<div class="menu-mobile"></div>'), t.appendTo(".menu-mobile"), n.appendTo(".main-header .container")), e(window).resize(function() {
            var t = e(".navigation"),
                a = t.data("menu-type"),
                o = window.innerWidth;
            a >= o && !i && (i = 1, e("body").prepend('<div class="menu-mobile"></div>'), t.appendTo(".menu-mobile"), n.appendTo(".main-header .container")), o > a && i && (i = 0, t.appendTo(".main-header .container"), e(".menu-mobile").remove(), n.prependTo(t))
        });
        var s = e(".nav .menu-item-has-children");
        e(".mobile-nav-menu").on("click", function() {
            e("#page-wrap").toggleClass("active"), e(this).toggleClass("mobile-active"), e(".menu-mobile").toggleClass("fixSfr"), e("header.header").toggleClass("header-active"), setTimeout(function() {
                a >= o && (e("html, body").toggleClass("overflow-hidden"), e(".menu-mobile").toggleClass("overflow-auto"))
            }, 290)
        }), e(window).resize(function() {
            var t = window.innerWidth;
            e(".mobile-nav-menu").on("click", function() {
                a >= t && (e("html, body").toggleClass("overflow-hidden"), e(".menu-mobile").toggleClass("overflow-auto"))
            })
        }), e(".navigation, .mobile-nav-menu").on("click", function(e) {
            e.stopPropagation()
        }), s.on("click", function() {
            e(this).toggleClass("active")
        })
    }

    function i() {
        e(".tp-banner").length && jQuery(".tp-banner").show().revolution({
            dottedOverlay: "none",
            delay: 16e3,
            startwidth: 1170,
            startheight: 700,
            hideThumbs: 200,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            hideTimerBar: "on",
            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "preview4",
            touchenabled: "on",
            onHoverStop: "on",
            swipe_velocity: .7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: !1,
            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            keyboardNavigation: "on",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 320,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",
            spinner: "spinner4",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "off",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "rs-plugin/videojs/",
            fullScreenOffsetContainer: ""
        })
    }

    function a() {
        function t(t) {
            var i = this.currentItem;
            e(".small-slider").find(".owl-item").removeClass("synced").eq(i).addClass("synced")
        }
        var i = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            a = ['<i class="prev-arrow"></i>', '<i class="next-arrow"></i>'];
        e(".flipbook-slider").length > 0 && e(".flipbook-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: !1,
            pagination: !1,
            navigation: !0,
            navigationText: i,
            transitionStyle: "fade"
        }), e(".roomrate-slider").length > 0 && e(".roomrate-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 1],
            itemsMobile: !1,
            pagination: !1,
            navigation: !0,
            navigationText: i
        }), e(".guestbook-slider").length > 0 && e(".guestbook-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: !1
        }), e(".news-slider, .event-slider").length > 0 && e(".news-slider, .event-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: !1
        }), e(".news-slider-2, .event-slider-2, .accommodation-slider").length > 0 && e(".news-slider-2, .event-slider-2, .accommodation-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 1],
            itemsMobile: !1
        }), e(".post-slider").length > 0 && e(".post-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: !1,
            pagination: !1,
            navigation: !0,
            navigationText: i
        }), e(".big-slider").length > 0 && e(".big-slider").owlCarousel({
            singleItem: !0,
            slideSpeed: 1e3,
            navigation: !0,
            navigationText: a,
            pagination: !1,
            afterAction: t
        }), e(".small-slider").length > 0 && e(".small-slider").owlCarousel({
            items: 7,
            itemsDesktop: [1199, 7],
            itemsDesktopSmall: [991, 5],
            itemsTablet: [767, 5],
            itemsMobile: [480, 3],
            pagination: !1,
            navigation: !0,
            navigationText: i,
            afterInit: function(e) {
                e.find(".owl-item").eq(0).addClass("synced")
            }
        }), e(".small-slider").on("click", ".owl-item", function(t) {
            t.preventDefault();
            var i = e(this).data("owlItem");
            e(".big-slider").trigger("owl.goTo", i)
        })
    }

    function o() {
        e("#toggle-book").on("click", function() {
            e(".book-check-form").toggleClass("book-toggle")
        }), e("html").on("click", function() {
            e(".book-check-form").removeClass("book-toggle")
        }), e("#toggle-book, .book-check-form").on("click", function(e) {
            e.stopPropagation()
        })
    }

    function n() {
        return !1
    }

    function s() {
        e(window).scroll(function() {
            var t = e(window).scrollTop();
            t > 300 ? e("#fixedTop").fadeIn(400) : e("#fixedTop").fadeOut(400)
        }), e("#fixedTop").on("click", function() {
            e("html, body").animate({
                scrollTop: "0px"
            }, 800)
        })
    }

    function r() {
        e(window).scroll(function() {
            var t = e(window).scrollTop(),
                i = e(window).height(),
                a = t + i - 130,
                o = new Array,
                n = new Array;
            e.each(e(".bg-dark, .bg-darker, .bg-parallax"), function(a, s) {
                o[a] = e(this).offset().top, e(this).next().length > 0 ? n[a] = e(this).next().offset().top : n[a] = t + i
            }), e("#fixedTop").removeClass("fixedTop-light"), e.each(o, function(t, i) {
                a > o[t] && a < n[t] && (e("#fixedTop").hasClass("fixedTop-light") || e("#fixedTop").addClass("fixedTop-light"))
            })
        })
    }

    function l() {
        e(".schedule-inner:not(:first)").hide(), e(".schedule .sch-header ul.list li a").on("click", function() {
            e(".schedule .sch-header ul.list li a").removeClass("active"), e(this).addClass("active"), e(".schedule-inner").hide();
            var t = e(this).attr("href");
            return e(t).show(), !1
        })
    }

    function d() {
        e(".gallery").each(function() {
            e(this).magnificPopup({
                gallery: {
                    enabled: !0
                },
                delegate: "a",
                type: "image",
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                    },
                    buildControls: function() {
                        this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
                    }
                },
                closeOnContentClick: !1,
                midClick: !1
            })
        }), e(".mfp-iframe").magnificPopup({
            type: "iframe",
            iframe: {
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "http://www.youtube.com/embed/%id%?autoplay=1"
                    }
                },
                srcAction: "iframe_src"
            }
        })
    }

    function c() {
        e(".isotope-grid-wrapper").each(function() {
            var t = e(this),
                i = t.find(".grid-item, .grid-sizer"),
                a = t.data("column-gap"),
                o = t.data("column-gap-horizotal"),
                n = t.data("column-gap-vertical"),
                s = t.data("isotope-column"),
                r = t.data("column-md"),
                l = t.data("column-sm"),
                d = t.data("column-xs"),
                c = t.data("column-tn");
            "undefined" !== t.attr("data-column-gap-horizotal") && (t.find(".isotope-grid-row").css({
                "margin-left": -o / 2,
                "margin-right": -o / 2
            }), t.find(".grid-item").css({
                "padding-left": o / 2,
                "padding-right": o / 2
            })), "undefined" !== t.attr("data-column-gap-vertical") && (t.find(".isotope-grid-row").css({
                "margin-top": -n / 2,
                "margin-bottom": -n / 2
            }), t.find(".grid-item").css({
                "padding-left": n / 2,
                "padding-right": n / 2
            })), "undefined" !== t.attr("data-column-gap") && (t.find(".isotope-grid-row").css({
                margin: -a / 2
            }), t.find(".grid-item").css({
                padding: a / 2
            })), e(window).on("resize", function() {
                if (0 == t.hasClass("gallery-grid-item-style-2")) {
                    var e = window.innerWidth,
                        a = 1200,
                        o = 992,
                        n = 768,
                        m = 480;
                    m > e ? i.css("width", 100 / c + "%") : n > e ? i.css("width", 100 / d + "%") : o > e ? i.css("width", 100 / l + "%") : a > e ? i.css("width", 100 / r + "%") : i.css("width", 100 / s + "%")
                }
            }).trigger("resize");
            var m = t.find(".isotope-grid"),
                u = t.find(".filters");
            u.on("click", "a", function() {
                var t = e(this).attr("data-filter");
                return e(".current", u).removeClass("current"), e(this).addClass("current"), m.isotope({
                    filter: t
                }), !1
            }), e(window).on("resize", function() {
                if (t.hasClass("gallery-grid-item-style-1")) var i = .725;
                else var i = 1;
                var a = Math.max(e(window).width(), window.innerWidth),
                    o = t.find(".grid-sizer").width(),
                    n = Math.floor(o * i),
                    s = 2 * n;
                e(".grid-item", m).each(function() {
                    var t = e(this);
                    a > 500 ? 0 == t.closest(".isotope-grid-wrapper").hasClass("gallery-grid-item-style-3") && (t.hasClass("high") ? t.css({
                        height: s
                    }) : e(this).hasClass("wide") ? t.css({
                        height: n
                    }) : t.hasClass("large") ? t.css({
                        height: s
                    }) : t.css({
                        height: n
                    })) : 0 == t.closest(".isotope-grid-wrapper").hasClass("gallery-grid-item-style-3") && (t.hasClass("high") ? e(this).css({
                        height: s
                    }) : t.hasClass("wide") ? t.css({
                        height: n / 2
                    }) : t.hasClass("large") ? t.css({
                        height: n
                    }) : t.css({
                        height: n
                    }))
                }), m.imagesLoaded(function() {
                    m.isotope({
                        layoutMode: "masonry",
                        itemSelector: ".grid-item",
                        transitionDuration: "0.5s"
                    })
                })
            }).resize(), u.find('[data-filter="*"]').trigger("click")
        })
    }

    function m() {
        e("[data-multiple-column]").each(function() {
            var t = e(this),
                i = t.data("multiple-column"),
                a = t.data("column-md"),
                o = t.data("column-sm"),
                n = t.data("column-xs"),
                s = t.data("column-tn"),
                r = t.data("column-children"),
                l = t.data("column-gap"),
                d = t.data("column-gap-horizotal"),
                c = t.data("column-gap-vertical"),
                m = t.find("." + r);
            m.wrap('<div class="multiple-item"></div>');
            var u, h = m.parent(".multiple-item");
            h.parent().wrap('<div class="multiple-row"></div>').css({
                overflow: "hidden",
                width: "100%"
            }), "undefined" !== t.attr("data-column-gap-horizotal") && (h.closest(".multiple-row").css({
                "margin-left": -d / 2,
                "margin-right": -d / 2
            }), h.css({
                "padding-left": d / 2,
                "padding-right": d / 2
            })), "undefined" !== t.attr("data-column-gap-vertical") && (h.closest(".multiple-row").css({
                "margin-top": -c / 2,
                "margin-bottom": -c / 2
            }), h.css({
                "padding-top": c / 2,
                "padding-bottom": c / 2
            })), "undefined" !== t.attr("data-column-gap") && (h.closest(".multiple-row").css({
                margin: -l / 2
            }), h.css({
                padding: l / 2
            })), h.css({
                width: 100 / i + "%",
                "float": "left"
            }), e(window).on("resize", function() {
                var e = window.innerWidth,
                    t = 1200,
                    r = 992,
                    l = 768,
                    d = 480;
                d > e ? (h.css("width", 100 / s + "%"), u = m.parent(".multiple-item:nth-child(" + s + "n+1)"), h.removeClass("clear-both"), u.addClass("clear-both")) : l > e ? (h.css("width", 100 / n + "%"), u = m.parent(".multiple-item:nth-child(" + n + "n+1)"), h.removeClass("clear-both"), u.addClass("clear-both")) : r > e ? (h.css("width", 100 / o + "%"), u = m.parent(".multiple-item:nth-child(" + o + "n+1)"), h.removeClass("clear-both"), u.addClass("clear-both")) : t > e ? (h.css("width", 100 / a + "%"), u = m.parent(".multiple-item:nth-child(" + a + "n+1)"), h.removeClass("clear-both"), u.addClass("clear-both")) : (h.css("width", 100 / i + "%"), u = m.parent(".multiple-item:nth-child(" + i + "n+1)"), h.removeClass("clear-both"), u.addClass("clear-both"))
            }).trigger("resize")
        })
    }

    function u() {
        var t = e(".page-blog"),
            i = t.data("menu-type"),
            a = window.innerWidth;
        i >= a && t.find(".bd-l").removeClass("bd-l"), e(window).resize(function() {
            var t = e(".page-blog"),
                i = t.data("menu-type"),
                a = window.innerWidth;
            i >= a ? t.find(".bd-l").removeClass("bd-l") : t.find(".wrapper").addClass("bd-l")
        });
        var o = e(".checkout"),
            n = o.data("menu-type");
        n >= a && (o.find(".form-row-first").removeClass("form-row-first"), o.find(".form-row-last").removeClass("form-row-last"))
    }

    function h() {
        e(".attraction-page a").on("click", function() {
            return e("html, body").animate({
                scrollTop: e(e(this).attr("href")).offset().top
            }, 500), !1
        })
    }

    function f() {
        e(".info-inner:not(:first)").hide(), e(".room-infomation .switch-list ul li a").on("click", function() {
            e(".room-infomation .switch-list ul li a").removeClass("active"), e(this).addClass("active"), e(".info-inner").hide();
            var t = e(this).attr("href");
            return e(t).show(), !1
        })
    }

    function g() {
        var t = e(".main-header"),
            i = e(".top-header"),
            a = t.outerHeight(),
            o = i.outerHeight();
        t.removeClass("main-header-fixed");
        var n = 0;
        e(window).scroll(function(i) {
            var s = e(this).scrollTop();
            0 == s || o >= s ? (t.removeClass("main-header-fixed main-header-fixed--pin main-header-fixed--unpin"), e(".fix-header").remove()) : s > n && s > 300 ? t.removeClass("main-header-fixed--pin").addClass("main-header-fixed--unpin") : s > 300 && (t.removeClass("main-header-fixed--unpin").addClass("main-header-fixed main-header-fixed--pin"), 0 == e(".fix-header").length && t.after('<div class="fix-header" style="height:' + a + 'px"></div>')), n = s
        })
    }

    function p() {
        e(window).load(function() {
            var t = e(".image2background").children("img");
            t.before(function() {
                var t = e(this).attr("src");
                return '<div class="item-img" style="background-image: url(' + t + ')">'
            })
        })
    }

    function v() {
        e("select").length && e("select").select2({
            minimumResultsForSearch: 1 / 0
        })
    }

    function w() {
        var t = e(".slider-check .big-slider");
        t.find(".owl-prev").css({
            "background-color": "transparent"
        }), t.find(".owl-next").css({
            "background-color": "transparent"
        })
    }

    function b() {
        e(".stat-trigger").waypoint(function(e) {
            jQuery(function(e) {
                e("#guest-stay, #book-room, #member-stay, #meal-served").countTo({
                    speed: "1500",
                    refreshInterval: 50
                })
            })
        }, {
            offset: "100%",
            triggerOnce: !0
        })
    }

    function C() {
        e("body a").on("click", function(t) {
            "#" == e(this).attr("href") && t.preventDefault()
        })
    }

    function k() {
        var t = e("#cat-section"),
            i = 0,
            a = t.data("menu-type"),
            o = window.innerWidth;
        a >= o && (i = 1, t.removeClass("mtn-10 pt-0").addClass("pt-3")), e(window).resize(function() {
            var t = e("#cat-section"),
                a = t.data("menu-type"),
                o = window.innerWidth;
            a >= o && (i = 1, t.removeClass("mtn-10 pt-0").addClass("pt-3")), o > a && (i = 0, t.removeClass("pt-3").addClass("mtn-10 pt-0"))
        });
        var n = e("footer.footer .widget"),
            s = e(".top-foot .widget");
        (1 == n.hasClass("white") || 1 == s.hasClass("white")) && (n.removeClass("white"), s.removeClass("white"))
    }

    function y() {
        e(".popup").hasClass("pp-active") ? e("body").addClass("modal-open") : e("body").removeClass("modal-open"), e(".popup").each(function() {
            var t = e(this),
                i = t.attr("id");
            e('[href="#' + i + '"]').on("click", function(i) {
                i.preventDefault(), t.toggleClass("pp-active"), e("body").toggleClass("modal-open")
            }), e(".popup-overlay").on("click", function() {
                t.removeClass("pp-active"), e("body").removeClass("modal-open")
            }), e(".popup-close").on("click", function() {
                t.removeClass("pp-active"), e("body").removeClass("modal-open")
            }), e('.popup, [href="#' + i + '"]').on("click", function(e) {
                e.stopPropagation()
            }), e(window).resize(function() {
                var t = window.innerHeight,
                    i = e(".popup-dialog"),
                    a = i.outerHeight();
                a > t ? i.css("position", "relative") : i.css("position", "absolute")
            })
        })
    }

    function x() {
        var t = e(".book-check-form"),
            i = 0,
            a = t.data("menu-type"),
            o = window.innerWidth;
        a >= o && (i = 1, e('<section class="section pt-0 pb-0 book-section"></section>').insertAfter("#homemedia"), t.appendTo(".book-section"), t.removeClass("book-check-form-2")), e(window).resize(function() {
            var t = e(".book-check-form"),
                a = t.data("menu-type"),
                o = window.innerWidth;
            a >= o && !i && (i = 1, e('<section class="section pt-0 pb-0 book-section"></section>').insertAfter("#homemedia"), t.appendTo(".book-section"), t.removeClass("book-check-form-2")), o > a && i && (i = 0, t.appendTo("#homemedia"), e(".book-section").remove(), e("#book-check-style-2").addClass("book-check-form-2"))
        })
    }
    if (jQuery("#date-1").length) var T = new Date,
        A = new Date(T.getFullYear(), T.getMonth(), T.getDate(), 0, 0, 0, 0),
        D = e("#date-1").datepicker({
            todayHighlight: !0,
            beforeShowDay: function(e) {
                return e.valueOf() < A.valueOf() ? "disabled" : ""
            }
        }).on("changeDate", function(t) {
            if (q.dates.length && t.date.valueOf() > q.dates[0].valueOf() || !q.dates.length) {
                var i = new Date(t.date);
                i.setDate(i.getDate() + 1), q.setDate(i)
            }
            D.hide(), e("#date-2")[0].focus()
        }).data("datepicker"),
        q = e("#date-2").datepicker({
            todayHighlight: !0,
            beforeShowDay: function(e) {
                var t;
                return t = D.dates.length ? D.dates[0] : A, e.valueOf() < t.valueOf() ? "disabled" : ""
            }
        }).on("changeDate", function(e) {
            q.hide()
        }).data("datepicker");
    e(document).ready(function() {
        t(), n(), o(), i(), a(), s(), r(), l(), d(), c(), m(), u(), h(), f(), g(), p(), v(), w(), b(), C(), k(), y(), x()
    }), e(window).load(function() {
        e("#preload").addClass("loading"), e("<img/>").on("load", function() {
            console.log("image loaded correctly")
        }).on("error", function() {
            console.log("error loading image")
        })
    }), e("#send-message-form").length && e("#send-message-form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                required: !0,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: e.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            message: {
                required: "Please enter a message.",
                minlength: e.format("At least {0} characters required.")
            }
        },
        submitHandler: function(t) {
            return e(t).ajaxSubmit({
                success: function(t, i, a, o) {
                    e("#contact-content").slideUp(600, function() {
                        e("#contact-content").html(t).slideDown(600)
                    })
                }
            }), !1
        }
    }), e("#ajax-form-search-room").length && (e("#ajax-form-search-room").validate({
        rules: {
            arrive: {
                required: !0,
                minlength: 10
            },
            departure: {
                required: !0,
                minlength: 10
            },
            adults: {
                required: !0,
                minlength: 1
            },
            children: {
                required: !1
            }
        },
        messages: {
            arrive: {
                required: "Please enter a arrive.",
                minlength: e.format("At least {0} characters required.")
            },
            departure: {
                required: "Please enter a departure.",
                minlength: e.format("At least {0} characters required.")
            },
            adults: {
                required: "Please select number of adults.",
                minlength: e.format("At least {0} characters required.")
            }
        },
        submitHandler: function(t) {
            return e(t).ajaxSubmit({
                success: function(i, a, o, n) {
                    e(t).parent().append(i), e(t).remove()
                }
            }), !1
        }
    }), e("#ajax-form-search-room #check-available").on("click", function() {
        e(this).parents("form:first").submit()
    }))
}(jQuery);