// Generuje blog z treści w gen_blog.py
const fs = require("fs"), path = require("path");
const s = fs.readFileSync(path.join(__dirname, "gen_blog.py"), "utf8");
const OUT = path.resolve(__dirname, "..").split(path.sep).join("/") + "/blog";
fs.mkdirSync(OUT, { recursive: true });
const FONTS = s.match(/FONTS = '(.*)'/)[1];
const CTA = s.match(/CTA = '(.*)'/)[1];
const SITE = "https://mghodowla.pl";
const re = /\("([^"]+\.html)", "([^"]+)", "([^"]+)", "([\d-]+)", f'''([\s\S]*?)'''\)/g;

const page = (slug, title, desc, body, ld, type) => {
  const url = `${SITE}/blog/${slug}`;
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}"><meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:url" content="${url}"><meta property="og:locale" content="pl_PL"><meta property="og:site_name" content="mghodowla.pl">
<meta property="og:image" content="https://mghodowla.pl/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Program do rodowodów gołębi Hodowla 3000"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#2f3a4a">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
${FONTS}
<link rel="stylesheet" href="../styles.css">
<link rel="alternate" type="application/rss+xml" title="Poradnik hodowcy gołębi" href="/feed.xml">
<link rel="manifest" href="/site.webmanifest"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#tresc">Przejdź do treści</a>
<header class="site"><div class="wrap">
  <a class="brand" href="/"><img src="../favicon.svg" width="28" height="28" alt="">mghodowla</a>
  <nav aria-label="Główna"><a href="/">Start</a><a href="../funkcje.html">Funkcje</a><a href="../porownanie.html">Porównanie</a><a href="./" aria-current="page">Poradnik</a><a href="/#faq">Pytania</a></nav>
