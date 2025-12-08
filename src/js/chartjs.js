
import Chart from "https://esm.sh/chart.js/auto";

// radar
new Chart(document.getElementById("maps_radar_canvas"), {
    type: "radar",
    data: {
        labels: ["ANUBIS", "INFERNO", "MIRAGE", "VERTIGO", "DUST II", "NUKE", "ANCIENT", "OVERPASS"],
        datasets: [{
            label: "TOTAL MAP WINS",
            data: [6, 12, 8, 17, 9, 30, 15, 6],
            borderColor: "white",
            borderWidth: 3,
            pointBackgroundColor: "white"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: "white" } }
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

// bar chart 1
const barChart1 = new Chart(document.getElementById("theBarOne01"), {
    type: "bar",
    data: {
        labels: ["MATCHES", "WINS", "TIES", "LOSS"],
        datasets: [{
            label: "SEASON STATS",
            data: [200, 103, 5, 98],
            backgroundColor: "white",
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

// bar chart 2
const barChart2 = new Chart(document.getElementById("theBarOne02"), {
    type: "bar",
    data: {
        labels: ["KILLS", "DEATHS", "ASSISTS", "ROUNDS"],
        datasets: [{
            label: "SEASON STATS",
            data: [3196, 3099, 1134, 4271],
            backgroundColor: "white",
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

// line
const lineChart = new Chart(document.getElementById("thelineone"), {
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
        plugins: { legend: { labels: { color: "white" } } }
    }
});


