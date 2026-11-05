# mghodowla

Statyczna strona serwisu mghodowla.pl.

Przebudowa treści: `node tools/build.js`.

GitHub Pages: workflow `.github/workflows/pages.yml` publikuje zmiany z gałęzi `main`.
W ustawieniach repozytorium Pages źródłem musi być GitHub Actions.
Publikowane są wyłącznie pliki strony; generatory pozostają w repozytorium.

Przygotowanie publikacji lokalnie: `node tools/prepare-pages.js` (wynik: `_site/`).
