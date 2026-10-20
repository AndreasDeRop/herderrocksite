# Productie en herindexering

De gebruiker gaf op 19 oktober 2026 toestemming om de goedgekeurde testingversie live te zetten en de SEO bij te werken.

## Inhoud en metadata

- De nieuwe editie is zaterdag 4 september 2027 op Festivalweide Lambrecht in de Broekstraat in Herdersem (Aalst).
- De homepage en FAQ noemen dezelfde bevestigde datum in de zichtbare tekst, titels, beschrijvingen en gestructureerde data.
- MusicEvent bevat naam, datum, locatie, organisator en een bestaande festivalfoto. Er zijn geen onbevestigde artiesten, uren of ticketprijzen toegevoegd.
- De aftermovie en bandarchieven blijven herkenbaar gekoppeld aan 2026. `VideoObject.uploadDate` en `video:publication_date` gebruiken `2026-10-19T14:26:35Z`: de bevestigde eerste productiepublicatie van deze videoversie op herderrock.be (Cloudflare-deployment `74512c8d-867b-471e-85ab-8d4426422486`). Dit is niet de opnamedatum of een veronderstelde eerdere publicatie op sociale media. De waarde blijft gelijk bij latere builds.
- De affiche van 2026 en vier actuele festivalfoto's staan in de sitemap. Alle twaalf bestaande pagina's blijven bereikbaar.
- De gedeelde WebSite- en Organization-data zijn onderling gekoppeld. De belangrijkste inhoud staat in de gegenereerde HTML en vereist geen JavaScript om te lezen.
- De productiebuild gebruikt `index, follow, max-image-preview:large, max-video-preview:-1`. De testing-alias houdt zijn aparte `noindex, nofollow`-build.
- Canonicals en sociale URL's verwijzen naar `https://herderrock.be`. `robots.txt` staat crawlen toe en verwijst naar de sitemap. Bestaande Search Console-verificatie en productie-analytics blijven behouden.

## Release

Actuele status op 20 oktober 2026: de verbetering voor video via mobiele verbindingen is gepubliceerd als versie `a023a9ba-dfca-4928-af63-86e84e6d8f34` op 100% productie. De livecontrole slaagt voor twaalf pagina's, 36 JSON-LD-blokken, verplichte videovelden, indexeerbaarheid, assets, sitemap en evenementdatum. De homepage-lastmod is bijgewerkt; `uploadDate` en `video:publication_date` behouden de eerste publicatiedatum. Testing gebruikt versie `774d0583-64d1-4445-8909-5859c98ab132` met noindex. Herstelversie: `773eb122-c557-4ab4-9d47-c6d2028806ca`. Technische details en netwerkproeven staan in `docs/video-startup.md`.

Op 19 oktober is de ontbrekende videopublicatiedatum toegevoegd en gepubliceerd als versie `19858487-4293-4001-b46c-cd1f758f18b7`. Google Rich Results Test bevestigde op 19 oktober 2026 om 14:48 UTC: twee geldige items, waaronder één geldig video-item zonder fouten. Rapport: [Google-test](https://search.google.com/test/rich-results/result?id=vGEBG1gJMcz0xuOg9j9ecQ). Google meldt bij het geldige evenementitem nog niet-kritieke aanbevelingen; die vallen buiten deze correctie aan de videogegevens. Herstelversie voor die wijziging: `028b7a42-9b2d-4677-9a23-93d5391c85ad`.

Eerdere verbetering: videobuffering is gepubliceerd als versie `8d9bfe3b-b96c-4a4f-8072-5d0772524c35`. Deze werking blijft behouden. De automatische goedkeuringscontrole stond productiepublicatie toe na vaststelling van de inmiddels livegezette site.

Update 19 oktober 2026, 14:35 UTC: de gebruiker heeft de nieuwe site inmiddels zelf live gezet. De live browser toont de nieuwe homepage en datum 2027. Cloudflare bevestigt 100% verkeer naar versie `74512c8d-867b-471e-85ab-8d4426422486`, aangemaakt om 14:26 UTC. Onderstaande blokkeringen beschrijven de eerdere pogingen van de agent.

Herstelpunt vóór publicatie: `3c020a9c-1c1a-4bc6-ac58-e4c81e9c9bce`.

Status op 19 oktober 2026: productie nog niet gewijzigd. De lokale productiebuild is gereed en gecontroleerd: twaalf indexeerbare pagina's, 36 parseerbare JSON-LD-blokken, geldige lokale assets, canonicals, sitemap en datum 2027-09-04. Rapport: `output/redesign/production-seo-build.json`.

De automatische goedkeuringscontrole weigert de productiegerichte Cloudflare-upload vanwege een vermeende bindende testing-only instructie. De gebruiker heeft na de eerste blokkering uitdrukkelijk bevestigd: “Ja, testing-beperking vervalt; publiceer op herderrock.be”. Ook de poging na die bevestiging werd door auto-review geweigerd. De blokkering is niet omzeild.

Na de onderbroken poging zijn de versielijst en productie-deployment opnieuw gelezen. Er is geen productieversie voor deze redesign aangemaakt; de oude versie `3c020a9c-1c1a-4bc6-ac58-e4c81e9c9bce` bedient nog 100% van het liveverkeer. De testing-alias gebruikt `5e796f00-62fa-471a-aca3-3528ce0fbdf3` en blijft noindex. Dien de herindexeringsverzoeken voor de nieuwe inhoud pas na een succesvolle livegang in.

## Google Search Console

1. Open de property voor `herderrock.be`.
2. Dien onder Sitemaps `https://herderrock.be/sitemap.xml` in.
3. Controleer via URL-inspectie de homepage, `https://herderrock.be/faq/` en `https://herderrock.be/affiches/`. Gebruik 'Live URL testen' en vervolgens 'Indexering aanvragen'.
4. Volg de verwerking in Search Console. Een crawlverzoek garandeert geen directe opname; Google bepaalt wanneer het opnieuw crawlt en indexeert.

Deze publicatie dient zelf geen verzoek in bij Search Console. De gebruiker vroeg de website klaar te maken zodat hij opnieuw kan indexeren.

## Bing Webmaster Tools

Kies de bestaande website `herderrock.be`, of importeer de geverifieerde site uit Google Search Console. Dien dezelfde sitemap in onder Sitemaps en gebruik URL Submission voor de homepage, FAQ en affiches. Er is namens de gebruiker geen verzoek ingediend.

Bronnen: [Bing-sitemaps](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed), [URL Submission](https://www.bing.com/webmasters/help/URL-Submission-62f2860b) en [site importeren/verifiëren](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b).

Bronnen: [Google over opnieuw crawlen](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [sitemaprichtlijnen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [evenementgegevens](https://developers.google.com/search/docs/appearance/structured-data/event) en [AI-zoekfuncties](https://developers.google.com/search/docs/appearance/ai-features).
