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
  ]
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
}
};
