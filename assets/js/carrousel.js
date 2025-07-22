const images = [
  {
    url: "assets/img/dak_reiniging_landing.webp?v=20250722",
    positionDesktop: "center right",
    positionMobile: "center right"
  },
  {
    url: "assets/img/dak_herstelling.webp?v=20250722",
    positionDesktop: "top center",
    positionMobile: "top center"
  }
];

let current = 0;
let showingA = true;

const a = document.getElementById("carousel-reiniging");
const b = document.getElementById("carousel-herstelling");

// Detect screen size
function isMobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

// Helper to get correct position
function getPosition(image) {
  return isMobile() ? image.positionMobile : image.positionDesktop;
}

// Common styling setup (only once)
[a, b].forEach(el => {
  el.style.transition = "opacity 1s ease-in-out";
  el.style.backgroundSize = "cover";
  el.style.willChange = "opacity";
});

// Set initial background
a.style.backgroundImage = `url('${images[0].url}')`;
a.style.backgroundPosition = getPosition(images[0]);
a.style.backgroundAttachment = "scroll"; // first image never has fixed
a.style.opacity = 1;
b.style.opacity = 0;

function updateBackground() {
  const next = (current + 1) % images.length;
  const nextImage = images[next];
  const position = getPosition(nextImage);
  const attachment = (!isMobile() && next === 1) ? "fixed" : "scroll";

  if (showingA) {
    b.style.backgroundImage = `url('${nextImage.url}')`;
    b.style.backgroundPosition = position;
    b.style.backgroundAttachment = attachment;
    b.style.opacity = 1;
    a.style.opacity = 0;
  } else {
    a.style.backgroundImage = `url('${nextImage.url}')`;
    a.style.backgroundPosition = position;
    a.style.backgroundAttachment = attachment;
    a.style.opacity = 1;
    b.style.opacity = 0;
  }

  showingA = !showingA;
  current = next;
}

// Update every 5 seconds
setInterval(updateBackground, 5000);
