import os, json
OUT = r"C:\Users\kamoa\Desktop\projekty\seo-redirector\blog"
os.makedirs(OUT, exist_ok=True)
FONTS = '<link rel="preload" href="/fonts/BricolageGrotesque-latin-1.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/SourceSerif4-latin-3.woff2" as="font" type="font/woff2" crossorigin>'

def page(slug, title, desc, body, ld=None, current_blog=True):
    url = f"https://mghodowla.pl/blog/{slug}"
    ldtag = f'<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>' if ld else ""
    return f'''<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article"><meta property="og:title" content="{title}"><meta property="og:url" content="{url}">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
{FONTS}
<link rel="stylesheet" href="../styles.css">
{ldtag}
</head>
<body>
<header class="site"><div class="wrap">
  <a class="brand" href="/"><img src="../favicon.svg" width="28" height="28" alt="">mghodowla</a>
  <nav aria-label="Główna"><a href="/">Start</a><a href="../porownanie.html">Hodowla 2000 vs 3000</a><a href="./" aria-current="page">Poradnik</a><a href="/#faq">Pytania</a></nav>
</div></header>
<main>
{body}
</main>
<footer><div class="wrap"><p>Poradnik mghodowla.pl dla hodowców gołębi. Program do rodowodów: <a href="https://hodowla3000.pl/">Hodowla 3000</a>.</p></div></footer>
</body>
</html>
'''

CTA = '<div class="box"><p><strong>Nie przepisuj rodowodów ręcznie.</strong> Hodowla 3000 wczyta je ze zdjęcia albo PDF. <a href="https://hodowla3000.pl/">Sprawdź program</a>.</p></div>'

