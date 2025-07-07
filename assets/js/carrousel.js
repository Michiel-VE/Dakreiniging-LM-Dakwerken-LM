const images = [
    {
        url: "assets/img/dak_reiniging.webp",
        position: "center top"
    },
    {
        url: "assets/img/dak_herstelling.webp",
        position: "center center"
    }
];

let current = 0;
let showingA = true;

const a = document.getElementById("carousel-reiniging");
const b = document.getElementById("carousel-herstelling");

a.style.backgroundImage = `url('${images[0].url}')`;
a.style.backgroundPosition = images[0].position;
a.style.opacity = 1;
b.style.opacity = 0;

function updateBackground() {
    const next = (current + 1) % images.length;
    const nextImage = images[next];

    if (showingA) {
        b.style.backgroundImage = `url('${nextImage.url}')`;
        b.style.backgroundPosition = nextImage.position;
        b.style.opacity = 1;
        a.style.opacity = 0;
    } else {
        a.style.backgroundImage = `url('${nextImage.url}')`;
        a.style.backgroundPosition = nextImage.position;
        a.style.opacity = 1;
        b.style.opacity = 0;
    }

    showingA = !showingA;
    current = next;
}

[a, b].forEach(el => {
    el.style.transition = "opacity 1s ease-in-out";
    el.style.backgroundSize = "cover";
    el.style.backgroundAttachment = "fixed";
});

setInterval(updateBackground, 5000);
