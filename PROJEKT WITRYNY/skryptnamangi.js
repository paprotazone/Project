const czytam = document.getElementById("czytam");
const nieczytam = document.getElementById("Nieczytam");
const mangaFields = document.getElementById("mangaFields");

function toggleMangaFields() {
  mangaFields.style.display = czytam.checked ? "block" : "none";
}

czytam.addEventListener("change", toggleMangaFields);
nieczytam.addEventListener("change", toggleMangaFields);
window.addEventListener("DOMContentLoaded", toggleMangaFields);