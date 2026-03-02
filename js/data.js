// Character and place data for Dandelion Dynasty Companion
// Covers books 1-3 only. No Speaking Bones content.

const CHARACTERS = [
  {
    id: "kuni-garu",
    name: "Kuni Garu",
    aliases: ["Emperor Ragin", "The Dandelion", "King of Dasu", "Duke of Zudi"],
    occupation: ["Bandit", "Corvee Guard", "Duke", "King", "Emperor of Dara"],
    placeOfBirth: "Zudi",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Jia Matiza", "Consort Risana", "Consort Fina"],
    relatives: [
      { name: "Feso Garu", relation: "father" },
      { name: "Nare Garu", relation: "mother" },
      { name: "Kado Garu", relation: "brother" },
      { name: "Prince Timu", relation: "son" },
      { name: "Princess Thera", relation: "daughter" },
      { name: "Prince Phyro", relation: "son" },
      { name: "Princess Fara", relation: "daughter" },
      { name: "Prince Gimoto", relation: "nephew" }
    ],
    affiliation: ["House of Garu", "Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Young Kuni possessed long, narrow eyes that glint with sly intelligence and natural charisma despite lacking conventional handsomeness. As emperor, his beer belly reflected humble tastes and rejection of noble pretension. A pragmatist valuing substance over style and people over protocol, he demonstrated boundless empathy for commoners and genius for unconventional solutions. The dandelion symbolized his admiration for resilience, practicality, and resourcefulness. Though capable of deception, his actions reflected commitment to justice and protecting the vulnerable. He later farmed to honor family roots.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Rebellion Against the Xana Empire",
          text: "Kuni's life changed upon witnessing the mortality of Emperor Mapidere, and he was inspired by the brilliant Jia Matiza to seek a more respectable life. After becoming a bandit leader following desertion of his corvee prisoners, he learned pragmatism. His leadership grew during the rebellion \u2014 he liberated his hometown, formed a sworn bond with warrior Mata Zyndu, and secured strategist Luan Zya's allegiance. His greatest military success was capturing Pan using cruben-riders, effectively ending the Xana Dynasty."
        },
        {
          subtitle: "The Chrysanthemum-Dandelion War",
          text: "After Mata Zyndu burned Pan and declared himself Hegemon, a bitter civil war erupted. Kuni was exiled to Dasu, where he and Marshal Gin Mazoti established a meritocracy-based state. Through abandoned undersea tunnels, he launched counterattacks against Mata. The conflict concluded with Mata's defeat and suicide, making Kuni the undisputed islands ruler. He was crowned Emperor Ragin, the first Dandelion Emperor of a unified Dara."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "Reign and the Lyucu War",
          text: "Kuni's peaceful reign faced court factionalism between the 'swords' and 'abacus' groups. He secretly intended to name Princess Thera as heir over his sons. The Lyucu invasion devastated this plan \u2014 Prince Timu became a puppet emperor, and illness weakened Kuni until his capture. Chained to the mast of the Lyucu flagship at the Battle of Zathin Gulf, he delivered a final, rousing speech to his army, named Thera his successor, and took his own life to liberate his soldiers."
        }
      ]
    }
  },
  {
    id: "mata-zyndu",
    name: "Mata Zyndu",
    aliases: ["The Hegemon", "Marshal of Cocru", "The Chrysanthemum", "The Butcher of Wolf's Paw"],
    occupation: ["Noble Warrior", "Marshal of Cocru", "Hegemon of Dara"],
    placeOfBirth: "Farun, Tunoa Islands",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Princess Kikomi", "Lady Mira"],
    relatives: [
      { name: "Dazu Zyndu", relation: "grandfather" },
      { name: "Shiru Zyndu", relation: "father" },
      { name: "Phin Zyndu", relation: "uncle" },
      { name: "Soto Zyndu", relation: "aunt" }
    ],
    affiliation: ["House of Zyndu", "Cocru Army", "Hegemon's Court"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Mata is described as a giant of a man, physically imposing and extraordinarily strong with aristocratic bearing. His rare double-pupiled eyes grant him supernatural sight. His character centers on an unwavering commitment to honor and family legacy, yet his single-minded pursuit of vengeance reveals a dark, ruthless streak.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Legacy of Vengeance",
          text: "Born in Tunoa Islands as last heir of the Zyndu clan. His grandfather Marshal Dazu was betrayed during the Xana invasion; his army was buried alive. Emperor Mapidere ordered clan extermination; only uncle Phin escaped with infant Mata. Raised in exile under the motto 'Do not forget.'"
        },
        {
          subtitle: "The Rebellion and Rise to Power",
          text: "Mata assassinated the local Xana commander, reclaimed his ancestral castle, and recovered legendary weapons: sword Na-aroenna and cudgel Goremaw. With Phin, he slaughtered the garrison, inspiring followers. He formed sworn brotherhood with Kuni Garu. After Dimu's fall, he ordered massacre of the surrendered garrison, fracturing his friendship with Kuni."
        },
        {
          subtitle: "Hegemon and the Civil War",
          text: "Personal tragedies \u2014 murder of uncle Phin and death of Princess Kikomi \u2014 accelerated his descent into tyranny. After the Battle of Wolf's Paw, he sacrificed 20,000 prisoners to the sea, earning the epithet 'Butcher of Wolf's Paw.' Believing Kuni stole glory by capturing Pan first, Mata burned the capital, killed the boy-emperor, and declared himself Hegemon, starting civil war. His army surrounded and collapsing, Lady Mira took her own life. He led a final suicidal charge on a snowy beach, ending the Chrysanthemum-Dandelion War."
        }
      ]
    }
  },
  {
    id: "jia-matiza",
    name: "Jia Matiza",
    aliases: ["Empress Jia", "Dowager Empress", "Regent"],
    occupation: ["Herbalist", "Scholar", "Empress of Dara", "Regent"],
    placeOfBirth: "Faca",
    status: "Alive",
    statusSafe: false,
    gender: "Female",
    significantOther: ["Kuni Garu", "Otho Krin"],
    relatives: [
      { name: "Gilo Matiza", relation: "father" },
      { name: "Lu", relation: "mother" },
      { name: "Prince Timu", relation: "son" },
      { name: "Princess Thera", relation: "daughter" },
      { name: "Prince Phyro", relation: "son, by adoption" }
    ],
    affiliation: ["House of Garu", "Dandelion Court"],
    nationality: "Faca",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Grace of Kings", "The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Jia is fiercely independent and brilliant, with a mind that sees the world in terms of systems and long-term consequences. She was an accomplished herbalist admiring dandelions for their hardiness. As Empress, she became a political strategist operating covertly, adhering to strict Moralist philosophy opposing commercialism and independent warlords. Her family devotion is deep, but state security takes absolute priority, driving ruthless, morally ambiguous choices. She prioritizes the security of the state above all else, willing to sacrifice reputations for lasting peace.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Forging a Partnership",
          text: "Jia encountered Kuni Garu when he cleverly saved a poor woman's son from conscription. Recognizing his potential, she initiated a courtship and they developed a deep intellectual bond. During the rebellion, Soto Zyndu mentored her, advising her to become an active and equal partner in Kuni's ambitions. After their separation and reconciliation, they established a partnership based on radical honesty, with Jia providing strategic guidance through secret letters while he was exiled on Dasu."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "The Empress's Grand Game",
          text: "As Empress, Jia believed powerful, independent military nobles were a threat to peace and orchestrated plots to neutralize them. She secretly funded Hegemon cults to create crises and framed Duke Theca Kimo for treason. Her primary target was Marshal Gin Mazoti. She blackmailed Zomi Kidosu into signing a false confession, using it to arrest Gin for treason and consolidate power. When the Lyucu invaded, Jia masterminded an act of biological warfare, unleashing locusts to destroy the garinafins' food supply. Following Kuni's death, she became Regent and coerced her rival, Consort Risana, into suicide, securing absolute court control."
        }
      ],
      "The Veiled Throne": [
        {
          subtitle: "The Veiled Throne",
          text: "As Regent for Emperor Phyro, Jia ruled from behind a 'veiled throne,' keeping him on a tight leash while executing her complex plans against the Lyucu occupation."
        }
      ]
    }
  },
  {
    id: "luan-zya",
    name: "Luan Zya",
    aliases: ["The Kite-Rider", "Toru Noki"],
    occupation: ["Assassin", "Strategist", "Inventor", "Teacher"],
    placeOfBirth: "Ginpen",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Gin Mazoti"],
    relatives: [
      { name: "Aya Mazoti", relation: "daughter" }
    ],
    affiliation: ["House of Zya", "Dandelion Court"],
    nationality: "Haan",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Luan is described as lean and gaunt, with an intense and scholarly demeanor embodying Haanese philosophical traditions. He demonstrates immense intellect and patience, guided by the principle that persistent, patient effort achieves transformative results. Though strategically ruthless, his motivations center on creating a better, more just world rather than simply restoring the old order.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Vengeance and a New Purpose",
          text: "His family was massacred during the Xana conquest; he was the sole survivor, escaping via experimental kite. Years as an assassin culminated in a failed attack on Emperor Mapidere. He received a magical strategy book (Gitre Uthu) from the god Lutho, shifting his focus from revenge to world transformation."
        },
        {
          subtitle: "Strategist of the Rebellion",
          text: "He formed a deep bond with Kuni Garu as chief advisor, serving as the 'mind' of the rebellion's core leadership. He orchestrated strategic alliances, including the cruben-riders of Tan Adu, instrumental in defeating the Xana Empire. He remained loyal to Kuni during the civil war, providing crucial counsel."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "Teacher and Final Voyage",
          text: "Luan discovered a brilliant girl Mimi from Dasu, training her as his intellectual heir (renamed Zomi Kidosu). He embarked on a voyage exploring lands beyond the Wall of Storms. Captured by the Lyucu, he was tortured for navigational calculations while secretly embedding fatal mathematical errors. He escaped with fellow captive Oga Kidosu and died from his injuries after leaving a coded message enabling the destruction of the Lyucu reinforcement fleet."
        }
      ]
    }
  },
  {
    id: "gin-mazoti",
    name: "Gin Mazoti",
    aliases: ["Marshal Gin", "Queen of Rima and Faca", "Queen of Gejira"],
    occupation: ["Dockworker", "Quartermaster", "Marshal", "Queen"],
    placeOfBirth: "Dimushi, Amu",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Luan Zya"],
    relatives: [
      { name: "Aya Mazoti", relation: "daughter" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Daran",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Small in stature, a trait that caused constant underestimation. She disguised herself as a boy named 'Gin' early in life to survive and work in male-dominated spaces. Fiercely intelligent, proud, and ambitious with exceptional logistics and strategy skills. Pragmatic and ruthless when needed, yet possesses strong honor and loyalty \u2014 particularly toward Kuni Garu. The god Kiji tempted her to betray Kuni, but she refused, prioritizing faith in her lord.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "From Obscurity to Marshal",
          text: "An orphan from a brothel in Dimushi, Gin survived on the streets before disguising herself as a boy. She served as a quartermaster in rebel armies, frustrated when nobles ignored her strategic advice. Upon meeting Kuni Garu in Dasu, she bested his top advisor in strategy, earning recognition. In a revolutionary act, he revealed her as a woman to his entire army and promoted her to Marshal."
        },
        {
          subtitle: "Architect of Victory",
          text: "Gin's strategies proved crucial in the Chrysanthemum-Dandelion War. She executed the surprise attack on Rui through the Grand Tunnels and led campaigns conquering Rima and Faca. After the war, Kuni rewarded her with the title Queen of Gejira, making her one of the most powerful figures in the new empire."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "Queen, Rival, and Prisoner",
          text: "As Queen, Gin led the 'Swords' faction of military traditionalists, creating conflict with Empress Jia. After granting refuge to defeated rebels, Jia exploited the situation to frame Gin for treason, having her arrested and imprisoned."
        },
        {
          subtitle: "Final Command and Sacrifice",
          text: "When the Lyucu invaded, Jia confessed and requested Gin retake command. Gin led a brilliant counter-invasion of Rui. At Zathin Gulf, facing defeat, she crashed her flagship into the Lyucu command ship. She dueled and, with Zomi Kidosu's aid, killed the Lyucu leader, Pekyu Tenryo, at the cost of her own life."
        }
      ]
    }
  },
  {
    id: "consort-risana",
    name: "Consort Risana",
    aliases: ["Lady Risana"],
    occupation: ["Illusionist", "Imperial Consort"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Kuni Garu"],
    relatives: [
      { name: "Prince Phyro", relation: "son" },
      { name: "Princess Fara", relation: "daughter" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Risana is portrayed as exquisitely beautiful, with a serene and mysterious demeanor. She masters smokecraft, employing herbal smoke to clear the confusion from people's minds and help them see the truth rather than deceive. She demonstrates keen understanding of human nature and the unspoken currents of emotion and power. Unlike the systematic Empress Jia, her wisdom operates intuitively and empathetically. She becomes leader of the 'Swords,' a court faction championing military traditions.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A New Alliance",
          text: "Kuni met Risana in a secluded cottage while fleeing Mata Zyndu's patrols. She gave him shelter and, through her unique art, helped him cut through the 'smoke' of his own self-doubt, restoring his confidence. Kuni subsequently asked her to become his second wife on Jia Matiza's strategic recommendation. Risana collaborated with Marshal Gin Mazoti to create a women's auxiliary corps for Kuni's Dasu forces. During the final confrontation against Mata Zyndu, she orchestrated a psychological tactic involving soldiers' female relatives singing peace songs on the battlefield, which undermined enemy morale and secured victory."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "Consort, Strategist, and Sacrifice",
          text: "As mother of Prince Phyro and Princess Fara, Risana assumed leadership of the military faction at court. Her strategic abilities proved crucial during the Arulugi rebellion, where her smokecraft created illusory forces that secured an imperial triumph. Following Emperor Ragin's death, Empress Regent Jia viewed Risana as a political threat and pressured her into an impossible choice: drink poisoned tea or trigger civil conflict. Risana accepted her tragic fate to safeguard her son's prospects."
        }
      ]
    }
  },
  {
    id: "emperor-mapidere",
    name: "Emperor Mapidere",
    aliases: ["The Unifier"],
    occupation: ["Emperor of Dara"],
    placeOfBirth: "Xana",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Crown Prince Pulo", relation: "son" },
      { name: "Emperor Erishi", relation: "son" }
    ],
    affiliation: ["House of Xana", "Xana Empire"],
    nationality: "Xana",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "An aged ruler presenting as gaunt and fearful, Mapidere concealed vulnerability beneath surface authority. During Luan Zya's kite assault on his imperial procession, observers discovered he was not as a god, but as a wrinkled, fearful man. Driven by conviction that unified Dara could achieve lasting peace, he employed brutal, tyrannical methods. Profoundly paranoid and cruel, he murdered his chatelain's lover and child for perceived disloyalty \u2014 an act transforming his closest ally Goran Pira into a covert enemy dedicated to dynasty destruction.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Failing Reign",
          text: "His reign's final years displayed tyranny's consequences, culminating in dynasty collapse upon his death. The Imperial Procession, disrupted by Luan Zya's assault, shattered his invincibility perception. Aging and terminally ill from failed alchemical immortality treatments, he experienced a prophetic dream where Dara's deities debated his legacy and foretold coming conflict. On his deathbed, confidant Goran Pira and Prime Minister Lugo Crupo conspired against him, forging a decree usurping the crown from legitimate heir Crown Prince Pulo and installing the compliant Prince Loshi as Emperor Erishi, precipitating imperial collapse."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "The Lost Expedition",
          text: "His secret expedition seeking a legendary Land of the Immortals was not lost at sea \u2014 the Lyucu people captured the fleet after feigning submission. Following years of absorbing Dara's technological knowledge, the Lyucu slaughtered the expedition and weaponized stolen technology for city-ship construction. His immortality obsession inadvertently equipped a foreign power threatening the very empire he constructed."
        }
      ]
    }
  },
  {
    id: "emperor-erishi",
    name: "Emperor Erishi",
    aliases: ["Prince Loshi"],
    occupation: ["Emperor of Dara"],
    placeOfBirth: "Pan",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Emperor Mapidere", relation: "father" },
      { name: "Crown Prince Pulo", relation: "brother" }
    ],
    affiliation: ["House of Xana", "Xana Empire"],
    nationality: "Xana",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "A sheltered and childish youth, Erishi displayed complete detachment from reality. His preoccupations centered on frivolous fantasies \u2014 constructing a meat maze and filling a map room with wine. 'Why do they insist on eating rice? Meat is so much better!' he remarked when dismissing famine reports. Easily influenced by advisors Lugo Crupo and Goran Pira, he demonstrated no interest in governance.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Puppet on the Throne",
          text: "Goran Pira and Lugo Crupo placed Prince Loshi on the throne through deception \u2014 forging a dying Emperor Mapidere's decree and executing the legitimate heir, Crown Prince Pulo. His reign saw widespread famine and rebellion, which he ignored while pursuing childish projects as his regents wielded actual power. When Kuni Garu's forces captured Pan, Erishi was imprisoned in terror. Mata Zyndu subsequently burned Pan, killing the boy-emperor and ending the Xana Dynasty."
        }
      ]
    }
  },
  {
    id: "goran-pira",
    name: "Goran Pira",
    aliases: ["The Chatelain", "Prime Minister"],
    occupation: ["Imperial Chatelain", "Prime Minister of Dara"],
    placeOfBirth: "Xana",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Lady Maing"],
    relatives: [],
    affiliation: ["House of Xana", "Xana Empire"],
    nationality: "Xana",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Pira presented as a calm, observant, and unassuming figure, the perfect loyal servant. However, beneath this exterior existed a brilliant, cold, and calculating mind consumed by a singular, decades-long quest for revenge. His defining trait was immense patience and subtle manipulation spanning extended periods \u2014 a master strategist willing to endure years of servitude to accomplish his objective.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Long Vengeance",
          text: "Emperor Mapidere seized Pira's lover, Lady Maing. After she bore Pira's son, the emperor murdered both mother and child before him, transforming devotion into vengeance. Pira conspired with Lugo Crupo to install the incompetent Prince Loshi as Emperor Erishi, destabilizing the empire. Subsequently, recognizing Crupo's growing power, Pira manipulated the emperor, framed Crupo for treason, secured his execution, and became Prime Minister \u2014 completing his empire's destruction."
        }
      ]
    }
  },
  {
    id: "lugo-crupo",
    name: "Lugo Crupo",
    aliases: ["The Regent"],
    occupation: ["Scholar", "Prime Minister of Dara", "Regent"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Xana Empire"],
    nationality: "Daran",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Crupo embodied a brilliant but deeply insecure man whose competitive nature defined his character. His lifelong rivalry with scholar Tan Feuji fueled both his defection to Xana and poisoning of that rival. As regent, he found governance tedious, preferring scholarship. He displayed arrogance, dismissed the rebellion, and made rash decisions for personal convenience \u2014 such as appointing the chief tax collector as military commander merely to remove him from court.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Arrogant Regent",
          text: "Serving as regent for boy-emperor Erishi, Crupo briefly wielded supreme power with arrogance and cruelty. He conspired with Goran Pira to stage a coup following Emperor Mapidere's death, installing Prince Loshi as puppet emperor. To consolidate authority, he performed a notorious act: bringing a stag into court, declaring it a horse, then arresting and executing all disagreeing ministers \u2014 symbolizing his absolute control. However, Pira eventually viewed him as threatening, manipulated the emperor into believing Crupo was treasonous, framed him with seditious poetry, and had him brutally tortured and executed, enabling Pira's rise as Prime Minister."
        }
      ]
    }
  },
  {
    id: "kindo-marana",
    name: "Kindo Marana",
    aliases: ["The Tax Collector"],
    occupation: ["Minister of Finance", "Commander-in-Chief"],
    placeOfBirth: "Xana",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Xana Empire", "Hegemon's Court"],
    nationality: "Xana",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Marana embodied the career bureaucrat, meticulous and detail-oriented professional. Rather than functioning as a traditional warrior, he applies the principles of accounting and administration to the art of war with surprising success. His approach was inherently pragmatic and logical, seeing the empire's problems as a complex audit that requires careful management of assets and liabilities. Additionally, he demonstrated ruthless pragmatism \u2014 he executed corrupt administrators through execution by falcons to restore operational order.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Bureaucrat General",
          text: "After receiving appointment as Commander-in-Chief from Lugo Crupo, Marana formulated a pragmatic strategy to revitalize weakened imperial forces. He successfully reconstructed the Imperial air force stationed on Rui and demonstrated naval tactical skill by defeating the Amu navy at the Battle of Arulugi. However, forces under Mata Zyndu's command captured him at the Battle of Wolf's Paw. Subsequently, he served the Hegemon as a commander until Dafiro Miro, operating as a double agent, killed him during Gin Mazoti's offensive targeting Rui."
        }
      ]
    }
  },
  {
    id: "tanno-namen",
    name: "Tanno Namen",
    aliases: ["The Old General"],
    occupation: ["General of the Xana Empire"],
    placeOfBirth: "Xana",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Xana Empire"],
    nationality: "Xana",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Namen is characterized as an old but still formidable warrior with a deep sense of honor and duty. He represents traditionalist values, believing conflicts should be conducted with dignity. He opposed the cunning strategies used by Kuni Garu, viewing them as dishonorable. Despite opposing the protagonists, he earned widespread respect for his principled approach.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Honorable Antagonist",
          text: "Brought from retirement by Kindo Marana to suppress the Dandelion Rebellion, Namen led campaigns through Rima and defeated Huno Krima's uprising at Dimu. He lost the Battle of Zudi after being outmaneuvered by Kuni's strategy and Mata's military prowess. He accepted an aerial duel challenge between champions, which he lost, devastating army morale. He made a final stand at the Battle of Wolf's Paw against Mata Zyndu's forces. He chose suicide rather than surrender, having maintained an undefeated record throughout his career."
        }
      ]
    }
  },
  {
    id: "mun-cakri",
    name: "Mun Cakri",
    aliases: ["The Butcher"],
    occupation: ["Butcher", "General"],
    placeOfBirth: "Zudi",
    status: "Alive",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Mun is described as a physically powerful man whose skills with carving knives translate seamlessly to the battlefield. He exhibits a boisterous demeanor with simple tastes and demonstrates deep loyalty. While lacking strategic expertise, his courage and devoted commitment to Kuni Garu prove invaluable. He remains content with his station and harbors no ambitions beyond serving his friend and emperor.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Kuni's Loyal Shield",
          text: "As one of Kuni Garu's earliest followers from Zudi, Mun Cakri's loyalty was absolute and famously demonstrated at a critical moment. His most significant act involved saving Kuni Garu's life at Mata Zyndu's treacherous victory banquet in Pan's ruins. When an assassin attempted to kill Kuni during a sword dance, Mun intervened using his massive shield and meat-carving skills, a display that impressed even the Hegemon."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "An Old Guard at Peace",
          text: "In the years of peace, Mun remained a key figure in Kuni's inner circle and a member of the 'Swords' faction at court. At a celebration honoring his son's adoption, he emerged as genuinely content among the old guard. He valued the peace his service created and displayed no resentment toward the new bureaucratic class, unlike certain peers."
        }
      ]
    }
  },
  {
    id: "rin-coda",
    name: "Rin Coda",
    aliases: ["Farsight Secretary"],
    occupation: ["Scholar", "Farsight Secretary"],
    placeOfBirth: "Zudi",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Rin is characterized as nervous, cautious, and bookish, a stark contrast to his bold friend Kuni. He favors study and quiet contemplation to action. Though intelligent and loyal, his gentle nature is often ill-suited to the brutal realities of politics and espionage. He possesses a strong moral compass, which is severely tested by his duties.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Friend and Advisor",
          text: "As one of Kuni's oldest friends from their schoolboy days in Zudi, Rin served loyally throughout the rebellion. He witnessed the kite attack on Emperor Mapidere alongside Kuni, later joined the rebellion, and became one of the key friends who helped ground the new emperor, reminding him of his purpose when Kuni faced temptation from imperial luxury."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "The Farsight Secretary's Burden",
          text: "Appointed as Farsight Secretary, Rin oversaw the first Grand Examination. However, Empress Jia subtly manipulated him into pursuing conspiracies. His intelligence failures regarding the Hegemon Cults and involvement in Jia's plot against Gin Mazoti weighed heavily on him. Ultimately, Rin took his own life, leaving behind a confession that exposed the empress's machinations."
        }
      ]
    }
  },
  {
    id: "cogo-yelu",
    name: "Cogo Yelu",
    aliases: ["Prime Minister Yelu"],
    occupation: ["Administrator", "Prime Minister of Dara"],
    placeOfBirth: "Zudi",
    status: "Alive",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Grace of Kings", "The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Cogo embodies practicality and intelligence, excelling at devising simple, elegant solutions to complex administrative problems. He demonstrates unwavering loyalty to Kuni Garu and shares the leader's commitment to governance benefiting ordinary citizens. Rather than a warrior, he functions as a builder, with his strength residing in the creation of stable and effective systems.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "Architect of the State",
          text: "An early confidant of Kuni, Cogo secured him respectable employment, enabling his marriage to Jia Matiza. Upon Kuni's capture of Zudi, Cogo became chief administrator. His renowned innovation was a lottery system where purchase receipts served as tickets, solving the new government's revenue problems. He subsequently accompanied Kuni to Dasu exile, managing the island's transformation into a prosperous state."
        }
      ]
    }
  },
  {
    id: "king-thufi",
    name: "King Thufi",
    aliases: ["The Shepherd King", "Princeps"],
    occupation: ["Shepherd", "King of Cocru", "Princeps"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Tiro Alliance"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Thufi is portrayed as a simple and honorable man, initially overwhelmed by the burdens of kingship. He lacked natural warrior or political abilities but possessed a core of decency and a genuine desire to do what is right for his people. He functioned as a reluctant leader who rises to the occasion when his people need him most.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Shepherd King",
          text: "A shepherd discovered by Huno Krima and Zopa Shigin, Thufi proved to be the last Cocru heir. He was crowned in Caruza, becoming a rebellion symbol. Frustrated with infighting among restored Tiro kings and backed by Mata Zyndu's military strength, Thufi declared himself Princeps at the Grand Council of War. He made the Princeps's Promise, granting kingship over Gefica to whoever captured Pan \u2014 a pledge that advanced Kuni Garu's fortune but ultimately triggered civil conflict."
        }
      ]
    }
  },
  {
    id: "princess-kikomi",
    name: "Princess Kikomi",
    aliases: ["The Hero of Arulugi"],
    occupation: ["Princess of Amu"],
    placeOfBirth: "Arulugi",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Mata Zyndu"],
    relatives: [],
    affiliation: ["Kingdom of Amu"],
    nationality: "Amu",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Kikomi possessed extraordinary beauty, which made her vulnerable to being used as a political instrument. The goddess Tututika counseled her to harness seduction and deception as sources of power rather than resenting her circumstances. She demonstrated intelligence, bravery, and deep commitment to her nation. Yet internal conflict tormented her \u2014 torn between obligations to her people and authentic romantic feelings for Mata Zyndu, ultimately leading to her demise.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Tragic Pact",
          text: "Following the Battle of Arulugi and the Amu navy's defeat by Kindo Marana, Kikomi became a prisoner. She negotiated secretly with Marana: safeguarding her people in exchange for infiltrating rebel leadership to create division. She orchestrated a seemingly miraculous liberation, returning to Caruza as a celebrated figure. Both Mata Zyndu and his uncle Phin became devoted to her. Ultimately choosing to honor her agreement, she seduced and killed Phin in his chambers, staging it as a passionate crime before guards executed her. This sacrifice devastated Mata emotionally and fractured his relationship with Kuni Garu."
        }
      ]
    }
  },
  {
    id: "phin-zyndu",
    name: "Phin Zyndu",
    aliases: ["Guardian of the Zyndu Legacy"],
    occupation: ["Warrior", "Advisor"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Princess Kikomi"],
    relatives: [
      { name: "Dazu Zyndu", relation: "father" },
      { name: "Mata Zyndu", relation: "nephew" },
      { name: "Soto Zyndu", relation: "sister" }
    ],
    affiliation: ["House of Zyndu", "Cocru Army"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Phin is characterized as a stern and focused warrior dedicated to his fallen family and nephew's future. Though skilled in combat, his abilities were surpassed by Mata's exceptional prowess. His defining trait was instilling in Mata the mantra 'Do not forget.' He functioned as a loyal second-in-command and advisor throughout the early rebellion.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Life for Vengeance",
          text: "Phin was the sole survivor of his generation, devoted to preserving family legacy and vengeance. As a thirteen-year-old boy, he escaped the Xana clan extermination, fleeing with infant Mata to the Tunoa Islands where he trained him for years. He fought alongside Mata reclaiming their ancestral castle and participated in slaughtering the Xana garrison. In Caruza, both developed romantic feelings for Princess Kikomi, ultimately leading to Phin's demise when she seduced and murdered him."
        }
      ]
    }
  },
  {
    id: "gozogi-cade",
    name: "Gozogi Cade",
    aliases: ["General Cade"],
    occupation: ["Bandit", "General"],
    placeOfBirth: "Zudi",
    status: "Alive",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Cade embodies practicality and down-to-earth sensibilities stemming from his street background. While he lacks the strategic brilliance of Gin Mazoti or the scholarly intellect of Rin Coda, he compensates through steadfast devotion and commonsense command abilities. He remains a reliable confidant who stays faithfully alongside Kuni Garu during challenging periods.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Friend from the Streets",
          text: "He was among Kuni Garu's earliest adherents when the latter became an outlaw in the Er-Me Mountains. He participated in the rebellion against Xana, the conflict with Mata Zyndu, and the establishment of the new dynasty. Though not instrumental in grand military strategies, he served as a dependable commander within Kuni's inner circle of longtime friends."
        }
      ]
    }
  },
  {
    id: "than-carucono",
    name: "Than Carucono",
    aliases: ["General Than", "Admiral Than"],
    occupation: ["Stable Master", "General", "Admiral"],
    placeOfBirth: "Zudi",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Than is characterized by his boundless optimism and cheerful disposition, even in the darkest of times. He functions as a dependable ally to Kuni, consistently offering encouragement. While lacking innate command instincts, his sensible capabilities and unwavering commitment secured him elevated military rank.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: null,
          text: "Than was one of Kuni's earliest followers, serving faithfully throughout the rebellion and civil war and rising to the rank of general and admiral."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: null,
          text: "During the war against the Lyucu, Than served as a reliable commander under Marshal Gin Mazoti. He led the ground assault on Kriphi during the counter-invasion and later made the grim discovery of the bodies of Luan Zya and Oga Kidosu."
        }
      ]
    }
  },
  {
    id: "dafiro-miro",
    name: "Dafiro Miro",
    aliases: ["Captain Miro"],
    occupation: ["Soldier", "Spy", "Captain of the Palace Guards"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Ratho Miro", relation: "brother" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Dafiro is characterized as the more cautious and thoughtful of the Miro brothers with a strategic mind and deep loyalty. He excels as a keen observer of people and events, which makes him an effective spy and trusted advisor. Unlike his impulsive sibling, he demonstrates patience and long-term thinking.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Rebel's Rise",
          text: "He began as a corvee laborer who killed guards and joined Huno Krima's rebellion alongside brother Ratho. He served as a double agent during the Chrysanthemum-Dandelion War under commander Kindo Marana while secretly working for Kuni Garu. He assassinated Marana during Gin Mazoti's surprise attack on Rui, revealing his true allegiance."
        }
      ],
      "The Wall of Storms": [
        {
          subtitle: "The Emperor's Man",
          text: "He served as Captain of the Palace Guards conducting secret missions for Emperor Ragin. He attempted to free imprisoned Gin Mazoti. He undertook a diplomatic mission to Tan Adu discovering 'fire tube' technology. He died fighting in the final Zathin Gulf battle against Pekyu Tenryo."
        }
      ]
    }
  },
  {
    id: "ratho-miro",
    name: "Ratho Miro",
    aliases: ["The Younger Miro"],
    occupation: ["Soldier", "Commander"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Dafiro Miro", relation: "brother" }
    ],
    affiliation: ["Cocru Army", "Hegemon's Court"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Ratho is the hot-headed and passionate counterpart to his thoughtful older brother, Dafiro. He is quick to anger and quick to act, a fierce warrior who is deeply loyal to those he respects. He is a true believer in Mata Zyndu's philosophy of martial honor and aristocratic rule.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "A Hegemon's Man",
          text: "Ratho and Dafiro were corvee laborers who initiated the first uprising by eliminating their guards and joining Huno Krima's rebellion. He became devoted to Mata Zyndu, admiring his strength and honor. He served faithfully throughout the rebellion and civil war, dying alongside Mata in his final charge."
        }
      ]
    }
  },
  {
    id: "king-jizu",
    name: "King Jizu",
    aliases: ["The Fisherman King"],
    occupation: ["Fisherman", "King of Rima"],
    placeOfBirth: "Rima",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Kingdom of Rima", "Tiro Alliance"],
    nationality: "Rima",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Jizu embodies the archetype of a reluctant ruler \u2014 a simple, honorable man who never wanted the crown. He struggles as a monarch, plagued by cowardly and treacherous advisors, yet demonstrates extraordinary bravery when confronting existential threats. His defining characteristic is unwavering commitment to both personal honor and his people's welfare.",
    history: {
      "The Grace of Kings": [
        {
          subtitle: "The Fisherman King's Martyrdom",
          text: "When Xana general Tanno Namen invaded Rima, Jizu's military commanders betrayed him while his ministers offered only cowardly counsel. Rather than accept dishonorable surrender, he walked out alone to meet Namen's army and, after securing his people's safety, set himself ablaze. This act transformed into a powerful rallying cry for the rebellion."
        }
      ]
    }
  },
  // === Batch 2: Characters 24-45 ===
  {
    id: "king-mocri",
    name: "King Mocri",
    aliases: ["King of Gan"],
    occupation: ["King of Gan"],
    placeOfBirth: "Gan",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Kingdom of Gan", "Tiro Alliance"],
    nationality: "Gan",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Mocri embodied traditional aristocratic values. He was a proud and traditional nobleman who upheld the old aristocratic order and the honor codes that govern it. A brave warrior and a respected leader among the Tiro kings, his defining flaw was that his pride could sometimes lead to conflict.",
    history: {
      "The Grace of Kings": [
        { subtitle: "Tiro State Leader", text: "As a Tiro state leader, Mocri's actions revealed deep-seated rivalries that plagued the rebellion. During the Battle of Wolf's Paw, his forces from Gan, along with those from Faca, betrayed their allies mid-battle and switched sides to support the Empire." }
      ],
      "The Wall of Storms": [
        { subtitle: "A Legendary Tale", text: "A legendary tale emerged about a duel between Hegemon Mata Zyndu and King Mocri, who had evidently rebelled against Mata's rule. This tale of honor from a bygone era had become a popular story, inspiring the children of Emperor Ragin." }
      ]
    }
  },
  {
    id: "king-shilue",
    name: "King Shilue",
    aliases: ["The Treacherous King"],
    occupation: ["King of Faca"],
    placeOfBirth: "Faca",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Kingdom of Faca"],
    nationality: "Faca",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Shilue is characterized by his opportunism and lack of conviction. He is a political chameleon, willing to betray any alliance if he believes it will benefit him. His cleverness is not matched by wisdom, and he ultimately overplays his hand.",
    history: {
      "The Grace of Kings": [
        { subtitle: "A Treacherous Reign", text: "King Shilue's short and treacherous reign serves as a cautionary tale for the ambitious but disloyal nobles of the rebellion. During the Battle of Wolf's Paw, Shilue and Gan's forces betrayed Mata Zyndu and the Tiro Alliance by switching sides mid-battle to support the Empire. Later, when Marshal Gin Mazoti advanced into the northern states, Shilue welcomed her expecting to manipulate the situation. However, Mazoti discovered his treachery and executed him at his own banquet, subsequently conquering his kingdom." }
      ]
    }
  },
  {
    id: "huno-krima",
    name: "Huno Krima",
    aliases: ["The False King of West Cocru"],
    occupation: ["Corvee Laborer", "Rebel Leader", "King"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [{ name: "Zopa Shigin", relation: "Friend" }],
    affiliation: ["First Cocru Rebellion"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Krima is characterized as bald and possessing natural charisma that inspired hope among the desperate and oppressed. However, his personality underwent significant corruption; as his power increased, he became increasingly arrogant, paranoid, and cruel, illustrating power's corrupting influence.",
    history: {
      "The Grace of Kings": [
        { subtitle: "The Fish Prophecy and a False Crown", text: "Facing execution for missing a corvee assignment, Krima and Zopa Shigin orchestrated a deception: they concealed a silk scroll reading 'Huno Krima Will Be King' inside a fish. This fabricated miracle mobilized laborers into rebellion. Krima's initial success proved brief. After establishing King Thufi, he declared himself King of West Cocru, grew paranoid, murdered Zopa Shigin, and ruled via secret police. General Tanno Namen's surprise attack destroyed his forces. Krima was ignominiously killed by his own retreating soldiers, witnessed by Mata Zyndu." }
      ]
    }
  },
  {
    id: "zopa-shigin",
    name: "Zopa Shigin",
    aliases: ["The Co-Conspirator"],
    occupation: ["Corvee Laborer", "Rebel Leader"],
    placeOfBirth: "Cocru",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["First Cocru Rebellion"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Shigin possessed a powerfully built physique and served as the more grounded of the two initial rebel leaders. He demonstrated unwavering loyalty to Huno Krima, offering consistent support for Krima's charismatic direction.",
    history: {
      "The Grace of Kings": [
        { subtitle: "The First Rebel's Right Hand", text: "Facing execution with Krima for tardy corvee duty, Shigin participated in fabricating a fish prophecy that catalyzed the first major anti-Xana uprising. Together, they successfully located lost heir Thufi and installed him as Cocru's ruler. However, as Krima's authority and distrust intensified, he perceived his longtime companion as dangerous. Following his self-coronation as King of West Cocru, Krima orchestrated Shigin's secret assassination." }
      ]
    }
  },
  {
    id: "soto-zyndu",
    name: "Soto Zyndu",
    aliases: ["Soto the Housekeeper"],
    occupation: ["Noblewoman", "Housekeeper", "Imperial Advisor"],
    placeOfBirth: "Cocru",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [
      { name: "Dazu Zyndu", relation: "Father" },
      { name: "Phin Zyndu", relation: "Brother" },
      { name: "Mata Zyndu", relation: "Nephew" }
    ],
    affiliation: ["House of Zyndu", "Dandelion Court"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: false,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "She presents as an unassuming and preternaturally wise older woman with deep political acumen and understanding of human nature. She exemplifies patience and teaching ability, conveying complex political lessons through simple metaphors.",
    history: {
      "The Grace of Kings": [
        { subtitle: "Survival and Mentorship", text: "After faking suicide to escape Xana persecution, she survived in obscurity. She later served Jia Matiza as a disguised housekeeper, becoming her political mentor and confidante while helping repair Jia's marriage to Kuni." }
      ],
      "The Wall of Storms": [
        { subtitle: "Imperial Advisor", text: "She advised imperial children, particularly teaching Princess Thera about hidden power dynamics. She orchestrated a political spectacle convincing Gin Mazoti to lead forces against the Lyucu." }
      ]
    }
  },
  {
    id: "lady-mira",
    name: "Lady Mira",
    aliases: ["Mira of Tunoa"],
    occupation: ["Embroiderer", "Songstress"],
    placeOfBirth: "Tunoa Islands",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Mata Zyndu"],
    relatives: [{ name: "Mado", relation: "Brother" }],
    affiliation: ["Hegemon's Court"],
    nationality: "Cocru",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Grace of Kings",
    lastAppearedSafe: true,
    books: ["The Grace of Kings"],
    appearanceAndPersonality: "Mira possessed quiet strength, deep empathy, and a beautiful, haunting singing voice. She demonstrated courage in challenging Mata's worldview regarding glory and vengeance with a gentle but firm wisdom.",
    history: {
      "The Grace of Kings": [
        { subtitle: "The Hegemon's Confidante", text: "Her relationship with Mata Zyndu represented his only connection to peace and home. Mira encountered Mata singing a traditional dirge for her fallen brother in Pan's ruins. She became his sole honest confidante, gently opposing his brutal actions and encouraging introspection. During the final civil war battle, facing Mata's certain defeat, she chose suicide rather than witness his death, the final act that broke Mata's spirit, prompting his own suicidal charge." }
      ]
    }
  },
  {
    id: "princess-thera",
    name: "Princess Thera",
    aliases: ["Empress Una", "Pekyu-votan Thera"],
    occupation: ["Princess", "Empress of Dara", "Rebel Leader"],
    placeOfBirth: "Pan",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Takval Aragoz", "Zomi Kidosu"],
    relatives: [
      { name: "Kuni Garu", relation: "Father" },
      { name: "Jia Matiza", relation: "Mother" },
      { name: "Prince Timu", relation: "Brother" },
      { name: "Prince Phyro", relation: "Brother" },
      { name: "Princess Fara", relation: "Sister" },
      { name: "Tanto Aragoz", relation: "Son" },
      { name: "Rokiri Aragoz", relation: "Son" }
    ],
    affiliation: ["Dandelion Court", "Dara Expeditionary Force", "Agon Rebellion"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "She demonstrates clever, courageous, and endlessly curious traits with sharp political instincts. Her scientific orientation drives her to seek rational explanations for phenomena others consider magical. A natural leader, she inspires loyalty through her intelligence and bravery.",
    history: {
      "The Wall of Storms": [
        { subtitle: "The Hidden Heir", text: "Her father secretly intended her as his heir, recognizing her early brilliance. She became a realm hero by dismantling the Hegemon rebellion through superior scientific understanding. She developed a romantic bond with Zomi Kidosu while collaborating on research. After her father's death, she abdicated her throne, married Agon prince Takval Aragoz, and led expeditions across the Wall of Storms against the Lyucu." }
      ],
      "The Veiled Throne": [
        { subtitle: "Resistance in Ukyu-Gonde", text: "In Ukyu-Gonde, she built alliances with exiled Agon tribes and launched prolonged resistance efforts. A devastating betrayal and attack on their base forced exile and triggered severe depression over her children's loss." }
      ]
    }
  },
  {
    id: "zomi-kidosu",
    name: "Zomi Kidosu",
    aliases: ["Mimi", "Pearl of Fire", "Farsight Secretary"],
    occupation: ["Scholar", "Engineer", "Farsight Secretary", "Academy Founder"],
    placeOfBirth: "Dasu",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Princess Thera"],
    relatives: [
      { name: "Oga Kidosu", relation: "Father" },
      { name: "Aki Kidosu", relation: "Mother" },
      { name: "Kinri", relation: "Half-brother" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Dasu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Zomi bears a scarred face and a paralyzed left leg after being struck by lightning as a child. She exhibits a fiery, impatient, and brilliant mind, approaching challenges through engineering logic. Her radical pragmatism creates friction with established institutions, though she demonstrates unwavering loyalty to ideals and loved ones.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Discovery and War", text: "Luan Zya discovered her exceptional intellect. At the Palace Examination, her radical critique scandalized the court. During the Lyucu War, she identified garinafin vulnerabilities and created critical inventions supporting early victories. She reached the Battle of Zathin Gulf to assist Gin Mazoti in defeating Pekyu Tenryo." }
      ],
      "The Veiled Throne": [
        { subtitle: "Farsight Secretary", text: "As Farsight Secretary, her Grand Examination reform attempt faced opposition from Empress Jia, resulting in public disgrace and resignation. She discovered that refugee Kinri was her half-brother, Savo Ryoto, at the Last Bite facility." }
      ]
    }
  },
  {
    id: "prince-timu",
    name: "Prince Timu",
    aliases: ["Emperor Thake"],
    occupation: ["Crown Prince of Dara", "Emperor of Unredeemed Dara"],
    placeOfBirth: "Pan",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: ["Tanvanaki"],
    relatives: [
      { name: "Kuni Garu", relation: "Father" },
      { name: "Jia Matiza", relation: "Mother" },
      { name: "Princess Thera", relation: "Sister" },
      { name: "Prince Phyro", relation: "Brother" },
      { name: "Princess Fara", relation: "Sister" }
    ],
    affiliation: ["Dandelion Court", "Lyucu Occupation Government"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Timu exhibits traits as studious, serious, and sometimes overly literal, contrasting sharply with his siblings' adventurous natures. He operates as a diligent administrator with deep moral conviction, yet faces severe challenges through the Lyucu invasion and subsequent captivity.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Surrender and Captivity", text: "Governed Dasu, surrendered to prevent civilian casualties, became captive to Pekyu Tenryo, fell in love with Tanvanaki, and publicly denounced his family." }
      ],
      "The Veiled Throne": [
        { subtitle: "Puppet Emperor", text: "Functioned as puppet Emperor Thake amid constant humiliation, denounced Cutanrovo Aga's purges based on his mother's message." }
      ]
    }
  },
  {
    id: "prince-phyro",
    name: "Prince Phyro",
    aliases: ["Emperor Monadetu"],
    occupation: ["Prince", "Emperor of Dara"],
    placeOfBirth: "Pan",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Kuni Garu", relation: "Father" },
      { name: "Consort Risana", relation: "Mother" },
      { name: "Prince Timu", relation: "Brother" },
      { name: "Princess Thera", relation: "Sister" },
      { name: "Princess Fara", relation: "Sister" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "As a youth, Phyro demonstrated restlessness and prioritized military training over academics. He represented the militant faction of the court, inheriting his mother's battle intuition and his father's appeal. Upon maturation, he evolved into a resolute, purposeful leader motivated by conviction that martial might safeguards Dara.",
    history: {
      "The Wall of Storms": [
        { subtitle: "The Martial Heir", text: "The martial heir received backing from the Swords faction. Dispatched by Empress Jia to suppress Hegemon cults in Tunoa, he faced siege but received rescue from his sister Thera. Following her abdication, he became heir and collaborated with his mother investigating silkmotic force as potential weaponry." }
      ],
      "The Veiled Throne": [
        { subtitle: "Emperor Monadetu", text: "As Emperor Monadetu, he chafed under Empress Jia's peacetime governance. Secretly, he established a garinafin facility at Tiro Cozo and collaborated with the Blossom Gang to assemble hidden military forces." }
      ]
    }
  },
  {
    id: "zato-ruthi",
    name: "Zato Ruthi",
    aliases: ["King of Rima", "Imperial Tutor"],
    occupation: ["King", "Scholar", "Imperial Tutor"],
    placeOfBirth: "Rima",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [{ name: "Gori Ruthi", relation: "Nephew" }],
    affiliation: ["Kingdom of Rima", "Dandelion Court"],
    nationality: "Rima",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Ruthi exemplifies the archetypal proud, traditional scholar deeply versed in classical texts. He maintains unwavering conviction in his cultural traditions' superiority, creating rigidity and arrogance that blinds him to novel perspectives.",
    history: {
      "The Grace of Kings": [
        { subtitle: "Defeat by Gin Mazoti", text: "During the civil war, Ruthi's Riman forces suffered decisive defeat by Marshal Gin Mazoti, whose unconventional battlefield strategies, including river damming to generate flash floods, exceeded his classical military training." }
      ],
      "The Wall of Storms": [
        { subtitle: "The Fall of Dasu", text: "Subsequently serving as Imperial Tutor in Pan, he clashed frequently with mischievous royal children. Accompanying Prince Timu to Dasu, Ruthi led diplomatic negotiations with arriving Lyucu forces but underestimated them as simple barbarians. Pekyu Tenryo manipulated him into disclosing critical military intelligence, directly precipitating Dasu's collapse, where Ruthi perished." }
      ]
    }
  },
  {
    id: "doru-solofi",
    name: "Doru Solofi",
    aliases: ["The Bully"],
    occupation: ["Fallen King", "Rebel Leader"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Hegemon Cults"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Wall of Storms"],
    appearanceAndPersonality: "Described as a brutish and resentful man, Solofi lost his royal standing and worked as an extortionist. He functioned as the physical enforcer in his partnership with the strategically-minded Noda Mi.",
    history: {
      "The Wall of Storms": [
        { subtitle: "The Fallen King", text: "His bitterness toward the new dynasty made him vulnerable to manipulation. Solofi initially appears as a tavern bully on Pan. An avatar of god Tazu guides him to meet Noda Mi in a graveyard. United by shared hatred for Emperor Ragin, they pledge to launch a rebellion. Their movement becomes a cult worshipping Mata Zyndu's spirit, employing deceptive magical mirrors to recruit followers. Princess Thera eventually exposes the fraud." }
      ]
    }
  },
  {
    id: "noda-mi",
    name: "Noda Mi",
    aliases: ["The Cunning King"],
    occupation: ["Fallen King", "Rebel Leader", "Collaborator"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Hegemon Cults", "Lyucu Empire"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Noda Mi exemplified highly intelligent and manipulative strategist qualities, particularly skilled at propaganda. He orchestrated deceptive schemes including cult operations and magic mirrors technology to recruit forces. Characterized as ambitious and patient, willing to align with any power advancing his personal objectives.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Hegemon Cult and Sabotage", text: "He partnered with Doru Solofi to launch a Tunoa rebellion, leveraging illusion technology to project images of Mata Zyndu and build a devoted army. After Princess Thera defeated this rebellion, he resurfaced as a Lyucu War saboteur, nearly compromising Dara's success at the Battle of Zathin Gulf." }
      ],
      "The Veiled Throne": [
        { subtitle: "Lyucu Collaborator", text: "Operating as a high-ranking Lyucu occupation official, he served as secret intermediary between Empress Jia and her imprisoned son Timu while simultaneously pursuing survival and advancement." }
      ]
    }
  },
  {
    id: "theca-kimo",
    name: "Theca Kimo",
    aliases: ["Duke of Gefica"],
    occupation: ["Duke", "General"],
    placeOfBirth: "Gefica",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Hegemon's Court", "Arulugi Rebellion"],
    nationality: "Daran",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Theca Kimo embodied pragmatism in political and military matters, viewing politics and war as a gang war where one must simply pick the stronger side. His cynicism rendered him both a flexible ally and vulnerable to manipulation.",
    history: {
      "The Grace of Kings": [
        { subtitle: "Defection to Kuni Garu", text: "Initially serving as one of Mata Zyndu's dukes, Kimo pragmatically defected to Kuni Garu's side during the civil war, recognizing superior military prospects." }
      ],
      "The Wall of Storms": [
        { subtitle: "The Arulugi Rebellion", text: "Under Emperor Ragin's reign, Kimo joined the Swords faction, resenting undervaluation of his martial abilities. Empress Jia orchestrated his downfall by secretly funding rebellion while fabricating evidence implicating him as mastermind. Trapped and believing he lacked alternatives, Kimo reluctantly declared rebellion. His forces were defeated at Arulugi through smokecraft, resulting in his execution for treason." }
      ]
    }
  },
  {
    id: "puma-yemu",
    name: "Puma Yemu",
    aliases: ["General Yemu", "The Bandit Marquess"],
    occupation: ["Bandit", "General"],
    placeOfBirth: "Cocru",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Daran",
    firstAppeared: "The Grace of Kings",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Grace of Kings", "The Wall of Storms"],
    appearanceAndPersonality: "Yemu represents a rough warrior archetype reflecting his bandit origins. He demonstrates practical loyalty and tactical skill, particularly excelling in raids and surprise operations. He harbors frustration that his military expertise receives insufficient recognition during peacetime.",
    history: {
      "The Grace of Kings": [
        { subtitle: "Recruitment", text: "Jia Matiza identified him as a potential recruitment target, a disgruntled nobleman and former bandit who could serve Kuni Garu's interests during the Chrysanthemum-Dandelion War." }
      ],
      "The Wall of Storms": [
        { subtitle: "Military Operations", text: "His forces executed two major operations: a concealed assault during the Arulugi rebellion aided by Consort Risana's smokecraft and biological warfare operations involving locust deployment against Lyucu-occupied territories." }
      ]
    }
  },
  {
    id: "oga-kidosu",
    name: "Oga Kidosu",
    aliases: ["The Storyteller"],
    occupation: ["Fisherman", "Slave", "Storyteller"],
    placeOfBirth: "Dasu",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Aki Kidosu", "Goztan Ryoto"],
    relatives: [
      { name: "Aki Kidosu", relation: "Wife" },
      { name: "Zomi Kidosu", relation: "Daughter" },
      { name: "Kinri", relation: "Son" }
    ],
    affiliation: [],
    nationality: "Dasu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Oga is a clever and resilient man who uses storytelling as a tool for survival and subtle resistance. Despite prolonged enslavement, he retained cultural identity and familial bonds.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Enslavement and Death", text: "Presumed lost at sea years prior, he was actually enslaved by the Lyucu. Luan Zya discovered him imprisoned and learned the true account of Mapidere's failed expedition. He suffered torture protecting Luan, dying from injuries following their escape attempt. His remains and Luan's were later found by his daughter Zomi on Rui." }
      ],
      "The Veiled Throne": [
        { subtitle: "Flashbacks", text: "Flashbacks depict his survival strategies in Ukyu-Gonde, including staging a turtle shell discovery to manipulate a Dara captain. He developed a complicated relationship with Lyucu warrior Goztan Ryoto, fathering Savo (Kinri)." }
      ]
    }
  },
  {
    id: "pekyu-tenryo",
    name: "Pekyu Tenryo",
    aliases: ["The Pekyu"],
    occupation: ["Leader of the Lyucu", "Invader"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Tanvanaki", relation: "Daughter" },
      { name: "Cudyu Roatan", relation: "Son" }
    ],
    affiliation: ["Lyucu Empire"],
    nationality: "Lyucu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Wall of Storms"],
    appearanceAndPersonality: "Tenryo is the epitome of a pragmatic and ruthless leader, forged by a life of harshness and war. He mastered long-term strategy, feigning submission and ignorance for years to learn the secrets of the technologically superior Dara. His approach was characterized by patience, cunning calculation, and emotional detachment.",
    history: {
      "The Wall of Storms": [
        { subtitle: "The Conqueror from Beyond the Storms", text: "Tenryo's entire existence represented decades of calculated strategy aimed at conquering Dara. He united fractious Lyucu tribes, then deceived Emperor Mapidere's expedition by appearing subservient while acquiring technological knowledge. He orchestrated a violent revolt, subjugated the expeditionary force, and utilized their vessels for invasion. His offensive defeated Zato Ruthi and captured Dasu, culminating in the Battle of Zathin Gulf where he leveraged the imprisoned Emperor Ragin as protection before his fatal defeat." }
      ]
    }
  },
  {
    id: "tanvanaki",
    name: "Tanvanaki",
    aliases: ["Princess Vadyu"],
    occupation: ["Garinafin Pilot", "Princess", "Pekyu"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: false,
    gender: "Female",
    significantOther: ["Prince Timu"],
    relatives: [
      { name: "Pekyu Tenryo", relation: "Father" },
      { name: "Cudyu Roatan", relation: "Brother" }
    ],
    affiliation: ["Lyucu Empire"],
    nationality: "Lyucu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Tanvanaki demonstrates fierce intelligence and leadership capability. She excels as a garinafin pilot with deep bonds to these war creatures. Like her father, she displays ruthlessness and manipulative tendencies, yet as Pekyu she adopted pragmatic leadership balancing fanatical hardliners against stability needs.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Young Princess and Warrior", text: "Young princess who aided her father's deception of Luan Zya. Her garinafin piloting nearly shifted the Battle of Kriphi Harbor's outcome. She manipulated captive Prince Timu into becoming a puppet emperor serving Lyucu interests." }
      ],
      "The Veiled Throne": [
        { subtitle: "Pekyu Tanvanaki", text: "Following her father's death, she became Pekyu and negotiated uneasy peace with Empress Jia. Her leadership involved combating hardline faction leader Cutanrovo Aga, whose violent purges threatened occupation stability." }
      ]
    }
  },
  {
    id: "cudyu-roatan",
    name: "Cudyu Roatan",
    aliases: ["Prince Cudyu", "Pekyu Cudyu"],
    occupation: ["Lyucu Commander", "Pekyu"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Pekyu Tenryo", relation: "Father" },
      { name: "Tanvanaki", relation: "Sister" }
    ],
    affiliation: ["Lyucu Empire"],
    nationality: "Lyucu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "He is a skilled warrior and commander but lacks his father's strategic patience and his sister's political acumen. He is straightforwardly brutal and disdainful of Dara's culture.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Deceiving Luan Zya", text: "Cudyu participated in deceiving captive Luan Zya alongside his sister, spreading misinformation regarding Mapidere's expedition's fate." }
      ],
      "The Veiled Throne": [
        { subtitle: "Crushing the Agon Rebellion", text: "As leading Lyucu homeland commander, he crushed the Agon rebellion through a surprise assault on their Kiri Valley base, guided by traitor Volyu Aragoz, forcing Princess Thera into exile." }
      ]
    }
  },
  {
    id: "ra-olu",
    name: "Ra Olu",
    aliases: ["The Collaborator"],
    occupation: ["Regent of Dasu", "Advisor to the Lyucu"],
    placeOfBirth: "Dasu",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dandelion Court", "Lyucu Occupation Government"],
    nationality: "Dasu",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Wall of Storms"],
    appearanceAndPersonality: "Ra Olu exemplifies pragmatic bureaucratic thinking. He demonstrates opportunistic tendencies with survival as his primary goal, readily applying his administrative skills to the service of the Lyucu.",
    history: {
      "The Wall of Storms": [
        { subtitle: "The Collaborator of Dasu", text: "Following the Lyucu conquest, Ra Olu swiftly collaborated with occupiers. He counseled Pekyu Tenryo on control strategies including collective punishment and informant incentivization. He also authored the ultimatum directed at the Dandelion Court on Tenryo's behalf, a document that Zomi Kidosu later analyzed to extract concealed intelligence." }
      ]
    }
  },
  {
    id: "pon-naye",
    name: "Pon Naye",
    aliases: ["Commander Naye"],
    occupation: ["Airship Commander"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Imperial Air Force"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "The Wall of Storms",
    lastAppearedSafe: true,
    books: ["The Wall of Storms"],
    appearanceAndPersonality: "Described as the epitome of a brave and dedicated soldier. He identified as a practical atheist, stating he has never prayed despite facing death daily, placing trust instead in his abilities and comrades.",
    history: {
      "The Wall of Storms": [
        { subtitle: "A Hero's Sacrifice", text: "Commander Naye led phantom airships during Marshal Gin's counter-invasion of Rui. At the Battle of Kriphi Harbor, when a garinafin attacked his vessel, he ordered his crew to abandon ship while he steered the damaged vessel on a suicidal ramming course, successfully killing the war beast and securing Dara's first major victory against Lyucu invaders." }
      ]
    }
  },
  {
    id: "takval-aragoz",
    name: "Takval Aragoz",
    aliases: ["Prince of the Agon"],
    occupation: ["Prince", "Rebel Leader"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: ["Princess Thera"],
    relatives: [
      { name: "Souliyan Aragoz", relation: "Mother" },
      { name: "Volyu Aragoz", relation: "Uncle" },
      { name: "Tanto Aragoz", relation: "Son" },
      { name: "Rokiri Aragoz", relation: "Son" }
    ],
    affiliation: ["Agon Rebellion"],
    nationality: "Agon",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Takval is a proud and capable warrior, deeply rooted in the traditions of his Agon heritage. His dynamic with Thera reflects cultural exchange and mutual respect as he valued her scientific methods while she embraced his people's customs.",
    history: {
      "The Wall of Storms": [
        { subtitle: "Alliance and Expedition", text: "Takval arrived as messenger and Agon prince, married Thera for military alliance, and accompanied her expedition across the Wall of Storms to his homeland." }
      ],
      "The Veiled Throne": [
        { subtitle: "Rebellion in Ukyu-Gonde", text: "He and Thera unified exiled Agon tribes and deposed his traitorous uncle Volyu. Their partnership anchored the rebellion, though they suffered a devastating defeat at Kiri Valley." }
      ]
    }
  },
  // === Batch 3: Characters 46-67 ===
  {
    id: "princess-fara",
    name: "Princess Fara",
    aliases: ["Dandelion", "Empress Shizona"],
    occupation: ["Princess", "Artist", "Inventor", "Empress of Dara"],
    placeOfBirth: "Pan",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Kinri"],
    relatives: [
      { name: "Kuni Garu", relation: "Father" },
      { name: "Consort Fina", relation: "Mother" },
      { name: "Prince Phyro", relation: "Half-brother" },
      { name: "Prince Timu", relation: "Half-brother" },
      { name: "Princess Thera", relation: "Half-sister" }
    ],
    affiliation: ["Dandelion Court", "The Blossom Gang"],
    nationality: "Daran",
    firstAppeared: "The Wall of Storms",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Wall of Storms", "The Veiled Throne"],
    appearanceAndPersonality: "Fara is intelligent, creative, and empathetic. She possesses a deep curiosity about the world, which manifests in her artistic and scientific pursuits. Her romance with the Lyucu refugee Kinri challenges her worldview and places her at the heart of the series' core conflicts of identity and culture.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Dandelion in Ginpen", text: "Under the guise of 'Dandelion,' Fara traveled to Ginpen and allied with the brilliant outcasts of the Blossom Gang. She fell in love with Kinri, a young Lyucu refugee. Their investigation into a corrupt merchant led them to the secret facility, Last Bite, where Kinri's true identity was revealed, creating a painful rift between them." }
      ]
    }
  },
  {
    id: "kinri",
    name: "Kinri",
    aliases: ["Savo Ryoto"],
    occupation: ["Refugee", "Inventor"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Princess Fara"],
    relatives: [
      { name: "Goztan Ryoto", relation: "Mother" },
      { name: "Oga Kidosu", relation: "Father" },
      { name: "Zomi Kidosu", relation: "Half-sister" }
    ],
    affiliation: ["The Blossom Gang", "Dandelion Court"],
    nationality: "Lyucu-Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Kinri is intelligent, resourceful, and haunted by his past. Having witnessed the brutality of the Lyucu purges, he is driven by a deep need for truth. He has a natural talent for engineering and invention.",
    history: {
      "The Veiled Throne": [
        { subtitle: "A Boy Called Savo", text: "As a boy named Savo in occupied Rui, he received tutoring from a Dara scholar. Following a massacre he witnessed, his mother arranged his escape to Dara under the name Kinri." },
        { subtitle: "The Blossom Gang", text: "In Ginpen, he joined the Blossom Gang and developed romantic feelings for Princess Fara. At the Last Bite facility, he learned his true parentage and connection to Zomi Kidosu, becoming a fugitive." }
      ]
    }
  },
  {
    id: "goztan-ryoto",
    name: "Goztan Ryoto",
    aliases: ["Thane Ryoto"],
    occupation: ["Lyucu Thane", "Political Leader", "Admiral"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: ["Oga Kidosu"],
    relatives: [{ name: "Kinri", relation: "Son" }],
    affiliation: ["Lyucu Empire (Accommodationist Faction)"],
    nationality: "Lyucu",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "A formidable warrior and shrewd political operator, Goztan demonstrates fierce independence by breaking Lyucu tradition. She maintains pragmatism and cultural skepticism toward Dara, yet her maternal bond with her half-Dara son motivates her opposition to extremist purges.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Rise to Power", text: "Early flashbacks show Goztan served as a companion to a Dara captain during Mapidere's campaign, later bearing a son with enslaved Oga Kidosu. In occupied Dara, she led accommodationist forces against hardliner Cutanrovo Aga's brutal policies. Upon exposure of her son, she lost her position but secured his escape." }
      ]
    }
  },
  {
    id: "volyu-aragoz",
    name: "Volyu Aragoz",
    aliases: ["Chief of Sliyusa Ki"],
    occupation: ["Agon Chieftain", "Collaborator"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Takval Aragoz", relation: "Nephew" },
      { name: "Souliyan Aragoz", relation: "Sister" }
    ],
    affiliation: ["Agon (Exiled)", "Lyucu Empire"],
    nationality: "Agon",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Volyu is a proud and hostile leader who harbors deep resentment toward Lyucu rule. Despite this, he pragmatically chooses collaboration to maintain his power. His nature is fundamentally treacherous and untrustworthy.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Betrayal and Coup", text: "When Thera and Takval arrived at his oasis, Volyu's years-long betrayal of Agon rebels to the Lyucu was exposed. Thera and Takval orchestrated a coup deposing him while preserving his life for use as a double agent. Subsequently, he committed ultimate betrayal by guiding Lyucu forces to the secret rebel base in Kiri Valley, resulting in its destruction." }
      ]
    }
  },
  {
    id: "souliyan-aragoz",
    name: "Souliyan Aragoz",
    aliases: ["The Matriarch"],
    occupation: ["Agon Leader"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [
      { name: "Takval Aragoz", relation: "Son" },
      { name: "Volyu Aragoz", relation: "Brother" },
      { name: "Tanto Aragoz", relation: "Grandson" },
      { name: "Rokiri Aragoz", relation: "Grandson" }
    ],
    affiliation: ["Agon Rebellion"],
    nationality: "Agon",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "The Veiled Throne",
    lastAppearedSafe: true,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "She is a strong and wise matriarch demonstrating deep loyalty to her people and family. She serves as a source of strength and guidance for her son, Takval, and functions as a crucial ally to Princess Thera.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Matriarch of the Rebellion", text: "Souliyan's wisdom and courage were instrumental in forging the Agon-Dara alliance. She played critical roles in Thera and Takval's mission, revealing the treachery of her brother, Volyu. She died heroically during the surprise Lyucu attack on Kiri Valley, sacrificing herself to help her grandchildren escape." }
      ]
    }
  },
  {
    id: "tanto-aragoz",
    name: "Tanto Aragoz",
    aliases: [],
    occupation: ["Prince"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Princess Thera", relation: "Mother" },
      { name: "Takval Aragoz", relation: "Father" },
      { name: "Rokiri Aragoz", relation: "Brother" },
      { name: "Kuni Garu", relation: "Grandfather" }
    ],
    affiliation: ["Agon Rebellion"],
    nationality: "Daran-Agon",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "As a child, Tanto is more Agon than Dara, embracing the warrior culture of his father. He initially rejects his Daran heritage but demonstrates deep curiosity and courage.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Kiri Valley", text: "Tanto was born and raised in the secret Agon base in Kiri Valley. After the base was destroyed, he and his brother were separated from their parents and taken by the Lyucu, before being rescued by the Agon defectors Toof and Radia." }
      ]
    }
  },
  {
    id: "rokiri-aragoz",
    name: "Rokiri Aragoz",
    aliases: [],
    occupation: ["Prince"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Princess Thera", relation: "Mother" },
      { name: "Takval Aragoz", relation: "Father" },
      { name: "Tanto Aragoz", relation: "Brother" },
      { name: "Kuni Garu", relation: "Grandfather" }
    ],
    affiliation: ["Agon Rebellion"],
    nationality: "Daran-Agon",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "As a young boy, Rokiri is immersed in the Agon culture of his father. He is a survivor of the Kiri Valley massacre and a key part of the 'new people' Thera seeks to build.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Kiri Valley", text: "Rokiri was born in the secret Agon base in Kiri Valley. After the base was destroyed, he was separated from his parents and taken by Lyucu forces, before being rescued by the Agon defectors Toof and Radia." }
      ]
    }
  },
  {
    id: "cutanrovo-aga",
    name: "Cutanrovo Aga",
    aliases: ["The Hardliner"],
    occupation: ["Lyucu Thane"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: false,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Lyucu Empire (Hardline Faction)"],
    nationality: "Lyucu",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Cutanrovo is a zealot, driven by a fanatical belief in the superiority of Lyucu culture and the need to purge all foreign influences. She is ruthless, ambitious, and politically savvy.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Purges", text: "Cutanrovo led a brutal puritanical movement in occupied Rui, forcing the captive Prince Timu to participate in the destruction of Dara's cultural artifacts. She used the existence of Goztan Ryoto's half-Dara son as a political weapon to attack the accommodationist faction, cementing the hardliners' control over the Lyucu court." }
      ]
    }
  },
  {
    id: "toof",
    name: "Toof",
    aliases: ["The Defector"],
    occupation: ["Garinafin Pilot"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: ["Radia"],
    relatives: [],
    affiliation: ["Lyucu Empire", "Agon Rebellion"],
    nationality: "Lyucu",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Toof demonstrates exceptional skill as a garinafin pilot. Once a committed Lyucu warrior, his imprisonment and exposure to Dara and Agon cultures shifted his perspective. He ultimately embodies moral conviction, choosing principles over tribal loyalty.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Capture and Conversion", text: "Toof was captured after Thera's forces used whale song to cripple his city-ship. He and his partner Radia were integrated into the diverse crew and began forming bonds with their former enemies. After the Lyucu attack on Kiri Valley, he and Radia pretended to betray the rebels, 'capturing' Thera's children in a ruse to help them escape the main pursuit." }
      ]
    }
  },
  {
    id: "radia",
    name: "Radia",
    aliases: ["The Defector"],
    occupation: ["Warrior"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Deceased",
    statusSafe: false,
    gender: "Female",
    significantOther: ["Toof"],
    relatives: [],
    affiliation: ["Lyucu Empire", "Agon Rebellion"],
    nationality: "Lyucu",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Radia is a capable Lyucu warrior, loyal to her partner Toof. Her experiences as a captive led her to reconsider her loyalties. She is courageous and ultimately chooses to give her life to protect the rebellion's future.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Capture and the Ruse", text: "Radia was captured along with Toof after their city-ship was crippled by Thera's forces. After the Lyucu attack on Kiri Valley, she and Toof staged a fake betrayal, 'capturing' Thera's children to help them escape." }
      ]
    }
  },
  {
    id: "cami-phithadapu",
    name: "Cami Phithadapu",
    aliases: ["The Whale Scholar"],
    occupation: ["Scholar", "Scientist", "Inventor"],
    placeOfBirth: "Dara",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Expeditionary Force", "Agon Rebellion"],
    nationality: "Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Cami is a dedicated and brilliant scholar whose expertise in whale communication proved crucial to the expedition's success.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Whale Gambit", text: "During a naval confrontation with a Lyucu city-ship, she devised a method to mimic whale calls at Princess Thera's request, successfully summoning a pod of whales that attacked and crippled the enemy vessel, securing the expedition's first major victory." }
      ]
    }
  },
  {
    id: "thoryo",
    name: "Thoryo",
    aliases: ["The Mimic", "The Wolf-Thane"],
    occupation: ["Stowaway", "Rebel"],
    placeOfBirth: "Unknown",
    status: "Deceased",
    statusSafe: false,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Expeditionary Force", "Agon Rebellion"],
    nationality: "Unknown",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Initially feral and non-verbal, Thoryo's defining trait is her ability to perfectly mimic any sound, allowing her to learn languages at an astonishing rate. She possesses a childlike innocence and a unique perspective on the world.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Discovery and the Expedition", text: "Thoryo was found in the hold of the submersible Dissolver of Sorrows. Her presence acted as a catalyst for communication, forcing the diverse crew to learn each other's languages as they taught her. During the expedition's trek through the desert, her childlike insight inspired Thera to invent a solar still." }
      ]
    }
  },
  {
    id: "tipo-tho",
    name: "Tipo Tho",
    aliases: ["Commander Tho"],
    occupation: ["Marine Commander"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Expeditionary Force", "Agon Rebellion"],
    nationality: "Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "The Veiled Throne",
    lastAppearedSafe: true,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Tipo exhibits professional, highly competent military traits with courageous, disciplined, and fiercely loyal dedication to Princess Thera.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Expedition and Last Stand", text: "As an expedition commander under Thera, Tipo led the daring boarding party that infiltrated the Lyucu city-ship, achieving a pivotal first military success. He perished during a surprise Lyucu assault on the covert Agon base in Kiri Valley, performing a last stand to allow Princess Thera and her family to escape." }
      ]
    }
  },
  {
    id: "sataari",
    name: "Sataari",
    aliases: ["The Shaman"],
    occupation: ["Shaman", "Rebel Leader"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Agon Rebellion"],
    nationality: "Agon",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Sataari is deeply connected to the spiritual traditions of the Agon people. She is wise beyond her years and possesses a quiet strength that inspires her followers.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Guardian of the Children", text: "After surviving the Kiri Valley massacre, Sataari and the Dara scholar Razutana Pon became the guardians of the surviving children. She led them on a grueling journey to the sacred City of Ghosts, Taten-ryo-alvovo, ensuring their survival." }
      ]
    }
  },
  {
    id: "razutana-pon",
    name: "Razutana Pon",
    aliases: ["The Scholar"],
    occupation: ["Scholar"],
    placeOfBirth: "Dara",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Expeditionary Force", "Agon Rebellion"],
    nationality: "Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Razutana demonstrates scholarly dedication with courage and perseverance, enduring the Agon base's destruction while assuming guardianship responsibilities for surviving children.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Expedition and Guardianship", text: "As a scholar participating in Thera's expedition, Razutana faced extreme practical tests. Following the Lyucu assault on Kiri Valley, she partnered with Agon shaman Sataari as the sole adult protector for a group of children, including Thera's sons, guiding them toward safety." }
      ]
    }
  },
  {
    id: "tiphan-huto",
    name: "Tiphan Huto",
    aliases: ["The Merchant of Ginpen"],
    occupation: ["Merchant", "Restaurateur"],
    placeOfBirth: "Ginpen",
    status: "Deceased",
    statusSafe: false,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Treasure Chest Restaurant"],
    nationality: "Haan",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Huto is characterized as a man of considerable wealth and ambition who lacks taste and subtlety. He demonstrates arrogance and ruthlessness, showing willingness to employ sabotage and coercion.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Restaurant War", text: "Huto, proprietor of the Treasure Chest restaurant, competed against the Splendid Urn establishment. He was defeated by the strategic cleverness of the Blossom Gang and Princess Fara. His criminal enterprises, which included kidnapping artisans for the Lyucu, were exposed, resulting in his capture." }
      ]
    }
  },
  {
    id: "mozo-mu",
    name: "Mozo Mu",
    aliases: ["The Prodigy Chef"],
    occupation: ["Chef"],
    placeOfBirth: "Haan",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: ["Treasure Chest Restaurant"],
    nationality: "Haan",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "The Veiled Throne",
    lastAppearedSafe: true,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Mozo is a young girl with an incredible, innate talent for cooking. Her dishes are complex, artistic, and deeply rooted in history and literature. She functions as a pawn in Tiphan Huto's schemes.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Restaurant Contest", text: "Mozo Mu was the secret weapon of the Treasure Chest restaurant in its contest against the Splendid Urn. It was later revealed that she and her family were being held hostage by Tiphan Huto. After her plight was revealed, the owner of the Splendid Urn conceded the contest rather than win through the exploitation of a child." }
      ]
    }
  },
  {
    id: "nazu-tei",
    name: "Nazu Tei",
    aliases: ["The Tutor"],
    occupation: ["Scholar", "Tutor"],
    placeOfBirth: "Dara",
    status: "Deceased",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [],
    affiliation: [],
    nationality: "Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "The Veiled Throne",
    lastAppearedSafe: true,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Nazu Tei is a woman of great intellect and moral courage. She believes in teaching her students not just facts, but how to think critically and question official narratives.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Tutor of Savo", text: "She served as a secret tutor to young Lyucu thane Savo Ryoto, instructing him in Dara history and philosophy. When hardliner Cutanrovo Aga initiated cultural purges, Nazu Tei was arrested. Before her death, she delivered a final crucial lesson to her student regarding listening to his heart to discover truth." }
      ]
    }
  },
  {
    id: "aya-mazoti",
    name: "Aya Mazoti",
    aliases: ["The Marshal's Daughter"],
    occupation: ["Princess", "Commander"],
    placeOfBirth: "Dara",
    status: "Alive",
    statusSafe: true,
    gender: "Female",
    significantOther: [],
    relatives: [
      { name: "Gin Mazoti", relation: "Mother" },
      { name: "Luan Zya", relation: "Father" }
    ],
    affiliation: ["Dandelion Court", "Empire of Dara"],
    nationality: "Daran",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Aya inherits her mother's fierce determination and her father's strategic mind. She is proud, ambitious, and deeply conscious of the immense legacy she has to uphold.",
    history: {
      "The Veiled Throne": [
        { subtitle: "First Command", text: "Aya's disastrous first military command, where she rigidly followed her mother's famous treatise with poor results, was detailed in a letter from the official Gori Ruthi." }
      ]
    }
  },
  {
    id: "ofluro",
    name: "Ofluro",
    aliases: ["The Garinafin Master"],
    occupation: ["Garinafin Rider", "Trainer"],
    placeOfBirth: "Ukyu-Gonde",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [],
    affiliation: ["Dara Imperial Air Force"],
    nationality: "Lyucu",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Ofluro embodies a harsh and demanding teacher whose methods derive from the brutal traditions of the Lyucu. His commitment to the Dara remains perpetually questioned.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Training at Tiro Cozo", text: "A Lyucu defector, Ofluro's expertise with garinafins was invaluable. He was brought to the secret base at Tiro Cozo to train Emperor Phyro's new generation of Dara-bred garinafins and their riders." }
      ]
    }
  },
  {
    id: "gori-ruthi",
    name: "Gori Ruthi",
    aliases: ["The Moralist Scholar"],
    occupation: ["Scholar", "Court Official"],
    placeOfBirth: "Rima",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [{ name: "Zato Ruthi", relation: "Uncle" }],
    affiliation: ["Dandelion Court"],
    nationality: "Rima",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Like his uncle, Gori is a traditionalist and a staunch believer in the Moralist school of thought. He demonstrates genuine intentions but struggles with effectiveness due to rigid adherence to protocol.",
    history: {
      "The Veiled Throne": [
        { subtitle: "Court Service", text: "Gori served as an official in the imperial court and received an assignment to evaluate Princess Aya Mazoti's disastrous first military command. He joined a ministerial council led by Cogo Yelu that opposed Empress Jia's authority and ultimately supported the people's interests." }
      ]
    }
  },
  {
    id: "prince-gimoto",
    name: "Prince Gimoto",
    aliases: [],
    occupation: ["Prince"],
    placeOfBirth: "Zudi",
    status: "Alive",
    statusSafe: true,
    gender: "Male",
    significantOther: [],
    relatives: [
      { name: "Kado Garu", relation: "Father" },
      { name: "Kuni Garu", relation: "Uncle" },
      { name: "Prince Timu", relation: "Cousin" },
      { name: "Princess Thera", relation: "Cousin" },
      { name: "Prince Phyro", relation: "Cousin" },
      { name: "Princess Fara", relation: "Cousin" }
    ],
    affiliation: ["House of Garu", "Dandelion Court"],
    nationality: "Cocru",
    firstAppeared: "The Veiled Throne",
    lastAppeared: "Speaking Bones",
    lastAppearedSafe: false,
    books: ["The Veiled Throne"],
    appearanceAndPersonality: "Prince Gimoto is the son of Kado Garu, Kuni Garu's elder brother. As a member of the imperial family, he is part of the younger generation of royals growing up in the Dandelion Court.",
    history: {
      "The Veiled Throne": [
        { subtitle: "The Imperial Family", text: "Prince Gimoto represents the continuation and expansion of the House of Garu after its rise to power. His presence in the court reflects the broader reach of the imperial family." }
      ]
    }
  }
];

