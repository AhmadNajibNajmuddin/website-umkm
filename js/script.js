const promoButton = document.querySelector("#promoButton");
const promoText = document.querySelector("#promoText");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoText.style.display = "block";
    promoButton.textContent = "Promo Berhasil Diklaim!";
    console.log("Promo Kopi Nusa berhasil ditampilkan di layar.");
  });
}