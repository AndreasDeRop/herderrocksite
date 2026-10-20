# Herderrock

Astro-website voor Herderrock in Herdersem (Aalst).

## Lokaal bekijken

```sh
npm install
npm run dev -- --host 127.0.0.1
```

De lokale preview staat op http://127.0.0.1:4321. Dit commando publiceert niets.

```sh
npm run build
npm run preview
```

De build voert eerst `astro check` uit en genereert daarna de statische website in `dist/`. Bij lokale OneDrive-bestandsvergrendelingen kan een andere uitvoermap worden gebruikt: `npm run build -- --outDir <lokaal-pad>`.

Beide npm-builds genereren vooraf `worker/video-sizes.json` uit de videobestanden. De Cloudflare Worker gebruikt die groottes om videodownloads in delen te kunnen hervatten. Publiceer de Worker en de bijbehorende assets samen. Gebruik een nieuwe bestandsnaam wanneer een video wordt vervangen, vanwege de browsercache van één dag. `npm test` controleert de speler, gedeeltelijke downloads en de overeenkomst tussen manifest en bestanden.

## Versie na editie 2026

- De homepage opent met de aftermovie; onder 768px wordt de verticale reel gebruikt.
- De video vult het eerste scherm van rand tot rand, met het logo erbovenop. Scrollen onthult de rode festivalachtergrond.
- De film speelt gedempt en zonder zichtbare bediening. Minder-beweging- en databesparingsvoorkeuren tonen de poster.
- De volgende line-up toont “COMING SOON”. Artiestenpagina's van 2026 blijven bereikbaar als herkenbaar archief.
- De oorspronkelijke cosy-festivaltekst en de kleuren en typografie zijn behouden.
- Ontwikkelmodus en testing-builds laden geen analytics en hebben `noindex`. Een gewone productiebuild behoudt de bestaande analyticsconfiguratie.

## Cloudflare-testing

Preview: https://testing-herderrocksite.andreasderop.workers.dev

Maak een testbuild met `npm run build:testing -- --outDir <lokaal-pad>`. Upload uitsluitend die uitvoermap als Worker-versie met `wrangler versions upload --name herderrocksite --assets <lokaal-pad> --preview-alias testing`. Dit maakt een testlink zonder de actieve productie-deployment te vervangen. Gebruik hiervoor geen `wrangler deploy` of `wrangler versions deploy`.

De sitemap en canonieke URL's blijven naar `https://herderrock.be` verwijzen. De testpagina's hebben `noindex, nofollow` en sturen geen analytics.

## Productie

De gebruiker gaf op 19 oktober 2026 toestemming om de redesign live te zetten. Gebruik daarvoor een gewone `npm run build -- --outDir <lokaal-pad>`: een testing-build heeft `noindex` en mag niet als productie worden uitgerold.

Controleer de productiebuild op indexeerbare robots-metadata, canonieke URL's en de bevestigde datum 4 september 2027. Upload de build met `wrangler versions upload --name herderrocksite --assets <lokaal-pad> --keep-vars`, zonder de testing-alias te veranderen. Rol alleen de gecontroleerde nieuwe versie uit met `wrangler versions deploy <version-id>@100 --name herderrocksite --yes`. Controleer daarna de livepagina's, `robots.txt` en `sitemap.xml` op `https://herderrock.be`.

De laatste versie vóór deze release was `3c020a9c-1c1a-4bc6-ac58-e4c81e9c9bce`. Bewaar die versie als herstelpunt; de actuele release staat in `docs/production-seo.md`.

## Zoekmachines

Werk `public/sitemap.xml` bij bij wijzigingen. Houd zichtbare tekst, paginatitels, beschrijvingen, canonieke URL's en JSON-LD met elkaar in overeenstemming. De sitemap bevat de aftermovie, vier festivalfoto’s en alle bestaande pagina's. Vul geen toekomstige artiesten, tickets, data of een onbekende `VideoObject.uploadDate` in.

Voor herindexering: dien `https://herderrock.be/sitemap.xml` in via Google Search Console en vraag voor de homepage, `/faq/` en `/affiches/` indexering aan via URL-inspectie. Een publicatie of aanvraag is geen bevestiging dat Google de nieuwe inhoud al heeft geïndexeerd.

Referenties: [Google over AI-zoekfuncties](https://developers.google.com/search/docs/appearance/ai-features) en [videometadata](https://developers.google.com/search/docs/appearance/structured-data/video).
