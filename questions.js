// KBC Game Question Bank
// Divided by Category and Level (1 to 16)
// level 1 to 5: Easy (₹1,000 to ₹10,000)
// level 6 to 10: Medium (₹20,000 to ₹3,20,000)
// level 11 to 15: Hard (₹6,40,000 to ₹1,00,00,000)
// level 16: Jackpot (₹7,00,00,000)
// Answer indicates the 0-based index of the correct option.

const KBC_QUESTIONS = {
  general: {
    1: [
      {
        question: "In India, which day is celebrated as Children's Day in honor of Jawaharlal Nehru's birthday?",
        options: [
          "5th September",
          "14th November",
          "2nd October",
          "26th January"
        ],
        answer: 1
      },
      {
        question: "Which of these is the national flower of India?",
        options: [
          "Lotus",
          "Rose",
          "Marigold",
          "Jasmine"
        ],
        answer: 0
      },
      {
        question: "How many months are there in a single calendar year?",
        options: [
          "10",
          "11",
          "12",
          "13"
        ],
        answer: 2
      },
      {
        question: "What color belt represents the highest degree in standard Taekwondo?",
        options: [
          "Red",
          "Gold",
          "Blue",
          "Black"
        ],
        answer: 3
      },
      {
        question: "What do sailors call the back of a boat?",
        options: [
          "Bow",
          "Stern",
          "Starboard",
          "Port"
        ],
        answer: 1
      },
      {
        question: "What is the official name of the star located closest to the North Celestial Pole?",
        options: [
          "Gamma Cephei",
          "Eridanus",
          "Polaris",
          "Iota Cephei"
        ],
        answer: 2
      },
      {
        question: "When was Pong released?",
        options: [
          "March 29, 2017",
          "December 14, 1974",
          "November 29, 1972",
          "November 29, 1970"
        ],
        answer: 2
      },
      {
        question: "In Half-Life, what is the name of the alien that attaches to heads?",
        options: [
          "Headcrab",
          "Vortigaunt",
          "Bullsquid",
          "Facehugger"
        ],
        answer: 0
      },
      {
        question: "Which American-owned brewery led the country in sales by volume in 2015?",
        options: [
          "Anheuser Busch",
          "Miller Coors",
          "Boston Beer Company",
          "D. G. Yuengling and Son, Inc"
        ],
        answer: 3
      },
      {
        question: "Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
        options: [
          "Bang-Ding Ow",
          "Albert Putin",
          "The Polish President",
          "Pope John Paul II"
        ],
        answer: 2
      },
      {
        question: "Which artist painted the late 15th century mural 'The Last Supper'?",
        options: [
          "Piero della Francesca",
          "Leonardo da Vinci",
          "Paolo Uccello",
          "Luca Pacioli"
        ],
        answer: 1
      },
      {
        question: "In blood typing, the (+) and (-) marker after an A, B, AB, or O is called Rh factor. Which of the following is the source of its discovery?",
        options: [
          "Rhesus Monkeys",
          "Rhizomes",
          "Red-Haired People",
          "Rheumatism Patients"
        ],
        answer: 0
      },
      {
        question: "The ancient Roman god of war was commonly known as which of the following?",
        options: [
          "Ares",
          "Juno",
          "Mars",
          "Jupiter"
        ],
        answer: 2
      },
      {
        question: "What company developed the vocaloid Hatsune Miku?",
        options: [
          "Yamaha Corporation",
          "Sega",
          "Crypton Future Media",
          "Sony"
        ],
        answer: 2
      },
      {
        question: "What is the first element on the periodic table?",
        options: [
          "Lithium",
          "Oxygen",
          "Hydrogen",
          "Helium"
        ],
        answer: 2
      },
      {
        question: "What alcoholic drink is made from molasses?",
        options: [
          "Rum",
          "Vodka",
          "Gin",
          "Whisky"
        ],
        answer: 0
      },
      {
        question: "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
        options: [
          "TWA",
          "Swiss Air",
          "Air France",
          "British Airways"
        ],
        answer: 1
      },
      {
        question: "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
        options: [
          "Pear",
          "Peach",
          "Apple",
          "Plum"
        ],
        answer: 3
      },
      {
        question: "How many bones are in the human body?",
        options: [
          "203",
          "209",
          "200",
          "206"
        ],
        answer: 3
      },
      {
        question: "In the show \"Foster's Home For Imaginary Friends\", which character had an obsession with basketball?",
        options: [
          "Coco",
          "Cheese",
          "Mac",
          "Wilt"
        ],
        answer: 3
      },
      {
        question: "What is the French word for \"hat\"?",
        options: [
          "Bonnet",
          " Écharpe",
          " Casque",
          "Chapeau"
        ],
        answer: 3
      },
      {
        question: "Who wrote \"The Scarlet Letter\", published in 1850?",
        options: [
          "Washington Irving",
          "Nathaniel Hawthorne",
          "James Fenimore Cooper",
          "Catherine Maria Sedgwick"
        ],
        answer: 1
      },
      {
        question: "The Flag of the European Union has how many stars on it?",
        options: [
          "12",
          "10",
          "14",
          "16"
        ],
        answer: 0
      },
      {
        question: "What is the age of Ash Ketchum in Pokemon when he starts his journey?",
        options: [
          "10",
          "12",
          "9",
          "11"
        ],
        answer: 0
      },
      {
        question: "If you are caught \"Goldbricking\", what are you doing wrong?",
        options: [
          "Cheating",
          "Slacking",
          "Stealing",
          "Smoking"
        ],
        answer: 1
      },
      {
        question: "How was Socrates executed?",
        options: [
          "Crucifixion ",
          "Firing squad",
          "Decapitation",
          "Poison"
        ],
        answer: 3
      },
      {
        question: "In the anime Noragami who is one of the main protagonists?",
        options: [
          "Yukine",
          "Mayu",
          "Mineha",
          "Karuha"
        ],
        answer: 0
      },
      {
        question: "George Orwell wrote this book, which is often considered a statement on government oversight.",
        options: [
          "Catcher and the Rye",
          "1984",
          "The Old Man and the Sea",
          "To Kill a Mockingbird"
        ],
        answer: 1
      },
      {
        question: "What anime studio was in charge of the hit anime \"Made in Abyss\"?",
        options: [
          "8bit",
          "Studio 3hz",
          "Trigger",
          "Kinema Citrus"
        ],
        answer: 3
      },
      {
        question: "What is the name of the Japanese art of folding paper into decorative shapes and figures?",
        options: [
          "Haiku",
          "Ukiyo-e",
          "Origami",
          "Sumi-e"
        ],
        answer: 2
      },
      {
        question: "What was the name of Captain Nemo's submarine in \"20,000 Leagues Under the Sea\"?",
        options: [
          "The Poseidon  ",
          "The Atlantis",
          "The Nautilus",
          "The Neptune"
        ],
        answer: 2
      },
      {
        question: "What was the first ever London Underground line to be built?",
        options: [
          "Victoria Line",
          "Circle Line",
          "Metropolitan Line",
          "Bakerloo Line"
        ],
        answer: 2
      },
      {
        question: "In Black Hammer, what city did the heroes save from the Anti-God?",
        options: [
          "Rockwood",
          "Spiral City",
          "Mega-City One",
          "Star City"
        ],
        answer: 1
      },
      {
        question: "During World War 2, with tank was the most fear by the allies?",
        options: [
          "PanzerKampfwagen VI Tiger ",
          "Mks Matilda II",
          "Marder III",
          "PanzerKampfwagen V Panther"
        ],
        answer: 3
      },
      {
        question: "Which of the following is not one of the groups on the periodic table?",
        options: [
          "Fluorines",
          "Noble Gases",
          "Halogens",
          "Alkali Metals"
        ],
        answer: 0
      },
      {
        question: "Which candy is NOT made by Mars?",
        options: [
          "Snickers",
          "M&M's",
          "Twix",
          "Almond Joy"
        ],
        answer: 3
      },
      {
        question: "What did Gregory Mendel use to test genetic crossovers?",
        options: [
          "Cats",
          "Parrots",
          "Flowers",
          "Peas"
        ],
        answer: 3
      },
      {
        question: "Who wrote the musical \"Hamilton\"?",
        options: [
          "Nell Benjamin",
          "Tom Kitt",
          "Lin-Manuel Miranda",
          "Andrew Lloyd Webber"
        ],
        answer: 2
      },
      {
        question: "The Quran is the holy book of which Abrahamic religion?",
        options: [
          "Rastafarianism",
          "Judaism",
          "Christianity",
          "Islam"
        ],
        answer: 3
      },
      {
        question: "What is the name of the corgi in Cowboy Bebop?",
        options: [
          "Joel",
          "Einstein",
          "Edward",
          "Rocket"
        ],
        answer: 1
      },
      {
        question: "Who painted \"Swans Reflecting Elephants\", \"Sleep\", and \"The Persistence of Memory\"?",
        options: [
          "Jackson Pollock",
          "Edgar Degas",
          "Salvador Dali",
          "Vincent van Gogh"
        ],
        answer: 2
      },
      {
        question: "Which Apollo mission was the first one to land on the Moon?",
        options: [
          "Apollo 10",
          "Apollo 11",
          "Apollo 9",
          "Apollo 13"
        ],
        answer: 1
      },
      {
        question: "What animal is pictured on the logo of the automobile manufacturer Porsche?",
        options: [
          "Cheetah",
          "Horse",
          "Bull",
          "Lion"
        ],
        answer: 1
      },
      {
        question: "In the anime Black Butler, who is betrothed to be married to Ciel Phantomhive?",
        options: [
          "Angelina Dalles",
          "Elizabeth Midford",
          "Rachel Phantomhive",
          "Alexis Leon Midford"
        ],
        answer: 1
      }
    ],
    2: [
      {
        question: "Who is known as the 'Iron Man of India'?",
        options: [
          "Subhash Chandra Bose",
          "Lal Bahadur Shastri",
          "Sardar Vallabhbhai Patel",
          "Bal Gangadhar Tilak"
        ],
        answer: 2
      },
      {
        question: "Which Indian festival is known as the 'Festival of Lights'?",
        options: [
          "Holi",
          "Diwali",
          "Eid",
          "Navratri"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the national animal of India?",
        options: [
          "Lion",
          "Elephant",
          "Royal Bengal Tiger",
          "Leopard"
        ],
        answer: 2
      },
      {
        question: "Who is known as the elephant-headed God of wisdom and new beginnings?",
        options: [
          "Shiva",
          "Ganesha",
          "Kartikeya",
          "Hanuman"
        ],
        answer: 1
      },
      {
        question: "Which demon king did Lord Rama kill in Lanka?",
        options: [
          "Indrajit",
          "Kumbhakarna",
          "Ravana",
          "Maricha"
        ],
        answer: 2
      },
      {
        question: "Who is the Hindu God of preservation and one of the Trimurti?",
        options: [
          "Vishnu",
          "Shiva",
          "Indra",
          "Brahma"
        ],
        answer: 0
      },
      {
        question: "Who discovered the Law of Gravity?",
        options: [
          "Sir Isaac Newton",
          "Albert Einstein",
          "Charles Darwin",
          "Galileo Galilei"
        ],
        answer: 0
      },
      {
        question: "What is the Zodiac symbol for Gemini?",
        options: [
          "Maiden",
          "Scales",
          "Twins",
          "Fish"
        ],
        answer: 2
      },
      {
        question: "Which part from the JoJo's Bizarre Adventure manga is about a horse race across America?",
        options: [
          "Part 3: Stardust Crusaders",
          "Part 6: Stone Ocean",
          "Part 7: Steel Ball Run",
          "Part 5: Golden Wind"
        ],
        answer: 2
      },
      {
        question: "Which of these holidays is NOT usually celebrated in the month of December?",
        options: [
          "Hanukkah",
          "Thanksgiving",
          "Christmas",
          "Kwanzaa"
        ],
        answer: 1
      },
      {
        question: "What are the cylinder-like parts that pump up and down within the engine?",
        options: [
          "Pistons",
          "ABS",
          "Radiators",
          "Leaf Springs"
        ],
        answer: 0
      },
      {
        question: "Which country, not including Japan, has the most people of Japanese descent?",
        options: [
          "China",
          "United States of America",
          "Brazil",
          "South Korea"
        ],
        answer: 2
      },
      {
        question: "How many manned moon landings have there been?",
        options: [
          "7",
          "1",
          "6",
          "3"
        ],
        answer: 2
      },
      {
        question: "Why is the night sky dark?",
        options: [
          "Quantum mechanics",
          "The universe is finite in age and size",
          "Redshift doesn't let us see distant stars ",
          "Dust clouds absorb light "
        ],
        answer: 1
      },
      {
        question: "Who is the author of the manga series \"Astro Boy\"?",
        options: [
          "Yoshihiro Tatsumi",
          "Osamu Tezuka",
          "Takao Saito",
          "Mitsuteri Yokoyama"
        ],
        answer: 1
      },
      {
        question: "Who was the original author of Frankenstein?",
        options: [
          "H. P. Lovecraft",
          "Mary Shelley",
          "Edgar Allan Poe",
          "Bram Stoker"
        ],
        answer: 1
      },
      {
        question: "What nuts are used in the production of marzipan?",
        options: [
          "Almonds",
          "Peanuts",
          "Pistachios",
          "Walnuts"
        ],
        answer: 0
      },
      {
        question: "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
        options: [
          "The Dream Team",
          "The Bushwhackers",
          "The British Bulldogs",
          "Demolition"
        ],
        answer: 3
      },
      {
        question: "In which year did the historic event 'India gain independence from British rule' occur?",
        options: [
          "1935",
          "1947",
          "1942",
          "1950"
        ],
        answer: 1
      },
      {
        question: "Who created the Cartoon Network series \"Regular Show\"?",
        options: [
          "J. G. Quintel",
          "Rebecca Sugar",
          "Ben Bocquelet",
          "Pendleton Ward"
        ],
        answer: 0
      },
      {
        question: "The \"Trail of Tears\" was a result of which United States President's Indian Removal Policy?",
        options: [
          "Harry S. Truman",
          "Martin Van Buren",
          "Andrew Jackson",
          "John Quincy Adams"
        ],
        answer: 2
      },
      {
        question: "What is the chemical makeup of water?",
        options: [
          "CO2",
          "H20",
          "C12H6O2",
          "H"
        ],
        answer: 1
      },
      {
        question: "Who wrote the novel 'Fear And Loathing In Las Vegas'?",
        options: [
          "F. Scott Fitzgerald",
          "William S. Burroughs",
          "Henry Miller",
          "Hunter S. Thompson"
        ],
        answer: 3
      },
      {
        question: "Which American president appears on a one dollar bill?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "Thomas Jefferson",
          "Benjamin Franklin"
        ],
        answer: 0
      },
      {
        question: "What machine element is located in the center of fidget spinners?",
        options: [
          "Bearings",
          "Axles",
          "Gears",
          "Belts"
        ],
        answer: 0
      },
      {
        question: "What country does sushi & karaoke come from?",
        options: [
          "Vietnam",
          "South Korea",
          "China",
          "Japan"
        ],
        answer: 3
      },
      {
        question: "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        options: [
          "Pen",
          "Sword",
          "Cellphone",
          "Key"
        ],
        answer: 3
      },
      {
        question: "In which fast food chain can you order a Jamocha Shake?",
        options: [
          "Wendy's",
          "McDonald's",
          "Burger King",
          "Arby's"
        ],
        answer: 3
      },
      {
        question: "Which one of these is not a typical European sword design?",
        options: [
          "Scimitar",
          "Ulfberht",
          "Falchion",
          "Flamberge"
        ],
        answer: 0
      },
      {
        question: "King Henry VIII was the second monarch of which European royal house?",
        options: [
          "Stuart",
          "Lancaster",
          "Tudor",
          "York"
        ],
        answer: 2
      },
      {
        question: "In DC comics, what is Owlman's real name?",
        options: [
          "Bruce Wayne",
          "Joseph Chill ",
          "Thomas Wayne Jr.",
          "Thomas Wayne"
        ],
        answer: 2
      },
      {
        question: "What is the standard SI unit for time?",
        options: [
          "Minute",
          "Second",
          "Day",
          "Hour"
        ],
        answer: 1
      },
      {
        question: "The element involved in making human blood red is which of the following?",
        options: [
          "Iridium",
          "Copper",
          "Cobalt",
          "Iron"
        ],
        answer: 3
      },
      {
        question: "What color is produced by mixing black and white?",
        options: [
          "White",
          "Black",
          "Grey",
          "Brown"
        ],
        answer: 2
      },
      {
        question: "Which breed of dog is traditionally associated with firefighters?",
        options: [
          "Dalmatians",
          "Mastiff",
          "German Shepard",
          "Great Dane"
        ],
        answer: 0
      },
      {
        question: "Which of these landmarks is not included in the original 'Seven Wonders of the Ancient World'?",
        options: [
          "Great Pyramid of Giza",
          "Colossus of Rhodes",
          "Great Wall of China",
          "Hanging Gardens of Babylon"
        ],
        answer: 2
      },
      {
        question: "What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named \"Stitch\"?",
        options: [
          "Lulu",
          "Lolo",
          "Lucy",
          "Lilo"
        ],
        answer: 3
      },
      {
        question: "What's the English Dub Name of \"Smile Precure\"?",
        options: [
          "Sparkle Girls",
          "Fairy Tale Patrol",
          "Glitter Force",
          "Power Princesses"
        ],
        answer: 2
      },
      {
        question: "Which universe crossover was introduced in the \"Sonic the Hedgehog\" comic issue #247?",
        options: [
          "Super Mario Brothers",
          "Alex Kidd",
          "Mega Man",
          "Super Monkey Ball"
        ],
        answer: 2
      },
      {
        question: "What is the name of the extra pedal on a manual or standard transmission car?",
        options: [
          "Clutch",
          "Parking Brake",
          "Shifter",
          "Booster"
        ],
        answer: 0
      },
      {
        question: "What is the name of Funny Valentine's stand in Jojo's Bizarre Adventure Part 7, Steel Ball Run?",
        options: [
          "Civil War",
          "Dirty Deeds Done Dirt Cheap",
          "Filthy Acts Done For A Reasonable Price",
          "God Bless The USA"
        ],
        answer: 1
      },
      {
        question: "What is Everest's favorite food in the Nickelodeon/Nick Jr. series \"PAW Patrol\"?",
        options: [
          "Steak",
          "Chicken",
          "Caribou",
          "Liver"
        ],
        answer: 3
      },
      {
        question: "Which of the following blood vessels carries deoxygenated blood?",
        options: [
          "Coronary Artery",
          "Aorta",
          "Pulmonary Artery",
          "Pulmonary Vein"
        ],
        answer: 2
      },
      {
        question: "What was the name of Sqiudward's bad painting in the Spongebob episode \"Artist Unknown?\"",
        options: [
          "Tilted Perspectives",
          "Rippy Bits",
          "Bold and Brash",
          "Squidward en Repose"
        ],
        answer: 2
      },
      {
        question: "In the anime Seven Deadly Sins what is the name of one of the sins?",
        options: [
          "Ayano",
          "Sheska",
          "Sakura",
          "Diane"
        ],
        answer: 3
      },
      {
        question: "What organ of the body produces bile?",
        options: [
          "Gallbladder",
          "Stomach",
          "Liver",
          "Pancreas"
        ],
        answer: 2
      },
      {
        question: "Which sign of the zodiac comes between Virgo and Scorpio?",
        options: [
          "Gemini",
          "Capricorn",
          "Libra",
          "Taurus"
        ],
        answer: 2
      },
      {
        question: "What is the name of Nissan's most popular electric car?",
        options: [
          "Tree",
          "Leaf",
          "Roots",
          "Deer"
        ],
        answer: 1
      },
      {
        question: "Which of the following vehicles from Ford is named after a WW2 Fighter Plane?",
        options: [
          "Galaxy",
          "Mustang",
          "Ranger",
          "Explorer"
        ],
        answer: 1
      }
    ],
    3: [
      {
        question: "What is the national currency of India?",
        options: [
          "Rupee",
          "Dinar",
          "Dollar",
          "Taka"
        ],
        answer: 0
      },
      {
        question: "Which city is known as the 'Pink City' of India?",
        options: [
          "Jodhpur",
          "Udaipur",
          "Jaipur",
          "Bikaner"
        ],
        answer: 2
      },
      {
        question: "How many days are there in a standard leap year?",
        options: [
          "364",
          "365",
          "366",
          "367"
        ],
        answer: 2
      },
      {
        question: "Which monkey warrior helped Lord Rama build the bridge to Lanka?",
        options: [
          "Vali",
          "Hanuman",
          "Angada",
          "Sugriva"
        ],
        answer: 1
      },
      {
        question: "Which country is famous for originating the martial art of Judo?",
        options: [
          "China",
          "Korea",
          "Japan",
          "Thailand"
        ],
        answer: 2
      },
      {
        question: "What do you call a baby bat?",
        options: [
          "Kid",
          "Chick",
          "Pup",
          "Cub"
        ],
        answer: 2
      },
      {
        question: "Who wrote the young adult novel \"The Fault in Our Stars\"?",
        options: [
          "John Green",
          "Suzanne Collins",
          "Stephenie Meyer",
          "Stephen Chbosky"
        ],
        answer: 0
      },
      {
        question: "What geometric shape is generally used for stop signs?",
        options: [
          "Hexagon",
          "Octagon",
          "Circle",
          "Triangle"
        ],
        answer: 1
      },
      {
        question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        options: [
          "Aegri somnia vana.",
          "Vidi, vini, vici.",
          "Et tu, Brute? ",
          "Iacta alea est!"
        ],
        answer: 2
      },
      {
        question: "How tall is the Burj Khalifa?",
        options: [
          "3,024 ft",
          "2,722 ft",
          "2,717 ft",
          "2,546 ft"
        ],
        answer: 1
      },
      {
        question: "What is an example of a bacterial pathogen?",
        options: [
          "Ringworm",
          "Measles ",
          "Cholera",
          "AIDS"
        ],
        answer: 2
      },
      {
        question: "In what year was the M1911 pistol designed?",
        options: [
          "1907",
          "1917",
          "1899",
          "1911"
        ],
        answer: 3
      },
      {
        question: "Which of these is NOT considered to be a colour that makes up the rainbow?",
        options: [
          "Blue",
          "Violet",
          "Pink",
          "Orange"
        ],
        answer: 2
      },
      {
        question: "Which of these bones is hardest to break?",
        options: [
          "Humerus",
          "Tibia",
          "Femur",
          "Cranium"
        ],
        answer: 2
      },
      {
        question: "On a dartboard, what number is directly opposite No. 1?",
        options: [
          "12",
          "15",
          "19",
          "20"
        ],
        answer: 2
      },
      {
        question: "Where are the cars of the brand \"Ferrari\" manufactured?",
        options: [
          "Russia",
          "Romania",
          "Italy",
          "Germany"
        ],
        answer: 2
      },
      {
        question: "According to legend, the ancient Greeks constructed a huge wooden model of which animal to gain entrance to Troy?",
        options: [
          "Elephant",
          "Wolf",
          "Goat",
          "Horse"
        ],
        answer: 3
      },
      {
        question: "Which Shakespeare play inspired the musical 'West Side Story'?",
        options: [
          "Romeo & Juliet",
          "Macbeth",
          "Othello",
          "Hamlet"
        ],
        answer: 0
      },
      {
        question: "Antibiotics are generally taken to combat what?",
        options: [
          "Viruses",
          "Muscular pains",
          "Migraines",
          "Bacterial infections"
        ],
        answer: 3
      },
      {
        question: "Who is the armored titan in \"Attack On Titan\"?",
        options: [
          "Reiner Braun",
          "Armin Arlelt",
          "Mikasa Ackermann",
          "Eren Jaeger"
        ],
        answer: 0
      },
      {
        question: "Who painted the Sistine Chapel?",
        options: [
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Michelangelo",
          "Raphael"
        ],
        answer: 2
      },
      {
        question: "In which year did Ghana gain independence?",
        options: [
          "1947",
          "1960",
          "1957",
          "1958"
        ],
        answer: 2
      },
      {
        question: "The characters of \"Log Horizon\" are trapped in what game?",
        options: [
          "Yggdrasil",
          "Elder Tale",
          "Tower Unite",
          "Sword Art Online"
        ],
        answer: 1
      },
      {
        question: "Which of the following is not the host of a program on NPR?",
        options: [
          "Ben Shapiro",
          "Terry Gross",
          "Peter Sagal",
          "Ira Glass"
        ],
        answer: 0
      },
      {
        question: "Which of the following is not true about the life of Tiresias?",
        options: [
          "Sailed with the Argonauts to find the golden fleece",
          "Revealed to Oedipus that Oedipus had married his own mother",
          "Athena turned him into a woman, and then years later back into a man",
          "Hera blinded him after he agreed with Zeus in an argument"
        ],
        answer: 0
      },
      {
        question: "What was Ash Ketchum's second Pokemon?",
        options: [
          "Pidgey",
          "Charmander",
          "Caterpie",
          "Pikachu"
        ],
        answer: 2
      },
      {
        question: "According to their longtime nickname, what kind of \"duo\" are Batman & Robin?",
        options: [
          "Delirious",
          "Dangerous",
          "Dynamic",
          "Dynastic"
        ],
        answer: 2
      },
      {
        question: "In DC comics where does the Green Arrow (Oliver Queen) live?",
        options: [
          "Star City",
          "Gotham City",
          "Central City",
          "Metropolis"
        ],
        answer: 0
      },
      {
        question: "The drug cartel run by Pablo Escobar originated in which South American city?",
        options: [
          "Bogotá",
          "Medellín",
          "Cali",
          "Quito"
        ],
        answer: 1
      },
      {
        question: "What is the scientific name for modern day humans?",
        options: [
          "Homo Ergaster",
          "Homo Sapiens",
          "Homo Neanderthalensis",
          "Homo Erectus"
        ],
        answer: 1
      },
      {
        question: "Which is the longest bone in the human body?",
        options: [
          "Fibula",
          "Ulna",
          "Scapula",
          "Femur"
        ],
        answer: 3
      },
      {
        question: "Which is the most abundant element in the universe?",
        options: [
          "Hydrogen",
          "Lithium",
          "Helium",
          "Oxygen"
        ],
        answer: 0
      },
      {
        question: "Terry Gilliam was an animator that worked with which British comedy group?",
        options: [
          "The Penny Dreadfuls",
          "The League of Gentlemen‎",
          "The Goodies‎",
          "Monty Python"
        ],
        answer: 3
      },
      {
        question: "How many \"JoJos\" that are protagonists are there in the series \"Jojo's Bizarre Adventure\"?",
        options: [
          "8+",
          "5+",
          "4+",
          "6+"
        ],
        answer: 0
      },
      {
        question: "Which country was Josef Stalin born in?",
        options: [
          "Georgia",
          "Russia",
          "Poland",
          "Germany"
        ],
        answer: 0
      },
      {
        question: "Wombats are native to which Country?",
        options: [
          "Palau",
          "New Zealand",
          "Australia",
          "Papua New Guinea"
        ],
        answer: 2
      },
      {
        question: "In \"Shrek\", what comedic actor voices Donkey?",
        options: [
          "Richard Pryor",
          "Bernie Mac",
          "Eddie Murphy",
          "Chris Rock"
        ],
        answer: 2
      }
    ],
    4: [
      {
        question: "The word 'Satyameva Jayate' inscribed on the State Emblem of India is taken from which text?",
        options: [
          "Rigveda",
          "Bhagavad Gita",
          "Mundaka Upanishad",
          "Sama Veda"
        ],
        answer: 2
      },
      {
        question: "How many colors are there in the National Flag of India (excluding the Ashoka Chakra)?",
        options: [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        answer: 1
      },
      {
        question: "Which is the largest state in India by geographical area?",
        options: [
          "Madhya Pradesh",
          "Maharashtra",
          "Rajasthan",
          "Uttar Pradesh"
        ],
        answer: 2
      },
      {
        question: "Who was the husband of Sita in the Ramayana?",
        options: [
          "Lakshmana",
          "Rama",
          "Bharata",
          "Shatrughna"
        ],
        answer: 1
      },
      {
        question: "In the Mahabharata, who was the father of Arjuna?",
        options: [
          "Dhritarashtra",
          "Bhishma",
          "Pandu",
          "Shantanu"
        ],
        answer: 2
      },
      {
        question: "Which grand slam tennis tournament is played on a grass court?",
        options: [
          "Wimbledon",
          "Roland Garros",
          "US Open",
          "Australian Open"
        ],
        answer: 0
      },
      {
        question: "Which class of animals are newts members of?",
        options: [
          "Reptiles",
          "Mammals",
          "Fish",
          "Amphibian"
        ],
        answer: 3
      },
      {
        question: "What's the second book in George R. R. Martin's 'A Song of Ice and Fire' series?",
        options: [
          "A Storm of Swords",
          "A Clash of Kings",
          "A Dance with Dragons",
          "A Feast for Crows"
        ],
        answer: 1
      },
      {
        question: "Which of these characters from \"SpongeBob SquarePants\" is not a squid?",
        options: [
          "Squidward",
          "Squidette",
          "Gary",
          "Orvillie"
        ],
        answer: 2
      },
      {
        question: "What is the first book of the Old Testament?",
        options: [
          "Genesis",
          "Numbers",
          "Leviticus",
          "Exodus"
        ],
        answer: 0
      },
      {
        question: "Who was the villain of ''The Lion King''?",
        options: [
          "Fred",
          "Jafar",
          "Scar",
          "Vada"
        ],
        answer: 2
      },
      {
        question: "The largest consumer market in 2015 was...",
        options: [
          "Japan",
          "The United States of America",
          "United Kingdom",
          "Germany"
        ],
        answer: 1
      },
      {
        question: "In 1720, England was in massive debt and became involved in the South Sea Bubble. Who was the main mastermind behind it?",
        options: [
          "Daniel Defoe",
          "John Blunt",
          "John Churchill",
          "Robert Harley"
        ],
        answer: 1
      },
      {
        question: "The human heart has how many chambers?",
        options: [
          "3",
          "6",
          "2",
          "4"
        ],
        answer: 3
      },
      {
        question: "This Marvel superhero is often called \"The man without fear\".",
        options: [
          "Thor",
          "Wolverine",
          "Daredevil",
          "Hulk"
        ],
        answer: 2
      },
      {
        question: "In \"Avatar: The Last Airbender\", which element does Aang begin to learn after being defrosted?",
        options: [
          "Fire",
          "Water",
          "Earth",
          "Air"
        ],
        answer: 1
      },
      {
        question: "What is the largest organ of the human body?",
        options: [
          "Liver",
          "Heart",
          "large Intestine",
          "Skin"
        ],
        answer: 3
      },
      {
        question: "Where did first known lesbian rights organization in the United States, Daughters of Bilitis, start?",
        options: [
          "Los Angeles",
          "Chicago",
          "San Francisco",
          "New York"
        ],
        answer: 2
      },
      {
        question: "What is another name for La Gioconda / La Joconde?",
        options: [
          "Sunflowers",
          "The Starry Night",
          "The Mona Lisa",
          "The Girl with a Pearl Earring"
        ],
        answer: 2
      },
      {
        question: "What are Panama hats made out of?",
        options: [
          "Straw",
          "Hemp",
          "Silk",
          "Flax"
        ],
        answer: 0
      },
      {
        question: "Which famous world leader is famed for the saying, \"Let them eat cake\", yet is rumored that he/she never said it at all?",
        options: [
          "Czar Nicholas II",
          "Elizabeth I",
          "Marie Antoinette",
          "Henry VIII"
        ],
        answer: 2
      },
      {
        question: "Who rode on horseback to warn the Minutemen that the British were coming during the U.S. Revolutionary War?",
        options: [
          "Henry Longfellow",
          "Thomas Paine",
          "Paul Revere",
          "Nathan Hale"
        ],
        answer: 2
      },
      {
        question: "Which company did Valve cooperate with in the creation of the Vive?",
        options: [
          "Google",
          "Razer",
          "Oculus",
          "HTC"
        ],
        answer: 3
      },
      {
        question: "Jaguar Cars was previously owned by which car manfacturer?",
        options: [
          "Chrysler",
          "Fiat",
          "Ford",
          "General Motors"
        ],
        answer: 2
      },
      {
        question: "Which famous book is sub-titled 'The Modern Prometheus'?",
        options: [
          "Frankenstein",
          "Dracula",
          "The Legend of Sleepy Hollow",
          "The Strange Case of Dr. Jekyll and Mr. Hyde "
        ],
        answer: 0
      },
      {
        question: "Which modern day country is the region that was known as Phrygia in ancient times?",
        options: [
          "Greece",
          "Turkey",
          "Syria",
          "Egypt"
        ],
        answer: 1
      },
      {
        question: "What style of beer will typically have a higher than average hop content?",
        options: [
          "India Pale Ale",
          "Extra Special Bitter",
          "Scotch Ale",
          "Stout"
        ],
        answer: 0
      },
      {
        question: "Who was the first president of Kenya?",
        options: [
          "Oginga Odinga",
          "Jomo Kenyatta",
          "Tom Mboya",
          "Daniel Moi"
        ],
        answer: 1
      },
      {
        question: "What is the largest planet in the Solar System?",
        options: [
          "Jupiter",
          "Saturn",
          "Earth",
          "Mars"
        ],
        answer: 0
      },
      {
        question: "Which famous military commander marched an army, which included war elephants, over the Alps during the Second Punic War?",
        options: [
          "Hannibal",
          "Garmanicus",
          "Tiberius",
          "Alexander the Great"
        ],
        answer: 0
      },
      {
        question: "In Digimon, what is the Japanese name for the final evolutionary stage?",
        options: [
          "Ultimate",
          "Mega",
          "Champion",
          "Adult"
        ],
        answer: 0
      },
      {
        question: "Which painting was not made by Vincent Van Gogh?",
        options: [
          "The Ninth Wave",
          "Starry Night",
          "Café Terrace at Night",
          "Bedroom In Arles"
        ],
        answer: 0
      }
    ],
    5: [
      {
        question: "Who was the first President of independent India?",
        options: [
          "Dr. S. Radhakrishnan",
          "Dr. Rajendra Prasad",
          "Jawaharlal Nehru",
          "V. V. Giri"
        ],
        answer: 1
      },
      {
        question: "Which organ in the human body is primarily responsible for pumping blood?",
        options: [
          "Lungs",
          "Brain",
          "Kidneys",
          "Heart"
        ],
        answer: 3
      },
      {
        question: "Which country shares the longest land border with India?",
        options: [
          "China",
          "Pakistan",
          "Bangladesh",
          "Nepal"
        ],
        answer: 2
      },
      {
        question: "Who was the mother of the Pandavas, Lord Yudhisthira, Bhima, and Arjuna?",
        options: [
          "Madri",
          "Gandhari",
          "Kunti",
          "Draupadi"
        ],
        answer: 2
      },
      {
        question: "What was the name of the gold deer that enchanted Sita in the forest?",
        options: [
          "Maricha",
          "Subahu",
          "Dushan",
          "Khar"
        ],
        answer: 0
      },
      {
        question: "Who is the Hindu Goddess of wealth, fortune, and prosperity?",
        options: [
          "Parvati",
          "Lakshmi",
          "Durga",
          "Saraswati"
        ],
        answer: 1
      },
      {
        question: "How long is a standard marathon race in miles?",
        options: [
          "20.2 miles",
          "26.2 miles",
          "28.2 miles",
          "24.2 miles"
        ],
        answer: 1
      },
      {
        question: "Who is known as the 'Showman of Indian Cinema'?",
        options: [
          "Dilip Kumar",
          "Dev Anand",
          "Guru Dutt",
          "Raj Kapoor"
        ],
        answer: 3
      },
      {
        question: "Who was the 1st President of Mexico?",
        options: [
          "Benito Juárez",
          "Guadalupe Victoria",
          "Vicente Guerrero",
          "Miguel Hidalgo Y Costilla"
        ],
        answer: 1
      },
      {
        question: "Which one of these countries was NOT in the Central Powers during WWI?",
        options: [
          "Germany",
          "Spain",
          "Austria-Hungary",
          "Turkey"
        ],
        answer: 1
      },
      {
        question: "What technology is named after a tenth-century ruler of Denmark and Norway?",
        options: [
          "Bluetooth",
          "Internet",
          "Wi-Fi",
          "GPS"
        ],
        answer: 0
      },
      {
        question: "Which one of these was not a beach landing site in the Invasion of Normandy?",
        options: [
          "Gold",
          "Silver",
          "Juno",
          "Sword"
        ],
        answer: 1
      },
      {
        question: "Satella in \"Re:Zero\" is the witch of what?",
        options: [
          "Pride",
          "Envy",
          "Sloth",
          "Wrath"
        ],
        answer: 1
      },
      {
        question: "What is the primary addictive substance found in tobacco?",
        options: [
          "Ephedrine",
          "Glaucine",
          "Cathinone",
          "Nicotine"
        ],
        answer: 3
      },
      {
        question: "What does LASER stand for?",
        options: [
          "Life antimatter by standing entry of range",
          "Light amplification by stimulated emission of radiation",
          "Lite analysing by stereo ecorazer",
          "Light amplifier by standby energy of radio"
        ],
        answer: 1
      },
      {
        question: "What is the elemental symbol for mercury?",
        options: [
          "Hy",
          "Hg",
          "Me",
          "Mc"
        ],
        answer: 1
      },
      {
        question: "Trypophobia is the fear of",
        options: [
          "swimming in deep water",
          "public speaking",
          "eating too much",
          "groups of holes"
        ],
        answer: 3
      },
      {
        question: "What is a fundamental element of the Gothic style of architecture?",
        options: [
          "pointed arch",
          "internal frescoes",
          "façades surmounted by a pediment ",
          "coffered ceilings"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'World War I begin' occur?",
        options: [
          "1939",
          "1918",
          "1905",
          "1914"
        ],
        answer: 3
      },
      {
        question: "In which year did the historic event 'World War II end' occur?",
        options: [
          "1945",
          "1939",
          "1950",
          "1918"
        ],
        answer: 0
      },
      {
        question: "What is the famous Papa John's last name?",
        options: [
          "ANDERSON",
          "Chowder",
          "Williams",
          "Schnatter"
        ],
        answer: 3
      },
      {
        question: "By which name is Ramon Estevez better known as?",
        options: [
          "Emilio Estevez",
          "Martin Sheen",
          "Charlie Sheen",
          "Ramon Sheen"
        ],
        answer: 1
      },
      {
        question: "Which of these countries remained neutral during World War II?",
        options: [
          "United Kingdom",
          "Italy",
          "France",
          "Switzerland"
        ],
        answer: 3
      },
      {
        question: "Stars consist mainly of hydrogen and which other gas?",
        options: [
          "Helium",
          "Oxygen",
          "Argon",
          "Nitrogen"
        ],
        answer: 0
      },
      {
        question: "What name is given to all baby marsupials?",
        options: [
          "Calf",
          "Joey",
          "Pup",
          "Cub"
        ],
        answer: 1
      },
      {
        question: "What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
        options: [
          "Space Capsule",
          "Jet",
          "Stealth Blimp",
          "Helicopter"
        ],
        answer: 3
      },
      {
        question: "Who wrote the play 'Angels in America'?",
        options: [
          "Matthew Lopez",
          "Tom Stoppard",
          "Tony Kusher",
          "Anthony Neilson"
        ],
        answer: 2
      },
      {
        question: "Who was South Africa's first Black President?",
        options: [
          "Steve Biko ",
          "Nelson Mandela",
          "Mangosuthu Buthelezi",
          "Bishop Tutu"
        ],
        answer: 1
      },
      {
        question: "Five dollars is worth how many nickels?",
        options: [
          "69",
          "100",
          "50",
          "25"
        ],
        answer: 1
      },
      {
        question: "The Ottoman Empire was dissolved after their loss in which war?",
        options: [
          "Serbian Revolution",
          "World War I",
          "Crimean War",
          "Second Balkan War"
        ],
        answer: 1
      },
      {
        question: "What does film maker Dan Bell typically focus his films on?",
        options: [
          "Historic Landmarks",
          "Abandoned Buildings and Dead Malls",
          "Documentaries ",
          "Action Films"
        ],
        answer: 1
      },
      {
        question: "Pol Pot was the former dictator of which country?",
        options: [
          "Cambodia",
          "North Korea",
          "Vietnam",
          "Laos"
        ],
        answer: 0
      },
      {
        question: "Which celebrity announced his presidency in 2015?",
        options: [
          "Kanye West",
          "Donald Trump",
          "Leonardo DiCaprio",
          "Miley Cyrus"
        ],
        answer: 0
      },
      {
        question: "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
        options: [
          "Crocodile",
          "Panda",
          "Gorilla",
          "Tiger"
        ],
        answer: 2
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet"
        ],
        answer: 1
      },
      {
        question: "What is the standard SI unit for temperature?",
        options: [
          "Celsius",
          "Kelvin",
          "Fahrenheit",
          "Rankine"
        ],
        answer: 1
      },
      {
        question: "How many furlongs are there in a mile?",
        options: [
          "Six",
          "Four",
          "Eight",
          "Two"
        ],
        answer: 2
      },
      {
        question: "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
        options: [
          "Voskhod 3KV",
          "Zenit-2",
          "Sputnik 1",
          "Soyuz 7K-OK"
        ],
        answer: 2
      },
      {
        question: "In \"Katamari Damacy\", you control a character known as:",
        options: [
          "Foomin",
          "Ichigo ",
          "The Prince",
          "Fujio"
        ],
        answer: 2
      },
      {
        question: "Which type of rock is created by intense heat AND pressure?",
        options: [
          "Sedimentary",
          "Diamond",
          "Metamorphic",
          "Igneous"
        ],
        answer: 2
      },
      {
        question: "The LS2 engine is how many cubic inches?",
        options: [
          "402",
          "376",
          "346",
          "364"
        ],
        answer: 3
      },
      {
        question: "Who is the only voice actor to have a speaking part in all of the Disney Pixar feature films?",
        options: [
          "Geoffrey Rush",
          "Dave Foley",
          "John Ratzenberger",
          "Tom Hanks"
        ],
        answer: 2
      },
      {
        question: "Which of the following was Brazil was a former colony under?",
        options: [
          "Portugal",
          "Spain",
          "France",
          "The Netherlands"
        ],
        answer: 0
      },
      {
        question: "\"A3\", \"B1\", and \"Legal\" are typical names of sizes for what object?",
        options: [
          "Phone screens",
          "Airplanes",
          "Paper",
          "Law books"
        ],
        answer: 2
      },
      {
        question: "Which element has the highest melting point?",
        options: [
          "Osmium",
          "Carbon",
          "Platinum",
          "Tungsten"
        ],
        answer: 1
      },
      {
        question: "Which chemical element, number 11 in the Periodic table, has the symbol Na?",
        options: [
          "Lead",
          "Carbon",
          "Sodium",
          "Nitrogen"
        ],
        answer: 2
      },
      {
        question: "Which Van Gogh painting depicts the view from his asylum in Saint-Rémy-de-Provence in southern France?",
        options: [
          "The Starry Night",
          "Wheatfields with Crows",
          "The Church at Auvers",
          "The Sower with Setting Sun"
        ],
        answer: 0
      },
      {
        question: "Which of the following presidents is not on Mount Rushmore?",
        options: [
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John F. Kennedy",
          "Theodore Roosevelt"
        ],
        answer: 2
      },
      {
        question: "The two main characters of \"No Game No Life\", Sora and Shiro, together go by what name?",
        options: [
          "Warbeasts",
          "Blank",
          "Disboard",
          "Immanity"
        ],
        answer: 1
      },
      {
        question: "What UK Train does NOT go over 125MPH?",
        options: [
          "Javelin",
          "Sprinter",
          "Pendolino",
          "Class 43"
        ],
        answer: 1
      },
      {
        question: "What caused the titular mascot of Yo-Kai Watch, Jibanyan, to become a yokai?",
        options: [
          "When he put on the harmaki",
          "Ate one too many chocobars",
          "Being run over by a truck",
          "Through a magical ritual"
        ],
        answer: 2
      },
      {
        question: "Which country developed the AK-47 assault rifle?",
        options: [
          "Israel",
          "Soviet Union",
          "Poland",
          "Iran"
        ],
        answer: 1
      }
    ],
    6: [
      {
        question: "Who composed the National Song of India, 'Vande Mataram'?",
        options: [
          "Rabindranath Tagore",
          "Bankim Chandra Chattopadhyay",
          "Sarojini Naidu",
          "Sri Aurobindo"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the highest civilian award in India?",
        options: [
          "Padma Vibhushan",
          "Bharat Ratna",
          "Param Vir Chakra",
          "Sahitya Akademi Award"
        ],
        answer: 1
      },
      {
        question: "Which state is known as the 'Spice Garden of India'?",
        options: [
          "Karnataka",
          "Tamil Nadu",
          "Kerala",
          "Andhra Pradesh"
        ],
        answer: 2
      },
      {
        question: "Who was the royal guru of the Pandavas and Kauravas?",
        options: [
          "Vashistha",
          "Kripacharya",
          "Parashurama",
          "Dronacharya"
        ],
        answer: 3
      },
      {
        question: "What is the German word for \"spoon\"?",
        options: [
          "Messer",
          "Gabel",
          "Essstäbchen",
          "Löffel"
        ],
        answer: 3
      },
      {
        question: "What is the romanized Japanese word for \"university\"?",
        options: [
          "Jimusho",
          "Shokudou",
          "Toshokan",
          "Daigaku"
        ],
        answer: 3
      },
      {
        question: "The stop motion comedy show \"Robot Chicken\" was created by which of the following?",
        options: [
          "Seth Rogen",
          "Seth MacFarlane",
          "Seth Green",
          "Seth Rollins"
        ],
        answer: 2
      },
      {
        question: "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
        options: [
          "Authoritarian Alliance",
          "The Federation of Empires",
          "The Central Powers",
          "The Axis Powers"
        ],
        answer: 2
      },
      {
        question: "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
        options: [
          "Brazil",
          "Chile",
          "Peru",
          "Argentina"
        ],
        answer: 1
      },
      {
        question: "What was the name of the Mysterious Island, in Jules Verne's \"The Mysterious Island\"?",
        options: [
          "Vulcania Island",
          "Lincoln Island",
          "Neptune Island",
          "Prometheus Island"
        ],
        answer: 1
      },
      {
        question: "What is the name of the final villain in the manga series \"Bleach\"?",
        options: [
          "Yhwach",
          "Juhabach",
          "Juha Bach",
          "Yuhabah"
        ],
        answer: 0
      },
      {
        question: "Which WWII tank ace is credited with having destroyed the most tanks?",
        options: [
          "Walter Kniep",
          "Kurt Knispel",
          "Otto Carius",
          "Michael Wittmann"
        ],
        answer: 1
      },
      {
        question: "In Pre-Super Genesis universe of \"Sonic the Hedgehog\" comic, what was the name of  Sally Acorn's brother?",
        options: [
          "Maximillian Acorn",
          "Frederick Acorn",
          "Elias Acorn",
          "Alexis Acorn"
        ],
        answer: 2
      },
      {
        question: "In United States history, how many vice presidents did Franklin D. Roosevelt have during his time in office as president?",
        options: [
          "1",
          "0",
          "2",
          "3"
        ],
        answer: 3
      },
      {
        question: "What is the scientific name of the Common Chimpanzee?",
        options: [
          "Gorilla gorilla",
          "Pan paniscus",
          "Pan troglodytes",
          "Panthera leo"
        ],
        answer: 2
      },
      {
        question: "In which year did the historic event 'The historic ship Titanic sink after hitting an iceberg' occur?",
        options: [
          "1912",
          "1905",
          "1915",
          "1920"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'The first modern Olympic Games take place in Athens' occur?",
        options: [
          "1904",
          "1896",
          "1892",
          "1900"
        ],
        answer: 1
      },
      {
        question: "What year did \"Bishoujo Senshi Sailor Moon\" air in Japan?",
        options: [
          "1994",
          "1989",
          "1990",
          "1992"
        ],
        answer: 3
      },
      {
        question: "In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?",
        options: [
          "Monkey",
          "Spider",
          "Wild dog",
          "Crocodile"
        ],
        answer: 1
      },
      {
        question: "Which country was an allied power in World War II?",
        options: [
          "Soviet Union",
          "Italy",
          "Germany",
          "Japan"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT classified as a Semetic language?",
        options: [
          "Sumerian",
          "Akkadian",
          "Mandaic",
          "Maltese"
        ],
        answer: 0
      },
      {
        question: "What is the bloodiest event in United States history, in terms of casualties?",
        options: [
          "Battle of Antietam",
          "September 11th",
          "D-Day",
          "Pearl Harbor"
        ],
        answer: 0
      },
      {
        question: "Who was the first Chancellor of a united Germany in 1871?",
        options: [
          "Kaiser Wilhelm ",
          "Fredrick the 2nd",
          "Robert Koch",
          "Otto Von Bismark"
        ],
        answer: 3
      },
      {
        question: "Gannymede is the largest moon of which planet?",
        options: [
          "Uranus",
          "Mars",
          "Jupiter",
          "Neptune"
        ],
        answer: 2
      },
      {
        question: "Which of these car models are produced by Lamborghini?",
        options: [
          "Aventador",
          "918",
          "Huayra",
          "Chiron"
        ],
        answer: 0
      },
      {
        question: "Which studio animated Soul Eater?",
        options: [
          "Kyoto Animation",
          "Production I.G",
          "xebec",
          "Bones"
        ],
        answer: 3
      },
      {
        question: "Which of the following vehicles featured a full glass roof at base model?",
        options: [
          "Honda Odyssey",
          "Renault Avantime",
          "Mercedes-Benz A-Class",
          "Chevy Volt"
        ],
        answer: 1
      },
      {
        question: "Where did the dog breed \"Chihuahua\" originate?",
        options: [
          "Spain",
          "Mexico",
          "France",
          "Russia"
        ],
        answer: 1
      },
      {
        question: "What year was Apple Inc. founded?",
        options: [
          "1974",
          "1976",
          "1980",
          "1978"
        ],
        answer: 1
      },
      {
        question: "Where does Stephen King's \"IT\" take place?",
        options: [
          "Innsmouth, Massachusetts",
          "Derry, Maine",
          "Kingsland, Texas",
          "Rockford, Illinois"
        ],
        answer: 1
      },
      {
        question: "Which of the following is NOT a venomous snake?",
        options: [
          "Black mamba",
          "Malayan Krait",
          "Reticulated python",
          "Yellow bellied sea snake"
        ],
        answer: 2
      },
      {
        question: "Which of the following battles is often considered as marking the beginning of the fall of the Western Roman Empire?",
        options: [
          "Battle of Constantinople",
          "Battle of Pollentia",
          "Battle of Thessalonica",
          "Battle of Adrianople"
        ],
        answer: 3
      },
      {
        question: "What was the number on Gerald's shirt in \"Hey Arnold!\"?",
        options: [
          "38",
          "83",
          "33",
          "88"
        ],
        answer: 2
      },
      {
        question: "In \"Puella Magi Madoka Magica\", what is the first name of Madoka's younger brother?",
        options: [
          "Montoya",
          "Minato",
          "Tomohisa",
          "Tatsuya"
        ],
        answer: 3
      },
      {
        question: "Who is the creator of the manga series \"One Piece\"?",
        options: [
          "Masashi Kishimoto",
          "Yoshihiro Togashi",
          "Eiichiro Oda",
          "Hayao Miyazaki"
        ],
        answer: 2
      },
      {
        question: "In what dialogue did Socrates defend himself to the court of Athens?",
        options: [
          "The Apology",
          "The Euthyphro",
          "The Republic",
          "The Laws"
        ],
        answer: 0
      },
      {
        question: "What part of the brain takes its name from the Greek for seahorse?",
        options: [
          "Amygdala",
          "Cerebellum",
          "Hippocampus",
          "Thalamus"
        ],
        answer: 2
      },
      {
        question: "What ability does Princess Sofia the First have from her amulet that allows her to breathe underwater?",
        options: [
          "Bubble Shield",
          "Artificial Gills",
          "Bubble Head",
          "Mermaid Transformation"
        ],
        answer: 3
      },
      {
        question: "In \"The Lord of the Rings,\" who is the owner of Asfaloth, the horse which brings Frodo to Rivendell?",
        options: [
          "Arwen",
          "Glorfindel",
          "Haldir",
          "Aragorn"
        ],
        answer: 1
      },
      {
        question: "In what year did Texas secede from Mexico?",
        options: [
          "1844",
          "1836",
          "1845",
          "1838"
        ],
        answer: 1
      },
      {
        question: "The Herero genocide was perpetrated in Africa by which of the following colonial nations?",
        options: [
          "Germany",
          "Britain",
          "Belgium",
          "France"
        ],
        answer: 0
      },
      {
        question: "Which Nazi General was known as the \"Desert Fox\"?",
        options: [
          "Erwin Rommel",
          "Wilhelm Keitel",
          "Heinz Guderian ",
          "Gerd von Rundstadt"
        ],
        answer: 0
      },
      {
        question: "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
        options: [
          "Coughton Court",
          "Buckingham Palace",
          "St James's Palace",
          "Hampton Court"
        ],
        answer: 3
      },
      {
        question: "Nikki Diamond portrayed which Gladiator in the 1992 TV show \"Gladiators\"?",
        options: [
          "Falcon",
          "Scorpio",
          "Jet",
          "Nightshade"
        ],
        answer: 1
      },
      {
        question: "In relation to the British Occupation in Ireland, what does the IRA stand for.",
        options: [
          "Irish Republican Army",
          "Irish-Royal Alliance",
          "Irish Rebel Alliance",
          "Irish Reformation Army"
        ],
        answer: 0
      },
      {
        question: "What is the make and model of the tour vehicles in \"Jurassic Park\" (1990)?",
        options: [
          "Mercedes M-Class",
          "1989 Jeep Wrangler YJ Sahar",
          "1989 Ford Explorer XLT",
          "1989 Toyota Land Cruiser"
        ],
        answer: 3
      },
      {
        question: "For what reason would a spotted hyena \"laugh\"?",
        options: [
          "Excitement",
          "Exhaustion",
          "Nervousness",
          "Aggression"
        ],
        answer: 2
      },
      {
        question: "Which Japanese music group was formed to produce theme music for the anime \"Guilty Crown\"?",
        options: [
          "Babymetal",
          "Egoist",
          "Goose house",
          "Garnidelia"
        ],
        answer: 1
      },
      {
        question: "Which band name isn't a Stand in \"JoJo's Bizarre Adventure\"?",
        options: [
          "AC/DC",
          "Green Day",
          "Red Hot Chili Peppers",
          "Survivor"
        ],
        answer: 0
      },
      {
        question: "The Thirty Years War ended with which treaty?",
        options: [
          "Treaty of Paris",
          "Treaty of Versailles",
          "Peace of Prague",
          "Peace of Westphalia"
        ],
        answer: 3
      }
    ],
    7: [
      {
        question: "In which year did India celebrate its first Republic Day?",
        options: [
          "1947",
          "1950",
          "1952",
          "1948"
        ],
        answer: 1
      },
      {
        question: "Who is the chief architect of the Indian Constitution?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Dr. B. R. Ambedkar",
          "Sardar Patel"
        ],
        answer: 2
      },
      {
        question: "The famous slogan 'Jai Jawan Jai Kisan' was coined by which Indian Prime Minister?",
        options: [
          "Jawaharlal Nehru",
          "Lal Bahadur Shastri",
          "Indira Gandhi",
          "Atal Bihari Vajpayee"
        ],
        answer: 1
      },
      {
        question: "What was the name of Arjuna's famous bow in the Mahabharata?",
        options: [
          "Pinaka",
          "Sharanga",
          "Gandiva",
          "Vijaya"
        ],
        answer: 2
      },
      {
        question: "Who wrote the epic poem Ramayana?",
        options: [
          "Tulsidas",
          "Vyasa",
          "Valmiki",
          "Kalidasa"
        ],
        answer: 2
      },
      {
        question: "Who made the discovery of X-rays?",
        options: [
          "James Watt",
          "Thomas Alva Edison",
          "Wilhelm Conrad Röntgen",
          "Albert Einstein"
        ],
        answer: 2
      },
      {
        question: "Deuterium is an isotope of which element?",
        options: [
          "Neon",
          "Helium",
          "Hydrogen",
          "Nitrogen"
        ],
        answer: 2
      },
      {
        question: "In Rudyard Kipling's \"The Jungle Book\", what type of snake was Kaa?",
        options: [
          "Anaconda",
          "Python",
          "Viper",
          "Cobra"
        ],
        answer: 1
      },
      {
        question: "The success of DC Comics' Swamp Thing, Sandman, and other books in a similar style, led to the creation of what new imprint in 1993?",
        options: [
          "Impact",
          "Vertigo",
          "Red Circle",
          "New Universe"
        ],
        answer: 1
      },
      {
        question: "In a standard set of playing cards, which is the only king without a moustache?",
        options: [
          "Diamonds",
          "Clubs",
          "Spades",
          "Hearts"
        ],
        answer: 3
      },
      {
        question: "Who created \"RWBY\"?",
        options: [
          "Miles Luna",
          "Shane Newville",
          "Monty Oum",
          "Kerry Shawcross"
        ],
        answer: 2
      },
      {
        question: "When Christopher Columbus sailed to America, what was the first region he arrived in?",
        options: [
          "Florida",
          "Isthmus of Panama",
          "The Bahamas Archipelago",
          "Nicaragua"
        ],
        answer: 2
      },
      {
        question: "Who played Marquis de Lafayette and Thomas Jefferson in the original Broadway run of Hamilton?",
        options: [
          "Lin-Manuel Miranda",
          "Javier Muñoz",
          "Daveed Diggs",
          "Wayne Brady"
        ],
        answer: 2
      },
      {
        question: "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
        options: [
          "32",
          "16",
          "24",
          "8"
        ],
        answer: 2
      },
      {
        question: "What is the half-life of Uranium-235?",
        options: [
          "Uranium-235 is a stable isotope",
          "703,800,000 years",
          "1,260,900,000 years",
          "4,300,400,000 years"
        ],
        answer: 1
      },
      {
        question: "What was George Bizet's last opera?",
        options: [
          "Grisélidis",
          "Don Rodrigue",
          "Carmen",
          "Les pêcheurs de perles"
        ],
        answer: 2
      },
      {
        question: "In which year did the historic event 'Neil Armstrong become the first human to walk on the Moon' occur?",
        options: [
          "1972",
          "1969",
          "1959",
          "1965"
        ],
        answer: 1
      },
      {
        question: "Against which country did the Dutch Republic fight the Eighty Years' War?",
        options: [
          "England",
          "Spain",
          "Portugal",
          "France"
        ],
        answer: 1
      },
      {
        question: "Which famed architect, who died in 2019 aged 102, designed the glass pyramid at the Louvre museum in Paris?",
        options: [
          "Wang Shu",
          "Frank Gehry",
          "Pascale Guédot",
          "I. M. Pei"
        ],
        answer: 3
      },
      {
        question: "What was the aircraft registration for the last Concorde built?",
        options: [
          "F-BVFF",
          "G-BOAC",
          "G-BOAF",
          "F-BTSC"
        ],
        answer: 2
      },
      {
        question: "What sport is being played in the Anime Eyeshield 21?",
        options: [
          "American Football",
          "Basketball",
          "Football",
          "Baseball"
        ],
        answer: 0
      },
      {
        question: "The Panama Canal was finished under the administration of which U.S. president?",
        options: [
          "Theodore Roosevelt",
          "Herbert Hoover",
          "Woodrow Wilson",
          "Franklin Delano Roosevelt"
        ],
        answer: 2
      },
      {
        question: "In \"To Love-Ru: Darkness\", which of the girls attempt making a harem for Rito Yuuki?",
        options: [
          "Mea Kurosaki",
          "Haruna Sairenji",
          "Yami (Golden Darkness)",
          "Momo Deviluke"
        ],
        answer: 3
      },
      {
        question: "Paul McCartney has always used his middle name. What is his real first name?",
        options: [
          "John",
          "Justin",
          "Jack",
          "James"
        ],
        answer: 3
      },
      {
        question: "Who was the first President of the People's Republic of China?",
        options: [
          "Li Xiannian",
          "Mao Zedong",
          "Dong Biwu",
          "Liu Shaoqi"
        ],
        answer: 1
      },
      {
        question: "What are the smallest blood vessels in the human body?",
        options: [
          "Veinules",
          "Capillaries",
          "Arterioles",
          "Lymphatics"
        ],
        answer: 1
      },
      {
        question: "What is the cartoon character, Andy Capp, known as in Germany?",
        options: [
          "Helmut Schmacker",
          "Dick Tingeler",
          "Rod Tapper",
          "Willi Wakker"
        ],
        answer: 3
      },
      {
        question: "Which country has the most Trappist breweries?",
        options: [
          "USA",
          "France",
          "Belgium",
          "Netherlands"
        ],
        answer: 2
      },
      {
        question: "What medication was once commonly used as rat poison?",
        options: [
          "Aspirin",
          "Tylenol",
          "Eliquis",
          "Coumadin"
        ],
        answer: 3
      },
      {
        question: "What is the name of the main character of the anime \"One-Punch Man\"?",
        options: [
          "Genos",
          "King",
          "Sonic",
          "Saitama"
        ],
        answer: 3
      },
      {
        question: "In which country was the Michelin tire company founded in 1889?",
        options: [
          "United Kingdom",
          "Germany",
          "Italy",
          "France"
        ],
        answer: 3
      },
      {
        question: "Which king was killed at the Battle of Bosworth Field in 1485?",
        options: [
          "Henry VII",
          "Richard III",
          "James I",
          "Edward V"
        ],
        answer: 1
      },
      {
        question: "Where does water from Poland Spring water bottles come from?",
        options: [
          "Hesse, Germany",
          "Masovia, Poland",
          "Maine, United States",
          "Bavaria, Poland"
        ],
        answer: 2
      },
      {
        question: "The character Plum from \"No Game No Life\" is of what race?",
        options: [
          "Imanity",
          "Dhampir",
          "Seiren",
          "Flügel"
        ],
        answer: 1
      },
      {
        question: "Which of the following was the author of \"Username Evie\"?",
        options: [
          "Joe Weller",
          "Zoe Sugg",
          "Alfie Deyes",
          "Joe Sugg"
        ],
        answer: 3
      },
      {
        question: "In the Lord of the Rings, who is the father of the dwarf Gimli?",
        options: [
          "Thorin Oakenshield",
          "Gloin",
          "Bombur",
          "Dwalin"
        ],
        answer: 1
      },
      {
        question: "In Pokémon Chronicles, why was Misty afraid of Gyarados?",
        options: [
          "She found it scary.",
          "It is part Bug.",
          "She crawled into it's mouth as a baby.",
          "She was badly injured from it."
        ],
        answer: 2
      },
      {
        question: "In \"Little Women\", which of the March sisters married Laurie?",
        options: [
          "Jo",
          "Beth",
          "Amy",
          "Meg"
        ],
        answer: 2
      },
      {
        question: "What is the most-visited website out of these options?",
        options: [
          "YouTube",
          "Facebook",
          "Wikipedia",
          "Google"
        ],
        answer: 3
      },
      {
        question: "When did O, Canada officially become the national anthem?",
        options: [
          "1880",
          "1950",
          "1920",
          "1980"
        ],
        answer: 3
      },
      {
        question: "Myopia is the scientific term for which condition?",
        options: [
          "Shortsightedness",
          "Double Vision",
          "Farsightedness",
          "Clouded Vision"
        ],
        answer: 0
      },
      {
        question: "Who is the father of Icarus, who flew too close to the sun?",
        options: [
          "Perseus",
          "Minos",
          "Zeus",
          "Daedalus"
        ],
        answer: 3
      },
      {
        question: "The term \"scientist\" was coined in which year?",
        options: [
          "1796",
          "1942",
          "1833",
          "1933"
        ],
        answer: 2
      },
      {
        question: "Who was the only president to not be in office in Washington D.C?",
        options: [
          "George Washington",
          "Thomas Jefferson",
          "Richard Nixon",
          "Abraham Lincoln"
        ],
        answer: 0
      },
      {
        question: "What was the name of Marilyn Monroe's first husband?",
        options: [
          "Arthur Miller",
          "James Dougherty",
          "Kirk Douglas",
          "Joe Dimaggio"
        ],
        answer: 1
      },
      {
        question: "Which artist painted “The Treachery of Images,” a painting of a pipe with the description \"this is not a pipe\"?",
        options: [
          "Magritte",
          "Matisse",
          "Modigliani",
          "Munch "
        ],
        answer: 0
      }
    ],
    8: [
      {
        question: "The legal voting age in India was reduced from 21 to 18 years by which Constitutional Amendment?",
        options: [
          "42nd Amendment",
          "44th Amendment",
          "61st Amendment",
          "73rd Amendment"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the oldest mountain range in India?",
        options: [
          "Himalayas",
          "Aravalli Range",
          "Western Ghats",
          "Satpura Range"
        ],
        answer: 1
      },
      {
        question: "Who was the first Indian to win a Nobel Prize?",
        options: [
          "C. V. Raman",
          "Rabindranath Tagore",
          "Mother Teresa",
          "Hargobind Khorana"
        ],
        answer: 1
      },
      {
        question: "Which warrior was invincible because of his armor (Kavach) and earrings (Kundal) gifted by the Sun God?",
        options: [
          "Karna",
          "Bhishma",
          "Arjuna",
          "Duryodhana"
        ],
        answer: 0
      },
      {
        question: "Who was the husband of Draupadi in her previous birth, according to some texts, or who won her in the swayamvar?",
        options: [
          "Arjuna",
          "Bhima",
          "Yudhisthira",
          "Karna"
        ],
        answer: 0
      },
      {
        question: "Who was the charioteer of Arjuna during the Kurukshetra war?",
        options: [
          "Karna",
          "Shalya",
          "Lord Krishna",
          "Sanjaya"
        ],
        answer: 2
      },
      {
        question: "What is the world's longest venomous snake?",
        options: [
          "King Cobra",
          "Green Anaconda",
          "Inland Taipan",
          "Yellow Bellied Sea Snake"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT a part of the structure of a typical neuron?",
        options: [
          "Islets of Langerhans",
          "Myelin sheath",
          "Schwann cell",
          "Node of Ranvier"
        ],
        answer: 0
      },
      {
        question: "On which day did the attempted coup d'etat of 1991 in the Soviet Union begin?",
        options: [
          "December 24",
          "August 21",
          "December 26",
          "August 19"
        ],
        answer: 3
      },
      {
        question: "Who was Hannibal?",
        options: [
          "Carthaginian general",
          "British serial killer",
          "French explorer",
          "Greek philosopher"
        ],
        answer: 0
      },
      {
        question: "What caused Jake Lloyd who played Anakin Skywalker in The Phantom Menace to quit acting?",
        options: [
          "Racism",
          "Nomination for Worst Actor",
          "Bullying",
          "Criminal Record"
        ],
        answer: 2
      },
      {
        question: "What was the original name of the search engine \"Google\"?",
        options: [
          "CatMassage",
          "SearchPro",
          "BackRub",
          "Netscape Navigator"
        ],
        answer: 2
      },
      {
        question: "Which Swiss psychologist is synonymous with the concepts of introvert and extrovert personalities?",
        options: [
          "Hermann Rorschach",
          "Jean Piaget",
          "Carl Jung",
          "Alice Miller"
        ],
        answer: 2
      },
      {
        question: "Hera is god of...",
        options: [
          "Marriage",
          "Agriculture",
          "War",
          "Sea"
        ],
        answer: 0
      },
      {
        question: "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
        options: [
          "Bull’s-eye",
          "Fagin",
          "Mr. Fang",
          "The Artful Dodger"
        ],
        answer: 3
      },
      {
        question: "What play is the quote \"Hell is other people\" from?",
        options: [
          "The Devil and the Good Lord",
          "The Condemned of Altona",
          "The Flies",
          "No Exit"
        ],
        answer: 3
      },
      {
        question: "What is the standard frame rate for animation?",
        options: [
          "24 FPS",
          "12 FPS",
          "60 FPS",
          "30 FPS"
        ],
        answer: 0
      },
      {
        question: "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
        options: [
          "USS Constitution",
          "USS North Carolina",
          "USS Indianapolis",
          "USS Pueblo"
        ],
        answer: 3
      },
      {
        question: "Which of the following Assyrian kings did NOT rule during the Neo-Assyrian Empire?",
        options: [
          "Shamshi-Adad III",
          "Ashur-nasir-pal II",
          "Esharhaddon",
          "Shalmaneser V"
        ],
        answer: 0
      },
      {
        question: "Which country attacked the USS Liberty on June 8, 1967?",
        options: [
          "Syria",
          "Saudi Arabia",
          "Israel",
          "Iran"
        ],
        answer: 2
      },
      {
        question: "What does \"hippopotamus\" mean and in what langauge?",
        options: [
          "River Horse (Greek)",
          "Fat Pig (Greek)",
          "Fat Pig (Latin)",
          "River Horse (Latin)"
        ],
        answer: 0
      },
      {
        question: "Which of the stands from \"JoJo's Bizarre Adventure\" mimics the likeness of a tomato?",
        options: [
          "Pearl Jam",
          "Red Hot Chili Pepper",
          "Nut King Call",
          "Cream Starter"
        ],
        answer: 0
      },
      {
        question: "Where did the pineapple plant originate?",
        options: [
          "South America",
          "Hawaii",
          "Europe",
          "Asia"
        ],
        answer: 0
      },
      {
        question: "\"Gum arabic\" is a natural gum consisting of the hardened sap of which tree species?",
        options: [
          "Acacia",
          "Palm",
          "Ficus",
          "Eucalyptus"
        ],
        answer: 0
      },
      {
        question: "Which country drives on the left side of the road?",
        options: [
          "Japan",
          "Germany",
          "Russia",
          "China"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'The Berlin Wall fall, leading to the reunification of Germany' occur?",
        options: [
          "1989",
          "1991",
          "1985",
          "1979"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'Columbus arrive in the Americas' occur?",
        options: [
          "1492",
          "1502",
          "1392",
          "1498"
        ],
        answer: 0
      },
      {
        question: "What was the soft drink Pepsi originally introduced as?",
        options: [
          "Pepsin Pop",
          "Pepsin Syrup",
          "Brad's Drink",
          "Carolina Cola"
        ],
        answer: 2
      },
      {
        question: "In which year did the First World War begin?",
        options: [
          "1930",
          "1939",
          "1917",
          "1914"
        ],
        answer: 3
      },
      {
        question: "In 2014, this new top 100 rapper who featured in \"Computers\" and \"Body Dance\" was arrested in a NYPD sting for murder.",
        options: [
          "Bobby Shmurda",
          "Young Thug",
          "DJ Snake",
          "Swae Lee"
        ],
        answer: 0
      },
      {
        question: "Which musical has won the most Tony awards?",
        options: [
          "Phantom of the Opera",
          "Chicago",
          "Hamilton",
          "The Producers"
        ],
        answer: 3
      },
      {
        question: "On average, Americans consume 100 pounds of what per second?",
        options: [
          "Potatoes",
          "Chocolate",
          "Donuts",
          "Cocaine"
        ],
        answer: 1
      },
      {
        question: "The dish Fugu, is made from what family of fish?",
        options: [
          "Mackerel",
          "Salmon",
          "Bass",
          "Pufferfish"
        ],
        answer: 3
      },
      {
        question: "When did Vesuvius destroy the city of Pompeii?",
        options: [
          "54 BC",
          "31 BC",
          "62 AD",
          "79 AD"
        ],
        answer: 3
      },
      {
        question: "In what prison was Adolf Hitler held in 1924?",
        options: [
          "Landsberg Prison",
          "Hohenasperg",
          "Ebrach Abbey",
          "Spandau Prison"
        ],
        answer: 0
      },
      {
        question: "Whose greyscale face is on the kappa emoticon on Twitch?",
        options: [
          "Justin DeSeno",
          "Jimmy DeSeno",
          "Josh DeSeno",
          "John DeSeno"
        ],
        answer: 2
      },
      {
        question: "The creator of the Enigma Cypher and Machine was of what nationality?",
        options: [
          "German",
          "British",
          "American",
          "Polish"
        ],
        answer: 0
      },
      {
        question: "Which greek god/goddess tossed a golden apple with the words \"for the fairest\" into the middle of the feast of the gods?",
        options: [
          "Hades",
          "Artemis",
          "Eris",
          "Ares"
        ],
        answer: 2
      },
      {
        question: "Which of the following is true when alligators are behaving territorially?",
        options: [
          "They run full force at the threat",
          "Slap their tails on the ground",
          "Open their jaws while making a clicking noise",
          "They bellow while showing their tail and neck"
        ],
        answer: 3
      },
      {
        question: "Which United Nations principal organ has been suspended since 1994?",
        options: [
          "Trusteeship Council",
          "Economic and Social Council",
          "General Assembly",
          "Secretariat"
        ],
        answer: 0
      },
      {
        question: "Which of these species is not extinct?",
        options: [
          "Komodo dragon",
          "Saudi gazelle",
          "Japanese sea lion",
          "Tasmanian tiger"
        ],
        answer: 0
      },
      {
        question: "This field is sometimes known as “The Dismal Science.”",
        options: [
          "Economics",
          "Physics",
          "Philosophy",
          "Politics"
        ],
        answer: 0
      },
      {
        question: "All Souls and Merton are constituent colleges of what university?",
        options: [
          "Leeds",
          "Manchester",
          "Cambridge",
          "Oxford"
        ],
        answer: 3
      },
      {
        question: "What was the bloodiest single-day battle during the American Civil War?",
        options: [
          "The Battle of Gettysburg",
          "The Siege of Vicksburg",
          "The Battle of Antietam",
          "The Battles of Chancellorsville"
        ],
        answer: 2
      },
      {
        question: "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
        options: [
          "Ernest Rutherford",
          "Niels Henrik David Bohr",
          "Archimedes",
          "Joseph John Thomson"
        ],
        answer: 0
      },
      {
        question: "What was Mountain Dew's original slogan?",
        options: [
          "Get' that barefoot feelin' drinkin' Mountain Dew",
          "Yahoo! Mountain Dew... It'll tickle your innards!",
          "Give Me A Dew",
          "Do The Dew"
        ],
        answer: 1
      },
      {
        question: "Which chemical element was originally known as Alabamine?",
        options: [
          "Selenium",
          "Antimony",
          "Molybdenum",
          "Astatine"
        ],
        answer: 3
      },
      {
        question: "Which Doom Patrol member was a later addition, first appearing in 1989?",
        options: [
          "Crazy Jane",
          "Negative Man",
          "Robotman",
          "Elast-Girl"
        ],
        answer: 0
      },
      {
        question: "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
        options: [
          "low, all",
          "high, some",
          "low, some",
          "high, all"
        ],
        answer: 0
      },
      {
        question: "The seed drill was invented by which British inventor?",
        options: [
          "J.J Thomson",
          "Charles Babbage",
          "Isaac Newton",
          "Jethro Tull"
        ],
        answer: 3
      },
      {
        question: "Who is believed to have been the first European to 'discover' the land of New Zealand?",
        options: [
          "Jeanne Baré",
          "Abel Tasman",
          "Christopher Columbus",
          "John Cabot "
        ],
        answer: 1
      },
      {
        question: "Which episode from The Amazing World Of Gumball won the Childrens Choice Award at the British Animation Awards in 2016?",
        options: [
          "The Kids",
          "The Limit",
          "The Shell",
          "The Gripes"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the element Strontium?",
        options: [
          "11",
          "47",
          "38",
          "73"
        ],
        answer: 2
      },
      {
        question: "Approximately what percentage of Earth's atmosphere is Oxygen?",
        options: [
          "78%",
          "54%",
          "21%",
          "7%"
        ],
        answer: 2
      },
      {
        question: "Which of the following carbonated soft drinks were introduced first?",
        options: [
          "Coca-Cola",
          "Mountain Dew",
          "Dr. Pepper",
          "Sprite"
        ],
        answer: 2
      },
      {
        question: "What year did Australia become a federation?",
        options: [
          "1911",
          "1910",
          "1901",
          "1899"
        ],
        answer: 2
      },
      {
        question: "In JoJo's Bizarre Adventure, which character is able to accelerate time?",
        options: [
          "Jolyne Cujoh",
          "Kujo Jotaro",
          "Jotaro Kujo",
          "Enrico Pucci"
        ],
        answer: 3
      },
      {
        question: "What is generally considered to be William Shakespeare's birth date?",
        options: [
          "December 1st, 1750",
          "July 4th, 1409",
          "April 23rd, 1564",
          "September 29th, 1699"
        ],
        answer: 2
      },
      {
        question: "In the anime series \"Full Metal Alchemist\", what do Alchemists consider the greatest taboo?",
        options: [
          "Using Alchemy For Crime ",
          "Transmuting Lead Into Gold",
          "Preforming Without A Permit",
          "Human Transmutation "
        ],
        answer: 3
      },
      {
        question: "In which one of these cities did the Great Stink of 1858 occur?",
        options: [
          "Berlin",
          "Moscow",
          "New York",
          "London"
        ],
        answer: 3
      },
      {
        question: "Out of these four buildings, which one is the tallest, with a height of 2,717 ft (828 m)?",
        options: [
          "Ping An Finance Centre, China",
          "Burj Khalifa, United Arab Emirates",
          "Shanghai Tower, China",
          "Lotte World Tower, South Korea"
        ],
        answer: 1
      },
      {
        question: "Which historical conflict killed the most people?",
        options: [
          "World War II",
          "Taiping Rebellion",
          "Three Kingdoms War",
          "Mongol conquests"
        ],
        answer: 0
      },
      {
        question: "What is the unit of currency in Laos?",
        options: [
          "Ruble",
          "Kip",
          "Dollar",
          "Konra"
        ],
        answer: 1
      },
      {
        question: "Ikki Kurogane is known by what nickname at the beginning of \"Chivalry of a Failed Knight\"?",
        options: [
          "Another One",
          "Blazer",
          "Princess",
          "Worst One"
        ],
        answer: 3
      },
      {
        question: "Adolf Hitler was born on which date?",
        options: [
          "April 20, 1889",
          "February 6, 1889",
          "April 16, 1889",
          "June 12, 1889"
        ],
        answer: 0
      }
    ],
    9: [
      {
        question: "Which Viceroy of India partitioned Bengal in 1905?",
        options: [
          "Lord Dalhousie",
          "Lord Curzon",
          "Lord Mountbatten",
          "Lord Canning"
        ],
        answer: 1
      },
      {
        question: "Which Indian state has the longest coastline?",
        options: [
          "Maharashtra",
          "Tamil Nadu",
          "Gujarat",
          "Andhra Pradesh"
        ],
        answer: 2
      },
      {
        question: "Which monument was built by Emperor Shah Jahan to honor his wife?",
        options: [
          "Qutub Minar",
          "Red Fort",
          "Taj Mahal",
          "Jama Masjid"
        ],
        answer: 2
      },
      {
        question: "What was the original name of Bhishma before he took the vow of celibacy?",
        options: [
          "Shantanu",
          "Chitrangada",
          "Devavrata",
          "Vichitravirya"
        ],
        answer: 2
      },
      {
        question: "What is Hellboy's true name?",
        options: [
          "Anung Un Rama",
          "Right Hand of Doom",
          "Azzael",
          "Ogdru Jahad"
        ],
        answer: 0
      },
      {
        question: "Which Russian author wrote the epic novel War and Peace?",
        options: [
          "Alexander Pushkin",
          "Leo Tolstoy",
          "Fyodor Dostoyevsky",
          "Vladimir Nabokov"
        ],
        answer: 1
      },
      {
        question: "Which mountain has the highest peak in Africa?",
        options: [
          "Mount Stanley, DR Congo/Uganda",
          "Mount Speke, Uganda",
          "Mount Kenya, Kenya",
          "Mount Kilimanjaro, Tanzania"
        ],
        answer: 3
      },
      {
        question: "What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",
        options: [
          "Peanuts",
          "Calvin and Hobbes",
          "Albert and Pogo",
          "Winnie the Pooh"
        ],
        answer: 1
      },
      {
        question: "In \"Toriko\", which of the following Heavenly Kings has an enhanced sense of Hearing?",
        options: [
          "Zebra",
          "Toriko",
          "Coco",
          "Sunny"
        ],
        answer: 0
      },
      {
        question: "The novel \"Of Mice And Men\" was written by what author?",
        options: [
          "George Orwell",
          "Mark Twain ",
          "John Steinbeck ",
          "Harper Lee"
        ],
        answer: 2
      },
      {
        question: "In Haikyuu!!, who is not a member of Karasuno VBC?",
        options: [
          "Shigeru Yahaba",
          "Tadashi Yamaguchi",
          "Kazuhito Narita",
          "Hisashi Kinoshita"
        ],
        answer: 0
      },
      {
        question: "Which of these two plates are best know for forming earthquakes and tsunami's?",
        options: [
          "Oceanic & Continental Crust/Transform Plate Boundaries",
          "Divergent Plate Boundaries/Convergent/Oceanic Crust",
          "Transform Plate Boundaries/Divergent Plate Boundaries",
          "Convergent Plate Boundaries/Oceanic Crust"
        ],
        answer: 3
      },
      {
        question: "Which logical fallacy means to attack the character of your opponent rather than their arguments?",
        options: [
          "Post hoc ergo propter hoc",
          "Ad hominem",
          "Argumentum ad populum",
          "Tu quoque"
        ],
        answer: 1
      },
      {
        question: "What nation produces roughly 40% of the world’s vanilla?",
        options: [
          "Madagascar",
          "China",
          "Indonesia",
          "Mexico"
        ],
        answer: 0
      },
      {
        question: "In \"The Simpsons\", where did Homer and Marge first meet?",
        options: [
          "At 742 Evergreen Terrace",
          "At High School",
          "At Summer Camp",
          "At Church"
        ],
        answer: 2
      },
      {
        question: "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
        options: [
          "Babylonians",
          "Hittites",
          "Elamites",
          "Assyrians"
        ],
        answer: 3
      },
      {
        question: "What was the code name for the German invasion of the Soviet Union in WW2?",
        options: [
          "Operation Barbarossa",
          "Operation Kaiserschlact",
          "Operation Unthinkable",
          "Operation Molotov"
        ],
        answer: 0
      },
      {
        question: "Which mountain has the highest peak in South America?",
        options: [
          "Ojos del Salado, Argentina/Chile border",
          "Huascarán, Peru",
          "Monte Pissis, Argentina",
          "Aconcagua, Argentina"
        ],
        answer: 3
      },
      {
        question: "In The Lies of Locke Lamora, what title is Locke known by in the criminal world?",
        options: [
          "The Thorn of Camorr",
          "The Thorn of the Marrows",
          "The Thorn of Emberlain",
          "The Rose of the Marrows"
        ],
        answer: 0
      },
      {
        question: "What is the mnemonic device for remembering the fates of the wives of Henry VIII?",
        options: [
          "Beheaded, Died, Divorced, Divorced, Beheaded, Survived",
          "Died, Beheaded, Divorced, Beheaded, Survived, Divorced",
          "Survived, Beheaded, Died, Divorced, Divorced, Beheaded",
          "Divorced, Beheaded, Died, Divorced, Beheaded, Survived"
        ],
        answer: 3
      },
      {
        question: "The character White Diamond from Steven Universe, is voiced by who?",
        options: [
          "Christine Ebersole",
          "Aly Michalka",
          "Ellen McLain",
          "Rihanna"
        ],
        answer: 0
      },
      {
        question: "What is the name given to Indian food cooked over charcoal in a clay oven?",
        options: [
          "Tandoori",
          "Biryani",
          "Pani puri",
          "Tiki masala"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'The French Revolution begin' occur?",
        options: [
          "1789",
          "1776",
          "1804",
          "1799"
        ],
        answer: 0
      },
      {
        question: "At what depth should you make a decompression stop, or safety stop, on a typical scuba dive?",
        options: [
          "15 Feet / 5 Meters",
          "25 Feet / 7.5 Meters",
          "50 Feet / 15 Meters",
          "75 Feet / 23 Meters"
        ],
        answer: 0
      },
      {
        question: "Which American civilization is the source of the belief that the world would end or drastically change on December 21st, 2012?",
        options: [
          "The Aztecs",
          "The Mayans",
          "The Incas",
          "The Navajos"
        ],
        answer: 1
      },
      {
        question: "Before 2011, \"True Capitalist Radio\" was known by a different name. What was that name?",
        options: [
          "True Conservative Radio",
          "Texan Capitalist Radio",
          "United Capitalists",
          "True Republican Radio"
        ],
        answer: 0
      },
      {
        question: "What date was the first flight of the P-40 Warhawk?",
        options: [
          "October 14 1938",
          "August 21 1939",
          "June 1 1939",
          "January 12 1940"
        ],
        answer: 0
      },
      {
        question: "What is the name of the cognitive bias wherein a person with low ability in a particular skill mistake themselves as being superior?",
        options: [
          "Müller-Lyer effect",
          "Dunning-Kruger effect",
          "Freud-Hall effect",
          "Meyers-Briggs effect"
        ],
        answer: 1
      },
      {
        question: "Which of these is not a world in the anime \"Buddyfight\"?",
        options: [
          "Star Dragon World",
          "Darkness Dragon World",
          "Ancient Dragon World",
          "Dragon World"
        ],
        answer: 2
      },
      {
        question: "What are the tallest twin buildings in the world, with a height of 1,483 ft (451.9 m)?",
        options: [
          "Petronas Twin Towers, Malaysia",
          "Emirates Towers, United Arab Emirates",
          "Huaguoyuan Towers, China",
          "Palm Towers, Qatar"
        ],
        answer: 0
      },
      {
        question: "Rolex is a company that specializes in what type of product?",
        options: [
          "Computers",
          "Watches",
          "Sports equipment",
          "Cars"
        ],
        answer: 1
      },
      {
        question: "How old was Muhammad Ali when he died?",
        options: [
          "He's still alive",
          "56",
          "61",
          "74"
        ],
        answer: 3
      },
      {
        question: "What year did radio icon Howard Stern start a job at radio station WNBC?",
        options: [
          "1984",
          "1985",
          "1995",
          "1982"
        ],
        answer: 3
      },
      {
        question: "The Little Entente was an alliance formed against which nation?",
        options: [
          "Hungary",
          "France",
          "Prussia",
          "Germany"
        ],
        answer: 0
      },
      {
        question: "When was Tesla founded?",
        options: [
          "2003",
          "2005",
          "2008",
          "2007"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of Uranium",
        options: [
          "235",
          "92",
          "17",
          "167"
        ],
        answer: 1
      },
      {
        question: "In \"My Little Pony: Friendship is Magic\", which of these ponies represents the quality of honesty?",
        options: [
          "Pinkie Pie",
          "Twilight Sparkle",
          "Rarity",
          "Applejack"
        ],
        answer: 3
      },
      {
        question: "The medical condition osteoporosis affects which part of the body?",
        options: [
          "Bones",
          "Heart",
          "Skin",
          "Brain"
        ],
        answer: 0
      },
      {
        question: "What is the name of the infamous pachinko machine from \"Kaiji\"?",
        options: [
          "The Dragon",
          "The Undefeated",
          "The Bog",
          "The Devil"
        ],
        answer: 2
      },
      {
        question: "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
        options: [
          "Ferrari",
          "Maserati",
          "Fiat",
          "Alfa Romeo"
        ],
        answer: 2
      },
      {
        question: "Which of these is NOT a bone found in the human arm?",
        options: [
          "Radius",
          "Tibia",
          "Humerus",
          "Ulna"
        ],
        answer: 1
      },
      {
        question: "In \"Toriko\", which of the following foods is knowingly compatible with Toriko?",
        options: [
          "Mors Oil",
          "Poison Potato",
          "Parmesansho Fruit",
          "Alpacookie"
        ],
        answer: 1
      },
      {
        question: "Who was the first Legendary Pokemon to be defeated by Ash Ketchum in the Pokémon anime?",
        options: [
          "Articuno",
          "Regice",
          "Latios",
          "Darkrai"
        ],
        answer: 0
      },
      {
        question: "What nationality was the surrealist painter Salvador Dali?",
        options: [
          "French",
          "Portuguese",
          "Spanish",
          "Italian"
        ],
        answer: 2
      },
      {
        question: "America's Strategic Defense System during the Cold War was nicknamed after this famous movie.",
        options: [
          "Alien",
          "Blade Runner",
          "Jaws",
          "Star Wars"
        ],
        answer: 3
      },
      {
        question: "What Latin phrase roughly translates to \"seize the day\"?",
        options: [
          "Carpe diem",
          "Sic semper tyrannis",
          "Memento mori",
          "Plus ultra"
        ],
        answer: 0
      },
      {
        question: "Mary Shelley is the author of what classic horror story?",
        options: [
          "Frankenstein",
          "Strange Case of Dr Jekyll and Mr Hyde",
          "The Legend of Sleepy Hollow",
          "Dracula"
        ],
        answer: 0
      },
      {
        question: "The main protagonist of the fourth part of JoJo's Bizarre Adventure is which of the following?",
        options: [
          "Josuke Higashikata",
          "Yoshikage kira",
          "Joey JoJo",
          "Koichi Hirose"
        ],
        answer: 0
      },
      {
        question: "The gunpowder plot was a well-known failed assassination attempt against which of England's then reigning monarchs?",
        options: [
          "Charles I",
          "James I",
          "Elizabeth I",
          "Charles II"
        ],
        answer: 1
      },
      {
        question: "Who voices \"Shou Suzuki\" in the English dub of \"Mob Psycho 100\"?",
        options: [
          "Ben Diskin",
          "David Naughton",
          "Chris Niosi",
          "Casey Mongillo"
        ],
        answer: 3
      },
      {
        question: "Which planet in the Solar System is the closest to the Sun?",
        options: [
          "Earth",
          "Mercury",
          "Mars",
          "Venus"
        ],
        answer: 1
      },
      {
        question: "Who was the 40th President of the USA?",
        options: [
          "Jimmy Carter",
          "Bill Clinton",
          "Ronald Reagan",
          "Richard Nixon"
        ],
        answer: 2
      },
      {
        question: "Which of the following years is commonly referred to as the \"Year Without a Summer\"?",
        options: [
          "1808",
          "1816",
          "1813",
          "1823"
        ],
        answer: 1
      },
      {
        question: "In \"A Certain Magical Index,\" what is Accelerator able to control?",
        options: [
          "Wormholes",
          "Quantums",
          "Velocity",
          "Vectors"
        ],
        answer: 3
      },
      {
        question: "In 2013 how much money was lost by Nigerian scams?",
        options: [
          "$12.7 Billion",
          "$2.7 Billion",
          "$95 Million",
          "$956 Million"
        ],
        answer: 0
      }
    ],
    10: [
      {
        question: "Who was the first woman Prime Minister of India?",
        options: [
          "Pratibha Patil",
          "Sarojini Naidu",
          "Indira Gandhi",
          "Sucheta Kripalani"
        ],
        answer: 2
      },
      {
        question: "The famous 'Quit India Movement' was launched by Mahatma Gandhi in which year?",
        options: [
          "1930",
          "1942",
          "1919",
          "1945"
        ],
        answer: 1
      },
      {
        question: "Which commission was sent to India in 1928 to look into the constitutional system, leading to widespread boycotts?",
        options: [
          "Cripps Mission",
          "Cabinet Mission",
          "Simon Commission",
          "Hunter Commission"
        ],
        answer: 2
      },
      {
        question: "The phrase \"accident waiting to happen\" is an example of what type of figure of speech?",
        options: [
          "Metaphor",
          "Simile",
          "Analogy",
          "Idiom"
        ],
        answer: 3
      },
      {
        question: "Who is the main character in One Piece?",
        options: [
          "Smoker",
          "Zoro",
          "Shanks",
          "Luffy"
        ],
        answer: 3
      },
      {
        question: "Who painted the painting \"Nighthawks\"?",
        options: [
          "Vincent van Gogh",
          "Edward Hopper",
          "Salvador Dali",
          "Johannes Vermeer"
        ],
        answer: 1
      },
      {
        question: "What is the collective noun for bears?",
        options: [
          "Tribe",
          "Husk",
          "Sloth",
          "Drove"
        ],
        answer: 2
      },
      {
        question: "Which Greek god was the god of the Sun?",
        options: [
          "Hades",
          "Zeus",
          "Poseidon",
          "Helios"
        ],
        answer: 3
      },
      {
        question: "Which item of clothing is usually worn by a Scotsman at a wedding?",
        options: [
          "Skirt",
          "Dress",
          "Rhobes",
          "Kilt"
        ],
        answer: 3
      },
      {
        question: "What is the name of the device that allows for infinite energy in the anime \"Dimension W\"?",
        options: [
          "Wires",
          "Coils",
          "Tesla",
          "Collectors"
        ],
        answer: 1
      },
      {
        question: "A positron is an antiparticle of a what?",
        options: [
          "Proton",
          "Neutron",
          "Electron",
          "Photon"
        ],
        answer: 2
      },
      {
        question: "What is the common term for bovine spongiform encephalopathy (BSE)?",
        options: [
          "Mad Cow disease",
          "Foot-and-mouth disease",
          "Milk fever",
          "Weil's disease"
        ],
        answer: 0
      },
      {
        question: "What is the average life span of a garden ant?",
        options: [
          "15 years",
          "24 hours",
          "1 week",
          "3 years"
        ],
        answer: 0
      },
      {
        question: "Frank Lloyd Wright was the architect behind what famous building?",
        options: [
          "The Guggenheim",
          "Sydney Opera House",
          "The Space Needle",
          "Villa Savoye"
        ],
        answer: 0
      },
      {
        question: "When the Falcon Heavy was launched on it's test flight, what was the only part of the operation that failed?",
        options: [
          "Deployment of Starman",
          "Ignition and Liftoff",
          "Center Core Landing",
          "Side Booster Landing"
        ],
        answer: 2
      },
      {
        question: "How many years did the Hundred Years' War last?",
        options: [
          "116",
          "90",
          "100",
          "101"
        ],
        answer: 0
      },
      {
        question: "Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?",
        options: [
          "The Sands",
          "The Sahara",
          "The Flamingo",
          "The MGM Grand"
        ],
        answer: 2
      },
      {
        question: "Death Valley's Badwater Basin is North America's point of lowest elevation at how many feet below sea level?",
        options: [
          "79 feet",
          "12,092 feet",
          "1,640 feet",
          "282 feet"
        ],
        answer: 3
      },
      {
        question: "In Terry Pratchett's Discworld novel 'Wyrd Sisters', which of these are not one of the three main witches?",
        options: [
          "Granny Weatherwax",
          "Nanny Ogg",
          "Magrat Garlick",
          "Winny Hathersham"
        ],
        answer: 3
      },
      {
        question: "In \"To Love-Ru\", who is the first to hear of Yami's past from her?",
        options: [
          "Haruna",
          "Mikan",
          "Rito",
          "Lala"
        ],
        answer: 2
      },
      {
        question: "What studio animated Ouran High School Host Club?",
        options: [
          "Bones",
          "Production I.G",
          "xebec",
          "Kyoto Animation"
        ],
        answer: 0
      },
      {
        question: "The Maori hold that which island nation was founded by Kupe, who discovered it under a long white cloud?",
        options: [
          "Fiji",
          "New Zealand",
          "Hawaii",
          "Vanuatu"
        ],
        answer: 1
      },
      {
        question: "The human right lung has how many lobes?",
        options: [
          "3",
          "2",
          "4",
          "1"
        ],
        answer: 0
      },
      {
        question: "What Russian automatic gas-operated assault rifle was developed in the Soviet Union in 1947, and is still popularly used today?",
        options: [
          "RPK",
          "MG 42",
          "AK-47",
          "M16"
        ],
        answer: 2
      },
      {
        question: "In Norse Mythology, Baldr was killed by Loki with a magical spear made from what plant?",
        options: [
          "Mistletoe",
          "Wolf's Bane",
          "Hemlock",
          "Buckthorn"
        ],
        answer: 0
      },
      {
        question: "What is the name of the author of book series 'Percy Jackson'?",
        options: [
          "Sandra Bullock ",
          "J.K. Rowling",
          "Rick Riordan",
          "Roald Dahl"
        ],
        answer: 2
      },
      {
        question: "The character Momonga from the \"Overlord\" series orders his servants to call him by what name?",
        options: [
          "Ainz Ooal Gown",
          "Master",
          "Yggdrasil",
          "Kugane Maruyama"
        ],
        answer: 0
      },
      {
        question: "Who was the first emperor of Rome?",
        options: [
          "Julius Caesar",
          "Augustus ",
          "Pompey Magnus",
          "Claudius"
        ],
        answer: 1
      },
      {
        question: "In \"The Amazing World of Gumball\", who is the principal of Elmore Junior High?",
        options: [
          "Principal Brawn",
          "Principal Small",
          "Principal Brown",
          "Principal Simeon"
        ],
        answer: 2
      },
      {
        question: "When did the British hand-over sovereignty of Hong Kong back to China?",
        options: [
          "1900",
          "1841",
          "1997",
          "1999"
        ],
        answer: 2
      },
      {
        question: "Where was Kanye West born?",
        options: [
          "Detroit, Michigan",
          "Los Angeles, California",
          "Atlanta, Georgia",
          "Chicago, Illinois"
        ],
        answer: 2
      },
      {
        question: "What was the unofficial name for Germany between 1919 and 1933?",
        options: [
          "Oesterreich ",
          "Weimar Republic",
          "German Democratic Republic",
          "Federal Republic of Germany"
        ],
        answer: 1
      },
      {
        question: "What is the last letter of the Greek alphabet?",
        options: [
          "Mu",
          "Epsilon",
          "Omega",
          "Kappa"
        ],
        answer: 2
      },
      {
        question: "In Greek Mythology, who killed Achilles?",
        options: [
          "Paris",
          "Helen",
          "Pericles",
          "Hector"
        ],
        answer: 0
      },
      {
        question: "In the \"To Love-Ru\" series, how many Trans-weapons were created?",
        options: [
          "3",
          "4",
          "1",
          "2"
        ],
        answer: 0
      },
      {
        question: "Who is the god of war in Polynesian mythology?",
        options: [
          "Kohara",
          "'Oro",
          "Hina",
          "Māui"
        ],
        answer: 1
      },
      {
        question: "Bugs Bunny, Tony the Tiger, and other bipedal animal characters are known as what type of character?",
        options: [
          "Anthropolegic ",
          "Anthropomorphic",
          "Anthrogenetic",
          "Anthrologic"
        ],
        answer: 1
      },
      {
        question: "Before becoming the Autobot leader, Optimus Prime was known by what name on Cybertron?",
        options: [
          "Orion Pax",
          "P-138",
          "Long Haul",
          "Teletran-1"
        ],
        answer: 0
      },
      {
        question: "What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?",
        options: [
          "The Socs",
          "The Mafia",
          "The Greasers",
          "The Outsiders"
        ],
        answer: 2
      },
      {
        question: "Donald J. Trump's Middle Name is...",
        options: [
          "Jeff",
          "Jerald",
          "Jason",
          "John"
        ],
        answer: 3
      },
      {
        question: "What year was O.J. Simpson aquitted of his murder charges?",
        options: [
          "1995",
          "1991",
          "1992",
          "1996"
        ],
        answer: 0
      },
      {
        question: "What animated internet character is known to answer emails with his boxing gloves?",
        options: [
          "Strong Mad",
          "Strong Sad",
          "Strong Glad",
          "Strong Bad"
        ],
        answer: 3
      },
      {
        question: "On what day did Germany invade Poland?",
        options: [
          "June 22, 1941",
          "December 7, 1941",
          "September 1, 1939",
          "July 7, 1937"
        ],
        answer: 2
      },
      {
        question: "Which car brand does NOT belong to General Motors?",
        options: [
          "Cadillac",
          "Buick",
          "Chevrolet",
          "Ford"
        ],
        answer: 3
      },
      {
        question: "What was the name of the planned invasion of Japan towards the end of World War II?",
        options: [
          "Operation Ironclad",
          "Operation Aflame",
          "Operation Boarding Party",
          "Operation Downfall"
        ],
        answer: 3
      },
      {
        question: "What part of an automobile engine uses lobes to open and close intake and exhaust valves, and allows an air/fuel mixture into the engine?",
        options: [
          "Drive shaft",
          "Camshaft",
          "Crankshaft",
          "Piston"
        ],
        answer: 1
      },
      {
        question: "J.K. Rowling completed \"Harry Potter and the Deathly Hallows\" in which hotel in Edinburgh, Scotland?",
        options: [
          "The Dunstane Hotel",
          "Hotel Novotel",
          "The Balmoral",
          "Sheraton Grand Hotel & Spa"
        ],
        answer: 2
      },
      {
        question: "What was the name of the first Robin in the Batman comics?",
        options: [
          "Tim Drake",
          "Dick Grayson",
          "Jason Todd",
          "Bruce Wayne"
        ],
        answer: 1
      },
      {
        question: "What was the name of the national hero of the Philippines who inspired and lead the Philippine Revolution against colonial Spain?",
        options: [
          "Benito Juárez",
          "Simón Bolívar",
          "José Rizal",
          "José de San Martín"
        ],
        answer: 2
      },
      {
        question: "Which slogan did the fast food company, McDonald's, use before their \"I'm Lovin' It\" slogan?",
        options: [
          "We Love to See You Smile",
          "Making People Happy Through Food",
          "Have It Your Way",
          "Why Pay More!?"
        ],
        answer: 0
      },
      {
        question: "What is the star sign of someone born on Valentines day?",
        options: [
          "Aquarius",
          "Pisces",
          "Scorpio",
          "Capricorn"
        ],
        answer: 0
      },
      {
        question: "The main protagonist of the fifth part of JoJo's Bizarre Adventure is which of the following?",
        options: [
          "Guido Mista",
          "Giorno Giovanna",
          "Joey JoJo",
          "Jonathan Joestar"
        ],
        answer: 1
      },
      {
        question: "Which of these is a type of stretch/deep tendon reflex?",
        options: [
          "Gag reflex",
          "Pupillary light reflex",
          "Ankle jerk reflex",
          "Scratch reflex"
        ],
        answer: 2
      },
      {
        question: "How many hearts does an octopus have?",
        options: [
          "Three",
          "Two",
          "Four",
          "One"
        ],
        answer: 0
      },
      {
        question: "Coleslaw originated from which European country?",
        options: [
          "Germany",
          "The Netherlands",
          "United Kingdom",
          "Denmark"
        ],
        answer: 1
      },
      {
        question: "In the anime \"Gintama\" which accessory/article of clothing is the character Shinpachi commonly referred to as?",
        options: [
          "T-Shirt",
          "Nose Ring",
          "Glasses",
          "Underwear"
        ],
        answer: 2
      },
      {
        question: "Who created Ultron of Earth-616?",
        options: [
          "Reed Richards",
          "Amadeus Cho",
          "Henry Pym",
          "Tony Stark"
        ],
        answer: 2
      },
      {
        question: "The book \"Fahrenheit 451\" was written by whom?",
        options: [
          "Stephen King",
          "Ray Bradbury",
          "Wolfgang Amadeus Mozart",
          "R. L. Stine"
        ],
        answer: 1
      },
      {
        question: "In 1845, a series of wars named after which indigenous people began in New Zealand?",
        options: [
          "Polynesians",
          "Papuans",
          "Aborigines",
          "Māori"
        ],
        answer: 3
      },
      {
        question: "What is an alternative name for multiple personality disorder?",
        options: [
          "Dissociative identity disorder",
          "Identity crisis",
          "Body integrity identity disorder",
          "Schizophrenia"
        ],
        answer: 0
      },
      {
        question: "Who invented Pastafarianism?",
        options: [
          "Zach Soldi",
          "Bobby Henderson",
          "Eric Tignor",
          "Bill Nye"
        ],
        answer: 1
      }
    ],
    11: [
      {
        question: "Who was the first Governor-General of independent India?",
        options: [
          "Lord Mountbatten",
          "C. Rajagopalachari",
          "Dr. Rajendra Prasad",
          "Jawaharlal Nehru"
        ],
        answer: 0
      },
      {
        question: "In the context of ancient Indian history, what does the term 'Dharma Chakra Pravartana' refer to?",
        options: [
          "The birth of Buddha",
          "Buddha's first sermon",
          "Buddha's death",
          "Buddha's renunciation"
        ],
        answer: 1
      },
      {
        question: "Which treaty was signed in 1765 after the Battle of Buxar, granting diwani rights of Bengal to the British?",
        options: [
          "Treaty of Allahabad",
          "Treaty of Alinagar",
          "Treaty of Paris",
          "Treaty of Seringapatam"
        ],
        answer: 0
      },
      {
        question: "Originally another word for poppy, coquelicot is a shade of what?",
        options: [
          "Blue",
          "Pink",
          "Red",
          "Green"
        ],
        answer: 2
      },
      {
        question: "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
        options: [
          "Haplogroup J",
          "Haplogroup U",
          "Haplogroup T",
          "Haplogroup L"
        ],
        answer: 1
      },
      {
        question: "What is the molecular formula of Ozone?",
        options: [
          "O3",
          "N2O",
          "SO4",
          "C6H2O6"
        ],
        answer: 0
      },
      {
        question: "What was the name of Jonny's pet dog in The Adventures of Jonny Quest?",
        options: [
          "Max",
          "Rocky",
          "Lucky",
          "Bandit"
        ],
        answer: 3
      },
      {
        question: "When was Salvador Dali's painting, \"The Persistence of Memory,\" completed?",
        options: [
          "1931",
          "1934",
          "1932",
          "1929"
        ],
        answer: 0
      },
      {
        question: "During World War I, which nation's monarchs were blood related?",
        options: [
          "France, Russia, Germany",
          "Serbia, Russia, Croatia",
          "England, Germany, Russia",
          "Germany, Spain, Austria"
        ],
        answer: 2
      },
      {
        question: "In what year did the Battle of Verdun take place?",
        options: [
          "1916",
          "1917",
          "1918",
          "1915"
        ],
        answer: 0
      },
      {
        question: "What scientific family does the Aardwolf belong to?",
        options: [
          "Eupleridae",
          "Canidae",
          "Felidae",
          "Hyaenidae"
        ],
        answer: 3
      },
      {
        question: "The ontological argument for the proof of God's existence is first attributed to whom?",
        options: [
          "Anselm of Canterbury",
          "Immanuel Kant",
          "Aristotle",
          "René Descartes"
        ],
        answer: 0
      },
      {
        question: "Where was Napoleon Bonaparte born?",
        options: [
          "Brittany",
          "Normandy",
          "Paris",
          "Corsica"
        ],
        answer: 3
      },
      {
        question: "In the book series \"Odd Thomas\", Danny Jessup has what genetic disease?",
        options: [
          "Spinocerebellar ataxia",
          "Adrenoleukodystrophy",
          " Osteogenesis Imperfecta",
          "Cystic Fibrosis"
        ],
        answer: 2
      },
      {
        question: "Better known by his nickname Logan, what is Wolverine's birth name?",
        options: [
          "John Savage",
          "Logan Wolf",
          "James Howlett",
          "Thomas Wilde"
        ],
        answer: 2
      },
      {
        question: "The word \"aprosexia\" means which of the following?",
        options: [
          "A feverish desire to rip one's clothes off",
          "The inability to concentrate on anything",
          "The inability to stand up",
          "The inability to make decisions"
        ],
        answer: 1
      },
      {
        question: "Who played \"Charlie Price\" in the musical \"Kinky Boots\" on Broadway in New York from May 26th - Aug 6th 2017?",
        options: [
          "Tom Cruise",
          "Ed Sheeren",
          "Dallon Weekes",
          "Brendon Urie"
        ],
        answer: 3
      },
      {
        question: "In the anime, \"Hunter X Hunter\", what is the main protagonist's name?",
        options: [
          "Gen",
          "Gan",
          "Gon",
          "Gin"
        ],
        answer: 2
      },
      {
        question: "Which nation joined NATO as its 29th member in 2017?",
        options: [
          "Estonia",
          "Iceland",
          "Montenegro",
          "Andorra"
        ],
        answer: 2
      },
      {
        question: "Who voice acted the character Hiccup in the movie \"How to Train Your Dragon\"?",
        options: [
          "Gerard Butler",
          "Jay Baruchel",
          "John Powell",
          "Jack Brauchel"
        ],
        answer: 1
      },
      {
        question: "In \"Gravity Falls\", how much does Waddles weigh when Mable wins him in \"The Time Traveler's Pig\"?",
        options: [
          "30 pounds",
          "20 pounds",
          "10 pounds",
          "15 pounds"
        ],
        answer: 3
      },
      {
        question: "Which one of the following is NOT a sub-company of the Volkswagen Group?",
        options: [
          "Porsche",
          "Opel",
          "Bugatti",
          "Bentley"
        ],
        answer: 1
      },
      {
        question: "Which of these anime have over 7,500 episodes?",
        options: [
          "One Piece",
          "Chibi Maruko-chan",
          "Sazae-san",
          "Naruto"
        ],
        answer: 2
      },
      {
        question: "In \"Gravity Falls\", what does Quentin Trembley do when he is driven out from the White House?",
        options: [
          "Release 1,000 captive salamanders into the white house.",
          "Jump out the window.",
          "Eat a salamander and jump out the window.",
          "Leave in peace."
        ],
        answer: 2
      },
      {
        question: "Which one of these rulers did not belong to the Habsburg dynasty?",
        options: [
          "Philip V",
          "Francis Joseph",
          "Charles V",
          "Philip II"
        ],
        answer: 0
      },
      {
        question: "In the superhero anime, \"One Punch Man\", what is the main protagonist's Hero name?",
        options: [
          "Mad Boxer",
          "Justice Puncher",
          "Strong Fist",
          "Caped Baldy"
        ],
        answer: 3
      },
      {
        question: "When was the \"Siege of Leningrad\" lifted during World War II?",
        options: [
          "September 1943",
          "March 1944",
          "January 1944",
          "November 1943"
        ],
        answer: 2
      },
      {
        question: "In the Beatrix Potter books, what type of animal is Tommy Brock?",
        options: [
          "Fox",
          "Rabbit",
          "Frog",
          "Badger"
        ],
        answer: 3
      },
      {
        question: "An organic compound is considered an alcohol if it has what functional group?",
        options: [
          "Hydroxyl",
          "Alkyl",
          "Carbonyl",
          "Aldehyde"
        ],
        answer: 0
      }
    ],
    12: [
      {
        question: "Which Article of the Indian Constitution provides for the declaration of a National Emergency?",
        options: [
          "Article 352",
          "Article 356",
          "Article 360",
          "Article 370"
        ],
        answer: 0
      },
      {
        question: "Who was the English merchant who obtained a farman from Emperor Jahangir to trade in India?",
        options: [
          "Sir Thomas Roe",
          "Captain William Hawkins",
          "Job Charnock",
          "Robert Clive"
        ],
        answer: 1
      },
      {
        question: "Which social reformer founded the 'Satyashodhak Samaj' in Maharashtra in 1873?",
        options: [
          "Jyotirao Phule",
          "Dr. B. R. Ambedkar",
          "Bal Gangadhar Tilak",
          "Mahadev Govind Ranade"
        ],
        answer: 0
      },
      {
        question: "What weapon did Lord Shiva gift to Arjuna after testing his valor?",
        options: [
          "Vajrastra",
          "Narayanastra",
          "Brahmashira",
          "Pashupatastra"
        ],
        answer: 3
      },
      {
        question: "Which of the following is NOT a work done by Shakespeare?",
        options: [
          "Cymbeline",
          "Measure For Measure",
          "Trial of Temperance",
          "Titus Andronicus"
        ],
        answer: 2
      },
      {
        question: "What year was \"JoJo's Bizarre Adventure: Phantom Blood\" first released?",
        options: [
          "1987",
          "1983",
          "1995",
          "2013"
        ],
        answer: 0
      },
      {
        question: "Which of the following physicists did NOT work on the Manhattan project?",
        options: [
          "John Von-Neumann",
          "J. Robert Oppenheimer",
          "Murray Gell-Mann",
          "Richard Feynman"
        ],
        answer: 2
      },
      {
        question: "Before the American colonies switched to the Gregorian calendar in 1752, on what date did their new year start?",
        options: [
          "December 1st",
          "March 25th",
          "June 1st",
          "September 25th"
        ],
        answer: 1
      },
      {
        question: "In which year did the historic event 'The Magna Carta signed by King John of England' occur?",
        options: [
          "1215",
          "1250",
          "1199",
          "1300"
        ],
        answer: 0
      },
      {
        question: "What year was the first Pizza Hut restaurant opened?",
        options: [
          "1942",
          "1976",
          "1958",
          "1965"
        ],
        answer: 2
      },
      {
        question: "Which day did World War I begin?",
        options: [
          "June 28",
          "July 28",
          "April 28",
          "January 28"
        ],
        answer: 1
      },
      {
        question: "Which of these plays was famously first performed posthumously after the playwright committed suicide?",
        options: [
          "Much Ado About Nothing",
          "4.48 Psychosis",
          "The Birthday Party",
          "Hamilton"
        ],
        answer: 1
      },
      {
        question: "Which of the following Union Pacific 'Big Boy' locomotives was restored to working order in 2019?",
        options: [
          "4004",
          "4012",
          "4014",
          "4000"
        ],
        answer: 2
      },
      {
        question: "Talos, the mythical giant bronze man, was the protector of which island?",
        options: [
          "Sardinia",
          "Cyprus",
          "Sicily",
          "Crete"
        ],
        answer: 3
      },
      {
        question: "What was the third country to have a McDonald's restaurant?",
        options: [
          "France",
          "Costa Rica",
          "Japan",
          "Australia"
        ],
        answer: 1
      },
      {
        question: "When was the Gregorian Calendar first adopted?",
        options: [
          "1623",
          "1501",
          "1582",
          "1555"
        ],
        answer: 2
      },
      {
        question: "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
        options: [
          "Housemaid's Knee",
          "Carpal Tunnel",
          "Shin Splints",
          "Tennis Elbow"
        ],
        answer: 2
      },
      {
        question: "What is \"Stenoma\"?",
        options: [
          "A combat stimulant from WW2",
          "A type of seasoning",
          "A genus of moths",
          "A port city in the carribean"
        ],
        answer: 2
      },
      {
        question: "Which Audi does not use Haldex based all wheel drive system?",
        options: [
          "Audi S3",
          "Audi A3",
          "Audi TT",
          "Audi A8"
        ],
        answer: 3
      },
      {
        question: "What did the abbreviation \"RMS\" stand for in the RMS Titanic in 1912?",
        options: [
          "Royal Mail Ship",
          "Regulated Maelstrom Sensor",
          "Royal Majesty Service",
          "Regular Maritime Schedule "
        ],
        answer: 0
      },
      {
        question: "Which animation studio produced the anime adaptation of \"xxxHolic\"?",
        options: [
          "Xebec",
          "Sunrise",
          "Production I.G",
          "Kyoto Animation"
        ],
        answer: 2
      },
      {
        question: "Which cartoon family lives in 31 Spooner Street, Quahog, Rhode Island USA?",
        options: [
          "The Griffins",
          "The Hills",
          "The Jetsons",
          "The Simpsons"
        ],
        answer: 0
      },
      {
        question: "The word \"science\" stems from the word \"scire\" meaning what?",
        options: [
          "To count",
          "To measure",
          "To know",
          "To live"
        ],
        answer: 2
      }
    ],
    13: [
      {
        question: "The treaty of Srirangapatna was signed between Tipu Sultan and whom?",
        options: [
          "Robert Clive",
          "Warren Hastings",
          "Lord Cornwallis",
          "Lord Wellesley"
        ],
        answer: 2
      },
      {
        question: "Which session of the Indian National Congress was presided over by Mahatma Gandhi?",
        options: [
          "Lahore Session 1929",
          "Belgaum Session 1924",
          "Haripura Session 1938",
          "Calcutta Session 1920"
        ],
        answer: 1
      },
      {
        question: "Who was the founder of the Indian Association in 1876, one of the earliest political organizations?",
        options: [
          "Surendranath Banerjee",
          "Dadabhai Naoroji",
          "Womesh Chandra Bonnerjee",
          "Gopal Krishna Gokhale"
        ],
        answer: 0
      },
      {
        question: "Which sage is known for his extreme anger and cursed Shakuntala?",
        options: [
          "Durvasa",
          "Vashistha",
          "Vishwamitra",
          "Agastya"
        ],
        answer: 0
      },
      {
        question: "Who was the commander-in-chief of the Kaurava army on the first day of the Kurukshetra war?",
        options: [
          "Dronacharya",
          "Karna",
          "Bhishma",
          "Shalya"
        ],
        answer: 2
      },
      {
        question: "Who was the father of Shakuni, the king of Gandhara?",
        options: [
          "Gandhar",
          "Pandu",
          "Dhritarashtra",
          "Subala"
        ],
        answer: 3
      },
      {
        question: "Which Pandava was known for his mastery of sword fighting?",
        options: [
          "Yudhisthira",
          "Sahadeva",
          "Nakula",
          "Bhima"
        ],
        answer: 2
      },
      {
        question: "Who was the father of Dronacharya?",
        options: [
          "Atri",
          "Bharadwaja",
          "Gautama",
          "Vashistha"
        ],
        answer: 1
      },
      {
        question: "When was Adolf Hitler appointed as Chancellor of Germany?",
        options: [
          "September 1, 1939",
          "January 30, 1933",
          "February 27, 1933",
          "October 6, 1939"
        ],
        answer: 1
      },
      {
        question: "What is the scientific name of the Budgerigar?",
        options: [
          "Pyrrhura molinae",
          "Ara macao",
          "Nymphicus hollandicus",
          "Melopsittacus undulatus"
        ],
        answer: 3
      },
      {
        question: "Who is the Egyptian god of reproduction and lettuce?",
        options: [
          "Meret",
          "Mut",
          "Menu",
          "Min"
        ],
        answer: 3
      },
      {
        question: "Which of these chemical compounds is NOT found in gastric acid?",
        options: [
          "Sulfuric acid",
          "Hydrochloric acid",
          "Sodium chloride",
          "Potassium chloride"
        ],
        answer: 0
      },
      {
        question: "Who wrote the novel \"Moby-Dick\"?",
        options: [
          "J. R. R. Tolkien",
          "Herman Melville",
          "William Shakespeare",
          "William Golding"
        ],
        answer: 1
      },
      {
        question: "Which pulp hero made appearances in Hellboy and BPRD comics before getting his own spin-off?",
        options: [
          "The Spider",
          "The Wendigo",
          "Lobster Johnson",
          "Roger the Homunculus"
        ],
        answer: 2
      },
      {
        question: "The painting \"The Starry Night\" by Vincent van Gogh was part of which art movement?",
        options: [
          "Impressionism",
          "Post-Impressionism",
          "Neoclassical",
          "Romanticism"
        ],
        answer: 1
      },
      {
        question: "Paul Gauguin moved to which country in 1895?",
        options: [
          "Lithuania",
          "France",
          "Atuona",
          "Tahiti"
        ],
        answer: 3
      },
      {
        question: "Going by the International Code of Signals, which single flag is interpreted as \"I require assistance (not distress)\"?",
        options: [
          "Victor",
          "Delta",
          "Kilo",
          "Papa"
        ],
        answer: 0
      },
      {
        question: "The Hagia Sophia was commissioned by which emperor of the Byzantine Empire?",
        options: [
          "Constantine IV",
          "Justinian I",
          "Theodosius the Great",
          "Arcadius"
        ],
        answer: 1
      }
    ],
    14: [
      {
        question: "Who among the following was the founder of the Brahmo Samaj in 1828?",
        options: [
          "Swami Vivekananda",
          "Ishwar Chandra Vidyasagar",
          "Raja Ram Mohan Roy",
          "Dayananda Saraswati"
        ],
        answer: 2
      },
      {
        question: "During whose reign did the Chinese traveler Hiuen Tsang visit India?",
        options: [
          "Chandragupta Maurya",
          "Harshavardhana",
          "Samudragupta",
          "Ashoka"
        ],
        answer: 1
      },
      {
        question: "Which Buddhist council was held during the reign of Emperor Ashoka at Pataliputra?",
        options: [
          "First Council",
          "Second Council",
          "Third Council",
          "Fourth Council"
        ],
        answer: 2
      },
      {
        question: "What was the name of the bow lifted and broken by Lord Rama during Sita's swayamvar?",
        options: [
          "Sharanga",
          "Gandiva",
          "Kodanda",
          "Pinaka"
        ],
        answer: 3
      },
      {
        question: "Townsend Coleman provided the voice for which turtle in the original 1987 series of \"Teenage Mutant Ninja Turtles\"?",
        options: [
          "Leonardo",
          "Raphael",
          "Michelangelo",
          "Donatello"
        ],
        answer: 2
      },
      {
        question: "Before the 19th Century, the \"Living Room\" was originally called the...",
        options: [
          "Open Room",
          "Parlor",
          "Sitting Room",
          "Loft"
        ],
        answer: 1
      },
      {
        question: "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed \"the Kingmaker\"?",
        options: [
          "Thomas Warwick",
          "Henry V",
          "Richard III",
          "Richard Neville"
        ],
        answer: 3
      },
      {
        question: "In the Marvel Universe, the planet of Svartalfheim is home to what race?",
        options: [
          "Skrulls",
          "Dark Elves",
          "Frost Giants",
          "Kronans"
        ],
        answer: 1
      },
      {
        question: "The painting \"Guernica\" by Pablo Picasso expressed emotions of dread in response to which war?",
        options: [
          "World War I",
          "The Crimean War",
          "Spanish Civil War",
          "Spanish-American War"
        ],
        answer: 2
      },
      {
        question: "What bird is born with claws on its wing digits?",
        options: [
          "Cassowary",
          "Secretary bird",
          "Hoatzin",
          "Cormorant"
        ],
        answer: 2
      },
      {
        question: "Which species of Brown Bear is not extinct?",
        options: [
          "Atlas Bear",
          "Mexican Grizzly Bear",
          "California Grizzly Bear",
          "Syrian Brown Bear"
        ],
        answer: 3
      },
      {
        question: "What is the Gray Wolf's scientific name?",
        options: [
          "Canis Latrans",
          "Canis Aureus",
          "Canis Lupus Lycaon",
          "Canis Lupus"
        ],
        answer: 3
      },
      {
        question: "In \"Hunter x Hunter\", what are members in Killua's family known for being?",
        options: [
          "Hunters",
          "Bandits",
          "Assassins",
          "Ninjas"
        ],
        answer: 2
      },
      {
        question: "When was the city of Rome, Italy founded?",
        options: [
          "697 BCE",
          "902 BCE",
          "753 BCE",
          "524 BCE"
        ],
        answer: 2
      },
      {
        question: "Which of these is a semiconductor amplifying device?",
        options: [
          "P-N junction",
          "diode",
          "tube",
          "transistor"
        ],
        answer: 3
      },
      {
        question: "The word \"abulia\" means which of the following?",
        options: [
          "The inability to concentrate on anything",
          "The inability to stand up",
          "A feverish desire to rip one's clothes off",
          "The inability to make decisions"
        ],
        answer: 3
      },
      {
        question: "The 'Islets of Langerhans' is found in which human organ?",
        options: [
          "Brain",
          "Pancreas",
          "Kidney",
          "Liver"
        ],
        answer: 1
      },
      {
        question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
        options: [
          "Joseph and Catherine",
          "William and Elizabeth",
          "John and Mary",
          "George and Anne"
        ],
        answer: 2
      },
      {
        question: "In the \"Dragon Ball\" franchise, what is the name of Goku's brother?",
        options: [
          "Vegeta",
          "Raditz",
          "Gohan",
          "Bardock"
        ],
        answer: 1
      },
      {
        question: "Which art movement was Pablo Picasso known for co-founding?",
        options: [
          "Expressionism",
          "Futurism",
          "Impressionism",
          "Cubism"
        ],
        answer: 3
      },
      {
        question: "When was Finland's 100th year of being independent?",
        options: [
          "2016",
          "2015",
          "2017",
          "2018"
        ],
        answer: 2
      },
      {
        question: "In the Naruto manga, what is the last name of Tsunade?",
        options: [
          "Haruno",
          "Uzumaki",
          "Senju",
          "Yamanaka"
        ],
        answer: 2
      },
      {
        question: "Which person from \"JoJo's Bizarre Adventure\" does NOT house a reference to a band, artist, or song earlier than 1980?",
        options: [
          "Johnny Joestar",
          "Josuke Higashikata",
          "Jolyne Cujoh",
          "Giorno Giovanna"
        ],
        answer: 3
      },
      {
        question: "Which song was the callsign for Stefan Verdemann's KWFM radio station in Urasawa Naoki's \"Monster\"?",
        options: [
          "Over the Rainbow",
          "When You Wish Upon A Star",
          "Singing In The Rain",
          "What a Wonderful World"
        ],
        answer: 0
      },
      {
        question: "In the Hellboy universe, what was Abe Sapien's birth name?",
        options: [
          "Sir Edward Grey",
          "Langdon Everett Caul",
          "Landis Pope",
          "Lord Baltimore"
        ],
        answer: 1
      },
      {
        question: "What is the romanized Korean word for \"heart\"?",
        options: [
          "Jeongsin",
          "Segseu",
          "Simjang",
          "Aejeong"
        ],
        answer: 2
      },
      {
        question: "What is the unit of electrical inductance?",
        options: [
          "Coulomb",
          "Mho",
          "Weber",
          "Henry"
        ],
        answer: 3
      }
    ],
    15: [
      {
        question: "Which of the following books was written by the ancient Indian mathematician Aryabhata?",
        options: [
          "Siddhanta Shiromani",
          "Aryabhatiya",
          "Ganita Kaumudi",
          "Lilavati"
        ],
        answer: 1
      },
      {
        question: "Who was the first woman to become the President of the Indian National Congress?",
        options: [
          "Sarojini Naidu",
          "Nellie Sengupta",
          "Annie Besant",
          "Aruna Asaf Ali"
        ],
        answer: 2
      },
      {
        question: "Who was the leader of the Bardoli Satyagraha in 1928, receiving the title of 'Sardar'?",
        options: [
          "Mahatma Gandhi",
          "Vallabhbhai Patel",
          "Jawaharlal Nehru",
          "Mahadev Desai"
        ],
        answer: 1
      },
      {
        question: "How many paint and pastel versions of \"The Scream\" is Norwegian painter Edvard Munch believed to have produced?",
        options: [
          "2",
          "3",
          "4",
          "1"
        ],
        answer: 2
      },
      {
        question: "Which of these anatomical terms refers to the tail end of the creature?",
        options: [
          "Coronal",
          "Ventral",
          "Caudal",
          "Proximal"
        ],
        answer: 2
      },
      {
        question: "From 1940 to 1942, what was the capital-in-exile of Free France ?",
        options: [
          "Tunis",
          "Algiers",
          "Paris",
          "Brazzaville"
        ],
        answer: 3
      },
      {
        question: "Which of the following chemicals are found in eggplant seeds?",
        options: [
          "Psilocybin",
          "Cyanide",
          "Mescaline",
          "Nicotine"
        ],
        answer: 3
      },
      {
        question: "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
        options: [
          "Harold",
          "James",
          "Christopher",
          "Oswald"
        ],
        answer: 3
      },
      {
        question: "\"Silhouette\", a song performed by the group 'KANA-BOON' is featured as the sixteenth opening of which anime?",
        options: [
          "One Piece",
          "Naruto",
          "Gurren Lagann",
          "Naruto: Shippūden"
        ],
        answer: 3
      },
      {
        question: "In linguistics, which of the following is not one of the Gricean Maxims under the Cooperative Principal?",
        options: [
          "Quality",
          "Length",
          "Relation",
          "Manner"
        ],
        answer: 1
      },
      {
        question: "What is the airspeed velocity of an unladen swallow?",
        options: [
          "200 MPH",
          "24 MPH",
          "20 MPH",
          "15 MPH"
        ],
        answer: 1
      },
      {
        question: "What age was King Henry V when he died?",
        options: [
          "62",
          "73",
          "87",
          "35"
        ],
        answer: 3
      },
      {
        question: "On the Beaufort Scale of wind force, what wind name is given to number 8?",
        options: [
          "Hurricane",
          "Storm",
          "Gale",
          "Breeze"
        ],
        answer: 2
      },
      {
        question: "What is the name for the auditory illusion of a note that seems to be rising infinitely?",
        options: [
          "Glissandro Illusion",
          "McGurck Effect",
          "Fransen Effect",
          "Shepard Tone"
        ],
        answer: 3
      },
      {
        question: "Which animation studio produced \"Sword Art Online\"?",
        options: [
          "A-1 Pictures",
          "Kyoto Animation",
          "Production I.G",
          "Silver Link"
        ],
        answer: 0
      },
      {
        question: "Which Irish village in County Mayo built a tourism industry on the back of an alleged appearance by the Virgin Mary in 1879?",
        options: [
          "Knock",
          "Swinford",
          "Turlough",
          "Ballycastle"
        ],
        answer: 0
      },
      {
        question: "The main objective of the German operation \"Case Blue\" during World War II was originally to capture what?",
        options: [
          "Caucasus",
          "Stalingrad",
          "Crimea",
          "Voronezh"
        ],
        answer: 0
      },
      {
        question: "The Arab Spring was a series of protests and rebellions that began in which of these Arab nations?",
        options: [
          "Egypt",
          "Syria",
          "Tunisia",
          "Morocco"
        ],
        answer: 2
      },
      {
        question: "What did Albert Einstein win the Nobel Prize for in 1921?",
        options: [
          "Photoelectric Effect",
          "Wave-Particle Duality",
          "Relativity",
          "Zero-Point Energy"
        ],
        answer: 0
      },
      {
        question: "Where is the Gluteus Maximus muscle located?",
        options: [
          "Arm",
          "Torso",
          "Butt",
          "Head"
        ],
        answer: 2
      },
      {
        question: "Toussaint Louverture led a successful slave revolt in which country?",
        options: [
          "Cuba",
          "Haiti",
          "France",
          "United States"
        ],
        answer: 1
      },
      {
        question: "Which of the following United States Presidents served the shortest term in office?",
        options: [
          "James A. Garfield",
          "William Henry Harrison",
          "Warren G. Harding",
          "Zachary Taylor"
        ],
        answer: 1
      },
      {
        question: "What type of creature is a Bonobo?",
        options: [
          "Parrot",
          "Lion",
          "Wildcat",
          "Ape"
        ],
        answer: 3
      },
      {
        question: "What scientific suborder does the family Hyaenidae belong to?",
        options: [
          "Haplorhini",
          "Ciconiiformes",
          "Feliformia",
          "Caniformia"
        ],
        answer: 2
      },
      {
        question: "The Western Lowland Gorilla is scientifically know as?",
        options: [
          "Gorilla Beringei Graueri",
          "Gorilla Gorilla Diehli",
          "Gorilla Gorilla Gorilla",
          "Gorilla Beringei Beringei"
        ],
        answer: 2
      },
      {
        question: "What year did the effort to deploy the Common Core State Standards (CCSS) in the US begin?",
        options: [
          "2012",
          "2009",
          "1997",
          "2006"
        ],
        answer: 1
      },
      {
        question: "What was Maggie Simpson's first canonical word, not including the Tracey Ullman shorts?",
        options: [
          "Sequel?",
          "Daddy.",
          "Ja!",
          "Rusty!"
        ],
        answer: 1
      },
      {
        question: "What year did Albrecht Dürer create the painting \"The Young Hare\"?",
        options: [
          "1502",
          "1602",
          "1702",
          "1402"
        ],
        answer: 0
      },
      {
        question: "In the web-comic Homestuck, what is the name of the game the 4 kids play?",
        options: [
          "Sburb",
          "Husslie",
          "Homesick",
          "Hiveswap"
        ],
        answer: 0
      },
      {
        question: "Pianist Frédéric Chopin was a composer of which musical era?",
        options: [
          "Romantic",
          "Baroque",
          "Renaissance",
          "Classic"
        ],
        answer: 0
      },
      {
        question: "In the anime, Full Metal Panic!, who is Kaname's best friend?",
        options: [
          "Teletha \"Tessa\" Testarossa",
          "Melissa Mao",
          "Kyoko Tokiwa",
          "Ren Mikihara"
        ],
        answer: 2
      },
      {
        question: "In the anime Initial D, how does Takumi Fujiwara describe a drift?",
        options: [
          "'. . . the front tires slide so the car won't face the inside'",
          "'. . . the wheels lose traction, making the car slide sideways'",
          "'. . . the car oversteers through a curve, causing it to turn faster'",
          "'. . . you turn a lot'"
        ],
        answer: 0
      },
      {
        question: "When was the Garfield comic first published?",
        options: [
          "1988",
          "1973",
          "1978",
          "1982"
        ],
        answer: 2
      },
      {
        question: "In \"One Piece\", who confirms the existence of the legendary treasure, One Piece?",
        options: [
          "Former Marine Fleet Admiral Sengoku",
          "Silvers Rayleigh",
          "Pirate King Gol D Roger",
          "Edward \"Whitebeard\" Newgate"
        ],
        answer: 3
      },
      {
        question: "Which of these positions did the astronomer and physicist Isaac Newton not hold?",
        options: [
          "Member of Parliament",
          "Warden of the Royal Mint",
          "Surveyor to the City of London",
          "Professor of Mathematics"
        ],
        answer: 2
      },
      {
        question: "After the 1516 Battle of Marj Dabiq, the Ottoman Empire took control of Jerusalem from which sultanate?",
        options: [
          "Ummayyad",
          "Mamluk",
          "Seljuq",
          "Ayyubid"
        ],
        answer: 1
      },
      {
        question: "Which one of these Swedish companies was founded in 1943?",
        options: [
          "IKEA",
          "Clas Ohlson",
          "Lindex",
          "H & M"
        ],
        answer: 0
      }
    ],
    16: [
      {
        question: "Which Mughal Emperor was exiled to Rangoon by the British after the Revolt of 1857?",
        options: [
          "Bahadur Shah Zafar",
          "Shah Alam II",
          "Akbar Shah II",
          "Farrukhsiyar"
        ],
        answer: 0
      },
      {
        question: "Which of the following Upanishads is the shortest, containing only 12 verses?",
        options: [
          "Katha Upanishad",
          "Isha Upanishad",
          "Mandukya Upanishad",
          "Kena Upanishad"
        ],
        answer: 2
      },
      {
        question: "Who was the first Indian woman President of the United Nations General Assembly?",
        options: [
          "Vijayalakshmi Pandit",
          "Sarojini Naidu",
          "Indira Gandhi",
          "Rajkumari Amrit Kaur"
        ],
        answer: 0
      },
      {
        question: "Which wife of Sage Gautama was turned into a stone and later freed by Lord Rama?",
        options: [
          "Arundhati",
          "Ahalya",
          "Maitreyi",
          "Anasuya"
        ],
        answer: 1
      },
      {
        question: "In the Mahabharata, who was the father of Kripacharya and Kripi?",
        options: [
          "Sage Sharadvan",
          "Sage Vyasa",
          "Sage Gautama",
          "Sage Bharadwaja"
        ],
        answer: 0
      },
      {
        question: "What was the name of the elephant of Lord Indra?",
        options: [
          "Gajendra",
          "Uchchaihshravas",
          "Airavana",
          "Airavata"
        ],
        answer: 3
      },
      {
        question: "Who was the Guru of the demons (Asuras)?",
        options: [
          "Shukracharya",
          "Durvasa",
          "Vashistha",
          "Brihaspati"
        ],
        answer: 0
      },
      {
        question: "Which bird tried to prevent Ravana from carrying away Sita and lost its life?",
        options: [
          "Garuda",
          "Sampati",
          "Hamsa",
          "Jatayu"
        ],
        answer: 3
      },
      {
        question: "Who was the father of Sage Vyasa?",
        options: [
          "Sage Vashistha",
          "Sage Satyavati",
          "Sage Parashara",
          "Sage Vishwamitra"
        ],
        answer: 2
      },
      {
        question: "Nidhogg is a mythical creature from what mythology?",
        options: [
          "Greek",
          "Norse",
          "Egyptian",
          "Hindu"
        ],
        answer: 1
      },
      {
        question: "Who was the first man to travel into outer space twice?",
        options: [
          "Vladimir Komarov",
          "Charles Conrad",
          "Gus Grissom",
          "Yuri Gagarin"
        ],
        answer: 2
      },
      {
        question: "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
        options: [
          "Bank of China",
          "OCBC",
          "HSBC",
          "Standard Chartered"
        ],
        answer: 1
      },
      {
        question: "Xanthophobia is the fear of what color?",
        options: [
          "Green",
          "Red",
          "Yellow",
          "Blue"
        ],
        answer: 2
      },
      {
        question: "What is the last line muttered in the anime film \"The End of Evangelion\"?",
        options: [
          "\"Nothing.\"",
          "\"Goddammit, Shinji.\"",
          "\"Idiot, I won't let you kill me!\"",
          "\"How disgusting.\""
        ],
        answer: 3
      },
      {
        question: "\"Nephelococcygia\" is the practice of doing what?",
        options: [
          "Sleeping with your eyes open",
          "Swimming in freezing water",
          "Breaking glass with your voice",
          "Finding shapes in clouds"
        ],
        answer: 3
      },
      {
        question: "In Norse mythology, what is the name of the serpent which eats the roots of the ash tree Yggdrasil?",
        options: [
          "Bragi",
          "Nidhogg",
          "Odin",
          "Ymir"
        ],
        answer: 1
      },
      {
        question: "If you planted the seeds of Quercus robur, what would grow?",
        options: [
          "Trees",
          "Grains",
          "Flowers",
          "Vegetables"
        ],
        answer: 0
      },
      {
        question: "What is the standard SI unit for luminous intensity?",
        options: [
          "Lumen",
          "Faraday",
          "Coulomb",
          "Candela"
        ],
        answer: 3
      },
      {
        question: "Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?",
        options: [
          "Hiccup",
          "Cough",
          "Sneeze",
          "Yawn"
        ],
        answer: 2
      },
      {
        question: "In the \"Star Wars\" universe, what species is Grand Admiral Thrawn?",
        options: [
          "Pantorans",
          "Gungans",
          "Chiss",
          "Twi'lek"
        ],
        answer: 2
      },
      {
        question: "How many sonatas did Ludwig van Beethoven write?",
        options: [
          "31",
          "32",
          "50",
          "21"
        ],
        answer: 1
      },
      {
        question: "In \"Hunter x Hunter\", which of the following is NOT a type of Nen aura?",
        options: [
          "Restoration",
          "Transmutation",
          "Emission",
          "Specialization"
        ],
        answer: 0
      },
      {
        question: "What was the original name of New York City?",
        options: [
          "New Rome",
          "New Paris",
          "New Amsterdam",
          "New London"
        ],
        answer: 2
      },
      {
        question: "What is centralism?",
        options: [
          "Conforming to one single common political agenda.",
          "The grey area in the spectrum of political left and right.",
          "Remaining politically neutral.",
          " Concentration of power and authority in a central organization."
        ],
        answer: 3
      },
      {
        question: "What was Bank of America originally established as?",
        options: [
          "Bank of Long Island",
          "Bank of Charlotte",
          "Bank of Italy",
          "Bank of Pennsylvania"
        ],
        answer: 2
      },
      {
        question: "Who was the Author of the manga Uzumaki?",
        options: [
          "\tNoboru Takahashi",
          "Junji Ito",
          "Akira Toriyama",
          "Masashi Kishimoto"
        ],
        answer: 1
      },
      {
        question: "The \"To Love-Ru\" Manga was started in what year?",
        options: [
          "2004",
          "2006",
          "2005",
          "2007"
        ],
        answer: 1
      }
    ]
  },
  science: {
    1: [
      {
        question: "Which planet in our solar system is known as the 'Red Planet'?",
        options: [
          "Venus",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        answer: 1
      },
      {
        question: "What is the chemical formula for water?",
        options: [
          "CO2",
          "O2",
          "H2O",
          "NaCl"
        ],
        answer: 2
      },
      {
        question: "Which of these is NOT a state of matter?",
        options: [
          "Solid",
          "Liquid",
          "Gas",
          "Energy"
        ],
        answer: 3
      },
      {
        question: "When was the iPhone released?",
        options: [
          "2004",
          "2005",
          "2007",
          "2006"
        ],
        answer: 2
      },
      {
        question: "What is the correct order of operations for solving equations?",
        options: [
          "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
          "The order in which the operations are written.",
          "Parentheses, Exponents, Addition, Substraction, Multiplication, Division",
          "Addition, Multiplication, Division, Subtraction, Addition, Parentheses"
        ],
        answer: 0
      },
      {
        question: "What does LTS stand for in the software market?",
        options: [
          "Long Taco Service",
          "Long Term Support",
          "Ludicrous Transfer Speed",
          "Ludicrous Turbo Speed"
        ],
        answer: 1
      },
      {
        question: "How many bones are there in an adult human body?",
        options: [
          "208",
          "180",
          "206",
          "300"
        ],
        answer: 2
      },
      {
        question: "What is the normal body temperature of a healthy human in Fahrenheit?",
        options: [
          "97.6°F",
          "96.6°F",
          "99.6°F",
          "98.6°F"
        ],
        answer: 3
      },
      {
        question: "How many chambers are there in a human heart?",
        options: [
          "2",
          "3",
          "4",
          "6"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 57 + 35 = ?",
        options: [
          "90",
          "92",
          "93",
          "82"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 63 - 40 = ?",
        options: [
          "23",
          "22",
          "21",
          "28"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 18 + 13 = ?",
        options: [
          "30",
          "31",
          "21",
          "41"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 62 - 37 = ?",
        options: [
          "23",
          "26",
          "25",
          "20"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 72 - 35 = ?",
        options: [
          "38",
          "47",
          "37",
          "35"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 68 + 75 = ?",
        options: [
          "153",
          "143",
          "144",
          "142"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 46 - 38 = ?",
        options: [
          "6",
          "9",
          "8",
          "12"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 89 - 54 = ?",
        options: [
          "34",
          "33",
          "45",
          "35"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 77 - 67 = ?",
        options: [
          "10",
          "11",
          "9",
          "20"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 33 + 72 = ?",
        options: [
          "115",
          "105",
          "103",
          "106"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 93 - 81 = ?",
        options: [
          "2",
          "10",
          "12",
          "13"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 66 + 78 = ?",
        options: [
          "134",
          "142",
          "144",
          "145"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 35 + 79 = ?",
        options: [
          "104",
          "114",
          "115",
          "113"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 63 + 22 = ?",
        options: [
          "84",
          "83",
          "85",
          "75"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 33 - 18 = ?",
        options: [
          "25",
          "12",
          "15",
          "16"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 92 - 55 = ?",
        options: [
          "37",
          "36",
          "39",
          "32"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 17 + 23 = ?",
        options: [
          "50",
          "40",
          "39",
          "42"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 18 + 58 = ?",
        options: [
          "78",
          "71",
          "75",
          "76"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 43 - 24 = ?",
        options: [
          "14",
          "9",
          "19",
          "21"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 28 + 25 = ?",
        options: [
          "55",
          "53",
          "51",
          "54"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 54 + 97 = ?",
        options: [
          "152",
          "151",
          "153",
          "150"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 56 + 11 = ?",
        options: [
          "57",
          "68",
          "67",
          "65"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 81 + 73 = ?",
        options: [
          "154",
          "155",
          "164",
          "156"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 87 + 13 = ?",
        options: [
          "99",
          "98",
          "95",
          "100"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 80 - 77 = ?",
        options: [
          "7",
          "3",
          "1",
          "2"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 61 - 50 = ?",
        options: [
          "9",
          "1",
          "11",
          "21"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 58 - 16 = ?",
        options: [
          "43",
          "52",
          "44",
          "42"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 64 - 28 = ?",
        options: [
          "26",
          "34",
          "36",
          "37"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 97 - 25 = ?",
        options: [
          "73",
          "72",
          "77",
          "74"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 22 - 13 = ?",
        options: [
          "7",
          "9",
          "10",
          "8"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 58 - 40 = ?",
        options: [
          "18",
          "19",
          "16",
          "8"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 41 - 21 = ?",
        options: [
          "18",
          "10",
          "20",
          "30"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 99 + 81 = ?",
        options: [
          "179",
          "180",
          "190",
          "170"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 44 + 63 = ?",
        options: [
          "106",
          "110",
          "107",
          "102"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 97 + 47 = ?",
        options: [
          "145",
          "148",
          "142",
          "144"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 21 + 86 = ?",
        options: [
          "107",
          "97",
          "105",
          "106"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 74 + 57 = ?",
        options: [
          "133",
          "141",
          "132",
          "131"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 33 - 19 = ?",
        options: [
          "4",
          "13",
          "24",
          "14"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 83 + 61 = ?",
        options: [
          "154",
          "146",
          "144",
          "145"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 69 + 73 = ?",
        options: [
          "141",
          "142",
          "152",
          "138"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 50 + 45 = ?",
        options: [
          "105",
          "97",
          "95",
          "94"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 26 - 10 = ?",
        options: [
          "17",
          "16",
          "13",
          "19"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 36 - 26 = ?",
        options: [
          "10",
          "8",
          "11",
          "12"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 44 + 76 = ?",
        options: [
          "119",
          "121",
          "120",
          "130"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 57 + 51 = ?",
        options: [
          "98",
          "108",
          "107",
          "106"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 82 + 36 = ?",
        options: [
          "117",
          "120",
          "118",
          "128"
        ],
        answer: 2
      },
      {
        question: "Which gaming console is developed by Sony?",
        options: [
          "Xbox",
          "Nintendo Switch",
          "PlayStation",
          "Atari"
        ],
        answer: 2
      },
      {
        question: "On Twitter, what was the original character limit for a Tweet?",
        options: [
          "140",
          "120",
          "100",
          "160"
        ],
        answer: 0
      },
      {
        question: "What is the commonly used keyboard shortcut for the 'Copy' function on Windows OS?",
        options: [
          "Alt + X",
          "Ctrl + C",
          "Ctrl + X",
          "Alt + C"
        ],
        answer: 1
      },
      {
        question: "Color model CMYK stands for?",
        options: [
          "Cyan, Magenta, Yellow, and Khaki",
          "Cream, Maroon, Yellow, and Black",
          "Cream, Maroon, Yellow, and Khaki",
          "Cyan, Magenta, Yellow, and Black"
        ],
        answer: 3
      }
    ],
    2: [
      {
        question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
        options: [
          "Oxygen",
          "Nitrogen",
          "Carbon Dioxide",
          "Hydrogen"
        ],
        answer: 2
      },
      {
        question: "Which force pulls objects toward the center of the Earth?",
        options: [
          "Magnetic Force",
          "Friction",
          "Gravity",
          "Centrifugal Force"
        ],
        answer: 2
      },
      {
        question: "How many bones are there in an adult human skeleton?",
        options: [
          "180",
          "206",
          "214",
          "300"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Hydrogen?",
        options: [
          "S",
          "H",
          "Al",
          "Ca"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Helium?",
        options: [
          "Ca",
          "He",
          "Fe",
          "N"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Lithium?",
        options: [
          "C",
          "Zn",
          "Li",
          "S"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Beryllium?",
        options: [
          "Be",
          "H",
          "Mg",
          "C"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Boron?",
        options: [
          "Cl",
          "O",
          "Hg",
          "B"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Carbon?",
        options: [
          "C",
          "N",
          "Pb",
          "Cu"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Nitrogen?",
        options: [
          "N",
          "Hg",
          "F",
          "Fe"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Oxygen?",
        options: [
          "N",
          "C",
          "O",
          "Cu"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Fluorine?",
        options: [
          "Mg",
          "Al",
          "F",
          "B"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Neon?",
        options: [
          "Ne",
          "S",
          "Be",
          "Ca"
        ],
        answer: 0
      },
      {
        question: "What prime number comes next after 19?",
        options: [
          "23",
          "27",
          "25",
          "21"
        ],
        answer: 0
      },
      {
        question: "Which is the largest organ in the human body?",
        options: [
          "Skin",
          "Brain",
          "Lungs",
          "Liver"
        ],
        answer: 0
      },
      {
        question: "Which blood cells are responsible for fighting infections?",
        options: [
          "Red Blood Cells",
          "Plasma",
          "White Blood Cells",
          "Platelets"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 78 - 34 = ?",
        options: [
          "48",
          "46",
          "44",
          "42"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 66 - 61 = ?",
        options: [
          "1",
          "3",
          "5",
          "7"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 34 - 10 = ?",
        options: [
          "22",
          "24",
          "25",
          "26"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 98 + 10 = ?",
        options: [
          "107",
          "98",
          "108",
          "109"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 62 - 48 = ?",
        options: [
          "12",
          "4",
          "16",
          "14"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 5 * 9 = ?",
        options: [
          "45",
          "55",
          "46",
          "47"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 47 - 21 = ?",
        options: [
          "27",
          "24",
          "28",
          "26"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 7 * 3 = ?",
        options: [
          "21",
          "31",
          "11",
          "20"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 38 + 10 = ?",
        options: [
          "48",
          "47",
          "46",
          "49"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 73 + 26 = ?",
        options: [
          "98",
          "109",
          "100",
          "99"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 92 - 71 = ?",
        options: [
          "22",
          "31",
          "20",
          "21"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 6 * 7 = ?",
        options: [
          "52",
          "37",
          "45",
          "42"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 42 - 37 = ?",
        options: [
          "3",
          "15",
          "5",
          "6"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 93 - 46 = ?",
        options: [
          "45",
          "48",
          "49",
          "47"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 93 - 78 = ?",
        options: [
          "13",
          "16",
          "5",
          "15"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 61 - 25 = ?",
        options: [
          "34",
          "38",
          "36",
          "39"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 82 + 43 = ?",
        options: [
          "124",
          "127",
          "125",
          "115"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 45 - 16 = ?",
        options: [
          "27",
          "29",
          "19",
          "30"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 34 - 24 = ?",
        options: [
          "6",
          "10",
          "9",
          "12"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 66 - 25 = ?",
        options: [
          "39",
          "40",
          "41",
          "42"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 6 * 9 = ?",
        options: [
          "54",
          "44",
          "64",
          "53"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 50 + 46 = ?",
        options: [
          "95",
          "96",
          "86",
          "97"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 5 = ?",
        options: [
          "45",
          "35",
          "34",
          "37"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 10 = ?",
        options: [
          "30",
          "31",
          "20",
          "40"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 78 - 70 = ?",
        options: [
          "7",
          "8",
          "10",
          "3"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 4 = ?",
        options: [
          "28",
          "24",
          "20",
          "26"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 56 + 28 = ?",
        options: [
          "74",
          "83",
          "86",
          "84"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 94 - 30 = ?",
        options: [
          "54",
          "62",
          "63",
          "64"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 12 * 12 = ?",
        options: [
          "145",
          "144",
          "142",
          "154"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 23 + 75 = ?",
        options: [
          "100",
          "98",
          "108",
          "99"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 12 = ?",
        options: [
          "84",
          "82",
          "85",
          "86"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 28 + 66 = ?",
        options: [
          "94",
          "84",
          "104",
          "95"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 57 - 25 = ?",
        options: [
          "35",
          "31",
          "32",
          "28"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 73 + 17 = ?",
        options: [
          "100",
          "88",
          "90",
          "91"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 99 - 13 = ?",
        options: [
          "86",
          "81",
          "84",
          "87"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 32 - 17 = ?",
        options: [
          "17",
          "5",
          "15",
          "14"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 34 - 27 = ?",
        options: [
          "17",
          "5",
          "7",
          "9"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 3 * 5 = ?",
        options: [
          "14",
          "16",
          "18",
          "15"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 97 - 62 = ?",
        options: [
          "35",
          "45",
          "33",
          "25"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 81 + 74 = ?",
        options: [
          "156",
          "153",
          "145",
          "155"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 56 + 87 = ?",
        options: [
          "142",
          "143",
          "153",
          "145"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 67 - 40 = ?",
        options: [
          "27",
          "25",
          "29",
          "26"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 47 + 84 = ?",
        options: [
          "129",
          "133",
          "131",
          "121"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 99 - 79 = ?",
        options: [
          "21",
          "19",
          "18",
          "20"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 62 - 19 = ?",
        options: [
          "46",
          "42",
          "45",
          "43"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 21 - 16 = ?",
        options: [
          "15",
          "5",
          "3",
          "6"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 92 + 88 = ?",
        options: [
          "179",
          "190",
          "180",
          "170"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 41 + 50 = ?",
        options: [
          "91",
          "93",
          "94",
          "90"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 55 + 10 = ?",
        options: [
          "55",
          "64",
          "69",
          "65"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 34 + 14 = ?",
        options: [
          "46",
          "48",
          "47",
          "49"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 92 + 87 = ?",
        options: [
          "189",
          "180",
          "169",
          "179"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 9 = ?",
        options: [
          "72",
          "82",
          "74",
          "70"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 46 - 24 = ?",
        options: [
          "32",
          "18",
          "22",
          "23"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 45 + 26 = ?",
        options: [
          "81",
          "61",
          "71",
          "72"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 11 * 12 = ?",
        options: [
          "130",
          "133",
          "132",
          "122"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 96 - 87 = ?",
        options: [
          "13",
          "9",
          "12",
          "8"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 44 - 26 = ?",
        options: [
          "18",
          "16",
          "20",
          "14"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 5 * 8 = ?",
        options: [
          "38",
          "40",
          "50",
          "41"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 4 = ?",
        options: [
          "30",
          "28",
          "27",
          "18"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 8 * 5 = ?",
        options: [
          "42",
          "38",
          "40",
          "30"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 69 + 66 = ?",
        options: [
          "145",
          "135",
          "134",
          "137"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 4 * 10 = ?",
        options: [
          "39",
          "37",
          "42",
          "40"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 82 + 27 = ?",
        options: [
          "107",
          "99",
          "108",
          "109"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 63 - 43 = ?",
        options: [
          "30",
          "18",
          "10",
          "20"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 5 * 6 = ?",
        options: [
          "29",
          "28",
          "30",
          "20"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 43 - 36 = ?",
        options: [
          "17",
          "6",
          "7",
          "5"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 46 - 35 = ?",
        options: [
          "1",
          "11",
          "13",
          "10"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 4 = ?",
        options: [
          "17",
          "10",
          "12",
          "22"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 11 * 7 = ?",
        options: [
          "78",
          "77",
          "67",
          "79"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 22 - 11 = ?",
        options: [
          "10",
          "21",
          "16",
          "11"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 49 - 12 = ?",
        options: [
          "33",
          "47",
          "37",
          "36"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 14 + 17 = ?",
        options: [
          "21",
          "32",
          "29",
          "31"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 85 - 53 = ?",
        options: [
          "33",
          "42",
          "22",
          "32"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 19 + 62 = ?",
        options: [
          "82",
          "81",
          "83",
          "91"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 92 - 18 = ?",
        options: [
          "84",
          "74",
          "72",
          "64"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 94 + 89 = ?",
        options: [
          "184",
          "173",
          "185",
          "183"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 38 - 16 = ?",
        options: [
          "23",
          "32",
          "24",
          "22"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 23 + 92 = ?",
        options: [
          "114",
          "117",
          "115",
          "105"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 78 - 48 = ?",
        options: [
          "20",
          "30",
          "32",
          "29"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 11 = ?",
        options: [
          "65",
          "66",
          "68",
          "76"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 6 = ?",
        options: [
          "26",
          "37",
          "36",
          "34"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 94 - 63 = ?",
        options: [
          "29",
          "41",
          "31",
          "33"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 4 * 3 = ?",
        options: [
          "14",
          "10",
          "22",
          "12"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 54 + 76 = ?",
        options: [
          "132",
          "128",
          "130",
          "140"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 5 * 4 = ?",
        options: [
          "20",
          "18",
          "23",
          "10"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 99 + 35 = ?",
        options: [
          "136",
          "134",
          "124",
          "133"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 86 - 39 = ?",
        options: [
          "37",
          "47",
          "48",
          "57"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 73 + 22 = ?",
        options: [
          "95",
          "90",
          "94",
          "93"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 39 - 13 = ?",
        options: [
          "26",
          "16",
          "27",
          "24"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 57 - 16 = ?",
        options: [
          "31",
          "42",
          "41",
          "51"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 5 * 7 = ?",
        options: [
          "45",
          "37",
          "35",
          "25"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 75 - 24 = ?",
        options: [
          "54",
          "51",
          "53",
          "41"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 12 * 3 = ?",
        options: [
          "46",
          "33",
          "37",
          "36"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 3 = ?",
        options: [
          "24",
          "23",
          "14",
          "25"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 52 - 23 = ?",
        options: [
          "30",
          "28",
          "27",
          "29"
        ],
        answer: 3
      },
      {
        question: "What does GHz stand for?",
        options: [
          "Gigahotz",
          "Gigahatz",
          "Gigahetz",
          "Gigahertz"
        ],
        answer: 3
      },
      {
        question: "How many sides does a heptagon have?",
        options: [
          "7",
          "5",
          "6",
          "8"
        ],
        answer: 0
      },
      {
        question: "Which of the following is not a type of computer mouse?",
        options: [
          "Trackball mouse",
          "Drum mouse",
          "Smoothie mouse",
          "Optical mouse"
        ],
        answer: 2
      },
      {
        question: "Which SQL keyword is used to fetch data from a database?",
        options: [
          "SELECT",
          "EXEC",
          "VALUES",
          "INDEX"
        ],
        answer: 0
      },
      {
        question: "What's the square root of 49?",
        options: [
          "12",
          "4",
          "7",
          "9"
        ],
        answer: 2
      }
    ],
    3: [
      {
        question: "What is the closest star to the Earth?",
        options: [
          "Sirius",
          "Proxima Centauri",
          "The Sun",
          "Betelgeuse"
        ],
        answer: 2
      },
      {
        question: "Which of these is the hardest natural substance on Earth?",
        options: [
          "Gold",
          "Iron",
          "Diamond",
          "Quartz"
        ],
        answer: 2
      },
      {
        question: "Which organ in the human body filters waste from the blood?",
        options: [
          "Liver",
          "Lungs",
          "Kidneys",
          "Stomach"
        ],
        answer: 2
      },
      {
        question: "What comes after a Million, a Billion, and a Trillion?",
        options: [
          "Septillion",
          "Quadrillion",
          "Sextillion",
          "Quintillion"
        ],
        answer: 1
      },
      {
        question: "What is the SI unit for resistance?",
        options: [
          "Ohms",
          "Siemens",
          "Ampheres",
          "Volts"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula or name representing the compound 'Laughing Gas'?",
        options: [
          "Nitrous Oxide",
          "Nitrogen Dioxide",
          "Sulfur Dioxide",
          "Nitric Oxide"
        ],
        answer: 0
      },
      {
        question: "Which is the smallest bone in the human body?",
        options: [
          "Clavicle",
          "Femur",
          "Stapes (Ear bone)",
          "Patella"
        ],
        answer: 2
      },
      {
        question: "What is the main pigment that gives human skin and hair its color?",
        options: [
          "Melanin",
          "Chlorophyll",
          "Carotene",
          "Hemoglobin"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 4 * 7 = ?",
        options: [
          "28",
          "33",
          "26",
          "38"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 11 * 8 = ?",
        options: [
          "84",
          "89",
          "88",
          "87"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 9 * 6 = ?",
        options: [
          "54",
          "53",
          "52",
          "56"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 11 * 4 = ?",
        options: [
          "54",
          "34",
          "42",
          "44"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 12 * 6 = ?",
        options: [
          "71",
          "82",
          "72",
          "74"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 38 + 44 = ?",
        options: [
          "80",
          "82",
          "83",
          "92"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 11 * 9 = ?",
        options: [
          "101",
          "97",
          "98",
          "99"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 10 = ?",
        options: [
          "75",
          "70",
          "82",
          "80"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 11 = ?",
        options: [
          "78",
          "87",
          "88",
          "91"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 46 - 16 = ?",
        options: [
          "40",
          "29",
          "20",
          "30"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 34 + 47 = ?",
        options: [
          "80",
          "81",
          "82",
          "76"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 76 - 63 = ?",
        options: [
          "12",
          "13",
          "11",
          "15"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 96 - 70 = ?",
        options: [
          "25",
          "24",
          "28",
          "26"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 45 - 13 = ?",
        options: [
          "30",
          "31",
          "32",
          "33"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 12 * 8 = ?",
        options: [
          "95",
          "96",
          "94",
          "97"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 5 * 11 = ?",
        options: [
          "55",
          "57",
          "60",
          "45"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 7 * 11 = ?",
        options: [
          "79",
          "75",
          "78",
          "77"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 44 + 18 = ?",
        options: [
          "72",
          "61",
          "62",
          "52"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 47 + 74 = ?",
        options: [
          "123",
          "122",
          "119",
          "121"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 7 * 9 = ?",
        options: [
          "64",
          "63",
          "61",
          "62"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 58 + 64 = ?",
        options: [
          "132",
          "122",
          "123",
          "124"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 34 - 33 = ?",
        options: [
          "2",
          "5",
          "3",
          "1"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 77 - 27 = ?",
        options: [
          "51",
          "49",
          "50",
          "60"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 30 - 29 = ?",
        options: [
          "1",
          "5",
          "11",
          "3"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 64 + 27 = ?",
        options: [
          "91",
          "81",
          "90",
          "88"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 39 + 59 = ?",
        options: [
          "99",
          "96",
          "97",
          "98"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 33 - 21 = ?",
        options: [
          "13",
          "2",
          "12",
          "14"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 27 - 21 = ?",
        options: [
          "4",
          "6",
          "7",
          "1"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 55 - 23 = ?",
        options: [
          "31",
          "30",
          "37",
          "32"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 95 - 31 = ?",
        options: [
          "64",
          "62",
          "68",
          "54"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 34 - 22 = ?",
        options: [
          "11",
          "2",
          "13",
          "12"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 10 * 5 = ?",
        options: [
          "60",
          "51",
          "49",
          "50"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 10 * 10 = ?",
        options: [
          "100",
          "95",
          "102",
          "90"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 10 * 3 = ?",
        options: [
          "31",
          "30",
          "29",
          "40"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 85 - 56 = ?",
        options: [
          "28",
          "29",
          "39",
          "30"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 53 - 42 = ?",
        options: [
          "12",
          "21",
          "1",
          "11"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 22 + 42 = ?",
        options: [
          "65",
          "64",
          "62",
          "54"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 89 - 67 = ?",
        options: [
          "20",
          "32",
          "22",
          "19"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 58 + 45 = ?",
        options: [
          "101",
          "103",
          "102",
          "113"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 59 + 27 = ?",
        options: [
          "84",
          "85",
          "86",
          "76"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 70 + 86 = ?",
        options: [
          "157",
          "166",
          "156",
          "155"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 20 - 16 = ?",
        options: [
          "6",
          "5",
          "2",
          "4"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 67 - 27 = ?",
        options: [
          "50",
          "38",
          "40",
          "39"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 89 + 61 = ?",
        options: [
          "150",
          "154",
          "152",
          "160"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 12 * 4 = ?",
        options: [
          "51",
          "50",
          "44",
          "48"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 33 + 69 = ?",
        options: [
          "102",
          "112",
          "92",
          "101"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 7 * 10 = ?",
        options: [
          "80",
          "68",
          "70",
          "60"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 34 + 64 = ?",
        options: [
          "100",
          "96",
          "98",
          "97"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 20 + 55 = ?",
        options: [
          "85",
          "65",
          "75",
          "73"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 37 + 33 = ?",
        options: [
          "68",
          "60",
          "70",
          "80"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 72 + 63 = ?",
        options: [
          "125",
          "136",
          "135",
          "134"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 39 - 21 = ?",
        options: [
          "8",
          "20",
          "18",
          "19"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 66 + 46 = ?",
        options: [
          "114",
          "110",
          "102",
          "112"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 24 - 18 = ?",
        options: [
          "6",
          "4",
          "5",
          "2"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 71 + 64 = ?",
        options: [
          "133",
          "135",
          "145",
          "134"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 37 + 13 = ?",
        options: [
          "50",
          "51",
          "48",
          "49"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 19 + 55 = ?",
        options: [
          "78",
          "84",
          "74",
          "76"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 26 - 19 = ?",
        options: [
          "5",
          "17",
          "9",
          "7"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 25 - 19 = ?",
        options: [
          "4",
          "6",
          "2",
          "16"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 42 - 27 = ?",
        options: [
          "14",
          "18",
          "13",
          "15"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 52 - 10 = ?",
        options: [
          "41",
          "43",
          "44",
          "42"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 9 * 7 = ?",
        options: [
          "64",
          "53",
          "63",
          "62"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 88 - 70 = ?",
        options: [
          "16",
          "18",
          "20",
          "17"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 27 - 24 = ?",
        options: [
          "5",
          "13",
          "3",
          "1"
        ],
        answer: 2
      },
      {
        question: "Who proved Fermat's Last Theorem?",
        options: [
          "Leonhard Euler",
          "Andrew Wiles",
          "Carl Friedrich Gauss",
          "Srinivasa Ramanujan"
        ],
        answer: 1
      },
      {
        question: "What is the name of a nine sided polygon?",
        options: [
          "Hexagon",
          "Heptagon",
          "Nonagon",
          "Octagon"
        ],
        answer: 2
      }
    ],
    4: [
      {
        question: "What is the boiling point of pure water at standard atmospheric pressure?",
        options: [
          "90 °C",
          "100 °C",
          "120 °C",
          "80 °C"
        ],
        answer: 1
      },
      {
        question: "Which instrument is used to measure body temperature?",
        options: [
          "Barometer",
          "Thermometer",
          "Lactometer",
          "Speedometer"
        ],
        answer: 1
      },
      {
        question: "Which blood cells are responsible for carrying oxygen throughout the body?",
        options: [
          "White Blood Cells",
          "Red Blood Cells",
          "Platelets",
          "Plasma"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Sodium?",
        options: [
          "Na",
          "Hg",
          "He",
          "H"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Magnesium?",
        options: [
          "C",
          "H",
          "Mg",
          "Pb"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Aluminum?",
        options: [
          "N",
          "Al",
          "Ca",
          "Cu"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Silicon?",
        options: [
          "Ag",
          "Si",
          "Be",
          "O"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Phosphorus?",
        options: [
          "O",
          "P",
          "Zn",
          "Si"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Sulfur?",
        options: [
          "S",
          "Ca",
          "O",
          "Ne"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Chlorine?",
        options: [
          "Ag",
          "Hg",
          "He",
          "Cl"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Argon?",
        options: [
          "He",
          "H",
          "Ar",
          "Pb"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Potassium?",
        options: [
          "Cl",
          "Ar",
          "Hg",
          "K"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Calcium?",
        options: [
          "Ca",
          "B",
          "P",
          "Li"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Iron?",
        options: [
          "Be",
          "B",
          "Fe",
          "Au"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Copper?",
        options: [
          "Si",
          "C",
          "S",
          "Cu"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Zinc?",
        options: [
          "Fe",
          "B",
          "S",
          "Zn"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Magnetic Flux?",
        options: [
          "Hertz",
          "Ohm",
          "Joule",
          "Weber"
        ],
        answer: 3
      },
      {
        question: "What is the chemical formula or name representing the compound 'Methane'?",
        options: [
          "NH3",
          "C2H6",
          "CH4",
          "CO2"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula or name representing the compound 'Hydrochloric Acid'?",
        options: [
          "NaCl",
          "HNO3",
          "H2SO4",
          "HCl"
        ],
        answer: 3
      },
      {
        question: "Which gas do humans inhale most from the air, by volume?",
        options: [
          "Carbon Dioxide",
          "Nitrogen",
          "Oxygen",
          "Argon"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 9 = ?",
        options: [
          "37",
          "26",
          "27",
          "17"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 10 * 7 = ?",
        options: [
          "66",
          "70",
          "80",
          "68"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 5 * 10 = ?",
        options: [
          "52",
          "40",
          "50",
          "49"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 3 * 7 = ?",
        options: [
          "11",
          "19",
          "21",
          "18"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 8 * 12 = ?",
        options: [
          "96",
          "94",
          "97",
          "98"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 9 * 12 = ?",
        options: [
          "108",
          "107",
          "110",
          "118"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 11 * 6 = ?",
        options: [
          "71",
          "56",
          "66",
          "67"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 4 * 4 = ?",
        options: [
          "16",
          "18",
          "6",
          "15"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 5 * 3 = ?",
        options: [
          "13",
          "25",
          "15",
          "17"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 10 * 12 = ?",
        options: [
          "120",
          "118",
          "122",
          "119"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 9 * 3 = ?",
        options: [
          "25",
          "27",
          "28",
          "26"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 5 = ?",
        options: [
          "28",
          "32",
          "30",
          "20"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 9 * 8 = ?",
        options: [
          "72",
          "73",
          "74",
          "62"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 7 * 6 = ?",
        options: [
          "32",
          "42",
          "43",
          "44"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 4 * 6 = ?",
        options: [
          "22",
          "24",
          "23",
          "25"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 4 * 5 = ?",
        options: [
          "20",
          "30",
          "10",
          "19"
        ],
        answer: 0
      },
      {
        question: "What does GPS stand for?",
        options: [
          "General Positioning System",
          "General Personal Satellite",
          "Global Positioning System",
          "Global Personal System"
        ],
        answer: 2
      },
      {
        question: "What is the mathematician Euler's first name?",
        options: [
          "Leonhard",
          "Ajan",
          "Andrin",
          "Lionel"
        ],
        answer: 0
      },
      {
        question: "How many degrees make a full circle?",
        options: [
          "720",
          "180",
          "360",
          "90"
        ],
        answer: 2
      }
    ],
    5: [
      {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: [
          "Oxygen",
          "Carbon Dioxide",
          "Nitrogen",
          "Argon"
        ],
        answer: 2
      },
      {
        question: "Deficiency of Vitamin A in human diet leads to which disease?",
        options: [
          "Scurvy",
          "Rickets",
          "Night Blindness",
          "Beriberi"
        ],
        answer: 2
      },
      {
        question: "What is the process by which liquid water turns into gas?",
        options: [
          "Condensation",
          "Evaporation",
          "Sublimation",
          "Freezing"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Hydrogen?",
        options: [
          "15",
          "7",
          "1",
          "30"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Helium?",
        options: [
          "14",
          "16",
          "1",
          "2"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Lithium?",
        options: [
          "16",
          "3",
          "47",
          "1"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Beryllium?",
        options: [
          "4",
          "17",
          "11",
          "30"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Boron?",
        options: [
          "20",
          "14",
          "17",
          "5"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Carbon?",
        options: [
          "47",
          "6",
          "19",
          "30"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Nitrogen?",
        options: [
          "20",
          "7",
          "14",
          "13"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Oxygen?",
        options: [
          "13",
          "29",
          "8",
          "11"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Fluorine?",
        options: [
          "8",
          "6",
          "9",
          "1"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Neon?",
        options: [
          "13",
          "10",
          "5",
          "1"
        ],
        answer: 1
      },
      {
        question: "What language does Node.js use?",
        options: [
          "Joomla Source Code",
          "Java",
          "JavaScript",
          "Java Source"
        ],
        answer: 2
      },
      {
        question: "What is the symbol for Displacement?",
        options: [
          "r",
          "dr",
          "Dp",
          "Δr"
        ],
        answer: 3
      },
      {
        question: "What does the Prt Sc button do?",
        options: [
          "Nothing",
          "Saves a .png file of what's on the screen in your screenshots folder in photos",
          "Closes all windows",
          "Captures what's on the screen and copies it to your clipboard"
        ],
        answer: 3
      },
      {
        question: "In \"Hexadecimal\", what color would be displayed from the color code? \"#00FF00\"?",
        options: [
          "Yellow",
          "Green",
          "Red",
          "Blue"
        ],
        answer: 1
      },
      {
        question: "The C programming language was created by this American computer scientist.",
        options: [
          "al-Khwārizmī",
          "Tim Berners Lee",
          "Willis Ware",
          "Dennis Ritchie"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Atmospheric Pressure?",
        options: [
          "Candela",
          "Joule",
          "Weber",
          "Pascal"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Electric Current?",
        options: [
          "Ampere",
          "Candela",
          "Pascal",
          "Volt"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula or name representing the compound 'Water'?",
        options: [
          "CO2",
          "H2O",
          "NaCl",
          "H2O2"
        ],
        answer: 1
      },
      {
        question: "What is the chemical formula or name representing the compound 'Carbon Dioxide'?",
        options: [
          "CO2",
          "O2",
          "CH4",
          "CO"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula or name representing the compound 'Common Salt'?",
        options: [
          "KCl",
          "HCl",
          "NaOH",
          "NaCl"
        ],
        answer: 3
      },
      {
        question: "What is the chemical formula or name representing the compound 'Sulfuric Acid'?",
        options: [
          "HCl",
          "H2SO3",
          "HNO3",
          "H2SO4"
        ],
        answer: 3
      },
      {
        question: "Which programming language shares its name with an island in Indonesia?",
        options: [
          "Python",
          "Java",
          "C",
          "Jakarta"
        ],
        answer: 1
      },
      {
        question: "The programming language 'Swift' was created to replace what other programming language?",
        options: [
          "C++",
          "C#",
          "Objective-C",
          "Ruby"
        ],
        answer: 2
      }
    ],
    6: [
      {
        question: "Which scientist proposed the Theory of Relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Stephen Hawking",
          "Niels Bohr"
        ],
        answer: 1
      },
      {
        question: "What is the primary source of energy for all living organisms on Earth?",
        options: [
          "The Earth's Core",
          "The Oceans",
          "The Sun",
          "Volcanoes"
        ],
        answer: 2
      },
      {
        question: "Which of the following is a non-metal that remains liquid at room temperature?",
        options: [
          "Mercury",
          "Bromine",
          "Gallium",
          "Chlorine"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Silver?",
        options: [
          "Hg",
          "Ag",
          "K",
          "Li"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Gold?",
        options: [
          "Li",
          "S",
          "Au",
          "F"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Mercury?",
        options: [
          "Cl",
          "Li",
          "Hg",
          "Pb"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Lead?",
        options: [
          "Be",
          "Pb",
          "He",
          "P"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Uranium?",
        options: [
          "U",
          "O",
          "S",
          "Si"
        ],
        answer: 0
      },
      {
        question: "What was the name of the image that features as the default background wallpaper for Windows XP?",
        options: [
          "Azul",
          "Bliss",
          "Tulips",
          "Red moon desert"
        ],
        answer: 1
      },
      {
        question: "While Apple was formed in California, in which western state was Microsoft founded?",
        options: [
          "Washington",
          "New Mexico",
          "Colorado",
          "Arizona"
        ],
        answer: 1
      },
      {
        question: "What is the SI unit of measurement for Energy?",
        options: [
          "Ampere",
          "Hertz",
          "Pascal",
          "Joule"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Luminous Intensity?",
        options: [
          "Pascal",
          "Volt",
          "Candela",
          "Hertz"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula or name representing the compound 'Dry Ice'?",
        options: [
          "Solid Methane",
          "Water Ice",
          "Liquid Nitrogen",
          "Solid Carbon Dioxide"
        ],
        answer: 3
      },
      {
        question: "What is the chemical formula or name representing the compound 'Baking Soda'?",
        options: [
          "Sodium Bicarbonate",
          "Sodium Chloride",
          "Sodium Hydroxide",
          "Sodium Carbonate"
        ],
        answer: 0
      },
      {
        question: "What was the first Android version specifically optimized for tablets?",
        options: [
          "Froyo",
          "Eclair",
          "Honeycomb",
          "Marshmellow"
        ],
        answer: 2
      },
      {
        question: "What was the first Infinity Coaster in the world and where is it located?",
        options: [
          "Gold Rush, Slagharen, Netherlands ",
          "The Smiler, Alton Towers, UK",
          "Madagascar Mad Pursuit, Motiongate Dubai, UAE",
          "Monster, Adventureland Altoona, USA"
        ],
        answer: 1
      }
    ],
    7: [
      {
        question: "What is the chemical symbol for Gold?",
        options: [
          "Ag",
          "Au",
          "Fe",
          "Gd"
        ],
        answer: 1
      },
      {
        question: "Which planet is the largest in our solar system?",
        options: [
          "Saturn",
          "Neptune",
          "Jupiter",
          "Uranus"
        ],
        answer: 2
      },
      {
        question: "Which acid is present in lemons, giving them a sour taste?",
        options: [
          "Lactic Acid",
          "Citric Acid",
          "Acetic Acid",
          "Hydrochloric Acid"
        ],
        answer: 1
      },
      {
        question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
        options: [
          "?:",
          "?",
          "if then",
          "??"
        ],
        answer: 0
      },
      {
        question: "What is the SI unit of measurement for Force?",
        options: [
          "Weber",
          "Hertz",
          "Ohm",
          "Newton"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Power?",
        options: [
          "Watt",
          "Pascal",
          "Candela",
          "Hertz"
        ],
        answer: 0
      },
      {
        question: "What is the SI unit of measurement for Electric Resistance?",
        options: [
          "Ampere",
          "Joule",
          "Watt",
          "Ohm"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Frequency?",
        options: [
          "Pascal",
          "Ampere",
          "Watt",
          "Hertz"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Electric Potential?",
        options: [
          "Newton",
          "Weber",
          "Volt",
          "Ampere"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula or name representing the compound 'Ammonia'?",
        options: [
          "NO2",
          "HNO3",
          "NH3",
          "N2H4"
        ],
        answer: 2
      },
      {
        question: "Which programming language was developed by Sun Microsystems in 1995?",
        options: [
          "C++",
          "Java",
          "Solaris OS",
          "Python"
        ],
        answer: 1
      },
      {
        question: "What does RAID stand for?",
        options: [
          "Range of Applications with Identical Designs",
          "Rapid Access for Indexed Devices",
          "Randomized Abstract Identification Description",
          "Redundant Array of Independent Disks"
        ],
        answer: 3
      },
      {
        question: "In programming, what do you call functions with the same name but different implementations?",
        options: [
          "Overloading",
          "Abstracting",
          "Inheriting",
          "Overriding"
        ],
        answer: 0
      },
      {
        question: "What Greek letter is used to signify summation?",
        options: [
          "Delta",
          "Omega",
          "Alpha",
          "Sigma"
        ],
        answer: 3
      }
    ],
    8: [
      {
        question: "How many teeth does an adult human typically have?",
        options: [
          "28",
          "30",
          "32",
          "34"
        ],
        answer: 2
      },
      {
        question: "Which part of the cell is known as the 'powerhouse of the cell'?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Golgi Apparatus"
        ],
        answer: 1
      },
      {
        question: "What unit is used to measure electrical resistance?",
        options: [
          "Volt",
          "Ampere",
          "Ohm",
          "Watt"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Sodium?",
        options: [
          "30",
          "7",
          "11",
          "80"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Magnesium?",
        options: [
          "12",
          "13",
          "79",
          "82"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Aluminum?",
        options: [
          "92",
          "30",
          "9",
          "13"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Silicon?",
        options: [
          "14",
          "8",
          "6",
          "1"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Phosphorus?",
        options: [
          "7",
          "82",
          "15",
          "18"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Sulfur?",
        options: [
          "92",
          "17",
          "3",
          "16"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Chlorine?",
        options: [
          "17",
          "1",
          "47",
          "7"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Argon?",
        options: [
          "7",
          "13",
          "4",
          "18"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Potassium?",
        options: [
          "19",
          "14",
          "30",
          "26"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Calcium?",
        options: [
          "29",
          "11",
          "80",
          "20"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Iron?",
        options: [
          "15",
          "26",
          "17",
          "4"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Copper?",
        options: [
          "2",
          "29",
          "9",
          "11"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Zinc?",
        options: [
          "30",
          "18",
          "4",
          "17"
        ],
        answer: 0
      },
      {
        question: "What does \"LCD\" stand for?",
        options: [
          "Last Common Difference",
          "Long Continuous Design",
          "Liquid Crystal Display",
          "Language Control Design"
        ],
        answer: 2
      },
      {
        question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
        options: [
          "Zilog Z80",
          "Yamaha YM2612",
          "Motorola 68000",
          "Intel 8088"
        ],
        answer: 2
      },
      {
        question: "Which one of these is not an official development name for a Ubuntu release?",
        options: [
          "Wily Werewolf",
          "Mystic Mansion",
          "Trusty Tahr",
          "Utopic Unicorn"
        ],
        answer: 1
      },
      {
        question: "When did the online streaming service \"Mixer\" launch?",
        options: [
          "2009",
          "2013",
          "2016",
          "2011"
        ],
        answer: 2
      },
      {
        question: "Who patented a steam engine that produced continuous rotary motion?",
        options: [
          "Nikola Tesla",
          "Alessandro Volta",
          "Albert Einstein",
          "James Watt"
        ],
        answer: 3
      },
      {
        question: "Which internet company began life as an online bookstore called 'Cadabra'?",
        options: [
          "Overstock",
          "Shopify",
          "eBay",
          "Amazon"
        ],
        answer: 3
      }
    ],
    9: [
      {
        question: "What is the speed of light in vacuum (approximate)?",
        options: [
          "150,000 km/s",
          "300,000 km/s",
          "450,000 km/s",
          "600,000 km/s"
        ],
        answer: 1
      },
      {
        question: "Which part of the human eye is responsible for controlling the size of the pupil?",
        options: [
          "Retina",
          "Cornea",
          "Iris",
          "Lens"
        ],
        answer: 2
      },
      {
        question: "Which chemical element has the highest melting point?",
        options: [
          "Tungsten",
          "Carbon",
          "Platinum",
          "Titanium"
        ],
        answer: 0
      },
      {
        question: "Which of these probability distributions is NOT discrete?",
        options: [
          "Normal",
          "Hyper-geometric",
          "Poisson",
          "Binomial"
        ],
        answer: 0
      },
      {
        question: "What is the name of the default theme that is installed with Windows XP?",
        options: [
          "Neptune",
          "Luna",
          "Whistler",
          "Bliss"
        ],
        answer: 1
      },
      {
        question: "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
        options: [
          "Eight Years",
          "Four Years",
          "Two Years",
          "Year"
        ],
        answer: 3
      },
      {
        question: "Which mathematician refused the Fields Medal?",
        options: [
          "Terence Tao",
          "Andrew Wiles",
          "Grigori Perelman",
          "Edward Witten"
        ],
        answer: 2
      },
      {
        question: "Whistler was the codename of this Microsoft Operating System.",
        options: [
          "Windows 2000",
          "Windows 7",
          "Windows 95",
          "Windows XP"
        ],
        answer: 3
      },
      {
        question: "In computing terms, typically what does CLI stand for?",
        options: [
          "Common Language Interface",
          "Command Line Interface",
          "Control Line Interface",
          "Common Language Input"
        ],
        answer: 1
      },
      {
        question: "How many zeros are there in a googol?",
        options: [
          "10",
          "1,000",
          "100",
          "1,000,000"
        ],
        answer: 2
      },
      {
        question: "What was Bitcoin's block size limit in 2010?",
        options: [
          "1 MB",
          "1GB",
          "1 KB",
          "1 TB"
        ],
        answer: 0
      }
    ],
    10: [
      {
        question: "Who discovered Penicillin, the first effective antibiotic?",
        options: [
          "Louis Pasteur",
          "Alexander Fleming",
          "Robert Koch",
          "Edward Jenner"
        ],
        answer: 1
      },
      {
        question: "What is the chemical name for common table salt?",
        options: [
          "Sodium Bicarbonate",
          "Sodium Chloride",
          "Calcium Carbonate",
          "Potassium Hydroxide"
        ],
        answer: 1
      },
      {
        question: "What type of lens is used to correct short-sightedness (Myopia)?",
        options: [
          "Convex Lens",
          "Concave Lens",
          "Bifocal Lens",
          "Cylindrical Lens"
        ],
        answer: 1
      },
      {
        question: "What numbers are in the 5th row of Pascal's Triangle?",
        options: [
          "1 5 10 10 5 1",
          "1 3 3 1",
          "1 4 6 4 1",
          "1 6 15 20 15 6 1"
        ],
        answer: 2
      },
      {
        question: "Laserjet and inkjet printers are both examples of what type of printer?",
        options: [
          "Impact printer",
          "Daisywheel printer",
          "Non-impact printer",
          "Dot matrix printer"
        ],
        answer: 2
      },
      {
        question: "Which of the following dice is not a platonic solid?",
        options: [
          "10-sided die",
          "20-sided die",
          "8-sided die",
          "12-sided die"
        ],
        answer: 0
      },
      {
        question: "In a normal distribution, 95% of the data lies within how many standard deviations of the mean?",
        options: [
          "2",
          "4",
          "3",
          "1"
        ],
        answer: 0
      },
      {
        question: "What five letter word is the motto of the IBM Computer company?",
        options: [
          "Logic",
          "Think",
          "Click",
          "Pixel"
        ],
        answer: 1
      },
      {
        question: "What are the first 6 digits of the number \"Pi\"?",
        options: [
          "3.14169",
          "3.25812",
          "3.12423",
          "3.14159"
        ],
        answer: 3
      },
      {
        question: ".rs is the top-level domain for what country?",
        options: [
          "Russia",
          "Serbia",
          "Romania",
          "Rwanda"
        ],
        answer: 1
      }
    ],
    11: [
      {
        question: "Which subatomic particle has a negative electrical charge?",
        options: [
          "Proton",
          "Neutron",
          "Electron",
          "Positron"
        ],
        answer: 2
      },
      {
        question: "Which gas is used to inflate hot air balloons because it is lighter than air?",
        options: [
          "Helium",
          "Oxygen",
          "Carbon Dioxide",
          "Nitrogen"
        ],
        answer: 0
      },
      {
        question: "What is the name of the process where gas turns directly into solid without passing through the liquid phase?",
        options: [
          "Sublimation",
          "Deposition",
          "Condensation",
          "Evaporation"
        ],
        answer: 1
      },
      {
        question: "Which of the following is NOT a computer science algorithm?",
        options: [
          "Float Sort",
          "Bubble Sort",
          "Quick Sort",
          "Merge Sort"
        ],
        answer: 0
      },
      {
        question: "What is the derivative of Acceleration with respect to time?",
        options: [
          "Slide",
          "Jerk",
          "Shift",
          "Bump"
        ],
        answer: 1
      },
      {
        question: "Which of the following cellular device companies is NOT headquartered in Asia?",
        options: [
          "LG Electronics",
          "Nokia",
          "HTC",
          "Samsung"
        ],
        answer: 1
      },
      {
        question: "Who is the founder of Palantir?",
        options: [
          "Mark Zuckerberg",
          "Peter Thiel",
          "Jack Dorsey",
          "Marc Benioff"
        ],
        answer: 1
      },
      {
        question: "What port does HTTP run on?",
        options: [
          "80",
          "443",
          "53",
          "23"
        ],
        answer: 0
      },
      {
        question: "Who invented the \"Spanning Tree Protocol\"?",
        options: [
          "Michael Roberts",
          "Radia Perlman",
          "Paul Vixie",
          "Vint Cerf"
        ],
        answer: 1
      }
    ],
    12: [
      {
        question: "What type of mirror is used as a rear-view mirror in vehicles?",
        options: [
          "Plane Mirror",
          "Concave Mirror",
          "Convex Mirror",
          "Double-convex Mirror"
        ],
        answer: 2
      },
      {
        question: "Which endocrine gland is often referred to as the 'Master Gland' of the human body?",
        options: [
          "Thyroid Gland",
          "Adrenal Gland",
          "Pituitary Gland",
          "Pancreas"
        ],
        answer: 2
      },
      {
        question: "In thermodynamics, what is absolute zero temperature in Celsius?",
        options: [
          "0 °C",
          "-100 °C",
          "-273.15 °C",
          "-312.45 °C"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Silver?",
        options: [
          "20",
          "11",
          "47",
          "29"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Gold?",
        options: [
          "79",
          "13",
          "2",
          "10"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Mercury?",
        options: [
          "19",
          "8",
          "80",
          "12"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Lead?",
        options: [
          "13",
          "82",
          "8",
          "11"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Uranium?",
        options: [
          "4",
          "14",
          "92",
          "2"
        ],
        answer: 2
      },
      {
        question: "CMOS is tech used for constructing integrated circuits. What does CMOS stand for?",
        options: [
          "Computer-made operating system",
          "Complementary metal–oxide–semiconductor",
          "Computer-made oscillating static",
          "Complementary magnetic-ohms-semiconductor"
        ],
        answer: 1
      },
      {
        question: "Which of the following mathematicians made major contributions to game theory?",
        options: [
          "Carl Friedrich Gauss",
          "Stefan Banach",
          "Leonhard Euler",
          "John Von Neumann"
        ],
        answer: 3
      },
      {
        question: "Which of these did mathematician Leonhard Euler NOT develop?",
        options: [
          "An improvement to the Fast Fourier Transform",
          "A method of solving first-order differential equations",
          "An identity linking the numbers e, pi and i",
          "A formula linking vertices, edges and faces on a graph"
        ],
        answer: 0
      },
      {
        question: "Which of these is not a key value of Agile software development?",
        options: [
          "Individuals and interactions",
          "Customer collaboration",
          "Comprehensive documentation",
          "Responding to change"
        ],
        answer: 2
      },
      {
        question: "How many Hz does the video standard PAL support?",
        options: [
          "59",
          "50",
          "60",
          "25"
        ],
        answer: 1
      }
    ],
    13: [
      {
        question: "What is the escape velocity of Earth (approximate speed needed to break free from Earth's gravity)?",
        options: [
          "7.2 km/s",
          "9.8 km/s",
          "11.2 km/s",
          "15.4 km/s"
        ],
        answer: 2
      },
      {
        question: "Which element has the atomic number 1 on the Periodic Table?",
        options: [
          "Helium",
          "Hydrogen",
          "Lithium",
          "Oxygen"
        ],
        answer: 1
      },
      {
        question: "What is the chemical name for laughing gas?",
        options: [
          "Nitric Oxide",
          "Nitrous Oxide",
          "Nitrogen Dioxide",
          "Dinitrogen Pentoxide"
        ],
        answer: 1
      },
      {
        question: "What major programming language does Unreal Engine 4 use?",
        options: [
          "C++",
          "C#",
          "Assembly",
          "ECMAScript"
        ],
        answer: 0
      },
      {
        question: "Lenovo acquired IBM's personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
        options: [
          "2005",
          "1999",
          "2008",
          "2002"
        ],
        answer: 0
      },
      {
        question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        options: [
          "Marshall Islands",
          "Fiji",
          "Micronesia",
          "Tuvalu"
        ],
        answer: 2
      },
      {
        question: "What was the name of the first Bulgarian personal computer?",
        options: [
          "IMKO-1",
          "IZOT 1030",
          "Pravetz 82",
          "Pravetz 8D"
        ],
        answer: 0
      }
    ],
    14: [
      {
        question: "Which layer of the Earth's atmosphere contains the ozone layer that protects us from UV rays?",
        options: [
          "Troposphere",
          "Stratosphere",
          "Mesosphere",
          "Thermosphere"
        ],
        answer: 1
      },
      {
        question: "Dry ice is the solid form of which gas?",
        options: [
          "Nitrogen",
          "Oxygen",
          "Carbon Dioxide",
          "Methane"
        ],
        answer: 2
      },
      {
        question: "Which alloy is composed of copper and zinc?",
        options: [
          "Bronze",
          "Steel",
          "Brass",
          "Solder"
        ],
        answer: 2
      }
    ],
    15: [
      {
        question: "What is the primary fuel used in nuclear reactors?",
        options: [
          "Coal",
          "Uranium-235",
          "Helium-3",
          "Plutonium-238"
        ],
        answer: 1
      },
      {
        question: "Who is known as the father of modern genetics?",
        options: [
          "Charles Darwin",
          "Gregor Mendel",
          "James Watson",
          "Francis Crick"
        ],
        answer: 1
      },
      {
        question: "Which component of the blood triggers clotting to stop bleeding?",
        options: [
          "Platelets",
          "Red Blood Cells",
          "Hemoglobin",
          "Plasma"
        ],
        answer: 0
      },
      {
        question: "Who is the original author of the realtime physics engine called PhysX?",
        options: [
          "Nvidia",
          "NovodeX",
          "AMD",
          "Ageia"
        ],
        answer: 1
      },
      {
        question: "Which of the following physical typologies are used with Ethernet Networks?",
        options: [
          "Mesh",
          "Star",
          "Ring",
          "Hex"
        ],
        answer: 1
      },
      {
        question: "America Online (AOL) started out as which of these online service providers?",
        options: [
          "CompuServe",
          "Prodigy",
          "Quantum Link",
          "GEnie"
        ],
        answer: 2
      }
    ],
    16: [
      {
        question: "Which elementary particle is considered the carrier of electromagnetic force?",
        options: [
          "Gluon",
          "Photon",
          "W Boson",
          "Graviton"
        ],
        answer: 1
      },
      {
        question: "What is the approximate age of our Universe according to modern cosmology?",
        options: [
          "4.5 billion years",
          "13.8 billion years",
          "20.1 billion years",
          "8.2 billion years"
        ],
        answer: 1
      },
      {
        question: "Which fundamental force of nature keeps protons and neutrons bound inside the atomic nucleus?",
        options: [
          "Gravity",
          "Electromagnetic Force",
          "Strong Nuclear Force",
          "Weak Nuclear Force"
        ],
        answer: 2
      },
      {
        question: "Which of the following famous mathematicians died in a duel at the age of 20?",
        options: [
          "Abel",
          "Euler",
          "Gauss",
          "Galois"
        ],
        answer: 3
      },
      {
        question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
        options: [
          "Broken Authentication",
          "Cross-Site Scripting",
          "Insecure Direct Object References",
          "Injection "
        ],
        answer: 3
      },
      {
        question: "What is the name of the process that sends one qubit of information using two bits of classical information?",
        options: [
          "Quantum Programming",
          "Quantum Entanglement",
          "Quantum Teleportation",
          "Super Dense Coding"
        ],
        answer: 2
      },
      {
        question: "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
        options: [
          "A' + B'",
          "A'B + B'A",
          "AB' + AB",
          "A'B'"
        ],
        answer: 0
      },
      {
        question: "What internet protocol was documented in RFC 1459?",
        options: [
          "HTTP",
          "IRC",
          "FTP",
          "HTTPS"
        ],
        answer: 1
      },
      {
        question: "What is the maximum value of a 32-bit signed binary integer?",
        options: [
          "255",
          "2,147,483,647",
          "2048",
          "9,223,372,036,854,775,807"
        ],
        answer: 1
      },
      {
        question: "Which of these names was an actual codename for a cancelled Microsoft project?",
        options: [
          "Pollux",
          "Neptune",
          "Enceladus",
          "Saturn"
        ],
        answer: 1
      }
    ]
  },
  sports: {
    1: [
      {
        question: "How many players are there in a standard cricket team on the field?",
        options: [
          "9",
          "10",
          "11",
          "12"
        ],
        answer: 2
      },
      {
        question: "Which sport is associated with the term 'Free Kick'?",
        options: [
          "Cricket",
          "Football",
          "Basketball",
          "Badminton"
        ],
        answer: 1
      },
      {
        question: "How many colors are there in the rings of the Olympic flag?",
        options: [
          "3",
          "4",
          "5",
          "6"
        ],
        answer: 2
      },
      {
        question: "How many players are there in a standard soccer team on the field?",
        options: [
          "9",
          "11",
          "10",
          "12"
        ],
        answer: 1
      },
      {
        question: "In bowling, what is the term used for getting three consecutive strikes?",
        options: [
          "Flamingo",
          "Eagle",
          "Turkey",
          "Birdie"
        ],
        answer: 2
      }
    ],
    2: [
      {
        question: "Who is widely referred to as the 'God of Cricket' in India?",
        options: [
          "Virat Kohli",
          "Mahendra Singh Dhoni",
          "Sachin Tendulkar",
          "Kapil Dev"
        ],
        answer: 2
      },
      {
        question: "In which sport would you use a racket to hit a shuttlecock?",
        options: [
          "Tennis",
          "Table Tennis",
          "Badminton",
          "Squash"
        ],
        answer: 2
      },
      {
        question: "What is the distance of a standard penalty kick in football from the goal line?",
        options: [
          "8 yards",
          "10 yards",
          "12 yards",
          "14 yards"
        ],
        answer: 2
      },
      {
        question: "In which sport is the term 'Deuce' or 'Advantage' used?",
        options: [
          "Tennis",
          "Table Tennis",
          "Badminton",
          "Squash"
        ],
        answer: 0
      },
      {
        question: "Which driver has been the Formula 1 world champion for a record 7 times?",
        options: [
          "Jim Clark",
          "Michael Schumacher",
          "Ayrton Senna",
          "Fernando Alonso"
        ],
        answer: 1
      },
      {
        question: "What was the year of estabilishment of the Bari Italian Football Club?",
        options: [
          "1945",
          "2014",
          "1895",
          "1908"
        ],
        answer: 3
      },
      {
        question: "\"Stadium of Light\" is the home stadium for which soccer team?",
        options: [
          "Barcelona FC",
          "Manchester United",
          "Paris Saints-Germain",
          "Sunderland FC"
        ],
        answer: 3
      },
      {
        question: "What team did England beat to win in the 1966 World Cup final?",
        options: [
          "West Germany",
          "Brazil",
          "Portugal",
          "Soviet Union"
        ],
        answer: 0
      },
      {
        question: "What team won the 2016 MLS Cup?",
        options: [
          "Toronto FC",
          "Colorado Rapids",
          "Seattle Sounders",
          "Montreal Impact"
        ],
        answer: 2
      },
      {
        question: "What is the name of the \"tool\" used to hit the white ball in snooker or billiards?",
        options: [
          "Mallet",
          "Bat",
          "Racquet",
          "Cue"
        ],
        answer: 3
      },
      {
        question: "What is the name of Manchester United's home stadium?",
        options: [
          "St James Park",
          "City of Manchester Stadium",
          "Old Trafford",
          "Anfield"
        ],
        answer: 2
      }
    ],
    3: [
      {
        question: "How many rings are there on the official Olympic flag?",
        options: [
          "Four",
          "Five",
          "Six",
          "Seven"
        ],
        answer: 1
      },
      {
        question: "Which country is the birthplace of the game of Chess?",
        options: [
          "China",
          "India",
          "Russia",
          "Persia"
        ],
        answer: 1
      },
      {
        question: "Which country hosts the famous Grand Slam tennis tournament called Roland Garros?",
        options: [
          "United Kingdom",
          "United States",
          "France",
          "Australia"
        ],
        answer: 2
      },
      {
        question: "Which country won the first-ever ICC Cricket World Cup in 1975?",
        options: [
          "England",
          "India",
          "Australia",
          "West Indies"
        ],
        answer: 3
      },
      {
        question: "Which stadium is known as the 'Mecca of Cricket'?",
        options: [
          "The Oval",
          "Eden Gardens",
          "Melbourne Cricket Ground",
          "Lord's Cricket Ground"
        ],
        answer: 3
      },
      {
        question: "Which country has won the highest number of FIFA World Cups in soccer?",
        options: [
          "Argentina",
          "Italy",
          "Germany",
          "Brazil"
        ],
        answer: 3
      },
      {
        question: "In which city were the first modern Olympic Games held in 1896?",
        options: [
          "Rome",
          "Paris",
          "London",
          "Athens"
        ],
        answer: 3
      },
      {
        question: "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
        options: [
          "16 - 0",
          "7 - 1",
          "3 - 4",
          "0 - 1"
        ],
        answer: 1
      },
      {
        question: "Which player holds the NHL record of 2,857 points?",
        options: [
          "Wayne Gretzky",
          "Gordie Howe",
          "Mario Lemieux ",
          "Sidney Crosby"
        ],
        answer: 0
      },
      {
        question: "The Los Angeles Dodgers were originally from what U.S. city?",
        options: [
          "Seattle",
          "Brooklyn",
          "Boston",
          "Las Vegas"
        ],
        answer: 1
      },
      {
        question: "Which country produced football players such as Cafu, Roberto Carlos and Pelé?",
        options: [
          "Argentina",
          "Spain",
          "Portugal",
          "Brazil"
        ],
        answer: 3
      }
    ],
    4: [
      {
        question: "Who was the captain of the Indian cricket team that won the 1983 World Cup?",
        options: [
          "Sunil Gavaskar",
          "Kapil Dev",
          "Ravi Shastri",
          "Mohinder Amarnath"
        ],
        answer: 1
      },
      {
        question: "What is the national game of India?",
        options: [
          "Cricket",
          "Kabaddi",
          "Field Hockey",
          "Football"
        ],
        answer: 2
      },
      {
        question: "In which sport is the term 'Deuce' used?",
        options: [
          "Cricket",
          "Football",
          "Tennis",
          "Chess"
        ],
        answer: 2
      },
      {
        question: "Who scored the first double century in One Day International (ODI) cricket?",
        options: [
          "Sachin Tendulkar",
          "Rohit Sharma",
          "Chris Gayle",
          "Virender Sehwag"
        ],
        answer: 0
      },
      {
        question: "Who is the first batsman to hit six sixes in an over in a T20 International match?",
        options: [
          "Kieron Pollard",
          "Chris Gayle",
          "Yuvraj Singh",
          "Herschelle Gibbs"
        ],
        answer: 2
      },
      {
        question: "Which of the following sports is not part of the triathlon?",
        options: [
          "Running",
          "Swimming",
          "Horse-Riding",
          "Cycling"
        ],
        answer: 2
      },
      {
        question: "What year did the New Orleans Saints win the Super Bowl?",
        options: [
          "2010",
          "2011",
          "2009",
          "2008"
        ],
        answer: 0
      },
      {
        question: "Which team won the 2015-16 English Premier League?",
        options: [
          "Cheslea",
          "Manchester United",
          "Leicester City",
          "Liverpool"
        ],
        answer: 2
      }
    ],
    5: [
      {
        question: "Which of the following tennis tournaments is played on grass courts?",
        options: [
          "French Open",
          "US Open",
          "Australian Open",
          "Wimbledon"
        ],
        answer: 3
      },
      {
        question: "How many squares are there on a standard chessboard?",
        options: [
          "32",
          "48",
          "64",
          "80"
        ],
        answer: 2
      },
      {
        question: "What is the term for three consecutive strikes in the game of Bowling?",
        options: [
          "Turkey",
          "Triple",
          "Strike-Out",
          "Jackpot"
        ],
        answer: 0
      },
      {
        question: "In which country was the first-ever day-night Test match with a pink ball played in 2015?",
        options: [
          "New Zealand",
          "Australia",
          "South Africa",
          "England"
        ],
        answer: 1
      },
      {
        question: "Who did Steven Gerrard win the Champions League with?",
        options: [
          "Chelsea",
          "Real Madrid",
          "Liverpool",
          "Man City"
        ],
        answer: 2
      },
      {
        question: "Which of these NHL teams originally played in Atlanta?",
        options: [
          "St. Louis Blues",
          "Vancouver Canucks",
          "Calgary Flames",
          "Minnesota Wild"
        ],
        answer: 2
      }
    ],
    6: [
      {
        question: "Who was the first Indian woman to win an individual Olympic medal?",
        options: [
          "P. T. Usha",
          "Karnam Malleswari",
          "Saina Nehwal",
          "Mary Kom"
        ],
        answer: 1
      },
      {
        question: "With which sport is the term 'Checkmate' associated?",
        options: [
          "Boxing",
          "Wrestling",
          "Chess",
          "Archery"
        ],
        answer: 2
      },
      {
        question: "Which country has won the maximum number of Cricket World Cups (5 times)?",
        options: [
          "India",
          "West Indies",
          "Australia",
          "England"
        ],
        answer: 2
      },
      {
        question: "Who is the fastest bowler in cricket history to bowl a recorded 161.3 km/h delivery?",
        options: [
          "Shoaib Akhtar",
          "Mitchell Johnson",
          "Brett Lee",
          "Shaun Tait"
        ],
        answer: 0
      },
      {
        question: "Which bowler has taken the highest number of wickets in Test cricket history?",
        options: [
          "Anil Kumble",
          "James Anderson",
          "Muttiah Muralitharan",
          "Shane Warne"
        ],
        answer: 2
      },
      {
        question: "Who won the 2018 Monaco Grand Prix?",
        options: [
          "Daniel Ricciardo",
          "Lewis Hamilton",
          "Sebastian Vettel",
          "Kimi Raikkonen"
        ],
        answer: 0
      },
      {
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        options: [
          "Bye",
          "Duck",
          "Beamer",
          "Carry"
        ],
        answer: 1
      },
      {
        question: "The song \"Three Lions\" by the Lightning Seeds was made for which major football event in 1996?",
        options: [
          "European Championships",
          "Confederations Cup",
          "World Cup",
          "Champions League"
        ],
        answer: 0
      },
      {
        question: "Which football manager won more trophies than any other during his tenure at English football club Manchester United?",
        options: [
          "Louis van Gaal",
          "José Mourinho",
          "David Moyes",
          "Sir Alex Ferguson"
        ],
        answer: 3
      },
      {
        question: "What was Sir Donald Bradman's batting average in test matches?",
        options: [
          "100",
          "69.51",
          "44.78",
          "99.94"
        ],
        answer: 3
      }
    ],
    7: [
      {
        question: "Who holds the world record for the fastest 100m sprint?",
        options: [
          "Tyson Gay",
          "Yohan Blake",
          "Usain Bolt",
          "Carl Lewis"
        ],
        answer: 2
      },
      {
        question: "Which country has won the FIFA World Cup the most number of times?",
        options: [
          "Germany",
          "Italy",
          "Argentina",
          "Brazil"
        ],
        answer: 3
      },
      {
        question: "Which international sport uses a light ball of diameter 40mm and weight 2.7g, hit across a table divided by a net?",
        options: [
          "Tennis",
          "Table Tennis",
          "Squash",
          "Badminton"
        ],
        answer: 1
      },
      {
        question: "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
        options: [
          "Horse-Racing",
          "Archery",
          "Wrestling",
          "American Football"
        ],
        answer: 3
      },
      {
        question: "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
        options: [
          "Ronald Ratzenberger",
          "Jules Bianchi",
          "Ayrton Senna",
          "Gilles Villeneuve"
        ],
        answer: 1
      },
      {
        question: "Who was the top scorer of the 2014 FIFA World Cup?",
        options: [
          "Lionel Messi",
          "Thomas Müller",
          "James Rodríguez",
          "Neymar"
        ],
        answer: 2
      },
      {
        question: "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
        options: [
          "100m",
          "84.39m",
          "109.36yd",
          "100yd"
        ],
        answer: 1
      },
      {
        question: "Which player has scored the most goals in the England Premier League (EPL)?",
        options: [
          "Lionel Messi",
          "Didier Drogba",
          "Alan Shearer",
          "Wayne Rooney"
        ],
        answer: 2
      }
    ],
    8: [
      {
        question: "Which Indian sportsperson is nicknamed the 'Haryana Hurricane'?",
        options: [
          "Kapil Dev",
          "Yuvraj Singh",
          "Sushil Kumar",
          "Virender Sehwag"
        ],
        answer: 0
      },
      {
        question: "What is the maximum possible break (score) in a standard game of Snooker, without penalties?",
        options: [
          "140",
          "147",
          "155",
          "162"
        ],
        answer: 1
      },
      {
        question: "How many players are on the court for a single team in a Basketball game?",
        options: [
          "5",
          "6",
          "7",
          "8"
        ],
        answer: 0
      },
      {
        question: "Who has played the most tournaments in the German national soccer team?",
        options: [
          "Miroslav Klose",
          "Lothar Matthäus",
          "Oliver Kahn",
          "Philipp Lahm"
        ],
        answer: 1
      },
      {
        question: "Who is regarded as the best Romanian footballer of all time?",
        options: [
          "Cristian Chivu",
          "Nicolae Dobrin",
          "Gheorghe Hagi",
          "Gheorghe Popescu"
        ],
        answer: 2
      },
      {
        question: "Which of the following player scored a hat-trick during their Manchester United debut?",
        options: [
          "David Beckham",
          "Robin Van Persie",
          "Cristiano Ronaldo",
          "Wayne Rooney"
        ],
        answer: 3
      },
      {
        question: "How many games did Arsenal FC go unbeaten during the 2003-2004 season of the English Premier League",
        options: [
          "49",
          "51",
          "22",
          "38"
        ],
        answer: 3
      },
      {
        question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
        options: [
          "Audi",
          "Toyota",
          "Ferrari",
          "Porsche"
        ],
        answer: 3
      }
    ],
    9: [
      {
        question: "Who was the first batsman to score a double century in a Men's One Day International (ODI) cricket match?",
        options: [
          "Virender Sehwag",
          "Rohit Sharma",
          "Sachin Tendulkar",
          "Martin Guptill"
        ],
        answer: 2
      },
      {
        question: "In badminton, which cup is competed for by men's national teams?",
        options: [
          "Uber Cup",
          "Thomas Cup",
          "Sudirman Cup",
          "Davis Cup"
        ],
        answer: 1
      },
      {
        question: "Which country won the first-ever T20 Cricket World Cup in 2007?",
        options: [
          "Pakistan",
          "India",
          "Australia",
          "Sri Lanka"
        ],
        answer: 1
      },
      {
        question: "What year was hockey legend Wayne Gretzky born?",
        options: [
          "1965",
          "1961",
          "1959",
          "1963"
        ],
        answer: 1
      },
      {
        question: "Josh Mansour is part of what NRL team?",
        options: [
          "Sydney Roosters",
          "Penrith Panthers",
          "North Queensland Cowboys",
          "Melbourne Storm"
        ],
        answer: 1
      },
      {
        question: "What is the name of the AHL affiliate of the Toronto Maple Leafs?",
        options: [
          "Toronto Argonauts",
          "Toronto Rock",
          "Toronto Wolfpack",
          "Toronto Marlies"
        ],
        answer: 3
      },
      {
        question: "Which of these NHL teams have never moved since their inception?",
        options: [
          "Carolina Hurricanes",
          "St. Louis Blues",
          "Dallas Stars",
          "New Jersey Devils"
        ],
        answer: 1
      },
      {
        question: "Which nation hosted the FIFA World Cup in 2006?",
        options: [
          "South Africa",
          "Brazil",
          "United Kingdom",
          "Germany"
        ],
        answer: 3
      },
      {
        question: "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
        options: [
          "Mercedes-AMG Petronas",
          "Scuderia Ferrari",
          "Red Bull Racing Renault",
          "McLaren Honda"
        ],
        answer: 0
      },
      {
        question: "In what sport does Fanny Chmelar compete for Germany?",
        options: [
          "Skiing",
          "Swimming",
          "Gymnastics",
          "Showjumping"
        ],
        answer: 0
      }
    ],
    10: [
      {
        question: "The legendary sportsman Major Dhyan Chand was associated with which sport?",
        options: [
          "Wrestling",
          "Shooting",
          "Hockey",
          "Athletics"
        ],
        answer: 2
      },
      {
        question: "Which Formula 1 driver has won the most World Drivers' Championship titles (tied with Michael Schumacher)?",
        options: [
          "Sebastian Vettel",
          "Lewis Hamilton",
          "Max Verstappen",
          "Fernando Alonso"
        ],
        answer: 1
      },
      {
        question: "In boxing, which weight class is immediately above featherweight?",
        options: [
          "Flyweight",
          "Lightweight",
          "Welterweight",
          "Middleweight"
        ],
        answer: 1
      },
      {
        question: "What is Tiger Woods' all-time best career golf-score?",
        options: [
          "67",
          "65",
          "61",
          "63"
        ],
        answer: 2
      }
    ],
    11: [
      {
        question: "Which country hosted the first modern Olympic Games in 1896?",
        options: [
          "France",
          "Greece",
          "United Kingdom",
          "United States"
        ],
        answer: 1
      },
      {
        question: "Who is the first Indian fencer to qualify for the Olympic Games?",
        options: [
          "Kavitha Devi",
          "Bhavani Devi",
          "Radhika Prasad",
          "Ankita Raina"
        ],
        answer: 1
      },
      {
        question: "In golf, what is the score called when you hit the ball into the hole in one stroke less than par?",
        options: [
          "Eagle",
          "Birdie",
          "Bogey",
          "Albatross"
        ],
        answer: 1
      },
      {
        question: "Who won the 1998 Daytona 500?",
        options: [
          "Jeff Gordon",
          "John Anderson",
          "Dale Earnhardt",
          "Michael Walltrip"
        ],
        answer: 2
      },
      {
        question: "Which city features all of their professional sports teams' jersey's with the same color scheme?",
        options: [
          "New York",
          "Pittsburgh",
          "Seattle",
          "Tampa Bay"
        ],
        answer: 1
      },
      {
        question: "Who scored the injury time winning goal in the 1999 UEFA Champions League final between Manchester United and Bayern Munich?",
        options: [
          "Ole Gunnar Solskjær",
          "Andy Cole",
          "David Beckham",
          "Dwight Yorke"
        ],
        answer: 0
      }
    ],
    12: [
      {
        question: "In golf, what is the term for scoring three strokes under par on a single hole?",
        options: [
          "Eagle",
          "Birdie",
          "Albatross",
          "Bogey"
        ],
        answer: 2
      },
      {
        question: "Which of the following Grand Slam tournaments is held first in a calendar year?",
        options: [
          "French Open",
          "US Open",
          "Wimbledon",
          "Australian Open"
        ],
        answer: 3
      },
      {
        question: "Which country did the legendary footballer Diego Maradona play for internationally?",
        options: [
          "Brazil",
          "Argentina",
          "Uruguay",
          "Spain"
        ],
        answer: 1
      }
    ],
    13: [
      {
        question: "Who was the first Indian individual Olympic gold medalist?",
        options: [
          "Abhinav Bindra",
          "Neeraj Chopra",
          "Leander Paes",
          "Rajyavardhan Singh Rathore"
        ],
        answer: 0
      },
      {
        question: "What is the duration of a standard professional football (soccer) match, excluding extra time?",
        options: [
          "80 minutes",
          "90 minutes",
          "100 minutes",
          "70 minutes"
        ],
        answer: 1
      },
      {
        question: "Which country hosted the 1930 inaugural FIFA World Cup?",
        options: [
          "Argentina",
          "Uruguay",
          "Brazil",
          "Italy"
        ],
        answer: 1
      },
      {
        question: "Which year was the third Super Bowl held?",
        options: [
          "1970",
          "1971",
          "1968",
          "1969"
        ],
        answer: 3
      },
      {
        question: "Who is Manchester United's leading appearance maker?",
        options: [
          "David Beckham",
          "Wayne Rooney",
          "Eric Cantona",
          "Ryan Giggs"
        ],
        answer: 3
      },
      {
        question: "At which race was the 2018 F1 Drivers Championship won?",
        options: [
          "Abu Dhabi",
          "Mexico",
          "United States",
          "Belgium"
        ],
        answer: 1
      }
    ],
    14: [
      {
        question: "In which year did India win its first Olympic Gold Medal in Hockey?",
        options: [
          "1928",
          "1932",
          "1936",
          "1948"
        ],
        answer: 0
      },
      {
        question: "Which female boxer won six World Amateur Boxing Championship titles?",
        options: [
          "Mary Kom",
          "Sarita Devi",
          "Lovlina Borgohain",
          "Nikhat Zareen"
        ],
        answer: 0
      },
      {
        question: "In which Olympic Games did Usain Bolt set his world record of 9.58 seconds for the 100 meters sprint?",
        options: [
          "Beijing 2008",
          "London 2012",
          "Rio 2016",
          "Berlin World Championship 2009"
        ],
        answer: 3
      },
      {
        question: "What is the full name of the footballer \"Cristiano Ronaldo\"?",
        options: [
          "Cristiano Armando Diego Ronaldo",
          "Cristiano Ronaldo los Santos Diego",
          "Cristiano Ronaldo dos Santos Aveiro",
          "Cristiano Luis Armando Ronaldo"
        ],
        answer: 2
      }
    ],
    15: [
      {
        question: "Who is the only tennis player to achieve the Golden Slam (all 4 Grand Slams + Olympic Gold) in a single calendar year?",
        options: [
          "Steffi Graf",
          "Serena Williams",
          "Roger Federer",
          "Rafael Nadal"
        ],
        answer: 0
      },
      {
        question: "In which country are the headquarters of the International Olympic Committee (IOC) located?",
        options: [
          "Switzerland",
          "France",
          "Greece",
          "Germany"
        ],
        answer: 0
      },
      {
        question: "Who was the first track and field athlete from independent India to win an Olympic gold medal?",
        options: [
          "Milkha Singh",
          "Neeraj Chopra",
          "Anju Bobby George",
          "Abhinav Bindra"
        ],
        answer: 1
      },
      {
        question: "Etihad Stadium is the home stadium for which team?",
        options: [
          "Manchester United",
          "Arsenal",
          "Manchester City",
          "Blackpool"
        ],
        answer: 2
      },
      {
        question: "The Mazda 787B won the 24 Hours of Le Mans in what year?",
        options: [
          "1991",
          "2000",
          "1990",
          "1987"
        ],
        answer: 0
      }
    ],
    16: [
      {
        question: "Who was the first cricketer to be awarded the Rajiv Gandhi Khel Ratna (now Major Dhyan Chand Khel Ratna) Award?",
        options: [
          "Sachin Tendulkar",
          "Kapil Dev",
          "Mahendra Singh Dhoni",
          "Virat Kohli"
        ],
        answer: 0
      },
      {
        question: "What is the distance of a standard marathon race in kilometers?",
        options: [
          "42.195 km",
          "40.000 km",
          "45.500 km",
          "38.250 km"
        ],
        answer: 0
      },
      {
        question: "Which cyclist won seven Tour de France titles consecutively before being stripped of them for doping?",
        options: [
          "Lance Armstrong",
          "Eddy Merckx",
          "Miguel Indurain",
          "Chris Froome"
        ],
        answer: 0
      },
      {
        question: "Which of these European cities was the first to host the modern Summer Olympic Games three times?",
        options: [
          "London",
          "Paris",
          "Rome",
          "Athens"
        ],
        answer: 0
      },
      {
        question: "Which is Kenesisa Bekele's personal best at marathon?",
        options: [
          "2:01:12",
          "2:01:45",
          "2:01:51",
          "2:01:41"
        ],
        answer: 3
      }
    ]
  },
  entertainment: {
    1: [
      {
        question: "Which of the following movies stars Amitabh Bachchan in the lead role as 'Vijay'?",
        options: [
          "Sholay",
          "Deewaar",
          "Dilwale Dulhania Le Jayenge",
          "Lagaan"
        ],
        answer: 1
      },
      {
        question: "Who is the lead actor in the iconic movie 'Dilwale Dulhania Le Jayenge' (DDLJ)?",
        options: [
          "Salman Khan",
          "Aamir Khan",
          "Shah Rukh Khan",
          "Akshay Kumar"
        ],
        answer: 2
      },
      {
        question: "Which cartoon character lives in a pineapple under the sea?",
        options: [
          "Mickey Mouse",
          "SpongeBob SquarePants",
          "Donald Duck",
          "Bugs Bunny"
        ],
        answer: 1
      },
      {
        question: "Rincewind from the 1995 Discworld game was voiced by which member of Monty Python?",
        options: [
          "Eric Idle",
          "John Cleese",
          "Terry Gilliam",
          "Michael Palin"
        ],
        answer: 0
      },
      {
        question: "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
        options: [
          "Becker",
          "Frasier",
          "Seinfeld",
          "Friends"
        ],
        answer: 2
      },
      {
        question: "What was the release date of \"Grand Theft Auto IV\"?",
        options: [
          "April 29, 2008",
          "July 28, 2008",
          "June 22, 2010",
          "May 21, 2009"
        ],
        answer: 0
      },
      {
        question: "Who is the main protagonist in the game Life is Strange: Before The Storm?",
        options: [
          "Frank Bowers",
          "Rachel Amber",
          "Chloe Price ",
          "Max Caulfield"
        ],
        answer: 2
      },
      {
        question: "Which Disney character sings the song \"A Dream is a Wish Your Heart Makes\"?",
        options: [
          "Snow White",
          "Pocahontas",
          "Cinderella",
          "Belle"
        ],
        answer: 2
      },
      {
        question: "Who is frozen at the end of the movie \"Goldeneye\"?",
        options: [
          "Alec Travelyan",
          "James Bond",
          "Boris Grishenko",
          "Natalya Simonova"
        ],
        answer: 2
      },
      {
        question: "In vanilla Minecraft, which of the following cannot be made into a block?",
        options: [
          "Coal",
          "String",
          "Charcoal",
          "Wheat"
        ],
        answer: 2
      },
      {
        question: "In Undertale, what's the prize for answering correctly?",
        options: [
          "More questions",
          "New car",
          "Money",
          "Mercy"
        ],
        answer: 0
      },
      {
        question: "Who is the leader of Team Mystic in Pokémon Go?",
        options: [
          "Candela",
          "Spark",
          "Willow",
          "Blanche"
        ],
        answer: 3
      },
      {
        question: "In the video game, Half-life, what event started the Half-life universe as we know today?",
        options: [
          "The Resonance Cascade",
          "World War 3",
          "The Xen Attack",
          "The Black Mesa Nuke"
        ],
        answer: 0
      },
      {
        question: "In the Star Trek universe, what color is Vulcan blood?",
        options: [
          "Blue",
          "Green",
          "Purple",
          "Red"
        ],
        answer: 1
      },
      {
        question: "When was the game 'Portal 2' released?",
        options: [
          "2011",
          "2014",
          "2007",
          "2009"
        ],
        answer: 0
      },
      {
        question: "'The Safety Dance' was the biggest hit single for which Canadian act?",
        options: [
          "Broken Social Scene",
          "Crash Test Dummies",
          "The Tragically Hip",
          "Men Without Hats"
        ],
        answer: 3
      },
      {
        question: "What is the name of the planet that the Doctor from television series \"Doctor Who\" comes from?",
        options: [
          "Skaro",
          "Gallifrey",
          "Sontar",
          "Mondas"
        ],
        answer: 1
      },
      {
        question: "What band featured Sting, Stewart Copeland and Andy Summers?",
        options: [
          "The Police",
          "Def Leppard",
          "The Cure",
          "Bon Jovi"
        ],
        answer: 0
      },
      {
        question: "Which of the following is not the name of a \"Bond Girl\"?",
        options: [
          "Vanessa Kensington",
          "Pam Bouvier",
          "Mary Goodnight",
          "Wai Lin"
        ],
        answer: 0
      },
      {
        question: "In \"A Hat in Time\", what must Hat Kid collect to finish a level",
        options: [
          "A time piece",
          "A relic fragment",
          "A heart fragment",
          "A hat"
        ],
        answer: 0
      },
      {
        question: "Who is the lead singer of Green Day?",
        options: [
          "Tré Cool",
          "Sean Hughes",
          "Mike Dirnt",
          "Billie Joe Armstrong"
        ],
        answer: 3
      },
      {
        question: "Of which 90s boy band was Justin Timberlake a member?",
        options: [
          "Boyzone",
          "*NSYNC",
          "Westlife",
          "Backstreet Boys"
        ],
        answer: 1
      },
      {
        question: "What does Solid Snake use to hide himself with?",
        options: [
          "Cardboard Box",
          "Metal Crate",
          "Cardboard cut-out",
          "Cloaking Device"
        ],
        answer: 0
      },
      {
        question: "Who had a 1969 top 5 hit with the song,  'A Boy Named Sue'?",
        options: [
          "Willie Nelson",
          "Johnny Cash",
          "Bob Dylan",
          "Kris Kristofferson"
        ],
        answer: 1
      },
      {
        question: "Who created the indie adventure game \"Night in the Woods\"?",
        options: [
          "Ron Gilbert",
          "Tim Schafer",
          " Tommy Refenes",
          "Alec Holowka"
        ],
        answer: 3
      },
      {
        question: "In Slay the Spire, which of the following is NOT a playable character?",
        options: [
          "Ironclad",
          "Defect",
          "Silent",
          "Stoneheart"
        ],
        answer: 3
      },
      {
        question: "In \"Call Of Duty: Zombies\", what is the name of the Pack-A-Punched Crossbow?",
        options: [
          "Awful Lawton",
          "Longinus",
          "Predator",
          "V-R11"
        ],
        answer: 0
      },
      {
        question: "Who plays the character of Po in the Kung Fu Panda movies?",
        options: [
          "Jack Black",
          "McConahey Ramses",
          "Jim Petersson",
          "Mirana Jonnes"
        ],
        answer: 0
      },
      {
        question: "In the original Spyro game who is the first villain?",
        options: [
          "Cynder",
          "Gnasty Gnorc",
          "Sorceress",
          "Ripto"
        ],
        answer: 1
      },
      {
        question: "What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have?",
        options: [
          "Ultimate Lucky Student",
          "Ultimate Runner",
          "Ultimate Detective",
          "Ultimate Unlucky Student"
        ],
        answer: 0
      },
      {
        question: "TF2: What code does Soldier put into the door keypad in \"Meet the Spy\"?",
        options: [
          "1432",
          "1111",
          "1337",
          "No code"
        ],
        answer: 1
      },
      {
        question: "Which of the following weapons in \"Counter-Strike: Global Offensive\" does not have a right-click function?",
        options: [
          "USP-S",
          "XM1014",
          "SG553",
          "R8 Revolver"
        ],
        answer: 1
      },
      {
        question: "For the film \"Raiders of The Lost Ark\", what was Harrison Ford sick with during the filming of the Cairo chase?",
        options: [
          "Acid Reflux ",
          "Dysentery",
          "Anemia",
          "Constipation"
        ],
        answer: 1
      },
      {
        question: "In the words of his 1973 song, Bob Dylan is \"knock, knock, knockin\" on which door?",
        options: [
          "Heaven's",
          "Eileen's",
          "Angie's",
          "Opportunity's"
        ],
        answer: 0
      },
      {
        question: "What company develops the Rock Band series of rhythm games?",
        options: [
          "Harmonix",
          "Konami",
          "Activision",
          "Electronic Arts"
        ],
        answer: 0
      },
      {
        question: "Which Nintendo 64 game did NOT have Luigi in it?",
        options: [
          "Paper Mario",
          "Super Mario 64",
          "Super Smash Bros.",
          "Mario Party 2"
        ],
        answer: 1
      },
      {
        question: "How do you tame a horse in Minecraft?",
        options: [
          "By feeding it Wheat",
          "By petting it",
          "By feeding it Sugar",
          "By continually mounting it"
        ],
        answer: 3
      },
      {
        question: "In the 1951 movie \"The Day The Earth Stood Still\" which US city did the alien spaceship land in?",
        options: [
          "Washington D.C.",
          " Los Angeles",
          "Philadelphia",
          "New York"
        ],
        answer: 0
      },
      {
        question: "What is the name of Chris's brother in \"Everybody Hates Chris\"?",
        options: [
          "Drew",
          "Jerome",
          "Joe",
          "Greg"
        ],
        answer: 0
      },
      {
        question: "In the Street Fighter franchise, what's Ken's surname?",
        options: [
          "Morrison",
          "Masters",
          "Mitchell",
          "Michaels"
        ],
        answer: 1
      },
      {
        question: "In \"Phoenix Wright: Ace Attorney\" which character is the District Chief of Police?",
        options: [
          "Damon Gant",
          "Lana Skye",
          "Miles Edgeworth",
          "Mike Meekins"
        ],
        answer: 0
      },
      {
        question: "The \"K\" in \"K-Pop\" stands for which word?",
        options: [
          "Kuwaiti",
          "Kazakhstan",
          "Kenyan",
          "Korean"
        ],
        answer: 3
      },
      {
        question: "Whose albums included \"Back in Black\" and \"Ballbreaker\"?",
        options: [
          "AC/DC",
          "Metallica",
          "Iron Maiden",
          "Black Sabbath"
        ],
        answer: 0
      },
      {
        question: "Who is the main protagonist in, the 1985 film, Back to the Future?",
        options: [
          "George McFly",
          "Biff Tannen",
          "Emmett \"Doc\" Brown",
          "Marty McFly"
        ],
        answer: 3
      },
      {
        question: "Which James Bond film had the theme song written and performed by English singer-songwriter Adele?",
        options: [
          "Skyfall",
          "Casino Royale",
          "Spectre",
          "Quantum Solace"
        ],
        answer: 0
      },
      {
        question: "In the movie Gremlins, after what time of day should you not feed Mogwai?",
        options: [
          "Evening",
          "Afternoon",
          "Morning",
          "Midnight"
        ],
        answer: 3
      },
      {
        question: "How many dots are on a single die?",
        options: [
          "24",
          "21",
          "18",
          "15"
        ],
        answer: 1
      },
      {
        question: "How many seasons did the Sci-Fi television show \"Stargate Atlantis\" have?",
        options: [
          "5",
          "7",
          "2",
          "10"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT a class in Dungeons and Dragons 5e?",
        options: [
          "Paladin ",
          "Fighter ",
          "Engineer ",
          "Bard"
        ],
        answer: 2
      },
      {
        question: "In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?",
        options: [
          "Raccoonus Teachus",
          "The Art of Sneak",
          "Thievius Raccoonus",
          "Raccoon Training 101"
        ],
        answer: 2
      },
      {
        question: "Guy's Grocery Games is hosted by which presenter?",
        options: [
          "Guy Martin",
          "Guy Fieri",
          "Ainsley Harriott",
          "Guy Ritchie"
        ],
        answer: 1
      }
    ],
    2: [
      {
        question: "Which Bollywood film features the song 'Jai Ho', which won an Academy Award?",
        options: [
          "Lagaan",
          "Taare Zameen Par",
          "Slumdog Millionaire",
          "3 Idiots"
        ],
        answer: 2
      },
      {
        question: "Who directed the highly acclaimed movie '3 Idiots'?",
        options: [
          "Sanjay Leela Bhansali",
          "Karan Johar",
          "Rajkumar Hirani",
          "Anurag Kashyap"
        ],
        answer: 2
      },
      {
        question: "In the movie 'Harry Potter', which house does Harry belong to at Hogwarts?",
        options: [
          "Slytherin",
          "Hufflepuff",
          "Ravenclaw",
          "Gryffindor"
        ],
        answer: 3
      },
      {
        question: "Who played the famous lead role in the movie 'Shahenshah'?",
        options: [
          "Dilip Kumar",
          "Rajesh Khanna",
          "Dharmendra",
          "Amitabh Bachchan"
        ],
        answer: 3
      },
      {
        question: "Which movie is famous for the dialogue 'Kitne aadmi the'?",
        options: [
          "Sholay",
          "Deewaar",
          "Zanjeer",
          "Don"
        ],
        answer: 0
      },
      {
        question: "What is the name of Rivers Cuomo's wife?",
        options: [
          "Kyoko Ito",
          "Yoko Ono",
          "Kyary Pamyu Pamyu",
          "LiSA"
        ],
        answer: 0
      },
      {
        question: "Which Game Boy from the Game Boy series of portable video game consoles was released first?",
        options: [
          "Game Boy Advance",
          "Game Boy Color",
          "Game Boy Advance SP",
          "Game Boy Micro"
        ],
        answer: 1
      },
      {
        question: "Which of these is NOT a team available in the game Pokémon Go?",
        options: [
          "Team Mystic",
          "Team Rocket",
          "Team Instinct",
          "Team Valor"
        ],
        answer: 1
      },
      {
        question: "Who played Agent Fox Mulder in the TV sci-fi drama \"The X-Files\"?",
        options: [
          "David Duchovny",
          "Robert Patrick",
          "Gillian Anderson",
          "Mitch Pileggi"
        ],
        answer: 0
      },
      {
        question: "Which popular First Person Shooter (FPS) franchise, got a Real Time Strategy (RTS) game developed based on its universe?",
        options: [
          "Call of Duty",
          "Borderlands",
          "Battlefield",
          "Halo"
        ],
        answer: 3
      },
      {
        question: "At the end of the 2001 film \"Rat Race\", whose concert do the contestants crash?",
        options: [
          "Bowling for Soup",
          "Linkin Park",
          "Smash Mouth",
          "Sum 41"
        ],
        answer: 2
      },
      {
        question: "Which of the following games was NOT included in Valve's \"The Orange Box\"?",
        options: [
          "Half-Life 2: Episode Two",
          "Team Fortress 2",
          "Left 4 Dead",
          "Portal"
        ],
        answer: 2
      },
      {
        question: "In Two and a Half Men, what is Alan Harper's son's name?",
        options: [
          "James",
          "John",
          "Jeremy",
          "Jake"
        ],
        answer: 3
      },
      {
        question: "How many carbon cars are there in Burnout Paradise?",
        options: [
          "3",
          "4",
          "5",
          "6"
        ],
        answer: 3
      },
      {
        question: "Which Super Mario video game when they introduce Bowser Jr. for the first time?",
        options: [
          "Mario Party series",
          "Super Mario Sunshine",
          "Super Mario Galaxy",
          "Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey"
        ],
        answer: 1
      },
      {
        question: "According to a song by Belinda Carlisle, Heaven is a place on what?",
        options: [
          "Venus",
          "Earth",
          "Uranus",
          "Mars"
        ],
        answer: 1
      },
      {
        question: "In \"Rainbow Six: Siege\", which of the following operators cannot breach reinforced walls?",
        options: [
          "Buck",
          "Thermite",
          "Hibana",
          "Maverick"
        ],
        answer: 0
      },
      {
        question: "In the Lord of the Rings: The Two Towers, where are the party of orcs taking the hobbits?",
        options: [
          "Rivendell",
          "Moria",
          "Isengard",
          "Mordor"
        ],
        answer: 2
      },
      {
        question: "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
        options: [
          "Pirates of the Caribbean ",
          "Harry Potter",
          "Spy Kids",
          "Ted"
        ],
        answer: 1
      },
      {
        question: "Who wrote the Sinead O`Connor hit 'Nothing Compares 2 U'?",
        options: [
          "Prince",
          "Rick James",
          "Michael Jackson",
          "Cameo"
        ],
        answer: 0
      },
      {
        question: "Which of these levels does NOT appear in the console/PC versions of the game \"Sonic Generations\"?",
        options: [
          "Mushroom Hill",
          "Sky Sanctuary",
          "City Escape",
          "Planet Wisp"
        ],
        answer: 0
      },
      {
        question: "\"Sleepyhead\" is the debut single from which Electronic band?",
        options: [
          "The Chemical Brothers",
          "LadyTron",
          "Passion Pit",
          "Kraftwerk"
        ],
        answer: 2
      },
      {
        question: "League of Legends, DOTA 2, Smite and Heroes of the Storm are all part of which game genre?",
        options: [
          "First Person Shooter (FPS)",
          "Role Playing Game (RPG)",
          "Multiplayer Online Battle Arena (MOBA)",
          "Real Time Strategy (RTS)"
        ],
        answer: 2
      },
      {
        question: "In Fallout: New Vegas, which one of these casinos can you not play in?",
        options: [
          "Lucky 38",
          "Gammorah",
          "Ultra-Luxe",
          "The Tops"
        ],
        answer: 0
      },
      {
        question: "What is the name of a popular franchise that includes placing blocks down and surviving in an open world?",
        options: [
          "Roblox",
          "Unturned",
          "Minecraft",
          "Grand Theft Auto V"
        ],
        answer: 2
      },
      {
        question: "In the TV show \"Mad Men\", what was Donald Draper's birthname?",
        options: [
          "Michael \"Mikey\" Wilhelm",
          "Richard \"Dick\" Whitman",
          "John Ashbury",
          "Donald Draper"
        ],
        answer: 1
      },
      {
        question: "In which British seaside town was the BBC sitcom \"Fawlty Towers\" set?",
        options: [
          "Torquay",
          "Great Yarmouth",
          "Bournemouth",
          "Blackpool"
        ],
        answer: 0
      },
      {
        question: "What year was the game \"Overwatch\" revealed?",
        options: [
          "2015",
          "2011",
          "2014",
          "2008"
        ],
        answer: 2
      },
      {
        question: "When did the TV show Rick and Morty first air on Adult Swim?",
        options: [
          "2016",
          "2015",
          "2013",
          "2014"
        ],
        answer: 2
      },
      {
        question: "Which member of the Velvet Room is not a playable character in Persona 4 Arena Ultimax?",
        options: [
          "Elizabeth",
          "Margaret",
          "Theodore",
          "Marie"
        ],
        answer: 2
      },
      {
        question: "What color is the iconic arcade character Q*Bert?",
        options: [
          "Brown",
          "Orange",
          "Blue",
          "Green"
        ],
        answer: 1
      },
      {
        question: "Which company did Gabe Newell work at before founding Valve Corporation?",
        options: [
          "Apple",
          "Yahoo",
          "Google",
          "Microsoft"
        ],
        answer: 3
      },
      {
        question: "7-Eleven stores were temporarily converted into Kwik E-marts to promote the release of what movie?",
        options: [
          "Shrek the Third",
          "Ratatouille",
          "The Simpsons Movie",
          "Spider-Man 3"
        ],
        answer: 2
      },
      {
        question: "How many differently shaped Tetris pieces are there?",
        options: [
          "7",
          "8",
          "5",
          "6"
        ],
        answer: 0
      },
      {
        question: "What minimum level in the Defence skill is needed to equip Dragon Armour in the MMO RuneScape?",
        options: [
          "55",
          "65",
          "70",
          "60"
        ],
        answer: 3
      },
      {
        question: "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
        options: [
          "Flash Gordon",
          "Labyrinth",
          "Howard the Duck",
          "Highlander"
        ],
        answer: 3
      },
      {
        question: "When was Left 4 Dead 2 released?",
        options: [
          "May 3, 2008",
          "November 30, 2009",
          "November 17, 2009",
          "June 30, 2010"
        ],
        answer: 2
      },
      {
        question: "Who stars in Brutal Legend?",
        options: [
          "Jack Black",
          "Kanye West",
          "Lemmy",
          "Ozzy Osbourne"
        ],
        answer: 0
      },
      {
        question: "In Animal Crossing, who is the manager of the town shop?",
        options: [
          "Gracie",
          "Tom Nook",
          "Mr. Resetti",
          "K.K. Slider"
        ],
        answer: 1
      },
      {
        question: "Which of these Disney shows is classified as an anime?",
        options: [
          "The Emperor's New School",
          "Cory in the House",
          "Hannah Montana",
          "Stitch!"
        ],
        answer: 3
      },
      {
        question: "On the show \"Rick and Morty\", in episode \"Total Rickall\", who was a parasite?",
        options: [
          "Summer Smith",
          "Pencilvester",
          "Mr. Poopy Butthole",
          "Beth Smith"
        ],
        answer: 1
      },
      {
        question: "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
        options: [
          "Travis",
          "Tiberius",
          "Trevor",
          "Tyrone"
        ],
        answer: 1
      },
      {
        question: "In the video game Overwatch, which playable character is infamous for saying \"It's high noon.\"?",
        options: [
          "Pharah",
          "McCree",
          "Soldier: 76",
          "Hanzo"
        ],
        answer: 1
      },
      {
        question: "Who was the most streamed artist on Spotify in 2019?",
        options: [
          "Post Malone",
          "Drake",
          "Ariana Grande",
          "Billie Eilish"
        ],
        answer: 0
      }
    ],
    3: [
      {
        question: "Which Indian actor played the character of 'Bhuvan' in the Oscar-nominated movie 'Lagaan'?",
        options: [
          "Aamir Khan",
          "Shah Rukh Khan",
          "Salman Khan",
          "Hrithik Roshan"
        ],
        answer: 0
      },
      {
        question: "Who is known as the 'Nightingale of India' for her contribution to music?",
        options: [
          "Asha Bhosle",
          "Lata Mangeshkar",
          "Alka Yagnik",
          "Shreya Ghoshal"
        ],
        answer: 1
      },
      {
        question: "Which movie is famous for the dialogue, 'Mogambo khush hua'?",
        options: [
          "Sholay",
          "Mr. India",
          "Shaan",
          "Karan Arjun"
        ],
        answer: 1
      },
      {
        question: "What was India's first full-length feature film, released in 1913?",
        options: [
          "Mughal-e-Azam",
          "Kisan Kanya",
          "Raja Harishchandra",
          "Alam Ara"
        ],
        answer: 2
      },
      {
        question: "Which actor debuted in Bollywood with the movie 'Deewana' in 1992?",
        options: [
          "Salman Khan",
          "Aamir Khan",
          "Shah Rukh Khan",
          "Saif Ali Khan"
        ],
        answer: 2
      },
      {
        question: "What was the name of the canceled projected by Blizzard Entertainment that would be later become Overwatch?",
        options: [
          "Omega",
          "Omnic",
          "Titan",
          "Ghost"
        ],
        answer: 2
      },
      {
        question: "In Avengers: Infinity War, the Reality Stone (aka the Aether) was kept under safe possession by who?",
        options: [
          "Scarlet Witch",
          "The Grandmaster",
          "Doctor Strange",
          "The Collector"
        ],
        answer: 3
      },
      {
        question: "Which company has exclusive rights to air episodes of the \"The Grand Tour\"?",
        options: [
          "CCTV",
          "Amazon",
          "BBC",
          "Netflix"
        ],
        answer: 1
      },
      {
        question: "What is the maximum HP in Terraria?",
        options: [
          "500",
          "1000",
          "400",
          "100"
        ],
        answer: 0
      },
      {
        question: "What war is Call Of Duty: Black Ops based on?",
        options: [
          "WW1",
          "WW3",
          "Vietnam",
          "Cold War"
        ],
        answer: 3
      },
      {
        question: "In Danganronpa: Trigger Happy Havoc, what is the protagonist's name?",
        options: [
          "Makoto Naegi",
          "Hajime Hinata",
          "Nagito Komaeda",
          "Komaru Naegi"
        ],
        answer: 0
      },
      {
        question: "In World of Warcraft, What was the original level cap?",
        options: [
          "50",
          "60",
          "70",
          "100"
        ],
        answer: 1
      },
      {
        question: "What was the original name of Crash Bandicoot?",
        options: [
          "Willie Wombat",
          "Coco Bandicoot",
          "Marvelous Mole",
          "Wally Wombat"
        ],
        answer: 0
      },
      {
        question: "Which of these characters is the mascot of the video game company SEGA?",
        options: [
          "Dynamite Headdy",
          "Sonic the Hedgehog",
          "Opa-Opa",
          "Alex Kidd"
        ],
        answer: 1
      },
      {
        question: "The acronym DOTA stands for",
        options: [
          "Defense of the Ancients",
          "Defense of the Animated",
          "Defense of the Antiques",
          "Defense of the Artifacts"
        ],
        answer: 0
      },
      {
        question: "Who directed the 2015 movie \"The Revenant\"?",
        options: [
          "Alejandro G. Iñárritu",
          "Wes Anderson",
          "David Fincher",
          "Christopher Nolan"
        ],
        answer: 0
      },
      {
        question: "Which country does the band Rammstein hail from?",
        options: [
          "Belgium",
          "Austria",
          "Germany",
          "Armenia"
        ],
        answer: 2
      },
      {
        question: "What is the name of the fictional retro-mod band starring Austin Powers as the lead vocalist?",
        options: [
          "Mister E",
          "Ming Tea",
          "Cough Fi",
          "Spear Mint"
        ],
        answer: 1
      },
      {
        question: "Which Kirby game first introduced Copy Abilities?",
        options: [
          "Kirby's Dream Land",
          "Kirby's Dream Land 2",
          "Kirby's Adventure",
          "Kirby Super Star"
        ],
        answer: 2
      },
      {
        question: "Who are the original creators of Rachet & Clank?",
        options: [
          "Rare",
          "Insomniac Games",
          "PixelTail Games",
          "Bethesda"
        ],
        answer: 1
      },
      {
        question: "How many games in the Crash Bandicoot series were released on the original Playstation?",
        options: [
          "4",
          "3",
          "6",
          "5"
        ],
        answer: 3
      },
      {
        question: "Who released the song \"Photograph\" in 2005?",
        options: [
          "Coldplay",
          "Fall Out Boy",
          "Nickelback",
          "Green Day"
        ],
        answer: 2
      },
      {
        question: "What is the name of the talking cat in Persona 5?",
        options: [
          "Marie",
          "Morgana",
          "Ryuji",
          "Teddie"
        ],
        answer: 1
      },
      {
        question: "Who is the leader of the Brotherhood of Nod in the Command and Conquer series?",
        options: [
          "Yuri",
          "CABAL",
          "Kane",
          "Joseph Stalin"
        ],
        answer: 2
      },
      {
        question: "M.U.G.E.N. is the name for what type of Game Engine?",
        options: [
          "Shooter Game",
          "Puzzle Game",
          "Fighting Game",
          "Platforming Game"
        ],
        answer: 2
      },
      {
        question: "When was the top-down online RPG \"Space Station 13\" released?",
        options: [
          "2003",
          "2010",
          "2006",
          "2000"
        ],
        answer: 0
      },
      {
        question: "What was Rage Against the Machine's debut album?",
        options: [
          "Rage Against the Machine",
          "Bombtrack",
          "Evil Empire",
          "The Battle Of Los Angeles"
        ],
        answer: 0
      },
      {
        question: "In an orchestra, what is the lowest member of the brass family?",
        options: [
          "Tuba",
          "Contrabass",
          "Bassoon",
          "Trombone"
        ],
        answer: 0
      },
      {
        question: "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
        options: [
          "Sub Sandwich",
          "Chicken Soup",
          "Casserole",
          "Pepperoni Pizza"
        ],
        answer: 2
      },
      {
        question: "Which of the following was not one of \"The Magnificent Seven\"?",
        options: [
          "Clint Eastwood",
          "Charles Bronson",
          "Robert Vaughn",
          "Steve McQueen"
        ],
        answer: 0
      },
      {
        question: "Which famous artist featured on Rowdy Rebel's 2015 song \"Computers\"?",
        options: [
          "Will.I.AM",
          "Lil Wayne",
          "Kendrick Lamar",
          "Bobby Shmurda "
        ],
        answer: 3
      },
      {
        question: "In the movie \"Blade Runner\", what is the term used for human-like androids ?",
        options: [
          "Skinjobs",
          "Cylons",
          "Replicants",
          "Synthetics"
        ],
        answer: 2
      },
      {
        question: "Which character was played by Dustin Diamond in the sitcom 'Saved by the Bell'?",
        options: [
          "Zack",
          "A.C. Slater",
          "Screech",
          "Mr. Belding"
        ],
        answer: 2
      },
      {
        question: "Which Nirvana album had a naked baby on the cover?",
        options: [
          "In Utero",
          "Bleach",
          "Nevermind",
          "Incesticide"
        ],
        answer: 2
      },
      {
        question: "In which series of games do you collect souls to empower you and buy weaponry and armor with?",
        options: [
          "The Legend of Zelda",
          "Monster Hunter",
          "Souls ",
          "Final Fantasy "
        ],
        answer: 2
      },
      {
        question: "From which country did the song \"Gangnam Style\" originate from?",
        options: [
          "North Korea",
          "South Korea",
          "Japan",
          "China"
        ],
        answer: 1
      },
      {
        question: "In the \"Hitman\" series, what is the name of the main character?",
        options: [
          "Agent Smith",
          "Agent 67",
          "Agent 47",
          "Agent 27"
        ],
        answer: 2
      },
      {
        question: "In Night In The Woods, where does Gregg work?",
        options: [
          "Ol' Pickaxe",
          "Food Donkey",
          "Video Outpost \"Too\"",
          "Snack Falcon"
        ],
        answer: 3
      },
      {
        question: "Before it's redesign of the company logo in the year 2000, which 3D shape is NOT represented in the Electronic Arts logo?",
        options: [
          "Cube",
          "Pyramid",
          "Sphere",
          "Cylinder"
        ],
        answer: 3
      },
      {
        question: "How many albums did King Gizzard & the Lizard Wizard release in 2017?",
        options: [
          "3",
          "5",
          "6",
          "2"
        ],
        answer: 1
      },
      {
        question: "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
        options: [
          "Jones",
          "Friday",
          "Wilson",
          "Billy"
        ],
        answer: 2
      },
      {
        question: "In the Nintendo DS game 'Ghost Trick: Phantom Detective', what is the name of the hitman seen at the start of the game?",
        options: [
          "One Step Ahead Tengo",
          "Cabanela",
          "Missile",
          "Nearsighted Jeego"
        ],
        answer: 3
      },
      {
        question: "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
        options: [
          "Midori Gurin",
          "Kokona Hruka",
          "Pipi Osu",
          "Oka Ruto"
        ],
        answer: 0
      },
      {
        question: "Which rap group released the album \"Straight Outta Compton\"?",
        options: [
          "Run-D.M.C.",
          "Beastie Boys",
          "N.W.A",
          "Wu-Tang Clan"
        ],
        answer: 2
      }
    ],
    4: [
      {
        question: "In the film 'Sholay', what was the name of the iconic villain played by Amjad Khan?",
        options: [
          "Mogambo",
          "Kancha Cheena",
          "Gabbar Singh",
          "Shakaal"
        ],
        answer: 2
      },
      {
        question: "Which of these movies won the National Film Award for Best Feature Film in 2023?",
        options: [
          "RRR",
          "Rocketry: The Nambi Effect",
          "The Kashmir Files",
          "Gangubai Kathiawadi"
        ],
        answer: 1
      },
      {
        question: "Who played the role of 'Jack Dawson' in the blockbuster romantic drama film Titanic?",
        options: [
          "Brad Pitt",
          "Johnny Depp",
          "Leonardo DiCaprio",
          "Tom Cruise"
        ],
        answer: 2
      },
      {
        question: "Which Indian movie was nominated for the Best Foreign Language Film Oscar in 2002?",
        options: [
          "Devdas",
          "Dil Chahta Hai",
          "Lagaan",
          "Taare Zameen Par"
        ],
        answer: 2
      },
      {
        question: "Which Pokémon can learn the move \"Secret Power\" by leveling up?",
        options: [
          "Arceus",
          "Audino",
          "Type:Null",
          "Silvally"
        ],
        answer: 1
      },
      {
        question: "Which of these artists has Lil A collaborated with?",
        options: [
          "Boonk Gang",
          "Lil Fortnite",
          "Lil Pump",
          "6ix9ine"
        ],
        answer: 1
      },
      {
        question: "In Rust, how many Timed Explosive Charges does it take to destroy a Ladder Hatch?",
        options: [
          "5",
          "3",
          "1",
          "2"
        ],
        answer: 2
      },
      {
        question: "In the game Nuclear Throne, which character starts with the least HP?",
        options: [
          "Melting",
          "Yung Venuz (Y.V.)",
          "Rebel",
          "Crystal"
        ],
        answer: 0
      },
      {
        question: "What vehicle in PUBG has the highest top speed?",
        options: [
          "Dacia",
          "Motorcycle",
          "Buggy",
          "PG-117"
        ],
        answer: 1
      },
      {
        question: "Who is the main character in \"The Stanley Parable\"?",
        options: [
          "The Adventure Line",
          "The Boss",
          "The Narrator",
          "Stanley"
        ],
        answer: 3
      },
      {
        question: "What album did The Lumineers release in 2016?",
        options: [
          "Cleopatra",
          "Tracks From The Attic",
          "The Lumineers",
          "Winter"
        ],
        answer: 0
      },
      {
        question: "In \"Fallout 4\" which faction is not present in the game?",
        options: [
          "The Enclave",
          "The Brotherhood of Steel",
          "The Institute",
          "The Minutemen"
        ],
        answer: 0
      },
      {
        question: "What was the name of the cancelled sequel of Team Fortress?",
        options: [
          "Team Fortress 2: Desert Mercenaries",
          "Team Fortress 2: Brotherhood of Arms",
          "Team Fortress 2: Return to Classic",
          "Team Fortress 2: Operation Gear Grinder"
        ],
        answer: 1
      },
      {
        question: "Who had a 1983 hit with the song 'Africa'?",
        options: [
          "Steely Dan",
          "Foreigner",
          "Toto",
          "Journey"
        ],
        answer: 2
      },
      {
        question: "What 1970's American ballad referred to the 1959 plane crash as the \"the day the music died\"?",
        options: [
          "I Will Always Love You",
          "Rock 'n' Roll Suicide",
          "American Pie",
          "Kentucky Rain"
        ],
        answer: 2
      },
      {
        question: "Which Animal Crossing game was for the Nintendo Wii?",
        options: [
          "Animal Crossing: City Folk",
          "Animal Crossing: Wild World",
          "Animal Crossing: Population Growing!",
          "Animal Crossing: New Leaf"
        ],
        answer: 0
      },
      {
        question: "Which of the following was a map that was in Team Fortress 2 at launch?",
        options: [
          "Upward",
          "Gold Rush",
          "Hoodoo",
          "Gravel Pit"
        ],
        answer: 3
      },
      {
        question: "Who directed the Kill Bill movies?",
        options: [
          "Arnold Schwarzenegger",
          "Quentin Tarantino",
          "Stanley Kubrick",
          "David Lean"
        ],
        answer: 1
      },
      {
        question: "Which one of the following musical instruments is NOT a part of the Woodwind section?",
        options: [
          "Alto Saxophone",
          "Trumpet",
          "Clarinet",
          "Oboe"
        ],
        answer: 1
      },
      {
        question: "In Supernatural, what's is Sam's brothers name?",
        options: [
          "Dean",
          "Dave",
          "Steve",
          "Mike"
        ],
        answer: 0
      },
      {
        question: "In Avengers: Infinity War, where was the Soul Stone located?",
        options: [
          "Knowhere",
          "Xandar",
          "Vormir",
          "Asgard"
        ],
        answer: 2
      },
      {
        question: "When was the movie 'Con Air' released?",
        options: [
          "1997",
          "1990",
          "1999",
          "1985"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT one of the main characters in Grand Theft Auto V’s story mode?",
        options: [
          "Tommy Vercetti",
          "Michael de Santa",
          "Trevor Phillips",
          "Franklin Clinton"
        ],
        answer: 0
      },
      {
        question: "What power does Max Caulfield from \"Life is Strange\" have?",
        options: [
          "Rewinding Time",
          "Telepathy",
          "Invisibility",
          "Super Strength"
        ],
        answer: 0
      },
      {
        question: "What was the first video game in the Batman \"Arkham\" series?",
        options: [
          "Arkham Origins",
          "Arkham City",
          "Arkham Asylum",
          "Arkham Knight"
        ],
        answer: 2
      },
      {
        question: "In what year was \"Antichamber\" released?",
        options: [
          "2012",
          "2013",
          "2011",
          "2014"
        ],
        answer: 1
      },
      {
        question: "Which famous rapper is featured in Jack Ü (Skrillex and Diplo)'s 2015 single called \"Febreze\"?",
        options: [
          "Fatman Scoop",
          "Kendrick Lamar",
          "Future",
          "2 Chainz"
        ],
        answer: 3
      },
      {
        question: "Who plays protagonist Ethan Hunt in the \"Mission: Impossible\" film-series?",
        options: [
          "Pierce Brosnan",
          "Tom Cruise",
          "Sean Connery",
          "Johnny Depp"
        ],
        answer: 1
      },
      {
        question: "Which year was the album \"Year of the Snitch\" by Death Grips released?",
        options: [
          "2018",
          "2011",
          "2013",
          "2017"
        ],
        answer: 0
      },
      {
        question: "Who starred in the film 1973 movie \"Enter The Dragon\"?",
        options: [
          "Bruce Lee",
          " Yun-Fat Chow",
          "Jet Li",
          "Jackie Chan"
        ],
        answer: 0
      },
      {
        question: "Who created the \"Metal Gear\" Series?",
        options: [
          "Hideo Kojima",
          "Shigeru Miyamoto",
          "Hiroshi Yamauchi",
          "Gunpei Yokoi"
        ],
        answer: 0
      }
    ],
    5: [
      {
        question: "Who is the music composer of the song 'Naatu Naatu' from the film RRR?",
        options: [
          "A. R. Rahman",
          "M. M. Keeravani",
          "Pritam",
          "Santhosh Narayanan"
        ],
        answer: 1
      },
      {
        question: "Which Bollywood movie is based on the life of Indian cricket captain Mahendra Singh Dhoni?",
        options: [
          "83",
          "M.S. Dhoni: The Untold Story",
          "Azhar",
          "Sachin: A Billion Dreams"
        ],
        answer: 1
      },
      {
        question: "Which of these is the first superhero movie in the Marvel Cinematic Universe (MCU) released in 2008?",
        options: [
          "The Incredible Hulk",
          "Captain America: The First Avenger",
          "Iron Man",
          "Thor"
        ],
        answer: 2
      },
      {
        question: "Which character in the \"Animal Crossing\" series uses the phrase \"zip zoom\" when talking to the player?",
        options: [
          "Drake",
          "Scoot",
          "Bill",
          "Mallary"
        ],
        answer: 1
      },
      {
        question: "The 2002 film \"28 Days Later\" is mainly set in which European country?",
        options: [
          "France",
          "United Kingdom",
          "Germany",
          "Italy"
        ],
        answer: 1
      },
      {
        question: "Max Schreck, a famous German silent film actor, plays a famous monster in which 1922 film?",
        options: [
          "The Headless Horseman",
          "Nosferatu",
          "Frankenstein ",
          "Häxan"
        ],
        answer: 1
      },
      {
        question: "Which of the following characters from the game \"Overwatch\" was revealed to be homosexual in December of 2016?",
        options: [
          "Tracer",
          "Widowmaker",
          "Symmetra",
          "Sombra"
        ],
        answer: 0
      },
      {
        question: "Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?",
        options: [
          "Quake Engine",
          "Doom Engine",
          "id Engine",
          "Source Engine"
        ],
        answer: 0
      },
      {
        question: "Which Beatles album does NOT feature any of the band members on it's cover?",
        options: [
          "Abbey Road",
          "The Beatles (White Album)",
          "Magical Mystery Tour",
          "Rubber Soul"
        ],
        answer: 1
      },
      {
        question: "In Pokemon, the ability Wonder Guard is exclusive to which Pokemon?",
        options: [
          "Sableye",
          "Shedinja ",
          "Silvally ",
          "Spiritomb"
        ],
        answer: 1
      },
      {
        question: "Which of the following games has the largest map size?",
        options: [
          "The Witcher 3:  Wild Hunt",
          "The Elder Scrolls 4:  Oblivion",
          "Grand Theft Auto 5",
          "Just Cause 2"
        ],
        answer: 3
      },
      {
        question: "What year was the game Dishonored released?",
        options: [
          "2011",
          "2013",
          "2012",
          "2008"
        ],
        answer: 2
      },
      {
        question: "Who is able to grab the survivors with his tongue in Left 4 Dead?",
        options: [
          "Hunter",
          "Jockey",
          "Boomer",
          "Smoker"
        ],
        answer: 3
      },
      {
        question: "In Minecraft, which two items must be combined to craft a torch?",
        options: [
          "Wood and Coal",
          "Stick and Fire",
          "Wood and Fire",
          "Stick and Coal"
        ],
        answer: 3
      },
      {
        question: "In the video game \"Team Fortress 2\", which class is able to double jump?",
        options: [
          "Pyro",
          "Spy",
          "Scout",
          "Engineer"
        ],
        answer: 2
      },
      {
        question: "In the Yakuza series who is the Dragon of Dojima?",
        options: [
          "Haruka Sawamura",
          "Ryuji Goda",
          "Sohei Dojima",
          "Kazuma Kiryu"
        ],
        answer: 3
      },
      {
        question: "In 2006, which band released their debut album \"A Fever You Can't Sweat Out\"?",
        options: [
          "Fall Out Boy",
          "Panic! At the Disco",
          "My Chemical Romance",
          "Twenty One Pilots"
        ],
        answer: 1
      },
      {
        question: "Which of the following Zelda games did not feature Ganon as a final boss?",
        options: [
          "Ocarina of Time",
          "Breath of the Wild",
          "Majora's Mask",
          "Skyward Sword"
        ],
        answer: 2
      },
      {
        question: "Grant Gustin plays which superhero on the CW show of the same name?",
        options: [
          "The Flash",
          "The Arrow",
          "Black Canary",
          "Daredevil"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT a main playable character in \"Grand Theft Auto V\"?",
        options: [
          "Trevor",
          "Franklin",
          "Michael",
          "Lamar"
        ],
        answer: 3
      },
      {
        question: "In the Super Smash Bros. series, which character was the first one to return to the series after being absent from a previous game?",
        options: [
          "Dr. Mario",
          "Mewtwo",
          "Roy",
          "Lucas"
        ],
        answer: 0
      },
      {
        question: "In the show \"Futurama\" what is Fry's full name?",
        options: [
          "Fry Philip",
          "Fry Rodríguez",
          "Fry J. Philip",
          "Philip J. Fry"
        ],
        answer: 3
      },
      {
        question: "What video game sparked controversy because of its hidden \"Hot Coffee\" minigame?",
        options: [
          "Cooking Mama",
          "Hitman: Blood Money",
          "Grand Theft Auto: San Andreas",
          "Grand Theft Auto: Vice City"
        ],
        answer: 2
      },
      {
        question: "In what year was \"Metal Gear Solid\" released in North America?",
        options: [
          "2004",
          "1998",
          "1987",
          "2001"
        ],
        answer: 1
      },
      {
        question: "What Led Zeppelin album contains \"Stairway to Heaven\"?",
        options: [
          "Houses of the Holy",
          "Physical Graffiti",
          "Led Zeppelin IV",
          "Led Zeppelin III"
        ],
        answer: 2
      },
      {
        question: "What was the best selling album of 2015?",
        options: [
          "Adele, 25",
          "Justin Bieber, Purpose",
          "Fetty Wap, Fetty Wap",
          "Taylor Swift, 1989"
        ],
        answer: 0
      },
      {
        question: "The “fairy” type made it’s debut in which generation of the Pokemon core series games?",
        options: [
          "6th",
          "2nd",
          "7th",
          "4th"
        ],
        answer: 0
      },
      {
        question: "In what year was Garry's Mod released as a standalone title on Valve's Steam distribution service?",
        options: [
          "2007",
          "2003",
          "2004",
          "2006"
        ],
        answer: 3
      },
      {
        question: "In Dungeons and Dragons (5th edition), what stat do you normally add onto your initiative die roll?",
        options: [
          "Strength",
          "Wisdom",
          "Speed",
          "Dexterity"
        ],
        answer: 3
      },
      {
        question: "Who is the main protagonist in Danganronpa 2: Goodbye Despair?",
        options: [
          "Junko Enoshima",
          "Makoto Naegi",
          "Nagito Komaeda",
          "Hajime Hinata"
        ],
        answer: 3
      },
      {
        question: "In \"Star Trek: Voyager\", which episode did Voyager establish real-time communication with Starfleet Headquarters?",
        options: [
          "Counterpoint",
          "Message In A Bottle",
          "Pathfinder",
          "Someone To Watch Over Me"
        ],
        answer: 2
      },
      {
        question: "\"Some people call me the space cowboy\" is the first line from what song?",
        options: [
          "Fly Like an Eagle",
          "The Joker",
          "Fandango",
          "Take The Money and Run"
        ],
        answer: 1
      },
      {
        question: "What was the first monster to appear alongside Godzilla?",
        options: [
          "King Ghidora",
          "Mothra",
          "King Kong",
          "Anguirus"
        ],
        answer: 3
      },
      {
        question: "Which of the following awards do Matt Stone and Trey Parker NOT have?",
        options: [
          "Tony",
          "Oscar",
          "Grammy",
          "Emmy"
        ],
        answer: 1
      },
      {
        question: "In Dota 2, Wraith King was previously known as...",
        options: [
          "Skull King",
          "Skeleton King",
          "Hell King",
          "Reaper King"
        ],
        answer: 1
      },
      {
        question: "In chess, which is a characteristic of the King's Gambit?",
        options: [
          "Sacrificing the king for a queen",
          "Sacrificing a pawn",
          "Castling kingside",
          "Moving the king on the 2nd move"
        ],
        answer: 1
      },
      {
        question: "When does \"Rogue One: A Star Wars Story\" take place chronologically in the series?",
        options: [
          "After Episode 6",
          "Between Episode 4 and 5",
          "Before Episode 1",
          "Between Episode 3 and 4"
        ],
        answer: 3
      },
      {
        question: "Who was \"Kung Fu Fighting\" in 1974?",
        options: [
          "Heatwave",
          "Kool & the Gang",
          "The Bee Gees",
          "Carl Douglas"
        ],
        answer: 3
      },
      {
        question: "In \"Jurassic World\", what is the name of the dinosaur that is a genetic hybrid?",
        options: [
          "Indominus Rex",
          "Mosasaurus",
          "Pteranodon",
          "Tyrannosaurus Rex "
        ],
        answer: 0
      },
      {
        question: "In \"Rick And Morty\", who shot \"Mr. Poopybutthole\" in the episode \"Total Rickall\"?",
        options: [
          "Morty",
          "Rick",
          "Jerry",
          "Beth"
        ],
        answer: 3
      },
      {
        question: "How many spaces are there on a standard Monopoly board?",
        options: [
          "36",
          "55",
          "40",
          "28"
        ],
        answer: 2
      },
      {
        question: "Who is the last boss in Night In The Woods' Demontower minigame?",
        options: [
          "King Skellie ",
          "The Blood Thief",
          "Krampus ",
          "Mega Hairball "
        ],
        answer: 1
      },
      {
        question: "Which Elite Four member from the first generation of Pokémon became the champion in the next generation?",
        options: [
          "Bruno",
          "Lance",
          "Agatha",
          "Lorelei"
        ],
        answer: 1
      }
    ],
    6: [
      {
        question: "Who is the host of the popular TV quiz show 'Kaun Banega Crorepati'?",
        options: [
          "Shah Rukh Khan",
          "Amitabh Bachchan",
          "Salman Khan",
          "Aamir Khan"
        ],
        answer: 1
      },
      {
        question: "Which Indian director is famous for his films like 'Pather Panchali' and won an Honorary Oscar?",
        options: [
          "Satyajit Ray",
          "Raj Kapoor",
          "Guru Dutt",
          "Bimal Roy"
        ],
        answer: 0
      },
      {
        question: "In the sitcom 'Friends', how many times has Ross Geller been married?",
        options: [
          "Once",
          "Twice",
          "Three times",
          "Four times"
        ],
        answer: 2
      },
      {
        question: "Who was the first Indian to win an Oscar, awarded for Costume Design in 1983?",
        options: [
          "Bhanu Athaiya",
          "A. R. Rahman",
          "Gulzar",
          "Satyajit Ray"
        ],
        answer: 0
      },
      {
        question: "From the Meme Culture, which Mario game immerged \"Weegee\"?",
        options: [
          "Mario is Missing! MSX Version",
          "Mario is Missing! SNES Version",
          "Mario is Missing! MS-DOS Version ",
          "Mario is Missing! NES Version"
        ],
        answer: 2
      },
      {
        question: "About how many Slinkys were sold in their first 60 years (from 1945 to 2005)?",
        options: [
          "100 Million",
          "450 Million",
          "1 Billion",
          "300 Million"
        ],
        answer: 3
      },
      {
        question: "Which rapper had an album that went double platinum with no features?",
        options: [
          "Kendrick Lamar",
          "J. Cole",
          "Drake",
          "Big Sean"
        ],
        answer: 1
      },
      {
        question: "In Minecraft, how many items can a single piece of coal smelt when used in a furnace?",
        options: [
          "6",
          "8",
          "10",
          "12"
        ],
        answer: 1
      },
      {
        question: "What is the name of the 2016 studio album by the French electronic music duo Justice?",
        options: [
          "Randy",
          "Pleasure",
          "Safe and Sound",
          "Woman"
        ],
        answer: 3
      },
      {
        question: "Which country was Eliza \"Ash\" Cohen from \"Tom Clancy's Rainbow Six Siege\" born in?",
        options: [
          "Canada",
          "Mexico",
          "Israel",
          "United States of America"
        ],
        answer: 2
      },
      {
        question: "What was the first weapon pack for \"PAYDAY 2\"?",
        options: [
          "The Gage Historical Pack",
          "The Overkill Pack",
          "The Gage Weapon Pack #1",
          "The Gage Chivalry Pack"
        ],
        answer: 2
      },
      {
        question: "In the \"Call Of Duty: Zombies\" map \"Origins\", how many steps are there to upgrade a Staff?",
        options: [
          "3",
          "7",
          "5",
          "4"
        ],
        answer: 3
      },
      {
        question: "Who was the mascot of SEGA before \"Sonic the Hedgehog\"?",
        options: [
          "Alex Kidd",
          "Opa Opa",
          "Ristar",
          "NiGHTS"
        ],
        answer: 0
      },
      {
        question: "Which actor provided the voice for the main character's father in Fallout 3?",
        options: [
          "Liam Neeson",
          "Kiefer Sutherland",
          "Brendan Gleeson",
          "Robbie Coltrane"
        ],
        answer: 0
      },
      {
        question: "The song \"Feel Good Inc.\" by British band Gorillaz features which hip hop group?",
        options: [
          "OutKast",
          "Cypress Hill",
          "De La Soul",
          "Public Enemy"
        ],
        answer: 2
      },
      {
        question: "What name does the little headcrab in \"Half Life 2\" have?",
        options: [
          "Jerry",
          "Jumperr",
          "Drett",
          "Lamarr"
        ],
        answer: 3
      },
      {
        question: "What was the first game ever released that ran on the Source engine?",
        options: [
          "Counter-Strike: Source",
          "Half-Life 2",
          "Garry's Mod",
          "Team Fortress 2"
        ],
        answer: 0
      },
      {
        question: "Which of the following was not an actor/actress on the American television show \"Saturday Night Live\" in Season 42?",
        options: [
          "Tina Fey",
          "Mikey Day",
          "Kate McKinnon",
          "Sasheer Zamata"
        ],
        answer: 0
      },
      {
        question: "In the 2002 film \"Kung Pow! Enter the Fist\", why was Wimp Lo purposely trained wrong?",
        options: [
          "Revenge",
          "For cheating",
          "To test him",
          "As a joke"
        ],
        answer: 3
      },
      {
        question: "In the 2002 video game \"Kingdom Hearts\", how many playable worlds were there?",
        options: [
          "14",
          "11",
          "16",
          "13"
        ],
        answer: 0
      },
      {
        question: "What is the birth name of Michael Caine?",
        options: [
          "Martin Michaels",
          "Morris Coleman",
          "Maurice Micklewhite",
          "Carl Myers"
        ],
        answer: 2
      },
      {
        question: "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca's roar and R2-D2's beeps and whistles?",
        options: [
          "Ken Burns",
          "Ben Burtt",
          "Miranda Keyes",
          "Ralph McQuarrie"
        ],
        answer: 1
      },
      {
        question: "In \"The Hobbit,\" who was head of the White Council?",
        options: [
          "Saruman",
          "Gandalf",
          "Elrond",
          "Lady Galadriel "
        ],
        answer: 0
      },
      {
        question: "In \"Overwatch\", what is the name of Mercy's \"ultimate ability\"?",
        options: [
          "Earthshatter",
          "Valkyrie",
          "Rocket Barrage",
          "Molten Core"
        ],
        answer: 1
      },
      {
        question: "In \"The Simpsons\", what is the real name of \"Comic Book Guy\"?",
        options: [
          "Edward Stone",
          "Comic Book Guy",
          "Jack Richardson",
          "Jeff Albertson"
        ],
        answer: 3
      },
      {
        question: "In \"Clash Royale\" what is Arena 4 called?",
        options: [
          "Royal Arena",
          "Barbarian Bowl",
          "P.E.K.K.A's Playhouse",
          "Spell Valley"
        ],
        answer: 3
      },
      {
        question: "Which European capital city gives its name to a 1981 song by Ultravox?",
        options: [
          "Berlin",
          "Brussels",
          "Vienna",
          "Paris"
        ],
        answer: 2
      },
      {
        question: "Which novelty band was best known for their UK chart hits \"Combine Harvester\" and \"I Am a Cider Drinker\" in 1976?",
        options: [
          "The Wurzels",
          "Goldie Lookin Chain",
          "The Firm",
          "Bonzo Dog Doo-Dah Band"
        ],
        answer: 0
      },
      {
        question: "What is not a default game mode in Counter-Strike (2000)?",
        options: [
          "Hostage Rescue",
          "Assassination",
          "Bomb Defusal",
          "Arms Race"
        ],
        answer: 3
      },
      {
        question: "What is the name of the only female \"Original Four\" Kerbal in Kerbal Space Program?",
        options: [
          "Samantha Kerman",
          "Emiko Kerman",
          "Catmund Kerman",
          "Valentina Kerman"
        ],
        answer: 3
      },
      {
        question: "Alan Reed is known for providing the voice of which character?",
        options: [
          "Fred Flintstone",
          "Bugs Bunny",
          "Fangface",
          "G.I. Joe"
        ],
        answer: 0
      },
      {
        question: "Which of these is not a playable character in \"Enter The Gungeon?\"",
        options: [
          "The Robot",
          "The Cultist",
          "The Bullet",
          "The Heavy"
        ],
        answer: 3
      },
      {
        question: "Who is the main character in most of the games of the YS series?",
        options: [
          "Roger Wilco",
          "Estelle Bright",
          "Adol Christin ",
          "Character doesn't have a name"
        ],
        answer: 2
      },
      {
        question: "Who played Batman in the 1997 film \"Batman and Robin\"?",
        options: [
          "Michael Keaton",
          "Christian Bale",
          "Val Kilmer",
          "George Clooney"
        ],
        answer: 3
      },
      {
        question: "Who was the youngest member of The Beatles?",
        options: [
          "John Lennon",
          "Paul McCartney",
          "Ringo Starr",
          "George Harrison"
        ],
        answer: 3
      },
      {
        question: "With his distinctive red hair, which Italian composer, born in 1678, was known as the 'Red Priest'?",
        options: [
          "Verdi",
          "Puccini",
          "Monteverdi",
          "Vivaldi"
        ],
        answer: 3
      },
      {
        question: "Which director directed the movie \"Pan's Labyrinth\"?",
        options: [
          "Alejandro González Iñárritu",
          " Alejandro Jodorowsky",
          "Alfonso Cuarón",
          "Guillermo Del Toro"
        ],
        answer: 3
      },
      {
        question: "In the Mad Max franchise, what type of car is the Pursuit Special driven by Max?",
        options: [
          "Holden Monaro",
          "Ford Falcon",
          "Pontiac Firebird",
          "Chrysler Valiant Charger"
        ],
        answer: 1
      },
      {
        question: "What is the mod \"Cry of Fear\" based off of?",
        options: [
          "Half-Life",
          "Half-Life 2",
          "Counter Strike: Source",
          "It's a stand alone game, not a mod"
        ],
        answer: 0
      },
      {
        question: "What is the name of the first \"Star Wars\" film by release order?",
        options: [
          "The Phantom Menace",
          "A New Hope",
          "Revenge of the Sith",
          "The Force Awakens"
        ],
        answer: 1
      },
      {
        question: "In Hitman: Blood Money, what is the name of the target in the mission \"Death of a Showman\"?",
        options: [
          "Maynard John",
          "Manuel Delgado",
          "Joseph Clarence",
          "The Swing King"
        ],
        answer: 2
      },
      {
        question: "Who performed the hit single 'Call Me' for the 1980 film 'American Gigolo'?",
        options: [
          "Janet Jackson",
          "Tina Turner",
          "Blondie",
          "Madonna"
        ],
        answer: 2
      },
      {
        question: "In what year was the card game Magic: the Gathering first introduced?",
        options: [
          "1993",
          "1998",
          "1987",
          "2003"
        ],
        answer: 0
      },
      {
        question: "In \"Breaking Bad,\" which main character was planned to be killed in Season 1 but wasn't because the show creator liked the actor?",
        options: [
          "Saul Goodman",
          "Gus Fring",
          "Jesse Pinkman",
          "Hank Schrader"
        ],
        answer: 2
      },
      {
        question: "In the PAYDAY series, who is the iconic leader of the PAYDAY gang?",
        options: [
          "Wolf",
          "Chains",
          "Hoxton",
          "Dallas"
        ],
        answer: 3
      },
      {
        question: "What was Taylor Swift's 5th album called?",
        options: [
          "Speak Now",
          "1989",
          "Fearless",
          "Red"
        ],
        answer: 1
      },
      {
        question: "One of the Nintendo Entertainment System voice channels supports playback of sound samples. Which one?",
        options: [
          "DMC",
          "Triangle",
          "Noise",
          "Square"
        ],
        answer: 0
      },
      {
        question: "What is the main character of Metal Gear Solid 2?",
        options: [
          "Venom Snake",
          "Raiden",
          "Solidus Snake",
          "Big Boss"
        ],
        answer: 1
      },
      {
        question: "In what year was Pokémon Diamond & Pearl released in Japan?",
        options: [
          "2008",
          "2006",
          "2009",
          "2007"
        ],
        answer: 1
      },
      {
        question: "In Night In The Woods, what is Mae Borowski mother's name?",
        options: [
          "Jenny",
          "Kate",
          "Candy",
          "Margaret"
        ],
        answer: 2
      },
      {
        question: "Which of these black metal acts was a solo project?",
        options: [
          "Mayhem",
          "Darkthrone",
          "Burzum",
          "Dissection"
        ],
        answer: 2
      },
      {
        question: "Which British female singer and songwriter was sampled Eminem's hit single 'Stan'?",
        options: [
          "Dido",
          "Lily Allen",
          "Leona Lewis",
          "Adele"
        ],
        answer: 0
      },
      {
        question: "In \"Call Of Duty: Zombies\", completing which map's main easter egg will reward you with the achievement, \"Little Lost Girl\"?",
        options: [
          "Origins",
          "Moon",
          "Revelations",
          "Tranzit"
        ],
        answer: 0
      },
      {
        question: "Which of these was NOT a launch title for the Nintendo 64?",
        options: [
          "Super Mario 64",
          "Saikyō Habu Shōgi",
          "Mario Kart 64",
          "Pilotwings 64"
        ],
        answer: 2
      },
      {
        question: "What is the name of the final boss in Turok: Dinosaur Hunter?",
        options: [
          "Lord Tyrannus",
          "The Primagen",
          "Oblivion",
          "The Campaigner"
        ],
        answer: 3
      },
      {
        question: "Final Fantasy VI was originally released outside Japan under what name?",
        options: [
          "Final Fantasy II",
          "Final Fantasy VI",
          "Final Fantasy V",
          "Final Fantasy III"
        ],
        answer: 3
      },
      {
        question: "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?",
        options: [
          "McLaren P1 GTR",
          "Lotus E23",
          "Ferrari FXX-K",
          "Aston Martin Vulcan"
        ],
        answer: 3
      },
      {
        question: "Who co-founded the YouTube Let's Play channel \"Game Grumps\" alongside Newgrounds animator Egoraptor?",
        options: [
          "Tobuscus",
          "Markiplier",
          "Pewdiepie",
          "JonTron"
        ],
        answer: 3
      },
      {
        question: "Who is the main character in the VHS tape included in the board game Nightmare?",
        options: [
          "The Gatekeeper",
          "The Kryptkeeper",
          "The Nightmare",
          "The Monster"
        ],
        answer: 0
      },
      {
        question: "In what year was the original Sonic the Hedgehog game released?",
        options: [
          "1989",
          "1995",
          "1991",
          "1993"
        ],
        answer: 2
      },
      {
        question: "Which of these \"Worms\" games featured 3D gameplay?",
        options: [
          "Worms 4: Mayhem",
          "Worms Reloaded",
          "Worms: Open Warfare 2",
          "Worms W.M.D"
        ],
        answer: 0
      }
    ],
    7: [
      {
        question: "Which Bollywood actor is popularly known as the 'Khiladi' of Bollywood?",
        options: [
          "Sanjay Dutt",
          "Sunny Deol",
          "Akshay Kumar",
          "Suniel Shetty"
        ],
        answer: 2
      },
      {
        question: "In the movie 'Dangal', Aamir Khan plays the role of which real-life wrestler?",
        options: [
          "Mahavir Singh Phogat",
          "Sushil Kumar",
          "Yogeshwar Dutt",
          "Bajrang Punia"
        ],
        answer: 0
      },
      {
        question: "Which actor played the role of the Joker in the 2008 film 'The Dark Knight'?",
        options: [
          "Jack Nicholson",
          "Jared Leto",
          "Heath Ledger",
          "Joaquin Phoenix"
        ],
        answer: 2
      },
      {
        question: "Who directed the historical masterpiece film 'Mughal-e-Azam'?",
        options: [
          "Bimal Roy",
          "K. Asif",
          "Raj Kapoor",
          "Guru Dutt"
        ],
        answer: 1
      },
      {
        question: "Which one of these is NOT a character in the video game Overwatch",
        options: [
          "Reaper",
          "Hana Song",
          "Garen",
          "Tracer"
        ],
        answer: 2
      },
      {
        question: "Which of these songs was NOT released in the 90s?",
        options: [
          "\"Vogue\" by Madonna",
          "\"Can't Stop This Thing We Started\" by Bryan Adams",
          "\"I Want It All\" by Queen",
          "\"King of Wishful Thinking\" by Go West"
        ],
        answer: 2
      },
      {
        question: "What American actor directed and co-starred alongside Emily Blunt in 2018's horror film \"A Quiet Place\"?",
        options: [
          "Willem Dafoe",
          "Josh Brolin",
          "John Krasinski",
          "Keanu Reeves"
        ],
        answer: 2
      },
      {
        question: "In the game \"Red Dead Redemption\", what is the name of John Marston's dog?",
        options: [
          "Apollo",
          "Rutus",
          "Rufus",
          "Finn"
        ],
        answer: 2
      },
      {
        question: "In the 2014 film \"Birdman\", what is the primary instrument in the score?",
        options: [
          "Saxophone",
          "Actual Live Birds Singing",
          "Drums",
          "Violin"
        ],
        answer: 2
      },
      {
        question: "When did Spongebob Squarepants first air?",
        options: [
          "July 20, 2000",
          "June 27, 1997",
          "February 6, 2003",
          "May 1, 1999"
        ],
        answer: 3
      },
      {
        question: "What was David Bowie's real surname?",
        options: [
          "Carter",
          "Jones",
          "Edwards",
          "Johnson"
        ],
        answer: 1
      },
      {
        question: "Which of these stages is not playable in \"Super Smash Bros. for Wii U\"?",
        options: [
          "Bridge of Eldin",
          "75m",
          "Miiverse",
          "Fountain of Dreams"
        ],
        answer: 3
      },
      {
        question: "In the 2000 video game \"Crimson Skies,\" what was the name of the protagonists' zeppelin?",
        options: [
          "Pandora",
          "Helios",
          "Icarus",
          "Orion"
        ],
        answer: 0
      },
      {
        question: "In the Super Smash Bros. series, which game first featured Luigi as a playable character?",
        options: [
          "Super Smash Bros. Brawl",
          "Super Smash Bros.",
          "Super Smash Bros. Melee",
          "Super Smash Bros. for Wii U"
        ],
        answer: 1
      },
      {
        question: "How many times do you fight the Imprisoned in The Legend of Zelda: Skyward Sword?",
        options: [
          "3",
          "4",
          "5",
          "2"
        ],
        answer: 0
      },
      {
        question: "Which character does the player play as in the video game \"Bastion\"?",
        options: [
          "The Kid",
          "Rucks",
          "Zulf",
          "Zia"
        ],
        answer: 0
      },
      {
        question: "From which album is the Gorillaz song, \"On Melancholy Hill\" featured in?",
        options: [
          "Humanz",
          "Plastic Beach",
          "The Fall",
          "Demon Days"
        ],
        answer: 1
      },
      {
        question: "What engine did the original \"Half-Life\" run on?",
        options: [
          "Unreal",
          "Quake",
          "Source",
          "GoldSrc"
        ],
        answer: 3
      },
      {
        question: "Which of these video game series have NOT had a promotional item appear in Team Fortress 2?",
        options: [
          "Fallout",
          "The Binding of Isaac",
          "Quake",
          "Half-Life"
        ],
        answer: 3
      },
      {
        question: "The 1952 musical composition 4'33\", composed by prolific American composer John Cage, is mainly comprised of what sound?",
        options: [
          "Silence",
          "Farts",
          "People talking",
          "Cricket chirps"
        ],
        answer: 0
      },
      {
        question: "Which of the following stars was not mentioned in the lyrics of Madonna's \"Vogue\"?",
        options: [
          "Marlene Dietrich",
          "Lana Turner",
          "Mae West",
          "Grace Kelly"
        ],
        answer: 2
      },
      {
        question: "Which Touhou character is a Hell Raven?",
        options: [
          "Aya Shameimaru",
          "Marisa Kirisame",
          "Utsuho Reiuji",
          "Flandre Scarlet"
        ],
        answer: 2
      },
      {
        question: "Where does \"Gasolina\" rapper Daddy Yankee originate from?",
        options: [
          "Spain",
          "Cuba",
          "Mexico",
          "Puerto Rico"
        ],
        answer: 3
      },
      {
        question: "The first half-hour CGI cartoon, ReBoot, aired on which year?",
        options: [
          "1993",
          "1998",
          "1994",
          "1999"
        ],
        answer: 2
      },
      {
        question: "What episode of \"Mr. Bean\" saw him trying to prevent people from seeing him naked?",
        options: [
          "The Trouble with Mr. Bean",
          "Back to School Mr. Bean",
          "Mr. Bean in Room 426",
          "Mr. Bean Goes to Town"
        ],
        answer: 2
      },
      {
        question: "In Overwatch, how old is Reinhardt Wilhelm?",
        options: [
          "62",
          "65",
          "59",
          "61"
        ],
        answer: 3
      },
      {
        question: "Which of these artists has NOT been a member of dancehall group Major Lazer?",
        options: [
          "Jillionaire",
          "Walshy Fire",
          "Skrillex",
          "Diplo"
        ],
        answer: 2
      },
      {
        question: "In the Portal series of games, who was the founder of Aperture Science?",
        options: [
          "Cave Johnson",
          "Gordon Freeman",
          "Wallace Breen",
          "GLaDOs"
        ],
        answer: 0
      },
      {
        question: "The co-creator of Gorillaz, Damon Albarn, is also the lead singer of what band?",
        options: [
          "Blur",
          "Queens of the Stone Age",
          "Oasis",
          "Radiohead"
        ],
        answer: 0
      },
      {
        question: "Which of the following Call of Duty games was a PS3 launch title?",
        options: [
          "Call of Duty 4: Modern Warfare",
          "Call of Duty 3",
          "Call of Duty: World at War",
          "Call of Duty: Roads to Victory"
        ],
        answer: 1
      },
      {
        question: "Which is not a playable character in the 2005 video game Killer7?",
        options: [
          "Mask de Smith",
          "Coyote Smith",
          "Frank Smith",
          "Dan Smith"
        ],
        answer: 2
      },
      {
        question: "In Dead by Daylight, which killer perk applies the mangled effect?",
        options: [
          "Knock Out",
          "Thanatophobia",
          "Enduring",
          "Sloppy Butcher"
        ],
        answer: 3
      },
      {
        question: "Killing Floor started as a mod for which Unreal Engine 2 game?",
        options: [
          "Unreal Tournament 3",
          "Postal",
          "Deus Ex: Invisible War",
          "Unreal Tournament 2004"
        ],
        answer: 3
      },
      {
        question: "In \"Resident Evil 2\", which virus was William Birkin mutated by?",
        options: [
          "G-Virus",
          "T-Virus",
          "E-Virus",
          "C-Virus"
        ],
        answer: 0
      },
      {
        question: "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
        options: [
          "Barliman Butterbur",
          "Tom Bombadil",
          "Celeborn",
          "Strider"
        ],
        answer: 1
      },
      {
        question: "Which game was the first time Mario was voiced by Charles Martinet?",
        options: [
          "Super Mario 64",
          "Mario Tennis",
          "Mario's Game Gallery",
          "Dr. Mario 64"
        ],
        answer: 2
      },
      {
        question: "What is the name of the island introduced in the ARMA III: APEX expansion pack?",
        options: [
          "Altis",
          "Tanoa",
          "Stratis",
          "Malden"
        ],
        answer: 1
      },
      {
        question: "Who's the creator of Geometry Dash?",
        options: [
          "Andrew Spinks",
          "Scott Cawthon",
          "Adam Engels",
          "Robert Topala"
        ],
        answer: 3
      },
      {
        question: "In \"Super Mario World 2: Yoshi's Island\", which of these colors is NOT represented by a Yoshi?",
        options: [
          "White",
          "Red",
          "Purple",
          "Brown"
        ],
        answer: 0
      },
      {
        question: "How long was Ken Jennings' win streak on Jeopardy?",
        options: [
          "74",
          "88",
          "49",
          "62"
        ],
        answer: 0
      },
      {
        question: "Peter Jackson's film series \"The Lord of the Rings\" was shot entirely in which country?",
        options: [
          "Canada",
          "Scotland",
          "New Zealand",
          "Iceland"
        ],
        answer: 2
      },
      {
        question: "Which album by American rapper Kanye West contained songs such as \"Love Lockdown\", \"Paranoid\" and \"Heartless\"?",
        options: [
          "Late Registration",
          "808s & Heartbreak",
          "The Life of Pablo",
          "Graduation"
        ],
        answer: 1
      },
      {
        question: "In what year did Microsoft release the original Xbox console in North America?",
        options: [
          "2001",
          "1996",
          "2003",
          "1998"
        ],
        answer: 0
      },
      {
        question: "In music theory, how many notes are in a seventh chord?",
        options: [
          "3",
          "4",
          "7",
          "2"
        ],
        answer: 1
      },
      {
        question: "What country did Shirley Bassey originate from?",
        options: [
          "England",
          "Canada",
          "Wales",
          "America"
        ],
        answer: 2
      },
      {
        question: "What is the birth name of Michael Keaton?",
        options: [
          "Michael Douglas",
          "Michael Kane",
          "Michael Richards",
          "Michael Fox"
        ],
        answer: 0
      },
      {
        question: "Which character is from \"Splatoon\"?",
        options: [
          "Palutena",
          "Cyrus",
          "Shulk",
          "Marie"
        ],
        answer: 3
      },
      {
        question: "Who is the frontman of Muse?",
        options: [
          "Jonny Greenwood",
          "Matt Bellamy",
          "Thom Yorke",
          "Dominic Howard"
        ],
        answer: 1
      },
      {
        question: "In which order do you need to hit some Deku Scrubs to open the first boss door in \"Ocarina of Time\"?",
        options: [
          "1, 3, 2",
          "2, 3, 1",
          "1, 2, 3",
          "2, 1, 3"
        ],
        answer: 1
      },
      {
        question: "What is the name of French electronic music producer Madeon's 2015 debut studio album?",
        options: [
          "The City",
          "Icarus",
          "Pop Culture",
          "Adventure"
        ],
        answer: 3
      },
      {
        question: "In Left 4 Dead, what is the name of the Special Infected that is unplayable in Versus mode?",
        options: [
          "The Smoker",
          "The Spitter",
          "The Witch",
          "The Tank"
        ],
        answer: 2
      },
      {
        question: "The original mascot of the popular Nintendo game, \"Splatoon\" was going to be...",
        options: [
          "Mario",
          "Zelda",
          "Inklings",
          "Octolings"
        ],
        answer: 0
      },
      {
        question: "On which planet does the game Freedom Planet (2014) take place?",
        options: [
          "Avalice",
          "Freedom",
          "Galaxytrail",
          "Shang Mu"
        ],
        answer: 0
      },
      {
        question: "What is the original name of Final Fantasy XV?",
        options: [
          "Final Fantasy Versus XIII",
          "Final Fantasy: Reborn",
          "Final Fantasy XVI",
          "Final Fantasy XIII-3"
        ],
        answer: 0
      },
      {
        question: "Who was Firestorm's rival during the original run of UK Robot Wars?",
        options: [
          "Chaos 2",
          "Hypno Disc",
          "Panic Attack",
          "Razer"
        ],
        answer: 2
      },
      {
        question: "What's the famous line Vaas says in \"Far Cry 3\"?",
        options: [
          "Did I ever tell you the definition of Insanity?",
          "Maybe your best course...would be to tread lightly.",
          "Have I failed to entertain you?",
          "You're my b*tch!"
        ],
        answer: 0
      },
      {
        question: "Where did the British Boy Band \"Bros\" come from?",
        options: [
          "Aldershot",
          "Bagshot",
          "Guildford",
          "Camberley"
        ],
        answer: 3
      },
      {
        question: "'We Built This City' was a number one hit for which American rock band in 1985?",
        options: [
          "Jefferson Airplane",
          "Kansas",
          "Aerosmith",
          "Starship"
        ],
        answer: 3
      },
      {
        question: "Which puzzle game was designed by a Russian programmer, featuring Russian buildings and music?",
        options: [
          "Boulder Dash",
          "Puzzled",
          "Jenga",
          "Tetris"
        ],
        answer: 3
      },
      {
        question: "How many members are in the Japanese rock band SCANDAL?",
        options: [
          "2",
          "4",
          "18",
          "5"
        ],
        answer: 1
      },
      {
        question: "What type is \"Magic Drain\" in Yugioh! Trading Card Game?",
        options: [
          "Field Spell",
          "Quick-Play Spell",
          "Normal Trap",
          "Counter Trap"
        ],
        answer: 3
      },
      {
        question: "Which popular rock band has a one-armed drummer?",
        options: [
          "Def Leppard",
          "Foreigner",
          "The Beatles",
          "Lynyrd Skynyrd"
        ],
        answer: 0
      },
      {
        question: "In the 1984 movie \"The Terminator\", what model number is the Terminator portrayed by Arnold Schwarzenegger?",
        options: [
          "T-800",
          "I-950",
          "T-888",
          "T-1000"
        ],
        answer: 0
      },
      {
        question: "Which of the following actors does not play a role in the movie \"The Usual Suspects?\"",
        options: [
          "Gabriel Byrne",
          "Kevin Spacey",
          "Steve Buscemi",
          "Benicio Del Toro"
        ],
        answer: 2
      },
      {
        question: "In the game Silent Hill 2, who was James Sunderland's late wife?",
        options: [
          "Laura",
          "Maria",
          "Angela",
          "Mary"
        ],
        answer: 3
      },
      {
        question: "Which Beatle wrote and sang the song \"Why Don't We Do It in the Road\" after being inspired by seeing two monkeys copulating in the street?",
        options: [
          "Ringo",
          "Paul",
          "George",
          "John"
        ],
        answer: 1
      },
      {
        question: "In which Mario game did the Mega Mushroom make its debut?",
        options: [
          "Mario Kart Wii",
          "Super Mario 3D World",
          "Mario Party 4",
          "New Super Mario Bros."
        ],
        answer: 2
      }
    ],
    8: [
      {
        question: "Which of these movies was India's official entry for the Best International Feature Film category at the 96th Academy Awards (2024)?",
        options: [
          "RRR",
          "2018 - Everyone is a Hero",
          "Jawan",
          "Rocky Aur Rani Kii Prem Kahaani"
        ],
        answer: 1
      },
      {
        question: "Who won the National Film Award for Best Actor for his performance in the film 'Pushpa: The Rise'?",
        options: [
          "Ram Charan",
          "Jr. NTR",
          "Allu Arjun",
          "Yash"
        ],
        answer: 2
      },
      {
        question: "Which TV show is set in the fictional continents of Westeros and Essos and features dragons?",
        options: [
          "Vikings",
          "The Witcher",
          "Game of Thrones",
          "Lord of the Rings"
        ],
        answer: 2
      },
      {
        question: "What name did \"Mario\", from \"Super Mario Brothers\", originally have?",
        options: [
          "Jumpman",
          "Ossan",
          "Mario",
          "Mr. Video"
        ],
        answer: 1
      },
      {
        question: "Which operation in \"Tom Clancy's Rainbow Six Siege\" introduced the \"Skyscraper\" map?",
        options: [
          "Velvet Shell",
          "Dust Line",
          "Red Crow",
          "Skull Rain"
        ],
        answer: 2
      },
      {
        question: "In what year was \"Super Mario Sunshine\" released?",
        options: [
          "2002",
          "2003",
          "2004",
          "2000"
        ],
        answer: 0
      },
      {
        question: "On the 6th of June 2006, what was the name of the infamous glitch that occurred in the MMO RuneScape?",
        options: [
          "Noclip glitch",
          "TzHaar Massacre",
          "The Falador Massacre",
          "Party-hat Duplication Glitch"
        ],
        answer: 2
      },
      {
        question: "What is the AK-47's name in Counter Strike: Source?",
        options: [
          "AK",
          "AK-74",
          "CZ-75",
          "CV-47"
        ],
        answer: 3
      },
      {
        question: "Which actor was not a major character in TV Show Freaks and Geeks?",
        options: [
          "Jason Segel",
          "James Franco",
          "Seth Rogen",
          "Jonah Hill"
        ],
        answer: 3
      },
      {
        question: "Which of these roles in Town of Salem is mafia?",
        options: [
          "Disguiser",
          "Lookout",
          "Escort",
          "Transporter"
        ],
        answer: 0
      },
      {
        question: "Which music artist made the songs \"Heart\", \"It's a Sin\", and \"West End Girls\"?",
        options: [
          "Ultravox",
          "Pet Shop Boys",
          "New Order",
          "The Human League"
        ],
        answer: 1
      },
      {
        question: "Who played Sgt. Gordon Elias in 'Platoon' (1986)?",
        options: [
          "Johnny Depp",
          "Matt Damon",
          "Charlie Sheen",
          "Willem Dafoe"
        ],
        answer: 3
      },
      {
        question: "What is the name of the prison in \"Half Life 2\"?",
        options: [
          "New Prospect",
          "Nova Prospekt",
          "Great Prospekt",
          "Lesser Prospekt"
        ],
        answer: 1
      },
      {
        question: "Out of the 3 Tots in Tots TV, who speaks French in the UK Version and Spanish in the US Version?",
        options: [
          "Tiny",
          "None of the Above",
          "Tom",
          "Tilly"
        ],
        answer: 3
      },
      {
        question: "What video game genre were the original Warcraft games?",
        options: [
          "TBS (Turn Based Strategy)",
          "MMO (Massively Multiplayer Online)",
          "RPG (Role Playing Game)",
          "RTS (Real Time Strategy)"
        ],
        answer: 3
      },
      {
        question: "In what year did \"The Big Bang Theory\" debut on CBS?",
        options: [
          "2009",
          "2007",
          "2008",
          "2006"
        ],
        answer: 1
      },
      {
        question: "In the film \"Requiem for a Dream\", what drug does Jared Leto's character get addicted to?",
        options: [
          "Cocaine",
          "Oxycodone",
          "Heroin",
          "Marijuana"
        ],
        answer: 2
      },
      {
        question: "In \"Magic: The Gathering\", during the design for Planar Chaos, what color did the developers think of adding in as the sixth color?",
        options: [
          "Purple",
          "Brown",
          "Orange",
          "Pink"
        ],
        answer: 0
      },
      {
        question: "Which musical instrument is nicknamed 'the clown of the orchestra'?",
        options: [
          "Bassoon",
          "Piccolo",
          "Tuba",
          "Flute"
        ],
        answer: 0
      },
      {
        question: "In the game \"Subnautica\", which feature was removed due to performance issues in 2016?",
        options: [
          "Multiplayer",
          "Building",
          "Terraforming",
          "Crafting"
        ],
        answer: 2
      },
      {
        question: "When was Nintendo's Virtual Boy released?",
        options: [
          "1995",
          "1997",
          "1992",
          "1989"
        ],
        answer: 0
      },
      {
        question: "In which country's version of Half-Life are the HECU Marines replaced with robots?",
        options: [
          "Germany",
          "France",
          "Japan",
          "China"
        ],
        answer: 0
      },
      {
        question: "In the 2015 RPG \"Undertale\", which character do you first encounter after falling down into the underground?",
        options: [
          "Sans",
          "Flowey",
          "Papyrus",
          "Toriel"
        ],
        answer: 1
      },
      {
        question: "What is the first track on Kanye West's 808s & Heartbreak?",
        options: [
          "Street Lights",
          "Heartless",
          "Welcome to Heartbreak",
          "Say You Will"
        ],
        answer: 3
      },
      {
        question: "What was the name of the Wu-Tang Clan album Martin Shkreli bought for $2 million dollars?",
        options: [
          "The Saga Continues",
          "Once Upon a Time in Shaolin",
          "A Better Tomorrow",
          "8 Diagrams"
        ],
        answer: 1
      },
      {
        question: "In the game Tom Clancy's Rainbow 6 Siege, what organization is Valkyrie from?",
        options: [
          "S.A.S",
          "F.B.I",
          "G.I.G.N",
          "Navy Seals"
        ],
        answer: 3
      },
      {
        question: "Who was the first white band to play the Apollo Theater?",
        options: [
          "Buddy Holly and The Crickets",
          "Chuck Berry",
          "The Beatles",
          "Elvis"
        ],
        answer: 0
      },
      {
        question: "'Don't You Want Me?' was a number one hit in 1981 for which electropop band?",
        options: [
          "Human League",
          "Depeche Mode",
          "Eurythmics",
          "Pet Shop Boys"
        ],
        answer: 0
      },
      {
        question: "What letter is used to refer to blue mana in the card game Magic The Gathering?",
        options: [
          "L",
          "E",
          "U",
          "B"
        ],
        answer: 2
      },
      {
        question: "In \"PUBATTLEGROUNDS\" what is the name of the Military Base island?",
        options: [
          "Sosnovka",
          "Yasnaya",
          "Novorepnoye",
          "Mylta"
        ],
        answer: 0
      },
      {
        question: "What is the only Generation III Pokemon whose name begins with the letter I?",
        options: [
          "Igglybuff",
          "Illumise",
          "Infernape",
          "Ivysaur"
        ],
        answer: 1
      },
      {
        question: "In the video game series \"Disgaea\", what word does the character Prinny have to include in all sentences they speak?",
        options: [
          "\"Plip\"",
          "\"Dood\"",
          "\"Master\"",
          "\"Boom\""
        ],
        answer: 1
      },
      {
        question: "Which of these is not a song on the album Graduation by Kanye West?",
        options: [
          "Waves",
          "Big Brother",
          "The Glory",
          "I Wonder"
        ],
        answer: 0
      },
      {
        question: "In what film was the Michael Jackson song \"Will You Be There\" featured?",
        options: [
          "Men in Black",
          "Sleepless in Seattle",
          "Free Willy",
          "Bad Boys"
        ],
        answer: 2
      },
      {
        question: "How many zombies need to be killed to get the \"Zombie Genocider\" achievement in Dead Rising (2006)?",
        options: [
          "53,596",
          "53,594",
          "53,593",
          "53,595"
        ],
        answer: 1
      },
      {
        question: "What is the real name of American rapper Pitbull?",
        options: [
          "Belcalis Marlenis Almánzar",
          "Ramón Luis Ayala Rodríguez",
          "Armando Christian Pérez",
          "Benito Antonio Martinez Ocasio"
        ],
        answer: 2
      },
      {
        question: "From which country does the piano originate?",
        options: [
          "Austria",
          "Germany",
          "Italy",
          "France"
        ],
        answer: 2
      },
      {
        question: "Who was the original voice actor of Shaggy Rogers in Scooby-Doo?",
        options: [
          "Dante Basco",
          "Casey Kasem",
          "Frank Welker",
          "Billy West"
        ],
        answer: 1
      },
      {
        question: "Which game won the \"Games for Impact\" award in The Game Awards 2015?",
        options: [
          "Life is Strange",
          "Ori and the Blind Forest",
          "Metal Gear Solid V: The Phantom Pain",
          "Rocket League"
        ],
        answer: 0
      },
      {
        question: "What year did the James Cameron film \"Titanic\" come out in theaters?",
        options: [
          "1999",
          "1996",
          "1998",
          "1997"
        ],
        answer: 3
      },
      {
        question: "\"The Genius\" is the original and secondary name of which Wu-Tang Clan member?",
        options: [
          "Ol' Dirty Bastard",
          "GZA",
          "Raekwon the Chef",
          "Ghostface Killah"
        ],
        answer: 1
      },
      {
        question: "\"Rollercoaster Tycoon\" was programmed mostly entirely in...",
        options: [
          "ALGOL",
          "C++",
          "C",
          "x86 Assembly"
        ],
        answer: 3
      },
      {
        question: "Which football player is featured on the international cover version of the video game FIFA 16?",
        options: [
          "Cristiano Ronaldo",
          "Lionel Messi",
          "Wayne Rooney",
          "David Beckham"
        ],
        answer: 1
      },
      {
        question: "In which year was the Megadeth album \"Peace Sells... but Who's Buying?\" released?",
        options: [
          "1979",
          "1983",
          "1986",
          "1987"
        ],
        answer: 2
      },
      {
        question: "What was Britney Spears' debut single?",
        options: [
          "Oops!... I Did It Again",
          "Toxic",
          "(You Drive Me) Crazy",
          "...Baby One More Time"
        ],
        answer: 3
      },
      {
        question: "Who was Tetris created by?",
        options: [
          "Allan Alcorn",
          "William Higinbotham",
          "Alexey Pajitnov",
          "Toru Iwatani"
        ],
        answer: 2
      },
      {
        question: "Which of these symbols can be seen on the shirt of the 1993 video game character, Bubsy T. Bobcat?",
        options: [
          "A question mark",
          "Nothing",
          "The letter B",
          "An exclamation point"
        ],
        answer: 3
      },
      {
        question: "In the 1979 British film \"Quadrophenia\" what is the name of the main protagonist?",
        options: [
          "Franc Roddam",
          "Archie Bunker",
          "Pete Townshend",
          "Jimmy Cooper"
        ],
        answer: 3
      },
      {
        question: "What was the game \"Galaga\" was a sequel to?",
        options: [
          "Galactic Wars",
          "Galaxian",
          "Space Invaders",
          "Galactica"
        ],
        answer: 1
      },
      {
        question: "Which genre is the Touhou Project associated with?",
        options: [
          "MMORPG",
          "Turn-Based Strategy",
          "Building ",
          "Shoot 'em up (bullet-hell) & Fighting"
        ],
        answer: 3
      },
      {
        question: "During the game's development, what was the first ever created Pokémon?",
        options: [
          "Rhyhorn",
          "Arceus",
          "Bulbasaur",
          "Mew"
        ],
        answer: 0
      },
      {
        question: "What song on ScHoolboy Q's album Black Face LP featured Kanye West?",
        options: [
          "Neva CHange",
          "Big Body",
          "Blank Face",
          "THat Part"
        ],
        answer: 3
      },
      {
        question: "What country is Sean Matsuda from in Street Fighter?",
        options: [
          "Japan",
          "USA",
          "UK",
          "Brazil"
        ],
        answer: 3
      },
      {
        question: "In the Portal series, Aperture Science was founded under what name in the early 1940s?",
        options: [
          "Aperture Fixtures",
          "Aperture Lavatories",
          "Wheatley Laboratories",
          "Aperture Science Innovators"
        ],
        answer: 0
      },
      {
        question: "How many stars are there to collect in Super Mario 64?",
        options: [
          "100",
          "60",
          "80",
          "120"
        ],
        answer: 3
      },
      {
        question: "What was Marilyn Monroe`s character's first name in the film \"Some Like It Hot\"?",
        options: [
          "Candy",
          "Caramel",
          "Sugar",
          "Honey"
        ],
        answer: 2
      },
      {
        question: "Which CS:GO eSports team won the major event ESL One Cologne 2016?",
        options: [
          "Team Liquid",
          "Virtus.pro",
          "Fnatic",
          "SK Gaming"
        ],
        answer: 3
      },
      {
        question: "In the game \"Undertale\", who was Mettaton's creator?",
        options: [
          "Alphys",
          "Undyne",
          "Asgore",
          "Sans"
        ],
        answer: 0
      },
      {
        question: "The song \"Caramelldansen\" is commonly mistaken as a Japanese song, what language is the song actually sung in?",
        options: [
          "Hungarian",
          "Finnish",
          "Swedish",
          "Chinese"
        ],
        answer: 2
      },
      {
        question: "Which of these is NOT a terrorist faction in Counter-Strike (2000)?",
        options: [
          "Elite Crew",
          "Guerrilla Warfare",
          "Midwest Militia",
          "Phoenix Connection"
        ],
        answer: 2
      },
      {
        question: "How many normal endings are there in Cry Of Fear's campaign mode?",
        options: [
          "5",
          "6",
          "3",
          "4"
        ],
        answer: 3
      },
      {
        question: "Which of these is not an Ed Sheeran album?",
        options: [
          "÷",
          "X",
          "-",
          "+"
        ],
        answer: 2
      },
      {
        question: "\"Lift Your Spirit\" is an album by which artist?",
        options: [
          "Aloe Blacc",
          "Stevie Wonder",
          "Lena Meyer-Landrut",
          "Taylor Swift"
        ],
        answer: 0
      },
      {
        question: "In World of Warcraft lore, who was first to have the title \"The Ashbringer\"?",
        options: [
          "Tirion Fordring",
          "Alexandros Mograine",
          "Uther the Lightbringer",
          "Arthas Menethil"
        ],
        answer: 1
      },
      {
        question: "The letters in the name of the band \"TWRP\" stand for what?",
        options: [
          "Team Wild and the Radio Pirates",
          "Totally Wicked Robot Performers",
          "Taiwan Roleplay",
          "Tupperware Remix Party"
        ],
        answer: 3
      },
      {
        question: "Which of these games was NOT a Nintendo Switch launch title in the United States?",
        options: [
          "Just Dance 2017",
          "Voez",
          "Fast RMX",
          "Snipperclips"
        ],
        answer: 1
      },
      {
        question: "The city of Rockport is featured in which of the following video games?",
        options: [
          "Infamous 2",
          "Saints Row: The Third",
          "Need for Speed: Most Wanted (2005)",
          "Burnout Revenge"
        ],
        answer: 2
      },
      {
        question: "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
        options: [
          "John",
          "Paul",
          "Ringo",
          "George"
        ],
        answer: 0
      },
      {
        question: "In Call of Duty: United Offensive, what two soldiers share a name of a video game character?",
        options: [
          "Nathan & Drake",
          "Gordon & Freeman",
          "Dig & Dug",
          "Sam & Fisher"
        ],
        answer: 1
      },
      {
        question: "In 2015, David Hasselhof released a single called...",
        options: [
          "Real Warrior",
          "True Survivor",
          "True Fighter",
          "Real Kung-Fury"
        ],
        answer: 1
      },
      {
        question: "Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
        options: [
          "Diddy Kong",
          "Lucas",
          "Meta Knight",
          "Mega Man"
        ],
        answer: 1
      },
      {
        question: "What is the name of the main antagonists in Battlestar Galactica?",
        options: [
          "The Collective",
          "The Federation",
          "The Rebels",
          "The Cylons"
        ],
        answer: 3
      },
      {
        question: "What is Solid Snake's real name?",
        options: [
          "David",
          "John",
          "Solid Snake",
          "Huey"
        ],
        answer: 0
      }
    ],
    9: [
      {
        question: "Which legendary playback singer holds the Guinness World Record for the most studio recordings?",
        options: [
          "Lata Mangeshkar",
          "Asha Bhosle",
          "Kishore Kumar",
          "P. Susheela"
        ],
        answer: 1
      },
      {
        question: "Which of the following movies is directed by Christopher Nolan?",
        options: [
          "Avatar",
          "Inception",
          "Titanic",
          "The Matrix"
        ],
        answer: 1
      },
      {
        question: "What was Deepika Padukone's debut movie in Bollywood?",
        options: [
          "Om Shanti Om",
          "Bachna Ae Haseeno",
          "Love Aaj Kal",
          "Cocktail"
        ],
        answer: 0
      },
      {
        question: "Which of these songs did Jimi Hendrix cover?",
        options: [
          "All Along the Watchtower",
          "Sgt. Pepper's Lonely Hearts Club Band",
          "All of these songs",
          "House of the Rising Sun"
        ],
        answer: 2
      },
      {
        question: "Which of these songs does NOT play during the Ruins segments of the 2015 game \"Undertale\"?",
        options: [
          "Another Medium",
          "Unnecessary Tension",
          "Ruins",
          "Anticipation"
        ],
        answer: 0
      },
      {
        question: "How much money did the 2019 Marvel movie \"Avengers: Endgame\" gross for it's record-breaking worldwide opening weekend?",
        options: [
          "392 million USD",
          "1.2 billion USD",
          "456 million USD",
          "640 million USD"
        ],
        answer: 1
      },
      {
        question: "In the co-op shooter Payday 2, which contact helps you break out Hoxton?",
        options: [
          "Vlad",
          "The Elephant",
          "The Butcher",
          "The Dentist"
        ],
        answer: 3
      },
      {
        question: "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
        options: [
          "Goombario",
          "Goombella",
          "Goomby",
          "Goombarry"
        ],
        answer: 0
      },
      {
        question: "What is the name of the first boss the player encounters in the 2017 game, \"Little Nightmares\"?",
        options: [
          "The Warden",
          "The Caretaker",
          "The Janitor",
          "The Overseer"
        ],
        answer: 2
      },
      {
        question: "Which car is NOT featured in \"Need for Speed: Hot Pursuit 2\"?",
        options: [
          "Ford Crown Victoria",
          "BMW Z8",
          "McLaren F1",
          "Toyota MR2"
        ],
        answer: 3
      },
      {
        question: "Which Queen song was covered by Brittany Murphy in the 2006 film \"Happy Feet\"?",
        options: [
          "Somebody to Love",
          "Flash",
          "Bohemian Rhapsody",
          "Under Pressure"
        ],
        answer: 0
      },
      {
        question: "In the movie \"Back to the Future,\" what speed does Doc Brown's DeLorean need to reach in order to travel through time?",
        options: [
          "70 mph",
          "100 mph",
          "77 mph",
          "88 mph"
        ],
        answer: 3
      },
      {
        question: "Who directed the 1973 film \"American Graffiti\"?",
        options: [
          "Francis Ford Coppola",
          "George Lucas",
          "Ron Howard",
          "Steven Spielberg"
        ],
        answer: 1
      },
      {
        question: "Who are the two protagonists of the game Yakuza 0?",
        options: [
          "Keiji Shibusawa and Daisaku Kuze",
          "Akira Nishikiyama and Tetsu Tachibana",
          "Kazuma Kiryu and Goro Majima",
          "Shintaro Kazama and Kazuma Kiryu"
        ],
        answer: 2
      },
      {
        question: "Who directed the movie \"Alien\"?",
        options: [
          "Christopher Nolan",
          "Ridley Scott",
          "James Cameron",
          "Michael Bay"
        ],
        answer: 1
      },
      {
        question: "Which member of the British pop group \"The Spice Girls\" was known as Ginger Spice?",
        options: [
          "Melanie Brown",
          "Victoria Beckham",
          "Emma Bunton",
          "Geri Halliwell"
        ],
        answer: 3
      },
      {
        question: "In the 1979 British film \"Quadrophenia\" what is the name of the seaside city the mods are visiting?",
        options: [
          "Brighton",
          "Bridlington",
          "Eastbourne",
          "Mousehole"
        ],
        answer: 0
      },
      {
        question: "When did Tame Impala release their second album?",
        options: [
          "2010",
          "2015",
          "2012",
          "1967"
        ],
        answer: 2
      },
      {
        question: "In Minecraft, what types of sound files are required for custom SFX to work in resource packs?",
        options: [
          ".class",
          ".ogg",
          ".mp3",
          ".wav"
        ],
        answer: 1
      },
      {
        question: "In \"Call of Duty: Zombies\", what group does Doctor Maxis work for?",
        options: [
          "Division 9",
          "Group Reanimate",
          "Group Rezurrection",
          "Group 935"
        ],
        answer: 3
      },
      {
        question: "What level do you have to be to get a service medal on CS:GO?",
        options: [
          "20",
          "40",
          "30",
          "50"
        ],
        answer: 1
      },
      {
        question: "In Divinity: Original Sin 2, who is the earliest companion you can acquire?",
        options: [
          "The Red Prince",
          "Sebille",
          "Beast",
          "Fane"
        ],
        answer: 0
      },
      {
        question: "In Splatoon, what is the age that inklings can freely change between squid and humanoid forms?",
        options: [
          "13",
          "10",
          "16",
          "14"
        ],
        answer: 3
      },
      {
        question: "Which of these is NOT a playable character race in the video game \"Starbound\"?",
        options: [
          "Fenerox",
          "Hylotl",
          "Novakid",
          "Floran"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT a name of a city in the main island of PLAYERUNKNOWN'S BATTLEGROUNDS?",
        options: [
          "Yasnaya Polyana",
          "Pochinki",
          "Georgopol",
          "Belushya Guba"
        ],
        answer: 3
      },
      {
        question: "In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing spree?",
        options: [
          "The Terminators",
          "Westworld",
          "Android",
          "Runaway"
        ],
        answer: 1
      },
      {
        question: "When did The Beatles release the LP \"Please Please Me\"?",
        options: [
          "1969",
          "1970",
          "1963",
          "1960"
        ],
        answer: 2
      },
      {
        question: "Which of these songs by artist Eminem contain the lyric \"Nice to meet you. Hi, my name is... I forgot my name!\"?",
        options: [
          "Square Dance",
          "Rain Man",
          "Kim",
          "Without Me"
        ],
        answer: 1
      },
      {
        question: "According to the Star Wars lore, what is Han Solo's home planet?",
        options: [
          "Coruscant",
          "Tatooine",
          "Corellia",
          "Naboo"
        ],
        answer: 2
      },
      {
        question: "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
        options: [
          "Robby",
          "Colossus",
          "Box",
          "Gort"
        ],
        answer: 3
      },
      {
        question: "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
        options: [
          "Sebastian Ingrosso",
          "Axwell",
          "Steve Angello",
          "Alesso"
        ],
        answer: 3
      },
      {
        question: "Which of these Fortnite emotes does NOT involve a sport in some way?",
        options: [
          "Baller",
          "Kick Ups",
          "Red Card",
          "Freestylin'"
        ],
        answer: 3
      },
      {
        question: "Which German city does the map \"Clubhouse\" in \"Tom Clancy's Rainbow Six Siege\" take place in?",
        options: [
          "Hannover",
          "Berlin",
          "Munich",
          "Hamburg"
        ],
        answer: 0
      },
      {
        question: "Which band released the album \"Sonic Highways\" in 2014?",
        options: [
          "Coldplay",
          "Foo Fighters",
          "Nickelback",
          "The Flaming Lips"
        ],
        answer: 1
      },
      {
        question: "Who is the villain company in \"Stardew Valley\"?",
        options: [
          "Robotnik Industry's ",
          "Joja Co ",
          "Empire",
          "Ronin"
        ],
        answer: 1
      },
      {
        question: "Which of these Queen songs were sampled for the baseline in Vanilla \"Ice's Ice Ice Baby?\"",
        options: [
          "Under Pressure",
          "Don't Stop Me Now",
          "Brighton Rock",
          "Lazing On A Sunday Afternoon"
        ],
        answer: 0
      },
      {
        question: "What Sims console game featured the Black Eyed Peas in the game?",
        options: [
          "The Sims",
          "The Sims: Bustin Out",
          "The Sims 2",
          "The Urbz: Sims In The City"
        ],
        answer: 3
      },
      {
        question: "Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
        options: [
          "Alan Wake",
          "God Of War",
          "Max Payne",
          "Hitman"
        ],
        answer: 2
      },
      {
        question: "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
        options: [
          "Haley Joel Osment",
          "Jason Dohring",
          "Jesse McCartney",
          "Mark Hamill"
        ],
        answer: 3
      },
      {
        question: "What type of cheese, loved by Wallace and Gromit, had it's sale prices rise after their successful short films?",
        options: [
          "Edam",
          "Wensleydale",
          "Moon Cheese",
          "Cheddar"
        ],
        answer: 1
      },
      {
        question: "Who is the main villain of Kirby's Return to Dreamland?",
        options: [
          "Queen Sectonia ",
          "Magolor",
          "King Dedede",
          "Landia"
        ],
        answer: 1
      },
      {
        question: "Cryoshell, known for \"Creeping in My Soul\" did the advertising music for what Lego Theme?",
        options: [
          "Hero Factory",
          "Bionicle",
          "Ben 10 Alien Force",
          "Star Wars"
        ],
        answer: 1
      },
      {
        question: "What is the real name of rapper, The Notorious B.I.G?",
        options: [
          "Calvin Cordozar Broadus Jr.",
          "O'Shea Jackson",
          "Eric Lynn Wright",
          "Christopher Wallace"
        ],
        answer: 3
      },
      {
        question: "In the game Pokémon Conquest, which warlord is able to bond with Zekrom and a shiny Rayquazza?",
        options: [
          "Hideyoshi",
          "Nobunaga",
          "The Player",
          "Oichi"
        ],
        answer: 1
      },
      {
        question: "What are the names of the Ice Climbers in the video game Ice Climber?",
        options: [
          "Popo and Nina",
          "Papi and Nina",
          "Popo and Nana",
          "Papi and Nana"
        ],
        answer: 2
      },
      {
        question: "Who created the pump \"F.L.U.D.D.\" Mario uses in Super Mario Sunshine?",
        options: [
          "Robert Fludd",
          "Crygor",
          "Elvin Gadd",
          "Nirona"
        ],
        answer: 2
      },
      {
        question: "Which of these is NOT the name of a team leader in Pokémon GO?",
        options: [
          "Candela",
          "Leif",
          "Spark",
          "Blanche"
        ],
        answer: 1
      },
      {
        question: "When was Club Penguin launched?",
        options: [
          "March 29, 2006",
          "October 24, 2005",
          "November 22, 2004",
          "October 21, 2005"
        ],
        answer: 1
      },
      {
        question: "How old is Chloe Price in Life is Strange: Before the Storm?",
        options: [
          "19",
          "16",
          "24",
          "15"
        ],
        answer: 1
      },
      {
        question: "Who is credited with having created the world's first video game Easter Egg?",
        options: [
          "Don Woods",
          "Julius Smith",
          "Will Crowther",
          "Warren Robinett"
        ],
        answer: 3
      },
      {
        question: "In the \"Call Of Duty: Zombies\" map \"Moon\", there is a secondary called the QED. What does QED stand for?",
        options: [
          "Question Every Dog",
          "Quad Ectoplasmic Driver",
          "Quantum Entanglement Device",
          "Quality Edward Device"
        ],
        answer: 2
      },
      {
        question: "Which band released songs such as \"Electric Feel\", \"Kids\", and \"Time to Pretend\"?",
        options: [
          "Passion Pit",
          "Franz Ferdinand",
          "MGMT",
          "Phoenix"
        ],
        answer: 2
      },
      {
        question: "Which weapon that was cut from the game \"Half Life 2\" was going to replace the crowbar?",
        options: [
          "Fire Axe",
          "Wrench",
          "Hunting Knife",
          "Ice Axe"
        ],
        answer: 3
      },
      {
        question: "In \"Overwatch,\" what is the hero McCree's full name?",
        options: [
          "Gabriel Reyes",
          "Jamison \"Deadeye\" Fawkes",
          "Jack \"McCree\" Morrison",
          "Jesse McCree"
        ],
        answer: 3
      },
      {
        question: "For which civil rights activist did Stevie Wonder write the song 'Happy Birthday' in 1980?",
        options: [
          "Nelson Mandella",
          "Martin Luther King Jr",
          "Booker T. Washington",
          "Rosa Parks"
        ],
        answer: 1
      },
      {
        question: "When was the original Star Wars: Battlefront II released?",
        options: [
          "November 21, 2006",
          "September 9, 2007",
          "October 31, 2005",
          "December 18, 2004"
        ],
        answer: 2
      },
      {
        question: "Which alternative rock band released the critically-acclaimed album \"OK Computer\"?",
        options: [
          "R.E.M.",
          "Coldplay",
          "Nirvana",
          "Radiohead"
        ],
        answer: 3
      },
      {
        question: "Which movie sequel had improved box office results compared to its original film?",
        options: [
          "Son of the Mask",
          "Toy Story 2",
          "Speed 2: Cruise Control",
          "Sin City: A Dame to Kill For"
        ],
        answer: 1
      },
      {
        question: "Which country does the electronic music duo \"The Knife\" originate from?",
        options: [
          "Finland",
          "Sweden",
          "Norway",
          "Denmark"
        ],
        answer: 1
      },
      {
        question: "Which of the following created and directed the Katamari Damacy series?",
        options: [
          "Keita Takahashi",
          "Hideki Kamiya",
          "Shinji Mikami",
          "Shu Takumi"
        ],
        answer: 0
      },
      {
        question: "What city did the monster attack in the film, \"Cloverfield\"?",
        options: [
          "Chicago, Illinois",
          "Las Vegas, Nevada",
          "Orlando, Florida",
          "New York, New York"
        ],
        answer: 3
      },
      {
        question: "Which of these games was the earliest known first-person shooter with a known time of publication?",
        options: [
          "Doom",
          "Spasim",
          "Quake",
          "Wolfenstein"
        ],
        answer: 1
      },
      {
        question: "Which of the following Terran units from the RTS game Starcraft was first introduced in the expansion Brood War?",
        options: [
          "Wraith",
          "Science Vessel",
          "Medic",
          "SCV"
        ],
        answer: 2
      },
      {
        question: "The '64' in the Nintendo-64 console refers to what?",
        options: [
          "Clock speed of the CPU in Hertz",
          "The number of megabytes of RAM",
          "The bits in the CPU architecture",
          "Capacity of the ROM Cartridges in megabytes"
        ],
        answer: 2
      },
      {
        question: "In Minecraft: Java Edition, which of the following feature/block was added to Survival mode in Beta 1.3?",
        options: [
          "Grass",
          "Hunger",
          "The Nether",
          "Beds"
        ],
        answer: 3
      },
      {
        question: "How many regular Sunken Sea Scrolls are there in \"Splatoon\"?",
        options: [
          "5",
          "27",
          "30",
          "32"
        ],
        answer: 1
      },
      {
        question: "Who is the primary lyricist for Canadian progressive rock band Rush?",
        options: [
          "Alex Lifeson",
          "Geddy Lee",
          "John Rutsey",
          "Neil Peart"
        ],
        answer: 3
      },
      {
        question: "What is the name of the child performing the Black Sacrament, in The Elder Scrolls V: Skyrim?",
        options: [
          "Aventus Aretino",
          "Proventus Avenicci",
          "Aval Atheron",
          "Arngeir"
        ],
        answer: 0
      },
      {
        question: "Which rock band released the album \"The Bends\" in March 1995?",
        options: [
          "Nirvana",
          "Coldplay",
          "Radiohead",
          "U2"
        ],
        answer: 2
      }
    ],
    10: [
      {
        question: "What was the debut film of actress Deepika Padukone in Bollywood?",
        options: [
          "Om Shanti Om",
          "Bachna Ae Haseeno",
          "Chandni Chowk to China",
          "Love Aaj Kal"
        ],
        answer: 0
      },
      {
        question: "Who composed the background score and songs for the movie 'Roja' (1992), marking his debut in cinema?",
        options: [
          "Illaiyaraaja",
          "A. R. Rahman",
          "Harris Jayaraj",
          "Yuvan Shankar Raja"
        ],
        answer: 1
      },
      {
        question: "In the movie 'Gangs of Wasseypur', which city is the focal point of the coal mafia wars?",
        options: [
          "Ranchi",
          "Dhanbad",
          "Jamshedpur",
          "Patna"
        ],
        answer: 1
      },
      {
        question: "What is Fergie's debut album called?",
        options: [
          "The Sweet Escape",
          "Loose",
          "Fergalicious ",
          "The Dutchess"
        ],
        answer: 3
      },
      {
        question: "Which of these is NOT the name of an album released by American rapper Viper?",
        options: [
          "The Life of Pablo",
          "You'll Cowards Don't Even Smoke Crack",
          "Kill Urself My Man",
          "Yo Wife Handcuffin' Me"
        ],
        answer: 0
      },
      {
        question: "What is the name of the protagonist's first Persona in \"Persona 5\"?",
        options: [
          "Arsene",
          "Izanagi",
          "Mara",
          "Sandaphlon"
        ],
        answer: 0
      },
      {
        question: "In Splatoon 2's Hero Mode, which agent does the player take the role of?",
        options: [
          "Agent 2",
          "Agent 1",
          "Agent 3",
          "Agent 4"
        ],
        answer: 3
      },
      {
        question: "Which of these bands was a featuring artist in Compton rapper Kendrick Lamar's 2017 album, \"DAMN.\"?",
        options: [
          "Coldplay",
          "Radiohead",
          "Bon Jovi",
          "U2"
        ],
        answer: 3
      },
      {
        question: "Which famous 90's rap album is commonly referred to as \"The Bible of Hip Hop\"?",
        options: [
          "The Chronic",
          "The Low End Theory",
          "Enter The Wu-Tang (36 Chambers)",
          "Illmatic"
        ],
        answer: 3
      },
      {
        question: "Who was the star of the TV series \"24\"?",
        options: [
          "Hugh Laurie",
          "Kiefer Sutherland",
          "Kevin Bacon",
          "Rob Lowe"
        ],
        answer: 1
      },
      {
        question: "Which singer was featured in Swedish producer Avicii's song \"Wake Me Up\"?",
        options: [
          "CeeLo Green",
          "John Legend",
          "Pharrell Williams",
          "Aloe Blacc"
        ],
        answer: 3
      },
      {
        question: "In poker, \"EV\" means what?",
        options: [
          "Equity Variation",
          "Equivalent Variation",
          "Expected Value",
          "Equity Value"
        ],
        answer: 2
      },
      {
        question: "What was the name of the first MMORPG to popularize the genre?",
        options: [
          "World of Warcraft",
          "Guild Wars",
          "Meridian 59",
          "Ultima Online"
        ],
        answer: 3
      },
      {
        question: "In Overwatch, what is Lúcio's full name?",
        options: [
          "Lúcio Correia Dos Santos",
          "Lúcio Luiz Lós Guilherme",
          "Lúcio Chupar Prima",
          "Lúcio João Lucas"
        ],
        answer: 0
      },
      {
        question: "When was the Prince album \"Purple Rain\" released?",
        options: [
          "1979",
          "1981",
          "1984",
          "1983"
        ],
        answer: 2
      },
      {
        question: "Who is the Pink Floyd song \"Shine On You Crazy Diamond\" written about?",
        options: [
          "David Gilmour",
          "John Lennon",
          "Syd Barrett",
          "Floyd"
        ],
        answer: 2
      },
      {
        question: "What is the name of the queen's pet in A Bug's Life?",
        options: [
          "Hopper",
          "Dot",
          "Aphie",
          "Flik"
        ],
        answer: 2
      },
      {
        question: "What French artist/band is known for playing on the midi instrument \"Launchpad\"?",
        options: [
          "David Guetta",
          "Disclosure",
          "Madeon",
          "Daft Punk "
        ],
        answer: 2
      },
      {
        question: "In PROTOTYPE 2, which of the following abilities/weapons is NOT obtained by an Evolved?",
        options: [
          "Pack Leader",
          "Blade",
          "Bio-Bomb",
          "Tendrils"
        ],
        answer: 3
      },
      {
        question: "In the Fallout: New Vegas add-on Honest Hearts, what is the name of Joshua Graham's personal .45 pistol?",
        options: [
          "Recompense of the Fallen",
          "A Light Shining in Darkness",
          "Maria",
          "Requiem"
        ],
        answer: 1
      },
      {
        question: "The fictional movie 'Rochelle, Rochelle' features in which sitcom?",
        options: [
          "Friends",
          "Cheers",
          "Seinfeld",
          "Frasier"
        ],
        answer: 2
      },
      {
        question: "In Night in the Woods, which instrument did Casey play?",
        options: [
          "Bass",
          "Sax",
          "Drums",
          "Piano"
        ],
        answer: 2
      },
      {
        question: "Who plays \"Bruce Wayne\" in the 2008 movie \"The Dark Knight\"?",
        options: [
          "Heath Ledger",
          "Ron Dean",
          "Christian Bale",
          "Michael Caine"
        ],
        answer: 2
      },
      {
        question: "In Tron: Legacy, Kevin Flynn wrote a program to create the perfect system. What was the program's name?",
        options: [
          "MCP",
          "Tron",
          "Quorra",
          "Clu"
        ],
        answer: 3
      },
      {
        question: "Which of these is the only fighter in the game \"Super Smash Bros. Melee\" capable of dealing damage with their taunt animation?",
        options: [
          "Pichu",
          "Jigglypuff",
          "Mr. Game & Watch",
          "Luigi"
        ],
        answer: 3
      },
      {
        question: "In the 1994 movie \"Speed\", what is the minimum speed the bus must go to prevent to bomb from exploding?",
        options: [
          "70 mph",
          "40 mph",
          "50 mph",
          "60 mph"
        ],
        answer: 2
      },
      {
        question: "The walls of the Goldenrod City Gym in \"Pokémon Gold and Silver\" are arranged in the shape of which Pokémon?",
        options: [
          "Clefairy",
          "Pikachu",
          "Bulbasaur",
          "Pidgey"
        ],
        answer: 0
      },
      {
        question: "What is Lilo's last name from Lilo and Stitch?",
        options: [
          "Anoaʻi",
          "Kuʻulei",
          "Pelekai",
          "Kealoha"
        ],
        answer: 2
      },
      {
        question: "In \"Kingdom Hearts\", what is the name of Sora's home world?",
        options: [
          "Destiny Islands",
          "Agrabah",
          "Disney Town",
          "Land of Departure"
        ],
        answer: 0
      },
      {
        question: "In the original Doctor Who series (1963), fourth doctor Tom Baker's scarf was how long?",
        options: [
          "2 Meters",
          "5 Meters",
          "10 Meters",
          "7 Meters"
        ],
        answer: 3
      },
      {
        question: "Which of these is the name of an American psychedelic rock band formed in 2002 by Benjamin Goldwasser and Andrew VanWyngarden?",
        options: [
          "MGMT",
          "MSTRKRFT",
          "SBTRKT",
          "STRFKR"
        ],
        answer: 0
      },
      {
        question: "Along with Gabe Newell, who co-founded Valve?",
        options: [
          "Stephen Bahl",
          "Mike Harrington",
          "Robin Walker",
          "Marc Laidlaw"
        ],
        answer: 1
      },
      {
        question: "Who is the developer of the game \"Rocket League\"?",
        options: [
          "People can fly",
          "Digital Happiness",
          "Psyonix",
          "Roll7"
        ],
        answer: 2
      },
      {
        question: "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
        options: [
          "Erica",
          "Sandra",
          "Jessica",
          "Angela"
        ],
        answer: 2
      },
      {
        question: "In the game series \"The Legend of Zelda\", what was the first 3D game?",
        options: [
          "Majora's Mask",
          "Ocarina of Time",
          "A Link to the Past",
          "The Wind Waker"
        ],
        answer: 1
      },
      {
        question: "Who published the 1998 video game Half-Life?",
        options: [
          "EA",
          "Valve",
          "Sierra On-Line",
          "Blizzard"
        ],
        answer: 2
      },
      {
        question: "In the video game DOTA 2, which of these is NOT a hero?",
        options: [
          "Dark Seer",
          "Keeper of the Light",
          "Dragon Champion",
          "Mirana"
        ],
        answer: 2
      },
      {
        question: "Who provided a majority of the songs and lyrics for \"Spirit: Stallion of the Cimarron\"?",
        options: [
          "Air Supply",
          "Bryan Adams",
          "Oasis",
          "Smash Mouth"
        ],
        answer: 1
      },
      {
        question: "What is the name of the common, gun-toting enemies of the \"Oddworld\" video game series?",
        options: [
          "Sligs",
          "Scrabs",
          "Glukkons",
          "Slogs"
        ],
        answer: 0
      },
      {
        question: "Who was world chess champion between 1894 and 1921",
        options: [
          "Emanuel Lasker",
          "Wilhelm Steinitz",
          "Bobby Fischer",
          "José Raúl Capablanca"
        ],
        answer: 0
      },
      {
        question: "Which song is not by TheFatRat?",
        options: [
          "Infinite Power!",
          "Monody",
          "Ascent",
          "Windfall"
        ],
        answer: 2
      },
      {
        question: "What is the name of the \"Flash\" and \"Arrow\" spinoff featuring a team of characters that have appeared on both shows?",
        options: [
          "Legends of Tomorrow",
          "The Justice Society",
          "The Justice Society of America",
          "Heroes of Tomorrow"
        ],
        answer: 0
      },
      {
        question: "By how many minutes are you late to work in \"Half-Life\"?",
        options: [
          "15",
          "60",
          "30",
          "5"
        ],
        answer: 2
      },
      {
        question: "Which one of these artists appears in the album Deltron 3030?",
        options: [
          "Danger Mouse",
          "Dan the Automater",
          "CeeLo Green",
          "Lamarr Kendrick"
        ],
        answer: 1
      },
      {
        question: "Who played the Cenobite called \"Pinhead\" in the original Hellraiser films?",
        options: [
          "Doug Bradley",
          "Doug Savant",
          "Doug Jones",
          "Doug Benson"
        ],
        answer: 0
      },
      {
        question: "Which Toronto landmark was featured on the cover art of Canadian rapper Drake's 2016 album \"Views\"?",
        options: [
          "Union Station",
          "CN Tower",
          "Prince of Wales Theatre",
          "Allan Gardens"
        ],
        answer: 1
      },
      {
        question: "In the game Overwatch, which hero out of the following 4 is from Brazil?",
        options: [
          "McCree",
          "Sombra",
          "Lúcio",
          "Symmetra"
        ],
        answer: 2
      },
      {
        question: "Where was the Sniper character in Team Fortress 2 born?",
        options: [
          "Antarctica",
          "South Africa",
          "New Zealand",
          "Australia"
        ],
        answer: 2
      },
      {
        question: "In Call Of Duty: Black Ops II, who is the main antagonist?",
        options: [
          "Vladimir Makarov ",
          "Raul Menéndez ",
          "Frank Woods",
          "DeFalco"
        ],
        answer: 1
      },
      {
        question: "Who is the main protagonist of \"Ace Combat Zero: The Belkan War\"?",
        options: [
          "Blaze",
          "Mobius 1",
          "Pixy",
          "Cipher"
        ],
        answer: 3
      },
      {
        question: "Which city is the American singer \"Pitbull\" from?",
        options: [
          "Kodiak",
          "St. Louis",
          "Boston",
          "Miami"
        ],
        answer: 3
      },
      {
        question: "Who is the main antagonist of Silent Hill 4?",
        options: [
          "Claudia Wolf",
          "Pyramid Head",
          "Walter Sullivan",
          "Alessa Gillespie"
        ],
        answer: 2
      },
      {
        question: "Which video game earned music composer Mike Morasky the most awards for his work?",
        options: [
          "Portal 2",
          "Left 4 Dead 2",
          "Counter-Strike: Global Offensive",
          "Team Fortress 2"
        ],
        answer: 0
      },
      {
        question: "In \"Call Of Duty: Zombies\", completing which map's main easter egg will reward you with the achievement, \"High Maintenance\"?",
        options: [
          "Die Rise",
          "Origins",
          "Ascension",
          "Mob Of The Dead"
        ],
        answer: 0
      },
      {
        question: "Which movie of film director Stanley Kubrick is known to be an adaptation of a Stephen King novel?",
        options: [
          "Eyes Wide Shut",
          "The Shining",
          " Dr. Strangelove ",
          "2001: A Space Odyssey"
        ],
        answer: 1
      },
      {
        question: "Before getting the shotgun, what did the titular hobo in 'Hobo with a Shotgun' want to purchase?",
        options: [
          "a guitar",
          "a revolver",
          "a suit",
          "a lawnmower"
        ],
        answer: 3
      },
      {
        question: "'74–'75 is a 1993 single from the album Ring by what American band?",
        options: [
          "R.E.M.",
          "The Bangles",
          "The Connells",
          "The Ocean Blue"
        ],
        answer: 2
      },
      {
        question: "What is the name of the dog that played Toto in the 1939 film \"The Wizard of Oz\"?",
        options: [
          "Teddy",
          "Terry",
          "Toto",
          "Tommy"
        ],
        answer: 1
      },
      {
        question: "Actress Susan Sarandon caught pneumonia during filming of which movie?",
        options: [
          "The Rocky Horror Picture Show",
          "Enchanted",
          "Thelma and Louise",
          "Dead Man Walking"
        ],
        answer: 0
      },
      {
        question: "In Star Wars: Republic Commando (2005), what is the name of the squad that you play as?",
        options: [
          "Delta Squad",
          "Echo Squad",
          "Alpha Squad",
          "Omega Squad"
        ],
        answer: 0
      },
      {
        question: "In the Super Mario Bros. series, what game is the  \"Carrot\" power-up from?",
        options: [
          "Super Mario Land",
          "Super Mario 3D Land",
          "Super Mario World",
          "Super Mario Land 2: The 6 Golden Coins"
        ],
        answer: 3
      },
      {
        question: "What were the first two Pokémon games released?",
        options: [
          "Green and Blue",
          "Red and Blue",
          "Red and Yellow",
          "Red and Green"
        ],
        answer: 3
      },
      {
        question: "Which unlockable character in Super Smash Bros. For Wii U and 3DS does not have to be fought to be unlocked?",
        options: [
          "Ness",
          "R.O.B.",
          "Mii Fighters",
          "Mewtwo"
        ],
        answer: 2
      },
      {
        question: "Dee from \"It's Always Sunny in Philadelphia\" has dated all of the following guys EXCEPT",
        options: [
          "Matthew \"Rickety Cricket\" Mara",
          "Ben the Soldier",
          "Colin the Thief",
          "Kevin Gallagher aka Lil' Kevin"
        ],
        answer: 0
      }
    ],
    11: [
      {
        question: "Who wrote the novel 'Devdas', which has been adapted into several Bollywood films?",
        options: [
          "Rabindranath Tagore",
          "Sarat Chandra Chattopadhyay",
          "Munshi Premchand",
          "Bankim Chandra Chattopadhyay"
        ],
        answer: 1
      },
      {
        question: "Which movie is officially recognized as the first full-length Indian feature film?",
        options: [
          "Alam Ara",
          "Raja Harishchandra",
          "Keechaka Vadham",
          "Ayodhyecha Raja"
        ],
        answer: 1
      },
      {
        question: "Which Hollywood movie won the Best Picture Oscar at the 96th Academy Awards (2024)?",
        options: [
          "Barbie",
          "Oppenheimer",
          "Poor Things",
          "Killers of the Flower Moon"
        ],
        answer: 1
      },
      {
        question: "In which video game did Michael Fassbender star?",
        options: [
          "Call of Duty: Modern Warfare",
          "Red Dead Redemption",
          "Assassin's Creed 3",
          "Fable 3"
        ],
        answer: 3
      },
      {
        question: "In TF2 Lore, what are the names of the Heavy's younger sisters?",
        options: [
          "Anna and Bronislava",
          "Yanna and Gaba",
          "Gaba and Anna",
          "Yana and Bronislava"
        ],
        answer: 3
      },
      {
        question: "Which achievement name is shared between Team Fortress 2 and Left 4 Dead 2?",
        options: [
          "The Quick and the Dead",
          "Cache Grab",
          "F in Chemistry",
          "Rode Hard, Put Away Wet"
        ],
        answer: 3
      },
      {
        question: "Which Manchester nightclub was considered central to the 'Madchester' music scene in the late 80's?",
        options: [
          "The Warehouse Project",
          "LIV",
          "The Liar's Club",
          "The Haçienda"
        ],
        answer: 3
      },
      {
        question: "In the game \"Super Hang-On\" which is the top speed WITH the use of turbo?",
        options: [
          "280 km/h",
          "286 km/h",
          "320 km/h",
          "324 km/h"
        ],
        answer: 3
      },
      {
        question: "What programming language does the Source Engine use?",
        options: [
          "Python",
          "C++ ",
          "Lua",
          "Java"
        ],
        answer: 1
      },
      {
        question: "Which of Michael Jackson's albums sold the most copies?",
        options: [
          "Thriller",
          "Bad",
          "Off the Wall",
          "Dangerous"
        ],
        answer: 0
      },
      {
        question: "Which of these songs was released in 1996?",
        options: [
          "David Bowie - \"1984\"",
          "The Smashing Pumpkins - \"1979\"",
          "Prince - \"1999\"",
          "James Blunt - \"1973\""
        ],
        answer: 1
      },
      {
        question: "What is the world's oldest board game?",
        options: [
          "Senet",
          "Go",
          "Checkers",
          "Chess"
        ],
        answer: 0
      },
      {
        question: "In the indie farming game \"Stardew Valley\", which NPC hates the \"prismatic shard\" item when received as a gift?",
        options: [
          "Haley",
          "Abigail ",
          "Lewis",
          "Elliott"
        ],
        answer: 0
      },
      {
        question: "In 2012, which movie won every category in the 32nd \"Golden Raspberry Awards\"?",
        options: [
          "Thor",
          "The King's Speech",
          "Jack and Jill",
          "The Girl with the Dragon Tattoo"
        ],
        answer: 2
      },
      {
        question: "In \"The Witness\", how many lasers must be activated to get into the mountain area?",
        options: [
          "8",
          "7",
          "12",
          "5"
        ],
        answer: 1
      },
      {
        question: "In standard Monopoly, what's the rent if you land on Park Place with no houses?",
        options: [
          "$50",
          "$30",
          "$35",
          "$45"
        ],
        answer: 2
      },
      {
        question: "In 2008, British celebrity chef Gordon Ramsay believes he almost died after suffering what accident in Iceland while filming?",
        options: [
          "A minor car accident in a snowstorm",
          "Slipping off a cliff, and nearly drowning in icy water",
          "Crash landing when arriving at Keflavík airport",
          "Being served under-cooked chicken at his hotel"
        ],
        answer: 1
      },
      {
        question: "What is the name of the virus that infected New York in Tom Clancy's The Division?",
        options: [
          "Dollar Flu",
          "Red Poison",
          "Smallpox",
          "Ebola"
        ],
        answer: 0
      },
      {
        question: "What was the first \"Call Of Duty: Zombies\" map to be directed by Jason Blundell?",
        options: [
          "Moon",
          "Buried",
          "Origins",
          "Mob Of The Dead"
        ],
        answer: 3
      },
      {
        question: "What was the first movie to ever use a Wilhelm Scream?",
        options: [
          "The Charge at Feather River",
          "Distant Drums",
          "Treasure of the Sierra Madre",
          "Indiana Jones"
        ],
        answer: 1
      },
      {
        question: "Which artists' version of the song \"The Tide is High\" came first?",
        options: [
          "Atomic Kitten",
          "The Paragons",
          "Blondie",
          "Kardinal Offishall"
        ],
        answer: 1
      },
      {
        question: "Which of these cards from \"Magic: The Gathering\" has a flavor text that begins with \"Oi oi oi\"?",
        options: [
          "Lotleth Troll",
          "Albino Troll",
          "Harvester Troll",
          "Uthden Troll"
        ],
        answer: 3
      },
      {
        question: "What video game company developed the 2004 racing game \"Burnout 3: Takedown\"?",
        options: [
          "Criterion Games",
          "EA Black Box",
          "Rockstar Games",
          "Codemasters"
        ],
        answer: 0
      },
      {
        question: "In the Gamecube Version of \"Resident Evil\" what text document is open on the monitor of the computer in the Visual Data Room?",
        options: [
          "Nothing",
          "A GDC Document",
          "Document on B.O.Ws",
          "Text Document on Herbs"
        ],
        answer: 1
      },
      {
        question: "In the popular MOBA League of Legends, which of the following champions is nicknamed \"the Virtuoso\"?",
        options: [
          "Jhin",
          "Kayle",
          "Camille",
          "Ezreal"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT a possible drink to be made in the game \"VA-11 HALL-A: Cyberpunk Bartender Action\"?",
        options: [
          "Piano Man",
          "Fringe Weaver",
          "Bad Touch",
          "Sour Appletini"
        ],
        answer: 3
      },
      {
        question: "Which of these artists did NOT remix the song \"Faded\" by Alan Walker?",
        options: [
          "Skrillex",
          "Slushii",
          "Tiësto",
          "Dash Berlin"
        ],
        answer: 0
      },
      {
        question: "Which artist composed the original soundtrack for \"Watch Dogs 2\"?",
        options: [
          "Hudson Mohawke",
          "Flying Lotus",
          "Machinedrum",
          "Rustie"
        ],
        answer: 0
      },
      {
        question: "In the PAYDAY series, where did Dallas start his criminal career?",
        options: [
          "Dallas, Texas",
          "New York City, New York",
          "Boston, Massachusetts",
          "Chicago, Illinois"
        ],
        answer: 3
      }
    ],
    12: [
      {
        question: "Which was the first talkie (sound) film made in India?",
        options: [
          "Raja Harishchandra",
          "Alam Ara",
          "Kismet",
          "Devdas"
        ],
        answer: 1
      },
      {
        question: "Who directed the landmark historical drama film 'Mughal-e-Azam' (1960)?",
        options: [
          "K. Asif",
          "Mehboob Khan",
          "Bimal Roy",
          "Raj Kapoor"
        ],
        answer: 0
      },
      {
        question: "Who wrote the script for the landmark Bollywood movie 'Sholay'?",
        options: [
          "Javed Akhtar & Salim Khan",
          "Gulzar & R.D. Burman",
          "Kader Khan",
          "Satyajit Ray"
        ],
        answer: 0
      },
      {
        question: "In what year does Jurassic World open in the \"Jurassic Park\" universe?",
        options: [
          "2015",
          "2020",
          "2007",
          "2005"
        ],
        answer: 3
      },
      {
        question: "In \"Starbound\", according to the asset files, the description of the \"Erchius Ghost\" is the same as which other assets?",
        options: [
          "Trictus",
          "Pyromantle",
          "Petricub",
          "Spookit"
        ],
        answer: 3
      },
      {
        question: "What Pokémon's Base Stat Total does not change when it evolves?",
        options: [
          "Sneasel",
          "Larvesta",
          "Pikachu",
          "Scyther"
        ],
        answer: 3
      },
      {
        question: "According to Toby Fox, what was the method to creating the initial tune for Megalovania?",
        options: [
          "Using a Composer Software",
          "Playing a Piano",
          "Listened to birds at the park",
          "Singing into a Microphone"
        ],
        answer: 3
      },
      {
        question: "Which of these online games was originally named LindenWorld in it's early development?",
        options: [
          "ActiveWorlds",
          "HabboHotel",
          "IMVU",
          "SecondLife"
        ],
        answer: 3
      },
      {
        question: "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
        options: [
          "Dog Blood",
          "Noisia",
          "What So Not",
          "Jack Ü"
        ],
        answer: 0
      },
      {
        question: "How many partners can you obtain in Paper Mario: The Thousand-Year Door?",
        options: [
          "6",
          "10",
          "9",
          "7"
        ],
        answer: 3
      },
      {
        question: "In the \"Call Of Duty: Zombies\" map \"Origins\", where is \"Stamin-Up\" located?",
        options: [
          "Excavation Site",
          "Generator 5",
          "Generator 3",
          "Generator 4"
        ],
        answer: 1
      },
      {
        question: "In \"Star Trek\", what sauce is commonly used by Klingons on bregit lung?",
        options: [
          "Gazorpazorp pudding",
          "Grapork sauce",
          "Sweet chili sauce",
          "Grapok sauce"
        ],
        answer: 3
      },
      {
        question: "In \"Call Of Duty: Zombies\", which map's opening cutscene shows \"Richtofen\" killing another version of himself?",
        options: [
          "Shadows Of Evil",
          "Moon",
          "Der Eisendrache",
          "The Giant"
        ],
        answer: 3
      },
      {
        question: "What is the real name of \"Warhead\" in the Sega Genesis game \"Vectorman\"?",
        options: [
          "Raster",
          "Bitmap",
          "Vectorkid",
          "Peacehead"
        ],
        answer: 0
      },
      {
        question: "Where are Terror Fiends more commonly found in the Nintendo game Miitopia?",
        options: [
          "Otherworld",
          "New Lumos",
          "Peculia",
          "The Sky Scraper"
        ],
        answer: 1
      },
      {
        question: "Who wrote the song \"You Know You Like It\"?",
        options: [
          "Major Lazer",
          "AlunaGeorge",
          "DJ Snake",
          "Steve Aoki"
        ],
        answer: 1
      },
      {
        question: "In \"Pokémon Sun and Moon\", Team Skull took over which town?",
        options: [
          "Tapu Village",
          "Iki Town",
          "Heahea City",
          "Po Town"
        ],
        answer: 3
      },
      {
        question: "In \"Final Fantasy VI\", what is the name of (summoned) Gilgamesh's weakest attack?",
        options: [
          "Excalipoor",
          "Excalibore",
          "Excalisnore",
          "Excalisore"
        ],
        answer: 0
      }
    ],
    13: [
      {
        question: "Who is the only Indian to win two Academy Awards (Oscars) in a single night?",
        options: [
          "A. R. Rahman",
          "Satyajit Ray",
          "Gulzar",
          "Resul Pookutty"
        ],
        answer: 0
      },
      {
        question: "Which actress played the role of 'Mother India' in the 1957 Oscar-nominated film of the same name?",
        options: [
          "Meena Kumari",
          "Nargis Dutt",
          "Madhubala",
          "Vyjayanthimala"
        ],
        answer: 1
      },
      {
        question: "Which actor played the role of British colonial administrator 'Captain Russell' in the movie Lagaan?",
        options: [
          "Paul Blackthorne",
          "Toby Stephens",
          "Tom Alter",
          "Bob Christo"
        ],
        answer: 0
      },
      {
        question: "Which one of these characters appeared in Marvel vs Capcom: Infinite?",
        options: [
          "Jill Valentine",
          "Wolverine",
          "Dr. Doom",
          "Firebrand"
        ],
        answer: 3
      },
      {
        question: "Which ability from the \"Magic: The Gathering\" Scars of Mirrodin expansion involves having at least three artifacts in play?",
        options: [
          "Living Weapon",
          "Metalcraft",
          "Affinity",
          "Imprint"
        ],
        answer: 1
      },
      {
        question: "Which of these characters wasn't a villian in Club Penguin?",
        options: [
          "Ultimate Proto-Bot 10000",
          "Tusk",
          "Herbert P. Bear",
          "The Director"
        ],
        answer: 3
      },
      {
        question: "According to an interview with \"Super Mario Land 2\" game director Hiroji Kiyotake, what is Wario's favorite food?",
        options: [
          "Garlic",
          "Cheese",
          "Crepes",
          "Pizza"
        ],
        answer: 2
      },
      {
        question: "In the National Pokedex what number is Porygon-Z?",
        options: [
          "376",
          "474",
          "432",
          "589"
        ],
        answer: 1
      },
      {
        question: "In order to cut costs, what were most of the extras of Mad Max (1979) paid with?",
        options: [
          "Fast food",
          "Food stamps",
          "Beer",
          "They weren't paid"
        ],
        answer: 2
      },
      {
        question: "Which video game was recalled for containing a hidden, playable South Park episode?",
        options: [
          "Madden 99",
          "Sonic Adventure",
          "Tony Hawk's Pro Skater 3",
          "Tiger Woods 99 PGA Tour"
        ],
        answer: 3
      },
      {
        question: "In Left 4 Dead, what is the character Bill's last name?",
        options: [
          "Fish",
          "Roberts",
          "Overbeck",
          "Stevenson"
        ],
        answer: 2
      },
      {
        question: "Which British band won the first edition of the Brit Awards in 1977?",
        options: [
          "The Beatles",
          "The Rolling Stones",
          "The Who",
          "Pink Floyd"
        ],
        answer: 0
      },
      {
        question: "In the original \"Super Mario Bros.\", what is the acceleration of Mario if he was in free fall?",
        options: [
          "110  m/s^2",
          "9.42  m/s^2",
          "4.4  m/s^2",
          "91.28 m/s^2"
        ],
        answer: 3
      },
      {
        question: "Which movie did NOT feature the late actor John Candy?",
        options: [
          "Ghostbusters",
          "Little Shop Of Horrors",
          "Home Alone",
          "Planes Trains and Automobiles"
        ],
        answer: 0
      },
      {
        question: "What is Justin Bieber's debut Album?",
        options: [
          "Baby",
          "My World 2.0",
          "Purpose",
          "U Smile"
        ],
        answer: 1
      },
      {
        question: "Which car did not appear in the 2002 Lego Game: Drome Racers?",
        options: [
          "Behemoth",
          "Raptor",
          "Wasp",
          "Hornet"
        ],
        answer: 2
      },
      {
        question: "Who recorded the 1975 album 'Captain Fantastic and the Brown Dirt Cowboy'?",
        options: [
          "Joe Cocker",
          "John Denver",
          "Elton John",
          "Billy Joel"
        ],
        answer: 2
      },
      {
        question: "Which game in the \"Monster Hunter\" series introduced the \"Insect Glaive\" weapon?",
        options: [
          "Monster Hunter 4",
          "Monster Hunter 2",
          "Monster Hunter Freedom",
          "Monster Hunter Stories"
        ],
        answer: 0
      },
      {
        question: "Which boxer was famous for striking the gong in the introduction to J. Arthur Rank films?",
        options: [
          "Don Cockell",
          "Freddie Mills",
          "Bombardier Billy Wells",
          "Terry Spinks"
        ],
        answer: 2
      },
      {
        question: "How many trophies are there in \"Super Smash Bros. for Nintendo 3DS\"?",
        options: [
          "1360",
          "1155",
          "716",
          "685"
        ],
        answer: 3
      },
      {
        question: "Which game in the \"Dark Souls\" series does the player play as the \"Ashen One\"?",
        options: [
          "Dark Souls III",
          "Dark Souls I",
          "Bloodborne",
          "Demon Souls"
        ],
        answer: 0
      },
      {
        question: "When was Pokemon GO released in North America?",
        options: [
          "May 24th, 2016",
          "January 2nd, 2017",
          "July 6th, 2016",
          "June 5th, 2016"
        ],
        answer: 2
      },
      {
        question: "In the 1964 film \"Zulu\", what song does the British Army company sing before the final battle?",
        options: [
          "Scotland the Brave",
          "Men of Harlech",
          "The British Grenadiers",
          "Colonel Bogey March"
        ],
        answer: 1
      },
      {
        question: "In the remake of \"Resident Evil 2\", which medallion does not exist?",
        options: [
          "Unicorn Medallion",
          "Maiden Medallion",
          "Lion Medallion",
          "Dragon Medallion"
        ],
        answer: 3
      },
      {
        question: "Which singer is portrayed by Bruce Campbell in the 2002 film 'Bubba Ho-Tep'?",
        options: [
          "Hank Williams, Sr.",
          "Elvis Presley",
          "Johnny Cash",
          "Buddy Holly"
        ],
        answer: 1
      },
      {
        question: "Which of these songs is NOT included in the Suicide Squad OST?",
        options: [
          "Skies on Fire - AC/DC",
          "Fortunate Son - Creedence Clearwater Revival",
          "Without Me - Eminem",
          "Heathens - Twenty One Pilots"
        ],
        answer: 0
      },
      {
        question: "In \"Call Of Duty: Zombies\", \"Richtofen\" is in possession of two filled blood vials belonging to who?",
        options: [
          "Richtofen",
          "Al Arlington and Sal DeLuca",
          "Jessica Rose and Jack Vincent",
          "Sal DeLuca and Finn O'Leary"
        ],
        answer: 3
      }
    ],
    14: [
      {
        question: "Which film holds the record for winning the highest number of Academy Awards (Oscars) at 11, tied with Ben-Hur and Titanic?",
        options: [
          "The Godfather",
          "The Lord of the Rings: The Return of the King",
          "Avatar",
          "Schindler's List"
        ],
        answer: 1
      },
      {
        question: "Who directed the Telugu epic action film 'Baahubali: The Beginning'?",
        options: [
          "Prashanth Neel",
          "S. S. Rajamouli",
          "Sukumar",
          "Trivikram Srinivas"
        ],
        answer: 1
      },
      {
        question: "Who is the only Indian director to be awarded an honorary Academy Award (Oscar) for lifetime achievement?",
        options: [
          "Satyajit Ray",
          "Raj Kapoor",
          "Guru Dutt",
          "A.R. Rahman"
        ],
        answer: 0
      },
      {
        question: "In the TV Show \"Donkey Kong Country\", which episode did the song \"Eddie, Let Me Go Back To My Home\" play in?",
        options: [
          "Message In A Bottle Show",
          "To The Moon Baboon",
          "Ape-Nesia",
          "It's a Wonderful Life"
        ],
        answer: 3
      },
      {
        question: "What Touhou Project character's first ever appearance was as a midboss in the eighth game, Imperishable Night?",
        options: [
          "Rumia",
          "Kaguya Houraisan",
          "Mystia Lorelei",
          "Tewi Inaba"
        ],
        answer: 3
      },
      {
        question: "Which was the first of Alfred Hitchcock's movies to be filmed in colour?",
        options: [
          "Psycho",
          "Rebecca",
          "Rope",
          "Vertigo"
        ],
        answer: 2
      },
      {
        question: "Which of these Generation 1 Pokemon did NOT have an evolution in Generation 4?",
        options: [
          "Magmar",
          "Rhydon",
          "Electabuzz",
          "Jynx"
        ],
        answer: 3
      },
      {
        question: "What is the species of the \"Predator\" in the 1987 movie \"Predator\"?",
        options: [
          "Yautja",
          "Xenomorph",
          "Praetorian",
          "Phocrex"
        ],
        answer: 0
      },
      {
        question: "In Halo 2, how many rounds does the M6C hold in a single magazine?",
        options: [
          "6",
          "18",
          "12",
          "36"
        ],
        answer: 2
      },
      {
        question: "In Disney's \"Toontown Online\", which of these species wasn't available as a Toon?",
        options: [
          "Bear",
          "Pig",
          "Monkey",
          "Cow"
        ],
        answer: 3
      },
      {
        question: "Which character from the Mega Man series made a small cameo on Volt Catfish's introduction scene in CD versions of Mega Man X3?",
        options: [
          "Rush",
          "Eddie",
          "Auto",
          "Tango"
        ],
        answer: 2
      },
      {
        question: "In the \"Devil May Cry\" franchise, which game is chronologically first?",
        options: [
          "Devil May Cry 2",
          "Devil May Cry 3: Dante's Awakening ",
          "Devil May Cry 4",
          "Devil May Cry"
        ],
        answer: 1
      },
      {
        question: "Prior to his appearance in Super Smash Bros. Ultimate, What was King K. Rool's last appearance in any game?",
        options: [
          "Donkey Kong: King Of Swing",
          "Donkey Kong 64",
          "Mario Super Sluggers",
          "Donkey Kong Country 3"
        ],
        answer: 2
      },
      {
        question: "The creation of the  Entertainment Software Ratings Board (ESRB) is often associated with Mortal Kombat and what FMV video game?",
        options: [
          "The Daedalus Encounter",
          "Corpse Killer",
          "Night Trap",
          "Sewer Shark"
        ],
        answer: 2
      },
      {
        question: "What was the UK \"Who Wants to be a Millionaire?\" cheating scandal known as?",
        options: [
          "Coughing Major",
          "Millionaire Crime",
          "Ingram Cheater",
          "Major Fraud"
        ],
        answer: 3
      },
      {
        question: "What is the first track on the Dave Matthews Band album \"Before These Crowded Streets\"?",
        options: [
          "Pantala Naga Pampa",
          "Stay (Wasting Time)",
          "Don't Drink The Water",
          "Rapunzel"
        ],
        answer: 0
      },
      {
        question: "In Hollow Knight, how many Precepts does Zote have?",
        options: [
          "Sixty-Nine",
          "Fifty-Seven",
          "Fourty-Three",
          "Ninety-One"
        ],
        answer: 1
      },
      {
        question: "What is the main theme song of \"Sonic Adventure 2\"?",
        options: [
          "Can You Feel the Sunshine?",
          "His World",
          "Live and Learn",
          "Open Your Heart"
        ],
        answer: 2
      },
      {
        question: "In the \"Jurassic Park\" universe, what was the first dinosaur cloned by InGen in 1986?",
        options: [
          "Triceratops",
          "Troodon",
          "Brachiosaurus",
          "Velociraptor"
        ],
        answer: 3
      },
      {
        question: "This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.",
        options: [
          "The Velvet Underground and Nico",
          "Led Zeppelin IV",
          "Pet Sounds",
          "Abbey Road"
        ],
        answer: 0
      },
      {
        question: "The film Mad Max: Fury Road features the Dies Irae  from which composer's requiem?",
        options: [
          "Mozart",
          "Verdi",
          "Berlioz",
          "Brahms"
        ],
        answer: 1
      },
      {
        question: "In the \"Halo\" series, what is the name of the race of aliens humans refer to as \"Grunts\"?",
        options: [
          "Unggoy",
          "Yanme'e",
          "Huragok",
          "Sangheili"
        ],
        answer: 0
      },
      {
        question: "In the game Enter the Gungeon, which one of these is not a playable character?",
        options: [
          "The Bullet",
          "The Wizard",
          "The Cultist",
          "The Robot"
        ],
        answer: 1
      },
      {
        question: "What did the first moving picture depict?",
        options: [
          "A man walking",
          "A woman in a dress",
          "A crackling fire",
          "A galloping horse"
        ],
        answer: 3
      },
      {
        question: "Pete Townshend collaborated with which famous guitarist for an event at Brixton Academy in 1985?",
        options: [
          "Eric Clapton",
          "David Gilmour",
          "Jimmy Page",
          "Mark Knopfler"
        ],
        answer: 1
      },
      {
        question: "\"Exile\" and \"Revelations\" were the third and fourth installments of which PC game series?",
        options: [
          "Tropico",
          "Myst",
          "Shivers",
          "Doom"
        ],
        answer: 1
      },
      {
        question: "What do the video games No Man’s Sky and Mighty No. 9 have in common?",
        options: [
          "Both were announced in 2013.",
          "Both were crowdfunded.",
          "Both were released for the PlayStation 3.",
          "Both were developed by indie studios."
        ],
        answer: 0
      }
    ],
    15: [
      {
        question: "In which year was the Dadasaheb Phalke Award, India's highest award in cinema, instituted?",
        options: [
          "1969",
          "1954",
          "1972",
          "1960"
        ],
        answer: 0
      },
      {
        question: "Who was the first recipient of the Dadasaheb Phalke Award?",
        options: [
          "Devika Rani",
          "Prithviraj Kapoor",
          "Kanan Devi",
          "Sohrab Modi"
        ],
        answer: 0
      },
      {
        question: "Which of the following was India's first indigenously made color film, released in 1937?",
        options: [
          "Kisan Kanya",
          "Alam Ara",
          "Raja Harishchandra",
          "Sairandhri"
        ],
        answer: 0
      },
      {
        question: "Which of these Nickelodeon game shows aired first?",
        options: [
          "Nickelodeon Guts",
          "Double Dare",
          "Finders Keepers",
          "Nick Arcade"
        ],
        answer: 1
      },
      {
        question: "In \"Star Trek\", who was the founder of the Klingon Empire and its philosophy?",
        options: [
          "Lady Lukara of the Great Hall",
          "Kahless the Unforgettable",
          "Molor the Unforgiving",
          "Dahar Master Kor"
        ],
        answer: 1
      },
      {
        question: "Which member of the Wu-Tang Clan had only one verse in their debut album Enter the Wu-Tang (36 Chambers)?",
        options: [
          "Inspectah Deck",
          "Masta Killa",
          "GZA",
          "Method Man"
        ],
        answer: 1
      },
      {
        question: "In the \"Little Lost Girl\" Easter Egg in Call of Duty: Black Ops II, what's the last step required for the achievement?",
        options: [
          "Freedom",
          "Raise Hell",
          "Skewer the Winged Beast",
          "Ascend from Darkness"
        ],
        answer: 1
      },
      {
        question: "Which Kingdom Hearts game featured the cast of \"The World Ends With You\"?",
        options: [
          "Dream Drop Distance",
          "Birth By Sleep",
          "365/2 Days",
          "Re:Chain of Memories"
        ],
        answer: 0
      },
      {
        question: "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
        options: [
          "3",
          "9",
          "6",
          "0"
        ],
        answer: 1
      },
      {
        question: "In the game \"Sonic the Hedgehog (1991)\" how many chaos emeralds could you collect?",
        options: [
          "9",
          "8",
          "6",
          "7"
        ],
        answer: 2
      },
      {
        question: "In what year was the first Indian movie submitted for an Oscar?",
        options: [
          "1957",
          "1954",
          "1938",
          "1962"
        ],
        answer: 0
      },
      {
        question: "What is the name of the supercomputer located in the control room in \"Jurassic Park\" (1993)?",
        options: [
          "IBM Blue Gene/Q",
          "Thinking Machines CM-5",
          "Cray X-MP",
          "Cray XK7"
        ],
        answer: 1
      },
      {
        question: "Which of these Pokémon cannot learn Surf?",
        options: [
          "Arbok",
          "Linoone",
          "Tauros",
          "Nidoking"
        ],
        answer: 0
      },
      {
        question: "Which former Coronation Street actress was once a hostess on the British Game Show \"Double Your Money\"?",
        options: [
          "Jean Alexander",
          "Amanda Barrie",
          "Violet Carson",
          "Sue Nicholls"
        ],
        answer: 1
      },
      {
        question: "In the book & video game Metro 2033, which Moscow Metro station is the main character Artyom's home station?",
        options: [
          "Kitay-Gorod",
          "Botanichesky Sad",
          "VDNKh",
          "Prospekt Mira"
        ],
        answer: 2
      },
      {
        question: "In the Team Fortress 2 canon, what did Shakespearicles NOT invent?",
        options: [
          "Rocket Launcher",
          "Stairs",
          "Stage Play",
          "Two-Story Building"
        ],
        answer: 1
      },
      {
        question: "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
        options: [
          "Xen",
          "Entrañas",
          "&&&&&&",
          "Sheep"
        ],
        answer: 1
      },
      {
        question: "In the film \"Harry Potter and the Order of The Phoenix\", why was Harry Potter's scream, after Sirius Black died, muted?",
        options: [
          "Too Harsh",
          "Too Violent",
          "Too Loud",
          "Too Agonizing"
        ],
        answer: 3
      },
      {
        question: "What is the fastest speed possible in Trackmania²: Stadium?",
        options: [
          "320 km/h",
          "1000  km/h",
          "500 km/h",
          "100 km/h"
        ],
        answer: 1
      },
      {
        question: "What was the code name given to Sonic the Hedgehog 4 during its development?",
        options: [
          "Project Darksphere",
          "Project Needlemouse",
          "Project Roboegg",
          "Project Bluespike"
        ],
        answer: 1
      },
      {
        question: "In \"Call Of Duty: Zombies\", what does the game traditionally reward you for completing a boss round?",
        options: [
          "Monkey Bombs",
          "Death Machine",
          "Max Ammo",
          "A Pack-A-Punched gun"
        ],
        answer: 2
      },
      {
        question: "What is the name of the main character in the video game VA-11 HALL-A: Cyberpunk Bartender Action?",
        options: [
          "Dana",
          "Jill",
          "Anna",
          "Alma"
        ],
        answer: 1
      },
      {
        question: "Which monster in \"Monster Hunter Tri\" was causing earthquakes in Moga Village?",
        options: [
          "Rathalos",
          "Ceadeus",
          "Lagiacrus",
          "Alatreon"
        ],
        answer: 1
      }
    ],
    16: [
      {
        question: "Which actor holds the record for winning the most National Film Awards for Best Actor (3 times, tied with Amitabh Bachchan and Kamal Haasan)?",
        options: [
          "Mammootty",
          "Mohanlal",
          "Shah Rukh Khan",
          "Dilip Kumar"
        ],
        answer: 0
      },
      {
        question: "Which was the first Indian film to be nominated for the Academy Award for Best Foreign Language Film?",
        options: [
          "Mother India",
          "Salaam Bombay!",
          "Lagaan",
          "Pather Panchali"
        ],
        answer: 0
      },
      {
        question: "For which Hollywood film did Bhanu Athaiya win India's first-ever Academy Award (Oscar) for Best Costume Design?",
        options: [
          "Gandhi",
          "Amadeus",
          "Passage to India",
          "The Last Emperor"
        ],
        answer: 0
      },
      {
        question: "Who was not in the band \"The Smiths\"?",
        options: [
          "Andy Rourke",
          "Mike Joyce",
          "Morrissey",
          "Martin Chambers"
        ],
        answer: 3
      },
      {
        question: "What's the name of the halloween-related Sims 4 Stuff Pack released September 29th, 2015?",
        options: [
          "Fearful Frights",
          "Nerving Nights",
          "Ghosts n' Ghouls",
          "Spooky Stuff"
        ],
        answer: 3
      },
      {
        question: "The heavy metal band Black Sabbath hail from which English city?",
        options: [
          "London",
          "Manchester",
          "Birmingham",
          "Newcastle-Upon-Tyne"
        ],
        answer: 2
      },
      {
        question: "Which character, in the game \"Morenatsu\", has the most possible endings to their route, at a total of four different endings?",
        options: [
          "Kouya Aotsuki",
          "Torahiko Ooshima",
          "Shin Kuroi",
          "Soutarou Touno"
        ],
        answer: 2
      },
      {
        question: "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
        options: [
          "The Legend of Zelda: The Minish Cap",
          "The Legend of Zelda: Spirit Tracks",
          "The Legend of Zelda: Twilight Princess",
          "The Legend of Zelda: Four Swords"
        ],
        answer: 0
      },
      {
        question: "The voice actor for which Portal 2 character was not a TV or film actor prior to the game?",
        options: [
          "Atlas / P-Body",
          "GLaDOS",
          "Wheatley",
          "Cave Johnson"
        ],
        answer: 1
      },
      {
        question: "In Star Trek, what is the name of Spock's father?",
        options: [
          "Tuvok",
          "Sarek",
          "Surak",
          "T'Pal"
        ],
        answer: 1
      },
      {
        question: "Which of these characters was considered, but ultimately not included, for Super Smash Bros. Melee?",
        options: [
          "Wave Racer",
          "Diddy Kong",
          "James Bond",
          "Mega Man"
        ],
        answer: 2
      },
      {
        question: "What is the name of the pirate that sings the intro to \"Spongebob Squarepants\"?",
        options: [
          "Painty",
          "Larry",
          "Patchy",
          "Lloyd"
        ],
        answer: 0
      },
      {
        question: "In the title of the game \"Luigi's Mansion\", what is the only letter to not appear with a pair of eyes in it?",
        options: [
          "m",
          "n",
          "s",
          "i"
        ],
        answer: 2
      },
      {
        question: "Which one of the following titles by Valve is not based on a Community Mod?",
        options: [
          "Counter-Strike",
          "Day of Defeat",
          "Alien Swarm",
          "Ricochet"
        ],
        answer: 3
      },
      {
        question: "GoldenEye 007 on the Nintendo 64 was planned to allow you to play as all previous Bond actors, with the exception of who?",
        options: [
          "Timothy Dalton",
          "Roger Moore",
          "George Lazenby",
          "Sean Connery"
        ],
        answer: 2
      },
      {
        question: "Which of these voices wasn't a choice for the House AI in \"The Simpsons Treehouse of Horror\" short, House of Whacks?",
        options: [
          "Dennis Miller",
          "George Clooney",
          "Pierce Brosnan",
          "Matthew Perry"
        ],
        answer: 1
      },
      {
        question: "In Monster Hunter Generations, which of these hunter arts are exclusive to the Longsword?",
        options: [
          "Provoke",
          "Shoryugeki",
          "Unhinged Spirit",
          "Demon Riot"
        ],
        answer: 2
      },
      {
        question: "Which Elton John hit starts with the line \"When are you gonna come down\"?",
        options: [
          "Goodbye Yellow Brick Road",
          "Rocket Man",
          "Bennie and the Jets",
          "Crocodile Rock"
        ],
        answer: 0
      }
    ]
  },
  geography: {
    1: [
      {
        question: "Which is the highest mountain peak in the world?",
        options: [
          "Mount K2",
          "Mount Kangchenjunga",
          "Mount Everest",
          "Mount Lhotse"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of India?",
        options: [
          "Mumbai",
          "New Delhi",
          "Kolkata",
          "Chennai"
        ],
        answer: 1
      },
      {
        question: "Which is the largest hot desert in the world?",
        options: [
          "Kalahari Desert",
          "Gobi Desert",
          "Sahara Desert",
          "Thar Desert"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Goa?",
        options: [
          "Srinagar (Summer) / Jammu (Winter)",
          "Bhopal",
          "Raipur",
          "Panaji"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Jharkhand?",
        options: [
          "Ranchi",
          "Jaipur",
          "Panaji",
          "Lucknow"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Jammu and Kashmir?",
        options: [
          "Srinagar (Summer) / Jammu (Winter)",
          "Hyderabad",
          "Raipur",
          "Dehradun"
        ],
        answer: 0
      },
      {
        question: "Which of these places is a location in Cornwall?",
        options: [
          "Barcelona",
          "Lisbon",
          "Madrid",
          "Alicante"
        ],
        answer: 0
      },
      {
        question: "Which European city is known as the \"City of Light\"?",
        options: [
          "Rome",
          "Madrid",
          "Paris",
          "London"
        ],
        answer: 2
      },
      {
        question: "The Alps are a mountain range on which continent?",
        options: [
          "Asia",
          "Africa",
          "Europe",
          "North America"
        ],
        answer: 2
      },
      {
        question: "On which continent does the Andes mountain range lie?",
        options: [
          "Africa",
          "Asia",
          "South America",
          "Europe"
        ],
        answer: 2
      }
    ],
    2: [
      {
        question: "Which is the longest river in the world?",
        options: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River"
        ],
        answer: 1
      },
      {
        question: "Which country is also known as the 'Land of the Rising Sun'?",
        options: [
          "China",
          "Japan",
          "South Korea",
          "Thailand"
        ],
        answer: 1
      },
      {
        question: "Which is the smallest continent in the world by land area?",
        options: [
          "Europe",
          "Antarctica",
          "Australia",
          "South America"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Maharashtra?",
        options: [
          "Gandhinagar",
          "Mumbai",
          "Chandigarh",
          "Bhubaneswar"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Tamil Nadu?",
        options: [
          "Kolkata",
          "Hyderabad",
          "Chennai",
          "Bhubaneswar"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Uttar Pradesh?",
        options: [
          "Gandhinagar",
          "Chandigarh",
          "Lucknow",
          "Jaipur"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Haryana?",
        options: [
          "Jaipur",
          "Srinagar (Summer) / Jammu (Winter)",
          "Lucknow",
          "Chandigarh"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Uttarakhand?",
        options: [
          "Dehradun",
          "Lucknow",
          "Bhubaneswar",
          "Chandigarh"
        ],
        answer: 0
      },
      {
        question: "Who won the first season of the Indian Premier League (IPL) in 2008?",
        options: [
          "Rajasthan Royals",
          "Mumbai Indians",
          "Delhi Daredevils",
          "Chennai Super Kings"
        ],
        answer: 0
      },
      {
        question: "In which ocean is the Réunion island?",
        options: [
          "North Pacific Ocean",
          "South Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean"
        ],
        answer: 3
      },
      {
        question: "What is the official language in Liechtenstein?",
        options: [
          "French",
          "English",
          "Italian",
          "German"
        ],
        answer: 3
      },
      {
        question: "How many time zones does China have?",
        options: [
          "3",
          "4",
          "1",
          "2"
        ],
        answer: 2
      },
      {
        question: "Which area of Eastern Europe is famous for its association with vampires?",
        options: [
          "Silesia",
          "Macedonia",
          "Slovakia",
          "Transylvania"
        ],
        answer: 3
      },
      {
        question: "Which of the following European languages is classified as a \"language isolate?\"",
        options: [
          "Basque",
          "Galician",
          "Maltese",
          "Hungarian"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Finland?",
        options: [
          "Jabraltar",
          "Oslo",
          "Helsinki",
          "Macedonia"
        ],
        answer: 2
      },
      {
        question: "What is the largest country in the world?",
        options: [
          "Russia",
          "China",
          "Canada",
          "United States"
        ],
        answer: 0
      },
      {
        question: "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
        options: [
          "Kiribati",
          "Scotland",
          "Sri Lanka",
          "Bhutan"
        ],
        answer: 2
      },
      {
        question: "Which of the following languages does NOT use the Latin alphabet?",
        options: [
          "Turkish",
          "Georgian",
          "Swahili",
          "Vietnamese"
        ],
        answer: 1
      }
    ],
    3: [
      {
        question: "Which is the largest ocean on Earth?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean"
        ],
        answer: 3
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: [
          "Asia",
          "Africa",
          "South America",
          "Australia"
        ],
        answer: 1
      },
      {
        question: "Which river is considered sacred and is the longest flowing river within India?",
        options: [
          "Yamuna",
          "Brahmaputra",
          "Ganga",
          "Godavari"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Telangana?",
        options: [
          "Hyderabad",
          "Lucknow",
          "Bhubaneswar",
          "Dispur"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Kerala?",
        options: [
          "Gandhinagar",
          "Chandigarh",
          "Thiruvananthapuram",
          "Dispur"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Odisha?",
        options: [
          "Bhubaneswar",
          "Lucknow",
          "Shimla",
          "Bhopal"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Chhattisgarh?",
        options: [
          "Kolkata",
          "Raipur",
          "Srinagar (Summer) / Jammu (Winter)",
          "Lucknow"
        ],
        answer: 1
      },
      {
        question: "What is Laos?",
        options: [
          "Region",
          "River",
          "Country",
          "City"
        ],
        answer: 2
      },
      {
        question: "What is the capital of South Korea?",
        options: [
          "Pyongyang",
          "Seoul",
          "Taegu",
          "Kitakyushu"
        ],
        answer: 1
      },
      {
        question: "Which UK country features a dragon on their flag?",
        options: [
          "Scotland",
          "England",
          "North Ireland",
          "Wales"
        ],
        answer: 3
      },
      {
        question: "What is the capital of India?",
        options: [
          "Beijing",
          "New Delhi",
          "Tithi",
          "Montreal"
        ],
        answer: 1
      },
      {
        question: "What is the name of New Zealand's indigenous people?",
        options: [
          "Polynesians",
          "Maori",
          "Vikings",
          "Samoans"
        ],
        answer: 1
      },
      {
        question: "What is Canada's smallest province?",
        options: [
          "Nova Scotia",
          "New Brunswick",
          "Yukon",
          "Prince Edward Island"
        ],
        answer: 3
      },
      {
        question: "What is the capital of Denmark?",
        options: [
          "Copenhagen",
          "Aarhus",
          "Odense",
          "Aalborg"
        ],
        answer: 0
      },
      {
        question: "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
        options: [
          "Jordan",
          "Qatar",
          "United Arab Emirates",
          "Kuwait"
        ],
        answer: 1
      },
      {
        question: "If soccer is called football in England, what is American football called in England?",
        options: [
          "American football",
          "Touchdown",
          "Handball",
          "Combball"
        ],
        answer: 0
      }
    ],
    4: [
      {
        question: "Which is the largest desert in the world (including polar deserts)?",
        options: [
          "Sahara Desert",
          "Gobi Desert",
          "Antarctic Desert",
          "Thar Desert"
        ],
        answer: 2
      },
      {
        question: "Which country shares the longest international land border with India?",
        options: [
          "Pakistan",
          "China",
          "Bangladesh",
          "Nepal"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of France?",
        options: [
          "Rome",
          "Berlin",
          "Paris",
          "Madrid"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of India?",
        options: [
          "Paris",
          "New Delhi",
          "Moscow",
          "Moscow"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of France?",
        options: [
          "Paris",
          "Canberra",
          "Beijing",
          "Tokyo"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of United Kingdom?",
        options: [
          "London",
          "Madrid",
          "Cairo",
          "Tokyo"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of United States?",
        options: [
          "Paris",
          "New Delhi",
          "Brasilia",
          "Washington, D.C."
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Japan?",
        options: [
          "Moscow",
          "Tokyo",
          "Brasilia",
          "London"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of China?",
        options: [
          "Beijing",
          "Cairo",
          "Canberra",
          "London"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Italy?",
        options: [
          "Rome",
          "Beijing",
          "New Delhi",
          "London"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Germany?",
        options: [
          "Paris",
          "Washington, D.C.",
          "Pretoria",
          "Berlin"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Russia?",
        options: [
          "New Delhi",
          "London",
          "Rome",
          "Moscow"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Australia?",
        options: [
          "Moscow",
          "Cairo",
          "Canberra",
          "New Delhi"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Egypt?",
        options: [
          "New Delhi",
          "Cairo",
          "Tokyo",
          "Canberra"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Brazil?",
        options: [
          "Canberra",
          "Beijing",
          "Brasilia",
          "Washington, D.C."
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Canada?",
        options: [
          "Ottawa",
          "Washington, D.C.",
          "Canberra",
          "Brasilia"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Spain?",
        options: [
          "Canberra",
          "Ottawa",
          "Brasilia",
          "Madrid"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of South Africa?",
        options: [
          "Paris",
          "Pretoria",
          "London",
          "Ottawa"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Karnataka?",
        options: [
          "Bengaluru",
          "Chennai",
          "Srinagar (Summer) / Jammu (Winter)",
          "Kolkata"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of West Bengal?",
        options: [
          "Chandigarh",
          "Dispur",
          "Gandhinagar",
          "Kolkata"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Rajasthan?",
        options: [
          "Bengaluru",
          "Bhopal",
          "Kolkata",
          "Jaipur"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Gujarat?",
        options: [
          "Jaipur",
          "Lucknow",
          "Gandhinagar",
          "Chandigarh"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Bihar?",
        options: [
          "Bhopal",
          "Patna",
          "Ranchi",
          "Mumbai"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Georgia?",
        options: [
          "Raleigh",
          "Atlanta",
          "Olympia",
          "Albany"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of North Carolina?",
        options: [
          "Honolulu",
          "Raleigh",
          "Denver",
          "Atlanta"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Michigan?",
        options: [
          "Lansing",
          "Atlanta",
          "Phoenix",
          "Carson City"
        ],
        answer: 0
      },
      {
        question: "Which city is the capital of the United States of America?",
        options: [
          "Seattle",
          "Washington D.C",
          "Albany",
          "Los Angeles"
        ],
        answer: 1
      },
      {
        question: "What country is the second largest in the world by area?",
        options: [
          "United States of America",
          "Russia",
          "China",
          "Canada"
        ],
        answer: 3
      },
      {
        question: "Which continent is considered the largest and most populous continent in the world?",
        options: [
          "Europe",
          "Asia",
          "Africa",
          "North America"
        ],
        answer: 1
      },
      {
        question: "Harvard University is located in which city?",
        options: [
          "Washington D.C.",
          "Cambridge",
          "New York",
          "Providence"
        ],
        answer: 1
      },
      {
        question: "How many stars are featured on New Zealand's flag?",
        options: [
          "4",
          "2",
          "5",
          "0"
        ],
        answer: 0
      }
    ],
    5: [
      {
        question: "Which state is known as the 'Spice Garden of India'?",
        options: [
          "Karnataka",
          "Tamil Nadu",
          "Kerala",
          "Andhra Pradesh"
        ],
        answer: 2
      },
      {
        question: "Which is the largest state in India by land area?",
        options: [
          "Madhya Pradesh",
          "Maharashtra",
          "Rajasthan",
          "Uttar Pradesh"
        ],
        answer: 2
      },
      {
        question: "Which is the highest waterfall in India, located in Karnataka?",
        options: [
          "Dudhsagar Falls",
          "Jog Falls",
          "Nohkalikai Falls",
          "Athirappilly Falls"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Madhya Pradesh?",
        options: [
          "Lucknow",
          "Ranchi",
          "Bhopal",
          "Hyderabad"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Punjab?",
        options: [
          "Bhubaneswar",
          "Chandigarh",
          "Bengaluru",
          "Raipur"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Assam?",
        options: [
          "Patna",
          "Dispur",
          "Bhubaneswar",
          "Mumbai"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Himachal Pradesh?",
        options: [
          "Shimla",
          "Patna",
          "Raipur",
          "Chandigarh"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Indonesia?",
        options: [
          "Palembang",
          "Bandung",
          "Medan",
          "Jakarta"
        ],
        answer: 3
      },
      {
        question: "Where would you find the \"Spanish Steps\"?",
        options: [
          "Rome, Italy",
          "Berlin, Germany",
          "London, England",
          "Barcelona, Spain"
        ],
        answer: 0
      },
      {
        question: "Which Russian oblast forms a border with Poland?",
        options: [
          "Nizhny Novgorod",
          "Omsk",
          "Samara",
          "Kaliningrad"
        ],
        answer: 3
      },
      {
        question: "About how many countries are there in the world?",
        options: [
          "100",
          "300",
          "500",
          "200"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the US state of Washington?",
        options: [
          "Denver",
          "Olympia",
          "Tallahassee",
          "Austin"
        ],
        answer: 1
      },
      {
        question: "What is the capital of Bangladesh?",
        options: [
          "Lahore",
          "Dhaka",
          "London",
          "Khulna"
        ],
        answer: 1
      }
    ],
    6: [
      {
        question: "Through which of the following Indian states does the Tropic of Cancer NOT pass?",
        options: [
          "Gujarat",
          "Rajasthan",
          "Odisha",
          "Tripura"
        ],
        answer: 2
      },
      {
        question: "Which is the smallest country in the world by land area?",
        options: [
          "Monaco",
          "San Marino",
          "Vatican City",
          "Liechtenstein"
        ],
        answer: 2
      },
      {
        question: "Which European country is shaped like a boot?",
        options: [
          "Greece",
          "Spain",
          "Italy",
          "Portugal"
        ],
        answer: 2
      },
      {
        question: "Where are the Nazca Lines located?",
        options: [
          "Colombia",
          "Brazil",
          "Peru",
          "Ecuador"
        ],
        answer: 2
      },
      {
        question: "Which of these country's capitals starts with the letter B?",
        options: [
          "Kuwait",
          "Qatar",
          "Lebanon",
          "Jordan"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of New Zealand?",
        options: [
          "Christchurch",
          "Melbourne",
          "Wellington",
          "Auckland"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Texas?",
        options: [
          "Boston",
          "Phoenix",
          "Austin",
          "Olympia"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Florida?",
        options: [
          "Honolulu",
          "Denver",
          "Tallahassee",
          "Olympia"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Ohio?",
        options: [
          "Denver",
          "Columbus",
          "Sacramento",
          "Austin"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Arizona?",
        options: [
          "Columbus",
          "Carson City",
          "Honolulu",
          "Phoenix"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the US state of Colorado?",
        options: [
          "Austin",
          "Denver",
          "Atlanta",
          "Tallahassee"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Nevada?",
        options: [
          "Carson City",
          "Phoenix",
          "Sacramento",
          "Lansing"
        ],
        answer: 0
      },
      {
        question: "Which one of these archipelagos are NOT a part of the United Kingdom?",
        options: [
          "Orkney Islands",
          "Shetland Islands ",
          "The Channel Islands ",
          "Isles of Scilly"
        ],
        answer: 2
      },
      {
        question: "How many countries are inside the United Kingdom?",
        options: [
          "Three",
          "One",
          "Two",
          "Four"
        ],
        answer: 3
      },
      {
        question: "What European country is not a part of the EU?",
        options: [
          "Ireland",
          "Lithuania",
          "Czechia",
          "Norway"
        ],
        answer: 3
      },
      {
        question: "What city  has the busiest airport in the world?",
        options: [
          "London, England",
          "Atlanta, Georgia USA",
          "Chicago,Illinois ISA",
          "Tokyo,Japan"
        ],
        answer: 1
      }
    ],
    7: [
      {
        question: "Which river is known as the 'Ganga of the South' (Dakshin Ganga)?",
        options: [
          "Krishna River",
          "Godavari River",
          "Cauvery River",
          "Narmada River"
        ],
        answer: 1
      },
      {
        question: "Which is the deepest lake in the world?",
        options: [
          "Lake Superior",
          "Lake Baikal",
          "Lake Victoria",
          "Lake Tanganyika"
        ],
        answer: 1
      },
      {
        question: "Which country is the largest in the world by land area?",
        options: [
          "Canada",
          "United States",
          "China",
          "Russia"
        ],
        answer: 3
      },
      {
        question: "A lion brandishing a sword is depicted on the national flag of which country?",
        options: [
          "Moldova",
          "Sri Lanka",
          "Zambia",
          "Albania"
        ],
        answer: 1
      },
      {
        question: "Which European city has the highest mileage of canals in the world?",
        options: [
          "Venice",
          "Berlin",
          "Birmingham",
          "Amsterdam"
        ],
        answer: 2
      },
      {
        question: "Which of these American cities has fewer than 1,000,000 people?",
        options: [
          "Philadelphia, Pennsylvania",
          "San Francisco, California",
          "San Antonio, Texas",
          "Phoenix, Arizona"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of California?",
        options: [
          "Albany",
          "Atlanta",
          "Sacramento",
          "Springfield"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Illinois?",
        options: [
          "Austin",
          "Sacramento",
          "Phoenix",
          "Springfield"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the US state of Massachusetts?",
        options: [
          "Boston",
          "Atlanta",
          "Tallahassee",
          "Columbus"
        ],
        answer: 0
      },
      {
        question: "What mountain range lines the border between Spain and France?",
        options: [
          "Urals",
          "Pyrenees",
          "Carpathians",
          "Alps"
        ],
        answer: 1
      },
      {
        question: "The land mass of modern day Turkey is called what?",
        options: [
          "Ottoma",
          "Ismuth of Anatolia",
          "Anatolia",
          "Ismuth of Ottoma"
        ],
        answer: 2
      },
      {
        question: "Which of these Mediterranian islands is under the sovereign rule of France?",
        options: [
          "Majorca",
          "Corsica",
          "Sardinia",
          "Malta"
        ],
        answer: 1
      },
      {
        question: "Bikini Atoll is in which country?",
        options: [
          "Fiji",
          "Marshall Islands",
          "Bahamas",
          "Christmas Islands"
        ],
        answer: 1
      },
      {
        question: "In which country is located the municipality of Arteijo?",
        options: [
          "Belgium",
          "France",
          "Morocco",
          "Spain"
        ],
        answer: 3
      },
      {
        question: "What is the only nation that borders both Uruguay and Venezuela?",
        options: [
          "Brazil",
          "Chile",
          "Panama",
          "Mexico"
        ],
        answer: 0
      }
    ],
    8: [
      {
        question: "Which strait separates India from Sri Lanka?",
        options: [
          "Malacca Strait",
          "Palk Strait",
          "Gibraltar Strait",
          "Hormuz Strait"
        ],
        answer: 1
      },
      {
        question: "Which country has the highest population in the world?",
        options: [
          "China",
          "India",
          "United States",
          "Indonesia"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of Australia?",
        options: [
          "Sydney",
          "Melbourne",
          "Canberra",
          "Brisbane"
        ],
        answer: 2
      },
      {
        question: "Which city was the capital of the Kaurava kingdom?",
        options: [
          "Hastinapur",
          "Indraprastha",
          "Mathura",
          "Dwarka"
        ],
        answer: 0
      },
      {
        question: "Where is the ancient city of Petra located?",
        options: [
          "Jordan",
          "Egypt",
          "Italy",
          "Israel"
        ],
        answer: 0
      },
      {
        question: "Broome is a town in which state of Australia?",
        options: [
          "Northern Territory",
          "Tasmania",
          "South Australia",
          "Western Australia"
        ],
        answer: 3
      },
      {
        question: "Which is the only US state located entirely within the Appalachia region?",
        options: [
          "Alabama",
          "Pennsylvania",
          "West Virginia",
          "Kentucky"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of New York?",
        options: [
          "Albany",
          "Carson City",
          "Honolulu",
          "Columbus"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Peru?",
        options: [
          "Santiago",
          "Montevideo",
          "Lima",
          "Buenos Aires"
        ],
        answer: 2
      },
      {
        question: "How many independent countries are there within the continent of South America?",
        options: [
          "12",
          "10",
          "8",
          "9"
        ],
        answer: 0
      },
      {
        question: "The Gambia is a nation found on which continent?",
        options: [
          "Asia",
          "Europe",
          "South America",
          "Africa"
        ],
        answer: 3
      },
      {
        question: "What is the busiest port in Europe?",
        options: [
          "Port of Antwerp",
          "Port of Rotterdam",
          "Port of Amsterdam",
          "Port of Hamburg"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of Slovenia?",
        options: [
          "Maribor",
          "Velenje",
          "Ljubljana",
          "Trbovlje"
        ],
        answer: 2
      },
      {
        question: "What is the capital of Senegal?",
        options: [
          "Nouakchott",
          "Dakar",
          "Monrovia",
          "Conakry"
        ],
        answer: 1
      }
    ],
    9: [
      {
        question: "Which of the following cities is located on the banks of the river Thames?",
        options: [
          "Paris",
          "London",
          "New York",
          "Rome"
        ],
        answer: 1
      },
      {
        question: "Which is the largest island in the world?",
        options: [
          "Greenland",
          "New Guinea",
          "Borneo",
          "Madagascar"
        ],
        answer: 0
      },
      {
        question: "Which ocean is S-shaped and located between the Americas and Europe/Africa?",
        options: [
          "Indian Ocean",
          "Pacific Ocean",
          "Atlantic Ocean",
          "Arctic Ocean"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Argentina?",
        options: [
          "Stockholm",
          "Bern",
          "Ankara",
          "Buenos Aires"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Turkey?",
        options: [
          "Buenos Aires",
          "Stockholm",
          "Ankara",
          "Oslo"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Portugal?",
        options: [
          "Kuala Lumpur",
          "Athens",
          "Ankara",
          "Lisbon"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Switzerland?",
        options: [
          "Athens",
          "Bangkok",
          "Bern",
          "Tehran"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Mexico?",
        options: [
          "Hanoi",
          "Lisbon",
          "Mexico City",
          "Ankara"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Greece?",
        options: [
          "Bangkok",
          "Athens",
          "Bern",
          "Baghdad"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Thailand?",
        options: [
          "Amsterdam",
          "Bangkok",
          "Athens",
          "Kuala Lumpur"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Saudi Arabia?",
        options: [
          "Kuala Lumpur",
          "Riyadh",
          "Amsterdam",
          "Buenos Aires"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Iran?",
        options: [
          "Lisbon",
          "Tehran",
          "Amsterdam",
          "Baghdad"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Iraq?",
        options: [
          "Baghdad",
          "Hanoi",
          "Kuala Lumpur",
          "Ankara"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Vietnam?",
        options: [
          "Amsterdam",
          "Tehran",
          "Lisbon",
          "Hanoi"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Norway?",
        options: [
          "Tehran",
          "Wellington",
          "Oslo",
          "Bangkok"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Sweden?",
        options: [
          "Bern",
          "Stockholm",
          "Athens",
          "Mexico City"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Netherlands?",
        options: [
          "Bern",
          "Amsterdam",
          "Lisbon",
          "Ankara"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Malaysia?",
        options: [
          "Kuala Lumpur",
          "Athens",
          "Mexico City",
          "Bern"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of New Zealand?",
        options: [
          "Wellington",
          "Stockholm",
          "Bern",
          "Ankara"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Australia?",
        options: [
          "Canberra",
          "Sydney",
          "Melbourne",
          "Brisbane"
        ],
        answer: 0
      },
      {
        question: "In which English county is the city of Portsmouth?",
        options: [
          "Buckinghamshire",
          "Hampshire",
          "Surrey",
          "Oxfordshire"
        ],
        answer: 1
      },
      {
        question: "Colchester Overpass, otherwise known as \"Bunny Man Bridge\", is located where?",
        options: [
          "Braxton County, Virgina",
          "Medford, Oregon",
          "Fairfax County, Virginia",
          "Lemon Grove, California"
        ],
        answer: 2
      },
      {
        question: "Which is the largest city in Morocco?",
        options: [
          "Casablanca",
          "Sale",
          "Fes",
          "Rabat"
        ],
        answer: 0
      },
      {
        question: "What is the largest lake in the African continent?",
        options: [
          "Lake Turkana",
          "Lake Victoria",
          "Lake Tanganyika",
          "Lake Malawi"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the longest river in Europe?",
        options: [
          "Danube",
          "Dnieper",
          "Volga",
          "Ural"
        ],
        answer: 2
      },
      {
        question: "Which of the following cities is the capital of Latvia?",
        options: [
          "Tallinn",
          "Minsk",
          "Riga",
          "Vilnius"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Hawaii?",
        options: [
          "Denver",
          "Springfield",
          "Lansing",
          "Honolulu"
        ],
        answer: 3
      },
      {
        question: "Which of these countries is \"doubly landlocked\" (surrounded entirely by one or more landlocked countries)?",
        options: [
          "Uzbekistan",
          "Switzerland",
          "Ethiopia",
          "Bolivia"
        ],
        answer: 0
      },
      {
        question: "Which German city is located on the River Isar?",
        options: [
          "Berlin",
          "Munich",
          "Dortmund",
          "Hamburg"
        ],
        answer: 1
      },
      {
        question: "Which of these countries is located the FURTHEST away from the South China Sea?",
        options: [
          "Vietnam",
          "Malaysia",
          "Philippines",
          "Bangladesh"
        ],
        answer: 3
      },
      {
        question: "How many time zones are in Russia?",
        options: [
          "2",
          "11",
          "5",
          "8"
        ],
        answer: 1
      },
      {
        question: "How many countries are larger than Australia?",
        options: [
          "3",
          "4",
          "6",
          "5"
        ],
        answer: 3
      },
      {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
        options: [
          "Europe",
          "Africa",
          "Asia",
          "South America"
        ],
        answer: 1
      },
      {
        question: "Which of the following countries banned the use of personal genetic ancestry tests?",
        options: [
          "Austria",
          "Germany",
          "Canada",
          "Sweden"
        ],
        answer: 1
      }
    ],
    10: [
      {
        question: "What is the capital of Germany?",
        options: [
          "Munich",
          "Frankfurt",
          "Berlin",
          "Hamburg"
        ],
        answer: 2
      },
      {
        question: "Which line separates India and China?",
        options: [
          "Radcliffe Line",
          "McMahon Line",
          "Durand Line",
          "Line of Control"
        ],
        answer: 1
      },
      {
        question: "Which lake is the largest freshwater lake in India, located in Jammu & Kashmir?",
        options: [
          "Dal Lake",
          "Wular Lake",
          "Chilika Lake",
          "Loktak Lake"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Mongolia?",
        options: [
          "Thimphu",
          "Warsaw",
          "Ulaanbaatar",
          "Reykjavik"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Nigeria?",
        options: [
          "Nairobi",
          "Abuja",
          "Lima",
          "Kyiv"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Iceland?",
        options: [
          "Abuja",
          "Santiago",
          "Quito",
          "Reykjavik"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Kenya?",
        options: [
          "Warsaw",
          "Nairobi",
          "Rabat",
          "Kyiv"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Peru?",
        options: [
          "Warsaw",
          "Santiago",
          "Lima",
          "Thimphu"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Chile?",
        options: [
          "Warsaw",
          "Reykjavik",
          "Santiago",
          "Kyiv"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Finland?",
        options: [
          "Thimphu",
          "Helsinki",
          "Ulaanbaatar",
          "Nairobi"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Poland?",
        options: [
          "Warsaw",
          "Lima",
          "Thimphu",
          "Helsinki"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Ukraine?",
        options: [
          "Reykjavik",
          "Kyiv",
          "Helsinki",
          "Kathmandu"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Morocco?",
        options: [
          "Rabat",
          "Nairobi",
          "Ulaanbaatar",
          "Reykjavik"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Ecuador?",
        options: [
          "Kyiv",
          "Quito",
          "Warsaw",
          "Havana"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Cuba?",
        options: [
          "Havana",
          "Kathmandu",
          "Abuja",
          "Rabat"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Bhutan?",
        options: [
          "Thimphu",
          "Sri Jayawardenepura Kotte",
          "Nairobi",
          "Helsinki"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Nepal?",
        options: [
          "Kathmandu",
          "Quito",
          "Havana",
          "Thimphu"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Sri Lanka?",
        options: [
          "Warsaw",
          "Kathmandu",
          "Sri Jayawardenepura Kotte",
          "Rabat"
        ],
        answer: 2
      },
      {
        question: "Which of the following countries is an island?",
        options: [
          "Cyprus",
          "Azerbaijan",
          "El Salvador",
          "Djibouti"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT a capital city?",
        options: [
          "Moscow",
          "Cairo",
          "Sydney",
          "Beijing"
        ],
        answer: 2
      },
      {
        question: "What is the largest non-continental island in the world?",
        options: [
          "Borneo",
          "Greenland",
          "Madagascar",
          "New Guinea"
        ],
        answer: 1
      },
      {
        question: "The land of Gotland is located in which European country?",
        options: [
          "Denmark",
          "Sweden",
          "Norway",
          "Germany"
        ],
        answer: 1
      },
      {
        question: "In Washington, D.C. what does the \"C\" stand for?",
        options: [
          "Columbia",
          "Caledonia",
          "City",
          "Corinthia"
        ],
        answer: 0
      },
      {
        question: "What is the only country in the world with a flag that doesn't have four right angles?",
        options: [
          "Nepal",
          "Angola",
          "Egypt",
          "Panama"
        ],
        answer: 0
      },
      {
        question: "Lake Titicaca is located between which two nations?",
        options: [
          "Mexico and the United States",
          "Kenya and Uganda",
          "Peru and Bolivia",
          "India and Bangladesh"
        ],
        answer: 2
      },
      {
        question: "Which of these is NOT an island that is part of the Philippines?",
        options: [
          "Java",
          "Luzon",
          "Palawan",
          "Mindanao"
        ],
        answer: 0
      },
      {
        question: "What is the right way to spell the capital of Hungary?",
        options: [
          "Bhudapest",
          "Budapest",
          "Boodapest",
          "Budapast"
        ],
        answer: 1
      },
      {
        question: "Which of these countries is the smallest by population?",
        options: [
          "Norway",
          "Slovakia",
          "Finland",
          "Hong Kong"
        ],
        answer: 0
      }
    ],
    11: [
      {
        question: "Which is the largest hot desert in the world (excluding polar deserts)?",
        options: [
          "Arabian Desert",
          "Kalahari Desert",
          "Sahara Desert",
          "Gobi Desert"
        ],
        answer: 2
      },
      {
        question: "In which country is the active volcano Mount Vesuvius located?",
        options: [
          "Japan",
          "Italy",
          "Greece",
          "Iceland"
        ],
        answer: 1
      },
      {
        question: "Which is the highest and largest plateau in the world, often called the 'Roof of the World'?",
        options: [
          "Deccan Plateau",
          "Colorado Plateau",
          "Tibetan Plateau",
          "Anatolian Plateau"
        ],
        answer: 2
      },
      {
        question: "What is the name of rocky region that spans most of eastern Canada?",
        options: [
          "Rocky Mountains",
          "Himalayas",
          "Canadian Shield",
          "Appalachian Mountains"
        ],
        answer: 2
      },
      {
        question: "When does Finland celebrate their independence day?",
        options: [
          "November 12th",
          "February 8th",
          "December 6th",
          "January 2nd"
        ],
        answer: 2
      },
      {
        question: "How many islands does Kuwait have?",
        options: [
          "9",
          "3",
          "6",
          "2"
        ],
        answer: 0
      },
      {
        question: "What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?",
        options: [
          "Chaldean Neo-Aramaic",
          "Lishan Didan",
          "Hulaulá",
          "Lishana Deni"
        ],
        answer: 3
      },
      {
        question: "Which of these cities has a 4° East longitude.",
        options: [
          "Toronto",
          "Hong Kong",
          "Amsterdam",
          "Rio de Janero"
        ],
        answer: 2
      }
    ],
    12: [
      {
        question: "What is the capital city of Canada?",
        options: [
          "Toronto",
          "Vancouver",
          "Montreal",
          "Ottawa"
        ],
        answer: 3
      },
      {
        question: "Which is the largest fresh water lake in India?",
        options: [
          "Wular Lake",
          "Chilika Lake",
          "Loktak Lake",
          "Dal Lake"
        ],
        answer: 0
      },
      {
        question: "Which active volcano is known as the 'Lighthouse of the Mediterranean'?",
        options: [
          "Mount Etna",
          "Stromboli",
          "Mount Vesuvius",
          "Krakatoa"
        ],
        answer: 1
      },
      {
        question: "What is the capital of Mauritius?",
        options: [
          "Port Louis",
          "Port-au-Prince",
          "Port Moresby",
          "Port Vila"
        ],
        answer: 0
      },
      {
        question: "Which river was dammed to create Gatun Lake and the Panama Canal?",
        options: [
          "Chucunaque River",
          "Chepo River ",
          "Tuira River",
          "Chagres River"
        ],
        answer: 3
      }
    ],
    13: [
      {
        question: "Which of the following rivers flows through the Grand Canyon in the United States?",
        options: [
          "Mississippi River",
          "Colorado River",
          "Missouri River",
          "Rio Grande"
        ],
        answer: 1
      },
      {
        question: "Which city is known as the 'Venice of the East' in India?",
        options: [
          "Udaipur",
          "Srinagar",
          "Alappuzha",
          "Kochi"
        ],
        answer: 2
      },
      {
        question: "What is the capital of Brazil?",
        options: [
          "Rio de Janeiro",
          "Sao Paulo",
          "Brasilia",
          "Salvador"
        ],
        answer: 2
      },
      {
        question: "Which of these African countries displays a gun on their flag?",
        options: [
          "Uganda",
          "Mozambique",
          "Ethiopia",
          "Nigeria"
        ],
        answer: 1
      },
      {
        question: "What North American tourist attraction is served by the \"Maid of the Mist\" tour company?",
        options: [
          "Disney World",
          "Yosemite National Park",
          "Whistler, British Columbia",
          "Niagara Falls"
        ],
        answer: 3
      },
      {
        question: "What is the tallest mountain in Canada?",
        options: [
          "Mount Logan",
          "Mont Tremblant",
          "Blue Mountain",
          "Whistler Mountain"
        ],
        answer: 0
      },
      {
        question: "In which country is Tallinn located?",
        options: [
          "Estonia",
          "Finland",
          "Poland",
          "Sweden"
        ],
        answer: 0
      }
    ],
    14: [
      {
        question: "Which is the smallest state in India by land area?",
        options: [
          "Sikkim",
          "Goa",
          "Tripura",
          "Mizoram"
        ],
        answer: 1
      },
      {
        question: "Which country is the largest landlocked country in the world?",
        options: [
          "Mongolia",
          "Kazakhstan",
          "Bolivia",
          "Chad"
        ],
        answer: 1
      },
      {
        question: "Which island nation in the Indian Ocean is the smallest Asian country by both population and land area?",
        options: [
          "Sri Lanka",
          "Maldives",
          "Mauritius",
          "Seychelles"
        ],
        answer: 1
      },
      {
        question: "Which country was NOT formerly part of Yugoslavia?",
        options: [
          "Albania",
          "Macedonia",
          "Serbia",
          "Croatia"
        ],
        answer: 0
      },
      {
        question: "Which of these is an official currency of the Cook Islands?",
        options: [
          "British Pound",
          "New Zealand Dollar",
          "United States Dollar",
          "Australian Dollar"
        ],
        answer: 1
      },
      {
        question: "The Hunua Ranges is located in...",
        options: [
          "China",
          "Nepal",
          "New Zealand",
          "Mexico"
        ],
        answer: 2
      },
      {
        question: "In which city is the Big Nickel located in Canada?",
        options: [
          "Sudbury, Ontario",
          "Halifax, Nova Scotia ",
          "Victoria, British Columbia",
          "Calgary, Alberta"
        ],
        answer: 0
      }
    ],
    15: [
      {
        question: "Which is the highest waterfall in the world?",
        options: [
          "Niagara Falls",
          "Victoria Falls",
          "Angel Falls",
          "Iguazu Falls"
        ],
        answer: 2
      },
      {
        question: "Which of the following seas is the saltiest water body in the world?",
        options: [
          "Red Sea",
          "Dead Sea",
          "Mediterranean Sea",
          "Caspian Sea"
        ],
        answer: 1
      },
      {
        question: "Which cold ocean current flows along the western coast of South America?",
        options: [
          "Gulf Stream",
          "Humboldt Current",
          "Kuroshio Current",
          "Brazil Current"
        ],
        answer: 1
      },
      {
        question: "Which country is the Taedong River in?",
        options: [
          "North Korea",
          "Japan",
          "China",
          "South Korea"
        ],
        answer: 0
      },
      {
        question: "Where is the fast food chain \"Panda Express\" headquartered?",
        options: [
          "Fresno, California",
          "Rosemead, California",
          "San Diego, California",
          "Sacramento, California"
        ],
        answer: 1
      },
      {
        question: "What is the most populous Muslim-majority nation in 2010?",
        options: [
          "Indonesia",
          "Iran",
          "Saudi Arabia",
          "Sudan"
        ],
        answer: 0
      }
    ],
    16: [
      {
        question: "Which African country has three official capital cities (Pretoria, Bloemfontein, and Cape Town)?",
        options: [
          "South Africa",
          "Nigeria",
          "Kenya",
          "Egypt"
        ],
        answer: 0
      },
      {
        question: "Which of the following islands is a territory of Ecuador and famous for its vast number of endemic species studied by Charles Darwin?",
        options: [
          "Galapagos Islands",
          "Hawaiian Islands",
          "Falkland Islands",
          "Easter Island"
        ],
        answer: 0
      },
      {
        question: "Which is the lowest point on the dry land surface of the Earth, situated more than 400m below sea level?",
        options: [
          "Death Valley",
          "Dead Sea Shore",
          "Lake Assal",
          "Qattara Depression"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Madagascar?",
        options: [
          "Tashkent",
          "Tegucigalpa",
          "Antananarivo",
          "Paramaribo"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Uzbekistan?",
        options: [
          "Georgetown",
          "Belmopan",
          "Djibouti",
          "Tashkent"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Kazakhstan?",
        options: [
          "Astana",
          "Suva",
          "Paramaribo",
          "Valletta"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Liechtenstein?",
        options: [
          "Antananarivo",
          "Vaduz",
          "Tashkent",
          "Monaco"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Monaco?",
        options: [
          "Nicosia",
          "Tashkent",
          "Paramaribo",
          "Monaco"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Fiji?",
        options: [
          "Valletta",
          "Suva",
          "Paramaribo",
          "Tegucigalpa"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Malta?",
        options: [
          "Vaduz",
          "Monaco",
          "Paramaribo",
          "Valletta"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Cyprus?",
        options: [
          "Nicosia",
          "Belmopan",
          "Paramaribo",
          "Astana"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Eritrea?",
        options: [
          "Monaco",
          "Nicosia",
          "Tegucigalpa",
          "Asmara"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Djibouti?",
        options: [
          "Valletta",
          "Belmopan",
          "Djibouti",
          "Astana"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Suriname?",
        options: [
          "Paramaribo",
          "Nicosia",
          "Monaco",
          "Suva"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Guyana?",
        options: [
          "Georgetown",
          "Nicosia",
          "Asmara",
          "Vaduz"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Belize?",
        options: [
          "Georgetown",
          "Belmopan",
          "Tashkent",
          "Paramaribo"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Honduras?",
        options: [
          "Valletta",
          "Paramaribo",
          "Monaco",
          "Tegucigalpa"
        ],
        answer: 3
      },
      {
        question: "What is the world's smallest country by population?",
        options: [
          "Nauru",
          "Vatican City",
          "Marshall Islands",
          "Lichtenstein"
        ],
        answer: 1
      },
      {
        question: "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
        options: [
          "Hudson Bay",
          "Mariana Trench",
          "Grand Banks",
          "Great Barrier Reef"
        ],
        answer: 2
      },
      {
        question: "The Suez Canal is located in which African country?",
        options: [
          "Nigeria",
          "Ghana",
          "Libya",
          "Egypt"
        ],
        answer: 3
      },
      {
        question: "What is the official German name of the Swiss Federal Railways?",
        options: [
          "Schweizerische Bundesbahnen",
          "Bundesbahnen der Schweiz",
          "Schweizerische Staatsbahnen",
          "Schweizerische Nationalbahnen"
        ],
        answer: 0
      },
      {
        question: "Which of these countries is NOT a part of the Asian continent?",
        options: [
          "Russia",
          "Georgia",
          "Suriname",
          "Singapore"
        ],
        answer: 2
      }
    ]
  }
};

// Programmatic Generation of the "Mix" Category at Runtime
// This aggregates questions from all other categories for each level (1-16)
KBC_QUESTIONS.mix = {};
for (let lvl = 1; lvl <= 16; lvl++) {
    KBC_QUESTIONS.mix[lvl] = [];
    const sourceCategories = ["general", "science", "sports", "entertainment", "geography"];
    sourceCategories.forEach(cat => {
        if (KBC_QUESTIONS[cat] && KBC_QUESTIONS[cat][lvl]) {
            KBC_QUESTIONS.mix[lvl].push(...KBC_QUESTIONS[cat][lvl]);
        }
    });
}