posts = [
 ("jak-czytac-rodowod-golebia.html", "Jak czytać rodowód gołębia pocztowego – poradnik", "Jak czytać rodowód gołębia pocztowego: numer obrączki, kolor, płeć, przodkowie i wyniki lotów. Praktyczny poradnik dla hodowców.", "2026-11-05", f'''
<h1>Jak czytać rodowód gołębia pocztowego</h1>
<p>Rodowód to metryka gołębia. Mówi, skąd ptak pochodzi, kim byli jego przodkowie i co osiągnęli. Dobrze przeczytany rodowód oszczędza pieniądze przy zakupie i pomaga planować łączenia.</p>
<h2>Numer obrączki</h2>
<p>Każdy gołąb ma obrączkę rodową z kodem kraju, numerem oddziału, rokiem urodzenia i numerem kolejnym, na przykład PL-0123-24-512. Rok w numerze od razu mówi, ile ptak ma lat.</p>
<h2>Kolor i płeć</h2>
<p>Przy numerze zwykle stoi kolor upierzenia (niebieski, nakrapiany, czerwony) i płeć. To proste dane, ale przy przepisywaniu najłatwiej o pomyłkę.</p>
<h2>Przodkowie</h2>
<p>Rodowód układa się w drzewo: po lewej gołąb, dalej ojciec i matka, potem dziadkowie i pradziadkowie. Najczęściej spotkasz rodowody czteropokoleniowe.</p>
<h2>Wyniki lotów i uwagi</h2>
<p>Przy przodkach hodowcy wpisują konkursy, miejsca i odległości. Szukaj powtarzalności: jeden dobry lot to przypadek, kilka to linia.</p>
{CTA}
<h2>Jak przechowywać rodowody</h2>
<p>Papier ginie, blaknie i trudno go przeszukać. Najwygodniej trzymać rodowody w programie, który zapisze pochodzenie każdego gołębia i wydrukuje rodowód, kiedy go potrzebujesz.</p>
'''),
 ("program-do-rodowodow-golebi-ranking.html", "Program do rodowodów gołębi – jak wybrać i na co uważać", "Jak wybrać program do rodowodów gołębi? Sześć pytań, które warto zadać przed zakupem: import, druk, wiek programu i wsparcie.", "2026-11-05", f'''
<h1>Program do rodowodów gołębi – na co patrzeć przy wyborze</h1>
<p>Program do rodowodów kupujesz na lata. Zanim zapłacisz, zadaj sobie te pytania.</p>
<h2>1. Ile czasu zajmie wpisanie rodowodów?</h2>
<p>To najważniejsze pytanie. Jeśli program wymaga przepisywania każdej kartki, przy kilkudziesięciu gołębiach tracisz całe wieczory. Szukaj importu ze zdjęć i z PDF.</p>
<h2>2. Czy wydrukuje porządny rodowód?</h2>
<p>Przy sprzedaży gołębia kupujący oczekuje czytelnego rodowodu. Sprawdź, jak wygląda wydruk.</p>
<h2>3. Kiedy program powstał?</h2>
<p>Oprogramowanie z początku wieku często źle działa na nowych komputerach i nie rozwija się. Nowy program oznacza nowe funkcje i wsparcie.</p>
<h2>4. Czy pasuje do MWG?</h2>
<p>Jeśli bierzesz udział w MWG, wybierz program przygotowany z myślą o tych hodowcach.</p>
<h2>5. Czy dane są w jednym miejscu?</h2>
<p>Pochodzenie, rodowody i notatki powinny być w jednej bazie, którą łatwo przeszukać.</p>
<h2>6. Czy łatwo się przesiąść?</h2>
<p>Dobry program pozwala wczytać stare rodowody bez ręcznej pracy.</p>
{CTA}
<p>Porównanie z popularnym starszym programem znajdziesz na stronie <a href="../porownanie.html">Hodowla 2000 czy Hodowla 3000</a>.</p>
'''),
 ("rodowody-dla-uczestnikow-mwg.html", "Rodowody gołębi a MWG (OLR) – jak się przygotować", "MWG, czyli Międzynarodowy Wspólny Gołębnik (One Loft Race): jak przygotować rodowody gołębi wysyłanych do wspólnego gołębnika i jak wykorzystać wyniki.", "2026-11-05", f'''
<h1>Rodowody a MWG (OLR): jak się przygotować</h1>
<p>MWG, czyli Międzynarodowy Wspólny Gołębnik (po angielsku <span lang="en">One Loft Race</span>, OLR), to zawody, w których młode gołębie od wielu hodowców są wychowywane i trenowane w jednym gołębniku, a potem startują w tych samych lotach. Wszystkie ptaki mają te same warunki, więc o wyniku decyduje pochodzenie. Dlatego w MWG rodowód ma szczególne znaczenie.</p>
<h2>Dlaczego rodowód jest tu tak ważny</h2>
<p>Dobry wynik gołębia w MWG to dowód na wartość jego linii. Hodowca, który ma porządnie zapisane pochodzenie, może z tego wyniku skorzystać: przy kolejnych łączeniach i przy sprzedaży rodzeństwa czy potomstwa.</p>
<h2>Zbierz rodowody przed wysyłką</h2>
<p>Zanim wyślesz młode do wspólnego gołębnika, miej zapisany rodowód każdego z nich: numer obrączki, rodziców i dziadków. Kartki, PDF-y z maili i zdjęcia w telefonie zgromadź w jednym miejscu.</p>
<h2>Przenieś je do programu</h2>
<p>Zamiast przepisywać, zrób zdjęcie albo wczytaj plik. Hodowla 3000 rozpozna dane i zapisze pochodzenie gołębia.</p>
<h2>Sprawdź numery obrączek</h2>
<p>Jedna pomyłka w numerze to problem przy sprzedaży. Porównaj wczytane dane z obrączką.</p>
<h2>Dopisz wyniki z MWG</h2>
<p>Po lotach wpisz wyniki swoich gołębi do programu. Trafią do rodowodu ptaka, a pośrednio podniosą wartość jego rodziców i rodzeństwa. Zobacz <a href="wyniki-lotow-golebi.html">jak zapisywać wyniki lotów</a>.</p>
<h2>Drukuj na żądanie</h2>
<p>Gdy ktoś pyta o pochodzenie gołębia z dobrym wynikiem w MWG, drukujesz rodowód w minutę, zamiast szukać kartki w segregatorze.</p>
{CTA}
'''),
 ("hodowla-2000-alternatywa.html", "Hodowla 2000 – alternatywa i następca: Hodowla 3000", "Szukasz alternatywy dla programu Hodowla 2000? Zobacz, czym jest Hodowla 3000 i jak przenieść rodowody gołębi bez przepisywania.", "2026-11-05", f'''
<h1>Alternatywa dla Hodowli 2000</h1>
<p>Hodowla 2000 przez lata była podstawowym programem wielu polskich hodowców gołębi. Nazwa zdradza jednak wiek. Jeśli szukasz następcy, który działa na dzisiejszych komputerach i oszczędza czas, sprawdź Hodowlę 3000.</p>
<h2>Co zyskujesz po przesiadce</h2>
<p>Najważniejsza różnica: Hodowla 3000 wczytuje rodowody ze zdjęć i plików PDF. Zamiast wpisywać każdego przodka, robisz zdjęcie i poprawiasz tylko to, co trzeba.</p>
<h2>Jak przenieść rodowody</h2>
<p>Wydrukuj albo sfotografuj rodowody, które masz w starym programie lub w segregatorze, i wczytaj je do Hodowli 3000. Pochodzenie każdego gołębia zostanie zapisane w bazie.</p>
<h2>Szczegółowe porównanie</h2>
<p>Funkcje obu programów zestawiliśmy w tabeli na stronie <a href="../porownanie.html">Hodowla 2000 czy Hodowla 3000</a>.</p>
{CTA}
'''),
 ("aplikacja-do-rodowodow-golebi.html", "Aplikacja do rodowodów gołębi – rodowód ze zdjęcia telefonem", "Aplikacja do rodowodów gołębi: jak zapisać rodowód ze zdjęcia zrobionego telefonem, zamiast przepisywać go ręcznie.", "2026-11-05", f'''
<h1>Aplikacja do rodowodów gołębi: rodowód ze zdjęcia</h1>
<p>Każdy hodowca ma telefon z aparatem. To wystarczy, żeby skończyć z ręcznym przepisywaniem rodowodów.</p>
<h2>Jak to działa</h2>
<p>Robisz zdjęcie papierowego rodowodu, a Hodowla 3000 rozpoznaje numery obrączek, przodków i opisy. Sprawdzasz wynik i zapisujesz gołębia w bazie.</p>
<h2>Jak zrobić dobre zdjęcie rodowodu</h2>
<p>Połóż kartkę płasko, w dobrym świetle, bez cienia telefonu. Kadruj całą kartkę i zrób zdjęcie z góry, nie pod kątem. Im wyraźniejszy tekst, tym mniej poprawek.</p>
<h2>A rodowody w PDF?</h2>
<p>Rodowody od sprzedawców często przychodzą jako PDF. Te wczytasz bezpośrednio z pliku, bez robienia zdjęć.</p>
{CTA}
'''),
 ("jak-wydrukowac-rodowod-golebia.html", "Jak wydrukować rodowód gołębia – szybko i czytelnie", "Jak wydrukować rodowód gołębia do sprzedaży lub na wystawę. Co powinien zawierać czytelny rodowód i jak go przygotować w programie.", "2026-11-05", f'''
<h1>Jak wydrukować rodowód gołębia</h1>
<p>Kupujący gołębia chce zobaczyć jego pochodzenie. Czytelny, wydrukowany rodowód buduje zaufanie i podnosi wartość ptaka.</p>
<h2>Co powinien zawierać rodowód</h2>
<p>Numer obrączki, kolor i płeć gołębia, dane hodowcy, a dalej rodziców, dziadków i pradziadków z ich numerami i najważniejszymi wynikami lotów.</p>
<h2>Druk z programu</h2>
<p>W Hodowli 3000 pochodzenie gołębia jest już zapisane, więc rodowód drukujesz w chwilę. Bez przepisywania i bez ryzyka pomyłki w numerze obrączki.</p>
<h2>Papier i format</h2>
<p>Najczęściej wystarczy format A4. Przy sprzedaży warto użyć grubszego papieru, bo rodowód trafi do segregatora kupującego na lata.</p>
{CTA}
<p>Zobacz też: <a href="jak-czytac-rodowod-golebia.html">jak czytać rodowód gołębia pocztowego</a>.</p>
'''),
 ("mg-hodowla-czy-hodowla-3000.html", "MG Hodowla czy Hodowla 3000? Który program dla hodowcy gołębi", "MG Hodowla czy Hodowla 3000? Porównanie dwóch programów dla hodowców gołębi pocztowych: jak działają, dla kogo są i od czego zacząć.", "2026-11-05", f'''
<h1>MG Hodowla czy Hodowla 3000?</h1>
<p>Oba programy są nowoczesne i oba służą hodowcom gołębi pocztowych. Różnią się tym, od czego zaczynasz pracę.</p>
<h2>MG Hodowla</h2>
<p>MG Hodowla działa w przeglądarce i otwierasz ją z portalu Moje Gołębie, tym samym kontem. To program do zarządzania całą hodowlą: ewidencja, rodowody, parowanie i wyniki lotowe. Na start jest 30 dni pełnej wersji za darmo.</p>
<h2>Hodowla 3000</h2>
<p>Hodowla 3000 też prowadzi ewidencję, rodowody, łączenia i wyniki lotowe. Do tego zaczyna od tego, co hodowca ma w ręku: papierowych kartek i plików PDF. Rodowód wczytujesz ze zdjęcia albo z pliku, program rozpoznaje gołębie i przodków, a ty drukujesz gotowy rodowód. <a href="../funkcje.html">Wszystkie funkcje Hodowli 3000</a>.</p>
<h2>Który wybrać</h2>
<p>Jeśli masz segregator pełen rodowodów i nie chcesz ich przepisywać, wybierz Hodowlę 3000. Rodowody wczytasz w kilka minut zamiast kilku wieczorów, a resztę hodowli prowadzisz w tym samym programie.</p>
{CTA}
'''),
 ("zarzadzanie-hodowla-golebi.html", "Zarządzanie hodowlą gołębi – ewidencja i porządek w gołębniku", "Jak zarządzać hodowlą gołębi pocztowych: ewidencja ptaków, rodowody, łączenia i wyniki lotów. Praktyczny poradnik dla hodowcy.", "2026-11-05", f'''
<h1>Zarządzanie hodowlą gołębi: od czego zacząć</h1>
<p>Kilkadziesiąt gołębi to kilkadziesiąt numerów obrączek, rodowodów, łączeń i wyników. Bez systemu szybko robi się chaos.</p>
<h2>Ewidencja gołębi</h2>
<p>Podstawą jest lista ptaków: numer obrączki, rok, płeć, kolor i status (w lotach, rozpłodowy, sprzedany). Prowadź ją na bieżąco, a nie raz w sezonie.</p>
<h2>Rodowody</h2>
<p>Pochodzenie każdego gołębia powinno być zapisane w tym samym miejscu co ewidencja. Najszybciej przeniesiesz je z papieru, wczytując rodowody ze zdjęć lub PDF.</p>
<h2>Łączenia</h2>
<p>Zapisuj pary i młode z każdego łączenia. Po kilku sezonach zobaczysz, które pary dają najlepsze potomstwo.</p>
<h2>Wyniki lotów</h2>
<p>Notuj konkursy, odległości i miejsca. To one decydują, które linie warto rozwijać.</p>
{CTA}
<p>Zobacz też: <a href="laczenie-golebi-w-pary.html">łączenie gołębi w pary</a> i <a href="wyniki-lotow-golebi.html">wyniki lotów gołębi</a>.</p>
'''),
 ("laczenie-golebi-w-pary.html", "Łączenie gołębi w pary (parowanie) – jak planować z rodowodem", "Parowanie gołębi pocztowych: jak łączyć gołębie w pary na podstawie rodowodów i wyników, żeby unikać pokrewieństwa i wzmacniać linie.", "2026-11-05", f'''
<h1>Łączenie gołębi w pary: jak planować z rodowodem</h1>
<p>Dobre łączenie zaczyna się od kartki rodowodu, nie od wyglądu ptaka.</p>
<h2>Sprawdź pokrewieństwo</h2>
<p>Porównaj rodowody samca i samicy. Wspólni przodkowie w drugim lub trzecim pokoleniu to świadoma decyzja hodowlana. Wspólni rodzice to zwykle błąd.</p>
<h2>Łącz wyniki, nie tylko krew</h2>
<p>Patrz na wyniki lotów przodków. Para z dwóch linii, które latają podobne dystanse, daje bardziej przewidywalne młode.</p>
<h2>Zapisuj każde łączenie</h2>
<p>Notuj pary, daty i młode. Rodowód młodego powstaje wtedy sam z danych rodziców.</p>
{CTA}
'''),
 ("wyniki-lotow-golebi.html", "Wyniki lotów gołębi – jak je zapisywać i wykorzystać w hodowli", "Wyniki lotowe gołębi pocztowych: jak zapisywać konkursy i odległości, i jak wykorzystać wyniki przy łączeniach i sprzedaży.", "2026-11-05", f'''
<h1>Wyniki lotów gołębi: jak je zapisywać i wykorzystać</h1>
<p>Wyniki to najcenniejsza informacja o gołębiu. Wpisane do rodowodu podnoszą jego wartość przy sprzedaży.</p>
<h2>Co zapisywać</h2>
<p>Datę i miejsce wypuszczenia, odległość, miejsce na liście i liczbę gołębi w konkursie. Samo „1. miejsce” bez skali konkursu niewiele mówi.</p>
<h2>Wyniki w rodowodzie</h2>
<p>Najlepsze wyniki przodków wpisuje się w rodowodzie przy ich numerach. Kupujący patrzy na to w pierwszej kolejności.</p>
<h2>Wyniki przy łączeniach</h2>
<p>Łącz gołębie z linii, które dobrze latają na tych samych dystansach. Więcej w artykule o <a href="laczenie-golebi-w-pary.html">łączeniu gołębi w pary</a>.</p>
{CTA}
'''),
 ("aplikacja-dla-hodowcow-golebi.html", "Aplikacja dla hodowców gołębi – co powinna umieć", "Aplikacja dla hodowców gołębi pocztowych: ewidencja, rodowody, łączenia i wyniki lotów w jednym programie. Co sprawdzić przed wyborem.", "2026-11-05", f'''
<h1>Aplikacja dla hodowców gołębi: co powinna umieć</h1>
<p>Dobra aplikacja dla hodowcy gołębi zastępuje zeszyt, segregator z rodowodami i kartki z wynikami. Oto lista rzeczy, bez których nie warto jej kupować.</p>
<h2>Ewidencja ptaków</h2>
<p>Każdy gołąb z numerem obrączki, rokiem, płcią, kolorem i statusem. Wyszukiwanie po numerze w sekundę. Szczegóły w artykule o <a href="ewidencja-golebi-pocztowych.html">ewidencji gołębi pocztowych</a>.</p>
<h2>Rodowody bez przepisywania</h2>
<p>To największa oszczędność czasu. Hodowla 3000 wczytuje rodowody ze zdjęcia i z PDF, więc segregator przenosisz do programu w jeden wieczór.</p>
<h2>Łączenia i wyniki</h2>
<p>Planowanie par z podglądem wspólnych przodków i zapis wyników lotowych przy każdym ptaku. Zobacz <a href="laczenie-golebi-w-pary.html">jak planować łączenia</a>.</p>
<h2>Druk</h2>
<p>Rodowód do sprzedaży lub na wystawę drukowany prosto z bazy.</p>
<h2>Aplikacja czy program</h2>
<p>Hodowcy częściej szukają hasła „program do rodowodów” niż „aplikacja”. Chodzi o to samo: narzędzie, w którym prowadzisz hodowlę na komputerze, a zdjęcia rodowodów robisz telefonem.</p>
{CTA}
<p>Pełna lista: <a href="../funkcje.html">funkcje Hodowli 3000</a>.</p>
'''),
 ("rodowod-golebia-wzor.html", "Rodowód gołębia – wzór i co musi zawierać", "Wzór rodowodu gołębia pocztowego: jakie dane wpisać, jak ułożyć pokolenia przodków i jak przygotować rodowód do druku.", "2026-11-05", f'''
<h1>Rodowód gołębia: wzór i co musi zawierać</h1>
<p>Nie ma jednego urzędowego wzoru rodowodu gołębia, ale hodowcy od lat używają tego samego układu. Trzymaj się go, a kupujący od razu się w nim odnajdzie.</p>
<h2>Układ rodowodu</h2>
<p>Po lewej stronie gołąb, którego dotyczy rodowód. Na prawo ojciec (u góry) i matka (u dołu), dalej czterech dziadków i ośmiu pradziadków. Najczęściej spotykany jest rodowód czteropokoleniowy.</p>
<h2>Dane gołębia</h2>
<ul>
<li>numer obrączki z kodem kraju, oddziałem i rokiem,</li>
<li>płeć i kolor upierzenia,</li>
<li>imię lub nazwa, jeśli gołąb ją ma,</li>
<li>dane hodowcy: imię i nazwisko, oddział, kontakt.</li>
</ul>
<h2>Dane przodków</h2>
<p>Przy każdym przodku numer obrączki i najważniejsze wyniki lotów: konkurs, odległość, miejsce. Puste pola zostaw puste, nie zgaduj.</p>
<h2>Wzór gotowy do druku</h2>
<p>Zamiast przerysowywać tabelkę, wygeneruj rodowód z programu. Hodowla 3000 drukuje rodowody w tym układzie z danych, które już masz w bazie. Zobacz też <a href="jak-wydrukowac-rodowod-golebia.html">jak wydrukować rodowód gołębia</a>.</p>
{CTA}
'''),
 ("darmowy-program-do-golebi.html", "Darmowy program do gołębi – czy warto?", "Darmowy program dla hodowców gołębi czy płatny? Na co uważać przy darmowych programach i wersjach próbnych, i ile czasu kosztuje ręczne wpisywanie rodowodów.", "2026-11-05", f'''
<h1>Darmowy program do gołębi: czy warto?</h1>
<p>Wielu hodowców zaczyna od szukania darmowego programu. To rozsądne, ale warto policzyć, co się naprawdę opłaca.</p>
<h2>Na co uważać w darmowych programach</h2>
<ul>
<li>brak aktualizacji i wsparcia, kiedy coś przestanie działać,</li>
<li>dane zamknięte w formacie, którego nie da się przenieść,</li>
<li>brak importu rodowodów, czyli wszystko wpisujesz ręcznie.</li>
</ul>
<h2>Policz swój czas</h2>
<p>Ręczne wpisanie jednego czteropokoleniowego rodowodu to kilkanaście minut. Przy pięćdziesięciu gołębiach to kilka wieczorów. Program, który wczytuje rodowody ze zdjęcia, oddaje ten czas już w pierwszym tygodniu.</p>
<h2>Wersja próbna</h2>
<p>Zanim kupisz, wypróbuj program na kilku własnych rodowodach. Sprawdź, ile poprawek wymaga import i jak wygląda wydruk.</p>
{CTA}
'''),
 ("ewidencja-golebi-pocztowych.html", "Ewidencja gołębi pocztowych – jak ją prowadzić", "Ewidencja gołębi pocztowych krok po kroku: jakie dane zapisywać, jak oznaczać statusy ptaków i dlaczego warto prowadzić ją w programie.", "2026-11-05", f'''
<h1>Ewidencja gołębi pocztowych: jak ją prowadzić</h1>
<p>Ewidencja to spis wszystkich ptaków w gołębniku. Bez niej trudno o porządek w rodowodach, łączeniach i sprzedaży.</p>
<h2>Jakie dane zapisywać</h2>
<p>Numer obrączki, rok urodzenia, płeć, kolor, rodziców oraz status. Do tego datę zakupu lub urodzenia i, przy sprzedaży, komu ptak trafił.</p>
<h2>Statusy ptaków</h2>
<p>Najprościej używać kilku stałych statusów: młody, w lotach, rozpłodowy, sprzedany, stracony. Dzięki temu w każdej chwili wiesz, ile ptaków naprawdę masz w gołębniku.</p>
<h2>Kiedy aktualizować</h2>
<p>Na bieżąco, przy każdym obrączkowaniu, zakupie i sprzedaży. Raz w sezonie przejrzyj całą listę.</p>
<h2>Ewidencja w programie</h2>
<p>W Hodowli 3000 ewidencja jest połączona z rodowodami i wynikami. Wpisujesz gołębia raz, a jego dane widać wszędzie. Zobacz <a href="zarzadzanie-hodowla-golebi.html">jak zarządzać całą hodowlą</a>.</p>
{CTA}
'''),
 ("slownik-hodowcy-golebi.html", "Słownik hodowcy gołębi – pojęcia od A do Z", "Słownik hodowcy gołębi pocztowych: obrączka rodowa, rodowód, łączenie, ewidencja, MWG (OLR), konkurs, lista konkursowa i inne pojęcia wyjaśnione prosto.", "2026-11-05", f'''
<h1>Słownik hodowcy gołębi</h1>
<p>Najczęstsze pojęcia z hodowli gołębi pocztowych, wyjaśnione krótko.</p>
<dl>
<dt><strong>Obrączka rodowa</strong></dt><dd><p>Obrączka zakładana młodemu gołębiowi w pierwszych dniach życia. Jej numer zawiera kod kraju, oddział, rok i numer kolejny i jest identyfikatorem ptaka na całe życie.</p></dd>
<dt><strong>Rodowód</strong></dt><dd><p>Dokument z pochodzeniem gołębia: rodzice, dziadkowie, pradziadkowie i ich wyniki. Zobacz <a href="jak-czytac-rodowod-golebia.html">jak czytać rodowód</a>.</p></dd>
<dt><strong>Łączenie (parowanie)</strong></dt><dd><p>Dobranie samca i samicy w parę rozpłodową. Więcej w artykule o <a href="laczenie-golebi-w-pary.html">łączeniu gołębi w pary</a>.</p></dd>
<dt><strong>Ewidencja</strong></dt><dd><p>Spis wszystkich ptaków w hodowli z ich danymi i statusem. Zobacz <a href="ewidencja-golebi-pocztowych.html">jak prowadzić ewidencję</a>.</p></dd>
<dt><strong>Konkurs</strong></dt><dd><p>Lot gołębi z jednego miejsca wypuszczenia, na którym ustala się kolejność przylotów.</p></dd>
<dt><strong>Lista konkursowa</strong></dt><dd><p>Wynik konkursu: kolejność gołębi, prędkości i miejsca. Z niej przepisuje się wyniki do rodowodów.</p></dd>
<dt><strong>MWG (OLR)</strong></dt><dd><p>Międzynarodowy Wspólny Gołębnik, po angielsku <span lang="en">One Loft Race</span> (OLR). Hodowcy wysyłają młode gołębie do jednego gołębnika, gdzie wszystkie ptaki są wychowywane i trenowane w tych samych warunkach, a potem startują w tych samych lotach. O wyniku decydują geny, nie gołębnik hodowcy. Zobacz <a href="rodowody-dla-uczestnikow-mwg.html">rodowody a MWG</a>.</p></dd>
<dt><strong>Benzing</strong></dt><dd><p>Niemiecki producent elektronicznych systemów do konstatowania przylotów gołębi: zegarów, anten i obrączek z chipem. Takie systemy są używane w gołębnikach hodowców i w wielu wspólnych gołębnikach (OLR). Zobacz <a href="benzing-olr-mwg.html">Benzing w MWG i OLR</a>.</p></dd>
<dt><strong>Linia</strong></dt><dd><p>Grupa spokrewnionych gołębi o podobnych cechach i wynikach, rozwijana przez hodowcę przez kolejne pokolenia.</p></dd>
</dl>
{CTA}
'''),
 ("benzing-olr-mwg.html", "Benzing w OLR i MWG – elektroniczny pomiar przylotów", "Benzing w OLR i MWG: jak działa elektroniczne konstatowanie gołębi we wspólnym gołębniku i jak wykorzystać wyniki w rodowodach.", "2026-11-05", f'''
<h1>Benzing w OLR i MWG: elektroniczny pomiar przylotów</h1>
<p>Benzing to niemiecki producent elektronicznych systemów do konstatowania gołębi. W gołębniku montuje się antenę, gołąb nosi obrączkę z chipem, a zegar zapisuje czas przylotu bez udziału hodowcy.</p>
<h2>Jak to działa we wspólnym gołębniku</h2>
<p>W MWG (OLR) do jednego gołębnika wraca kilkaset lub kilka tysięcy ptaków. Elektroniczny system rejestruje każdy przylot automatycznie, więc lista wyników powstaje szybko i bez ręcznego zapisywania.</p>
<h2>Co z tego ma hodowca</h2>
<p>Dokładne czasy i miejsca twoich gołębi z każdego lotu. To dane, które warto przenieść do rodowodów: wynik z OLR to najlepszy dowód na wartość linii, bo wszystkie ptaki miały te same warunki.</p>
<h2>Od listy wyników do rodowodu</h2>
<p>Wyniki z OLR dopisujesz w programie do gołębia, a stamtąd trafiają do jego rodowodu i rodowodów jego potomstwa. Zobacz <a href="wyniki-lotow-golebi.html">jak zapisywać wyniki lotów</a> i <a href="rodowody-dla-uczestnikow-mwg.html">jak przygotować rodowody do MWG</a>.</p>
{CTA}
'''),
 ("forum-hodowcow-golebi.html", "Forum hodowców gołębi – gdzie szukać wiedzy i rozmów", "Forum hodowców gołębi pocztowych: gdzie hodowcy wymieniają się wiedzą, o co pytać i jak korzystać z porad innych przy rodowodach i łączeniach.", "2026-11-05", f'''
<h1>Forum hodowców gołębi: gdzie szukać wiedzy</h1>
<p>Hodowcy gołębi pocztowych od zawsze uczą się od siebie nawzajem. Dziś rozmowy przeniosły się z gołębnika do internetu, ale wiele dzieje się też na żywo.</p>
<h2>Oddziały związku</h2>
<p>Polski Związek Hodowców Gołębi Pocztowych ma oddziały w całym kraju. Zebrania oddziału to najlepsze miejsce na pytania o loty, obrączki i lokalne konkursy.</p>
<h2>Grupy w mediach społecznościowych</h2>
<p>Dużo rozmów toczy się w grupach hodowców na Facebooku: regionalnych, o konkretnych liniach gołębi i o wspólnych gołębnikach (MWG/OLR). Szukaj grup z aktywnymi moderatorami i zasadami dotyczącymi sprzedaży.</p>
<h2>Targi i wystawy</h2>
<p>Duże targi gołębi pocztowych, jak EXPOGołębie w Katowicach, to okazja do rozmów z hodowcami z całej Polski i z zagranicy.</p>
<h2>O co warto pytać</h2>
<ul>
<li>jak inni prowadzą rodowody i ewidencję,</li>
<li>jakie łączenia sprawdziły się w ich liniach,</li>
<li>jak przygotowują młode do MWG,</li>
<li>jakich programów używają i dlaczego.</li>
</ul>
<h2>Nasz poradnik</h2>
<p>Odpowiedzi na najczęstsze pytania z forów zebraliśmy w <a href="./">poradniku hodowcy</a> i w <a href="slownik-hodowcy-golebi.html">słowniku pojęć</a>.</p>
{CTA}
'''),
 ("hodowla-golebi-dla-poczatkujacych.html", "Hodowla gołębi pocztowych dla początkujących – od czego zacząć", "Hodowla gołębi pocztowych dla początkujących: gołębnik, pierwsze ptaki, związek, obrączki i porządek w rodowodach od pierwszego dnia.", "2026-11-05", f'''
<h1>Hodowla gołębi pocztowych dla początkujących</h1>
<p>Zaczynasz przygodę z gołębiami pocztowymi? Najwięcej błędów robi się na starcie, a najtrudniej naprawić bałagan w dokumentach. Oto kolejność, która działa.</p>
<h2>Dołącz do oddziału związku</h2>
<p>Lokalny oddział Polskiego Związku Hodowców Gołębi Pocztowych to obrączki rodowe, udział w lotach i doświadczeni hodowcy, od których nauczysz się najwięcej. Zobacz też, <a href="forum-hodowcow-golebi.html">gdzie hodowcy wymieniają się wiedzą</a>.</p>
<h2>Przygotuj gołębnik</h2>
<p>Suchy, przewiewny, bez przeciągów, z miejscem na grzędy i gniazda. Zaplanuj go na tyle ptaków, ile naprawdę chcesz mieć, nie więcej.</p>
<h2>Kup pierwsze ptaki z rodowodem</h2>
<p>Nie kupuj gołębi bez rodowodu. Sprawdź numer obrączki z dokumentem i poproś o wyniki przodków. Zobacz <a href="jak-czytac-rodowod-golebia.html">jak czytać rodowód</a>.</p>
<h2>Od pierwszego dnia prowadź ewidencję</h2>
<p>Najłatwiej zacząć porządnie, zanim ptaków przybędzie. Wczytaj rodowody kupionych gołębi do programu i zapisuj każde łączenie. Zobacz <a href="ewidencja-golebi-pocztowych.html">jak prowadzić ewidencję</a>.</p>
{CTA}
<p>Nie znasz jakiegoś pojęcia? Zajrzyj do <a href="slownik-hodowcy-golebi.html">słownika hodowcy</a>.</p>
'''),
 ("jak-sprzedac-golebia-pocztowego.html", "Jak sprzedać gołębia pocztowego – rodowód, opis, cena", "Jak sprzedać gołębia pocztowego: przygotowanie rodowodu, opis ogłoszenia, zdjęcia i dokumenty, które budują zaufanie kupującego.", "2026-11-05", f'''
<h1>Jak sprzedać gołębia pocztowego</h1>
<p>Kupujący płaci za pochodzenie i wyniki. Sprzedaż idzie łatwiej, kiedy możesz je pokazać od ręki.</p>
<h2>Przygotuj rodowód</h2>
<p>Czytelny, wydrukowany rodowód z czterema pokoleniami i wynikami przodków to podstawa. Zobacz <a href="jak-wydrukowac-rodowod-golebia.html">jak wydrukować rodowód</a> i <a href="rodowod-golebia-wzor.html">co musi zawierać</a>.</p>
<h2>Napisz konkretne ogłoszenie</h2>
<p>Numer obrączki, płeć, kolor, rocznik, rodzice i najważniejsze wyniki linii. Jeśli gołąb lub jego rodzeństwo startowało w MWG, napisz to wprost.</p>
<h2>Zrób dobre zdjęcia</h2>
<p>Zdjęcie ptaka w dziennym świetle z boku i z rozłożonym skrzydłem. Do tego zdjęcie rodowodu.</p>
<h2>Zapisz sprzedaż w ewidencji</h2>
<p>Oznacz gołębia jako sprzedanego i zapisz kupującego. Po latach łatwo sprawdzisz, jak latało potomstwo twoich ptaków.</p>
{CTA}
'''),
]

