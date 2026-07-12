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
   2 SAMUEL 15 — Absalom's conspiracy; David flees Jerusalem
   ============================================================ */
"10:15": {
  era: {
    title: "ca. 979 BC — Absalom's conspiracy and David's flight from Jerusalem",
    sub: "Iron Age IIA · Jerusalem, Hebron, and the ascent of Olivet · civil war begins",
    badges: ["Iron Age IIA", "United monarchy (fracturing)", "Absalom's revolt", "≈3,005 years ago"]
  },
  timeOfDay: "day",
  summary: "For four years Absalom runs a quiet campaign inside Jerusalem: rising early to meet anyone bringing a legal case to the gate, telling each one their claim is good but that 'there is no man designated by the king to hear you' (v. 3), then embracing petitioners as a king-in-waiting would — until, the narrator notes flatly, 'Absalom stole the hearts of the men of Israel' (v. 6). Using a vow to the LORD as cover, he asks David's leave to go to Hebron, David's own former capital, taking two hundred unwitting guests from Jerusalem and summoning David's shrewdest counselor, Ahithophel, from his hometown. There the trumpet sounds through every tribe: 'Absalom is king in Hebron!' — and years of patient gatework becomes an open, coordinated coup in a single day. Word reaches Jerusalem that Israel's loyalty has shifted; rather than be trapped inside a city he cannot hold, David leads his household and guard out on foot, climbing the ascent of the Mount of Olives weeping, barefoot, his head covered, his whole company weeping with him. Along the way Ittai the Gittite, a foreign commander only newly arrived in David's service, refuses the king's offer to stay behind and serve the new regime, swearing to follow him whatever comes. Zadok and Abiathar bring the ark out with the column, but David sends it back to the city rather than carry it into exile as a good-luck charm, trusting God to restore him rather than treating the ark as a guarantee — and turns the priests' sons into a courier line. Finally, learning that Ahithophel has joined the rebels, David sends his own friend Hushai the Archite back into the city with one job: get inside Absalom's council and 'defeat the counsel of Ahithophel.'",
  focusPlace: "jerusalem",
  places: [
    { id:"jerusalem", role:"The city Absalom works from inside for four years, and the city David abandons rather than defend (vv. 1-6, 13-17)" },
    { id:"hebron",    role:"David's former capital, where Absalom stages the proclamation 'Absalom is king in Hebron!' (vv. 7-12)" },
    { id:"olives",    role:"The ascent David climbs barefoot and weeping as he flees the city (v. 30)" }
  ],
  journey: [
    { from:"hebron", to:"jerusalem", label:"Absalom's proclamation at Hebron becomes open rebellion", km:30,
      note:"'Absalom is king in Hebron!' (v. 10) — the same road David marched as king a generation earlier (2 Sam 5) now carries word of his own son's coup; 'the conspiracy grew strong, and the people with Absalom kept increasing' (v. 12)." },
    { from:"jerusalem", to:"olives", label:"David's flight up the Mount of Olives", km:1,
      note:"David leaves the city on foot, climbing the ascent 'weeping as he went, up, with his head covered, and walking barefoot' (v. 30) — a reigning king abandoning his capital in a mourner's posture rather than fight his own son for it." }
  ],
  hotspots: [
    { x:0.05, type:"person", label:"Absalom at the city gate", av:"youth",
      desc:"Each morning for four years, Absalom stations himself by the road into the gate, tells every petitioner their case is right but that the king has appointed 'no man... to hear you' (v. 3), then pulls each one into a king's embrace — until 'Absalom stole the hearts of the men of Israel' (v. 6)." },
    { x:0.20, type:"person", label:"A vow as cover — David sends Absalom to Hebron", av:"youth",
      desc:"Absalom asks leave to pay a vow he claims to owe from his exile in Geshur; David, still trusting him, lets him go 'in peace' (v. 9), sending two hundred unwitting guests from Jerusalem along and summoning David's own counselor Ahithophel from his hometown of Giloh (v. 12)." },
    { x:0.34, type:"object", label:"The trumpet: 'Absalom is king in Hebron!'",
      desc:"At Absalom's signal, messengers with the ram's-horn trumpet fan out through every tribe of Israel to announce the new king the instant it sounds (v. 10) — turning four years of quiet gatework into a coordinated, nationwide coup in a single stroke." },
    { x:0.46, type:"person", label:"David leaves Jerusalem barefoot and weeping", av:"king",
      desc:"Rather than be trapped in a city he cannot defend, David takes his household and guard out on foot; he climbs the ascent of the Mount of Olives weeping, barefoot, his head covered (v. 30), and the column weeps with him — a king leaving his own capital to his son." },
    { x:0.58, type:"person", label:"Ittai the Gittite's oath", av:"warrior",
      desc:"A foreigner from Gath, only newly arrived in David's service, Ittai refuses the king's offer to turn back and serve whoever holds the city: 'wherever my lord the king shall be... there also will your servant be' (v. 21) — loyalty from an outsider that shames the native-born conspirators." },
    { x:0.70, type:"object", label:"The ark sent back to the city",
      desc:"Zadok and Abiathar carry the ark out with the fleeing column, but David refuses to take it into exile as a talisman: 'if I find favor in the eyes of the LORD, he will bring me back' (v. 25) — and sends the priests and the ark home, turning their sons into a relay of couriers (vv. 27-29, 36)." },
    { x:0.85, type:"person", label:"Hushai sent back to counter Ahithophel", av:"official",
      desc:"Told that Ahithophel — whose counsel carried the weight of 'the word of God' (16:23) — has joined the rebellion, David sends his friend Hushai the Archite back into Jerusalem with a single mission: offer himself to Absalom and 'defeat the counsel of Ahithophel' from the inside (vv. 32-34)." }
  ],
  environment: {
    chips: ["Four years of daily gate-politics", "City gate as law-court and rumor-mill", "A vow as political cover story", "Trumpet signal = coronation announcement", "Flight on foot, barefoot, head covered (mourning)", "Ark theology: presence, not talisman"],
    text: "An Iron Age town's gate was its courtroom as much as its threshold — benches built into gate chambers (excavated at Dan, Beersheba, and Gezer) seated elders who heard local disputes, exactly the traffic Absalom positions himself to intercept. His four years of patience (some manuscripts and versions read 'forty years' at v. 7, widely taken by translators as a scribal slip for 'four,' matching the timeline since his reconciliation with David in ch. 14) shows a deliberate, long strategy rather than an impulsive grab. The route out of Jerusalem crosses the Kidron valley and climbs the western shoulder of the Mount of Olives before dropping toward Jericho and the Jordan — the same ridge a greater son of David would descend a thousand years later. Going barefoot and covering the head were recognized mourning gestures across the ancient Near East; David stages his own eviction as a funeral for the kingdom he is leaving behind. Sending the ark back rather than carrying it to battle deliberately reverses Israel's mistake at Aphek a generation earlier (1 Sam 4), when the elders dragged the ark to the front expecting automatic victory and lost it to the Philistines instead — David treats God's presence as something to trust, not something to wield."
  },
  objectsExtra: ["trumpet", "ark-covenant", "citygate"],
  peopleExtra: ["david", "absalom", "ahithophel", "hushai", "ittai"],
  culture: [
    { title:"Sitting in the gate", icon:"🚪",
      text:"'Sitting in the gate' meant holding recognized civic office — gate chambers doubled as courtroom, market, and council hall, with stone benches for elders. Absalom exploits exactly that function, camping beside the entrance to intercept litigants before they ever reach David's own court, and offering each one the verdict-plus-sympathy a real judge should have given." },
    { title:"'Forty years,' or a very patient four", icon:"🕰️",
      text:"The Hebrew text of verse 7 literally reads 'forty years,' which cannot fit David's own reign; nearly every modern translation follows the Syriac and some Greek witnesses in reading 'four years' instead, counting from Absalom's reconciliation with David in the previous chapter. Either way, the point stands: this was no sudden impulse but a rebellion built slowly and deliberately, one petitioner at a time." },
    { title:"Hebron: a capital with its own claim", icon:"🏛️",
      text:"Hebron was not a random staging ground — it was where the elders of Judah first anointed David king (2 Sam 2:4), and later where all Israel did the same (2 Sam 5:3). By launching his coup from his father's own former capital, Absalom borrows its legitimacy for himself." },
    { title:"Ittai and David's foreign guard", icon:"⚔️",
      text:"David's personal forces on the flight include Cherethites, Pelethites, and 'all the six hundred Gittites who had followed him from Gath' (v. 18) — foreign mercenary units more loyal to David personally than many of his own tribesmen, a pattern common to ancient Near Eastern kings who trusted outsiders with no local faction to answer to." },
    { title:"The ark, not a lucky charm", icon:"🕍",
      text:"David's refusal to take the ark into exile deliberately contrasts with 1 Samuel 4, where Israel's elders hauled the ark to the battlefield at Aphek expecting it to guarantee victory and instead lost it to the Philistines along with 30,000 men. David has learned the lesson: God's presence is not a portable talisman to be seized for advantage." }
  ],
  crossRefs: [
    { group:"Nathan's word coming true", refs:[
      { r:"2 Samuel 12:11-12", note:"'I will raise up evil against you out of your own house' — Absalom's revolt is that judgment realized in the open, 'in the sight of all Israel'" } ]},
    { group:"Backstory: how Absalom got here", refs:[
      { r:"2 Samuel 13:1-39", note:"Amnon's rape of Tamar and Absalom's revenge killing that first split the household" },
      { r:"2 Samuel 14:1-33", note:"the wise woman of Tekoa's ruse, Absalom's recall from Geshur, and his slow, cold reconciliation with David" } ]},
    { group:"David's own psalm from this flight", refs:[
      { r:"Psalm 3 (title)", note:"'A Psalm of David, when he fled from Absalom his son' — composed on or around this very flight" } ]},
    { group:"Ahithophel's possible motive", refs:[
      { r:"2 Samuel 11:3", note:"Bathsheba is identified as 'daughter of Eliam'" },
      { r:"2 Samuel 23:34", note:"an Eliam among David's mighty men is 'son of Ahithophel the Gilonite' — if the same man, Ahithophel may be avenging his own granddaughter years after the fact" } ]},
    { group:"What follows immediately", refs:[
      { r:"2 Samuel 16:1-14", note:"Ziba's deception and Shimei's cursing along the flight road" },
      { r:"2 Samuel 17:1-23", note:"Hushai's counter-counsel succeeds, and Ahithophel hangs himself" } ]},
    { group:"How the revolt ends", refs:[
      { r:"2 Samuel 18:1-33", note:"the battle in the forest of Ephraim and Absalom's death" } ]}
  ]
},

