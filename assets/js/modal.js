const serviceHtmlFiles = {
  "Dakherstellingen - Hellende daken": "dakherstellingen_hellende_daken.html",
  "Dakreiniging & Ontmossen": "dakreiniging_ontmossen.html",
  "Dakherstellingen - Platte daken": "dakherstellingen_platte_daken.html"
};


const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const closeButtons = [
  document.getElementById("closeModal"),
  document.getElementById("closeModalBottom")
];

let lastFocusedElement = null;

function openModal(title) {
  const filename = serviceHtmlFiles[title];
  const filePath = `assets/data/${filename}`;

  lastFocusedElement = document.activeElement;

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Kan ${filename} niet laden`);
      return response.text();
    })
    .then(html => {
      modalTitle.textContent = title;
      modalDescription.innerHTML = html;

      modal.setAttribute("aria-hidden", "false");
      modal.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      modal.classList.add("opacity-100", "translate-y-0");
      document.body.style.overflow = "hidden";

      setTimeout(() => document.getElementById("closeModal").focus(), 100);
    })
    .catch(error => {
      modalTitle.textContent = "";

      modalDescription.innerHTML = `
        <div class="text-red-700 bg-red-50 border border-red-200 rounded p-4">
          <p class="text-lg font-semibold mb-2">Er is een fout opgetreden</p>
          <p>${error.message || 'Onbekende fout. Probeer het later opnieuw.'}</p>
        </div>
      `;

      modal.setAttribute("aria-hidden", "false");
      modal.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      modal.classList.add("opacity-100", "translate-y-0");
      document.body.style.overflow = "hidden";

      setTimeout(() => document.getElementById("closeModal").focus(), 100);
    });
}


function closeModal() {
  modal.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  modal.classList.remove("opacity-100", "translate-y-0");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "auto";
  document.getElementById("modalDescription")?.scrollIntoView({
    behavior: "auto",
    block: "start"
  });

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".card").forEach(card => {
  const title = card.querySelector("h3").textContent.trim();


  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Meer informatie over ${title}`);

  card.addEventListener("click", () => openModal(title));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(title);
    }
  });
});

closeButtons.forEach(button =>
  button.addEventListener("click", closeModal)
);

modal.addEventListener("click", (event) => {
  const modalBox = modal.querySelector("div.bg-white");
  if (!modalBox.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("opacity-100")) {
    closeModal();
  }
});
