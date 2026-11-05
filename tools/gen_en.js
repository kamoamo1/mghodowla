// English version of mghodowla.pl under /en/. Product name in English: Pigeclub (pigeclub.com).
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..").split(path.sep).join("/");
const SITE = "https://mghodowla.pl";
const PC = "https://pigeclub.com";
const DATE = "2026-11-05";

// Polish page <-> English page (paths from site root)
const PAIRS = {
  ...Object.fromEntries(require("./gen_en_posts2").map(p => ["/blog/" + p.pl, "/en/blog/" + p.slug])),
  "/": "/en/",
  "/funkcje.html": "/en/features.html",
  "/o-serwisie.html": "/en/about.html",
  "/blog/": "/en/blog/",
  "/blog/jak-czytac-rodowod-golebia.html": "/en/blog/how-to-read-a-pigeon-pedigree.html",
  "/blog/aplikacja-do-rodowodow-golebi.html": "/en/blog/pigeon-pedigree-from-a-photo.html",
  "/blog/rodowod-golebia-wzor.html": "/en/blog/pigeon-pedigree-template.html",
  "/blog/jak-wydrukowac-rodowod-golebia.html": "/en/blog/how-to-print-a-pigeon-pedigree.html",
  "/blog/rodowody-dla-uczestnikow-mwg.html": "/en/blog/one-loft-race-pedigrees.html",
  "/blog/laczenie-golebi-w-pary.html": "/en/blog/pigeon-pairing.html",
};

const head = (path, title, desc, type, ld, pre) => {
  const url = SITE + path;
  const pl = Object.keys(PAIRS).find(k => PAIRS[k] === path);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${url}">
${pl ? `<link rel="alternate" hreflang="pl" href="${SITE}${pl}"><link rel="alternate" hreflang="en" href="${url}"><link rel="alternate" hreflang="x-default" href="${SITE}${pl}">` : ""}
<meta property="og:type" content="${type}"><meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:url" content="${url}"><meta property="og:locale" content="en_GB"><meta property="og:site_name" content="mghodowla.pl">
<meta property="og:image" content="${SITE}/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Pigeon pedigree software">
<meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#2f3a4a">
<link rel="icon" href="${pre}favicon.svg" type="image/svg+xml">
<link rel="preload" href="${pre}fonts/BricolageGrotesque-latin-1.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${pre}fonts/SourceSerif4-latin-3.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${pre}styles.css">
<link rel="manifest" href="${pre}site.webmanifest"><link rel="apple-touch-icon" href="${pre}apple-touch-icon.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>`;
};

const nav = (pre, cur, plHref) => `<body>
<a class="skip" href="#content">Skip to content</a>
<header class="site"><div class="wrap">
  <a class="brand" href="${pre}en/"><img src="${pre}favicon.svg" width="28" height="28" alt="">mghodowla</a>
  <nav aria-label="Main">
    <a href="${pre}en/"${cur === "home" ? ' aria-current="page"' : ""}>Home</a>
    <a href="${pre}en/features.html"${cur === "features" ? ' aria-current="page"' : ""}>Features</a>
    <a href="${pre}en/blog/"${cur === "blog" ? ' aria-current="page"' : ""}>Guide</a>
    <a href="${pre}en/#faq">FAQ</a>
    <a href="${plHref}" lang="pl" hreflang="pl">Polski</a>
  </nav>
</div></header>`;

const foot = pre => `<footer><div class="wrap"><p>mghodowla.pl covers <a href="${PC}/">Pigeclub</a>, pigeon pedigree software, known in Poland as <a href="https://hodowla3000.pl/" lang="pl">Hodowla 3000</a>.</p><p><a href="${pre}en/about.html">About</a></p></div></footer>
</body>
</html>
`;

const plHrefFor = (path, pre) => {
  const pl = Object.keys(PAIRS).find(k => PAIRS[k] === path) || "/";
  return pre + (pl === "/" ? "" : pl.slice(1)) || "./";
};

