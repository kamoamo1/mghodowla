// More English articles, paired with the new Polish ones.
module.exports = [
  { slug: "pigeon-ring-number.html", pl: "numer-obraczki-golebia.html", title: "Pigeon ring number: what each part means", desc: "How to read a racing pigeon ring number: country code, club, year and serial number, and how to avoid typing mistakes.",
    pcLink: ["/blog/how-to-import-a-pigeon-pedigree-from-a-photo", "How to import a pigeon pedigree from a photo or PDF"], body: `
<p>The ring is a pigeon's ID. Its number goes into the pedigree, your records, race lists and sale adverts, so it must be identical everywhere.</p>
<h2>How the number is built</h2>
<p>A typical number looks like PL-0123-24-512: country code, club or region number, year of birth (24 means 2024) and the bird's serial number. Other countries use other codes, such as NL, BE or GB, and the layout of the remaining parts can differ, so always copy the number exactly from the ring.</p>
<h2>Common mistakes</h2>
<ul><li>1 and 7, or 6 and 8, confused in handwriting,</li><li>leading zeros dropped from the club number,</li><li>the wrong year around the turn of a season,</li><li>a missing country code on imported birds.</li></ul>
<h2>How to avoid them</h2>
<p>Enter the number once and reuse it everywhere. In pedigree software the ring number is the key: you search by it, and the pedigree, results and pairings hang off it. When you import a pedigree from a photo, check the recognised numbers against the original.</p>`,
    faq: [["What does the year on a pigeon ring mean?", "The pigeon's year of birth, written as two digits, for example 24 for 2024."]] },
  { slug: "pigeon-inbreeding.html", pl: "chow-wsobny-golebi.html", title: "Pigeon inbreeding: how to check relatedness", desc: "Inbreeding in racing pigeons: what it is, how to check a pair's relatedness in their pedigrees and how to plan pairings deliberately.",
    pcLink: null, body: `
<p>Inbreeding means pairing related birds. Breeders use it deliberately to fix a line's traits, but very close pairings more often produce weaker youngsters.</p>
<h2>Close and distant relatedness</h2>
<ul><li><strong>Very close:</strong> parent and offspring, full siblings.</li><li><strong>Close:</strong> half-siblings, uncle and niece.</li><li><strong>Distant:</strong> a shared ancestor in the third or fourth generation.</li></ul>
<h2>How to check it in pedigrees</h2>
<p>Put the cock's and the hen's pedigrees side by side and look for the same ring numbers. Every shared number is a shared ancestor. The closer to the pair it appears, the closer the relationship. On paper, four generations means comparing 30 ring numbers; in software with linked pedigrees, shared ancestors show at once.</p>
<h2>Deliberate pairings</h2>
<p>Record which pairs were related and how their youngsters flew. After a few seasons your own data shows which pairings pay off.</p>`,
    faq: [["How do I know if two pigeons are related?", "Compare their pedigrees and look for identical ring numbers. Each shared number is a shared ancestor."]] },
  { slug: "pigeon-pedigree-pdf.html", pl: "rodowod-golebia-pdf.html", title: "Pigeon pedigree PDF: import it and send it", desc: "Pigeon pedigrees as PDF files: how to import one into your software without retyping and how to send your own pedigree to a buyer.",
    pcLink: ["/blog/how-to-import-a-pigeon-pedigree-from-a-photo", "How to import a pigeon pedigree from a photo or PDF"], body: `
<p>More and more pedigrees travel as PDF files: from sellers, online auctions and breeders abroad. That is good news, because a PDF is clearer than a photo of a sheet of paper.</p>
<h2>Importing a PDF</h2>
<p>In Pigeclub you import a pedigree straight from a PDF file. The software recognises ring numbers and ancestors; you check the result and save the bird.</p>
<h2>Pedigrees from abroad</h2>
<p>Foreign pedigrees use other country codes and often describe colours in other languages. After import, pay extra attention to ring numbers and colours.</p>
<h2>Sending your own pedigree</h2>
<p>A buyer wants to see a bird's ancestry before deciding. A pedigree from your software can be saved and sent at once, without scanning a paper copy.</p>`,
    faq: [["Can I import a pigeon pedigree from a PDF?", "Yes. Pigeclub imports PDF pedigrees directly and recognises ring numbers and ancestors."]] },
  { slug: "racing-season-preparation.html", pl: "przygotowanie-do-sezonu-lotowego.html", title: "Racing season preparation: your records", desc: "A checklist for your pigeon records and pedigrees before the racing season starts.",
    pcLink: null, body: `
<p>Preparing for the season is not only about the loft. Orderly records before the first race save a lot of stress later.</p>
<h2>Before the season</h2>
<ol><li>Check that every bird in the loft is in your records with the correct ring number.</li><li>Mark statuses: racing, breeding, sold, lost.</li><li>Fill in missing pedigrees by importing them from photos or PDFs.</li><li>Prepare the list of birds you plan to race.</li></ol>
<h2>During the season</h2>
<p>Add results right after each race: race name, distance, position and number of birds. After the season you have everything you need to assess birds and plan pairings.</p>
<h2>After the season</h2>
<p>Compare the results of youngsters from the same pairs. That is the best basis for deciding which pairings to repeat.</p>`,
    faq: [["What should I check in my pigeon records before the season?", "Ring numbers of all birds, their statuses, missing pedigrees and the list of birds you plan to race."]] },
];