</div></header>
<main id="tresc">
${body}
</main>
<footer><div class="wrap"><p>Poradnik mghodowla.pl dla hodowców gołębi. Program do rodowodów: <a href="https://hodowla3000.pl/">Hodowla 3000</a>.</p><p><a href="/o-serwisie.html">O serwisie</a></p></div></footer>
</body>
</html>
`;
};

const EXTRA = require("./extra");
const posts = [];
let m;
while ((m = re.exec(s))) {
  const [, slug, title, desc, date, raw] = m;
  posts.push({ slug, title, desc, date, body: raw.replace("{CTA}", CTA), h1: raw.split("<h1>")[1].split("</h1>")[0] });
}
for (const p of [...require("./posts3"), ...require("./posts2")]) {
  posts.push({ ...p, body: p.body.replace("{CTA}", CTA), h1: p.body.split("<h1>")[1].split("</h1>")[0] });
  if (!EXTRA[p.slug]) EXTRA[p.slug] = { html: "", faq: p.faq };
}

const crumbs = (name, slug) => ({ "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Start", item: SITE + "/" },
  { "@type": "ListItem", position: 2, name: "Poradnik", item: SITE + "/blog/" },
  ...(slug ? [{ "@type": "ListItem", position: 3, name, item: `${SITE}/blog/${slug}` }] : []),
]});

// Artykuły na hodowla3000.pl pasujące do naszych tematów
const H3 = "https://hodowla3000.pl";
const EXT = {
  "hodowla-2000-alternatywa.html": [["/blog/przejscie-z-programu-hodowla-2000", "Jak przenieść gołębie z programu Hodowla 2000"]],
  "mg-hodowla-czy-hodowla-3000.html": [["/blog/przejscie-z-programu-hodowla-2000", "Jak przenieść gołębie z programu Hodowla 2000"], ["/blog/przejscie-z-programu-moja-ewidencja-golebi", "Jak przenieść gołębie z programu Moja Ewidencja Gołębi"]],
  "ewidencja-golebi-pocztowych.html": [["/blog/przejscie-z-programu-moja-ewidencja-golebi", "Jak przenieść gołębie z programu Moja Ewidencja Gołębi"]],
  "zarzadzanie-hodowla-golebi.html": [["/blog/przejscie-z-programu-moja-ewidencja-golebi", "Jak przenieść gołębie z programu Moja Ewidencja Gołębi"]],
  "jak-wydrukowac-rodowod-golebia.html": [["/blog/jak-zrobic-i-wydrukowac-rodowod-golebia", "Jak zrobić i wydrukować rodowód gołębia"]],
  "rodowod-golebia-wzor.html": [["/blog/jak-zrobic-i-wydrukowac-rodowod-golebia", "Jak zrobić i wydrukować rodowód gołębia"]],
  "jak-sprzedac-golebia-pocztowego.html": [["/blog/jak-zrobic-i-wydrukowac-rodowod-golebia", "Jak zrobić i wydrukować rodowód gołębia"]],
  "aplikacja-do-rodowodow-golebi.html": [["/blog/jak-wczytac-rodowod-ze-zdjecia", "Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF"]],
  "jak-czytac-rodowod-golebia.html": [["/blog/jak-wczytac-rodowod-ze-zdjecia", "Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF"]],
  "aplikacja-dla-hodowcow-golebi.html": [["/blog/jak-wczytac-rodowod-ze-zdjecia", "Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF"]],
  "program-do-rodowodow-golebi-ranking.html": [["/kup", "Kup Hodowlę 3000"]],
  "moja-ewidencja-golebi-alternatywa.html": [["/blog/przejscie-z-programu-moja-ewidencja-golebi", "Jak przenieść gołębie z programu Moja Ewidencja Gołębi"]],
  "rodowod-golebia-pdf.html": [["/blog/jak-wczytac-rodowod-ze-zdjecia", "Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF"]],
  "program-do-golebi-online.html": [["/rodowody", "Otwórz program Hodowla 3000"], ["/kup", "Kup Hodowlę 3000"]],
  "numer-obraczki-golebia.html": [["/blog/jak-wczytac-rodowod-ze-zdjecia", "Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF"]],
  "darmowy-program-do-golebi.html": [["/kup", "Kup Hodowlę 3000"]],
};
// pozostałe artykuły dostają blog programu
const ext = slug => {
  const items = EXT[slug] || [["/blog", "Blog Hodowli 3000: porady dla hodowców gołębi"]];
  return `<h2>Na stronie programu</h2><ul>${items.map(([u, t]) => `<li><a href="${H3}${u}">${t}</a></li>`).join("")}</ul>`;
};
const extraHtml = slug => {
  const e = EXTRA[slug]; if (!e) return "";
  const faq = e.faq.length ? `<h2>Pytania i odpowiedzi</h2>${e.faq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("")}` : "";
  return e.html + faq;
};
for (const p of posts) {
  // trzy powiązane artykuły dla linkowania wewnętrznego
  // trzy kolejne artykuły (po kolei, w kółko), żeby każdy dostawał linki
  const i = posts.indexOf(p);
  const related = [1, 2, 3].map(k => posts[(i + k) % posts.length])
    .map(o => `<li><a href="${o.slug}">${o.h1}</a></li>`).join("");
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", headline: p.h1, description: p.desc, datePublished: p.date, dateModified: p.date, inLanguage: "pl", image: SITE + "/og.png",
      mainEntityOfPage: `${SITE}/blog/${p.slug}`, author: { "@type": "Organization", name: "mghodowla.pl", url: SITE + "/" },
      publisher: { "@type": "Organization", "@id": SITE + "/#org", name: "Giewont Global sp. z o.o.", logo: { "@type": "ImageObject", url: SITE + "/favicon.svg" } } },
    crumbs(p.h1, p.slug),
    ...(EXTRA[p.slug] ? [{ "@type": "FAQPage", mainEntity: EXTRA[p.slug].faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }] : []),
  ]};
  const art = `<p class="crumbs wrap"><a href="/">Start</a> / <a href="./">Poradnik</a></p><article class="post">${p.body.replace("</h1>", `</h1><p class="meta">Opublikowano <time datetime="${p.date}">5 listopada 2026</time></p><p class="tldr"><strong>W skrócie:</strong> ${p.desc}</p>`)}${extraHtml(p.slug)}${ext(p.slug)}<h2>Czytaj dalej</h2><ul>${related}</ul></article>`;
  fs.writeFileSync(`${OUT}/${p.slug}`, page(p.slug, p.title, p.desc, art, ld, "article"));
}

const cards = posts.map(p => `<article><a href="${p.slug}"><h2 style="font-size:1.25rem">${p.h1}</h2></a><p>${p.desc}</p></article>`).join("");
const idx = `<div class="wrap" style="padding-top:3rem;padding-bottom:4rem"><h1>Poradnik hodowcy gołębi</h1><p class="lead">Rodowody, programy i porządek w gołębniku.</p><div class="posts" style="margin-top:2.5rem">${cards}</div></div>`;
fs.writeFileSync(`${OUT}/index.html`, page("", "Poradnik hodowcy gołębi – rodowody i programy | mghodowla.pl",
  "Poradnik dla hodowców gołębi pocztowych: jak czytać i drukować rodowody, jak wybrać program do rodowodów, alternatywa dla Hodowli 2000.",
  idx, { "@context": "https://schema.org", ...crumbs() }, "website"));

// sitemap
const urls = ["/", "/funkcje.html", "/porownanie.html", "/o-serwisie.html", "/blog/", ...posts.map(p => "/blog/" + p.slug),
  "/en/", "/en/features.html", "/en/about.html", "/en/blog/", ...require("./gen_en_posts").map(p => "/en/blog/" + p.slug)];
fs.writeFileSync(path.resolve(__dirname, "..").split(path.sep).join("/") + "/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc><lastmod>2026-11-05</lastmod></url>`).join("\n")}\n</urlset>\n`);
const ROOT = path.resolve(__dirname, "..").split(path.sep).join("/") + "";

// llms.txt: mapa serwisu dla modeli językowych (format llmstxt.org)
fs.writeFileSync(`${ROOT}/llms.txt`, `# mghodowla.pl