// =====================================================
// PLACES
// =====================================================
const PLACES = [
  // === States ===
  {
    id: "amu",
    name: "Amu",
    type: "Archipelago Kingdom",
    location: "Islands of Dara",
    region: "Amu",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "One of the six Tiro states, an archipelago kingdom known for its powerful navy, skilled sailors, and the beauty of its people. Homeland of the tragic Princess Kikomi.",
    geography: "An archipelago defined by its deep connection to the sea. Abundant forests supplied timber essential to building its legendary navy.",
    culture: "Amuan culture is deeply maritime. The people are known for their skill on the water and physical beauty. The goddess Tututika holds significance. Key exports include fish, timber, and ships.",
    history: {
      "The Dandelion Rebellion": "Amu joined the uprising against Xana but their naval forces suffered defeat at the Battle of Arulugi through Kindo Marana's clever tactics. Princess Kikomi negotiated with enemies to protect her people."
    }
  },
  {
    id: "cocru",
    name: "Cocru",
    type: "Kingdom",
    location: "Big Island, Dara",
    region: "Cocru",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "One of the most powerful Tiro states. Birthplace of Kuni Garu and Mata Zyndu. The state's trajectory fundamentally shaped the entire saga.",
    geography: "Encompasses bustling urban centers including Zudi, expansive fertile plains, and the strategically important Liru River.",
    culture: "Cocru maintains a proud martial tradition, exemplified by the House of Zyndu. Protective deities Kana (fire and death) and Rapa (ice and sleep) represent the harsh dualities of life.",
    history: {
      "The Xana Conquest": "The invasion devastated Cocru when Marshal Dazu Zyndu was betrayed and his armies destroyed.",
      "The Dandelion Rebellion": "Cocru became the rebellion's epicenter. Both major leaders emerged from this state, and Caruza became headquarters for the allied Tiro states.",
      "The Chrysanthemum-Dandelion War": "Following Xana's collapse, Cocru became the seat of Mata Zyndu's power. The civil war concluded with Mata's death, integrating Cocru into the unified dynasty."
    }
  },
  {
    id: "faca",
    name: "Faca",
    type: "Kingdom",
    location: "Northern Big Island",
    region: "Faca",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "A northern kingdom known for its treacherous politics and mastery of the silkmotic force.",
    geography: "A northern territory on the Big Island. Capital is Boama.",
    culture: "Faca developed the silkmotic force, initially for entertainment before later weaponization. Patron god is Rufizo, the Divine Healer.",
    history: {
      "The Dandelion Rebellion": "King Shilue joined the rebellion but betrayed Mata Zyndu's forces at the Battle of Wolf's Paw.",
      "The Chrysanthemum-Dandelion War": "Marshal Gin Mazoti conquered Faca, executed King Shilue, and ruled as queen.",
      "The Lyucu War": "Prince Phyro and Consort Risana investigated silkmotic technology, discovering the Oge Jar which became the foundation for silkmotic lances used against garinafins."
    }
  },
  {
    id: "gan",
    name: "Gan",
    type: "Kingdom",
    location: "Islands of Dara",
    region: "Gan",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "The wealthiest realm in Dara, a commercial hub where merchants and commerce drive political decisions.",
    geography: "Advantageous location and natural resources establish it as the commercial center. Patron deity is Tazu, god of chance and seafaring.",
    culture: "Commerce and wealth define Gan's society. During the Dandelion Dynasty, it became the focal point for an emergent merchant class.",
    history: {
      "The Dandelion Rebellion": "Gan's forces deserted their allies during the Battle of Wolf's Paw. Victory nonetheless came through Mata Zyndu's extraordinary martial ability."
    }
  },
  {
    id: "haan",
    name: "Haan",
    type: "Kingdom",
    location: "Big Island, Dara",
    region: "Haan",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "Celebrated for scholarly traditions, technological innovation, and philosophical contributions. Home to strategist Luan Zya.",
    geography: "Located on the Big Island, defined more by its intellectual contributions. Ginpen serves as a learning and innovation hub.",
    culture: "Haan represents the intellectual core of Dara. Patron deity is Lutho, reflecting the kingdom's emphasis on intellectual pursuits.",
    history: {
      "The Xana Conquest": "Noble houses of inventors and scholars, including Luan Zya's family, faced systematic massacre.",
      "The Dandelion Dynasty": "Ginpen experienced a cultural and technological renaissance driven by Princess Fara and the Blossom Gang."
    }
  },
  {
    id: "rima",
    name: "Rima",
    type: "Kingdom",
    location: "Northern Big Island",
    region: "Rima",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "A heavily forested northern kingdom. Its inhabitants embody martial and rugged qualities reflective of patron deity Fithoweo, god of war.",
    geography: "Dense forests characterize the landscape.",
    culture: "Emphasis on honor and resilience.",
    history: {
      "The Dandelion Rebellion": "Internal betrayal prompted King Jizu's self-immolation as an act of defiance, which became a powerful symbol for the rebellion.",
      "The Chrysanthemum-Dandelion War": "Zato Ruthi governed until Marshal Gin Mazoti conquered the kingdom using unconventional military tactics."
    }
  },
  {
    id: "xana",
    name: "Xana",
    type: "Island Empire",
    location: "Island of Rui, Dara",
    region: "Xana",
    continent: "Dara",
    category: "state",
    aliases: [],
    description: "Dominant island nation that unified the other six states under imperial rule. Center of imperial authority.",
    geography: "Centers on the island of Rui. Mount Kiji contains mystical lift gas powering advanced airships. Patron god is Kiji, Lord of the Air.",
    culture: "Xanan society emphasizes imperialism, technological advancement, and military strength.",
    history: {
      "The Unification of Dara": "King Reon leveraged technological superiority to conquer the six Tiro states, becoming Emperor Mapidere.",
      "The Dandelion Rebellion": "Oppressed Tiro states revolted, resulting in Pan's capture by Kuni Garu and Emperor Erishi's death."
    }
  },
  // === Cities ===
  {
    id: "pan",
    name: "Pan",
    type: "Imperial Capital",
    location: "Shores of Lake Tututika",
    region: "Dara (central)",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "The grand Imperial Capital of Dara, first established by the Xana Empire and later seat of the Dandelion Dynasty. Political, cultural, and administrative center of the islands.",
    geography: "Occupies a strategically important position on the shores of sacred Lake Tututika.",
    culture: "Hub of high culture, political intrigue, and imperial authority.",
    history: {
      "The Xana Dynasty": "Pan hosted significant political events, including Lugo Crupo's 'deer and horse' incident and Goran Pira's execution of Crupo.",
      "The Dandelion Rebellion": "Kuni Garu captured Emperor Erishi using cruben-riders and airships. Mata Zyndu later destroyed the city.",
      "The Dandelion Dynasty": "The rebuilt capital became contested between the 'Swords' and 'Abacus' factions."
    }
  },
  {
    id: "zudi",
    name: "Zudi",
    type: "Major City",
    location: "Cocru",
    region: "Cocru",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Significant urban center in Cocru, birthplace and home to numerous prominent figures. A microcosm reflecting broader transformations across the narrative.",
    geography: "A bustling city near the Er-Me Mountains where Kuni Garu initially turned to banditry.",
    culture: "Center of commerce and political intrigue. Houses the Splendid Urn tavern, a crucial gathering location.",
    history: {
      "The Dandelion Rebellion": "Kuni captured the city early and demonstrated unexpected administrative competence. It became a principal rebel stronghold.",
      "The Chrysanthemum-Dandelion War": "Mata Zyndu recaptured Zudi via surprise aerial counterattack, entrapping Kuni's family there."
    }
  },
  {
    id: "caruza",
    name: "Caruza",
    type: "Royal Capital",
    location: "Kingdom of Cocru",
    region: "Cocru",
    continent: "Dara",
    category: "city",
    aliases: ["Ancient capital of Cocru"],
    description: "Ancient capital of Cocru. During the Dandelion Rebellion, it served as political headquarters for the Grand Council of allied Tiro states.",
    geography: "Positioned centrally within Cocru, holds significant symbolic and political importance.",
    culture: "Embodies traditional Cocru nobility values.",
    history: {
      "The Dandelion Rebellion": "Rebel leadership installed shepherd Thufi as king. The Princeps's Promise, made here, triggered the subsequent civil war.",
      "The Hegemon's Court": "Princess Kikomi assassinated Phin Zyndu here. Jia Matiza lived in Caruza under the tutelage of Soto Zyndu."
    }
  },
  {
    id: "ginpen",
    name: "Ginpen",
    type: "Capital City",
    location: "Kingdom of Haan",
    region: "Haan",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Capital of the learned kingdom of Haan and intellectual heart of Dara. Known for learning, culture, and innovation.",
    geography: "A major city known for its centers of learning and culture.",
    culture: "A hub of silkpunk innovation with self-driving carts and creative engineering.",
    history: {
      "The Xana Conquest": "Noble families of inventors, including Luan Zya's clan, were massacred.",
      "The Dandelion Dynasty": "Princess Fara partnered with the Blossom Gang in a vibrant cultural conflict centered around a restaurant rivalry."
    }
  },
  {
    id: "dimushi",
    name: "Dimushi",
    type: "Port City",
    location: "Southern Dara",
    region: "Cocru",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Bustling port city, birthplace of Marshal Gin Mazoti. A nexus of trade, sailors, and the criminal underworld.",
    geography: "Major coastal harbor functioning as a critical commercial and strategic hub.",
    culture: "Prioritizes wit, strength, and ambition over aristocratic lineage.",
    history: {
      "The Chrysanthemum-Dandelion War": "Dimushi was occupied by Kuni Garu's forces during the final stalemate along the Liru River."
    }
  },
  {
    id: "kriphi",
    name: "Kriphi",
    type: "Capital City",
    location: "Island of Rui",
    region: "Xana",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Capital of the island of Rui. During Lyucu occupation, it served as the seat of Lyucu power and Unredeemed Dara's capital.",
    geography: "A major port city whose harbor is key for naval and aerial power in the northern islands.",
    culture: "Under Lyucu rule, divided between hardliners and accommodationists. Featured purges and quiet resistance.",
    history: {
      "The Chrysanthemum-Dandelion War": "Gin Mazoti's surprise attack through undersea passages captured the city.",
      "The Lyucu War": "Kriphi became the occupiers' capital. The Battle of Kriphi Harbor was the first major Dara victory against the Lyucu."
    }
  },
  {
    id: "nokida",
    name: "Nokida",
    type: "Capital City",
    location: "Gejira",
    region: "Gejira",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Capital of Gejira, seat of power for Queen Gin Mazoti, the first woman to rule a major state in her own right.",
    geography: "Central position within the strategically important region of Gejira.",
    culture: "Emphasized martial strength and independence from the imperial court.",
    history: {
      "The Dandelion Dynasty": "Gin Mazoti was appointed Queen of Gejira. Zomi Kidosu served as her advisor. The city sheltered fugitive rebel leaders Noda Mi and Doru Solofi."
    }
  },
  {
    id: "gefica",
    name: "Gefica",
    type: "Territory",
    location: "Big Island, Dara",
    region: "Dara",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Rich and strategically vital territory. Focal point of the Princeps's Promise which triggered the civil war.",
    geography: "Rich and strategically important territory.",
    culture: "Defined by intense competition for its control.",
    history: {
      "The Princeps's Promise": "King Thufi declared that whoever captured Pan would receive kingship over Gefica. When Kuni succeeded, Mata Zyndu felt wronged, sparking the Chrysanthemum-Dandelion War."
    }
  },
  {
    id: "gejira",
    name: "Gejira",
    type: "Kingdom",
    location: "Big Island, Dara",
    region: "Gejira",
    continent: "Dara",
    category: "city",
    aliases: [],
    description: "Major kingdom granted to Marshal Gin Mazoti by Emperor Ragin.",
    geography: "Significant and resource-rich territory.",
    culture: "Stronghold of the 'Swords' faction emphasizing martial excellence, loyalty, and autonomy.",
    history: {
      "The Dandelion Dynasty": "Emperor Ragin elevated Gin Mazoti to Queen of Gejira. She harbored fugitive leaders, creating tension with Empress Jia."
    }
  },
  // === Islands ===
  {
    id: "dasu",
    name: "Dasu",
    type: "Island Kingdom",
    location: "Near Rui, Islands of Dara",
    region: "Dara",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "A remote island that became the crucible where the Dandelion Dynasty was forged. Evolved from exile destination to symbol of innovation.",
    geography: "Small, rocky island near the larger Rui island.",
    culture: "Under Kuni Garu, developed progressive values prioritizing talent over birthright and permitting women to achieve military rank.",
    history: {
      "Kuni Garu's Exile": "Mata Zyndu assigned Kuni the kingship intending banishment, yet Kuni secretly built Dasu into a formidable power.",
      "The Lyucu Invasion": "Prince Timu governed when the Lyucu attacked. Overwhelmed defenses forced surrender to prevent civilian massacre."
    }
  },
  {
    id: "rui",
    name: "Rui",
    type: "Island",
    location: "Near Dasu",
    region: "Xana",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "Symbolic heart of the old Xana homeland. Critical due to Mount Kiji's lift gas supply.",
    geography: "Mount Kiji is the sole source of lift gas for airships. Capital city is Kriphi.",
    culture: "Embodies old imperial heritage. Under Lyucu occupation, became site of cultural erasure attempts.",
    history: {
      "The Chrysanthemum-Dandelion War": "Gin Mazoti captured Rui using undersea tunnels, giving Kuni control of the airship fleet.",
      "The Lyucu War": "Post-conquest, Rui served as the occupation's center. Battle of Kriphi Harbor was the first major Dara victory."
    }
  },
  {
    id: "arulugi",
    name: "Arulugi",
    type: "Capital Island",
    location: "Amu Archipelago",
    region: "Amu",
    continent: "Dara",
    category: "island",
    aliases: ["City in the Lake"],
    description: "Capital island of Amu. Site of key battles during the rebellion and a later rebellion against the dynasty.",
    geography: "Known as the City in the Lake. Principal landmass within the Amu archipelago.",
    culture: "Maritime traditions define the region, tied to the proud naval traditions of Amu.",
    history: {
      "The Dandelion Rebellion": "Battle of Arulugi was a major defeat. The Amu navy was outwitted by Kindo Marana. Princess Kikomi was captured.",
      "The Arulugi Rebellion": "Duke Theca Kimo led a rebellion, actually a grand political gambit by Empress Jia."
    }
  },
  {
    id: "crescent-island",
    name: "Crescent Island",
    type: "Island",
    location: "Islands of Dara",
    region: "Dara",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "A remote, isolated island serving as an educational and military location.",
    geography: "Features treacherous mountains and sparse population in small hamlets.",
    culture: "Inhabitants live a simple, traditional life, preserving ancient customs and language.",
    history: {
      "The Education of Zomi Kidosu": "Luan Zya brought Zomi here to study. A dramatic forest fire occurred during which Zomi's ingenuity rescued the hamlet residents and her mentor.",
      "The Battle of Crescent Island": "Emperor Phyro commanded forces employing ornithopters and guided missiles against the Lyucu."
    }
  },
  {
    id: "ecofi-island",
    name: "Ecofi Island",
    type: "Island",
    location: "Islands of Dara",
    region: "Dara",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "Where Emperor Mapidere died, marking the transition between eras.",
    geography: "Located within the Dara archipelago.",
    culture: "Carries substantial historical weight from the pivotal events.",
    history: {
      "The Death of the Emperor": "Goran Pira and Lugo Crupo orchestrated a coup here. They forged a false decree, causing the legitimate heir's suicide and the ascent of Emperor Erishi."
    }
  },
  {
    id: "tan-adu",
    name: "Tan Adu",
    type: "Island",
    location: "Remote southern seas",
    region: "Dara (southern)",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "Remote southern island considered 'savage' by Dara. Its inhabitants possess significant knowledge of crubens and fire piston technology.",
    geography: "Geographically isolated in southern maritime regions.",
    culture: "People maintain close harmony with nature, particularly crubens which they ride as naval mounts.",
    history: {
      "The Dandelion Rebellion": "Luan Zya recruited cruben-riding warriors for a surprise amphibious assault on Pan.",
      "The Lyucu War": "Dafiro Miro visited seeking aid and discovered fire piston technology revealing garinafin biology."
    }
  },
  {
    id: "tunoa-islands",
    name: "Tunoa Islands",
    type: "Archipelago Fiefdom",
    location: "Islands of Dara",
    region: "Dara",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "Ancestral island fiefdom of the noble Zyndu clan, where Mata Zyndu was raised in exile.",
    geography: "Relative isolation made it suitable for Phin Zyndu to hide and raise his nephew.",
    culture: "Fierce loyalty to the Zyndu lineage. Deep-seated resentment against the Xana empire.",
    history: {
      "The Dandelion Rebellion": "Mata Zyndu reclaimed his ancestral seat, igniting the spirit of rebellion as hundreds volunteered.",
      "The Hegemon Cults": "Under Emperor Ragin, the islands became centers for rebellious Hegemon Cults led by Noda Mi and Doru Solofi."
    }
  },
  {
    id: "wolfs-paw",
    name: "Wolf's Paw",
    type: "Island",
    location: "Southern Dara",
    region: "Gan",
    continent: "Dara",
    category: "island",
    aliases: [],
    description: "Southern island separated from the mainland by the treacherous Kishi Channel. Site of a major battle and atrocity.",
    geography: "Proximity to the Kishi Channel's deadly whirlpool creates natural isolation.",
    culture: "Cultural identity permanently shadowed by violent historical events.",
    history: {
      "Battle of Wolf's Paw": "Mata Zyndu's forces won despite allies' betrayal mid-battle.",
      "The Massacre": "Mata sacrificed 20,000 surrendered prisoners to the sea god Tazu, earning him the epithet 'Butcher of Wolf's Paw.'"
    }
  },
  // === Landmarks ===
  {
    id: "kishi-channel",
    name: "Kishi Channel",
    type: "Strait / Whirlpool",
    location: "Between Gan and Wolf's Paw",
    region: "Gan",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Treacherous waterway infamous for a massive, permanent whirlpool that makes naval passage nearly impossible.",
    geography: "Defined by a massive deadly whirlpool controlled by the sea god Tazu.",
    culture: "A place of superstition and dread among Dara's sailors.",
    history: {
      "The Sacrifice": "Following his victory at Wolf's Paw, Mata Zyndu sacrificed 20,000 prisoners into the whirlpool. The deity calmed the waters, allowing Mata's fleet safe passage."
    }
  },
  {
    id: "lake-dako",
    name: "Lake Dako",
    type: "Crater Lake",
    location: "Mount Kiji, Island of Rui",
    region: "Xana",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Mystical lake within the crater of Mount Kiji. Sole source of the magical lift gas that enables Dara's airships.",
    geography: "Sits at the summit of a volcano and generates a gas lighter than air. Sacred to Kiji, god of the air.",
    culture: "The Mount Kiji Air Base, built on its shores, is the center of Dara's aerial power.",
    history: {
      "The Dandelion Rebellion": "Kindo Marana traveled to the Air Base to restore lift gas production.",
      "The Lyucu War": "After Lyucu conquest, they controlled Lake Dako. Reclaiming it was central to the war effort."
    }
  },
  {
    id: "lake-tututika",
    name: "Lake Tututika",
    type: "Sacred Lake",
    location: "Near Pan",
    region: "Dara (central)",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Large sacred lake named after the goddess of beauty and fresh water. Emperor Mapidere selected its shores for Pan.",
    geography: "Scenic, tranquil freshwater lake. Natural beauty made it ideal for a capital.",
    culture: "Sacred to the goddess Tututika.",
    history: {
      "A Goddess's Intervention": "Tututika appeared disguised to young Princess Thera, teaching her about light's wavelike properties, essential insight for solving the 'magic mirrors' puzzle.",
      "A Political Summit": "Empress Jia negotiated with imprisoned Marshal Gin Mazoti aboard a boat on the lake."
    }
  },
  {
    id: "liru-river",
    name: "Liru River",
    type: "River",
    location: "Cocru",
    region: "Cocru",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "A major river serving as a key strategic and psychological border during the civil war.",
    geography: "Significant natural boundary. Dimu and Dimushi sit on opposite banks.",
    culture: "Embodies division and conflict within the narrative.",
    history: {
      "The Chrysanthemum-Dandelion War": "Kuni and Mata's armies faced off across the river. Mata held Kuni's father and wife hostage. Kuni's psychological bluff convinced Mata to spare his father."
    }
  },
  {
    id: "mount-kiji",
    name: "Mount Kiji",
    type: "Volcano",
    location: "Island of Rui",
    region: "Xana",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Most strategically important location in Dara. Lake Dako at its summit is the sole source of lift gas for airships.",
    geography: "Dominates Rui's landscape with the crater lake at its summit.",
    culture: "Sacred to Kiji, Lord of the Air. The Air Base is a symbol of imperial technological superiority.",
    history: {
      "The Xana Empire": "Military strength relied on exclusive control of the mountain's lift gas.",
      "The Lyucu Occupation": "Cutanrovo Aga orchestrated cultural erasure, renaming the Temple of Kiji and destroying its sacred library."
    }
  },
  {
    id: "roro-hills",
    name: "Roro Hills",
    type: "Hill Range",
    location: "Dara",
    region: "Dara",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Strategically important region that became a battleground in the war to liberate Dara from Lyucu occupation.",
    geography: "Defensive terrain of hills providing strong military positioning.",
    culture: "Associated with the liberation conflicts.",
    history: {
      "The War of Restoration": "After Dara's triumph at Crescent Island, the Lyucu relocated their command center here under Tanvanaki's leadership."
    }
  },
  {
    id: "thoco-pass",
    name: "Thoco Pass",
    type: "Mountain Pass",
    location: "Cocru",
    region: "Cocru",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Strategically vital mountain pass representing both Zyndu military brilliance and their ultimate downfall through betrayal.",
    geography: "A narrow, defensible chokepoint perfect for a smaller army to hold off a larger force.",
    culture: "Embodies immense historical sorrow as the site where Marshal Dazu Zyndu suffered betrayal.",
    history: {
      "The Xana Conquest": "Marshal Dazu Zyndu exploited the pass to resist superior Xana forces. His king commanded him to abandon it, leading to his defeat, capture, and army's massacre."
    }
  },
  {
    id: "zathin-gulf",
    name: "Zathin Gulf",
    type: "Gulf",
    location: "Coast of the Big Island",
    region: "Dara",
    continent: "Dara",
    category: "landmark",
    aliases: [],
    description: "Coastal body of water where the two largest fleets ever assembled fought the decisive final battle of the first Lyucu invasion.",
    geography: "Sufficient scale to accommodate enormous naval forces.",
    culture: "Holds profound importance, representing both sacrifice and ultimate victory.",
    history: {
      "The Battle of Zathin Gulf": "Pekyu Tenryo held Emperor Ragin as a human shield. Kuni escaped, named Thera his heir, and took his own life. Gin Mazoti commanded the Dara forces and with Zomi Kidosu's assistance, eliminated the Lyucu pekyu."
    }
  },
  // === Foreign ===
  {
    id: "ukyu-gonde",
    name: "Ukyu-Gonde",
    type: "Continent",
    location: "Across the eastern sea, separated by the Wall of Storms",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: ["Ukyu & Gonde"],
    description: "Vast, harsh continent across the sea from Dara. Homeland of the nomadic, garinafin-riding Lyucu and their ancient rivals, the Agon.",
    geography: "Features vast scrublands, deserts, the Lurodia Tanta, World's Edge Mountains, and the Sea of Tears.",
    culture: "Dominant societies developed around their relationship with garinafins. Both Lyucu and Agon are nomadic and martial.",
    history: {
      "The Lost Expedition": "Emperor Mapidere's fleet was deceived and enslaved by Pekyu Tenryo, who leveraged their knowledge for building an invasion force.",
      "The Dara Rebellion": "Princess Thera and Takval led a counter-invasion, uniting Agon tribes for guerrilla warfare against the Lyucu."
    }
  },
  {
    id: "kiri-valley",
    name: "Kiri Valley",
    type: "Hidden Valley",
    location: "World's Edge Mountains",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "Concealed valley that served as the primary stronghold for the Agon rebellion.",
    geography: "Fertile terrain with exceptional concealment within the World's Edge Mountains.",
    culture: "A fusion point blending Dara technology with traditional Agon customs. Thera and Takval raised their sons here.",
    history: {
      "Destruction of the Rebellion's Heart": "Lyucu commander Cudyu Roatan, assisted by turncoat Volyu Aragoz, executed a surprise assault. The attack decimated the base, killed prominent figures, and separated Thera and Takval from their children."
    }
  },
  {
    id: "lurodia-tanta",
    name: "Lurodia Tanta",
    type: "Desert",
    location: "Ukyu-Gonde",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "The vast, seemingly endless desert in Ukyu-Gonde. Domain of the exiled Agon tribes.",
    geography: "Immense desert. Survival depends on scattered oases, particularly Sliyusa Ki.",
    culture: "Shaped the Agon people into hardy and resilient survivors.",
    history: {
      "The Dara Expedition's Trek": "After arriving in Ukyu-Gonde, Thera's expedition undertook a grueling journey through the desert. This prompted her invention of a solar still for water production."
    }
  },
  {
    id: "sea-of-tears",
    name: "Sea of Tears",
    type: "Inland Sea / Salt Flats",
    location: "Ukyu-Gonde",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "Large inland sea surrounded by salt flats, representing ancient mystery and hardship.",
    geography: "Shores have receded over millennia leaving desolate salt flats with ancient geoglyphs.",
    culture: "Contains mysterious geoglyphs hinting at a deep, unrecorded history.",
    history: {
      "The Children's Ordeal": "Following Kiri Valley's destruction, child survivors including Thera's sons undertook a harrowing journey across the salt flats."
    }
  },
  {
    id: "sliyusa-ki",
    name: "Sliyusa Ki",
    type: "Oasis Settlement",
    location: "Lurodia Tanta desert",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "A rare oasis and natural center for the exiled Agon people. Became the inaugural capital of the unified Agon rebellion.",
    geography: "A vital water source in otherwise uninhabitable desert.",
    culture: "Center of exiled Agon traditions with warrior values and intricate clan structures.",
    history: {
      "Founding of the Rebellion": "Thera's expedition first encountered the exiled Agon here. Through diplomatic efforts and Souliyan's help, Thera gained chieftain support, removed the traitor Volyu, and established the rebellion's first capital."
    }
  },
  {
    id: "taten",
    name: "Taten",
    type: "Nomadic Capital",
    location: "Ukyu-Gonde scrublands",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "Roaming tent-city serving as the capital for the Pekyu of the Lyucu.",
    geography: "Nomadic settlement that moves across the scrublands.",
    culture: "Embodies the Lyucu's severe martial traditions, revolving around the pekyu's authority.",
    history: {
      "The Invasion of Dara": "Pekyu Tenryo used Taten as his operational base for orchestrating the invasion against Dara."
    }
  },
  {
    id: "taten-ryo-alvovo",
    name: "Taten-ryo-alvovo",
    type: "Ancient Ruins / Settlement",
    location: "Ukyu-Gonde",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: ["City of Ghosts", "Taten-ryo-runa"],
    description: "Ancient sacred Agon ruin that became a refuge and eventually a cooperative settlement dedicated to peace.",
    geography: "Contains massive burial mounds preserving evidence of ancient Fifth Age civilizations.",
    culture: "Traditionally sacred and forbidden, later transformed into a settlement dedicated to peace and cooperation between all peoples.",
    history: {
      "Refuge and Discovery": "Child survivors of the Kiri Valley massacre found refuge here. Tanto Aragoz explored the Great Barrow, finding farming tools and paintings proving the Agon possessed agricultural traditions before becoming nomadic."
    }
  },
  {
    id: "worlds-edge-mountains",
    name: "World's Edge Mountains",
    type: "Mountain Range",
    location: "Eastern boundary of Ukyu-Gonde",
    region: "Ukyu-Gonde",
    continent: "Ukyu-Gonde",
    category: "foreign",
    aliases: [],
    description: "Massive mountain range forming the eastern boundary of Ukyu-Gonde. Sanctuary for the Agon rebellion after their major setback.",
    geography: "Vast, rugged peaks with hidden valleys offering protection.",
    culture: "Hold profound spiritual importance for the Agon people with sacred sites for rediscovering history.",
    history: {
      "Refuge and Rediscovery": "Following Kiri Valley's collapse, Princess Thera led survivors into these mountains. The region contained an ancient garinafin boneyard enabling development of 'living bone' technology."
    }
  },
  // === Other ===
  {
    id: "last-bite",
    name: "Last Bite",
    type: "Secret Research Facility",
    location: "Dara (clandestine)",
    region: "Dara",
    continent: "Dara",
    category: "other",
    aliases: [],
    description: "Clandestine Imperial research facility housing sensitive government projects. Revealed crucial family secrets.",
    geography: "Location known only to the highest echelons of the Dandelion Court's intelligence services.",
    culture: "Characterized by secrecy and scientific inquiry.",
    history: {
      "The Family Revelation": "The Blossom Gang and Princess Fara infiltrated the facility. Kinri discovered he was Zomi Kidosu's half-brother, Savo Ryoto, sharing father Oga Kidosu. This forced Kinri to become a fugitive."
    }
  },
  {
    id: "tiro-cozo",
    name: "Tiro Cozo",
    type: "Secret Military Base",
    location: "Dara (classified)",
    region: "Dara",
    continent: "Dara",
    category: "other",
    aliases: [],
    description: "Clandestine military installation established by Emperor Phyro to develop an aerial force independent of Empress Jia's authority.",
    geography: "Deliberately isolated to shield activities from Empress Jia's court.",
    culture: "Embodied intense, focused military innovation.",
    history: {
      "Founding and Development": "Emperor Phyro founded Tiro Cozo to build his independent military force. Engineers developed mechanical ornithopters and light-guided sunflower missiles critical to the final conflict."
    }
  },
  {
    id: "kigo-yezu",
    name: "Kigo Yezu",
    type: "Village",
    location: "Island of Rui (Lyucu-occupied territory)",
    region: "Xana",
    continent: "Dara",
    category: "other",
    aliases: [],
    description: "Small Dara settlement in occupied Rui symbolizing the brutality of Cutanrovo Aga's purges.",
    geography: "Situated within Lyucu-controlled Rui territory.",
    culture: "Village life centered on survival under occupation.",
    history: {
      "The Massacre at Kigo Yezu": "Cutanrovo Aga arrived searching for Savo Ryoto and his tutor Nazu Tei. After extracting a false confession, she deployed garinafins to incinerate the entire village."
    }
  }
];
