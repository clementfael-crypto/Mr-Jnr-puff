const products = [

/* =========================
JNR
========================= */

{
brand: “JNR”,
name: “JNR Falcon 16K”,
image: “images/jnr-falcon-16k.jpg”,
specs: “Batterie rechargeable • Double mesh • Jusqu’à 16 000 bouffées annoncées”
},

{
brand: “JNR”,
name: “JNR Falcon X”,
image: “images/jnr-falcon-x.jpg”,
specs: “Batterie rechargeable • Écran • Système à haute autonomie”
},

/* =========================
RAZZBAR
========================= */

{
brand: “RAZZBAR”,
name: “RAZZBAR 30K”,
image: “images/razzbar-30k.jpg”,
specs: “Batterie rechargeable • Jusqu’à 30 000 bouffées annoncées”
},

{
brand: “RAZZBAR”,
name: “RAZZBAR 40K”,
image: “images/razzbar-40k.jpg”,
specs: “Grande autonomie • Batterie rechargeable”
},

{
brand: “RAZZBAR”,
name: “RAZZBAR 60K”,
image: “images/razzbar-60k.jpg”,
specs: “Batterie rechargeable • Jusqu’à 60 000 bouffées annoncées”
},

/* =========================
AL FAKHER
========================= */

{
brand: “Al Fakher”,
name: “Al Fakher Crown Switch”,
image: “images/al-fakher-crown-switch.jpg”,
specs: “Système rechargeable • Plusieurs profils de saveurs”
}
];

/* =========================
AFFICHAGE DES PRODUITS
========================= */

function displayProducts(filter = “Tous”) {

const container = document.getElementById(“products”);

if (!container) return;

const filteredProducts =
filter === “Tous”
? products
: products.filter(product => product.brand === filter);

container.innerHTML = “”;

filteredProducts.forEach(product => {

const card = document.createElement("article");
card.className = "product-card";
card.innerHTML = `
  <img
    src="${product.image}"
    alt="${product.name}"
    onerror="this.src='images/placeholder.jpg'"
  >
  <div class="product-info">
    <span class="brand">
      ${product.brand}
    </span>
    <h3>
      ${product.name}
    </h3>
    <p class="specs">
      ${product.specs}
    </p>
    <a
      class="info-button"
      href="https://t.me/maximeleoncommande"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬 Demander des informations
    </a>
  </div>
`;
container.appendChild(card);

});
}

/* =========================
FILTRES
========================= */

document.querySelectorAll(”.category-btn”).forEach(button => {

button.addEventListener(“click”, () => {

document
  .querySelectorAll(".category-btn")
  .forEach(btn => {
    btn.classList.remove("active");
  });
button.classList.add("active");
displayProducts(button.dataset.brand);

});

});

/* =========================
CONTRÔLE D’ÂGE
========================= */

const ageGate = document.getElementById(“ageGate”);
const ageYes = document.getElementById(“ageYes”);
const ageNo = document.getElementById(“ageNo”);
const ageMessage = document.getElementById(“ageMessage”);

if (localStorage.getItem(“mrjnr_age_verified”) === “true”) {
ageGate.style.display = “none”;
}

ageYes.addEventListener(“click”, () => {

localStorage.setItem(“mrjnr_age_verified”, “true”);

ageGate.style.display = “none”;

});

ageNo.addEventListener(“click”, () => {

ageMessage.textContent =
“L’accès est réservé aux personnes ayant l’âge légal.”;

});

/* =========================
AFFICHAGE INITIAL
========================= */

displayProducts(“Tous”);
