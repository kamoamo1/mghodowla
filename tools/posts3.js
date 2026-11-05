// Duże przewodniki (pillar pages) pod trudniejsze frazy.
const D = "2026-11-05";
const TREE = `<figure><svg viewBox="0 0 640 300" role="img" aria-labelledby="drzewo-t" style="width:100%;height:auto;max-width:640px">
<title id="drzewo-t">Układ rodowodu: gołąb, rodzice, dziadkowie i pradziadkowie</title>
<g fill="none" stroke="currentColor" stroke-width="1.5" opacity=".55"><path d="M120 150H150V75H170M150 150V225H170M290 75H310V40H330M310 75V110H330M290 225H310V190H330M310 225V260H330M450 40H470V25H490M470 40V55H490M450 110H470V95H490M470 110V125H490M450 190H470V175H490M470 190V205H490M450 260H470V245H490M470 260V275H490"/></g>
<g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="125" width="116" height="50" rx="6"/><rect x="170" y="55" width="120" height="40" rx="6"/><rect x="170" y="205" width="120" height="40" rx="6"/>
<rect x="330" y="25" width="120" height="30" rx="5"/><rect x="330" y="95" width="120" height="30" rx="5"/><rect x="330" y="175" width="120" height="30" rx="5"/><rect x="330" y="245" width="120" height="30" rx="5"/></g>
<g font-size="13" fill="currentColor"><text x="14" y="147">Gołąb</text><text x="14" y="165" font-size="11">PL-0123-24-512</text><text x="180" y="80">Ojciec (u góry)</text><text x="180" y="230">Matka (u dołu)</text>
<text x="338" y="45" font-size="11">Dziadek</text><text x="338" y="115" font-size="11">Babka</text><text x="338" y="195" font-size="11">Dziadek</text><text x="338" y="265" font-size="11">Babka</text>
<text x="494" y="150" font-size="11">8 pradziadków</text></g></svg>
<figcaption>Rodowód czteropokoleniowy: 15 gołębi, 15 numerów obrączek do wpisania.</figcaption></figure>`;

