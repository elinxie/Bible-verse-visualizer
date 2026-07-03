/* Hand-curated study data per chapter, keyed "bookNumber:chapter".
   Non-curated chapters fall back to the automatic pipeline (place/people/
   object detection + book-level era). Curated entries add: precise era,
   time of day for scenes, journey legs, scene hotspots, environment notes,
   cultural cards, grouped cross-references, and (for 1 Sam 28) a
   comparison of published analyses. */
window.BVV = window.BVV || {};

BVV.CURATED = {

/* ============================================================
   1 SAMUEL 28 — Saul and the Medium of En-dor
   ============================================================ */
"9:28": {
  era: {
    title: "ca. 1010 BC — the last night of King Saul",
    sub: "Late Iron Age I · Jezreel Valley · eve of the battle of Mount Gilboa",
    badges: ["Iron Age I", "United monarchy (ending)", "Philistine wars", "≈3,000 years ago"]
  },
  timeOfDay: "night",
  summary: "The Philistines mass at Shunem; Israel camps on Gilboa. God answers Saul by no channel — dreams, Urim, or prophets — so the king who once outlawed mediums disguises himself and walks through the night, around enemy lines, to ask a necromancer at En-dor to raise Samuel. Samuel comes — and repeats the verdict: tomorrow the kingdom, the battle, and Saul's life are forfeit.",
  focusPlace: "endor",
  places: [
    { id:"gilboa",  role:"Israel's camp — Saul's starting point (v. 4)" },
    { id:"shunem",  role:"Philistine war-camp on Moreh's SW slope (v. 4)" },
    { id:"moreh",   role:"The dark hill Saul's party skirted en route" },
    { id:"endor",   role:"The medium's village — Saul's destination (v. 7)" },
    { id:"ramah",   role:"Samuel's town and grave (v. 3)" },
    { id:"gath",    role:"Achish's royal city (vv. 1–2 backdrop)" },
    { id:"ziklag",  role:"David's base, far to the south (vv. 1–2)" },
    { id:"bethshan",role:"Philistine stronghold where Saul's body will hang (31:10)" }
  ],
  journey: [
    { from:"gilboa", to:"endor", via:"moreh",
      label:"Saul's night journey", km:11,
      note:"Roughly 7 mi / 11 km on foot in darkness, circling east around the hill of Moreh — with the Philistine camp at Shunem lying almost across the path. Commentators note the route itself measures Saul's desperation: the king risks capture merely to reach a forbidden séance." },
    { from:"shunem", to:"gilboa",
      label:"The armies face off", km:8,
      note:"The camps stared at each other across the eastern Jezreel Valley — Philistine chariotry needed the flat valley floor; Israel clung to the high ground of Gilboa." },
    { from:"ramah", to:"gilboa",
      label:"The absent prophet", km:75, dashed:true,
      note:"Samuel lies buried at Ramah, ~75 km south. His death (v. 3) is the chapter's opening fact: the word of God has gone silent in Israel." }
  ],
  hotspots: [
    { x:0.30, type:"person", label:"Saul, disguised", av:"king",
      desc:"The tallest man in Israel (1 Sam 9:2) stooping under a commoner's cloak. He has fasted all day and all night (v. 20). His disguise hides him from Philistine patrols — and from the woman whose trade he himself made a capital crime (v. 9)." },
    { x:0.44, type:"person", label:"The medium", av:"woman",
      desc:"She works in secret, having survived Saul's purge (v. 3). Her shriek at actually seeing Samuel (v. 12) is the story's hinge — whatever her séances usually produced, this was not it. At the sight she also sees through the disguise: only one man would ask for Samuel." },
    { x:0.58, type:"person", label:"Samuel — 'an old man wrapped in a robe'", av:"prophet",
      desc:"'I saw a god (elohim) coming up out of the earth' (v. 13) — ancient idiom for a spirit of the dead. Saul knows him by the robe (me'il), the very garment whose torn hem once signed the kingdom's tearing-away (15:27-28). The dead prophet's message is unchanged: obedience mattered; it is too late." },
    { x:0.18, type:"person", label:"Two servants", av:"traveler",
      desc:"The two men who cross enemy country with their king (v. 8) and witness what no Israelite was ever meant to seek. They help lift the collapsed Saul to the bed and urge him to eat (v. 23)." },
    { x:0.72, type:"object", label:"The fattened calf & unleavened bread",
      desc:"The medium's last kindness (vv. 24-25): festival-grade food, baked and butchered at midnight. Many commentators hear a grim echo of a last meal before execution — Saul eats, rises, and walks back into the night toward Gilboa." },
    { x:0.86, type:"object", label:"The ghost-pit ('ôb)",
      desc:"Necromancers in the ancient Near East 'opened' a pit for the dead to rise through, with offerings to draw them up — Hittite and Mesopotamian ritual texts describe the practice. Israel's law banned it absolutely (Deut 18:11); its scriptures give the dead no oracle role at all — which makes this chapter's real apparition so shocking." }
  ],
  environment: {
    chips: ["Night, before first light", "Late spring–summer campaign season", "Jezreel Valley — the land's great chariot corridor", "Basalt hill villages, spring-fed", "War camps: tents, watch-fires, pickets", "Iron Age I material culture"],
    text: "The eastern Jezreel Valley is the hinge of the land: the one flat corridor connecting the coast road to the Jordan and Damascus — which is why the Philistines, a coastal power with chariots, chose it for a decisive battle far north of their cities. Shunem and En-dor sit on opposite shoulders of the hill of Moreh; Gilboa rises directly south across the valley floor. An army on Gilboa drinks from the spring of Harod at its foot (1 Sam 29:1). En-dor's Iron Age I remains (surveyed on Moreh's north slope at Khirbet Ṣafṣafeh) suggest exactly what the story implies: a small agricultural village — flat-roofed houses of fieldstone and mudbrick around a spring — where an illegal practitioner could work unnoticed. Travel time for Saul's ~11 km detour: three-plus hours each way, in darkness, on a fast-day's empty stomach."
  },
  objectsExtra: ["urim","divination","robe","mantle","fattened-calf","unleavened","spear","teraphim"],
  peopleExtra: ["saul","samuel","medium-endor","david","achish","jonathan","abner"],
  culture: [
    { title:"Necromancy in the ancient Near East", icon:"🔮",
      text:"Consulting the dead was mainstream religion outside Israel: Mesopotamian texts prescribe rituals for raising a ghost (eṭemmu) through a pit, feeding it, and quieting it; Hittite rites dig 'ears' into the earth. Against this backdrop Israel's law is starkly countercultural — Deut 18:9-14 bans the whole divination industry and offers one alternative: 'a prophet like me... him you shall hear.' 1 Samuel 28 is that law dramatized: with the prophet dead and God silent, the king reaches for the forbidden technology, and it destroys him (1 Chr 10:13-14)." },
    { title:"'Gods coming up out of the earth'", icon:"🌑",
      text:"The woman says she sees 'elohim' — here not 'God' but, as in other Semitic texts, a spirit of the dead rising from the underworld (Sheol). Saul's follow-up question ('What does he look like?') and the answer — an old man in a robe — show Saul never sees Samuel himself; he trusts the woman's description and 'perceives' (v. 14). The narrative, however, speaks plainly: 'Samuel said to Saul...' (v. 15)." },
    { title:"The robe (me'il) — a costume with a history", icon:"🥻",
      text:"Samuel is identified by his robe. Hannah made the boy Samuel a little me'il every year (2:19); Saul tore Samuel's me'il and heard 'the LORD has torn the kingdom of Israel from you this day' (15:27-28); David cut the hem of Saul's own robe at En-gedi (24:4-5). When the robe appears at En-dor, the whole thread pulls tight: the torn kingdom is about to be handed over." },
    { title:"Saul's blocked channels: dreams, Urim, prophets", icon:"📵",
      text:"Verse 6 lists the three sanctioned means of inquiry — direct revelation in dreams, the priestly Urim, and the prophetic word — and closes each. The silence is not arbitrary: Saul slaughtered the Urim-bearing priesthood at Nob (ch. 22; one ephod escaped to David, 23:6), drove Samuel away by disobedience (ch. 15), and never repented. Commentators across traditions agree the chapter portrays judicial silence: God will not be consulted like a vending machine by a man in settled rebellion." },
    { title:"Philistines: who Saul was actually fighting", icon:"🛡️",
      text:"Aegean-origin 'Sea Peoples' settled on the south coast ca. 1175 BC in five lord-ruled cities (Ashdod, Ashkelon, Ekron, Gath, Gaza). Archaeology shows their distinct pottery, pork-heavy diet, and — per 1 Sam 13:19-22 — a metalworking monopoly that kept Israel under-armed. Pushing a massed army with chariots into the Jezreel Valley (far north of Philistia) aimed to cut Israel in two along its one great east–west corridor." },
    { title:"En-dor in earlier memory", icon:"🏺",
      text:"Psalm 83:9-10 remembers Endor as the place where Sisera's coalition 'perished' and 'became dung for the ground' — Deborah and Barak's victory happened on this same valley floor (Judg 4–5), and Gideon's spring-of-Harod victory over Midian (Judg 7) lies in direct view of Gilboa. Saul stands where past deliverances happened, receiving news that there will be none for him." },
    { title:"The kindness of the witch", icon:"🍞",
      text:"The narrative's strangest grace note: the outlawed woman is the only person in the chapter who shows Saul compassion — she risks her life for his oath, then insists the broken king eat before facing death. Readers from rabbinic to modern have noticed the reversal: the 'unclean' outsider practices hesed while heaven and court are silent." }
  ],
  crossRefs: [
    { group:"The law Saul broke", refs:[
      { r:"Deuteronomy 18:9-14", note:"the full ban on divination and necromancy — 'an abomination'" },
      { r:"Leviticus 19:31", note:"'Do not turn to mediums or necromancers'" },
      { r:"Leviticus 20:6", note:"God sets his face against the one who turns to mediums" },
      { r:"Leviticus 20:27", note:"the death penalty Saul once enforced (28:3, 9)" },
      { r:"Exodus 22:18", note:"the older statute behind Saul's purge" } ]},
    { group:"How Saul got here", refs:[
      { r:"1 Samuel 13:8-14", note:"first rejection — the unlawful sacrifice at Gilgal" },
      { r:"1 Samuel 15:22-29", note:"'rebellion is as the sin of divination' — the robe torn" },
      { r:"1 Samuel 16:14", note:"the Spirit departs; a harmful spirit torments" },
      { r:"1 Samuel 22:6-19", note:"the massacre of the priests at Nob — why the Urim is gone" },
      { r:"1 Samuel 23:6", note:"the surviving ephod is with David, not Saul" } ]},
    { group:"Fulfillment — 'tomorrow you will be with me'", refs:[
      { r:"1 Samuel 31:1-6", note:"the battle of Gilboa; Saul and his sons fall" },
      { r:"2 Samuel 1:17-27", note:"David's lament: 'you mountains of Gilboa, let there be no dew'" },
      { r:"1 Chronicles 10:13-14", note:"the inspired verdict: Saul died for his breach of faith — 'he consulted a medium'" } ]},
    { group:"The prophetic alternative", refs:[
      { r:"Isaiah 8:19-20", note:"'Should not a people inquire of their God? Why the dead on behalf of the living?'" },
      { r:"1 Samuel 3:1", note:"when the word of the LORD was rare — and how God broke that silence" },
      { r:"Proverbs 1:24-28", note:"wisdom's warning: they will call and not be answered" } ]},
    { group:"Meanwhile, David (vv. 1-2)", refs:[
      { r:"1 Samuel 27:1-7", note:"how David came to serve Achish at Ziklag" },
      { r:"1 Samuel 29", note:"the Philistine lords send David home — providence removes him from Gilboa" },
      { r:"1 Samuel 30", note:"David's own crisis and rescue at Ziklag, the same days" } ]},
    { group:"New Testament echoes", refs:[
      { r:"Luke 16:27-31", note:"no messenger from the dead will help those who ignore the prophets" },
      { r:"Hebrews 9:27", note:"appointed once to die, then judgment" },
      { r:"Luke 9:30-31", note:"the one sanctioned return of a dead prophet — Moses, at the Transfiguration" } ]}
  ],
  analyses: {
    intro: "How this visualization's reading compares with widely used ESV-based commentary and analysis of 1 Samuel 28:",
    consensus: [
      "Geography drives the drama: virtually all commentators (Enduring Word/Guzik, Precept Austin, BibleRef, ESV-style study notes) stress that En-dor lay a few miles from Shunem, so Saul's ~7-mile night march skirted the Philistine camp itself — the map above draws exactly that route.",
      "Verse 6's closed channels (dreams, Urim, prophets) are read as judicial, not arbitrary: Saul had killed the priests (ch. 22) and rejected the prophetic word (ch. 15). God's silence answers persistent rebellion, not honest seeking.",
      "The medium's scream (v. 12) shows genuine shock — the standard inference is that whatever her practice normally delivered, Samuel's actual appearance was beyond it, and it simultaneously exposed her royal client.",
      "Samuel gives no new guidance, only the old verdict plus a timestamp ('tomorrow'): the scene is a confirmation of chapter 15, not a second chance.",
      "The chapter is deliberately paired with chs. 27–30: while Saul seeks the dead in the north, David — despite his own compromises — is providentially extracted from the Philistine muster and rescues Ziklag. Two kings, two nights, two outcomes.",
      "1 Chronicles 10:13-14 is treated as the inspired commentary: consulting the medium is named among the causes of Saul's death."
    ],
    debated: [
      { tag:"a", title:"Was it really Samuel?", text:"Majority view (Guzik, Precept Austin, Knowing Scripture, DBTS, most ESV-tradition notes; also the ancient reading in Sirach 46:20): yes — God permitted the real Samuel to appear, which is why the text says plainly 'Samuel said to Saul' and why the prophecy comes true to the letter. Minority views: a demonic impersonation (some patristic and Reformation writers), or a fraud/psychological explanation (rationalist readings). This site's text follows the narrative's own voice — it was Samuel — while noting the alternatives here." },
      { tag:"b", title:"Did the woman have real power?", text:"Most analyses say no settled conclusion is required: the event happened by God's initiative, not her craft — her terror is the giveaway. A few argue she routinely trafficked with deceiving spirits and was startled only by the unusual mode. Either way, Scripture nowhere credits necromancy as a working channel to the dead." },
      { tag:"c", title:"Saul's final state", text:"Samuel's 'you and your sons shall be with me' is read by some (e.g., older Jewish and some Christian interpreters) as hope that Saul died within the covenant people; others take it merely as 'dead, in Sheol.' Commentators generally caution against building doctrine on the phrase." }
    ],
    sources: [
      { name:"Enduring Word (David Guzik), 1 Samuel 28", url:"https://enduringword.com/bible-commentary/1-samuel-28/" },
      { name:"Precept Austin — 1 Samuel 28 commentary collection", url:"https://www.preceptaustin.org/1-samuel-28-commentary" },
      { name:"BibleRef — What does 1 Samuel 28 mean?", url:"https://www.bibleref.com/1-Samuel/28/1-Samuel-chapter-28.html" },
      { name:"Knowing Scripture — Saul and the Medium at En Dor", url:"https://knowingscripture.com/articles/saul-and-the-medium-at-en-dor-1-samuel-28-3-25" },
      { name:"Detroit Baptist Theological Seminary — Samuel Speaks from the Dead", url:"https://dbts.edu/2022/08/18/dealing-with-a-difficult-passage-samuel-speaks-from-the-dead-in-1-samuel-28/" },
      { name:"Blue Letter Bible — Guzik study guide", url:"https://www.blueletterbible.org/Comm/guzik_david/StudyGuide_1Sa/1Sa_28.cfm" }
    ]
  }
},

/* ============================================================
   LUKE 2 — The Nativity & the boy in the temple
   ============================================================ */
"42:2": {
  era: {
    title: "ca. 6–4 BC — the census of Caesar Augustus",
    sub: "Roman client kingdom of Herod the Great · Second Temple period",
    badges: ["Roman period", "Reign of Augustus", "Herodian Judea"]
  },
  timeOfDay: "night",
  summary: "An imperial registration moves a Galilean carpenter and his betrothed ~150 km south to his ancestral Bethlehem, where the child is born and laid in a feeding trough; night-shift shepherds get the imperial-style proclamation ('good news... a Savior') from a very different empire.",
  focusPlace: "bethlehem",
  places: [
    { id:"nazareth", role:"Mary and Joseph's home — journey start (v. 4)" },
    { id:"bethlehem", role:"City of David — the birth (vv. 4-7)" },
    { id:"jerusalem", role:"Presentation in the temple (v. 22); Passover at twelve (v. 41)" }
  ],
  journey: [
    { from:"nazareth", to:"bethlehem", label:"The census road", km:150,
      note:"~150 km (4–5 days) south — down the Jordan valley or through Samaria — for a late-term mother on foot or donkey." },
    { from:"bethlehem", to:"jerusalem", label:"To the temple", km:9,
      note:"Forty days after the birth: a two-hour walk with the poor family's offering — two birds (v. 24; Lev 12:8)." }
  ],
  hotspots: [
    { x:0.35, type:"person", label:"Mary & the manger", av:"woman",
      desc:"First-century Bethlehem houses kept animals in a lower room or attached cave; the 'manger' is a stone or clay trough. 'No place in the inn' likely means the guest-room (kataluma) was full — the family sheltered where the animals fed." },
    { x:0.6, type:"person", label:"Shepherds on night watch", av:"shepherd",
      desc:"Low-status witnesses — the flocks near Bethlehem may have included animals destined for the temple altars. To them alone the angelic 'gospel' (euangelion — the word used for imperial birth announcements) is preached." }
  ],
  environment: {
    chips: ["Night fields", "Limestone hill country", "Cave-backed houses", "Roman census bureaucracy"],
    text: "Bethlehem sits on a terraced ridge amid barley fields (Ruth's fields — the family's own ancestress gleaned here) and sheep pasture sloping to the Judean wilderness. Rome taxed through periodic registrations; Luke anchors the birth to the reign of Augustus and the governorship of Quirinius, placing the eternal in checkable civic time."
  },
  culture: [
    { title:"Swaddling and the manger", icon:"🍼",
      text:"Swaddling — wrapping a newborn tight in cloth strips — was universal, careful care (contrast Ezek 16:4). The sign given the shepherds is deliberate incongruity: a swaddled baby (normal) in a feeding trough (not normal): a Savior findable by the poor." },
    { title:"The pigeon offering", icon:"🕊️",
      text:"Lev 12 allows the poor to substitute two doves/pigeons for a lamb at a mother's purification. Luke 2:24 quietly tells you the holy family's tax bracket." }
  ],
  crossRefs: [
    { group:"Prophecies in play", refs:[
      { r:"Micah 5:2", note:"Bethlehem Ephrathah — the ruler's origin" },
      { r:"Isaiah 9:6-7", note:"a child born, a son given" } ]},
    { group:"Echoes", refs:[
      { r:"1 Samuel 16:1-13", note:"the first anointed king found in Bethlehem" },
      { r:"Ruth 4:11-22", note:"Bethlehem's earlier story ends in David's family tree" } ]}
  ]
},

/* ============================================================
   ACTS 27 — Storm and shipwreck on the way to Rome
   ============================================================ */
"44:27": {
  era: {
    title: "AD 59–60 — Paul's voyage toward Caesar's court",
    sub: "Roman Empire under Nero · the Alexandrian grain fleet · sailing season closing",
    badges: ["Roman period", "Mediterranean sailing", "Grain fleet"]
  },
  timeOfDay: "storm",
  summary: "A centurion, his prisoners, and 276 souls ride a grain freighter into the autumn Mediterranean against all seamanship; two weeks of northeaster ('Euraquilo'), soundings at midnight, and a beach at Malta prove the prisoner the best sailor aboard.",
  focusPlace: "malta",
  places: [
    { id:"caesarea", role:"Departure under guard (v. 1)" },
    { id:"sidon", role:"First port — Julius lets Paul see friends (v. 3)" },
    { id:"myra", role:"Transfer to an Alexandrian grain ship (vv. 5-6)" },
    { id:"cnidus", role:"Beating into the wind (v. 7)" },
    { id:"crete", role:"Fair Havens — Paul's ignored warning (vv. 8-12)" },
    { id:"malta", role:"Shipwreck and rescue (27:39–28:1)" },
    { id:"syracuse", role:"Onward passage in spring (28:12)" },
    { id:"puteoli", role:"Landfall in Italy (28:13)" },
    { id:"rome", role:"Destination — 'and so we came to Rome' (28:14)" }
  ],
  journey: [
    { from:"caesarea", to:"sidon", label:"Coasting north", km:110, note:"A day's sail up the Phoenician coast." },
    { from:"sidon", to:"myra", label:"Under the lee of Cyprus", km:640, note:"Against contrary westerlies (v. 4)." },
    { from:"myra", to:"crete", label:"To Fair Havens", km:520, note:"Slow beating past Cnidus, then under Crete's lee (vv. 7-8)." },
    { from:"crete", to:"malta", label:"Fourteen nights adrift", km:900, note:"Driven across the Adria by the northeaster; soundings 20 then 15 fathoms; four anchors from the stern (vv. 14-29)." },
    { from:"malta", to:"puteoli", label:"Spring crossing", km:830, note:"Aboard the 'Twin Gods' via Syracuse and Rhegium (28:11-13)." },
    { from:"puteoli", to:"rome", label:"The Appian Way", km:230, note:"On foot; brothers meet Paul at the Forum of Appius and Three Taverns (28:15)." }
  ],
  hotspots: [
    { x:0.4, type:"person", label:"Paul the prisoner", av:"traveler",
      desc:"A prisoner on appeal to Caesar who ends up commanding the ship's morale: 'take heart... not a hair of your head will perish' (vv. 22-34). He has already survived three shipwrecks (2 Cor 11:25) — this is his fourth." },
    { x:0.6, type:"person", label:"Julius the centurion", av:"warrior",
      desc:"Augustan Cohort. Listens to pilot and owner over Paul at Fair Havens (v. 11); by v. 43 he is saving Paul's life against his own soldiers' plan." }
  ],
  environment: {
    chips: ["Autumn Mediterranean", "Grain freighter ~1,000 tons burden", "Euraquilo — the gregale northeaster", "276 aboard"],
    text: "Rome ate Egyptian wheat, moved by a state-chartered fleet of big merchantmen — Lucian describes one 55 m long. Sailing 'after the Fast' (Yom Kippur, v. 9) meant the dangerous season; open-sea navigation stopped by mid-November. Luke's seamanship vocabulary (undergirding the hull, soundings, foresail) is so precise that this chapter is a standard source for ancient sailing — James Smith's classic 'Voyage and Shipwreck of St. Paul' (1848) reconstructed the drift to Malta at ~36.5 miles/day, matching the fourteen days almost exactly."
  },
  culture: [
    { title:"St. Paul's Bay", icon:"⚓",
      text:"Maltese tradition and Smith's reconstruction place the wreck at a bay on Malta's northeast, where 'two seas meet' (v. 41) fits the channel behind an islet; Roman-era anchors have been recovered from the seabed at the traditional depth line." }
  ],
  crossRefs: [
    { group:"Paul and the sea", refs:[
      { r:"2 Corinthians 11:25-26", note:"three earlier shipwrecks, a night and day adrift" },
      { r:"Psalm 107:23-32", note:"the storm-and-deliverance pattern behind Luke's telling" },
      { r:"Jonah 1", note:"the counter-image: one prophet fleeing, one pressing on" } ]}
  ]
},

/* ============================================================
   JOHN 4 — The Samaritan woman at Jacob's well
   ============================================================ */
"43:4": {
  era: {
    title: "ca. AD 30 — Jesus crosses Samaria",
    sub: "Roman Judea/Samaria · Jacob's well below Mount Gerizim",
    badges: ["Roman period", "Samaritan–Jewish divide", "Second Temple period"]
  },
  timeOfDay: "day",
  summary: "Avoiding Judean scrutiny, Jesus takes the direct (and socially avoided) road through Samaria and, tired at noon by Jacob's well, opens the longest private conversation in the Gospels — with a Samaritan, a woman, and an outsider among her own people.",
  focusPlace: "shechem",
  places: [
    { id:"shechem", role:"Sychar and Jacob's well (vv. 5-6)" },
    { id:"jerusalem", role:"'You say Jerusalem is the place...' (v. 20)" },
    { id:"cana", role:"Onward to Galilee — the official's son healed (vv. 43-54)" },
    { id:"capernaum", role:"Where the sick boy lay (v. 46)" }
  ],
  journey: [
    { from:"jerusalem", to:"shechem", label:"The Samaria road", km:50, note:"Two days' walk north; strict Jews often detoured across the Jordan instead." },
    { from:"shechem", to:"cana", label:"On to Galilee", km:40, note:"'After the two days he departed' (v. 43)." }
  ],
  hotspots: [
    { x:0.45, type:"person", label:"The woman with the jar", av:"woman",
      desc:"Noon is the wrong hour for the water run — the well was a dawn/dusk social scene. Her solitary timing hints at her standing in town; her abandoned jar (v. 28) becomes the story's exclamation mark." },
    { x:0.6, type:"object", label:"Jacob's well",
      desc:"A genuine deep well (over 30 m; it survives today) rather than a spring — hence 'the well is deep, and you have nothing to draw with.' Patriarchal wells were title deeds in stone: 'our father Jacob gave us the well.'" }
  ],
  environment: {
    chips: ["Noon heat", "Mount Gerizim overhead", "Grain fields turning ('white for harvest')", "Samaritan territory"],
    text: "The well sits at the eastern mouth of the Shechem pass, with the Samaritans' holy mountain, Gerizim — their rival temple site, destroyed by the Hasmoneans in 128 BC — rising directly above the conversation about where to worship."
  },
  culture: [
    { title:"Jews and Samaritans", icon:"⚔️",
      text:"Samaritans held the Pentateuch alone, worshiped on Gerizim, and traced themselves to the northern tribes; Jews saw them as half-foreign schismatics (cf. 2 Kgs 17). 'No dealings' (v. 9) reflects purity practice — sharing a drinking vessel was the issue." }
  ],
  crossRefs: [
    { group:"Wells and betrothals", refs:[
      { r:"Genesis 24", note:"Rebekah — the type-scene this chapter deliberately evokes" },
      { r:"Genesis 29:1-14", note:"Jacob meets Rachel at a well" },
      { r:"Exodus 2:15-21", note:"Moses and Zipporah" } ]},
    { group:"Living water", refs:[
      { r:"Jeremiah 2:13", note:"the fountain of living waters forsaken" },
      { r:"John 7:37-39", note:"the water is the Spirit" } ]}
  ]
},

/* ============================================================
   EXODUS 14 — The sea crossing
   ============================================================ */
"2:14": {
  era: {
    title: "ca. 1446 BC (traditional) — the night Israel left Egypt for good",
    sub: "Late Bronze Age · New Kingdom Egypt · the eastern frontier lakes",
    badges: ["Late Bronze Age", "New Kingdom Egypt", "The Exodus"]
  },
  timeOfDay: "night",
  summary: "Trapped by design between Pharaoh's chariot corps and the sea, Israel watches the pillar of cloud move behind them; an all-night east wind opens the water, and by morning watch the greatest army on earth is gone.",
  focusPlace: "redsea",
  places: [
    { id:"rameses", role:"Departure point of the Exodus (12:37)" },
    { id:"redsea", role:"The crossing (vv. 21-29)" },
    { id:"egypt", role:"Pharaoh's pursuing court (vv. 5-9)" }
  ],
  journey: [
    { from:"rameses", to:"redsea", label:"Out of Goshen", km:100, note:"Via Succoth and Etham to the sea — deliberately 'turned back' (14:2) to bait the pursuit." }
  ],
  hotspots: [
    { x:0.5, type:"person", label:"Moses with staff outstretched", av:"prophet",
      desc:"'Fear not, stand firm, and see the salvation of the LORD' (v. 13) — then the command that answers panic: 'Tell the people of Israel to go forward' (v. 15)." },
    { x:0.7, type:"object", label:"Pharaoh's chariot corps",
      desc:"Six hundred chosen chariots plus the rest (v. 7) — the superweapon of the Late Bronze Age, useless with clogged wheels on a seabed (v. 25)." }
  ],
  environment: {
    chips: ["Night gale from the east", "Pillar of cloud and fire", "Marsh-lake frontier zone", "Chariot country"],
    text: "Egypt's eastern frontier was a chain of reedy lakes and canals (the 'yam suph' — sea of reeds — debate). Whatever the exact water, the narrative's physics are explicit: a driving east wind all night (v. 21), walls of water, and a morning collapse — nature commanded, not coincidence, since it starts and stops on Moses' hand." }
  ,
  culture: [
    { title:"The sea in Israel's memory", icon:"🌊",
      text:"The crossing becomes the OT's defining salvation event, sung immediately (Exod 15), rehearsed in psalms (77, 78, 106, 114), invoked by prophets (Isa 51:10), and treated in the NT as the type of baptism (1 Cor 10:1-2)." }
  ],
  crossRefs: [
    { group:"The event retold", refs:[
      { r:"Exodus 15:1-18", note:"the Song of the Sea — the oldest poetry in the Bible" },
      { r:"Psalm 114", note:"'the sea looked and fled'" },
      { r:"Isaiah 51:9-11", note:"the crossing as promise of a new exodus" },
      { r:"1 Corinthians 10:1-2", note:"'baptized into Moses in the cloud and in the sea'" } ]}
  ]
}
};