const page = (path, cur, title, desc, type, ld, main) => {
  const depth = path.split("/").length - 2; // "/en/x.html" -> 1, "/en/blog/x.html" -> 2
  const pre = "../".repeat(depth);
  const out = ROOT + (path.endsWith("/") ? path + "index.html" : path);
  fs.mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
  fs.writeFileSync(out, head(path, title, desc, type, ld, pre) + "\n" + nav(pre, cur, plHrefFor(path, pre) || "../") + `\n<main id="content">\n${main}\n</main>\n` + foot(pre));
};

const CTA = `<div class="box"><p><strong>Stop retyping pedigrees.</strong> Pigeclub imports them from a photo or a PDF. <a href="${PC}/">See Pigeclub</a>.</p></div>`;
const crumbs = (name, path) => ({ "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/en/" },
  { "@type": "ListItem", position: 2, name: "Guide", item: SITE + "/en/blog/" },
  ...(path ? [{ "@type": "ListItem", position: 3, name, item: SITE + path }] : []),
]});
const app = { "@type": "SoftwareApplication", name: "Pigeclub", alternateName: "Hodowla 3000", url: PC + "/", applicationCategory: "BusinessApplication", operatingSystem: "Web, Windows", inLanguage: "en",
  featureList: ["Pigeon records", "Pedigree from a photo", "PDF pedigree import", "Pedigree printing", "Pairing", "Race results", "One loft race (OLR) support"] };

// ---------- articles ----------
const posts = require("./gen_en_posts");

for (const p of posts) {
  const path = "/en/blog/" + p.slug;
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", headline: p.title, description: p.desc, datePublished: DATE, dateModified: DATE, inLanguage: "en", image: SITE + "/og.png",
      mainEntityOfPage: SITE + path, author: { "@type": "Organization", name: "mghodowla.pl", url: SITE + "/" },
      publisher: { "@type": "Organization", "@id": SITE + "/#org", name: "Giewont Global sp. z o.o.", logo: { "@type": "ImageObject", url: SITE + "/favicon.svg" } } },
    crumbs(p.title, path),
    { "@type": "FAQPage", mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ]};
  const i = posts.indexOf(p);
  const related = [1, 2, 3].map(k => posts[(i + k) % posts.length]).map(o => `<li><a href="${o.slug}">${o.title}</a></li>`).join("");
  const pc = p.pcLink || ["/blog", "Pigeclub blog: pigeon breeding advice"];
  const main = `<p class="crumbs wrap"><a href="../">Home</a> / <a href="./">Guide</a></p><article class="post">
<h1>${p.title}</h1><p class="meta">Published <time datetime="${DATE}">5 November 2026</time></p><p class="tldr"><strong>In short:</strong> ${p.desc}</p>
${p.body}
${CTA}
<h2>Questions and answers</h2>${p.faq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("")}
<h2>On the Pigeclub website</h2><ul><li><a href="${PC}${pc[0]}">${pc[1]}</a></li><li><a href="${PC}/">Pigeclub: pigeon pedigree software</a></li></ul>
<h2>Read next</h2><ul>${related}</ul></article>`;
  page(path, "blog", p.title + " | mghodowla.pl", p.desc, "article", ld, main);
}

// ---------- blog index ----------
page("/en/blog/", "blog", "Pigeon breeder's guide: pedigrees and software | mghodowla.pl",
  "A guide for racing pigeon breeders: reading and printing pedigrees, pedigree templates, pairing and one loft races.", "website",
  { "@context": "https://schema.org", ...crumbs() },
  `<div class="wrap" style="padding-top:3rem;padding-bottom:4rem"><h1>Pigeon breeder's guide</h1><p class="lead">Pedigrees, software and an orderly loft.</p><div class="posts" style="margin-top:2.5rem">${posts.map(p => `<article><a href="${p.slug}"><h2 style="font-size:1.25rem">${p.title}</h2></a><p>${p.desc}</p></article>`).join("")}</div></div>`);

