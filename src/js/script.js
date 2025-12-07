
// toggle line chart ou carte
document.getElementById("swapbtnmap").addEventListener("click", () => {
    const line = document.getElementById("thelineone");
    const mapDiv = document.getElementById("carte");

    if (mapDiv.style.display !== "none") {
        mapDiv.style.display = "none";
        line.style.display = "block";
    } else {
        line.style.display = "none";
        mapDiv.style.display = "block";
        mapInstance.resize();
    }
});

