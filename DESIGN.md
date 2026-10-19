---
name: Herderrock
description: Bestaande festivalidentiteit met uitgesproken affiches en echte festivalbeelden.
colors:
  red: "#ed1c24"
  white: "#f9eed5"
  primary-gray: "#19203b"
  black: "#11110e"
  red-copy: "#000000"
typography:
  display:
    fontFamily: '"Herderrock Impact", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'
    fontWeight: 400
  body:
    fontFamily: "Arial, sans-serif"
---

# Design System: Herderrock

## Overview

De bestaande Herderrock-identiteit combineert grote, compacte afficheletters met warme crèmevlakken, rood en donkerblauw. Echte festivalbeelden dragen de sfeer; het logo en de cosy beschrijving blijven herkenbaar. Deze registratie beschrijft de gedeelde vormtaal en de gerealiseerde homepage, geen nieuwe regels voor ongewijzigde archiefpagina's.

**Key Characteristics:**
- Grote hoofdletters en rustige Arial-leestekst.
- Rechte vlakken, duidelijke kleurwissels en licht gedraaide foto- en affichekaders.
- Echte beelden met zichtbare bronvermelding.

## Colors

### Primary

`red` is het bestaande festivalrood voor grote vlakken, accenten en de affichezegel.

### Secondary

`primary-gray` is ondanks de bestaande tokennaam donkerblauw: het draagt de menulaag, de line-upsectie en tekst op crème.

### Neutral

`white` is warm crème voor papierachtige vlakken en lichte tekst. `black` is de bijna zwarte filmbasis en footer. `red-copy` is zuiver zwart voor kleine tekst op rood, waaronder de terugbliktekst en de rode header.

## Typography

De displayletter is lokaal geladen uit `/fonts/impact.ttf` als `Herderrock Impact`. Arial draagt lopende tekst en bediening. Hoofdtitels gebruiken hoofdletters; bodytekst blijft in gewone zinsvorm.

De gerealiseerde homepage gebruikt een gecentreerde hoofdtitel van `clamp(4rem, 10vw, 8rem)` met regelhoogte `.94`; mobiel wordt dit `clamp(2.8rem, 14vw, 5.25rem)`. De grotere titel volgt de expliciete vraag om “Dit was Herderrock 2026” groot in het midden te zetten. Sectietitels variëren per compositie. Lopende tekst is doorgaans `1rem` met regelhoogte `1.7–1.75`. Dit is een waargenomen hiërarchie, geen sitebrede verplichte schaal.

De cosy festivalbeschrijving volgt de aangeleverde tekstreferentie: de volledige eerste zin vormt een compacte Impact-kop, `clamp(2.5rem, 4vw, 3.5rem)` met regelhoogte `1.02`. De lopende tekst is hier `1.25rem` op desktop en `1.125rem` op mobiel, met regelhoogte `1.75`. De tekst staat links van de foto; mobiel volgt de foto op de tekst.

## Layout

De gedeelde header houdt het logo centraal en de menuknop rechts. Op mobiel verdwijnt de losse merchlink; die blijft beschikbaar in het menu. Het hoofd-breakpoint is `767px`. De footer en sponsorinhoud kunnen omvouwen.

Op de homepage wisselen brede kleurvlakken elkaar af. Tekstsecties hebben op desktop twee kolommen en op mobiel één, met veelal `24px` zijruimte. De herinneringsbeelden gebruiken drie kolommen op desktop en twee op mobiel; het derde beeld wordt daar verborgen. Bij de cosy beschrijving staat een licht gedraaide foto van de festivalweide in een donkerblauw kader met een rood plakbandaccent. De zichtbare @emvlstudio-credits linken naar Instagram. De filmopbouw en scrollregie staan in `docs/redesign-2026.md`.

## Elevation & Depth

Vlakken zijn overwegend plat, zonder kaartschaduwen. Kleurcontrast, overlapping en kleine rotaties geven diepte. Donkere verlopen achter de header en de onderste filmregel houden tekst leesbaar op bewegend beeld.

## Shapes

Film, knoppen, fotokaders en affiche zijn rechthoekig met rechte hoeken. Fotokaders hebben een crème rand en onderschrift. De line-upaffiche is licht gedraaid, met een schuine rode zegel over afgeschermde namen.

## Components

- **Filmopening:** beeldvullende, gedempte video zonder zichtbare bediening; logo en navigatie liggen boven het beeld. Reduced motion en save-data tonen de poster.
- **Tekstlinks:** onderstreepte onderrand en lijnpijl; de pijl verschuift bij hover licht naar rechts.
- **Navigatie:** de homepage begint met lichte tekst boven de donkere filmomgeving. Vanaf de scrollgrens wordt de header dekkend rood met zwarte tekst. Het geopende menu is donkerblauw met crèmetekst, focusbeheer en sluiten via Escape.
- **Geheime affiche:** de rode zegel is een knop; de reactie verschijnt in een beleefd livegebied. De zegel toont “COMING SOON” en noemt geen artiesten.
- **Sponsors:** de bestaande logo's staan op crème in omlijnde, responsieve kaarten.
- **Toetsenbord en beweging:** zichtbare focus gebruikt een contour van `3px` met `5px` afstand. Reduced motion schakelt de filmschaal, filmrotatie, vloeiend scrollen en genoemde knoptransities uit; automatisch afspelen wordt dan overgeslagen.

## Do's and Don'ts

- **Do** behoud de bestaande kleuren, lokale displayletter en het logo.
- **Do** gebruik echte festivalbeelden en behoud de bronvermelding.
- **Do** gebruik zwarte kleine tekst op rode vlakken en behoud zichtbare focus.
- **Don't** maak de homepagevolgorde tot een verplicht sjabloon voor iedere pagina.
- **Don't** voeg nieuwe merkregels of een kleurschaal toe zonder een bevestigde aanleiding.
