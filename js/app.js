"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
  {
    nama: "Kopi Tubruk Signature",
    kategori: "Kopi",
    harga: 45000,
    stok: 12,
    unggulan: true,
  },
  {
    nama: "Cold Brew Aren",
    kategori: "Kopi",
    harga: 22000,
    stok: 4,
    unggulan: false,
  },
  {
    nama: "Paket Seduh Rumahan",
    kategori: "Bundling",
    harga: 75000,
    stok: 0,
    unggulan: true,
  },
  {
    nama: "Biji Kopi Arabika Pekalongan",
    kategori: "Kopi",
    harga: 85000,
    stok: 8,
    unggulan: false,
  },
];

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }
  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }
  return { label: "Tersedia", className: "" };
}

function labelKategori(kategori) {
  switch (kategori) {
    case "Kopi":
      return "Produk kopi pilihan";
    case "Bundling":
      return "Paket hemat";
    default:
      return "Produk UMKM";
  }
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const kategori = labelKategori(produk.kategori);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
    const badgeUnggulan = produk.unggulan
      ? '<span class="product-badge">Unggulan</span>'
      : "";

    if (produk.stok > 0) {
      jumlahTersedia += 1;
    }

    markup += `
      <article class="js-product-card">
        ${badgeUnggulan}
        <h3>${produk.nama}</h3>
        <p class="category-note">${kategori}</p>
        <p class="price">${formatRupiah.format(produk.harga)}</p>
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p class="order-note">${labelAksi}</p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} dari ${produkUmkm.length} produk sedang tersedia.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);

console.table(produkUmkm);