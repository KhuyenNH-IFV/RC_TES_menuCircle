$(function() {
    function e(e) {
        var a = "." + e;
        return $("html").is(a) ? !0 : !1
    }

    function a() {
        function e() {
            var e = Math.floor(6 * Math.random()) + 1,
                a = "";
            switch (e) {
                case 1:
                    a = "#ff7443";
                    break;
                case 2:
                    a = "#17a669";
                    break;
                case 3:
                    a = "#2077bf";
                    break;
                case 4:
                    a = "#f3d634";
                    break;
                case 5:
                    a = "#3cc3c1";
                    break;
                case 6:
                    a = "#fd444b"
            }
            return a
        }
        var a = e();
        T.css({
            backgroundColor: a
        })
    }

    function n(e) {
        var a = "#474b53";
        for (var n in C)
            if (-1 !== e.indexOf(n)) {
                a = C[n];
                break
            }
        return a
    }

    function t(e) {
        e > h ? R.addClass("header-is-fix").removeClass("header-is-rel") : R.removeClass("header-is-fix").addClass("header-is-rel")
    }

    function i() {
        k = $("html").hasClass("desktop") && p >= v ? !1 : !0
    }

    function o() {i(), r()
        var e = $(".js-show-effect-load");
        e.addClass("is-wait"), setTimeout(function() {
            e.addClass("is-show")
        }, 200)
    }

    function s(e) {
        function a(e) {
            if (e[0]) {
                var a = w,
                    n = ($(window).height(), e[0].getBoundingClientRect()),
                    t = (n.top, n.bottom);
                return t - a
            }
        }
        var n = a($(".page-main-title"));
        $(".overlay").height(n)
    }

    function r() {
        var e = u - w;
        B.css({
            height: e + "px"
        })
    }
    function d() {
        cancelAnimationFrame(E)
    }

    function f() {
        function e() {
            var e = document.getElementById(P);
            if (!e || !e.getContext) return !1;
            O = e.getContext("2d");
            for (var n = 0; G > n; n++) t[n] = 50 * Math.random() - 25, i[n] = 50 * Math.random() - 25, o[n] = L / 2 * Math.random() * 10, s[n] = z + (100 * Math.random() - 50), r[n] = 80 * Math.random() + 1, c[n] = 255, l[n] = 255, d[n] = 255;
            E = window.requestAnimationFrame(a)
        }

        function a() {
            O.clearRect(0, 0, L, z);
            for (var e = 0; G > e; e++) o[e] += t[e] / (10 + 1 / n), s[e] += i[e] / (10 + 1 / n), (o[e] < 0 || o[e] > L) && (t[e] *= -1), (s[e] < 0 || s[e] > z) && (i[e] *= -1), O.beginPath(), O.fillStyle = "rgba(" + c[e] + "," + l[e] + "," + d[e] + "," + .8 * (50 / n) + ")", O.arc(o[e], s[e], r[e], 0, 2 * Math.PI, !0), O.fill();
            n++, E = window.requestAnimationFrame(a)
        }
        var n = 0,
            t = new Array(G),
            i = new Array(G),
            o = new Array(G),
            s = new Array(G),
            r = new Array(G),
            c = new Array(G),
            l = new Array(G),
            d = new Array(G);
        e()
    }
    window.requestAnimationFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }();
    var p, u, h, m = 0,
        v = 767,
        w = 80,
        g = ["ja", "en"],
        _ = "ja",
        b = !1,
        A = !1,
        k = !1,
        y = e("safari"),
        C = {
            company: "#dd6463",
            service: "#c968e6",
            news: "#6062d2",
            recruit: "#67cae6",
            contact: "#6cdd9d"
        },
        R = $("html");
    $("body");
    $pMainBgTarget = $(".page-main-title__bg , .main-visual__bg"), $.browser.msie && 11 == $.browser.versionNumber && $("html").addClass("ie11"), $(window).on("load scroll resize", function() {
        h = $(".header-spacer").offset().top, scrolled = $(window).scrollTop(), p = $(window).width(), u = $(window).height();
        var e = scrolled;
        if (0 === scrolled || e > m ? R.removeClass("scroll--is-up").addClass("scroll--is-down") : R.removeClass("scroll--is-down").addClass("scroll--is-up"), m = e, s(scrolled), t(scrolled), k || y) $pMainBgTarget.css({
            marginTop: "0px",
            opacity: 1
        });
        else {
            var a = Math.floor(scrolled / 3),
                n = 1 - .001 * scrolled;
            0 > n && (n = 0), $pMainBgTarget.css({
                marginTop: a + "px",
                opacity: n
            })
        }
    }), $(window).on("load resize", function() {
        i(), r()
    }), $(window).on("load", function() {
        R.addClass("page-is-loaded"), o(), k && ($(".page-loading").remove(), $(".page-loading-bg").remove());
        var e = window.location.hash;
        if (e && void 0 !== $(e).offset()) {
            var a = $(e).offset().top;
            a -= w, $("html,body").stop().animate({
                scrollTop: a
            }, 0)
        }
        setTimeout(function() {
            $(".page-loading").remove()
        }, 1e3)
    }), $(".spNav-trigger a").on("click touchend", function(e) {
        e.preventDefault(), b ? (R.removeClass("spNav-open"), d(), b = !1) : (a(), R.addClass("spNav-open"), f(), b = !0)
    }), $(".spNav_sub2 a").on("click", function() {
        R.removeClass("spNav-open"), d(), b = !1
    }), $(".spNav_child").on("click", function() {
        A ? ($(this).find("i").remove(), $(this).append('<i class="fa fa-plus-circle"></i>'), $(".spNav_item-company").slideUp(), A = !1) : ($(this).find("i").remove(), $(this).append('<i class="fa fa-minus-circle"></i>'), $(".spNav_item-company").slideDown(), A = !0)
    });
    var T = $(".spNav-mask");
    $("a[href^=#], area[href^=#]").not("a[href=#], area[href=#] ").click(function() {
        var e = "#pagetop",
            a = -1 * w,
            n = $(this).attr("href");
        return n === e && (n = "body", a = 0), $(n).velocity("scroll", {
            easing: "ease-in-out",
            duration: 1200,
            offset: a
        }), "novelocity" == $(this).data("velocity") ? !0 : !1
    });
    var x = $(".js-ink");
    x.click(function(e) {
        var a, t, i, o, s;
        if (!k) {
            var r = $(this).attr("href");
            n(r);
            event.preventDefault(), a = $("body"), 0 === a.find(".ink").length && a.prepend("<span class='ink'></span>"), t = a.find(".ink"), t.height() || t.width() || (i = Math.max(a.outerWidth(), a.outerHeight()), t.css({
                height: i,
                width: i
            })), o = e.pageX - a.offset().left - t.width() / 2, s = e.pageY - a.offset().top - t.height() / 2, t.css({
                top: s + "px",
                left: o + "px"
            }).addClass("animate"), setTimeout(function() {
                window.location.href = r
            }, 401)
        }
    });
    var M = $(".js-show-effect");
    k ? M.addClass("is-wait is-show") : (M.each(function() {
        $(this).addClass("is-wait")
    }), M.peekaboo({
        onAppear: function() {
            $(this).addClass("is-show")
        },
        onDisappear: function() {},
        offset: -10
    }));
    var D = $(".page-main-title__title , .page-main-title__caption , .js-letter-effect");
    D.each(function() {
        var e = $(this).html(),
            a = "",
            n = e.length;
        $(this).addClass("ef");
        for (var t = 0; n > t; t++) a += " " === e.charAt(t) ? "<i>&nbsp;</i>" : "<i>" + e.charAt(t) + "</i>";
        $(this).html(a)
    }), k ? $(".ef").addClass("animated") : $(".ef").peekaboo({
        onAppear: function() {
            $(this).addClass("animated")
        },
        onDisappear: function() {},
        offset: 0
    });
    var N = $(".company-message"),
        j = $(".company-board-member"),
        F = $(".board-member__bg"),
        q = $(".ir");
    k || (N.peekaboo({
        onAppear: function() {
            F.removeClass("is-over")
        },
        onDisappear: function() {},
        offset: -600
    }), j.peekaboo({
        onAppear: function() {
            F.addClass("is-over")
        },
        onDisappear: function() {},
        offset: 1e3
    }), q.peekaboo({
        onAppear: function() {
            F.removeClass("is-over")
        },
        onDisappear: function() {},
        offset: 600
    }));
    var B = $(".js-set-vh");
    $(document).on("click", "[data-langswhitch]", function(e) {
        e.preventDefault();
        var a = $(this).data("langswhitch");
        l(a)
    });
    var E, O, P = "spNav-canvas",
        G = 500,
        L = 1e3,
        z = 1500;
    $(document).on("click", ".recruit-info__list__item__title", function(e) {
        e.preventDefault();
        var a = $(this).closest(".recruit-info__list__item");
        a.is(".is-open") ? a.removeClass("is-open") : a.addClass("is-open")
    }), $(document).on("click", ".wpcf7-radio .wpcf7-list-item-label", function(e) {
        e.preventDefault();
        var a = $(this).parent(".wpcf7-list-item").find("input");
        a.prop("checked", !0)
    }), $(document).on("click", ".wpcf7-checkbox .wpcf7-list-item-label", function(e) {
        e.preventDefault();
        var a = $(this).parent(".wpcf7-list-item").find("input");
        a.prop("checked") ? a.prop("checked", !1) : a.prop("checked", !0)
    }), $(".wpcf7-select").bind("cssClassChanged", function(e) {
        alert("test")
    })
})
