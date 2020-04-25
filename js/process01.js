window.addEventListener("load", () => {
    let path, page, n = window.location.pathname.split("/").pop().split(".")[0],
        looks = document.getElementsByClassName("looks"),
        anim;
    for (let i = 0; i < looks.length; i++) looks[i].src = "../assets/" + n + "/" + (i + 1) + ".jpg";
    document.getElementById("video_coleccion1").src = "../assets/designers/" + n + ".mp4";
    let rand = Math.round(13 * Math.random()) + 1,
        v2;
    document.getElementById("video2").src = "../assets/interiors/interior" + rand + ".mp4";
    let v3 = document.getElementById("video3");
    rand = Math.round(13 * Math.random()) + 1, v3.src = "../assets/interiors/interior" + rand + ".mp4";
    const loader = document.getElementById("loader-clean");
    loader.className += " hidden"
});

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