// ---------- home ----------
page("/en/", "home", "Pigeon pedigree software that reads pedigrees for you | Pigeclub",
  "Pigeon pedigree software: import pedigrees from a photo or PDF, keep pigeon records, pairings and race results, and print pedigrees. Built for OLR breeders too.", "website",
  { "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", name: "mghodowla.pl", url: SITE + "/en/", inLanguage: "en" }, app,
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What is the best pigeon pedigree software?", acceptedAnswer: { "@type": "Answer", text: "One that saves you typing. Pigeclub imports pedigrees from photos and PDFs, keeps records, pairings and race results, and prints pedigrees." } },
      { "@type": "Question", name: "Is Pigeclub suitable for one loft race breeders?", acceptedAnswer: { "@type": "Answer", text: "Yes, it is built for breeders who send pigeons to one loft races (OLR) as well." } },
    ] }] },
  `<div class="hero-band"><div class="wrap hero">
  <div>
    <h1>Pigeon pedigree software that reads pedigrees for you</h1>
    <p class="lead">Take a photo of a pedigree or upload a PDF. Pigeclub enters the pigeons, ancestors and ring numbers. You just check and print.</p>
    <div class="ctas"><a class="btn" href="${PC}/">Try Pigeclub</a><a class="btn ghost" href="features.html">See all features</a></div>
  </div>
  <svg class="tree" style="position:static;width:100%" viewBox="0 0 460 340" role="img" aria-label="Example pigeon pedigree tree: a pigeon, its sire and dam, and four grandparents">
    <path class="line" d="M124 170 H170 V85 H200 M170 170 V255 H200 M320 85 H340 V45 H360 M340 85 V125 H360 M320 255 H340 V215 H360 M340 255 V295 H360"/>
    <rect class="node root" x="4" y="140" width="120" height="60" rx="8"/><text x="14" y="165">PL-0123-24-512</text><text class="sub" x="14" y="183">cock, blue</text>
    <rect class="node" x="200" y="60" width="120" height="50" rx="8"/><text x="212" y="82">Sire</text><text class="sub" x="212" y="98">PL-0123-21-87</text>
    <rect class="node" x="200" y="230" width="120" height="50" rx="8"/><text x="212" y="252">Dam</text><text class="sub" x="212" y="268">PL-0456-22-301</text>
    <rect class="node" x="360" y="28" width="92" height="34" rx="6"/><text x="368" y="50">Grandsire</text>
    <rect class="node" x="360" y="108" width="92" height="34" rx="6"/><text x="368" y="130">Granddam</text>
    <rect class="node" x="360" y="198" width="92" height="34" rx="6"/><text x="368" y="220">Grandsire</text>
    <rect class="node" x="360" y="278" width="92" height="34" rx="6"/><text x="368" y="300">Granddam</text>
  </svg>
</div></div>

<section><div class="wrap split">
  <div>
    <h2>Pedigree software for racing pigeon breeders</h2>
    <p>Pigeclub is pigeon pedigree software for breeders who want an orderly loft without retyping paper pedigrees. Import a pedigree from a photo or a PDF, check the recognised data and save the pigeon's ancestry to your records.</p>
    <p>From there you print pedigrees when you sell a bird, show it or plan pairings. Ring numbers, colours, sex and ancestors are all in one place.</p>
  </div>
  <div>
    <h3>Who it is for</h3>
    <p>Racing pigeon breeders with a dozen or a few hundred birds, breeders who send youngsters to one loft races, and anyone moving from a notebook or an old program to modern pedigree software.</p>
    <p><a href="blog/">Read the breeder's guide</a></p>
  </div>
</div></section>

<section id="faq"><div class="wrap">
  <h2>Breeders' questions</h2>
  <details><summary>What is the best pigeon pedigree software?</summary><p>One that saves you typing. Pigeclub imports pedigrees from photos and PDFs, keeps records, pairings and race results, and prints pedigrees.</p></details>
  <details><summary>Is Pigeclub suitable for one loft race breeders?</summary><p>Yes, it is built for breeders who send pigeons to one loft races (OLR) as well. <a href="blog/one-loft-race-pedigrees.html">How to prepare OLR pedigrees</a>.</p></details>
  <details><summary>Where can I get Pigeclub?</summary><p>On the official website, <a href="${PC}/">pigeclub.com</a>.</p></details>
</div></section>

<section class="final"><div class="wrap">
  <h2>Stop retyping pedigrees</h2>
  <p>Your pigeons deserve software from this century.</p>
  <div class="ctas" style="display:flex;gap:.8rem;flex-wrap:wrap"><a class="btn" href="${PC}/">Go to Pigeclub</a><a class="btn ghost-light" href="${PC}/blog">Read the Pigeclub blog</a></div>
</div></section>`);