module.exports = [
  { slug: "program-do-rodowodow-golebi-przewodnik.html", title: "Program do rodowodów gołębi: pełny przewodnik 2026", desc: "Pełny przewodnik po programach do rodowodów gołębi: funkcje, przenoszenie danych, rodowody ze zdjęć, MWG, telefon i komputer. Jak wybrać i wdrożyć.", date: D, body: `
<h1>Program do rodowodów gołębi: pełny przewodnik</h1>
<p>Ten przewodnik jest dla hodowcy, który ma gołębie zapisane w zeszycie, w segregatorze z rodowodami albo w starym programie i zastanawia się, czy i jak przejść na nowoczesny program. Opisujemy, co program powinien robić, jak go wybrać, jak przenieść dane i jak pracować z nim przez cały sezon.</p>
<nav aria-label="Spis treści" class="box"><p><strong>Spis treści</strong></p><ol>
<li><a href="#po-co">Po co program do rodowodów</a></li><li><a href="#funkcje">Funkcje, które naprawdę oszczędzają czas</a></li><li><a href="#gdzie">Telefon, przeglądarka czy komputer</a></li>
<li><a href="#wybor">Jak wybrać program: test 15 minut</a></li><li><a href="#przeniesienie">Przeniesienie danych ze starego programu</a></li><li><a href="#sezon">Praca z programem przez cały rok</a></li><li><a href="#mwg">Program a MWG</a></li><li><a href="#bledy">Najczęstsze błędy</a></li></ol></nav>

<h2 id="po-co">Po co program do rodowodów</h2>
<p>Rodowód to nie jest jedna kartka, tylko fragment większego drzewa. Gołąb z twojego gołębnika ma rodziców, którzy mają własne rodowody, rodzeństwo, potomstwo i wyniki. Na papierze każda z tych informacji leży osobno. W programie są połączone: otwierasz ojca i widzisz jego wyniki, jego inne młode i ich wyniki.</p>
${TREE}
<p>Policz pracę. Rodowód czteropokoleniowy to 15 gołębi, czyli 15 numerów obrączek, do tego kolory, płcie i wyniki. Przy 50 ptakach to kilkaset numerów do przepisania, a każda pomyłka w cyfrze psuje rodowód kolejnych pokoleń. Dlatego najważniejsze pytanie przy wyborze programu brzmi: ile z tego muszę wpisać ręcznie?</p>

<h2 id="funkcje">Funkcje, które naprawdę oszczędzają czas</h2>
<h3>Rodowód ze zdjęcia</h3>
<p>Robisz telefonem zdjęcie papierowego rodowodu, a program rozpoznaje numery obrączek, przodków i opisy. Ty sprawdzasz wynik i poprawiasz pojedyncze pola. To zmienia godziny przepisywania w minuty sprawdzania. <a href="aplikacja-do-rodowodow-golebi.html">Jak zrobić dobre zdjęcie rodowodu</a>.</p>
<h3>Import z PDF</h3>
<p>Rodowody od sprzedawców i z aukcji przychodzą jako PDF. Dobry program wczytuje je bezpośrednio z pliku. <a href="rodowod-golebia-pdf.html">Rodowód w PDF krok po kroku</a>.</p>
<h3>Ewidencja</h3>
<p>Lista wszystkich ptaków z numerem obrączki, płcią, barwą, nazwą i statusem. Wyszukiwanie po numerze obrączki to podstawa. <a href="ewidencja-golebi-pocztowych.html">Jak prowadzić ewidencję</a>.</p>
<h3>Łączenia</h3>
<p>Zapis par i młodych z każdej pary. Rodowód młodego powstaje z danych rodziców, a wspólnych przodków pary widać przed łączeniem. <a href="chow-wsobny-golebi.html">Jak sprawdzić pokrewieństwo</a>.</p>
<h3>Wyniki lotowe</h3>
<p>Konkursy, odległości, miejsca i prędkości przypisane do ptaka, widoczne w rodowodzie. <a href="wyniki-lotow-golebi.html">Jak zapisywać wyniki</a>.</p>
<h3>Druk rodowodów</h3>
<p>Czytelny wydruk na sprzedaż lub wystawę, bez przepisywania. <a href="jak-wydrukowac-rodowod-golebia.html">Co powinien zawierać wydruk</a>.</p>

<h2 id="gdzie">Telefon, przeglądarka czy komputer</h2>
<p>Hodowla 3000 działa na telefonie, w przeglądarce i na komputerze z Windows. W praktyce wygląda to tak: telefonem robisz zdjęcia rodowodów w gołębniku albo u sprzedawcy i sprawdzasz ptaka po numerze obrączki, a planowanie łączeń i druk wygodniej robić na większym ekranie. <a href="program-do-golebi-online.html">Online czy na komputer: porównanie</a>.</p>

<h2 id="wybor">Jak wybrać program: test 15 minut</h2>
<p>Nie wybieraj programu po reklamie ani po liście funkcji. Zrób test na własnych danych:</p>
<ol>
<li>Weź trzy prawdziwe rodowody: wyraźny wydruk, odręczny i PDF od sprzedawcy.</li>
<li>Wczytaj je do programu i policz, ile pól musisz poprawić.</li>
<li>Wyszukaj jednego z przodków po numerze obrączki.</li>
<li>Wydrukuj jeden rodowód.</li>
<li>Sprawdź, czy da się przenieść twoje obecne gołębie ze starego programu.</li>
</ol>
<p>Do tego trzy pytania, których nie widać w teście: czy program jest rozwijany, czy masz kogo zapytać o pomoc i czy możesz wydrukować i zachować swoje dane. <a href="program-do-rodowodow-golebi-ranking.html">Porównanie programów</a> i <a href="darmowy-program-do-golebi.html">ile naprawdę kosztuje darmowy program</a>.</p>

<h2 id="przeniesienie">Przeniesienie danych ze starego programu</h2>
<p>Hodowla 3000 przenosi gołębie z programów Hodowla 2000 i Moja Ewidencja Gołębi. Twórcy programu opisali obie przeprowadzki w osobnych instrukcjach:</p>
<ul>
<li><a href="https://hodowla3000.pl/blog/przejscie-z-programu-hodowla-2000">Jak przenieść gołębie z programu Hodowla 2000</a></li>
<li><a href="https://hodowla3000.pl/blog/przejscie-z-programu-moja-ewidencja-golebi">Jak przenieść gołębie z programu Moja Ewidencja Gołębi</a></li>
</ul>
<p>Jeśli masz rodowody tylko na papierze, zacznij od ptaków rozpłodowych i ich przodków. To one tworzą rodowody kolejnych roczników. Ptaki sprzedane i stracone możesz dodać później. Więcej: <a href="hodowla-2000-alternatywa.html">przesiadka z Hodowli 2000</a>, <a href="moja-ewidencja-golebi-alternatywa.html">przesiadka z Mojej Ewidencji Gołębi</a>.</p>

<h2 id="sezon">Praca z programem przez cały rok</h2>
<div class="table-scroll"><table class="cmp"><caption>Kalendarz pracy z programem</caption>
<thead><tr><th scope="col">Okres</th><th scope="col">Co robisz w programie</th></tr></thead><tbody>
<tr><th scope="row">Zima</th><td>Plan łączeń, sprawdzenie pokrewieństwa par, uzupełnienie rodowodów nowych ptaków</td></tr>
<tr><th scope="row">Lęgi</th><td>Zapis młodych z numerem obrączki i rodzicami w dniu obrączkowania</td></tr>
<tr><th scope="row">Przed sezonem</th><td>Statusy ptaków, lista ptaków do lotów</td></tr>
<tr><th scope="row">Sezon</th><td>Wyniki po każdym locie</td></tr>
<tr><th scope="row">Jesień</th><td>Ocena par po wynikach młodych, sprzedaż z wydrukiem rodowodu</td></tr>
</tbody></table></div>
<p>Szczegóły: <a href="obraczkowanie-mlodych-golebi.html">obrączkowanie młodych</a>, <a href="przygotowanie-do-sezonu-lotowego.html">przygotowanie do sezonu</a>, <a href="laczenie-golebi-w-pary.html">łączenie w pary</a>, <a href="jak-sprzedac-golebia-pocztowego.html">sprzedaż gołębia</a>.</p>

<h2 id="mwg">Program a MWG</h2>
<p>W Międzynarodowym Wspólnym Gołębniku (OLR) o wyniku decyduje pochodzenie, bo wszystkie ptaki mają te same warunki. Hodowla 3000 znajduje wyniki hodowcy z MWG po imieniu i nazwisku, więc nie przepisujesz list wyników ręcznie. Wynik młodego to cenna informacja o parze rodzicielskiej. <a href="rodowody-dla-uczestnikow-mwg.html">Rodowody dla uczestników MWG</a> i <a href="benzing-olr-mwg.html">Benzing, OLR i MWG</a>.</p>

<h2 id="bledy">Najczęstsze błędy</h2>
<ul>
<li><strong>Wpisywanie wszystkiego naraz.</strong> Zacznij od ptaków rozpłodowych, resztę dodawaj stopniowo.</li>
<li><strong>Brak sprawdzenia numerów po imporcie.</strong> Kilka sekund na rodowód oszczędza problemów przy sprzedaży.</li>
<li><strong>Różne nazwy tego samego koloru.</strong> Ustal jeden słownik. <a href="kolory-golebi-pocztowych.html">Kolory gołębi i ich zapis</a>.</li>
<li><strong>Wyniki dopisywane po sezonie.</strong> Po miesiącu nie pamiętasz szczegółów. Dopisuj od razu.</li>
</ul>
{CTA}`,
    faq: [
      ["Jaki program do rodowodów gołębi wybrać?", "Taki, który wczytuje rodowody ze zdjęć i PDF, prowadzi ewidencję, łączenia i wyniki, drukuje rodowody i przenosi dane ze starego programu. Sprawdź go na trzech własnych rodowodach."],
      ["Czy Hodowla 3000 działa na telefonie?", "Tak. Hodowla 3000 działa na telefonie, w przeglądarce i na komputerze z Windows."],
      ["Czy można przenieść gołębie z Hodowli 2000 i Mojej Ewidencji Gołębi?", "Tak. Hodowla 3000 przenosi gołębie z obu programów, a jej twórcy opisali przeprowadzkę w instrukcjach na hodowla3000.pl."],
      ["Czy program sam znajdzie moje wyniki z MWG?", "Tak. Hodowla 3000 znajduje wyniki z MWG po imieniu i nazwisku hodowcy."],
    ] },

  { slug: "rodowod-golebia-przewodnik.html", title: "Rodowód gołębia od A do Z: kompletny przewodnik", desc: "Wszystko o rodowodzie gołębia pocztowego: budowa, numery obrączek, wyniki, ocena przy zakupie, błędy, druk, PDF i prowadzenie rodowodów w programie.", date: D, body: `
<h1>Rodowód gołębia od A do Z</h1>
<p>Rodowód decyduje o wartości gołębia przy zakupie, sprzedaży i planowaniu łączeń. Ten przewodnik zbiera w jednym miejscu wszystko, co hodowca powinien wiedzieć: jak rodowód jest zbudowany, jak go czytać i oceniać, jak go przygotować i jak go przechowywać.</p>
<nav aria-label="Spis treści" class="box"><p><strong>Spis treści</strong></p><ol>
<li><a href="#budowa">Budowa rodowodu</a></li><li><a href="#obraczka">Numer obrączki</a></li><li><a href="#wyniki">Wyniki w rodowodzie</a></li><li><a href="#ocena">Ocena rodowodu przy zakupie</a></li>
<li><a href="#przygotowanie">Przygotowanie własnego rodowodu</a></li><li><a href="#formaty">Papier, zdjęcie, PDF</a></li><li><a href="#program">Rodowody w programie</a></li></ol></nav>

<h2 id="budowa">Budowa rodowodu</h2>
${TREE}
<p>Standardowy rodowód ma cztery pokolenia. Gołąb jest po lewej stronie. Na prawo od niego ojciec u góry i matka u dołu, dalej czworo dziadków i ośmioro pradziadków. Kolejność jest stała w całej Europie: ojciec zawsze nad matką. Dzięki temu rodowód z Belgii czy Holandii czytasz tak samo jak polski.</p>
<p>Przy każdym ptaku są numer obrączki, zwykle barwa i płeć, czasem nazwa, a przy wartościowych przodkach najważniejsze wyniki. Na dole lub w nagłówku są dane hodowcy. <a href="jak-czytac-rodowod-golebia.html">Jak czytać rodowód krok po kroku</a>.</p>

<h2 id="obraczka">Numer obrączki</h2>
<p>Numer obrączki to klucz rodowodu. Typowy polski numer, np. PL-0123-24-512, zawiera kod kraju, numer oddziału, rok urodzenia i numer kolejny. Ten sam numer musi się zgadzać na obrączce, w rodowodzie, w ewidencji i na listach konkursowych. <a href="numer-obraczki-golebia.html">Co oznacza każda część numeru</a>.</p>

<h2 id="wyniki">Wyniki w rodowodzie</h2>
<p>Wyniki pokazują, czy linia lata. Dobry zapis wyniku ma nazwę lub miejsce konkursu, odległość, miejsce ptaka i liczbę ptaków w konkursie. Sam zapis „1. miejsce” nic nie mówi bez skali: pierwsze miejsce na 50 ptaków i na 5000 ptaków to zupełnie inne osiągnięcia.</p>
<p>Patrz na powtarzalność. Jeden świetny wynik może być szczęściem. Dobre wyniki kilku przodków po tej samej linii to już informacja hodowlana.</p>

<h2 id="ocena">Ocena rodowodu przy zakupie</h2>
<ol>
<li><strong>Porównaj numer obrączki</strong> z obrączką ptaka.</li>
<li><strong>Sprawdź kompletność:</strong> brakujący przodkowie obniżają wartość informacji.</li>
<li><strong>Oceń wyniki ze skalą konkursów</strong>, nie same miejsca.</li>
<li><strong>Szukaj powtarzalności</strong> w linii ojca i matki.</li>
<li><strong>Sprawdź pokrewieństwo</strong>, jeśli kupujesz ptaka do łączenia z własnym. <a href="chow-wsobny-golebi.html">Chów wsobny: jak go wykryć</a>.</li>
<li><strong>Upewnij się, kto jest hodowcą</strong> i jak się z nim skontaktować.</li>
</ol>

<h2 id="przygotowanie">Przygotowanie własnego rodowodu</h2>
<p>Rodowód, który przygotowujesz na sprzedaż, jest wizytówką hodowli. Zadbaj o kompletne cztery pokolenia, poprawne numery, jednolite nazwy kolorów i wyniki ze skalą. <a href="rodowod-golebia-wzor.html">Wzór rodowodu i najczęstsze błędy</a>, <a href="kolory-golebi-pocztowych.html">jak zapisywać kolory</a>.</p>

<h2 id="formaty">Papier, zdjęcie, PDF</h2>
<div class="table-scroll"><table class="cmp"><caption>Formy rodowodu i ich zastosowanie</caption>
<thead><tr><th scope="col">Forma</th><th scope="col">Kiedy</th><th scope="col">Uwagi</th></tr></thead><tbody>
<tr><th scope="row">Wydruk</th><td>Sprzedaż, wystawa, dokumenty dla kupca</td><td>A4, przy sprzedaży grubszy papier</td></tr>
<tr><th scope="row">Zdjęcie</th><td>Szybkie przekazanie, wczytanie do programu</td><td>Płasko, w dobrym świetle, z góry</td></tr>
<tr><th scope="row">PDF</th><td>Wysyłka mailem, aukcje, rodowody z zagranicy</td><td>Najczytelniejszy do wczytania</td></tr>
</tbody></table></div>
<p>Więcej: <a href="jak-wydrukowac-rodowod-golebia.html">druk rodowodu</a>, <a href="aplikacja-do-rodowodow-golebi.html">rodowód ze zdjęcia</a>, <a href="rodowod-golebia-pdf.html">rodowód w PDF</a>.</p>

<h2 id="program">Rodowody w programie</h2>
<p>Segregator z rodowodami nie odpowie na pytanie, które młode ma tego samego dziadka co samica, z którą chcesz je połączyć. Program odpowie od razu, bo wszystkie rodowody są w nim połączone w jedno drzewo. Hodowla 3000 wczytuje rodowody ze zdjęć i PDF, więc nie musisz ich przepisywać. <a href="program-do-rodowodow-golebi-przewodnik.html">Pełny przewodnik po programach do rodowodów</a>.</p>
{CTA}`,
    faq: [
      ["Jak zbudowany jest rodowód gołębia?", "Ma zwykle cztery pokolenia: gołębia, rodziców (ojciec u góry, matka u dołu), czworo dziadków i ośmioro pradziadków, z numerami obrączek i wynikami."],
      ["Jak ocenić rodowód gołębia przy zakupie?", "Porównaj numer obrączki z ptakiem, sprawdź kompletność, oceniaj wyniki ze skalą konkursów i szukaj powtarzalności w linii."],
      ["W jakiej formie przechowywać rodowody gołębi?", "Najlepiej w programie, gdzie są połączone w drzewo. Wydruki służą do sprzedaży, a PDF do wysyłki."],
    ] },
];
