document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#navMenu a");

    function setCurrentLink() {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            const hrefId = link.getAttribute("href").replace("/#", "");
            if (hrefId === currentSectionId) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", setCurrentLink);
    setCurrentLink();
});
