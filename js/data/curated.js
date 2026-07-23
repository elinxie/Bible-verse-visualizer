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
   1 SAMUEL 17 — David and Goliath
   ============================================================ */
"9:17": {
  era: {
    title: "ca. 1025–1020 BC — David fells the Philistine champion",
    sub: "Iron Age I · Valley of Elah · Saul's reign, ongoing Philistine wars",
    badges: ["Iron Age I", "United monarchy", "Philistine wars", "≈3,000 years ago"]
  },
  timeOfDay: "day",
  summary: "Twice a day for forty days a nine-foot champion has dared any Israelite to single combat, and the whole army has flinched. A shepherd boy sent from Bethlehem with bread and cheeses for his brothers hears the taunt, refuses Saul's armor as unfamiliar weight, and goes down to the brook for five smooth stones instead — 'the battle is the LORD's' (v. 47), and one sling stone ends it.",
  focusPlace: "elah",
  places: [
    { id:"elah",      role:"The battle line and killing ground (vv. 2-3, 49)" },
    { id:"socoh",     role:"Southern anchor of the Philistine camp (v. 1)" },
    { id:"azekah",    role:"Northern anchor of the Philistine camp (v. 1)" },
    { id:"gath",      role:"Goliath's home city — and one terminus of the rout (vv. 4, 52)" },
    { id:"ekron",     role:"The rout's other terminus, where the wounded fell (v. 52)" },
    { id:"bethlehem", role:"David's home — sent with provisions for his brothers (vv. 12-15)" },
    { id:"philistia", role:"The massed army's homeland, drawn up for war (v. 1)" },
    { id:"jerusalem", role:"Where David later brought Goliath's head (v. 54) — still Jebusite-held at this date; see Analyses (c)" }
  ],
  journey: [
    { from:"bethlehem", to:"elah",
      label:"David's supply run", km:20,
      note:"About 20 km on foot carrying bread, roasted grain and ten cheeses for his brothers' captain (vv. 17-20) — an errand that put a shepherd boy on a battlefield at exactly the right hour." },
    { from:"elah", to:"gath",
      label:"The rout, west toward Gath", km:15,
      note:"Once the champion fell, Israel's line surged forward; the fleeing Philistines scattered along the Shaaraim road, with wounded falling as far as Gath (v. 52)." },
    { from:"elah", to:"ekron",
      label:"The rout, north toward Ekron", km:16,
      note:"A second stream of the rout ran toward Ekron, the Philistine city nearest the valley's mouth (v. 52)." },
    { from:"elah", to:"jerusalem",
      label:"Goliath's head", km:35, dashed:true,
      note:"David 'brought the head... to Jerusalem' (v. 54) — read by most commentators as a proleptic note, since the city was still held by the Jebusites until David's later conquest (2 Sam 5:6-9); see Analyses (c)." }
  ],
  hotspots: [
    { x:0.14, type:"person", label:"David — sling and shepherd's staff", av:"shepherd",
      desc:"Ruddy, youngest of eight, unused to Saul's armor and sword ('I cannot go in these, for I am not used to them,' v. 39). He carries only his staff, his sling, and a shepherd's bag — the tools that already killed a lion and a bear (vv. 34-36)." },
    { x:0.34, type:"person", label:"Goliath of Gath, in scale armor", av:"warrior",
      desc:"A champion (ish habbenayim, 'man of the between-space') fronting the whole army for forty straight days (vv. 8-16). Bronze helmet, coat of scale armor, greaves, and a javelin slung on his back, with a shield-bearer walking ahead of him (v. 7)." },
    { x:0.52, type:"person", label:"Saul, in the camp", av:"king",
      desc:"The king who is himself a head taller than any Israelite (9:2) has not answered the challenge in forty days. He offers David his own armor and bronze helmet (v. 38) — a gift David politely sets aside." },
    { x:0.68, type:"person", label:"Eliab, the angry eldest brother", av:"warrior",
      desc:"Serving in Saul's line (v. 13), Eliab turns on David for merely asking about the challenge: 'I know your presumption and the evil of your heart' (v. 28) — sibling friction that echoes 1 Sam 16:6-7, where the LORD had already passed over this same eldest brother." },
    { x:0.80, type:"object", label:"Five smooth stones from the brook",
      desc:"David chooses five water-rounded stones from the wadi bed (v. 40) — likely limestone or flint, naturally shaped by the winter torrent, the kind a trained slinger could place with rifle-shot accuracy." },
    { x:0.90, type:"object", label:"Goliath's sword",
      desc:"David has no sword of his own, so he draws Goliath's to finish him (v. 51) — the same sword that resurfaces years later, wrapped in cloth behind the ephod at Nob, when David asks the priest Ahimelech for a weapon (1 Sam 21:9)." }
  ],
  environment: {
    chips: ["Broad daylight, forty-day standoff", "Iron Age I · Shephelah buffer zone", "Two camps on facing ridges", "A wadi of water-rounded stones", "Barley/wheat terraces", "Bronze vs. sling-and-staff"],
    text: "The Elah Valley is a broad wadi cutting through the Shephelah, the low hill country that buffers the Philistine coastal plain from the Judean highlands — contested ground for centuries because whoever holds it controls the roads inland. The Philistines camped on the ridge near Socoh and Azekah; Israel held the opposite slope, with 'a valley between them' (v. 3) — likely only a few hundred meters of open ground, floored with the smooth, fist-sized stones a winter torrent leaves behind. Surveys of the valley and the neighboring tells (Azekah, Socoh, Gath at Tell es-Safi) match the text's geography closely: this is a real, mappable battlefield, not a symbolic backdrop."
  },
  objectsExtra: ["sling","spear","sword","armor"],
  peopleExtra: ["david","goliath","saul"],
  culture: [
    { title:"Single combat in the ancient world", icon:"🤺",
      text:"Champions fighting to decide (or open) a battle appear across the ancient Near East and beyond — from Egyptian and Hittite accounts to the Iliad's dueling heroes. Goliath's proposal (v. 8-9) follows the pattern exactly: 'choose a man... let him fight me... whichever wins, that side rules.' What's unusual in this story is the outcome — the underdog with no armor beats the professional in front of two watching armies." },
    { title:"The sling: a real ancient weapon, not a toy", icon:"🪨",
      text:"Slings were standard military kit — Judges 20:16 describes 700 left-handed Benjaminite slingers who 'could sling a stone at a hair and not miss.' Experimental archaeology and excavated lead/stone sling bullets suggest release speeds in the range of roughly 30-35 m/s, with skilled slingers effective well past 100 meters — closing the 'unarmed boy vs. armored giant' gap considerably more than popular retellings suggest." },
    { title:"Goliath's panoply, itemized", icon:"🛡️",
      text:"The text lists gear like an inventory: bronze helmet, scale-armor coat weighing '5,000 shekels of bronze' (roughly 57 kg / 125 lb by common shekel-weight estimates), bronze greaves, a bronze javelin slung on his back, and a spear 'like a weaver's beam,' its iron head alone about 600 shekels (some 6-7 kg). Scholars have long noted Aegean-style parallels — greaves and a slung javelin are better attested in Mycenaean/early Greek than in standard Canaanite equipment — consistent with the Philistines' Aegean origins as one of the Sea Peoples groups." },
    { title:"'Six cubits and a span' — a height variant", icon:"📏",
      text:"The Hebrew (Masoretic) text gives Goliath's height as six cubits and a span, about 2.9 m (9'9\"). The Septuagint's oldest manuscripts and the Dead Sea Scroll fragment 4QSamuel-a instead read four cubits and a span, about 2.0 m (6'9\") — still a giant, but a more ordinary one. Many modern text critics judge the shorter reading original, suggesting the '6' crept in from '600' two verses later (an easy copying slip); others defend the Masoretic number. Either figure leaves Goliath extraordinary for the period; the manuscripts differ on degree, not on the basic claim." },
    { title:"Why five stones?", icon:"🔢",
      text:"David gathers five stones though he only needs one (v. 40, 49). Guesses range from simple prudence — a trained slinger keeps spares in case of a miss or a second challenger — to a later tradition (echoed by some readers of 2 Sam 21:15-22, where four more Philistine giants 'descended from the giants' at Gath) that David anticipated Goliath's kin joining the fight. Scripture doesn't say which; both are presented as views, not settled fact." },
    { title:"'The battle is the LORD's'", icon:"⚔️",
      text:"The chapter's own center of gravity, by its own telling, isn't marksmanship: David's speech to Goliath (vv. 45-47) explicitly reframes the duel as a demonstration 'that all the earth may know that there is a God in Israel' and 'that the LORD saves not with sword and spear.' Commentators across traditions treat this covenant claim, not the sling's mechanics, as the passage's theological point." }
  ],
  crossRefs: [
    { group:"Backstory", refs:[
      { r:"1 Samuel 16:1-13", note:"Samuel anoints David at Bethlehem, passing over his older brothers" },
      { r:"1 Samuel 16:14-23", note:"David already serves Saul as court harpist — how the two men may have already met" } ]},
    { group:"The champion's line", refs:[
      { r:"2 Samuel 21:15-22", note:"four more Philistine giants 'descended from the giants' at Gath, killed by David's men" },
      { r:"1 Chronicles 20:5", note:"parallel account naming Elhanan's kill as Goliath's brother Lahmi — see Analyses (b)" } ]},
    { group:"David remembers", refs:[
      { r:"Psalm 144:1", note:"'Blessed be the LORD, my rock, who trains my hands for war' — widely linked to this fight" },
      { r:"Psalm 151 (LXX/Dead Sea Scrolls tradition)", note:"an extra-canonical psalm explicitly retelling the Goliath duel in David's voice; not in the Hebrew or Protestant canon" } ]},
    { group:"Faith echoes", refs:[
      { r:"Hebrews 11:32-34", note:"the roll call of faith that 'became mighty in war, put foreign armies to flight'" } ]},
    { group:"Aftermath", refs:[
      { r:"1 Samuel 18:6-9", note:"the women's song — 'Saul has struck down his thousands, David his ten thousands' — the jealousy that follows" },
      { r:"1 Samuel 21:9", note:"Goliath's sword, kept behind the ephod at Nob, given to the fugitive David" } ]}
  ],
  analyses: {
    intro: "How this visualization's reading compares with widely used ESV-based commentary and analysis of 1 Samuel 17:",
    consensus: [
      "The Elah Valley's geography is treated as historical and mappable: surveys and excavations at Tel Azekah, Socoh, and Gath (Tell es-Safi) line up with the chapter's 'camp between Socoh and Azekah' and the stream in the valley floor.",
      "The champion-combat setup (vv. 8-10) is read against a well-attested ancient Near Eastern and Homeric backdrop of representative single combat deciding or opening a battle.",
      "Commentators consistently locate the chapter's theological center in David's own words (vv. 45-47) — the LORD's deliverance, not David's skill — rather than in the mechanics of the sling.",
      "The Masoretic/Septuagint height discrepancy (six cubits vs. four cubits and a span) is acknowledged in most modern study-Bible and commentary treatments as a genuine textual variant, not a modern skeptical invention."
    ],
    debated: [
      { tag:"a", title:"How tall was Goliath?", text:"The Hebrew (Masoretic) text reads six cubits and a span (~2.9 m); the oldest Septuagint manuscripts and the Qumran fragment 4QSam-a read four cubits and a span (~2.0 m). Many textual critics favor the shorter figure as original, proposing the '6' was drawn in from the '600 shekels' two verses later; others defend the traditional Hebrew number as original and see the Greek/Qumran reading as a later 'toning down.' Both readings describe a man far larger than his opponents; this site follows the traditional six-cubit figure in its era note while flagging the variant here." },
      { tag:"b", title:"Who killed Goliath — David or Elhanan?", text:"2 Samuel 21:19 (Hebrew text) reads 'Elhanan... struck down Goliath the Gittite,' while 1 Chronicles 20:5 names Elhanan's victim as 'Lahmi the brother of Goliath.' The standard harmonization, held across a wide range of conservative and critical scholarship alike, treats 2 Samuel 21:19 as containing an early copying slip (a dropped 'brother of,' with 'Bethlehemite' and 'the shaft of his spear was like a weaver's beam' both plausibly duplicated from the David narrative) and 1 Chronicles as preserving the more original wording. A minority view treats 'Goliath' as a recurring champion's title rather than one man's unique name. This site follows 1 Samuel 17: David killed Goliath." },
      { tag:"c", title:"Why does verse 54 send the head to Jerusalem?", text:"At this point in the story Jerusalem was still a Jebusite stronghold — David does not capture it until years later, as king (2 Sam 5:6-9). Most commentators read v. 54 as a proleptic, editorial notice (the narrator writing from a later vantage point when Jerusalem was David's city), while a few suggest a temporary or symbolic 'bringing' rather than deposit in an already-Israelite city. The verse is not treated as evidence against an early conquest date for Jerusalem either way." }
    ],
    sources: [
      { name:"Enduring Word (David Guzik), 1 Samuel 17", url:"https://enduringword.com/bible-commentary/1-samuel-17/" },
      { name:"Precept Austin — 1 Samuel 17 commentary collection", url:"https://www.preceptaustin.org/1-samuel-17-commentary" },
      { name:"BibleRef — What does 1 Samuel 17 mean?", url:"https://www.bibleref.com/1-Samuel/17/1-Samuel-chapter-17.html" }
    ]
  }
},

/* ============================================================
   1 SAMUEL 31 — The death of Saul on Mount Gilboa
   ============================================================ */
"9:31": {
  era: {
    title: "ca. 1010 BC — the death of Saul on Mount Gilboa",
    sub: "Late Iron Age I · Jezreel Valley · the day after the séance at En-dor",
    badges: ["Iron Age I", "United monarchy (ending)", "Philistine wars", "≈3,000 years ago"]
  },
  timeOfDay: "dusk",
  summary: "Samuel's word from the night before comes due. Israel's line breaks on the slopes of Gilboa, three of Saul's sons fall including Jonathan, and the wounded king — rather than be captured and mocked by the Philistines — falls on his own sword. By the next day his body hangs on the wall of Beth-shan and his armor is dedicated in a Philistine temple, until the men of Jabesh-gilead, remembering an old debt, march all night to bring him home.",
  focusPlace: "gilboa",
  places: [
    { id:"gilboa",         role:"Israel's line breaks on the mountain's slopes (v. 1)" },
    { id:"jezreel-spring", role:"The overrun Israelite camp at the mountain's foot" },
    { id:"bethshan",       role:"Saul's body displayed on the city wall; his armor sent to the temple (vv. 9-10)" },
    { id:"jabesh",         role:"Jabesh-gilead's valiant men march by night to recover the bodies (vv. 11-13)" },
    { id:"philistia",      role:"The victorious army, stripping the Israelite dead (v. 8)" }
  ],
  journey: [
    { from:"gilboa", to:"bethshan",
      label:"The Philistines' trophy procession", km:13,
      note:"Saul's armor to the temple, his body to the city wall — the victors parade their prize through their own towns, 'to carry the good news to their idols and to the people' (v. 9), before fastening what remains to Beth-shan." },
    { from:"jabesh", to:"bethshan",
      label:"Jabesh-gilead's night march", km:15, dashed:true,
      note:"'All the valiant men arose and walked all night' (v. 12) across the Jordan to strip the bodies from the wall — repaying Saul for the relief he brought them as a brand-new king, decades earlier (1 Sam 11)." }
  ],
  hotspots: [
    { x:0.22, type:"person", label:"Saul falls on his sword", av:"king",
      desc:"Badly wounded by archers (v. 3), Saul orders his armor-bearer to finish him rather than let 'these uncircumcised' abuse him. When the armor-bearer refuses, Saul falls on his own sword — and the terrified armor-bearer follows him in death (vv. 4-6)." },
    { x:0.42, type:"person", label:"Jonathan's fall", av:"warrior",
      desc:"Saul's heir dies alongside two brothers, Abinadab and Malchi-shua, before his father does (v. 2) — the friend who once gave David his own robe and armor (18:4), gone in the same rout that ends the dynasty's first line." },
    { x:0.66, type:"person", label:"The men of Jabesh-gilead, by night", av:"traveler",
      desc:"A generation earlier, Saul's first act as king was force-marching relief to a besieged Jabesh-gilead (1 Sam 11:1-11). Now its men repay him — a night raid across the Jordan to take his body off a pagan wall." },
    { x:0.82, type:"object", label:"Saul's armor, sent to the temple of Ashtaroth",
      desc:"1 Samuel 31:10 places the armor in 'the temple of Ashtaroth'; the parallel account in 1 Chronicles 10:10 has the armor in 'the temple of their gods' and the head fastened in 'the temple of Dagon' — trophies of a defeated king's god dedicated to the victors' own." }
  ],
  environment: {
    chips: ["Dusk, the day after En-dor", "Rout flows uphill off the valley floor", "Chariot country giving way to slopes", "Vultures over the stripped dead (v. 8)", "Late Iron Age I material culture", "Philistine victory rites"],
    text: "The battle plays out exactly where 1 Samuel 28 and 29 staged it: Philistine chariotry needed the flat floor of the Jezreel Valley, so Israel had taken the high ground of Gilboa — a defensible ridge, but one with no room left to retreat once the line broke. As dusk falls the rout runs the wrong way for Israel, uphill and inward, penning the wounded against the mountain rather than opening an escape route to the Jordan. 'The next day' (v. 8) the victors return to strip the dead — standard ancient battlefield practice — and find the king's own body among them."
  },
  objectsExtra: ["sword","armor"],
  peopleExtra: ["saul","jonathan","abner"],
  culture: [
    { title:"Trophy display and temple dedication", icon:"🏛️",
      text:"Displaying a defeated enemy's body and dedicating his armor in a god's temple was standard ancient Near Eastern victory ritual — a way of crediting the win to the god, not just the army. 1 Samuel 31:10 names Ashtaroth's temple for the armor; 1 Chronicles 10:10 has the head go to Dagon's temple — the two accounts may simply record different trophies going to different shrines rather than truly conflicting." },
    { title:"Why Jabesh-gilead owed Saul", icon:"🤝",
      text:"1 Samuel 11 tells how Nahash the Ammonite besieged Jabesh-gilead and offered terms only by gouging out every right eye; Saul's forced march and relief of the town was his very first act as king, the victory that confirmed his kingship at Gilgal. Three decades on, that debt is why Jabesh's men risk a night raid for his corpse." },
    { title:"Burial by fire — an unusual step", icon:"🔥",
      text:"Verse 12 has the men of Jabesh burn the bodies before burying the bones under the tamarisk tree there — cremation is otherwise rare to absent in normal Israelite burial practice. Commentators generally read it as an emergency measure on already-mutilated, decomposing remains rather than standard funerary custom; the bones are later moved and properly reburied by David in the family tomb (2 Sam 21:12-14)." },
    { title:"David's lament — the chapter's canonical answer", icon:"🎶",
      text:"2 Samuel 1:19-27, David's dirge 'How the mighty have fallen,' functions as Scripture's own commentary on this scene — cursing the very mountains of Gilboa ('let there be no dew or rain upon you') and praising both Saul and Jonathan without triumphalism, even though Saul had hunted David for years." }
  ],
  crossRefs: [
    { group:"Foretold", refs:[
      { r:"1 Samuel 28:16-19", note:"Samuel's word at En-dor the night before: 'tomorrow you and your sons shall be with me'" },
      { r:"1 Samuel 15:26-28", note:"the rejection that set this end in motion" } ]},
    { group:"Parallel account", refs:[
      { r:"1 Chronicles 10:1-14", note:"the Chronicler's retelling, closing with the inspired verdict on why Saul died" } ]},
    { group:"Aftermath", refs:[
      { r:"2 Samuel 1", note:"the Amalekite's report and David's lament, 'How the mighty have fallen'" },
      { r:"2 Samuel 21:12-14", note:"David retrieves the bones and gives Saul and Jonathan proper burial" },
      { r:"2 Samuel 2:4-7", note:"David sends thanks to Jabesh-gilead for their loyalty to Saul" } ]},
    { group:"First loyalty", refs:[
      { r:"1 Samuel 11:1-11", note:"Saul's rescue of Jabesh-gilead — the debt being repaid here" } ]}
  ],
  analyses: {
    intro: "How this visualization's reading compares with widely used ESV-based commentary and analysis of 1 Samuel 31:",
    consensus: [
      "The chapter is read as the direct fulfillment of Samuel's word at En-dor the night before ('tomorrow you and your sons shall be with me,' 28:19) and, further back, of the judgment pronounced in chapter 15 — commentators (Enduring Word/Guzik, Precept Austin, BibleRef) treat the battle's outcome as long-settled, not a fresh disaster.",
      "Saul's request that his armor-bearer kill him, and his own fall on the sword when refused, is almost universally read as a moral failure rather than a noble last stand: he dies as he lived his final years, acting alone and afraid of men (the Philistines' mockery) rather than turning to God even in extremity. The armor-bearer's refusal — he will not raise a hand against 'the LORD's anointed' — is noted as the same principle David held to twice when he had Saul at his mercy (24:6; 26:9).",
      "Displaying the body and dedicating the armor in a temple is treated as standard ancient Near Eastern victory ritual, crediting a god with the win — commentators read 1 Samuel 31:9's 'to carry the good news to their idols' as the narrator's own ironic gloss on the practice.",
      "The men of Jabesh-gilead's night raid is consistently tied back to 1 Samuel 11: F. B. Meyer and others frame it as the town returning, thirty-some years later, the kindness of the king who saved them in his very first act as ruler — the chapter's one note of loyalty and honor in an otherwise bleak scene.",
      "1 Chronicles 10:1-14 is read as the narrative's own closing verdict, standing in for commentary the Samuel text itself withholds: Saul died 'because he was unfaithful to the LORD... and did not seek guidance from the LORD... He also consulted a medium.'"
    ],
    debated: [
      { tag:"a", title:"How exactly did Saul die — his own sword, or the Amalekite's hand?", text:"1 Samuel 31:4-5 has Saul fall on his own sword after his armor-bearer refuses to kill him. 2 Samuel 1:6-10 then has an Amalekite tell David he found Saul still alive, leaning on his spear, and killed him at Saul's own request. The dominant harmonization across commentary traditions (Enduring Word, GotQuestions, Evidence Unseen, most ESV-tradition notes) is that the Amalekite's account is a self-serving fabrication invented to win a reward from David — which is exactly the outcome he expected and did not get (2 Sam 1:14-16). A minority reading takes both accounts as compatible in sequence (Saul's self-inflicted wound left him still breathing, and the Amalekite — who may genuinely have been scavenging the field — finished him off, then embellished his own role); a few older commentators simply flag the tension without resolving it. This site follows 1 Samuel 31's own narration: Saul died by his own hand." },
      { tag:"b", title:"Whose temple got the armor, and whose got the head?", text:"1 Samuel 31:10 places Saul's armor in 'the temple of Ashtaroth' and his body on Beth-shan's wall. The parallel in 1 Chronicles 10:10 has the armor go to 'the temple of their gods' and the head specifically fastened in 'the temple of Dagon.' Most harmonizations (Precept Austin, BibleRef) treat this as complementary rather than contradictory — different trophies distributed to different shrines in a multi-city Philistine victory rite, with Chronicles preserving a detail (the head, to Dagon) that Samuel simply doesn't mention. A few source-critical readings see the two verses as independent traditions about the spoils. This site cites both temples in the culture notes without treating the difference as a real conflict." },
      { tag:"c", title:"Why cremate the bodies before burial?", text:"Verse 12 has the men of Jabesh-gilead burn the bodies before burying the bones under the tamarisk tree — cremation otherwise being rare to absent in normal Israelite practice, which strongly favored burial. Most commentators (Guzik, Precept Austin) read it as an emergency, practical response to remains that had already hung exposed and begun to decompose, not a normal funerary rite or a statement about the afterlife; a smaller number suggest it may reflect purification concerns after the bodies' desecration. Either way the men later give the bones a proper, honored burial, which David completes by moving them to the family tomb (2 Sam 21:12-14)." }
    ],
    sources: [
      { name:"Enduring Word (David Guzik), 1 Samuel 31", url:"https://enduringword.com/bible-commentary/1-samuel-31/" },
      { name:"Precept Austin — 1 Samuel 31 commentary collection", url:"https://www.preceptaustin.org/1-samuel-31-commentary" },
      { name:"BibleRef — What does 1 Samuel 31 mean?", url:"https://www.bibleref.com/1-Samuel/31/1-Samuel-chapter-31.html" },
      { name:"GotQuestions — Why are there contradictory accounts regarding the death of Saul in 1 and 2 Samuel?", url:"https://www.gotquestions.org/death-of-Saul.html" }
    ]
  }
},

/* ============================================================
   1 SAMUEL 3 — The call of Samuel
   ============================================================ */
"9:3": {
  era: {
    title: "ca. 1100 BC — the boy Samuel at the Shiloh sanctuary",
    sub: "Iron Age I · the closing years of the judges · Eli's failing house",
    badges: ["Iron Age I", "Period of the judges", "Shiloh sanctuary", "≈3,100 years ago"]
  },
  timeOfDay: "night",
  summary: "Word from the LORD is rare in Israel; visions are not widespread. In the dark hours before the lamp of God has gone out, a voice calls the sleeping boy Samuel by name — three times he runs to Eli thinking it is the old priest, until Eli understands and tells him how to answer. What Samuel hears is the hard confirmation of judgment already spoken over Eli's house. By morning he must repeat it to the man who raised him, and Israel from Dan to Beersheba comes to know that a prophet has been raised up.",
  focusPlace: "shiloh",
  places: [
    { id:"shiloh", role:"The sanctuary where the boy sleeps near the ark (vv. 1-3)" },
    { id:"dan",    role:"Northern end of the land in the recognition formula, 'from Dan to Beersheba' (v. 20)" },
    { id:"beersheba", role:"Southern end of the same formula — the whole land comes to know Samuel is a prophet (v. 20)" }
  ],
  journey: [
    { from:"dan", to:"beersheba", dashed:true,
      label:"'From Dan to Beersheba' (v. 20)", km:230,
      note:"Not a literal trip taken in the chapter but the idiom for the whole land, north to south — roughly 230 km — coming to recognize that a prophet has been raised up in Israel." }
  ],
  hotspots: [
    { x:0.3, type:"person", label:"Samuel, lying down near the ark", av:"youth",
      desc:"A boy ministering before the LORD under Eli, wearing a linen ephod; he sleeps in the temple precinct, near enough the ark to hear a voice call his name three times before he understands who is speaking (vv. 1-8)." },
    { x:0.55, type:"person", label:"Eli, his eyes grown dim", av:"priest",
      desc:"Old and nearly blind, Eli takes three interruptions to realize the LORD is calling the boy, then tells him how to answer: 'Speak, LORD, for your servant hears' (vv. 2, 8-9). In the morning he presses Samuel for the whole hard word, and receives it without protest (vv. 17-18)." },
    { x:0.72, type:"object", label:"The lamp of God, not yet gone out",
      desc:"The tamid lamp (Ex 27:20-21) burned through the night and was tended out toward dawn — v. 3's detail places the call in the pre-dawn hours, and doubles as a quiet image: the light in Eli's house is guttering, but has not gone out yet." },
    { x:0.45, type:"object", label:"The ark of God",
      desc:"Housed at Shiloh in these years, the ark anchors the whole scene — and its capture one chapter later (1 Sam 4) is the disaster this night's word already announces." }
  ],
  environment: {
    chips: ["Pre-dawn darkness", "Tent-shrine complex at Shiloh", "Word of the LORD rare (v. 1)", "No widespread vision", "Lamp of God still burning", "Iron Age I sanctuary town"],
    text: "Shiloh in this period is Israel's central sanctuary, housing the ark inside a tent-and-structure complex Scripture calls both 'tent' and 'temple' (1 Sam 1:9; 3:3). The narrator's opening note — 'the word of the LORD was rare in those days; there was no frequent vision' — sets the drought that this night breaks. Samuel is not seeking a vision or incubating a dream in the manner of surrounding cultures' temple-sleep practices; the word interrupts him unbidden, three times, until Eli — himself losing his sight as his house loses its future — recognizes what is happening and steps aside."
  },
  objectsExtra: ["lamp", "ark-covenant"],
  peopleExtra: ["samuel", "eli", "hannah"],
  culture: [
    { title:"Not temple incubation", icon:"🛌",
      text:"Sleeping in a temple precinct to receive a divine dream was a known ancient Near Eastern practice ('incubation'). This scene pointedly is not that: Samuel is asleep, not seeking anything, when the word interrupts him — three times, until Eli has to explain what is happening. The initiative is entirely the LORD's." },
    { title:"The lamp of God as clock and sign", icon:"🪔",
      text:"The tamid lamp (Ex 27:20-21; Lev 24:2-4) was to burn from evening to morning. Verse 3's note that it 'had not yet gone out' functions as a time-stamp — this is the last watch of the night — and, read alongside Eli's dimming eyes and fading house, as a quiet image of a light still burning but soon to gutter." },
    { title:"A hard word for his own mentor", icon:"⚖️",
      text:"The message Samuel receives confirms the judgment a 'man of God' already pronounced over Eli's house (2:27-36) for the corruption of his sons and Eli's failure to restrain them. That a child must deliver this verdict to the priest who raised him — and that Eli receives it without excuse ('it is the LORD; let him do what seems good to him,' v. 18) — sets the pattern for Samuel's later willingness to speak hard words to Saul as well." }
  ],
  crossRefs: [
    { group:"The setting", refs:[
      { r:"1 Samuel 1:9-28", note:"Hannah's vow and how she lends Samuel to the LORD at Shiloh" },
      { r:"1 Samuel 2:12-17,22-25", note:"Eli's sons' corruption at the sanctuary" },
      { r:"1 Samuel 2:27-36", note:"the unnamed man of God's warning to Eli's house" } ]},
    { group:"Fulfillment", refs:[
      { r:"1 Samuel 4", note:"the ark lost in battle and Eli dies at the news" },
      { r:"1 Kings 2:27", note:"Abiathar, Eli's descendant, removed from the priesthood — the word 'established'" } ]},
    { group:"The pattern of call", refs:[
      { r:"Exodus 3:4", note:"'Moses, Moses' — the doubled name at a call" },
      { r:"Genesis 22:11", note:"'Abraham, Abraham' at the angel's intervention" },
      { r:"Acts 9:4", note:"'Saul, Saul' at Paul's call on the Damascus road" } ]},
    { group:"The word established", refs:[
      { r:"1 Samuel 3:19-21", note:"the LORD lets none of Samuel's words fall to the ground; all Israel knows he is a prophet" },
      { r:"Deuteronomy 18:21-22", note:"the test of a true prophet: does the word come to pass" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 15 — Saul rejected over Amalek
   ============================================================ */
"9:15": {
  era: {
    title: "ca. 1028 BC — Saul's campaign against Amalek",
    sub: "Iron Age I · early United Monarchy · the command Saul only partly kept",
    badges: ["Iron Age I", "United monarchy", "Reign of Saul", "≈3,050 years ago"]
  },
  timeOfDay: "day",
  summary: "Samuel relays a command with a long memory: judgment on Amalek for ambushing Israel at the Exodus. Saul strikes the Amalekite camps from Havilah to Shur but spares king Agag and the best of the plunder, then rides north to set up a monument to his own victory. Samuel meets him at Gilgal, the very place his kingship was confirmed, and delivers a verdict that ends it: 'to obey is better than sacrifice.' Saul grabs at Samuel's robe as he turns to go, and it tears — an omen Samuel reads aloud on the spot.",
  focusPlace: "gilgal",
  places: [
    { id:"amalek",       role:"The campaign against the Amalekite camps, spared plunder and King Agag (vv. 4-9)" },
    { id:"carmel-judah", role:"Saul sets up a monument to himself on the way home (v. 12)" },
    { id:"gilgal",       role:"Samuel confronts Saul; the robe tears; the verdict is delivered (vv. 12-33)" },
    { id:"ramah",        role:"Samuel goes home grieving; he and Saul do not meet again (v. 34-35)" },
    { id:"gibeah",       role:"Saul goes home to Gibeah of Saul (v. 34)" }
  ],
  journey: [
    { from:"amalek", to:"carmel-judah",
      label:"Victory lap", km:110,
      note:"Saul returns north from the campaign and sets up a monument (literally a 'hand' or 'yad') to himself at Carmel — before he has even reported to Samuel." },
    { from:"carmel-judah", to:"gilgal",
      label:"To the confrontation", km:35,
      note:"From the victory monument down to Gilgal, where Samuel is waiting with the word Saul does not want to hear." },
    { from:"gilgal", to:"ramah", dashed:true,
      label:"Samuel and Saul part", km:30,
      note:"'Samuel did not see Saul again until the day of his death, but Samuel grieved over Saul. And the LORD regretted that he had made Saul king' (v. 35) — they meet once more only at En-dor, and Samuel is already dead." }
  ],
  hotspots: [
    { x:0.28, type:"person", label:"Saul, with the spared plunder", av:"king",
      desc:"'The best of the sheep and oxen' come back alive despite the command — Saul insists it was for sacrifice to the LORD, but Samuel hears the bleating and lowing as evidence, not excuse (vv. 9, 14-15, 21)." },
    { x:0.5, type:"person", label:"Samuel delivers the verdict", av:"prophet",
      desc:"'Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice... for rebellion is as the sin of divination' (vv. 22-23). The kingdom is torn from Saul in the same breath as his robe." },
    { x:0.68, type:"person", label:"Agag, walking cheerfully", av:"king",
      desc:"The Amalekite king Saul spared arrives before Samuel 'cheerfully,' apparently believing his life is secure — 'surely the bitterness of death is past' (v. 32). Samuel himself carries out the sentence Saul would not: 'Samuel hacked Agag to pieces before the LORD at Gilgal' (v. 33)." },
    { x:0.42, type:"object", label:"The torn hem of the robe",
      desc:"As Samuel turns to leave, Saul seizes the hem of his robe and it tears. Samuel reads it as a sign on the spot: 'The LORD has torn the kingdom of Israel from you this day' (vv. 27-28) — a piece of cloth becomes an acted-out verdict." }
  ],
  environment: {
    chips: ["Gilgal by the Jordan", "Where Saul's kingship was confirmed (11:14-15)", "Now where he loses it", "Amalekite raider camps", "A victory monument at Carmel", "Torn robe as omen"],
    text: "Gilgal carries a bitter irony in this chapter: it is the same place where Israel confirmed Saul as king after his relief of Jabesh-gilead (1 Sam 11:14-15), and now it is where Samuel pronounces that the kingdom has been torn from him. The campaign itself ranges south into Amalekite steppe country — nomadic raider territory Israel had clashed with since the Exodus (Ex 17:8-16) — before Saul turns the return march into a victory lap, erecting a monument to himself at Carmel before he ever reports to Samuel."
  },
  objectsExtra: ["robe", "sword", "altar"],
  peopleExtra: ["samuel", "saul"],
  culture: [
    { title:"Ḥerem — 'devoted to destruction'", icon:"⚔️",
      text:"Ḥerem was the ancient Israelite practice of setting apart a defeated enemy and its goods entirely to the LORD, forbidding any of it — plunder, livestock, or captives — from being kept for personal gain. In this chapter's own terms, the command follows Amalek's history of preying on Israel at its most vulnerable, ambushing the stragglers 'faint and weary' after the Exodus (Deut 25:17-19) — a memory the text treats as the specific grievance behind the command. Saul's failure is framed in the text not as excessive severity but as partial obedience: keeping the best of the plunder 'to sacrifice to the LORD' while claiming full compliance. It is a difficult and much-debated passage, and readers across the centuries have wrestled with it seriously rather than either explaining it away or reading past its weight." },
    { title:"Victory monuments and royal self-commemoration", icon:"🗿",
      text:"Saul's monument at Carmel (v. 12, a 'yad' — literally 'hand' or 'monument') fits an ancient Near Eastern pattern of kings commemorating their own victories in stone. The text's placement — before Saul has reported to Samuel or the LORD — reads as an indictment of priorities. Compare Absalom's later pillar, built because he had no son to carry his name (2 Sam 18:18)." },
    { title:"'Rebellion is as the sin of divination' (v. 23)", icon:"🔮",
      text:"Samuel's rebuke names Saul's disobedience in the same breath as divination and idolatry — and the line boomerangs: thirteen chapters later, the rejected king seeks out a medium at En-dor (1 Sam 28), the very sin his own disobedience was compared to." },
    { title:"A regretting God, a God who does not lie", icon:"↔️",
      text:"The chapter holds two statements in tension without resolving them for the reader: 'the Glory of Israel will not lie or change his mind, for he is not a man, that he should change his mind' (v. 29) sits between two uses of the same Hebrew root to say 'the LORD regretted that he had made Saul king' (vv. 11, 35). Commentators generally read v. 29 as speaking to God's unchanging character and the certainty of this particular verdict, while vv. 11 and 35 describe God's relational response to Saul's choices — the text itself seems comfortable holding both without treating them as contradictory." }
  ],
  crossRefs: [
    { group:"The command's background", refs:[
      { r:"Exodus 17:8-16", note:"Amalek's ambush of Israel at Rephidim, just after the Exodus" },
      { r:"Deuteronomy 25:17-19", note:"the standing charge to blot out Amalek's memory for attacking the weak and weary" } ]},
    { group:"The torn robe thread", refs:[
      { r:"1 Samuel 15:27-28", note:"Samuel's robe tears; the kingdom is 'torn' from Saul" },
      { r:"1 Samuel 24:4-5", note:"David later cuts Saul's robe in the cave and is conscience-stricken even for that" },
      { r:"1 Samuel 28:14,17", note:"Samuel's own robe identifies him to Saul at En-dor, delivering this chapter's verdict again" } ]},
    { group:"Obedience over sacrifice", refs:[
      { r:"Psalm 51:16-17", note:"David: 'you will not delight in sacrifice... a broken and contrite heart'" },
      { r:"Hosea 6:6", note:"'I desire steadfast love and not sacrifice'" },
      { r:"Micah 6:6-8", note:"what the LORD actually requires" },
      { r:"Mark 12:33", note:"a scribe echoes the same priority to Jesus" } ]},
    { group:"Aftermath", refs:[
      { r:"1 Samuel 16:1", note:"the LORD sends Samuel to anoint Saul's replacement" },
      { r:"1 Samuel 28:18", note:"Samuel's ghost cites this very disobedience as the reason for Saul's coming death" },
      { r:"Esther 3:1", note:"Haman 'the Agagite,' a long shadow of the spared king's line, centuries later" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 16 — David anointed; the Spirit and the lyre
   ============================================================ */
"9:16": {
  era: {
    title: "ca. 1025 BC — a shepherd anointed in Bethlehem",
    sub: "Iron Age I · United Monarchy · Saul's decline, David's rise begins in secret",
    badges: ["Iron Age I", "United monarchy", "Reign of Saul", "≈3,050 years ago"]
  },
  timeOfDay: "day",
  summary: "Grieving over Saul, Samuel is sent south to Bethlehem with a horn of oil and a cover story — a heifer for sacrifice, to keep Saul from hearing what he's really doing. Jesse parades seven sons; the LORD passes over every one, 'for the LORD looks on the heart.' The youngest is out with the sheep. David is anointed in a quiet, almost secret ceremony, and the Spirit of the LORD rushes on him from that day forward — even as it departs from Saul, who is left to a tormenting spirit only music can soothe. The newly anointed shepherd is summoned to the old king's court to play the lyre.",
  focusPlace: "bethlehem",
  places: [
    { id:"ramah",     role:"Samuel's starting point, mourning for Saul (v. 1)" },
    { id:"bethlehem", role:"Jesse's house — the sons paraded, David anointed (vv. 4-13)" },
    { id:"gibeah",    role:"Saul's court, where the harpist is summoned to soothe the king (vv. 14-23)" }
  ],
  journey: [
    { from:"ramah", to:"bethlehem",
      label:"The horn of oil", km:18,
      note:"About 18 km south, Samuel travels with a heifer as cover for the visit — he tells the LORD plainly, 'How can I go? If Saul hears it, he will kill me' (v. 2)." },
    { from:"bethlehem", to:"gibeah",
      label:"The harpist to court", km:12,
      note:"The newly anointed shepherd is summoned into the old king's service, sent for by name as a skillful lyre player (vv. 18-19) — long before the two ever meet as rivals." }
  ],
  hotspots: [
    { x:0.3, type:"person", label:"Samuel pours the horn of oil", av:"prophet",
      desc:"Having grieved for Saul, Samuel is sent to Jesse's house with a horn of oil and instructed not to look on appearance or height, 'for the LORD sees not as man sees... the LORD looks on the heart' (vv. 1, 7)." },
    { x:0.55, type:"person", label:"David, ruddy, back from the sheep", av:"shepherd",
      desc:"The youngest son isn't even brought in until Samuel insists there must be one more — he is out keeping the flock. Described as 'ruddy, with beautiful eyes and handsome,' he is anointed in the presence of his brothers, and 'the Spirit of the LORD rushed upon David from that day forward' (vv. 11-13)." },
    { x:0.42, type:"person", label:"Jesse and the seven passed-over sons", av:"elder",
      desc:"Jesse presents seven sons in turn — Eliab first, tall and impressive — and the LORD rejects every one before David is even sent for (vv. 6-10)." },
    { x:0.68, type:"object", label:"The lyre that soothes the tormented king",
      desc:"When a harmful spirit troubles Saul, his servants recommend a skillful lyre player; David is sent for and 'whenever the harmful spirit... was upon Saul, David took the lyre and played... and the harmful spirit departed from him' (vv. 14-23) — the Spirit-empowered successor tending the Spirit-abandoned king." }
  ],
  environment: {
    chips: ["Bethlehem's terraced fields", "Sheepfolds outside town", "A quiet, almost secret ceremony", "'The LORD looks on the heart'", "Saul's court at Gibeah", "A tormenting spirit soothed by music"],
    text: "Bethlehem in this period is a small hill-country town of terraced barley and wheat fields with pasture running down toward the wilderness — unremarkable enough that the town elders 'come trembling' to meet Samuel, unsure whether his visit means trouble (v. 4). The anointing itself is private, witnessed only by Jesse's household, in deliberate contrast to Saul's public coronation — a hidden beginning for the king who will not sit on the throne for years yet."
  },
  objectsExtra: ["anoint-oil", "lyre"],
  peopleExtra: ["samuel", "saul", "david"],
  culture: [
    { title:"Anointing — oil, horn, and 'messiah'", icon:"🫗",
      text:"Pouring oil from an animal horn over the head marked out a person as set apart for God's service — kings, priests, and prophets in Israel could all be anointed. The Hebrew mashiach ('anointed one') is the root of 'messiah'; David's anointing here, private and years before his enthronement, becomes the template Israel's later hope for 'the LORD's anointed' looks back to." },
    { title:"Primogeniture upended", icon:"👦",
      text:"Ancient inheritance and status customarily favored the firstborn son, yet Scripture repeatedly passes over him — Isaac over Ishmael, Jacob over Esau (Gen 25:23), Joseph elevated above his older brothers, Gideon the least in his family chosen as judge. David, the eighth and youngest, not even called in from the fields at first, fits a deliberate pattern: 'the LORD looks on the heart.'" },
    { title:"Music, the kinnor, and an old king's torment", icon:"🎵",
      text:"The kinnor (lyre or harp) was a common stringed instrument in ancient Israel, used in worship, celebration, and here as therapy. That the very music soothing Saul's torment is played by the shepherd already anointed to replace him is one of the chapter's sharper ironies — the future king serving, unknowingly to Saul, in the house he will one day succeed." }
  ],
  crossRefs: [
    { group:"The seeing God", refs:[
      { r:"1 Samuel 16:7", note:"'man looks on the outward appearance, but the LORD looks on the heart'" },
      { r:"Psalm 139:1-4", note:"a prayer on being fully known" },
      { r:"Luke 16:15", note:"'God knows your hearts'" } ]},
    { group:"Anointings of David", refs:[
      { r:"1 Samuel 16:13", note:"anointed privately by Samuel at Bethlehem" },
      { r:"2 Samuel 2:4", note:"anointed king over Judah at Hebron" },
      { r:"2 Samuel 5:3", note:"anointed king over all Israel — the third and final stage" } ]},
    { group:"The Spirit given and withdrawn", refs:[
      { r:"1 Samuel 10:6,10", note:"the Spirit rushes on Saul at his own anointing" },
      { r:"1 Samuel 16:13-14", note:"the Spirit comes upon David as it departs from Saul" },
      { r:"Psalm 51:11", note:"David's own later prayer, 'take not your Holy Spirit from me'" } ]},
    { group:"Bethlehem's line", refs:[
      { r:"Ruth 4:17-22", note:"the genealogy from Boaz and Ruth to David, rooted in this same town" },
      { r:"Micah 5:2", note:"Bethlehem Ephrathah, 'too little to be among the clans of Judah,' named for the future ruler" },
      { r:"Luke 2:4-11", note:"Joseph and Mary travel to 'the city of David' for the second, greater anointed one's birth" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 8 — Israel demands a king
   ============================================================ */
"9:8": {
  era: {
    title: "ca. 1051 BC — Israel asks Samuel for a king",
    sub: "Iron Age I · closing years of the judges · Samuel's sons fail at Beersheba",
    badges: ["Iron Age I", "Period of the judges (closing)", "United monarchy (beginning)", "≈3,075 years ago"]
  },
  timeOfDay: "day",
  summary: "Samuel is old, and the sons he set as judges over Israel — Joel and Abijah, presiding at Beersheba — take bribes and pervert justice, an eerie replay of Eli's corrupt sons a generation earlier. The elders of Israel don't simply grumble; they travel to Samuel at Ramah and ask him to appoint them a king 'to judge us like all the nations' (v. 5). Samuel takes the request personally and prays about it, but the LORD's answer cuts past his hurt feelings: 'they have not rejected you, but they have rejected me from being king over them' (v. 7) — the latest chapter in a pattern running back to the golden calf. Samuel is told to grant the request, but first to solemnly warn the people what a king will cost them: sons conscripted for chariots, cavalry, and the plow; daughters taken as perfumers, cooks, and bakers; the best fields, vineyards, and olive groves handed to courtiers; a tithe of grain and flocks; and, at the end of the list, servitude so total that 'you will be his slaves' (v. 17). The elders hear every word and refuse to be talked out of it — 'no, but there shall be a king over us' — so they can be 'like all the nations,' with a king to judge them and fight their battles (vv. 19-20). Samuel repeats their words to the LORD and is told simply to obey them and make them a king, then sends the men of Israel home to wait.",
  focusPlace: "ramah",
  places: [
    { id:"beersheba", role:"Joel and Abijah preside as judges here, taking bribes and perverting justice (vv. 1-3)" },
    { id:"ramah",      role:"The elders of Israel gather to Samuel and formally demand a king (vv. 4-22)" }
  ],
  journey: [
    { from:"beersheba", to:"ramah", dashed:true,
      label:"A complaint becomes a petition", km:85,
      note:"Not one traveler's route but the arc of the whole chapter: word of corrupt judging at Israel's southern edge, Beersheba, becomes — some 85 km north at Ramah — a formal national demand for a king, the elders' answer to a failing succession." }
  ],
  hotspots: [
    { x:0.18, type:"person", label:"Joel and Abijah, taking bribes", av:"elder",
      desc:"Samuel's own sons, set as judges at Beersheba in his old age, 'turned aside after gain... took bribes and perverted justice' (vv. 1-3) — an unsettling replay of Eli's corrupt sons one generation earlier, and the immediate trigger for what follows." },
    { x:0.36, type:"person", label:"The elders of Israel", av:"elder",
      desc:"They come to Samuel at Ramah in a body and name the problem bluntly — 'you are old, and your sons do not walk in your ways' — before asking for what they actually want: 'appoint for us a king to judge us like all the nations' (vv. 4-5)." },
    { x:0.54, type:"person", label:"Samuel, displeased, praying it over", av:"prophet",
      desc:"The request stings personally, but the LORD redirects Samuel's hurt: 'they have not rejected you, but they have rejected me from being king over them... according to all the deeds that they have done to me, from the day I brought them up out of Egypt' (vv. 7-8)." },
    { x:0.72, type:"object", label:"The king's due — chariots, conscription, tithe",
      desc:"Samuel's warning reads like an itemized bill: sons for chariots, cavalry, and plowing; daughters for perfumers, cooks, and bakers; a tenth of grain, vineyards, and flocks; the best fields handed to servants and officials — ending, by his own words, in the people crying out against the very king they demanded (vv. 11-18)." },
    { x:0.88, type:"person", label:"The people, refusing to be talked out of it", av:"elder",
      desc:"'No! But there shall be a king over us, that we also may be like all the nations, and that our king may judge us and go out before us and fight our battles' (vv. 19-20) — Samuel takes it to the LORD, and is told simply: obey them, and make them a king (v. 22)." }
  ],
  environment: {
    chips: ["Samuel's circuit courts (Ramah, Bethel, Gilgal, Mizpah)", "Beersheba — southern edge of settled Israel", "A national assembly, not a mob", "'Like all the nations'", "The itemized cost of kingship", "Iron Age I tribal confederation ending"],
    text: "Ramah was Samuel's home base and the hub of a judicial circuit he rode every year (1 Sam 7:15-17), so the elders' journey there was the normal channel for a national grievance, not a confrontation out of nowhere. That the complaint originates at Beersheba — the traditional southern limit of Israelite settlement in the phrase 'from Dan to Beersheba' — signals this touches the whole confederation, not one town. What the elders ask for is a structural change: trading a loose tribal league under judges, raised up ad hoc in crisis, for a permanent royal house 'like all the nations' around them."
  },
  objectsExtra: ["chariot", "crown"],
  peopleExtra: ["samuel"],
  culture: [
    { title:"Judges vs. kings — two very different offices", icon:"⚖️",
      text:"Israel's judges (shophetim) were raised up ad hoc, usually for a military crisis, with no fixed succession, palace, or standing army — Gideon explicitly refused hereditary rule (Judg 8:22-23). A king brought exactly what the judges lacked: dynasty, court, conscription, and taxation. Samuel's warning in vv. 11-18 is not rhetorical exaggeration but a fair description of how ancient Near Eastern and later Israelite monarchies actually operated, down to the corvée labor and royal land grants 1 Kings later shows Solomon using." },
    { title:"'Like all the nations' — the request's real target", icon:"🌍",
      text:"The phrase (vv. 5, 20) recurs three times and is the chapter's own diagnosis: Israel's constitution under the judges made it, by design, unlike its neighbors — governed directly by the LORD as king, without a human dynasty (compare Deut 17:14-20, which anticipated and regulated this very request centuries earlier). Wanting a king 'like the nations' asks to trade a distinctive covenant identity for a conventional one." },
    { title:"Deuteronomy already had a law for this", icon:"📜",
      text:"Deuteronomy 17:14-20 foresaw Israel one day asking for a king and set rules in advance: he must be a native Israelite, not multiply horses, wives, or silver and gold, and keep a copy of the law to read all his days. The request in 1 Samuel 8 is not treated as inherently illegitimate — the law had already made room for kingship — but the motive ('like all the nations,' fear more than faith) and the timing (rejecting Samuel's God-given leadership rather than waiting on the LORD) are what draw the rebuke." },
    { title:"Corrupt judges, a recurring wound", icon:"💰",
      text:"Bribery and perverted justice among Israel's leaders is a standing prophetic complaint (Ex 23:8; Isa 1:23; Mic 7:3), and Joel and Abijah's failure at Beersheba echoes Eli's sons' corruption of the priesthood one generation earlier (1 Sam 2:12-17). The pattern is pointed: bad leadership at the top of Israel's institutions is what opens the door to a demand for a wholly different kind of leadership." }
  ],
  crossRefs: [
    { group:"The law already anticipated this", refs:[
      { r:"Deuteronomy 17:14-20", note:"Moses' advance rules for a future Israelite king" },
      { r:"Judges 8:22-23", note:"Gideon refuses hereditary rule: 'the LORD will rule over you'" },
      { r:"Judges 9:7-15", note:"Jotham's fable, warning against kingship sought for the wrong reasons" } ]},
    { group:"Rejection, not novelty", refs:[
      { r:"1 Samuel 10:19", note:"Samuel repeats the charge: 'you have rejected your God'" },
      { r:"1 Samuel 12:12,17-19", note:"Samuel's farewell speech names the sin plainly and calls down thunder to prove it" },
      { r:"Exodus 32", note:"the golden calf — the same underlying pattern of rejecting direct divine rule" } ]},
    { group:"Eli's sons, echoed", refs:[
      { r:"1 Samuel 2:12-17,22-25", note:"the earlier generation's corrupt leaders — Eli's sons at Shiloh" } ]},
    { group:"What kingship becomes", refs:[
      { r:"1 Kings 12:1-15", note:"Rehoboam repeats the very abuses Samuel warned of, and the kingdom splits" },
      { r:"1 Samuel 8:18", note:"Samuel's own warning: 'you will cry out because of your king... but the LORD will not answer you in that day'" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 9 — Saul goes looking for donkeys, finds a kingdom
   ============================================================ */
"9:9": {
  era: {
    title: "ca. 1051 BC — a Benjaminite's errand becomes a kingmaking",
    sub: "Iron Age I · hill country of Ephraim and Benjamin · the day before the anointing",
    badges: ["Iron Age I", "Period of the judges (closing)", "United monarchy (beginning)", "≈3,075 years ago"]
  },
  timeOfDay: "day",
  summary: "Kish of Benjamin's donkeys have wandered off, so he sends his son Saul — a young man 'handsome' and 'taller than any of the people' (v. 2) — with a servant to find them. Days of fruitless searching take them through the hill country of Ephraim and the lands of Shalisha, Shaalim, and Benjamin, until Saul is ready to turn back rather than worry his father further (vv. 4-5). It's the servant who has the idea: there's a man of God in the next town, honored because 'all that he says comes true' — perhaps he can tell them which way to go (v. 6). With a quarter shekel of silver as a fee, they climb the hill into the city and ask some young women drawing water where to find 'the seer,' who, they're told, has come for a sacrifice at the high place that very day (vv. 11-13). What Saul doesn't know is that the LORD had told Samuel, the day before, to expect exactly this man from the land of Benjamin — the one who would 'save my people from the hand of the Philistines' (vv. 15-16). Samuel meets Saul at the gate before Saul can even ask his question, tells him the donkeys are already found, and puts to him a question that reframes everything: 'for whom is all that is desirable in Israel? Is it not for you?' (v. 20). Saul protests his own smallness — Benjamin's least clan, in Israel's smallest tribe (v. 21) — but is seated at the head of the guests and served the reserved portion of meat, kept for him since morning though he never knew an invitation had been extended (vv. 22-24). A donkey hunt has become a summons.",
  focusPlace: "ramah",
  places: [
    { id:"gibeah", role:"Saul's home; his father Kish sends him with a servant to find the lost donkeys (vv. 1-3)" },
    { id:"ramah",  role:"'The city' in the land of Zuph where Samuel the seer meets Saul at the gate and hosts him at the high place (vv. 6-27) — the text never names the town, but its role as Samuel's home base makes Ramah the standard identification" }
  ],
  journey: [
    { from:"gibeah", to:"ramah",
      label:"The donkey hunt", km:40,
      note:"Not a straight line: Saul and his servant range through the hill country of Ephraim and the lands of Shalisha, Shaalim, and Benjamin before doubling into 'the land of Zuph,' near Ramah, on the point of giving up (vv. 4-5) — a wandering search that puts a farmer's son in exactly the right town on exactly the right day." },
    { from:"ramah", to:"gibeah", dashed:true,
      label:"An anxious father, waiting (implied)", km:40,
      note:"Samuel's private word to Saul the next morning (10:2) will reveal that Kish has stopped worrying about the donkeys and started worrying about his missing son — a quiet measure of just how long this search had already stretched." }
  ],
  hotspots: [
    { x:0.14, type:"person", label:"Saul, searching for his father's donkeys", av:"traveler",
      desc:"Tall, handsome, and increasingly discouraged, Saul is ready to abandon the search rather than let his father's worry shift from donkeys to him (vv. 2-5) — unaware he is one town away from being told he will be prince over Israel." },
    { x:0.3, type:"person", label:"The servant's idea", av:"traveler",
      desc:"It's the unnamed servant who remembers the man of God nearby and offers his own quarter shekel of silver as a fee for guidance (vv. 6-8) — a servant's practical suggestion that, unknown to either of them, sets up the entire scene that follows." },
    { x:0.46, type:"person", label:"Young women at the well", av:"woman",
      desc:"Asked 'Is the seer here?' the women give precise, confident directions — Samuel has just arrived in town for a sacrifice at the high place, and if they hurry they'll catch him before he goes up to eat (vv. 11-13)." },
    { x:0.62, type:"person", label:"Samuel, already told to expect him", av:"prophet",
      desc:"'Tomorrow about this time I will send you a man from the land of Benjamin, and you shall anoint him to be prince over my people Israel' — the LORD had spoken this the day before Saul ever arrived (vv. 15-17). Samuel recognizes him on sight and needs no introduction." },
    { x:0.78, type:"object", label:"The reserved portion of meat",
      desc:"Samuel had told the cook to set aside a special cut in advance — 'set it before you, because it was kept for you until the appointed time, for I said I have invited the people' (v. 24-ish) — Saul is treated as guest of honor before he has any idea why." },
    { x:0.9, type:"object", label:"A quarter shekel of silver",
      desc:"The servant's small coin, offered as a seer's customary fee (v. 8), is the last ordinary transaction of Saul's private life — from the roof-top conversation that follows (v. 25), he leaves the next morning already the LORD's chosen, if not yet the people's king." }
  ],
  environment: {
    chips: ["A multi-day search on foot", "Hill country of Ephraim and Benjamin", "'The land of Zuph' — Samuel's home district", "A high-place sacrifice and communal meal", "Seer's fee: a quarter shekel", "Iron Age I village life"],
    text: "Saul's search plays out across the central hill country straddling Ephraim and Benjamin — rugged, terraced terrain where lost livestock could easily wander for days. 'The land of Zuph,' where the search finally succeeds, is identified by its association with Samuel's own family line (1 Sam 1:1, 'Zuph' as an ancestor) and points to Ramah as the unnamed city. The high place (bamah) where Samuel presides was a standard local worship site in this era, well before the Jerusalem temple centralized Israelite sacrifice — a communal meal followed the sacrifice itself, with the officiating seer blessing the food and the invited guests eating together, exactly the scene Saul stumbles into as an uninvited guest already reserved a seat."
  },
  objectsExtra: ["donkey", "highplace"],
  peopleExtra: ["samuel", "saul"],
  culture: [
    { title:"'Seer' and 'prophet' — the narrator's own footnote", icon:"📖",
      text:"Verse 9 pauses the story for an aside: 'he who is now called a prophet was formerly called a seer' — a rare moment where the text explains its own older vocabulary to a later audience. The term ro'eh ('seer') survived afterward mainly as an archaism (e.g., Amos 7:12), while navi ('prophet') became the standard term for the office Samuel himself would come to embody most fully." },
    { title:"High places and the sacrificial meal", icon:"🛕",
      text:"Before the Jerusalem temple centralized worship, sacrifice at local high places (bamot) was normal, sanctioned practice, not yet the corrupted rival worship later kings are condemned for tolerating. The meal structure implied here — blessing, then the host eating first, then the invited guests — matches known ancient Near Eastern hospitality customs, in which a reserved portion signaled honored status decided in advance by the host." },
    { title:"Benjamin's low estate", icon:"🪶",
      text:"Saul's protest — 'am I not a Benjaminite, from the smallest tribe of Israel, and my clan the humblest of the clans of Benjamin?' (v. 21) — carries real historical weight: Benjamin had been nearly annihilated in the civil war of Judges 19-21, reduced to a remnant granted wives only by extraordinary measures. A king 'raised up' from Israel's least tribe is itself a small reversal, the same pattern that later plucks the least-likely son of Jesse (1 Sam 16)." },
    { title:"Donkeys, an ordinary but valuable loss", icon:"🫏",
      text:"Donkeys were core working capital for a family of Kish's standing (v. 1, 'a man of wealth') — pack animals, plow assistance, and transport all at once — so a search lasting several days and covering multiple districts (vv. 4-5) reflects a real economic stake, not a trivial errand. That this ordinary chore becomes the occasion for Israel's first king to be identified is the chapter's own quiet argument for providence working through the mundane." }
  ],
  crossRefs: [
    { group:"Benjamin's low estate", refs:[
      { r:"Judges 19-21", note:"the civil war that nearly wiped out the tribe of Benjamin — the backdrop to Saul's protest" },
      { r:"1 Samuel 9:21", note:"Saul's own words: 'am I not a Benjaminite... the humblest of the clans'" } ]},
    { group:"Seer and prophet", refs:[
      { r:"1 Samuel 9:9", note:"the narrator's own aside on changing terminology" },
      { r:"Amos 7:12", note:"'seer' still used generations later as a title for a prophet" } ]},
    { group:"The word about to be fulfilled", refs:[
      { r:"1 Samuel 10:1", note:"the very next scene — Samuel pours the oil the LORD had promised" },
      { r:"1 Samuel 15:17", note:"Samuel later reminds Saul: 'though you were little in your own eyes, were you not made head of the tribes?'" } ]},
    { group:"Providence in small errands", refs:[
      { r:"Genesis 37:12-17", note:"another young man sent on a simple errand that turns into something far larger" },
      { r:"Ruth 2:3", note:"'she happened to come' to Boaz's field — an ordinary errand, divine timing" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 10 — Saul anointed, then chosen by lot at Mizpah
   ============================================================ */
"9:10": {
  era: {
    title: "ca. 1051 BC — Saul anointed in private, crowned in public",
    sub: "Iron Age I · from Ramah's edge to Mizpah · three signs and a national lottery",
    badges: ["Iron Age I", "United monarchy (beginning)", "Reign of Saul begins", "≈3,075 years ago"]
  },
  timeOfDay: "day",
  summary: "Alone with Saul outside the city, Samuel pours a flask of oil over his head, kisses him, and asks: 'Has not the LORD anointed you to be prince over his people Israel?' (v. 1). He then hands Saul three confirming signs for the road home — at Rachel's tomb, two men will report the donkeys found; at the oak of Tabor near Bethel, three pilgrims will hand him two loaves of bread; and at Gibeath-elohim, where a Philistine garrison sits, a band of ecstatic prophets will draw him into their prophesying as the Spirit of the LORD rushes upon him and turns him into 'another man' (vv. 2-7). Every sign lands exactly as promised, and those who knew Saul before are startled enough to coin a proverb: 'Is Saul also among the prophets?' (v. 11-12). Saul tells his uncle only about the donkeys, keeping Samuel's word about the kingdom to himself (vv. 14-16). Some time later, Samuel calls 'all Israel' to Mizpah, names their demand for a king as itself a rejection of the LORD (vv. 18-19), and narrows the choice by lot — tribe, then clan, then man — until Saul's name comes up and Saul himself cannot be found: he is hiding among the baggage (vv. 20-22). Dragged out, standing head and shoulders above the crowd, he is met with Israel's first royal acclamation: 'Long live the king!' (v. 24). Samuel writes the rights and duties of the kingship in a book laid up before the LORD, and Saul goes home to Gibeah — trailed by men of valor whose hearts God had touched, and by a few who despise him and bring no gift (vv. 25-27).",
  focusPlace: "mizpah",
  places: [
    { id:"ramah",  role:"Samuel anoints Saul in private with a flask of oil just outside the city (v. 1)" },
    { id:"bethel", role:"The oak of Tabor nearby — three pilgrims 'going up to God at Bethel' hand Saul two loaves of bread, the second confirming sign (vv. 3-4)" },
    { id:"gibeah", role:"Gibeath-elohim ('the hill of God') — treated here as Saul's own town under its cultic name, where the Spirit of the LORD rushes on him among a band of prophets (vv. 5-6, 10-13)" },
    { id:"gilgal", role:"Samuel's parting instruction: go down and wait seven days for him there (v. 8) — the appointment broken in 1 Sam 13:8-14" },
    { id:"mizpah", role:"Samuel assembles all Israel, casts lots by tribe and clan, and Saul is found and publicly hailed king (vv. 17-25)" }
  ],
  journey: [
    { from:"ramah", to:"bethel",
      label:"Two confirming signs on the road", km:20,
      note:"Leaving Samuel at Ramah, Saul's homeward road passes first by Rachel's tomb at Zelzah in Benjamite territory (v. 2) — notably a different location from the better-known tomb tradition near Bethlehem in Genesis 35:19, a discrepancy long discussed by commentators — then on to the oak of Tabor near Bethel, where three pilgrims hand him bread exactly as foretold (vv. 3-4)." },
    { from:"bethel", to:"gibeah",
      label:"The third sign — prophesying with prophets", km:18,
      note:"At Gibeath-elohim, effectively Saul's own town of Gibeah under its cultic name, a Philistine garrison sits astride a company of ecstatic prophets; the Spirit of the LORD rushes on Saul among them and turns him 'into another man' (vv. 5-6, 9-13) — the scene behind the proverb 'Is Saul also among the prophets?'" },
    { from:"gibeah", to:"gilgal", dashed:true,
      label:"An instruction for later", km:33,
      note:"Samuel's parting word points Saul on to Gilgal to wait seven days for him (v. 8) — an appointment Saul will break under pressure in 1 Sam 13:8-14, the second count against his reign." },
    { from:"gibeah", to:"mizpah",
      label:"Chosen by lot before all Israel", km:12,
      note:"Some time later, Samuel summons 'all Israel' to Mizpah for a public casting of lots, tribe by tribe, clan by clan, man by man — narrowing at last to Saul, who is found hiding among the baggage and dragged out to stand head and shoulders above the crowd (vv. 17-24)." }
  ],
  hotspots: [
    { x:0.1, type:"person", label:"Samuel pours the flask of oil", av:"prophet",
      desc:"Private, outside the city, with a kiss and a question rather than a proclamation: 'Has not the LORD anointed you to be prince over his people Israel? ... you shall save them from the hand of their enemies around' (v. 1)." },
    { x:0.26, type:"person", label:"Three pilgrims at the oak of Tabor", av:"traveler",
      desc:"'Going up to God at Bethel,' carrying three young goats, three loaves of bread, and a skin of wine, they greet Saul and hand him two loaves — precisely the sign Samuel had described in advance (vv. 3-4)." },
    { x:0.44, type:"person", label:"The prophets, coming down with harp, tambourine, flute, and lyre", av:"prophet",
      desc:"A band of prophesying musicians descends from the high place at Gibeath-elohim; the Spirit of the LORD rushes on Saul among them, and 'God gave him another heart' (vv. 5-6, 9-10) — the third sign, and the strangest." },
    { x:0.6, type:"person", label:"Saul, hiding among the baggage", av:"king",
      desc:"When the lot finally narrows to his name at Mizpah, Saul cannot be found — he has hidden himself among the supply carts, and has to be sought out and dragged before the assembly (vv. 21-23), the newly chosen king's first public appearance an act of hiding rather than stepping forward." },
    { x:0.76, type:"person", label:"'Long live the king!'", av:"elder",
      desc:"Once Saul stands among them, 'taller than any of the people from his shoulders upward' (v. 23), Samuel asks the crowd, 'Do you see him whom the LORD has chosen? There is none like him among all the people' — and Israel's very first royal acclamation goes up (v. 24)." },
    { x:0.9, type:"object", label:"The book of the rights of the kingdom",
      desc:"Before sending everyone home, Samuel writes down the rights and duties of kingship 'in a book and laid it up before the LORD' (v. 25) — a written constitutional check laid alongside the crown from its very first day, echoed later when Joash is crowned 'with the testimony' (2 Kgs 11:12)." }
  ],
  environment: {
    chips: ["Three signs on a single homeward road", "Rachel's tomb — a Benjamite tradition", "A Philistine garrison overlooking prophesying musicians", "A national lottery, tribe to clan to man", "Hiding among the baggage", "Iron Age I confederation becoming a monarchy"],
    text: "The chapter moves Saul through a tight arc of familiar central hill-country sites — Ramah, Bethel, and Gibeah lie within a short day's travel of one another — before widening out to Mizpah, the traditional assembly point for 'all Israel' since the days of the judges (Judg 20:1; 1 Sam 7:5-6). Gibeah's cultic name, 'the hill of God,' alongside a standing Philistine garrison, is a reminder of how contested this hill country still was even as Israel prepared to crown its own king there. Mizpah's public, tribe-by-tribe lottery — almost certainly cast with the priestly Urim and Thummim (cf. Josh 7:14-18) — turns the choice of a king into a transparent national event rather than a private prophetic decision alone."
  },
  objectsExtra: ["anoint-oil", "highplace", "lyre"],
  peopleExtra: ["samuel", "saul"],
  culture: [
    { title:"A flask, not a horn — a curious detail", icon:"🫗",
      text:"Saul is anointed from a pak, a flask (v. 1), while David (1 Sam 16:13) and later Solomon (1 Kgs 1:39) are anointed from a keren, a horn. Some Jewish and Christian interpreters through history have read the different vessel as meaningful — a flask's contents pour out and are gone, while a horn's oil-life was proverbially thought to last, taken as a hint that Saul's dynasty would not endure where David's would. Others treat it as incidental vocabulary with no symbolic weight. The text itself does not explain the choice of word, so this remains an interesting but genuinely debated observation rather than a settled point." },
    { title:"Ecstatic prophecy in the ancient Near East", icon:"🎵",
      text:"Bands of prophets moving together with musical accompaniment, entering a trance-like ecstatic state, are attested outside Israel as well (compare the Mari letters' guild-prophets and the Egyptian Report of Wenamun's ecstatic seer). What marks Saul's episode as distinct is cause and effect: it is specifically 'the Spirit of the LORD' that rushes on him and changes his heart (vv. 6, 10), not a self-induced or trained ritual state — the same phrase used of Samson's empowerments (Judg 14:6) and later withdrawn from Saul entirely (1 Sam 16:14)." },
    { title:"Choosing a king by lot", icon:"🎲",
      text:"Casting lots to narrow tribe, then clan, then individual mirrors the method used to expose Achan after Ai (Josh 7:16-18) — a procedure Israel already trusted to reveal the LORD's own choice rather than chance (Prov 16:33), likely using the priestly Urim and Thummim. Doing this publicly at Mizpah, before 'all Israel,' makes Saul's kingship a matter of open, verifiable national process rather than Samuel's word alone — even though Samuel had already anointed him in private weeks earlier." },
    { title:"A book of rights alongside the crown", icon:"📜",
      text:"Verse 25's 'book of the rights and duties of the kingdom,' laid up before the LORD, is widely read as an application of Deuteronomy 17:14-20's advance law for kings — Israelite kingship was constituted, from its first hour, as a covenanted and limited office rather than the unchecked absolutism of surrounding monarchies. The gesture recurs generations later when the boy-king Joash is crowned 'with the testimony' in hand (2 Kgs 11:12)." }
  ],
  crossRefs: [
    { group:"Confirming signs, fulfilled", refs:[
      { r:"1 Samuel 10:9", note:"'God gave him another heart... all these signs came to pass that day'" },
      { r:"Exodus 4:1-9", note:"multiple confirming signs given to another reluctant leader, Moses" } ]},
    { group:"Rachel's tomb — two traditions", refs:[
      { r:"Genesis 35:16-20", note:"the better-known tomb tradition, near Bethlehem/Ephrath in Judah" },
      { r:"Jeremiah 31:15", note:"'Rachel weeping for her children' located 'in Ramah' — consistent with a northern, Benjamite tradition" } ]},
    { group:"Prophetic ecstasy", refs:[
      { r:"Numbers 11:24-29", note:"the Spirit rests on the seventy elders and they prophesy — a precedent for shared, temporary prophetic experience" },
      { r:"1 Samuel 19:20-24", note:"the same proverb repeated later, when Saul's own messengers — and then Saul himself — fall into prophetic ecstasy trying to arrest David" } ]},
    { group:"Chosen by lot", refs:[
      { r:"Joshua 7:16-18", note:"the same tribe-clan-family-man narrowing method, used to expose Achan" },
      { r:"Proverbs 16:33", note:"'the lot is cast into the lap, but its every decision is from the LORD'" },
      { r:"Acts 1:26", note:"the apostles cast lots to choose Judas's replacement" } ]},
    { group:"A king under the law", refs:[
      { r:"Deuteronomy 17:14-20", note:"the law of kingship this new 'book' (v. 25) is presumably built on" },
      { r:"1 Samuel 12:1-5", note:"Samuel's farewell review of his own record, delivered right after this kingship begins" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 4 — The ark captured; Ichabod
   ============================================================ */
"9:4": {
  era: {
    title: "ca. 1104 BC — the ark lost at Aphek",
    sub: "Iron Age I · the closing years of the judges · Eli's house falls",
    badges: ["Iron Age I", "Period of the judges", "Philistine wars", "≈3,130 years ago"]
  },
  timeOfDay: "day",
  summary: "Israel loses a first skirmish at Aphek and sends for the ark itself, hoping the box will win the war for them. It doesn't. The Philistines rally, Israel's line breaks, the ark is captured, Hophni and Phinehas die as Eli's judgment foretold, and a runner carries the news south with his clothes torn and dust on his head. Old Eli, waiting by the road with his heart trembling for the ark rather than his sons, falls backward off his seat and dies. His daughter-in-law, going into labor at the news, names her son Ichabod — 'the glory has departed' — and dies without ever looking at him.",
  focusPlace: "ebenezer",
  places: [
    { id:"ebenezer", role:"Israel's camp facing the Philistines (v. 1)" },
    { id:"aphek",     role:"The Philistine muster point across the valley (v. 1)" },
    { id:"shiloh",    role:"The sanctuary awaiting news — and doom (vv. 12-22)" }
  ],
  journey: [
    { from:"aphek", to:"ebenezer",
      label:"The battle lines", km:3,
      note:"The two camps face each other across a short valley where the coast road bends inland; the first day's fighting alone costs Israel about four thousand men (v. 2)." },
    { from:"ebenezer", to:"shiloh", dashed:true,
      label:"The runner with torn clothes", km:35,
      note:"A Benjaminite runs roughly 35 km south with his clothes torn and earth on his head; when he reports the ark taken, Eli — 98 years old — falls backward off his seat by the gate and breaks his neck. 'The glory has departed from Israel, for the ark of God was captured' (v. 22)." }
  ],
  hotspots: [
    { x:0.28, type:"object", label:"The ark carried into camp with a great shout",
      desc:"After the first defeat Israel sends to Shiloh for the ark itself, reasoning 'it may save us from the power of our enemies' (v. 3). When it enters the camp, 'all Israel gave a mighty shout, so that the earth resounded' — loud enough that the Philistines hear it and are afraid, remembering the God 'who struck the Egyptians with every sort of plague' (vv. 5-8)." },
    { x:0.4, type:"person", label:"Hophni and Phinehas beside it", av:"priest",
      desc:"Eli's corrupt sons (2:12-17, 22-25) accompany the ark to the field, exactly as the man of God had warned: 'both of them shall die on the same day' (2:34). Both fall in the rout (v. 11)." },
    { x:0.6, type:"person", label:"Old Eli on his seat by the road", av:"priest",
      desc:"Ninety-eight years old and blind, Eli waits by the roadside, 'for his heart trembled for the ark of God' — not for his sons. At the word 'the ark of God is captured' he falls backward, breaks his neck, and dies (vv. 13-18)." },
    { x:0.78, type:"person", label:"The dying wife of Phinehas naming Ichabod", av:"woman",
      desc:"Already in labor, she hears her husband and father-in-law are dead and the ark taken, gives birth, and names the boy Ichabod, 'no glory' — 'she said, \"The glory has departed from Israel!\" because the ark of God had been captured' — then dies (vv. 19-22)." }
  ],
  environment: {
    chips: ["Two defeats near the coast-road corridor", "The ark treated as a war-talisman", "A great shout that reaches the enemy camp", "Shiloh's fall implied (Jer 7:12)", "A runner with torn clothes and dust on his head", "Iron Age I sanctuary town in shock"],
    text: "The fighting plays out along the corridor where the coastal plain narrows and the hill country begins — Philistine chariotry needs the flat ground, and Aphek's springs make it a natural muster point they use again a generation later (1 Sam 29). Israel's camp faces them from a low ridge that later tradition ties to Samuel's memorial stone (7:12). The chapter's grimmest implication is left for the reader: Jeremiah and the Psalms later treat Shiloh's own destruction as following from this disaster (Jer 7:12-14; Ps 78:60), even though 1 Samuel itself never narrates the sanctuary's fall directly."
  },
  objectsExtra: ["ark-covenant"],
  peopleExtra: ["eli"],
  culture: [
    { title:"Gods carried to war", icon:"⚔️",
      text:"Bringing a divine image or palladium onto the battlefield to guarantee victory was common ancient Near Eastern practice — armies fought convinced their god's physical presence fought with them. Israel's version here is diagnosed by the narrative itself as the same magic-thinking: the ark is summoned as a talisman ('it may save us,' v. 3) with no accompanying repentance or inquiry of the LORD, and it fails to save them — the text pointedly does not let the ark function as a lucky charm." },
    { title:"Ichabod and the departed glory", icon:"🕯️",
      text:"Kavod ('glory,' also 'weightiness' or 'honor') names the LORD's manifest presence, elsewhere resting visibly over the tabernacle (Ex 40:34-38). Naming the newborn 'no glory' turns a family tragedy into a theological verdict: what Israel has lost is not just a battle or a box, but God's own manifest presence from among them." },
    { title:"Shiloh's fall in archaeology", icon:"🏺",
      text:"Excavations at Khirbet Seilun (biblical Shiloh) have found a destruction layer generally dated to around the mid-11th century BC, consistent with — though not narrated by — the disaster this chapter sets in motion. Prophetic memory treats Shiloh's ruin as the paradigm warning of what unfaithfulness brings on a sanctuary (Jer 7:12-14; Ps 78:60)." }
  ],
  crossRefs: [
    { group:"The warning fulfilled", refs:[
      { r:"1 Samuel 2:27-36", note:"the man of God's judgment on Eli's house" },
      { r:"1 Samuel 3:11-14", note:"Samuel's own night vision confirms the same verdict" } ]},
    { group:"Shiloh remembered", refs:[
      { r:"Jeremiah 7:12-14", note:"'go now to my place that was in Shiloh... see what I did to it'" },
      { r:"Psalm 78:56-64", note:"the psalm's retelling of the ark's capture and Shiloh's abandonment" } ]},
    { group:"The ark is not a charm", refs:[
      { r:"Numbers 10:35-36", note:"the ark's proper role — going before Israel at the LORD's own command" },
      { r:"Joshua 6", note:"contrast: the ark at Jericho, carried in obedience, not as a talisman" },
      { r:"Jeremiah 3:16", note:"a day coming when the ark itself will not even be missed" } ]},
    { group:"What glory means", refs:[
      { r:"Exodus 40:34-38", note:"the glory filling the tabernacle" },
      { r:"Ezekiel 10:18", note:"the glory departing the temple centuries later, echoing this scene" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 5 — The ark in Dagon's temple
   ============================================================ */
"9:5": {
  era: {
    title: "ca. 1104 BC — the ark among the Philistines",
    sub: "Iron Age I · the Philistine pentapolis · a captive God takes the temple",
    badges: ["Iron Age I", "Period of the judges", "Philistine wars", "≈3,130 years ago"]
  },
  timeOfDay: "day",
  summary: "The Philistines bring their trophy to Ashdod and set it beside Dagon in his temple. Twice the god is found fallen on his face before it; the second time his head and hands lie broken off on the threshold. Tumors and panic break out across the city, so the ark is passed to Gath, and then, as the plague follows it, on to Ekron — whose people refuse it outright, crying that it has come 'to kill us and our people.' What was meant as a captured god's humiliation turns into an untamed captive no city wants to keep.",
  focusPlace: "ashdod",
  places: [
    { id:"ashdod", role:"Dagon's temple; the idol falls twice (vv. 1-7)" },
    { id:"gath",   role:"The ark's second stop, and the plague follows it (v. 8)" },
    { id:"ekron",  role:"Panic and outright refusal — 'they have brought around to us the ark' (v. 10)" }
  ],
  journey: [
    { from:"ashdod", to:"gath",
      label:"Pass the problem along", km:19,
      note:"After Dagon falls and Ashdod is struck with tumors, the city's lords decide to move the ark rather than send it home." },
    { from:"gath", to:"ekron",
      label:"The hot potato", km:16,
      note:"Each city that receives the ark breaks out in tumors and panic; by the time it reaches Ekron the people refuse it outright before it even enters, forcing the lords back to the field to decide what to do (vv. 8-10)." }
  ],
  hotspots: [
    { x:0.25, type:"object", label:"Dagon fallen on his face before the ark",
      desc:"Set up beside the ark overnight, Dagon is found the next morning face-down before it 'like one prostrate before a superior' — restored to his place, he is found the same way a second morning, but this time with his head and both hands broken off, lying on the threshold (vv. 3-4)." },
    { x:0.45, type:"object", label:"The ark alone in the holy place",
      desc:"By the second fall only Dagon's torso remains standing; the ark occupies the temple as if it, not the Philistine grain god, is the one true resident — a captured deity that refuses to be a trophy." },
    { x:0.65, type:"person", label:"Ashdodite priests who thereafter skip the threshold", av:"priest",
      desc:"The narrator adds an eyewitness detail of enduring local custom: 'that is why the priests of Dagon and all who enter Dagon's house do not tread on the threshold of Dagon in Ashdod to this day' (v. 5)." }
  ],
  environment: {
    chips: ["Philistine pentapolis under plague", "Tumors (opalim) and panic", "Dead in the streets", "A trophy that will not stay tame", "Dagon's toppled cult statue", "'The hand of the LORD was heavy'"],
    text: "Ashdod, Gath, and Ekron were three of the five Philistine 'royal cities' governing the coastal plain, each with its own lord and temple. The narrative moves the ark city to city as a plague moves — each stop struck with tumors ('opalim,' v. 6) and a death toll severe enough that 'the cry of the city went up to heaven' (v. 12) — turning what began as a war trophy into a hazard no city will host for long."
  },
  objectsExtra: ["ark-covenant"],
  peopleExtra: [],
  culture: [
    { title:"Dagon — grain god, not fish god", icon:"🌾",
      text:"Dagon (from dagan, 'grain') was a well-attested West Semitic and Philistine deity associated with grain and fertility, worshiped across the region long before the Philistines arrived; the popular idea that 'Dagon' means a fish-god rests on a medieval misreading of the Hebrew and is not supported by the ancient evidence. Temples associated with Philistine cult practice have been excavated in the Ashdod region, consistent with the city's biblical role as a Dagon cult center." },
    { title:"Trophy gods in the ancient Near East", icon:"🏛️",
      text:"Carrying a defeated enemy's divine image to the victor's own temple was standard ANE practice, crediting a battlefield win to one's own god (compare the Philistines later doing exactly this with Saul's armor, 1 Sam 31:10). The irony here is total reversal: the 'captured' ark does not sit passively as a trophy — it topples the very god it was set beside, and effectively takes the temple instead." },
    { title:"The plague — a common but uncertain identification", icon:"🐭",
      text:"Chapter 6 later pairs the tumors with an outbreak of mice/rats (6:4-5), which has led some interpreters to suggest a bubonic-type plague spread by rodents. This is often proposed but not established with certainty — the text itself is more interested in the plague as the LORD's 'heavy hand' than in a clinical diagnosis, and readers should hold the rodent-plague theory as a plausible guess rather than a settled fact." }
  ],
  crossRefs: [
    { group:"The LORD among the gods", refs:[
      { r:"Exodus 12:12", note:"'on all the gods of Egypt I will execute judgments'" },
      { r:"Isaiah 19:1", note:"the idols of Egypt tremble at the LORD's presence" },
      { r:"Isaiah 46:1-2", note:"Bel bows down, Nebo stoops — captured idols carted off, unable to save themselves" } ]},
    { group:"Thresholds and superstitions", refs:[
      { r:"Zephaniah 1:9", note:"a later oracle against 'all who leap over the threshold'" } ]},
    { group:"The hand of the LORD", refs:[
      { r:"Exodus 9:3", note:"'the hand of the LORD' against Egypt's livestock, the same phrase used here" },
      { r:"1 Samuel 5:6,9,11", note:"the phrase repeated as the plague spreads city to city" },
      { r:"Acts 13:11", note:"the same divine 'hand' strikes a sorcerer blind in the New Testament" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 6 — The ark returns on a cart
   ============================================================ */
"9:6": {
  era: {
    title: "ca. 1104 BC — the ark's road home",
    sub: "Iron Age I · wheat harvest in the Sorek valley · a diviners' test the LORD passes",
    badges: ["Iron Age I", "Period of the judges", "Philistine wars", "≈3,130 years ago"]
  },
  timeOfDay: "day",
  summary: "Seven months on, Philistine priests and diviners design a test: hitch two milk cows, still nursing calves, to a new cart carrying the ark and a guilt offering of golden tumors and mice, and see which way the untrained animals go. Against every instinct, the cows walk straight up the road to Beth-shemesh, lowing for the calves penned up behind them, and the diviners have their answer. Israelite reapers look up from the wheat harvest to see the ark coming home — joy that turns to disaster when some of the men look inside it and are struck down, and the ark moves on again, this time to a twenty-year rest at Kiriath-jearim.",
  focusPlace: "bethshemesh",
  places: [
    { id:"ekron",         role:"The ark's departure point after seven months among the Philistines (v. 1)" },
    { id:"bethshemesh",   role:"The cows' destination; harvest joy and disaster (vv. 12-20)" },
    { id:"kiriathjearim", role:"The ark's twenty-year rest begins here (v. 21–7:2)" }
  ],
  journey: [
    { from:"ekron", to:"bethshemesh",
      label:"The lowing cows", km:12,
      note:"Two milk cows, their calves penned up at home, are hitched to a new cart and set loose with no driver. They 'went straight in the direction of Beth-shemesh... lowing as they went, and turned neither to the right nor to the left' — a test the Philistine diviners designed and the LORD passed (vv. 7-12)." },
    { from:"bethshemesh", to:"kiriathjearim",
      label:"Up to the hill town", km:10,
      note:"After the deadly incident at Beth-shemesh, the townspeople send word to Kiriath-jearim to come take the ark, and it rests there twenty years rather than returning to a ruined Shiloh (v. 21–7:2)." }
  ],
  hotspots: [
    { x:0.22, type:"object", label:"The cart with the ark and the golden offering",
      desc:"Alongside the ark rides a chest holding five golden tumors and five golden mice — one for each Philistine lord — a 'guilt offering' meant to acknowledge the LORD and turn the plague away (vv. 4-8, 11)." },
    { x:0.4, type:"object", label:"The two milk cows",
      desc:"Deliberately untrained animals with nursing calves shut away — every natural instinct should pull them home, not away. Their straight, unguided walk to Israelite territory, lowing the whole way, is the diviners' own chosen proof of the LORD's hand (vv. 7-12)." },
    { x:0.6, type:"person", label:"Levites splitting the cart for the burnt offering", av:"priest",
      desc:"At the great stone in Joshua's field, the Levites take the cows down and offer them as a burnt offering, breaking up the wood of the cart for fuel — the wagon itself consumed on the spot (vv. 14-15)." },
    { x:0.78, type:"person", label:"Reapers looking up from the wheat harvest", av:"shepherd",
      desc:"'The people of Beth-shemesh were reaping their wheat harvest in the valley' when they look up and see the ark; the season (May-June) sets the scene's warmth and ordinariness right before it turns fatal (v. 13)." }
  ],
  environment: {
    chips: ["Wheat-harvest season, May-June", "The Sorek valley road", "The great stone of Abel as witness", "Deadly holiness even in the ark's return", "Golden tumors and mice as guilt offering", "A cart with no driver"],
    text: "Beth-shemesh sits where the Sorek valley opens from Philistine territory into the Judean hill country — the natural road the cart takes. The 'great stone,' later called Abel, stands in a field belonging to Joshua of Beth-shemesh and becomes both altar and witness marker. The chapter's sharp turn — celebration curdling into judgment when some of the men look into the ark (v. 19) — reads as the same lesson Uzzah's death later drives home in 2 Samuel 6: proximity to the ark does not neutralize its holiness, even when its return is itself an answered prayer."
  },
  objectsExtra: ["ark-covenant"],
  peopleExtra: [],
  culture: [
    { title:"Golden tumors and mice as guilt offering", icon:"🐭",
      text:"Making small images of an affliction and offering them to placate the offended deity was known sympathetic-magic practice in the ancient Near East — the Philistine priests explicitly frame the gold tumors and mice as an 'offering for guilt' (asham) meant to lift the plague, and instruct that it be sent along with the ark rather than withheld (vv. 3-5)." },
    { title:"A genuinely clever, falsifiable test", icon:"🐄",
      text:"The diviners' experiment is notable for its rigor by ancient standards: milk cows, never yoked before, with calves deliberately shut away as a pull toward home — if the cows wandered, grazed, or turned back for their calves, the plague would be judged coincidence; only a stubborn, lowing, undeviating walk straight into Israelite territory would count as proof. The text presents the diviners themselves as convinced by the result (vv. 9, 12)." },
    { title:"Why Kiriath-jearim, not Shiloh", icon:"🏔️",
      text:"The ark never returns to Shiloh in this account — consistent with the sanctuary's destruction implied elsewhere (Jer 7:12) — and even Beth-shemesh does not keep it, asking 'who is able to stand before the LORD, this holy God?' after the deaths there (6:20). Kiriath-jearim, a hill town on the Judah–Benjamin border, becomes its resting place for the next twenty years, until David brings it up to Jerusalem." }
  ],
  crossRefs: [
    { group:"The rules the joy forgot", refs:[
      { r:"Numbers 4:5-6,15,20", note:"why looking at or touching the uncovered ark brings death — the Kohathites' strict handling rules" },
      { r:"2 Samuel 6:6-7", note:"Uzzah struck down for touching the ark decades later — the same principle" } ]},
    { group:"The ark's road onward", refs:[
      { r:"1 Samuel 7:1-2", note:"Kiriath-jearim keeps the ark twenty years" },
      { r:"2 Samuel 6", note:"David finally brings the ark up to Jerusalem" },
      { r:"Psalm 132:6", note:"'we found it in the fields of Jaar' — a poetic memory of this very town" } ]},
    { group:"Guilt offerings", refs:[
      { r:"Leviticus 5:14-19", note:"the guilt/reparation offering the Philistine ritual echoes" } ]}
  ]
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
},

/* ============================================================
   1 SAMUEL 24 — David spares Saul in the cave at En-gedi
   ============================================================ */
"9:24": {
  era: {
    title: "ca. 1015 BC — David spares the king in a cave at En-gedi",
    sub: "Iron Age I · En-gedi oasis · David's fugitive years",
    badges: ["Iron Age I", "United monarchy (transition)", "Saul's pursuit of David", "≈3,040 years ago"]
  },
  timeOfDay: "day",
  summary: "Saul breaks off chasing Philistines to hunt David again, this time among the cliffs above En-gedi with three thousand chosen men. He steps alone into a cave to relieve himself — the very cave where David and his men are hiding in the dark recesses. David's men urge him to strike; instead he creeps forward and cuts off a corner of Saul's robe, then is conscience-stricken even for that. Outside, he calls after the king, robe-corner in hand, and Saul weeps: 'you are more righteous than I... I know that you shall surely be king.'",
  focusPlace: "engedi",
  places: [
    { id:"maon",      role:"Saul had nearly cornered David here before doubling back for the Philistines (23:24-28)" },
    { id:"ziph",       role:"The wilderness Saul combed first, tipped off by Ziphite informants (23:14-24)" },
    { id:"engedi",     role:"The cave among the wild goats' rocks where Saul enters alone (vv. 1-4)" },
    { id:"gibeah",     role:"Saul returns home once the confrontation ends (implied, v. 22)" }
  ],
  journey: [
    { from:"maon", to:"engedi", label:"Saul's pursuit shifts east", km:25,
      note:"From the Rock of Escape at Maon, word reaches Saul that David has moved to the cliffs above En-gedi — he redirects three thousand picked men east toward the Dead Sea." },
    { from:"engedi", to:"gibeah", dashed:true, label:"Saul goes home; David stays out", km:60,
      note:"Saul returns to his own town still without David in hand — the oath he swears here (v. 21) is why David later spares Saul's line even after becoming king." }
  ],
  hotspots: [
    { x:0.2, type:"person", label:"Saul enters the cave, unaware", av:"king",
      desc:"'To relieve himself' (v. 3) — the ordinary, undignified reason a king with three thousand soldiers ends up alone and exposed, deep inside the very cave sheltering the men hunting him." },
    { x:0.38, type:"person", label:"David's men, urging the kill", av:"warrior",
      desc:"'Here is the day of which the LORD said to you, Behold, I will give your enemy into your hand' (v. 4) — a plausible-sounding theology David refuses to accept as license." },
    { x:0.55, type:"object", label:"The severed corner of the robe",
      desc:"David creeps up and cuts off a corner of Saul's robe (me'il) rather than his life — and is conscience-stricken even for that small act against 'the LORD's anointed' (vv. 4-6)." },
    { x:0.72, type:"person", label:"David's public appeal", av:"shepherd",
      desc:"Once Saul is safely outside, David follows and calls out, bowing with his face to the ground, holding up the cut cloth as proof he could have killed the king and didn't (vv. 8-11)." },
    { x:0.88, type:"person", label:"Saul weeps", av:"king",
      desc:"'Is this your voice, my son David?... you are more righteous than I' (vv. 16-17). Saul concedes the kingdom is David's future and asks an oath: spare his name and descendants (vv. 20-21) — the same oath that later saves Mephibosheth." }
  ],
  environment: {
    chips: ["Daytime desert cliffs", "Wild-goat country (En-gedi = 'spring of the kid')", "Limestone caves on the Dead Sea escarpment", "3,000 picked troops vs. a fugitive band", "Iron Age I hill-country warfare"],
    text: "En-gedi's cliffs drop nearly 400 m to the Dead Sea, cut by spring-fed ravines (Nahal David, Nahal Arugot) whose waterfalls sustain ibex and hyrax even in a rain-shadow desert — hence the name, 'spring of the young goat.' The limestone bluffs are honeycombed with caves large enough to hide a company of men in total darkness a few meters from the entrance light, exactly the setup the narrative assumes: Saul can walk in and not see David's men at the back, while they can see him clearly against the daylight behind him."
  },
  objectsExtra: ["robe"],
  peopleExtra: ["saul","david"],
  culture: [
    { title:"'The LORD's anointed' — why David held back", icon:"🫗",
      text:"David refuses twice in as many chapters (24, 26) to kill Saul, calling him 'the LORD's anointed' — the same anointing oil that once marked Saul (1 Sam 10:1) and that Samuel has already poured on David himself (16:13). To strike Saul would be to treat kingship as a prize seized by force rather than a gift given by God; David lets that conviction govern him even when his own men supply a ready-made justification." },
    { title:"Robes, again", icon:"🥻",
      text:"A torn or cut robe keeps recurring around Saul's kingship: Samuel's robe tears in his hand at Gilgal and the kingdom is pronounced 'torn' from Saul (15:27-28); here it is Saul's own robe that is cut, a smaller, symbolic echo — proof of proximity and restraint rather than a verdict. Samuel's robe reappears once more at En-dor (28:14), closing the same image a third time across Saul's story." },
    { title:"David's oath and Mephibosheth", icon:"🤝",
      text:"Saul's request — 'do not cut off my offspring after me, and do not destroy my name' (v. 21) — is the exact oath David keeps decades later when, as king, he could legally erase Saul's line but instead brings Jonathan's crippled son Mephibosheth to eat permanently at the king's own table (2 Sam 9)." }
  ],
  crossRefs: [
    { group:"Same restraint, a later chapter", refs:[
      { r:"1 Samuel 26:7-11", note:"the near-identical scene repeated: Saul asleep in camp, David again refuses to strike 'the LORD's anointed'" } ]},
    { group:"The oath kept", refs:[
      { r:"2 Samuel 9:1-13", note:"David honors this chapter's oath, restoring Mephibosheth rather than erasing Saul's house" } ]},
    { group:"Robe as recurring sign", refs:[
      { r:"1 Samuel 15:27-28", note:"Samuel's robe tears; the kingdom is pronounced torn from Saul" },
      { r:"1 Samuel 28:14", note:"Samuel's robe identifies him one last time, at En-dor" } ]},
    { group:"Kingship as the LORD's to give, not seize", refs:[
      { r:"Psalm 75:6-7", note:"'it is God who executes judgment, putting down one and lifting up another'" },
      { r:"2 Samuel 5:3", note:"the anointing David refuses to force here finally comes, years later, at Hebron" } ]}
  ]
},

/* ============================================================
   1 SAMUEL 25 — Nabal, Abigail, and David's restrained anger
   ============================================================ */
"9:25": {
  era: {
    title: "ca. 1015 BC — Nabal's insult and Abigail's peace offering",
    sub: "Iron Age I · Carmel of Judah, Maon district · shortly after Samuel's death",
    badges: ["Iron Age I", "United monarchy (transition)", "David's fugitive years", "≈3,040 years ago"]
  },
  timeOfDay: "day",
  summary: "Samuel dies, and all Israel mourns; David moves his band into the wilderness near Maon. At shearing time he sends young men to greet the wealthy Nabal and ask, by custom, for provisions in return for having protected his flocks unpaid. Nabal answers with contempt — 'who is David?' — and David arms two hundred men to wipe out his household by morning. Nabal's wife Abigail intercepts the column with a loaded gift train and a speech that talks David out of bloodguilt; ten days later, hearing what he nearly did, Nabal's heart fails and the LORD strikes him dead. David marries the widow who saved him from himself.",
  focusPlace: "carmel-judah",
  places: [
    { id:"ramah",       role:"Samuel dies; all Israel gathers to mourn and bury him (v. 1)" },
    { id:"maon",        role:"Nabal's home district — 3,000 sheep and 1,000 goats on the wilderness rim (v. 2)" },
    { id:"carmel-judah",role:"Nabal's shearing-feast estate, where the request is refused and Abigail intercepts David (vv. 2-35)" }
  ],
  journey: [
    { from:"ramah", to:"carmel-judah", dashed:true, label:"Samuel's death opens the chapter", km:40,
      note:"Israel gathers at Ramah to bury the prophet who anointed both kings, then the narrative shifts south to David, now camped in the wilderness near Maon and Carmel." },
    { from:"maon", to:"carmel-judah", label:"Nabal's flocks come down for shearing", km:5,
      note:"A short move from summer pasture to the home estate for the shearing feast — a customary time of open-handed feasting the text expects and Nabal refuses." }
  ],
  hotspots: [
    { x:0.18, type:"person", label:"Nabal at his shearing feast", av:"elder",
      desc:"'Harsh and badly behaved,' a wealthy Calebite living like a king for a night (v. 36) — and blind to the debt his shepherds owed David's men for months of unpaid protection (vv. 15-16, 21)." },
    { x:0.36, type:"person", label:"David's ten young men, turned away", av:"warrior",
      desc:"A polite, customary request — 'give whatever you have at hand' (v. 8) — met with contempt: 'Who is David?... shall I take my bread and my water... and give it to men who come from I do not know where?' (vv. 10-11)." },
    { x:0.55, type:"person", label:"Abigail's swift ride", av:"woman",
      desc:"Told what her husband did, she loads donkeys without a word to him and rides out to meet David's armed column before it reaches the estate — 'discerning and beautiful,' the text says, married to a fool (v. 3)." },
    { x:0.72, type:"object", label:"The loaded gift train",
      desc:"Two hundred loaves, two skins of wine, five dressed sheep, roasted grain, a hundred raisin cakes, two hundred fig cakes (v. 18) — enough to feed David's whole company and defuse a massacre with abundance." },
    { x:0.88, type:"person", label:"Nabal's collapse; David's marriage", av:"elder",
      desc:"Told the next morning what he escaped, 'his heart died within him, and he became as a stone'; ten days later 'the LORD struck Nabal, and he died' (vv. 37-38). David, hearing it, sends for the widow who had stopped him from avenging himself (vv. 39-42)." }
  ],
  environment: {
    chips: ["Shearing-feast season", "Wilderness rim sheep country", "3,000 sheep, 1,000 goats", "Loaded donkey caravan", "Iron Age I hospitality customs", "A widow's swift diplomacy"],
    text: "Maon and Carmel sit at the seam between Judah's cultivated hill country and open wilderness — exactly the kind of marginal grazing land where a large flock needed informal protection from raiders, the very service David's men had quietly provided (vv. 7, 15-16). Shearing time was a recognized festival across the ancient Near East, a season of open-handed feasting (compare Absalom's shearing feast at Baal-hazor, 2 Sam 13:23-27) — which is exactly why Nabal's refusal reads as such a glaring breach of custom, not just personal rudeness."
  },
  objectsExtra: ["donkey","wineskin"],
  peopleExtra: ["david","abigail","nabal","saul"],
  culture: [
    { title:"Nabal's name is the insult", icon:"🪨",
      text:"'Nabal' (naval) means 'fool' in Hebrew, and Abigail says so outright: 'as his name is, so is he... Nabal is his name, and folly is with him' (v. 25) — a wordplay the narrator clearly intends as verdict, not coincidence." },
    { title:"Shepherd protection money — an ancient custom", icon:"🐑",
      text:"David's men had been an unpaid perimeter guard for Nabal's shepherds 'all the while they were in Carmel,' never stealing so much as one animal (vv. 7, 15-16, 21) — a real service in raider country. His request for provisions in return, at a feast season built for generosity, follows a recognized customary exchange; Nabal's refusal is a calculated public insult, not mere stinginess." },
    { title:"Abigail as a wisdom figure", icon:"📖",
      text:"Abigail's speech (vv. 24-31) reads like wisdom literature in miniature — she reasons David out of bloodguilt by appealing to his future as the LORD's anointed king, not merely his temper, and the text treats her intervention as the LORD's own restraint of David: 'the LORD has restrained you from bloodguilt and from working salvation with your own hand' (v. 26)." }
  ],
  crossRefs: [
    { group:"Restraint from private vengeance, again", refs:[
      { r:"1 Samuel 24:4-7", note:"the same restraint toward Saul, just one chapter earlier" },
      { r:"1 Samuel 26:9-11", note:"and repeated again toward the sleeping Saul" } ]},
    { group:"What became of Nabal's household", refs:[
      { r:"2 Samuel 3:3", note:"Abigail as David's wife bears Chileab (called Daniel in 1 Chron 3:1) at Hebron" },
      { r:"1 Samuel 25:44", note:"meanwhile Saul gives Michal, David's first wife, to Palti — reversed only in 2 Sam 3:13-16" } ]},
    { group:"A fool in wisdom literature", refs:[
      { r:"Proverbs 12:4", note:"'an excellent wife is the crown of her husband' — the inverse of Nabal and Abigail" },
      { r:"Proverbs 31:10-11", note:"the capable wife whose husband trusts her — Abigail's opposite is Nabal's blindness to what he had" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 1 — news of Saul and Jonathan's death; the Song of the Bow
   ============================================================ */
"10:1": {
  era: {
    title: "ca. 1010 BC — news of Saul and Jonathan's deaths reaches David at Ziklag",
    sub: "Iron Age I · Ziklag · the last days of David's fugitive years",
    badges: ["Iron Age I", "End of Saul's reign", "David's fugitive years end", "≈3,036 years ago"]
  },
  timeOfDay: "day",
  summary: "Two days after David returns to a burned Ziklag from routing an Amalekite raid, a man arrives from the north with clothes torn and dust on his head — the marks of a messenger carrying disaster. He is an Amalekite sojourner who claims he found Saul mortally wounded on Gilboa and, at the king's own request, finished him off; as proof he lays down Saul's crown and armlet. David and his men tear their clothes and mourn Saul, Jonathan, and Israel's fallen 'until evening,' then David has the messenger executed for daring to lift a hand against 'the LORD's anointed,' even by his own confession. The chapter closes with David's formal lament over Saul and Jonathan, the Song of the Bow — 'How the mighty have fallen' — ordered taught to the sons of Judah.",
  focusPlace: "ziklag",
  places: [
    { id:"gilboa",  role:"Where Saul and Jonathan actually died in battle the day before (1 Sam 31), the scene the Amalekite claims to have witnessed" },
    { id:"ziklag",  role:"David's base, still smoldering from the Amalekite raid two chapters earlier, where the messenger finds him (v. 1)" },
    { id:"hebron",  role:"Where David moves within days of this chapter to be anointed king over Judah (2 Sam 2:1-4) — the very kingship this lament refuses to celebrate" }
  ],
  journey: [
    { from:"gilboa", to:"ziklag", label:"The messenger's three-day run south", km:140,
      note:"News of the defeat traveled fast: 'on the third day' a runner reaches Ziklag, roughly 140 km south of Gilboa, with torn clothes and dust on his head — the recognized signs of a bearer of disaster (v. 2)." },
    { from:"ziklag", to:"hebron", dashed:true, label:"David's next move, just after this chapter", km:44,
      note:"Once the mourning ends, David inquires of the LORD and moves his household to Hebron, where the men of Judah anoint him king over their own tribe (2 Sam 2:1-4) — seven and a half years before the events of chapter 5." }
  ],
  hotspots: [
    { x:0.14, type:"person", label:"The Amalekite arrives in mourning dress", av:"traveler",
      desc:"'With his clothes torn and dirt on his head' (v. 2) — the conventional signs of catastrophe, the same body language David and his men will adopt in earnest a few verses later." },
    { x:0.32, type:"person", label:"His story: a mercy killing on Gilboa", av:"traveler",
      desc:"'Saul was leaning on his spear... he said to me, Stand beside me and kill me... So I stood beside him and killed him' (vv. 6-10) — a tale built to flatter David, since 1 Samuel 31:4-5 already shows Saul falling on his own sword with only his armor-bearer as witness." },
    { x:0.5, type:"object", label:"Saul's crown and armlet, laid before David",
      desc:"The messenger's proof: 'the crown that was on his head and the armlet that was on his arm' (v. 10), scavenged from the battlefield dead — royal regalia offered as a bid for reward, not evidence of loyalty." },
    { x:0.68, type:"person", label:"David's verdict", av:"king",
      desc:"'How is it you were not afraid to put out your hand to destroy the LORD's anointed?' (v. 14) — even a self-incriminating boast against Saul draws a death sentence, the same principle that stayed David's own hand in the cave at En-gedi." },
    { x:0.86, type:"person", label:"The Song of the Bow", av:"king",
      desc:"'How the mighty have fallen!' (vv. 19, 25, 27) — David's formal lament for Saul and Jonathan, ordered written into the Book of Jashar and taught to the sons of Judah; it praises Jonathan's bow and Saul's sword and never once mentions David's own claim to the throne." }
  ],
  environment: {
    chips: ["Torn clothes & dust — mourning signs", "Negev border town", "Royal regalia as battlefield loot", "Formal qinah-meter lament", "Iron Age I succession crisis"],
    text: "Ziklag sits on the arid southern frontier where Judah's hill country gives way to Philistine and Amalekite grazing land — a plausible three-day run from the Gilboa battlefield in the north. The 'crown' (nezer) and armlet the messenger carries were recognizable royal insignia, easy plunder from a fallen king's body on an abandoned battlefield. David's lament, by contrast, is a formal literary composition in the same qinah ('limping') meter later used for funeral dirges throughout the prophets, drawn from a now-lost anthology, the Book of Jashar (also cited at Joshua 10:13)."
  },
  objectsExtra: ["spear","crown"],
  peopleExtra: ["david","saul","jonathan","amalekite-messenger"],
  culture: [
    { title:"'The LORD's anointed' — a principle David keeps even now", icon:"🫗",
      text:"David refused to kill Saul himself in chapters 24 and 26, calling him 'the LORD's anointed'; here he applies the identical principle against a stranger who merely claims the deed — proof the conviction was never just personal restraint toward a man he knew, but a fixed rule about how kingship may and may not change hands." },
    { title:"An Amalekite, of all people", icon:"⚔️",
      text:"The messenger identifies himself as 'the son of a sojourner, an Amalekite' (v. 13) — the very people Saul was commanded to annihilate in 1 Samuel 15 and failed to finish, and the same raiders whose attack on Ziklag David had just avenged in the previous chapter (1 Sam 30). Whether or not his story is true, an Amalekite claiming Saul's death closes a loop the reader has watched since Saul spared Agag." },
    { title:"The Song of the Bow", icon:"🏹",
      text:"David's lament (vv. 19-27) is a genuine work of ancient Hebrew poetry, not a summary of one — refrain, parallelism, and the qinah meter later used for funeral dirges (e.g. Amos 5:2). It orders Judah's daughters to weep for Saul's gifts of scarlet and gold (v. 24) and praises Jonathan's bow and Saul's sword 'not returning empty' (v. 22) without a word of triumph for David's own rising fortunes." }
  ],
  crossRefs: [
    { group:"Same restraint toward 'the LORD's anointed'", refs:[
      { r:"1 Samuel 24:6-7", note:"David refuses to kill Saul himself in the cave at En-gedi" },
      { r:"1 Samuel 26:9-11", note:"and again refuses to strike the sleeping king at Hachilah" } ]},
    { group:"What really happened on Gilboa", refs:[
      { r:"1 Samuel 31:3-6", note:"Saul actually dies by falling on his own sword, with only his armor-bearer present — contradicting the Amalekite's story" } ]},
    { group:"Amalek's long shadow over Saul's house", refs:[
      { r:"1 Samuel 15:7-9", note:"Saul's incomplete destruction of Amalek, the failure that cost him the kingdom" },
      { r:"1 Samuel 30:1-20", note:"David had just finished punishing an Amalekite raid on Ziklag two chapters earlier" } ]},
    { group:"David becomes king", refs:[
      { r:"2 Samuel 2:1-4", note:"days later, David is anointed king over Judah alone at Hebron" },
      { r:"2 Samuel 5:1-3", note:"seven and a half years after that, all Israel's elders anoint him king at Hebron" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 2 — David king at Hebron; the standoff at Gibeon's pool
   ============================================================ */
"10:2": {
  era: {
    title: "ca. 1010 BC — David anointed king over Judah; Abner sets up Ish-bosheth; war begins at Gibeon's pool",
    sub: "Iron Age I/IIA · Hebron and Mahanaim to Gibeon · the opening skirmish of Israel's civil war",
    badges: ["Iron Age I/IIA", "Divided kingdom begins", "Twelve-on-twelve duel", "≈3,036 years ago"]
  },
  timeOfDay: "day",
  summary: "With Saul dead and his own lament for him just sung, David inquires of the LORD and moves from Ziklag up to Hebron with his two wives, Ahinoam and Abigail, and all his men and their households; the men of Judah come and anoint him king over the house of Judah alone. His first act as king is a diplomatic one — commending the men of Jabesh-gilead for the loyalty that risked their lives to bury Saul's body (1 Sam 31:11-13) and quietly inviting their allegiance. But Abner, Saul's army commander, has already taken Saul's one surviving son, Ish-bosheth, across the Jordan to Mahanaim and made him king over Gilead, the Ashurites, Jezreel, Ephraim, Benjamin, and 'all Israel' — a rival throne propped up by Saul's general rather than Saul's own house. War between the two camps becomes inevitable when Abner marches his men to the pool of Gibeon and meets Joab's men there; Abner proposes 'let the young men arise and compete before us,' and twelve men from each side draw swords and kill each other in a single exchange, giving the place its name, Helkath-hazzurim, 'the field of blades.' A fierce battle follows and Abner's men are routed. In the retreat, Joab's youngest brother Asahel, 'as swift of foot as a wild gazelle,' fixes on Abner alone and will not turn aside despite two direct warnings; Abner finally kills him with a reverse thrust of his spear butt through the stomach. Joab and the third brother, Abishai, press the pursuit until Abner rallies the Benjaminites atop a hill and calls out, 'shall the sword devour forever? Do you not know that the end will be bitter?' — Joab agrees to stop, and both armies withdraw through the night, Abner's men to Mahanaim, Joab's to Hebron, having lost nineteen men and Asahel against three hundred and sixty of Abner's.",
  focusPlace: "gibeon",
  places: [
    { id:"hebron",   role:"Where David and his men settle and the men of Judah anoint him king over Judah alone — the seat of the rival kingdom Abner's move at Mahanaim is meant to counter (vv. 1-4, 11)" },
    { id:"mahanaim", role:"East of the Jordan in Gilead, where Abner installs Ish-bosheth as king over the northern tribes, safely out of David's immediate reach (vv. 8-9)" },
    { id:"gibeon",   role:"Where Joab's men and Abner's men meet at 'the pool' and the twelve-on-twelve duel triggers the battle that opens the civil war (vv. 12-17)" }
  ],
  journey: [
    { from:"hebron", to:"gibeon", label:"Joab leads David's men out to meet Abner", km:38,
      note:"Joab and 'the servants of David' march north from Hebron into Benjaminite territory and find Abner's men waiting at the pool of Gibeon, roughly the midpoint between the two rival capitals (v. 13)." },
    { from:"mahanaim", to:"gibeon", label:"Abner leads Ish-bosheth's men west across the Jordan", km:60,
      note:"Abner's column comes down from Mahanaim in Gilead, crosses the Jordan, and reaches Gibeon from the east — the two armies converging on ground roughly equidistant from Hebron and from Abner's own new capital (v. 12)." },
    { from:"gibeon", to:"mahanaim", dashed:true, label:"Abner's retreat, marching all night", km:60,
      note:"After Joab calls off the pursuit at Abner's appeal, Abner's surviving men march the whole night back through the Arabah, cross the Jordan, and pass through Bithron to reach Mahanaim by daybreak (vv. 29, 32)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"David anointed king over Judah at Hebron", av:"king",
      desc:"Inquiring of the LORD first — 'shall I go up... where shall I go up?' — David moves his household and men to Hebron, and the men of Judah anoint him king over the house of Judah alone (vv. 1-4)." },
    { x:0.17, type:"person", label:"David honors Jabesh-gilead's loyalty to Saul", av:"king",
      desc:"His first royal act is a message to the men who recovered and buried Saul's and Jonathan's bodies at great risk: 'may the LORD show steadfast love and faithfulness to you' — a quiet bid for their loyalty too (vv. 5-7)." },
    { x:0.3, type:"person", label:"Abner crowns Ish-bosheth at Mahanaim", av:"warrior",
      desc:"'Abner the son of Ner, commander of Saul's army, took Ish-bosheth the son of Saul... and made him king' over Gilead, the Ashurites, Jezreel, Ephraim, Benjamin, and all Israel — a rival throne built entirely on Abner's own authority, not Ish-bosheth's (vv. 8-10)." },
    { x:0.45, type:"person", label:"Twelve against twelve at the pool of Gibeon", av:"warrior",
      desc:"'Let the young men arise and compete before us' — twelve of Joab's men and twelve of Abner's each seize an opponent's head and drive a sword into his side, and all twenty-four fall together, naming the spot Helkath-hazzurim, 'the field of blades' (vv. 14-16)." },
    { x:0.6, type:"person", label:"Asahel refuses to turn aside", av:"warrior",
      desc:"'As swift of foot as a wild gazelle,' Asahel chases Abner alone through the rout; Abner warns him twice — 'turn aside... why should I strike you to the ground?' — and when Asahel will not stop, kills him with a backward thrust of his spear butt through the stomach (vv. 18-23)." },
    { x:0.75, type:"person", label:"Abner's appeal on the hill: 'shall the sword devour forever?'", av:"warrior",
      desc:"With Joab and Abishai closing in and the Benjaminites rallied around him on a hilltop, Abner calls out that continued killing between kinsmen will only turn bitter; Joab agrees, blows the trumpet, and the pursuit ends (vv. 24-28)." },
    { x:0.92, type:"object", label:"The night march home, and the count of the dead",
      desc:"Abner's column marches through the Arabah all night to Mahanaim; Joab's men march all night back to Hebron, arriving at daybreak having lost Asahel and nineteen others against three hundred and sixty of Abner's men (vv. 29-32)." }
  ],
  environment: {
    chips: ["Two rival kings, two rival capitals", "A 'competition' that becomes a massacre", "Helkath-hazzurim — 'field of blades'", "Spear-butt through the stomach", "A hilltop rally and a trumpet recall", "Iron Age I/IIA civil war"],
    text: "Gibeon's pool was a real, substantial rock-cut water installation — a stepped shaft cut deep into the hill to reach the water table, later excavated by archaeologists and matching the setting the text implies for two armies to face off across open ground beside it. The armies meet almost exactly between the two new capitals: Hebron roughly 38 km south, Mahanaim across the Jordan to the east, putting Gibeon on the practical boundary between David's Judah and Ish-bosheth's northern coalition. Abner's proposed 'competition' (a sanctioned combat contest, not unlike duels attested elsewhere in the ancient Near East) was meant to settle or at least test the standoff without full battle, but the mutual killing of all twenty-four men instead ignites the very war it was staged to avoid or postpone."
  },
  objectsExtra: ["sword","spear"],
  peopleExtra: ["david","joab","abner","ishbosheth","asahel","abishai"],
  culture: [
    { title:"Two capitals, two kings", icon:"👑",
      text:"For the first time since Saul's coronation, Israel has two competing kings at once: David at Hebron, crowned by Judah's own elders, and Ish-bosheth at Mahanaim, installed entirely by Abner's initiative rather than any popular acclaim (v. 8-10) — a fault line (Judah vs. the northern tribes) that will resurface generations later when the kingdom splits permanently after Solomon (1 Kgs 12)." },
    { title:"'Let the young men arise and compete'", icon:"⚔️",
      text:"Abner's proposal (v. 14) most plausibly describes a sanctioned trial of champions, meant to settle the standoff with limited bloodshed rather than a full engagement — but the symmetrical outcome, all twenty-four combatants dying together, functions instead as an omen the narrative lets speak for itself: neither side has actually won anything, and the larger battle that follows immediately proves it." },
    { title:"Why Abner didn't just kill Asahel sooner", icon:"🏃",
      text:"Abner's two warnings before he finally strikes (vv. 21-22) read as a commander trying to avoid killing Joab's own brother and the blood feud it would guarantee — 'how then could I lift up my face to your brother Joab?' — a fear that proves exactly justified when Joab murders him under a truce one chapter later (2 Sam 3:27)." }
  ],
  crossRefs: [
    { group:"What led here", refs:[
      { r:"1 Samuel 31:1-13", note:"Saul and Jonathan's deaths on Gilboa, and Jabesh-gilead's recovery of their bodies" },
      { r:"2 Samuel 1:1-27", note:"David's lament over Saul and Jonathan, sung just before he moves to Hebron" } ]},
    { group:"Where this feud leads", refs:[
      { r:"2 Samuel 3:22-30", note:"Joab murders Abner at Hebron's gate in revenge for Asahel" },
      { r:"2 Samuel 20:8-10", note:"Joab later kills Amasa the same way — a blade to the stomach while pretending peace" } ]},
    { group:"The kingdom's later north/south fault line", refs:[
      { r:"1 Kings 12:16-20", note:"generations later, the same Judah/northern-tribes split becomes permanent after Solomon's death" } ]},
    { group:"David's own kingship confirmed at Hebron", refs:[
      { r:"1 Samuel 16:1, 12-13", note:"Samuel's private anointing of David as a boy in Bethlehem, years before Judah's own public one here" },
      { r:"2 Samuel 5:1-5", note:"seven and a half years later, all Israel's elders anoint David king at the same city" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 3 — Abner defects; murdered at Hebron's gate
   ============================================================ */
"10:3": {
  era: {
    title: "ca. 1004 BC — Abner breaks with Ish-bosheth, defects to David, and is murdered at Hebron's gate",
    sub: "Iron Age IIA · Mahanaim to Hebron · the end of the house of Saul's resistance",
    badges: ["Iron Age IIA", "Civil war's final year", "Abner's assassination", "≈3,030 years ago"]
  },
  timeOfDay: "day",
  summary: "The war between the two houses drags on, David steadily gaining strength while Saul's house grows weaker; the chapter opens with a formal list of six sons born to David at Hebron by six different wives, each a small mark of the dynasty consolidating even mid-war. The turning point comes from an unlikely direction: Ish-bosheth accuses Abner of taking Rizpah, his father Saul's concubine — a claim to royal prerogative in the ancient Near East that only a would-be king would dare make — and Abner explodes in fury at being challenged by the very figurehead he installed: 'am I a dog's head of Judah? ... and you charge me today with a fault concerning this woman?' He vows on the spot to transfer the whole kingdom to David, and Ish-bosheth, stripped of his only real power, cannot answer a word. Abner sends messengers to David — 'make your covenant with me, and my hand shall be with you to bring over all Israel to you' — and David agrees on one condition: the return of Michal, Saul's daughter, his first wife, taken from him during his fugitive years. Abner delivers her himself, prying her from her second husband Paltiel, who follows weeping as far as Bahurim before Abner sends him back. Abner then works Israel's elders and the tribe of Benjamin directly, persuading them 'as one man' to turn to David, and comes to Hebron with twenty men for a feast and a formal covenant, leaving 'in peace' to gather all Israel behind the new king. But Joab, returning from a raid just after Abner departs, is furious that David let him go unharmed — 'you know that Abner... came to deceive you' — and without David's knowledge sends messengers to recall Abner, meets him privately at the gate as if to speak peaceably, and stabs him in the stomach, killing him in revenge for Asahel. David publicly disowns the murder: he orders Joab and all the people into mourning clothes, walks behind Abner's bier himself, weeps aloud at the grave, and refuses to eat all day despite the people's urging, so that 'all the people took notice of it, and it pleased them' — proof, the text insists, that the killing was not done at the king's command. David closes the chapter both cursing Joab's house and confessing his own weakness: 'I am this day weak, though anointed king, and these men, the sons of Zeruiah, are too fierce for me.'",
  focusPlace: "hebron",
  places: [
    { id:"hebron",   role:"Where David's six sons are born during the war, where Abner comes to seal his covenant with David, and where Joab murders him at the city gate (vv. 2-5, 20-27)" },
    { id:"mahanaim", role:"Abner's base with Ish-bosheth, and the source of the quarrel over Rizpah that finally breaks their alliance apart (vv. 7-11)" },
    { id:"gibeon",   role:"Where Joab is returning from a raid when he learns Abner had been at Hebron and was allowed to leave in peace — the news that sends him after Abner (vv. 22-25)" }
  ],
  journey: [
    { from:"mahanaim", to:"hebron", label:"Abner travels south to seal his covenant with David", km:98,
      note:"Having broken publicly with Ish-bosheth, Abner and twenty men make the long journey from Mahanaim in Gilead down to Hebron, where David receives him with a feast to formalize the defection (v. 20)." },
    { from:"hebron", to:"hebron", dashed:true, label:"Michal brought back from Bahurim en route", km:0,
      note:"Before Abner's own trip, David's men fetch Michal from her second husband Paltiel; Paltiel follows her weeping as far as Bahurim, northeast of Jerusalem, before Abner orders him to turn back (vv. 14-16)." },
    { from:"gibeon", to:"hebron", dashed:true, label:"Joab's messengers recall Abner to the gate", km:38,
      note:"Learning too late that Abner had already left in peace, Joab sends riders after him and has him brought back to Hebron's gate under the pretense of a private word — where he kills him (vv. 26-27)." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"Six sons born to David at Hebron",
      desc:"Amnon by Ahinoam, Chileab by Abigail, Absalom by Maacah (daughter of Talmai, king of Geshur), Adonijah by Haggith, Shephatiah by Abital, and Ithream by Eglah — a formal dynastic record laid down even while the civil war continues (vv. 2-5)." },
    { x:0.2, type:"person", label:"Ish-bosheth accuses Abner over Rizpah", av:"king",
      desc:"'Why have you gone in to my father's concubine?' — taking a dead king's concubine was itself understood as a claim on the throne (cf. Absalom and David's concubines, 2 Sam 16:21-22), and the accusation exposes just how little real authority the figurehead king actually holds over his own general (v. 7)." },
    { x:0.34, type:"person", label:"Abner's fury and his vow to David", av:"warrior",
      desc:"'Am I a dog's head of Judah?... may God do so to Abner and more also, if I do not do for David as the LORD has sworn to him' — Abner turns his loyalty on a dime, and Ish-bosheth 'could not answer Abner another word, because he feared him' (vv. 8-11)." },
    { x:0.48, type:"person", label:"David's one condition: bring back Michal", av:"king",
      desc:"David agrees to Abner's covenant on a single term — the return of Saul's daughter, his first wife, given to Paltiel during his fugitive years; Abner personally delivers her, and her second husband follows weeping until sent home at Bahurim (vv. 13-16)." },
    { x:0.62, type:"person", label:"Abner secures Israel's elders and comes to Hebron", av:"warrior",
      desc:"Abner persuades the elders of Israel and Benjamin directly — 'you have sought David as king over you' — then comes to Hebron with twenty men; David makes them a feast, and Abner leaves 'in peace' to bring all Israel over (vv. 17-21)." },
    { x:0.78, type:"person", label:"Joab's accusation: 'he came to deceive you'", av:"warrior",
      desc:"Returning from a raid, Joab confronts David for letting Abner go unharmed, convinced the whole defection is a ruse to spy out the kingdom — then acts without David's knowledge (vv. 22-25)." },
    { x:0.9, type:"person", label:"Murdered at the gate, in revenge for Asahel", av:"warrior",
      desc:"Joab recalls Abner to Hebron's gate 'to speak with him privately' and stabs him in the stomach, killing him — vengeance for Asahel's death at Gibeon's pool, dressed up as a private word between commanders (vv. 26-27)." },
    { x:0.97, type:"person", label:"David's public mourning and self-indictment", av:"king",
      desc:"David curses Joab's house, orders the whole court into mourning, walks behind the bier, and will not eat — 'know that a prince and a great man has fallen this day in Israel... I am weak, though anointed king, and these men, the sons of Zeruiah, are too fierce for me' (vv. 28-39)." }
  ],
  environment: {
    chips: ["A dynastic list mid-civil-war", "Taking a king's concubine as a political claim", "A wife reclaimed from a weeping husband", "A covenant sealed with a feast", "A gate-side murder disguised as a private word", "Public mourning as political proof"],
    text: "Hebron's city gate, where Joab kills Abner, was the customary place for judicial and diplomatic business in an Israelite town — exactly the kind of public, semi-official space where a private conversation between two army commanders would raise no immediate alarm, and exactly why Joab could pull Abner 'aside' there without anyone reading danger into it until it was too late. The list of six sons born at Hebron each names both mother and firstborn status, the ancient Near Eastern convention for establishing legitimate succession — a quiet signal, laid down mid-war, that David's household already functions as a royal court rather than a warlord's camp, well before any single throne is settled."
  },
  objectsExtra: ["sword"],
  peopleExtra: ["david","joab","abner","ishbosheth","michal","absalom"],
  culture: [
    { title:"Taking a concubine as a claim on the throne", icon:"👑",
      text:"Ish-bosheth's accusation only makes sense against an ancient Near Eastern convention also visible later in this same book: Absalom publicly takes David's concubines on the palace roof precisely to broadcast that he has replaced his father as king (2 Sam 16:21-22), and Adonijah's request for Abishag after David's death is read by Solomon as exactly the same kind of coup attempt (1 Kgs 2:13-25). Whether or not Abner actually intended a claim on Ish-bosheth's throne, the act itself was legible as one — which is exactly why the young king could not let it pass, and exactly why challenging Abner over it cost him what little power he had." },
    { title:"Michal, reclaimed as a political term", icon:"💍",
      text:"David's demand for Michal's return (vv. 13-16) is framed as personal — she was his wife, given for a hundred Philistine foreskins (1 Sam 18:25-27) — but it functions politically too, re-linking David's kingship to Saul's own bloodline in the public eye right as Abner is about to deliver the northern tribes. Her second husband Paltiel's weeping walk to Bahurim is one of Scripture's briefer, sadder character notes: a man who loses a wife to a king's command with no say in the matter at all." },
    { title:"The sons of Zeruiah — too fierce for the king himself", icon:"⚔️",
      text:"David's closing complaint — 'these men, the sons of Zeruiah, are too fierce for me' (v. 39) — is the first of several moments across his reign where he openly admits he cannot fully control his own nephews; Joab will go on to kill Absalom against direct orders (2 Sam 18:14) and Amasa the same way he killed Abner (2 Sam 20:9-10), and David's dying instructions to Solomon finally settle the debt Abner's blood left unpaid (1 Kgs 2:5-6, 28-34)." }
  ],
  crossRefs: [
    { group:"Blood owed for Abner", refs:[
      { r:"2 Samuel 2:18-23", note:"Asahel's death at Gibeon's pool, the killing Joab avenges here" },
      { r:"1 Kings 2:5-6, 28-34", note:"David's dying charge to Solomon finally settles the debt, decades later" } ]},
    { group:"Taking a king's concubine as a claim on his throne", refs:[
      { r:"2 Samuel 16:21-22", note:"Absalom publicly takes David's concubines to broadcast his own claim to the crown" },
      { r:"1 Kings 2:13-25", note:"Solomon reads Adonijah's request for Abishag the same way, and has him executed for it" } ]},
    { group:"Michal's story elsewhere", refs:[
      { r:"1 Samuel 18:20-28", note:"Michal given to David as a wife, for the bride-price of a hundred Philistine foreskins" },
      { r:"1 Samuel 25:44", note:"given to Paltiel during David's fugitive years" },
      { r:"2 Samuel 6:16-23", note:"despises David's dancing before the ark and is left childless" } ]},
    { group:"Joab's pattern repeats", refs:[
      { r:"2 Samuel 20:8-10", note:"Joab kills Amasa the same way — a private word, a blade to the stomach" },
      { r:"2 Samuel 18:9-15", note:"and later kills Absalom against David's explicit order" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 4 — Ish-bosheth's assassination
   ============================================================ */
"10:4": {
  era: {
    title: "ca. 1003 BC — Ish-bosheth murdered in his bed; the house of Saul's last claimant falls",
    sub: "Iron Age IIA · Beeroth to Mahanaim to Hebron · the civil war's final casualty",
    badges: ["Iron Age IIA", "Civil war ends", "Regicide for reward, refused", "≈3,029 years ago"]
  },
  timeOfDay: "day",
  summary: "News that Abner is dead reaches Mahanaim, and Ish-bosheth's 'hands became feeble, and all Israel was dismayed' — the one man who had propped up his throne is gone, and he has no army and no allies left of his own. Two captains of his raiding bands, brothers named Rechab and Baanah, sons of Rimmon of Beeroth, see their opening. The text pauses over Beeroth itself: though reckoned to Benjamin, its own people had already fled north to Gittaim and 'sojourned there... to this day' — a town emptying out even as the men it produced move to finish off a king. A second aside follows, seemingly unrelated: Jonathan had left a son, five years old when the news of Gilboa reached Jezreel; his nurse snatched him up to flee and, in her hurry, dropped him, leaving him lame in both feet for life. His name is Mephibosheth, and nothing more is said of him here — a detail planted with no bearing on this chapter's plot, waiting for 2 Samuel 9. Back at Mahanaim, Rechab and Baanah enter Ish-bosheth's house at the heat of noon, as though to collect wheat, find him resting on his bed, strike him in the stomach, kill him, and cut off his head. They carry it all night by way of the Arabah down to Hebron and lay it before David: 'here is the head of Ish-bosheth the son of Saul, your enemy, who sought your life; the LORD has avenged my lord the king this day on Saul and on his offspring.' They expect a reward. David answers instead with a precedent of his own making: he had already executed the Amalekite who merely claimed to have killed Saul at the dying king's own request (2 Sam 1) — 'how much more, when wicked men have killed a righteous man in his own house on his bed, shall I not now require his blood at your hand and destroy you from the earth?' He orders the two men killed on the spot; their hands and feet are cut off and their bodies hung by the pool at Hebron. Ish-bosheth's own head is taken and buried in Abner's tomb at Hebron — the house of Saul's last claimant to the throne laid to rest beside the general whose own death, one chapter earlier, had made this final murder possible.",
  focusPlace: "mahanaim",
  places: [
    { id:"mahanaim", role:"Ish-bosheth's capital across the Jordan, where he loses heart at news of Abner's death and is murdered in his own bed at noon by two of his own captains (vv. 1, 5-7)" },
    { id:"beeroth",  role:"Hometown of Rechab and Baanah, one of the Gibeonite league towns whose own people had already fled to Gittaim by David's day (vv. 2-3)" },
    { id:"hebron",   role:"Where the assassins bring Ish-bosheth's head expecting a reward, where David has them executed instead, and where Ish-bosheth's head is buried in Abner's own tomb (vv. 8-12)" }
  ],
  journey: [
    { from:"beeroth", to:"mahanaim", label:"Rechab and Baanah reach Ish-bosheth's house at noon", km:78,
      note:"The two captains cross from their home territory in Benjamin, over the Jordan, to Mahanaim in Gilead, timing their arrival for the noon rest when a king's house would least expect an armed visit (vv. 5-7)." },
    { from:"mahanaim", to:"hebron", dashed:true, label:"The head carried south all night, by way of the Arabah", km:98,
      note:"Rechab and Baanah travel through the night down the Jordan valley to Hebron, expecting David to reward the regicide as the fulfillment of his own long-declared claim to the throne (vv. 7-8)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"Ish-bosheth loses heart at Mahanaim", av:"king",
      desc:"News that Abner — his own general and only real support — is dead reaches Mahanaim, and 'his hands became feeble, and all Israel was dismayed' (v. 1)." },
    { x:0.18, type:"person", label:"Two captains from Beeroth: Rechab and Baanah", av:"warrior",
      desc:"Sons of Rimmon the Beerothite, of Benjamin, captains over Ish-bosheth's raiding bands — the text pauses to note that Beeroth's own people had already fled north to Gittaim and 'sojourn there to this day' (vv. 2-3)." },
    { x:0.3, type:"person", label:"An aside: Mephibosheth, dropped and lamed", av:"youth",
      desc:"Jonathan had a five-year-old son; when news of Gilboa reached Jezreel his nurse fled carrying him and, in her hurry, he fell and became lame in both feet — a detail with no bearing on this chapter's plot, planted here for 2 Samuel 9 (v. 4)." },
    { x:0.45, type:"person", label:"Murdered in his own bed, at noon", av:"warrior",
      desc:"Rechab and Baanah enter the house as though to get wheat, find Ish-bosheth resting through the heat of the day, strike him in the stomach, kill him, and cut off his head (vv. 5-7)." },
    { x:0.58, type:"object", label:"The head carried to Hebron overnight",
      desc:"The two brothers travel all night by way of the Arabah and present Ish-bosheth's head to David: 'the LORD has avenged my lord the king this day on Saul and on his offspring' (vv. 7-8)." },
    { x:0.7, type:"person", label:"David recalls the Amalekite he executed", av:"king",
      desc:"Rather than a reward, David answers with the precedent of 2 Samuel 1: if he put a man to death merely for claiming he killed Saul, 'how much more, when wicked men have killed a righteous man in his own house on his bed'? (vv. 9-11)." },
    { x:0.83, type:"object", label:"Rechab and Baanah executed and displayed",
      desc:"David's young men kill them, cut off their hands and feet, and hang the bodies by the pool at Hebron (v. 12a)." },
    { x:0.95, type:"object", label:"Ish-bosheth's head buried in Abner's tomb",
      desc:"They take Ish-bosheth's own head and bury it in Abner's tomb at Hebron — the house of Saul's last claimant laid to rest beside the general whose death made this murder possible (v. 12b)." }
  ],
  environment: {
    chips: ["Noon, the safest hour to strike", "A head carried through the night", "Beeroth's people already gone", "Mephibosheth's accident, planted early", "Executed for what the Amalekite only claimed", "The house of Saul's last claimant"],
    text: "Mahanaim's exact location is still debated among several Transjordan mounds, but every candidate sits on defensible high ground above the Jabbok gorge — precisely the kind of refuge capital Abner would have chosen for a puppet king he needed kept safe and out of reach, which is exactly why its fall from the inside, rather than by siege, is so abrupt. The 'heat of the day' when Rechab and Baanah strike (v. 5) names the customary hour for a Near Eastern noon rest, when a house's master and guards would least expect an armed visit; entering 'as though to get wheat' let the assassins reach the inner room without raising an alarm. Beeroth's own displacement, still true 'to this day' when this chapter was written, quietly closes out a loose thread from Joshua's conquest-era treaty with the Gibeonite league (Josh 9) even as it opens this chapter's violence."
  },
  objectsExtra: ["sword"],
  peopleExtra: ["david","ishbosheth","rechab","baanah","mephibosheth"],
  culture: [
    { title:"Executed for the very crime the Amalekite only claimed", icon:"⚖️",
      text:"David's logic here explicitly reaches back to 2 Samuel 1: he had already put a foreigner to death for merely claiming he mercy-killed the wounded Saul at Saul's own request. Rechab and Baanah have actually murdered a sleeping, defenseless king in cold blood expecting payment for it — David's argument from the lesser case to the greater ('how much more') leaves them no room to expect anything but the same fate, only worse." },
    { title:"A head brought for reward — a pattern the era keeps repeating", icon:"🗡️",
      text:"Carrying an enemy's head to a king as proof and expecting reward for it recurs across this stretch of Scripture: David himself once brought Goliath's head to Jerusalem (1 Sam 17:54), and the Philistines will later fasten Saul's own head in the temple of Dagon (1 Chron 10:10). Trophy heads function as political currency throughout the period — which is exactly why David has to publicly refuse to pay this one, or every ambitious captain in his own ranks would take the hint." },
    { title:"Mephibosheth's accident, five years before it matters", icon:"🦶",
      text:"Verse 4's aside about Jonathan's crippled son is Scripture's own Chekhov's gun — introduced with no narrative function in this chapter at all, it exists purely so that David's mercy toward him in 2 Samuel 9 lands as the fulfillment of a specific, earlier oath: Jonathan's own plea that David not cut off his kindness from his house 'forever, not even when the LORD cuts off every one of the enemies of David from the face of the earth' (1 Sam 20:14-17, 42)." },
    { title:"Beeroth's strange, permanent exile", icon:"🏘️",
      text:"Beeroth was one of the four towns of the Gibeonite league that tricked Israel into a covenant of protection during the conquest (Josh 9:3-17). Its people's flight to Gittaim, still true 'to this day' when this verse was written, is never explained here — but Saul's own later slaughter of Gibeonites, judged and atoned for only after a three-year famine in David's reign (2 Sam 21:1-9), suggests the same royal house whose last heir dies in this chapter had already made Beeroth an unsafe place for its own residents to stay." }
  ],
  crossRefs: [
    { group:"The precedent David cites", refs:[
      { r:"2 Samuel 1:1-16", note:"David executes the Amalekite for merely claiming to have killed Saul — the lesser case this chapter's argument builds from" } ]},
    { group:"The payoff of Mephibosheth's aside", refs:[
      { r:"1 Samuel 20:14-17, 42", note:"Jonathan's oath that David preserve his house's kindness forever, which this chapter's detail sets up" },
      { r:"2 Samuel 9:1-13", note:"David finds Mephibosheth and restores him, keeping that oath five chapters later" } ]},
    { group:"Beeroth and the Gibeonite league", refs:[
      { r:"Joshua 9:3-17", note:"Israel's treaty with the Gibeonite league, including Beeroth, secured by trickery during the conquest" },
      { r:"2 Samuel 21:1-9", note:"Saul's later guilt against the Gibeonites, judged by a three-year famine in David's reign" } ]},
    { group:"Trophy heads elsewhere in this era", refs:[
      { r:"1 Samuel 17:54", note:"David himself once carried Goliath's head to Jerusalem" },
      { r:"1 Chronicles 10:8-10", note:"the Philistines display Saul's own head in the temple of Dagon" } ]},
    { group:"What follows", refs:[
      { r:"2 Samuel 5:1-5", note:"with Saul's house finally left with no claimant, all Israel's elders come to David at Hebron" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 5 — king over all Israel; the capture of Jerusalem
   ============================================================ */
"10:5": {
  era: {
    title: "ca. 1003 BC — David becomes king over all Israel and captures Jerusalem",
    sub: "Iron Age IIA · Hebron to Jerusalem · founding of the united-monarchy capital",
    badges: ["Iron Age IIA", "United monarchy", "New capital: Jerusalem", "≈3,029 years ago"]
  },
  timeOfDay: "day",
  summary: "After seven and a half years reigning over Judah alone from Hebron, elders from every tribe travel south to make a covenant with David and anoint him king over all Israel. David immediately marches north and takes the one stronghold still holding out inside his new kingdom: Jebusite Jerusalem, whose defenders taunt that 'the blind and the lame' could keep him out — until Joab's men find a way up the water shaft and David makes 'the City of David' his new capital, building it inward from the Millo with cedar and craftsmen sent by King Hiram of Tyre. Hearing that Israel finally has a king uniting the tribes, the Philistines march up twice to crush him before he consolidates power; both times David inquires of the LORD before engaging, and both times he routs them — first at Baal-perazim ('the LORD breaks through'), then again in the Valley of Rephaim by circling behind them to wait for the sound of marching in the balsam treetops.",
  focusPlace: "jerusalem",
  places: [
    { id:"hebron",        role:"Where the elders of all Israel anoint David king over the whole nation (vv. 1-5)" },
    { id:"jerusalem",     role:"The Jebusite stronghold David captures by the water shaft and makes his new capital, the City of David (vv. 6-10)" },
    { id:"baal-perazim",  role:"The valley below Jerusalem where the Philistines mass and David defeats them twice (vv. 17-25)" }
  ],
  journey: [
    { from:"hebron", to:"jerusalem", label:"David marches on the Jebusite stronghold", km:30,
      note:"With the covenant at Hebron sealed, David and his men march north to take the one fortified city still outside his control — a ridge-top stronghold the Jebusites considered unconquerable (v. 6)." },
    { from:"jerusalem", to:"baal-perazim", label:"The Philistines advance on the new capital", km:5,
      note:"Word that David rules a united Israel brings the Philistines up 'in full force' to strike before he can consolidate power; David meets them in the valley immediately southwest of his new city (vv. 17-18)." }
  ],
  hotspots: [
    { x:0.12, type:"person", label:"The elders anoint David at Hebron", av:"elder",
      desc:"'All the elders of Israel came to the king at Hebron... and they anointed David king over Israel' (vv. 1-3) — the formal covenant that ends seven and a half years of a divided kingdom (v. 5)." },
    { x:0.3, type:"person", label:"Joab's men climb the water shaft", av:"warrior",
      desc:"The Jebusites boast 'the blind and the lame will turn you back' (v. 6); David's men reach the fortress anyway 'through the water shaft' (tsinnor, v. 8), the same kind of rock-cut vertical passage archaeologists have since found beneath the City of David feeding it from the Gihon spring." },
    { x:0.5, type:"object", label:"Cedar and craftsmen from Hiram of Tyre",
      desc:"'Hiram king of Tyre sent messengers to David, and cedar trees, also carpenters and masons, and they built David a house' (v. 11) — the new capital's first palace, raised with Phoenician timber and skilled labor David's own hill country lacked." },
    { x:0.7, type:"person", label:"Victory at Baal-perazim", av:"king",
      desc:"David inquires of the LORD before engaging — 'Shall I go up against the Philistines?... I will surely give the Philistines into your hand' (v. 19) — and names the battlefield 'the LORD has broken through my enemies before me like a breaking flood' (v. 20)." },
    { x:0.88, type:"person", label:"Second victory, by ambush from the balsam trees", av:"king",
      desc:"This time the LORD tells David not to attack head-on but to circle behind the Philistines and wait: 'when you hear the sound of marching in the tops of the balsam trees, then rouse yourself' (vv. 23-24) — a signal for a coordinated flank attack that routs the enemy 'from Geba to Gezer.'" }
  ],
  environment: {
    chips: ["Coronation covenant at Hebron", "Jebusite ridge fortress", "Rock-cut water shaft (tsinnor)", "Phoenician cedar & craftsmen", "Two Philistine counter-attacks", "Iron Age IIA united monarchy"],
    text: "Jerusalem's Jebusite stronghold occupied a narrow, steep-sided ridge (the later 'City of David') defensible on three sides, with its one weakness being the rock-cut shaft that carried water up from the Gihon spring outside the walls — precisely the route 2 Samuel 5:8 implies Joab's men used to get inside undetected. The Rephaim valley immediately southwest of the ridge was open, level farmland, good ground for Philistine chariots and the obvious staging point for an army trying to strangle the new capital before David could fortify it — which is why the Philistines chose it twice."
  },
  objectsExtra: ["anoint-oil","crown","sword"],
  peopleExtra: ["david","jebusites"],
  culture: [
    { title:"Seven years a divided kingdom", icon:"👑",
      text:"For seven and a half years after Saul's death, Israel had two kings: David over Judah at Hebron, and Ish-bosheth (Saul's surviving son) over the northern tribes, propped up by Abner (2 Sam 2-4). Chapter 5 opens only after Abner and Ish-bosheth are both dead, clearing the way for the tribes to unite behind David 'in the past, even while Saul was king... it was you who led out and brought in Israel' (v. 2)." },
    { title:"Why Jerusalem", icon:"🏰",
      text:"Jerusalem straddled the border between Judah and Benjamin and had belonged to neither tribe outright (Josh 15:63; Judg 1:21) — a religiously and militarily neutral capital, unlike Hebron (deep in Judah) or any northern town, that let David rule as king of a united nation rather than a Judahite over reluctant northern tribes." },
    { title:"The Millo and the City of David", icon:"🧱",
      text:"'David built the city all around from the Millo inward' (v. 9) — the Millo (Hebrew 'filling') was a terraced stepped-stone structure supporting the city's expansion up the steep eastern slope, a monumental engineering project archaeologists have identified in the City of David excavations, later expanded again by Solomon (1 Kgs 9:15) and Hezekiah (2 Chr 32:5)." }
  ],
  crossRefs: [
    { group:"The long road from Hebron to all-Israel's king", refs:[
      { r:"2 Samuel 2:1-4", note:"David first anointed king over Judah alone, seven and a half years earlier" },
      { r:"1 Samuel 16:12-13", note:"Samuel's private anointing of David as a boy, decades before it is publicly confirmed here" } ]},
    { group:"Jerusalem before David", refs:[
      { r:"Joshua 15:63", note:"Judah could not drive out the Jebusites of Jerusalem at the conquest" },
      { r:"Judges 1:21", note:"neither could Benjamin — the Jebusites 'dwell with the people of Benjamin ... to this day'" } ]},
    { group:"The City of David afterward", refs:[
      { r:"1 Kings 9:15", note:"Solomon later extends the Millo David began" },
      { r:"2 Chronicles 32:5", note:"Hezekiah reinforces the Millo generations later against Assyria" } ]},
    { group:"The LORD who 'breaks through'", refs:[
      { r:"1 Chronicles 14:8-16", note:"the Chronicler's parallel account of both Philistine battles" },
      { r:"Isaiah 28:21", note:"the prophet later recalls 'Mount Perazim' as the pattern for the LORD's surprising, disruptive acts" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 6 — the ark comes up to Jerusalem; Uzzah; David's dance
   ============================================================ */
"10:6": {
  era: {
    title: "ca. 1000 BC — the ark comes up to Jerusalem",
    sub: "Iron Age IIA · Kiriath-jearim to Jerusalem · Uzzah's death and David's dance",
    badges: ["Iron Age IIA", "United monarchy", "Ark installed in Jerusalem", "≈3,026 years ago"]
  },
  timeOfDay: "day",
  summary: "With Jerusalem newly secured and the Philistines routed, David turns to the ark of God, which has sat quietly in Abinadab's house on the hill at Kiriath-jearim for decades since its return from Philistine captivity (1 Sam 7:1-2). Thirty thousand chosen men escort it out on a new cart, Abinadab's sons Uzzah and Ahio driving, amid singing and every kind of instrument — until the oxen stumble at Nacon's threshing floor, Uzzah reaches out to steady the ark, and the LORD strikes him dead on the spot for touching what only Levites carrying it by its poles were ever permitted to touch (Num 4:15). Angry and afraid, David diverts the ark to the nearby house of Obed-edom the Gittite, where it stays three months and Obed-edom's household visibly prospers. Reassured, David brings it up to Jerusalem correctly this time, sacrificing every six steps and dancing before the LORD 'with all his might' in a linen ephod — a spectacle his wife Michal, watching from a window, despises as beneath a king's dignity. She confronts him when he returns to bless his household; David rebukes her without apology, and she is left childless the rest of her life.",
  focusPlace: "jerusalem",
  places: [
    { id:"kiriath-jearim", role:"Abinadab's house on the hill where the ark had rested for decades; the starting point of both attempts to bring it to Jerusalem (vv. 2-4)" },
    { id:"jerusalem",      role:"The City of David, where the ark is finally installed in the tent David pitched for it, and where Michal watches David dance from a window (vv. 12-23)" }
  ],
  journey: [
    { from:"kiriath-jearim", to:"jerusalem", dashed:true, label:"First attempt: new cart, aborted at Nacon's threshing floor", km:14,
      note:"The ark travels only partway from Kiriath-jearim toward Jerusalem before the oxen stumble at Nacon's threshing floor; Uzzah reaches out to steady it and is struck dead on the spot, and David diverts it off the road entirely into the house of Obed-edom the Gittite, where it remains three months (vv. 3-11)." },
    { from:"kiriath-jearim", to:"jerusalem", label:"Second attempt, three months later: carried correctly, with dancing", km:14,
      note:"Reassured by Obed-edom's blessing, David brings the ark the rest of the way up to Jerusalem — this time, per 1 Chronicles 15:2,13-15, carried on the shoulders of Levites as the law required, with sacrifices every six steps and David dancing before it 'with all his might' (vv. 12-15)." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Loading the ark at Kiriath-jearim", av:"warrior",
      desc:"'They carried the ark of God on a new cart and brought it out of the house of Abinadab, which was on the hill; and Uzzah and Ahio, the sons of Abinadab, were driving the new cart' (vv. 3-4) — the ark's first move in perhaps twenty years, since it returned from Philistine territory (1 Sam 7:1-2)." },
    { x:0.24, type:"person", label:"Uzzah struck down at Nacon's threshing floor", av:"warrior",
      desc:"'When they came to the threshing floor of Nacon, Uzzah put out his hand to the ark of God and took hold of it, for the oxen stumbled... God struck him down there' (vv. 6-7) — the ark was never to be touched or carted, only carried on poles by Levites of Kohath, veiled from sight (Num 4:15)." },
    { x:0.4, type:"object", label:"Diverted to the house of Obed-edom",
      desc:"'David was afraid of the LORD that day... David was not willing to take the ark of the LORD into the city of David... The ark remained in the house of Obed-edom the Gittite three months, and the LORD blessed Obed-edom and all his household' (vv. 9-11)." },
    { x:0.56, type:"person", label:"David dances before the LORD 'with all his might'", av:"king",
      desc:"Sacrificing an ox and a fattened animal every six steps, 'David danced before the LORD with all his might. And David was wearing a linen ephod' (vv. 13-14) — a king stripped of royal formality, worshiping like a priest." },
    { x:0.72, type:"person", label:"Michal watches from a window, and despises him", av:"woman",
      desc:"'As the ark of the LORD came into the city of David, Michal the daughter of Saul looked out of the window and saw King David leaping and dancing before the LORD, and she despised him in her heart' (v. 16)." },
    { x:0.9, type:"person", label:"Michal's confrontation, and David's rebuke", av:"king",
      desc:"'How the king of Israel honored himself today, uncovering himself... as one of the vulgar fellows shamelessly uncovers himself!' David answers that it was 'before the LORD, who chose me... rather than your father' — and Michal has no child to the day of her death (vv. 20-23)." }
  ],
  environment: {
    chips: ["New cart vs. Levitical poles", "Nacon's threshing floor", "Three months at Obed-edom's house", "Linen ephod, not royal robes", "Sacrifices every six steps", "Iron Age IIA Jerusalem"],
    text: "The ark's first, failed journey follows Philistine practice, not the Law's: a new ox-cart, the very method the Philistines themselves used to send the ark home in 1 Samuel 6:7-8, rather than the poles-on-shoulders prescribed for the Kohathite Levites in Numbers 4:15 and 7:9. Uzzah's death at Nacon's threshing floor — an exposed, public place for the disaster to strike — reads as enforcement of that older law, the same principle behind the seventy men of Beth-shemesh struck down for looking into the ark a generation earlier (1 Sam 6:19). The second attempt corrects the method (1 Chr 15:2, 13-15) and adds the very public, very undignified worship — bare-armed dancing in a priestly linen ephod rather than royal robes — that offends Michal, Saul's daughter, watching from a palace window above the procession."
  },
  objectsExtra: ["ark-covenant","ephod"],
  peopleExtra: ["david","uzzah","michal"],
  culture: [
    { title:"Why Uzzah died — the Kohathite carrying law", icon:"⚖️",
      text:"Numbers 4:15 and 7:9 are explicit: the ark and other holy furniture are to be carried on poles, on the shoulders of Kohathite Levites, never touched or carted. David's new cart copied the method the Philistines themselves used to send the ark home a generation earlier (1 Sam 6:7-8) — good enough for pagans returning stolen property, but a direct violation of the Law for Israel's own worship. Uzzah's death enforces the same principle that struck down the men of Beth-shemesh for merely looking into the ark (1 Sam 6:19)." },
    { title:"Dancing in a linen ephod", icon:"💃",
      text:"The ephod (vv. 14) was priestly, not royal, dress — plain linen rather than the purple and gold of a king's robes. David 'leaping and dancing before the LORD' (v. 16) strips away every marker of status the office of king normally demanded, worshiping as a layman among the crowd rather than presiding over it — precisely what Michal, raised in Saul's more conventional court, finds humiliating to watch." },
    { title:"Michal's last word", icon:"🪟",
      text:"Michal loved David once, enough to risk her father's anger to save his life (1 Sam 18:20-28; 19:11-17). This chapter is the last time she speaks in Scripture: a cutting rebuke, David's unapologetic answer, and a closing note that she had no child to the day she died — a quiet, deliberate end to any hope of Saul's and David's bloodlines merging in an heir." }
  ],
  crossRefs: [
    { group:"The ark's earlier ordeal", refs:[
      { r:"1 Samuel 4:10-11", note:"the ark captured by the Philistines at Aphek, the disaster this whole recovery undoes" },
      { r:"1 Samuel 6:19", note:"seventy men of Beth-shemesh struck down for looking into the ark — the same principle Uzzah's death enforces" } ]},
    { group:"The law Uzzah's death enforces", refs:[
      { r:"Numbers 4:15", note:"only the Kohathite Levites may carry the veiled ark, by its poles, on their shoulders — never touching it directly" } ]},
    { group:"The Chronicler's parallel — and its correction", refs:[
      { r:"1 Chronicles 13:1-14", note:"the first attempt and Uzzah's death, retold" },
      { r:"1 Chronicles 15:2,13-15", note:"David's own diagnosis of the failure — 'we did not seek it in the way that is appropriate' — and the second attempt done by the book, Levites carrying it on their shoulders with poles" },
      { r:"1 Chronicles 16:1-3", note:"the ark installed in the tent David pitched, and the people sent home with bread, meat, and a cake of raisins" } ]},
    { group:"Michal, once in love with David", refs:[
      { r:"1 Samuel 18:20-28", note:"Michal's earlier love for David and the bride-price Saul set hoping to get him killed" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 7 — Nathan's oracle; the Davidic covenant
   ============================================================ */
"10:7": {
  era: {
    title: "ca. 995 BC — Nathan's oracle: the LORD will build David a house",
    sub: "Iron Age IIA · Jerusalem, at rest from David's enemies · the Davidic covenant",
    badges: ["Iron Age IIA", "United monarchy", "Davidic covenant", "≈3,021 years ago"]
  },
  timeOfDay: "night",
  summary: "Settled in his cedar palace and finally at rest from his enemies, David tells the prophet Nathan that it troubles him to live in a permanent house while the ark of God still dwells in a tent; Nathan's first instinct is to bless the plan. That same night the LORD corrects him: David will not build God a house — God will build David one. The oracle recasts 'house' as dynasty: the LORD took David from tending sheep to lead Israel, will give the nation a settled home free from oppression, and after David's death will raise up his own offspring (Solomon) to build the actual temple. That heir will be God's son in a father-son covenant relationship; unlike Saul, his discipline for sin will never include the loss of God's steadfast love, and David's house, kingdom and throne will be established forever. Nathan reports the vision word for word. David goes in and sits before the LORD — an unusual, humble posture — and prays in wonder at how far he has been brought, asking God to make good on the promise forever.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem",  role:"David's new capital and cedar palace, where Nathan receives and delivers the oracle, and where David prays before the LORD (vv. 1-29)" },
    { id:"bethlehem",  role:"David's hometown among the sheepfolds — the origin point of the LORD's own summary of his rise, 'I took you from the pasture... to be prince over my people Israel' (v. 8)" }
  ],
  journey: [
    { from:"bethlehem", to:"jerusalem", dashed:true, label:"'I took you from the pasture... to be prince' (v. 8)", km:9,
      note:"Not a literal trip narrated in this chapter but the LORD's own capsule biography of David inside the oracle — from a shepherd boy following sheep around Bethlehem to king enthroned in Jerusalem, roughly 9 km north." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"David's idea: a cedar house for the ark", av:"king",
      desc:"'See now, I dwell in a house of cedar, but the ark of God dwells in a tent' (v. 2) — David, settled at last in his own palace, is uneasy that the ark still sits behind curtains." },
    { x:0.22, type:"person", label:"Nathan's first answer — and its overnight reversal", av:"prophet",
      desc:"'Go, do all that is in your heart, for the LORD is with you' (v. 3) — a reasonable guess from a faithful prophet, corrected that same night: 'the word of the LORD came to Nathan' with a very different message (v. 4)." },
    { x:0.38, type:"object", label:"'Would you build me a house?'",
      desc:"The LORD reminds Nathan he has moved about in a tent and tabernacle since the Exodus and never once asked for cedar (vv. 5-7) — the plan is turned down on God's own terms, not as a rebuke of David's motive." },
    { x:0.54, type:"person", label:"The reversal: God will build David a house", av:"king",
      desc:"'The LORD declares to you that the LORD will make you a house... I will raise up your offspring after you... and I will establish his kingdom. He shall build a house for my name, and I will establish the throne of his kingdom forever' (vv. 11-13) — Solomon named without being named." },
    { x:0.7, type:"object", label:"Father and son, and mercy unlike Saul's",
      desc:"'I will be to him a father, and he shall be to me a son. When he commits iniquity, I will discipline him... but my steadfast love will not depart from him, as I took it from Saul' (vv. 14-15) — discipline without abandonment." },
    { x:0.88, type:"person", label:"David sits before the LORD and prays", av:"king",
      desc:"'Who am I, O Lord GOD, and what is my house, that you have brought me thus far?' (v. 18) — an unusual sitting posture, likely before the ark in its tent, for a prayer of astonished gratitude asking God to confirm the promise forever (vv. 25-29)." }
  ],
  environment: {
    chips: ["Cedar palace vs. tent shrine", "Prophetic word overturned overnight", "Davidic covenant (berit)", "Father-son royal-adoption formula", "'House' = both palace and dynasty", "Root of messianic hope"],
    text: "The scene turns on a pun the English can't quite carry: David wants to build God a bayit (house/temple); God answers by promising to build David a bayit (house/dynasty) instead, one that will in turn produce the son who builds the literal temple. The 'father and son' language of verse 14 borrows the vocabulary Near Eastern treaties used for royal adoption — a human king declared a god's son at coronation — but Israel's version binds discipline to an unbreakable covenant loyalty (chesed) rather than a favor a ruler could simply lose, unlike Saul, whose own dynasty God had already ended. David's odd posture in verse 18, 'sitting before the LORD,' most likely means seated in front of the tent shrine housing the ark inside Jerusalem — a rare, humble stance for a king making no requests of his own, only wonder and thanks."
  },
  objectsExtra: ["tabernacle"],
  peopleExtra: ["david","nathan"],
  culture: [
    { title:"A 'house' with two meanings", icon:"🏠",
      text:"David proposes to build God a bayit — a house, meaning a temple. The LORD answers with the same word turned around: he will build David a bayit — a house, meaning a dynasty. The wordplay is the whole chapter's argument in miniature, and it resolves in verse 13, where David's own offspring gets to build the literal building after all." },
    { title:"Father and son — royal adoption language", icon:"👑",
      text:"'I will be to him a father, and he shall be to me a son' (v. 14) echoes the language ancient Near Eastern treaties used when a great king adopted a vassal king as 'son.' Psalm 2:7 and Psalm 89:26-27 pick up the same formula for David's line, and Hebrews 1:5 later applies it directly to Jesus." },
    { title:"Nathan corrected, and still trusted", icon:"🔄",
      text:"Nathan's first answer — 'go, do all that is in your heart' — turns out to be wrong within the same chapter, overturned by a direct word from the LORD that same night. Scripture lets a true prophet's own good judgment be mistaken without undermining his office: the very next word he brings, unedited, becomes one of the most quoted covenant promises in the Old Testament." }
  ],
  crossRefs: [
    { group:"Solomon fulfills the building promise", refs:[
      { r:"1 Kings 5:3-5", note:"Solomon explains David could not build the temple because of his wars, and that he will build it instead" },
      { r:"1 Kings 8:15-21", note:"Solomon's dedication speech explicitly quotes this chapter's promise as now fulfilled" } ]},
    { group:"The Chronicler's parallel", refs:[
      { r:"1 Chronicles 17:1-15", note:"the same oracle, retold with small but meaningful differences" } ]},
    { group:"Poetic retelling of the covenant", refs:[
      { r:"Psalm 89:3-4", note:"'I will establish your offspring forever, and build your throne for all generations'" },
      { r:"Psalm 89:19-37", note:"an extended meditation on the same promise, wrestling with its apparent failure" } ]},
    { group:"Messianic hope rooted here", refs:[
      { r:"Isaiah 9:6-7", note:"the throne of David given to a coming child, 'to establish it... forevermore'" },
      { r:"Luke 1:32-33", note:"Gabriel tells Mary God will give her son 'the throne of his father David,' whose kingdom 'will have no end'" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 8 — David's wars of conquest; the cabinet
   ============================================================ */
"10:8": {
  era: {
    title: "ca. 994 BC — David's wars of conquest, tribute dedicated to the LORD, and the royal cabinet",
    sub: "Iron Age IIA · Philistia, Moab, Zobah, Aram-Damascus, Edom — and Jerusalem · the united monarchy's high-water mark",
    badges: ["Iron Age IIA", "United monarchy", "Empire at its widest reach", "≈3,020 years ago"]
  },
  timeOfDay: "day",
  summary: "With the ark installed in Jerusalem and Nathan's covenant promise fresh, this chapter surveys David's wars in a single sweep, front after front. He defeats the Philistines and subdues them, taking from their hand 'Metheg-ammah' — likely Gath's own overlordship of its satellite towns. He defeats Moab and, in a scene the text records without comment, makes the survivors lie down on the ground and measures them off with a cord: two lengths are put to death, one full length spared, and the remnant becomes David's tribute-paying servants — a strikingly harsh turn against the nation of his own great-grandmother Ruth (Ruth 4:13-17), and the same Moab that had once sheltered his own parents from Saul (1 Sam 22:3-4). Farther north he defeats Hadadezer son of Rehob, king of Zobah, as Hadadezer marches to restore his power at the Euphrates, capturing 1,700 horsemen and 20,000 foot soldiers and hamstringing all the chariot horses but a hundred; when the Arameans of Damascus march to Hadadezer's rescue, David strikes down twenty-two thousand of them too and garrisons Aram-Damascus outright, 'and the LORD gave victory to David wherever he went.' He brings Hadadezer's officers' gold shields to Jerusalem and strips his cities of Betah and Berothai of a great store of bronze. Watching a rival humbled, Toi king of Hamath sends his own son Joram with vessels of silver, gold, and bronze to bless David for defeating Hadadezer, Toi's own enemy; David dedicates all of it to the LORD, together with tribute from every nation he has subdued — Edom, Moab, Ammon, Philistia, Amalek, and Zobah. In the south he strikes down eighteen thousand Edomites in the Valley of Salt and garrisons all of Edom, so that 'all the Edomites became David's servants.' The chapter that opened with battle closes with government: 'David administered justice and equity to all his people,' followed by a formal cabinet list — Joab over the army, Jehoshaphat son of Ahilud as recorder, Zadok and Ahimelech the priests, Seraiah as scribe, Benaiah son of Jehoiada over the foreign guard of Cherethites and Pelethites, and David's own sons serving as priests alongside them.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"David's capital, where Hadadezer's gold shields and every subdued nation's tribute are brought and dedicated to the LORD, and where the chapter's closing cabinet list is seated (vv. 7, 11-12, 15-18)" },
    { id:"philistia", role:"Subdued at the chapter's opening; David takes 'Metheg-ammah' — probably Gath's own overlordship of its satellite towns — out of Philistine hands (v. 1)" },
    { id:"moab-plains", role:"Marks Moab, defeated and measured off with a cord — two of every three survivors killed, one spared, the remnant made tribute-paying servants (v. 2)" },
    { id:"zobah",   role:"Hadadezer's Aramean kingdom to the north, defeated as he marches to restore his power at the Euphrates — the single toughest campaign of the chapter (vv. 3-8)" },
    { id:"damascus", role:"Aram-Damascus, whose army marches to Hadadezer's rescue and is struck down in turn; David garrisons the city outright (vv. 5-6)" },
    { id:"edom",    role:"Struck down in the Valley of Salt and garrisoned throughout, its people made David's servants (vv. 13-14)" }
  ],
  journey: [
    { from:"jerusalem", to:"philistia", label:"The Philistines subdued", km:38,
      note:"David defeats the Philistines on the coastal plain and takes 'Metheg-ammah' out of their hand, closing out a threat that shadowed Israel since before Saul's reign (v. 1)." },
    { from:"jerusalem", to:"moab-plains", label:"Moab defeated and measured with a cord", km:37,
      note:"The campaign against Moab reaches south along the Transjordan plateau well beyond this marker, but the survivors are made to lie down and are measured off in lines — two killed, one spared (v. 2)." },
    { from:"jerusalem", to:"zobah", label:"Hadadezer struck down reaching for the Euphrates", km:263,
      note:"David's longest campaign in the chapter, north into Aramean Syria to meet Hadadezer of Zobah as he tries to extend his own power all the way to the great river (vv. 3-4)." },
    { from:"zobah", to:"damascus", label:"Aram-Damascus comes to the rescue, and loses 22,000", km:56,
      note:"Damascus marches up to reinforce Hadadezer; David strikes them down too and plants garrisons in Aram-Damascus, making it, like Moab, a tribute-paying vassal (vv. 5-6)." },
    { from:"jerusalem", to:"edom", label:"Edom struck down in the Valley of Salt", km:133,
      note:"South through the Arabah, David's forces kill eighteen thousand Edomites and garrison the whole territory (vv. 13-14)." }
  ],
  hotspots: [
    { x:0.04, type:"person", label:"Philistines subdued", av:"king",
      desc:"David defeats the Philistines and takes 'Metheg-ammah' — probably Gath's own overlordship of its satellite towns — out of Philistine hands (v. 1)." },
    { x:0.16, type:"object", label:"Moab measured with a cord",
      desc:"David defeats Moab, makes the survivors lie down, and measures them off with a cord — two lengths put to death, one spared; the remnant becomes his tribute-paying servants (v. 2)." },
    { x:0.28, type:"person", label:"Hadadezer struck down reaching for the Euphrates", av:"king",
      desc:"David defeats Hadadezer son of Rehob, king of Zobah, as he marches to restore his power at the river; 1,700 horsemen and 20,000 foot soldiers are taken, and David hamstrings the chariot horses but a hundred (vv. 3-4)." },
    { x:0.4, type:"person", label:"Aram-Damascus comes to the rescue, and loses 22,000", av:"warrior",
      desc:"The Arameans of Damascus march to Hadadezer's aid; David strikes down twenty-two thousand of them and garrisons Aram-Damascus outright — a tribute-paying servant nation like Moab (vv. 5-6)." },
    { x:0.52, type:"object", label:"Golden shields and Hadadezer's bronze, brought to Jerusalem",
      desc:"David takes the gold shields carried by Hadadezer's officers and a great store of bronze from his cities Betah and Berothai (vv. 7-8)." },
    { x:0.64, type:"person", label:"Toi of Hamath's tribute, all of it dedicated to the LORD", av:"king",
      desc:"Toi, king of Hamath and Hadadezer's own rival, sends his son Joram with vessels of silver, gold, and bronze; David dedicates these together with tribute from every subdued nation — Edom, Moab, Ammon, Philistia, Amalek, Zobah (vv. 9-12)." },
    { x:0.78, type:"object", label:"Edom struck down in the Valley of Salt",
      desc:"Eighteen thousand Edomites fall and Edom is garrisoned throughout, 'and all the Edomites became David's servants'; the LORD gives David victory wherever he goes (vv. 13-14)." },
    { x:0.92, type:"object", label:"David's cabinet: the government behind the wars",
      desc:"Joab commands the army, Jehoshaphat records, Zadok and Ahimelech serve as priests, Seraiah is scribe, Benaiah commands the Cherethites and Pelethites, and David's own sons serve as priests — the administration built to run what these campaigns won (vv. 15-18)." }
  ],
  environment: {
    chips: ["A cord instead of a sword", "Metal that becomes a temple", "Two armies, two different counts", "Tribute from a rival king", "Garrisons instead of governors", "The wars end in a cabinet list"],
    text: "The chapter's geography is genuinely imperial for the first time in Israel's story: Philistia on the coastal plain, Moab across the Dead Sea, Zobah and Damascus deep in Aramean Syria toward the Euphrates, and Edom down through the Arabah — a reach no judge or earlier king of Israel had ever approached. Zobah's exact center is still debated among historians (candidates range from the Beqaa Valley to sites farther east toward Hamath), but every reconstruction agrees it was the single most powerful Aramean state of the age, wealthy enough to field thousands of horses and chariots and to draw Damascus itself into the fight on Hadadezer's behalf. The bronze David strips from Hadadezer's cities of Betah and Berothai does not simply vanish into a royal treasury — 1 Chronicles 18:8 traces it forward a generation to Solomon's temple, where tradition holds it became the great bronze Sea and its supporting oxen (1 Kgs 7:23-26), tying this chapter's battlefields directly to the sanctuary's own furnishings."
  },
  objectsExtra: ["measuring-cord","armor","shekel"],
  peopleExtra: ["david","joab","hadadezer","jehoshaphat-recorder","zadok","abiathar","seraiah-scribe","benaiah","cherethites-pelethites"],
  culture: [
    { title:"Measuring Moab with a cord", icon:"📏",
      text:"The practice of lining up defeated soldiers and killing a fixed proportion by measured lines has no other clear parallel in the biblical text, and its harshness reads especially sharply set against David's own history with Moab: his great-grandmother Ruth was a Moabite (Ruth 4:13-17), and it was Moab's own king who sheltered David's parents 'until I know what God will do for me' during his fugitive years (1 Sam 22:3-4). Whatever provoked this campaign is left unstated — the text records the fact of it without a word of comment either way." },
    { title:"Two armies, two different counts", icon:"🔢",
      text:"2 Samuel 8:4 gives Hadadezer's captured forces as 1,700 horsemen and 20,000 foot soldiers; the parallel account in 1 Chronicles 18:4 has 1,000 chariots, 7,000 horsemen, and 20,000 foot soldiers. As with the census chapter's differing prices for Araunah's threshing floor (2 Sam 24:24 vs. 1 Chron 21:25), the most common explanation is scribal transmission variance in the numerals rather than two contradictory events — the overall shape of the victory (a large, decisive rout) is identical in both accounts." },
    { title:"Who actually struck down the 18,000 Edomites?", icon:"⚔️",
      text:"Verse 13 credits the victory in the Valley of Salt to David personally, but 1 Chronicles 18:12 names Abishai son of Zeruiah as the commander who struck down the Edomites (giving a total of 18,000 there too), while the title of Psalm 60 credits Joab with a further engagement against 12,000 Edomites in the same valley. Ancient royal annals routinely credit the king for victories his generals actually carried out on the field — a convention this chapter's own cabinet list (vv. 16-18) makes explicit by naming Joab as 'over the army' in the first place." },
    { title:"David's sons — priests?", icon:"🤔",
      text:"Verse 18's closing line that 'David's sons were priests' (kohanim in the Hebrew) has puzzled translators for centuries, since only Aaron's Levitical line could serve as priests in the technical, sacrificial sense — which is exactly why English versions split on it: the ESV keeps 'priests' as a puzzle for the reader, while others (following an old rabbinic reading) render it 'chief officials' or 'royal advisers' instead, treating the term as an honorary court title rather than a claim that David's own sons offered sacrifices." }
  ],
  crossRefs: [
    { group:"David and Moab elsewhere", refs:[
      { r:"Ruth 4:13-17", note:"David's own great-grandmother Ruth was a Moabite" },
      { r:"1 Samuel 22:3-4", note:"Moab's king shelters David's parents during his fugitive years — a sharp contrast with this chapter's brutality" } ]},
    { group:"The parallel account, and its different numbers", refs:[
      { r:"1 Chronicles 18:1-13", note:"the same wars retold with different troop and casualty totals, and Abishai credited with the Edom victory" },
      { r:"Psalm 60 (title)", note:"references this very war, crediting Joab with a further strike against Edom in the Valley of Salt" } ]},
    { group:"Where Hadadezer's bronze ends up", refs:[
      { r:"1 Chronicles 18:8", note:"names this same bronze as the source Solomon later casts into the temple's furnishings" },
      { r:"1 Kings 7:23-26", note:"the great bronze Sea and its supporting oxen in Solomon's temple" } ]},
    { group:"The cabinet, later and elsewhere", refs:[
      { r:"2 Samuel 20:23-26", note:"a near-identical cabinet list after Absalom's revolt, with Adoram newly added over forced labor" },
      { r:"1 Kings 4:1-6", note:"Solomon's own expanded cabinet, carrying several of these same offices forward" } ]},
    { group:"The Cherethites and Pelethites' loyalty", refs:[
      { r:"2 Samuel 15:18", note:"stay with David through Absalom's revolt, marching past him as he flees Jerusalem" },
      { r:"1 Kings 1:38-40", note:"secure Solomon's coronation over Adonijah's rival claim to the throne" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 9 — David's kindness to Mephibosheth, for Jonathan's sake
   ============================================================ */
"10:9": {
  era: {
    title: "ca. 995 BC — David seeks out Saul's house for Jonathan's sake; Mephibosheth restored",
    sub: "Iron Age IIA · Jerusalem, Gibeah, and Lo-debar in Gilead · covenant loyalty (hesed) kept a generation later",
    badges: ["Iron Age IIA", "United monarchy", "Covenant loyalty (hesed)", "≈3,021 years ago"]
  },
  timeOfDay: "day",
  summary: "With his throne secure and his wars behind him, David asks a question that has waited years for an answer: 'Is there still anyone left of the house of Saul, that I may show him kindness for Jonathan's sake?' A servant of Saul's old household, Ziba, is summoned to the palace; pressed a second time — 'is there not still someone... that I may show the kindness of God to him?' — he names a name: Jonathan has a son, crippled in both feet, living far off in Gilead at Lo-debar, in the house of a man named Machir son of Ammiel. David sends and brings him. Mephibosheth arrives, falls on his face, and — plainly braced to be executed as the last loose end of a rival dynasty — hears instead: 'do not fear, for I will show you kindness for the sake of your father Jonathan; I will restore to you all the land of Saul your father, and you shall eat at my table always.' His own answer measures the distance between the fear he walked in with and the grace he is being handed: 'what is your servant, that you should show regard for a dead dog such as I?' David then reassigns Ziba's household — the man's own fifteen sons and twenty servants — to work Saul's restored estate as tenant-farmers, so that its produce keeps Mephibosheth's table fed even as he himself eats permanently at the king's own table, 'like one of the king's sons.' The chapter closes on two small domestic notes: Mephibosheth has a young son of his own, Mica, carrying Jonathan's line forward, and 'he was lame in both his feet' — the last line of the chapter as flatly matter-of-fact as its first, a reminder that the honor just granted changes nothing about the disability itself.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"David's court and table, where Mephibosheth is brought, restored, and seated 'like one of the king's sons' for the rest of his life (vv. 6-13)" },
    { id:"lo-debar",  role:"The remote Gilead town where Mephibosheth has been hidden away in Machir son of Ammiel's house since infancy — David's destination once Ziba names it (vv. 4-5)" },
    { id:"gibeah",    role:"Saul's own hometown and estate, marking the land David restores in full to Jonathan's son (vv. 7, 9-10)" }
  ],
  journey: [
    { from:"jerusalem", to:"lo-debar", label:"David sends for Mephibosheth", km:89,
      note:"'Then King David sent and brought him from the house of Machir the son of Ammiel, at Lo-debar' (v. 5) — a summons that reaches a lame prince who has spent his whole adult memory hidden in an obscure Transjordan farming town, far from any court's notice." },
    { from:"lo-debar", to:"jerusalem", dashed:true, label:"Mephibosheth's journey to the king's table", km:89,
      note:"The return trip a fearful man makes not knowing whether he is being brought to honor or to execution — 'Mephibosheth... came to David and fell on his face and paid homage' (v. 6)." },
    { from:"jerusalem", to:"gibeah", dashed:true, label:"'All the land of Saul your father', restored", km:5,
      note:"David's restoration reaches back to Saul's own hometown estate at Gibeah, just north of Jerusalem — the ancestral property Ziba's household is now assigned to work on Mephibosheth's behalf (vv. 7, 9-10)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"David's question, years in the waiting", av:"king",
      desc:"'Is there still anyone left of the house of Saul, that I may show him kindness for Jonathan's sake?' — the opening line names the motive outright: this whole chapter runs on a debt of covenant loyalty, not politics (v. 1)." },
    { x:0.2, type:"person", label:"Ziba summoned, and pressed a second time", av:"official",
      desc:"'Are you Ziba?' 'I am your servant.' David repeats the question in sharper form — 'the kindness of God' — until Ziba finally names Jonathan's crippled son and his hiding place (vv. 2-3)." },
    { x:0.34, type:"person", label:"Found at Lo-debar, in Machir's house", av:"youth",
      desc:"'He is in the house of Machir the son of Ammiel, at Lo-debar' — a name meaning 'no pasture,' fittingly obscure for the place a king's grandson has spent years forgotten (v. 4)." },
    { x:0.48, type:"person", label:"'A dead dog such as I'", av:"youth",
      desc:"Mephibosheth falls on his face before David, and even after hearing 'do not fear,' answers with the ancient Near East's own idiom for utter self-abasement: 'what is your servant, that you should show regard for a dead dog such as I?' (vv. 6-8)." },
    { x:0.6, type:"person", label:"'All the land of Saul your father'", av:"king",
      desc:"David restores Saul's entire estate to Jonathan's son and promises him a permanent seat at the royal table — a single sentence undoing a generation's worth of Mephibosheth's expected fate as a rival dynasty's last loose end (v. 7)." },
    { x:0.72, type:"person", label:"Ziba's household put to work for his former master's line", av:"official",
      desc:"David reassigns Ziba — with his own fifteen sons and twenty servants — to till Saul's land and bring in its produce so 'your master's grandson may have bread to eat,' even though Mephibosheth himself eats permanently at David's own table (vv. 9-11)." },
    { x:0.85, type:"object", label:"'Like one of the king's sons'",
      desc:"'So Mephibosheth ate at David's table, like one of the king's sons' — the phrase that names exactly what has happened: a defeated dynasty's last claimant is not merely spared but adopted into the winning house's own daily life (v. 11)." },
    { x:0.95, type:"object", label:"Mica, and a plain closing line",
      desc:"'Mephibosheth had a young son, whose name was Mica... he was lame in both his feet' — Jonathan's line continues, and the chapter ends exactly where it started factually: a man's disability, stated without comment, framing the whole story of grace around it (vv. 12-13)." }
  ],
  environment: {
    chips: ["A question that waited years", "'The kindness of God'", "A prince hidden in Gilead", "'A dead dog such as I'", "Adopted to the king's own table", "A plain, undramatic closing line"],
    text: "Lo-debar sits well off the main roads of Transjordan Gilead — an obscure farming settlement, not a fortified town of any note, which is precisely why it functioned as an effective hiding place for a crippled heir of the losing dynasty: no rival of David's would think to look for a political threat in a place whose own name means 'no pasture.' Gibeah, by contrast, sits barely five kilometers north of Jerusalem — Saul's own hometown and rustic hill-capital, now the estate David formally reassigns rather than confiscates, keeping Saul's family land intact under Saul's own former servant's management. The distance between the two places (roughly 90 km) measures the distance the chapter closes in a single royal summons: from forgotten exile to a permanent chair at the king's own table."
  },
  objectsExtra: ["yoke"],
  peopleExtra: ["david","ziba","mephibosheth"],
  culture: [
    { title:"Hesed — covenant loyalty that outlives the one who asked for it", icon:"🤝",
      text:"David's kindness here fulfills a specific, decades-old promise: Jonathan had made David swear not to cut off his own steadfast love (hesed) from Jonathan's house forever, 'even when the LORD cuts off every one of the enemies of David from the face of the earth' (1 Sam 20:14-17, 42). Ancient covenant loyalty bound not just two individuals but their descendants — which is exactly why David's opening question in this chapter reaches past Jonathan himself to ask whether anyone of his line survives to receive it." },
    { title:"'A dead dog' — the ancient Near East's idiom of utter worthlessness", icon:"🐕",
      text:"Mephibosheth's self-description recurs elsewhere in this era as the sharpest available figure of speech for a person with no standing to claim anything: David uses nearly the same phrase toward Saul at En-gedi ('after whom do you pursue? After a dead dog, after a flea!' 1 Sam 24:14), and Ziba himself will later use it as an insult against Mephibosheth during Absalom's revolt (2 Sam 16:9's 'dead dog' curse against David, echoed back). Mephibosheth applies it to himself here with no irony — a crippled grandson of the fallen king, expecting nothing, offered everything." },
    { title:"Eating at the king's table — honor with a leash attached", icon:"🍽️",
      text:"A permanent seat at a king's table was both genuine honor and quiet political control: keeping a rival dynasty's last male heir close, visible, and dependent removed any need to watch him from a distance. The same arrangement recurs a very different way centuries later, when the exiled king Jehoiachin is given 'a regular allowance... every day of his life' and a seat at the Babylonian king's own table (2 Kgs 25:27-30) — honor and surveillance bound together in both cases." },
    { title:"Ziba's household — a servant who became a substantial landowner", icon:"👨‍🌾",
      text:"The aside that Ziba 'had fifteen sons and twenty servants' (v. 10) signals a man of real means, not a humble farmhand — likely someone who had already been managing Saul's confiscated estate informally in the years since Gilboa. His willingness ('according to all that my lord the king commands his servant, so will your servant do,' v. 11) reads as compliant in this chapter; his later slander of Mephibosheth during Absalom's revolt (2 Sam 16:1-4), rewarded provisionally with the whole estate, suggests the compliance may always have had an eye on the main chance." }
  ],
  crossRefs: [
    { group:"The oath this chapter fulfills", refs:[
      { r:"1 Samuel 18:1-4", note:"Jonathan's covenant with David, sealed by handing over his own robe, armor, and weapons" },
      { r:"1 Samuel 20:14-17, 42", note:"Jonathan's oath that David never cut off his steadfast love from Jonathan's house — the debt this chapter pays" } ]},
    { group:"The detail planted earlier", refs:[
      { r:"2 Samuel 4:4", note:"Mephibosheth's fall and lifelong lameness, introduced as an aside with no bearing on that chapter's plot at all" } ]},
    { group:"Where Mephibosheth's story goes next", refs:[
      { r:"2 Samuel 16:1-4", note:"Ziba meets the fleeing David with supplies and a slander against Mephibosheth during Absalom's revolt" },
      { r:"2 Samuel 19:24-30", note:"Mephibosheth's own account after David's return; the king splits the disputed land between the two men without ruling on who told the truth" } ]},
    { group:"'A dead dog' elsewhere in this era", refs:[
      { r:"1 Samuel 24:14", note:"David uses the identical figure of speech toward himself, addressing Saul at En-gedi" },
      { r:"2 Samuel 16:9", note:"Abishai calls Shimei 'this dead dog' for cursing David during the same later flight" } ]},
    { group:"A later echo: honor and surveillance at a foreign king's table", refs:[
      { r:"2 Kings 25:27-30", note:"the exiled king Jehoiachin given a lifelong seat at the Babylonian king's table — the same arrangement, centuries later, on the losing side of a different empire" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 10 — the war against Ammon and its Aramean allies
   ============================================================ */
"10:10": {
  era: {
    title: "ca. 994 BC — Hanun's insult, and the war against Ammon and its Aramean mercenaries",
    sub: "Iron Age IIA · Rabbah, Jericho, the Aramean north, and Helam · the war that sets up the siege of Rabbah",
    badges: ["Iron Age IIA", "United monarchy", "Ammonite-Aramean war", "≈3,020 years ago"]
  },
  timeOfDay: "day",
  summary: "Nahash, king of the Ammonites, dies, and his son Hanun succeeds him. David, remembering some past kindness from Nahash — 'I will deal loyally with Hanun... as his father dealt loyally with me' — sends envoys to console the new king over his father's death. But Hanun's princes talk him out of reading the gesture as it was intended: 'do you think, because David has sent comforters to you, that he is honoring your father? Has not David sent his servants to you to search the city and spy it out and overthrow it?' Hanun acts on the suspicion decisively — he shaves off half the beard of each envoy and cuts their garments off at the hips, sending them home publicly humiliated. When David hears how ashamed the men are, he quietly tells them to wait at Jericho until their beards grow back rather than parade their disgrace through Jerusalem. Knowing they have made themselves 'a stench' to David, the Ammonites hire outside muscle: twenty thousand Aramean foot soldiers from Beth-rehob and Zobah, a thousand men from the king of Maacah, and twelve thousand from the men of Tob. David sends Joab and the whole army to meet the threat. Finding himself caught between the Ammonites drawn up at Rabbah's gate and the hired Arameans arrayed separately in open country, Joab splits his forces: he takes the best troops against the Arameans himself, hands the rest to his brother Abishai against the Ammonites, and pledges mutual rescue either way — 'be of good courage, and let us be courageous for our people, and for the cities of our God, and may the LORD do what seems good to him.' Both fronts break at once: the Arameans flee before Joab, and seeing it, the Ammonites flee too, retreating into the city. Joab returns to Jerusalem. But the defeated Arameans regroup under Hadadezer, who summons fresh reinforcements 'from beyond the Euphrates' under his army commander Shobach, mustering at a place called Helam. David does not send Joab this time — he personally gathers all Israel, crosses the Jordan, and meets this second Aramean army himself. The rout is total: seven hundred chariot-crews and forty thousand horsemen fall, and Shobach himself is wounded and dies on the field. Every king who had served Hadadezer makes peace with Israel and submits, 'and the Arameans were afraid to save the Ammonites anymore' — Ammon's hired allies are gone, and its own capital stands alone, exactly where 2 Samuel 11 picks the story back up with Joab's siege of Rabbah the following spring.",
  focusPlace: "rabbah",
  places: [
    { id:"rabbah",  role:"The Ammonite capital where Hanun's court plots the insult, where the Ammonite army draws up at the gate, and where the war ultimately drives toward the siege that opens 2 Samuel 11 (vv. 1-8, 14)" },
    { id:"jericho", role:"Where David quietly shelters his humiliated envoys until their shaved beards grow back, sparing them a public return through Jerusalem (v. 5)" },
    { id:"zobah",   role:"Anchor of the hired Aramean coalition — Beth-rehob, Zobah, Maacah, and Tob together field over 30,000 mercenaries against Joab's smaller force (v. 6)" },
    { id:"jerusalem", role:"David's capital, from which the envoys are first sent and to which Joab returns after the first battle (vv. 2, 14)" },
    { id:"helam",   role:"Where Hadadezer's regrouped Aramean reinforcements under Shobach meet David's own army, personally led across the Jordan; Shobach dies here and the war ends (vv. 15-19)" }
  ],
  journey: [
    { from:"jerusalem", to:"rabbah", label:"David's envoys sent to console Hanun", km:69,
      note:"'David sent by his servants to console him concerning his father. And David's servants came into the land of the Ammonites' (v. 2) — a diplomatic gesture that Hanun's own princes talk him into reading as espionage instead." },
    { from:"rabbah", to:"jericho", dashed:true, label:"The shamed envoys sent home by way of Jericho", km:47,
      note:"Rather than let his humiliated men walk into Jerusalem half-bearded, David redirects them: 'remain at Jericho until your beards have grown, and then return' (v. 5)." },
    { from:"zobah", to:"rabbah", label:"Hired Aramean mercenaries march to Ammon's aid", km:230,
      note:"'The Ammonites sent and hired the Arameans of Beth-rehob and the Arameans of Zobah, twenty thousand foot soldiers, and the king of Maacah... and the men of Tob' — over 30,000 hired troops converging on the war Hanun's insult started (v. 6)." },
    { from:"zobah", to:"helam", dashed:true, label:"Hadadezer's Euphrates reinforcements regroup under Shobach", km:112,
      note:"After the first battle's rout, Hadadezer 'brought out the Arameans who were beyond the Euphrates,' mustering a second army at Helam under his commander Shobach (vv. 15-16)." },
    { from:"jerusalem", to:"helam", via:"jordan", dashed:true, label:"David personally leads Israel across the Jordan to Helam", km:160,
      note:"This time David does not delegate: 'he gathered all Israel together and crossed the Jordan and came to Helam' to meet the second Aramean army in person (v. 17)." }
  ],
  hotspots: [
    { x:0.04, type:"person", label:"Nahash dies; Hanun succeeds", av:"king",
      desc:"'The king of the Ammonites died, and Hanun his son reigned in his place' — a routine succession that David's diplomacy is about to turn into a war (v. 1)." },
    { x:0.14, type:"person", label:"Comforters sent, remembering Nahash's kindness", av:"king",
      desc:"'I will deal loyally with Hanun... as his father dealt loyally with me' — David sends envoys to console the new king, the same instinct for keeping old debts of kindness that drives 2 Samuel 9 (v. 2)." },
    { x:0.26, type:"person", label:"The princes' accusation: spies, not mourners", av:"official",
      desc:"'Has not David sent his servants to you to search the city and to spy it out and to overthrow it?' — Hanun's own court talks him out of reading the gesture at face value (v. 3)." },
    { x:0.36, type:"person", label:"Half-beards shaved, garments cut at the hips", av:"warrior",
      desc:"Hanun 'shaved off half the beard of each and cut off their garments in the middle, at their hips, and sent them away' — a calculated public humiliation of David's own royal representatives (v. 4)." },
    { x:0.46, type:"object", label:"'Remain at Jericho until your beards have grown'",
      desc:"David spares the envoys further shame by rerouting them: 'the men were greatly ashamed... remain at Jericho... and then return' (v. 5)." },
    { x:0.56, type:"person", label:"Ammon hires an Aramean coalition", av:"warrior",
      desc:"Knowing they had become 'a stench' to David, the Ammonites hire the Arameans of Beth-rehob and Zobah, the king of Maacah, and the men of Tob — outside muscle bought to face the war their own insult provoked (v. 6)." },
    { x:0.68, type:"person", label:"Joab and Abishai split the army, fight two fronts at once", av:"warrior",
      desc:"Caught between the Ammonites at the gate and the Arameans in the open country, Joab takes the best troops against the Arameans, hands the rest to Abishai against the Ammonites, and pledges mutual rescue: 'be of good courage... may the LORD do what seems good to him' — both fronts break, and Joab returns to Jerusalem (vv. 7-14)." },
    { x:0.82, type:"person", label:"Hadadezer regroups under Shobach", av:"warrior",
      desc:"Refusing to accept the first defeat as final, Hadadezer summons fresh Aramean troops 'from beyond the Euphrates' under his commander Shobach, mustering at Helam for a second engagement (vv. 15-16)." },
    { x:0.95, type:"person", label:"David crosses the Jordan himself; Shobach dies", av:"king",
      desc:"This time David commands in person: Israel crushes the Aramean muster at Helam, killing the crews of 700 chariots and 40,000 horsemen and mortally wounding Shobach — every king allied to Hadadezer sues for peace, and 'the Arameans were afraid to save the Ammonites anymore' (vv. 17-19)." }
  ],
  environment: {
    chips: ["A gesture of kindness read as espionage", "Public humiliation as an act of war", "Envoys sheltered rather than shamed further", "A hired multinational mercenary army", "Two fronts, two commanders, one pledge", "The king takes the field himself"],
    text: "This chapter's geography runs in two directions at once: south and east to Rabbah and Jericho for the insult and its immediate battle, then far north to the Aramean heartland around Zobah for the mercenaries Ammon's silver buys, and finally back down through the Transjordan corridor to an unlocated field called Helam for the war's real decision. The scale of the hired coalition — Beth-rehob, Zobah, Maacah, and Tob together fielding well over 30,000 men against Joab's single army — shows how seriously Ammon's small kingdom had to buy its way into a fight it could never have won alone; that David personally crosses the Jordan for round two, rather than sending Joab again, signals how seriously he now takes an Aramean coalition capable of drawing reinforcements from as far as the Euphrates. The chapter ends exactly where the war against Ammon itself is still unfinished — Rabbah's own walls, and the siege that will finally bring them down, wait for 2 Samuel 11-12."
  },
  objectsExtra: ["shaved-beard","sword","chariot"],
  peopleExtra: ["david","joab","abishai","hanun","nahash","shobach","hadadezer"],
  culture: [
    { title:"A full beard, and what shaving it meant", icon:"🧔",
      text:"An adult man's beard was a standard mark of dignity across the ancient Near East; shaving it off — in whole or in part — reads in surrounding texts as a deliberate act of degradation, mourning, or enslavement rather than mere grooming. Isaiah later uses the same image on a national scale: a hired razor 'from beyond the Euphrates' will shave 'the head and the hair of the feet, and it will consume the beard also' as a figure for Judah's coming humiliation (Isa 7:20) — the very direction (beyond the Euphrates) Hadadezer's own reinforcements march from in this chapter's second half." },
    { title:"What kindness had Nahash actually shown David?", icon:"🤔",
      text:"The text never says. The likeliest link, on the old principle that an enemy's enemy is a friend, ties back to 1 Samuel 11: this same Nahash had besieged Jabesh-gilead and threatened to gouge out an eye from every inhabitant before Saul's rescue made him king — meaning Nahash and Saul's house were already on hostile terms decades before David's own long conflict with Saul began. A king with reason to distrust Saul's dynasty had reason to look favorably on Saul's fugitive rival; nothing more specific survives in the record." },
    { title:"Two commanders, one battle plan", icon:"⚔️",
      text:"Joab's tactical response to being surrounded — split the army, take personally the tougher of the two fights, and pledge mutual rescue to the brother commanding the other half (vv. 9-12) — is the clearest picture Scripture gives of ancient battlefield command under pressure, and it works: both Aramean and Ammonite lines break in the same engagement. The same brothers' partnership recurs, less honorably, when Joab murders Abner and later Amasa; here, at least, it saves an army." },
    { title:"Why David goes in person the second time", icon:"👑",
      text:"David delegated the first engagement entirely to Joab (v. 7) but crosses the Jordan himself once Hadadezer musters reinforcements from beyond the Euphrates (v. 17) — a scale of threat serious enough that the king judged his own presence, not just his general's competence, was required. It is the same instinct 2 Samuel 11 will fault him for abandoning the very next spring, when he stays home from the siege of Rabbah and sends Joab in his place." }
  ],
  crossRefs: [
    { group:"Nahash's earlier history with Saul's house", refs:[
      { r:"1 Samuel 11:1-11", note:"Nahash besieges Jabesh-gilead and threatens to gouge out an eye from every inhabitant; Saul's rescue of the city makes him king" } ]},
    { group:"Shaving and humiliation elsewhere in Scripture", refs:[
      { r:"Isaiah 7:20", note:"a hired razor 'from beyond the Euphrates' shaves head, beard, and feet as a figure for national disgrace" },
      { r:"2 Samuel 19:24", note:"Mephibosheth's own untrimmed beard, left unkempt through David's exile, as a sign of genuine mourning rather than imposed shame" } ]},
    { group:"What this war sets up", refs:[
      { r:"2 Samuel 11:1", note:"'in the spring... David sent Joab... and they besieged Rabbah' — the unfinished siege this chapter's war leads directly into" },
      { r:"2 Samuel 12:26-31", note:"Rabbah finally falls and Hanun's own gold crown is taken for David's head" } ]},
    { group:"The same Aramean kingdoms elsewhere", refs:[
      { r:"2 Samuel 8:3-8", note:"David's earlier defeat of Hadadezer of Zobah, the same king whose reinforcements return here" },
      { r:"1 Chronicles 19:1-19", note:"the Chronicler's fuller parallel account of this same war, naming Shobach as 'Shophach'" } ]},
    { group:"Joab and Abishai's partnership elsewhere", refs:[
      { r:"2 Samuel 2:18-24", note:"the two brothers (with Asahel) already fighting side by side at Gibeon's pool, years earlier" },
      { r:"2 Samuel 21:15-17", note:"Abishai personally saves David's life from a Philistine giant at Gob" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 11 — David, Bathsheba, and the death of Uriah
   ============================================================ */
"10:11": {
  era: {
    title: "ca. 993 BC — the siege of Rabbah: David, Bathsheba, and Uriah's death",
    sub: "Iron Age IIA · Jerusalem and the walls of Rabbah · adultery, and a murder disguised as a battle loss",
    badges: ["Iron Age IIA", "United monarchy", "Siege of Rabbah", "≈3,019 years ago"]
  },
  timeOfDay: "night",
  summary: "In the spring, when kings traditionally led their armies to war, David sends Joab and 'all Israel' out to finish off the Ammonites and lay siege to their capital, Rabbah — but stays behind in Jerusalem himself. One evening, walking his palace roof, he sees a woman bathing on a rooftop below; she is Bathsheba, wife of Uriah the Hittite, one of his own Thirty mighty men, currently at the front with the army. David sends for her, sleeps with her, and sends her home; when she conceives, he tries to cover it by recalling Uriah from the siege lines, hoping he will go home to his wife and let the pregnancy pass as his own. Uriah refuses twice — sober and then deliberately made drunk — on principle: with the ark and his comrades camped in the open field, he will not enjoy his own house while they cannot. Failing to manufacture a cover story, David writes Joab a letter, hand-carried by Uriah himself, ordering him exposed at the fiercest point of the fighting and then abandoned; Joab complies, and Uriah dies alongside other soldiers at the wall of Rabbah. Joab's messenger is coached in advance on how to defuse David's expected anger over the tactics, then instructed to add, almost as an afterthought, that Uriah is dead too — news David receives with chilling calm ('the sword devours now one and now another'). After a formal mourning period, David marries the widow, and she bears him a son. The chapter's last sentence undoes every appearance of a tidy ending: 'the thing that David had done displeased the LORD.'",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"David's palace, where he stays back from the war, sees Bathsheba bathing, sends for her, and later recalls and questions Uriah (vv. 1-13, 26-27)" },
    { id:"rabbah", role:"The besieged Ammonite capital where Joab commands the army and where Uriah is deliberately exposed and killed at the wall (vv. 1, 16-17, 24)" }
  ],
  journey: [
    { from:"jerusalem", to:"rabbah", label:"Joab and 'all Israel' march out to besiege Rabbah while David stays behind", km:69,
      note:"'In the spring, the time when kings go out to battle... David sent Joab, and his servants with him, and all Israel... and they besieged Rabbah. But David remained at Jerusalem' (v. 1) — the one-line detail that starts the whole chapter's tragedy: the king out of place." },
    { from:"jerusalem", to:"rabbah", dashed:true, label:"Uriah summoned home, then sent back carrying his own death sentence", km:69,
      note:"David recalls Uriah from the siege lines hoping he'll go home to his wife and cover the pregnancy; when Uriah won't, David sends him back to Joab carrying a sealed letter ordering his own death at the front of the fighting (vv. 6-15)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"David stays home while Joab besieges Rabbah", av:"king",
      desc:"'In the spring... David sent Joab, and his servants with him, and all Israel... and they besieged Rabbah. But David remained at Jerusalem' (v. 1) — the king out of place, away from where a king of that era was expected to be." },
    { x:0.18, type:"person", label:"David sees Bathsheba bathing from the roof", av:"king",
      desc:"'It happened, late one afternoon, when David arose from his couch and was walking on the roof of the king's house, that he saw from the roof a woman bathing; and the woman was very beautiful' (vv. 2-3) — he learns at once that she is Bathsheba, wife of Uriah the Hittite, one of his own soldiers at the front." },
    { x:0.32, type:"person", label:"Sent for, taken, and pregnant", av:"woman",
      desc:"'David sent messengers and took her, and she came to him, and he lay with her... Then she returned to her house. And the woman conceived. And she sent and told David, \"I am pregnant\"' (vv. 4-5) — the aside in v. 4, that she had just purified herself from her period, forecloses any claim the child could be Uriah's." },
    { x:0.46, type:"person", label:"Uriah's refusal, sober and drunk alike", av:"warrior",
      desc:"Summoned home from the siege, Uriah sleeps at the palace door with the guard instead: 'The ark and Israel and Judah dwell in booths, and my lord Joab and the servants of my lord are camping in the open field. Shall I then go to my house, to eat and drink and lie with my wife?' (v. 11) — he holds the line even after David gets him drunk (v. 13)." },
    { x:0.6, type:"object", label:"The letter Uriah carries to his own death",
      desc:"Having failed to arrange a cover story, David 'wrote a letter to Joab and sent it by the hand of Uriah,' ordering: 'Set Uriah in the forefront of the hardest fighting, and then draw back from him, that he may be struck down, and die' (vv. 14-15) — the condemned man personally delivers his own sentence." },
    { x:0.75, type:"person", label:"Uriah falls at the wall of Rabbah", av:"warrior",
      desc:"Joab positions Uriah 'in the place where he knew there were valiant men'; the defenders sortie out, and 'some of the servants of David among the people fell. Uriah the Hittite also died' (vv. 16-17)." },
    { x:0.9, type:"object", label:"A scripted report, and David's chilling reply",
      desc:"Joab coaches his messenger to preempt David's anger over risky tactics by invoking Abimelech's death at Thebez (vv. 20-21; cf. Judg 9:50-55), then to add Uriah's death almost as an afterthought (v. 21). David's answer needs no more than: 'the sword devours now one and now another' (v. 25)." }
  ],
  environment: {
    chips: ["Rooftop bathing in view of the palace", "Ritual purification (v. 4)", "Spring campaign season", "Siege warfare at a city wall", "The king's letter as death warrant", "Adultery, murder, and cover-up"],
    text: "Israelite houses used flat roofs for sleeping, drying produce and washing; a palace built into the City of David's steep ridge stood higher than the rooftops around it, which is exactly why David — walking his own roof in the evening — could see into a courtyard or roof below that its owner had every reason to expect was private. Verse 4's aside, 'now she was purifying herself from her uncleanness,' reads like a throwaway ritual detail (Lev 15:19-24) but functions as the narrator's alibi-closer: Bathsheba had just completed her monthly purification, meaning she could not already have been carrying a child by Uriah when David sent for her — the text quietly forecloses any doubt about paternity. The siege tactics behind Uriah's death were common knowledge to soldiers of the day: a besieging force that pressed too close to a fortified wall risked exactly the kind of loss Abimelech suffered at Thebez, struck by a millstone dropped from above (Judg 9:50-55) — which is why Joab expects David's anger and coaches his messenger's answer for it in advance."
  },
  objectsExtra: ["sword"],
  peopleExtra: ["david","bathsheba","uriah","joab"],
  culture: [
    { title:"Flat rooftops and royal sightlines", icon:"🏠",
      text:"Israelite houses used flat roofs for sleeping, storage, drying produce and washing; a king's palace stood higher than the surrounding rooftops of the City of David's steep ridge, which is exactly why David — walking his own roof in the cool of evening — could see into a courtyard or roof below that its owner had every reason to expect was private." },
    { title:"Ritual purification and paternity", icon:"💧",
      text:"Verse 4's aside — 'now she was purifying herself from her uncleanness' — reads like a throwaway ritual detail (Lev 15:19-24) but functions as the narrator's alibi-closer: Bathsheba had just completed her monthly purification, meaning she could not already have been carrying a child by Uriah when David sent for her. The text quietly forecloses any doubt about whose child this is." },
    { title:"A death warrant carried by the condemned man's own hand", icon:"✉️",
      text:"Uriah personally delivers the sealed letter ordering his own death at the front — a detail later literary tradition would echo as the 'letter of Bellerophon' motif, a messenger unknowingly carrying his own death sentence. Nothing in the text suggests Uriah suspected anything; his loyalty to David is total, which is precisely what makes the betrayal complete." },
    { title:"Joab's scripted answer, and David's closing line", icon:"🗡️",
      text:"Joab anticipates David's anger at losing men so close to a city wall and coaches the messenger with a ready answer — invoking Abimelech's death at Thebez (Judg 9:50-55), killed when a woman dropped a millstone from the wall onto his head, exactly the kind of loss a competent general should have avoided. David's reply cuts the conversation off rather than opening it: 'the sword devours now one and now another' (v. 25) — an old soldier's proverb doing the work of ending an uncomfortable line of questioning." }
  ],
  crossRefs: [
    { group:"Uriah among David's mighty men", refs:[
      { r:"2 Samuel 23:39", note:"Uriah the Hittite listed among David's Thirty mighty men — loyalty of that caliber is exactly what makes his death here so damning" } ]},
    { group:"The precedent everyone in the story already knows", refs:[
      { r:"Judges 9:50-55", note:"Abimelech's death at Thebez, killed by a millstone dropped from a wall — the very story Joab expects David to bring up in anger, and coaches the messenger's answer for in advance" } ]},
    { group:"What follows immediately", refs:[
      { r:"2 Samuel 12:1-14", note:"the very next chapter — Nathan's parable and rebuke that answers this one directly" },
      { r:"Psalm 51 (title)", note:"David's psalm 'when Nathan the prophet went to him, after he had gone in to Bathsheba' — the fullest biblical statement of the repentance this chapter sets up" } ]},
    { group:"Kept in Jesus' genealogy, not smoothed over", refs:[
      { r:"Matthew 1:6", note:"'David was the father of Solomon by the wife of Uriah' — the genealogy of Jesus names this exact scandal rather than passing over it" } ]},
    { group:"The war this siege continues", refs:[
      { r:"2 Samuel 10:1-14", note:"the war against Ammon and its Aramean allies that this siege of Rabbah carries on" } ]},
    { group:"The Chronicler's silence", refs:[
      { r:"1 Chronicles 20:1-3", note:"the Chronicler's parallel account of the same Rabbah campaign, which omits the Bathsheba-Uriah affair entirely" } ]},
    { group:"Bathsheba's family — a possible thread into Absalom's revolt", refs:[
      { r:"2 Samuel 23:34", note:"Eliam, Bathsheba's father, is very possibly the same Eliam listed among David's mighty men as 'son of Ahithophel the Gilonite' — if so, Ahithophel was Bathsheba's grandfather, which may help explain why David's own trusted counselor defects to Absalom's rebellion in 2 Sam 15-17" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 12 — Nathan's rebuke; the child's death; Solomon's birth; Rabbah falls
   ============================================================ */
"10:12": {
  era: {
    title: "ca. 992 BC — Nathan's rebuke, the child's death, Solomon's birth, and Rabbah's fall",
    sub: "Iron Age IIA · Jerusalem and Rabbah · confrontation, grief, and the end of the Ammonite war",
    badges: ["Iron Age IIA", "United monarchy", "Rabbah captured", "≈3,018 years ago"]
  },
  timeOfDay: "day",
  summary: "The LORD sends Nathan back to the palace, this time not with a covenant promise but a story: a rich man with vast flocks who, rather than touch his own animals for a visiting traveler, takes and slaughters the one treasured ewe lamb of a poor neighbor — an animal raised like a daughter in his house. David, hearing it as a legal case brought before the king, is outraged and pronounces sentence: the man deserves to die, and must repay fourfold for showing no pity. Nathan's answer is four words that turn the king's own verdict against him: 'You are the man.' What follows is the sharpest prophetic indictment any reigning king of Israel receives face to face — David is reminded everything he has came from the LORD's own hand, is charged with despising God's word by killing Uriah with the Ammonites' sword and taking his wife, and is told the sword will never leave his household and that the very evil he did in secret will be repeated against him in broad daylight, by someone close to him. David's response is immediate and unadorned: 'I have sinned against the LORD.' Nathan answers just as immediately: the LORD has put away the sin — David will not die — but the child conceived in it will. The infant sickens; David fasts and lies on the ground all night pleading for its life, refusing his own household's attempts to raise him, and when the child dies on the seventh day his servants are afraid to tell him, unsure how far his grief will go. Instead David surprises them: he rises, washes, worships, and eats, explaining that fasting made sense while there was still something to plead for, but not now — 'I shall go to him, he will not return to me.' He then comforts Bathsheba, and their next son is Solomon, whom the LORD loves and names, through Nathan, Jedidiah ('beloved of the LORD'). The chapter closes by finishing the war interrupted a chapter earlier: Joab, having captured Rabbah's water supply, calls David up so the king — not his general — gets credit for the city's fall; David takes the Ammonite king's crown for his own head, puts the population to forced labor, and returns to Jerusalem.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"Where Nathan confronts David, where the sick child dies and David returns to worship, and where Solomon is later born (vv. 1-25)" },
    { id:"rabbah", role:"The Ammonite capital Joab has besieged since the previous chapter, finally captured when David arrives to take personal command (vv. 26-31)" }
  ],
  journey: [
    { from:"jerusalem", to:"rabbah", label:"Joab captures the city's water supply and calls David up to finish it", km:69,
      note:"Some months after the affair began, Joab reports he has taken 'the city of waters' and urges David to bring up the rest of the army himself, 'lest I take the city, and it be called by my name' (vv. 26-28) — a rare moment of a general deliberately not claiming a conquest." },
    { from:"jerusalem", to:"rabbah", dashed:true, label:"David marches to take the city and its crown", km:69,
      note:"David gathers the people, marches to Rabbah, fights against it and captures it, taking the Ammonite king's gold crown for his own head before returning to Jerusalem with the city's plunder and population (vv. 29-31)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"Nathan's story: the rich man and the poor man's one ewe lamb", av:"prophet",
      desc:"A rich man with 'very many flocks and herds' takes and slaughters a poor neighbor's only lamb — an animal that 'used to eat of his morsel and drink from his cup and lie in his arms, and was like a daughter to him' — to feed a visiting traveler rather than touch his own flock (vv. 1-4)." },
    { x:0.18, type:"person", label:"David condemns the man — and himself", av:"king",
      desc:"'David's anger was greatly kindled against the man... \"the man who has done this deserves to die... he shall restore the lamb fourfold, because he did this thing, and because he had no pity\"' (vv. 5-6) — a legal verdict pronounced before David knows it is about him." },
    { x:0.32, type:"person", label:"'You are the man!'", av:"prophet",
      desc:"Nathan turns the parable on the king directly, cataloguing everything the LORD had given him and charging him: 'you have struck down Uriah the Hittite with the sword and have taken his wife to be your wife' (vv. 7-9) — the sharpest face-to-face prophetic indictment of a reigning king in the Old Testament." },
    { x:0.46, type:"person", label:"Confession, forgiveness, and consequence", av:"king",
      desc:"'David said to Nathan, \"I have sinned against the LORD.\" And Nathan said to David, \"The LORD also has put away your sin; you shall not die. Nevertheless...the child who is born to you shall die\"' (vv. 13-14) — mercy and consequence arrive in the same breath." },
    { x:0.58, type:"object", label:"The child's illness, David's fast, and the seventh day",
      desc:"The LORD strikes the child 'and it became sick.' David pleads all night, fasting and lying on the ground, refusing to rise even for his own elders — 'on the seventh day the child died,' and his servants are afraid to tell him (vv. 15-18)." },
    { x:0.72, type:"person", label:"David rises, worships, and comforts Bathsheba", av:"king",
      desc:"Perceiving the truth before anyone speaks it, David 'arose from the earth and washed and anointed himself... and went into the house of the LORD and worshiped' before eating again (vv. 19-20); he explains, 'I shall go to him, but he will not return to me' (v. 23) — then Bathsheba bears Solomon, whom the LORD loves and names Jedidiah through Nathan (vv. 24-25)." },
    { x:0.9, type:"person", label:"Joab calls David to finish Rabbah; the crown changes heads", av:"king",
      desc:"Having taken 'the city of waters,' Joab summons David so the king gets the credit: 'lest I take the city, and it be called by my name' (v. 28). David takes the Ammonite king's crown — 'its weight was a talent of gold, with a precious stone' — for his own head, and the army returns to Jerusalem (vv. 29-31)." }
  ],
  environment: {
    chips: ["Legal-case parable as a rhetorical trap", "Fourfold restitution (Ex 22:1)", "Seven days of fasting for the sick child", "Mourning customs inverted", "Talent-weight gold crown", "Forced labor after conquest"],
    text: "Nathan's approach follows a device Scripture uses more than once — a wise woman of Tekoa runs the identical trick on David a few chapters later (2 Sam 14:1-20) — presenting a hypothetical legal case designed to secure a ruling before the accused realizes he is the defendant. David's own sentence, fourfold restitution for the stolen lamb, echoes almost exactly the penalty Exodus 22:1 prescribes for a stolen sheep, and reads eerily in hindsight: four of David's own sons die in the narrative that follows this chapter (the unnamed infant, Amnon, Absalom, Adonijah). Israelite mourning customs expected escalating grief after a death — torn clothes, ashes, extended fasting — which is why David's servants are baffled when he does the reverse, rising to eat once the child is gone rather than after; his explanation, 'I shall go to him, he will not return to me' (v. 23), is one of the Old Testament's few glimpses of hope for an infant's fate beyond death. The Ammonite king's crown taken in verse 30 — 'a talent of gold, with a precious stone' — would weigh roughly 34 kg by the standard reckoning of a talent, almost certainly too heavy to be worn as an ordinary crown, and more likely a gem-set golden image or civic ornament reset as a trophy on David's head; the forced labor imposed on Rabbah's population in verse 31 (saws, iron picks, axes, brickwork) was harsh but standard ancient Near Eastern practice toward a defeated capital, not an exceptional cruelty singled out by the text."
  },
  objectsExtra: ["ewe-lamb","crown"],
  peopleExtra: ["david","nathan","bathsheba","solomon","joab"],
  culture: [
    { title:"A parable built to trap the king", icon:"⚖️",
      text:"Nathan doesn't open with an accusation but a legal case — poor man, rich man, a stolen lamb — precisely because a king's job was to render judgment on cases like it. David condemns the fictional rich man before he has any idea the story is about him; the wise woman of Tekoa uses the same device on David again in 2 Samuel 14:1-20, this time at Joab's instigation." },
    { title:"Fourfold restitution, self-applied", icon:"🐑",
      text:"David's sentence — 'he shall restore the lamb fourfold' — quotes Exodus 22:1's penalty for a stolen sheep almost verbatim. Read against what follows in 2 Samuel, the number becomes unbearable: four of David's own sons die in the chapters after this one (the unnamed infant, Amnon, Absalom, Adonijah)." },
    { title:"Mourning in reverse", icon:"🙏",
      text:"Ancient mourning ran one direction — deepen the fast, the grief, the ashes, as death confirms itself. David inverts it: fasting and lying on the ground while the child might still live, then rising to wash, worship and eat the moment hope is gone. His explanation to his startled servants, 'I shall go to him, he will not return to me,' is a rare Old Testament word of comfort about where an infant goes." },
    { title:"Two names for one child", icon:"👶",
      text:"Solomon is the throne name; Jedidiah ('beloved of the LORD'), given through Nathan, is the name of grace — the same prophet who announced God's judgment on this union also carries God's blessing on its second son, a small but pointed sign that the forgiveness in verse 13 was real, not merely spoken." }
  ],
  crossRefs: [
    { group:"The affair this rebuke answers", refs:[
      { r:"2 Samuel 11:1-27", note:"the affair, cover-up, and murder this chapter directly confronts" } ]},
    { group:"David's own response, in his own words", refs:[
      { r:"Psalm 51 (title, vv. 1-17)", note:"'Have mercy on me, O God' — David's fullest response to this rebuke, matching its confession almost point for point" },
      { r:"Psalm 32:3-5", note:"a companion psalm on the misery of unconfessed sin and the relief of confession" } ]},
    { group:"'The sword shall never depart from your house'", refs:[
      { r:"2 Samuel 13:1-14", note:"Amnon's rape of Tamar — the first of the household consequences Nathan pronounces here" },
      { r:"2 Samuel 16:20-22", note:"Absalom takes David's concubines 'in the sight of all Israel,' fulfilling verse 11's 'in the sight of this sun' almost to the letter" } ]},
    { group:"Solomon named twice", refs:[
      { r:"1 Chronicles 22:9-10", note:"David's own later account: God promised the child of peace who would build the temple, and that his name would be Solomon" } ]},
    { group:"The Chronicler's version of Rabbah's fall", refs:[
      { r:"1 Chronicles 20:1-3", note:"the same capture of Rabbah and the king's crown, again without any mention of Bathsheba or Uriah" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 13 — Amnon's rape of Tamar; Absalom's revenge
   ============================================================ */
"10:13": {
  era: {
    title: "ca. 990 BC — Amnon's rape of Tamar, and Absalom's revenge two years later",
    sub: "Iron Age IIA · Jerusalem and Baal-hazor · Nathan's word about 'the sword' begins to fall on David's own house",
    badges: ["Iron Age IIA", "United monarchy", "Household violence begins", "≈3,016 years ago"]
  },
  timeOfDay: "day",
  summary: "Amnon, David's firstborn and heir apparent, is so tormented by desire for his half-sister Tamar — Absalom's full sister — that he makes himself sick over her, since as a virgin she seems impossible to get near. His cousin Jonadab, 'a very crafty man,' supplies the plan: feign illness and ask David to send Tamar to cook for him by hand in his own house. David unwittingly agrees. Tamar comes, bakes cakes in his sight, and when Amnon clears the room and grabs her she pleads with him plainly — don't do this outrage in Israel, ask the king for me properly — but he is stronger than she is and rapes her. His feeling flips instantly into a hatred 'greater than the love with which he had loved her'; he has her thrown out and the door bolted behind her, a public humiliation she answers by tearing the ornamented robe that marks the king's virgin daughters and putting ashes on her head. She goes wailing to Absalom's house, where he tells her to keep silent and not take it to heart — but takes it to heart himself. David hears everything and is furious, yet disciplines neither son; Absalom says nothing to Amnon either way and waits, in complete silence, two full years. When shearing time comes to his estate at Baal-hazor, Absalom invites all the king's sons, gets David to send Amnon along, and gives his own servants a standing order: watch for the moment Amnon's heart is merry with wine, then strike him dead. The servants obey; every other prince flees on his mule; a garbled first report reaches Jerusalem that Absalom has killed all the king's sons before Jonadab — who saw this coming from the day of the rape — corrects it: only Amnon is dead. Absalom flees at once to his grandfather Talmai, king of Geshur, and stays three years while David, done mourning Amnon, is left longing for the son who killed him.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"David's palace, where Amnon feigns illness and rapes Tamar, and where the false and then corrected report of the killing arrives (vv. 1-22, 30-33)" },
    { id:"baal-hazor", role:"Absalom's sheep-shearing estate, where he waits two years and then has his servants kill Amnon at the feast (vv. 23-29)" },
    { id:"geshur", role:"Absalom's refuge at his maternal grandfather Talmai's Aramean court, three years in exile (vv. 34-39)" }
  ],
  journey: [
    { from:"jerusalem", to:"baal-hazor", label:"The king's sons go up for the shearing feast", km:25,
      note:"Absalom presses David to let 'the king's sons' come, and specifically Amnon; David sends all of them, unaware he is sending Amnon to his death (vv. 23-27)." },
    { from:"baal-hazor", to:"geshur", dashed:true, label:"Absalom flees the moment Amnon is dead", km:100,
      note:"The instant his servants strike Amnon down, Absalom flees north to his grandfather Talmai's court and stays three years, out of David's reach (vv. 34-38)." }
  ],
  hotspots: [
    { x:0.04, type:"person", label:"Amnon's obsessive love for Tamar", av:"warrior",
      desc:"'Amnon was so tormented that he made himself ill because of his sister Tamar,' since as a virgin 'it seemed impossible to Amnon to do anything to her' (vv. 1-2) — the desire that opens the whole chapter's violence." },
    { x:0.15, type:"person", label:"Jonadab's scheme", av:"official",
      desc:"'A very crafty man,' Jonadab advises Amnon to feign sickness and ask David to send Tamar to cook and feed him by hand in his own house — a plan David, seeing nothing wrong in it, immediately grants (vv. 3-7)." },
    { x:0.28, type:"person", label:"Tamar's plea ignored; the rape", av:"woman",
      desc:"Sent to cook for Amnon, Tamar is seized the moment the room is cleared; she pleads — 'do not violate me, for such a thing is not done in Israel... speak to the king, he will not withhold me from you' — but 'being stronger than she, he violated her' (vv. 8-14)." },
    { x:0.4, type:"person", label:"Hatred greater than the love", av:"warrior",
      desc:"'Then Amnon hated her with a very great hatred, so that the hatred with which he hated her was greater than the love with which he had loved her' — he has her thrown out and the door bolted behind her, a humiliation Tamar calls worse than the rape itself (vv. 15-17)." },
    { x:0.52, type:"object", label:"The torn ornamented robe",
      desc:"Wearing 'a long robe with sleeves, for thus were the virgin daughters of the king dressed,' Tamar tears it, puts ashes on her head, and goes away crying aloud to Absalom's house — where he tells her to be quiet and 'not take this to heart,' though he takes it to heart himself (vv. 18-22)." },
    { x:0.63, type:"person", label:"Two years of silence at Baal-hazor", av:"warrior",
      desc:"'Absalom spoke to Amnon neither good nor bad, for Absalom hated Amnon, because he had violated his sister Tamar' — and waits two full years before inviting all the king's sons to his sheep-shearing feast (vv. 22-23, 27)." },
    { x:0.76, type:"person", label:"'Strike Amnon down' — murder at the feast", av:"warrior",
      desc:"With Amnon's heart merry with wine, Absalom orders his servants to strike: 'have I not commanded you? Be courageous, and be valiant!' They obey, and every other son of the king flees on his mule (vv. 28-29)." },
    { x:0.92, type:"person", label:"A garbled report corrected; flight to Geshur", av:"official",
      desc:"Word first reaches David that Absalom has killed all his sons; Jonadab, who 'determined this' from the day of the rape, corrects it — only Amnon is dead. Absalom flees to Talmai at Geshur and stays three years, while David mourns Amnon, then is left 'longing to go out to Absalom' (vv. 30-39)." }
  ],
  environment: {
    chips: ["A love the law forbade", "A robe that marked royal virgin status", "\"A very crafty man\"", "Two years of calculated silence", "A sheep-shearing feast as cover", "A false report, then a correction"],
    text: "Half-sibling marriage was explicitly forbidden by the law David's own house was supposed to embody (Lev 18:9, 11; 20:17), which is exactly why Tamar's desperate suggestion in verse 13 — 'speak to the king, he will not withhold me from you' — reads less as a real legal option than as a stalling tactic aimed at a rapist, not a genuine claim the law would honor. The torn robe of verse 18-19 uses the identical Hebrew phrase applied to Joseph's coat (Gen 37:3), a garment that visibly marked its wearer's protected, unmarried status; tearing it is Tamar's public declaration that the status the robe once announced no longer holds. Absalom's two years of outward silence followed by a single, meticulously staged act of revenge — timed to a feast where wine would already be flowing and guards would be down, the same seasonal custom Nabal abused in 1 Samuel 25 — reads as patience turned into a weapon, the household violence Nathan had already promised David in the chapter just before this one (2 Sam 12:10-11)."
  },
  objectsExtra: ["tamars-robe","sword","mule"],
  peopleExtra: ["david","tamar","amnon","jonadab","absalom","talmai"],
  culture: [
    { title:"A love the law forbade", icon:"⚖️",
      text:"Leviticus 18:9, 11 and 20:17 explicitly ban a man from his half-sister 'whether born at home or born abroad' — the very kinship between Amnon and Tamar. Tamar's plea that David 'will not withhold me from you' (v. 13) is best read as a desperate attempt to slow Amnon down, not a claim the law actually supported." },
    { title:"The virgin princess's robe", icon:"🧥",
      text:"'A long robe with sleeves' (v. 18) uses the same Hebrew phrase as Joseph's famous coat (Gen 37:3) — a garment that visibly marked out a king's unmarried daughters. Tamar tearing hers is a public, legible sign that the status it once announced has been destroyed." },
    { title:"Jonadab, 'a very crafty man'", icon:"🧠",
      text:"The same root translated 'crafty' here (v. 3) describes the serpent in Genesis 3:1 — a small but pointed echo. Jonadab's cleverness serves Amnon's crime in this chapter and later, chillingly, lets him be the first to guess Absalom's revenge before anyone else does (vv. 32-33)." },
    { title:"Two years, then 'be courageous, be valiant'", icon:"⏳",
      text:"Absalom's silence (v. 22) is not passivity but patience — he waits for an occasion, a feast with wine flowing and guards relaxed, to carry out a plan evidently made the day of the rape (v. 32). The command to his servants borrows the language of holy-war courage (cf. Deut 31:6) for a private assassination." },
    { title:"A sheep-shearing feast as cover", icon:"🐑",
      text:"Shearing time was an established ancient Near Eastern festival of open-handed feasting and free-flowing wine (compare Nabal's feast at Carmel, 1 Sam 25:2, 36) — exactly the kind of occasion where a prince's household would be relaxed enough for a carefully planned killing to succeed." }
  ],
  crossRefs: [
    { group:"The law this union broke", refs:[
      { r:"Leviticus 18:9, 11", note:"a man may not uncover the nakedness of his sister, 'whether born at home or born abroad'" },
      { r:"Leviticus 20:17", note:"the same act named as a disgrace to be 'cut off' from the people" } ]},
    { group:"Nathan's word beginning to fall", refs:[
      { r:"2 Samuel 12:10-11", note:"'the sword shall never depart from your house' — this chapter is the first household death it names" } ]},
    { group:"A parallel violation and its aftermath", refs:[
      { r:"Genesis 34:1-7, 25-27", note:"Dinah's rape and her brothers' violent revenge — the closest narrative parallel to a sister's honor avenged by her own kin" } ]},
    { group:"What follows", refs:[
      { r:"2 Samuel 14:1-33", note:"Joab's plan to bring the exiled Absalom home" },
      { r:"2 Samuel 15:7-12", note:"Absalom's rebellion, launched years after this chapter's violence" } ]},
    { group:"A name kept alive", refs:[
      { r:"2 Samuel 14:27", note:"Absalom names his own daughter Tamar after his ravaged sister" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 14 — the wise woman of Tekoa; Absalom's uneasy return
   ============================================================ */
"10:14": {
  era: {
    title: "ca. 985 BC — the wise woman of Tekoa, and Absalom's uneasy return",
    sub: "Iron Age IIA · Tekoa, Geshur, and Jerusalem · Joab engineers a reconciliation that stops short of one",
    badges: ["Iron Age IIA", "United monarchy", "Absalom recalled from exile", "≈3,011 years ago"]
  },
  timeOfDay: "day",
  summary: "Joab, reading that 'the king's heart went out to Absalom' even while official policy keeps him exiled at Geshur, engineers a second parable exactly like Nathan's, this time in reverse: he fetches a 'wise woman' from Tekoa, dresses her as a long-time mourner, and coaches her to bring David a fabricated legal case. Two sons quarreled in a field, she says, one struck the other dead, and now the whole clan demands she hand over the surviving son to be executed for it — which would quench her last ember and leave her husband no name or remnant on the earth. David rules in the son's favor and swears an oath of protection. Only then does the woman turn the case on the king: if he can spare a stranger's guilty son, why does he keep his own banished son unforgiven, 'like water spilled on the ground, which cannot be gathered up again'? She adds that God himself does not take away life but devises means so the banished are not cast out from him — and, sensing Joab's hand in the whole performance, David asks her outright and she admits it. David grants Joab's request: bring the young man Absalom back. But the reconciliation he allows is only half of one — Absalom may return to his own house in Jerusalem, but 'let him not see my face,' and for two full years the exiled prince lives in the capital without once being summoned to the king's presence. The chapter pauses to describe Absalom at his physical peak — praised for his looks from head to foot as in no other man in Israel, his famously heavy hair cut once a year and weighed at two hundred shekels by the royal standard, and three sons and a daughter, Tamar, named for his ravaged sister. After two years shut out, Absalom sends for Joab twice and is ignored both times, so he has his servants set Joab's adjoining barley field on fire, which finally gets Joab's attention. Absalom's blunt message is that death would be better than this half-exile — 'let him kill me, if there is guilt in me' — and Joab carries the demand to David, who at last summons Absalom; the prince bows to the ground before him, and the king kisses his son.",
  focusPlace: "jerusalem",
  places: [
    { id:"tekoa", role:"Home village of the unnamed wise woman Joab recruits to plead Absalom's case before David (vv. 1-3)" },
    { id:"geshur", role:"Where Absalom has spent three years in exile, and from which Joab now fetches him home (v. 23)" },
    { id:"jerusalem", role:"Where the parable is staged, where Absalom lives two years barred from the king's presence, and where the final reconciliation happens (vv. 4-22, 24-33)" }
  ],
  journey: [
    { from:"tekoa", to:"jerusalem", label:"The wise woman comes to plead a fabricated case", km:18,
      note:"Joab sends to Tekoa and fetches a wise woman, dresses her in mourning clothes, and coaches her word for word before sending her in to David (vv. 2-3)." },
    { from:"geshur", to:"jerusalem", label:"Joab brings Absalom home — but not into the king's presence", km:100,
      note:"Once David relents, Joab personally goes to Geshur and brings Absalom back to Jerusalem, though David's order still bars him from the palace itself for two more years (vv. 23-24, 28)." }
  ],
  hotspots: [
    { x:0.04, type:"person", label:"Joab reads the king's heart", av:"warrior",
      desc:"Perceiving that 'the king's heart went out to Absalom' even though official policy keeps him in exile, Joab decides to force the issue rather than wait for David to change his own mind (v. 1)." },
    { x:0.16, type:"person", label:"The wise woman of Tekoa's disguise", av:"woman",
      desc:"Joab fetches an unnamed woman known for wisdom, has her dress as someone who has mourned a long time, and sends her in to David with a script (vv. 2-3)." },
    { x:0.28, type:"person", label:"Her parable: two quarreling sons", av:"woman",
      desc:"She tells David of two sons who fought in a field until one struck the other dead — and now the whole clan demands the surviving son for execution, which would quench her last ember and leave her husband no name on the earth (vv. 4-7)." },
    { x:0.4, type:"person", label:"David's oath — then the case turns on him", av:"king",
      desc:"David swears 'as the LORD lives, not one hair of your son shall fall to the ground'; the woman immediately turns it: if the king can spare a stranger's guilty son, why does he keep his own banished son unforgiven, 'like water spilled on the ground' (vv. 8-14)?" },
    { x:0.52, type:"person", label:"'Is not the hand of Joab with you?'", av:"woman",
      desc:"David senses a plan behind the performance and asks her plainly; she admits it — 'your servant Joab commanded me... to change the sense of things' (vv. 18-20) — and David grants Joab leave to bring Absalom home." },
    { x:0.64, type:"person", label:"Absalom's return — barred from the king's face", av:"warrior",
      desc:"Joab fetches Absalom from Geshur to his own house in Jerusalem, but David's order stands: 'let him dwell apart in his own house; he is not to come into my presence' — a half-reconciliation Absalom lives under for two full years (vv. 21-24, 28)." },
    { x:0.76, type:"object", label:"Absalom's famous hair, weighed once a year",
      desc:"An aside on Absalom at his physical peak — no man in Israel so praised for his beauty — including hair so heavy it is cut once a year and weighed at two hundred shekels by the royal standard, and three sons and a daughter, Tamar (vv. 25-27)." },
    { x:0.92, type:"person", label:"Joab's field burned; the final kiss", av:"king",
      desc:"Ignored twice when he sends for Joab, Absalom has his servants set Joab's barley field on fire to force an audience; Joab relays Absalom's demand to David, who at last summons him — Absalom bows to the ground, and the king kisses his son (vv. 28-33)." }
  ],
  environment: {
    chips: ["A parable engineered like Nathan's, in reverse", "The blood-avenger custom behind the fiction", "\"Water spilled on the ground\"", "Two hundred shekels of hair", "Fire as a forced summons", "A kiss that stops short of full trust"],
    text: "Joab's staged case only works because it exploits a real custom: the go'el hadam, the kinsman 'avenger of blood' obligated to execute a killer within the clan (Num 35:19-21; Deut 19:11-13), gives the wise woman's fictional crisis genuine legal weight — David has to rule as king on a real category of case, which is exactly what lets her flip the ruling onto his own household. Absalom's weighed hair (200 shekels, roughly 2.3 kg by the common reckoning) reads here as a mark of his celebrated vanity and status; two chapters later that same hair becomes the freak snag that costs him his life in the forest of Ephraim (2 Sam 18:9). Setting Joab's field alight to force a meeting is a calculated escalation in the same vein as Samson torching Philistine grain with foxes (Judg 15:4-5) — property destroyed specifically to compel a response from someone ignoring you — and it works, though the 'reconciliation' it buys is a bow and a kiss, not the restored trust a coup two chapters later shows Absalom never actually received."
  },
  objectsExtra: ["mule"],
  peopleExtra: ["david","joab","tekoa-wise-woman","absalom","tamar"],
  culture: [
    { title:"A parable engineered like Nathan's, in reverse", icon:"⚖️",
      text:"David himself was caught by exactly this device in 2 Samuel 12:1-6 — a hypothetical legal case that secures a ruling before the accused realizes he is implicated. Here Joab uses the same trick to push David toward mercy rather than judgment, proof the device cuts both ways in the same book." },
    { title:"The blood-avenger custom behind the fiction", icon:"🩸",
      text:"The woman's invented crisis only has force because Israelite law really did make a slain man's kinsman responsible for executing his killer (Num 35:19-21; Deut 19:11-13) — David has to rule on it as a real legal category, and that ruling is what she then applies to Absalom's own case." },
    { title:"\"Water spilled on the ground\"", icon:"💧",
      text:"The wise woman's proverb — death as water poured out that 'cannot be gathered up again' (v. 14) — is one of the Old Testament's starkest images for mortality's irreversibility, used here to argue that since death cannot be undone, life should be preserved wherever mercy still can preserve it." },
    { title:"Two hundred shekels of hair", icon:"💇",
      text:"Absalom's yearly haircut, weighed at 200 shekels (roughly 2.3 kg), marks him as Israel's most admired man physically — a detail the narrative plants here only to detonate two chapters later, when that same hair snags in an oak's branches and costs him his life (2 Sam 18:9)." },
    { title:"Fire as a forced summons", icon:"🔥",
      text:"Twice ignored when he sends for Joab, Absalom burns his barley field to guarantee an answer (vv. 29-30) — the same logic behind Samson's fox-tail fires against Philistine crops (Judg 15:4-5): destroying valuable property is sometimes the only message that gets a response from someone determined not to listen." }
  ],
  crossRefs: [
    { group:"The device echoed from chapter 12", refs:[
      { r:"2 Samuel 12:1-6", note:"Nathan's parable of the rich man and the poor man's ewe lamb — the same legal-case trap, used here in reverse" } ]},
    { group:"The blood-avenger law behind the parable", refs:[
      { r:"Numbers 35:19-21", note:"the kinsman-avenger's duty to execute a murderer" },
      { r:"Deuteronomy 19:11-13", note:"the same law, with its limits" } ]},
    { group:"What led here, and what follows", refs:[
      { r:"2 Samuel 13:23-39", note:"Amnon's murder and Absalom's three-year flight to Geshur" },
      { r:"2 Samuel 15:1-6", note:"Absalom's gate campaign, launched not long after this half-reconciliation" } ]},
    { group:"The hair that returns", refs:[
      { r:"2 Samuel 18:9-15", note:"Absalom's weighed hair catches in an oak and costs him his life" } ]},
    { group:"A father's kiss for a returning child", refs:[
      { r:"Luke 15:20", note:"the prodigal's father runs and kisses him — a fuller, unconditional version of the welcome David withholds here" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 15 — Absalom's rebellion; David flees Jerusalem
   ============================================================ */
"10:15": {
  era: {
    title: "ca. 979 BC — Absalom's rebellion; David flees Jerusalem",
    sub: "Iron Age IIA · Jerusalem, Hebron, and the road to the Jordan · a four-year conspiracy comes to a head",
    badges: ["Iron Age IIA", "United monarchy", "Absalom's rebellion", "≈3,005 years ago"]
  },
  timeOfDay: "day",
  summary: "For years Absalom has positioned himself at Jerusalem's gate, intercepting petitioners with sympathy and a complaint the king supposedly won't hear, until — as the narrator puts it flatly — he has stolen the hearts of the men of Israel. When the moment is ripe, he asks David's leave to pay a vow at Hebron, his own birthplace and David's first capital, and uses the trip to declare himself king, sending secret couriers through every tribe to await a trumpet signal. Two hundred invited guests from Jerusalem go with him in complete innocence, and David's own trusted counselor Ahithophel joins the conspiracy from nearby Giloh. Word reaches David that all Israel has swung behind his son, and rather than fortify his own capital he chooses immediate flight, evacuating the city with his household, his guard, and six hundred loyal Gittites under Ittai — who refuses David's offer to stay behind and sit this one out. The whole column crosses the brook Kidron and climbs the Mount of Olives in full mourning dress, weeping and barefoot. David sends the ark, and the priests Zadok and Abiathar who carry it, back into the city rather than risk it or presume on it, turning their two sons into a courier relay instead. At the summit, he prays one focused prayer against Ahithophel's counsel — and immediately answers it himself by sending his friend Hushai back into Jerusalem as a planted double agent, just as Absalom is arriving to take the throne his father has vacated.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"The city gate where Absalom courts Israel's favor for years, and the capital David abandons rather than fight for it (vv. 2-6, 13-17)" },
    { id:"hebron", role:"Where Absalom, under cover of paying a vow, declares himself king and launches the coup (vv. 7-12)" },
    { id:"geshur", role:"Backstory: the Aramean court where the exiled Absalom made the vow he now claims to be paying (v. 8)" },
    { id:"olives", role:"David's barefoot, weeping ascent out of the city, crossing the Kidron on the way (vv. 23, 30)" },
    { id:"mahanaim", role:"David's eventual refuge across the Jordan — not yet reached in this chapter, but already the flight's real destination" }
  ],
  journey: [
    { from:"jerusalem", to:"hebron", label:"Absalom's cover story becomes a coup", km:30,
      note:"Absalom asks leave to pay a vow at Hebron — the city of his own birth and of David's first throne — then uses the trip to declare himself king, sending secret word through all the tribes to await a trumpet signal (vv. 7-10)." },
    { from:"jerusalem", to:"olives", label:"David's flight: out the city, over the Kidron, up the ridge", km:1,
      note:"With Absalom's support snowballing, David chooses flight over a siege of his own capital: out through the last house, across the brook Kidron, and up the ascent of the Mount of Olives, weeping, barefoot, head covered (vv. 14-17, 23, 30)." },
    { from:"jerusalem", to:"mahanaim", dashed:true, label:"The road that ends, eventually, across the Jordan", km:65,
      note:"Not yet completed in this chapter, but already the flight's real destination: David and his household will not stop until they reach Mahanaim in Gilead (2 Sam 17:24), out of Absalom's immediate reach." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Absalom at the gate, stealing the hearts of Israel", av:"warrior",
      desc:"Rising early to stand beside the road into the gate, Absalom intercepts every petitioner with sympathy and a complaint of his own — 'see, your claims are good, but the king has appointed no one to hear you... oh that I were judge in the land!' — then seals it with an unroyal kiss on the hand offered to bow to him (vv. 2-6)." },
    { x:0.22, type:"person", label:"The vow at Hebron, and Ahithophel's defection", av:"elder",
      desc:"Granted leave to 'pay a vow' at Hebron, Absalom instead declares himself king there, sending secret couriers through every tribe to await a trumpet signal. He calls for Ahithophel, David's own counselor, from nearby Giloh — 'the conspiracy grew strong, and the people with Absalom kept increasing' (vv. 7-12)." },
    { x:0.36, type:"person", label:"David chooses flight over a siege of his own city", av:"king",
      desc:"On word that 'the hearts of the men of Israel have gone after Absalom,' David does not fortify Jerusalem — he orders an immediate evacuation: 'arise, and let us flee, or there will be no escape for us... lest he overtake us quickly and bring down ruin on us' (vv. 13-14)." },
    { x:0.5, type:"person", label:"Ittai the Gittite's oath", av:"warrior",
      desc:"David tries to send the newly arrived foreign captain and his 600 men back to spare them an exile's risk; Ittai refuses outright: 'as the LORD lives, and as my lord the king lives, wherever my lord the king shall be, whether for death or for life, there also will your servant be' (vv. 19-22)." },
    { x:0.64, type:"object", label:"The ark turned back with Zadok and Abiathar",
      desc:"When the priests bring the ark out of the city to go with him, David sends it back: 'if I find favor in the eyes of the LORD, he will bring me again... but if not, here I am, let him do to me what seems good to him' (vv. 24-26) — and turns the two priests' sons into a courier relay for intelligence out of the city (vv. 27-29, 36)." },
    { x:0.78, type:"person", label:"Weeping, barefoot, up the Mount of Olives", av:"king",
      desc:"'David went up the ascent of the Mount of Olives, weeping as he went, barefoot and with his head covered. And all the people who were with him covered their heads, and they went up, weeping as they went' (v. 30) — a king in full mourning dress for the loss of his own kingdom." },
    { x:0.92, type:"person", label:"Hushai sent back to counter Ahithophel", av:"elder",
      desc:"At the summit, David prays one specific prayer — 'O LORD, please turn the counsel of Ahithophel into foolishness' — then answers it himself by sending his friend Hushai back into the city as a planted double agent, tasked with defeating Ahithophel's counsel and relaying everything through Zadok and Abiathar's sons (vv. 31-37)." }
  ],
  environment: {
    chips: ["Four years of quiet politicking at the gate", "A vow used as political cover", "A capital abandoned rather than besieged", "Crossing the Kidron, up Olivet", "Mourning dress: barefoot, head covered, weeping", "A double agent planted mid-flight"],
    text: "The chapter's geography traces a coup, not a battle: Absalom builds his base for years at Jerusalem's own gate — the normal seat of legal judgment — before relocating to Hebron, his birthplace and David's own first capital, to launch the actual declaration under cover of a religious vow. David's response reverses the expected script: rather than fortify a walled hill-capital with a water supply and Cherethite-Pelethite guard already inside it, he leads a column of loyalists, foreign mercenaries, priests and household straight out through the gate, across the exposed floor of the Kidron valley, and up the steep, twisting path over the Mount of Olives — the same ridge, and very nearly the same brook crossing, a fugitive king's greater son will make a thousand years later on the way to his own arrest (John 18:1)."
  },
  objectsExtra: ["citygate","chariot","ark-covenant"],
  peopleExtra: ["david","absalom","ahithophel","hushai","ittai","zadok","abiathar"],
  culture: [
    { title:"Justice at the gate — and how to steal it", icon:"🚪",
      text:"City gates were the ancient Israelite courtroom — elders sat there to hear disputes and render judgment (cf. Ruth 4:1-2; Deut 21:19). Absalom's maneuver works precisely because it exploits a real grievance: if David's court had in fact grown too slow or remote to hear every case, a prince who intercepted petitioners with sympathy, and no power yet to decide anything, could build genuine loyalty for free — one flattered petitioner, and one royal kiss, at a time (2 Sam 15:2-6)." },
    { title:"A vow as a coup's cover story", icon:"🤫",
      text:"Asking leave to fulfill a vow at a shrine city was an unremarkable, pious request no king would refuse — which is exactly why Absalom chooses it. Hebron adds a second layer: it was David's own first capital and Absalom's birthplace, a city with royal memory to draw on and, evidently, a citizenry ready to be recruited (vv. 7-10)." },
    { title:"Ahithophel's grievance, if there was one", icon:"🧠",
      text:"2 Samuel 23:34 names Eliam, Bathsheba's father, as 'the son of Ahithophel the Gilonite' — if this is the same Eliam as 2 Sam 11:3, Ahithophel was Bathsheba's grandfather, and his defection to Absalom takes on a personal edge many commentators connect to Uriah's death. Scripture never states the motive outright; it lets the genealogy do the suggesting." },
    { title:"Cherethites, Pelethites, and a foreign captain's oath", icon:"🤝",
      text:"David's standing bodyguard — Cherethites and Pelethites, likely Aegean/Philistine-descended mercenaries — and Ittai's freshly arrived 600 Gittites are exactly the kind of hired loyalty a usurper's rhetoric can't easily buy: their allegiance runs to the man who pays and commands them, not to native tribal politics, which is precisely what makes Ittai's unconditional oath (vv. 19-22) land as more than duty." },
    { title:"Mourning dress on the move", icon:"👣",
      text:"Bare feet, a covered head, and open weeping were standard ancient Israelite mourning signals (cf. Isa 20:2-4; Ezek 24:17) — David and his whole column perform them while still walking, turning the retreat itself into a funeral procession for the kingdom's unity, before a single battle has been fought." }
  ],
  crossRefs: [
    { group:"The sword Nathan promised", refs:[
      { r:"2 Samuel 12:10-11", note:"Nathan's word to David after Bathsheba and Uriah: 'the sword shall never depart from your house... I will raise up evil against you out of your own house'" } ]},
    { group:"How the household got here", refs:[
      { r:"2 Samuel 13:1-22", note:"Amnon's rape of Tamar and Absalom's silent rage" },
      { r:"2 Samuel 13:23-39", note:"Absalom murders Amnon and flees to Geshur for three years" },
      { r:"2 Samuel 14:1-33", note:"the wise woman of Tekoa's parable secures Absalom's recall — but David withholds his face for two more years" } ]},
    { group:"Ahithophel's grievance, and his end", refs:[
      { r:"2 Samuel 11:3", note:"Eliam, Bathsheba's father — possibly Ahithophel's own son" },
      { r:"2 Samuel 23:34", note:"'Eliam the son of Ahithophel the Gilonite' among David's mighty men" },
      { r:"2 Samuel 17:23", note:"Ahithophel hangs himself once Absalom follows Hushai's counsel instead of his own" } ]},
    { group:"David's own words in flight", refs:[
      { r:"Psalm 3 (title)", note:"'A Psalm of David, when he fled from Absalom his son' — composed, by its own heading, from exactly this crisis" } ]},
    { group:"The same ridge, a greater son", refs:[
      { r:"John 18:1", note:"Jesus crosses the brook Kidron on the way to Gethsemane on the Mount of Olives — the same geography, centuries later, at the start of a very different kind of surrender" },
      { r:"Zechariah 14:4", note:"a later prophetic vision of the LORD's own feet standing on this same Mount of Olives" } ]},
    { group:"What follows", refs:[
      { r:"2 Samuel 16:15-23", note:"Absalom enters Jerusalem, takes Ahithophel's counsel seriously, and takes the concubines David left behind" },
      { r:"2 Samuel 17:1-23", note:"Hushai's counter-counsel wins out over Ahithophel's, buying David the time to cross the Jordan" },
      { r:"2 Samuel 18:1-33", note:"the battle in the forest of Ephraim and Absalom's death" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 18 — the forest of Ephraim; the death of Absalom
   ============================================================ */
"10:18": {
  era: {
    title: "ca. 979 BC — the forest of Ephraim; the death of Absalom",
    sub: "Iron Age IIA · a wooded battlefield east of the Jordan · Absalom's rebellion crushed",
    badges: ["Iron Age IIA", "United monarchy", "Absalom's rebellion crushed", "≈3,005 years ago"]
  },
  timeOfDay: "day",
  summary: "Talked out of leading the army himself — his men insist he is worth ten thousand of them and safer helping from the city — David takes up a watch at the gate of Mahanaim while Joab, Abishai, and Ittai march the army out in three divisions, carrying one explicit royal order that the whole camp hears: deal gently, for David's sake, with the young man Absalom. The two forces meet in the forest of Ephraim, and Israel's rebel army breaks; the broken, wooded terrain claims more men that day than the actual fighting does. Absalom himself, fleeing on his mule, rides under the thick branches of a great oak and is left hanging by his head — his famously heavy hair snagging where a low branch and a bolting animal meet — suspended between heaven and earth while his mount runs on without him. A soldier who finds him refuses to strike a hand against the king's son, citing David's order in front of everyone; Joab has no such scruple, and personally drives three javelins into Absalom while he still hangs there, finished off by ten of Joab's own armor-bearers. The trumpet sounds recall, and Absalom's body goes into an unmarked forest pit under a heap of stones — pointedly contrasted, in the same breath, with the memorial pillar he had built for himself years earlier for want of a son to carry his name. Joab refuses to let Ahimaaz carry the news, sending an unnamed Cushite instead, but Ahimaaz runs anyway by a different road and arrives first, unable to answer David's one real question. When the Cushite finally says it plainly, David's grief eclipses the victory entirely: 'O my son Absalom, my son, my son!'",
  focusPlace: "ephraim-forest",
  places: [
    { id:"mahanaim", role:"David's base; he stays at the gate while his army marches out in three divisions, and where the runners bring him the news (vv. 2-4, 24-33)" },
    { id:"ephraim-forest", role:"The battlefield; Israel's rebel army breaks here, and the forest itself claims more lives than the fighting (vv. 6-9)" }
  ],
  journey: [
    { from:"mahanaim", to:"ephraim-forest", label:"Three divisions march out under Joab, Abishai, and Ittai", km:9,
      note:"David, talked out of leading the army himself, stands at the gate as his forces — divided in thirds under Joab, Abishai, and Ittai the Gittite — march out with one explicit royal order ringing in everyone's ears: 'deal gently for my sake with the young man Absalom' (vv. 2-5)." },
    { from:"ephraim-forest", to:"mahanaim", label:"Two runners race the same road back with the news", km:9,
      note:"After Joab halts the pursuit, Ahimaaz and then the Cushite carry word of the victory back to Mahanaim along the same corridor — Ahimaaz taking a different, faster route and arriving first, though neither man can quite bring himself to be the one who plainly says Absalom is dead (vv. 19-32)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"David stays behind at the gate of Mahanaim", av:"king",
      desc:"Talked out of leading the army in person by his own men — 'you are worth ten thousand of us; it is better that you send us help from the city' — David yields and takes up a watching post at the gate instead, sending his commanders out with the troops (vv. 2-4)." },
    { x:0.18, type:"person", label:"'Deal gently... with the young man Absalom'", av:"king",
      desc:"In front of the whole army, David gives Joab, Abishai, and Ittai a single explicit order regarding his rebel son — mercy, not victory, is what he asks for, and 'all the people heard when the king gave orders' to his commanders (v. 5)." },
    { x:0.34, type:"object", label:"The forest that devoured more than the sword",
      desc:"Israel's rebel army breaks before David's veterans, and the fighting spills into wooded, broken terrain where 'the forest devoured more people that day than the sword' (vv. 6-8) — twenty thousand men lost, most of them not to a blade at all." },
    { x:0.48, type:"person", label:"Absalom caught by his hair in the great oak", av:"warrior",
      desc:"Riding his mule into the thick branches of a great oak, Absalom's head is caught fast in the tree; the mule keeps going out from under him, and he is left hanging, 'suspended between heaven and earth' (v. 9) — his famous hair (2 Sam 14:26) becoming, in the story's own irony, the instrument of his capture." },
    { x:0.6, type:"person", label:"Joab's three javelins", av:"warrior",
      desc:"Told of Absalom hanging alive in the tree, Joab refuses to let the moment pass — he brushes off the soldier's own reasoning (the king's order, heard by everyone) and personally drives three javelins into Absalom's heart while he still hangs there, and ten of Joab's armor-bearers finish the job (vv. 10-15)." },
    { x:0.74, type:"person", label:"The Cushite and Ahimaaz's race to Mahanaim", av:"traveler",
      desc:"Joab sends an unnamed Cushite courier with the plain report; Ahimaaz begs to run too, though Joab warns him he 'will have no reward for the news' — Ahimaaz takes a different, faster road and outruns the Cushite, arriving first but unable to answer David's real question when he gets there (vv. 19-30)." },
    { x:0.9, type:"person", label:"'O Absalom, my son, my son!'", av:"king",
      desc:"When the Cushite finally states it plainly, David does not celebrate the victory at all: he goes up to the chamber over the gate weeping, crying out one of Scripture's rawest laments — 'O my son Absalom, my son, my son Absalom! Would I had died instead of you' (vv. 31-33)." }
  ],
  environment: {
    chips: ["Three divisions marching out from a gate", "A king held back by his own men", "A forest more lethal than the fighting", "A mule bolting under low branches", "Two runners on the same homeward road", "Grief that outweighs a won war"],
    text: "The chapter deliberately keeps David off the battlefield, watching from Mahanaim's gate much as he once watched Bathsheba's rooftop from his own — this time by his advisors' design rather than his own choice, so the king who cannot be trusted to fight is at least trusted to wait. The forest itself becomes almost a character: broken, wooded ground east of the Jordan swallowing fleeing men in ravines and thickets faster than the pursuing army could kill them (v. 8), the kind of terrain where a mule carrying a rider too rushed to duck could sweep him straight under a low, spreading oak. The two-runner relay back to Mahanaim — one man taking a longer but faster route to outrun a more direct one — plays out along the same corridor the army had marched out on hours before, collapsing victory and grief onto a single stretch of road."
  },
  objectsExtra: ["mule","absalom-pillar","trumpet","spear"],
  peopleExtra: ["david","joab","absalom","ittai","ahimaaz","cushite-messenger"],
  culture: [
    { title:"Why 'the forest of Ephraim' east of the Jordan?", icon:"🌳",
      text:"The battle's name is a genuine puzzle: Ephraim's own tribal territory lay west of the Jordan, yet the fighting described here happens in Transjordan near Mahanaim. Proposed answers include a colony of Ephraimites settled east of the river, a memorial name tied to the earlier Ephraimite disaster at the Jordan fords (Judg 12:1-6), or simply a wooded district that carried the name for reasons no longer recoverable. The text itself does not explain it, so this remains an open geographical question rather than a settled one." },
    { title:"A mule, not a warhorse", icon:"🐴",
      text:"Israelite princes and kings customarily rode mules rather than horses (David has Solomon paraded on his own mule at the coronation, 1 Kgs 1:33) — a detail that matters enormously here: a mule moving at speed under low branches, with a rider who (per 2 Sam 14:26) had famously heavy, long hair, produced exactly the freak entanglement the narrative describes." },
    { title:"Joab's calculation", icon:"⚔️",
      text:"The soldier who finds Absalom hanging refuses to strike him, citing David's order 'in our hearing' and pointing out that Joab himself would disown him if he did (vv. 12-13) — a telling detail, since it means Joab acts knowing exactly what he is defying. Joab's three javelins are not panic or accident; they read as a general's cold judgment that a live, rescued, re-captured Absalom would cost Israel a second civil war David's mercy could not afford." },
    { title:"A monument for a man with no grave of honor", icon:"🪦",
      text:"Verse 18's aside — that Absalom had already built himself a memorial pillar because he had no son to keep his name alive — lands with heavy irony right after his body is dumped in a forest pit under a stone heap (v. 17): the vain monument survives; the man does not, and the son he lacked is exactly what a functioning family and throne would have given him." },
    { title:"Two messengers, one bad job", icon:"🏃",
      text:"Ahimaaz's determination to run even after Joab twice discourages him, and his evasive answer once he arrives ('I saw a great commotion, but I do not know what it was,' v. 29), read most naturally as a man wanting credit for good news but unwilling to be the one who delivers bad news to a father about his son — leaving the plain report to the Cushite, who has less standing with David to lose." }
  ],
  crossRefs: [
    { group:"Absalom's introduction", refs:[
      { r:"2 Samuel 14:25-27", note:"Absalom's famous good looks and his heavy hair, weighed once a year — the very hair that catches in the oak here" } ]},
    { group:"The order given, and defied", refs:[
      { r:"2 Samuel 18:5", note:"David's explicit command to deal gently with Absalom, heard by the whole army" },
      { r:"2 Samuel 3:22-27", note:"Joab's earlier killing of Abner under a truce — the same general, the same willingness to act against the king's stated wishes" } ]},
    { group:"The counsel that made this battle happen", refs:[
      { r:"2 Samuel 17:1-14", note:"Hushai's counter-counsel to Ahithophel, which shapes the timing and manner of this very battle" } ]},
    { group:"David's grief, and what follows", refs:[
      { r:"2 Samuel 19:1-8", note:"Joab rebukes David for grieving so publicly that it demoralizes the very army that just saved him" },
      { r:"2 Samuel 18:33-19:4", note:"'O my son Absalom' repeated, and David's withdrawal into mourning" } ]},
    { group:"Nathan's word, fulfilled again", refs:[
      { r:"2 Samuel 12:10-11", note:"'the sword shall never depart from your house' — a third son now lost to violence within David's own family" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 24 — the census, the plague, and Araunah's threshing floor
   ============================================================ */
"10:24": {
  era: {
    title: "ca. 970 BC — David's census, the plague, and Araunah's threshing floor",
    sub: "Iron Age IIA · Jerusalem, and the length of the land from Dan to Beersheba · the book's closing appendix names the future Temple site",
    badges: ["Iron Age IIA", "United monarchy", "Census and plague", "≈2,996 years ago"]
  },
  timeOfDay: "day",
  summary: "With the LORD's anger against Israel kindled for reasons the text never states, David orders Joab to number the fighting men of Israel and Judah; Joab objects — 'why does my lord the king delight in this thing?' — but complies anyway, and his officers spend nine months and twenty days combing the land from Dan in the far north to Beersheba in the south before reporting back eight hundred thousand swordsmen in Israel and five hundred thousand in Judah. The moment the count is in David's hands, his own conscience convicts him: 'I have sinned greatly in what I have done... I have done very foolishly.' The next morning the seer Gad — David's own prophet since his fugitive days — arrives with a judgment framed as a choice: seven years of famine, three months fleeing before pursuing enemies, or three days of plague. David will not choose between armies and famine at all; he throws the decision at God directly — 'let us fall into the hand of the LORD, for his mercies are great, but let me not fall into the hand of man' — and the plague comes, killing seventy thousand from Dan to Beersheba in a single stroke. As the angel of the LORD reaches out toward Jerusalem itself, the LORD relents, 'it is enough; now stay your hand,' and the destruction stops at the threshing floor of Araunah the Jebusite, on the hill north of the city. David, seeing the angel there, pleads that the guilt is his alone — 'I have sinned... but these sheep, what have they done?' — and Gad instructs him to build an altar on that very spot. Araunah, recognizing the king, offers the threshing floor, the oxen, and the wooden threshing sledges for the fire and sacrifice at no cost at all; David refuses outright — 'I will not offer burnt offerings to the LORD my God that cost me nothing' — and buys the site and the oxen for fifty shekels of silver. He builds the altar, offers burnt offerings and peace offerings, the LORD answers his prayer for the land, and the plague is stopped — on the exact hilltop that will become, in Solomon's generation, the floor of the Temple itself.",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"Where the plague's advance is finally stayed, at Araunah's threshing floor on the hill north of the city — the site David buys and turns into an altar, and which later tradition (2 Chron 3:1) identifies with Mount Moriah, the future Temple platform (vv. 16-25)" },
    { id:"dan", role:"The census takers' northernmost point, marking one end of 'the length of the land' Joab's officers cover on foot (v. 6)" },
    { id:"beersheba", role:"The southern terminus of the same nine-month circuit, closing the phrase 'from Dan to Beersheba' that frames the whole count (v. 7)" }
  ],
  journey: [
    { from:"jerusalem", to:"dan", label:"Joab's officers begin the census in the north", km:165,
      note:"David's order sends Joab and the army commanders out from Jerusalem to canvass every tribe; the text lingers over the route — Aroer, the cities of Gilead, Kadesh in Hittite country, Dan-jaan, and around toward Sidon and Tyre — before the tally even reaches its southern leg (vv. 4-7)." },
    { from:"dan", to:"beersheba", label:"Nine months and twenty days — 'the length of the land'", km:235,
      note:"The full circuit, tribe by tribe, takes the better part of a year on foot before the officers turn back toward the capital with a final count of 800,000 swordsmen in Israel and 500,000 in Judah (vv. 8-9)." },
    { from:"beersheba", to:"jerusalem", label:"The tally is brought back to the king", km:70,
      note:"The moment the number is actually in his hands, not while it was merely being gathered, is when David's own heart strikes him — the sin, on this reading, lies less in counting itself than in what completing the count reveals about why he wanted it (v. 10)." }
  ],
  hotspots: [
    { x:0.03, type:"person", label:"David orders the census; Joab objects", av:"king",
      desc:"'Go, number Israel and Judah,' David tells Joab — who pushes back hard, asking why the king would 'delight in this thing,' but carries out the order anyway with the other army commanders (vv. 1-4)." },
    { x:0.18, type:"object", label:"Nine months, twenty days — Dan to Beersheba",
      desc:"The census takers cover the whole land, naming a route through Gilead, Hittite Kadesh, Dan-jaan, and toward Sidon and Tyre before turning south, and return with a count of 800,000 swordsmen in Israel and 500,000 in Judah (vv. 5-9)." },
    { x:0.32, type:"person", label:"'I have sinned greatly in what I have done'", av:"king",
      desc:"The instant the finished tally is in his hands, David's own heart convicts him, unprompted by any prophet yet: 'I have sinned greatly... I have done very foolishly' (v. 10)." },
    { x:0.46, type:"person", label:"Gad's three-option judgment", av:"prophet",
      desc:"David's seer since his fugitive years (1 Sam 22:5) arrives the next morning with the LORD's terms: seven years of famine, three months fleeing before pursuing enemies, or three days of plague across the land — David is told to choose (vv. 11-13)." },
    { x:0.58, type:"person", label:"'Let us fall into the hand of the LORD'", av:"king",
      desc:"Refusing to choose between armies and starvation, David throws the decision back to God directly: 'let us fall into the hand of the LORD, for his mercies are great, but let me not fall into the hand of man' (v. 14)." },
    { x:0.7, type:"object", label:"The plague, and the angel stayed at Araunah's floor",
      desc:"Seventy thousand die from Dan to Beersheba before the angel of the LORD, reaching toward Jerusalem itself, is stopped — 'it is enough; now stay your hand' — at the threshing floor of Araunah the Jebusite on the hill above the city (vv. 15-17)." },
    { x:0.84, type:"person", label:"Araunah offers it free; David insists on paying", av:"elder",
      desc:"Araunah offers the threshing floor, his oxen for the burnt offering, and the wooden threshing sledges for fuel at no cost at all; David refuses — 'I will not offer burnt offerings to the LORD my God that cost me nothing' — and pays fifty shekels of silver for the floor and the oxen (vv. 18-24)." },
    { x:0.95, type:"object", label:"The altar built, the plague stopped",
      desc:"David builds an altar on the site, offers burnt offerings and peace offerings, and the LORD answers his prayer for the land — the plague ends on the exact spot that later becomes the Temple's own hilltop (v. 25)." }
  ],
  environment: {
    chips: ["A census nobody explains the cause of", "Nine months on foot, Dan to Beersheba", "Conviction before any prophet speaks", "A choice with no good option", "An angel's hand stayed mid-stroke", "Full price for holy ground"],
    text: "The chapter closes 2 Samuel by tracing one straight line from a private royal decision to a public national altar: David's order sends census-takers the entire length of settled Israelite territory, 'from Dan to Beersheba,' a stock phrase for the whole land's span from its northernmost sanctuary town to its southern desert edge — and the resulting numbers, gathered over the better part of a year, are what trigger David's own sudden remorse before any word from Gad reaches him. The plague that follows sweeps the same length of land the census had just measured, only to be arrested at a single, specific hilltop just outside Jerusalem's walls: a working Jebusite threshing floor, chosen for grain-processing because hilltops catch the evening wind needed to winnow chaff from wheat. David's insistence on paying full market price for that floor and its oxen, rather than accepting Araunah's offer of a free gift, turns an emergency sacrifice into a permanent, legally undisputed land purchase — the same site 2 Chronicles 3:1 will identify by name with Mount Moriah, tying Solomon's future Temple to both Abraham's binding of Isaac (Gen 22:2) and this plague's abrupt, mid-stroke end."
  },
  objectsExtra: ["altar","threshing","yoke"],
  peopleExtra: ["david","joab","gad","araunah"],
  culture: [
    { title:"Why was numbering the people a sin?", icon:"🔢",
      text:"The text never states the census's exact offense, and the ambiguity is compounded by its own opening line: 'the anger of the LORD was kindled against Israel, and he incited David against them, saying, Go, number Israel' (v. 1) — where 1 Chronicles 21:1, retelling the same event, has 'Satan stood up against Israel and incited David.' Read together, the two accounts model a real biblical pattern of double causation (cf. Job 1-2), while the sin itself is usually located in the census's implied purpose: a king counting his own military manpower as a private asset, rather than trusting the LORD who had always fought Israel's battles for them." },
    { title:"Fifty shekels, or six hundred?", icon:"💰",
      text:"2 Samuel 24:24 has David paying fifty shekels of silver for 'the threshing floor and the oxen'; 1 Chronicles 21:25 has him paying six hundred shekels of gold 'for the site' alone. The most common harmonization is that Samuel records only the price of the immediate altar plot and animals needed that day, while Chronicles records a larger, later purchase of the whole hilltop precinct that would eventually hold Solomon's Temple and courts — two real transactions, on two different scales, rather than a contradiction." },
    { title:"A threshing floor becomes the Temple Mount", icon:"🏛️",
      text:"2 Chronicles 3:1 states plainly that Solomon built the Temple 'on Mount Moriah... at the threshing floor of Ornan the Jebusite' (Araunah's name in Chronicles) — meaning the very ground where the plague stopped is, in the biblical narrative's own reckoning, the same hill where Abraham had once bound Isaac (Gen 22:2) and where the Temple's Holy of Holies would eventually stand." },
    { title:"Gad, the seer who bookends David's life", icon:"👁️",
      text:"Gad's first appearance comes decades earlier and could not be more different in tone: as an unnamed fugitive's prophet, he simply tells David to leave the stronghold and go into Judah (1 Sam 22:5). Here, as an old man himself, he delivers the hardest message of David's reign — a three-way judgment with no comfortable option — showing the same seer serving the same king across the full arc from outlaw to aging monarch." },
    { title:"A mercy that has a stopping point", icon:"⚖️",
      text:"'It is enough; now stay your hand' (v. 16) is one of the Old Testament's clearest pictures of judgment interrupted mid-motion rather than completed or withheld from the start — the plague is real and its cost (seventy thousand dead) is not minimized, but the narrative insists the LORD's anger has a limit David's own choice ('for his mercies are great,' v. 14) had gambled on correctly." }
  ],
  crossRefs: [
    { group:"Gad across David's whole life", refs:[
      { r:"1 Samuel 22:5", note:"Gad's first appearance — telling the fugitive David to leave the stronghold and go into the land of Judah" } ]},
    { group:"The parallel account", refs:[
      { r:"1 Chronicles 21:1-30", note:"Chronicles' retelling — 'Satan stood up against Israel,' an angel with a drawn sword over Jerusalem, and six hundred shekels of gold for the site" } ]},
    { group:"The threshing floor becomes the Temple", refs:[
      { r:"2 Chronicles 3:1", note:"identifies the site by name with Mount Moriah, where Solomon builds the Temple" },
      { r:"Genesis 22:2", note:"Abraham's binding of Isaac, traditionally located on the same Moriah hill" },
      { r:"1 Kings 6:1", note:"Solomon begins building the Temple, a generation after David buys the ground it stands on" } ]},
    { group:"Census law and precedent", refs:[
      { r:"Exodus 30:11-16", note:"the earlier law requiring an atonement 'ransom' payment whenever Israel's men were numbered, 'that there be no plague among them when you number them'" } ]},
    { group:"The end of the book David's story is told in", refs:[
      { r:"2 Samuel 7:12-16", note:"Nathan's earlier promise of an everlasting house for David — the dynasty this final chapter's altar site will one day house" } ]}
  ]
},

/* ============================================================
   GENESIS 1 — Six days, and a world that is "very good"
   ============================================================ */
"1:1": {
  era: {
    title: "Traditional dating (Ussher): 4004 BC — the six days of creation",
    sub: "Primeval history · no single site to plot — the whole cosmos is the setting · one of several traditional reckonings of 'the beginning'",
    badges: ["Primeval history", "Before any nation existed", "Six days, one pattern", "≈6,030 years ago (traditional reckoning)"]
  },
  timeOfDay: "day",
  summary: "'In the beginning God created the heavens and the earth' — and what he starts with is formless, empty, and dark, a deep covered in water with God's own Spirit hovering over its surface (vv. 1-2). From there the chapter unfolds in a deliberate, repeating rhythm: God speaks, and it is so; God names or blesses what he has made; God sees that it is good; evening and morning mark off one more day. Day one separates light from darkness. Day two lifts an expanse between the waters below and the waters above, calling it Sky. Day three gathers the waters below into Seas and lets dry Land appear, then covers that land with vegetation, every plant and tree yielding seed and fruit 'according to its kind.' Day four sets lights in the expanse — not named as gods but simply 'the greater light' and 'the lesser light,' with the stars added almost as an afterthought — to mark seasons, days, and years. Day five fills the waters with swarming life and 'great sea creatures' and fills the sky with every winged bird, each blessed to be fruitful and multiply. Day six brings livestock, creeping things, and beasts of the earth — and then, in the chapter's own turning point, God says 'Let us make man in our image, after our likeness,' and creates humankind, male and female, blessing them, telling them to multiply and fill the earth, and giving them dominion over every living thing and every green plant for food. The refrain that has repeated 'God saw that it was good' six times now expands: 'God saw everything that he had made, and behold, it was very good.' The sixth day ends, and with it, the work — the seventh day's rest belongs to the very next chapter (Gen 2:1-3).",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"Not yet named in this chapter, but the specific garden the text is already building toward — the plot of ground where the newly-made humankind of v. 26-27 will be placed as its keepers (Gen 2:8, 15)" },
    { id:"babylon", role:"Plotted here not as a location in this chapter's own narrative, but as the center of the rival Mesopotamian creation epic (the Enuma Elish) that Genesis 1's ordered, unopposed account appears to answer point by point" }
  ],
  journey: [
    { from:"eden", to:"babylon", dashed:true,
      label:"Not a route walked, but a line drawn between two creation stories", km:368,
      note:"Genesis 1 has no in-text journey of its own — this line instead plots the conceptual distance between Eden, the garden this account is quietly building toward, and Babylon, home of the Mesopotamian epic that Genesis 1 seems to be answering: no divine combat, no goddess's slain corpse split into sky and sea, no sun or moon worshiped by name, only 'lights' set in place by a single unopposed word." }
  ],
  hotspots: [
    { x:0.04, type:"object", label:"Formless, empty, dark — and the Spirit hovering",
      desc:"'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters' (vv. 1-2) — creation begins from raw, unshaped material, not nothing and not order." },
    { x:0.16, type:"object", label:"Day 1 — 'Let there be light'",
      desc:"God speaks light into being, separates it from darkness, and names them Day and Night; 'and there was evening and there was morning, the first day' (vv. 3-5), the refrain that will structure the whole chapter." },
    { x:0.28, type:"object", label:"Day 2 — the expanse called Sky",
      desc:"An expanse divides the waters below from the waters above; God calls the expanse Heaven — the second day, with no 'it was good' yet attached to it, an absence commentators have long noticed (vv. 6-8)." },
    { x:0.40, type:"object", label:"Day 3 — dry land, seas, and every seed-bearing plant",
      desc:"The waters gather into Seas, dry Land appears, and the land brings forth vegetation, 'each according to its kind' — a phrase repeated ten times in the chapter — twice pronounced good (vv. 9-13)." },
    { x:0.52, type:"object", label:"Day 4 — lights for signs, seasons, days, and years",
      desc:"The 'greater light' and 'lesser light' are never called sun and moon by name, and the stars are almost an aside — a quiet demotion of bodies other ancient peoples worshiped as gods in their own right (vv. 14-19)." },
    { x:0.64, type:"object", label:"Day 5 — sea creatures, swarming life, and every bird",
      desc:"God creates 'the great sea creatures' (tanninim) — the same word elsewhere applied to sea monsters and Leviathan — as ordinary creatures he simply made, not primeval rivals he had to defeat; every living thing is blessed to 'be fruitful and multiply' (vv. 20-23)." },
    { x:0.76, type:"object", label:"Day 6a — livestock, creeping things, beasts of the earth",
      desc:"The land fills out with every kind of animal, 'and God saw that it was good' — the sixth day's first half, before the chapter's turn to its real climax (vv. 24-25)." },
    { x:0.92, type:"person", label:"'Let us make man in our image' — Day 6b", av:"elder",
      desc:"Humankind is made 'in the image of God... male and female he created them,' blessed, given dominion over every living thing, and handed every plant and tree for food; 'God saw everything that he had made, and behold, it was very good' (vv. 26-31)." }
  ],
  environment: {
    chips: ["No map, no nation, no history yet", "A six-fold rhythm: speak, separate, name, bless, see, evening-morning", "Sun and moon left unnamed", "'Great sea creatures' demythologized", "Humankind alone made 'in the image'", "'Very good' replaces six 'goods'"],
    text: "Genesis 1 sets no scene a map can hold — there is no city, no travel, no named nation, because the chapter's subject is the world those things will later occupy. Its structure is the real geography: three days of forming empty spaces (light/dark, sky/sea, land/plants) answered by three days of filling them (sun/moon/stars, sea/sky creatures, land creatures and humankind), so that day four fills day one's spaces, day five fills day two's, and day six fills day three's. Ancient Near Eastern readers would have recognized — and felt the force of — everything the chapter declines to do: it does not depict creation as the leftover byproduct of a war between gods, does not need humankind as slave labor for exhausted deities (as in Mesopotamian myth), and does not dignify the sun, moon, or sea monsters with names or divine status. It ends instead with a single species given a status no other ancient cosmology extended so broadly: every man and woman alike, address as bearing the very image of God."
  },
  objectsExtra: [],
  peopleExtra: ["adam", "eve"],
  culture: [
    { title:"One creation account, or two?", icon:"📖",
      text:"Genesis 1:1-2:3 and Genesis 2:4-25 tell of the same creation from two different vantages: chapter 1 is cosmic and ordered, using the transcendent name Elohim ('God') and moving from the largest scale down to humankind as its climax; chapter 2 is intimate and human-centered, using the personal name combination YHWH Elohim ('the LORD God') and narrating the same events from ground level, with the man formed before the plants and animals of that account. Source-critical scholarship has long read this as two originally separate traditions stitched together; many readers instead take it as one deliberate literary strategy — establish the cosmic order first, then zoom the camera in on the humans who are the reason the rest of the chapter exists — a 'panorama, then close-up' structure with real ancient Near Eastern precedent." },
    { title:"How should 'the six days' be read?", icon:"🕰️",
      text:"Serious readers who share the same high view of Scripture's authority still disagree here: a straightforward 24-hour-day reading (paired with young-earth chronology like Ussher's), a day-age view treating each 'day' as a long era, a 'framework' or literary reading of the two triads of days as a topical arrangement rather than a strict sequence, and an 'analogical days' view where God's work-week is patterned for humans rather than measured in human hours. The chapter itself does not settle the debate; it is presented here as a live, respectfully held disagreement, not a solved question." },
    { title:"A quiet argument against rival gods", icon:"⚔️",
      text:"Read against its Mesopotamian and Egyptian background, Genesis 1 reads as a deliberate polemic: no divine combat produces the world (contrast the Babylonian Enuma Elish, where Marduk splits the slain goddess Tiamat's corpse into sky and sea); the sun and moon, worshiped elsewhere as Shamash and Sin, are simply 'the greater light' and 'the lesser light'; and the 'great sea creatures' of v. 21 — elsewhere in Scripture and in surrounding mythology, chaos monsters to be subdued — are just one more thing God 'created,' with no fight required." },
    { title:"'Let us make man' — who is 'us'?", icon:"❓",
      text:"The plural in v. 26 ('Let us make man in our image, after our likeness') has drawn several readings: a 'plural of majesty' common to royal speech, God addressing a heavenly council of angels (as in 1 Kings 22:19-22 or Job 1:6), or — the reading Christian tradition has generally favored in hindsight — an early, undeveloped hint of a plurality within God himself, later unfolded as Trinitarian doctrine. The text does not explain itself; each option has serious defenders." },
    { title:"The image of God, given to everyone", icon:"👥",
      text:"In the surrounding ancient world, being the 'image' of a god was typically a king's exclusive claim — a statue of the deity's chosen representative, set up to assert the king's right to rule in the god's place. Genesis 1:27 extends the same status to all humankind, explicitly 'male and female,' with no royal qualifier attached — a democratizing claim about human dignity that later grounds the Bible's strongest prohibitions against harming other people (Gen 9:6; James 3:9)." }
  ],
  crossRefs: [
    { group:"The seventh day, still one chapter ahead", refs:[
      { r:"Genesis 2:1-3", note:"the rest this chapter's sixth day is building toward — God 'blessed the seventh day and made it holy'" },
      { r:"Exodus 20:8-11", note:"the Sabbath command grounds itself explicitly in this creation week" },
      { r:"Hebrews 4:3-11", note:"God's creation-rest reinterpreted as a future rest still open to God's people" } ]},
    { group:"Made in God's image, applied", refs:[
      { r:"Genesis 9:6", note:"murder is forbidden precisely because man is made in God's image" },
      { r:"Psalm 8:3-8", note:"humankind 'crowned with glory,' given dominion — a direct echo of Gen 1:26-28" },
      { r:"James 3:9", note:"cursing another person means cursing 'those who are made in the likeness of God'" } ]},
    { group:"The New Testament's own commentary on creation", refs:[
      { r:"John 1:1-3", note:"'In the beginning' reused deliberately, with the Word present at and active in creation" },
      { r:"2 Corinthians 4:6", note:"'God, who said, Let light shine out of darkness,' reapplied to the light of the gospel" },
      { r:"Colossians 1:16", note:"'all things were created through him and for him' — creation attributed to Christ" },
      { r:"Revelation 21:1-22:5", note:"the new creation answers this chapter, undoing the fall still two chapters away" } ]}
  ]
},

/* ============================================================
   GENESIS 2 — The garden, its rivers, and the first marriage
   ============================================================ */
"1:2": {
  era: {
    title: "Primeval history — the garden planted 'eastward, in Eden'",
    sub: "The second creation account, told from ground level · the four rivers of Eden · the forming of the man, and then the woman",
    badges: ["Primeval history", "Before any city or nation", "A garden, not yet a fallen world", "Humanity's first home"]
  },
  timeOfDay: "day",
  summary: "The chapter opens by finishing what Genesis 1 started: 'the heavens and the earth were finished, and all the host of them,' and on the seventh day God rests, blessing that day and setting it apart — the first thing in Scripture ever called holy (vv. 1-3). The narrative then re-tells creation from ground level: before any plant of the field had sprung up, because the LORD God had not yet sent rain and there was no man to work the ground, a mist watered the whole surface (vv. 4-6). The LORD God forms the man ('adam') from the dust of the ground ('adamah') and breathes into his nostrils the breath of life, and the man becomes a living being (v. 7). He plants a garden eastward in Eden and puts the man there, making every tree grow that is pleasant to see and good to eat, with the tree of life and the tree of the knowledge of good and evil standing in its midst (vv. 8-9). A river flows out of Eden to water the garden and divides into four heads — the Pishon, winding through Havilah's gold; the Gihon, encircling Cush; the Hiddekel (Tigris), flowing east of Assyria; and the Euphrates, named without further comment (vv. 10-14). The man is placed in the garden 'to work it and keep it,' and given a single restriction: he may eat freely from every tree but the tree of the knowledge of good and evil, 'for in the day that you eat of it you shall surely die' (vv. 15-17). Then, for the first time, God declares something 'not good' — 'It is not good that the man should be alone; I will make him a helper fit for him' — and brings every animal and bird to the man to be named, but among them no helper fit for him is found (vv. 18-20). The LORD God causes a deep sleep to fall on the man, takes one of his ribs, and builds it into a woman, bringing her to him; the man's response is the Bible's first poem — 'This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man' (vv. 21-23). The chapter closes with the narrator's own aside establishing marriage itself: 'Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.' The man and his wife were both naked, and were not ashamed (vv. 24-25).",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"The garden the LORD God plants 'eastward, in Eden,' where the man is placed, the woman is formed, and the whole chapter's action takes place (vv. 8-25)" },
    { id:"babylon", role:"Downstream on the same Euphrates named as the fourth river out of Eden (v. 14) — the city that will one day rise on its banks" },
    { id:"nineveh", role:"Standing on the Tigris (the Hiddekel of v. 14), which the text says flows 'east of Assyria' — Nineveh being Assyria's own great city" }
  ],
  journey: [
    { from:"eden", to:"babylon",
      label:"The Euphrates, named without comment", km:368,
      note:"The fourth river out of Eden needs no explanation in the text — unlike the Pishon and Gihon, it was evidently well known to the original audience, the same river that will later run past the great city of Babylon (v. 14)." },
    { from:"eden", to:"nineveh",
      label:"The Hiddekel, east of Assyria", km:744,
      note:"The third river, Hiddekel, is identified by the text itself as the Tigris, 'which flows east of Assyria' (v. 14) — the same river on which Assyria's capital Nineveh would later stand." }
  ],
  hotspots: [
    { x:0.03, type:"object", label:"The seventh day: rest, blessed, made holy",
      desc:"'On the seventh day God finished his work... and he rested... So God blessed the seventh day and made it holy' — the first time anything in Scripture is called holy (Gen 2:1-3)." },
    { x:0.14, type:"object", label:"No rain, no man, only a mist",
      desc:"Before any plant of the field existed, the text notes there was no rain and no man to work the ground — only a mist rising to water the whole face of the ground (vv. 4-6), setting up exactly what verse 7 and verse 15 will supply." },
    { x:0.26, type:"person", label:"Formed from dust, given breath", av:"elder",
      desc:"'The LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature' (v. 7) — a wordplay in Hebrew between adam (man) and adamah (ground) that runs through the rest of Genesis." },
    { x:0.38, type:"object", label:"A garden planted eastward, two trees in its midst",
      desc:"The LORD God plants a garden in Eden and puts the man there, filling it with every tree pleasant to see and good for food, but placing the tree of life and the tree of the knowledge of good and evil at its center (vv. 8-9)." },
    { x:0.48, type:"object", label:"One river, then four: Pishon, Gihon, Hiddekel, Euphrates",
      desc:"A single river out of Eden divides into four heads — the gold-country Pishon, the Cush-encircling Gihon, the Hiddekel flowing east of Assyria, and the Euphrates, named last and without comment (vv. 10-14)." },
    { x:0.60, type:"person", label:"To work it and keep it — and one tree forbidden", av:"elder",
      desc:"The man is set in the garden 'to work it and keep it' and told he may eat freely of every tree but one: 'of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die' (vv. 15-17)." },
    { x:0.71, type:"person", label:"'Not good for man to be alone' — naming the animals", av:"elder",
      desc:"For the first time something is called 'not good'; God resolves to make 'a helper fit for him,' then brings every beast and bird to the man, who names each one — yet none is found to be his match (vv. 18-20)." },
    { x:0.84, type:"person", label:"Deep sleep, a rib, and the first poem", av:"woman",
      desc:"The LORD God causes a deep sleep to fall on the man, takes a rib, and builds a woman from it; waking, the man exclaims, 'This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man' (vv. 21-23)." },
    { x:0.95, type:"object", label:"One flesh — and no shame",
      desc:"The narrator steps forward to state marriage as a pattern for every generation after: 'a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.' Both were naked, and unashamed (vv. 24-25)." }
  ],
  environment: {
    chips: ["A mist before the rain", "Adam (man) from adamah (ground)", "One river, four heads", "'Work it and keep it' — priestly language", "Naming as dominion", "One flesh: the first marriage"],
    text: "This chapter's geography is deliberately specific in a way Genesis 1's is not: a named garden ('eastward, in Eden'), a named river system with two branches (Hiddekel/Tigris, Euphrates) still on any modern map and two more (Pishon, Gihon) long debated, and named lands (Havilah, Cush, Assyria) that orient the garden within the world its first readers actually knew. Eden itself sat, on the most common reconstruction, near the ancient confluence of the Tigris and Euphrates at the head of the Persian Gulf — a lush, well-watered plain against an otherwise arid backdrop, exactly the kind of place Mesopotamian literature elsewhere imagined as a garden of the gods. The commission to 'work it and keep it' (v. 15) uses the same Hebrew verb pair ('abad and shamar) later applied to the Levites' service and guard duty in the tabernacle (Num 3:7-8), suggesting Eden functions in the text as a sanctuary and the man as its priest-guardian well before there is a tabernacle to guard."
  },
  objectsExtra: ["tree-of-life", "tree-of-knowledge", "eden-rivers"],
  peopleExtra: ["adam", "eve"],
  culture: [
    { title:"Two creation accounts, one story", icon:"📖",
      text:"Genesis 2 does not contradict Genesis 1 so much as change lenses: chapter 1 narrates all six days from a cosmic vantage; chapter 2 slows down to retell day six from ground level, focused entirely on the man, the garden, and the woman. Read as complementary 'panorama, then close-up' rather than as two competing timelines, the apparent differences in order (plants and animals named after the man in ch. 2, unlike ch. 1) resolve as a difference of narrative focus, not sequence — chapter 2 is not claiming to re-run the six days in a different order, but zooming in on one part of day six." },
    { title:"Adam and adamah — a wordplay with a future", icon:"🔤",
      text:"The Hebrew pun between 'adam' (man) and 'adamah' (ground) frames humanity's identity around the earth from its first mention — formed from it, set to work it, and, after the fall, sentenced to return to it (Gen 3:19). The wordplay is not decorative; it is doing theology, tying human life and human mortality to the soil in the same verse that gives humanity its name." },
    { title:"'Work it and keep it' — priestly language in the garden", icon:"🌿",
      text:"The verb pair in v. 15 ('abad, 'to work/serve,' and shamar, 'to keep/guard') reappears together elsewhere in the Pentateuch specifically for the Levites' duties around the tabernacle (Num 3:7-8; 8:26) — not the generic vocabulary of farm labor. Many scholars take this as a deliberate signal that Eden functions as an archetypal sanctuary, and the man as a priest-like guardian of sacred space, well before Israel has a tabernacle or priesthood of its own." },
    { title:"Naming the animals — dominion in action", icon:"🐾",
      text:"In the ancient world, the authority to name something was the authority to define and rule it. The man's naming of every beast and bird (v. 19-20) both enacts the dominion mandate already given in Gen 1:28 and quietly builds the case for the chapter's next line — that despite naming an entire animal kingdom, none of them answers his aloneness." },
    { title:"Where were Pishon and Gihon?", icon:"🗺️",
      text:"The Hiddekel (Tigris) and Euphrates are geographically secure; the Pishon (winding through gold-rich Havilah) and Gihon (encircling Cush) are not, and have been proposed as anything from Arabian wadis to a now-submerged river system once flowing through what is today the floor of the Persian Gulf. The uncertainty is real and openly acknowledged by conservative and critical scholars alike, rather than resolved by any single confident identification." },
    { title:"One flesh — an institution, not just a moment", icon:"💍",
      text:"Verse 24 shifts from narrating a single event to a general statement — 'Therefore a man shall leave...' — establishing marriage as a pattern for every future generation, not a detail specific to Adam and Eve alone. Both Jesus (Matt 19:4-6) and Paul (Eph 5:31) later quote this verse as foundational, treating it as the Bible's own definition of marriage rather than a merely descriptive aside." }
  ],
  crossRefs: [
    { group:"The Sabbath rest, later commanded", refs:[
      { r:"Exodus 20:8-11", note:"the fourth commandment roots weekly Sabbath directly in this chapter's seventh day" },
      { r:"Exodus 31:16-17", note:"the Sabbath as 'a sign forever' between the LORD and Israel" },
      { r:"Hebrews 4:3-11", note:"God's own rest reinterpreted as a future rest still open to believers" } ]},
    { group:"The rivers, and later Mesopotamian geography", refs:[
      { r:"Genesis 15:18", note:"the Euphrates named again as the far border of the land promised to Abraham's offspring" },
      { r:"2 Kings 24:7", note:"the king of Babylon's empire measured 'from the Brook of Egypt to the river Euphrates'" },
      { r:"Revelation 16:12", note:"the Euphrates drained dry at the end of the age — the same river named without comment here" } ]},
    { group:"One flesh, cited forward", refs:[
      { r:"Matthew 19:4-6", note:"Jesus quotes Gen 2:24 directly against the legality of casual divorce" },
      { r:"Ephesians 5:31-32", note:"Paul quotes the same verse and calls the union 'a profound mystery' pointing to Christ and the church" },
      { r:"Malachi 2:14-15", note:"marriage as covenant, tracing back to God making the couple 'one'" } ]},
    { group:"Formed from dust, returning to dust", refs:[
      { r:"Genesis 3:19", note:"the sentence that answers this chapter's formation — 'for dust you are, and to dust you shall return'" },
      { r:"Psalm 103:14", note:"'he knows our frame; he remembers that we are dust'" },
      { r:"1 Corinthians 15:47", note:"'the first man was from the earth, a man of dust' set against the second man from heaven" } ]}
  ]
},

/* ============================================================
   GENESIS 3 — The serpent, the fall, and the first promise
   ============================================================ */
"1:3": {
  era: {
    title: "Primeval history — the fall, and the first promise of a Deliverer",
    sub: "The garden's one law broken · curses on serpent, woman, man, and ground · Genesis 3:15, the protoevangelium · expulsion east of Eden",
    badges: ["Primeval history", "The garden's only law, broken", "Genesis 3:15 — the first gospel promise", "Expulsion, and a guarded way back"]
  },
  timeOfDay: "dusk",
  summary: "The serpent, 'more crafty than any other beast of the field that the LORD God had made,' opens with a question that subtly misquotes God's command: 'Did God actually say, You shall not eat of any tree in the garden?' Eve corrects him but overstates the restriction herself, adding 'neither shall you touch it' (vv. 1-3). The serpent answers with flat denial and a counter-promise: 'You will not surely die. For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil' (vv. 4-5). Seeing that the fruit is good for food, a delight to the eyes, and desirable for gaining wisdom, Eve takes and eats, and gives some to her husband, 'who was with her,' and he eats as well (v. 6). Their eyes are opened at once — not to divine wisdom, but to their own nakedness, which they cover with sewn fig leaves (v. 7). Hearing the sound of the LORD God walking in the garden in the cool of the day, they hide among the trees; God calls out, 'Where are you?' and 'Who told you that you were naked? Have you eaten of the tree...?' (vv. 8-11). The man blames the woman — and, in the same breath, God himself: 'The woman whom you gave to be with me, she gave me fruit.' The woman blames the serpent: 'The serpent deceived me, and I ate' (vv. 12-13). The LORD pronounces judgment on all three, moving outward from the source: the serpent is cursed above every animal, sentenced to crawl on its belly and eat dust, and told of a coming enmity between its offspring and the woman's — 'he shall bruise your head, and you shall bruise his heel' (vv. 14-15). The woman is told her pain in childbirth will be greatly multiplied, and her desire will be for her husband, who will rule over her (v. 16). Because the man listened to his wife and ate what he was told not to, the ground itself is cursed on his account: thorns and thistles, sweat for bread, 'until you return to the ground, for out of it you were taken; for you are dust, and to dust you shall return' (vv. 17-19). The man names his wife Eve, 'because she was the mother of all living,' and the LORD God makes garments of skin for the couple and clothes them (vv. 20-21). Then, saying 'the man has become like one of us, knowing good and evil,' God sends the man out from the garden to work the very ground he was taken from, lest he also eat of the tree of life and live forever — driving him out and stationing cherubim and a flaming sword that turns every way, east of Eden, to guard the way back (vv. 22-24).",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"The whole chapter's setting — the temptation, the eating, the hiding, the confrontation, the curses, and the expulsion east of the garden's gate (vv. 1-24)" },
    { id:"babylon", role:"Not a location in this chapter, but the place later prophetic and apocalyptic writing reaches for when giving the serpent's rebellion a political body — Isaiah's taunt against the fallen 'Day Star' (Isa 14:12-15) and Revelation's 'ancient serpent' bound up with 'Babylon the great' (Rev 12:9; 17-18)" }
  ],
  journey: [
    { from:"eden", to:"babylon", dashed:true,
      label:"The serpent's shadow, cast forward onto an empire", km:368,
      note:"No one travels in this chapter — the couple only moves as far as 'east of Eden' when they are driven out (v. 24). This line instead traces a much later, purely typological connection: prophetic and apocalyptic literature repeatedly reach for Babylon as the serpent's political embodiment, from Isaiah's taunt against the king of Babylon as a fallen heavenly being to Revelation's dragon-and-Babylon imagery." }
  ],
  hotspots: [
    { x:0.04, type:"object", label:"'Did God actually say...?'",
      desc:"The serpent opens with a question that quietly reshapes God's actual command into something more restrictive than it was; Eve's reply adds a restriction of her own ('neither shall you touch it') that God never gave (vv. 1-3)." },
    { x:0.17, type:"object", label:"'You will not surely die... you will be like God'",
      desc:"The serpent answers Eve's correction with outright denial, then a counter-promise: eating will open her eyes and make her 'like God, knowing good and evil' (vv. 4-5) — the first recorded lie about God's own words." },
    { x:0.30, type:"person", label:"Eve eats, and gives to her husband 'who was with her'", av:"woman",
      desc:"Seeing the fruit as good for food, pleasing to the eye, and desirable for wisdom, Eve takes and eats — and hands it to Adam, present the whole time, who eats without a word of objection recorded (v. 6)." },
    { x:0.42, type:"object", label:"Eyes opened — to their own nakedness",
      desc:"The promised enlightenment arrives, but not as expected: their eyes are opened only to their own exposure, and they sew fig leaves together for makeshift coverings (v. 7)." },
    { x:0.54, type:"person", label:"Hiding from the sound of the LORD, in the cool of the day", av:"elder",
      desc:"Hearing God walking in the garden 'in the cool of the day,' the man and his wife hide among the trees; God's first words are a question that already knows the answer — 'Where are you?' (vv. 8-10)." },
    { x:0.64, type:"person", label:"The blame chain: man, then woman, then serpent", av:"elder",
      desc:"Adam blames Eve — and, in the same breath, God ('the woman whom YOU gave me'); Eve in turn blames the serpent: 'The serpent deceived me, and I ate' (vv. 11-13)." },
    { x:0.75, type:"object", label:"The serpent cursed — and the first promise (Gen 3:15)",
      desc:"Cursed above every animal, sentenced to crawl and eat dust, the serpent is also told of a coming enmity between its offspring and the woman's: 'he shall bruise your head, and you shall bruise his heel' — the protoevangelium, the Bible's first announced hope of victory over evil (vv. 14-15)." },
    { x:0.85, type:"person", label:"The woman and the man, sentenced in turn", av:"woman",
      desc:"The woman is told her pain in childbirth will greatly increase, alongside a new tension in her marriage; the ground itself is cursed because of the man, who will now eat bread only 'by the sweat of your face... till you return to the ground' (vv. 16-19)." },
    { x:0.96, type:"object", label:"Eve named, skins given, and cherubim guard the way back",
      desc:"Adam names his wife Eve, 'mother of all living'; God clothes them in garments of skin in place of their fig leaves; then, so they cannot also eat of the tree of life and live forever in their fallen state, he drives them out and posts cherubim with a whirling flaming sword east of Eden (vv. 20-24)." }
  ],
  environment: {
    chips: ["A crafty serpent, and a misquoted command", "Fruit good for food, a delight to the eyes", "Hiding in the cool of the day", "Three curses, moving outward", "Genesis 3:15 — enmity, and a bruised head", "Cherubim east of Eden"],
    text: "The chapter's geography stays entirely inside the garden until its final verse, when the couple is driven 'out of the garden of Eden' and cherubim are stationed 'at the east of the garden of Eden' to guard the way to the tree of life (v. 24) — the only movement in the whole account, and a permanent one. The curses that precede it fall in a deliberate order, moving outward from the point of deception to its widest consequence: the serpent nearest the source, the woman next, the man and then the ground itself last, so that even the earth under the couple's feet is drawn into the story's judgment. Read against Genesis 1-2, where every day ends 'good' and the ground needed only a mist to produce life, chapter 3 systematically undoes each blessing — fruitfulness becomes multiplied pain, dominion over the ground becomes labor against thorns and thistles, and unashamed nakedness becomes something to hide and then to cover."
  },
  objectsExtra: ["serpent", "tree-of-knowledge", "fig-leaves", "skins-garment", "cherub-flaming-sword"],
  peopleExtra: ["adam", "eve"],
  culture: [
    { title:"Talking snake, or something more?", icon:"🐍",
      text:"The text introduces the serpent simply as one of the animals God made, 'more crafty than any other beast of the field' (v. 1), and its punishment ('on your belly you shall go') has led many readers to picture it as originally upright or limbed. Only much later revelation identifies it explicitly with a personal evil power: 'that ancient serpent, who is called the devil and Satan' (Rev 12:9; 20:2). Genesis 3 itself never makes that identification outright, which is why the relationship between the literal creature and the deceiver working through it has been debated for as long as the text has been read seriously." },
    { title:"What was 'the knowledge of good and evil'?", icon:"❓",
      text:"Interpreters differ on what exactly was being reached for: moral autonomy, the ability to decide right and wrong for oneself rather than receiving it from God's word; comprehensive knowledge, with 'good and evil' functioning as a merism for 'everything' (compare 2 Sam 14:17, 'to discern good and evil' as a phrase for complete wisdom); or moral experience itself, the loss of innocence that comes only from having done wrong. The chapter's own vocabulary supports more than one of these readings at once." },
    { title:"The first promise: Genesis 3:15", icon:"✝️",
      text:"Read within its own chapter, the LORD's sentence on the serpent doubles as Scripture's first forward-looking hope: enmity is set between the serpent's offspring and the woman's, culminating in a blow to the head that outweighs a blow to the heel. Christian tradition since the earliest centuries has read this as a veiled promise of the ultimate defeat of evil through 'the seed of the woman,' fulfilled in Christ (Rom 16:20; Rev 12) — while also recognizing that its first hearers likely grasped it first as a real, if partial, hope that the conflict just introduced would not have the last word." },
    { title:"Curse, or consequence?", icon:"⚖️",
      text:"The text explicitly says 'cursed are you' to the serpent (v. 14) and 'cursed is the ground' because of the man (v. 17) — but never applies the word 'curse' directly to the woman or the man themselves, describing consequences to them instead. Many commentators find this distinction significant: humanity bears the weight of the fall without being cursed outright the way the serpent and the ground are." },
    { title:"Why cherubim and a flaming sword?", icon:"🔥",
      text:"The guard placed at Eden's east gate (v. 24) is framed by the preceding verse as much an act of mercy as of judgment — preventing the man from eating of the tree of life and being fixed forever in his fallen state, rather than simply punishing him further. The image is bookended at the very end of Scripture, where the tree of life reappears, now freely accessible again, its leaves for the healing of the nations (Rev 22:2, 14)." }
  ],
  crossRefs: [
    { group:"The protoevangelium — the first promise", refs:[
      { r:"Romans 16:20", note:"'the God of peace will soon crush Satan under your feet' — echoing the serpent's crushed head" },
      { r:"Revelation 12:9, 17", note:"'that ancient serpent' at war with the woman's offspring" },
      { r:"Galatians 4:4-5", note:"Christ 'born of woman,' the seed the promise pointed toward" },
      { r:"1 John 3:8", note:"'the reason the Son of God appeared was to destroy the works of the devil'" } ]},
    { group:"The blame chain, echoed", refs:[
      { r:"Romans 5:12-19", note:"sin and death entering through one man, answered by grace through one man" },
      { r:"1 Timothy 2:13-14", note:"Paul's own reading of the order of deception in the garden" },
      { r:"1 Corinthians 15:21-22", note:"'as in Adam all die, so also in Christ shall all be made alive'" } ]},
    { group:"The consequences, carried into the rest of Scripture", refs:[
      { r:"Genesis 4:7", note:"sin 'crouching at the door' — the same predatory imagery turned toward Cain" },
      { r:"Isaiah 65:25", note:"a future peace where 'dust shall be the serpent's food' — Eden's curse still in view" },
      { r:"Revelation 22:2-3", note:"the curse reversed at last, and the tree of life restored" } ]}
  ]
},

/* ===== GENESIS 4 — Cain, Abel, and the first murder ===== */
"1:4": {
  era: {
    title: "Primeval history — the first family, the first murder",
    sub: "Cain and Abel's offerings · the first murder · Cain's line · Seth and Enosh",
    badges: ["Primeval history", "First worship, first murder", "The mark of Cain", "Calling on the LORD's name begins"]
  },
  timeOfDay: "day",
  summary: "Eve bears Cain, then Abel; Cain farms, Abel shepherds. Both bring offerings, but the LORD favors Abel's firstborn flock over Cain's produce, and Cain grows furious. God warns him that sin is 'crouching at the door,' desiring him, but he must master it. Cain instead lures Abel into a field and kills him — history's first murder. When the LORD asks where Abel is, Cain deflects ('Am I my brother's keeper?'), and is sentenced to wander the earth, the ground no longer yielding its strength to him; yet God marks him so no one will kill him in vengeance. Cain settles in Nod, east of Eden, builds a city named for his son Enoch, and his line produces the first tent-dwellers, musicians, and metalworkers — alongside Lamech, whose boast of unrestrained vengeance escalates Cain's own violence. The chapter closes on a contrasting note: Adam and Eve have another son, Seth, 'in place of Abel,' and Seth's son Enosh's generation is when 'people began to call upon the name of the LORD' — worship reasserting itself after the family's collapse.",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"The point of reference — Cain settles 'east of Eden,' still oriented to the garden his parents lost" },
    { id:"nod", role:"The land where Cain settles after his sentence, and where he builds the first named city" }
  ],
  journey: [
    { from:"eden", to:"nod", label:"Cain's exile", km:150, note:"Driven from the ground he farmed, Cain moves east into Nod, permanently separated from Eden's presence of God." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Two offerings, one accepted", av:"elder", desc:"Cain brings crops, Abel brings the best of his flock; the LORD favors Abel's, and Cain's face falls (vv. 3-5)." },
    { x:0.24, type:"object", label:"Sin crouching at the door", desc:"God warns Cain that sin desires to master him, but he can rule over it — the Bible's first warning about temptation (v. 7)." },
    { x:0.40, type:"person", label:"The first murder", av:"elder", desc:"Cain kills Abel in the field; when asked where his brother is, he answers, 'Am I my brother's keeper?' (vv. 8-9)." },
    { x:0.55, type:"object", label:"The mark of Cain", desc:"Sentenced to wander, Cain is nonetheless marked by God against vengeance, and sevenfold retribution is promised anyone who kills him (vv. 13-15)." },
    { x:0.72, type:"person", label:"Lamech's escalating boast", av:"elder", desc:"Cain's descendant Lamech takes two wives and boasts of killing a man, claiming seventy-sevenfold vengeance — violence compounding down the line (vv. 19-24)." },
    { x:0.92, type:"person", label:"Seth, and calling on the LORD's name", av:"elder", desc:"Seth is born 'in place of Abel'; his son Enosh's generation marks when people first 'began to call upon the name of the LORD' (vv. 25-26)." }
  ],
  environment: {
    chips: ["Farmer vs. shepherd", "Sin crouching at the door", "The first city, named for a son", "Tents, harps, and bronze", "Lamech's escalating vengeance", "Worship begins again"],
    text: "The chapter moves fast — from garden to farmland to the first city — tracing how quickly human community both builds culture (tents, music, metalwork) and multiplies violence (Lamech's boast dwarfing God's own mercy to Cain). Nod's exact location is never fixed; its name means 'wandering,' fitting a fugitive's homeland. The turn to Seth and Enosh closes the chapter on hope rather than despair."
  },
  objectsExtra: ["mark-of-cain", "altar"],
  peopleExtra: ["cain", "abel", "seth", "enoch-son-cain", "lamech-cainite", "jabal", "jubal", "tubal-cain", "enosh"],
  culture: [
    { title:"Why was Abel's offering favored?", icon:"🐑",
      text:"The text never says Cain's grain offering was wrong in kind — only that Abel brought 'the firstborn of his flock and their fat portions,' language of costly, first-quality giving, while Cain's is unspecified. Hebrews 11:4 credits Abel's faith, not his livestock, as the difference." },
    { title:"The first city", icon:"🏙️",
      text:"Cain, sentenced to wander, paradoxically becomes the first city-builder, naming it after his son Enoch. Ancient readers would have felt the irony: settled civilization begins with a fugitive under judgment, not with paradise regained." },
    { title:"Lamech's song of vengeance", icon:"⚔️",
      text:"Lamech's boast to his wives (vv. 23-24) is Hebrew poetry — the Bible's oldest recorded verse by some readings — turning God's mercy to Cain into personal bravado, escalating sevenfold vengeance to seventy-sevenfold." }
  ],
  crossRefs: [
    { group:"Cain and Abel, remembered later", refs:[
      { r:"Hebrews 11:4", note:"Abel's faith, still speaking after death" },
      { r:"1 John 3:12", note:"Cain 'was of the evil one' and murdered his brother" },
      { r:"Matthew 23:35", note:"'the blood of righteous Abel' invoked by Jesus" } ]},
    { group:"Sin, mastery, and the fall's aftermath", refs:[
      { r:"Genesis 3:16", note:"the same 'desire/rule' language used of the woman and the man" },
      { r:"Romans 6:12-14", note:"sin no longer reigning over believers" },
      { r:"James 1:14-15", note:"desire conceiving sin, sin bringing death" } ]}
  ]
},

/* ===== GENESIS 5 — From Adam to Noah ===== */
"1:5": {
  era: {
    title: "Primeval history — ten generations, Adam to Noah",
    sub: "The genealogy of Seth's line · Enoch's walk with God · Methuselah's long years · Noah's birth",
    badges: ["Primeval history", "Ten long-lived generations", "Enoch: 'God took him'", "Ends with Noah"]
  },
  timeOfDay: "day",
  summary: "This chapter is a genealogy bridging Adam to Noah through Seth's line, each entry following a set formula: a man's age when he fathered his named heir, the years he lived afterward while fathering other sons and daughters, his total lifespan, and 'then he died.' Ages run into the many centuries — Methuselah reaches 969, the longest recorded life in Scripture. The pattern breaks only once: Enoch, at 365, does not die but 'walked with God, and he was not, for God took him,' a singular exception to the chapter's relentless refrain. The list closes with Lamech fathering Noah, naming him in hope that he would bring relief from the toil of the cursed ground, and Noah in turn fathering Shem, Ham, and Japheth. The genealogy functions as more than a record: it quietly tracks how the death sentence pronounced in Eden ('you shall surely die') plays out across a full ten generations, while also preserving the line through which the promise of Genesis 3:15 will be carried forward to Noah and beyond.",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"The genealogy's implicit starting point — Adam's line begins where Genesis 2-3 left off" },
    { id:"babylon", role:"Plotted here as the wider Mesopotamian world these ten generations lived alongside, though the text names no city of its own" }
  ],
  journey: [
    { from:"eden", to:"babylon", dashed:true, label:"A genealogy with no travel of its own", km:368,
      note:"No one moves in this chapter; the line only marks the same conceptual distance used in Genesis 1 — Eden's fading legacy against Mesopotamia's rising cities, as an unnamed civilization forms around Seth's ten quietly aging generations." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Adam, 930 years", av:"elder", desc:"The chapter opens by restating Adam's creation 'in God's likeness' before recording his full 930-year lifespan (vv. 1-5)." },
    { x:0.30, type:"person", label:"Seth to Kenan to Mahalalel", av:"elder", desc:"Three generations pass in the chapter's steady formula, each living upward of 900 years except where noted (vv. 6-17)." },
    { x:0.50, type:"person", label:"Enoch: 'he walked with God'", av:"elder", desc:"Uniquely, Enoch does not die: 'Enoch walked with God, and he was not, for God took him' at 365 — far short of his ancestors' ages, yet uniquely spared death (vv. 21-24)." },
    { x:0.68, type:"person", label:"Methuselah, 969 years", av:"elder", desc:"Enoch's son lives longer than anyone else recorded in Scripture, his death traditionally reckoned to fall the same year as the Flood (vv. 25-27)." },
    { x:0.85, type:"person", label:"Lamech names Noah", av:"elder", desc:"Lamech fathers a son and names him Noah, hoping he will bring 'relief from our work and from the painful toil of our hands' (vv. 28-31)." },
    { x:0.96, type:"person", label:"Noah fathers three sons", av:"elder", desc:"At 500, Noah fathers Shem, Ham, and Japheth, setting up the Flood narrative to follow (v. 32)." }
  ],
  environment: {
    chips: ["A ten-generation bridge", "Death's steady refrain", "One exception: Enoch", "Methuselah's record lifespan", "Noah named in hope", "The promise carried forward"],
    text: "Genesis 5 is structured, not narrated — a formal king-list-style genealogy common in the ancient Near East, though here tracking ordinary patriarchs rather than kings. The repeated 'and he died' underscores Eden's sentence taking hold generation after generation, broken only by Enoch's translation, a flicker of hope that death need not be final."
  },
  objectsExtra: [],
  peopleExtra: ["seth", "enosh", "enoch-son-jared", "methuselah", "lamech-sethite", "noah", "shem", "ham", "japheth"],
  culture: [
    { title:"Why such long lifespans?", icon:"📜",
      text:"Ancient Near Eastern king-lists (Sumerian ones especially) also record extraordinarily long reigns before a flood, dropping sharply after. Whether Genesis 5's numbers are literal, symbolic, or reflect a different counting convention is genuinely debated among conservative scholars." },
    { title:"Enoch's translation", icon:"🌤️",
      text:"Enoch is the first person Scripture says did not die; Hebrews 11:5 credits this to his faith, and Jude 14-15 quotes a prophecy attributed to him from later Jewish tradition (1 Enoch), though that book itself is not scriptural." },
    { title:"A genealogy with a purpose", icon:"🔗",
      text:"Unlike a bare list, this chapter deliberately links Adam's creation 'in the likeness of God' (v. 1) to Seth being fathered 'in his own likeness' (v. 3) — the image of God transmitted through ordinary human birth, not lost at the fall." }
  ],
  crossRefs: [
    { group:"Enoch's walk with God", refs:[
      { r:"Hebrews 11:5", note:"'by faith Enoch was taken up so that he should not see death'" },
      { r:"Jude 1:14-15", note:"a prophecy attributed to Enoch about the LORD's coming judgment" },
      { r:"2 Kings 2:11", note:"Elijah's later, similarly death-free departure" } ]},
    { group:"Genealogy and the promised line", refs:[
      { r:"Luke 3:36-38", note:"Luke's genealogy of Jesus traces back through this same line to Adam" },
      { r:"1 Chronicles 1:1-4", note:"the Chronicler repeats this genealogy to open Israel's own history" },
      { r:"Genesis 3:15", note:"the promised offspring this genealogy is quietly carrying forward" } ]}
  ]
},

/* ===== GENESIS 6 — Corruption, and the ark commanded ===== */
"1:6": {
  era: {
    title: "Primeval history — 'every inclination... only evil continually'",
    sub: "The Nephilim · human wickedness grieves God · Noah found righteous · the ark's blueprint",
    badges: ["Primeval history", "Widespread corruption", "Noah alone found righteous", "The ark's design given"]
  },
  timeOfDay: "day",
  summary: "As humanity multiplies, the enigmatic 'sons of God' take wives from among human daughters, and Nephilim — 'the mighty men who were of old, the men of renown' — appear on the earth; God limits human lifespan to 120 years. The LORD sees that human wickedness is great and 'every intention of the thoughts of his heart was only evil continually,' and he regrets making mankind, resolving to blot out every living thing. But Noah finds favor in the LORD's eyes: he is righteous and blameless in his generation, walking with God. God tells Noah the earth is full of violence and corruption and he intends to destroy it, instructing Noah to build an ark of gopher wood, coated with pitch, with precise dimensions (300 by 50 by 30 cubits), three decks, and a door in the side. God promises to establish his covenant with Noah, who will enter the ark with his wife, sons, and their wives, along with two of every kind of creature to keep them alive, and enough food stored for all. Noah does everything exactly as God commands him — the chapter's closing note of quiet obedience against the surrounding chaos.",
  focusPlace: "eden",
  places: [
    { id:"eden", role:"The backdrop against which the corruption is measured — humanity's decline from the garden continues" },
    { id:"ararat", role:"Named only two chapters ahead as where the ark comes to rest — plotted here in advance as the ark's ultimate destination (Gen 8:4)" }
  ],
  journey: [
    { from:"eden", to:"ararat", dashed:true, label:"Forward to the mountain the ark will find", km:930,
      note:"No journey happens within this chapter itself; the line anticipates the flood narrative just beginning, tracing from humanity's lost garden to the mountain where Noah's ark will finally rest." }
  ],
  hotspots: [
    { x:0.08, type:"object", label:"The 'sons of God' and the Nephilim", desc:"An enigmatic union produces the Nephilim, 'mighty men... of renown,' and God limits human lifespan to 120 years (vv. 1-4)." },
    { x:0.24, type:"object", label:"God's grief over human evil", desc:"'Every intention of the thoughts of his heart was only evil continually'; the LORD regrets making mankind and resolves to destroy it (vv. 5-7)." },
    { x:0.40, type:"person", label:"Noah finds favor", av:"elder", desc:"Alone among his generation, Noah is righteous, blameless, and walks with God — the reason the story continues at all (vv. 8-9)." },
    { x:0.56, type:"object", label:"The earth 'corrupt' and 'full of violence'", desc:"God tells Noah the whole earth has become corrupt in his sight, and he intends to destroy it along with the earth itself (vv. 11-13)." },
    { x:0.74, type:"object", label:"The ark's blueprint", desc:"Precise instructions: gopher wood, pitch inside and out, 300x50x30 cubits, three decks, a door in the side (vv. 14-16)." },
    { x:0.92, type:"person", label:"'Noah did... according to all that God commanded him'", av:"elder", desc:"God promises his covenant and instructs Noah on who and what to bring aboard; Noah obeys without recorded objection (vv. 17-22)." }
  ],
  environment: {
    chips: ["Nephilim, 'men of renown'", "120-year lifespan limit", "Total corruption, total grief", "Noah: righteous, blameless", "Gopher wood and pitch", "Exact obedience"],
    text: "The chapter pivots the whole primeval history from cosmos-building to catastrophe: humanity's spread has produced not flourishing but violence so total that God's own language ('regretted,' 'grieved') mirrors the intimacy of Genesis 2's garden-forming. The ark's dimensions (roughly 135 x 22.5 x 13.5 m by a common cubit reckoning) describe a genuinely enormous vessel, built entirely on the strength of one man's obedience."
  },
  objectsExtra: ["noahs-ark"],
  peopleExtra: ["noah", "shem", "ham", "japheth"],
  culture: [
    { title:"Who were the 'sons of God'?", icon:"❓",
      text:"Three major readings persist: fallen angels intermarrying with humans (supported by parallels in Job and 2 Peter/Jude), the godly line of Seth intermarrying with Cain's line, or human rulers/despots taking wives by force. Serious, conservative scholars hold each view; the text itself does not resolve it." },
    { title:"Flood traditions across the ancient world", icon:"🌊",
      text:"Mesopotamian epics (Atrahasis, Gilgamesh's flood tablet) tell strikingly similar stories — a flood hero, a boat, birds sent to find land — but with capricious gods destroying humanity over noise, contrasted against Genesis's single righteous God judging real moral corruption." },
    { title:"The ark's scale", icon:"🚢",
      text:"At roughly 300 cubits long, the ark's proportions (6:1 length-to-width) are strikingly close to modern ship-design ratios for stability, noted by naval architects even among skeptical readers as a sound design for a vessel meant to float rather than sail." }
  ],
  crossRefs: [
    { group:"The Nephilim and 'sons of God' elsewhere", refs:[
      { r:"Job 1:6", note:"'sons of God' presenting themselves before the LORD" },
      { r:"2 Peter 2:4-5", note:"angels who sinned, linked to the flood generation" },
      { r:"Jude 1:6-7", note:"angels who left their proper dwelling, judged" } ]},
    { group:"Noah's righteousness and the Flood's judgment", refs:[
      { r:"Hebrews 11:7", note:"Noah's faith, 'condemning the world' by his obedience" },
      { r:"1 Peter 3:20", note:"eight souls saved 'through water'" },
      { r:"Matthew 24:37-39", note:"Jesus compares his coming to 'the days of Noah'" } ]}
  ]
},

/* ===== GENESIS 7 — The Flood comes ===== */
"1:7": {
  era: {
    title: "Primeval history — forty days, then a hundred fifty",
    sub: "Entry into the ark · the fountains of the deep burst open · every living thing outside the ark perishes",
    badges: ["Primeval history", "Seven pairs of clean animals", "The LORD shuts the door", "Total judgment by water"]
  },
  timeOfDay: "day",
  summary: "The LORD tells Noah to enter the ark with his household, for he alone is found righteous in this generation; he is to take seven pairs of every clean animal and a pair of each unclean animal, plus seven pairs of birds, to keep offspring alive on the earth, since in seven days rain will fall for forty days and nights. Noah, 600 years old, enters with his wife, sons, and their wives as the animals come to him in pairs, 'as God had commanded him' — and then 'the LORD shut him in.' The flood begins: on the seventeenth day of the second month, 'all the fountains of the great deep burst forth, and the windows of the heavens were opened,' and rain falls forty days and nights. The waters increase, lifting the ark above the earth; they rise until they cover even the highest mountains by more than twenty feet. Every living thing on dry land perishes — 'only Noah was left, and those with him in the ark.' The waters prevail over the earth one hundred fifty days, a period of total, sustained judgment before any recession begins.",
  focusPlace: "ararat",
  places: [
    { id:"ararat", role:"Not yet reached, but the destination this chapter's floodwaters are lifting the ark toward" },
    { id:"eden", role:"The judgment reverses Eden's original 'very good' order, undoing creation back toward the primal waters" }
  ],
  journey: [
    { from:"eden", to:"ararat", label:"The ark's floating ascent", km:900, note:"As waters rise, the ark is lifted off the ground and carried, eventually settling in the mountains of Ararat (recorded fully in ch. 8)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"The command to enter", av:"elder", desc:"The LORD tells Noah to bring his family and seven pairs of clean animals, a pair of unclean, aboard within seven days (vv. 1-4)." },
    { x:0.22, type:"object", label:"Animals come to Noah", desc:"Pairs of every kind come to Noah 'as God had commanded him' — the animals' arrival itself a small sign of divine ordering amid coming chaos (vv. 8-9)." },
    { x:0.38, type:"object", label:"'The LORD shut him in'", desc:"After the household and animals board, God himself closes the door — the last line of protection between Noah and the judgment outside (v. 16)." },
    { x:0.52, type:"object", label:"Fountains of the deep, windows of heaven", desc:"On the flood's first day, both the subterranean waters and the sky's own reservoirs are opened at once — the reversal of Genesis 1's ordered separation of waters (v. 11)." },
    { x:0.68, type:"object", label:"Waters cover the mountains", desc:"The flood rises more than twenty feet over the highest mountains, leaving nowhere for any creature to survive outside the ark (vv. 19-20)." },
    { x:0.85, type:"object", label:"'Only Noah was left'", desc:"Every land creature and person outside the ark dies; the narrator's stark summary underscores how total the judgment is (vv. 21-23)." },
    { x:0.96, type:"object", label:"One hundred fifty days", desc:"The waters prevail over the earth for a sustained 150 days before any recession begins (v. 24)." }
  ],
  environment: {
    chips: ["Seven days' warning", "Seven pairs of clean animals", "'The LORD shut him in'", "Fountains and windows opened", "Mountains submerged", "150 days of judgment"],
    text: "The chapter's language deliberately echoes and reverses Genesis 1: the ordered separation of waters above and below (Gen 1:6-8) collapses back into a single undifferentiated flood, undoing creation's structure. Only the ark — and the God who shuts its door — stands between total re-immersion in chaos and the small remnant of life preserved inside it."
  },
  objectsExtra: ["noahs-ark"],
  peopleExtra: ["noah", "shem", "ham", "japheth"],
  culture: [
    { title:"Clean and unclean animals, before the Law", icon:"🐐",
      text:"The clean/unclean distinction appears here centuries before Leviticus codifies it, implying Noah already possessed some working category for sacrifice-suitable animals — the extra clean pairs anticipate the burnt offerings of Genesis 8:20." },
    { title:"'The fountains of the great deep'", icon:"🌊",
      text:"This phrase pictures a cosmic-scale release of subterranean waters alongside torrential rain — language many read as poetic-cosmic rather than a claim about literal plate tectonics, though flood geology debates continue among readers who hold a high view of the text's historicity." },
    { title:"A global or local flood?", icon:"🗺️",
      text:"The chapter's totalizing language ('all the high mountains... were covered') has long been read literally by most interpreters, though some conservative scholars argue for a hyperbolic ancient idiom describing a regionally total but not globally total catastrophe. Both readings affirm the same theological point: total judgment on 'all flesh.'" }
  ],
  crossRefs: [
    { group:"The Flood as judgment pattern", refs:[
      { r:"2 Peter 3:5-7", note:"the world 'deluged with water and perished,' a pattern for final judgment by fire" },
      { r:"Luke 17:26-27", note:"Jesus: 'as it was in the days of Noah,' unexpected judgment" },
      { r:"1 Peter 3:20-21", note:"the Flood's water prefigures baptism" } ]},
    { group:"Shutting the door, being kept safe", refs:[
      { r:"Genesis 6:18", note:"the covenant promise that grounds this chapter's rescue" },
      { r:"Matthew 25:10", note:"a later parable's shut door, too late for the unprepared" },
      { r:"Hebrews 11:7", note:"Noah's faith 'condemned the world' by contrast" } ]}
  ]
},

/* ===== GENESIS 8 — The waters recede ===== */
"1:8": {
  era: {
    title: "Primeval history — 'God remembered Noah'",
    sub: "The ark rests on Ararat · raven and dove · the altar and the LORD's resolve",
    badges: ["Primeval history", "The ark comes to rest", "The dove and the olive leaf", "A new promise of stability"]
  },
  timeOfDay: "dawn",
  summary: "'God remembered Noah' and sends a wind over the earth; the springs of the deep and windows of heaven are closed, and the waters steadily recede. On the seventeenth day of the seventh month the ark comes to rest on the mountains of Ararat, and by the tenth month mountaintops become visible. After forty days Noah opens a window and sends out a raven, which flies back and forth, then a dove, which finds no resting place and returns. Seven days later the dove returns with a freshly plucked olive leaf — proof the waters have receded — and, sent out again after another seven days, does not return at all. Noah removes the ark's covering and sees the ground is dry; by the following month it is fully dried. God tells Noah to bring out his family and every living creature to multiply again on the earth. Noah builds an altar and offers burnt offerings of every clean animal and bird; the LORD, pleased by the aroma, resolves in his heart never again to curse the ground or destroy every living creature as he has done, and promises that seedtime and harvest, cold and heat, summer and winter, day and night will not cease as long as the earth remains.",
  focusPlace: "ararat",
  places: [
    { id:"ararat", role:"Where the ark comes to rest as the waters recede (Gen 8:4)" },
    { id:"eden", role:"The garden this new post-flood beginning implicitly echoes, as creation is effectively restarted" }
  ],
  journey: [
    { from:"eden", to:"ararat", dashed:true, label:"From lost garden to a new beginning", km:900, note:"Ararat becomes the new starting point for humanity, standing in the same typological role Eden once did." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"'God remembered Noah'", desc:"The turning point of the whole flood narrative — God acts, sending a wind, and the waters begin to recede (v. 1)." },
    { x:0.20, type:"object", label:"The ark rests on Ararat", desc:"On the seventeenth day of the seventh month, the ark settles on the mountains of Ararat as the waters continue falling (v. 4)." },
    { x:0.36, type:"object", label:"The raven, sent first", desc:"Noah sends out a raven, which simply flies back and forth rather than returning, unlike the dove that follows (v. 7)." },
    { x:0.50, type:"object", label:"The dove and the olive leaf", desc:"After finding no resting place the first time, the dove returns a week later with a fresh olive leaf — visible proof the waters have receded far enough for plant life (vv. 8-11)." },
    { x:0.64, type:"person", label:"Noah removes the covering", av:"elder", desc:"Noah looks out and sees the ground is dry, though God waits nearly two more months before commanding everyone out (vv. 13-14)." },
    { x:0.80, type:"person", label:"The altar and burnt offering", av:"elder", desc:"Noah's first act on dry ground is worship — an altar and burnt offerings from every clean animal and bird (v. 20)." },
    { x:0.94, type:"object", label:"A promise of stability", desc:"Pleased by the offering, the LORD resolves never again to curse the ground this way, promising the seasons' rhythm will not cease (vv. 21-22)." }
  ],
  environment: {
    chips: ["'God remembered Noah'", "The ark rests on Ararat", "Raven, then dove", "An olive leaf, plucked fresh", "First act ashore: an altar", "Seasons promised to continue"],
    text: "The chapter narrates a slow, careful un-flooding that mirrors creation's own patient order — wind over waters, dry ground emerging, life re-populating it. Noah's altar answers Genesis 4's failed and successful offerings with worship that this time meets full divine favor, and God's resolve toward the 'ground' quietly reverses the curse pronounced back in Genesis 3:17."
  },
  objectsExtra: ["noahs-ark", "altar"],
  peopleExtra: ["noah", "shem", "ham", "japheth"],
  culture: [
    { title:"Why a raven, then a dove?", icon:"🐦",
      text:"Ravens are scavengers, content to feed on floating carrion and in no hurry to return; doves need clean, dry footing and green food, making their return (or non-return) a more precise gauge of the earth's readiness — a detail ancient sailors and farmers would have recognized immediately." },
    { title:"Ararat in ancient geography", icon:"⛰️",
      text:"'The mountains of Ararat' names a region (ancient Urartu, in modern eastern Turkey/Armenia), not necessarily the single peak later tradition identified — the text itself is deliberately broader than the popular image of one specific mountain." },
    { title:"The 'pleasing aroma' of sacrifice", icon:"🔥",
      text:"The phrase describing God's response to Noah's offering (v. 21) becomes standard sacrificial vocabulary throughout the Law (e.g. Lev 1:9) — its first biblical use here, tied not to ritual instruction but to spontaneous worship after judgment and deliverance." }
  ],
  crossRefs: [
    { group:"A new beginning, echoing creation", refs:[
      { r:"Genesis 1:9-10", note:"dry land appearing again, as at the world's first creation" },
      { r:"Genesis 9:1", note:"the 'be fruitful and multiply' blessing renewed for Noah's family" },
      { r:"Isaiah 54:9", note:"God recalls 'the waters of Noah' as a pattern of covenant faithfulness" } ]},
    { group:"The dove and the offering, remembered", refs:[
      { r:"Matthew 3:16", note:"a dove descending at Jesus' baptism — a flood-echoing image of new creation" },
      { r:"Leviticus 1:9", note:"'a pleasing aroma to the LORD,' language rooted in Noah's altar" },
      { r:"Genesis 8:22", note:"seedtime and harvest promised without ceasing" } ]}
  ]
},

/* ===== GENESIS 9 — The covenant, the rainbow, and Noah's vineyard ===== */
"1:9": {
  era: {
    title: "Primeval history — the Noahic covenant and its sign",
    sub: "Be fruitful and multiply · the prohibition of blood and murder · the rainbow · Noah's drunkenness and Canaan's curse",
    badges: ["Primeval history", "Life for life: Gen 9:6", "The rainbow covenant", "Ham's disrespect, Canaan cursed"]
  },
  timeOfDay: "day",
  summary: "God blesses Noah and his sons, renewing the command to be fruitful and multiply, and now placing the fear of humanity on every animal, given for food alongside every green plant — except blood, which they must not eat, since it is the creature's life. Human life carries special weight: whoever sheds human blood will have his own blood shed, 'for God made man in his own image' (v. 6). God establishes his covenant with Noah, his descendants, and every living creature, promising never again to destroy the earth by flood, and sets the rainbow in the clouds as the covenant's perpetual sign. The chapter then turns personal: Noah plants a vineyard, gets drunk, and lies naked in his tent. Ham sees his father's nakedness and tells his brothers outside; Shem and Japheth walk in backward and cover Noah without looking. On waking, Noah curses Canaan (Ham's son) to servitude, and blesses Shem and Japheth, foreshadowing later relations between their descendant peoples. The chapter closes with Noah's death at 950 years, the last of the primeval patriarchs to reach such an age.",
  focusPlace: "ararat",
  places: [
    { id:"ararat", role:"Where the covenant and rainbow are given, and where Noah's household begins farming again" },
    { id:"babylon", role:"The Mesopotamian plain Noah's descendants will eventually spread into and settle (foreshadowing ch. 10-11)" }
  ],
  journey: [
    { from:"ararat", to:"babylon", dashed:true, label:"The line this chapter's blessing will follow", km:900, note:"Ham's son Canaan is cursed here; Noah's spreading descendants will settle the plains that later produce Babel and Babylon's civilizations (ch. 10-11)." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"Be fruitful, and meat now permitted", desc:"God renews the fruitfulness blessing and now permits eating animals, though not their blood (vv. 1-4)." },
    { x:0.20, type:"object", label:"'By man shall his blood be shed' (v. 6)", desc:"Human life is granted unique protection because mankind bears God's image — the Bible's foundational statement against murder (vv. 5-6)." },
    { x:0.36, type:"object", label:"The rainbow, sign of the covenant", desc:"God sets his 'bow in the clouds' as a perpetual reminder never again to flood the whole earth (vv. 12-17)." },
    { x:0.52, type:"person", label:"Noah's vineyard and drunkenness", av:"elder", desc:"Noah, now a farmer, plants a vineyard, drinks its wine, and lies uncovered and drunk in his tent (vv. 20-21)." },
    { x:0.66, type:"person", label:"Ham sees, tells his brothers", av:"elder", desc:"Ham sees his father's nakedness and reports it to Shem and Japheth rather than covering him himself (v. 22)." },
    { x:0.80, type:"person", label:"Shem and Japheth cover their father", av:"elder", desc:"Walking in backward with a garment, the two brothers cover Noah without looking at his exposure (v. 23)." },
    { x:0.94, type:"person", label:"Canaan cursed, Shem and Japheth blessed", av:"elder", desc:"On waking, Noah curses Canaan to servitude and blesses Shem's God and Japheth's expansion — the chapter's closing pronouncement (vv. 24-27)." }
  ],
  environment: {
    chips: ["Meat now permitted, blood forbidden", "Life for life — image of God", "The rainbow as covenant sign", "A vineyard, and drunkenness", "Seeing vs. covering", "A curse and two blessings"],
    text: "This chapter completes the flood narrative's theological arc: humanity is re-commissioned, given clearer moral boundaries (especially around bloodshed), and given a visible, universal sign of God's restraint. The turn to Noah's vineyard shows the same pattern as Eden — blessing followed almost immediately by human failure — reminding readers that the Flood did not eliminate sin, only its previous scale."
  },
  objectsExtra: ["rainbow"],
  peopleExtra: ["noah", "shem", "ham", "japheth", "canaan-person"],
  culture: [
    { title:"Why forbid eating blood?", icon:"🩸",
      text:"The prohibition (v. 4) treats blood as uniquely tied to life itself, a principle later codified extensively in Levitical law (Lev 17:11) and echoed even in the Jerusalem council's guidance to Gentile believers (Acts 15:20) — one of the few Noahic laws explicitly carried into the New Testament era." },
    { title:"The image of God and capital justice", icon:"⚖️",
      text:"Genesis 9:6 grounds the death penalty for murder not in social utility but in theology: taking a human life defaces something bearing God's own image. This verse has anchored centuries of Jewish and Christian legal and ethical reflection on the value of human life." },
    { title:"What was Ham's sin, exactly?", icon:"❓",
      text:"Interpreters differ over whether Ham's offense was simply seeing his father naked and gossiping about it, or something more severe implied by ancient Near Eastern euphemism ('saw the nakedness of'). Either reading explains why the curse falls specifically on Ham's son Canaan rather than on Ham himself." }
  ],
  crossRefs: [
    { group:"The rainbow and covenant faithfulness", refs:[
      { r:"Isaiah 54:9-10", note:"God recalls this covenant as a pledge of unshakable love" },
      { r:"Ezekiel 1:28", note:"a rainbow around God's glory-throne" },
      { r:"Revelation 4:3", note:"a rainbow encircling the heavenly throne" } ]},
    { group:"Bloodshed, image, and later law", refs:[
      { r:"Exodus 20:13", note:"'You shall not murder' — the commandment this chapter anticipates" },
      { r:"Acts 15:20", note:"the Jerusalem council still restricts Gentile believers from blood" },
      { r:"James 3:9", note:"cursing people made 'in the likeness of God'" } ]}
  ]
},

/* ===== GENESIS 10 — The Table of Nations ===== */
"1:10": {
  era: {
    title: "Primeval history — the Table of Nations",
    sub: "Japheth's, Ham's, and Shem's descendants · Nimrod's kingdom · nations spread and multiply",
    badges: ["Primeval history", "Seventy nations, one family", "Nimrod: mighty hunter, empire-builder", "Sets up Babel's scattering"]
  },
  timeOfDay: "day",
  summary: "This chapter maps the known world's nations back to Noah's three sons. Japheth's line produces the maritime and northern peoples — Gomer, Magog, Madai, Javan and others, scattering into 'their lands, each with his own language.' Ham's line includes Cush, Egypt, Put, and Canaan; Cush fathers Nimrod, 'a mighty hunter before the LORD,' whose kingdom begins with Babylon, Uruk, and Akkad in Shinar before he goes on to found Nineveh and other Assyrian cities. Canaan's descendants include the Jebusites, Amorites, Hivites, and other clans later dispossessed at Israel's conquest, their territory stretching toward Sodom and Gomorrah. Shem's line, given fullest attention as the ancestor of 'all the sons of Eber,' runs through Elam, Ashur, and Aram, down to Eber and his sons Peleg ('in his days the earth was divided') and Joktan, whose many sons settle the eastern hill country. The chapter closes by summarizing all these clans, languages, territories, and nations as descending 'from these... after the flood' — a genealogical bridge preparing for Babel's scattering (ch. 11) and, eventually, Abraham's call.",
  focusPlace: "babylon",
  places: [
    { id:"babylon", role:"Nimrod's kingdom begins here in Shinar, with Babylon named first among his cities (v. 10)" },
    { id:"nineveh", role:"Founded by Nimrod after he leaves Shinar for Assyria, called 'that great city' (vv. 11-12)" }
  ],
  journey: [
    { from:"babylon", to:"nineveh", label:"Nimrod's expansion into Assyria", km:400, note:"From his base in Shinar, Nimrod extends his kingdom north to found Nineveh and other Assyrian cities (Gen 10:11-12)." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"Japheth's maritime peoples", desc:"Gomer, Magog, Madai, Javan and others scatter into coastlands, 'each with his own language, by their clans, in their nations' (vv. 2-5)." },
    { x:0.22, type:"person", label:"Nimrod, mighty hunter and empire-builder", av:"warrior", desc:"Cush's son becomes 'a mighty hunter before the LORD,' founding Babylon and other Shinar cities before expanding to Assyria (vv. 8-12)." },
    { x:0.40, type:"object", label:"Canaan's clans", desc:"Canaan fathers Sidon, Heth, and the peoples later displaced at Israel's conquest — Jebusites, Amorites, Hivites among them (vv. 15-19)." },
    { x:0.58, type:"person", label:"Shem, ancestor of Eber", av:"elder", desc:"Given fullest treatment as ancestor of 'all the children of Eber,' Shem's line runs through Elam, Ashur, Arphaxad, and Aram (vv. 21-23)." },
    { x:0.75, type:"person", label:"Peleg — 'in his days the earth was divided'", av:"elder", desc:"Eber's son is named for an event the text does not fully explain here, traditionally linked to Babel's language division in the very next chapter (v. 25)." },
    { x:0.90, type:"object", label:"Seventy nations, one family", desc:"The chapter's closing summary ties the whole known world's nations back to Noah's three sons 'after the flood' (v. 32)." }
  ],
  environment: {
    chips: ["Three sons, seventy nations", "Nimrod: hunter, empire-builder", "Shinar to Assyria", "Canaan's clans, later dispossessed", "Eber, Peleg, and 'the earth divided'", "One family, many languages"],
    text: "The Table of Nations reads almost like an ancient ethnographic map, situating every people group its Israelite audience would recognize within a single family tree descending from Noah. Its geography ranges from the Aegean coastlands (Javan) to Mesopotamia (Shinar, Asshur) to Canaan itself, deliberately preparing readers to recognize Canaan's later inhabitants, Assyria's rise, and Babylon's eventual empire as all branches of one traceable family."
  },
  objectsExtra: [],
  peopleExtra: ["shem", "ham", "japheth", "nimrod", "canaan-person", "peleg"],
  culture: [
    { title:"A genealogy as ethnography", icon:"🗺️",
      text:"Unlike Genesis 5's strict individual genealogy, chapter 10 mixes individuals with what are clearly nation- or people-group names (Mizraim = Egypt, Kittim = Cyprus) — a common ancient Near Eastern convention for expressing political and ethnic relationships as family ties." },
    { title:"Nimrod's reputation", icon:"🏹",
      text:"'Like Nimrod, a mighty hunter before the LORD' became proverbial (v. 9); later Jewish tradition often reads him more negatively, as a tyrant-founder of Babel's rebellion, reading his empire-building as domineering rather than merely impressive." },
    { title:"Why does Shem get the most space?", icon:"📖",
      text:"The extra detail on Shem's line (vv. 21-31), especially Eber and his sons, sets up the genealogy that will carry directly into Genesis 11's closing verses and ultimately to Abraham — the Table of Nations is universal in scope but narrows its camera toward the coming covenant line." }
  ],
  crossRefs: [
    { group:"Nimrod, Babel, and Assyria's later shadow", refs:[
      { r:"Genesis 11:1-9", note:"the tower and city Nimrod's Shinar kingdom sets the stage for" },
      { r:"Micah 5:6", note:"'the land of Nimrod' used as a byword for Assyria" },
      { r:"Jonah 1:2; 3:3", note:"Nineveh, Nimrod's city, later the target of Jonah's mission" } ]},
    { group:"One family, all nations", refs:[
      { r:"Acts 17:26", note:"Paul: God 'made from one man every nation of mankind'" },
      { r:"Genesis 12:3", note:"Abraham's call promises blessing to 'all the families of the earth'" },
      { r:"Revelation 7:9", note:"a multitude from every nation gathered before the throne" } ]}
  ]
},

/* ===== GENESIS 11 — Babel, and Abraham's ancestors ===== */
"1:11": {
  era: {
    title: "Primeval history — Babel's tower, and the road to Abraham",
    sub: "One language, one rebellion · the LORD confuses speech and scatters the nations · Shem's genealogy to Terah",
    badges: ["Primeval history", "Babel: 'confusion'", "Language scattered, not perfected", "Bridges to Abraham's call"]
  },
  timeOfDay: "day",
  summary: "The whole earth still shares one language. Migrating people settle on a plain in Shinar and resolve to build a city and a tower 'with its top in the heavens,' explicitly to 'make a name for ourselves' and avoid being scattered. The LORD comes down to look at what they are building and observes that, united by one language, nothing they set out to do will be impossible for them — so he confuses their speech and scatters them across the earth, halting the project; the place is named Babel, because there the LORD 'confused' (balal) the language of the whole earth. The chapter then pivots to genealogy: from Shem down through Arphaxad, Shelah, Eber, Peleg, Reu, Serug, and Nahor to Terah, each generation's lifespan given in the same formula as chapter 5, though the numbers shrink steadily compared to the pre-flood patriarchs. Terah fathers Abram, Nahor, and Haran; Haran dies young in Ur, leaving his son Lot; Abram marries the childless Sarai. Terah sets out from Ur toward Canaan but settles instead in Haran, where he eventually dies — leaving the narrative poised for God's call to Abram in the next chapter.",
  focusPlace: "babylon",
  places: [
    { id:"babylon", role:"The plain of Shinar where the city and tower are built, and where the LORD confuses the builders' language (vv. 1-9)" },
    { id:"ur", role:"Where Terah's family originates and where Haran dies, before the family sets out (vv. 28, 31)" },
    { id:"haran", role:"Where Terah's family settles instead of continuing to Canaan, and where Terah dies (v. 32)" }
  ],
  journey: [
    { from:"ur", to:"haran", label:"Terah's incomplete journey toward Canaan", km:960, note:"Terah sets out from Ur of the Chaldeans intending to reach Canaan but stops and settles in Haran instead, dying there (v. 31-32)." },
    { from:"babylon", to:"ur", dashed:true, label:"Shinar's civilization, and Abram's origin", km:200, note:"Babel's plain in Shinar and Ur of the Chaldeans both sit within the same Mesopotamian world the covenant story is about to leave behind." }
  ],
  hotspots: [
    { x:0.05, type:"object", label:"One language, a plain in Shinar", desc:"Migrating settlers find a plain in Shinar and decide to build with brick and tar rather than stone and mortar (vv. 1-3)." },
    { x:0.18, type:"object", label:"'A tower with its top in the heavens'", desc:"Their stated goal is to make a name for themselves and avoid being scattered — the very outcome that follows (v. 4)." },
    { x:0.32, type:"object", label:"The LORD comes down to see", desc:"God observes that unified language gives the builders unlimited potential for whatever they resolve to do next (vv. 5-6)." },
    { x:0.44, type:"object", label:"Language confused, the builders scattered", desc:"'Let us go down and there confuse their language' — the project halts as communication breaks down and people disperse (vv. 7-8)." },
    { x:0.55, type:"object", label:"Babel: a name meaning 'confusion'", desc:"The text explains the name as wordplay on Hebrew balal, 'to confuse' — a deliberate irony against the city's own ambition to 'make a name' (v. 9)." },
    { x:0.68, type:"person", label:"Shem to Eber to Peleg", av:"elder", desc:"The genealogy resumes chapter 10's line in fuller detail, tracking shrinking lifespans generation by generation (vv. 10-19)." },
    { x:0.82, type:"person", label:"Terah's family, and Haran's early death", av:"elder", desc:"Terah fathers Abram, Nahor, and Haran; Haran dies in Ur, leaving his son Lot fatherless (vv. 26-28)." },
    { x:0.95, type:"person", label:"Toward Canaan, but settling in Haran", av:"elder", desc:"Terah's family sets out from Ur for Canaan but stops in Haran, where Terah dies — poised for God's call to Abram (vv. 31-32)." }
  ],
  environment: {
    chips: ["One language, one ambition", "Brick for stone, tar for mortar", "'The LORD came down to see'", "Babel = confusion, not blessing", "A genealogy shrinking in years", "Ur to Haran, not yet Canaan"],
    text: "Babel closes the primeval history with humanity's collective ambition meeting swift divine correction, echoing Eden's 'you will be like God' temptation on a civic scale. The chapter's back half quietly resets the narrative's focus from all nations to one family, tracing Shem's line to Terah so the very next chapter can begin with God's specific call to a specific man in a specific place — a hinge from universal history into covenant history."
  },
  objectsExtra: ["tower-of-babel"],
  peopleExtra: ["shem", "peleg", "terah"],
  culture: [
    { title:"Ziggurats and 'a tower to heaven'", icon:"🗼",
      text:"Mesopotamian cities built stepped temple-towers (ziggurats) meant to bridge heaven and earth, often inscribed with claims that their tops reached the heavens — language Genesis 11:4 appears to echo and mock, portraying such ambition as futile self-exaltation rather than genuine access to God." },
    { title:"Babel and Babylon — the same name", icon:"🏛️",
      text:"'Babel' and 'Babylon' translate the same Hebrew word; this chapter's account of proud, God-defying ambition sets a pattern the rest of Scripture returns to whenever Babylon reappears as a symbol of human empire opposed to God (Isaiah, Daniel, Revelation)." },
    { title:"Why does the genealogy's math shrink?", icon:"📉",
      text:"Post-flood lifespans in this genealogy drop sharply compared to Genesis 5's antediluvian figures (from centuries near a millennium down toward a few hundred years), a trend scholars read either as literal decline in human longevity after the Flood or as a literary signal of the world's changed conditions." }
  ],
  crossRefs: [
    { group:"Babel's pride, and later judgment on empire", refs:[
      { r:"Isaiah 14:12-14", note:"a proud ruler's boast to 'ascend to the heavens,' echoing Babel's ambition" },
      { r:"Daniel 4:30", note:"Nebuchadnezzar's boast over 'Babylon that I have built,' answered by judgment" },
      { r:"Revelation 18:2", note:"'Babylon the great is fallen' — Babel's ambition finally undone for good" } ]},
    { group:"Scattered languages, later reversed", refs:[
      { r:"Acts 2:1-11", note:"Pentecost's many tongues understood as one message — often read as Babel's reversal" },
      { r:"Zephaniah 3:9", note:"a future promise of 'pure speech' restored to the peoples" },
      { r:"Genesis 12:1-3", note:"God's call to Abram immediately follows, narrowing from all nations to one covenant family" } ]}
  ]
},

/* ===== GENESIS 12 — Abram's call, and a detour to Egypt ===== */
"1:12": {
  era: {
    title: "ca. 2091 BC — Abram called out of Haran",
    sub: "Middle Bronze Age · the covenant call · a famine detour into Egypt",
    badges: ["Middle Bronze Age", "Abrahamic covenant begins", "First altar in Canaan", "Sarai in Pharaoh's house"]
  },
  timeOfDay: "day",
  summary: "The LORD tells Abram, seventy-five, to leave his country, kin, and father's house for a land he will only be shown, promising to make him a great nation and bless 'all the families of the earth' through him. Abram obeys, taking Sarai, Lot, and their household from Haran into Canaan, stopping first at Shechem, where God appears and promises the land to his offspring, then at Bethel, where he builds an altar and calls on the LORD's name. A famine drives him on to Egypt, where — fearing Sarai's beauty will get him killed — Abram has her pose as his sister. Pharaoh takes her into his house and enriches Abram with livestock and servants, until the LORD strikes Pharaoh's household with plagues. Learning the truth, Pharaoh angrily returns Sarai and expels them both from Egypt.",
  focusPlace: "shechem",
  places: [
    { id:"haran", role:"Where Abram receives God's call and sets out (vv. 1, 4)" },
    { id:"shechem", role:"First stop in Canaan, where God first promises the land (vv. 6-7)" },
    { id:"bethel", role:"Where Abram pitches his tent and builds an altar (vv. 8)" },
    { id:"egypt", role:"Famine refuge where Sarai is taken into Pharaoh's house (vv. 10-20)" }
  ],
  journey: [
    { from:"haran", to:"shechem", label:"Abram's call to Canaan", km:640, note:"Abram leaves Haran at 75 with Sarai, Lot, and all their household, arriving at Shechem's oak of Moreh (vv. 4-6)." },
    { from:"bethel", to:"egypt", label:"Famine drives Abram south", km:400, note:"A severe famine sends Abram down into Egypt, where the deception over Sarai unfolds (vv. 10-20)." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"'Go from your country' — the call", av:"elder",
      desc:"God's command comes with no destination named yet, only a promise: a great nation, a great name, and blessing flowing outward to 'all the families of the earth' (vv. 1-3)." },
    { x:0.28, type:"object", label:"An altar at Shechem, another at Bethel",
      desc:"At Shechem the LORD promises the land to Abram's offspring; at Bethel, between Bethel and Ai, Abram builds again and calls on the LORD's name (vv. 7-8)." },
    { x:0.50, type:"person", label:"'Say you are my sister'", av:"woman",
      desc:"Fearing for his life over Sarai's beauty, Abram asks her to pose as his sister — a half-truth (she is his half-sister) that nearly costs Pharaoh his household (vv. 11-13)." },
    { x:0.68, type:"person", label:"Sarai taken into Pharaoh's house", av:"king",
      desc:"Pharaoh's officials praise Sarai to him; she is taken in, and Abram is paid in sheep, oxen, donkeys, servants, and camels (vv. 14-16)." },
    { x:0.85, type:"object", label:"Plagues, and an expulsion",
      desc:"The LORD afflicts Pharaoh's house; confronting Abram, Pharaoh returns Sarai and has them escorted out of Egypt with all they own (vv. 17-20)." }
  ],
  environment: {
    chips: ["A call with no map", "Oak of Moreh, Shechem", "Altar between Bethel and Ai", "Famine drives migration south", "Nile-valley wealth: flocks, camels, servants", "A half-truth, and its cost"],
    text: "Abram's route follows the classic north-south ridge road through Canaan's hill country, the same corridor caravans and armies used for centuries, before a Negev famine — an ordinary hazard of this semi-arid land — pushes him further south into Egypt's more reliable Nile-fed agriculture. Wife-sister ruses, and the wealth foreign potentates paid for a beautiful woman, appear elsewhere in patriarchal narrative and in comparable ancient Near Eastern custom, though Genesis frames this one as endangering the very promise just given."
  },
  objectsExtra: ["altar", "camel"],
  peopleExtra: ["lot"],
  culture: [
    { title:"Leaving Ur and Haran — why it mattered", icon:"🏛️",
      text:"Both Ur and Haran were centers of moon-god worship in the ancient Near East; Abram's call meant abandoning not just geography and family but an entire religious world for an unseen God and an unnamed destination — a test of trust the text underlines by delaying the land's name until Abram is already moving." },
    { title:"The wife-sister motif", icon:"👰",
      text:"This is the first of three similar episodes (again in Gen 20 and 26), where a patriarch's wife is passed off as a sister before a foreign ruler. Whatever the precise customary background, Genesis consistently shows God protecting the promise despite the patriarchs' fear-driven scheming, not because of it." },
    { title:"Altars as claim-markers", icon:"⛰️",
      text:"Building an altar at each stop was more than worship — in the ancient world it functioned as a public claim on the land and a permanent memorial of divine encounter, planting Abram's presence at Shechem and Bethel long before he owned a single field there." }
  ],
  crossRefs: [
    { group:"The call, echoed forward", refs:[
      { r:"Hebrews 11:8", note:"'by faith Abraham obeyed... not knowing where he was going'" },
      { r:"Acts 7:2-4", note:"Stephen retells the call as beginning even earlier, in Mesopotamia" },
      { r:"Galatians 3:8", note:"Paul reads v. 3's blessing as the gospel preached in advance to Abraham" } ]},
    { group:"The wife-sister pattern repeated", refs:[
      { r:"Genesis 20:1-18", note:"the same ruse played on Abimelech of Gerar" },
      { r:"Genesis 26:6-11", note:"Isaac repeats his father's exact deception with Rebekah" },
      { r:"Psalm 105:12-15", note:"'he allowed no one to oppress them... touch not my anointed'" } ]}
  ]
},

/* ===== GENESIS 13 — Abram and Lot separate ===== */
"1:13": {
  era: {
    title: "ca. 2090 BC — Abram and Lot part ways",
    sub: "Middle Bronze Age · the two households outgrow the land · Lot chooses the Jordan plain",
    badges: ["Middle Bronze Age", "Peaceable separation", "Land promise renewed", "Sodom's wickedness introduced"]
  },
  timeOfDay: "day",
  summary: "Abram returns from Egypt to the Negev and then back to Bethel, rich now in livestock, silver, and gold, retracing his steps to the altar he first built there. His herdsmen and Lot's quarrel over grazing land, since both households have grown too large to share the range, so Abram proposes they separate and generously lets Lot choose first. Lot looks out over the well-watered Jordan plain, 'like the garden of the LORD,' and pitches his tents toward Sodom — whose men, the narrator notes, 'were wicked, great sinners against the LORD.' After Lot departs, God tells Abram to look in every direction: all the land he sees will belong to his offspring, who will be as countless as the dust of the earth. Abram moves his tents to the oaks of Mamre at Hebron and builds another altar there.",
  focusPlace: "hebron",
  places: [
    { id:"bethel", role:"Abram's return stop, back to his first altar (vv. 3-4)" },
    { id:"sodom", role:"The plain city Lot chooses and moves toward (vv. 10-12)" },
    { id:"hebron", role:"Where Abram settles at Mamre's oaks after the separation (v. 18)" }
  ],
  journey: [
    { from:"bethel", to:"hebron", label:"Abram settles at Mamre", km:35, note:"After Lot departs for the plain, Abram moves his tents south to the oaks of Mamre near Hebron and builds an altar (v. 18)." },
    { from:"bethel", to:"sodom", dashed:true, label:"Lot's choice", km:50, note:"Lot chooses the fertile Jordan plain and pitches his tents 'as far as Sodom,' drawn by its lush appeal despite the city's reputation (vv. 10-12)." }
  ],
  hotspots: [
    { x:0.10, type:"object", label:"Rich out of Egypt", desc:"Abram returns from Egypt heavy with livestock, silver, and gold, retracing his path to Bethel's altar (vv. 1-4)." },
    { x:0.28, type:"person", label:"Strife between the herdsmen", av:"shepherd", desc:"Abram's and Lot's flocks have both grown too large for the land to support them together, and their herdsmen quarrel over grazing and water (vv. 5-7)." },
    { x:0.46, type:"person", label:"'Let there be no strife between us'", av:"elder", desc:"Abram, the elder party, generously offers Lot first choice of the land, refusing to let kinship curdle into conflict (vv. 8-9)." },
    { x:0.62, type:"person", label:"Lot chooses the plain", av:"elder", desc:"Lot surveys the well-watered Jordan valley 'like the garden of the LORD, like the land of Egypt,' and moves his tents toward wicked Sodom (vv. 10-13)." },
    { x:0.82, type:"object", label:"'Look... all the land you see'", desc:"After Lot leaves, God renews the covenant promise to Abram in full: land in every direction and offspring 'like the dust of the earth' (vv. 14-17)." }
  ],
  environment: {
    chips: ["Negev famine behind them", "Herds too large to share range", "Jordan plain, lush before judgment", "Sodom's reputation precedes it", "Oaks of Mamre, Hebron", "Land promise renewed in full"],
    text: "The central hill country simply could not support two large pastoral operations sharing wells and pasture, a practical pressure familiar throughout the patriarchal narratives. Lot's choice trades long-term security for immediate fertility, settling near a city plain later remembered chiefly for its destruction, while Abram's move to Hebron's oaks at Mamre — one of the region's most reliable water and grazing zones — becomes his most enduring base for the rest of the story."
  },
  objectsExtra: ["altar"],
  peopleExtra: ["lot"],
  culture: [
    { title:"Why herdsmen quarrel", icon:"🐑",
      text:"Pastoral economies in the ancient hill country depended on limited wells and seasonal grazing; two households of Abram's and Lot's scale (v. 6 says the land 'could not support both') routinely produced exactly this kind of conflict, which is why peaceful separation, rather than combat, was the wiser and rarer choice." },
    { title:"'Like the garden of the LORD'", icon:"🌿",
      text:"Before the Jordan region's destruction, the text explicitly compares it to Eden and to Egypt's irrigated fertility (v. 10) — establishing just how much beauty and abundance Lot's choice represents, which makes the later judgment on Sodom read as a genuine loss, not an obvious trap avoided." },
    { title:"Hebron and the oaks of Mamre", icon:"🌳",
      text:"Mamre, near Hebron, becomes Abraham's most frequent dwelling place across Genesis — the site of the three visitors (ch. 18) and near the cave of Machpelah he later buys as a family tomb (ch. 23), anchoring the promise in a specific, remembered patch of ground." }
  ],
  crossRefs: [
    { group:"The land promise, expanding", refs:[
      { r:"Genesis 12:7", note:"the first, narrower promise at Shechem, now widened to every direction" },
      { r:"Genesis 15:18-21", note:"the promise given fixed borders in the covenant of the pieces" },
      { r:"Genesis 28:13-14", note:"the same promise repeated to Jacob at Bethel" } ]},
    { group:"Sodom's wickedness, foreshadowed", refs:[
      { r:"Genesis 18:20-21", note:"the LORD's own verdict on the outcry against Sodom" },
      { r:"Genesis 19:4-9", note:"the wickedness this chapter names in advance plays out at Lot's door" },
      { r:"Ezekiel 16:49-50", note:"Sodom's sin defined as pride, excess, and neglect of the poor" } ]}
  ]
},

/* ===== GENESIS 14 — The war of the kings, and Melchizedek ===== */
"1:14": {
  era: {
    title: "ca. 2089 BC — Abram's rescue of Lot, and Melchizedek's blessing",
    sub: "Middle Bronze Age · a coalition war among Canaanite and Mesopotamian kings · Abram's only recorded battle",
    badges: ["Middle Bronze Age", "Four kings vs. five", "Abram the rescuer-warrior", "Melchizedek: king and priest"]
  },
  timeOfDay: "day",
  summary: "Four eastern kings led by Chedorlaomer of Elam crush a rebellion by five Jordan-plain kings, including Sodom and Gomorrah, plundering the cities and carrying off captives and goods — among them Lot, now living in Sodom. Hearing this, Abram arms 318 trained men born in his household, pursues the coalition north past Dan, and routs them by night near Damascus, recovering Lot, the women, and all the goods. Returning victorious, Abram is met by two kings: the king of Sodom, offering him the plunder while keeping the people, and Melchizedek, king of Salem and priest of God Most High, who brings out bread and wine and blesses Abram. Abram gives Melchizedek a tenth of everything, then refuses any reward from the king of Sodom beyond his men's shares, so that no one could say Sodom's king had made Abram rich.",
  focusPlace: "jerusalem",
  places: [
    { id:"sodom", role:"Home city of Lot, plundered by the eastern coalition (vv. 11-12)" },
    { id:"dan", role:"Northern point of Abram's pursuit of the captors (v. 14)" },
    { id:"jerusalem", role:"Salem, where king-priest Melchizedek meets and blesses Abram (vv. 18-20)" },
    { id:"hebron", role:"Abram's base at Mamre before the campaign begins (v. 13)" }
  ],
  journey: [
    { from:"hebron", to:"dan", label:"Abram's rescue pursuit", km:190, note:"Abram leads 318 trained men north in pursuit of the four kings, catching and routing them near Dan and pursuing further to Hobah near Damascus (vv. 14-15)." },
    { from:"dan", to:"jerusalem", label:"Return, and Melchizedek's blessing", km:170, note:"On his way back with the recovered captives and goods, Abram is met in the King's Valley by the kings of Sodom and Salem (vv. 17-20)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Chedorlaomer's coalition crushes the rebels", av:"king",
      desc:"Four kings led by Chedorlaomer defeat five Canaanite kings who had rebelled after twelve years of vassalage, plundering Sodom and Gomorrah (vv. 1-11)." },
    { x:0.22, type:"person", label:"Lot taken captive", av:"elder",
      desc:"Living in Sodom, Lot and his goods are swept up in the plunder — the news that reaches Abram by a fugitive (vv. 12-13)." },
    { x:0.42, type:"person", label:"318 men, and a night raid", av:"warrior",
      desc:"Abram arms his household-born fighting men, allies with local chiefs, and divides his force for a night attack that routs the coalition (vv. 14-16)." },
    { x:0.62, type:"person", label:"Melchizedek's bread, wine, and blessing", av:"priest",
      desc:"King of Salem and priest of God Most High, Melchizedek blesses Abram in God's name; Abram in turn gives him a tenth of all the recovered goods (vv. 18-20)." },
    { x:0.80, type:"person", label:"The king of Sodom's offer, refused", av:"king",
      desc:"Sodom's king asks only for his people back, offering Abram the goods; Abram swears he will take nothing, 'lest you should say, I have made Abram rich'' (vv. 21-24)." }
  ],
  environment: {
    chips: ["A coalition war of vassal kings", "Household-born fighters, not mercenaries", "A night raid near Damascus", "King's Valley meeting", "Bread, wine, and a tithe", "No reward taken from Sodom"],
    text: "This chapter's geography spans from the Dead Sea plain to Dan in the far north and on toward Damascus — an unusually long-range campaign for a single pastoral family chief, underlining how seriously Abram treated his covenant obligation to family. The meeting afterward, in the King's Valley near later Jerusalem, sets two very different rulers side by side: one offering wealth for compliance, the other offering blessing for nothing at all."
  },
  objectsExtra: ["sword", "armor"],
  peopleExtra: ["lot", "melchizedek", "chedorlaomer"],
  culture: [
    { title:"A four-king, five-king world", icon:"⚔️",
      text:"The chapter reflects the real political texture of Middle Bronze Age Canaan and Mesopotamia: small city-kings under larger regional overlords, prone to periodic rebellion and punitive campaigns exactly like the one described, long before Israel existed as a nation." },
    { title:"Melchizedek: priest before Levi", icon:"👑",
      text:"Melchizedek appears with no genealogy, predating the Aaronic priesthood by centuries; Psalm 110:4 and Hebrews 5-7 later single out this 'priesthood after the order of Melchizedek' — kingly and priestly together, without recorded beginning or end — as a type of Christ's own priesthood." },
    { title:"The first tithe", icon:"💰",
      text:"Abram's tenth to Melchizedek (v. 20) is the Bible's first recorded tithe, given voluntarily to a priest-king rather than commanded by law — a detail Hebrews later leans on to argue Melchizedek's priesthood outranks Levi's, since Levi himself was, in a sense, still in Abraham's loins." }
  ],
  crossRefs: [
    { group:"Melchizedek's priesthood, later magnified", refs:[
      { r:"Psalm 110:4", note:"'You are a priest forever after the order of Melchizedek'" },
      { r:"Hebrews 7:1-3", note:"Melchizedek as a type of the Son of God, priest without beginning or end of days" },
      { r:"Hebrews 7:4-10", note:"the tithe's argument: Levi 'paid tithes' through Abraham" } ]},
    { group:"Abram the warrior, and Sodom's fate to come", refs:[
      { r:"Genesis 15:1", note:"'Fear not, Abram, I am your shield' — God's word right after this battle" },
      { r:"Genesis 18:20-21", note:"the same Sodom whose king Abram just refused, soon judged" },
      { r:"Hebrews 11:33-34", note:"faith that 'became mighty in war' listed among the patriarchs' deeds" } ]}
  ]
},

/* ===== GENESIS 15 — The covenant of the pieces ===== */
"1:15": {
  era: {
    title: "ca. 2088 BC — the covenant of the pieces",
    sub: "Middle Bronze Age · a childless man promised uncountable offspring · a self-maledictory oath, and a 400-year prophecy",
    badges: ["Middle Bronze Age", "Faith counted as righteousness", "A covenant God alone walks through", "Land borders fixed: Egypt to Euphrates"]
  },
  timeOfDay: "night",
  summary: "After the battle, the LORD comes to Abram in a vision: 'Fear not, Abram, I am your shield; your reward shall be very great.' Abram objects that he remains childless, his heir only a servant, Eliezer of Damascus — so God takes him outside and tells him to count the stars, if he can, promising offspring just as numerous. Abram believes the LORD, 'and he counted it to him as righteousness.' Asked how he can know he will possess the land, Abram is told to bring specific animals, cut them in half, and lay the halves opposite each other. As the sun sets, a deep, dreadful darkness falls on Abram, and God foretells four hundred years of slavery and affliction for his offspring in a foreign land, followed by judgment on their oppressors and a return with great possessions. Then, after dark, a smoking fire pot and flaming torch pass alone between the pieces, and the LORD cuts a covenant naming the land's exact borders, from Egypt's river to the Euphrates.",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"Where Abram receives the vision and the covenant is cut (implied setting near Mamre)" },
    { id:"egypt", role:"Named as both the covenant's southern border and the land of 400 years' future bondage (vv. 13, 18)" }
  ],
  journey: [
    { from:"hebron", to:"egypt", dashed:true, label:"A 400-year prophecy, cast forward", km:400, note:"No one travels in this chapter; the line marks God's forecast that Abram's offspring will be sojourners and slaves in a foreign land for four centuries before returning (vv. 13-16)." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"'I am your shield; your reward shall be very great'", av:"elder", desc:"God reassures the victorious but childless Abram, prompting his honest complaint that Eliezer of Damascus, a servant, remains his only heir (vv. 1-3)." },
    { x:0.24, type:"object", label:"'Count the stars, if you are able'", desc:"God promises offspring as numerous as the stars; Abram believes, and it is counted to him as righteousness — the Bible's classic statement of faith reckoned as righteousness (vv. 4-6)." },
    { x:0.42, type:"object", label:"Halved animals, laid opposite each other", desc:"At God's instruction Abram cuts a heifer, goat, and ram in half and arranges the pieces in two rows, keeping the birds whole (vv. 9-11)." },
    { x:0.58, type:"person", label:"A deep, dreadful darkness", av:"elder", desc:"As the sun sets, a terrifying darkness falls on Abram, and God foretells 400 years of affliction for his offspring in a foreign land, then judgment on their oppressors (vv. 12-16)." },
    { x:0.78, type:"object", label:"Smoking pot and flaming torch pass through alone", desc:"After dark, a smoking fire pot and blazing torch — symbols of God's own presence — pass between the halved pieces without Abram, sealing a covenant he takes no active part in cutting (v. 17)." },
    { x:0.92, type:"object", label:"Borders fixed: Egypt's river to the Euphrates", desc:"The LORD names the covenant's territory outright, listing ten peoples whose land will become Abram's offspring's own (vv. 18-21)." }
  ],
  environment: {
    chips: ["A vision at night", "Stars as a measure of descendants", "Halved animals, a covenant ritual", "A 400-year prophecy given in advance", "God alone passes between the pieces", "Egypt to Euphrates: borders fixed"],
    text: "The ritual of walking between halved animals was a known ancient Near Eastern practice for sealing solemn treaties, in which both parties would normally pass through together, invoking a curse of being cut apart like the animals if they broke the oath. Here only the smoking pot and torch — representing God — pass through, making this one-sidedly binding: God obligates only himself to keep the promise, regardless of Abram's future faithfulness."
  },
  objectsExtra: ["covenant-pieces"],
  peopleExtra: [],
  culture: [
    { title:"Faith counted as righteousness", icon:"⭐",
      text:"Verse 6 becomes one of Scripture's most quoted lines: Paul (Rom 4:3, 9; Gal 3:6) and James (Jas 2:23) both build major arguments on it, agreeing that Abram was declared righteous by trusting God's promise, before circumcision (ch. 17) or any law existed to obey." },
    { title:"Cutting a covenant, ancient Near Eastern style", icon:"🐐",
      text:"Treaty rituals across the ancient Near East, attested in Mari and later Assyrian texts, sometimes involved halving animals as a self-curse: 'may this happen to whoever breaks this oath.' Genesis 15 uses the same form but inverts the normal risk, since only God — not Abram — walks through." },
    { title:"Why 400 years?", icon:"⏳",
      text:"The prophecy's number is echoed almost exactly in Exodus 12:40-41's count of the sojourn in Egypt and in Paul's own arithmetic in Galatians 3:17, tying this chapter directly forward to the Exodus and to the giving of the law centuries later." }
  ],
  crossRefs: [
    { group:"Faith reckoned as righteousness, cited forward", refs:[
      { r:"Romans 4:3, 9-11", note:"Paul's central proof-text for justification by faith apart from works" },
      { r:"Galatians 3:6-9", note:"Abraham's faith as the pattern for all who believe" },
      { r:"James 2:21-23", note:"faith and works read together through the same verse" } ]},
    { group:"The 400 years, fulfilled", refs:[
      { r:"Exodus 12:40-41", note:"the sojourn in Egypt, ending 'on that very day'" },
      { r:"Acts 7:6-7", note:"Stephen retells the prophecy before the Sanhedrin" },
      { r:"Galatians 3:16-17", note:"Paul counts 430 years from this promise to the law at Sinai" } ]}
  ]
},

/* ===== GENESIS 16 — Hagar and Ishmael ===== */
"1:16": {
  era: {
    title: "ca. 2081 BC — Hagar's flight, and Ishmael's birth",
    sub: "Middle Bronze Age · a plan to force the promise · the first person in Scripture to name God",
    badges: ["Middle Bronze Age", "A human shortcut to the promise", "Hagar names God", "Ishmael born, not yet the heir"]
  },
  timeOfDay: "day",
  summary: "Ten years into the promise, still childless, Sarai gives Abram her Egyptian servant Hagar as a surrogate wife — a customary but ultimately faithless shortcut to the heir God had promised. Hagar conceives and begins to despise her mistress; Sarai, blaming Abram, mistreats her so harshly that Hagar flees into the wilderness toward Shur. There, by a spring on the road, the angel of the LORD finds her, tells her to return and submit to Sarai, and promises that her son — to be named Ishmael, 'God hears' — will father a multitude too numerous to count, though he will be 'a wild donkey of a man' at odds with everyone. Hagar responds by naming the LORD 'El Roi,' the God who sees her, and calls the well Beer-lahai-roi. She returns and bears Ishmael; Abram is eighty-six years old.",
  focusPlace: "beerlahairoi",
  places: [
    { id:"hebron", role:"Abram and Sarai's household, where the surrogacy plan begins (vv. 1-3)" },
    { id:"beerlahairoi", role:"The desert well where the angel finds the fleeing Hagar (vv. 7, 14)" }
  ],
  journey: [
    { from:"hebron", to:"beerlahairoi", label:"Hagar's flight into the wilderness", km:80, note:"Mistreated by Sarai, the pregnant Hagar flees south toward Shur and is found by a spring on the road (vv. 6-7)." },
    { from:"beerlahairoi", to:"hebron", dashed:true, label:"Hagar's return", km:80, note:"On the angel's instruction, Hagar returns to Sarai's household to bear her son there (v. 9)." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Sarai's plan: a servant as surrogate", av:"woman", desc:"After ten fruitless years in Canaan, Sarai gives Hagar to Abram to build a family through her — a customary practice of the time, but not God's stated promise (vv. 1-3)." },
    { x:0.28, type:"person", label:"Contempt, then harsh treatment", av:"woman", desc:"Once pregnant, Hagar despises Sarai; Sarai blames Abram and deals with Hagar so harshly that she flees (vv. 4-6)." },
    { x:0.48, type:"person", label:"The angel of the LORD finds her", av:"woman", desc:"By a spring on the way to Shur, the angel meets the fleeing Hagar, telling her to return and submit, and promising her son countless descendants (vv. 7-10)." },
    { x:0.66, type:"object", label:"Ishmael: 'God hears'", desc:"The angel names the unborn child Ishmael, 'because the LORD has listened to your affliction,' and describes him as a free, contentious 'wild donkey of a man' (vv. 11-12)." },
    { x:0.84, type:"object", label:"'You are a God of seeing' — Beer-lahai-roi", desc:"Hagar becomes the first person in Scripture to name God directly — El Roi — and the well is remembered as Beer-lahai-roi, 'well of the Living One who sees me' (vv. 13-14)." }
  ],
  environment: {
    chips: ["Ten years of waiting", "A customary surrogacy, humanly reasoned", "Flight toward Shur", "A wilderness spring", "Hagar names God first", "Ishmael: 'God hears'"],
    text: "The road to Shur ran through the arid Negev/Sinai borderland toward Egypt — Hagar's likely homeward direction, since she was Egyptian by birth. Wells in this landscape were rare, vital landmarks, which is exactly why one becomes the site of both her rescue and its own lasting name. The episode's ancient Near Eastern surrogacy custom (a barren wife providing a servant to bear an heir) is attested in Nuzi and Mesopotamian legal texts, showing Sarai's plan was culturally unremarkable even as Genesis frames it as a detour from faith."
  },
  objectsExtra: ["well"],
  peopleExtra: ["hagar", "ishmael"],
  culture: [
    { title:"Surrogacy as ancient custom, not divine command", icon:"📜",
      text:"Ancient Near Eastern marriage contracts (notably from Nuzi) explicitly allow a barren wife to give her servant to her husband to produce an heir credited to the wife — exactly Sarai's plan. Genesis records the custom accurately while quietly showing its human cost." },
    { title:"El Roi — the God who sees", icon:"👁️",
      text:"Hagar, a foreign servant with no status, becomes the first person in the Bible to give God a name, based purely on personal experience of being seen in her distress — a strikingly intimate theological moment attributed to the story's most marginalized character." },
    { title:"Ishmael's future, described in advance", icon:"🏹",
      text:"The angel's description of Ishmael as free-roaming and often 'at odds with' his kin is later read by many as anticipating the fiercely independent desert-tribal culture historically associated with his Arab descendants, rather than as a moral verdict on the boy himself." }
  ],
  crossRefs: [
    { group:"Hagar and Ishmael, later theology", refs:[
      { r:"Galatians 4:22-26", note:"Paul allegorizes Hagar and Sarah as two covenants, slavery and freedom" },
      { r:"Genesis 21:9-21", note:"Hagar and Ishmael's later expulsion after Isaac's birth" },
      { r:"Genesis 25:12-18", note:"Ishmael's twelve sons, fulfilling the promise of multiplied offspring" } ]},
    { group:"God who sees and hears the afflicted", refs:[
      { r:"Exodus 3:7", note:"'I have surely seen the affliction of my people' — the same divine attentiveness" },
      { r:"Psalm 34:15", note:"'the eyes of the LORD are toward the righteous... his ears toward their cry'" },
      { r:"1 Peter 3:12", note:"'the eyes of the Lord are on the righteous, and his ears are open to their prayer'" } ]}
  ]
},

/* ===== GENESIS 17 — The covenant of circumcision ===== */
"1:17": {
  era: {
    title: "ca. 2067 BC — new names, and the sign of circumcision",
    sub: "Middle Bronze Age · Abram becomes Abraham, Sarai becomes Sarah · circumcision as covenant sign · Isaac promised by name",
    badges: ["Middle Bronze Age", "Names changed: father of nations", "Everlasting covenant", "Circumcision instituted"]
  },
  timeOfDay: "day",
  summary: "When Abram is ninety-nine, God appears as 'God Almighty' (El Shaddai) and calls him to walk blamelessly, establishing an everlasting covenant to multiply him greatly and give Canaan to his offspring as a permanent possession. He renames Abram 'Abraham,' father of a multitude of nations, and Sarai 'Sarah,' promising that she herself — not a servant — will bear the covenant son. Abraham laughs at the thought of a child born to a hundred-year-old man and his ninety-year-old wife, and pleads for Ishmael's blessing instead; God blesses Ishmael with twelve princely descendants but insists the covenant will run through a son named Isaac, to be born within the year. As the covenant's perpetual sign, every male in Abraham's household is to be circumcised on the eighth day, under penalty of being cut off from the people; Abraham circumcises himself, Ishmael, and every male in his household that same day.",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"Where God appears to Abraham and the covenant of circumcision is instituted (implied setting)" },
    { id:"jerusalem", role:"Named implicitly through the everlasting land grant of v. 8, whose promise later centers on this city" }
  ],
  journey: [
    { from:"hebron", to:"jerusalem", dashed:true, label:"An everlasting possession, still future", km:35, note:"No travel occurs in this chapter; the line marks the everlasting covenant's promise of 'all the land of Canaan' as a permanent possession, land that later centers on Jerusalem (vv. 8)." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"'I am God Almighty; walk before me'", av:"elder", desc:"El Shaddai appears to the ninety-nine-year-old Abram, establishing an everlasting covenant and calling him to blameless obedience (vv. 1-2)." },
    { x:0.24, type:"object", label:"New names: Abraham and Sarah", desc:"Abram ('exalted father') becomes Abraham ('father of a multitude'); Sarai becomes Sarah — both renamed to match the scope of the promise now clarified (vv. 5, 15)." },
    { x:0.42, type:"person", label:"Abraham laughs, and pleads for Ishmael", av:"elder", desc:"Abraham falls on his face laughing at the idea of a hundred-year-old father and ninety-year-old mother, and asks that Ishmael might simply 'live before' God (vv. 17-18)." },
    { x:0.58, type:"person", label:"Isaac named in advance", av:"elder", desc:"God insists the covenant runs specifically through a son named Isaac ('he laughs'), to be born to Sarah within the year, while also blessing Ishmael richly (vv. 19-21)." },
    { x:0.78, type:"object", label:"Circumcision: the covenant's sign", desc:"Every male, including servants and foreigners in the household, is to be circumcised on the eighth day forever, or be 'cut off' for breaking the covenant (vv. 10-14)." },
    { x:0.94, type:"person", label:"Obedience the same day", av:"elder", desc:"Abraham circumcises himself at ninety-nine and Ishmael at thirteen, along with every male in his household, that very day (vv. 23-27)." }
  ],
  environment: {
    chips: ["El Shaddai — 'God Almighty'", "Names changed to match the promise", "Laughter at an impossible birth", "Isaac named before he's conceived", "Circumcision on the eighth day", "Obedience carried out immediately"],
    text: "Renaming in the ancient world signified a genuine change of identity and destiny, not mere relabeling — Abram's and Sarai's new names publicly commit them to a promise still entirely unfulfilled. Circumcision, while practiced by some neighboring cultures for other reasons, becomes here a specifically covenantal mark cut into the body itself, distinguishing Abraham's household as a permanent, physical sign carried by every generation after."
  },
  objectsExtra: ["circumcision"],
  peopleExtra: ["ishmael"],
  culture: [
    { title:"El Shaddai — 'God Almighty'", icon:"⛰️",
      text:"This divine name, of debated etymology (possibly linked to 'mountain' or simply 'sufficient/powerful'), recurs at pivotal covenant moments across Genesis and signals God's power to accomplish exactly what human biology says is impossible — a hundred-year-old father, a ninety-year-old mother." },
    { title:"Circumcision in the ancient world", icon:"🔪",
      text:"Circumcision was practiced by various ancient peoples, often at puberty as a rite of passage; Genesis 17 redefines it entirely as an infant covenant sign tied to lineage and faith rather than adult initiation, making the eighth-day timing itself a marker of Israel's distinct theology." },
    { title:"Two sons, two destinies foretold", icon:"👶",
      text:"God's blessing of Ishmael (twelve princes, a great nation) alongside his insistence that the covenant runs through the not-yet-conceived Isaac sets up the entire Abraham-Ishmael-Isaac dynamic that plays out through the rest of Genesis and beyond, without denying Ishmael real blessing of his own." }
  ],
  crossRefs: [
    { group:"Names and destiny", refs:[
      { r:"Genesis 32:28", note:"Jacob renamed Israel — the pattern of a new name marking a new covenant identity" },
      { r:"Isaiah 62:2", note:"Israel promised 'a new name that the mouth of the LORD will give'" },
      { r:"Revelation 2:17", note:"a new name given to the one who conquers" } ]},
    { group:"Circumcision, spiritualized later", refs:[
      { r:"Deuteronomy 10:16", note:"'circumcise the foreskin of your heart' — the sign pointing past itself" },
      { r:"Romans 4:11", note:"circumcision as 'a seal of the righteousness' Abraham already had by faith" },
      { r:"Colossians 2:11-12", note:"Paul reads Christian baptism as a 'circumcision made without hands'" } ]}
  ]
},

/* ===== GENESIS 18 — Three visitors, and intercession for Sodom ===== */
"1:18": {
  era: {
    title: "ca. 2067 BC — three visitors at Mamre, and Abraham's plea for Sodom",
    sub: "Middle Bronze Age · Isaac's birth announced directly to Sarah · Abraham bargains for the righteous",
    badges: ["Middle Bronze Age", "The LORD dines under Abraham's tree", "Sarah laughs, then denies it", "Abraham's boldest intercession"]
  },
  timeOfDay: "day",
  summary: "Three men appear before Abraham's tent at Mamre in the heat of the day; he runs to greet them, washes their feet, and rushes Sarah and a servant to prepare a lavish meal. One of the visitors, revealed as the LORD himself, promises that Sarah will have a son within the year. Sarah, listening at the tent door, laughs to herself at the impossibility, given her and Abraham's age; confronted, she denies laughing out of fear, and the LORD replies simply, 'Is anything too hard for the LORD?' As the men set out toward Sodom, the LORD deliberates whether to hide his plan from Abraham, then reveals that the outcry against Sodom and Gomorrah is so great he is going down to see for himself. Abraham intercedes boldly, bargaining the LORD down from fifty righteous people to ten before the LORD departs and Abraham returns home.",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"Mamre, where the three visitors meet Abraham and Sarah (vv. 1-15)" },
    { id:"sodom", role:"The city whose outcry the LORD investigates, and for which Abraham intercedes (vv. 16-33)" }
  ],
  journey: [
    { from:"hebron", to:"sodom", dashed:true, label:"'I will go down and see'", km:50, note:"The LORD's messengers head toward Sodom to investigate its outcry firsthand, while Abraham remains at Mamre pleading on the city's behalf (vv. 16, 22)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Three visitors at the tent door", av:"traveler", desc:"Abraham spots three men near Mamre's oaks, runs to meet them, bows, and insists on washing their feet and feeding them (vv. 1-8)." },
    { x:0.24, type:"person", label:"'Sarah your wife shall have a son'", av:"elder", desc:"One visitor, speaking as the LORD, promises Isaac's birth within the year — news Sarah overhears from inside the tent (vv. 9-10)." },
    { x:0.40, type:"person", label:"Sarah laughs, then denies it", av:"woman", desc:"Sarah laughs privately at the idea of bearing a child at her age; caught, she denies it out of fear, met with the LORD's reply, 'Is anything too hard for the LORD?' (vv. 11-15)." },
    { x:0.58, type:"object", label:"'Shall I hide from Abraham what I am about to do?'", desc:"The LORD deliberates aloud whether to conceal his plan, then discloses that Sodom and Gomorrah's outcry has reached him and he is going to investigate (vv. 17-21)." },
    { x:0.78, type:"person", label:"Abraham bargains for the righteous", av:"elder", desc:"Standing before the LORD, Abraham pleads for the city, repeatedly lowering the number of righteous needed to spare it — from fifty down to ten (vv. 22-32)." },
    { x:0.94, type:"object", label:"The LORD departs; Abraham returns home", desc:"Having agreed to spare the city for ten righteous, the LORD goes his way and Abraham returns to his place at Mamre (v. 33)." }
  ],
  environment: {
    chips: ["Noon heat, tent-flap hospitality", "Bread, curds, and a calf prepared fast", "A promise Sarah overhears", "'Is anything too hard for the LORD?'", "An outcry investigated in person", "Bargaining from fifty down to ten"],
    text: "Middle-Eastern hospitality customs required exactly this kind of urgent, lavish welcome for unknown travelers — fresh-baked bread, a tender calf slaughtered on the spot, curds and milk — all prepared within roughly an hour, signaling both genuine honor and the household's real means. The scene's shift from domestic meal to cosmic courtroom, as Abraham negotiates directly with the LORD over a doomed city's fate, is one of the boldest instances of human intercession recorded anywhere in Scripture."
  },
  objectsExtra: ["waterjar"],
  peopleExtra: [],
  culture: [
    { title:"Hospitality as sacred duty", icon:"🍞",
      text:"In the ancient Near East, offering food and shelter to travelers was a moral obligation bound up with honor and divine favor; Abraham's exaggerated urgency ('quickly,' 'run') reflects genuine cultural expectation, not mere politeness, and sets up a deliberate contrast with Sodom's treatment of visitors in the next chapter." },
    { title:"Who are the 'three men'?", icon:"👥",
      text:"The narrative identifies one visitor directly with the LORD (v. 1, 13) while the other two are later called angels heading to Sodom (19:1); readers across traditions have long debated whether this is a theophany, an appearance of the pre-incarnate Son, or simply the LORD speaking through commissioned messengers." },
    { title:"Abraham's intercession as a model", icon:"🙏",
      text:"Abraham's respectful, persistent bargaining ('far be it from you... shall not the Judge of all the earth do right?') is often read as an early template for intercessory prayer — boldly appealing to God's own justice and character rather than mere pleading, without ever presuming on it." }
  ],
  crossRefs: [
    { group:"Sarah's laughter, and Isaac's name", refs:[
      { r:"Genesis 21:1-6", note:"Isaac's birth fulfills this promise exactly 'at the appointed time'" },
      { r:"Hebrews 11:11-12", note:"Sarah's faith to conceive, celebrated despite her doubt here" },
      { r:"Luke 1:34-37", note:"Gabriel's near-identical answer to Mary — 'nothing will be impossible with God'" } ]},
    { group:"Intercession for the righteous few", refs:[
      { r:"Genesis 19:29", note:"God 'remembered Abraham' and rescued Lot when Sodom fell" },
      { r:"Ezekiel 22:30", note:"God seeking someone to 'stand in the gap' for the land, and finding none" },
      { r:"1 Timothy 2:1", note:"intercession commanded 'for all people'" } ]}
  ]
},

/* ===== GENESIS 19 — The destruction of Sodom and Gomorrah ===== */
"1:19": {
  era: {
    title: "ca. 2067 BC — the destruction of Sodom and Gomorrah",
    sub: "Middle Bronze Age · two angels rescue Lot · fire and sulfur on the plain · a pillar of salt, and Moab and Ammon's origin",
    badges: ["Middle Bronze Age", "Lot's rescue, barely in time", "Judgment on the plain cities", "Lot's wife, and his daughters' scheme"]
  },
  timeOfDay: "night",
  summary: "Two angels arrive at Sodom in the evening; Lot insists on hosting them, but the city's men surround his house demanding to abuse the visitors, and Lot's offer of his daughters instead is refused and the mob struck blind. The angels reveal they have come to destroy the city and urge Lot to gather his family; his sons-in-law-to-be dismiss the warning as a joke. At dawn the angels physically drag the hesitating Lot, his wife, and two daughters out of the city, warning them not to look back or stop anywhere on the plain; Lot pleads to flee instead to the small town of Zoar, and is granted it. As the sun rises, the LORD rains fire and sulfur on Sodom and Gomorrah, overturning the cities and the whole plain; Lot's wife looks back and becomes a pillar of salt. Lot and his daughters end up in a cave, where the daughters, fearing no husbands remain, get their father drunk and conceive sons who become the ancestors of Moab and Ammon.",
  focusPlace: "sodom",
  places: [
    { id:"sodom", role:"The city where the angels arrive and the mob gathers at Lot's door (vv. 1-11)" },
    { id:"gomorrah", role:"Destroyed alongside Sodom in the judgment (v. 24)" },
    { id:"zoar", role:"The small city Lot begs to flee to instead of the hills (vv. 18-23)" }
  ],
  journey: [
    { from:"sodom", to:"zoar", label:"Lot's escape from the burning plain", km:15, note:"Dragged out by the angels at dawn, Lot pleads to flee to nearby Zoar rather than the distant hills, and is granted refuge there just before the destruction falls (vv. 15-23)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Two angels at Lot's door", av:"traveler", desc:"Lot meets the two visitors at Sodom's gate and insists they lodge with him rather than in the square (vv. 1-3)." },
    { x:0.20, type:"person", label:"The mob demands the visitors", av:"elder", desc:"Men of the city, young and old, surround the house demanding to abuse the guests; Lot's offer of his daughters instead is refused, and the mob is struck blind (vv. 4-11)." },
    { x:0.38, type:"person", label:"Sons-in-law dismiss the warning", av:"youth", desc:"Lot warns his daughters' intended husbands to flee the coming destruction, but they think he is joking (v. 14)." },
    { x:0.54, type:"person", label:"Dragged out at dawn", av:"elder", desc:"As Lot hesitates, the angels seize his hand, his wife's, and his daughters' and pull them out of the city, urging them not to look back (vv. 15-17)." },
    { x:0.70, type:"object", label:"Fire and sulfur rain down", desc:"The LORD overturns Sodom, Gomorrah, and the whole plain with fire and sulfur out of the heavens as the sun rises over the land (vv. 24-25)." },
    { x:0.82, type:"person", label:"Lot's wife looks back", av:"woman", desc:"Against the explicit warning, Lot's wife looks back toward the city and becomes a pillar of salt (v. 26)." },
    { x:0.94, type:"person", label:"The cave, and Lot's daughters' scheme", av:"woman", desc:"Fearing no husbands remain anywhere, Lot's daughters get him drunk on consecutive nights and conceive sons — Moab and Ben-ammi, ancestors of Moab and Ammon (vv. 30-38)." }
  ],
  environment: {
    chips: ["Evening arrival, urgent hospitality", "A violent mob at the door", "Angels who strike blindness", "Dawn drag-out, no time to spare", "Fire and sulfur over the whole plain", "A pillar of salt, and a cave's aftermath"],
    text: "The Jordan plain's cities sat on or near valuable bitumen and mineral deposits around the Dead Sea basin, a region later archaeology associates with sudden, catastrophic destruction layers at several Bronze Age sites. The chapter's swift collapse from hospitality drama to cosmic judgment to family tragedy in a cave mirrors the surrounding narrative's repeated theme: rescue that is real but never undoes every consequence of the world it rescues someone from."
  },
  objectsExtra: ["sulfur-fire", "pillar-of-salt"],
  peopleExtra: ["lots-wife", "lots-daughters"],
  culture: [
    { title:"Sodom's sin, defined by Scripture itself", icon:"⚖️",
      text:"Ezekiel 16:49-50 names Sodom's core sins as pride, gluttonous excess, and refusal to help the poor and needy, alongside 'abomination' before God — this chapter's attempted mob assault on the visitors is the narrative's climactic illustration of a city's total breakdown of hospitality and justice, not its only offense." },
    { title:"Why looking back mattered", icon:"🧂",
      text:"The angels' warning not to look back (v. 17) functioned as a test of trust and urgency rather than an arbitrary rule; Lot's wife's fatal glance is remembered by Jesus himself as a warning against clinging to a doomed old life when called to leave it decisively (Luke 17:32)." },
    { title:"Moab and Ammon's uncomfortable origin", icon:"🏺",
      text:"The chapter's closing genealogy explains, without excusing, the ancestry of two nations Israel would repeatedly clash with and sometimes intermarry with; Genesis is characteristically candid about the moral compromise behind their origin rather than glossing over it." }
  ],
  crossRefs: [
    { group:"Sodom as a lasting warning", refs:[
      { r:"Ezekiel 16:49-50", note:"Sodom's sins defined: pride, excess, and neglect of the poor" },
      { r:"Luke 17:28-32", note:"Jesus cites Sodom's sudden judgment, and warns, 'remember Lot's wife'" },
      { r:"2 Peter 2:6-9", note:"Sodom and Gomorrah as an example of judgment, and Lot as 'righteous' despite it all" } ]},
    { group:"Moab and Ammon in Israel's later story", refs:[
      { r:"Deuteronomy 2:9, 19", note:"Israel forbidden to dispossess Moab or Ammon — 'sons of Lot'" },
      { r:"Ruth 1:4, 22", note:"Ruth the Moabitess, ancestress of David, brought into Israel's story" },
      { r:"Judges 3:12-14; 10:7-9", note:"Moab and Ammon's later oppression of Israel" } ]}
  ]
},

/* ===== GENESIS 20 — Abraham, Sarah, and Abimelech of Gerar ===== */
"1:20": {
  era: {
    title: "ca. 2066 BC — Abraham sojourns at Gerar",
    sub: "Middle Bronze Age · Philistine border town · the sister-lie repeated · God warns a pagan king in a dream",
    badges: ["Middle Bronze Age", "Sister-lie, second time", "A king rebuked in a dream", "Sarah spared again"]
  },
  timeOfDay: "day",
  summary: "Abraham moves south to Gerar and again calls Sarah his sister, so King Abimelech takes her into his household (vv. 1-2). God warns Abimelech in a dream that he is a dead man for taking another man's wife; Abimelech, who has not touched her, protests his innocence and God confirms he acted in integrity, having kept him from sinning (vv. 3-6). Abimelech is told to restore Sarah and have Abraham pray for him, or die (v. 7). He confronts Abraham the next morning, terrified, and Abraham explains he feared for his life and that Sarah is in fact his half-sister as well as his wife (vv. 8-13). Abimelech gives Abraham sheep, oxen, servants, silver, and open land, and Abraham prays for him; God heals Abimelech's household, which had been struck barren over the matter (vv. 14-18).",
  focusPlace: "gerar",
  places: [
    { id:"gerar", role:"Where Abraham sojourns and Abimelech rules — the whole chapter's setting (v. 1)" },
    { id:"hebron", role:"The Mamre encampment Abraham has just left, moving south toward Gerar and Egypt's border region (v. 1)" }
  ],
  journey: [
    { from:"hebron", to:"gerar", label:"South toward the Negev border", km:70,
      note:"Abraham shifts his flocks south from Mamre toward Philistine territory on the edge of the Negev (v. 1)." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"'She is my sister' — again", av:"elder",
      desc:"Abraham repeats the half-truth he used in Egypt (Gen 12), and Abimelech takes Sarah into his house (vv. 1-2)." },
    { x:0.30, type:"person", label:"God warns Abimelech in a dream", av:"king",
      desc:"'You are a dead man' — but God credits Abimelech's innocence and says he kept him from touching her (vv. 3-6)." },
    { x:0.50, type:"person", label:"Abraham confronted, and explains", av:"elder",
      desc:"Abimelech rebukes Abraham for the deception; Abraham admits fear for his life and that Sarah is his father's daughter, not his mother's (vv. 8-13)." },
    { x:0.72, type:"object", label:"Restitution: flocks, silver, land",
      desc:"Abimelech gives Abraham sheep, oxen, servants and a thousand pieces of silver, and invites him to settle anywhere in the land (vv. 14-16)." },
    { x:0.90, type:"person", label:"Abraham prays, the household is healed", av:"elder",
      desc:"Abraham prays for Abimelech, and God heals the king's wife and slave women, who had been made barren because of Sarah (vv. 17-18)." }
  ],
  environment: {
    chips: ["A repeated deception", "A dream-warning to a pagan king", "Innocence acknowledged, not excused", "Restitution in livestock and silver", "Barrenness lifted by prayer"],
    text: "Gerar sat on the desert fringe south of Gaza, a Philistine-ruled border town whose economy turned on contested wells — the same friction that will resurface with Isaac in chapter 26. The episode strikingly has God defend a Gentile king's conscience against the patriarch's own half-truth, a pattern that recurs (Gen 12, 26) and quietly undercuts any assumption that being chosen makes one automatically righteous."
  },
  objectsExtra: [],
  peopleExtra: ["abimelech"],
  culture: [
    { title:"A recurring sister-lie", icon:"🔁",
      text:"This is the second of three near-identical episodes (Gen 12 with Pharaoh, this chapter, and Gen 26 with Isaac and Abimelech) where a patriarch calls his wife 'sister' out of fear. Genesis repeats the pattern without flattering its heroes, letting the same flaw resurface across a generation." },
    { title:"A dream-warning to an outsider", icon:"💭",
      text:"God speaking directly to Abimelech, a Philistine king outside the covenant line, shows divine moral accountability extending beyond Abraham's own family — a theme also present in Pharaoh's earlier plagues (Gen 12:17)." },
    { title:"Half-sister, whole deception", icon:"⚖️",
      text:"Abraham's defense — that Sarah is his father's daughter by another mother — was likely true and legally acceptable in the ancient Near East, but does not excuse the deliberate omission that endangered both Sarah and Abimelech." }
  ],
  crossRefs: [
    { group:"The same lie, told before and after", refs:[
      { r:"Genesis 12:10-20", note:"Abraham's earlier sister-lie, to Pharaoh in Egypt" },
      { r:"Genesis 26:6-11", note:"Isaac repeats his father's exact deception at the same Gerar" },
      { r:"Proverbs 29:25", note:"'the fear of man lays a snare' — the lie's root cause" } ]},
    { group:"Abimelech's integrity acknowledged", refs:[
      { r:"Genesis 20:6", note:"God credits Abimelech's 'integrity of heart'" },
      { r:"Psalm 105:14-15", note:"'he suffered no one to do them wrong... touch not mine anointed'" },
      { r:"1 Chronicles 16:21-22", note:"the same episode recalled as God's protection of the patriarchs" } ]}
  ]
},

/* ===== GENESIS 21 — Isaac's birth, Hagar's exile, and a covenant at Beersheba ===== */
"1:21": {
  era: {
    title: "ca. 2066-2050 BC — Isaac born; Hagar and Ishmael sent away",
    sub: "Middle Bronze Age · the promised laughter finally arrives · a household torn in two · a well-covenant with Abimelech",
    badges: ["Middle Bronze Age", "The promise fulfilled", "A hard exile", "Beersheba named"]
  },
  timeOfDay: "day",
  summary: "The LORD does exactly as promised: Sarah conceives and bears Isaac in Abraham's old age, and Abraham circumcises him at eight days as commanded (vv. 1-7). At the weaning feast, Sarah sees Ishmael mocking and demands Hagar and her son be cast out; Abraham is distressed, but God tells him to listen to Sarah, since Isaac carries the covenant line, while Ishmael too will become a nation (vv. 8-13). Abraham sends Hagar and Ishmael away with bread and water; when the water runs out in the wilderness of Beersheba, Hagar despairs, but God opens her eyes to a well and Ishmael grows up in the wilderness of Paran (vv. 14-21). Abimelech and Phicol, his army commander, come to Abraham seeking a treaty of mutual honesty, and after a dispute over a well Abraham has dug, the two swear an oath; Abraham gives seven ewe lambs as witness, and the place is named Beersheba (vv. 22-34).",
  focusPlace: "beersheba",
  places: [
    { id:"beersheba", role:"Where Hagar's despair is answered with a well, and where Abraham and Abimelech swear their covenant, giving the place its name (vv. 14-31)" },
    { id:"beerlahairoi", role:"Near where Hagar had earlier fled and named God 'the God who sees me' — recalled by her return to the wilderness here (Gen 16:14)" },
    { id:"gerar", role:"Abimelech's home base, from which he and Phicol travel to meet Abraham (v. 22)" }
  ],
  journey: [
    { from:"beersheba", to:"gerar", label:"Abimelech and Phicol's approach", km:35,
      note:"The Philistine king and his army commander come from Gerar to strike a treaty with Abraham (v. 22)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Isaac is born, and circumcised at eight days", av:"youth",
      desc:"'The LORD visited Sarah as he had said,' and Isaac ('he laughs') is born and circumcised as commanded (vv. 1-7)." },
    { x:0.22, type:"person", label:"Ishmael mocks; Sarah demands exile", av:"woman",
      desc:"At Isaac's weaning feast Sarah sees Ishmael mocking and tells Abraham to cast out 'this slave woman and her son' (vv. 8-10)." },
    { x:0.40, type:"person", label:"God tells Abraham to listen to Sarah", av:"elder",
      desc:"Distressed over Ishmael, Abraham is told Isaac alone carries the covenant, though Ishmael too will father a nation (vv. 11-13)." },
    { x:0.58, type:"person", label:"Hagar and Ishmael in the wilderness", av:"woman",
      desc:"Sent off with bread and water, Hagar despairs when it runs out — until God opens her eyes to a well (vv. 14-19)." },
    { x:0.76, type:"person", label:"Abimelech's treaty and the seven ewe lambs", av:"king",
      desc:"Abimelech and Phicol seek an oath of mutual fair dealing; Abraham sets aside seven ewe lambs as witness that he dug the disputed well (vv. 22-30)." },
    { x:0.92, type:"object", label:"Beersheba named, a tamarisk planted",
      desc:"The place is called Beersheba, 'well of the oath,' and Abraham plants a tamarisk tree there and calls on the LORD (vv. 31-33)." }
  ],
  environment: {
    chips: ["Long-delayed laughter, finally born", "A weaning feast turns bitter", "Exile into desert thirst", "A well opens Hagar's eyes", "Seven lambs seal an oath", "A name that sticks: Beersheba"],
    text: "Beersheba sat at the edge of cultivable land where the Negev turns to steppe, its deep well the whole reason anyone could live there at all — which is exactly why disputes over wells recur through Genesis. The chapter pairs Isaac's joyful arrival with Ishmael's hard departure, refusing to let either the promise or its cost go unnamed."
  },
  objectsExtra: ["ewe-lamb", "well"],
  peopleExtra: ["phicol"],
  culture: [
    { title:"'Laughter' as a name", icon:"😂",
      text:"Isaac's name (Hebrew Yitzchak, 'he laughs') recalls both Sarah's disbelieving laugh at the promise (Gen 18:12) and her later joyful laughter at his birth (v. 6) — the same word carrying doubt and delight." },
    { title:"Hard covenant math", icon:"⚖️",
      text:"God's instruction to send Ishmael away, while still promising him a nation, reflects the ancient reality that only one son could carry a father's primary inheritance and covenant line — a tension Genesis never smooths over emotionally." },
    { title:"Seven lambs, one oath", icon:"🐑",
      text:"The number seven (sheva) puns on Beersheba's name; setting aside seven lambs as a witness-gift was a customary way to formalize a treaty in the ancient Near East, fixing the memory of an agreement in a physical token." }
  ],
  crossRefs: [
    { group:"Isaac, the promised son", refs:[
      { r:"Genesis 17:19", note:"God had already named the coming son Isaac and promised an everlasting covenant through him" },
      { r:"Romans 9:7-9", note:"Paul reads Isaac as the pattern for children of promise, not merely of flesh" },
      { r:"Galatians 4:28-29", note:"Isaac and Ishmael reused as a picture of promise versus flesh" } ]},
    { group:"Hagar and Ishmael's later story", refs:[
      { r:"Genesis 16:7-14", note:"Hagar's earlier flight and her naming of 'the God who sees me'" },
      { r:"Genesis 25:12-18", note:"Ishmael's twelve sons and the territory his descendants settle" },
      { r:"Galatians 4:22-31", note:"Paul's allegorical reading of Hagar and Sarah as two covenants" } ]}
  ]
},

/* ===== GENESIS 22 — The binding of Isaac on Moriah ===== */
"1:22": {
  era: {
    title: "ca. 2050 BC — the Akedah: Abraham's test on Mount Moriah",
    sub: "Middle Bronze Age · a three-day journey to sacrifice the promised son · a ram caught in a thicket · 'The LORD will provide'",
    badges: ["Middle Bronze Age", "The ultimate test of faith", "Moriah, future site of the Temple", "A substitute provided"]
  },
  timeOfDay: "day",
  summary: "God tests Abraham, telling him to take Isaac, 'your only son, whom you love,' to the land of Moriah and offer him there as a burnt offering (vv. 1-2). Abraham rises early, saddles his donkey, and travels three days with Isaac and two servants; leaving the servants behind, he and Isaac climb together, Isaac carrying the wood and asking where the lamb is — Abraham answers that God will provide it (vv. 3-8). At the place, Abraham builds the altar, binds Isaac, and raises the knife, but the angel of the LORD stops him, commending his fear of God for not withholding his only son (vv. 9-12). Abraham looks up and sees a ram caught by its horns in a thicket, and offers it instead, naming the place 'The LORD Will Provide' (vv. 13-14). The angel calls again, swearing by God's own self that because Abraham obeyed, his offspring will be blessed and multiplied like the stars and sand, and through them all nations will be blessed (vv. 15-19). The chapter closes with a short note on the sons born to Abraham's brother Nahor, including Bethuel, father of Rebekah (vv. 20-24).",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"The land of Moriah where Abraham is told to offer Isaac — later identified as the Temple Mount (v. 2; 2 Chron 3:1)" },
    { id:"beersheba", role:"Where Abraham is dwelling when God calls him to Moriah, the likely starting point of the three-day journey (Gen 21:33-22:1)" },
    { id:"haran", role:"Home of Nahor's family, named in the chapter's closing genealogy that introduces Bethuel and, through him, Rebekah (vv. 20-23)" }
  ],
  journey: [
    { from:"beersheba", to:"jerusalem", label:"Three days to Moriah", km:75,
      note:"Abraham travels three days with Isaac, wood, fire, and a knife, not knowing until the last moment how God will provide (vv. 3-4)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"'Take your son... and offer him'", av:"elder",
      desc:"God's command tests Abraham to the utmost: take Isaac, 'your only son, whom you love,' to Moriah for a burnt offering (vv. 1-2)." },
    { x:0.24, type:"person", label:"'God will provide the lamb'", av:"youth",
      desc:"Isaac, carrying the wood, asks where the sacrifice is; Abraham answers with faith he cannot yet explain (vv. 6-8)." },
    { x:0.44, type:"object", label:"The altar, the binding, the raised knife",
      desc:"Abraham builds the altar, binds Isaac on the wood, and stretches out his hand with the knife before the angel calls out to stop him (vv. 9-11)." },
    { x:0.62, type:"person", label:"'Now I know that you fear God'", av:"elder",
      desc:"The angel of the LORD commends Abraham for not withholding his only son, confirming the test is over (v. 12)." },
    { x:0.78, type:"object", label:"A ram caught in the thicket",
      desc:"Abraham looks up, sees a ram caught by its horns, and offers it in Isaac's place, naming the site 'The LORD Will Provide' (vv. 13-14)." },
    { x:0.92, type:"person", label:"The covenant oath renewed", av:"elder",
      desc:"The angel swears by God's own name that Abraham's offspring will multiply like stars and sand and bless all nations, because he obeyed (vv. 15-18)." }
  ],
  environment: {
    chips: ["A three-day journey in silence", "Wood, fire, knife — no lamb yet", "'God will provide' spoken in faith", "A knife stayed at the last second", "A ram substituted", "An oath sworn by God's own name"],
    text: "Moriah's later identification with Jerusalem's Temple Mount (2 Chron 3:1) makes this the same ridge where Solomon's temple, and centuries of sacrifice, would eventually stand — the chapter's substitution of a ram for Isaac anticipating the whole sacrificial system built on that hill. Ancient Near Eastern neighbors sometimes practiced child sacrifice; this account's God explicitly stops it."
  },
  objectsExtra: ["ram-caught-in-thicket", "altar"],
  peopleExtra: [],
  culture: [
    { title:"The Akedah in Jewish tradition", icon:"📜",
      text:"Jewish tradition calls this episode the Akedah ('the Binding') and reads it as the supreme test of Abraham's faith, later invoked in the Rosh Hashanah liturgy and remembered as merit for Israel's descendants." },
    { title:"A polemic against child sacrifice", icon:"🚫",
      text:"Unlike neighboring Canaanite and later practices of offering children to gods like Molech, the God of this narrative explicitly halts the sacrifice and provides a substitute — a decisive break embedded at the story's climax, not its footnote." },
    { title:"A pattern later writers return to", icon:"✝️",
      text:"Hebrews 11:17-19 reads Abraham as trusting God could even raise Isaac from the dead; many Christian readers have long seen the 'only son... whom you love' carried up a mountain to be offered as foreshadowing Christ." }
  ],
  crossRefs: [
    { group:"Moriah and the Temple", refs:[
      { r:"2 Chronicles 3:1", note:"Solomon builds the temple 'on Mount Moriah,' identifying it with this chapter's site" },
      { r:"Hebrews 11:17-19", note:"Abraham's faith that God could raise Isaac even from death" },
      { r:"James 2:21-23", note:"Abraham's offering of Isaac cited as faith proven by works" } ]},
    { group:"The oath renewed, and its fulfillment", refs:[
      { r:"Genesis 15:5", note:"the earlier promise of offspring 'like the stars of heaven'" },
      { r:"Genesis 26:3-4", note:"the same oath repeated to Isaac" },
      { r:"Galatians 3:16", note:"Paul reads 'your offspring' ultimately as Christ" } ]}
  ]
},

/* ===== GENESIS 23 — Sarah's death and the purchase of Machpelah ===== */
"1:23": {
  era: {
    title: "ca. 2029 BC — Sarah dies at Hebron; Abraham buys Machpelah",
    sub: "Middle Bronze Age · Sarah's death at 127 · a formal land purchase from Ephron the Hittite · Abraham's first owned ground in Canaan",
    badges: ["Middle Bronze Age", "Sarah's death mourned", "A cave bought, not given", "First patriarchal foothold in the land"]
  },
  timeOfDay: "day",
  summary: "Sarah dies at Kiriath-arba, that is Hebron, at 127 years old, and Abraham comes to mourn and weep for her (vv. 1-2). He rises and asks the Hittites of the land for a burial site, insisting he will pay full price rather than accept it as a gift, though offered a free choice of tombs (vv. 3-6). Ephron the Hittite offers the cave of Machpelah at the edge of his field, and though he initially offers it freely, Abraham insists on paying, and Ephron names the price — four hundred shekels of silver, 'what is that between you and me?' (vv. 7-15). Abraham weighs out the silver before witnesses at the city gate, and the field, the cave, and every tree in it are formally deeded to Abraham as a possession (vv. 16-18). Abraham buries Sarah there in the cave of Machpelah, near Mamre — the first piece of the promised land Abraham actually owns (vv. 19-20).",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"Kiriath-arba, where Sarah dies and where Abraham negotiates and completes the purchase of Machpelah at the city gate (vv. 2, 10-18)" },
    { id:"beersheba", role:"Abraham's more recent home (Gen 21:33-34), from which he comes to mourn Sarah at Hebron" }
  ],
  journey: [
    { from:"beersheba", to:"hebron", label:"Abraham comes to mourn and to buy a grave", km:45,
      note:"Abraham travels from his home at Beersheba to Kiriath-arba (Hebron) on Sarah's death, and stays to complete the Machpelah purchase (vv. 1-2)." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Sarah dies at Hebron", av:"woman",
      desc:"Sarah dies at 127 at Kiriath-arba; Abraham comes to mourn and weep for her (vv. 1-2)." },
    { x:0.32, type:"person", label:"Abraham insists on paying full price", av:"elder",
      desc:"Offered a free choice of tombs by the Hittites, Abraham insists on buying, not receiving a burial site as a gift (vv. 3-6, 9)." },
    { x:0.55, type:"object", label:"Ephron names four hundred shekels",
      desc:"Ephron the Hittite, after a show of generosity, names the price of the cave and field — 400 shekels of silver, 'current merchant's standard' (vv. 14-16)." },
    { x:0.78, type:"object", label:"The deed formalized at the city gate",
      desc:"The field, cave, and every tree in it pass legally to Abraham 'in the presence of all who went in at the gate of his city' (vv. 17-18)." },
    { x:0.92, type:"person", label:"Sarah buried in Machpelah", av:"woman",
      desc:"Abraham buries Sarah in the cave of Machpelah facing Mamre — Abraham's first owned ground in Canaan (vv. 19-20)." }
  ],
  environment: {
    chips: ["Mourning at Kiriath-arba", "A formal ancient real-estate negotiation", "Full price insisted on, not a gift", "City-gate witnesses", "First land Abraham actually owns"],
    text: "The negotiation follows real ancient Near Eastern legal convention — polite refusal, an inflated 'gift' offer, then a named price accepted before witnesses at the city gate, the customary place for binding public transactions. That the promise-holder Abraham owns not one acre of Canaan until this purchase of a burial cave is itself a quiet irony the text lets stand."
  },
  objectsExtra: ["machpelah-cave", "shekel", "citygate"],
  peopleExtra: [],
  culture: [
    { title:"Ancient Near Eastern contract style", icon:"📝",
      text:"The back-and-forth of refused gifts and named prices mirrors known Hittite and other ANE land-sale formulas, in which an initial 'free gift' offer was a customary opening move, not a real offer — Abraham's insistence on paying full price ensured an undisputed legal claim." },
    { title:"The city gate as courthouse", icon:"🚪",
      text:"City gates functioned as the public square where elders witnessed transactions, settled disputes, and confirmed contracts — 'in the presence of all who went in at the gate' (v. 18) is the ancient equivalent of a filed, witnessed deed." },
    { title:"Machpelah's long afterlife", icon:"⚰️",
      text:"The cave becomes the family tomb for Abraham, Sarah, Isaac, Rebekah, Jacob, and Leah (Gen 49:29-32; 50:13), still venerated today at Hebron's Cave of the Patriarchs — one of the few biblical sites with unbroken historical identification." }
  ],
  crossRefs: [
    { group:"Machpelah as the family tomb", refs:[
      { r:"Genesis 25:9-10", note:"Isaac and Ishmael together bury Abraham in the same cave" },
      { r:"Genesis 49:29-32", note:"Jacob's dying instruction to be buried in Machpelah with his fathers" },
      { r:"Genesis 50:13", note:"Jacob's body carried back from Egypt and buried there" } ]},
    { group:"Sarah remembered", refs:[
      { r:"Isaiah 51:2", note:"Israel told to 'look to Abraham... and Sarah who bore you'" },
      { r:"Hebrews 11:11", note:"Sarah's faith to conceive celebrated in the roll call of the faithful" },
      { r:"1 Peter 3:6", note:"Sarah held up as a model of a wife's respect" } ]}
  ]
},

/* ===== GENESIS 24 — Eliezer's mission to find Rebekah ===== */
"1:24": {
  era: {
    title: "ca. 2026 BC — a servant sent to Aram-naharaim for Isaac's bride",
    sub: "Middle Bronze Age · an oath sworn on Abraham's thigh · a sign at the well · Rebekah's willing 'I will go'",
    badges: ["Middle Bronze Age", "A providential sign requested", "A bride found at a well", "Rebekah's own consent sought"]
  },
  timeOfDay: "day",
  summary: "Aged Abraham makes his chief servant swear not to take a wife for Isaac from the Canaanites, but to go to his own country and kindred, to Nahor's household (vv. 1-9). The servant travels to the city of Nahor and prays at the well for a specific sign: that the woman who offers to water his camels too will be the one God has chosen for Isaac (vv. 10-14). Before he finishes praying, Rebekah arrives, offers water to him and his camels exactly as asked, and is identified as Bethuel's daughter, granddaughter of Nahor (vv. 15-27). She runs to tell her household; her brother Laban, seeing the gifts, rushes out to welcome the servant, who explains his mission and asks for Rebekah for Isaac (vv. 28-49). Laban and Bethuel agree the matter is from the LORD, and after gifts are given, Rebekah herself is asked and agrees to go at once (vv. 50-61). The servant and Rebekah travel back; Isaac, out meditating in the field near Beerlahairoi, sees the camels coming, and Rebekah becomes his wife and comforts him after his mother's death (vv. 62-67).",
  focusPlace: "haran",
  places: [
    { id:"haran", role:"The city of Nahor in Aram-naharaim where the servant finds Rebekah at the well (v. 10)" },
    { id:"beerlahairoi", role:"Where Isaac is living and meditating in the field when Rebekah's caravan arrives (v. 62)" }
  ],
  journey: [
    { from:"hebron", to:"haran", label:"The servant's outward journey", km:800,
      note:"Abraham's servant travels north with ten camels and gifts to seek a wife for Isaac among his master's own kindred (vv. 4, 10)." },
    { from:"haran", to:"beerlahairoi", label:"Rebekah's journey to Isaac", km:800,
      note:"Rebekah, her nurse, and her attendants return with the servant to meet Isaac and become his wife (vv. 61, 67)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Abraham's oath: not a Canaanite wife", av:"elder",
      desc:"Abraham binds his servant by oath to seek a wife for Isaac from his own kindred, not the Canaanites (vv. 1-9)." },
    { x:0.24, type:"object", label:"A sign requested at the well",
      desc:"The servant prays for a specific test: the woman who offers to water his ten camels will be God's chosen bride for Isaac (vv. 12-14)." },
    { x:0.42, type:"person", label:"Rebekah waters the camels", av:"woman",
      desc:"Before the prayer even ends, Rebekah arrives, draws water, and offers it to the camels unprompted, exactly as asked (vv. 15-20)." },
    { x:0.58, type:"person", label:"Laban runs out to the gifts", av:"elder",
      desc:"Seeing the servant's gold ring and bracelets, Laban rushes to welcome him and hear his mission (vv. 29-31)." },
    { x:0.76, type:"person", label:"'I will go' — Rebekah's own consent", av:"woman",
      desc:"Asked directly whether she will go with the servant, Rebekah answers, 'I will go,' and is sent off with blessing (vv. 57-60)." },
    { x:0.92, type:"person", label:"Isaac meets Rebekah in the field", av:"shepherd",
      desc:"Isaac, out meditating near Beerlahairoi, sees the camels approaching; Rebekah veils herself, and he takes her as his wife (vv. 62-67)." }
  ],
  environment: {
    chips: ["An oath sworn on Abraham's thigh", "A providential sign at a well", "Camels laden with gifts", "A family's quick consent", "Rebekah's own 'I will go'", "Comfort after Sarah's death"],
    text: "Wells functioned as the ancient world's social hub, the place where strangers, betrothals, and news all converged — this chapter, along with Jacob's own well-meeting of Rachel (Gen 29) and Moses' of Zipporah (Ex 2), makes the well-betrothal a recognizable type-scene. The servant's prayer for a specific, testable sign, and its immediate fulfillment, frames the whole journey as divinely guided rather than mere family arrangement."
  },
  objectsExtra: ["camel", "well", "bridal-veil"],
  peopleExtra: ["rebekah", "bethuel", "laban", "milcah"],
  culture: [
    { title:"The well-betrothal type-scene", icon:"💧",
      text:"A recurring biblical pattern — a foreign traveler meets his future bride at a well (Rebekah here, Rachel in Gen 29, Zipporah in Exodus 2) — uses shared conventions readers would recognize, making variations (who draws water for whom) narratively significant." },
    { title:"Swearing on the thigh", icon:"🤝",
      text:"Placing a hand 'under the thigh' (v. 2, near the reproductive organs) to swear an oath invoked one's descendants and household line as witness and stake — a solemn, family-line-binding gesture rather than a casual promise." },
    { title:"Consent still sought", icon:"🙋",
      text:"Even after the family agreed to the match, Rebekah herself is asked directly whether she will go (v. 58) — a notable moment of personal consent within an otherwise arranged, family-negotiated marriage." }
  ],
  crossRefs: [
    { group:"Well-betrothal echoes later in Genesis and Exodus", refs:[
      { r:"Genesis 29:9-12", note:"Jacob meets Rachel at a well in almost identical fashion" },
      { r:"Exodus 2:15-21", note:"Moses meets Zipporah and her sisters at a well in Midian" },
      { r:"John 4:5-7", note:"Jesus meets the Samaritan woman at Jacob's well" } ]},
    { group:"Rebekah's family line", refs:[
      { r:"Genesis 22:20-23", note:"Bethuel's birth already noted in Nahor's genealogy" },
      { r:"Genesis 29:4-5", note:"Laban identified again as Rebekah's brother when Jacob arrives" },
      { r:"Romans 9:10-12", note:"Rebekah's own later role in securing Jacob's line over Esau's" } ]}
  ]
},

/* ===== GENESIS 25 — Abraham's death, Esau and Jacob, and the sold birthright ===== */
"1:25": {
  era: {
    title: "ca. 2006-1966 BC — Abraham's death; Esau and Jacob born; the birthright sold",
    sub: "Middle Bronze Age · Keturah's sons sent east · Ishmael's line recorded · rival twins from the womb onward",
    badges: ["Middle Bronze Age", "Abraham's death and burial", "Twins struggling in the womb", "A birthright for stew"]
  },
  timeOfDay: "day",
  summary: "Abraham takes another wife, Keturah, who bears him six more sons; he sends them east with gifts, keeping the inheritance for Isaac alone, and dies at 175, buried by Isaac and Ishmael together in Machpelah (vv. 1-11). Ishmael's twelve sons are listed as tribal princes, fulfilling God's earlier promise, and Ishmael dies at 137 (vv. 12-18). Isaac, married twenty years without children, prays for Rebekah, who conceives twins that struggle inside her; God tells her two nations are in her womb and the older will serve the younger (vv. 19-23). Esau is born first, red and hairy, followed by Jacob, gripping his brother's heel (vv. 24-26). Esau becomes a skilled hunter favored by Isaac; Jacob, a quieter man favored by Rebekah, one day trades a bowl of red stew to a famished Esau for his birthright, which Esau despises enough to sell (vv. 27-34).",
  focusPlace: "beerlahairoi",
  places: [
    { id:"beerlahairoi", role:"Where Isaac is living when the twins are born and grow up (implied continuity from Gen 24:62; 25:11)" },
    { id:"hebron", role:"Machpelah, where Isaac and Ishmael together bury Abraham beside Sarah (v. 9)" },
    { id:"edom", role:"The territory Esau's descendants will settle, named here in advance through his own alternate name Edom, 'red' (v. 30)" }
  ],
  journey: [
    { from:"beerlahairoi", to:"hebron", dashed:true, label:"Abraham's burial procession, in view", km:110,
      note:"No travel is narrated directly, but Isaac and Ishmael together bring Abraham's body to be buried beside Sarah at Machpelah in Hebron (v. 9)." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"Keturah's sons sent east", av:"woman",
      desc:"Abraham's wife Keturah bears him six sons, who are given gifts and sent away east, away from Isaac's inheritance (vv. 1-6)." },
    { x:0.20, type:"person", label:"Abraham dies at 175", av:"elder",
      desc:"Abraham dies 'old and full of years' and is buried by Isaac and Ishmael together in the cave of Machpelah beside Sarah (vv. 7-10)." },
    { x:0.38, type:"object", label:"Ishmael's twelve princes listed",
      desc:"Ishmael's twelve sons are recorded as tribal princes before his own death at 137, fulfilling God's earlier promise to Hagar (vv. 12-18)." },
    { x:0.55, type:"person", label:"Twins struggle in Rebekah's womb", av:"woman",
      desc:"Rebekah, pregnant after twenty barren years, is told 'two nations are in your womb... the older shall serve the younger' (vv. 21-23)." },
    { x:0.72, type:"person", label:"Esau and Jacob born", av:"youth",
      desc:"Esau comes out first, red and hairy; Jacob follows, gripping his brother's heel — the name Jacob meaning 'he grasps the heel' (vv. 24-26)." },
    { x:0.92, type:"person", label:"A birthright sold for stew", av:"shepherd",
      desc:"Famished from hunting, Esau trades his birthright to Jacob for bread and red lentil stew, and 'Esau despised his birthright' (vv. 29-34)." }
  ],
  environment: {
    chips: ["A patriarch's long life ends", "Two half-brothers bury their father together", "A promise's second fulfillment (Ishmael)", "Rival twins from conception", "A birthright traded for a meal"],
    text: "The chapter compresses an entire generation — Abraham's peaceful death, Ishmael's separate but blessed line, and the birth of rival twins whose struggle in the womb previews Israel and Edom's later national rivalry. Esau's contempt for his birthright, tossed away for a single meal, becomes a byword for trading lasting worth for momentary appetite (Heb 12:16)."
  },
  objectsExtra: ["birthright", "red-stew"],
  peopleExtra: ["keturah", "esau", "ishmaels-sons"],
  culture: [
    { title:"The firstborn's birthright", icon:"👑",
      text:"A firstborn son's birthright typically meant a double inheritance share and family leadership upon the father's death — a substantial, lasting legal privilege that made Esau's willingness to trade it for one meal proverbial for shortsightedness (Heb 12:16-17)." },
    { title:"Two nations in one womb", icon:"🌍",
      text:"God's oracle to Rebekah (v. 23) is read as founding not just a personal rivalry but the later national relationship between Israel (through Jacob) and Edom (through Esau), a tension threading through later prophetic literature (Obadiah, Malachi 1:2-3)." },
    { title:"Two brothers, one burial", icon:"⚰️",
      text:"Isaac and Ishmael burying Abraham together (v. 9), despite their family's earlier rupture, is a quiet note of reconciliation the text does not dwell on but does not omit either." }
  ],
  crossRefs: [
    { group:"The rivalry Rebekah is told about", refs:[
      { r:"Romans 9:10-13", note:"Paul cites 'the older will serve the younger' to argue God's purpose in election" },
      { r:"Malachi 1:2-3", note:"'Jacob I loved, but Esau I hated' — the same rivalry read nationally" },
      { r:"Obadiah 1:10-14", note:"Edom's later betrayal of Israel, rooted in this brotherly split" } ]},
    { group:"The birthright's later weight", refs:[
      { r:"Genesis 27:36", note:"Esau's own words: Jacob has taken both his birthright and his blessing" },
      { r:"Hebrews 12:16-17", note:"Esau held up as a warning against trading lasting worth for momentary appetite" },
      { r:"1 Chronicles 5:1-2", note:"the birthright later formally transferred away from Reuben to Joseph's sons" } ]}
  ]
},

/* ===== GENESIS 26 — Isaac at Gerar: famine, deception, and a well-covenant ===== */
"1:26": {
  era: {
    title: "ca. 2000 BC — Isaac in Gerar: a repeated deception, a repeated covenant",
    sub: "Middle Bronze Age · famine drives Isaac to Gerar · his father's sister-lie repeated · wells re-dug, then a covenant sworn",
    badges: ["Middle Bronze Age", "The promise reaffirmed to Isaac", "History nearly repeats itself", "Wells contested, then a peace"]
  },
  timeOfDay: "day",
  summary: "A famine sends Isaac toward Gerar, where the LORD appears and tells him not to go down to Egypt but to stay in the land, renewing to him the same covenant sworn to Abraham (vv. 1-5). At Gerar, Isaac, echoing his father, calls Rebekah his sister, until Abimelech spots them together and rebukes him for the near-disastrous deception (vv. 6-11). Isaac sows crops and prospers greatly, growing so powerful that the Philistines envy him and Abimelech asks him to leave; the Philistines had stopped up all his father's wells (vv. 12-16). Isaac re-digs his father's wells and digs new ones, naming them after disputes with local herdsmen — Esek and Sitnah — until he digs Rehoboth without contention, and then moves to Beersheba where God again confirms the covenant (vv. 17-25). Abimelech, Ahuzzath, and Phicol come to Isaac seeking a treaty as they once did with Abraham; a covenant oath is sworn, a well is found that same day, and the place is again called Beersheba (vv. 26-33). The chapter closes noting Esau's marriages to two Hittite women, a grief to Isaac and Rebekah (vv. 34-35).",
  focusPlace: "gerar",
  places: [
    { id:"gerar", role:"Where Isaac sojourns during the famine, repeats his father's sister-lie, and prospers until the Philistines envy him (vv. 1, 6, 12-16)" },
    { id:"beersheba", role:"Where Isaac moves after the well disputes and where God again confirms the covenant and Abimelech's treaty is renewed (vv. 23-33)" }
  ],
  journey: [
    { from:"gerar", to:"beersheba", label:"Isaac withdraws after well disputes", km:35,
      note:"Pushed out by envious Philistines over well after well, Isaac moves on to Beersheba, where the covenant is renewed without conflict (vv. 22-23)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"God renews the covenant to Isaac", av:"shepherd",
      desc:"Told not to go to Egypt during the famine, Isaac hears the same promise given to Abraham — land, offspring, and blessing to all nations — repeated to him directly (vv. 2-5)." },
    { x:0.22, type:"person", label:"'She is my sister' — Isaac repeats it", av:"shepherd",
      desc:"Isaac calls Rebekah his sister at Gerar just as Abraham once did, until Abimelech catches them together and rebukes him (vv. 7-11)." },
    { x:0.40, type:"object", label:"Isaac sows, and reaps a hundredfold",
      desc:"Isaac plants crops in famine-stricken land and reaps a hundredfold that year, growing so rich the Philistines envy and expel him (vv. 12-16)." },
    { x:0.58, type:"object", label:"Wells re-dug: Esek and Sitnah",
      desc:"Isaac re-opens his father's stopped-up wells and digs new ones, naming two after the disputes they caused — Esek ('contention') and Sitnah ('enmity') (vv. 18-21)." },
    { x:0.74, type:"object", label:"Rehoboth — 'room at last'",
      desc:"A third well brings no quarrel, and Isaac names it Rehoboth: 'the LORD has made room for us' (v. 22)." },
    { x:0.90, type:"person", label:"A second covenant sworn at Beersheba", av:"king",
      desc:"Abimelech, Ahuzzath, and Phicol come seeking peace with Isaac as they once did with Abraham; an oath is sworn and a well found that same day (vv. 26-33)." }
  ],
  environment: {
    chips: ["Famine forces a move", "A father's lie, repeated by his son", "Prosperity that breeds envy", "Wells as the real currency of the land", "'Room at last' after contention", "A covenant echoing Abraham's own"],
    text: "Water rights in the arid Negev fringe determined whether a herding family could survive at all, which is why Isaac's re-digging of his father's wells and the naming of each — Esek, Sitnah, Rehoboth — reads almost as a small chronicle of the era's real economic conflicts. The chapter deliberately mirrors chapter 20 point for point, letting readers watch Isaac step, almost helplessly, into his father's exact pattern before finding his own peace."
  },
  objectsExtra: ["well"],
  peopleExtra: [],
  culture: [
    { title:"A son repeats his father's sin", icon:"🪞",
      text:"Isaac's sister-lie at Gerar (vv. 7-11) deliberately echoes Abraham's own deceptions (Gen 12, 20), suggesting inherited patterns of fear passed down within a family rather than an isolated lapse." },
    { title:"Well names as a small history", icon:"💧",
      text:"Esek ('contention'), Sitnah ('enmity' or 'accusation'), and Rehoboth ('room' or 'broad places') function almost like a diary entry, marking the emotional cost of each dispute before finally naming relief when it came." },
    { title:"Prosperity and displacement", icon:"🌾",
      text:"Isaac's hundredfold harvest during a famine (v. 12) reads as an unmistakable sign of divine blessing, yet that same blessing is precisely what makes the Philistines anxious enough to expel him — blessing and conflict arriving together." }
  ],
  crossRefs: [
    { group:"The covenant renewed generation to generation", refs:[
      { r:"Genesis 12:1-3", note:"the original promise to Abraham, now repeated almost verbatim to Isaac" },
      { r:"Genesis 22:16-18", note:"the oath sworn on Moriah, echoed again here (v. 3-5)" },
      { r:"Genesis 28:13-15", note:"the same covenant renewed a third time, to Jacob at Bethel" } ]},
    { group:"Like father, like son", refs:[
      { r:"Genesis 12:10-20", note:"Abraham's first sister-lie, in Egypt" },
      { r:"Genesis 20:1-18", note:"Abraham's second sister-lie, at this same Gerar" },
      { r:"Galatians 6:7", note:"'whatever one sows, that will he also reap' — a principle this chapter's harvest and family patterns both illustrate" } ]}
  ]
},

/* ===== GENESIS 27 — Jacob steals Isaac's blessing ===== */
"1:27": {
  era: {
    title: "ca. 1930 BC — Jacob deceives blind Isaac and steals Esau's blessing",
    sub: "Middle Bronze Age · Isaac's failing eyes · Rebekah's scheme · goatskins, savory food, and a blessing that cannot be recalled",
    badges: ["Middle Bronze Age", "A father's blessing, once given, unbreakable", "Rebekah and Jacob's deception", "Esau's bitter cry"]
  },
  timeOfDay: "day",
  summary: "Old and nearly blind, Isaac calls Esau, his favored son, to hunt game and prepare a savory meal so he can bless him before he dies (vv. 1-4). Rebekah overhears and instructs Jacob to bring two young goats so she can cook Isaac's favorite dish; Jacob worries his smooth skin will expose the trick, but Rebekah dresses him in Esau's clothes and covers his hands and neck with the goatskins (vv. 5-17). Jacob brings the food to Isaac, claiming to be Esau; Isaac, suspicious of the quick success but reassured by the clothes' smell and the skins' feel, blesses Jacob with the dew of heaven, the fatness of the earth, and rule over his brothers (vv. 18-29). Esau returns moments later with his own game, and both he and Isaac tremble violently on discovering the deception; Esau begs for a blessing too and receives a lesser one, promising he will serve his brother but eventually break free (vv. 30-40). Esau vows to kill Jacob once Isaac dies, so Rebekah sends Jacob away to her brother Laban in Haran, telling Isaac it is to find a proper wife (vv. 41-46).",
  focusPlace: "beersheba",
  places: [
    { id:"beersheba", role:"The likely setting of Isaac's household in his old age, from which Jacob is sent north to Haran (implied continuity; cf. Gen 28:10)" },
    { id:"haran", role:"Where Rebekah sends Jacob to escape Esau's fury and to find a wife from her own family (vv. 43-45)" }
  ],
  journey: [
    { from:"beersheba", to:"haran", label:"Jacob flees north", km:800,
      note:"Rebekah sends Jacob to her brother Laban in Haran, both to escape Esau's vow of vengeance and to secure a wife of the family's own line (vv. 43-45)." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Isaac calls for Esau's savory food", av:"elder",
      desc:"Blind and feeling near death, Isaac asks his favored son Esau to hunt game and prepare a meal so he can give his blessing (vv. 1-4)." },
    { x:0.22, type:"person", label:"Rebekah's scheme, and Jacob's fear", av:"woman",
      desc:"Overhearing, Rebekah tells Jacob to bring two goats for her to cook; Jacob fears being caught as 'a smooth man' among Esau's hairy skin (vv. 5-12)." },
    { x:0.40, type:"object", label:"Goatskins and borrowed clothes",
      desc:"Rebekah dresses Jacob in Esau's garments and covers his hands and neck with goatskins to fool Isaac's touch and smell (vv. 15-17)." },
    { x:0.58, type:"person", label:"'The voice is Jacob's, but the hands are Esau's'", av:"elder",
      desc:"Isaac, suspicious but persuaded by touch and smell, blesses Jacob with dew, grain, wine, and dominion over his brothers (vv. 21-29)." },
    { x:0.76, type:"person", label:"Esau's bitter, exceedingly great cry", av:"shepherd",
      desc:"Esau returns to find the blessing already given; he and Isaac tremble, and Esau cries out for a blessing of his own, receiving a lesser one (vv. 30-40)." },
    { x:0.92, type:"person", label:"Jacob sent away to Haran", av:"shepherd",
      desc:"Fearing Esau's vow to kill Jacob after Isaac's death, Rebekah arranges to send Jacob to her brother Laban, framing it as a marriage errand (vv. 41-46)." }
  ],
  environment: {
    chips: ["A father's failing sight exploited", "A mother's favoritism in action", "Goatskins as disguise", "A blessing, once spoken, irreversible", "A brother's rage, barely restrained", "An escape disguised as an errand"],
    text: "In the ancient world a spoken deathbed blessing carried binding legal and social weight roughly equivalent to a will, which is exactly why Isaac cannot simply take it back once he realizes the deception — the words themselves, not just the intention behind them, were understood to effect the outcome. The episode leaves every character morally compromised: Isaac's favoritism, Rebekah's scheming, Jacob's lie, and Esau's own earlier contempt for his birthright all converge in one irreversible afternoon."
  },
  objectsExtra: ["savory-food", "skins-garment"],
  peopleExtra: [],
  culture: [
    { title:"A blessing as binding as a will", icon:"📜",
      text:"Ancient deathbed blessings functioned as legally and socially binding declarations, not mere well-wishes — once spoken over the wrong son, Isaac treats it as irrevocable (v. 33), which is precisely why Esau's grief is so total." },
    { title:"Parental favoritism repeating a pattern", icon:"👪",
      text:"Isaac's preference for Esau and Rebekah's for Jacob (Gen 25:28) directly enables this chapter's deception, and the same family favoritism will resurface destructively in Jacob's own household toward Joseph (Gen 37:3-4)." },
    { title:"Jacob's methods, and later reckoning", icon:"⚖️",
      text:"Jacob's deception here is later mirrored back on him when Laban substitutes Leah for Rachel on his wedding night (Gen 29:23-25) — a literary and moral turn many readers see as deliberate poetic justice." }
  ],
  crossRefs: [
    { group:"The blessing's later consequences", refs:[
      { r:"Genesis 28:1-5", note:"Isaac blesses Jacob again openly before sending him to Laban" },
      { r:"Hebrews 11:20", note:"Isaac's blessing of Jacob and Esau counted as an act of faith 'even regarding things to come'" },
      { r:"Hebrews 12:16-17", note:"Esau's loss of blessing recalled as a warning against traded birthrights" } ]},
    { group:"Deception repaid in kind", refs:[
      { r:"Genesis 29:21-25", note:"Laban deceives Jacob on his wedding night, echoing Jacob's own trick here" },
      { r:"Genesis 37:31-33", note:"Jacob's own sons later deceive him with Joseph's bloodied coat" },
      { r:"Galatians 6:7", note:"'whatever a man sows, that he will also reap' — a principle the whole Jacob cycle illustrates" } ]}
  ]
},

/* ===== GENESIS 28 — Jacob's Ladder at Bethel ===== */
"1:28": {
  era: { title: "Jacob flees Canaan, c. mid-2nd millennium BC", sub: "Fleeing Esau's anger toward Haran · a night stop becomes a vision of heaven opened",
    badges: ["Patriarchal age", "A fugitive with a stone pillow", "Covenant renewed to the third generation"] },
  timeOfDay: "night",
  summary: "Isaac sends Jacob away to Paddan-aram to find a wife among Laban's daughters, warning him against Canaanite women, and blesses him with Abraham's covenant before he leaves; Esau, noting his parents' disapproval of Canaanite wives, marries a daughter of Ishmael as well (vv. 1-9). On the road, Jacob stops for the night at an unnamed place, using a stone for a pillow, and dreams of a stairway set on the earth with its top reaching heaven, angels ascending and descending on it, and the LORD standing above it. The LORD renews to Jacob the promises given to Abraham and Isaac — land, offspring like the dust of the earth, blessing to all families, and God's own presence and protection until he brings Jacob back (vv. 10-15). Jacob wakes in awe, declares 'surely the LORD is in this place, and I did not know it,' sets up his stone pillow as a pillar, anoints it with oil, renames the place Bethel ('house of God'), and vows that if God brings him home safely, the LORD will be his God and he will give a tenth of everything back (vv. 16-22).",
  focusPlace: "bethel",
  places: [
    { id:"bethel", role:"Where Jacob stops for the night, dreams of the stairway to heaven, and sets up his pillow-stone as a pillar (vv. 11-19)" },
    { id:"haran", role:"Jacob's destination, his mother Rebekah's homeland and Laban's household (vv. 2, 10)" }
  ],
  journey: [
    { from:"hebron", to:"bethel", label:"First leg of Jacob's flight north", km:75, note:"Jacob leaves his father's household at Hebron/Beersheba country and heads toward Haran, stopping the first night at Bethel." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Isaac sends Jacob off", av:"elder", desc:"Isaac blesses Jacob with 'the blessing of Abraham' and sends him to Paddan-aram to marry within the family (vv. 1-5)." },
    { x:0.30, type:"person", label:"Esau marries a daughter of Ishmael", av:"shepherd", desc:"Seeing his Canaanite wives displease his parents, Esau adds Ishmael's daughter Mahalath to his household (vv. 6-9)." },
    { x:0.50, type:"object", label:"The stone pillow", desc:"Jacob takes a stone of that place, puts it under his head, and lies down to sleep (v. 11)." },
    { x:0.65, type:"object", label:"The stairway to heaven", desc:"A stairway set on the earth reaching to heaven, with angels ascending and descending on it, and the LORD standing above (vv. 12-13)." },
    { x:0.80, type:"person", label:"The covenant renewed", av:"elder", desc:"The LORD repeats Abraham's promises to Jacob directly — land, offspring, blessing, and a pledge of presence (vv. 13-15)." },
    { x:0.95, type:"object", label:"Bethel's pillar and the tithe vow", desc:"Jacob sets up his stone as a pillar, names the place Bethel, and vows a tenth of all God gives him (vv. 18-22)." }
  ],
  environment: {
    chips: ["A lone traveler's camp, not a city", "Stone for a pillow", "Angels on a stairway", "Covenant renewed in a dream", "Oil poured on stone", "A vow, not yet a temple"],
    text: "Bethel here is no more than open highland ground beside the road from Hebron to Haran — no altar, no shrine, just a good flat stone and a spot to sleep. Jacob's vision transforms an ordinary night's stop into 'the gate of heaven,' and his single stone becomes the seed of the sanctuary later generations would build on this same site."
  },
  objectsExtra: ["jacobs-ladder", "jacobs-pillar-stone"],
  peopleExtra: [],
  culture: [
    { title:"A fugitive receiving Abraham's blessing", icon:"🪜",
      text:"Jacob leaves home not in triumph but in flight from a brother's murderous anger, yet it is precisely here — alone, poor, and afraid — that God confirms to him the covenant given to Abraham and Isaac. The blessing follows the chosen line regardless of the recipient's circumstances." },
    { title:"Bethel as sacred geography", icon:"🏛️",
      text:"Bethel becomes one of Israel's most significant worship sites, visited again by Jacob in Genesis 35 and later host to a rival royal shrine under Jeroboam (1 Kings 12:29) — a use of the site the prophets condemn as a corruption of what began here as a spontaneous vow." },
    { title:"Vow-making in the ancient world", icon:"🤝",
      text:"Jacob's conditional vow ('if God will be with me... then the LORD shall be my God') reflects a common ancient Near Eastern pattern of bargaining with deity for protection on a journey, though Genesis frames it as the beginning of Jacob's own, still-developing faith rather than mere transaction." }
  ],
  crossRefs: [
    { group:"The stairway remembered", refs:[
      { r:"John 1:51", note:"Jesus tells Nathanael he will see heaven opened and angels ascending/descending on the Son of Man" },
      { r:"Genesis 35:1-15", note:"Jacob returns to Bethel and renews the vow" },
      { r:"Hosea 12:4", note:"recalls Jacob meeting God at Bethel" } ]},
    { group:"The covenant handed down", refs:[
      { r:"Genesis 12:1-3", note:"the same promises first given to Abraham" },
      { r:"Genesis 26:2-5", note:"renewed to Isaac" },
      { r:"Genesis 35:9-12", note:"confirmed again to Jacob at Bethel" } ]}
  ]
},

/* ===== GENESIS 29 — Jacob Serves Laban, Tricked into Two Marriages ===== */
"1:29": {
  era: { title: "Jacob arrives in Haran, c. mid-2nd millennium BC", sub: "A well, a kiss, and a wedding-night deception · seven years of labor doubled to fourteen",
    badges: ["Patriarchal age", "Laban's household", "Love, trickery, and rival sisters"] },
  timeOfDay: "day",
  summary: "Jacob arrives at a well near Haran, rolls the stone away to water Rachel's flock, and, learning she is Laban's daughter, kisses her and weeps aloud; Laban welcomes him and he stays a month, then agrees to serve seven years for Rachel, 'the younger and more beautiful,' years that seem to him but a few days (vv. 1-20). On the wedding night Laban substitutes Leah, the older, weaker-eyed daughter, and Jacob only discovers the trick the next morning; Laban's excuse is local custom — the younger cannot marry before the firstborn — but offers Rachel too after a bridal week, for another seven years of service, plus each daughter a maidservant, Zilpah for Leah and Bilhah for Rachel (vv. 21-30). Seeing Leah unloved, the LORD opens her womb while Rachel remains barren; Leah bears Reuben, Simeon, Levi, and Judah in succession, naming each son to express her hope that her husband's love would follow (vv. 31-35).",
  focusPlace: "haran",
  places: [
    { id:"bethel", role:"Where Jacob's ladder vision took place before he continued on to Haran (Gen 28)" },
    { id:"haran", role:"Laban's home city, site of the well, Jacob's arrival, and both weddings (vv. 1-30)" }
  ],
  journey: [
    { from:"bethel", to:"haran", label:"Jacob completes his flight to Paddan-aram", km:640, note:"Jacob travels on from his Bethel vision to Laban's household, where he will spend the next twenty years." }
  ],
  hotspots: [
    { x:0.08, type:"object", label:"The well and its stone", desc:"Shepherds wait for all the flocks to gather before rolling the great stone from the well's mouth; Jacob alone rolls it away for Rachel (vv. 2-10)." },
    { x:0.22, type:"person", label:"Jacob meets Rachel", av:"woman", desc:"Jacob waters her flock, kisses her, and weeps aloud on learning she is his kinswoman (vv. 10-12)." },
    { x:0.40, type:"person", label:"Seven years 'like a few days'", av:"shepherd", desc:"Jacob agrees to serve Laban seven years for Rachel, and the text notes his love made the years feel short (vv. 18-20)." },
    { x:0.58, type:"person", label:"The wedding-night substitution", av:"woman", desc:"Laban brings Leah instead of Rachel under cover of darkness and feasting; Jacob does not discover it until morning (vv. 21-25)." },
    { x:0.75, type:"person", label:"Rachel given after a bridal week", av:"elder", desc:"Laban defends the switch by custom, then gives Rachel too for a second seven years' labor (vv. 26-30)." },
    { x:0.92, type:"person", label:"Leah's four sons", av:"woman", desc:"Unloved but fertile, Leah bears Reuben, Simeon, Levi, and Judah, naming each for her hope of Jacob's affection (vv. 31-35)." }
  ],
  environment: {
    chips: ["A shepherds' well outside the city", "Custom trumps promise", "Two sisters, one husband", "Bride-service, not bride-price", "Naming as prayer", "The deceiver deceived"],
    text: "Haran's countryside is watering-hole and pastureland, not palace — shepherds gather flocks at a communal well until the whole company can move the covering stone together. The deceptions inside Laban's household mirror, almost exactly, the deception Jacob himself worked on Isaac and Esau — the trickster now finds himself tricked by a craftier uncle."
  },
  objectsExtra: [],
  peopleExtra: ["rachel", "leah", "bilhah", "zilpah", "reuben", "simeon", "levi", "judah"],
  culture: [
    { title:"Bride-service in the ancient Near East", icon:"🐑",
      text:"Rather than paying a bride-price outright, Jacob works seven years for each wife — an arrangement attested elsewhere in the ancient Near East for a man without property of his own, though Laban's demand for two full terms is exploitative even by that standard." },
    { title:"The younger-before-elder reversal", icon:"🔄",
      text:"Laban's excuse — 'it is not so done in our place, to give the younger before the firstborn' — pointedly echoes back on Jacob, who took his own older brother's blessing; the deceiver is deceived by the very principle he had overturned at home." },
    { title:"Naming children as testimony", icon:"📛",
      text:"Leah's son-names (Reuben 'see, a son'; Simeon 'heard'; Levi 'attached'; Judah 'praise') trace her emotional arc from seeking Jacob's love to finally simply praising God — a pattern of naming-as-prayer common throughout Genesis." }
  ],
  crossRefs: [
    { group:"Wells as meeting places", refs:[
      { r:"Genesis 24:11-27", note:"Rebekah met at a well in the same way" },
      { r:"Exodus 2:15-21", note:"Moses meets Zipporah at a well in Midian" },
      { r:"John 4:6-7", note:"Jesus meets the Samaritan woman at Jacob's own well" } ]},
    { group:"Jacob's deception returned", refs:[
      { r:"Genesis 27:18-29", note:"Jacob's own deceit of Isaac and Esau" },
      { r:"Genesis 31:7", note:"Jacob later accuses Laban of repeated deception" },
      { r:"Galatians 6:7", note:"a man reaps what he sows" } ]}
  ]
},

/* ===== GENESIS 30 — The Birth of Jacob's Sons and His Flock Scheme ===== */
"1:30": {
  era: { title: "Jacob's household grows in Haran, c. mid-2nd millennium BC", sub: "A rivalry between sisters plays out through sons · Jacob's wages become his own flocks",
    badges: ["Patriarchal age", "Sibling rivalry over motherhood", "Selective breeding and shrewd bargaining"] },
  timeOfDay: "day",
  summary: "Envious of Leah's fertility, Rachel gives Jacob her maid Bilhah, who bears Dan and Naphtali; Leah, no longer bearing, gives her maid Zilpah, who bears Gad and Asher (vv. 1-13). A mandrake trade between the sisters — Leah's son Reuben's find, swapped for a night with Jacob — leads to Leah bearing Issachar, Zebulun, and a daughter, Dinah, before God finally remembers Rachel, who bears Joseph (vv. 14-24). With his large family, Jacob asks Laban to let him return home, but Laban, having prospered because of him, persuades him to stay for wages: all the speckled, spotted, and dark sheep and goats going forward will be Jacob's (vv. 25-34). Laban immediately removes such animals to sons three days away, but Jacob uses peeled rods at the watering troughs to influence the breeding, growing exceedingly strong flocks for himself and leaving Laban the weaker ones (vv. 35-43).",
  focusPlace: "haran",
  places: [
    { id:"haran", role:"Where Jacob's household grows and his wage-negotiation with Laban plays out (vv. 1-43)" },
    { id:"hebron", role:"Isaac's household back in Canaan, the home Jacob asks to return to (v. 25)" }
  ],
  journey: [
    { from:"haran", to:"hebron", dashed:true, label:"The homeward pull, not yet acted on", km:640,
      note:"Jacob asks to leave for 'my own home and country' (v. 25) — the same Canaan homeland he will not actually reach until two more chapters pass." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Bilhah bears Dan and Naphtali", av:"woman", desc:"Rachel gives her maid to Jacob 'that she may bear on my knees,' and Bilhah bears two sons (vv. 3-8)." },
    { x:0.25, type:"person", label:"Zilpah bears Gad and Asher", av:"woman", desc:"Leah, having stopped bearing, gives Zilpah, who bears two more sons for Leah's household (vv. 9-13)." },
    { x:0.40, type:"object", label:"Reuben's mandrakes", desc:"Reuben finds mandrakes in the field; Leah trades them to Rachel for a night with Jacob, resulting in Issachar's birth (vv. 14-18)." },
    { x:0.55, type:"person", label:"Leah's final children", av:"woman", desc:"Leah bears Zebulun and then a daughter, Dinah (vv. 19-21)." },
    { x:0.70, type:"person", label:"Rachel bears Joseph", av:"woman", desc:"'God remembered Rachel... and opened her womb,' and she bears Joseph, praying for 'another son' (vv. 22-24)." },
    { x:0.90, type:"object", label:"The peeled rods at the troughs", desc:"Jacob sets striped rods before the flocks at breeding time, producing streaked and spotted young that become his own wages (vv. 37-42)." }
  ],
  environment: {
    chips: ["A household of rival wives", "Two maidservants added as mothers", "Mandrakes as a bargaining chip", "Eleven sons by chapter's end", "Watering troughs as a breeding ground", "Shrewdness matching shrewdness"],
    text: "The setting stays Laban's pastureland around Haran, but the real drama is domestic — two sisters competing for status through childbearing, their maids drawn into the contest, and Jacob himself now applying to livestock the same cunning once used to win a blessing, turning ordinary watering troughs into the site of his rising fortune."
  },
  objectsExtra: ["striped-rods"],
  peopleExtra: ["dan", "naphtali", "gad-son-jacob", "asher", "issachar", "zebulun", "dinah", "joseph-ot"],
  culture: [
    { title:"Surrogate motherhood through maids", icon:"👶",
      text:"Giving a maidservant to a husband to bear children 'on the wife's knees' — legally counted as the wife's own — was an accepted ancient practice for infertility, seen earlier with Sarah and Hagar (Gen 16); here it escalates a rivalry rather than resolving one." },
    { title:"Mandrakes and fertility folklore", icon:"🌱",
      text:"Mandrakes were widely believed in the ancient world to promote conception and were prized as a folk aphrodisiac; the sisters' trade over them shows how desperately both wanted more standing through motherhood, even while Rachel remained the more loved wife." },
    { title:"Selective breeding, ancient style", icon:"🐐",
      text:"Jacob's rod trick reflects a real (if not fully understood) ancient breeding technique combined, in the narrative's own framing, with divine favor (Gen 31:9-12) — Jacob later credits God, not folk magic, for his flocks' growth." }
  ],
  crossRefs: [
    { group:"The twelve tribes taking shape", refs:[
      { r:"Genesis 35:23-26", note:"the full roster of Jacob's twelve sons by mother" },
      { r:"Genesis 49:1-28", note:"Jacob's deathbed blessings on each son" },
      { r:"Exodus 1:1-5", note:"the sons who go down into Egypt" } ]},
    { group:"Barrenness reversed by God", refs:[
      { r:"Genesis 25:21", note:"Rebekah's own barrenness reversed by prayer" },
      { r:"1 Samuel 1:19-20", note:"Hannah's barrenness reversed, echoing Rachel's" },
      { r:"Genesis 31:9", note:"Jacob credits God, not craft, for his flocks" } ]}
  ]
},

/* ===== GENESIS 31 — Jacob Flees Laban and the Covenant at Gilead ===== */
"1:31": {
  era: { title: "Jacob's flight from Haran, c. mid-2nd millennium BC", sub: "Twenty years of service end in flight · a chase, a search for stolen gods, a covenant of stones",
    badges: ["Patriarchal age", "Twenty years' service ended", "Household gods and a parting covenant"] },
  timeOfDay: "day",
  summary: "Sensing Laban's sons' resentment and God's own command to return home, Jacob secretly leaves Haran with his wives, children, and flocks while Laban is away shearing sheep; Rachel steals her father's household gods (teraphim) without Jacob's knowledge (vv. 1-21). Laban pursues for seven days and overtakes Jacob in the hill country of Gilead, but God warns him in a dream not to harm Jacob; Laban instead confronts him over the flight and the missing gods, searching every tent but not finding them, since Rachel has hidden them and sits on them, claiming to be indisposed (vv. 22-35). Jacob angrily recounts his twenty years of faithful, unrewarded labor and Laban's repeated wage-changing, and the two make a covenant, raising a stone pillar and heap called Galeed/Mizpah as witness that neither will cross it to harm the other; Laban blesses his daughters and grandchildren and departs, while Jacob continues toward Canaan (vv. 36-55).",
  focusPlace: "gilead-heights",
  places: [
    { id:"gilead-heights", role:"Where Laban overtakes Jacob and the two strike their parting covenant of stones (vv. 21-25, 44-49)" },
    { id:"haran", role:"The household Jacob and his family secretly flee from (vv. 17-21)" }
  ],
  journey: [
    { from:"haran", to:"gilead-heights", label:"Jacob's flight and Laban's pursuit", km:560, note:"Jacob flees with his whole household while Laban is away shearing; Laban pursues seven days and catches him in Gilead's hill country." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Jacob's secret departure", av:"shepherd", desc:"Jacob slips away with his family and flocks while Laban is shearing sheep three days off (vv. 17-21)." },
    { x:0.20, type:"object", label:"Rachel steals the household gods", desc:"Rachel takes her father's teraphim without telling Jacob, for reasons the text leaves unexplained (v. 19)." },
    { x:0.40, type:"person", label:"God warns Laban in a dream", av:"elder", desc:"'Take care that you say nothing to Jacob, either good or bad' — God restrains Laban's anger before he catches up (v. 24)." },
    { x:0.55, type:"object", label:"The fruitless search for the teraphim", desc:"Laban searches every tent; Rachel hides the idols in her camel's saddle and sits on them, claiming a woman's condition (vv. 33-35)." },
    { x:0.72, type:"person", label:"Jacob's twenty-years speech", av:"shepherd", desc:"Jacob recounts unpaid labor, changed wages, and God's protection through it all (vv. 36-42)." },
    { x:0.90, type:"object", label:"The Galeed/Mizpah covenant heap", desc:"Jacob and Laban raise a stone heap and pillar as witness to their non-aggression covenant before parting ways (vv. 44-49)." }
  ],
  environment: {
    chips: ["A furtive night departure", "A father's pursuit across the frontier", "Idols hidden under a saddle", "Twenty years' grievances aired", "A boundary marked in stone", "Two households finally parting"],
    text: "The chapter moves from Haran's pastures to the rugged Gilead highlands east of the Jordan, the natural border between Aram and Canaan. The stone heap Jacob and Laban raise there functions as an ancient treaty marker — 'the LORD watch between you and me' becomes a boundary oath, not a blessing, sealing the final break between Jacob's family and his uncle's household."
  },
  objectsExtra: ["teraphim", "mizpah-heap"],
  peopleExtra: [],
  culture: [
    { title:"Household gods and inheritance rights", icon:"🗿",
      text:"Teraphim in the ancient Near East were sometimes linked to household inheritance claims or family protection, which may explain why Rachel took them rather than simple sentiment; Laban calls them 'my gods,' underscoring his own household's lingering polytheism even within Abraham's extended family." },
    { title:"Treaty-making by stone heap", icon:"🪨",
      text:"Raising a pillar and stone heap as a covenant witness was a recognized ancient Near Eastern treaty custom, functioning much like a boundary marker between two parties who no longer trust spoken word alone — the name 'Mizpah' ('watchtower') becomes proverbial for God's own oversight of parted friends." },
    { title:"Jacob's grievance as vindication", icon:"⚖️",
      text:"Jacob's fiery recounting of frost by night and heat by day, changed wages ten times over, and Laban's exploitation reframes the whole Haran narrative: Jacob's prosperity is presented not as trickery but as God's own just recompense for real mistreatment." }
  ],
  crossRefs: [
    { group:"Household idolatry lingers", refs:[
      { r:"Joshua 24:2, 14-15", note:"Joshua later recalls that the patriarchs' ancestors served other gods beyond the river" },
      { r:"Genesis 35:2-4", note:"Jacob has his household bury its foreign gods at Bethel" },
      { r:"Judges 17:5", note:"teraphim reappear in Micah's household shrine" } ]},
    { group:"Covenants sealed with stones", refs:[
      { r:"Joshua 4:20-24", note:"twelve stones set up as a covenant memorial at Gilgal" },
      { r:"Genesis 28:18-22", note:"Jacob's earlier pillar-stone vow at Bethel" },
      { r:"Genesis 21:27-31", note:"Abraham and Abimelech's earlier well covenant" } ]}
  ]
},

/* ===== GENESIS 32 — Wrestling at Peniel ===== */
"1:32": {
  era: { title: "Jacob's return to Canaan, c. mid-2nd millennium BC", sub: "Messengers sent ahead to Esau · a night alone at the Jabbok ends in a new name",
    badges: ["Patriarchal age", "Fear of a wronged brother", "Wrestling with God, renamed Israel"] },
  timeOfDay: "night",
  summary: "Jacob sends messengers ahead to Esau in Edom with a conciliatory message, but they return reporting Esau is coming with four hundred men; terrified, Jacob divides his camp into two companies for safety, prays urgently reminding God of his promises, and sends ahead generous droves of livestock as a gift to appease his brother (vv. 1-21). That night, having sent his family across the Jabbok, Jacob is left alone and wrestles with a man until daybreak; unable to overcome Jacob, the man touches his hip socket, putting it out of joint, yet Jacob clings on demanding a blessing. The man renames him Israel — 'for you have striven with God and with men, and have prevailed' — and blesses him there; Jacob names the place Peniel, 'for I have seen God face to face, and yet my life has been delivered,' and limps away from the encounter as the sun rises (vv. 22-32).",
  focusPlace: "penuel",
  places: [
    { id:"penuel", role:"Where Jacob wrestles through the night, is renamed Israel, and limps away at dawn (vv. 24-31)" },
    { id:"mahanaim", role:"Named just before, when Jacob meets God's angels and calls the place 'two camps' (vv. 1-2)" },
    { id:"edom", role:"Esau's territory, from which the four hundred men are reported coming (vv. 3, 6)" }
  ],
  journey: [
    { from:"gilead-heights", to:"penuel", label:"Jacob's approach to the Jabbok crossing", km:40, note:"Jacob moves his household and flocks south from Gilead toward the Jabbok ford, sending gifts and messengers ahead to Esau." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Angels meet Jacob at Mahanaim", av:"traveler", desc:"'This is God's camp,' Jacob says, naming the place Mahanaim, 'two camps' (vv. 1-2)." },
    { x:0.22, type:"person", label:"Messengers report Esau's four hundred men", av:"traveler", desc:"Jacob's fear is described bluntly — 'greatly afraid and distressed' — prompting his defensive split of the camp (vv. 3-8)." },
    { x:0.38, type:"person", label:"Jacob's prayer of desperation", av:"elder", desc:"Jacob appeals to God's own promises, confessing he is unworthy of the steadfast love already shown him (vv. 9-12)." },
    { x:0.55, type:"object", label:"The appeasement gift", desc:"Jacob sends droves of goats, sheep, camels, cattle, and donkeys ahead in waves to soften Esau's anger (vv. 13-21)." },
    { x:0.75, type:"person", label:"The wrestling match", av:"warrior", desc:"A man wrestles Jacob until daybreak, touching his hip socket out of joint when he cannot prevail (vv. 24-25)." },
    { x:0.92, type:"person", label:"Renamed Israel at Peniel", av:"elder", desc:"'Your name shall no longer be called Jacob, but Israel'; Jacob names the place Peniel, having seen God face to face (vv. 28-30)." }
  ],
  environment: {
    chips: ["Two camps at Mahanaim", "Four hundred men reported approaching", "Waves of livestock sent as tribute", "A solitary night crossing", "A hip put out of joint", "Sunrise on a new name"],
    text: "The action moves along the Jabbok gorge, a steep tributary valley east of the Jordan, from the open highland camp at Mahanaim down to the ford at Peniel/Penuel. The setting is deliberately isolating — Jacob sends everyone he loves ahead across the stream and is left utterly alone for the encounter that changes both his name and his gait."
  },
  objectsExtra: [],
  peopleExtra: [],
  culture: [
    { title:"Who was the wrestler?", icon:"👤",
      text:"The text calls him simply 'a man,' yet Jacob names the place 'I have seen God face to face,' and Hosea 12:4 identifies him with 'the angel.' Interpreters have long read this as a theophany — God himself, or his messenger, meeting Jacob in physically resistible form on the one night he is most alone and afraid." },
    { title:"A name change marking a turning point", icon:"📛",
      text:"Renaming at a decisive moment recurs throughout Genesis (Abram to Abraham, Sarai to Sarah); 'Israel' likely means something like 'God strives' or 'he strives with God,' recasting Jacob's whole life of striving — with brother, father-in-law, and now God himself — as the very meaning of his new identity." },
    { title:"A wound that becomes a memorial", icon:"🦵",
      text:"The note that Israelites do not eat the hip's sciatic nerve 'because he touched the socket of Jacob's thigh' (v. 32) preserves in dietary custom a permanent, bodily reminder of the night the nation's ancestor was both wounded and blessed in the same encounter." }
  ],
  crossRefs: [
    { group:"Wrestling with God, echoed later", refs:[
      { r:"Hosea 12:3-4", note:"recalls Jacob striving with the angel and weeping for favor" },
      { r:"Genesis 35:10", note:"the Israel name confirmed again at Bethel" },
      { r:"Exodus 12:22-23", note:"a later, differently-toned night encounter framing Israel's identity" } ]},
    { group:"Fear of a wronged party, faced head-on", refs:[
      { r:"Genesis 27:41-45", note:"Esau's original vow to kill Jacob, the source of this fear" },
      { r:"Genesis 33:1-4", note:"the reunion this chapter's fear anticipates" },
      { r:"Proverbs 21:14", note:"'a gift in secret averts anger' — the logic behind Jacob's tribute" } ]}
  ]
},

/* ===== GENESIS 33 — Reunion with Esau ===== */
"1:33": {
  era: { title: "Jacob's reconciliation, c. mid-2nd millennium BC", sub: "Four hundred men approach — and embrace instead of attack · Jacob settles near Shechem",
    badges: ["Patriarchal age", "A feared reunion turns to embrace", "Settling in Canaan at last"] },
  timeOfDay: "day",
  summary: "Still limping from the night before, Jacob arranges his household with the maidservants and their children first, Leah and hers next, and Rachel and Joseph last, then goes ahead bowing seven times as Esau approaches with his four hundred men. Esau runs to meet him, embraces him, falls on his neck, and weeps — the anticipated attack becomes a reunion (vv. 1-4). Esau meets the family and questions the droves sent ahead; Jacob insists he keep the gift, saying seeing Esau's face is like seeing the face of God, now that he has been received favorably (vv. 5-11). Esau offers to travel together or leave some men as escort, but Jacob politely declines both, citing his flocks' and children's slower pace, and the brothers part on good terms, Esau returning to Seir while Jacob turns instead toward Succoth, building a shelter for his livestock, then on to Shechem, where he buys land, pitches his tent, and sets up an altar called El-Elohe-Israel (vv. 12-20).",
  focusPlace: "shechem",
  places: [
    { id:"penuel", role:"Where the previous night's wrestling left Jacob limping into this reunion (v. 1, referring back to ch. 32)" },
    { id:"edom", role:"Esau's home territory of Seir, to which he returns after the reunion (v. 16)" },
    { id:"shechem", role:"Where Jacob finally settles, buying land, pitching his tent, and building an altar (vv. 18-20)" }
  ],
  journey: [
    { from:"penuel", to:"shechem", label:"Jacob's route to permanent settlement in Canaan", km:70, note:"After the reunion with Esau, Jacob moves south to Succoth then west into Canaan proper, settling at last near Shechem." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Jacob's careful arrangement of his family", av:"shepherd", desc:"Jacob orders his household by perceived priority — maids and their sons first, Leah's family next, Rachel and Joseph last and safest (vv. 1-2)." },
    { x:0.25, type:"person", label:"Esau runs to embrace Jacob", av:"shepherd", desc:"Esau runs, embraces, falls on Jacob's neck, and both weep — the feared confrontation dissolves instantly (v. 4)." },
    { x:0.45, type:"person", label:"Jacob insists Esau keep the gift", av:"elder", desc:"'To see your face is like seeing the face of God, since you have received me favorably' (vv. 8-11)." },
    { x:0.60, type:"person", label:"Esau's offer of escort declined", av:"shepherd", desc:"Jacob politely turns down travel together, citing the slower pace of children and nursing flocks (vv. 12-15)." },
    { x:0.78, type:"object", label:"Succoth's shelters", desc:"Jacob builds a house for himself and booths for his livestock, giving the place its name, 'booths' (v. 17)." },
    { x:0.92, type:"object", label:"The altar at Shechem", desc:"Jacob buys a plot of land from Hamor's sons and builds an altar named El-Elohe-Israel, 'God, the God of Israel' (vv. 18-20)." }
  ],
  environment: {
    chips: ["A feared army becomes a welcome party", "Seven bows before an embrace", "Gifts pressed, then accepted", "A polite parting of ways", "Booths at Succoth", "Land purchased near Shechem"],
    text: "The chapter moves from the tense approach along the Jabbok to open pastureland near Shechem, in the hill-country pass between Ebal and Gerizim. Jacob's purchase of land here — rather than simple squatting — quietly foreshadows Israel's eventual claim to Canaan through legitimate acquisition, not just conquest."
  },
  objectsExtra: [],
  peopleExtra: [],
  culture: [
    { title:"Reconciliation instead of vengeance", icon:"🤗",
      text:"Esau's run to embrace Jacob — echoing the prodigal son's father centuries of narrative later — subverts every fear Jacob has carried since fleeing home two decades earlier, showing time and estranged distance can dissolve even a vow of murder (Gen 27:41)." },
    { title:"Diplomatic gift-giving", icon:"🎁",
      text:"Jacob's insistence Esau accept his tribute, framed as seeing 'the face of God,' reflects ancient Near Eastern protocol where accepting a gift signaled genuine reconciliation, not mere politeness — refusing it would have left the peace in doubt." },
    { title:"A purchased foothold in the promised land", icon:"🏞️",
      text:"Jacob's land purchase at Shechem (later confirmed as Joseph's burial site, Joshua 24:32) is one of only a few explicit land purchases by the patriarchs in Canaan, alongside Abraham's cave at Machpelah — small legal footholds within a land not yet possessed." }
  ],
  crossRefs: [
    { group:"Brothers reconciled", refs:[
      { r:"Genesis 27:41", note:"Esau's original vow to kill Jacob after their father's death" },
      { r:"Luke 15:20", note:"the father runs to embrace the prodigal, echoing Esau's run here" },
      { r:"Obadiah 1:10", note:"later prophecy recalls violence between Jacob and Esau's descendants, a contrast to this reconciliation" } ]},
    { group:"Shechem's later significance", refs:[
      { r:"Joshua 24:1, 32", note:"Israel's covenant renewal at Shechem; Joseph's bones buried in this purchased plot" },
      { r:"Genesis 34:1-2", note:"the very next event at this same settlement" },
      { r:"John 4:5-6", note:"Jacob's well near Sychar, tied to this same ground" } ]}
  ]
},

/* ===== GENESIS 34 — Dinah and the Shechemites ===== */
"1:34": {
  era: { title: "Violence at Shechem, c. mid-2nd millennium BC", sub: "A prince's crime, a false peace treaty, and a massacre",
    badges: ["Patriarchal age", "Dinah violated", "Simeon and Levi's vengeance"] },
  timeOfDay: "day",
  summary: "Dinah, Jacob and Leah's daughter, goes out to visit the women of the land and is seized and violated by Shechem, son of Hamor the Hivite ruler; yet Shechem's heart is drawn to her, and he asks his father to secure her as a wife (vv. 1-4). Jacob hears but stays silent until his sons return; Hamor proposes intermarriage and free settlement between the two peoples, and Shechem himself offers any bride-price, however great (vv. 5-12). Jacob's sons answer deceitfully, saying they cannot give their sister to an uncircumcised man, but will agree if every male of the city is circumcised; Hamor and Shechem persuade their city to accept the terms (vv. 13-24). On the third day, while the men are still in pain, Simeon and Levi, Dinah's full brothers, attack the city, kill every male including Hamor and Shechem, rescue Dinah, and the rest of Jacob's sons plunder the city, flocks, wealth, women, and children; Jacob rebukes Simeon and Levi for endangering the family among the land's inhabitants, but they justify it: 'should he treat our sister like a prostitute?' (vv. 25-31).",
  focusPlace: "shechem",
  places: [
    { id:"shechem", role:"The city where Dinah is violated and where the entire massacre and plunder take place (vv. 1-29)" },
    { id:"hebron", role:"Isaac's household and Jacob's wider family base, though the action here stays entirely at Shechem" }
  ],
  journey: [
    { from:"hebron", to:"shechem", dashed:true, label:"Jacob's family, settled just outside the old homestead", km:50,
      note:"Jacob's household had recently moved from the Hebron region to buy land near Shechem (Gen 33:18-19); this line marks that recent, uneasy proximity to Isaac's household further south." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Dinah goes out among the women", av:"woman", desc:"Dinah visits the local women and is seized and violated by Shechem, the ruler's son (vv. 1-2)." },
    { x:0.28, type:"person", label:"Shechem seeks marriage", av:"elder", desc:"Despite the crime, Shechem's heart clings to Dinah, and he asks Hamor to arrange the marriage properly (vv. 3-4, 11-12)." },
    { x:0.45, type:"person", label:"Hamor's offer of intermarriage", av:"elder", desc:"Hamor proposes full intermarriage, land rights, and trade between the two peoples (vv. 8-10)." },
    { x:0.62, type:"object", label:"The demand for circumcision", desc:"Jacob's sons deceitfully require every Shechemite male circumcised as the price of the alliance (vv. 13-17)." },
    { x:0.80, type:"person", label:"Simeon and Levi's massacre", av:"warrior", desc:"On the third day, while the men are incapacitated, Simeon and Levi kill every male in the city and take Dinah home (vv. 25-26)." },
    { x:0.95, type:"person", label:"Jacob's rebuke", av:"elder", desc:"Jacob fears reprisal from the surrounding peoples; his sons reply that their sister's honor demanded it (vv. 30-31)." }
  ],
  environment: {
    chips: ["A visit among strangers turns violent", "A prince genuinely wants marriage", "Circumcision as a deceitful condition", "A city incapacitated by its own bargain", "Brothers acting as sole avengers", "A father's fear of retaliation"],
    text: "The whole chapter unfolds within and just outside Shechem's walls, the same city where Jacob had just purchased land and built an altar in the previous chapter. What begins as a hopeful step toward peaceful coexistence between Jacob's family and the local Hivites collapses into betrayal and slaughter, souring the family's first real foothold in Canaan."
  },
  objectsExtra: [],
  peopleExtra: ["dinah", "shechem-prince", "hamor"],
  culture: [
    { title:"Circumcision weaponized as deceit", icon:"⚔️",
      text:"Circumcision, the sacred sign of Abraham's covenant (Gen 17), is here cynically repurposed by Jacob's sons as a tactical trap rather than a spiritual sign — a misuse of holy symbol for revenge that the narrative does not excuse even while recording the initial crime against Dinah." },
    { title:"Honor, shame, and clan justice", icon:"🛡️",
      text:"In the ancient Near East, a sister's violation was regarded as an offense against the whole family's honor, and brothers — not fathers alone — were often expected to act as her avengers; Simeon and Levi's fury reflects this social code, even as the narrative and Jacob himself question its proportionality." },
    { title:"A dark shadow over Jacob's blessing", icon:"🌑",
      text:"Jacob's deathbed words in Genesis 49:5-7 curse Simeon and Levi's anger and scatter their descendants within Israel — this chapter's violence carries consequences that outlast the immediate crisis by generations." }
  ],
  crossRefs: [
    { group:"Consequences at Jacob's deathbed", refs:[
      { r:"Genesis 49:5-7", note:"Jacob curses Simeon and Levi's violent anger" },
      { r:"Genesis 35:5", note:"'a terror from God' protects the family as they flee Shechem's region" },
      { r:"Judges 9:1-6", note:"Shechem later resurfaces violently under Abimelech" } ]},
    { group:"Covenant sign misused", refs:[
      { r:"Genesis 17:10-14", note:"circumcision instituted as Abraham's covenant sign" },
      { r:"Deuteronomy 22:28-29", note:"later law addressing a comparable violation" },
      { r:"Romans 2:28-29", note:"Paul contrasts outward circumcision with an inward reality" } ]}
  ]
},

/* ===== GENESIS 35 — Return to Bethel, Rachel's Death, Isaac's Death ===== */
"1:35": {
  era: { title: "Jacob's return to Bethel and family losses, c. mid-2nd millennium BC", sub: "Foreign gods buried, vows renewed · Rachel dies bearing Benjamin, Isaac dies at Hebron",
    badges: ["Patriarchal age", "Bethel revisited", "Births and deaths mark the family's turn"] },
  timeOfDay: "day",
  summary: "God tells Jacob to return to Bethel and build an altar there; Jacob has his household put away their foreign gods, purify themselves, and change clothes, burying the idols and earrings under an oak near Shechem before departing, protected by 'a terror from God' on the surrounding cities (vv. 1-5). At Bethel, Jacob builds his altar, God appears again confirming his new name Israel and repeating the covenant blessings, and Deborah, Rebekah's nurse, dies and is buried nearby (vv. 6-15). Traveling on toward Ephrath (Bethlehem), Rachel dies in hard labor bearing her second son, naming him Ben-oni with her last breath, though Jacob calls him Benjamin; she is buried on the road, and Jacob sets up a pillar over her grave (vv. 16-20). Reuben sleeps with Bilhah, his father's concubine, a wrong that costs him standing; the chapter closes with the roster of Jacob's twelve sons and the death of Isaac at a hundred and eighty, buried by both Jacob and Esau at Hebron (vv. 21-29).",
  focusPlace: "bethel",
  places: [
    { id:"bethel", role:"Where Jacob builds his altar and God confirms the covenant and the name Israel again (vv. 1-15)" },
    { id:"bethlehem", role:"Near where Rachel dies giving birth to Benjamin and is buried on the road (vv. 16-19)" },
    { id:"hebron", role:"Where Isaac dies and is buried by both his sons (vv. 27-29)" }
  ],
  journey: [
    { from:"shechem", to:"bethel", label:"Jacob's return to the site of his first vision", km:30, note:"Jacob leads his purified household back to Bethel to fulfill the vow he made twenty years earlier fleeing Esau." },
    { from:"bethel", to:"bethlehem", label:"The final leg toward Hebron, cut short by tragedy", km:25, note:"Traveling on toward his father's home, Jacob loses Rachel in childbirth just short of Ephrath/Bethlehem." }
  ],
  hotspots: [
    { x:0.08, type:"object", label:"Foreign gods buried under the oak", desc:"Jacob has his household surrender their idols and earrings, burying them near Shechem before the journey to Bethel (vv. 2-4)." },
    { x:0.25, type:"person", label:"God confirms Israel's covenant again", av:"elder", desc:"At Bethel, God repeats the covenant blessings and Jacob's new name a second time (vv. 9-13)." },
    { x:0.40, type:"person", label:"Deborah's death", av:"woman", desc:"Rebekah's old nurse dies and is buried under an oak near Bethel, given her own brief memorial (v. 8)." },
    { x:0.58, type:"person", label:"Rachel dies bearing Benjamin", av:"woman", desc:"In hard labor near Ephrath, Rachel names her son Ben-oni with her dying breath; Jacob renames him Benjamin (vv. 16-19)." },
    { x:0.75, type:"person", label:"Reuben's sin with Bilhah", av:"youth", desc:"Reuben sleeps with his father's concubine Bilhah, an act Jacob later remembers against him (v. 22)." },
    { x:0.92, type:"person", label:"Isaac's death at Hebron", av:"elder", desc:"Isaac dies at 180, 'old and full of days,' buried by both Esau and Jacob together (vv. 27-29)." }
  ],
  environment: {
    chips: ["Idols buried before worship renewed", "A covenant confirmed a second time", "A nurse's quiet death noted", "A grave marked on the road to Bethlehem", "A father's dishonor by his firstborn", "Two estranged brothers burying their father together"],
    text: "The chapter's geography traces Jacob's long-delayed homecoming — Shechem to Bethel to the road toward Ephrath and finally to Hebron, retracing the route he fled twenty years before. Loss threads through every stop: a nurse, a beloved wife, and finally the patriarch Isaac himself, even as the family's covenant identity and twelve-tribe structure are formally completed."
  },
  objectsExtra: ["jacobs-pillar-stone"],
  peopleExtra: ["reuben", "benjamin"],
  culture: [
    { title:"Purification before worship", icon:"🧼",
      text:"Burying foreign gods and changing clothes before approaching Bethel reflects an ancient ritual-purity pattern — outward acts symbolizing an inward turning — that recurs whenever Israel formally recommits to covenant worship (compare Joshua 24:23)." },
    { title:"Rachel's grave, a lasting landmark", icon:"🪦",
      text:"The pillar Jacob raises over Rachel's tomb near Bethlehem is remembered centuries later (1 Samuel 10:2; Jeremiah 31:15), becoming one of the few patriarchal-era grave sites whose location tradition consistently preserved." },
    { title:"The twelve tribes completed", icon:"🔢",
      text:"With Benjamin's birth, the roster of Jacob's twelve sons — the future twelve tribes of Israel — is complete; the text pauses to list them all by mother (vv. 23-26), formally marking the family's transition from patriarchal household to nascent nation." }
  ],
  crossRefs: [
    { group:"Bethel's covenant confirmed twice", refs:[
      { r:"Genesis 28:10-19", note:"Jacob's first vision and vow at this same site" },
      { r:"Genesis 32:28", note:"the name Israel first given at Peniel" },
      { r:"Hosea 12:4-5", note:"recalls God meeting Jacob 'at Bethel'" } ]},
    { group:"Rachel and Benjamin remembered later", refs:[
      { r:"1 Samuel 10:2", note:"Rachel's tomb used as a landmark generations later" },
      { r:"Jeremiah 31:15", note:"Rachel weeping for her children, applied to exile" },
      { r:"Matthew 2:18", note:"quoted again over Herod's slaughter of the innocents" } ]}
  ]
},

/* ===== GENESIS 36 — Esau's Genealogy and the Kings of Edom ===== */
"1:36": {
  era: { title: "The generations of Esau, c. mid-2nd millennium BC and after", sub: "A genealogical chapter tracing Esau's line into a settled nation, Edom",
    badges: ["Patriarchal age", "A rival nation's family record", "Kings reigning before Israel had any"] },
  timeOfDay: "day",
  summary: "The chapter records Esau's wives (Canaanite and Ishmaelite women), his sons, and how he separates from Jacob because their combined livestock is too great for the land to support together, settling in the hill country of Seir — Esau being Edom (vv. 1-8). It then traces Esau's descendants as chiefs and clans in Seir, including through his son Eliphaz and Eliphaz's own sons, one born to the concubine Timna, and lists the Horite clans native to the land before Esau's family displaced or merged with them (vv. 9-30). The chapter closes with a list of the kings who reigned in Edom 'before any king reigned over the Israelites,' one dynasty succeeding another rather than passing by inheritance, followed by a final roster of Edom's chiefs by their settlements (vv. 31-43).",
  focusPlace: "edom",
  places: [
    { id:"hebron", role:"Isaac and Jacob's territory in Canaan, the homeland Esau formally leaves behind (v. 6)" },
    { id:"edom", role:"The hill country of Seir where Esau settles and his descendants become a nation of chiefs and kings (vv. 8-9, 31-43)" }
  ],
  journey: [
    { from:"hebron", to:"edom", label:"Esau's final separation from Jacob's territory", km:100, note:"Esau moves his household and abundant livestock away from Canaan into the hill country of Seir, since the land could not support both brothers' herds together." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Esau's wives and sons listed", av:"shepherd", desc:"Esau's Canaanite and Ishmaelite wives and their sons are recorded as the root of Edom's clans (vv. 1-5)." },
    { x:0.28, type:"object", label:"Separation from Jacob", desc:"'Their possessions were too great for them to dwell together,' so Esau moves away from Jacob into Seir (vv. 6-8)." },
    { x:0.50, type:"person", label:"Eliphaz and Timna's son Amalek", av:"elder", desc:"Esau's son Eliphaz fathers Amalek through the concubine Timna, founding a clan that becomes a recurring enemy of Israel (v. 12)." },
    { x:0.68, type:"person", label:"The Horite clans of Seir", av:"elder", desc:"The land's earlier inhabitants, the Horites, are listed by clan before or alongside Esau's own settlement there (vv. 20-30)." },
    { x:0.85, type:"person", label:"The kings who reigned before Israel had any", av:"king", desc:"A succession of Edomite kings is listed, notably not passing father to son, 'before any king reigned over the Israelites' (vv. 31-39)." },
    { x:0.95, type:"person", label:"Edom's chiefs by settlement", av:"elder", desc:"A final list names Esau's chiefs according to their clans and territories (vv. 40-43)." }
  ],
  environment: {
    chips: ["A genealogy, not a narrative", "Land too small for two brothers' herds", "A nation forming in the shadow of Israel", "Kings before Israel had kings", "Amalek's roots traced here", "Clans settling into fixed territory"],
    text: "Genesis 36 trades scene and story for record-keeping, cataloguing Edom's rise in the rugged hill country of Seir south of the Dead Sea. Its dry lists carry real weight: Esau's descendants become a full nation with kings generations before Israel has one of its own, and this chapter quietly plants the ancestry of Amalek, a foe who will trouble Israel for centuries."
  },
  objectsExtra: [],
  peopleExtra: [],
  culture: [
    { title:"Genealogies as literary hinges", icon:"📜",
      text:"Genesis regularly closes out a family line with a genealogy before turning fully to the chosen line's story (compare Gen 25:12-18 for Ishmael); Esau's genealogy here performs the same function, clearing the stage before Genesis 37 turns entirely to Jacob's sons and Joseph." },
    { title:"Edom's early kingship", icon:"👑",
      text:"The note that Edom had kings 'before any king reigned over the Israelites' has long interested readers as a possible clue to this material's final compilation, since it presupposes an Israelite monarchy already exists by the time the observation is made." },
    { title:"Amalek's troubling legacy", icon:"⚔️",
      text:"Amalek, traced here to Esau's grandson through a concubine, becomes one of Israel's fiercest recurring enemies (Exodus 17:8-16; 1 Samuel 15) — a small genealogical note in this chapter carries centuries of later conflict in its wake." }
  ],
  crossRefs: [
    { group:"Edom and Israel's later history", refs:[
      { r:"Numbers 20:14-21", note:"Edom later refuses Israel passage during the wilderness journey" },
      { r:"Obadiah 1:1-14", note:"a prophecy of judgment against Edom for violence toward Jacob's descendants" },
      { r:"Malachi 1:2-3", note:"'Jacob I loved, but Esau I hated' — reflecting on the two nations' diverging paths" } ]},
    { group:"Amalek's later conflicts with Israel", refs:[
      { r:"Exodus 17:8-16", note:"Amalek's first attack on Israel in the wilderness" },
      { r:"1 Samuel 15:1-9", note:"Saul's commanded campaign against Amalek" },
      { r:"Esther 3:1", note:"Haman the Agagite, traditionally linked to Amalek's line" } ]}
  ]
},

/* ===== GENESIS 37 — Joseph's Dreams and His Sale into Slavery ===== */
"1:37": {
  era: { title: "Patriarchal age, c. 1900s BC — Joseph sold into Egypt", sub: "Jacob's favoritism, two dreams of rule, and a caravan road to Egypt",
    badges: ["Patriarchal age", "Favored son, hated brothers", "Sold for twenty pieces of silver"] },
  timeOfDay: "day",
  summary: "Jacob's favoritism toward Joseph — visible in the ornamented robe he gives him — breeds deep resentment among his brothers, worsened when Joseph reports two dreams in which his family's sheaves and even sun, moon, and stars bow down to him (vv. 1-11). Sent to check on his brothers pasturing flocks near Shechem, Joseph is redirected to Dothan, where the brothers plot to kill him; Reuben persuades them to throw him into an empty cistern instead, hoping secretly to rescue him later (vv. 12-24). While Reuben is away, Judah proposes selling Joseph to a passing caravan of Ishmaelite/Midianite traders bound for Egypt, and the brothers do so for twenty pieces of silver (vv. 25-28). Reuben returns to find Joseph gone and is distraught; the brothers dip Joseph's robe in goat's blood and present it to Jacob, who concludes his son was torn apart by a wild animal and mourns inconsolably (vv. 29-35). Meanwhile the traders sell Joseph in Egypt to Potiphar, one of Pharaoh's officials (v. 36).",
  focusPlace: "dothan",
  places: [
    { id:"dothan", role:"Where the brothers spot Joseph approaching and plot against him, and where he is sold and lowered into a cistern (vv. 17-28)" },
    { id:"hebron", role:"Jacob's home, where Joseph is sent out from and where the false report of his death later arrives (vv. 13-14, 32-35)" },
    { id:"egypt", role:"Where the traders take Joseph and sell him to Potiphar (v. 36)" }
  ],
  journey: [
    { from:"hebron", to:"dothan", label:"Joseph sent to check on his brothers", km:100, note:"Jacob sends Joseph from Hebron to find his brothers, who have moved the flocks on from Shechem to Dothan." },
    { from:"dothan", to:"egypt", label:"Sold south with the caravan", km:400, note:"Ishmaelite/Midianite traders carry Joseph down into Egypt to sell him as a slave to Potiphar." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"The ornamented robe", desc:"Jacob's gift marks Joseph as favored above his brothers, who 'could not speak peacefully to him' (vv. 3-4)." },
    { x:0.20, type:"person", label:"Two dreams of rule", av:"youth", desc:"Joseph's dreams of sheaves and of sun, moon, and stars bowing to him provoke hatred from his brothers and a rebuke even from Jacob (vv. 5-11)." },
    { x:0.42, type:"person", label:"The plot at Dothan", av:"youth", desc:"Seeing Joseph approach, the brothers plan to kill him; Reuben instead urges throwing him into a cistern, meaning to save him later (vv. 18-24)." },
    { x:0.60, type:"person", label:"Judah's proposal and the sale", av:"youth", desc:"Judah suggests selling Joseph to the passing traders rather than killing him outright; he is sold for twenty pieces of silver (vv. 25-28)." },
    { x:0.78, type:"object", label:"The blood-dipped robe", desc:"The brothers stage Joseph's death, dipping his robe in goat's blood to deceive Jacob (vv. 31-33)." },
    { x:0.92, type:"person", label:"Jacob's inconsolable mourning", av:"elder", desc:"Jacob tears his clothes and mourns for many days, refusing comfort, while Joseph is sold again in Egypt to Potiphar (vv. 34-36)." }
  ],
  environment: {
    chips: ["A favored son's robe", "Dreams of bowing sheaves and stars", "A dry cistern at Dothan", "Twenty pieces of silver", "A blood-stained deception", "Egypt, unknowingly, waits"],
    text: "The chapter moves from the hill country around Hebron and Shechem to the caravan town of Dothan, a stop on the trade route running from Gilead down into Egypt — the very road that lets a family quarrel become an international sale. The brothers' jealousy, sharpened by Joseph's robe and dreams, finds its outlet exactly where trade caravans pass, turning a private grievance into slavery abroad."
  },
  objectsExtra: ["coat-of-many-colors"],
  peopleExtra: ["reuben", "judah", "joseph-ot"],
  culture: [
    { title:"The ornamented robe", icon:"🧥",
      text:"Whatever its exact style ('coat of many colors' or 'long robe with sleeves'), the garment marked Joseph as set apart from working brothers, likely exempting him from manual herding — a visible, provocative sign of Jacob's favoritism echoing his own father's preference for one son over another." },
    { title:"Dream doublets", icon:"🌾",
      text:"Joseph's two dreams, of sheaves and of heavenly bodies, both point the same direction and both come true by the story's end (Gen 42:6; 43-44) — a pattern of paired confirming dreams that recurs with Pharaoh's cattle and grain in chapter 41." },
    { title:"Reuben and Judah's rival plans", icon:"⚖️",
      text:"Reuben's plan to secretly rescue Joseph and Judah's plan to profit by selling him both avoid outright murder, but for very different reasons — a contrast that anticipates Judah's later moral growth in chapters 38 and 44." }
  ],
  crossRefs: [
    { group:"Joseph's dreams and their fulfillment", refs:[
      { r:"Genesis 42:6", note:"the brothers bow before Joseph in Egypt, fulfilling the sheaf dream" },
      { r:"Genesis 43:26", note:"a second bowing, before Benjamin's presence" },
      { r:"Psalm 105:17-19", note:"'he was sold as a slave... until what he had said came to pass'" } ]},
    { group:"The sale recalled later", refs:[
      { r:"Acts 7:9-10", note:"Stephen recounts the brothers selling Joseph out of jealousy" },
      { r:"Genesis 45:4-5", note:"Joseph later reframes the sale as part of God's providence" },
      { r:"Genesis 50:20", note:"'you meant evil against me, but God meant it for good'" } ]}
  ]
},

/* ===== GENESIS 38 — Judah and Tamar ===== */
"1:38": {
  era: { title: "Patriarchal age — Judah's household apart from his brothers", sub: "Er, Onan, and Tamar's bold claim to an heir through the levirate custom",
    badges: ["Patriarchal age", "A widow's disguised plea for justice", "Ancestor of David's line, Perez"] },
  timeOfDay: "day",
  summary: "Judah leaves his brothers and settles among Canaanites, marrying Shua's daughter and fathering Er, Onan, and Shelah; he arranges Tamar's marriage to Er, who dies for wickedness before fathering children (vv. 1-7). Onan is given to Tamar under the custom of raising up an heir for his dead brother, but he deliberately avoids giving her a child and is likewise struck dead; Judah, fearing for his last son, sends Tamar away to wait for Shelah to grow up, a promise he never keeps (vv. 8-11). Years later, learning Judah is traveling to Timnah, the widowed Tamar disguises herself as a prostitute, and Judah unknowingly sleeps with her, leaving his seal, cord, and staff as pledge for payment (vv. 12-23). When Tamar's pregnancy is reported, Judah orders her burned — until she produces his own pledge items, and he admits 'she is more righteous than I' (vv. 24-26). Tamar bears twins, Perez and Zerah, Perez becoming an ancestor of David and ultimately Jesus (vv. 27-30).",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"General region of Judah's settlement apart from his father's household in this chapter (v. 1, broadly)" },
    { id:"edom", role:"Not directly named, but Timnah and Adullam lie in the Judahite hill country south of here where this narrative unfolds" }
  ],
  journey: [
    { from:"hebron", to:"hebron", label:"Judah's separate household", km:0, dashed:true, note:"Judah moves away from his brothers to live among Canaanite neighbors, marrying locally and raising his family apart from Jacob's camp." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Judah's Canaanite marriage", av:"youth", desc:"Judah marries Shua's daughter and fathers Er, Onan, and Shelah (vv. 1-5)." },
    { x:0.25, type:"person", label:"Er and Onan struck dead", av:"youth", desc:"Er is wicked and dies; Onan refuses to give Tamar an heir for his brother and is likewise struck down (vv. 6-10)." },
    { x:0.40, type:"person", label:"Tamar sent away, waiting", av:"woman", desc:"Judah sends Tamar to her father's house to wait for Shelah, a promise he does not keep (v. 11)." },
    { x:0.58, type:"person", label:"Tamar's disguise on the road to Timnah", av:"woman", desc:"Learning Judah is traveling to Timnah, Tamar disguises herself and Judah unknowingly sleeps with her, leaving his seal, cord, and staff as pledge (vv. 13-18)." },
    { x:0.78, type:"object", label:"The pledge revealed", desc:"When Tamar is accused of prostitution, she produces Judah's own seal, cord, and staff; he confesses 'she is more righteous than I' (vv. 24-26)." },
    { x:0.92, type:"person", label:"Perez and Zerah born", av:"youth", desc:"Tamar bears twins; Perez, whose hand yields at the last moment to his brother's, becomes an ancestor of David and Christ (vv. 27-30; Matt 1:3)." }
  ],
  environment: {
    chips: ["A household apart from Jacob's camp", "Levirate duty refused", "A widow's bold disguise", "A seal, cord, and staff as pledge", "'More righteous than I'", "Twins, and a royal line begun"],
    text: "The chapter interrupts the Joseph narrative to follow Judah into the Canaanite hill country, where he marries locally and loses two sons to their own wrongdoing. Tamar's determined, risky action to secure her rightful place in the family becomes, unexpectedly, the origin point of the line that leads to David and to Jesus — inserted here as a deliberate contrast to Joseph's story of integrity under pressure."
  },
  objectsExtra: ["signet"],
  peopleExtra: ["tamar-judah", "er", "onan", "shelah", "judah"],
  culture: [
    { title:"The levirate custom", icon:"👪",
      text:"Ancient Near Eastern custom (later codified in Deut 25:5-10) obligated a surviving brother to father a child with his dead brother's widow to preserve the deceased's name and inheritance; Onan's refusal to fulfill this duty, while enjoying its privileges, is what draws judgment (v. 9-10)." },
    { title:"Why this chapter interrupts Joseph's story", icon:"📖",
      text:"Placed right after Joseph is sold, Genesis 38 both delays and contrasts: Judah, who proposed profiting from his brother's sale, is shown failing his own family duties, while Tamar's bold, costly pursuit of justice foreshadows Judah's later growth into the man who offers himself for Benjamin (Gen 44:33)." },
    { title:"Tamar in the genealogy of Christ", icon:"✝️",
      text:"Tamar is one of only a few women named in Matthew's genealogy of Jesus (Matt 1:3), her irregular but resolute action treated by later tradition not as scandal alone but as securing the covenant line against Judah's own failures." }
  ],
  crossRefs: [
    { group:"The levirate law and its later use", refs:[
      { r:"Deuteronomy 25:5-10", note:"the formal law of levirate marriage" },
      { r:"Ruth 4:1-12", note:"Boaz's levirate-style redemption of Ruth, echoing Tamar" },
      { r:"Matthew 1:3", note:"Tamar named as an ancestor of Jesus" } ]},
    { group:"Judah's arc, here and later", refs:[
      { r:"Genesis 44:18-34", note:"Judah later offers himself in Benjamin's place" },
      { r:"Genesis 49:8-10", note:"Jacob's blessing names Judah's line for kingship" },
      { r:"Ruth 4:18-22", note:"Perez's line runs onward to David" } ]}
  ]
},

/* ===== GENESIS 39 — Joseph in Potiphar's House ===== */
"1:39": {
  era: { title: "Egypt, patriarchal age — Joseph rises, then falls, in Potiphar's house", sub: "The LORD's blessing on a slave, a false accusation, and unjust imprisonment",
    badges: ["Egypt, Middle Kingdom era", "Faithful under false accusation", "'The LORD was with Joseph'"] },
  timeOfDay: "day",
  summary: "Sold to Potiphar, an Egyptian official, Joseph prospers so visibly that Potiphar puts him in charge of his entire household, and the LORD blesses the Egyptian's house for Joseph's sake (vv. 1-6). Potiphar's wife repeatedly propositions Joseph, who refuses on grounds of trust and sin against God; when she grabs his garment and he flees, she uses it as false evidence, accusing him of assault before both the household and Potiphar (vv. 7-18). Potiphar, enraged, has Joseph thrown into prison — though notably not executed, suggesting some doubt about his wife's story (vv. 19-20). Even in prison the LORD is with Joseph, granting him favor with the warden, who puts him in charge of the other prisoners and everything done there (vv. 21-23).",
  focusPlace: "egypt",
  places: [
    { id:"dothan", role:"Where Joseph's brothers sold him before he was carried down to Egypt (Gen 37:17, 28) — this journey's starting point" },
    { id:"egypt", role:"The whole chapter's setting — Potiphar's house, then the royal prison, both places where 'the LORD was with Joseph' (vv. 2, 21)" }
  ],
  journey: [
    { from:"dothan", to:"egypt", label:"Joseph's arrival as a slave", km:400, dashed:true, note:"Continuing from chapter 37, Joseph is now settled in Egypt, purchased by Potiphar from the traders who brought him down." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Joseph prospers in Potiphar's house", av:"official", desc:"'The LORD was with Joseph, and he became a successful man,' rising to oversee everything Potiphar owns (vv. 2-6)." },
    { x:0.30, type:"person", label:"Potiphar's wife's repeated advances", av:"woman", desc:"Day after day she urges Joseph to sleep with her; he refuses, calling it 'a great wickedness and sin against God' (vv. 7-10)." },
    { x:0.55, type:"object", label:"The garment left behind", desc:"When she grabs his garment, Joseph flees, leaving it in her hand — the very evidence she then twists against him (vv. 11-13)." },
    { x:0.72, type:"person", label:"The false accusation", av:"woman", desc:"Potiphar's wife accuses Joseph before the household and her husband, using his own garment as proof (vv. 14-18)." },
    { x:0.85, type:"person", label:"Imprisoned, not executed", av:"official", desc:"Potiphar's anger lands Joseph in prison rather than death, and even there 'the LORD was with Joseph' and gave him favor with the warden (vv. 19-23)." }
  ],
  environment: {
    chips: ["A slave's rapid rise", "Repeated temptation, repeated refusal", "A garment as false witness", "Prison instead of execution", "'The LORD was with Joseph'", "Favor even behind bars"],
    text: "Joseph's story alternates between two enclosed Egyptian settings, Potiphar's household and then the royal prison, both marked by the same refrain: whatever Joseph is given charge of prospers because 'the LORD was with him.' The chapter's real drama is moral rather than geographic — integrity maintained under both temptation and false accusation, in a foreign land with no family to vouch for him."
  },
  objectsExtra: [],
  peopleExtra: ["potiphar", "potiphars-wife"],
  culture: [
    { title:"Egyptian household administration", icon:"🏛️",
      text:"Potiphar's title, 'captain of the guard,' and his large household with servants and land reflect a genuine Egyptian office; foreign slaves rising to oversee such estates is attested elsewhere in Egyptian records, lending plausibility to Joseph's rapid advancement." },
    { title:"Joseph's refusal, in his own words", icon:"🗣️",
      text:"Joseph frames his refusal first as loyalty to Potiphar's trust and only then, climactically, as sin against God (v. 9) — an unusually explicit theological reasoning for resisting temptation in Genesis narrative." },
    { title:"Why prison, not death?", icon:"⚖️",
      text:"Potiphar's restrained punishment — imprisonment rather than execution, the normal penalty for such an offense against an official's household — has led many readers to suspect he doubted his wife's account even as he acted on it." }
  ],
  crossRefs: [
    { group:"Joseph's integrity under pressure", refs:[
      { r:"Genesis 41:38-40", note:"the same faithfulness later recognized by Pharaoh" },
      { r:"Psalm 105:17-19", note:"'his feet were hurt with fetters' recalling this imprisonment" },
      { r:"Hebrews 11:22", note:"Joseph remembered among the faithful" } ]},
    { group:"'The LORD was with him'", refs:[
      { r:"Genesis 39:2-3", note:"the refrain first stated in Potiphar's house" },
      { r:"Genesis 39:21-23", note:"the same refrain repeated in prison" },
      { r:"Acts 7:9-10", note:"Stephen's summary: 'God was with him'" } ]}
  ]
},

/* ===== GENESIS 40 — The Cupbearer and the Baker's Dreams ===== */
"1:40": {
  era: { title: "Egypt, patriarchal age — dreams in Pharaoh's prison", sub: "Two officials' dreams interpreted, one promise kept, one forgotten",
    badges: ["Egyptian royal prison", "God-given dream interpretation", "Two years still to wait"] },
  timeOfDay: "night",
  summary: "Pharaoh's cupbearer and baker offend him and are imprisoned in the same place as Joseph, who is assigned to attend them (vv. 1-4). Both men have troubling dreams on the same night; Joseph, noticing their dejection, insists that interpretations belong to God and asks to hear the dreams (vv. 5-8). The cupbearer dreams of a vine with three branches budding into grapes he presses into Pharaoh's cup; Joseph interprets this as restoration to his position within three days, asking to be remembered before Pharaoh when it happens (vv. 9-15). Encouraged by the favorable reading, the baker shares his dream of three baskets of bread on his head, birds eating from the top one; Joseph interprets this as the baker's execution within three days (vv. 16-19). Both interpretations come true exactly on Pharaoh's birthday three days later — the cupbearer restored, the baker hanged — but the cupbearer forgets Joseph entirely (vv. 20-23).",
  focusPlace: "egypt",
  places: [
    { id:"egypt", role:"The royal prison where Joseph, the cupbearer, and the baker are held together (vv. 1-4)" },
    { id:"hebron", role:"Jacob's household in Canaan, still unaware Joseph is alive and imprisoned in Egypt" }
  ],
  journey: [
    { from:"egypt", to:"egypt", label:"Still imprisoned in Egypt", km:0, dashed:true, note:"No travel occurs in this chapter; it continues directly from Joseph's imprisonment in chapter 39, within the same Egyptian prison." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Two officials imprisoned", av:"official", desc:"Pharaoh's cupbearer and baker offend him and are placed in the same prison as Joseph, who is assigned to serve them (vv. 1-4)." },
    { x:0.30, type:"person", label:"Two troubled dreams, one night", av:"official", desc:"Both men have dreams with no one to interpret them; Joseph insists interpretations belong to God alone (vv. 5-8)." },
    { x:0.50, type:"object", label:"The cupbearer's vine dream", desc:"Three budding branches yield grapes pressed into Pharaoh's cup; Joseph reads this as restoration within three days (vv. 9-13)." },
    { x:0.60, type:"person", label:"'Remember me when it is well with you'", av:"official", desc:"Joseph asks the cupbearer to mention him to Pharaoh and secure his release, protesting his innocence (vv. 14-15)." },
    { x:0.75, type:"object", label:"The baker's basket dream", desc:"Three baskets of bread on his head, birds eating from the top one; Joseph interprets this as the baker's execution (vv. 16-19)." },
    { x:0.92, type:"person", label:"Fulfillment, and forgetting", av:"official", desc:"On Pharaoh's birthday both interpretations come true exactly, but the restored cupbearer forgets Joseph (vv. 20-23)." }
  ],
  environment: {
    chips: ["A shared prison cell", "Two dreams, one night", "Vine and grapes; baskets and birds", "'Interpretations belong to God'", "Exact fulfillment on Pharaoh's birthday", "A forgotten request"],
    text: "Confined entirely within the Egyptian royal prison, this chapter turns Joseph's gift for dream interpretation — first shown, resentfully, with his own dreams in chapter 37 — into a tool that serves others rather than himself. The two-year delay the final verse quietly sets up (v. 23) becomes the hinge on which chapter 41 turns, as the cupbearer's forgetfulness leaves Joseph in prison until Pharaoh's own dreams create a need."
  },
  objectsExtra: [],
  peopleExtra: ["cupbearer", "baker"],
  culture: [
    { title:"Dream interpretation in Egypt", icon:"💤",
      text:"Egyptian culture took dreams seriously enough to maintain professional interpreters and dream manuals; Joseph's insistence that 'interpretations belong to God' (v. 8) deliberately sets his gift apart from Egypt's own divinatory professionals, crediting the true source directly." },
    { title:"Symbolic dream pairs", icon:"🍇",
      text:"The vine-and-grapes and basket-and-birds dreams both use the number three and everyday imagery from royal service, a pattern of paired, parallel dreams that recurs with Pharaoh's cattle and grain dreams in the very next chapter." },
    { title:"The two-year wait", icon:"⏳",
      text:"The chapter's closing note that the cupbearer 'did not remember Joseph, but forgot him' (v. 23) sets up a deliberately unresolved delay — two more years pass (Gen 41:1) before Joseph's circumstances change, underscoring that his rise depends entirely on God's timing, not human favor." }
  ],
  crossRefs: [
    { group:"The cupbearer's forgetting, and its end", refs:[
      { r:"Genesis 41:1, 9-13", note:"two years later, the cupbearer finally remembers Joseph" },
      { r:"Psalm 105:19", note:"'until the time his word came to pass, the word of the LORD tested him'" },
      { r:"Ecclesiastes 9:15-16", note:"a wise man's help forgotten, a familiar biblical pattern" } ]},
    { group:"Interpretation belonging to God", refs:[
      { r:"Genesis 41:16", note:"Joseph repeats the same claim before Pharaoh" },
      { r:"Daniel 2:27-28", note:"Daniel makes an identical claim before Nebuchadnezzar" },
      { r:"Daniel 5:11-14", note:"the same gift recognized generations later in Babylon" } ]}
  ]
},

/* ===== GENESIS 41 — Pharaoh's Dreams and Joseph's Rise to Power ===== */
"1:41": {
  era: { title: "Egypt, c. 1885 BC (traditional dating) — Joseph made vizier", sub: "Seven years of plenty foreseen, then famine; Joseph elevated over all Egypt",
    badges: ["Egyptian royal court", "Two years after the prison dreams", "Joseph, age thirty, made vizier"] },
  timeOfDay: "day",
  summary: "Two years later, Pharaoh dreams of seven fat cows devoured by seven gaunt ones, and seven plump heads of grain swallowed by seven withered ones; when none of Egypt's wise men can interpret them, the cupbearer finally remembers Joseph (vv. 1-13). Brought before Pharaoh, Joseph credits God alone for interpretation and explains both dreams mean the same thing: seven years of abundance will be followed by seven years of severe famine, and he advises appointing a wise administrator to store a fifth of the harvest during the good years (vv. 14-36). Impressed, Pharaoh appoints Joseph himself over all Egypt, second only to Pharaoh, giving him his signet ring, fine linen, a gold chain, a chariot, an Egyptian name, and Asenath as wife (vv. 37-45). During the seven good years Joseph gathers grain 'like the sand of the sea' and fathers Manasseh and Ephraim; when famine strikes as predicted, Egypt has bread while surrounding lands, including eventually Canaan, do not (vv. 46-57).",
  focusPlace: "egypt",
  places: [
    { id:"egypt", role:"Pharaoh's court, where the dreams are interpreted and Joseph is elevated to vizier over the entire land (vv. 14-45)" },
    { id:"hebron", role:"Jacob's household in Canaan, soon to feel the same famine Joseph has just foreseen (vv. 54-57 imply this reach)" }
  ],
  journey: [
    { from:"egypt", to:"egypt", label:"From prison to the palace", km:0, dashed:true, note:"Joseph is brought directly from prison to stand before Pharaoh, and within the same day rises from prisoner to the second-highest office in Egypt." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Pharaoh's two dreams", av:"king", desc:"Seven gaunt cows devour seven fat ones, and seven withered heads of grain swallow seven plump ones; no Egyptian wise man can interpret them (vv. 1-8)." },
    { x:0.20, type:"person", label:"The cupbearer remembers Joseph", av:"official", desc:"Prompted by Pharaoh's need, the cupbearer finally recalls Joseph's gift from prison two years earlier (vv. 9-13)." },
    { x:0.38, type:"person", label:"Joseph's interpretation", av:"official", desc:"Joseph credits God alone, then explains both dreams as one message: seven years of plenty followed by seven years of famine (vv. 25-32)." },
    { x:0.55, type:"person", label:"A plan, and its architect", av:"official", desc:"Joseph advises storing a fifth of the harvest during the good years and appointing an overseer — Pharaoh appoints Joseph himself (vv. 33-40)." },
    { x:0.68, type:"object", label:"The signet ring and robes of office", desc:"Pharaoh invests Joseph with his own signet ring, fine linen, a gold chain, and a chariot, making him second in all Egypt (vv. 41-43)." },
    { x:0.82, type:"person", label:"Asenath, and two sons", av:"woman", desc:"Joseph marries Asenath, daughter of Potiphera, priest of On, and fathers Manasseh and Ephraim before the famine begins (vv. 45, 50-52)." },
    { x:0.95, type:"object", label:"Grain like the sand of the sea", desc:"During the seven good years Joseph stores such vast grain reserves that he stops measuring it; when famine strikes, Egypt alone has bread (vv. 47-49, 56-57)." }
  ],
  environment: {
    chips: ["Two paired dreams of cattle and grain", "No wise man can interpret but Joseph", "A slave elevated to vizier in a day", "Signet ring, gold chain, chariot", "Seven years of plenty, stored", "Famine spreading beyond Egypt's borders"],
    text: "Set entirely at Pharaoh's court and across Egypt's grain-growing years, this chapter turns on the same principle established in chapter 40 — that dream interpretation belongs to God, not Egypt's professional diviners. Joseph's administrative genius transforms a famine that could have devastated the region into the very means by which Egypt gains power and his own family will later be preserved."
  },
  objectsExtra: ["egyptian-signet-ring", "grain-storage"],
  peopleExtra: ["pharaoh-joseph", "asenath", "potiphera", "manasseh", "ephraim"],
  culture: [
    { title:"Egyptian famine administration", icon:"🌾",
      text:"Egyptian records describe officials responsible for grain storage and famine relief, and the Nile's flood cycles made multi-year agricultural planning a real concern; Joseph's proposed fifth-share storage plan reflects genuine ancient administrative practice rather than an implausible invention." },
    { title:"An Egyptian name and identity", icon:"📛",
      text:"Pharaoh gives Joseph the Egyptian name Zaphenath-paneah (v. 45), likely meaning something like 'God speaks and he lives' or 'the god has said he will live' — a formal act of naturalizing a foreigner into full Egyptian office and identity." },
    { title:"Naming Manasseh and Ephraim", icon:"👶",
      text:"Joseph names his sons to mark his own journey: Manasseh, 'making to forget' his hardship and father's house, and Ephraim, 'fruitful' in the land of his affliction (vv. 51-52) — both names later become tribal names within Israel." }
  ],
  crossRefs: [
    { group:"Joseph's rise recognized as God's work", refs:[
      { r:"Psalm 105:19-22", note:"'he made him lord of his house... to instruct the elders'" },
      { r:"Acts 7:9-10", note:"Stephen: 'God gave him favor and wisdom before Pharaoh'" },
      { r:"Genesis 45:8", note:"Joseph later calls himself 'father to Pharaoh' by God's design" } ]},
    { group:"The famine that draws the family to Egypt", refs:[
      { r:"Genesis 42:1-3", note:"the famine reaches Canaan, sending the brothers to buy grain" },
      { r:"Genesis 47:13-26", note:"the famine's severity and Joseph's land policy across Egypt" },
      { r:"Acts 7:11", note:"'a famine came over all Egypt and Canaan, and great affliction'" } ]}
  ]
},

/* ===== GENESIS 42 — The Brothers' First Journey to Egypt ===== */
"1:42": {
  era: { title: "Patriarchal age — famine drives the brothers to Egypt", sub: "Ten brothers before the unrecognized Joseph; Simeon held as surety",
    badges: ["Famine years", "Ten brothers, one held hostage", "Guilt over Joseph resurfaces"] },
  timeOfDay: "day",
  summary: "With famine gripping Canaan, Jacob sends ten sons to buy grain in Egypt, keeping only Benjamin back for fear of losing him too (vv. 1-4). The brothers bow before Joseph, now Egypt's vizier, fulfilling his childhood dream, though they do not recognize him; he speaks harshly, accuses them of being spies, and imprisons them for three days (vv. 5-17). He then demands one brother stay behind while the rest return with grain, insisting they bring Benjamin back to prove their honesty; overhearing this, the brothers admit to each other their guilt over Joseph, unaware Joseph understands their language and weeps privately (vv. 18-24). Joseph keeps Simeon as surety and secretly returns each brother's silver in his grain sack (vv. 24-25). On the journey home the returned money terrifies them, and when they report everything to Jacob, he refuses to let Benjamin go, grieving that he has already lost Joseph and now Simeon (vv. 26-38).",
  focusPlace: "egypt",
  places: [
    { id:"hebron", role:"Jacob's home, where the brothers set out from and return to report Joseph's demands (vv. 1-5, 29-38)" },
    { id:"egypt", role:"Where the unrecognized Joseph tests his brothers, accuses them of spying, and holds Simeon hostage (vv. 6-24)" }
  ],
  journey: [
    { from:"hebron", to:"egypt", label:"Ten brothers sent for grain", km:400, note:"Jacob sends ten sons to buy grain in famine-stricken Egypt, withholding only Benjamin, and they return home with grain, hostage terms, and their returned silver." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Ten brothers sent, Benjamin held back", av:"elder", desc:"Jacob sends his sons for grain but keeps Benjamin home, fearing harm might befall him as it did Joseph (vv. 1-4)." },
    { x:0.25, type:"person", label:"Bowing before the unrecognized Joseph", av:"official", desc:"The brothers bow low before Joseph, fulfilling his childhood dream exactly, though they do not know him (vv. 6-8)." },
    { x:0.42, type:"person", label:"Accused as spies, imprisoned", av:"official", desc:"Joseph speaks harshly, accuses them of spying, and holds them for three days to test their story (vv. 9-17)." },
    { x:0.58, type:"person", label:"Guilt over Joseph resurfaces", av:"youth", desc:"Overhearing Joseph's demand to bring Benjamin, the brothers admit to each other their guilt for Joseph's suffering years earlier; Joseph weeps unseen (vv. 18-24)." },
    { x:0.72, type:"object", label:"Simeon held, silver secretly returned", desc:"Joseph keeps Simeon as surety and orders each brother's silver quietly returned in his grain sack (vv. 24-25)." },
    { x:0.90, type:"person", label:"Jacob's refusal over Benjamin", av:"elder", desc:"Terrified by the returned money and Joseph's demand, Jacob refuses to let Benjamin go, grieving 'Joseph is no more, and Simeon is no more' (vv. 35-38)." }
  ],
  environment: {
    chips: ["Famine forcing a journey south", "Ten brothers bowing, unknowingly, to Joseph", "A harsh test and three days' imprisonment", "Old guilt spoken aloud", "Silver mysteriously returned", "Jacob's fear for his last favored son"],
    text: "The chapter shuttles between Hebron and Egypt as famine forces exactly the encounter Joseph's dreams once foretold, though neither side recognizes the other at first. Joseph's harsh testing and the brothers' overheard guilt turn a grain-buying trip into the quiet beginning of reconciliation, even as Jacob's fear for Benjamin threatens to unravel it before it starts."
  },
  objectsExtra: ["grain-storage"],
  peopleExtra: [],
  culture: [
    { title:"Egyptian famine relief for foreigners", icon:"🌍",
      text:"Egyptian texts describe grain sold or given to neighboring peoples during regional famines, since the Nile's floods made Egypt comparatively famine-resistant; the brothers' journey reflects a real ancient pattern of Canaanite and Semitic groups seeking Egyptian grain in hard years." },
    { title:"Why Joseph tests his brothers", icon:"❓",
      text:"Joseph's harsh accusations and hostage-taking are widely read not as cruelty but as a test of whether his brothers have changed — particularly whether they would abandon Benjamin, Rachel's other son, the way they once abandoned him." },
    { title:"Jacob's grief compounding", icon:"😢",
      text:"Jacob's lament that 'everything is against me' (v. 36) reads with dramatic irony for readers who know Joseph is alive and well; his refusal to risk Benjamin sets up the tension that drives the rest of the Joseph narrative." }
  ],
  crossRefs: [
    { group:"Dreams fulfilled in the bowing brothers", refs:[
      { r:"Genesis 37:7", note:"the sheaf dream, now literally fulfilled" },
      { r:"Genesis 45:7-8", note:"Joseph's later explanation of God's purpose in it all" },
      { r:"Psalm 105:16-17", note:"'he sent a man ahead of them, Joseph, sold as a slave'" } ]},
    { group:"Guilt and conscience among the brothers", refs:[
      { r:"Genesis 42:21-22", note:"the brothers' own words admitting their guilt" },
      { r:"Genesis 44:16", note:"Judah later confesses 'God has found out the guilt of your servants'" },
      { r:"Genesis 50:15-17", note:"the same guilt resurfacing after Jacob's death" } ]}
  ]
},

/* ===== GENESIS 43 — The Second Journey, with Benjamin ===== */
"1:43": {
  era: { title: "Patriarchal age — Benjamin taken down to Egypt", sub: "Judah's guarantee persuades Jacob; a tense, then warm, reunion feast",
    badges: ["Famine deepens", "Judah pledges himself for Benjamin", "A feast, and Joseph's hidden tears"] },
  timeOfDay: "day",
  summary: "With grain running out, Jacob presses his sons to return to Egypt, but Judah insists they cannot go without Benjamin, personally guaranteeing his safety to persuade their reluctant father (vv. 1-14). Arriving in Egypt with double silver, gifts, and Benjamin, the brothers are brought to Joseph's house, terrified about the previously returned money, but Joseph's steward reassures them and releases Simeon to them (vv. 15-25). When Joseph arrives, he inquires warmly after their father and is overcome with emotion at seeing Benjamin, his own mother's son, withdrawing to weep privately before composing himself (vv. 26-31). At the meal Joseph seats the brothers by exact birth order, astonishing them, and gives Benjamin five times the portion of the others, and they all feast and drink freely together (vv. 32-34).",
  focusPlace: "egypt",
  places: [
    { id:"hebron", role:"Jacob's home, where Judah's guarantee finally persuades Jacob to let Benjamin go (vv. 1-14)" },
    { id:"egypt", role:"Joseph's house, where the brothers are received, Simeon is restored, and the reunion feast takes place (vv. 15-34)" }
  ],
  journey: [
    { from:"hebron", to:"egypt", label:"Benjamin taken down at last", km:400, note:"Jacob finally releases Benjamin on Judah's personal guarantee, and the brothers travel to Egypt with double silver and gifts for the still-unrecognized vizier." }
  ],
  hotspots: [
    { x:0.10, type:"person", label:"Judah's personal guarantee", av:"youth", desc:"Judah pledges himself as surety for Benjamin's safety, finally persuading Jacob to let him go (vv. 8-10, 13-14)." },
    { x:0.28, type:"person", label:"Fear over the returned silver", av:"youth", desc:"Arriving at Joseph's house, the brothers panic about the silver mysteriously returned earlier, but Joseph's steward reassures them (vv. 18-23)." },
    { x:0.45, type:"person", label:"Simeon restored", av:"youth", desc:"Simeon is brought out and reunited with his brothers before the meal (v. 23)." },
    { x:0.62, type:"person", label:"Joseph's hidden weeping over Benjamin", av:"official", desc:"Seeing his mother's son for the first time in over twenty years, Joseph is overcome and withdraws to weep privately (vv. 29-30)." },
    { x:0.80, type:"person", label:"Seated by exact birth order", av:"official", desc:"The brothers are astonished to find themselves seated in precise order from oldest to youngest, an apparent impossibility to explain (v. 33)." },
    { x:0.94, type:"object", label:"Benjamin's fivefold portion", desc:"Benjamin receives five times the food of his brothers, a pointed test of any lingering jealousy, and all feast and drink freely (v. 34)." }
  ],
  environment: {
    chips: ["Grain running out again", "Judah's personal pledge for Benjamin", "Fear at Joseph's own house", "Simeon restored to his brothers", "Tears hidden behind closed doors", "A feast seated in impossible order"],
    text: "The chapter moves from Hebron's hard bargaining over Benjamin's safety to a private, emotionally charged reunion feast inside Joseph's Egyptian house. Every detail — the returned silver, the birth-order seating, Benjamin's oversized portion — quietly tests the brothers even as Joseph struggles to contain his own feelings, setting the stage for the final test in chapter 44."
  },
  objectsExtra: [],
  peopleExtra: [],
  culture: [
    { title:"Suretyship in patriarchal custom", icon:"🤝",
      text:"Judah's personal guarantee for Benjamin — 'I will bear the blame forever' (v. 9) — reflects a real ancient practice of one family member pledging personal responsibility for another's safety, a custom that gives weight to his later plea in chapter 44." },
    { title:"Egyptian dining customs and separation", icon:"🍽️",
      text:"The note that Egyptians ate separately from Hebrews, 'for that is an abomination to the Egyptians' (v. 32), reflects genuine Egyptian dietary and ritual purity concerns regarding foreign herders, adding historical texture to the seating arrangement." },
    { title:"Benjamin's portion as a pointed test", icon:"⚖️",
      text:"Giving Benjamin five times the food of his brothers directly echoes the favoritism once shown Joseph, letting Joseph observe in real time whether the same jealousy that once led to his own sale would resurface against Rachel's other son." }
  ],
  crossRefs: [
    { group:"Judah's growing responsibility", refs:[
      { r:"Genesis 43:8-9", note:"Judah's guarantee, the turning point that persuades Jacob" },
      { r:"Genesis 44:32-34", note:"Judah later makes good on this very pledge" },
      { r:"Genesis 49:8-10", note:"Jacob's blessing rewards Judah's leadership with kingship" } ]},
    { group:"Joseph's controlled emotion", refs:[
      { r:"Genesis 42:24", note:"Joseph's earlier private weeping, unseen by his brothers" },
      { r:"Genesis 45:1-2", note:"the emotion he can no longer contain in the next chapter" },
      { r:"Genesis 45:14-15", note:"his open weeping once he reveals himself" } ]}
  ]
},

/* ===== GENESIS 44 — The Silver Cup and Judah's Plea ===== */
"1:44": {
  era: { title: "Patriarchal age — the final test at the granary", sub: "A planted cup, a threatened enslavement, and Judah's offer of himself",
    badges: ["The last and hardest test", "Judah's transformation complete", "A plea that moves Joseph to tears"] },
  timeOfDay: "day",
  summary: "As the brothers set out for home with grain, Joseph has his steward secretly plant his silver cup in Benjamin's sack and then pursue and accuse them of theft (vv. 1-6). Confident of their innocence, the brothers agree that whoever has the cup should die and the rest become slaves; when the cup is found in Benjamin's sack, they tear their clothes in anguish and return together to the city rather than abandon him (vv. 7-13). Before Joseph, Judah does not attempt to prove innocence but confesses their guilt is now God's doing and offers all the brothers as slaves; Joseph insists only Benjamin need stay (vv. 14-17). Judah then delivers an impassioned plea, recounting Jacob's love for Benjamin and his own personal guarantee, and offers himself as a slave in Benjamin's place rather than see his father die of grief (vv. 18-34).",
  focusPlace: "egypt",
  places: [
    { id:"egypt", role:"Joseph's granary and city, where the cup is discovered and Judah delivers his plea before the still-unrecognized Joseph (vv. 1-34)" },
    { id:"hebron", role:"Jacob, waiting at home, whose grief Judah invokes as the emotional center of his plea (vv. 22, 27-31)" }
  ],
  journey: [
    { from:"egypt", to:"egypt", label:"Overtaken on the road home", km:0, dashed:true, note:"The brothers set out from Joseph's city toward Canaan but are overtaken by Joseph's steward before they get far, and all return to face the accusation together." }
  ],
  hotspots: [
    { x:0.08, type:"object", label:"The silver cup planted", desc:"Joseph has his steward secretly hide his own silver cup in Benjamin's grain sack before the brothers depart (vv. 1-2)." },
    { x:0.25, type:"person", label:"Overtaken and accused", av:"official", desc:"The steward catches up to the brothers and accuses them of stealing Joseph's divining cup, an accusation they confidently deny (vv. 4-9)." },
    { x:0.42, type:"object", label:"The cup found in Benjamin's sack", desc:"Searched from oldest to youngest, the cup turns up exactly in Benjamin's sack, and the brothers tear their clothes in grief (vv. 12-13)." },
    { x:0.55, type:"person", label:"Judah's confession before Joseph", av:"youth", desc:"Rather than argue innocence, Judah confesses 'God has found out the guilt of your servants' and offers all the brothers as slaves (vv. 14-16)." },
    { x:0.75, type:"person", label:"Judah's plea recounting Jacob's love", av:"youth", desc:"Judah retells the whole story of Jacob's grief over Joseph and his fear of losing Benjamin, and his own personal pledge for the boy's safety (vv. 18-32)." },
    { x:0.95, type:"person", label:"Judah offers himself in Benjamin's place", av:"youth", desc:"Judah begs to remain as a slave instead of Benjamin, unwilling to see his father die of grief (vv. 33-34)." }
  ],
  environment: {
    chips: ["A cup planted as the final test", "Torn clothes and shared anguish", "No brother abandons Benjamin", "Judah's full confession of guilt", "A father's grief retold in full", "One brother's offer to take another's place"],
    text: "The whole chapter unfolds within Joseph's Egyptian household and its immediate surroundings, the tightest and most emotionally concentrated scene in the Joseph narrative. What began in chapter 37 with brothers willing to sell one sibling for silver ends here with one brother willing to become a slave himself rather than let another be taken — the transformation the entire cycle has been building toward."
  },
  objectsExtra: ["silver-cup"],
  peopleExtra: [],
  culture: [
    { title:"Divination cups in Egypt", icon:"🥈",
      text:"The steward calls Joseph's cup one he uses 'for divination' (v. 5), a genuine Egyptian practice of reading omens in liquid; whether Joseph himself actually practiced this or the line is part of the elaborate ruse is debated, but the detail fits authentic Egyptian court culture." },
    { title:"Corporate responsibility and the brothers' unity", icon:"🤝",
      text:"The brothers' insistence on all returning together rather than abandoning Benjamin (v. 13) marks a decisive reversal from chapter 37, where they abandoned Joseph without a second thought — the test Joseph designed succeeds completely." },
    { title:"Judah's speech as the narrative's turning point", icon:"🗣️",
      text:"Judah's plea (vv. 18-34) is widely regarded as one of the most moving speeches in Genesis, and its selfless offer to be enslaved in Benjamin's place is precisely what breaks Joseph's composure in the opening verses of chapter 45." }
  ],
  crossRefs: [
    { group:"Judah's transformation completed", refs:[
      { r:"Genesis 37:26-27", note:"Judah once proposed selling a brother for profit" },
      { r:"Genesis 43:8-9", note:"Judah's earlier pledge, now fulfilled here" },
      { r:"Genesis 49:8-10", note:"Jacob's blessing rewards this very character with kingship" } ]},
    { group:"Substitution and self-sacrifice", refs:[
      { r:"Genesis 45:1-3", note:"Joseph's composure finally breaks after Judah's plea" },
      { r:"Romans 5:6-8", note:"a later, greater substitution — one dying for the guilty" },
      { r:"Exodus 32:32", note:"Moses similarly offers himself in place of the people" } ]}
  ]
},

/* ===== GENESIS 45 — Joseph Reveals Himself ===== */
"1:45": {
  era: { title: "Patriarchal age — the great reveal and reconciliation", sub: "'I am Joseph... God sent me before you to preserve life'",
    badges: ["Twenty-plus years of separation ended", "Reconciliation, not revenge", "Jacob summoned to Egypt"] },
  timeOfDay: "day",
  summary: "Overcome after Judah's plea, Joseph clears the room of Egyptians and weeps so loudly that Pharaoh's household hears, then reveals his identity to his stunned brothers: 'I am Joseph; is my father still alive?' (vv. 1-3). Seeing their terror, he reassures them not to be distressed or angry with themselves, reframing the sale as God's providence to preserve life through the famine, sending him ahead of them (vv. 4-8). He urges them to hurry back and bring Jacob and the whole family down to settle in Goshen, where he will provide for them through five more years of famine, and he embraces Benjamin and all his brothers, weeping and finally talking freely with them (vv. 9-15). Pharaoh, hearing the news, joyfully invites the whole family to Egypt and provides wagons and provisions for the move; Joseph sends the brothers off richly supplied, urging them not to quarrel on the way, and Jacob, told Joseph is alive, is at first unable to believe it but then revives at the sight of the wagons (vv. 16-28).",
  focusPlace: "egypt",
  places: [
    { id:"egypt", role:"Where Joseph reveals himself and Pharaoh invites the whole family to settle (vv. 1-20)" },
    { id:"hebron", role:"Where the brothers return to tell Jacob his son is alive (vv. 25-28)" },
    { id:"goshen", role:"The region Joseph designates for his family's future settlement (v. 10)" }
  ],
  journey: [
    { from:"egypt", to:"hebron", label:"The brothers race home with the news", km:400, note:"Loaded with provisions and wagons from Pharaoh, the brothers hurry back to tell Jacob that Joseph is alive and ruling all Egypt." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"'I am Joseph'", av:"official", desc:"Unable to control himself any longer, Joseph clears the room and reveals his identity, his weeping heard even in Pharaoh's house (vv. 1-3)." },
    { x:0.22, type:"person", label:"'God sent me before you'", av:"official", desc:"Joseph reassures his terrified brothers, reframing their sale of him as part of God's plan to preserve life through the famine (vv. 4-8)." },
    { x:0.40, type:"object", label:"The invitation to Goshen", desc:"Joseph instructs the brothers to bring Jacob and the whole household to settle in Goshen, where he will sustain them for the remaining famine years (vv. 9-11)." },
    { x:0.55, type:"person", label:"Embracing Benjamin and all his brothers", av:"official", desc:"Joseph weeps on Benjamin's neck and kisses all his brothers, finally able to talk freely with them (vv. 14-15)." },
    { x:0.72, type:"person", label:"Pharaoh's joyful invitation", av:"king", desc:"Hearing the news, Pharaoh happily offers the best of Egypt's land and sends wagons for the move (vv. 16-20)." },
    { x:0.90, type:"person", label:"Jacob revived at the sight of the wagons", av:"elder", desc:"Jacob cannot believe the report until he sees the wagons Joseph sent, and his spirit revives: 'It is enough; Joseph my son is still alive' (vv. 26-28)." }
  ],
  environment: {
    chips: ["Twenty-plus years of separation ended", "'I am Joseph' — the reveal", "Reconciliation framed as providence", "An invitation to Goshen's good land", "Pharaoh's own joyful blessing", "A father's spirit revived"],
    text: "The chapter's emotional center is Joseph's Egyptian chamber, cleared of onlookers for the reveal, before opening outward to Pharaoh's court and finally back to Hebron where Jacob receives the news. Joseph's insistence that God, not his brothers' malice, sent him ahead becomes the theological key to the entire Joseph narrative, turning betrayal into providence without minimizing the wrong done."
  },
  objectsExtra: [],
  peopleExtra: ["pharaoh-joseph"],
  culture: [
    { title:"Clearing the room before revealing himself", icon:"🚪",
      text:"Joseph's insistence that all Egyptians leave before he speaks (v. 1) protects his brothers from public humiliation before Egyptian officials, a deliberate act of mercy and discretion in how he manages the reveal." },
    { title:"Providence, not merely coincidence", icon:"🙏",
      text:"Joseph's threefold repetition that 'God sent me' (vv. 5, 7, 8) is theologically central to Genesis's larger argument that God works through, not merely around, human sin and suffering to accomplish preservation and blessing." },
    { title:"Goshen as a strategic choice", icon:"🐑",
      text:"Goshen's pastureland suited Jacob's family's livestock and, being somewhat separate from Egyptian population centers, allowed them to maintain their distinct identity — a detail that matters greatly by the time of Exodus." }
  ],
  crossRefs: [
    { group:"Providence over betrayal", refs:[
      { r:"Genesis 50:20", note:"Joseph's fullest statement of the same principle after Jacob's death" },
      { r:"Psalm 105:16-22", note:"a psalm retelling of God's hand throughout Joseph's rise" },
      { r:"Romans 8:28", note:"'all things work together for good' echoes this theology" } ]},
    { group:"Jacob's family summoned to Egypt", refs:[
      { r:"Genesis 46:1-4", note:"God confirms the move to Jacob directly at Beersheba" },
      { r:"Genesis 47:5-6", note:"Pharaoh formally settles the family in Goshen" },
      { r:"Acts 7:14-15", note:"Stephen recounts Jacob's household, seventy-five in all, going down to Egypt" } ]}
  ]
},

/* ===== GENESIS 46 — Jacob's Family Moves to Egypt ===== */
"1:46": {
  era: { title: "Patriarchal age — Jacob's household of seventy goes down to Egypt", sub: "A divine word at Beersheba, a genealogy of seventy, and reunion with Joseph",
    badges: ["Last stop in Canaan: Beersheba", "God's promise to go with Jacob", "Seventy souls entering Egypt"] },
  timeOfDay: "day",
  summary: "Traveling south, Jacob stops at Beersheba to offer sacrifices, where God speaks to him in a night vision, confirming that he should not fear going to Egypt since God will go with him, make him a great nation there, and one day bring his descendants back up (vv. 1-4). Jacob's sons carry him, their wives, and children to Egypt in Pharaoh's wagons along with all their livestock and possessions (vv. 5-7). The chapter then lists the genealogy of Jacob's household entering Egypt — sons, grandsons, and a few granddaughters through Leah, Zilpah, Rachel, and Bilhah — totaling seventy persons (vv. 8-27). Judah is sent ahead to meet Joseph and guide the family to Goshen, and Joseph rides out to meet his father, embracing him and weeping long on his neck (vv. 28-30). Joseph then coaches his brothers on how to answer Pharaoh, so that they will be granted the land of Goshen as shepherds, a trade Egyptians found detestable (vv. 31-34).",
  focusPlace: "goshen",
  places: [
    { id:"beersheba", role:"Where Jacob offers sacrifices and receives God's confirming word before continuing to Egypt (vv. 1-4)" },
    { id:"egypt", role:"Where Joseph rides out to meet his father and reunite the family (vv. 28-30)" },
    { id:"goshen", role:"The region Joseph secures for his family to settle as shepherds, separate from Egyptian population centers (vv. 28, 34)" }
  ],
  journey: [
    { from:"beersheba", to:"goshen", label:"Jacob's whole household enters Egypt", km:450, note:"After God's confirming word at Beersheba, Jacob's entire household of seventy travels down into Egypt in Pharaoh's wagons to settle in Goshen." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"God's word at Beersheba", av:"elder", desc:"At his last stop in Canaan, Jacob offers sacrifices and hears God confirm the journey: 'Do not be afraid to go down to Egypt... I will also bring you up again' (vv. 1-4)." },
    { x:0.25, type:"object", label:"Pharaoh's wagons carry the family", desc:"Jacob's sons transport him, their wives, children, and all their goods to Egypt in the wagons Pharaoh provided (vv. 5-7)." },
    { x:0.45, type:"person", label:"Seventy souls listed by name", av:"elder", desc:"A genealogy names Jacob's sons, grandsons, and a few granddaughters through each wife, totaling seventy persons entering Egypt (vv. 8-27)." },
    { x:0.65, type:"person", label:"Judah sent ahead", av:"youth", desc:"Jacob sends Judah ahead to Joseph to guide the family's arrival in Goshen (v. 28)." },
    { x:0.80, type:"person", label:"Joseph and Jacob reunited", av:"official", desc:"Joseph rides out in his chariot to meet his father, falls on his neck, and weeps a long while (vv. 29-30)." },
    { x:0.92, type:"person", label:"Coached to claim Goshen", av:"official", desc:"Joseph instructs his brothers to tell Pharaoh they are shepherds, a trade Egyptians consider detestable, ensuring they are settled apart in Goshen (vv. 31-34)." }
  ],
  environment: {
    chips: ["A last sacrifice at Beersheba", "God's own confirming word", "Seventy names entering Egypt", "Wagons loaded with a whole household", "A long-awaited embrace", "Goshen secured for shepherds"],
    text: "The chapter traces the family's final leg from Beersheba, the southern edge of Canaan, down into Goshen in the Nile delta, framed at its start by God's direct promise and at its end by Joseph's practical wisdom in securing separate land for his family. The genealogy at its center, seventy names strong, marks the formal beginning of Israel's sojourn in Egypt that will eventually lead to the Exodus."
  },
  objectsExtra: [],
  peopleExtra: [],
  culture: [
    { title:"Why stop at Beersheba", icon:"🙏",
      text:"Beersheba, associated with Abraham's and Isaac's own worship (Gen 21:33; 26:23-25), is a fitting last stop in Canaan for Jacob to seek God's confirmation before leaving the promised land — echoing his grandfather's and father's own patterns of covenant renewal there." },
    { title:"The genealogy of seventy", icon:"📜",
      text:"The number seventy (sometimes seventy-five per Acts 7:14, following the Septuagint's additional descendants) represents the whole of Jacob's household as a symbolically complete number, marking the small seed from which the nation of Israel will grow in Egypt." },
    { title:"Shepherds, 'an abomination to the Egyptians'", icon:"🐑",
      text:"Joseph's coaching (v. 34) reflects genuine Egyptian cultural disdain for nomadic herders, a distaste that works in the family's favor, securing them Goshen's separate pastureland rather than assimilation into Egyptian cities." }
  ],
  crossRefs: [
    { group:"God's covenant promises renewed", refs:[
      { r:"Genesis 15:13-14", note:"God's earlier prediction to Abraham of Egyptian sojourn and eventual return" },
      { r:"Genesis 28:15", note:"the same promise of divine presence given earlier to Jacob at Bethel" },
      { r:"Exodus 1:7", note:"the seventy multiply into a great nation, as promised here" } ]},
    { group:"The seventy counted again later", refs:[
      { r:"Exodus 1:1-5", note:"the same genealogical count recalled at the start of Exodus" },
      { r:"Deuteronomy 10:22", note:"'seventy persons' who went down to Egypt, now as numerous as the stars" },
      { r:"Acts 7:14-15", note:"Stephen's speech recounts the same family history" } ]}
  ]
},

/* ===== GENESIS 47 — Jacob before Pharaoh, and the Land-for-Grain Policy ===== */
"1:47": {
  era: { title: "Patriarchal age — Jacob settled in Goshen, Egypt reorganized", sub: "Jacob blesses Pharaoh; Joseph's famine policy reshapes Egyptian land tenure",
    badges: ["Goshen formally granted", "Famine's harshest years", "Jacob's seventeen years in Egypt"] },
  timeOfDay: "day",
  summary: "Joseph presents five of his brothers and then Jacob himself to Pharaoh, who grants the family Goshen and even offers capable men positions over his own livestock (vv. 1-6). Jacob blesses Pharaoh and, asked his age, reflects that his 'few and evil' years number 130, less than his fathers' (vv. 7-10). Joseph settles his family in Goshen's best land and sustains them through the ongoing famine (vv. 11-12). As the famine deepens, Joseph systematically acquires all Egypt's money, then livestock, then land and the people themselves for Pharaoh in exchange for food, only sparing the priests' land; he then institutes a permanent fifth-share tax on the harvest, and the Egyptians gratefully accept becoming Pharaoh's servants in exchange for survival (vv. 13-26). Israel meanwhile prospers greatly in Goshen, multiplying for seventeen years until, sensing death approaching, Jacob makes Joseph swear to bury him not in Egypt but with his fathers in Canaan (vv. 27-31).",
  focusPlace: "goshen",
  places: [
    { id:"goshen", role:"Where Jacob's family formally settles and prospers under Pharaoh's grant, multiplying over seventeen years (vv. 6, 11-12, 27)" },
    { id:"egypt", role:"Where Joseph's famine policy reorganizes land ownership under Pharaoh across the wider country (vv. 13-26)" },
    { id:"hebron", role:"Where Jacob's fathers are buried, and where he makes Joseph swear to bury him instead of in Egypt (v. 30)" }
  ],
  journey: [
    { from:"goshen", to:"egypt", label:"Joseph presents his family to Pharaoh", km:100, note:"Joseph brings his brothers and then Jacob from Goshen to Pharaoh's court for formal presentation and the land grant, then returns them to settle permanently." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Brothers presented to Pharaoh", av:"king", desc:"Joseph presents five brothers, who are granted Goshen and offered charge of Pharaoh's own livestock (vv. 1-6)." },
    { x:0.22, type:"person", label:"Jacob blesses Pharaoh", av:"elder", desc:"Jacob blesses Pharaoh and reflects that his 130 years have been 'few and evil' compared to his fathers' (vv. 7-10)." },
    { x:0.38, type:"object", label:"Goshen settled and sustained", desc:"Joseph provides for his father's whole household in Goshen's best land throughout the ongoing famine (vv. 11-12)." },
    { x:0.55, type:"object", label:"Money, livestock, then land acquired", desc:"As the famine worsens, Egyptians exchange first their money, then livestock, then land and themselves for grain, Joseph gathering it all for Pharaoh (vv. 13-21)." },
    { x:0.72, type:"person", label:"The priests' land spared", av:"priest", desc:"Only the priests keep their land, since Pharaoh provides for them directly, and a permanent fifth-share tax is established across Egypt (vv. 22, 26)." },
    { x:0.90, type:"person", label:"Jacob's oath for burial in Canaan", av:"elder", desc:"After seventeen years in Egypt, sensing death near, Jacob makes Joseph swear not to bury him in Egypt but with his fathers (vv. 29-31)." }
  ],
  environment: {
    chips: ["Formal land grant in Goshen", "Jacob's blessing on Pharaoh", "Famine forcing Egypt to sell itself", "A permanent fifth-share tax", "Priests alone keeping their land", "Seventeen years, then a burial oath"],
    text: "The chapter moves between Pharaoh's court, where Jacob's family receives formal royal favor, and the wider Egyptian countryside, where Joseph's famine administration permanently reshapes land ownership under Pharaoh. Against this backdrop of national upheaval, Jacob's family alone prospers securely in Goshen, and the chapter closes with Jacob's mind already turning toward his eventual burial back in the promised land."
  },
  objectsExtra: ["grain-storage"],
  peopleExtra: [],
  culture: [
    { title:"Egyptian land tenure and the fifth-share tax", icon:"🏛️",
      text:"Ancient Egyptian sources do attest to substantial crown ownership of agricultural land with tenant farmers paying a portion of produce, lending historical plausibility to Joseph's famine-driven reorganization, even if the story's specific scale is theologically emphasized." },
    { title:"Priestly land exemption", icon:"⛩️",
      text:"Egyptian temples and priesthoods historically held tax-exempt land grants directly from Pharaoh, matching the text's note that priests alone did not have to sell their land since they received a fixed allowance (v. 22)." },
    { title:"'Few and evil' — Jacob's self-assessment", icon:"💭",
      text:"Jacob's blunt reflection on his 130 hard years (v. 9) surveys a life marked by deception, exile, bereavement, and loss, offering a notably unsentimental patriarchal self-appraisal rather than a triumphant summary." }
  ],
  crossRefs: [
    { group:"Israel's prosperity in Goshen", refs:[
      { r:"Genesis 46:34", note:"Goshen secured earlier specifically for shepherds" },
      { r:"Exodus 1:7", note:"the family's multiplication continues explosively after this" },
      { r:"Psalm 105:23-24", note:"'Israel came into Egypt... and the LORD made his people very fruitful'" } ]},
    { group:"Jacob's burial request", refs:[
      { r:"Genesis 49:29-32", note:"Jacob repeats and expands the same burial instructions" },
      { r:"Genesis 50:12-13", note:"the sons carry out the oath, burying him at Machpelah" },
      { r:"Hebrews 11:21-22", note:"both Jacob's and Joseph's faith remembered regarding their burial wishes" } ]}
  ]
},

/* ===== GENESIS 48 — Jacob Blesses Ephraim and Manasseh ===== */
"1:48": {
  era: { title: "Patriarchal age — Jacob's deathbed adoption and blessing", sub: "Crossed hands favor the younger son; Ephraim and Manasseh become tribes",
    badges: ["Jacob near death in Goshen", "The younger blessed above the elder", "Two grandsons adopted as sons"] },
  timeOfDay: "dusk",
  summary: "Told his father is ill, Joseph brings his two sons, Manasseh and Ephraim, to Jacob's bedside; Jacob recalls God's promise to him at Luz (Bethel) and formally adopts the two boys as his own sons, equal in inheritance to Reuben and Simeon (vv. 1-7). Nearly blind, Jacob asks who the boys are, then blesses them, deliberately crossing his hands to lay his right hand on the younger Ephraim's head and his left on the firstborn Manasseh's, despite Joseph's attempt to correct him (vv. 8-14). Jacob blesses Joseph himself with a prayer invoking the God who had shepherded him all his life and the Angel who redeemed him from all harm, and insists to Joseph that he has acted knowingly, declaring that Ephraim's descendants will become greater than Manasseh's (vv. 15-20). Jacob then tells Joseph he will die soon, but that God will bring the family back to Canaan, giving Joseph an extra portion, a mountain slope he took from the Amorites (vv. 21-22).",
  focusPlace: "goshen",
  places: [
    { id:"goshen", role:"Where the aged, near-blind Jacob blesses Joseph's two sons on his deathbed (vv. 1-22)" },
    { id:"bethel", role:"Luz, where God first appeared to Jacob and made the promise he now recalls while adopting Ephraim and Manasseh (v. 3; Gen 28:19)" }
  ],
  journey: [
    { from:"goshen", to:"goshen", label:"No travel — a deathbed scene", km:0, dashed:true, note:"The entire chapter takes place at Jacob's bedside in Goshen; the only movement is Joseph bringing his sons close for the blessing." }
  ],
  hotspots: [
    { x:0.08, type:"person", label:"Manasseh and Ephraim adopted as sons", av:"elder", desc:"Recalling God's promise at Luz, Jacob formally adopts Joseph's two sons as his own, equal to Reuben and Simeon in inheritance (vv. 3-7)." },
    { x:0.30, type:"person", label:"Nearly blind, Jacob asks who they are", av:"elder", desc:"His eyes dim with age, Jacob asks Joseph to identify the boys before blessing them (vv. 8-10)." },
    { x:0.50, type:"person", label:"Hands deliberately crossed", av:"elder", desc:"Jacob crosses his hands to put his right hand on the younger Ephraim, despite Joseph's attempt to move it to Manasseh, the firstborn (vv. 13-14, 17-19)." },
    { x:0.68, type:"person", label:"'The God who has been my shepherd'", av:"elder", desc:"Jacob blesses Joseph with a prayer recalling the God of Abraham and Isaac who shepherded him and the Angel who redeemed him from all harm (vv. 15-16)." },
    { x:0.85, type:"person", label:"'He knew what he was doing'", av:"elder", desc:"Jacob insists to Joseph that crossing his hands was deliberate, prophesying that Ephraim's line will surpass Manasseh's (vv. 19-20)." },
    { x:0.95, type:"object", label:"An extra portion promised", desc:"Jacob gives Joseph one mountain slope more than his brothers, taken from the Amorites, alongside the promise of return to Canaan (vv. 21-22)." }
  ],
  environment: {
    chips: ["A deathbed blessing scene", "Two grandsons formally adopted", "Crossed hands, deliberately", "The younger favored again", "'The God who has been my shepherd'", "A promised return to Canaan"],
    text: "Confined entirely to Jacob's bedside in Goshen, this quiet, intimate chapter carries enormous weight: the formal adoption of Manasseh and Ephraim gives Joseph a double portion among the tribes, and Jacob's deliberate crossing of his hands continues a pattern, stretching back through his own life, of God's blessing favoring the younger over the elder."
  },
  objectsExtra: [],
  peopleExtra: ["manasseh", "ephraim"],
  culture: [
    { title:"Adoption granting a double portion", icon:"👨‍👩‍👦",
      text:"By adopting Manasseh and Ephraim as his own sons rather than Joseph's grandsons, Jacob effectively gives Joseph's line a double share of the inheritance — two tribes instead of one — a customary way in the ancient world of honoring a favored son's descendants." },
    { title:"The younger over the elder, again", icon:"🔄",
      text:"Jacob's crossed-hands blessing of Ephraim over Manasseh repeats a recurring Genesis pattern — Isaac over Ishmael, Jacob over Esau — of God's chosen blessing bypassing simple birth order, this time enacted knowingly by Jacob himself." },
    { title:"'The Angel who has redeemed me'", icon:"👼",
      text:"Jacob's blessing (v. 16) uniquely names 'the Angel' alongside God as the one who redeemed him from harm, a phrase later read by many as an early hint of a divine figure distinct from yet identified with God, echoing Jacob's earlier encounters at Bethel and Peniel." }
  ],
  crossRefs: [
    { group:"The younger blessed above the elder", refs:[
      { r:"Genesis 25:23", note:"'the older shall serve the younger,' said of Esau and Jacob" },
      { r:"Genesis 27:1-29", note:"Jacob's own blessing taken from his elder brother" },
      { r:"Numbers 1:32-35", note:"Ephraim's tribe indeed grows larger than Manasseh's later" } ]},
    { group:"Jacob's blessings recalled later", refs:[
      { r:"Joshua 13:29-31; 17:1", note:"Manasseh and Ephraim receive tribal territories as promised here" },
      { r:"Hebrews 11:21", note:"'by faith Jacob... blessed each of the sons of Joseph'" },
      { r:"Genesis 49:22-26", note:"Joseph's own blessing continues this scene's themes" } ]}
  ]
},

/* ===== GENESIS 49 — Jacob's Deathbed Blessings on the Twelve Sons ===== */
"1:49": {
  era: { title: "Patriarchal age — Jacob's final oracles over his twelve sons", sub: "A father's last words become tribal destinies, Judah's kingship foretold",
    badges: ["Jacob's final words", "Twelve sons, twelve futures", "Judah's line marked for kingship"] },
  timeOfDay: "dusk",
  summary: "Gathering his twelve sons, Jacob delivers a series of poetic oracles describing what will befall each in 'days to come' (vv. 1-2). Reuben is rebuked and demoted for defiling his father's bed; Simeon and Levi are condemned together for their violence at Shechem, their descendants to be scattered in Israel (vv. 3-7). Judah is praised as a lion, destined to hold the scepter until 'Shiloh comes' and the nations obey him — the most extensive and messianically significant blessing (vv. 8-12). Zebulun, Issachar, Dan, Gad, Asher, and Naphtali each receive shorter oracles touching on geography, character, or fate, including Dan's image as a serpent that bites the horse's heels (vv. 13-21). Joseph receives an extensive blessing of fruitfulness and strength despite past hostility, and Benjamin is described as a ravenous wolf (vv. 22-27). The chapter closes with Jacob instructing his sons to bury him with his fathers in the cave of Machpelah at Hebron, then breathing his last (vv. 28-33).",
  focusPlace: "hebron",
  places: [
    { id:"hebron", role:"The cave of Machpelah where Jacob instructs his sons to bury him, alongside Abraham, Sarah, Isaac, and Rebekah (vv. 29-32)" },
    { id:"goshen", role:"Where Jacob gathers his sons and delivers his final blessings before dying (vv. 1-2, 33)" }
  ],
  journey: [
    { from:"goshen", to:"hebron", dashed:true, label:"Jacob's burial instructions look homeward", km:450, note:"Jacob himself does not travel in this chapter, but his final words point his sons back toward Hebron, where he insists on being buried with his ancestors rather than in Egypt." }
  ],
  hotspots: [
    { x:0.06, type:"person", label:"Reuben demoted", av:"youth", desc:"'Unstable as water, you shall not have preeminence' — Reuben's blessing recalls his defiling of Jacob's bed (Gen 35:22; 49:3-4)." },
    { x:0.18, type:"person", label:"Simeon and Levi condemned together", av:"youth", desc:"Jacob curses their anger for the Shechem massacre, decreeing their descendants scattered within Israel (vv. 5-7)." },
    { x:0.32, type:"person", label:"Judah, the lion and the scepter", av:"youth", desc:"Judah's brothers will praise him; the scepter will not depart from Judah 'until Shiloh comes,' the chapter's clearest messianic note (vv. 8-12)." },
    { x:0.50, type:"person", label:"Dan, a serpent by the road", av:"youth", desc:"Dan will judge his people, pictured as a serpent that bites a horse's heels, unseating its rider (vv. 16-18)." },
    { x:0.68, type:"person", label:"Joseph's fruitful bough", av:"official", desc:"Joseph is blessed as a fruitful bough by a spring, attacked yet unbroken by archers, blessed with 'blessings of heaven above' (vv. 22-26)." },
    { x:0.85, type:"person", label:"Benjamin, a ravenous wolf", av:"youth", desc:"Benjamin's brief oracle pictures him devouring prey morning and evening (v. 27)." },
    { x:0.95, type:"person", label:"Jacob's final instruction and death", av:"elder", desc:"Jacob commands burial at Machpelah with his fathers, then 'breathed his last and was gathered to his people' (vv. 29-33)." }
  ],
  environment: {
    chips: ["Twelve sons, twelve futures foretold", "Reuben, Simeon, and Levi rebuked", "Judah's scepter and 'Shiloh'", "Animal imagery for character and fate", "Joseph's fruitful, unbroken bough", "A last command: bury me at Machpelah"],
    text: "Spoken from Jacob's deathbed in Goshen, these oracles function as much as tribal prophecy as personal blessing, their poetic, often cryptic animal imagery (lion, serpent, wolf, deer, fruitful bough) foreshadowing each tribe's later territory and character. Judah's blessing towers over the rest in length and significance, planting the promise of an enduring royal line that later prophecy and the New Testament both trace toward the Messiah."
  },
  objectsExtra: ["machpelah-cave"],
  peopleExtra: [],
  culture: [
    { title:"Poetic 'testament' blessings", icon:"📜",
      text:"Jacob's oracles follow an ancient Near Eastern pattern of a dying patriarch's final testament, using terse poetic imagery rather than plain prose — a genre that appears again in Moses' blessing of the tribes in Deuteronomy 33." },
    { title:"'Until Shiloh comes'", icon:"👑",
      text:"The obscure phrase in Judah's blessing (v. 10) has been read variously as a place name, a title meaning 'the one to whom it belongs,' or a messianic reference; Jewish and Christian tradition alike has long connected it to a future ruler from Judah's line, ultimately fulfilled for Christians in Jesus." },
    { title:"Blessings as tribal geography foretold", icon:"🗺️",
      text:"Many of the oracles anticipate specific tribal territories and roles seen later in Joshua and Judges — Zebulun by the seacoast, Issachar's agricultural toil, Dan's mobile, serpent-like tactics — reading almost as a poetic preview of the tribes' settled national character." }
  ],
  crossRefs: [
    { group:"Judah's scepter and the Messiah", refs:[
      { r:"Numbers 24:17", note:"Balaam's oracle of a coming star and scepter from Jacob" },
      { r:"2 Samuel 7:12-16", note:"David's line established as an everlasting kingship" },
      { r:"Revelation 5:5", note:"Jesus called 'the Lion of the tribe of Judah'" } ]},
    { group:"Jacob's burial completing his own oath", refs:[
      { r:"Genesis 47:29-31", note:"Jacob's earlier oath to Joseph about his burial" },
      { r:"Genesis 50:1-14", note:"the sons carry out the burial at Machpelah in the next chapter" },
      { r:"Genesis 23:17-20", note:"Abraham's original purchase of the cave of Machpelah" } ]}
  ]
},

/* ===== GENESIS 50 — Jacob's Burial and Joseph's Death ===== */
"1:50": {
  era: { title: "Patriarchal age — Jacob's burial at Machpelah, and Joseph's own death", sub: "Egyptian mourning rites, final reassurance to the brothers, and a coffin awaiting the Exodus",
    badges: ["A great Egyptian mourning procession", "'You meant evil... God meant it for good'", "Joseph's bones await the Exodus"] },
  timeOfDay: "day",
  summary: "Joseph weeps over his father's body and orders him embalmed in the Egyptian manner, a process taking forty days, followed by seventy days of mourning (vv. 1-3). With Pharaoh's permission, a great procession of Egyptian officials and Jacob's household travels to Canaan, where they mourn seven days at the threshing floor of Atad before burying Jacob in the cave of Machpelah at Hebron, as he had instructed (vv. 4-14). After their father's death the brothers fear Joseph will now take revenge, and send word begging forgiveness; Joseph weeps at their fear and reassures them fully: 'you meant evil against me, but God meant it for good,' and he provides for them and their children (vv. 15-21). Joseph lives to see his own great-grandchildren through Ephraim's and Manasseh's lines, and before dying at 110 he makes his brothers swear that when God eventually brings Israel out of Egypt, they will carry his bones with them; he is then embalmed and placed in a coffin in Egypt (vv. 22-26).",
  focusPlace: "hebron",
  places: [
    { id:"egypt", role:"Where Jacob's embalming, mourning, and Joseph's own later death and embalming take place (vv. 1-3, 22-26)" },
    { id:"hebron", role:"The cave of Machpelah where the great funeral procession finally buries Jacob with his ancestors (vv. 7-14)" }
  ],
  journey: [
    { from:"egypt", to:"hebron", label:"The great funeral procession", km:400, note:"A vast company of Egyptian officials and Jacob's family carries his embalmed body from Egypt to bury him in the cave of Machpelah, then returns to Egypt." }
  ],
  hotspots: [
    { x:0.06, type:"object", label:"Jacob embalmed, forty days", desc:"Joseph orders his father embalmed in the Egyptian manner, a process taking forty days, with seventy days of national mourning (vv. 1-3)." },
    { x:0.22, type:"person", label:"A great procession to Canaan", av:"official", desc:"Pharaoh's officials and Jacob's household together carry the body to Canaan, mourning seven days at the threshing floor of Atad (vv. 7-11)." },
    { x:0.38, type:"object", label:"Burial at Machpelah", desc:"Jacob is buried in the cave his grandfather Abraham purchased, alongside Abraham, Sarah, Isaac, and Rebekah (vv. 12-13)." },
    { x:0.55, type:"person", label:"The brothers' fear and plea", av:"youth", desc:"After Jacob's death the brothers fear reprisal and beg Joseph's forgiveness, falling before him as servants (vv. 15-18)." },
    { x:0.72, type:"person", label:"'You meant evil... God meant it for good'", av:"official", desc:"Joseph weeps at their fear and fully reassures them, framing the whole story as God's providence to save many lives (vv. 19-21)." },
    { x:0.92, type:"object", label:"Joseph's death and coffin", desc:"Joseph lives to 110, sees his great-grandchildren, makes his brothers swear to carry his bones out of Egypt one day, and is embalmed and placed in a coffin (vv. 22-26)." }
  ],
  environment: {
    chips: ["Forty days of embalming", "A vast Egyptian-Hebrew funeral procession", "Burial at Machpelah, as promised", "The brothers' lingering fear", "'God meant it for good'", "A coffin in Egypt, awaiting the Exodus"],
    text: "The chapter closes the whole book of Genesis by moving from Egypt's mourning rites to Machpelah's ancestral cave and back again, framing Jacob's honored burial and Joseph's own peaceful death within the same land where Israel's story will soon turn to slavery. Joseph's dying instruction to carry his bones out one day (v. 25) leaves Genesis ending not in finality but in forward-looking hope, fulfilled centuries later at the Exodus (Ex 13:19)."
  },
  objectsExtra: ["embalming-coffin", "machpelah-cave"],
  peopleExtra: [],
  culture: [
    { title:"Egyptian embalming practice", icon:"⚰️",
      text:"The forty-day embalming period and seventy days of mourning (v. 3) closely match known Egyptian mummification and national mourning customs, lending historical texture to Jacob's honored treatment as the father of a high Egyptian official." },
    { title:"A joint Egyptian-Hebrew funeral", icon:"🚶",
      text:"The description of chariots, horsemen, and 'a very great company' (v. 9) accompanying the family to Canaan reflects the genuine honor Pharaoh's court extended to Joseph, and the mourning at the threshing floor of Atad was memorable enough that Canaanites renamed the site 'Abel-mizraim,' 'mourning of Egypt' (v. 11)." },
    { title:"Joseph's bones and the Exodus", icon:"🦴",
      text:"Joseph's dying oath (v. 25) is fulfilled centuries later when Moses carries his bones out of Egypt (Ex 13:19) and Joshua finally buries them at Shechem (Josh 24:32) — a small but deliberate thread tying Genesis's ending directly to Israel's national deliverance." }
  ],
  crossRefs: [
    { group:"Providence over betrayal, restated", refs:[
      { r:"Genesis 45:5-8", note:"Joseph's earlier statement of the same providential theme" },
      { r:"Romans 8:28", note:"'all things work together for good' echoes Joseph's words" },
      { r:"Acts 7:9-10", note:"Stephen's summary of God's hand throughout Joseph's life" } ]},
    { group:"Joseph's bones and the Exodus fulfilled", refs:[
      { r:"Exodus 13:19", note:"Moses carries Joseph's bones out of Egypt as sworn" },
      { r:"Joshua 24:32", note:"Joseph's bones finally buried at Shechem in the promised land" },
      { r:"Hebrews 11:22", note:"Joseph remembered for this very act of faith regarding his bones" } ]}
  ]
}


};
