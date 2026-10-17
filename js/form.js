const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

if (form && preview) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const telepon = data.get("telepon") || "-";
    const waktu = data.get("waktu") || "-";

    preview.textContent = [
      `Nama: ${data.get("nama")}`,
      `Email: ${data.get("email")}`,
      `WhatsApp: ${telepon}`,
      `Paket: ${data.get("paket")}`,
      `Topik: ${data.get("topik")}`,
      `Waktu kontak: ${waktu}`,
      `Pesan: ${data.get("pesan")}`,
    ].join("\n");
  });
}