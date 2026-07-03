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
