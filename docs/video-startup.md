# Videostart

Onderzocht op 19 oktober 2026 na de livegang. Beide WebM-films zijn 43,88 seconden lang: mobiel 8.083.720 bytes, desktop 10.617.041 bytes. De live mobiele response kwam uit de Cloudflare-cache; de eerste byte kwam bij één meting na 270 ms en het bestand was na 2,23 seconden ontvangen. Dit is een meting vanaf de ontwikkelcomputer, geen garantie voor bezoekers.

De oorspronkelijke code riep direct `play()` aan op een video met `preload="none"`. De speler kon daardoor beginnen zodra de eerste frames beschikbaar waren, voordat er voldoende buffer voor een korte netwerkonderbreking was.

## Aanpassing

- Alleen de bron voor het actuele schermformaat wordt geladen. Reduced motion en Save-Data houden de foto als alternatief.
- Als de video zichtbaar is, wordt vooraf laden toegestaan. De eerste afspeelpoging wacht op afspeelbare frames en circa twee seconden buffer. Als een browser zelf stopt met vooraf laden, kan de beschikbare buffer gebruikt worden om een permanent stilstaande foto te voorkomen.
- De foto blijft zichtbaar tot het `playing`-event. De video verschijnt in 200 ms, zonder knoppen of laadscherm.
- Uit beeld scrollen of de tab verbergen pauzeert. Hervatten behoudt de afspeelpositie. Formaatwisseling en MP4-fallback beginnen opnieuw met buffering.
- Alleen de homepage-lastmod in de sitemap is bijgewerkt. Canonical, inhoud, video-URL en overige SEO-data blijven geldig.

## Controle

`output/redesign/check-video-start.mjs` serveert de oude en nieuwe builds lokaal met dezelfde netwerkvertraging: eerst 128 KiB, vervolgens 1,8 seconde onderbreking en daarna 256 KiB per 200 ms. De diagnostiek wordt uitsluitend door deze lokale testserver toegevoegd, nooit in de gepubliceerde build.

Oude mobiele versie: afspelen op 320 ms; `waiting` op 593 ms bij afspeelpositie 0,274 seconde; hervatten op 2243 ms. Nieuwe mobiele versie: start op 2175 ms, geen aansluitende bufferonderbreking in deze test. Nieuwe desktopversie: start op 2248 ms, geen aansluitende bufferonderbreking in deze test. De bufferduur die browsers rapporteren kan tijdens het binnenhalen worden bijgesteld.

Wegscrollen pauzeerde op 5,351 seconde; terugscrollen hervatte vanaf die positie. Beide varianten bleven gedempt en zonder controls. Testingbuild: nul Astro-fouten, waarschuwingen of hints. Logs en schermafbeeldingen staan in `output/redesign/`.

Een blijvend tragere verbinding dan de videobitrate kan later nog steeds buffering veroorzaken. Deze aanpassing verhelpt de gereproduceerde kwetsbaarheid bij het starten; ze bewijst niet welke netwerkvertraging de gebruiker precies had.

## Publicatie

Publicatie op 19 oktober: versie `8d9bfe3b-b96c-4a4f-8072-5d0772524c35` (100%). Live in de browser: mobiele WebM, `readyState=4`, `data-playing=true`, gedempt, zonder controls, voortschrijdende afspeelpositie. De volledige live-SEO-controle voor twaalf pagina's slaagde. De bestaande testing-alias is bij deze beperkte productieverbetering niet opnieuw gepubliceerd.

## Aanvulling 20 oktober: Android Chrome via 4G

De gebruiker meldde dat laden via 4G mislukte op Android met Chrome. De live server antwoordde op `Range: bytes=0-1` met het volledige bestand en status 200. Daarnaast kon de speler blijven wachten op vooraf laden dat een mobiele browser niet uitvoert. Na een fout waren er geen nieuwe pogingen. Deze concrete zwakke plekken zijn opgelost; de precieze fout op de fysieke telefoon is niet rechtstreeks vastgesteld.

- Mobiel kiest nu eerst `aftermovie-mobile-stream.mp4`: 4.495.131 bytes, H.264 Main, 540 × 960, zonder audio en met faststart. De volledige film van 43,88 seconden blijft behouden; de bestaande knip van de logo-intro blijft gelijk. Deze versie is opnieuw uit de originele reel gecodeerd. De oude mobiele WebM van 8.083.720 bytes blijft als codec-alternatief beschikbaar.
- Na maximaal 2,5 seconden wordt ook zonder vooraf opgebouwde buffer een afspeelpoging gedaan, zodat Chrome het laden kan starten. De foto blijft zichtbaar tot werkelijk wordt afgespeeld.
- Tijdelijke laadfouten krijgen maximaal twee automatische nieuwe pogingen, met behoud van de laatst bekende afspeelpositie. Een handmatige herstart blijft beschikbaar als die pogingen mislukken. Codecwisseling gebeurt maximaal eenmaal.
- Alleen `/videos/*` loopt door `worker/video-ranges.mjs`. Deze Worker ondersteunt gedeeltelijke downloads met status 206 en streamt het gevraagde deel, zonder het volledige bestand in het geheugen te verzamelen. Andere routes blijven gewone statische assets.
- De Cloudflare ASSETS-binding geeft binnen de Worker geen Content-Length terug. `scripts/build-video-manifest.mjs` registreert daarom de bestandsgroottes vóór iedere npm-build. De Worker gebruikt deze manifestgegevens en een FixedLengthStream voor correcte lengteheaders.
- Videobestanden krijgen een browsercache van één dag. Gebruik bij vervanging een nieuwe bestandsnaam en maak opnieuw een npm-build, zodat manifest en bestanden overeenkomen.

`npm test` slaagt voor 18 controles van bronkeuze, herstel, pauzeren, databesparing, byte ranges en de bestandsgroottes. Astro check rapporteert nul fouten, waarschuwingen of hints. Een lokale browsertest gebruikte 300 ms vertraging en ongeveer 1,31 Mbit/s, met een afgebroken eerste download na 256 KiB. Afspelen begon na circa 1,98 seconde; de browser hervatte de download vanaf byte 262144 en speelde de volledige film zonder foutmelding. Wegscrollen pauzeerde zonder overlay; terugscrollen hervatte. Dit is een simulatie, geen test op de telefoon of het netwerk van de gebruiker.

Productie: `a023a9ba-dfca-4928-af63-86e84e6d8f34` op 100%. Testing: `774d0583-64d1-4445-8909-5859c98ab132`, met noindex. Herstelversie vóór deze wijziging: `773eb122-c557-4ab4-9d47-c6d2028806ca`. Live geven mobiele MP4 en desktop-WebM correct status 206, twee bytes en Content-Range terug voor `bytes=0-1`. De live-SEO-controle voor alle twaalf pagina's en 36 JSON-LD-blokken slaagt. Alleen de homepage-lastmod is bijgewerkt; de oorspronkelijke videopublicatiedatum blijft behouden.
