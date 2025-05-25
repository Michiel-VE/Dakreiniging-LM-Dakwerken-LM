const serviceDataFiles = {
  "Dakherstellingen": "dakherstellingen.json",
  "Dakreiniging & Ontmossen": "dakreiniging.json",
  "Onderhoud Platte Daken": "onderhoud-platte-daken.json"
};

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalServicesList = document.getElementById("modalServicesList");
const modalExtraInfo = document.getElementById("modalExtraInfoList");

const closeButtons = [
  document.getElementById("closeModal"),
  document.getElementById("closeModalBottom")
];

let lastFocusedElement = null;

function openModal(title) {
  const filename = serviceDataFiles[title];
  const filePath = `assets/data/${filename}`;

  lastFocusedElement = document.activeElement;

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${filename}`);
      return response.json();
    })
    .then(data => {
      modalTitle.textContent = data.title || title;
      modalDescription.textContent = data.body || "";

      modalServicesList.innerHTML = (data.services || [])
        .map(item => `<li>${item}</li>`)
        .join("");

      modalExtraInfo.innerHTML = (data.extra_info || [])
        .map(item => `<li>${item}</li>`)
        .join("");

      modal.setAttribute("aria-hidden", "false");
      modal.classList.remove("opacity-0", "translate-y-0", "pointer-events-none");
      modal.classList.add("opacity-100", "translate-y-0");

      document.body.style.overflow = "hidden";

      setTimeout(() => document.getElementById("closeModal").focus(), 100);
    })
    .catch(error => {
        modalTitle.textContent = "";
        modalDescription.textContent = "";
        modalServicesList.innerHTML = "";
        modalExtraInfo.innerHTML = "";
        modal.querySelector('h3').classList.add('hidden');

        const errorMessage = `Er is een probleem opgetreden: ${error.message || 'Onbekende fout'}`;
        modalDescription.innerHTML = `<p class="text-red-600 text-lg font-semibold">${errorMessage}</p>`;
        
        modalExtraInfo.innerHTML = `<li class="text-red-600 text-sm">Probeer het later opnieuw of neem contact op met de beheerder.</li>`;

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
