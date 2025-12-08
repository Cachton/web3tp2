import * as Tone from "https://esm.sh/tone@next";

// tonejs son hover
// parametre synth
const synth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.5, decay: 0.1, sustain: 0.1, release: 0.2 }
}).toDestination();

// son
function playHoverSound() {
    synth.triggerAttackRelease("F3", "16n");
}

// lie aux boutons
const hoverButtons = [
    document.getElementById("swapbtnmap"),
    document.getElementById("swapbtnline")
];

hoverButtons.forEach(btn => {
    if (!btn) return;

    btn.addEventListener("mouseenter", async () => {
        await Tone.start();
        playHoverSound();
    });
});

// tonejs son du clic
const clickSynth = new Tone.MembraneSynth({
    pitchDecay: 0.02,
    octaves: 4,
    envelope: { attack: 0.001, decay: 0.2, sustain: 0 }
}).toDestination();

// fonction son de clic
function playClickSound() {
    clickSynth.triggerAttackRelease("C4", "16n");
}

// lier aux boutons
hoverButtons.forEach(btn => {
    if (!btn) return;

    btn.addEventListener("click", async () => {
        await Tone.start();
        playClickSound();
    });
});

