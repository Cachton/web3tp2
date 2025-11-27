
import Chart from "https://esm.sh/chart.js/auto";

let graphique = new Chart(document.querySelector("canvas"), {
    type: "radar",
    data: {
        labels: [
            "Anubis",
            "Inferno",
            "Mirage",
            "Train",
            "Dust II",
            "Nuke",
            "Ancient"
        ],
        datasets: [
            {
                label: "TOTAL MAP WINS",
                data: [12, 12, 12, 12, 12, 15, 12],
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

// Décommenter pour animer
//
// setInterval(() => {
//   for (let ds of graphique.data.datasets) {
//     for (let i = 0; i < ds.data.length; i++) {
//       ds.data[i] = Math.round(Math.random() * 40 + 10);
//     }
//   }
//   graphique.update();
// }, 1000);
