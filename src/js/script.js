
import Chart from "https://esm.sh/chart.js/auto";
import Line from "https://esm.sh/chart.js/auto";

let graphique_radar = new Chart(document.querySelector("canvas"), {
    type: "radar",
    data: {
        labels: [
            "ANUBIS",
            "INFERNO",
            "MIRAGE",
            "VERTIGO",
            "DUST II",
            "NUKE",
            "ANCIENT",
            "OVERPASS"
        ],
        datasets: [
            {
                label: "TOTAL MAP WINS",
                data: [6, 12, 8, 17, 9, 30, 15, 6],
                backgroundColor: "rgba(255, 255, 255, 1)",
                pointBackgroundColor: "rgba(0, 0, 0, 1)",
                borderWidth: 10
            }

        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false
            },
            title: {
                display: false,
                text: "WINRATE"
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: "rgba(0, 0, 0, 0.1)"
                },
                grid: {
                    circular: false,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: { stepSize: 10, showLabelBackdrop: false }
            }
        }
    }
});


var ctx = document.getElementById('theBarOne01').getContext('2d');
var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "MATCHES",
            "WINS",
            "TIES",
            "LOSS",
        ],
        datasets: [
            {
                label: "SEASON STATS",
                data: [200, 103, 5, 98],
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderWidth: 2
            }

        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false
            },
            title: {
                display: false,
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: "rgba(0, 0, 0, 0.1)"
                },
                grid: {
                    circular: false,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: { stepSize: 10, showLabelBackdrop: false }
            }
        }
    }
});


var ctx = document.getElementById('theBarOne02').getContext('2d');
var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "KILLS",
            "DEATHS",
            "ASSITS",
            "ROUNDS",
        ],
        datasets: [
            {
                label: "SEASON STATS",
                data: [3196, 3099, 1134, 4271],
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderWidth: 2
            }

        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false
            },
            title: {
                display: false,
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: "rgba(0, 0, 0, 0.1)"
                },
                grid: {
                    circular: false,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: { stepSize: 10, showLabelBackdrop: false }
            }
        }
    }
});



var ctx = document.getElementById('theLineOne').getContext('2d');
var chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "WEEKS 1-10",
            "WEEKS 11-20",
            "WEEKS 21-30",
            "WEEKS 31-40",
            "WEEKS 41-50",
            "WEEKS 51-60",
            "WEEKS 61-70"
        ],
        datasets: [
            {
                label: "MATCHES PLAYED",
                data: [4, 20, 54, 43, 34, 20, 63],
                backgroundColor: "rgba(255, 255, 255, 1)",
                pointBackgroundColor: "rgba(0, 0, 0, 1)",
                borderWidth: 10
            }

        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false
            },
            title: {
                display: false,
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: "rgba(0, 0, 0, 0.1)"
                },
                grid: {
                    circular: false,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: { stepSize: 10, showLabelBackdrop: false }
            }
        }
    }
});

document.getElementById("swapBtn").addEventListener("click", function () {
    const elA = document.getElementById("elementA");
    const elB = document.getElementById("elementB");

    // Toggle quel graph est visible
    if (elA.style.display !== "none") {
        elA.style.display = "none";
        elB.style.display = "block";
    } else {
        elA.style.display = "block";
        elB.style.display = "none";
    }
});