/* ============================================================
   2 SAMUEL 18 — the battle in the forest of Ephraim; Absalom's death
   ============================================================ */
"10:18": {
  era: {
    title: "ca. 979 BC — the battle in the forest of Ephraim and the death of Absalom",
    sub: "Iron Age IIA · Mahanaim and the forest of Ephraim · the civil war's decisive battle",
    badges: ["Iron Age IIA", "United monarchy (civil war)", "Absalom's revolt ends", "≈3,005 years ago"]
  },
  timeOfDay: "day",
  summary: "From his refuge at Mahanaim, David organizes his forces into three divisions under Joab, Abishai, and Ittai the Gittite, and wants to lead them out himself; his men refuse, telling him he is 'worth ten thousand of us' and safer directing things from the city (vv. 2-4). As the troops file out through the gate, David gives one order loud enough for everyone to hear: 'deal gently for my sake with the young man Absalom' (v. 5). The armies meet in the forest of Ephraim, and the broken, wooded terrain proves as deadly as the fighting — 'the forest devoured more people that day than the sword' (v. 8). Absalom, fleeing on his mule, passes under the thick branches of a great oak; his head catches fast in the branches, the animal keeps going without him, and he is left hanging, alive and helpless. A soldier reports the sighting to Joab, who is furious no one struck him down on the spot and refuses to honor David's order himself — he takes three javelins and thrusts them into Absalom's chest while he still hangs in the tree, and ten of Joab's own armor-bearers close in and finish him. The body is thrown into a pit in the forest and buried under a great heap of stones, a stark contrast with the memorial pillar Absalom had built for himself years earlier because he had no son to keep his name alive. Two runners then race to carry the news back to David, waiting at the gate of Mahanaim: Ahimaaz, who begs to run but is held back by Joab, and an unnamed Cushite, sent first. Ahimaaz talks his way into running anyway, outpaces the Cushite by a shorter route, but cannot bring himself to answer plainly when David asks about Absalom; it falls to the Cushite to say it outright. David's reaction eclipses the victory entirely: he goes up to the chamber over the gate and weeps, crying, 'O my son Absalom, my son, my son Absalom! Would I had died instead of you' (v. 33) — turning what should have been a day of triumph into one of grief.",
  focusPlace: "mahanaim",
  places: [
    { id:"mahanaim",       role:"David's refuge camp, where he organizes the three divisions, stays back at the gate, and receives news of Absalom's death (vv. 1-4, 24-33)" },
    { id:"forest-ephraim", role:"The broken, wooded battlefield east of the Jordan where the two armies clash and Absalom dies (vv. 6-17)" }
  ],
  journey: [
    { from:"mahanaim", to:"forest-ephraim", label:"David's three divisions march out under Joab, Abishai, and Ittai", km:8,
      note:"David wants to go himself; his men insist he stay at Mahanaim, and as the army passes through the gate he gives the order everyone hears: 'deal gently for my sake with the young man Absalom' (v. 5)." },
    { from:"forest-ephraim", to:"mahanaim", dashed:true, label:"The Cushite and Ahimaaz race back with the news", km:8,
      note:"Two runners carry word of the victory back to David waiting at the gate — but the news that matters to him is not the win, it is his son (vv. 19-33)." }
  ],
  hotspots: [
    { x:0.04, type:"person", label:"David organizes three divisions, and is told to stay behind", av:"king",
      desc:"David splits the army under Joab, Abishai, and Ittai the Gittite and wants to march out with them; his men refuse, telling him 'you are worth ten thousand of us' and that he is more useful safe in the city, able to send help if needed (vv. 2-4)." },
    { x:0.16, type:"person", label:"'Deal gently... with the young man Absalom'", av:"king",
      desc:"As the troops file out through the gate, David gives Joab, Abishai, and Ittai one instruction loud enough for the whole army to hear: spare his son if at all possible (v. 5) — an order every soldier present will remember once Absalom is found." },
    { x:0.30, type:"object", label:"The forest that killed more than the sword",
      desc:"The armies meet in the forest of Ephraim, and its ravines and undergrowth prove as deadly as the battle itself: 'the forest devoured more people that day than the sword devoured' (v. 8) — a rout in country built for getting lost and hurt, not for orderly retreat." },
    { x:0.44, type:"object", label:"Absalom's mule and the great oak",
      desc:"Fleeing on his mule, Absalom rides under the thick branches of a great oak; his head catches fast in the branches, the mule keeps going, and he is left hanging between heaven and earth, alive and utterly helpless (v. 9)." },
    { x:0.56, type:"person", label:"Joab kills Absalom against David's order", av:"warrior",
      desc:"Told that Absalom is hanging in the tree, Joab rebukes the soldier who found him for not striking him down on the spot, then takes three javelins and thrusts them into Absalom's chest himself while he still hangs alive — and ten of Joab's own armor-bearers close in and finish the killing (vv. 10-15)." },
    { x:0.68, type:"object", label:"A pit of stones, and a pillar of his own making",
      desc:"Absalom's body is thrown into a pit in the forest and buried under 'a very great heap of stones' (v. 17) — the narrator's pointed contrast to the memorial pillar Absalom had raised for himself in the King's Valley, built precisely because he had no son to carry on his name (v. 18)." },
    { x:0.82, type:"person", label:"Two runners, and 'O Absalom, my son, my son!'", av:"traveler",
      desc:"Ahimaaz outruns the Cushite to reach David first but cannot bring himself to answer plainly when asked about Absalom; it falls to the Cushite to say it outright. David's response drowns out the victory: 'O my son Absalom, my son, my son Absalom! Would I had died instead of you' (vv. 19-33)." }
  ],
  environment: {
    chips: ["Forest terrain more lethal than combat", "Mule as royal, not martial, mount", "Absalom's famous hair/head (14:25-26)", "Battlefield pit vs. self-built memorial pillar", "Watchman-and-runner news relay", "Royal grief overriding victory"],
    text: "The 'forest of Ephraim' lay somewhere in the Gilead highlands east of the Jordan, near Mahanaim; its exact site is lost, but its character is not — broken ravines and heavy undergrowth that could swallow fleeing men and hide bodies far more efficiently than a sword could kill them, exactly the point the narrator makes in verse 8. Absalom's mule was not a battle animal but a mark of rank — David's sons rode mules (13:29), and Solomon would later be enthroned on David's own mule (1 Kgs 1:33) — so his death comes not in a soldier's fair fight but through an almost absurd collision of royal transportation and an ordinary tree. His head catching in the branches recalls 14:25-26, where his uncut hair's remarkable weight was singled out as part of his famous good looks; the very feature that made him praised becomes the means of his death. The watch-and-relay scene at the gate of Mahanaim — a watchman spotting runners far off, David sitting between the gates waiting — mirrors the courier system David had just set up with Zadok and Abiathar's sons in the previous two chapters (15:36; 17:17-21), and shows a city gate again functioning as the command center it was throughout this whole story."
  },
  objectsExtra: ["mule", "oak-tree", "pillar-monument", "sword"],
  peopleExtra: ["david", "joab", "absalom", "ittai"],
  culture: [
    { title:"The forest that ate the army", icon:"🌲",
      text:"Ancient battles were expected to be decided by weapons and formation; 2 Samuel 18:8 makes the unusual claim that terrain itself, not swordplay, accounted for most of the day's casualties — a reminder that ravines, thickets, and broken ground could be as lethal to a routed army as any enemy blade, especially to men fleeing blind through unfamiliar country." },
    { title:"A mule, not a warhorse", icon:"🐴",
      text:"Kings' sons rode mules rather than horses or donkeys as a specific mark of royal status (2 Sam 13:29); Solomon's own coronation procession puts him on 'my own mule' at David's command (1 Kgs 1:33-38). Absalom's death comes while he is dressed in exactly the trapping of royalty he was fighting to seize." },
    { title:"Hair as identity, hair as death", icon:"💇",
      text:"Absalom's hair was famous enough to be weighed and reported (14:25-26) as part of a description of unmatched physical beauty 'from the sole of his foot to the crown of his head.' The same feature — by long tradition his hair, though the Hebrew of 18:9 says only 'his head' caught in the oak — becomes the instrument of his undoing, an irony commentators across centuries have not let pass unnoticed." },
    { title:"Two burial monuments, one man", icon:"🪦",
      text:"Absalom is buried twice in this narrative, in a sense: the anonymous pit heaped with stones in the forest where he actually dies (v. 17), and the pillar he had raised for himself years earlier in the King's Valley 'because he had no son to keep his name in remembrance' (v. 18). The text lets the two stand side by side without comment — a self-made monument to a name, and an unmarked grave for the body." },
    { title:"Runners and relay: how battle news traveled", icon:"🏃",
      text:"Long before couriers or signal fires, decisive news moved on foot at a sprinter's pace — the identical structure appears in 1 Samuel 4:12, where a runner from the battle of Aphek reaches Shiloh with torn clothes and dust on his head to report the ark's capture and the deaths of Eli's sons. Here the pattern repeats with a twist: Ahimaaz, the faster runner by a shorter route, cannot bring himself to deliver news he knows will devastate the king, and the harder duty falls to the outsider with no personal stake in softening it." }
  ],
  crossRefs: [
    { group:"The order Joab defies", refs:[
      { r:"2 Samuel 18:5, 12-13", note:"David's explicit charge to 'deal gently... with the young man Absalom,' and the soldier's own refusal to touch him for exactly that reason before Joab overrides it" } ]},
    { group:"Absalom's appearance, established earlier", refs:[
      { r:"2 Samuel 14:25-26", note:"'in all Israel there was no one so much to be praised for his handsome appearance'... his hair cut once a year and weighed" } ]},
    { group:"What began this civil war", refs:[
      { r:"2 Samuel 15:1-12", note:"Absalom's four-year conspiracy and the proclamation at Hebron that started the revolt" } ]},
    { group:"Aftermath", refs:[
      { r:"2 Samuel 19:1-8", note:"Joab rebukes David's excessive grief and forces him to face his troops" },
      { r:"2 Samuel 19:9-15", note:"the tribes debate bringing David back, and he returns to Jerusalem" } ]},
    { group:"An earlier royal-messenger parallel", refs:[
      { r:"1 Samuel 4:12-18", note:"the runner from Aphek who brings Eli news of the ark's capture and his sons' deaths — the same relay-of-bad-news structure" } ]}
  ]
}
};
