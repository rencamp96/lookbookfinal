window.addEventListener("load", () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let n = page.split(".")[0];


    let anim = document.getElementById("videoInteractivo1");
    anim.src = "./assets/opening2.mp4";

    let v2 = document.getElementById("videoInteractivo");
    v2.src = "./assets/clip2_2.mp4";

    let v3 = document.getElementById("videoInteractivo2");
    v3.src = "./assets/clip_movil.mp4";

    const loader = document.getElementById("loader-clean");
    loader.className += " hidden";
});
