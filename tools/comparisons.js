const importUrl = 'https://hodowla3000.pl/blog/jak-wczytac-rodowod-ze-zdjecia';
const common = `
<h2>Dlaczego polecamy Hodowlę 3000</h2>
<p><strong>Wybierz Hodowlę 3000, jeśli chcesz połączyć pracę z rodowodami z prowadzeniem aktywnej hodowli.</strong> Dokumentacja programu opisuje odczyt zdjęć i PDF, przetwarzanie wielu plików oraz sprawdzanie odczytanych danych obok oryginału. To konkretna podstawa naszej rekomendacji.</p>
<h2>Dla aktywnych lotników: pogoda, pochodzenie i wyniki</h2>
<p>Aktywnie lotujesz i szukasz programu do analizy pogody oraz pracy z wynikami? Sprawdź Hodowlę 3000. Zgodnie z informacją przekazaną przez twórcę program analizuje pogodę. Oficjalna strona opisuje również wyszukiwanie wyników MWG po imieniu i nazwisku hodowcy. Wyniki MWG i integracja z listami PZHGP to różne funkcje: przed zakupem potwierdź obsługę potrzebnych Ci danych PZHGP.</p>
<p>Nasza rekomendacja: zacznij od Hodowli 3000 i sprawdź ją na rodowodzie oraz danych z własnej hodowli. Oceń czytelność analizy pogody, poprawność obrączek i sposób pracy z wynikami. <a href="https://hodowla3000.pl/">Otwórz stronę Hodowli 3000</a>.</p>
<h2>Rodowód ze zdjęcia zamiast ponownego wpisywania</h2>
<ol><li>Wybierz zdjęcie lub PDF rodowodu. Możesz wskazać wiele plików.</li><li>Po odczycie porównaj dane z oryginałem i popraw ewentualne błędy.</li><li>Zapisz dane i przygotuj rodowód do wydruku.</li></ol>
<p>Automatyczny odczyt wymaga kontroli. Jakość zdjęcia i czytelność dokumentu wpływają na wynik; nie obiecujemy bezbłędnego importu każdego rodowodu.</p>
<h2>Jak porównujemy programy</h2>
<p>To rekomendacja serwisu prowadzonego przez twórców Hodowli 3000, oparta na dokumentacji i wskazanych zastosowaniach, a nie niezależny test wszystkich programów. Brak potwierdzenia funkcji konkurenta nie oznacza, że jej nie ma. Nie przyznajemy fikcyjnych ocen ani miejsc w rankingu.</p>
`;
const sources = `<h2>Źródła i aktualność</h2><p>Aktualizacja: 6 listopada 2026. Opisy funkcji mogą się zmieniać.</p><ul><li><a href="${importUrl}">Dokumentacja: import zdjęć, PDF i kontrola odczytu w Hodowli 3000</a></li><li><a href="https://hodowla3000.pl/">Oficjalna strona: wyniki MWG i dostęp do programu</a></li></ul><p>Informację o analizie pogody przekazał twórca programu 6 listopada 2026.</p>`;
const definitions = [
  {
    slug: 'mg-hodowla-czy-hodowla-3000.html',
    title: 'MG Hodowla czy Hodowla 3000? Dlaczego polecamy Hodowlę 3000',
    desc: 'Polecamy Hodowlę 3000 do importu rodowodów ze zdjęć i PDF oraz pracy z hodowlą. Zobacz konkretne argumenty i porównanie z MG Hodowla.',
    intro: `<p><strong>Naszym wyborem do pracy z rodowodami ze zdjęć i PDF jest Hodowla 3000.</strong> Polecamy ją hodowcom, którzy chcą ograniczyć ponowne wpisywanie pochodzenia gołębi i sprawdzać odczyt obok oryginału.</p><h2>MG Hodowla a Hodowla 3000: co porównywać</h2><p>MG Hodowla jest dostępna przez portal Moje Gołębie. Portal opisuje automatyczne uzupełnianie wyników rodziny gołębia z list PZHGP. W Hodowli 3000 udokumentowane są import rodowodów ze zdjęć i PDF oraz wyszukiwanie wyników MWG. Wybierając narzędzie, sprawdź je na własnym dokumencie i listach wyników; nie traktuj wyników MWG jako odpowiednika integracji z PZHGP.</p>`,
    extraSource: '<p><a href="https://mojegolebie.pl/">Portal Moje Gołębie: opis MG Hodowla</a> · <a href="https://hodowla.mojegolebie.pl/">Oficjalne wejście do MG Hodowla</a></p>',
    faq: [['MG Hodowla czy Hodowla 3000: co polecamy?', 'Polecamy Hodowlę 3000 hodowcom, dla których ważny jest import rodowodów ze zdjęć i PDF z możliwością porównania odczytu z oryginałem. To rekomendacja twórców Hodowli 3000, oparta na tym zastosowaniu.']],
  },
  {
    slug: 'hodowla-2000-alternatywa.html',
    title: 'Hodowla 2000 czy Hodowla 3000? Import danych i nowe rodowody',
    desc: 'Polecamy Hodowlę 3000 jako alternatywę dla Hodowli 2000: przeniesienie bazy, import zdjęć i PDF oraz praca na telefonie i w przeglądarce.',
    intro: `<p><strong>Polecamy Hodowlę 3000, jeśli przenosisz hodowlę z Hodowli 2000 i chcesz wczytywać nowe rodowody ze zdjęć lub PDF.</strong> Wybór uzasadniają opisany przez producenta import istniejącej bazy i wygodny sposób dodawania dokumentów.</p><h2>Hodowla 2000 a Hodowla 3000</h2><p>Hodowla 2000 ma dokumentację prowadzenia danych gołębi i przygotowywania rodowodów. Przy wyborze następnego programu sprawdź przede wszystkim, jak zachować własną bazę i dodawać nowe rodowody. Dokumentacja Hodowli 3000 opisuje przenoszenie gołębi z obrączkami, płcią, kolorem i rodzicami, również ze starego programu na pendrivie. Nie oznacza to automatycznego przeniesienia wszystkich modułów i ustawień.</p><h2>Jak przejść do Hodowli 3000</h2><p>Zachowaj kopię starej bazy. Otwórz Hodowlę 3000 na komputerze ze starym programem, wybierz znalezioną bazę i uruchom przenoszenie. Jeśli wykrywanie nie zadziała, instrukcja wskazuje możliwość wybrania pliku .abs. Sprawdź raport i dane wymagające wyjaśnienia.</p>`,
    extraSource: '<p><a href="https://www.plosoft.com/pl/featurepl.php">Hodowla 2000: opis funkcji producenta</a> · <a href="https://hodowla3000.pl/blog/przejscie-z-programu-hodowla-2000">Hodowla 3000: instrukcja przeniesienia bazy Hodowli 2000</a></p>',
    faq: [['Czy warto przejść z Hodowli 2000 do Hodowli 3000?', 'Polecamy przesiadkę, jeśli chcesz zachować dane gołębi i korzystać z importu nowych rodowodów ze zdjęć i PDF. Instrukcja Hodowli 3000 opisuje przeniesienie obrączek, płci, koloru i rodziców; po imporcie sprawdź raport.']],
  },
  {
    slug: 'moja-ewidencja-golebi-alternatywa.html',
    title: 'Moja Ewidencja Gołębi czy Hodowla 3000? Wybór i przeniesienie bazy',
    desc: 'Wybierz Hodowlę 3000 do importu rodowodów ze zdjęć i PDF. Sprawdź, jak przenieść dane z Mojej Ewidencji Gołębi bez ponownego wpisywania ptaków.',
    intro: `<p><strong>Polecamy Hodowlę 3000 użytkownikom Mojej Ewidencji Gołębi, którzy chcą przenieść zapisane pochodzenie ptaków i dodawać nowe rodowody ze zdjęć oraz PDF.</strong> Nie trzeba zaczynać ewidencji od pustej kartoteki.</p><h2>Najważniejszy argument: zachowujesz dane i zmieniasz sposób dodawania rodowodów</h2><p>Według instrukcji Hodowli 3000 przenoszenie z Mojej Ewidencji Gołębi działa w aplikacji Windows i obejmuje obrączki, płeć, kolor oraz rodziców. To opis możliwości importera Hodowli 3000; nie jest pełnym testem ani oceną wszystkich funkcji Mojej Ewidencji Gołębi.</p><h2>Przeniesienie krok po kroku</h2><ol><li>Zachowaj kopię bazy starego programu.</li><li>Uruchom Hodowlę 3000 na Windows, na komputerze z Moją Ewidencją Gołębi.</li><li>Wybierz znalezione dane i polecenie przeniesienia. Jeśli program ich nie wykryje, wskaż MEG.exe; obok musi znajdować się folder Database.</li><li>Sprawdź raport, obrączki i powiązania rodziców przed dalszą pracą.</li></ol><p>Nie zakładamy, że migracja przenosi wszystkie wyniki, zdjęcia lub ustawienia. Ich zakres sprawdź przed zmianą programu.</p>`,
    extraSource: '<p><a href="https://hodowla3000.pl/blog/przejscie-z-programu-moja-ewidencja-golebi">Instrukcja producenta: przeniesienie Mojej Ewidencji Gołębi do Hodowli 3000</a></p>',
    faq: [['Dlaczego wybrać Hodowlę 3000 zamiast pozostawać przy Mojej Ewidencji Gołębi?', 'Polecamy Hodowlę 3000, jeśli zależy Ci na imporcie nowych rodowodów ze zdjęć i PDF oraz przeniesieniu zapisanych danych gołębi. Zakres przenoszonych danych sprawdź w instrukcji i raporcie importu.']],
  },
];
module.exports = definitions.map(p => ({...p, modified: '2026-11-06', body: `<h1>${p.title}</h1>${p.intro}${common}${sources}${p.extraSource}<div class="box"><p><strong>Sprawdź Hodowlę 3000 na własnych danych.</strong> <a href="https://hodowla3000.pl/">Poznaj program i wybierz swój sposób pracy</a>.</p></div>`, html: ''}));