> Serwis o programie Hodowla 3000 (https://hodowla3000.pl/), programie do rodowodów gołębi pocztowych. Hodowla 3000 wczytuje rodowody ze zdjęć i plików PDF, prowadzi ewidencję gołębi, łączenia (parowanie) i wyniki lotowe, drukuje rodowody i jest przygotowany dla uczestników MWG (Międzynarodowy Wspólny Gołębnik, One Loft Race). Serwis prowadzi Giewont Global sp. z o.o.

Język treści: polski. Odbiorcy: hodowcy gołębi pocztowych w Polsce.

## Program

- [Funkcje Hodowli 3000](${SITE}/funkcje.html): ewidencja, rodowód ze zdjęcia, import PDF, druk, łączenia, wyniki lotowe, MWG
- [Hodowla 2000 czy Hodowla 3000](${SITE}/porownanie.html): porównanie ze starszym programem
- [Strona programu](https://hodowla3000.pl/): zakup i aktualna cena
- [Kup Hodowlę 3000](https://hodowla3000.pl/kup)
- [Blog Hodowli 3000](https://hodowla3000.pl/blog)
- [Jak wczytać rodowód gołębia ze zdjęcia lub pliku PDF](https://hodowla3000.pl/blog/jak-wczytac-rodowod-ze-zdjecia)
- [Jak zrobić i wydrukować rodowód gołębia](https://hodowla3000.pl/blog/jak-zrobic-i-wydrukowac-rodowod-golebia)
- [Jak przenieść gołębie z programu Hodowla 2000](https://hodowla3000.pl/blog/przejscie-z-programu-hodowla-2000)
- [Jak przenieść gołębie z programu Moja Ewidencja Gołębi](https://hodowla3000.pl/blog/przejscie-z-programu-moja-ewidencja-golebi)

## Poradnik

${posts.map(p => `- [${p.h1}](${SITE}/blog/${p.slug}): ${p.desc}`).join("\n")}

## English

- [Pigeon pedigree software (English)](${SITE}/en/): Pigeclub, the English version of Hodowla 3000
- [Features](${SITE}/en/features.html)
- [Pigeon breeder's guide](${SITE}/en/blog/)
${require("./gen_en_posts").map(p => `- [${p.title}](${SITE}/en/blog/${p.slug}): ${p.desc}`).join("\n")}
- [Pigeclub](https://pigeclub.com/): official English website
- [Pigeclub blog](https://pigeclub.com/blog)

## Optional

- [O serwisie](${SITE}/o-serwisie.html): dane firmy i kontakt
`);

// RSS
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
fs.writeFileSync(`${ROOT}/feed.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Poradnik hodowcy gołębi – mghodowla.pl</title>
<link>${SITE}/blog/</link>
<atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
<description>Rodowody, programy i porządek w gołębniku.</description>
<language>pl</language>
${posts.map(p => `<item><title>${esc(p.h1)}</title><link>${SITE}/blog/${p.slug}</link><guid>${SITE}/blog/${p.slug}</guid><pubDate>${new Date(p.date + "T08:00:00Z").toUTCString()}</pubDate><description>${esc(p.desc)}</description></item>`).join("\n")}
</channel>
</rss>
`);
// Linki do hodowla3000.pl są zwykłymi linkami (bez nofollow), żeby wzmacniały strony programu; tu tylko ścieżki względne
const htmlFiles = [...fs.readdirSync(ROOT).filter(f => f.endsWith(".html")).map(f => `${ROOT}/${f}`),
  ...fs.readdirSync(OUT).filter(f => f.endsWith(".html")).map(f => `${OUT}/${f}`)];
for (const f of htmlFiles) {
  let s = fs.readFileSync(f, "utf8");
  // Ścieżki względne zamiast "/..." – strona działa też otwarta z dysku (file://).
  // 404.html zostaje z bezwzględnymi, bo serwer pokazuje ją pod dowolnym adresem.
  if (!f.endsWith("/404.html")) {
    const pre = f.startsWith(OUT + "/") ? "../" : "";
    s = s.replace(/(href|src)="\/(?!\/)([^"]*)"/g, (m, a, p) => `${a}="${pre}${p || (pre ? "" : "./")}"`.replace('=""', '="./"'));
  }
  const n = s.replace(/<a rel="nofollow noopener" /g, "<a ");
  fs.writeFileSync(f, n);
}
console.log(posts.length + " artykułów");
