

// toggle les deux bar charts en haut à droite
document.getElementById("swapbtnline").addEventListener("click", () => {
    const c1 = document.getElementById("theBarOne01");
    const c2 = document.getElementById("theBarOne02");

    if (c1.style.display !== "none") {
        c1.style.display = "none";
        c2.style.display = "block";
    } else {
        c1.style.display = "block";
        c2.style.display = "none";
    }
});


// fonctions du bouton de gauche
document.getElementById("swapbtnmap").addEventListener("click", () => {
    const line = document.getElementById("thelineone");
    const mapDiv = document.getElementById("carte");   
    const zdogCanvas = document.querySelector(".zdog-canvas");
    const mapVisible = getComputedStyle(mapDiv).display !== "none";
    const animation = document.querySelector("animation")

    if (mapVisible) {
        // switch entre map et line chart
        mapDiv.style.display = "none";
        line.style.display = "block";
        animation.style.display = "none"
        zdogCanvas.style.display = "block";
        pulseCircle.style.display = "block";
        pulseAnimation.restart();
    } else {
        // toggle la visibilité
        line.style.display = "none";
        mapDiv.style.display = "block";
        animation.style.display = "flex";
        zdogCanvas.style.display = "none";
        pulseCircle.style.display = "none";
        pulseAnimation.pause();
    }
});


