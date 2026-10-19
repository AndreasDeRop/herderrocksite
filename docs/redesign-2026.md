# Homepage na Herderrock 2026

Route: `/`. Visitor mode: **Experience**. Vastgelegd op 18 oktober 2026 op basis van de opdracht en de gerealiseerde broncode.

## Direction contract

**THESIS:** Bezoekers herbeleven Herderrock 2026 via de aftermovie en blijven daarna in de festivalsfeer.

**OWN-WORLD:** De bestaande kleuren, het originele logo en de compacte displayletter blijven behouden. Rechte filmvlakken, gedraaide crèmekleurige fotokaders en een verzegelde affiche geven de pagina haar vorm.

**STORY:** Eerst kijken, dan terugblikken met echte festivalfoto’s, de cosy festivalbeschrijving lezen en ontdekken dat de volgende line-up binnenkort komt. Daarna volgen bestaande sponsors en de footer.

**FIRST VIEWPORT:** De film vult het volledige eerste scherm, met het originele logo erbovenop. Desktop krijgt de liggende aftermovie; mobiel krijgt de aangeleverde verticale reel. De gebruiker vroeg om de losse cosy-headertekst, videobediening en herhaallink te verwijderen.

**FORM:** Een sticky filmopening onthult bij scrollen het festivalrood; de film verkleint tot 91,5% en draait maximaal één graad. De richting volgt de expliciete opdracht. Er is geen gegenereerde seed key; de Impeccable-launcher was niet beschikbaar.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Gedrag en inhoud

- Video start gedempt waar automatisch afspelen is toegestaan. Reduced motion en save-data slaan automatisch afspelen over. Zodra het filmvlak volledig buiten beeld is en in een verborgen tabblad wordt de film gepauzeerd, zonder overlay. Terugscrollen hervat op dezelfde positie.
- Bij wisselen tussen mobiel en desktop wordt de passende bron geladen met behoud van de positie. Zonder JavaScript of wanneer automatisch afspelen wordt geblokkeerd blijft de poster zichtbaar. Bij een videofout verschijnt een directe videolink.
- De knop “COMING SOON” reageert speels zonder artiesten te onthullen. De gebruiker bevestigde zaterdag 4 september 2027 als nieuwe datum. Die staat in de beschrijving, op de line-upaffiche, in de FAQ en in de bijbehorende metadata. Een MusicEvent bevat de datum zonder onbevestigde uren, tickets of artiesten. De oude timetable is verwijderd.
- De cosy beschrijving gebruikt de tekst uit de aangeleverde referentie, met de volledige eerste zin als Impact-kop. De slotparagraaf nodigt uit voor 4 september 2027. De leestekst is 20 pixels op desktop en 18 pixels op mobiel. De kop “Ontdek onze sponsors” linkt naar de sponsorpagina. Archief- en praktische links blijven aanwezig.
- De terugblik opent met “Dit was Herderrock 2026” groot en gecentreerd. De losse tekst “Herbeleef Herderrock” is verwijderd. Beide films gebruiken WebM/VP9 met MP4 als terugval voor browsers zonder ondersteuning. De stilstaande posters en festivalfoto's zijn WebP.

## Herkomst media

Beide bronnen werden door de gebruiker geleverd, gemaakt door **@emvlstudio**:

- Liggend: `C:/Users/andre/Downloads/20260905-Herdersem-Herderrock/Herderrock-Aftermovie-@emvlstudio.mp4`
- Verticaal: `C:/Users/andre/Downloads/20260905-Herdersem-Herderrock/Herderrock-Aftermovie-@emvlstudio-Reel.mp4`

Afgeleide webbestanden zijn met ffmpeg gemaakt: H.264, CRF 25, AAC 128 kbit/s, faststart, duur 43,88 seconden. De eerste 1,56 seconden zijn op verzoek verwijderd, tot de shotwissel na het mobiele logo-intro. De originele bronbestanden blijven ongewijzigd. `public/videos/2026/aftermovie-desktop-cut.mp4` is 1600×900; `aftermovie-mobile-cut.mp4` is 720×1280 en gebruikt de aparte verticale bron.

De primaire WebM-bestanden zijn opnieuw uit die originele bronnen gemaakt: VP9, CRF 34, 25 fps, dezelfde resoluties en duur, zonder ongebruikte audiotrack. `aftermovie-desktop-cut.webm` is 10.617.041 bytes tegenover 13.341.867 bytes voor MP4 (20,4% kleiner). `aftermovie-mobile-cut.webm` is 8.083.720 bytes tegenover 10.019.165 bytes (19,3% kleiner). De browser kiest één formaat en één beeldverhouding; de alternatieven worden niet vooraf geladen. WebM-fouten vallen terug op het bijbehorende MP4-bestand. De sitemap en VideoObject verwijzen naar de primaire liggende WebM.

