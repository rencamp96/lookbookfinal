function init() {
    window.innerWidth, window.innerWidth, window.innerWidth;
    var e = document.getElementById("cuadroRojo1").offsetHeight,
        n = document.documentElement.scrollHeight;
    margin = (n - e / 5 * 6.5) / 2, marginMedium = (n - e / 5 * 9) / 2, marginMovil = (n - e / 5 * 12) / 2, window.innerWidth >= 1060 && (document.getElementById("center").style.top = margin + "px"), window.innerWidth <= 1060 && window.innerWidth >= 600 && (document.getElementById("center").style.top = marginMedium + "px"), window.innerWidth <= 600 && (document.getElementById("center").style.top = "10vw");
    var t = window.innerHeight,
        o = document.getElementById("fashionfilm").offsetHeight;
    var i = (t - o) / 2;
    document.getElementById("fashionfilm").style.top = i + "px"
}

function myFunction() {
    document.getElementById("creditos").style.display = "inline-block";
    document.getElementById("backlight").style.display = "inline-block";
    const e = document.body;
    "inline-block" ? e.style.position = "fixed": e.style.position = "relative"
}

function myFunctionClose() {
    document.getElementById("creditos").style.display = "none";
    document.getElementById("backlight").style.display = "none";
    const e = document.body;
    "none" ? e.style.position = "relative": e.style.position = "fixed"
}

function myFunction2() {
    document.getElementById("fashionfilm").style.display = "inline-block", document.getElementById("backlight2").style.display = "inline-block", document.getElementById("closebtn_fashionfilm").style.display = "inline-block";
    const e = document.body;
    (ffDisplay = "inline-block") && (e.style.position = "fixed");
    var n = window.innerHeight,
        t = document.getElementById("fashionfilm").offsetHeight,
        o = (n - t) / 2;
    document.getElementById("fashionfilm").style.top = o + "px"
}

function myFunction2Close() {
    var e = document.getElementById("fashionfilm");
    e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    document.getElementById("fashionfilm").style.display = "none";
    document.getElementById("backlight2").style.display = "none";
    const n = document.body;
    "none" ? n.style.position = "relative": n.style.position = "fixed"
}

function myFunction3() {
    document.getElementById("look2").style.zIndex = 10, document.getElementById("look3").style.zIndex = 0, document.getElementById("look1").style.zIndex = 5
}

function myFunction4() {
    document.getElementById("look2").style.zIndex = 5, document.getElementById("look3").style.zIndex = 10, document.getElementById("look1").style.zIndex = 0
}

function myFunction5() {
    document.getElementById("look1").style.zIndex = 11
}

function myFunction6() {
    document.getElementById("look5").style.zIndex = 10, document.getElementById("look6").style.zIndex = 5
}

function myFunction7() {
    document.getElementById("look6").style.zIndex = 10, document.getElementById("look5").style.zIndex = 5
}
window.addEventListener("load", () => {
    init()
}), window.addEventListener("resize", () => {
    init()
});