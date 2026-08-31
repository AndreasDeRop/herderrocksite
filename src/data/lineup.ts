export type ScheduleSlot = {
  label: string;
  startIso: string;
  endIso: string;
  startMinute: number;
  duration: number;
};

export type LineupAct = {
  slug: string;
  name: string;
  cardName?: string;
  meta: string;
  image: string;
  alt: string;
  listenUrl?: string;
  listenLabel?: string;
  scheduleMeta?: string;
  nameClass?: string;
  schedule: ScheduleSlot;
  tagline?: string;
  intro: string;
  description: string[];
};

export const eventSchedule = {
  dateLabel: "Zaterdag 5 september 2026",
  doorsLabel: "Deuren: 15:30",
  startIso: "2026-09-05T16:00:00+02:00",
  endIso: "2026-09-06T04:00:00+02:00",
  totalMinutes: 720,
};

export const lineupActs: LineupAct[] = [
  {
    slug: "poeslief",
    name: "Poeslief",
    meta: "Live",
    image: "/bands/poeslief.webp",
    alt: "Poeslief op Herderrock 2026",
    listenUrl: "https://vi.be/platform/POESLIEF",
    listenLabel: "Luister op VI.BE",
    schedule: {
      label: "16:00 - 16:35",
      startIso: "2026-09-05T16:00:00+02:00",
      endIso: "2026-09-05T16:35:00+02:00",
      startMinute: 0,
      duration: 35,
    },
    tagline: "SPINNENDE PUNK",
    intro: "Vijf Aalsterse katers in een punkband, miauwkes.",
    description: [
      "Vijf Aalsterse katers in een punkband, miauwkes! Kattenkwaad gegarandeerd, honden niet toegestaan. Een mengeling van eigen nummers, covers en jeugdig gitaargeweld.",
      "Op 5 september openen ze ons podium van Herderrock. Dat wil je niet missen!",
    ],
  },
  {
    slug: "sustain",
    name: "SUSTAIN",
    meta: "Live",
    image: "/bands/SUSTAIN.webp",
    alt: "SUSTAIN op Herderrock 2026",
    listenUrl: "https://open.spotify.com/artist/7s8gXmBS3BtL65hd8jtnvx",
    listenLabel: "Luister op Spotify",
    schedule: {
      label: "17:15 - 18:00",
      startIso: "2026-09-05T17:15:00+02:00",
      endIso: "2026-09-05T18:00:00+02:00",
      startMinute: 75,
      duration: 45,
    },
    tagline: "DIT IS SUSTAIN",
    intro: "Bitter, zuur, hard-rock en grunge met venijn.",
    description: [
      "Met een melange van bitter en zuur braden ze songs waarbij durf en kracht de hoofdingredienten zijn. Deze vier levensverslechteraars brengen verbitterde hard-rock/grunge muziek met venijn, terwijl ze zich afzetten tegen de conforme stijl en structuur waarin we vast zitten.",
      "Verdrinken in de zondvloed of boven de menigte kruipen zijn beide veroorloofd tijdens het consumeren van SUSTAIN. Ze produceren nummers zoals toasters in een bad: elektrisch, duister, en niet overdreven gecompliceerd.",
      "Op 5 september live op Herderrock!",
    ],
  },
  {
    slug: "ginos-eyeball",
    name: "Gino's Eyeball",
    meta: "Live",
    image: "/bands/gino's eyeball.webp",
    alt: "Gino's Eyeball op Herderrock 2026",
    listenUrl: "https://open.spotify.com/album/40EFsuhxOqwfFg5d7q17sz",
    listenLabel: "Luister op Spotify",
    nameClass: "lineup-card-name-compact",
    schedule: {
      label: "18:40 - 19:30",
      startIso: "2026-09-05T18:40:00+02:00",
      endIso: "2026-09-05T19:30:00+02:00",
      startMinute: 160,
      duration: 50,
    },
    tagline: "RAUWE PUNKENERGIE",
    intro: "Een stevige portie rauwe punkenergie keert terug naar Herderrock.",
    description: [
      "Met Gino's Eyeball komt een stevige portie rauwe punkenergie terug naar Herderrock. Hun laatste passage is nu exact 20 jaar geleden op Herderrock Winter.",
      "We verwachten opnieuw een compromisloze liveshow vol energie, meebrulbare refreinen en pure punkrock die je onmogelijk stil laat staan.",
    ],
  },
  {
    slug: "tijs-vanneste-tangled-horns",
    name: "Tijs Vanneste & Tangled Horns",
    cardName: "Tijs Vanneste",
    meta: "& Tangled Horns",
    image: "/bands/tijs.webp",
    alt: "Tijs Vanneste & Tangled Horns op Herderrock 2026",
    listenUrl: "https://open.spotify.com/artist/1xrjqDGbzxV7867Vx0oUnH",
    listenLabel: "Luister op Spotify",
    scheduleMeta: "Live",
    nameClass: "lineup-card-name-compact",
    schedule: {
      label: "20:15 - 21:05",
      startIso: "2026-09-05T20:15:00+02:00",
      endIso: "2026-09-05T21:05:00+02:00",
      startMinute: 255,
      duration: 50,
    },
    tagline: "TATTOORIST - LIVE",
    intro: "Londen, Parijs en Berlijn vertaald naar krachtige soundscapes.",
    description: [
      "In Tattoorist - Live worden Londen, Parijs en Berlijn vertaald naar krachtige soundscapes, verhalen en beelden. Met hun rauwe live-energie brengen Tijs en Tangled Horns een intens muzikaal spektakel vol rock en Europese invloeden.",
      "Alsof dat nog niet genoeg is, staat hun nummer Paris is Burning momenteel in De Afrekening van Studio Brussel. Momenteel op jouw tv en radio, op 5 september ook op Herderrock.",
    ],
  },
  {
    slug: "customs",
    name: "Customs",
    meta: "Headliner",
    image: "/bands/customs.webp",
    alt: "Customs op Herderrock 2026",
    listenUrl: "https://open.spotify.com/artist/4btaBmsYkw6u8umye551rR",
    listenLabel: "Luister op Spotify",
    schedule: {
      label: "22:00 - 23:00",
      startIso: "2026-09-05T22:00:00+02:00",
      endIso: "2026-09-05T23:00:00+02:00",
      startMinute: 360,
      duration: 60,
    },
    tagline: "INDIE POSTPUNK UIT BELGIE",
    intro: "Customs sluit de live-avond af met scherpe Belgische indie en postpunk.",
    description: [
      "Customs is een Belgische indie/postpunkband uit de omgeving van Leuven, bekend van Engelstalige songs als Rex en Justine.",
      "Na hun comeback en nieuw werk bewijzen ze dat hun donkere, energieke sound nog altijd overeind blijft. Op Herderrock 2026 sluiten ze de live-avond af als headliner.",
    ],
  },
  {
    slug: "dnsbr",
    name: "DNSBR",
    meta: "Live",
    image: "/bands/dnsbr.webp",
    alt: "DNSBR op Herderrock 2026",
    listenUrl: "https://www.youtube.com/playlist?list=PLgJCG_1vzVjR5g7rYQmSP2w56ofa9r62t",
    listenLabel: "Luister op YouTube",
    schedule: {
      label: "23:50 - 01:00",
      startIso: "2026-09-05T23:50:00+02:00",
      endIso: "2026-09-06T01:00:00+02:00",
      startMinute: 470,
      duration: 70,
    },
    tagline: "CVRBND DNSBR",
    intro: "Een explosieve mix van tijdloze klassiekers en de vetste hedendaagse platen.",
    description: [
      "DNSBR brengt een explosieve mix van tijdloze klassiekers en de vetste hedendaagse platen. De naam zegt het zelf: het is 100% dansbaar!",
      "Verwacht een set vol energie waarbij stilstaan simpelweg geen optie is. De perfecte soundtrack om Herderrock 2026 volledig op z'n kop te zetten.",
      "Klaar om mee te brullen en dansen op 5 september?",
    ],
  },
  {
    slug: "fradri",
    name: "Fradri",
    meta: "DJ set",
    image: "/bands/fradri.webp",
    alt: "Fradri op Herderrock 2026",
    schedule: {
      label: "01:00 - 02:30",
      startIso: "2026-09-06T01:00:00+02:00",
      endIso: "2026-09-06T02:30:00+02:00",
      startMinute: 540,
      duration: 90,
    },
    tagline: "KNALDRANG",
    intro: "Fradri en DIBBS zorgen voor de afterparty na de live-optredens.",
    description: [
      "Na de spectaculaire live-optredens van onze reeds aangekondigde bands zal er nog een afterparty plaatsvinden waar onze DJ's het beste van zichzelf zullen geven. Wij vragen dan ook een daverend applaus voor FRADRI en DIBBS.",
      "Bereid je alvast voor op een avond vol energie, muziek, schaamteloze dancemoves en een subtiele kater de dag erna!",
    ],
  },
  {
    slug: "dibbs",
    name: "DIBBS",
    meta: "DJ set",
    image: "/bands/dibbs.webp",
    alt: "DIBBS op Herderrock 2026",
    schedule: {
      label: "02:30 - 04:00",
      startIso: "2026-09-06T02:30:00+02:00",
      endIso: "2026-09-06T04:00:00+02:00",
      startMinute: 630,
      duration: 90,
    },
    tagline: "KNALDRANG",
    intro: "DIBBS sluit de afterparty af in de vroege uurtjes.",
    description: [
      "Na de spectaculaire live-optredens van onze reeds aangekondigde bands zal er nog een afterparty plaatsvinden waar onze DJ's het beste van zichzelf zullen geven. Wij vragen dan ook een daverend applaus voor FRADRI en DIBBS.",
      "Bereid je alvast voor op een avond vol energie, muziek, schaamteloze dancemoves en een subtiele kater de dag erna!",
    ],
  },
];

export const scheduleTicks = [
  { label: "16:00", minute: 0 },
  { label: "17:00", minute: 60 },
  { label: "18:00", minute: 120 },
  { label: "19:00", minute: 180 },
  { label: "20:00", minute: 240 },
  { label: "21:00", minute: 300 },
  { label: "22:00", minute: 360 },
  { label: "23:00", minute: 420 },
  { label: "00:00", minute: 480 },
  { label: "01:00", minute: 540 },
  { label: "02:00", minute: 600 },
  { label: "03:00", minute: 660 },
  { label: "04:00", minute: 720 },
];

export const getLineupActBySlug = (slug: string) =>
  lineupActs.find((act) => act.slug === slug);