| Raster in `public/visuals/` | Bron |
| --- | --- |
| `aftermovie-2026-desktop.webp` | Liggende bron, 10 seconden |
| `aftermovie-2026-mobile.webp` | Verticale bron, 10 seconden |
| `herderrock-2026-foto-publiek.webp` | `20260906-Herderrock-EmielViellefont-@emvlstudio-GinosEyeball-8.jpg` |
| `herderrock-2026-foto-poeslief.webp` | `20260906-Herderrock-EmielViellefont-@emvlstudio-Poeslief-8.jpg` |
| `herderrock-2026-foto-sfeer.webp` | `20260906-Herderrock-EmielViellefont-@emvlstudio-Sfeer-5.jpg` |
| `herderrock-2026-foto-tijs-vanneste.webp` | `20260906-Herderrock-EmielViellefont-@emvlstudio-Tijsvanneste-10.jpg` |

De vier foto’s komen uit dezelfde door de gebruiker opgegeven map, zijn van Emiel Viellefont / @emvlstudio en zijn met Sharp verkleind naar 1200 pixels breed (1400 voor de foto bij de beschrijving) en WebP-kwaliteit 84. De foto bij de beschrijving is op verzoek vervangen door de podiumfoto tijdens Tijs Vanneste, 1400×935 pixels en 173.648 bytes.

De affiche van 2026 komt uit `C:/Users/andre/Downloads/HK2026_affiche.pdf` (één pagina, 36.206.535 bytes). Poppler heeft de ongewijzigde affiche gerenderd; Sharp maakte een WebP van 1704×2400 pixels, kwaliteit 88, 639.808 bytes. `src/assets/affiches-optimized/2026.webp` verschijnt als eerste in het archief met responsieve Astro-varianten. `public/affiches/herderrock-2026.webp` is de vaste URL voor groot formaat, sociale metadata en de sitemap. De oorspronkelijke PDF is niet gewijzigd.

Logo, font, sponsorlogo's en archiefmateriaal zijn bestaande projectassets. Er zijn voor deze redesign geen gegenereerde festivalbeelden gebruikt.

De faviconbestanden (`favicon.ico`, `favicon-96.png`, `favicon.svg` en `apple-touch-icon.png`) zijn afgeleid van het bestaande `public/logo.png`. Alleen transparante marge is weggesneden; het originele logo staat op de bestaande donkere merkkleur. De ICO bevat 16, 32 en 48 pixels, de PNG 96 pixels en het Apple-icoon 180 pixels.

## Metadata en oplevering

De homepage bevat Nederlandstalige beschrijvende tekst, canonical en sociale metadata, plus `WebPage`/`VideoObject` bij de gedeelde `Organization`/`WebSite`-data. De sitemap is bijgewerkt met de aftermovie en de vier festivalfoto’s. `uploadDate` ontbreekt bewust: de daadwerkelijke publicatiedatum is niet bevestigd.

De afrondende review keurde de lokale preview goed na contrastcorrecties. De build telt 12 pagina's; Astro rapporteerde 0 fouten, waarschuwingen en hints. De hoofdtaak controleerde alle 12 sitemap-URL's, lokale assets en 34 JSON-LD-blokken, plus mobiel → desktop → mobiel voor de videobron. Wegens een incidentele OneDrive-`EPERM` werd de build naar de aparte lokale visualisatiemap geschreven.

## Cloudflare-testing — 18 oktober 2026

Op uitdrukkelijk verzoek van de gebruiker is alleen een testversie geüpload via `wrangler versions upload --preview-alias testing`:

- Testlink: https://testing-herderrocksite.andreasderop.workers.dev
- Huidige testversie: `5e796f00-62fa-471a-aca3-3528ce0fbdf3` (datum 4 september 2027, affiche 2026, nieuwe podiumfoto en sponsorlink)
- Alle 12 testpagina's bevatten `noindex, nofollow` en laden geen analytics.
- De browser bevestigde dat de aftermovie op de Cloudflare-testlink gedempt afspeelt zonder zichtbare bediening.
- De vervolgcorrectie bevat “Dit was Herderrock 2026”, “Herbeleef Herderrock”, drie klikbare Instagram-credits, de aangewezen Poeslief-foto, een foto bij de cosy beschrijving en “COMING SOON”. Lange gedachtestreepjes zijn uit de pagina's en metadata verwijderd. De sitemap bevat de vier actuele festivalfoto's.
- De actieve productie-deployment is na de upload gecontroleerd en bleef voor 100% op versie `3c020a9c-1c1a-4bc6-ac58-e4c81e9c9bce` van 31 augustus 2026.

Er is niets naar de echte website gedeployd.
