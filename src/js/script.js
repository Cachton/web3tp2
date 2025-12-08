

// toggle les deux bar charts en haut à droite
document.getElementById("swapbtnline").addEventListener("click", () => {
    const barChart1 = document.getElementById("theBarOne01");
    const barChart2 = document.getElementById("theBarOne02");

    if (barChart1.style.display !== "none") {
        barChart1.style.display = "none";
        barChart2.style.display = "block";
    } else {
        barChart1.style.display = "block";
        barChart2.style.display = "none";
    }
});


// fonctions du bouton de gauche
document.getElementById("swapbtnmap").addEventListener("click", () => {
    const line = document.getElementById("thelineone");
    const mapDiv = document.getElementById("carte");

    // animation and zdog
    const animationBox = document.getElementById("animation");
    const zdogCanvas = document.querySelector(".zdog-canvas");

    const mapVisible = getComputedStyle(mapDiv).display !== "none";

    if (mapVisible) {
        // transition map a line graph
        mapDiv.style.display = "none";
        line.style.display = "block";

        // cache l<animation
        animationBox.style.display = "none";

        // révèle l'animation zdog
        zdogCanvas.style.display = "block";
    } else {
        // transition line chart à map
        line.style.display = "none";
        mapDiv.style.display = "block";

        // montre le carré qui spin
        animationBox.style.display = "flex";

        // cache le zdog
        zdogCanvas.style.display = "none";
    }
});



