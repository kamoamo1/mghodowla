// Rozbudowa kluczowych artykułów: dodatkowe sekcje i pytania (FAQ).
// html trafia przed blok „Na stronie programu”, faq także do danych strukturalnych.
module.exports = Object.assign(require("./extra2"), {
  "program-do-rodowodow-golebi-ranking.html": {
    html: `
<h2>Ile czasu oszczędza import rodowodów</h2>
<p>Policz to na swoim gołębniku. Rodowód czteropokoleniowy to 15 gołębi: badany ptak, dwoje rodziców, czworo dziadków i ośmioro pradziadków. Przy każdym numer obrączki, kolor, płeć i często wyniki. Ręczne wpisanie takiej kartki zajmuje kilkanaście minut, a przy kilkudziesięciu ptakach to kilka wieczorów pracy, w której łatwo o pomyłkę w numerze.</p>
<p>Program, który rozpoznaje rodowód ze zdjęcia lub PDF, zamienia to w sprawdzanie: patrzysz, czy dane się zgadzają, i poprawiasz pojedyncze pola.</p>
<h2>Na co uważać przy zakupie</h2>
<ul>
<li><strong>Zamknięte dane.</strong> Sprawdź, czy możesz wydrukować i zachować swoje rodowody, gdybyś kiedyś zmienił program.</li>
<li><strong>Brak rozwoju.</strong> Program bez aktualizacji z czasem przestaje działać na nowych komputerach.</li>
<li><strong>Brak wsparcia.</strong> Zapytaj, kogo pytać, kiedy coś nie działa.</li>
</ul>
<h2>Jak przetestować program przed zakupem</h2>
<p>Weź trzy swoje prawdziwe rodowody: jeden wyraźny wydruk, jeden odręczny i jeden PDF od sprzedawcy. Wczytaj je i zobacz, ile pól musisz poprawić. Potem wydrukuj jeden z nich. Ten test w 15 minut powie ci więcej niż każda reklama.</p>`,
    faq: [
      ["Jaki jest najlepszy program do rodowodów gołębi?", "Taki, który oszczędza czas na wpisywaniu. Hodowla 3000 wczytuje rodowody ze zdjęć i PDF, prowadzi ewidencję, łączenia i wyniki lotowe oraz drukuje rodowody."],
      ["Czy program do rodowodów działa na telefonie?", "Zdjęcia rodowodów robisz telefonem, a hodowlę prowadzisz w programie na komputerze."],
    ],
  },
  "aplikacja-do-rodowodow-golebi.html": {
    html: `
<h2>Co program rozpoznaje na rodowodzie</h2>
<p>Numery obrączek z kodem kraju, oddziałem i rokiem, płeć i kolor upierzenia, a także układ pokoleń: kto jest ojcem, kto matką, kto dziadkiem. Dzięki temu rodowód trafia do bazy jako drzewo, a nie jako luźny tekst.</p>
<h2>Kiedy trzeba poprawić dane</h2>
<p>Najwięcej poprawek wymagają odręczne rodowody, mocno wyblakłe kopie i zdjęcia robione pod kątem. Dlatego po wczytaniu zawsze porównaj numery obrączek z oryginałem. To kilka sekund na rodowód, a jedna pomyłka w numerze kosztuje dużo więcej przy sprzedaży.</p>
<h2>Kolejność pracy krok po kroku</h2>
<ol>
<li>Rozłóż rodowód płasko w dobrym świetle.</li>
<li>Zrób zdjęcie z góry, całej kartki.</li>
<li>Wczytaj zdjęcie do Hodowli 3000.</li>
<li>Sprawdź numery obrączek i popraw pojedyncze pola.</li>
<li>Zapisz gołębia. Jego przodkowie trafią do bazy razem z nim.</li>
</ol>`,
    faq: [
      ["Czy można wczytać rodowód gołębia ze zdjęcia?", "Tak. Hodowla 3000 rozpoznaje numery obrączek i przodków ze zdjęcia rodowodu zrobionego telefonem. Wynik warto sprawdzić z oryginałem."],
      ["Czy program wczyta rodowód z pliku PDF?", "Tak, rodowody w PDF wczytujesz bezpośrednio z pliku, bez drukowania i fotografowania."],
    ],
  },
  "hodowla-2000-alternatywa.html": {
    html: `
<h2>Przesiadka krok po kroku</h2>
<ol>
<li>Wydrukuj z Hodowli 2000 rodowody gołębi, które chcesz zachować, albo wyszukaj ich papierowe kopie.</li>
<li>Zrób zdjęcia rodowodów albo zachowaj je jako PDF.</li>
<li>Wczytaj je do Hodowli 3000 i sprawdź numery obrączek.</li>
<li>Uzupełnij statusy ptaków w ewidencji: w lotach, rozpłodowe, sprzedane.</li>
</ol>
<p>Szczegółową instrukcję przeniesienia gołębi przygotowali też twórcy programu, link znajdziesz poniżej.</p>
<h2>Czego nie tracisz</h2>
<p>Pochodzenie gołębi zostaje takie samo: przenosisz rodowody, a nie tworzysz ich od nowa. Zyskujesz za to wczytywanie kolejnych rodowodów ze zdjęć i program, który działa na dzisiejszych komputerach.</p>`,
    faq: [
      ["Czy da się przenieść gołębie z Hodowli 2000 do Hodowli 3000?", "Tak. Rodowody z Hodowli 2000 drukujesz lub fotografujesz i wczytujesz do Hodowli 3000 bez ręcznego przepisywania."],
      ["Czym Hodowla 3000 różni się od Hodowli 2000?", "To nowy program, który wczytuje rodowody ze zdjęć i PDF, prowadzi ewidencję, łączenia i wyniki lotowe oraz działa na nowoczesnych komputerach."],
    ],
  },
  "rodowod-golebia-wzor.html": {
    html: `
<h2>Najczęstsze błędy w rodowodach</h2>
<ul>
<li><strong>Pomylone cyfry w numerze obrączki.</strong> Zawsze porównuj z obrączką ptaka.</li>
<li><strong>Brak roku w numerze.</strong> Bez niego nie wiadomo, ile lat ma przodek.</li>
<li><strong>Zamienieni rodzice.</strong> Ojciec zawsze u góry, matka u dołu.</li>
<li><strong>Wyniki bez skali konkursu.</strong> „1. miejsce” znaczy co innego na 50 i na 5000 gołębi.</li>
</ul>
<h2>Ile pokoleń wpisać</h2>
<p>Standardem jest rodowód czteropokoleniowy. Przy gołębiach rozpłodowych z wartościowych linii hodowcy dodają piąte pokolenie, ale wtedy kartka robi się gęsta, więc druk z programu, który sam układa pola, bardzo pomaga.</p>`,
    faq: [
      ["Co musi zawierać rodowód gołębia?", "Numer obrączki, płeć i kolor gołębia, dane hodowcy oraz rodziców, dziadków i pradziadków z numerami obrączek i najważniejszymi wynikami lotów."],
      ["Ile pokoleń ma rodowód gołębia?", "Najczęściej cztery: gołąb, rodzice, dziadkowie i pradziadkowie."],
    ],
  },
  "mg-hodowla-czy-hodowla-3000.html": {
    html: `
<h2>Porównanie w skrócie</h2>
<div class="table-scroll"><table class="cmp">
<caption>MG Hodowla i Hodowla 3000: najważniejsze cechy</caption>
<thead><tr><th scope="col">Cecha</th><th scope="col">MG Hodowla</th><th scope="col">Hodowla 3000</th></tr></thead>
<tbody>
<tr><th scope="row">Ewidencja, rodowody, łączenia, wyniki</th><td>Tak</td><td class="yes">Tak</td></tr>
<tr><th scope="row">Rodowód ze zdjęcia i z PDF</th><td>Brak w opisie programu</td><td class="yes">Tak</td></tr>
<tr><th scope="row">Gdzie działa</th><td>W przeglądarce, przez portal Moje Gołębie</td><td>Program dla hodowców gołębi</td></tr>
<tr><th scope="row">Wersja próbna</th><td>30 dni za darmo</td><td>Zobacz na hodowla3000.pl</td></tr>
</tbody></table></div>
<h2>Dla kogo który program</h2>
<p>MG Hodowla pasuje hodowcom, którzy i tak korzystają z portalu Moje Gołębie i zaczynają ewidencję od zera. Hodowla 3000 pasuje tym, którzy mają już dużo papierowych rodowodów i chcą przenieść je do programu bez przepisywania.</p>`,
    faq: [
      ["Co jest lepsze: MG Hodowla czy Hodowla 3000?", "Jeśli masz dużo papierowych rodowodów, Hodowla 3000 wczyta je ze zdjęć i PDF. MG Hodowla działa w portalu Moje Gołębie i ma 30 dni wersji próbnej."],
    ],
  },
});
