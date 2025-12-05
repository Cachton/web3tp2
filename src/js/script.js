import Chart from "https://esm.sh/chart.js/auto";

// radar 
new Chart(document.getElementById("maps_radar_canvas"), {
    type: "radar",
    data: {
        labels: ["ANUBIS", "INFERNO", "MIRAGE", "VERTIGO", "DUST II", "NUKE", "ANCIENT", "OVERPASS"],
        datasets: [{
            label: "TOTAL MAP WINS",
            data: [6, 12, 8, 17, 9, 30, 15, 6],
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderColor: "white",
            borderWidth: 3,
            pointBackgroundColor: "white"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
            r: {
                angleLines: { color: "rgba(255,255,255,0.2)" },
                grid: { color: "rgba(255,255,255,0.2)" },
                pointLabels: { color: "white" }
            }
        }
    }
});

// bar graph 1
new Chart(document.getElementById("theBarOne01"), {
    type: "bar",
    data: {
        labels: ["MATCHES", "WINS", "TIES", "LOSS"],
        datasets: [{
            label: "SEASON STATS",
            data: [200, 103, 5, 98],
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, ticks: { color: "white" } },
            x: { ticks: { color: "white" } }
        },
        plugins: {
            legend: { labels: { color: "white" } }
        }
    }
});

// bar graph 2
const ctxBar2 = document.getElementById("theBarOne02").getContext("2d");
const barChart2 = new Chart(ctxBar2, {
    type: "bar",
    data: {
        labels: ["KILLS", "DEATHS", "ASSISTS", "ROUNDS"],
        datasets: [{
            label: "SEASON STATS",
            data: [3196, 3099, 1134, 4271],
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, ticks: { color: "white" } },
            x: { ticks: { color: "white" } }
        },
        plugins: { legend: { labels: { color: "white" } } }
    }
});


// line chart
new Chart(document.getElementById("theLineOne"), {
    type: "line",
    data: {
        labels: ["WEEKS 1-10", "WEEKS 11-20", "WEEKS 21-30", "WEEKS 31-40", "WEEKS 41-50", "WEEKS 51-60", "WEEKS 61-70"],
        datasets: [{
            label: "MATCHES PLAYED",
            data: [4, 20, 54, 43, 34, 20, 63],
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            pointBackgroundColor: "white",
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, ticks: { color: "white" } },
            x: { ticks: { color: "white" } }
        },
        plugins: {
            legend: { labels: { color: "white" } }
        }
    }
});

// bouton switch de graph
document.getElementById("swapbtn").addEventListener("click", function () {
    const elA = document.getElementById("theBarOne01");
    const elB = document.getElementById("theBarOne02");

    // Toggle quel graph est visible
    if (elA.style.display !== "none") {
        elA.style.display = "none";
        elB.style.display = "block";
    } else {
        elA.style.display = "block";
        elB.style.display = "none";
    }
});
