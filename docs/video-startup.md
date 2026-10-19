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

Productie staat op versie `8d9bfe3b-b96c-4a4f-8072-5d0772524c35` (100%). Live in de browser: mobiele WebM, `readyState=4`, `data-playing=true`, gedempt, zonder controls, voortschrijdende afspeelpositie. De volledige live-SEO-controle voor twaalf pagina's slaagde. De bestaande testing-alias is bij deze beperkte productieverbetering niet opnieuw gepubliceerd.