// ---------- features ----------
page("/en/features.html", "features", "Pigeon software features | Pigeclub",
  "All Pigeclub features: pigeon records, pedigrees from photos and PDF, pedigree printing, pairing, race results and one loft race support.", "website",
  { "@context": "https://schema.org", "@graph": [app] },
  `<article class="post">
  <h1>Pigeclub features</h1>
  <p class="meta">Everything a racing pigeon breeder needs, in one program</p>
  <p>Pigeclub runs your whole loft: records, pedigrees, pairings and race results. The key difference from other programs: you do not retype pedigrees, you import them.</p>
  <h2 id="records">Pigeon records</h2><p>Every bird with ring number, year, sex, colour and status: racing, breeding, sold. Search by ring number and see the pedigree and results at once.</p>
  <h2 id="photo">Pedigree from a photo</h2><p>Photograph a paper pedigree with your phone. The software recognises ring numbers, ancestors and notes; you just check the result. <a href="blog/pigeon-pedigree-from-a-photo.html">How to take a good photo</a>.</p>
  <h2 id="pdf">PDF import</h2><p>Pedigrees from sellers often arrive as PDF. Import the file directly.</p>
  <h2 id="print">Pedigree printing</h2><p>Print a clear pedigree with ancestors and results for a sale or a show. <a href="blog/how-to-print-a-pigeon-pedigree.html">What a printout should contain</a>.</p>
  <h2 id="pairing">Pairing</h2><p>Plan pairs, see shared ancestors of cock and hen, and record the youngsters from each pairing. <a href="blog/pigeon-pairing.html">How to plan pairings</a>.</p>
  <h2 id="results">Race results</h2><p>Record races, distances and positions. The best results go into the pedigree.</p>
  <h2 id="olr">One loft races (OLR)</h2><p>Keep the pedigree of every bird you send to a one loft race and add its results. <a href="blog/one-loft-race-pedigrees.html">How to prepare</a>.</p>
  <h2 id="pigeclub-pages">Pigeclub pages</h2>
  <ul>
    <li><a href="${PC}/">Pigeclub: pigeon pedigree software</a></li>
    <li><a href="${PC}/blog">Pigeclub blog: pigeon breeding advice</a></li>
    <li><a href="${PC}/blog/how-to-import-a-pigeon-pedigree-from-a-photo">How to import a pigeon pedigree from a photo or PDF</a></li>
    <li><a href="${PC}/blog/how-to-make-and-print-a-pigeon-pedigree">How to make and print a pigeon pedigree</a></li>
  </ul>
  <p><a class="btn" href="${PC}/">Try Pigeclub</a></p>
</article>`);

// ---------- about ----------
page("/en/about.html", "", "About mghodowla.pl",
  "mghodowla.pl is run by Giewont Global sp. z o.o., maker of Pigeclub (Hodowla 3000). Guides for racing pigeon breeders, contact and company details.", "website",
  { "@context": "https://schema.org", "@type": "AboutPage", name: "About mghodowla.pl", url: SITE + "/en/about.html", inLanguage: "en", about: { "@id": SITE + "/#org" } },
  `<article class="post">
  <h1>About</h1>
  <p>mghodowla.pl is run by the makers of Pigeclub, known in Poland as <span lang="pl">Hodowla 3000</span>. The software exists so that breeders no longer retype pedigrees in the evenings.</p>
  <h2>Contact</h2>
  <p>Write to us: <a href="mailto:wggiewont@gmail.com">wggiewont@gmail.com</a>. More about the software at <a href="${PC}/">pigeclub.com</a>.</p>
  <h2>Company details</h2>
  <address style="font-style:normal"><p>Giewont Global sp. z o.o.<br>ul. Podhalańska 60C, 34-404 Pyzówka, Poland<br>KRS 0001196061, NIP (tax ID) 7352935756, REGON 542798679</p></address>
</article>`);

module.exports = { PAIRS, posts, SITE };
console.log("EN: " + (posts.length + 4) + " stron");
