document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    const bg = document.getElementById("carousel-reiniging");
    const bg2 = document.getElementById("carousel-herstelling");
    if (bg) bg.style.transform = `translate(${x}px, ${y}px)`;
    if (bg2) bg2.style.transform = `translate(${x}px, ${y}px)`;
});