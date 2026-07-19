/* Book metadata: bolls.life book ids (1-66, canonical order), aliases for
   reference parsing, and the approximate era of the EVENTS described
   (negative year = BC). Dates follow common conservative-study-Bible
   chronology; they set the visual period of scenes and labels. */
window.BVV = window.BVV || {};

BVV.BOOKS = [
  { n:1,  name:"Genesis",        al:["gen","ge","gn"], t:"ot", ch:50, era:{y1:-2100, y2:-1805, label:"Primeval history & the Patriarchs", sub:"Middle Bronze Age — Mesopotamia, Canaan, Egypt"} },
  { n:2,  name:"Exodus",         al:["exod","exo","ex"], t:"ot", ch:40, era:{y1:-1446, y2:-1445, label:"The Exodus from Egypt", sub:"Late Bronze Age — Egypt & Sinai (traditional dating ca. 1446 BC)"} },
  { n:3,  name:"Leviticus",      al:["lev","le","lv"], t:"ot", ch:27, era:{y1:-1445, y2:-1445, label:"Israel at Sinai", sub:"Late Bronze Age — the wilderness of Sinai"} },
  { n:4,  name:"Numbers",        al:["num","nu","nm","nb"], t:"ot", ch:36, era:{y1:-1445, y2:-1406, label:"The wilderness wanderings", sub:"Late Bronze Age — Sinai to the plains of Moab"} },
  { n:5,  name:"Deuteronomy",    al:["deut","deu","dt"], t:"ot", ch:34, era:{y1:-1406, y2:-1406, label:"Moses' farewell on the plains of Moab", sub:"Late Bronze Age — east of the Jordan"} },
  { n:6,  name:"Joshua",         al:["josh","jos","jsh"], t:"ot", ch:24, era:{y1:-1406, y2:-1380, label:"The conquest of Canaan", sub:"Late Bronze / early Iron Age transition"} },
  { n:7,  name:"Judges",         al:["judg","jdg","jg","jdgs"], t:"ot", ch:21, era:{y1:-1380, y2:-1050, label:"The age of the Judges", sub:"Iron Age I — tribal Israel, no king"} },
  { n:8,  name:"Ruth",           al:["rth","ru"], t:"ot", ch:4,  era:{y1:-1100, y2:-1100, label:"Days of the Judges", sub:"Iron Age I — Bethlehem & the fields of Moab"} },
  { n:9,  name:"1 Samuel",       al:["1 sam","1sam","1 sa","1sa","i samuel","1st samuel","first samuel"], t:"ot", ch:31, era:{y1:-1100, y2:-1010, label:"Samuel & the rise of the monarchy", sub:"Iron Age I — Saul's reign, ca. 1050–1010 BC"} },
  { n:10, name:"2 Samuel",       al:["2 sam","2sam","2 sa","2sa","ii samuel","2nd samuel","second samuel"], t:"ot", ch:24, era:{y1:-1010, y2:-970, label:"The reign of David", sub:"Iron Age IIA — the united monarchy"} },
  { n:11, name:"1 Kings",        al:["1 kgs","1kgs","1 ki","1ki","i kings","1st kings","first kings"], t:"ot", ch:22, era:{y1:-970, y2:-850, label:"Solomon & the divided kingdom", sub:"Iron Age II — Israel & Judah"} },
  { n:12, name:"2 Kings",        al:["2 kgs","2kgs","2 ki","2ki","ii kings","2nd kings","second kings"], t:"ot", ch:25, era:{y1:-850, y2:-560, label:"Decline, Assyria & Babylon", sub:"Iron Age II — to the fall of Jerusalem (586 BC)"} },
  { n:13, name:"1 Chronicles",   al:["1 chr","1chr","1 ch","1ch","i chronicles","1st chronicles","first chronicles"], t:"ot", ch:29, era:{y1:-1010, y2:-970, label:"The reign of David (Chronicler's view)", sub:"Iron Age IIA — the united monarchy"} },
  { n:14, name:"2 Chronicles",   al:["2 chr","2chr","2 ch","2ch","ii chronicles","2nd chronicles","second chronicles"], t:"ot", ch:36, era:{y1:-970, y2:-538, label:"Solomon to the exile", sub:"Iron Age II — kingdom of Judah"} },
  { n:15, name:"Ezra",           al:["ezr"], t:"ot", ch:10, era:{y1:-538, y2:-458, label:"Return from exile & rebuilding the temple", sub:"Persian period — Jerusalem under Achaemenid rule"} },
  { n:16, name:"Nehemiah",       al:["neh","ne"], t:"ot", ch:13, era:{y1:-445, y2:-420, label:"Rebuilding Jerusalem's walls", sub:"Persian period — Yehud province"} },
  { n:17, name:"Esther",         al:["est","esth","es"], t:"ot", ch:10, era:{y1:-483, y2:-473, label:"Jews in the Persian court", sub:"Persian period — Susa, reign of Xerxes I"} },
  { n:18, name:"Job",            al:["jb"], t:"ot", ch:42, era:{y1:-2000, y2:-1800, label:"The patriarchal world of Uz", sub:"Setting resembles the age of the Patriarchs"} },
  { n:19, name:"Psalms",         al:["ps","psa","psalm","pss","psm"], t:"ot", ch:150, era:{y1:-1010, y2:-450, label:"Israel's songbook", sub:"Chiefly the monarchy (David, ca. 1000 BC) through the exile"} },
  { n:20, name:"Proverbs",       al:["prov","pro","prv","pr"], t:"ot", ch:31, era:{y1:-950, y2:-700, label:"Wisdom of Solomon's court", sub:"Iron Age II — Jerusalem"} },
  { n:21, name:"Ecclesiastes",   al:["eccl","ecc","qoh","ec"], t:"ot", ch:12, era:{y1:-940, y2:-940, label:"Reflections of the Preacher", sub:"Iron Age II — Solomon's Jerusalem"} },
  { n:22, name:"Song of Solomon",al:["song","sos","song of songs","canticles","ss"], t:"ot", ch:8, era:{y1:-960, y2:-960, label:"Love poetry of the monarchy", sub:"Iron Age II — Jerusalem & the countryside"} },
  { n:23, name:"Isaiah",         al:["isa","is"], t:"ot", ch:66, era:{y1:-740, y2:-680, label:"Prophet to Judah under Assyria's shadow", sub:"Iron Age II — reigns of Uzziah to Hezekiah"} },
  { n:24, name:"Jeremiah",       al:["jer","je","jr"], t:"ot", ch:52, era:{y1:-627, y2:-580, label:"Prophet of Jerusalem's fall", sub:"Late Iron Age — Babylon rising"} },
  { n:25, name:"Lamentations",   al:["lam","la"], t:"ot", ch:5, era:{y1:-586, y2:-586, label:"Mourning the ruined city", sub:"Jerusalem destroyed by Babylon, 586 BC"} },
  { n:26, name:"Ezekiel",        al:["ezek","eze","ezk"], t:"ot", ch:48, era:{y1:-593, y2:-570, label:"Prophet among the exiles", sub:"Babylonia — the Chebar canal settlements"} },
  { n:27, name:"Daniel",         al:["dan","da","dn"], t:"ot", ch:12, era:{y1:-605, y2:-535, label:"Faithfulness in Babylon", sub:"Neo-Babylonian & early Persian courts"} },
  { n:28, name:"Hosea",          al:["hos","ho"], t:"ot", ch:14, era:{y1:-755, y2:-715, label:"Prophet to the northern kingdom", sub:"Iron Age II — last decades of Israel"} },
  { n:29, name:"Joel",           al:["jl","joe"], t:"ot", ch:3, era:{y1:-835, y2:-500, label:"The day of the LORD", sub:"Judah — date debated (9th–5th c. BC)"} },
  { n:30, name:"Amos",           al:["am"], t:"ot", ch:9, era:{y1:-760, y2:-750, label:"Shepherd-prophet of Tekoa", sub:"Iron Age II — prosperity & injustice in Israel"} },
  { n:31, name:"Obadiah",        al:["obad","ob"], t:"ot", ch:1, era:{y1:-586, y2:-580, label:"Judgment on Edom", sub:"After Jerusalem's fall"} },
  { n:32, name:"Jonah",          al:["jon","jnh"], t:"ot", ch:4, era:{y1:-780, y2:-760, label:"A prophet sent to Nineveh", sub:"Iron Age II — Assyria's great city"} },
  { n:33, name:"Micah",          al:["mic","mc"], t:"ot", ch:7, era:{y1:-735, y2:-700, label:"Prophet of village Judah", sub:"Iron Age II — Assyrian crisis"} },
  { n:34, name:"Nahum",          al:["nah","na"], t:"ot", ch:3, era:{y1:-650, y2:-612, label:"Nineveh's doom foretold", sub:"Late Assyrian empire"} },
  { n:35, name:"Habakkuk",       al:["hab","hb"], t:"ot", ch:3, era:{y1:-607, y2:-605, label:"Questioning God as Babylon rises", sub:"Late Iron Age Judah"} },
  { n:36, name:"Zephaniah",      al:["zeph","zep","zp"], t:"ot", ch:3, era:{y1:-630, y2:-625, label:"The day of the LORD near", sub:"Reign of Josiah"} },
  { n:37, name:"Haggai",         al:["hag","hg"], t:"ot", ch:2, era:{y1:-520, y2:-520, label:"Rebuild the temple!", sub:"Persian period Jerusalem"} },
  { n:38, name:"Zechariah",      al:["zech","zec","zc"], t:"ot", ch:14, era:{y1:-520, y2:-480, label:"Visions of restoration", sub:"Persian period Jerusalem"} },
  { n:39, name:"Malachi",        al:["mal","ml"], t:"ot", ch:4, era:{y1:-430, y2:-430, label:"Last word of the prophets", sub:"Persian period Jerusalem"} },
  { n:40, name:"Matthew",        al:["matt","mat","mt"], t:"nt", ch:28, era:{y1:-5, y2:33, label:"The life of Jesus the Messiah", sub:"Roman Judea & Galilee — Second Temple period"} },
  { n:41, name:"Mark",           al:["mrk","mk","mr"], t:"nt", ch:16, era:{y1:27, y2:33, label:"The ministry of Jesus", sub:"Roman Galilee & Judea"} },
  { n:42, name:"Luke",           al:["luk","lk"], t:"nt", ch:24, era:{y1:-5, y2:33, label:"The life of Jesus", sub:"Roman Judea & Galilee — reigns of Augustus & Tiberius"} },
  { n:43, name:"John",           al:["jhn","jn","joh"], t:"nt", ch:21, era:{y1:27, y2:33, label:"The ministry of Jesus", sub:"Roman Judea, Samaria & Galilee"} },
  { n:44, name:"Acts",           al:["act","ac"], t:"nt", ch:28, era:{y1:30, y2:62, label:"The gospel goes to the nations", sub:"Roman Empire — Jerusalem to Rome"} },
  { n:45, name:"Romans",         al:["rom","ro","rm"], t:"nt", ch:16, era:{y1:57, y2:57, label:"Paul writes to Rome", sub:"Written from Corinth, ca. AD 57"} },
  { n:46, name:"1 Corinthians",  al:["1 cor","1cor","1 co","1co","i corinthians","1st corinthians","first corinthians"], t:"nt", ch:16, era:{y1:55, y2:55, label:"Letter to a port-city church", sub:"Roman Corinth, ca. AD 55"} },
  { n:47, name:"2 Corinthians",  al:["2 cor","2cor","2 co","2co","ii corinthians","2nd corinthians","second corinthians"], t:"nt", ch:13, era:{y1:56, y2:56, label:"Paul defends his ministry", sub:"Written from Macedonia, ca. AD 56"} },
  { n:48, name:"Galatians",      al:["gal","ga"], t:"nt", ch:6, era:{y1:48, y2:48, label:"Letter to the Galatian churches", sub:"Roman Asia Minor, ca. AD 48"} },
  { n:49, name:"Ephesians",      al:["eph","ephes"], t:"nt", ch:6, era:{y1:60, y2:62, label:"Letter from prison to Ephesus", sub:"Roman Asia — written from Rome"} },
  { n:50, name:"Philippians",    al:["phil","php","pp"], t:"nt", ch:4, era:{y1:61, y2:62, label:"Joy from a Roman prison", sub:"To the colony of Philippi"} },
  { n:51, name:"Colossians",     al:["col","co"], t:"nt", ch:4, era:{y1:60, y2:62, label:"Christ supreme over all", sub:"To the Lycus valley, Roman Asia"} },
  { n:52, name:"1 Thessalonians",al:["1 thess","1thess","1 th","1th","i thessalonians","1st thessalonians","first thessalonians"], t:"nt", ch:5, era:{y1:51, y2:51, label:"To a young Macedonian church", sub:"Roman Thessalonica, ca. AD 51"} },
  { n:53, name:"2 Thessalonians",al:["2 thess","2thess","2 th","2th","ii thessalonians","2nd thessalonians","second thessalonians"], t:"nt", ch:3, era:{y1:51, y2:52, label:"Standing firm until He comes", sub:"Roman Thessalonica"} },
  { n:54, name:"1 Timothy",      al:["1 tim","1tim","1 ti","1ti","i timothy","1st timothy","first timothy"], t:"nt", ch:6, era:{y1:63, y2:65, label:"Instructions for the church at Ephesus", sub:"Roman Asia"} },
  { n:55, name:"2 Timothy",      al:["2 tim","2tim","2 ti","2ti","ii timothy","2nd timothy","second timothy"], t:"nt", ch:4, era:{y1:66, y2:67, label:"Paul's final letter", sub:"Written from Roman imprisonment"} },
  { n:56, name:"Titus",          al:["tit","ti"], t:"nt", ch:3, era:{y1:63, y2:65, label:"Order the churches of Crete", sub:"Roman Crete"} },
  { n:57, name:"Philemon",       al:["phlm","phm","pm"], t:"nt", ch:1, era:{y1:60, y2:62, label:"A runaway slave returns a brother", sub:"Colossae, Roman Asia"} },
  { n:58, name:"Hebrews",        al:["heb"], t:"nt", ch:13, era:{y1:64, y2:68, label:"Christ better than the old order", sub:"Before the temple's fall (AD 70)"} },
  { n:59, name:"James",          al:["jas","jm"], t:"nt", ch:5, era:{y1:44, y2:49, label:"Wisdom for scattered believers", sub:"Early church, Judea & diaspora"} },
  { n:60, name:"1 Peter",        al:["1 pet","1pet","1 pe","1pe","i peter","1st peter","first peter"], t:"nt", ch:5, era:{y1:62, y2:64, label:"Hope for exiles in Asia Minor", sub:"Roman Anatolia"} },
  { n:61, name:"2 Peter",        al:["2 pet","2pet","2 pe","2pe","ii peter","2nd peter","second peter"], t:"nt", ch:3, era:{y1:64, y2:68, label:"Remember and stand firm", sub:"Roman Empire"} },
  { n:62, name:"1 John",         al:["1 jn","1jn","1 john","i john","1st john","first john","1 joh"], t:"nt", ch:5, era:{y1:85, y2:95, label:"Walking in the light", sub:"Ephesus & Roman Asia"} },
  { n:63, name:"2 John",         al:["2 jn","2jn","ii john","2nd john","second john","2 joh"], t:"nt", ch:1, era:{y1:85, y2:95, label:"Truth and love", sub:"Roman Asia"} },
  { n:64, name:"3 John",         al:["3 jn","3jn","iii john","3rd john","third john","3 joh"], t:"nt", ch:1, era:{y1:85, y2:95, label:"Hospitality for the truth", sub:"Roman Asia"} },
  { n:65, name:"Jude",           al:["jud","jde"], t:"nt", ch:1, era:{y1:65, y2:68, label:"Contend for the faith", sub:"Early church"} },
  { n:66, name:"Revelation",     al:["rev","re","apocalypse","revelations"], t:"nt", ch:22, era:{y1:95, y2:96, label:"Visions from Patmos", sub:"Roman Asia under Domitian"} }
];

/* Map a year (negative = BC) to an architectural / material-culture period
   used by the scene renderer and labels. */
BVV.periodOf = function (year) {
  if (year < -1200) return { id:"bronze",      label:"Bronze Age" };
  if (year < -539)  return { id:"iron",        label:"Iron Age" };
  if (year < -332)  return { id:"persian",     label:"Persian period" };
  if (year < -63)   return { id:"hellenistic", label:"Hellenistic period" };
  return               { id:"roman",       label:"Roman period" };
};

BVV.formatYear = function (y) {
  return y < 0 ? Math.abs(y) + " BC" : "AD " + y;
};

BVV.findBook = function (raw) {
  const q = raw.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();
  for (const b of BVV.BOOKS) {
    if (b.name.toLowerCase() === q) return b;
    if (b.al.includes(q)) return b;
  }
  // prefix match on full name (e.g. "1 samuel" typed as "1 samue")
  for (const b of BVV.BOOKS) {
    if (b.name.toLowerCase().startsWith(q) && q.length >= 3) return b;
  }
  return null;
};
