$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');

        if($(".menuWrap").hasClass('open')) {
            $(this).parent().find('.headerMore').text('Closed')
        }else {
            $(this).parent().find('.headerMore').text('More')
        }
    });

    $('.closePop,.overlay').click(function () {
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

});
// secVid
$(document).on('click', '.videoSec-playBtn', function () {
    if ($(this).hasClass('vdStart')) {
        $('#secVid').get(0).play();
        $(this).removeClass('vdStart').addClass('vdStop');
    } else {
        $('#secVid').get(0).pause();
        $(this).removeClass('vdStop').addClass('vdStart');
    }
})


// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});

// Sticky Navigation
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.index-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.aboutSec-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
});

// testi-slider
$('.testi-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
});

// historySec-slider

$('.historySec-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});

$('.miningSec-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
});

$('.miningSec2-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
});

// aboutSec2-slider

$('.aboutSec2-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});

// Navigation Menu 
$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});

// Tabbing JS
$('[data-targetit]').on('click', function (e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
    $(".tab-slider").slick("setPosition");
});


$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
    // Check if the clicked link's pathname and hostname match the current document
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        // Find the target element using the hash from the href
        var t = $(this.hash);
        // If the target element is not found by ID, try finding it by name attribute
        t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
        // If the target element exists
        if (t.length) {
            // Prevent the default click action
            e.preventDefault();
            // Animate the scroll to the target element over 1 second
            $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3, function () {
                // Try to focus on the target element
                var e = $(t);
                e.focus();
                // If the element is focusable and focused, do nothing
                if (e.is(":focus")) return !1;
                // If the element is not focusable, add a temporary tabindex and focus it
                e.attr("tabindex", "-1");
                e.focus();
            });
        }
    }
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var t = $(this.hash);
        (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({
            scrollTop: t.offset().top
        }, 1e3, function () {
            var e = $(t);
            if (e.focus(), e.is(":focus")) return !1;
            e.attr("tabindex", "-1"), e.focus()
        }))
    }
}), $(window).width(),
    function () {
        var e, t, o, a, l, r = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            fixedBackground: !0,
            excluded: ""
        },
            s = r,
            n = !1,
            c = {
                x: 0,
                y: 0
            },
            d = !1,
            f = document.documentElement,
            u = [],
            h = /^Mac/.test(navigator.platform),
            p = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            v = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            };

        function m() {
            if (!d && document.body) {
                d = !0;
                var a = document.body,
                    l = document.documentElement,
                    r = window.innerHeight,
                    c = a.scrollHeight;
                if (f = document.compatMode.indexOf("CSS") >= 0 ? l : a, e = a, s.keyboardSupport && P("keydown", k), top != self) n = !0;
                else if (et && c > r && (a.offsetHeight <= r || l.offsetHeight <= r)) {
                    var u, h = document.createElement("div");
                    if (h.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + f.scrollHeight + "px", document.body.appendChild(h), o = function () {
                        u || (u = setTimeout(function () {
                            h.style.height = "0", h.style.height = f.scrollHeight + "px", u = null
                        }, 500))
                    }, setTimeout(o, 10), P("resize", o), (t = new j(o)).observe(a, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), f.offsetHeight <= r) {
                        var p = document.createElement("div");
                        p.style.clear = "both", a.appendChild(p)
                    }
                }
                s.fixedBackground || (a.style.backgroundAttachment = "scroll", l.style.backgroundAttachment = "scroll")
            }
        }
        var _ = [],
            y = !1,
            g = Date.now();

        function b(e, t, o) {
            var a, l;
            if (a = t, a = a > 0 ? 1 : -1, l = (l = o) > 0 ? 1 : -1, (c.x !== a || c.y !== l) && (c.x = a, c.y = l, _ = [], g = 0), 1 != s.accelerationMax) {
                var r = Date.now() - g;
                if (r < s.accelerationDelta) {
                    var n = (1 + 50 / r) / 2;
                    n > 1 && (t *= n = Math.min(n, s.accelerationMax), o *= n)
                }
                g = Date.now()
            }
            if (_.push({
                x: t,
                y: o,
                lastX: t < 0 ? .99 : -.99,
                lastY: o < 0 ? .99 : -.99,
                start: Date.now()
            }), !y) {
                var d = e === F() || e === document.body;
                null == e.$scrollBehavior && function e(t) {
                    var o = T(t);
                    if (null == D[o]) {
                        var a = getComputedStyle(t, "")["scroll-behavior"];
                        D[o] = "smooth" == a
                    }
                    return D[o]
                }(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
                var f = function (a) {
                    for (var l = Date.now(), r = 0, n = 0, c = 0; c < _.length; c++) {
                        var u = _[c],
                            h = l - u.start,
                            p = h >= s.animationTime,
                            v = p ? 1 : h / s.animationTime;
                        s.pulseAlgorithm && (v = V(v));
                        var m = u.x * v - u.lastX >> 0,
                            g = u.y * v - u.lastY >> 0;
                        r += m, n += g, u.lastX += m, u.lastY += g, p && (_.splice(c, 1), c--)
                    }
                    d ? window.scrollBy(r, n) : (r && (e.scrollLeft += r), n && (e.scrollTop += n)), t || o || (_ = []), _.length ? R(f, e, 1e3 / s.frameRate + 1) : (y = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
                };
                R(f, e, 0), y = !0
            }
        }

        function w(t) {
            d || m();
            var o = t.target;
            if (t.defaultPrevented || t.ctrlKey || X(e, "embed") || X(o, "embed") && /\.pdf/i.test(o.src) || X(e, "object") || o.shadowRoot) return !0;
            var l = -t.wheelDeltaX || t.deltaX || 0,
                r = -t.wheelDeltaY || t.deltaY || 0;
            h && (t.wheelDeltaX && A(t.wheelDeltaX, 120) && (l = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && A(t.wheelDeltaY, 120) && (r = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), l || r || (r = -t.wheelDelta || 0), 1 === t.deltaMode && (l *= 40, r *= 40);
            var c = L(o);
            return c ? !! function e(t) {
                if (t) {
                    u.length || (u = [t, t, t]), t = Math.abs(t), u.push(t), u.shift(), clearTimeout(a), a = setTimeout(function () {
                        try {
                            localStorage.SS_deltaBuffer = u.join(",")
                        } catch (e) { }
                    }, 1e3);
                    var o = t > 120 && I(t),
                        l = !I(120) && !I(100) && !o;
                    return t < 50 || l
                }
            }(r) || void (Math.abs(l) > 1.2 && (l *= s.stepSize / 120), Math.abs(r) > 1.2 && (r *= s.stepSize / 120), b(c, l, r), t.preventDefault(), B()) : !n || !J || (Object.defineProperty(t, "target", {
                value: window.frameElement
            }), parent.wheel(t))
        }

        function k(t) {
            var o = t.target,
                a = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== p.spacebar;
            document.body.contains(e) || (e = document.activeElement);
            var l = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(o.nodeName) || X(o, "input") && !l.test(o.type) || X(e, "video") || function e(t) {
                var o = t.target,
                    a = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do
                        if (a = o.classList && o.classList.contains("html5-video-controls")) break; while (o = o.parentNode);
                return a
            }(t) || o.isContentEditable || a || (X(o, "button") || X(o, "input") && l.test(o.type)) && t.keyCode === p.spacebar || X(o, "input") && "radio" == o.type && v[t.keyCode]) return !0;
            var r, c = 0,
                d = 0,
                f = L(e);
            if (!f) return !n || !J || parent.keydown(t);
            var u = f.clientHeight;
            switch (f == document.body && (u = window.innerHeight), t.keyCode) {
                case p.up:
                    d = -s.arrowScroll;
                    break;
                case p.down:
                    d = s.arrowScroll;
                    break;
                case p.spacebar:
                    d = -(r = t.shiftKey ? 1 : -1) * u * .9;
                    break;
                case p.pageup:
                    d = -(.9 * u);
                    break;
                case p.pagedown:
                    d = .9 * u;
                    break;
                case p.home:
                    f == document.body && document.scrollingElement && (f = document.scrollingElement), d = -f.scrollTop;
                    break;
                case p.end:
                    var h = f.scrollHeight - f.scrollTop - u;
                    d = h > 0 ? h + 10 : 0;
                    break;
                case p.left:
                    c = -s.arrowScroll;
                    break;
                case p.right:
                    c = s.arrowScroll;
                    break;
                default:
                    return !0
            }
            b(f, c, d), t.preventDefault(), B()
        }

        function S(t) {
            e = t.target
        }
        var x, T = (x = 0, function (e) {
            return e.uniqueID || (e.uniqueID = x++)
        }),
            C = {},
            E = {},
            D = {};

        function B() {
            clearTimeout(l), l = setInterval(function () {
                C = E = D = {}
            }, 1e3)
        }

        function H(e, t, o) {
            for (var a = o ? C : E, l = e.length; l--;) a[T(e[l])] = t;
            return t
        }

        function z(e, t) {
            return (t ? C : E)[T(e)]
        }

        function L(e) {
            var t = [],
                o = document.body,
                a = f.scrollHeight;
            do {
                var l = z(e, !1);
                if (l) return H(t, l);
                if (t.push(e), a === e.scrollHeight) {
                    var r = M(f) && M(o) || N(f);
                    if (n && O(f) || !n && r) return H(t, F())
                } else if (O(e) && N(e)) return H(t, e)
            } while (e = e.parentElement)
        }

        function O(e) {
            return e.clientHeight + 10 < e.scrollHeight
        }

        function M(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
        }

        function N(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t
        }

        function P(e, t, o) {
            window.addEventListener(e, t, o || !1)
        }

        function q(e, t, o) {
            window.removeEventListener(e, t, o || !1)
        }

        function X(e, t) {
            return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
        }
        if (window.localStorage && localStorage.SS_deltaBuffer) try {
            u = localStorage.SS_deltaBuffer.split(",")
        } catch (Y) { }

        function A(e, t) {
            return Math.floor(e / t) == e / t
        }

        function I(e) {
            return A(u[0], e) && A(u[1], e) && A(u[2], e)
        }
        var K, R = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
            window.setTimeout(e, o || 1e3 / 60)
        },
            j = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            F = (K = document.scrollingElement, function () {
                if (!K) {
                    var e = document.createElement("div");
                    e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                    var t = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 3), K = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                }
                return K
            });

        function U(e) {
            var t, o, a;
            return (e *= s.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (o = Math.exp(-1)) + (a = 1 - Math.exp(-e)) * (1 - o)), t * s.pulseNormalize
        }

        function V(e) {
            return e >= 1 ? 1 : e <= 0 ? 0 : (1 == s.pulseNormalize && (s.pulseNormalize /= U(1)), U(e))
        }
        var W = window.navigator.userAgent,
            G = /Edge/.test(W),
            J = /chrome/i.test(W) && !G,
            Q = /safari/i.test(W) && !G,
            Z = /mobile/i.test(W),
            ee = /Windows NT 6.1/i.test(W) && /rv:11/i.test(W),
            et = Q && (/Version\/8/i.test(W) || /Version\/9/i.test(W)),
            eo = !1;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function () {
                    eo = !0
                }
            }))
        } catch (ea) { }
        var ei = !!eo && {
            passive: !1
        },
            el = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

        function er(e) {
            for (var t in e) r.hasOwnProperty(t) && (s[t] = e[t])
        }
        el && (J || Q || ee) && !Z && (P(el, w, ei), P("mousedown", S), P("load", m)), er.destroy = function e() {
            t && t.disconnect(), q(el, w), q("mousedown", S), q("keydown", k), q("resize", o), q("load", m)
        }, window.SmoothScrollOptions && er(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
            return er
        }) : "object" == typeof exports ? module.exports = er : window.SmoothScroll = er
    }(), SmoothScroll({
        stepSize: 20
    });