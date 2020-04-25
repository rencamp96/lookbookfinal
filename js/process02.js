window.addEventListener("load", () => {
    let path, page, n = window.location.pathname.split("/").pop().split(".")[0],
        anim, v2, v3;
    document.getElementById("videoInteractivo1").src = "./assets/opening2.mp4", document.getElementById("videoInteractivo").src = "./assets/clip2_2.mp4", document.getElementById("videoInteractivo2").src = "./assets/clip_movil.mp4";
    const loader = document.getElementById("loader-clean");
    loader.className += " hidden"
});