cards = []
for slug, title, desc, date, body in posts:
    h1 = body.split("<h1>")[1].split("</h1>")[0]
    ld = {"@context":"https://schema.org","@type":"BlogPosting","headline":h1,"description":desc,"datePublished":date,"inLanguage":"pl","mainEntityOfPage":f"https://mghodowla.pl/blog/{slug}","publisher":{"@type":"Organization","name":"mghodowla.pl"}}
    art = f'<p class="crumbs wrap"><a href="/">Start</a> / <a href="./">Poradnik</a></p><article class="post">{body.replace("</h1>", "</h1><p class=\"meta\">Opublikowano <time datetime=\""+date+"\">5 listopada 2026</time></p>",1)}</article>'
    open(os.path.join(OUT, slug), "w", encoding="utf-8").write(page(slug, title, desc, art, ld))
    cards.append(f'<article><a href="{slug}"><h3>{h1}</h3></a><p>{desc}</p></article>')

idx = f'<div class="wrap" style="padding-top:3rem;padding-bottom:4rem"><h1>Poradnik hodowcy gołębi</h1><p class="lead">Rodowody, programy i porządek w gołębniku.</p><div class="posts" style="margin-top:2.5rem">{"".join(cards)}</div></div>'
open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(page("", "Poradnik hodowcy gołębi – rodowody i programy | mghodowla.pl", "Poradnik dla hodowców gołębi pocztowych: jak czytać rodowody, jak wybrać program do rodowodów, przygotowanie do MWG.", idx))
print("ok")
