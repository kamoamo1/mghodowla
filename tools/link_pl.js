// Polish pages: hreflang pairs, "English" nav link and Pigeclub links. Idempotent; run after gen.js.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..").split(path.sep).join("/");
const SITE = "https://mghodowla.pl";
const PAIRS = {
  ...Object.fromEntries(require("./gen_en_posts2").map(p => ["/blog/" + p.pl, "/en/blog/" + p.slug])),
  "/": "/en/", "/funkcje.html": "/en/features.html", "/o-serwisie.html": "/en/about.html", "/blog/": "/en/blog/",
  "/blog/jak-czytac-rodowod-golebia.html": "/en/blog/how-to-read-a-pigeon-pedigree.html",
  "/blog/aplikacja-do-rodowodow-golebi.html": "/en/blog/pigeon-pedigree-from-a-photo.html",
  "/blog/rodowod-golebia-wzor.html": "/en/blog/pigeon-pedigree-template.html",
  "/blog/jak-wydrukowac-rodowod-golebia.html": "/en/blog/how-to-print-a-pigeon-pedigree.html",
  "/blog/rodowody-dla-uczestnikow-mwg.html": "/en/blog/one-loft-race-pedigrees.html",
  "/blog/laczenie-golebi-w-pary.html": "/en/blog/pigeon-pairing.html",
};
const PC_LI = `<li lang="en"><a href="https://pigeclub.com/" hreflang="en">English version of the software: Pigeclub</a></li>`;
const files = ["index.html", "funkcje.html", "porownanie.html", "o-serwisie.html",
  ...fs.readdirSync(ROOT + "/blog").filter(f => f.endsWith(".html")).map(f => "blog/" + f)];
for (const f of files) {
  let s = fs.readFileSync(ROOT + "/" + f, "utf8");
  const path = "/" + (f === "index.html" ? "" : f.replace(/index\.html$/, ""));
  const en = PAIRS[path];
  const pre = f.startsWith("blog/") ? "../" : "";
  if (en && !s.includes('hreflang="en"')) s = s.replace(/(<link rel="canonical"[^>]*>)/,
    `$1\n<link rel="alternate" hreflang="pl" href="${SITE}${path}"><link rel="alternate" hreflang="en" href="${SITE}${en}"><link rel="alternate" hreflang="x-default" href="${SITE}${path}">`);
  if (!s.includes('lang="en" hreflang="en">English')) s = s.replace("</nav>",
    `  <a href="${pre}${(en || "/en/").slice(1)}" lang="en" hreflang="en">English</a>\n  </nav>`);
  if (!s.includes("pigeclub.com")) {
    s = s.replace("<h2>Na stronie programu</h2><ul>", "<h2>Na stronie programu</h2><ul>" + PC_LI);
    s = s.replace('<li><a href="https://hodowla3000.pl/terms">Regulamin Hodowli 3000</a></li>', m => m + "\n    " + PC_LI);
    s = s.replace(/(<footer><div class="wrap"><p>mghodowla\.pl[^<]*<a[^>]*>Hodowla 3000<\/a>)/, `$1 (<span lang="en">in English: <a href="https://pigeclub.com/" hreflang="en">Pigeclub</a></span>)`);
  }
  fs.writeFileSync(ROOT + "/" + f, s);
}
console.log("PL: " + files.length + " plików");
