// Zgłasza wszystkie adresy z sitemap.xml do IndexNow (Bing, Yandex, Seznam i in.).
// Uruchom po publikacji i po każdej zmianie: node indexnow.js
const fs = require("fs");
const key = "8e9c78966be8baa42006cea8be80ab2b";
const urls = [...fs.readFileSync(__dirname + "/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "mghodowla.pl", key, keyLocation: `https://mghodowla.pl/${key}.txt`, urlList: urls }),
}).then(r => console.log("IndexNow:", r.status, urls.length + " adresów"));
