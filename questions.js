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
        question: "In the Mahabharata, who was the father of Arjuna?",
        options: [
          "Dhritarashtra",
          "Pandu",
          "Shantanu",
          "Bhishma"
        ],
        answer: 1
      },
      {
        question: "Which demon king did Lord Rama kill in Lanka?",
        options: [
          "Maricha",
          "Indrajit",
          "Kumbhakarna",
          "Ravana"
        ],
        answer: 3
      },
      {
        question: "What was the name of the gold deer that enchanted Sita in the forest?",
        options: [
          "Subahu",
          "Maricha",
          "Dushan",
          "Khar"
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
        question: "Who was the husband of Sita in the Ramayana?",
        options: [
          "Rama",
          "Lakshmana",
          "Shatrughna",
          "Bharata"
        ],
        answer: 0
      },
      {
        question: "Who is the Hindu God of preservation and one of the Trimurti?",
        options: [
          "Vishnu",
          "Indra",
          "Shiva",
          "Brahma"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'India gain independence from British rule' occur?",
        options: [
          "1950",
          "1942",
          "1935",
          "1947"
        ],
        answer: 3
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
          "Sugriva",
          "Hanuman",
          "Angada",
          "Vali"
        ],
        answer: 1
      },
      {
        question: "Who was the mother of the Pandavas, Lord Yudhisthira, Bhima, and Arjuna?",
        options: [
          "Draupadi",
          "Gandhari",
          "Kunti",
          "Madri"
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
        question: "Who is known as the elephant-headed God of wisdom and new beginnings?",
        options: [
          "Kartikeya",
          "Hanuman",
          "Ganesha",
          "Shiva"
        ],
        answer: 2
      },
      {
        question: "Who is the Hindu Goddess of wealth, fortune, and prosperity?",
        options: [
          "Saraswati",
          "Durga",
          "Lakshmi",
          "Parvati"
        ],
        answer: 2
      },
      {
        question: "In which year did the historic event 'World War I begin' occur?",
        options: [
          "1939",
          "1914",
          "1905",
          "1918"
        ],
        answer: 1
      },
      {
        question: "In which year did the historic event 'World War II end' occur?",
        options: [
          "1945",
          "1918",
          "1939",
          "1950"
        ],
        answer: 0
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
        question: "Who wrote the epic poem Ramayana?",
        options: [
          "Valmiki",
          "Kalidasa",
          "Tulsidas",
          "Vyasa"
        ],
        answer: 0
      },
      {
        question: "In which year did the historic event 'The historic ship Titanic sink after hitting an iceberg' occur?",
        options: [
          "1920",
          "1912",
          "1915",
          "1905"
        ],
        answer: 1
      },
      {
        question: "In which year did the historic event 'The first modern Olympic Games take place in Athens' occur?",
        options: [
          "1900",
          "1896",
          "1904",
          "1892"
        ],
        answer: 1
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
        question: "In which year did the historic event 'Neil Armstrong become the first human to walk on the Moon' occur?",
        options: [
          "1959",
          "1969",
          "1965",
          "1972"
        ],
        answer: 1
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
        question: "What was the name of Arjuna's famous bow in the Mahabharata?",
        options: [
          "Sharanga",
          "Gandiva",
          "Vijaya",
          "Pinaka"
        ],
        answer: 1
      },
      {
        question: "Who was the royal guru of the Pandavas and Kauravas?",
        options: [
          "Parashurama",
          "Vashistha",
          "Dronacharya",
          "Kripacharya"
        ],
        answer: 2
      },
      {
        question: "Which warrior was invincible because of his armor (Kavach) and earrings (Kundal) gifted by the Sun God?",
        options: [
          "Bhishma",
          "Karna",
          "Arjuna",
          "Duryodhana"
        ],
        answer: 1
      },
      {
        question: "In which year did the historic event 'The Berlin Wall fall, leading to the reunification of Germany' occur?",
        options: [
          "1991",
          "1979",
          "1985",
          "1989"
        ],
        answer: 3
      },
      {
        question: "In which year did the historic event 'Columbus arrive in the Americas' occur?",
        options: [
          "1492",
          "1392",
          "1502",
          "1498"
        ],
        answer: 0
      },
      {
        question: "In which year did Ghana gain independence?",
        options: [
          "1960",
          "1958",
          "1947",
          "1957"
        ],
        answer: 3
      },
      {
        question: "Which of the following is not true about the life of Tiresias?",
        options: [
          "Revealed to Oedipus that Oedipus had married his own mother",
          "Hera blinded him after he agreed with Zeus in an argument",
          "Sailed with the Argonauts to find the golden fleece",
          "Athena turned him into a woman, and then years later back into a man"
        ],
        answer: 2
      },
      {
        question: "How many colors are there in a rainbow?",
        options: [
          "7",
          "9",
          "10",
          "8"
        ],
        answer: 0
      },
      {
        question: "\"The Singing Cowboy\" Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
        options: [
          "Rudolph the Red-Nosed Reindeer",
          "Here Comes Santa Claus",
          "White Christmas",
          "Frosty the Snowman"
        ],
        answer: 2
      },
      {
        question: "When did the CD begin to appear on the consumer market?",
        options: [
          "1982",
          "1962",
          "1972",
          "1992"
        ],
        answer: 0
      },
      {
        question: "How many moons does the Earth have?",
        options: [
          "0",
          "3",
          "1",
          "2"
        ],
        answer: 2
      },
      {
        question: "What is the atomic mass of Carbon?",
        options: [
          "16",
          "14",
          "10",
          "12"
        ],
        answer: 3
      },
      {
        question: "What does GPS stand for?",
        options: [
          "Global Personal System",
          "Global Positioning System",
          "General Positioning System",
          "General Personal Satellite"
        ],
        answer: 1
      },
      {
        question: "Which brass instrument has the lowest pitch in an orchestra?",
        options: [
          "Trombone",
          "Saxophone",
          "Tuba",
          "Trumpet"
        ],
        answer: 2
      },
      {
        question: "Which element has the highest melting point?",
        options: [
          "Tungsten",
          "Platinum",
          "Osmium",
          "Carbon"
        ],
        answer: 3
      },
      {
        question: "What is the powerhouse of the cell?",
        options: [
          "Nucleus",
          "Redbull",
          "Ribosome",
          "Mitochondria"
        ],
        answer: 3
      },
      {
        question: "What technology is named after a tenth-century ruler of Denmark and Norway?",
        options: [
          "Bluetooth",
          "Wi-Fi",
          "GPS",
          "Internet"
        ],
        answer: 0
      },
      {
        question: "In computing, what does LAN stand for?",
        options: [
          "Land Address Navigation",
          "Light Access Node",
          "Long Antenna Node",
          "Local Area Network"
        ],
        answer: 3
      },
      {
        question: "The Ottoman Empire was dissolved after their loss in which war?",
        options: [
          "World War I",
          "Second Balkan War",
          "Crimean War",
          "Serbian Revolution"
        ],
        answer: 0
      },
      {
        question: "What does SSD stand for in the context of computer storage?",
        options: [
          "Secure System Disk",
          "Software Storage Device",
          " Solid State Drive",
          "Super Speed Data"
        ],
        answer: 2
      },
      {
        question: "What is the French word for \"hat\"?",
        options: [
          "Bonnet",
          " Casque",
          "Chapeau",
          " Écharpe"
        ],
        answer: 2
      },
      {
        question: "Who is the true moon princess in Sailor Moon?",
        options: [
          "Sailor Moon",
          "Sailor Mars",
          "Sailor Venus",
          "Sailor Jupiter"
        ],
        answer: 0
      },
      {
        question: "Who is Batman?",
        options: [
          "Bruce Wayne",
          "Barry Allen",
          "Clark Kent",
          "Tony Stark"
        ],
        answer: 0
      },
      {
        question: "This mobile OS held the largest market share in 2012.",
        options: [
          "BlackBerry",
          "Android",
          "Symbian",
          "iOS"
        ],
        answer: 3
      },
      {
        question: "In 1939, Britain and France declared war on Germany after it invaded which country?",
        options: [
          "Czechoslovakia",
          "Austria",
          "Poland",
          "Hungary"
        ],
        answer: 2
      },
      {
        question: "What is Cuba's official, most widely spoken language?",
        options: [
          "Italian",
          "Spanish",
          "French",
          "Portuguese"
        ],
        answer: 1
      },
      {
        question: "How many heads does Cerberus have?",
        options: [
          "3",
          "5",
          "2",
          "1"
        ],
        answer: 0
      },
      {
        question: "What is the name of the extra pedal on a manual or standard transmission car?",
        options: [
          "Shifter",
          "Clutch",
          "Parking Brake",
          "Booster"
        ],
        answer: 1
      },
      {
        question: "Who played General Aladeen in The Dictator?",
        options: [
          "Sacha Baron Cohen",
          "Leonardo Dicaprio",
          "Johnny Depp",
          "James Franco"
        ],
        answer: 0
      },
      {
        question: "Who is the creator of the comic series \"The Walking Dead\"?",
        options: [
          "Stan Lee",
          "Robert Kirkman",
          "Robert Crumb",
          "Malcolm Wheeler-Nicholson"
        ],
        answer: 1
      },
      {
        question: "What organ of the body produces bile?",
        options: [
          "Gallbladder",
          "Stomach",
          "Pancreas",
          "Liver"
        ],
        answer: 3
      },
      {
        question: "What is the Zodiac symbol for Gemini?",
        options: [
          "Fish",
          "Maiden",
          "Twins",
          "Scales"
        ],
        answer: 2
      },
      {
        question: "Which of the following blood vessels carries deoxygenated blood?",
        options: [
          "Pulmonary Vein",
          "Coronary Artery",
          "Pulmonary Artery",
          "Aorta"
        ],
        answer: 2
      },
      {
        question: "Who wrote the musical \"Hamilton\"?",
        options: [
          "Tom Kitt",
          "Lin-Manuel Miranda",
          "Andrew Lloyd Webber",
          "Nell Benjamin"
        ],
        answer: 1
      },
      {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        options: [
          "Piano",
          "Drums",
          "Bass",
          "Guitar"
        ],
        answer: 1
      },
      {
        question: "Which music publication is often abbreviated to NME?",
        options: [
          "North Manchester Express",
          "Next Musical Enterprise",
          "New Metro Entertainment",
          "New Musical Express"
        ],
        answer: 3
      },
      {
        question: "What is the first book of the Old Testament?",
        options: [
          "Leviticus",
          "Exodus",
          "Numbers",
          "Genesis"
        ],
        answer: 3
      },
      {
        question: "Which famous world leader is famed for the saying, \"Let them eat cake\", yet is rumored that he/she never said it at all?",
        options: [
          "Elizabeth I",
          "Czar Nicholas II",
          "Henry VIII",
          "Marie Antoinette"
        ],
        answer: 3
      },
      {
        question: "What is widely considered to be the oldest civilization known to mankind?",
        options: [
          "Babylon",
          "Sumeria",
          "Phoenicia",
          "Assyria"
        ],
        answer: 1
      },
      {
        question: "The element involved in making human blood red is which of the following?",
        options: [
          "Copper",
          "Iron",
          "Iridium",
          "Cobalt"
        ],
        answer: 1
      },
      {
        question: "What geometric shape is generally used for stop signs?",
        options: [
          "Octagon",
          "Triangle",
          "Hexagon",
          "Circle"
        ],
        answer: 0
      },
      {
        question: "What is the fastest  land animal?",
        options: [
          "Cheetah",
          "Pronghorn Antelope",
          "Lion",
          "Thomson’s Gazelle"
        ],
        answer: 0
      },
      {
        question: "What is the largest animal currently on Earth?",
        options: [
          "Orca",
          "Giraffe",
          "Colossal Squid",
          "Blue Whale"
        ],
        answer: 3
      },
      {
        question: "Who rode on horseback to warn the Minutemen that the British were coming during the U.S. Revolutionary War?",
        options: [
          "Nathan Hale",
          "Henry Longfellow",
          "Thomas Paine",
          "Paul Revere"
        ],
        answer: 3
      },
      {
        question: "What does the computer software acronym JVM stand for?",
        options: [
          "Just Virtual Machine",
          "Java Vendor Machine",
          "Java Visual Machine",
          "Java Virtual Machine"
        ],
        answer: 3
      },
      {
        question: "The drug cartel run by Pablo Escobar originated in which South American city?",
        options: [
          "Medellín",
          "Bogotá",
          "Cali",
          "Quito"
        ],
        answer: 0
      },
      {
        question: "In aerodynamics, which force pushes an object upwards?",
        options: [
          "Weight",
          "Lift",
          "Thrust",
          "Drag"
        ],
        answer: 1
      },
      {
        question: "What does a funambulist walk on?",
        options: [
          "A Tight Rope",
          "Balls",
          "Broken Glass",
          "The Moon"
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
        question: "Who was the husband of Draupadi in her previous birth, according to some texts, or who won her in the swayamvar?",
        options: [
          "Karna",
          "Yudhisthira",
          "Bhima",
          "Arjuna"
        ],
        answer: 3
      },
      {
        question: "Who was the charioteer of Arjuna during the Kurukshetra war?",
        options: [
          "Karna",
          "Sanjaya",
          "Lord Krishna",
          "Shalya"
        ],
        answer: 2
      },
      {
        question: "In which year did the historic event 'The French Revolution begin' occur?",
        options: [
          "1789",
          "1804",
          "1799",
          "1776"
        ],
        answer: 0
      },
      {
        question: "Which of these characters live in a pineapple under the sea in the cartoon \"SpongeBob SquarePants\".",
        options: [
          "Patrick Star",
          "Mr. Krabs",
          "SpongeBob SquarePants ",
          "Squidward Tentacles"
        ],
        answer: 2
      },
      {
        question: "What year did the Titanic sink?",
        options: [
          "1912",
          "1941",
          "1917",
          "1930"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT considered to be a colour that makes up the rainbow?",
        options: [
          "Orange",
          "Violet",
          "Pink",
          "Blue"
        ],
        answer: 2
      },
      {
        question: "What is Cynophobia the fear of?",
        options: [
          "Birds",
          "Dogs",
          "Germs",
          "Flying"
        ],
        answer: 1
      },
      {
        question: "Who wrote the play 'Angels in America'?",
        options: [
          "Anthony Neilson",
          "Tom Stoppard",
          "Tony Kusher",
          "Matthew Lopez"
        ],
        answer: 2
      },
      {
        question: "How many strings are there on a cello?",
        options: [
          "6",
          "5",
          "4",
          "8"
        ],
        answer: 2
      },
      {
        question: "Which sign of the zodiac comes between Virgo and Scorpio?",
        options: [
          "Libra",
          "Capricorn",
          "Taurus",
          "Gemini"
        ],
        answer: 0
      },
      {
        question: "Which of the following bones is not in the leg?",
        options: [
          "Patella",
          "Radius",
          "Tibia",
          "Fibula "
        ],
        answer: 1
      },
      {
        question: "What is the name of the poker hand containing three of a kind and a pair?",
        options: [
          "Flush",
          "Straight",
          "High card",
          "Full House"
        ],
        answer: 3
      },
      {
        question: "Who succeded Josef Stalin as the leader of the Soviet Union?",
        options: [
          "Vyacheslav Molotov",
          "Nikita Krushchev",
          "Lavrentiy Beria",
          "Georgy Malenkov"
        ],
        answer: 1
      },
      {
        question: "What weakpoint of Achilles was expoited by the Trojan prince, Paris?",
        options: [
          "Back",
          "Calf",
          "Neck",
          "Heel"
        ],
        answer: 3
      },
      {
        question: "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
        options: [
          "Cylinder",
          "Pyramid",
          "Sphere",
          "Cube"
        ],
        answer: 3
      },
      {
        question: "Which of the following card games revolves around numbers and basic math?",
        options: [
          "Uno",
          "Go Fish",
          "Twister",
          "Munchkin"
        ],
        answer: 0
      },
      {
        question: "What was the first sport to have been played on the moon?",
        options: [
          "Soccer",
          "Tennis",
          "Football",
          "Golf"
        ],
        answer: 3
      },
      {
        question: "The tale of Robin Hood originates from which country?",
        options: [
          "England",
          "France",
          "Scotland",
          "Portugal"
        ],
        answer: 0
      },
      {
        question: "The word \"dozen\" usually refers to a group of how many objects?",
        options: [
          "6",
          "20",
          "12",
          "10"
        ],
        answer: 2
      },
      {
        question: "What is the perimeter of a circle more commonly known as?",
        options: [
          "Arc",
          "Circumference",
          "Radius",
          "Diameter"
        ],
        answer: 1
      },
      {
        question: "What is the full meaning of RAM?",
        options: [
          "Random Assist Memory",
          "Rand Assist Mandate",
          "Ram",
          "Random Access Memory"
        ],
        answer: 3
      },
      {
        question: "The RMS Titanic sunk during her maiden voyage from Southampton, England to which American city?",
        options: [
          "Philadelphia",
          "New York City",
          "Boston ",
          "Washington"
        ],
        answer: 1
      },
      {
        question: "How many manned moon landings have there been?",
        options: [
          "7",
          "3",
          "1",
          "6"
        ],
        answer: 3
      },
      {
        question: "What is the hottest planet in the Solar System?",
        options: [
          "Mercury",
          "Mars",
          "Venus",
          "Jupiter"
        ],
        answer: 2
      },
      {
        question: "What does DNA stand for?",
        options: [
          "Deoxyribogenetic Acid",
          "Deoxyribogenetic Atoms",
          "Detoxic Acid",
          "Deoxyribonucleic Acid"
        ],
        answer: 3
      },
      {
        question: "In \"A Certain Scientific Railgun\", how many \"sisters\" did Accelerator have to kill to achieve the rumored level 6?",
        options: [
          "20,000",
          "10,000",
          "5,000",
          "128"
        ],
        answer: 0
      },
      {
        question: "Which modern country is known as \"The Graveyard of Empires\"?",
        options: [
          "China",
          "Iraq",
          "Afghanistan",
          "Russia"
        ],
        answer: 2
      },
      {
        question: "What mytological creatures have women's faces and vultures' bodies?",
        options: [
          "Lilith",
          "Harpies",
          "Nymph",
          "Mermaids"
        ],
        answer: 1
      },
      {
        question: "This element, when overcome with extreme heat and pressure, creates diamonds.",
        options: [
          "Oxygen",
          "Hydrogen",
          "Carbon",
          "Nitrogen"
        ],
        answer: 2
      },
      {
        question: "Which Disney character sings the song \"A Dream is a Wish Your Heart Makes\"?",
        options: [
          "Cinderella",
          "Pocahontas",
          "Belle",
          "Snow White"
        ],
        answer: 0
      },
      {
        question: "Which of these countries remained neutral during World War II?",
        options: [
          "Italy",
          "France",
          "Switzerland",
          "United Kingdom"
        ],
        answer: 2
      },
      {
        question: "The Rush song \"YYZ\" derives its name from the IATA aiport identification code for which city?",
        options: [
          "Vancouver",
          "Ottawa",
          "Toronto",
          "Calgary"
        ],
        answer: 2
      },
      {
        question: "According to a song by Belinda Carlisle, Heaven is a place on what?",
        options: [
          "Venus",
          "Uranus",
          "Earth",
          "Mars"
        ],
        answer: 2
      },
      {
        question: "In \"Homestuck\" what is Dave Strider's guardian?",
        options: [
          "Doc Scratch",
          "Bro",
          "Halley",
          "Becquerel"
        ],
        answer: 1
      },
      {
        question: "In The Simpsons, which war did Seymour Skinner serve in the USA Army as a Green Beret?",
        options: [
          "Vietnam War",
          "World War 2",
          "World War 1",
          "Cold War"
        ],
        answer: 0
      },
      {
        question: "The main six year old protagonist in Calvin and Hobbes is named after what theologian?",
        options: [
          "Phillip Calvin McGraw",
          "John Calvin",
          "Calvin Coolidge",
          "Calvin Klein"
        ],
        answer: 1
      },
      {
        question: "What is the name of Funny Valentine's stand in Jojo's Bizarre Adventure Part 7, Steel Ball Run?",
        options: [
          "Dirty Deeds Done Dirt Cheap",
          "Civil War",
          "Filthy Acts Done For A Reasonable Price",
          "God Bless The USA"
        ],
        answer: 0
      },
      {
        question: "Which SQL keyword is used to fetch data from a database?",
        options: [
          "VALUES",
          "EXEC",
          "SELECT",
          "INDEX"
        ],
        answer: 2
      },
      {
        question: "In web design, what does CSS stand for?",
        options: [
          "Computer Style Sheet",
          "Cascading Style Sheet",
          "Counter Strike: Source",
          "Corrective Style Sheet"
        ],
        answer: 1
      },
      {
        question: "Which Apollo mission was the first one to land on the Moon?",
        options: [
          "Apollo 9",
          "Apollo 10",
          "Apollo 11",
          "Apollo 13"
        ],
        answer: 2
      },
      {
        question: "What was the name of the sea witch in the 1989 Disney film \"The Little Mermaid\"?",
        options: [
          "Lady Tremaine",
          "Maleficent",
          "Ursula",
          "Madam Mim"
        ],
        answer: 2
      },
      {
        question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
        options: [
          "Transformers",
          "Rubik’s Cube",
          "Care Bears",
          "Cabbage Patch Kids"
        ],
        answer: 3
      },
      {
        question: "Which is the longest bone in the human body?",
        options: [
          "Ulna",
          "Femur",
          "Scapula",
          "Fibula"
        ],
        answer: 1
      },
      {
        question: "What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named \"Stitch\"?",
        options: [
          "Lilo",
          "Lolo",
          "Lucy",
          "Lulu"
        ],
        answer: 0
      },
      {
        question: "When was the DVD invented?",
        options: [
          "1995",
          "1980",
          "2000",
          "1990"
        ],
        answer: 0
      },
      {
        question: "What is the profession of Elon Musk's mom, Maye Musk?",
        options: [
          "Musician",
          "Professor",
          "Biologist",
          "Model"
        ],
        answer: 3
      },
      {
        question: "The four strings on a violin are the G string, D string, A string, and...",
        options: [
          "F string",
          "C string",
          "B string",
          "E string"
        ],
        answer: 3
      },
      {
        question: "Who discovered the Law of Gravity?",
        options: [
          "Albert Einstein",
          "Galileo Galilei",
          "Charles Darwin",
          "Sir Isaac Newton"
        ],
        answer: 3
      },
      {
        question: "What is an example of a bacterial pathogen?",
        options: [
          "Ringworm",
          "Cholera",
          "Measles ",
          "AIDS"
        ],
        answer: 1
      },
      {
        question: "Who is depicted on the US hundred dollar bill?",
        options: [
          "Benjamin Franklin",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "George Washington"
        ],
        answer: 0
      },
      {
        question: "The likeness of which president is featured on the rare $2 bill of USA currency?",
        options: [
          "Martin Van Buren",
          "Ulysses Grant",
          "Thomas Jefferson",
          "John Quincy Adams"
        ],
        answer: 2
      },
      {
        question: "Which of these are NOT a Men at Work song?",
        options: [
          "Be Good Johnny",
          "Who Can It Be Now?",
          "Dr. Heckyll and Mr. Jive",
          "Basket Case"
        ],
        answer: 3
      },
      {
        question: "What is the Spanish word for \"donkey\"?",
        options: [
          "Perro",
          "Toro",
          "Caballo",
          "Burro"
        ],
        answer: 3
      },
      {
        question: "Which language is most widely spoken in Switzerland?",
        options: [
          "Italian",
          "Swiss",
          "German",
          "French"
        ],
        answer: 2
      },
      {
        question: "Who created the Cartoon Network series \"Regular Show\"?",
        options: [
          "Pendleton Ward",
          "Ben Bocquelet",
          "J. G. Quintel",
          "Rebecca Sugar"
        ],
        answer: 2
      },
      {
        question: "Which of these holidays is NOT usually celebrated in the month of December?",
        options: [
          "Kwanzaa",
          "Thanksgiving",
          "Hanukkah",
          "Christmas"
        ],
        answer: 1
      },
      {
        question: "How tall is the Burj Khalifa?",
        options: [
          "2,722 ft",
          "3,024 ft",
          "2,717 ft",
          "2,546 ft"
        ],
        answer: 0
      },
      {
        question: "What colour is the female blackbird?",
        options: [
          "Black",
          "Brown",
          "Yellow",
          "White"
        ],
        answer: 1
      },
      {
        question: "Who was the 1st President of Mexico?",
        options: [
          "Miguel Hidalgo Y Costilla",
          "Benito Juárez",
          "Vicente Guerrero",
          "Guadalupe Victoria"
        ],
        answer: 3
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
        question: "Which city was the capital of the Kaurava kingdom?",
        options: [
          "Mathura",
          "Dwarka",
          "Hastinapur",
          "Indraprastha"
        ],
        answer: 2
      },
      {
        question: "What was the original name of Bhishma before he took the vow of celibacy?",
        options: [
          "Vichitravirya",
          "Chitrangada",
          "Devavrata",
          "Shantanu"
        ],
        answer: 2
      },
      {
        question: "What was the name of Sqiudward's bad painting in the Spongebob episode \"Artist Unknown?\"",
        options: [
          "Rippy Bits",
          "Tilted Perspectives",
          "Squidward en Repose",
          "Bold and Brash"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit for resistance?",
        options: [
          "Ohms",
          "Volts",
          "Ampheres",
          "Siemens"
        ],
        answer: 0
      },
      {
        question: "The Quran is the holy book of which Abrahamic religion?",
        options: [
          "Judaism",
          "Rastafarianism",
          "Christianity",
          "Islam"
        ],
        answer: 3
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
        question: "Which is the national animal of India?",
        options: [
          "Camel",
          "Tiger",
          "Horse",
          "Lion"
        ],
        answer: 1
      },
      {
        question: "What battle was the longest in World War I, lasting approximately 303 days?",
        options: [
          "Battle of Stalingrad",
          "Battle of Amiens",
          "Battle of Verdun ",
          "Battle of Passchendaele"
        ],
        answer: 2
      },
      {
        question: "In \"Future Diary\", what is the name of Yuno Gasai's Phone Diary?",
        options: [
          "Justice Diary ",
          "Murder Diary",
          "Escape Diary ",
          "Yukiteru Diary"
        ],
        answer: 3
      },
      {
        question: "Who was given the title \"Full Metal\" in the anime series \"Full Metal Alchemist\"?",
        options: [
          "Izumi Curtis",
          "Alphonse Elric",
          "Van Hohenheim",
          "Edward Elric"
        ],
        answer: 3
      },
      {
        question: "The idea of Socialism was articulated and advanced by whom?",
        options: [
          "Vladimir Putin",
          "Vladimir Lenin",
          "Karl Marx",
          "Joseph Stalin"
        ],
        answer: 2
      },
      {
        question: "The American company \"Campbell's\" is most well known for making what food product?",
        options: [
          "Canned soups",
          "Chocolate",
          "Soft drinks",
          "Sausages"
        ],
        answer: 0
      },
      {
        question: "What is the hottest planet in the solar system",
        options: [
          "Mercury ",
          "Mars",
          "Venus",
          "Jupiter"
        ],
        answer: 2
      },
      {
        question: "Which of the following is not an Ivy League University?",
        options: [
          "University of Pennsylvania",
          "Stanford",
          "Princeton",
          "Harvard"
        ],
        answer: 1
      },
      {
        question: "What was the first ever London Underground line to be built?",
        options: [
          "Metropolitan Line",
          "Circle Line",
          "Bakerloo Line",
          "Victoria Line"
        ],
        answer: 0
      },
      {
        question: "What does GHz stand for?",
        options: [
          "Gigahatz",
          "Gigahotz",
          "Gigahertz",
          "Gigahetz"
        ],
        answer: 2
      },
      {
        question: "When was the Playstation 3 released?",
        options: [
          "November 11, 2006",
          "July 16, 2006",
          "December 25, 2007",
          "January 8, 2007"
        ],
        answer: 0
      },
      {
        question: "Which of these bones is hardest to break?",
        options: [
          "Femur",
          "Tibia",
          "Humerus",
          "Cranium"
        ],
        answer: 0
      },
      {
        question: "On a standard American QWERTY keyboard, what symbol will you enter if you hold the shift key and press 1?",
        options: [
          "Exclamation Mark",
          "Percent Sign",
          "Dollar Sign",
          "Asterisk"
        ],
        answer: 0
      },
      {
        question: "In the anime \"My Hero Academia\", which character is shown with the ability to manipulate gravity?",
        options: [
          "Asui ",
          "Uraraka",
          "Deku",
          "Bakugo"
        ],
        answer: 1
      },
      {
        question: "Who is the youngest person to receive a Nobel Prize?",
        options: [
          "Werner Heisenberg",
          "Malala Yousafzai",
          "Yasser Arafat",
          "Lawrence Bragg"
        ],
        answer: 1
      },
      {
        question: "Which genre of music is John Coltrane primarily associated with?",
        options: [
          "Death Metal",
          "Rock and Roll",
          "Folk",
          "Jazz"
        ],
        answer: 3
      },
      {
        question: "What is the name of the antagonist group in Danganronpa Another Episode: Ultra Despair Girls?",
        options: [
          "The Ultimate Despair",
          "Warriors of Despair",
          "The Monokubs",
          "Warriors of Hope"
        ],
        answer: 3
      },
      {
        question: "Who is the author of Jurassic Park?",
        options: [
          "Michael Crichton",
          "Irvine Welsh",
          "Peter Benchley",
          "Chuck Paluhniuk"
        ],
        answer: 0
      },
      {
        question: "How many syllables make up a haiku?",
        options: [
          "21",
          "17",
          "15",
          "10"
        ],
        answer: 1
      },
      {
        question: "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
        options: [
          "Clay Road",
          "Salt Road",
          "Spice Road",
          "Silk Road"
        ],
        answer: 3
      },
      {
        question: "In networking, what does OSPF stand for?",
        options: [
          "Open Shortest Path First",
          "Open Signal Path Finder",
          "Order State Part First",
          "Order Sense Ping Find"
        ],
        answer: 0
      },
      {
        question: "Which of the following did not feature in the cartoon 'Wacky Races'?",
        options: [
          "The Dragon Wagon",
          "The Bouldermobile",
          "The Compact Pussycat",
          "The Crimson Haybailer"
        ],
        answer: 0
      },
      {
        question: "King Henry VIII was the second monarch of which European royal house?",
        options: [
          "Stuart",
          "Tudor",
          "York",
          "Lancaster"
        ],
        answer: 1
      },
      {
        question: "Who released the song \"Photograph\" in 2005?",
        options: [
          "Nickelback",
          "Green Day",
          "Fall Out Boy",
          "Coldplay"
        ],
        answer: 0
      },
      {
        question: "What does the letter 'S' stand for in 'NASA'?",
        options: [
          "Space",
          "Star",
          "Science",
          "Society"
        ],
        answer: 0
      },
      {
        question: "How many Sister Ships were related to the TItanic?",
        options: [
          "2",
          "3",
          "1",
          "4"
        ],
        answer: 0
      },
      {
        question: "Which of these songs by Skrillex features Fatman Scoop as a side artist?",
        options: [
          "All is Fair in Love and Brostep",
          "Scary Monsters and Nice Sprites",
          "Recess",
          "Rock N Roll (Will Take You to the Mountain)"
        ],
        answer: 2
      },
      {
        question: "Human cells typically have how many copies of each gene?",
        options: [
          "2",
          "4",
          "3",
          "1"
        ],
        answer: 0
      },
      {
        question: "Who is the chemical element Curium named after?",
        options: [
          "Stephen Curry",
          "The Curiosity Rover",
          "Curious George",
          "Marie & Pierre Curie"
        ],
        answer: 3
      },
      {
        question: "What is the thin, outermost layer of the Earth?",
        options: [
          "Outer Core",
          "Exosphere",
          "Mantle",
          "Crust"
        ],
        answer: 3
      },
      {
        question: "Which of these artists has Lil A collaborated with?",
        options: [
          "Lil Pump",
          "Lil Fortnite",
          "6ix9ine",
          "Boonk Gang"
        ],
        answer: 1
      },
      {
        question: "Which virtual assistant is developed by Amazon?",
        options: [
          "Siri",
          "Alexa",
          "Cortana",
          "Google Assistant"
        ],
        answer: 1
      },
      {
        question: "The tuba is a part of which musical family?",
        options: [
          "Percussion",
          "Woodwind",
          "Strings",
          "Brass"
        ],
        answer: 3
      },
      {
        question: "How many teeth does an adult rabbit have?",
        options: [
          "26",
          "28",
          "30",
          "24"
        ],
        answer: 1
      },
      {
        question: "Foie gras is a French delicacy typically made from what part of a duck or goose?",
        options: [
          "Stomach",
          "Liver",
          "Heart",
          "Intestines"
        ],
        answer: 1
      },
      {
        question: "Who was the first prime minister of Canada?",
        options: [
          "Robert Borden",
          "Alexander Mackenzie",
          "John Macdonald",
          "John Abbott"
        ],
        answer: 2
      },
      {
        question: "In the show \"Foster's Home For Imaginary Friends\", which character had an obsession with basketball?",
        options: [
          "Wilt",
          "Coco",
          "Cheese",
          "Mac"
        ],
        answer: 0
      },
      {
        question: "Which modern day country is the region that was known as Phrygia in ancient times?",
        options: [
          "Turkey",
          "Syria",
          "Greece",
          "Egypt"
        ],
        answer: 0
      },
      {
        question: "Who was featured in the song \"Words\" by Feint?",
        options: [
          "Anna Yvette ",
          "Laura Brehm",
          "Veela",
          "Danyka Nadeau"
        ],
        answer: 1
      },
      {
        question: "What organelle aids in synthesis of DNA in cells?",
        options: [
          "Nuclei",
          "Lysosomes",
          "Ribosomes",
          "Mitochondria"
        ],
        answer: 2
      },
      {
        question: "What is the name of the stuffed lion in Bleach?",
        options: [
          "Urdiu",
          "Kon",
          "Chad",
          "Jo"
        ],
        answer: 1
      },
      {
        question: "What is the commonly used keyboard shortcut for the 'Copy' function on Windows OS?",
        options: [
          "Alt + X",
          "Alt + C",
          "Ctrl + X",
          "Ctrl + C"
        ],
        answer: 3
      },
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processor Unit",
          "Computer Personal Unit",
          "Central Processing Unit",
          "Central Process Unit"
        ],
        answer: 2
      },
      {
        question: "The programming language 'Swift' was created to replace what other programming language?",
        options: [
          "Ruby",
          "C#",
          "Objective-C",
          "C++"
        ],
        answer: 2
      },
      {
        question: "What do sailors call the right side of a boat?",
        options: [
          "Starboard",
          "Bow",
          "Stern",
          "Port"
        ],
        answer: 0
      },
      {
        question: "Which of the following songs was not originally released by Sir Elton John?",
        options: [
          "Candle in the Wind",
          "I Don't Wanna Go On With You Like That",
          "You'll Be In My Heart",
          "Crocodile Rock"
        ],
        answer: 2
      },
      {
        question: "What is the name of the city that The Flintstones is based in?",
        options: [
          "Bedrock",
          "Boulder City",
          "Rockhampton",
          "Stoneville"
        ],
        answer: 0
      },
      {
        question: "In the anime Black Butler, who is betrothed to be married to Ciel Phantomhive?",
        options: [
          "Angelina Dalles",
          "Elizabeth Midford",
          "Alexis Leon Midford",
          "Rachel Phantomhive"
        ],
        answer: 1
      },
      {
        question: "In which year did the Invasion of Kuwait by Iraq occur?",
        options: [
          "1986",
          "1992",
          "1988",
          "1990"
        ],
        answer: 3
      },
      {
        question: "What year did World War II end?",
        options: [
          "1947",
          "1950",
          "1945",
          "1943"
        ],
        answer: 2
      },
      {
        question: "What alcoholic drink is made from molasses?",
        options: [
          "Gin",
          "Rum",
          "Whisky",
          "Vodka"
        ],
        answer: 1
      },
      {
        question: "Whose signature guitar technique is called the \"windmill\"?",
        options: [
          "Pete Townshend",
          "Jimi Hendrix",
          "Jimmy Page",
          "Eddie Van Halen"
        ],
        answer: 0
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
        question: "What do sailors call the left side of a boat?",
        options: [
          "Starboard",
          "Bow",
          "Stern",
          "Port"
        ],
        answer: 3
      },
      {
        question: "What is the age of Ash Ketchum in Pokemon when he starts his journey?",
        options: [
          "10",
          "11",
          "9",
          "12"
        ],
        answer: 0
      },
      {
        question: "What is the name of the creatures that the protagonists of the webshow RWBY fight against?",
        options: [
          "Heartless",
          "Reavers",
          "Grimm",
          "Dark Ones"
        ],
        answer: 2
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
        question: "Who was the father of Shakuni, the king of Gandhara?",
        options: [
          "Dhritarashtra",
          "Pandu",
          "Subala",
          "Gandhar"
        ],
        answer: 2
      },
      {
        question: "Which Pandava was known for his mastery of sword fighting?",
        options: [
          "Bhima",
          "Nakula",
          "Sahadeva",
          "Yudhisthira"
        ],
        answer: 1
      },
      {
        question: "Korean girl group TWICE is under which Entertainment Label?",
        options: [
          "MBK",
          "JYP",
          "Stone Music",
          "YG"
        ],
        answer: 1
      },
      {
        question: "In the anime Assassination Classroom what is the class that Korosensei teaches?",
        options: [
          "Class 3-D",
          "Class 3-A",
          "Class 3-B",
          "Class 3-E"
        ],
        answer: 3
      },
      {
        question: "Cryoshell, known for \"Creeping in My Soul\" did the advertising music for what Lego Theme?",
        options: [
          "Star Wars",
          "Bionicle",
          "Hero Factory",
          "Ben 10 Alien Force"
        ],
        answer: 1
      },
      {
        question: "In which year did the First World War begin?",
        options: [
          "1914",
          "1917",
          "1939",
          "1930"
        ],
        answer: 0
      },
      {
        question: "What part of the brain takes its name from the Greek for seahorse?",
        options: [
          "Hippocampus",
          "Thalamus",
          "Amygdala",
          "Cerebellum"
        ],
        answer: 0
      },
      {
        question: "In \"A Certain Magical Index,\" what is Accelerator able to control?",
        options: [
          "Velocity",
          "Wormholes",
          "Quantums",
          "Vectors"
        ],
        answer: 3
      },
      {
        question: "Which mountain has the highest peak in Australia?",
        options: [
          "Mount Zeil, Northern Territory",
          "Mount Kosciuszko, New South Wales",
          "Mount Bartle Frere, Queensland",
          "Mount Ossa, Tasmania"
        ],
        answer: 1
      },
      {
        question: "Nickelodeon is owned by what parent company?",
        options: [
          "FOX",
          "ABC",
          "Viacom",
          "CBS"
        ],
        answer: 2
      },
      {
        question: "What disease crippled President Franklin D. Roosevelt and led him to help the nation find a cure?",
        options: [
          "Cancer",
          "Meningitis",
          "Polio",
          "HIV"
        ],
        answer: 2
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
        question: "In what year was Taylor Swift born?",
        options: [
          "1988",
          "1990",
          "1989",
          "1987"
        ],
        answer: 2
      },
      {
        question: "What is the Portuguese word for \"Brazil\"?",
        options: [
          "Brasíl",
          "Brazil",
          "Brasil",
          "Brasilia"
        ],
        answer: 2
      },
      {
        question: "Which studio animated Soul Eater?",
        options: [
          "Kyoto Animation",
          "Bones",
          "Production I.G",
          "xebec"
        ],
        answer: 1
      },
      {
        question: "What year did the popular Vocaloid: Hatsune Miku come out?",
        options: [
          "2010",
          "2007",
          "2008",
          "2000"
        ],
        answer: 1
      },
      {
        question: "What is the romanized Japanese word for \"university\"?",
        options: [
          "Daigaku",
          "Jimusho",
          "Shokudou",
          "Toshokan"
        ],
        answer: 0
      },
      {
        question: "Who was the first explorer to sail to North America?",
        options: [
          "Christopher Columbus",
          "Leif Erikson",
          "Amerigo Vespucci",
          "Ferdinand Magellan"
        ],
        answer: 1
      },
      {
        question: "What colour hair does the main character of the Yu-Gi-Oh! original anime series have?",
        options: [
          "Red, black and yellow",
          "Red, yellow and green",
          "Red, purple and blue",
          "Red, black and green"
        ],
        answer: 0
      },
      {
        question: "Generally, which component of a computer draws the most power?",
        options: [
          "Video Card",
          "Processor",
          "Power Supply",
          "Hard Drive"
        ],
        answer: 0
      },
      {
        question: "What is the common term for bovine spongiform encephalopathy (BSE)?",
        options: [
          "Weil's disease",
          "Mad Cow disease",
          "Milk fever",
          "Foot-and-mouth disease"
        ],
        answer: 1
      },
      {
        question: "In what year was the Oculus Rift revealed to the public through a Kickstarter campaign?",
        options: [
          "2010",
          "2012",
          "2011",
          "2013"
        ],
        answer: 1
      },
      {
        question: "When Christopher Columbus sailed to America, what was the first region he arrived in?",
        options: [
          "The Bahamas Archipelago",
          "Nicaragua",
          "Florida",
          "Isthmus of Panama"
        ],
        answer: 0
      },
      {
        question: "When did the last episode of \"Futurama\" air before returning in 2023?",
        options: [
          "March 28, 1999",
          "November 4, 2021",
          "September 4, 2013",
          "December 25, 2010"
        ],
        answer: 2
      },
      {
        question: "Prior to going solo in 1982, Lionel Richie was a member of which Motown group?",
        options: [
          "The Temptations",
          "The Supremes",
          "The Commodores",
          "The Miracles"
        ],
        answer: 2
      },
      {
        question: "Who was a military strategist in the Eastern Zhou period?",
        options: [
          "Vlad The Impaler",
          "Lu Bu",
          "Sun Tzu",
          "Genghis Khan"
        ],
        answer: 2
      },
      {
        question: "What year was Apple Inc. founded?",
        options: [
          "1978",
          "1976",
          "1974",
          "1980"
        ],
        answer: 1
      },
      {
        question: "In \"Highschool DxD\", Koneko Toujou is from what race?",
        options: [
          "Human",
          "Kappa",
          "Kitsune",
          "Nekomata"
        ],
        answer: 3
      },
      {
        question: "Which of the following is not in the Indo-European language family?",
        options: [
          "Hindi",
          "English",
          "Finnish",
          "Russian"
        ],
        answer: 2
      },
      {
        question: "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
        options: [
          "24",
          "16",
          "8",
          "32"
        ],
        answer: 0
      },
      {
        question: "Joseph Smith was the founder of what religion?",
        options: [
          "Hinduism",
          "Christianity",
          "Buddhism",
          "Mormonism"
        ],
        answer: 3
      },
      {
        question: "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
        options: [
          "Elamites",
          "Hittites",
          "Babylonians",
          "Assyrians"
        ],
        answer: 3
      },
      {
        question: "Laserjet and inkjet printers are both examples of what type of printer?",
        options: [
          "Dot matrix printer",
          "Non-impact printer",
          "Daisywheel printer",
          "Impact printer"
        ],
        answer: 1
      },
      {
        question: "Madonna's song \"Hung Up\" includes a piece from which popular 70s song?",
        options: [
          "Gimmie! Gimmie! Gimme! (A Man After Midnight)",
          "Night Fever",
          "The Chain",
          "Staying Alive"
        ],
        answer: 0
      },
      {
        question: "Who voices \"Shou Suzuki\" in the English dub of \"Mob Psycho 100\"?",
        options: [
          "Casey Mongillo",
          "David Naughton",
          "Ben Diskin",
          "Chris Niosi"
        ],
        answer: 0
      },
      {
        question: "In what prison was Adolf Hitler held in 1924?",
        options: [
          "Hohenasperg",
          "Spandau Prison",
          "Landsberg Prison",
          "Ebrach Abbey"
        ],
        answer: 2
      },
      {
        question: "Who was the youngest member of The Beatles?",
        options: [
          "John Lennon",
          "Paul McCartney",
          "George Harrison",
          "Ringo Starr"
        ],
        answer: 2
      },
      {
        question: "Against which country did the Dutch Republic fight the Eighty Years' War?",
        options: [
          "Spain",
          "Portugal",
          "France",
          "England"
        ],
        answer: 0
      },
      {
        question: "Who had hits in the 70s with the songs \"Lonely Boy\" and \"Never Let Her Slip Away\"?",
        options: [
          "Barry White ",
          "Leo Sayer",
          "Andrew Gold",
          "Elton John"
        ],
        answer: 2
      },
      {
        question: "The character Momonga from the \"Overlord\" series orders his servants to call him by what name?",
        options: [
          "Kugane Maruyama",
          "Master",
          "Yggdrasil",
          "Ainz Ooal Gown"
        ],
        answer: 3
      },
      {
        question: "What are the smallest blood vessels in the human body?",
        options: [
          "Capillaries",
          "Veinules",
          "Arterioles",
          "Lymphatics"
        ],
        answer: 0
      },
      {
        question: "The Proclaimers - I'm Gonna Be (500 Miles) reached what position on the US Hot 100 Charts in 1993?",
        options: [
          "1st",
          "8th",
          "3rd",
          "5th"
        ],
        answer: 2
      },
      {
        question: "On average, Americans consume 100 pounds of what per second?",
        options: [
          "Chocolate",
          "Cocaine",
          "Donuts",
          "Potatoes"
        ],
        answer: 0
      },
      {
        question: "Which dictator killed the most people?",
        options: [
          "Adolf Hitler",
          "Kim Il Sung",
          "Mao Zedong",
          "Joseph Stalin"
        ],
        answer: 2
      },
      {
        question: "During which American Civil War campaign did Union troops dig a tunnel beneath Confederate troops to detonate explosives underneath them?",
        options: [
          "Antietam Campaign",
          "Siege of Petersburg",
          "Gettysburg Campagin",
          "Siege of Vicksburg"
        ],
        answer: 1
      },
      {
        question: "How did the Vikings call their short-lived colony in today's Canada?",
        options: [
          "Vínland",
          "Føroyar",
          "Hålogaland",
          "Skåne"
        ],
        answer: 0
      },
      {
        question: "What is the opening track on Lorde's Pure Heroine?",
        options: [
          "Tennis Court",
          "400 Lux",
          "Team",
          "Royals"
        ],
        answer: 0
      },
      {
        question: "The medial meniscus forms which part of what joint in the human body?",
        options: [
          "Shoulder",
          "Elbow",
          "Knee",
          "Ankle"
        ],
        answer: 2
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
        question: "In which year did the historic event 'The Magna Carta signed by King John of England' occur?",
        options: [
          "1300",
          "1215",
          "1250",
          "1199"
        ],
        answer: 1
      },
      {
        question: "What did the name of the Tor Anonymity Network orignially stand for?",
        options: [
          "The Onion Router",
          "The Ominous Router",
          "The Orange Router",
          "The Only Router"
        ],
        answer: 0
      },
      {
        question: "Which slogan did the fast food company, McDonald's, use before their \"I'm Lovin' It\" slogan?",
        options: [
          "Why Pay More!?",
          "We Love to See You Smile",
          "Have It Your Way",
          "Making People Happy Through Food"
        ],
        answer: 1
      },
      {
        question: "In Black Hammer, what dimension does Colonel Weird travel through?",
        options: [
          "Para-Zone",
          "Hyperspace",
          "Phantom Zone",
          "Mirror Universe"
        ],
        answer: 0
      },
      {
        question: "Who is the frontman of Muse?",
        options: [
          "Jonny Greenwood",
          "Thom Yorke",
          "Matt Bellamy",
          "Dominic Howard"
        ],
        answer: 2
      },
      {
        question: "On the periodic table of elements, what is the symbol for Tin?",
        options: [
          "Ni",
          "Sn",
          "Ti",
          "Na"
        ],
        answer: 1
      },
      {
        question: "Who is the main character in One Piece?",
        options: [
          "Zoro",
          "Smoker",
          "Luffy",
          "Shanks"
        ],
        answer: 2
      },
      {
        question: "In the anime, \"Super Sonico\", what is Super Sonico's favorite food?",
        options: [
          "Pizza",
          "Macroons",
          "Chips",
          "Ice Cream"
        ],
        answer: 1
      },
      {
        question: "What is the name of the default theme that is installed with Windows XP?",
        options: [
          "Neptune",
          "Whistler",
          "Bliss",
          "Luna"
        ],
        answer: 3
      },
      {
        question: "For which civil rights activist did Stevie Wonder write the song 'Happy Birthday' in 1980?",
        options: [
          "Booker T. Washington",
          "Martin Luther King Jr",
          "Nelson Mandella",
          "Rosa Parks"
        ],
        answer: 1
      },
      {
        question: "When was the first mammal successfully cloned?",
        options: [
          "2009",
          "1996",
          "1985",
          "1999"
        ],
        answer: 1
      },
      {
        question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
        options: [
          "C++",
          "Objective-C",
          "Java",
          "C#"
        ],
        answer: 3
      },
      {
        question: "What fast food chain has the most locations globally?",
        options: [
          "KFC",
          "Subway",
          "McDonalds",
          "Starbucks"
        ],
        answer: 1
      },
      {
        question: "In The Bangles' 'Manic Monday', what time is it already?",
        options: [
          "Four o'clock",
          "Seven o'clock",
          "Six o'clock",
          "Five o'clock"
        ],
        answer: 2
      },
      {
        question: "What was the first music video to be broadcast on MTV?",
        options: [
          "Video Killed the Radio Star",
          "Hungry Like the Wolf",
          "Walk This Way",
          "Take On Me"
        ],
        answer: 0
      },
      {
        question: "What is the name given to Indian food cooked over charcoal in a clay oven?",
        options: [
          "Pani puri",
          "Tiki masala",
          "Tandoori",
          "Biryani"
        ],
        answer: 2
      },
      {
        question: "In what year was the famous 45 foot tall Hollywood sign first erected?",
        options: [
          "1913",
          "1933",
          "1903",
          "1923"
        ],
        answer: 3
      },
      {
        question: "What otherworldly land does Thor come from?",
        options: [
          "Sovengarde",
          "Midgard",
          "Asgard",
          "Jotunheim"
        ],
        answer: 2
      },
      {
        question: "How many episodes were in season five of Samurai Jack?",
        options: [
          "11",
          "10",
          "12",
          "13"
        ],
        answer: 1
      },
      {
        question: "In \"Highschool DxD\", what is the name of the item some humans are born with?",
        options: [
          "Sacred Gear",
          "Blessed Artifact",
          "Hallowed Relic",
          "Imperial Arm"
        ],
        answer: 0
      },
      {
        question: "Which of these women is not a member of the Korean girl group TWICE?",
        options: [
          "Kang Seulgi",
          "Myoui Mina",
          "Hirai Momo",
          "Kim Dahyun"
        ],
        answer: 0
      },
      {
        question: "What is an alternative name for multiple personality disorder?",
        options: [
          "Identity crisis",
          "Body integrity identity disorder",
          "Dissociative identity disorder",
          "Schizophrenia"
        ],
        answer: 2
      },
      {
        question: "Where was Portuguese explorer Ferdinand Magellan killed in 1521?",
        options: [
          "Canary Islands",
          "Guam",
          "The Phillipines",
          "Argentina"
        ],
        answer: 2
      },
      {
        question: "The Battle of the Somme in World War I took place in which country?",
        options: [
          "Italy",
          "Germany",
          "France",
          "Austria"
        ],
        answer: 2
      },
      {
        question: "What was the title of Sakamoto Kyu's song \"Ue o Muite Arukou\" (I Look Up As I Walk) changed to in the United States?",
        options: [
          "Sushi",
          "Sukiyaki",
          "Oden",
          "Takoyaki"
        ],
        answer: 1
      },
      {
        question: "What year is considered to be the year that the British Empire ended?",
        options: [
          "1981",
          "1986",
          "1997",
          "1971"
        ],
        answer: 2
      },
      {
        question: "Which of these languages was NOT included in the 2016 song \"Don't Mind\" by Kent Jones?",
        options: [
          "Portuguese",
          "Spanish",
          "French",
          "Japanese"
        ],
        answer: 0
      },
      {
        question: "Which of these choices is not one of the phases of mitosis?",
        options: [
          "Diplophase",
          "Telophase",
          "Anaphase",
          "Metaphase"
        ],
        answer: 0
      },
      {
        question: "Which of the following spacecraft never touched the moon?",
        options: [
          "Apollo 11",
          "Mariner 4",
          "Luna 2",
          "SMART-1"
        ],
        answer: 1
      },
      {
        question: "What sport is being played in the Anime Eyeshield 21?",
        options: [
          "Football",
          "Basketball",
          "Baseball",
          "American Football"
        ],
        answer: 3
      },
      {
        question: "What is the real name of American rapper Pitbull?",
        options: [
          "Benito Antonio Martinez Ocasio",
          "Belcalis Marlenis Almánzar",
          "Ramón Luis Ayala Rodríguez",
          "Armando Christian Pérez"
        ],
        answer: 3
      },
      {
        question: "The lesser-known continuation of the saying \"Curiosity killed the cat...\" is:",
        options: [
          "\"...and the silent mouse remained thereat.\"",
          "\"...but satisfaction brought it back.\"",
          "\"...which taught it not to do that.\"",
          "\"...but death by the truth is better than ignorance.\""
        ],
        answer: 1
      },
      {
        question: "Where did the pineapple plant originate?",
        options: [
          "South America",
          "Asia",
          "Europe",
          "Hawaii"
        ],
        answer: 0
      },
      {
        question: "In the anime \"Gintama\" which accessory/article of clothing is the character Shinpachi commonly referred to as?",
        options: [
          "Glasses",
          "T-Shirt",
          "Underwear",
          "Nose Ring"
        ],
        answer: 0
      },
      {
        question: "The \"Tibia\" is found in which part of the body?",
        options: [
          "Hand",
          "Arm",
          "Leg",
          "Head"
        ],
        answer: 2
      },
      {
        question: "Which of these programming languages is a low-level language?",
        options: [
          "Pascal",
          "Python",
          "C#",
          "Assembly"
        ],
        answer: 3
      },
      {
        question: "Astraphobia is the irrational fear of what?",
        options: [
          "Snow",
          "Wind",
          "Thunder",
          "Rain"
        ],
        answer: 2
      },
      {
        question: "What was David Bowie's real surname?",
        options: [
          "Johnson",
          "Carter",
          "Jones",
          "Edwards"
        ],
        answer: 2
      },
      {
        question: "The Panama Canal was finished under the administration of which U.S. president?",
        options: [
          "Herbert Hoover",
          "Woodrow Wilson",
          "Theodore Roosevelt",
          "Franklin Delano Roosevelt"
        ],
        answer: 1
      },
      {
        question: "My Hero Academia's main character Midoriya goes by what superhero name?",
        options: [
          "All Might",
          "Saitama",
          "Deku",
          "Kona"
        ],
        answer: 2
      },
      {
        question: "In what year was the smash hit song \"Scatman's World\" released?",
        options: [
          "1993",
          "1994",
          "1996",
          "1995"
        ],
        answer: 3
      },
      {
        question: "Iconic cartoon character Mickey Mouse made his onscreen debut in what year?",
        options: [
          "1928",
          "1929",
          "1922",
          "1932"
        ],
        answer: 0
      },
      {
        question: "In what year did the anime adaptation of \"March Comes In Like A Lion\" air?",
        options: [
          "2016",
          "2017",
          "2015",
          "2018"
        ],
        answer: 0
      },
      {
        question: "Which country gifted the Statue of Liberty to the United States of America?",
        options: [
          "England",
          "France",
          "Spain",
          "Germany"
        ],
        answer: 1
      },
      {
        question: "In the DC Comics 2016 reboot, Rebirth, which speedster escaped from the Speed Force after he had been erased from existance?",
        options: [
          "Wally West",
          "Johnny Quick",
          "Jay Garrick",
          "Eobard Thawne"
        ],
        answer: 0
      },
      {
        question: "What is rapper Drake's real name?",
        options: [
          "Dwayne Carter",
          "Shaun Carter",
          "Andre Young",
          "Aubrey Graham"
        ],
        answer: 3
      },
      {
        question: "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
        options: [
          "Eight Years",
          "Four Years",
          "Year",
          "Two Years"
        ],
        answer: 2
      },
      {
        question: "What is the most significant side venture the popular firearms company, Remington, has pursued?",
        options: [
          "Ceiling Fans",
          "Door Knobs",
          "Blenders",
          "Typewriters"
        ],
        answer: 3
      },
      {
        question: "In which year was Constantinople conquered by the Turks?",
        options: [
          "1453",
          "1435",
          "1454",
          "1440"
        ],
        answer: 0
      },
      {
        question: "Which Japanese music group was formed to produce theme music for the anime \"Guilty Crown\"?",
        options: [
          "Goose house",
          "Garnidelia",
          "Egoist",
          "Babymetal"
        ],
        answer: 2
      },
      {
        question: "In what year did Kentucky become the 15th state to join the union?",
        options: [
          "1798",
          "1782",
          "1792",
          "1788"
        ],
        answer: 2
      },
      {
        question: "What is the name of the main character in the webcomic Gunnerkrigg Court by Tom Siddell?",
        options: [
          "Mercury",
          "Antimony",
          "Cobalt",
          "Bismuth"
        ],
        answer: 1
      },
      {
        question: "Which Hanna-Barbera cartoon character travelled with a canine companion named Beegle Beagle?",
        options: [
          "Yogi Bear",
          "Grape Ape",
          "Wally Gator",
          "Boss Gator"
        ],
        answer: 1
      },
      {
        question: "At what temperature does water boil?",
        options: [
          "178°F",
          "212°F",
          "200°F",
          "181°F"
        ],
        answer: 1
      },
      {
        question: "Who invented Pastafarianism?",
        options: [
          "Bill Nye",
          "Bobby Henderson",
          "Zach Soldi",
          "Eric Tignor"
        ],
        answer: 1
      },
      {
        question: "When was the compact disc player first released?",
        options: [
          "1982",
          "1983",
          "1980",
          "1981"
        ],
        answer: 0
      },
      {
        question: "The heroine of \"Humanity Has Declined\" is a mediator between humans and what?",
        options: [
          "Animals",
          "Fairies",
          "The Earth",
          "Elves"
        ],
        answer: 1
      },
      {
        question: "In what year did Texas secede from Mexico?",
        options: [
          "1836",
          "1845",
          "1844",
          "1838"
        ],
        answer: 0
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
        question: "Who was the commander-in-chief of the Kaurava army on the first day of the Kurukshetra war?",
        options: [
          "Dronacharya",
          "Shalya",
          "Karna",
          "Bhishma"
        ],
        answer: 3
      },
      {
        question: "Who was the father of Dronacharya?",
        options: [
          "Bharadwaja",
          "Gautama",
          "Atri",
          "Vashistha"
        ],
        answer: 0
      },
      {
        question: "What weapon did Lord Shiva gift to Arjuna after testing his valor?",
        options: [
          "Narayanastra",
          "Vajrastra",
          "Pashupatastra",
          "Brahmashira"
        ],
        answer: 2
      },
      {
        question: "Where and when was the first cardboard box made for industrial use?",
        options: [
          "United States, 1917",
          "England, 1917",
          "United States, 1817",
          "England, 1817"
        ],
        answer: 3
      },
      {
        question: "What are the base station trackers used for the HTC Vive called?",
        options: [
          "Constellation ",
          "Lighthouse",
          "Trackers",
          "Motion"
        ],
        answer: 1
      },
      {
        question: "What historical event was Tchaikovsky's 1812 Overture referencing?",
        options: [
          "The American War of 1812",
          "The Napoleonic Wars",
          "The Charge of the Light Brigade (Crimean War)",
          "The Russian Revolution"
        ],
        answer: 1
      },
      {
        question: "Which Swiss psychologist is synonymous with the concepts of introvert and extrovert personalities?",
        options: [
          "Jean Piaget",
          "Hermann Rorschach",
          "Alice Miller",
          "Carl Jung"
        ],
        answer: 3
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
        question: "In what year was McDonald's founded?",
        options: [
          "1951",
          "1947",
          "1955",
          "1964"
        ],
        answer: 2
      },
      {
        question: "What is the cartoon character, Andy Capp, known as in Germany?",
        options: [
          "Rod Tapper",
          "Helmut Schmacker",
          "Dick Tingeler",
          "Willi Wakker"
        ],
        answer: 3
      },
      {
        question: "Which of these musicals won the Tony Award for Best Musical?",
        options: [
          "The Color Purple",
          "Rent",
          "Newsies",
          "American Idiot"
        ],
        answer: 1
      },
      {
        question: "Krusty is the guild master of which guild in \"Log Horizon\"?",
        options: [
          "Oceanic Systems (Marine Agency)",
          "D. D. D",
          "Silver Sword",
          "West Wind Brigade"
        ],
        answer: 1
      },
      {
        question: "What is a \"dakimakura\"?",
        options: [
          "A word used to describe two people who truly love each other",
          "A yoga posture",
          "A body pillow",
          "A Chinese meal, essentially composed of fish"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of Uranium",
        options: [
          "17",
          "167",
          "235",
          "92"
        ],
        answer: 3
      },
      {
        question: "In the series JoJo's Bizarre Adventure, which main character makes the greatest number of recurring appearances?",
        options: [
          "Jotaro Kujo",
          "Giorno Giovanna",
          "Joseph Joestar",
          "Josuke Higashikata"
        ],
        answer: 0
      },
      {
        question: "What is the lowest layer of the Earth's atmosphere named?",
        options: [
          "Thermosphere",
          "Troposphere",
          "Stratosphere",
          "Mesosphere"
        ],
        answer: 1
      },
      {
        question: "What are rhino's horn made of?",
        options: [
          "Bone",
          "Skin",
          "Keratin",
          "Ivory"
        ],
        answer: 2
      },
      {
        question: "What year did Australia become a federation?",
        options: [
          "1899",
          "1911",
          "1910",
          "1901"
        ],
        answer: 3
      },
      {
        question: "Which of these companies does NOT manufacture automobiles?",
        options: [
          "Nissan",
          "Fiat",
          "Ducati",
          "GMC"
        ],
        answer: 2
      },
      {
        question: "On which computer hardware device is the BIOS chip located?",
        options: [
          "Graphics Processing Unit",
          "Motherboard",
          "Hard Disk Drive",
          "Central Processing Unit"
        ],
        answer: 1
      },
      {
        question: "What was the first Infinity Coaster in the world and where is it located?",
        options: [
          "The Smiler, Alton Towers, UK",
          "Gold Rush, Slagharen, Netherlands ",
          "Monster, Adventureland Altoona, USA",
          "Madagascar Mad Pursuit, Motiongate Dubai, UAE"
        ],
        answer: 0
      },
      {
        question: "Who voices the character \"Reigen\"  in the English dub of \"Mob Psycho 100\"?",
        options: [
          "Casey Mongillo",
          "Chris Niosi",
          "Kyle McCarley",
          "Max Mittelman"
        ],
        answer: 1
      },
      {
        question: "What is the name of the main character from the music video of \"Shelter\" by Porter Robinson and A-1 Studios?",
        options: [
          "Rin",
          "Ren",
          "Ram",
          "Rem"
        ],
        answer: 0
      },
      {
        question: "Which of the following Soviet revolutionaries was exiled from the USSR and later assassinated in 1940 for criticizing Stalinism?",
        options: [
          "Mikhail Kalinin",
          "Leon Trotsky",
          "Vladimir Lenin",
          "Lev Kamenev"
        ],
        answer: 1
      },
      {
        question: "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
        options: [
          "6 Minutes",
          "2 Minutes",
          "8 Minutes",
          "12 Minutes"
        ],
        answer: 2
      },
      {
        question: "What were the first states to break away from Yugoslavia?",
        options: [
          "Slovenia, Macedonia",
          "Montenegro, Slovenia",
          "Macedonia, Montenegro",
          "Slovenia, Croatia"
        ],
        answer: 3
      },
      {
        question: "What was studio Trigger's first original long-form animated series for television?",
        options: [
          "Inferno Cop",
          "Gurren Lagann",
          "Kill la Kill",
          "Kiznaiver"
        ],
        answer: 2
      },
      {
        question: "The success of DC Comics' Swamp Thing, Sandman, and other books in a similar style, led to the creation of what new imprint in 1993?",
        options: [
          "New Universe",
          "Red Circle",
          "Impact",
          "Vertigo"
        ],
        answer: 3
      },
      {
        question: "The seed drill was invented by which British inventor?",
        options: [
          "Charles Babbage",
          "Jethro Tull",
          "J.J Thomson",
          "Isaac Newton"
        ],
        answer: 1
      },
      {
        question: "Apple co-founder Steve Jobs died from complications of which form of cancer?",
        options: [
          "Stomach",
          "Liver",
          "Pancreatic",
          "Bone"
        ],
        answer: 2
      },
      {
        question: "The teapot often seen in many 3D modeling applications is called what?",
        options: [
          "Pixar Teapot",
          "Tennessee Teapot",
          "3D Teapot",
          "Utah Teapot"
        ],
        answer: 3
      },
      {
        question: "Which of these is the name of a Japanese system of alternative medicine, literally meaning \"finger pressure\"?",
        options: [
          "Ukiyo",
          "Shiatsu",
          "Ikigai",
          "Majime"
        ],
        answer: 1
      },
      {
        question: "What direction does the Statue of Liberty face?",
        options: [
          "Southeast",
          "Northwest",
          "Southwest",
          "Northeast"
        ],
        answer: 0
      },
      {
        question: "In what year was Tchaikovsky's 1812 Overture composed?",
        options: [
          "1790",
          "1880",
          "1840",
          "1812"
        ],
        answer: 1
      },
      {
        question: "What was Britney Spears' debut single?",
        options: [
          "Toxic",
          "(You Drive Me) Crazy",
          "Oops!... I Did It Again",
          "...Baby One More Time"
        ],
        answer: 3
      },
      {
        question: "In what year was the video game company Electronic Arts founded?",
        options: [
          "2005",
          "1981",
          "1999",
          "1982"
        ],
        answer: 3
      },
      {
        question: "Who created \"RWBY\"?",
        options: [
          "Kerry Shawcross",
          "Miles Luna",
          "Shane Newville",
          "Monty Oum"
        ],
        answer: 3
      },
      {
        question: "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
        options: [
          "Coughton Court",
          "Hampton Court",
          "Buckingham Palace",
          "St James's Palace"
        ],
        answer: 1
      },
      {
        question: "Which country drives on the left side of the road?",
        options: [
          "China",
          "Germany",
          "Japan",
          "Russia"
        ],
        answer: 2
      },
      {
        question: "Which British monarch was also known as \"William of Orange\"?",
        options: [
          "William IV",
          "William I",
          "William II",
          "William III"
        ],
        answer: 3
      },
      {
        question: "What is Scooby-Doo's real name?",
        options: [
          "Scooter",
          "Shooby",
          "Scoobert",
          "Scrappy"
        ],
        answer: 2
      },
      {
        question: "Which American manufactured submachine gun was informally known by the American soldiers that used it as \"Grease Gun\"?",
        options: [
          "MAC-10",
          "Colt 9mm",
          "M3",
          "Thompson"
        ],
        answer: 2
      },
      {
        question: "Which popular jazz standard begins with the line \"Someday, when I'm awfully low\"?",
        options: [
          "Autumn Leaves",
          "All the Things You Are",
          "Dream a Little Dream of Me",
          "The Way You Look Tonight"
        ],
        answer: 3
      },
      {
        question: "What year was Walt Disney born?",
        options: [
          "1902",
          "1903",
          "1900",
          "1901"
        ],
        answer: 3
      },
      {
        question: "What is the Italian word for \"tomato\"?",
        options: [
          "Aglio",
          "Cipolla",
          "Peperoncino",
          "Pomodoro"
        ],
        answer: 3
      },
      {
        question: "When was the People's Republic of China founded?",
        options: [
          "October 1, 1949",
          "April 3, 1947",
          "December 6, 1950",
          "May 7, 1945"
        ],
        answer: 0
      },
      {
        question: "What are the first few words in the lyrics of A-Ha's 'Take On Me'?",
        options: [
          "We're finding a way",
          "We're talking away",
          "We're blocking the way",
          "We're dreaming today"
        ],
        answer: 1
      },
      {
        question: "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
        options: [
          "USS Pueblo",
          "USS Constitution",
          "USS North Carolina",
          "USS Indianapolis"
        ],
        answer: 0
      },
      {
        question: "What date is referenced in the 1971 song \"September\" by Earth, Wind & Fire?",
        options: [
          "26th of September",
          "23rd of September",
          "24th of September",
          "21st of September"
        ],
        answer: 3
      },
      {
        question: "What is the \"Mitsubishi Wakamaru\"?",
        options: [
          "A pickup truck",
          "A motorboat",
          "An motorcycle",
          "A robot"
        ],
        answer: 3
      },
      {
        question: "The main antagonist of the second part of JoJo's Bizarre Adventure is which of the following?",
        options: [
          "Santana",
          "Wired Beck",
          "Kars",
          "Erina Joestar"
        ],
        answer: 2
      },
      {
        question: "Which of these words means \"idle spectator\"?",
        options: [
          "Meupareunia",
          "Gongoozler",
          "Jentacular",
          "Gossypiboma"
        ],
        answer: 1
      },
      {
        question: "Whose greyscale face is on the kappa emoticon on Twitch?",
        options: [
          "John DeSeno",
          "Justin DeSeno",
          "Jimmy DeSeno",
          "Josh DeSeno"
        ],
        answer: 3
      },
      {
        question: "What does the \"G\" mean in \"G-Man\"?",
        options: [
          "Ghost",
          "Government",
          "Going",
          "Geronimo"
        ],
        answer: 1
      },
      {
        question: "When was the first episode of Soul Eater released?",
        options: [
          "2003",
          "2005",
          "2008",
          "2011"
        ],
        answer: 2
      },
      {
        question: "Who was the only US President to be elected four times?",
        options: [
          "Theodore Roosevelt",
          "Franklin Roosevelt",
          "George Washington",
          "Abraham Lincoln"
        ],
        answer: 1
      },
      {
        question: "Bob and Mike Bryan were well known brothers in which sport?",
        options: [
          "Basketball",
          "Tennis",
          "Football",
          "Baseball"
        ],
        answer: 1
      },
      {
        question: "EDM record label Monstercat is based in which country?",
        options: [
          "Canada",
          "United States",
          "Australia",
          "United Kingdom"
        ],
        answer: 0
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
        question: "Which sage is known for his extreme anger and cursed Shakuntala?",
        options: [
          "Agastya",
          "Vishwamitra",
          "Durvasa",
          "Vashistha"
        ],
        answer: 2
      },
      {
        question: "During what war did the \"Cuban Missile Crisis\" occur?",
        options: [
          "World War II",
          "Cold War",
          "World War I",
          "Revolutionary War"
        ],
        answer: 1
      },
      {
        question: "What event marked the start of World War II?",
        options: [
          "Battle of Britain (1940)",
          "Invasion of Russia (1942)",
          "Invasion of Poland (1939)",
          "Invasion of Normandy (1944)"
        ],
        answer: 2
      },
      {
        question: "On what date did the original \"Fruits Basket\" anime air in Japan?",
        options: [
          "July 5th, 2001",
          "December 27th, 2001",
          "November 1st, 2006",
          "October 11th, 2001"
        ],
        answer: 0
      },
      {
        question: "In Jeff Wayne's Musical Version of War of the Worlds, the chances of anything coming from Mars are...",
        options: [
          "A billion to one",
          "A hundred to one",
          "A trillion to one",
          "A million to one"
        ],
        answer: 3
      },
      {
        question: "What was the bloodiest single-day battle during the American Civil War?",
        options: [
          "The Battle of Antietam",
          "The Siege of Vicksburg",
          "The Battles of Chancellorsville",
          "The Battle of Gettysburg"
        ],
        answer: 0
      },
      {
        question: "What mineral has the lowest number on the Mohs scale?",
        options: [
          "Talc",
          "Diamond",
          "Quartz",
          "Gypsum"
        ],
        answer: 0
      },
      {
        question: "What is the romanized Russian word for \"winter\"?",
        options: [
          "Osen'",
          "Vesna",
          "Leto",
          "Zima"
        ],
        answer: 3
      },
      {
        question: "In \"My Little Pony: Friendship is Magic\", which of these ponies represents the quality of honesty?",
        options: [
          "Twilight Sparkle",
          "Applejack",
          "Pinkie Pie",
          "Rarity"
        ],
        answer: 1
      },
      {
        question: "Who was the first president born in the independent United States?",
        options: [
          "James Monroe ",
          "John Adams",
          "Martin Van Buren",
          "George Washington"
        ],
        answer: 2
      },
      {
        question: "What alcoholic drink is mainly made from juniper berries?",
        options: [
          "Tequila",
          "Vodka",
          "Rum",
          "Gin"
        ],
        answer: 3
      },
      {
        question: "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
        options: [
          "Economic depression",
          "Typhoons",
          "Tornados",
          "Samurai"
        ],
        answer: 1
      },
      {
        question: "Which of the following is NOT classified as a Semetic language?",
        options: [
          "Akkadian",
          "Mandaic",
          "Maltese",
          "Sumerian"
        ],
        answer: 3
      },
      {
        question: "Who developed the first successful polio vaccine in the 1950s?",
        options: [
          "Frederick Robbins",
          "Jonas Salk",
          "John F. Enders",
          "Thomas Weller"
        ],
        answer: 1
      },
      {
        question: "When was Napoleon Bonaparte crowned emperor of the French?",
        options: [
          " October 15th 1804",
          " December 2nd 1804",
          " March 8th 1803",
          " July 3rd 1802"
        ],
        answer: 1
      },
      {
        question: "Who was the leader of Sweden in the Great Northern War?",
        options: [
          "Per Albin Hansson",
          "Gustavus Adolphus",
          "Peter the Great",
          "Charles XII"
        ],
        answer: 3
      },
      {
        question: "Which mountain has the highest peak in Europe?",
        options: [
          "Mount Ararat, Turkey",
          "Shkhara, Georgia",
          "Mont Blanc, France",
          "Mount Elbrus, Russia"
        ],
        answer: 3
      },
      {
        question: "What is the name of the final villain in the manga series \"Bleach\"?",
        options: [
          "Juhabach",
          "Juha Bach",
          "Yuhabah",
          "Yhwach"
        ],
        answer: 3
      },
      {
        question: "Ikki Kurogane is known by what nickname at the beginning of \"Chivalry of a Failed Knight\"?",
        options: [
          "Worst One",
          "Princess",
          "Another One",
          "Blazer"
        ],
        answer: 0
      },
      {
        question: "The now extinct species \"Thylacine\" was native to where?",
        options: [
          "Tasmania, Australia",
          "Wallachia, Romania",
          "Oregon, United States",
          "Baluchistan, Pakistan"
        ],
        answer: 0
      },
      {
        question: "Which NASA Space Shuttle broke apart during atmospheric re-entry on February 1, 2003?",
        options: [
          "Challenger",
          "Discovery",
          "Endeavour",
          "Columbia"
        ],
        answer: 3
      },
      {
        question: "What was the height of Kingda Ka, the tallest roller coaster in the world from 2005 to 2024?",
        options: [
          "500 ft",
          "429 ft",
          "396 ft",
          "456 ft"
        ],
        answer: 3
      },
      {
        question: "Liam Howlett founded which electronic music group in 1990?",
        options: [
          "The Chemical Brothers",
          "The Crystal Method",
          "The Prodigy",
          "Infected Mushroom"
        ],
        answer: 2
      },
      {
        question: "According to scholarly estimates, what percentage of the world population at the time died due to Tamerlane's conquests?",
        options: [
          "5%",
          "3%",
          "<1%",
          "1%"
        ],
        answer: 0
      },
      {
        question: "Which of the following Assyrian kings did NOT rule during the Neo-Assyrian Empire?",
        options: [
          "Ashur-nasir-pal II",
          "Shamshi-Adad III",
          "Shalmaneser V",
          "Esharhaddon"
        ],
        answer: 1
      },
      {
        question: "Which famed architect, who died in 2019 aged 102, designed the glass pyramid at the Louvre museum in Paris?",
        options: [
          "Frank Gehry",
          "Pascale Guédot",
          "I. M. Pei",
          "Wang Shu"
        ],
        answer: 2
      },
      {
        question: "Who was the Prime Minister of the United Kingdom for most of World War II?",
        options: [
          "Harold Macmillan",
          "Edward Heath",
          "Winston Churchill",
          "Neville Chamberlain"
        ],
        answer: 2
      },
      {
        question: "Which of these is not a real character in the cartoon series My Little Pony: Friendship is Magic?",
        options: [
          "Maud Pie",
          "Rose Marene",
          "Pinkie Pie",
          "Rainbow Dash"
        ],
        answer: 1
      },
      {
        question: "When did construction of the Suez Canal finish?",
        options: [
          "1850",
          "1869",
          "1859",
          "1860"
        ],
        answer: 1
      },
      {
        question: "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
        options: [
          "Fiestas",
          "Flamenco",
          "Bullfighting",
          "Mariachi"
        ],
        answer: 2
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
        question: "What year was the first Apple iPod introduced?",
        options: [
          "2001",
          "1999",
          "2000",
          "1998"
        ],
        answer: 0
      },
      {
        question: "What does the term MIME stand for, in regards to computing?",
        options: [
          "Mail Internet Mail Exchange",
          "Multipurpose Internet Mail Extensions",
          "Multipurpose Interleave Mail Exchange",
          "Mail Interleave Method Exchange"
        ],
        answer: 1
      },
      {
        question: "The phrase \"accident waiting to happen\" is an example of what type of figure of speech?",
        options: [
          "Idiom",
          "Metaphor",
          "Analogy",
          "Simile"
        ],
        answer: 0
      },
      {
        question: "The human right lung has how many lobes?",
        options: [
          "3",
          "1",
          "4",
          "2"
        ],
        answer: 0
      },
      {
        question: "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
        options: [
          "Dell",
          "Toshiba",
          "Asus",
          "Hewlett-Packard"
        ],
        answer: 3
      },
      {
        question: "Who created Ultron of Earth-616?",
        options: [
          "Henry Pym",
          "Tony Stark",
          "Reed Richards",
          "Amadeus Cho"
        ],
        answer: 0
      },
      {
        question: "In the 2011 TV anime series, \"THE iDOLM@STER\", what was the name of Iori's stuffed toy bunny?",
        options: [
          "Kero",
          "Bubsy",
          "Charles",
          "Usagi"
        ],
        answer: 2
      },
      {
        question: "What M83 was featured in Grand Theft Auto V's radio?",
        options: [
          "Midnight City",
          "Outro",
          "Reunion",
          "Wait"
        ],
        answer: 0
      },
      {
        question: "From which country does the piano originate?",
        options: [
          "Italy",
          "France",
          "Germany",
          "Austria"
        ],
        answer: 0
      },
      {
        question: "What play is the quote \"Hell is other people\" from?",
        options: [
          "No Exit",
          "The Flies",
          "The Devil and the Good Lord",
          "The Condemned of Altona"
        ],
        answer: 0
      },
      {
        question: "What song plays in the ending credits of the anime \"Ergo Proxy\"?",
        options: [
          "Paranoid Android",
          "Sadistic Summer",
          "Bittersweet Symphony",
          "Mad World"
        ],
        answer: 0
      },
      {
        question: "The creator of the Enigma Cypher and Machine was of what nationality?",
        options: [
          "German",
          "British",
          "Polish",
          "American"
        ],
        answer: 0
      },
      {
        question: "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
        options: [
          "Right Middle Finger",
          "Nose",
          "Left Eye",
          "Right Ear"
        ],
        answer: 2
      },
      {
        question: "What is the real name of viral internet meme Grumpy Cat?",
        options: [
          "Lil Bub",
          "Tardar Sauce",
          "Maru",
          "Colonel Meow"
        ],
        answer: 1
      },
      {
        question: "Which of these black metal acts was a solo project?",
        options: [
          "Darkthrone",
          "Dissection",
          "Burzum",
          "Mayhem"
        ],
        answer: 2
      },
      {
        question: "In which years did the Battle of Gallipoli take place?",
        options: [
          "1914 - 1918",
          "1914 - 1915",
          "1915 - 1916",
          "1915 - 1918"
        ],
        answer: 2
      },
      {
        question: "In Pre-Super Genesis universe of \"Sonic the Hedgehog\" comic, what was the name of  Sally Acorn's brother?",
        options: [
          "Elias Acorn",
          "Frederick Acorn",
          "Maximillian Acorn",
          "Alexis Acorn"
        ],
        answer: 0
      },
      {
        question: "What was the first Android version specifically optimized for tablets?",
        options: [
          "Honeycomb",
          "Froyo",
          "Eclair",
          "Marshmellow"
        ],
        answer: 0
      },
      {
        question: "According to the United States' CDC, one in how many Americans die annually due to smoking?",
        options: [
          "Twenty",
          "Five",
          "Ten",
          "One hundred"
        ],
        answer: 1
      },
      {
        question: "What does the term GPU stand for?",
        options: [
          "Graphite Producing Unit",
          "Graphical Proprietary Unit",
          "Gaming Processor Unit",
          "Graphics Processing Unit"
        ],
        answer: 3
      },
      {
        question: "Which issue of the \"Sonic the Hedgehog\" comic did Scourge the Hedgehog make his first appearance?",
        options: [
          "Sonic the Hedgehog #161",
          "Sonic the Hedgehog #47",
          "Sonic Universe #32",
          "Sonic the Hedgehog #11"
        ],
        answer: 3
      },
      {
        question: "Which musical has won the most Tony awards?",
        options: [
          "Chicago",
          "Phantom of the Opera",
          "The Producers",
          "Hamilton"
        ],
        answer: 2
      },
      {
        question: "Adolf Hitler was born on which date?",
        options: [
          "February 6, 1889",
          "April 20, 1889",
          "April 16, 1889",
          "June 12, 1889"
        ],
        answer: 1
      },
      {
        question: "Which European capital city gives its name to a 1981 song by Ultravox?",
        options: [
          "Vienna",
          "Berlin",
          "Paris",
          "Brussels"
        ],
        answer: 0
      },
      {
        question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
        options: [
          "<marquee></marquee>",
          "<scroll></scroll>",
          "<move></move>",
          "<slide></slide>"
        ],
        answer: 0
      },
      {
        question: "Which infamous European traitor was known as \"the last person to enter Parliament with honest intentions\"?",
        options: [
          "Francis Tresham",
          "Robert Catesby",
          "Guy Fawkes",
          "Everard Digby"
        ],
        answer: 2
      },
      {
        question: "Which of the following years is commonly referred to as the \"Year Without a Summer\"?",
        options: [
          "1816",
          "1813",
          "1808",
          "1823"
        ],
        answer: 0
      },
      {
        question: "Myopia is the scientific term for which condition?",
        options: [
          "Farsightedness",
          "Clouded Vision",
          "Double Vision",
          "Shortsightedness"
        ],
        answer: 3
      },
      {
        question: "Which of these species is not extinct?",
        options: [
          "Saudi gazelle",
          "Japanese sea lion",
          "Tasmanian tiger",
          "Komodo dragon"
        ],
        answer: 3
      },
      {
        question: "When did the Crisis of the Third Century begin?",
        options: [
          "210 AD",
          "242 AD",
          "235 AD",
          "235 BC"
        ],
        answer: 2
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
        question: "What was the name of the bow lifted and broken by Lord Rama during Sita's swayamvar?",
        options: [
          "Gandiva",
          "Kodanda",
          "Sharanga",
          "Pinaka"
        ],
        answer: 3
      },
      {
        question: "Which of the following are cells of the adaptive immune system?",
        options: [
          "Natural killer cells",
          "White blood cells",
          "Cytotoxic T cells",
          "Dendritic cells"
        ],
        answer: 2
      },
      {
        question: "What is Scooby Doo's full name?",
        options: [
          "Scooter Doo",
          "Scooby Dooby Doo",
          "Scoobity Doo",
          "Scoobert Doo"
        ],
        answer: 3
      },
      {
        question: "Who sings the rap song \"Secret Wars Part 1\"?",
        options: [
          "Busdriver",
          "Masta Killa",
          "MC Frontalot",
          "The Last Emperor"
        ],
        answer: 3
      },
      {
        question: "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
        options: [
          "Villa Plus",
          "Yelloh Village",
          "Center Parcs",
          "Keycamp"
        ],
        answer: 2
      },
      {
        question: "What type of creature is a Bonobo?",
        options: [
          "Wildcat",
          "Lion",
          "Parrot",
          "Ape"
        ],
        answer: 3
      },
      {
        question: "How many legs is it biologically impossible for a centipede to have?",
        options: [
          "26",
          "74",
          "50",
          "100"
        ],
        answer: 3
      },
      {
        question: "Which of the following countries does \"JoJo's Bizarre Adventure: Stardust Crusaders\" not take place in?",
        options: [
          "Philippines",
          "Pakistan",
          "India",
          "Egypt"
        ],
        answer: 0
      },
      {
        question: "How many Hz does the video standard PAL support?",
        options: [
          "59",
          "25",
          "50",
          "60"
        ],
        answer: 2
      },
      {
        question: "Bohdan Khmelnytsky was which of the following?",
        options: [
          "Leader of the Ukrainian Cossacks",
          "General Secretary of the Communist Party of the USSR",
          "Grand Prince of Novgorod",
          "Prince of Wallachia"
        ],
        answer: 0
      },
      {
        question: "Talos, the mythical giant bronze man, was the protector of which island?",
        options: [
          "Crete",
          "Sicily",
          "Sardinia",
          "Cyprus"
        ],
        answer: 0
      },
      {
        question: "What year was \"JoJo's Bizarre Adventure: Phantom Blood\" first released?",
        options: [
          "1983",
          "2013",
          "1987",
          "1995"
        ],
        answer: 2
      },
      {
        question: "Which of these theoretical phycisists first predicted the existence of antimatter?",
        options: [
          "Niels Bohr",
          "Paul Dirac",
          "Albert Einstein",
          "Werner Heisenberg"
        ],
        answer: 1
      },
      {
        question: "The Second Boer War in 1899 was fought where?",
        options: [
          "Nepal",
          "Bulgaria",
          "Argentina",
          "South Africa"
        ],
        answer: 3
      },
      {
        question: "Which of these is not a layer in the OSI model for data communications?",
        options: [
          "Application Layer",
          "Connection Layer",
          "Physical Layer",
          "Transport Layer"
        ],
        answer: 1
      },
      {
        question: "Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
        options: [
          "Phineas",
          "Harry",
          "Ezra",
          "Gus"
        ],
        answer: 1
      },
      {
        question: "What was the name of the security vulnerability found in Bash in 2014?",
        options: [
          "Shellshock",
          "Heartbleed",
          "Bashbug",
          "Stagefright"
        ],
        answer: 0
      },
      {
        question: "In the Marvel Universe, the planet of Svartalfheim is home to what race?",
        options: [
          "Skrulls",
          "Dark Elves",
          "Kronans",
          "Frost Giants"
        ],
        answer: 1
      },
      {
        question: "Who assassinated President James A. Garfield?",
        options: [
          "Charles Guiteau",
          "Sirhan Sirhan",
          "John Wilkes Booth",
          "Leon Czolgosz"
        ],
        answer: 0
      },
      {
        question: "Where in La Coruña (Spain) is the headquarters of \"Inditex\", the biggest fashion group in the world?",
        options: [
          "Mugía",
          "Sanjenjo",
          "Arteijo",
          "Órdenes"
        ],
        answer: 2
      },
      {
        question: "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
        options: [
          "A' + B'",
          "AB' + AB",
          "A'B'",
          "A'B + B'A"
        ],
        answer: 0
      },
      {
        question: "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
        options: [
          "Noisia",
          "Jack Ü",
          "Dog Blood",
          "What So Not"
        ],
        answer: 2
      },
      {
        question: "According to Algonquian folklore, how does one transform into a Wendigo?",
        options: [
          "Participating in cannibalism.",
          "Excessive mutilation of animal corpses.",
          "Drinking the blood of many slain animals.",
          "Performing a ritual involving murder."
        ],
        answer: 0
      },
      {
        question: "Artis Leon Ivey Jr. is better known as which rap artist?",
        options: [
          "Snoop Dogg",
          "Dr Dre",
          "Coolio",
          "Ice T"
        ],
        answer: 2
      },
      {
        question: "Which of the following is not another name for the eggplant?",
        options: [
          "Potimarron",
          "Brinjal",
          "Melongene",
          "Guinea Squash"
        ],
        answer: 0
      },
      {
        question: "Which of these songs is not by Tatsuro Yamashita?",
        options: [
          "Merry-Go Round",
          "Let's Dance Baby",
          "Love Talkin'",
          "Lucky Lady Feel So Good "
        ],
        answer: 3
      },
      {
        question: "Which is the chemical name of H2O?",
        options: [
          "Dihydrogen Monoxide",
          "Manganese dioxide",
          "Ammonium chloride",
          "Anhydrous Sodium Carbonate"
        ],
        answer: 0
      },
      {
        question: "Which of these names are not a character of JoJo's Bizarre Adventure?",
        options: [
          "JoJo Kikasu",
          "Risotto Nero",
          "George Joestar",
          "Jean-Pierre Polnareff"
        ],
        answer: 0
      },
      {
        question: "Who wrote the lyrics for Leonard Bernstein's 1957 Brodway musical West Side Story?",
        options: [
          "Richard Rodgers",
          "Oscar Hammerstein",
          "Stephen Sondheim",
          "Himself"
        ],
        answer: 2
      },
      {
        question: "What did the first vending machines in the early 1880's dispense?",
        options: [
          "Post cards",
          "Sodas ",
          "Alcohol",
          "Cigarettes"
        ],
        answer: 0
      },
      {
        question: "Who was the Author of the manga Uzumaki?",
        options: [
          "Junji Ito",
          "Masashi Kishimoto",
          "Akira Toriyama",
          "\tNoboru Takahashi"
        ],
        answer: 0
      },
      {
        question: "What year did Dire Straits's Song \"Money for Nothing\" release?",
        options: [
          "1991",
          "1973",
          "1980",
          "1985"
        ],
        answer: 3
      },
      {
        question: "What was the first organic compound to be synthesized from inorganic compounds?",
        options: [
          "Propane",
          "Urea",
          "Formaldehyde",
          "Ethanol"
        ],
        answer: 1
      },
      {
        question: "In \"Hunter x Hunter\", which of the following is NOT a type of Nen aura?",
        options: [
          "Emission",
          "Specialization",
          "Restoration",
          "Transmutation"
        ],
        answer: 2
      },
      {
        question: "Which of these artists did NOT remix the song \"Faded\" by Alan Walker?",
        options: [
          "Tiësto",
          "Slushii",
          "Dash Berlin",
          "Skrillex"
        ],
        answer: 3
      },
      {
        question: "Akatsuki's subclass in \"Log Horizon\" is what?",
        options: [
          "Assassin",
          "Apprentice",
          " Tracker",
          "Scribe"
        ],
        answer: 2
      },
      {
        question: "The first Legoland park was opened in 1968 in which of these cities?",
        options: [
          "Winter Haven, Florida",
          "Billund, Denmark",
          "Carlsbad, California",
          "Nagoya, Japan"
        ],
        answer: 1
      },
      {
        question: "The Western Lowland Gorilla is scientifically know as?",
        options: [
          "Gorilla Beringei Beringei",
          "Gorilla Gorilla Diehli",
          "Gorilla Beringei Graueri",
          "Gorilla Gorilla Gorilla"
        ],
        answer: 3
      },
      {
        question: "Which horizon in a soil profile consists of bedrock?",
        options: [
          "O",
          "B",
          "D",
          "R"
        ],
        answer: 3
      },
      {
        question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
        options: [
          "Cross-Site Scripting",
          "Insecure Direct Object References",
          "Broken Authentication",
          "Injection "
        ],
        answer: 3
      },
      {
        question: "Who is a pioneer of \"Minimal Music\" in 1960s?",
        options: [
          "Brian Eno",
          "Sigur Rós",
          "Wolfgang Amadeus Mozart",
          "Steve Reich"
        ],
        answer: 3
      },
      {
        question: "What is the Gray Wolf's scientific name?",
        options: [
          "Canis Lupus",
          "Canis Latrans",
          "Canis Aureus",
          "Canis Lupus Lycaon"
        ],
        answer: 0
      },
      {
        question: "What is the name of the currency used in Ethiopia?",
        options: [
          "Rand",
          "Birr",
          "U.S. Dollar",
          "Dirham"
        ],
        answer: 1
      },
      {
        question: "Who invented the \"Flying Shuttle\" in 1738; one of the key developments in the industrialization of weaving?",
        options: [
          "James Hargreaves",
          "John Kay",
          "Richard Arkwright",
          "John Deere"
        ],
        answer: 1
      },
      {
        question: "The Panama Canal was officially opened by which US president?",
        options: [
          "Calvin Coolidge",
          "Theodore Roosevelt",
          "Woodrow Wilson",
          "Herbert Hoover"
        ],
        answer: 2
      },
      {
        question: "What nucleotide pairs with guanine?",
        options: [
          "Adenine",
          "Uracil",
          "Thymine",
          "Cytosine"
        ],
        answer: 3
      },
      {
        question: "Which animation studio produced \"Sword Art Online\"?",
        options: [
          "Silver Link",
          "Kyoto Animation",
          "Production I.G",
          "A-1 Pictures"
        ],
        answer: 3
      },
      {
        question: "In \"Battle Cats\", what is Moneko / MISS Moneko's critical percentage rate?",
        options: [
          "10%",
          "15%",
          "20%",
          "25%"
        ],
        answer: 1
      },
      {
        question: "In the TV show \"Rick and Morty\", Rick uses the catchphrase \"Wubba Lubba Dub Dub\", which means what in Birdperson?",
        options: [
          "I pray that my life ends soon.",
          "I am in great pain, please help me.",
          "Lets get this party started!",
          "I am suffering, please help me."
        ],
        answer: 1
      },
      {
        question: "If you planted the seeds of Quercus robur what would grow?",
        options: [
          "Flowers",
          "Grains",
          "Trees",
          "Vegtables"
        ],
        answer: 2
      },
      {
        question: "In the Seven Wonders of the World, which wonder is the only that has survived to this day?",
        options: [
          "Colossus of Rhodes",
          "Statue of Zeus at Olympia",
          "Lighthouse of Alexandria",
          "Great Pyramid of Giza"
        ],
        answer: 3
      },
      {
        question: "When was the Gregorian Calendar first adopted?",
        options: [
          "1555",
          "1582",
          "1623",
          "1501"
        ],
        answer: 1
      },
      {
        question: "Which of these anime have over 7,500 episodes?",
        options: [
          "Sazae-san",
          "One Piece",
          "Chibi Maruko-chan",
          "Naruto"
        ],
        answer: 0
      },
      {
        question: "What does the International System of Quantities refer 1024 bytes as?",
        options: [
          "Kibibyte",
          "Kylobyte",
          "Kilobyte",
          "Kelobyte"
        ],
        answer: 0
      },
      {
        question: "Nephelococcygia is the practice of doing what?",
        options: [
          "Breaking glass with your voice",
          "Sleeping with your eyes open",
          "Swimming in freezing water",
          "Finding shapes in clouds"
        ],
        answer: 3
      },
      {
        question: "Unlike on most salamanders, this part of a newt is flat?",
        options: [
          "Head",
          "Feet",
          "Tail",
          "Teeth"
        ],
        answer: 2
      },
      {
        question: "In the \"Star Wars\" universe, what species is Grand Admiral Thrawn?",
        options: [
          "Chiss",
          "Pantorans",
          "Twi'lek",
          "Gungans"
        ],
        answer: 0
      },
      {
        question: "What causes the sound of a heartbeat?",
        options: [
          "Relaxation of the heart chambers",
          "Blood exiting the heart",
          "Closure of the heart valves",
          "Contraction of the heart chambers"
        ],
        answer: 2
      },
      {
        question: "Going by the International Code of Signals, which single flag is interpreted as \"I require assistance (not distress)\"?",
        options: [
          "Delta",
          "Kilo",
          "Papa",
          "Victor"
        ],
        answer: 3
      },
      {
        question: "In \"Resident Evil 3\", how many inventory slots does Jill have at the start of the game?",
        options: [
          "12",
          "8",
          "10",
          "6"
        ],
        answer: 1
      },
      {
        question: "Where was Nicki Minaj born?",
        options: [
          "Haiti",
          "Trinidad and Tobago",
          "Saint Lucia",
          "Grenada"
        ],
        answer: 1
      },
      {
        question: "What are the names of the two \"Canon fan trolls\" in \"Homestuck\"?",
        options: [
          "Aikter Frekik and Xagrai Ollomu",
          "The Wrycrown and Voksea Olkido",
          "Grekei Ceknux and Riya Camacho",
          "Mierfa Durgas and Nektan Whelan"
        ],
        answer: 3
      },
      {
        question: "What does the scientific name of the Cambrian-Period sea creature Anomalocaris mean?",
        options: [
          "Strange Crab",
          "Anomalous Clam",
          "Deformed Fish",
          "Abnormal Shrimp"
        ],
        answer: 3
      },
      {
        question: "When was the SS or Schutzstaffel established?",
        options: [
          "April 4th, 1925",
          "September 1st, 1941",
          "February 21st, 1926",
          "March 8th, 1935"
        ],
        answer: 0
      },
      {
        question: "In the \"Archie\" comics, who was Jughead's first girlfriend?",
        options: [
          "Ethel",
          "Joani",
          "Margret",
          "Debbi"
        ],
        answer: 1
      },
      {
        question: "Who was the Author of the manga Monster Hunter Orage?",
        options: [
          "Keiichi Hikami",
          "Hirohiko Araki",
          "Shin Yamamoto",
          "Hiro Mashima"
        ],
        answer: 3
      },
      {
        question: "Which of the following computer components can be built using only NAND gates?",
        options: [
          "ALU",
          "CPU",
          "Register",
          "RAM"
        ],
        answer: 0
      },
      {
        question: "What was the real name of the Albanian national leader Skanderbeg?",
        options: [
          "Iskander Bejko",
          "Gjergj Kastrioti",
          "Mirash Krasniki",
          "Diturak Zhulati"
        ],
        answer: 1
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
          "Anasuya",
          "Maitreyi",
          "Arundhati",
          "Ahalya"
        ],
        answer: 3
      },
      {
        question: "In the Mahabharata, who was the father of Kripacharya and Kripi?",
        options: [
          "Sage Vyasa",
          "Sage Sharadvan",
          "Sage Gautama",
          "Sage Bharadwaja"
        ],
        answer: 1
      },
      {
        question: "What was the name of the elephant of Lord Indra?",
        options: [
          "Airavana",
          "Airavata",
          "Gajendra",
          "Uchchaihshravas"
        ],
        answer: 1
      },
      {
        question: "Who was the Guru of the demons (Asuras)?",
        options: [
          "Shukracharya",
          "Durvasa",
          "Brihaspati",
          "Vashistha"
        ],
        answer: 0
      },
      {
        question: "Which bird tried to prevent Ravana from carrying away Sita and lost its life?",
        options: [
          "Garuda",
          "Jatayu",
          "Hamsa",
          "Sampati"
        ],
        answer: 1
      },
      {
        question: "Who was the father of Sage Vyasa?",
        options: [
          "Sage Satyavati",
          "Sage Vashistha",
          "Sage Parashara",
          "Sage Vishwamitra"
        ],
        answer: 2
      },
      {
        question: "What is the name of the school in the anime and manga \"Gosick\"?",
        options: [
          "St. Marguerite",
          "St. Augustine",
          "St. Mary",
          "St. Bernadette"
        ],
        answer: 0
      },
      {
        question: "America Online (AOL) started out as which of these online service providers?",
        options: [
          "Prodigy",
          "CompuServe",
          "Quantum Link",
          "GEnie"
        ],
        answer: 2
      },
      {
        question: "What is the British term for a 64th note?",
        options: [
          "Semihemidemisemiquaver",
          "Demisemiquaver",
          "Semiquaver",
          "Hemidemisemiquaver"
        ],
        answer: 3
      },
      {
        question: "Toussaint Louverture led a successful slave revolt in which country?",
        options: [
          "Cuba",
          "United States",
          "France",
          "Haiti"
        ],
        answer: 3
      },
      {
        question: "\"Nephelococcygia\" is the practice of doing what?",
        options: [
          "Swimming in freezing water",
          "Breaking glass with your voice",
          "Finding shapes in clouds",
          "Sleeping with your eyes open"
        ],
        answer: 2
      },
      {
        question: "What is the scientific name for the Bald Eagle?",
        options: [
          "Tyto Alba",
          "Aquila Chrysaetos",
          "Haliaeetus Leucocephalus ",
          "Cyanocitta Cristata"
        ],
        answer: 2
      },
      {
        question: "The \"To Love-Ru\" Manga was started in what year?",
        options: [
          "2006",
          "2007",
          "2005",
          "2004"
        ],
        answer: 0
      },
      {
        question: "Which of these is a colony of polyps and not a jellyfish?",
        options: [
          "Sea Nettle",
          "Irukandji",
          "Portuguese Man-of-War",
          "Sea Wasp"
        ],
        answer: 2
      },
      {
        question: "To which language family does Kazakh belong?",
        options: [
          "Turkic",
          "Indo-European",
          "Mongolic",
          "Uralic"
        ],
        answer: 0
      },
      {
        question: "What was the release date of the first episode of \"The Powerpuff Girls\"?",
        options: [
          "July 28, 2000",
          "November 18, 1998",
          "June 25, 1999",
          "April 14, 2001"
        ],
        answer: 1
      },
      {
        question: "This Ghanaian entrepreneur is a pioneer of microlending.",
        options: [
          "Farida Bedwei",
          "Ama Ata Aido",
          "Sionne Neely",
          "Esther Afua Ocloo"
        ],
        answer: 3
      },
      {
        question: "What is the romanized Chinese word for \"airplane\"?",
        options: [
          "Qiche",
          "Feiji",
          "Huojian",
          "Zongxian"
        ],
        answer: 1
      },
      {
        question: "From 1940 to 1942, what was the capital-in-exile of Free France ?",
        options: [
          "Tunis",
          "Brazzaville",
          "Algiers",
          "Paris"
        ],
        answer: 1
      },
      {
        question: "After the 1516 Battle of Marj Dabiq, the Ottoman Empire took control of Jerusalem from which sultanate?",
        options: [
          "Ummayyad",
          "Ayyubid",
          "Seljuq",
          "Mamluk"
        ],
        answer: 3
      },
      {
        question: "Who was the last emperor of Mexico?",
        options: [
          "Ferdinand Maximilian",
          "Napoleon III",
          "Agustín de Iturbide",
          "Andrés Manuel López Obrador"
        ],
        answer: 0
      },
      {
        question: "Which of the music artists did NOT perform in the Live Aid concert in Wembley Stadium, London in 1985?",
        options: [
          "Queen",
          "The Rolling Stones",
          "David Bowie",
          "Elton John"
        ],
        answer: 1
      },
      {
        question: "Who was the first man to travel into outer space twice?",
        options: [
          "Yuri Gagarin",
          "Vladimir Komarov",
          "Gus Grissom",
          "Charles Conrad"
        ],
        answer: 2
      },
      {
        question: "How many notes are there on a standard grand piano?",
        options: [
          "88",
          "108",
          "78",
          "98"
        ],
        answer: 0
      },
      {
        question: "Which of these Indian languages is not part of the Indo-European language family?",
        options: [
          "Punjabi",
          "Hindi",
          "Urdu",
          "Tamil"
        ],
        answer: 3
      },
      {
        question: "How many members are there in the idol group \"µ's\"?",
        options: [
          "3",
          "9",
          "48",
          "6"
        ],
        answer: 1
      },
      {
        question: "In the web-comic Homestuck, what is the name of the game the 4 kids play?",
        options: [
          "Homesick",
          "Husslie",
          "Hiveswap",
          "Sburb"
        ],
        answer: 3
      },
      {
        question: "What bird is born with claws on its wing digits?",
        options: [
          "Cormorant",
          "Cassowary",
          "Hoatzin",
          "Secretary bird"
        ],
        answer: 2
      },
      {
        question: "The Battle of Hastings was fought in which year?",
        options: [
          "911",
          "1420",
          "1066",
          "1204"
        ],
        answer: 2
      },
      {
        question: "Which of these cities does NOT have a United States Minting location?",
        options: [
          "St. Louis, MO",
          "San Fransisco, CA",
          "West Point, NY",
          "Philidelphia, PA"
        ],
        answer: 0
      },
      {
        question: "Folic acid is the synthetic form of which vitamin?",
        options: [
          "Vitamin A",
          "Vitamin C",
          "Vitamin B",
          "Vitamin D"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the term for \"surgical complications resulting from surgical sponges left inside the patient's body?",
        options: [
          "Meupareunia",
          "Jentacular",
          "Gossypiboma",
          "Gongoozler"
        ],
        answer: 2
      },
      {
        question: "When was the city of Rome, Italy founded?",
        options: [
          "524 BCE",
          "697 BCE",
          "902 BCE",
          "753 BCE"
        ],
        answer: 3
      },
      {
        question: "In the Batman comics, by what other name is the villain Dr. Jonathan Crane known?",
        options: [
          "Bane",
          "Scarecrow",
          "Clayface",
          "Calendar Man"
        ],
        answer: 1
      },
      {
        question: "Which country first successfully farm-hatched and raised bluefin tuna in 1979?",
        options: [
          "USA",
          "Philippines",
          "France",
          "Japan"
        ],
        answer: 3
      },
      {
        question: "How many objects are equivalent to one mole?",
        options: [
          "6.002 x 10^22",
          "6.022 x 10^23",
          "6.002 x 10^23",
          "6.022 x 10^22"
        ],
        answer: 1
      },
      {
        question: "In \"Highschool of the Dead\", where did Komuro and Saeko establish to meet after the bus explosion?",
        options: [
          "Eastern Police Station",
          "The Center Mall",
          "On The Main Bridge",
          "Komuro's House"
        ],
        answer: 0
      },
      {
        question: "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
        options: [
          "1 Month",
          "2 Months",
          "1 Week",
          "3 Weeks"
        ],
        answer: 0
      },
      {
        question: "Which lyric is about Red Hot Chili Peppers frontman Anthony Kiedis?",
        options: [
          "\"A rainy Lithuanian / Is dancing as an Indian\"",
          "\"And I liked the dimple in your chin / Your pale blue eyes\"",
          "\"You used to be so warm and affectionate...but now you're quick to get into your regret\"",
          "\"Fly away on, my zephyr / I feel it more than ever\""
        ],
        answer: 0
      },
      {
        question: "How much radiation does a banana emit?",
        options: [
          "0.3 Microsievert",
          "0.7 Microsievert",
          "0.5 Microsievert",
          "0.1 Microsievert"
        ],
        answer: 3
      },
      {
        question: "What did Albert Einstein win the Nobel Prize for in 1921?",
        options: [
          "Wave-Particle Duality",
          "Relativity",
          "Zero-Point Energy",
          "Photoelectric Effect"
        ],
        answer: 3
      },
      {
        question: "Which of the following  British Monarchs never appeared on a circulated pound sterling coin?",
        options: [
          "Victoria",
          "Charles II",
          "George VI",
          "Edward VIII"
        ],
        answer: 3
      },
      {
        question: "Which actor has NOT portrayed Billy Flynn in the musical \"Chicago\"?",
        options: [
          "Jerry Springer",
          "David Hasselhoff",
          "Patrick Swayze",
          "Christopher Walken"
        ],
        answer: 3
      },
      {
        question: "The words \"bungalow\" and \"shampoo\" originate from the languages of which country?",
        options: [
          "Ethiopia",
          "India",
          "Papua New Guinea",
          "China"
        ],
        answer: 1
      },
      {
        question: "Which of the following liquids is least viscous? Assume temperature is 25°C.",
        options: [
          "Water",
          "Acetone",
          "Benzene",
          "Mercury"
        ],
        answer: 1
      },
      {
        question: "How many known living species of hyenas are there?",
        options: [
          "8",
          "2",
          "4",
          "6"
        ],
        answer: 2
      },
      {
        question: "Which major extinction event was caused by an asteroid collision and eliminated the majority of non-avian dinosaurs?",
        options: [
          "Cretaceous-Paleogene",
          "Triassic–Jurassic",
          "Ordovician–Silurian",
          "Permian–Triassic"
        ],
        answer: 0
      },
      {
        question: "How long did the Warsaw Uprising during World War II last?",
        options: [
          "55 Days",
          "63 Days",
          "20 Days",
          "224 Days"
        ],
        answer: 1
      },
      {
        question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
        options: [
          "Construct",
          "Torque 2D",
          "Game Maker",
          "Stencyl"
        ],
        answer: 2
      },
      {
        question: "What micro-state is considered to have the oldest constitution still in effect?",
        options: [
          "Saint Kitts and Nevis",
          "San Marino",
          "Andorra",
          "Monaco"
        ],
        answer: 1
      },
      {
        question: "Which of the following films was Don Bluth both the writer, director, and producer for?",
        options: [
          "Anastasia",
          "All Dogs Go To Heaven",
          "The Land Before Time",
          "Titan A.E."
        ],
        answer: 1
      },
      {
        question: "Which of the following physical typologies are used with Ethernet Networks?",
        options: [
          "Mesh",
          "Star",
          "Hex",
          "Ring"
        ],
        answer: 1
      },
      {
        question: "Which of the following physicists did NOT work on the Manhattan project?",
        options: [
          "J. Robert Oppenheimer",
          "John Von-Neumann",
          "Richard Feynman",
          "Murray Gell-Mann"
        ],
        answer: 3
      },
      {
        question: "A Caixa Malacacheta is what kind of musical instrument which is commonly used in Latin American music?",
        options: [
          "Maraca",
          "Cow Bell",
          "Bass Drum",
          "Snare Drum"
        ],
        answer: 3
      },
      {
        question: "What song originally performed by The Bee Gees in 1978 had a cover version by Steps 20 years later?",
        options: [
          "Night Fever",
          "Tragedy",
          "Stayin' Alive",
          "You Should Be Dancing"
        ],
        answer: 1
      },
      {
        question: "In 1978, Superman teamed up with what celebrity, to defeat an alien invasion?",
        options: [
          "Muhammad Ali",
          "Mike Tyson",
          "Sylvester Stallone",
          "Arnold Schwarzenegger"
        ],
        answer: 0
      },
      {
        question: "In the superhero anime, \"One Punch Man\", what is the main protagonist's Hero name?",
        options: [
          "Mad Boxer",
          "Justice Puncher",
          "Caped Baldy",
          "Strong Fist"
        ],
        answer: 2
      },
      {
        question: "How many calories are in a 355 ml can of Pepsi Cola?",
        options: [
          "155",
          "100",
          "150",
          "200"
        ],
        answer: 2
      },
      {
        question: "What is the collective noun for vultures?",
        options: [
          "Building",
          "Wake",
          "Ambush",
          "Gaze"
        ],
        answer: 1
      },
      {
        question: "What year was the RoboSapien toy robot released?",
        options: [
          "2000",
          "2004",
          "2006",
          "2001"
        ],
        answer: 1
      },
      {
        question: "List the following Iranic empires in chronological order:",
        options: [
          "Achaemenid, Median, Sassanid, Parthian",
          "Median, Achaemenid, Sassanid, Parthian",
          "Median, Achaemenid, Parthian, Sassanid",
          "Achaemenid, Median, Parthian, Sassanid"
        ],
        answer: 2
      },
      {
        question: "The Bohemian Revolt (1618-1620) started after Protestants in Prague did what to their Catholic Lords Regents?",
        options: [
          "Threw them out of a window",
          "Locked them in stockades",
          "Insulted their mothers",
          "Hung them."
        ],
        answer: 0
      },
      {
        question: "What was the name of the first Bulgarian personal computer?",
        options: [
          "IZOT 1030",
          "IMKO-1",
          "Pravetz 8D",
          "Pravetz 82"
        ],
        answer: 1
      },
      {
        question: "In the anime, Full Metal Panic!, who is Kaname's best friend?",
        options: [
          "Melissa Mao",
          "Ren Mikihara",
          "Kyoko Tokiwa",
          "Teletha \"Tessa\" Testarossa"
        ],
        answer: 2
      },
      {
        question: "Who invented the \"Spanning Tree Protocol\"?",
        options: [
          "Michael Roberts",
          "Radia Perlman",
          "Vint Cerf",
          "Paul Vixie"
        ],
        answer: 1
      },
      {
        question: "Which is the hull NO. of the Fletcher class destroyer Fletcher?",
        options: [
          "DD-446",
          "DD-445",
          "DD-444",
          "DD-992"
        ],
        answer: 1
      },
      {
        question: "On the Beaufort Scale of wind force, what wind name is given to number 8?",
        options: [
          "Gale",
          "Storm",
          "Breeze",
          "Hurricane"
        ],
        answer: 0
      },
      {
        question: "Townsend Coleman provided the voice for which turtle in the original 1987 series of \"Teenage Mutant Ninja Turtles\"?",
        options: [
          "Raphael",
          "Leonardo",
          "Michelangelo",
          "Donatello"
        ],
        answer: 2
      },
      {
        question: "The key of sharps does the key of G# minor contain?",
        options: [
          "3",
          "0",
          "7",
          "5"
        ],
        answer: 3
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
        question: "How many bones are there in an adult human body?",
        options: [
          "206",
          "300",
          "180",
          "208"
        ],
        answer: 0
      },
      {
        question: "What is the normal body temperature of a healthy human in Fahrenheit?",
        options: [
          "99.6°F",
          "96.6°F",
          "97.6°F",
          "98.6°F"
        ],
        answer: 3
      },
      {
        question: "How many chambers are there in a human heart?",
        options: [
          "4",
          "3",
          "2",
          "6"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 60 + 40 = ?",
        options: [
          "100",
          "98",
          "90",
          "110"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 58 - 13 = ?",
        options: [
          "47",
          "45",
          "44",
          "40"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 54 + 33 = ?",
        options: [
          "97",
          "87",
          "88",
          "86"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 29 + 26 = ?",
        options: [
          "58",
          "54",
          "59",
          "55"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 27 - 14 = ?",
        options: [
          "11",
          "18",
          "23",
          "13"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 + 72 = ?",
        options: [
          "84",
          "83",
          "81",
          "85"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 84 - 22 = ?",
        options: [
          "52",
          "63",
          "62",
          "72"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 80 - 20 = ?",
        options: [
          "59",
          "61",
          "70",
          "60"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 90 + 28 = ?",
        options: [
          "118",
          "120",
          "108",
          "115"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 42 - 26 = ?",
        options: [
          "18",
          "17",
          "14",
          "16"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 33 + 19 = ?",
        options: [
          "52",
          "50",
          "49",
          "53"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 89 - 41 = ?",
        options: [
          "48",
          "46",
          "49",
          "38"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 73 - 11 = ?",
        options: [
          "63",
          "62",
          "72",
          "64"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 90 + 59 = ?",
        options: [
          "159",
          "149",
          "147",
          "151"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 66 - 44 = ?",
        options: [
          "19",
          "12",
          "21",
          "22"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 63 - 46 = ?",
        options: [
          "15",
          "17",
          "13",
          "14"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 66 - 16 = ?",
        options: [
          "53",
          "49",
          "40",
          "50"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 87 - 53 = ?",
        options: [
          "44",
          "24",
          "34",
          "32"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 47 - 27 = ?",
        options: [
          "21",
          "20",
          "24",
          "22"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 80 - 76 = ?",
        options: [
          "2",
          "4",
          "5",
          "6"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 19 + 41 = ?",
        options: [
          "62",
          "60",
          "55",
          "59"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 42 - 20 = ?",
        options: [
          "12",
          "20",
          "18",
          "22"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 94 + 95 = ?",
        options: [
          "187",
          "189",
          "179",
          "191"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 42 + 12 = ?",
        options: [
          "53",
          "54",
          "64",
          "52"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 66 + 52 = ?",
        options: [
          "118",
          "117",
          "120",
          "116"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 47 - 16 = ?",
        options: [
          "32",
          "29",
          "30",
          "31"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 22 - 12 = ?",
        options: [
          "12",
          "10",
          "8",
          "20"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 29 - 18 = ?",
        options: [
          "11",
          "1",
          "21",
          "9"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 34 + 33 = ?",
        options: [
          "67",
          "68",
          "69",
          "72"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 19 + 18 = ?",
        options: [
          "37",
          "47",
          "42",
          "27"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 58 + 29 = ?",
        options: [
          "77",
          "85",
          "87",
          "89"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 58 + 78 = ?",
        options: [
          "137",
          "126",
          "134",
          "136"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 82 - 14 = ?",
        options: [
          "68",
          "69",
          "70",
          "58"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 20 - 17 = ?",
        options: [
          "2",
          "4",
          "3",
          "5"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 33 + 83 = ?",
        options: [
          "116",
          "114",
          "118",
          "117"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 97 - 61 = ?",
        options: [
          "34",
          "36",
          "26",
          "40"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 91 - 16 = ?",
        options: [
          "74",
          "80",
          "73",
          "75"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 24 - 16 = ?",
        options: [
          "10",
          "7",
          "8",
          "6"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 53 - 13 = ?",
        options: [
          "39",
          "38",
          "40",
          "42"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 17 + 41 = ?",
        options: [
          "58",
          "60",
          "55",
          "59"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 23 + 37 = ?",
        options: [
          "58",
          "50",
          "62",
          "60"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 94 + 35 = ?",
        options: [
          "127",
          "131",
          "130",
          "129"
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
          "Mg",
          "H",
          "Ca",
          "N"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Helium?",
        options: [
          "Ag",
          "He",
          "Ca",
          "Be"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Lithium?",
        options: [
          "Cl",
          "Ne",
          "Li",
          "S"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Beryllium?",
        options: [
          "Be",
          "Al",
          "Au",
          "Li"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Boron?",
        options: [
          "B",
          "Ca",
          "Ar",
          "O"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Carbon?",
        options: [
          "P",
          "Al",
          "Au",
          "C"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Nitrogen?",
        options: [
          "N",
          "P",
          "Au",
          "H"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Oxygen?",
        options: [
          "Au",
          "Ca",
          "K",
          "O"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Fluorine?",
        options: [
          "P",
          "N",
          "Li",
          "F"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Neon?",
        options: [
          "Ne",
          "N",
          "Ar",
          "B"
        ],
        answer: 0
      },
      {
        question: "Which is the largest organ in the human body?",
        options: [
          "Liver",
          "Lungs",
          "Brain",
          "Skin"
        ],
        answer: 3
      },
      {
        question: "Which blood cells are responsible for fighting infections?",
        options: [
          "Plasma",
          "White Blood Cells",
          "Platelets",
          "Red Blood Cells"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 31 - 19 = ?",
        options: [
          "12",
          "13",
          "14",
          "11"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 80 - 74 = ?",
        options: [
          "5",
          "8",
          "6",
          "16"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 8 * 8 = ?",
        options: [
          "63",
          "74",
          "66",
          "64"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 * 9 = ?",
        options: [
          "99",
          "96",
          "98",
          "100"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 9 * 5 = ?",
        options: [
          "35",
          "55",
          "43",
          "45"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 54 - 39 = ?",
        options: [
          "16",
          "17",
          "15",
          "13"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 8 * 3 = ?",
        options: [
          "34",
          "22",
          "25",
          "24"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 10 * 6 = ?",
        options: [
          "61",
          "60",
          "70",
          "65"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 60 + 71 = ?",
        options: [
          "129",
          "131",
          "141",
          "133"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 5 * 9 = ?",
        options: [
          "44",
          "55",
          "47",
          "45"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 55 - 52 = ?",
        options: [
          "2",
          "13",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 75 + 36 = ?",
        options: [
          "111",
          "112",
          "113",
          "110"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 4 * 7 = ?",
        options: [
          "27",
          "29",
          "26",
          "28"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 82 + 29 = ?",
        options: [
          "108",
          "111",
          "121",
          "113"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 63 - 23 = ?",
        options: [
          "40",
          "50",
          "39",
          "41"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 9 * 8 = ?",
        options: [
          "71",
          "62",
          "72",
          "70"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 12 * 3 = ?",
        options: [
          "37",
          "26",
          "36",
          "35"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 86 + 29 = ?",
        options: [
          "113",
          "105",
          "115",
          "117"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 39 + 41 = ?",
        options: [
          "79",
          "81",
          "82",
          "80"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 12 * 12 = ?",
        options: [
          "134",
          "144",
          "146",
          "142"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 29 - 16 = ?",
        options: [
          "12",
          "14",
          "13",
          "23"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 5 * 8 = ?",
        options: [
          "38",
          "40",
          "30",
          "41"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 9 * 11 = ?",
        options: [
          "101",
          "99",
          "98",
          "109"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 12 = ?",
        options: [
          "46",
          "36",
          "38",
          "34"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 79 + 32 = ?",
        options: [
          "113",
          "112",
          "111",
          "107"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 12 + 44 = ?",
        options: [
          "52",
          "57",
          "56",
          "55"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 61 - 33 = ?",
        options: [
          "38",
          "28",
          "26",
          "30"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 5 * 3 = ?",
        options: [
          "17",
          "15",
          "14",
          "25"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 28 - 22 = ?",
        options: [
          "5",
          "6",
          "4",
          "16"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 69 - 33 = ?",
        options: [
          "38",
          "31",
          "36",
          "35"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 81 - 25 = ?",
        options: [
          "58",
          "66",
          "56",
          "57"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 37 + 45 = ?",
        options: [
          "79",
          "83",
          "72",
          "82"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 22 - 20 = ?",
        options: [
          "1",
          "12",
          "2",
          "7"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 62 + 76 = ?",
        options: [
          "128",
          "138",
          "148",
          "140"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 81 - 14 = ?",
        options: [
          "69",
          "71",
          "77",
          "67"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 43 + 99 = ?",
        options: [
          "142",
          "152",
          "143",
          "140"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 7 * 7 = ?",
        options: [
          "47",
          "50",
          "49",
          "51"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 49 + 37 = ?",
        options: [
          "96",
          "88",
          "86",
          "85"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 6 * 4 = ?",
        options: [
          "24",
          "34",
          "25",
          "23"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 5 * 6 = ?",
        options: [
          "32",
          "30",
          "40",
          "31"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 9 = ?",
        options: [
          "63",
          "73",
          "65",
          "53"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 43 + 53 = ?",
        options: [
          "106",
          "97",
          "86",
          "96"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 79 + 16 = ?",
        options: [
          "105",
          "93",
          "97",
          "95"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 38 - 22 = ?",
        options: [
          "18",
          "26",
          "16",
          "15"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 77 + 13 = ?",
        options: [
          "92",
          "88",
          "80",
          "90"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 80 - 66 = ?",
        options: [
          "4",
          "14",
          "12",
          "13"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 8 = ?",
        options: [
          "46",
          "53",
          "56",
          "58"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 8 * 7 = ?",
        options: [
          "56",
          "57",
          "54",
          "52"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 25 + 51 = ?",
        options: [
          "74",
          "77",
          "76",
          "86"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 37 - 19 = ?",
        options: [
          "20",
          "18",
          "8",
          "16"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 73 - 40 = ?",
        options: [
          "23",
          "33",
          "31",
          "43"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 29 - 12 = ?",
        options: [
          "7",
          "21",
          "27",
          "17"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 49 + 63 = ?",
        options: [
          "112",
          "113",
          "115",
          "110"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 45 + 28 = ?",
        options: [
          "83",
          "72",
          "63",
          "73"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 10 + 93 = ?",
        options: [
          "103",
          "105",
          "113",
          "102"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 12 * 11 = ?",
        options: [
          "132",
          "122",
          "131",
          "130"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 84 - 48 = ?",
        options: [
          "36",
          "46",
          "37",
          "35"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 66 + 28 = ?",
        options: [
          "95",
          "94",
          "104",
          "84"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 62 + 11 = ?",
        options: [
          "83",
          "63",
          "75",
          "73"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 42 - 37 = ?",
        options: [
          "6",
          "5",
          "8",
          "3"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 3 = ?",
        options: [
          "8",
          "9",
          "13",
          "11"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 65 + 22 = ?",
        options: [
          "87",
          "89",
          "86",
          "88"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 92 + 37 = ?",
        options: [
          "131",
          "127",
          "139",
          "129"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 66 + 25 = ?",
        options: [
          "101",
          "92",
          "90",
          "91"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 40 - 19 = ?",
        options: [
          "21",
          "23",
          "20",
          "31"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 34 - 13 = ?",
        options: [
          "31",
          "11",
          "21",
          "23"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 71 + 73 = ?",
        options: [
          "134",
          "145",
          "143",
          "144"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 57 - 41 = ?",
        options: [
          "18",
          "14",
          "16",
          "17"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 86 + 49 = ?",
        options: [
          "133",
          "125",
          "135",
          "130"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 90 + 18 = ?",
        options: [
          "110",
          "107",
          "108",
          "109"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 80 + 17 = ?",
        options: [
          "97",
          "98",
          "107",
          "99"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 87 - 21 = ?",
        options: [
          "67",
          "65",
          "66",
          "64"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 28 - 11 = ?",
        options: [
          "27",
          "21",
          "18",
          "17"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 37 - 12 = ?",
        options: [
          "35",
          "23",
          "25",
          "26"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 36 - 35 = ?",
        options: [
          "11",
          "2",
          "3",
          "1"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 89 + 26 = ?",
        options: [
          "114",
          "125",
          "115",
          "113"
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
        question: "Which is the smallest bone in the human body?",
        options: [
          "Clavicle",
          "Stapes (Ear bone)",
          "Femur",
          "Patella"
        ],
        answer: 1
      },
      {
        question: "What is the main pigment that gives human skin and hair its color?",
        options: [
          "Carotene",
          "Chlorophyll",
          "Melanin",
          "Hemoglobin"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 66 - 48 = ?",
        options: [
          "17",
          "16",
          "8",
          "18"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 9 = ?",
        options: [
          "82",
          "71",
          "72",
          "70"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 9 * 3 = ?",
        options: [
          "17",
          "25",
          "27",
          "37"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 95 + 67 = ?",
        options: [
          "152",
          "162",
          "164",
          "159"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 12 + 39 = ?",
        options: [
          "51",
          "61",
          "49",
          "50"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 3 * 7 = ?",
        options: [
          "11",
          "21",
          "20",
          "18"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 8 * 10 = ?",
        options: [
          "80",
          "78",
          "79",
          "82"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 39 + 84 = ?",
        options: [
          "123",
          "113",
          "122",
          "124"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 3 * 11 = ?",
        options: [
          "34",
          "33",
          "43",
          "32"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 86 + 61 = ?",
        options: [
          "157",
          "149",
          "137",
          "147"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 13 + 69 = ?",
        options: [
          "81",
          "80",
          "82",
          "92"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 32 - 16 = ?",
        options: [
          "15",
          "14",
          "6",
          "16"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 90 + 39 = ?",
        options: [
          "139",
          "132",
          "129",
          "131"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 12 + 59 = ?",
        options: [
          "70",
          "71",
          "73",
          "81"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 45 - 30 = ?",
        options: [
          "19",
          "17",
          "16",
          "15"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 + 87 = ?",
        options: [
          "88",
          "108",
          "96",
          "98"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 92 + 51 = ?",
        options: [
          "153",
          "143",
          "142",
          "144"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 8 = ?",
        options: [
          "22",
          "29",
          "26",
          "24"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 70 - 45 = ?",
        options: [
          "25",
          "26",
          "35",
          "22"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 74 + 33 = ?",
        options: [
          "107",
          "106",
          "108",
          "117"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 25 + 12 = ?",
        options: [
          "47",
          "39",
          "37",
          "35"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 24 + 35 = ?",
        options: [
          "59",
          "58",
          "54",
          "57"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 50 - 48 = ?",
        options: [
          "2",
          "12",
          "4",
          "3"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 8 * 12 = ?",
        options: [
          "96",
          "101",
          "97",
          "95"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 20 - 19 = ?",
        options: [
          "3",
          "11",
          "1",
          "2"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 92 - 38 = ?",
        options: [
          "55",
          "59",
          "56",
          "54"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 33 - 22 = ?",
        options: [
          "21",
          "11",
          "9",
          "10"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 9 = ?",
        options: [
          "54",
          "52",
          "64",
          "56"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 53 + 63 = ?",
        options: [
          "115",
          "116",
          "126",
          "106"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 12 + 14 = ?",
        options: [
          "26",
          "24",
          "25",
          "16"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 82 - 74 = ?",
        options: [
          "6",
          "10",
          "8",
          "18"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 23 - 13 = ?",
        options: [
          "8",
          "11",
          "20",
          "10"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 72 + 46 = ?",
        options: [
          "117",
          "120",
          "116",
          "118"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 42 - 36 = ?",
        options: [
          "7",
          "6",
          "9",
          "16"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 6 * 6 = ?",
        options: [
          "35",
          "38",
          "36",
          "37"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 45 - 37 = ?",
        options: [
          "7",
          "9",
          "10",
          "8"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 4 * 11 = ?",
        options: [
          "54",
          "43",
          "47",
          "44"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 57 + 27 = ?",
        options: [
          "87",
          "84",
          "94",
          "86"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 31 + 93 = ?",
        options: [
          "123",
          "124",
          "120",
          "125"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 50 - 47 = ?",
        options: [
          "13",
          "2",
          "3",
          "5"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 83 - 69 = ?",
        options: [
          "14",
          "11",
          "12",
          "16"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 33 - 23 = ?",
        options: [
          "12",
          "8",
          "9",
          "10"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 91 + 48 = ?",
        options: [
          "149",
          "139",
          "141",
          "136"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 10 * 3 = ?",
        options: [
          "32",
          "30",
          "20",
          "40"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 40 - 31 = ?",
        options: [
          "13",
          "9",
          "8",
          "10"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 12 * 6 = ?",
        options: [
          "62",
          "71",
          "72",
          "74"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 43 + 36 = ?",
        options: [
          "78",
          "79",
          "81",
          "80"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 12 = ?",
        options: [
          "87",
          "82",
          "84",
          "85"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 65 + 34 = ?",
        options: [
          "101",
          "98",
          "99",
          "89"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 4 * 10 = ?",
        options: [
          "39",
          "50",
          "40",
          "42"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 51 + 61 = ?",
        options: [
          "110",
          "114",
          "113",
          "112"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 66 - 37 = ?",
        options: [
          "27",
          "29",
          "31",
          "30"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 38 - 31 = ?",
        options: [
          "17",
          "7",
          "4",
          "5"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 39 - 19 = ?",
        options: [
          "10",
          "30",
          "20",
          "21"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 12 + 92 = ?",
        options: [
          "102",
          "106",
          "104",
          "105"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 11 * 7 = ?",
        options: [
          "76",
          "67",
          "79",
          "77"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 10 + 24 = ?",
        options: [
          "36",
          "34",
          "24",
          "44"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 25 + 18 = ?",
        options: [
          "33",
          "41",
          "42",
          "43"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 30 + 63 = ?",
        options: [
          "94",
          "83",
          "103",
          "93"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 45 + 35 = ?",
        options: [
          "81",
          "80",
          "78",
          "77"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 7 * 5 = ?",
        options: [
          "25",
          "30",
          "35",
          "36"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 35 - 10 = ?",
        options: [
          "35",
          "25",
          "15",
          "26"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 27 + 79 = ?",
        options: [
          "96",
          "105",
          "107",
          "106"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 * 10 = ?",
        options: [
          "120",
          "110",
          "112",
          "111"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 43 - 10 = ?",
        options: [
          "35",
          "33",
          "31",
          "43"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 66 - 38 = ?",
        options: [
          "18",
          "27",
          "30",
          "28"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 * 3 = ?",
        options: [
          "31",
          "32",
          "33",
          "23"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 34 + 14 = ?",
        options: [
          "58",
          "38",
          "48",
          "49"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 74 - 10 = ?",
        options: [
          "74",
          "62",
          "68",
          "64"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 42 - 41 = ?",
        options: [
          "2",
          "1",
          "11",
          "3"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 43 + 81 = ?",
        options: [
          "124",
          "122",
          "123",
          "126"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 39 - 35 = ?",
        options: [
          "6",
          "2",
          "3",
          "4"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 85 - 18 = ?",
        options: [
          "67",
          "66",
          "57",
          "68"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 77 - 26 = ?",
        options: [
          "49",
          "52",
          "61",
          "51"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 4 * 8 = ?",
        options: [
          "32",
          "42",
          "30",
          "33"
        ],
        answer: 0
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
          "F",
          "Na",
          "Cu",
          "Cl"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Magnesium?",
        options: [
          "U",
          "Zn",
          "Mg",
          "H"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Aluminum?",
        options: [
          "H",
          "Ag",
          "Ne",
          "Al"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Silicon?",
        options: [
          "S",
          "Cu",
          "Si",
          "Cl"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Phosphorus?",
        options: [
          "Al",
          "U",
          "F",
          "P"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Sulfur?",
        options: [
          "S",
          "Na",
          "P",
          "Hg"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Chlorine?",
        options: [
          "U",
          "Al",
          "Cl",
          "Ar"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Argon?",
        options: [
          "Hg",
          "Al",
          "Ar",
          "C"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Potassium?",
        options: [
          "K",
          "Ar",
          "P",
          "S"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Calcium?",
        options: [
          "Ca",
          "Ag",
          "Fe",
          "Pb"
        ],
        answer: 0
      },
      {
        question: "What is the chemical symbol for the element Iron?",
        options: [
          "H",
          "C",
          "Ne",
          "Fe"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Copper?",
        options: [
          "N",
          "S",
          "Cu",
          "Fe"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Zinc?",
        options: [
          "Zn",
          "Au",
          "U",
          "Cl"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula representing the compound 'Carbon Dioxide'?",
        options: [
          "O2",
          "CO2",
          "CH4",
          "CO"
        ],
        answer: 1
      },
      {
        question: "What is the chemical formula representing the compound 'Common Salt'?",
        options: [
          "KCl",
          "HCl",
          "NaOH",
          "NaCl"
        ],
        answer: 3
      },
      {
        question: "What is the chemical formula representing the compound 'Laughing Gas'?",
        options: [
          "Sulfur Dioxide",
          "Nitrogen Dioxide",
          "Nitrous Oxide",
          "Nitric Oxide"
        ],
        answer: 2
      },
      {
        question: "Which gas do humans inhale most from the air, by volume?",
        options: [
          "Argon",
          "Nitrogen",
          "Oxygen",
          "Carbon Dioxide"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 4 * 4 = ?",
        options: [
          "6",
          "16",
          "19",
          "20"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 5 = ?",
        options: [
          "13",
          "25",
          "15",
          "17"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 4 * 5 = ?",
        options: [
          "20",
          "19",
          "21",
          "18"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 3 * 6 = ?",
        options: [
          "17",
          "20",
          "18",
          "19"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 6 * 8 = ?",
        options: [
          "46",
          "48",
          "38",
          "58"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 10 * 7 = ?",
        options: [
          "70",
          "72",
          "69",
          "68"
        ],
        answer: 0
      },
      {
        question: "Solve the following mathematical equation: 4 * 6 = ?",
        options: [
          "14",
          "22",
          "27",
          "24"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 11 * 12 = ?",
        options: [
          "137",
          "130",
          "132",
          "142"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 5 * 5 = ?",
        options: [
          "35",
          "24",
          "25",
          "23"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 8 * 6 = ?",
        options: [
          "46",
          "49",
          "48",
          "47"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 3 * 9 = ?",
        options: [
          "17",
          "27",
          "28",
          "29"
        ],
        answer: 1
      },
      {
        question: "Solve the following mathematical equation: 3 * 4 = ?",
        options: [
          "14",
          "13",
          "12",
          "2"
        ],
        answer: 2
      },
      {
        question: "Solve the following mathematical equation: 7 * 4 = ?",
        options: [
          "26",
          "23",
          "27",
          "28"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 7 * 6 = ?",
        options: [
          "40",
          "52",
          "32",
          "42"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 8 * 11 = ?",
        options: [
          "86",
          "78",
          "85",
          "88"
        ],
        answer: 3
      },
      {
        question: "Solve the following mathematical equation: 4 * 9 = ?",
        options: [
          "36",
          "37",
          "34",
          "26"
        ],
        answer: 0
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
        question: "What is the SI unit of measurement for Frequency?",
        options: [
          "Newton",
          "Joule",
          "Hertz",
          "Pascal"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula representing the compound 'Hydrochloric Acid'?",
        options: [
          "H2SO4",
          "NaCl",
          "HNO3",
          "HCl"
        ],
        answer: 3
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
        question: "What is the atomic number of the chemical element Hydrogen?",
        options: [
          "12",
          "26",
          "1",
          "79"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Helium?",
        options: [
          "2",
          "29",
          "18",
          "11"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Lithium?",
        options: [
          "19",
          "3",
          "6",
          "18"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Beryllium?",
        options: [
          "11",
          "1",
          "6",
          "4"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Boron?",
        options: [
          "20",
          "9",
          "13",
          "5"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Carbon?",
        options: [
          "30",
          "47",
          "18",
          "6"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Nitrogen?",
        options: [
          "47",
          "17",
          "7",
          "9"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Oxygen?",
        options: [
          "8",
          "12",
          "13",
          "26"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Fluorine?",
        options: [
          "2",
          "92",
          "9",
          "6"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Neon?",
        options: [
          "8",
          "10",
          "30",
          "6"
        ],
        answer: 1
      },
      {
        question: "What is the SI unit of measurement for Energy?",
        options: [
          "Ohm",
          "Ampere",
          "Weber",
          "Joule"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Electric Potential?",
        options: [
          "Volt",
          "Pascal",
          "Ohm",
          "Hertz"
        ],
        answer: 0
      },
      {
        question: "What is the SI unit of measurement for Luminous Intensity?",
        options: [
          "Candela",
          "Newton",
          "Ampere",
          "Pascal"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula representing the compound 'Ammonia'?",
        options: [
          "HNO3",
          "N2H4",
          "NO2",
          "NH3"
        ],
        answer: 3
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
        question: "What is the chemical symbol for the element Silver?",
        options: [
          "Be",
          "P",
          "Si",
          "Ag"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Gold?",
        options: [
          "Ar",
          "C",
          "Au",
          "S"
        ],
        answer: 2
      },
      {
        question: "What is the chemical symbol for the element Mercury?",
        options: [
          "Fe",
          "Li",
          "Ne",
          "Hg"
        ],
        answer: 3
      },
      {
        question: "What is the chemical symbol for the element Lead?",
        options: [
          "O",
          "Pb",
          "Hg",
          "H"
        ],
        answer: 1
      },
      {
        question: "What is the chemical symbol for the element Uranium?",
        options: [
          "U",
          "B",
          "H",
          "Li"
        ],
        answer: 0
      },
      {
        question: "What is the SI unit of measurement for Force?",
        options: [
          "Ampere",
          "Weber",
          "Newton",
          "Joule"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula representing the compound 'Water'?",
        options: [
          "CO2",
          "H2O",
          "H2O2",
          "NaCl"
        ],
        answer: 1
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
        question: "What is the SI unit of measurement for Atmospheric Pressure?",
        options: [
          "Pascal",
          "Volt",
          "Ohm",
          "Hertz"
        ],
        answer: 0
      },
      {
        question: "What is the chemical formula representing the compound 'Dry Ice'?",
        options: [
          "Water Ice",
          "Liquid Nitrogen",
          "Solid Carbon Dioxide",
          "Solid Methane"
        ],
        answer: 2
      },
      {
        question: "What type of angle is greater than 90°?",
        options: [
          "Straight",
          "Acute",
          "Obtuse",
          "Right"
        ],
        answer: 2
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
        question: "What is the atomic number of the chemical element Sodium?",
        options: [
          "3",
          "13",
          "11",
          "19"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Magnesium?",
        options: [
          "13",
          "12",
          "82",
          "15"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Aluminum?",
        options: [
          "17",
          "13",
          "14",
          "3"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Silicon?",
        options: [
          "4",
          "14",
          "79",
          "5"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Phosphorus?",
        options: [
          "14",
          "2",
          "9",
          "15"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Sulfur?",
        options: [
          "19",
          "8",
          "16",
          "82"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Chlorine?",
        options: [
          "8",
          "17",
          "29",
          "16"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Argon?",
        options: [
          "17",
          "92",
          "30",
          "18"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Potassium?",
        options: [
          "20",
          "14",
          "19",
          "30"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Calcium?",
        options: [
          "16",
          "20",
          "26",
          "1"
        ],
        answer: 1
      },
      {
        question: "What is the atomic number of the chemical element Iron?",
        options: [
          "16",
          "7",
          "30",
          "26"
        ],
        answer: 3
      },
      {
        question: "What is the atomic number of the chemical element Copper?",
        options: [
          "14",
          "1",
          "29",
          "4"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Zinc?",
        options: [
          "8",
          "3",
          "92",
          "30"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Electric Current?",
        options: [
          "Pascal",
          "Ampere",
          "Hertz",
          "Weber"
        ],
        answer: 1
      },
      {
        question: "What is the chemical formula representing the compound 'Methane'?",
        options: [
          "C2H6",
          "CH4",
          "NH3",
          "CO2"
        ],
        answer: 1
      },
      {
        question: "What is the chemical formula representing the compound 'Sulfuric Acid'?",
        options: [
          "HNO3",
          "HCl",
          "H2SO4",
          "H2SO3"
        ],
        answer: 2
      },
      {
        question: "What is the chemical formula representing the compound 'Baking Soda'?",
        options: [
          "Sodium Bicarbonate",
          "Sodium Hydroxide",
          "Sodium Chloride",
          "Sodium Carbonate"
        ],
        answer: 0
      },
      {
        question: "What comes after a Million, a Billion, and a Trillion?",
        options: [
          "Sextillion",
          "Quadrillion",
          "Septillion",
          "Quintillion"
        ],
        answer: 1
      },
      {
        question: "What's the square root of 49?",
        options: [
          "4",
          "9",
          "12",
          "7"
        ],
        answer: 3
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
        question: "What is the SI unit of measurement for Power?",
        options: [
          "Hertz",
          "Candela",
          "Newton",
          "Watt"
        ],
        answer: 3
      },
      {
        question: "What is the SI unit of measurement for Electric Resistance?",
        options: [
          "Pascal",
          "Volt",
          "Ohm",
          "Joule"
        ],
        answer: 2
      },
      {
        question: "What is the SI unit of measurement for Magnetic Flux?",
        options: [
          "Newton",
          "Weber",
          "Candela",
          "Watt"
        ],
        answer: 1
      },
      {
        question: "In Roman Numerals, what does XL equate to?",
        options: [
          "90",
          "60",
          "15",
          "40"
        ],
        answer: 3
      },
      {
        question: "What is the equation for the area of a sphere?",
        options: [
          "πr^4",
          "4πr^2",
          "(1/3)πhr^2",
          "(4/3)πr^3"
        ],
        answer: 3
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
        question: "What is the Roman numeral for 500?",
        options: [
          "D",
          "C",
          "L",
          "X"
        ],
        answer: 0
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
        question: "What Greek letter is used to signify summation?",
        options: [
          "Delta",
          "Alpha",
          "Omega",
          "Sigma"
        ],
        answer: 3
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
        question: "What is the atomic number of the chemical element Silver?",
        options: [
          "6",
          "7",
          "47",
          "16"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Gold?",
        options: [
          "79",
          "1",
          "15",
          "20"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Mercury?",
        options: [
          "80",
          "26",
          "14",
          "18"
        ],
        answer: 0
      },
      {
        question: "What is the atomic number of the chemical element Lead?",
        options: [
          "29",
          "20",
          "82",
          "16"
        ],
        answer: 2
      },
      {
        question: "What is the atomic number of the chemical element Uranium?",
        options: [
          "30",
          "92",
          "1",
          "8"
        ],
        answer: 1
      },
      {
        question: "In a normal distribution, 95% of the data lies within how many standard deviations of the mean?",
        options: [
          "3",
          "1",
          "2",
          "4"
        ],
        answer: 2
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
      },
      {
        question: "What is the derivative of sin(x)",
        options: [
          "-sin(x)",
          "-cos(x)",
          "csc(x)",
          "cos(x)"
        ],
        answer: 3
      },
      {
        question: "In the complex plane, multiplying a given function by i rotates it anti-clockwise by how many degrees?",
        options: [
          "90",
          "270",
          "0",
          "180"
        ],
        answer: 0
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
        question: "What is the plane curve proposed by Descartes to challenge Fermat's extremum-finding techniques called?",
        options: [
          "Cartesian Coordinates",
          "Elliptic Paraboloid of Descartes",
          "Descarte's Helicoid",
          "Folium of Descartes"
        ],
        answer: 3
      },
      {
        question: "The French mathematician Évariste Galois is primarily known for his work in which?",
        options: [
          "Galois' Method for PDE's ",
          "Abelian Integration",
          "Galois Theory",
          "Galois' Continued Fractions"
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
          "10",
          "9",
          "11",
          "12"
        ],
        answer: 2
      },
      {
        question: "What color belt represents the highest degree in standard Taekwondo?",
        options: [
          "Black",
          "Red",
          "Blue",
          "Gold"
        ],
        answer: 0
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
        question: "Who won the first season of the Indian Premier League (IPL) in 2008?",
        options: [
          "Mumbai Indians",
          "Rajasthan Royals",
          "Delhi Daredevils",
          "Chennai Super Kings"
        ],
        answer: 1
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
          "Australia",
          "West Indies",
          "England",
          "India"
        ],
        answer: 1
      },
      {
        question: "Which stadium is known as the 'Mecca of Cricket'?",
        options: [
          "Melbourne Cricket Ground",
          "The Oval",
          "Eden Gardens",
          "Lord's Cricket Ground"
        ],
        answer: 3
      },
      {
        question: "Which country is famous for originating the martial art of Judo?",
        options: [
          "Thailand",
          "Korea",
          "China",
          "Japan"
        ],
        answer: 3
      },
      {
        question: "Which country has won the highest number of FIFA World Cups in soccer?",
        options: [
          "Germany",
          "Brazil",
          "Italy",
          "Argentina"
        ],
        answer: 1
      },
      {
        question: "In which city were the first modern Olympic Games held in 1896?",
        options: [
          "Athens",
          "Rome",
          "Paris",
          "London"
        ],
        answer: 0
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
          "Virender Sehwag",
          "Chris Gayle",
          "Sachin Tendulkar",
          "Rohit Sharma"
        ],
        answer: 2
      },
      {
        question: "Who is the first batsman to hit six sixes in an over in a T20 International match?",
        options: [
          "Yuvraj Singh",
          "Chris Gayle",
          "Kieron Pollard",
          "Herschelle Gibbs"
        ],
        answer: 0
      },
      {
        question: "Which grand slam tennis tournament is played on a grass court?",
        options: [
          "Wimbledon",
          "US Open",
          "Roland Garros",
          "Australian Open"
        ],
        answer: 0
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
        question: "How long is a standard marathon race in miles?",
        options: [
          "24.2 miles",
          "28.2 miles",
          "26.2 miles",
          "20.2 miles"
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
          "Mitchell Johnson",
          "Brett Lee",
          "Shaun Tait",
          "Shoaib Akhtar"
        ],
        answer: 3
      },
      {
        question: "Which bowler has taken the highest number of wickets in Test cricket history?",
        options: [
          "Muttiah Muralitharan",
          "James Anderson",
          "Anil Kumble",
          "Shane Warne"
        ],
        answer: 0
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
        question: "Who won the UEFA Champions League in 2016?",
        options: [
          "Manchester City F.C.",
          "Real Madrid C.F.",
          "FC Bayern Munich",
          "Atletico Madrid"
        ],
        answer: 1
      },
      {
        question: "What is the name of Manchester United's home stadium?",
        options: [
          "City of Manchester Stadium",
          "St James Park",
          "Old Trafford",
          "Anfield"
        ],
        answer: 2
      },
      {
        question: "Which boxer was banned for taking a bite out of Evander Holyfield's ear in 1997?",
        options: [
          "Lennox Lewis",
          "Evander Holyfield",
          "Roy Jones Jr.",
          "Mike Tyson"
        ],
        answer: 3
      },
      {
        question: "Which of the following sports is not part of the triathlon?",
        options: [
          "Swimming",
          "Horse-Riding",
          "Cycling",
          "Running"
        ],
        answer: 1
      },
      {
        question: "Which player holds the NHL record of 2,857 points?",
        options: [
          "Wayne Gretzky",
          "Sidney Crosby",
          "Gordie Howe",
          "Mario Lemieux "
        ],
        answer: 0
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
        question: "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        options: [
          "1-6",
          "2-6",
          "1-5",
          "1-7"
        ],
        answer: 3
      },
      {
        question: "What sport features the terms love, deuce, match and volley?",
        options: [
          "Tennis",
          "Basketball",
          "Curling",
          "Cricket"
        ],
        answer: 0
      },
      {
        question: "Which year did Jenson Button won his first ever Formula One World Drivers' Championship?",
        options: [
          "2009",
          "2006",
          "2010",
          "2007"
        ],
        answer: 0
      },
      {
        question: "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
        options: [
          "August 21",
          "August 19",
          "August 17",
          "August 23"
        ],
        answer: 0
      },
      {
        question: "Which English football club has the nickname 'The Foxes'?",
        options: [
          "West Bromwich Albion",
          "Northampton Town",
          "Bradford City",
          "Leicester City"
        ],
        answer: 3
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
        question: "How many players are there in an association football/soccer team?",
        options: [
          "10",
          "9",
          "11",
          "8"
        ],
        answer: 2
      },
      {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: [
          "Japan",
          "China",
          "Germany",
          "Australia"
        ],
        answer: 0
      },
      {
        question: "In bowling, what is the term used for getting three consecutive strikes?",
        options: [
          "Flamingo",
          "Eagle",
          "Birdie",
          "Turkey"
        ],
        answer: 3
      },
      {
        question: "How many points did LeBron James score in his first NBA game?",
        options: [
          "41",
          "69",
          "25",
          "19"
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
        question: "In what country were the 2014 Winter Olympics held in the town of Sochi?",
        options: [
          "Russia",
          "South Korea",
          "Norway",
          "Canada"
        ],
        answer: 0
      },
      {
        question: "A stimpmeter measures the speed of a ball over what surface?",
        options: [
          "Pinball Table",
          "Cricket Outfield",
          "Golf Putting Green",
          " Football Pitch"
        ],
        answer: 2
      },
      {
        question: "Which basketball team has attended the most NBA grand finals?",
        options: [
          "Boston Celtics",
          "Los Angeles Lakers",
          "Philadelphia 76ers",
          "Golden State Warriors"
        ],
        answer: 1
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
      },
      {
        question: "What country hosted the 2014 Winter Olympics?",
        options: [
          "Russia",
          "United States",
          "Germany",
          "Canada"
        ],
        answer: 0
      },
      {
        question: "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
        options: [
          "Mercedes",
          "Ferrari",
          "Jordan",
          "Benetton"
        ],
        answer: 2
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
        question: "What is Tiger Woods' all-time best career golf-score?",
        options: [
          "67",
          "61",
          "63",
          "65"
        ],
        answer: 1
      },
      {
        question: "How many scoring zones are there on a conventional dart board?",
        options: [
          "62",
          "102",
          "42",
          "82"
        ],
        answer: 3
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
        question: "Who has played the most tournaments on the Brazilian national soccer team?",
        options: [
          "Kaká",
          "Roberto Carlos",
          "Cafu",
          "Ronaldo"
        ],
        answer: 2
      },
      {
        question: "Edson Arantes do Nascimento is the full name of which legendary football player?",
        options: [
          "Romário",
          "Pelé",
          "Zico",
          "Ronaldinho"
        ],
        answer: 1
      },
      {
        question: "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
        options: [
          "109.36yd",
          "84.39m",
          "100m",
          "100yd"
        ],
        answer: 1
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
        question: "Which of these European cities was the first to host the modern Summer Olympic Games three times?",
        options: [
          "Paris",
          "Rome",
          "London",
          "Athens"
        ],
        answer: 2
      },
      {
        question: "What is the full name of the footballer \"Cristiano Ronaldo\"?",
        options: [
          "Cristiano Armando Diego Ronaldo",
          "Cristiano Ronaldo dos Santos Aveiro",
          "Cristiano Luis Armando Ronaldo",
          "Cristiano Ronaldo los Santos Diego"
        ],
        answer: 1
      },
      {
        question: "What tool lends it's name to a last-stone advantage in an end in Curling?",
        options: [
          "Drill",
          "Screwdriver",
          "Wrench",
          "Hammer"
        ],
        answer: 3
      },
      {
        question: "The Mazda 787B won the 24 Hours of Le Mans in what year?",
        options: [
          "1991",
          "1987",
          "2000",
          "1990"
        ],
        answer: 0
      },
      {
        question: "Who scored the injury time winning goal in the 1999 UEFA Champions League final between Manchester United and Bayern Munich?",
        options: [
          "David Beckham",
          "Dwight Yorke",
          "Andy Cole",
          "Ole Gunnar Solskjær"
        ],
        answer: 3
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
        question: "Who won the 1998 Daytona 500?",
        options: [
          "Dale Earnhardt",
          "Michael Walltrip",
          "John Anderson",
          "Jeff Gordon"
        ],
        answer: 0
      },
      {
        question: "Which of these Russian cities did NOT contain a stadium that was used in the 2018 FIFA World Cup?",
        options: [
          "Yekaterinburg",
          "Kaliningrad",
          "Vladivostok",
          "Rostov-on-Don"
        ],
        answer: 2
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
          "Rajesh Khanna",
          "Amitabh Bachchan",
          "Dilip Kumar",
          "Dharmendra"
        ],
        answer: 1
      },
      {
        question: "Which movie is famous for the dialogue 'Kitne aadmi the'?",
        options: [
          "Zanjeer",
          "Sholay",
          "Don",
          "Deewaar"
        ],
        answer: 1
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
          "Raja Harishchandra",
          "Alam Ara",
          "Kisan Kanya",
          "Mughal-e-Azam"
        ],
        answer: 0
      },
      {
        question: "Which actor debuted in Bollywood with the movie 'Deewana' in 1992?",
        options: [
          "Aamir Khan",
          "Shah Rukh Khan",
          "Salman Khan",
          "Saif Ali Khan"
        ],
        answer: 1
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
          "Dil Chahta Hai",
          "Taare Zameen Par",
          "Lagaan",
          "Devdas"
        ],
        answer: 2
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
        question: "Who is known as the 'Showman of Indian Cinema'?",
        options: [
          "Dev Anand",
          "Guru Dutt",
          "Raj Kapoor",
          "Dilip Kumar"
        ],
        answer: 2
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
          "Satyajit Ray",
          "Gulzar",
          "Bhanu Athaiya",
          "A. R. Rahman"
        ],
        answer: 2
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
          "Guru Dutt",
          "Raj Kapoor",
          "K. Asif"
        ],
        answer: 3
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
        question: "Who directed the movies \"Pulp Fiction\", \"Reservoir Dogs\" and \"Django Unchained\"?",
        options: [
          "Quentin Tarantino",
          "James Cameron",
          "Martin Scorcese",
          "Steven Spielberg"
        ],
        answer: 0
      },
      {
        question: "In the cartoon 'SpongeBob SquarePants', what did the acronym E.V.I.L stand for?",
        options: [
          "Every Villain Is Limes",
          "Each Villain Is Lemonade",
          "Every Villain Is Lemons",
          "Every Villain Is Lemonade"
        ],
        answer: 2
      },
      {
        question: "In the 1951 movie \"The Day The Earth Stood Still\" which US city did the alien spaceship land in?",
        options: [
          "Washington D.C.",
          "Philadelphia",
          "New York",
          " Los Angeles"
        ],
        answer: 0
      },
      {
        question: "Who directed \"E.T. the Extra-Terrestrial\" (1982)?",
        options: [
          "Steven Spielberg",
          "Stanley Kubrick",
          "James Cameron",
          "Tim Burton"
        ],
        answer: 0
      },
      {
        question: "Who directed the 2017 movie \"The Shape of Water\"?",
        options: [
          "Martin Scorsese",
          "James Cameron",
          "Steven Spielberg",
          "Guillermo del Toro"
        ],
        answer: 3
      },
      {
        question: "Guy's Grocery Games is hosted by which presenter?",
        options: [
          "Ainsley Harriott",
          "Guy Martin",
          "Guy Fieri",
          "Guy Ritchie"
        ],
        answer: 2
      },
      {
        question: "Which of these movies did Jeff Bridges not star in?",
        options: [
          "The Giver",
          "Tron: Legacy",
          "The Hateful Eight",
          "True Grit"
        ],
        answer: 2
      },
      {
        question: "What is the orange and white bot's name in \"Star Wars: The Force Awakens\"?",
        options: [
          "BB-8",
          "R2-D2",
          "AA-A",
          "BB-3"
        ],
        answer: 0
      },
      {
        question: "What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?",
        options: [
          "Gnarly.",
          "Nice.",
          "Groovy.",
          "Perfect."
        ],
        answer: 2
      },
      {
        question: "Who directed Marvel's Avengers Endgame?",
        options: [
          "Kevin Feige",
          "The Russo Brothers",
          "Zack Synder",
          "Josh Whedon"
        ],
        answer: 1
      },
      {
        question: "Who plays Alice in the Resident Evil movies?",
        options: [
          "Madison Derpe",
          "Milla Johnson",
          "Milla Jovovich",
          "Kim Demp"
        ],
        answer: 2
      },
      {
        question: "Who plays Jack Burton in the movie \"Big Trouble in Little China?\"",
        options: [
          "Harrison Ford",
          "Kurt Russell",
          "Patrick Swayze",
          "John Cusack"
        ],
        answer: 1
      },
      {
        question: "When does \"Rogue One: A Star Wars Story\" take place chronologically in the series?",
        options: [
          "Between Episode 3 and 4",
          "Before Episode 1",
          "After Episode 6",
          "Between Episode 4 and 5"
        ],
        answer: 0
      },
      {
        question: "Which actor portrays \"Walter White\" in the series \"Breaking Bad\"?",
        options: [
          "Aaron Paul",
          " Bryan Cranston",
          "RJ Mitte",
          "Andrew Lincoln"
        ],
        answer: 1
      },
      {
        question: "On the NBC show Community, whose catch-phrase was \"Pop! Pop!\"?",
        options: [
          "Magnitude",
          "Senoir Chang",
          "Star Burns",
          "Leonard"
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
        question: "Who is the star of the AMC series Breaking Bad?",
        options: [
          "Skyler White",
          "Saul Goodman",
          "Walter White",
          "Jesse Pinkman"
        ],
        answer: 2
      },
      {
        question: "The 2016 Disney animated film 'Moana' is based on which culture?",
        options: [
          "Native American",
          "Nordic",
          "Japanese",
          "Polynesian"
        ],
        answer: 3
      },
      {
        question: "What was the first James Bond film?",
        options: [
          "Goldfinger",
          "Thunderball",
          "Dr. No",
          "From Russia With Love"
        ],
        answer: 2
      },
      {
        question: "Which show is known for the songs \"You are a Pirate\", \"Cooking by the Book\" and \"We Are Number One\"?",
        options: [
          "LazyTown",
          "Sofia the First",
          "Tom and Jerry",
          "DuckTales"
        ],
        answer: 0
      },
      {
        question: "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
        options: [
          "Wilson",
          "Billy",
          "Jones",
          "Friday"
        ],
        answer: 0
      },
      {
        question: "Which year was the first official Youtube Rewind released?",
        options: [
          "2012",
          "2013",
          "2010",
          "2011"
        ],
        answer: 2
      },
      {
        question: "In \"Mean Girls\", who has breasts that tell when it's raining?",
        options: [
          "Cady Heron",
          "Janice Ian",
          "Gretchen Weiners",
          "Karen Smith"
        ],
        answer: 3
      },
      {
        question: "Who is frozen at the end of the movie \"Goldeneye\"?",
        options: [
          "Alec Travelyan",
          "Natalya Simonova",
          "James Bond",
          "Boris Grishenko"
        ],
        answer: 3
      },
      {
        question: "In the original Star Trek TV series, what was Captain James T. Kirk's middle name?",
        options: [
          "Travis",
          "Trevor",
          "Tiberius",
          "Tyrone"
        ],
        answer: 2
      },
      {
        question: "Which of these actors does NOT appear in the 1998 movie \"Saving Private Ryan\"?",
        options: [
          "Matt Damon",
          "Tom Hanks",
          "Vin Diesel",
          "Ralph Fiennes"
        ],
        answer: 3
      },
      {
        question: "Grant Gustin plays which superhero on the CW show of the same name?",
        options: [
          "The Arrow",
          "Black Canary",
          "Daredevil",
          "The Flash"
        ],
        answer: 3
      },
      {
        question: "Who is the main antagonist of Christopher Nolan's 2012 film \"The Dark Knight Rises\"?",
        options: [
          "Bane",
          "The Riddler",
          "The Joker",
          "CIA"
        ],
        answer: 0
      },
      {
        question: "In the movie \"V for Vendetta,\" what is the date that masked vigilante \"V\" urges people to remember?",
        options: [
          "November 6th",
          "November 4th",
          "November 5th",
          "September 5th"
        ],
        answer: 2
      },
      {
        question: "In the show, Doctor Who, what does T.A.R.D.I.S stand for?",
        options: [
          "Time And Resting Dimensions In Space",
          "Toilet Aid Rope Dog Is Soup",
          "Time And Relative Dimensions In Space",
          "Time And Relative Dimensions In Style"
        ],
        answer: 2
      },
      {
        question: "Who is the main character in the show \"Burn Notice\"?",
        options: [
          "Fiona Glenanne",
          "Sam Axe",
          "Madeline Westen",
          "Michael Westen"
        ],
        answer: 3
      },
      {
        question: "Which of the following won the first season of American Idol in 2002?",
        options: [
          "Kelly Clarkson",
          "Chris Daughtry",
          "Ruben Studdard",
          "Justin Guarini"
        ],
        answer: 0
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
        question: "Which movie contains the quote, \"Say hello to my little friend!\"?",
        options: [
          "Heat",
          "Scarface",
          "Goodfellas",
          "Reservoir Dogs"
        ],
        answer: 1
      },
      {
        question: "Who is the protagonist of the 2002 film \"Kung Pow! Enter the Fist\"?",
        options: [
          "Dragon King",
          "Master Tang",
          "Chosen One",
          "Iron Monkey"
        ],
        answer: 2
      },
      {
        question: "In \"Star Trek: Voyager\", which episode did Voyager establish real-time communication with Starfleet Headquarters?",
        options: [
          "Message In A Bottle",
          "Counterpoint",
          "Someone To Watch Over Me",
          "Pathfinder"
        ],
        answer: 3
      },
      {
        question: "Which animated movie was first to feature a celebrity as a voice actor?",
        options: [
          "Toy Story",
          "James and the Giant Peach",
          "Aladdin",
          "The Hunchback of Notre Dame"
        ],
        answer: 2
      },
      {
        question: "In the show \"Futurama\" what is Fry's full name?",
        options: [
          "Fry Philip",
          "Fry J. Philip",
          "Philip J. Fry",
          "Fry Rodríguez"
        ],
        answer: 2
      },
      {
        question: "What was the name of the the first episode of Doctor Who to air in 1963?",
        options: [
          "An Unearthly Child",
          "The Daleks",
          "The Aztecs",
          "The Edge of Destruction"
        ],
        answer: 0
      },
      {
        question: "Which of these characters in \"Stranger Things\" has the power of Telekinesis?",
        options: [
          "Eleven",
          "Mike",
          "Lucas",
          "Karen"
        ],
        answer: 0
      },
      {
        question: "Who directed the Kill Bill movies?",
        options: [
          "David Lean",
          "Quentin Tarantino",
          "Stanley Kubrick",
          "Arnold Schwarzenegger"
        ],
        answer: 1
      },
      {
        question: "What was the first feature-length computer-animated movie?",
        options: [
          "Tron",
          "101 Dalmatians",
          "Lion king",
          "Toy Story"
        ],
        answer: 3
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
        question: "Who sang the theme song for the TV show 'Rawhide'?",
        options: [
          "Frankie Laine",
          "Slim Whitman",
          " Tennessee Ernie Ford",
          "Guy Mitchell"
        ],
        answer: 0
      },
      {
        question: "Which DC superhero was NOT included in the 2017 movie \"Justice League\"?",
        options: [
          "Wonder Woman",
          "Batman",
          "Green Arrow",
          "Cyborg"
        ],
        answer: 2
      },
      {
        question: "Which actor and martial artist starred as Colonel Guile in the 1994 action film adaptation of Street Fighter?",
        options: [
          "Steven Seagal",
          "Chuck Norris",
          "Scott Adkins",
          "Jean-Claude Van Damme"
        ],
        answer: 3
      },
      {
        question: "What is Lilo's last name from Lilo and Stitch?",
        options: [
          "Anoaʻi",
          "Kealoha",
          "Pelekai",
          "Kuʻulei"
        ],
        answer: 2
      },
      {
        question: "In the 1979 British film \"Quadrophenia\" what is the name of the seaside city the mods are visiting?",
        options: [
          "Eastbourne",
          "Bridlington",
          "Brighton",
          "Mousehole"
        ],
        answer: 2
      },
      {
        question: "What city did the monster attack in the film, \"Cloverfield\"?",
        options: [
          "Chicago, Illinois",
          "Orlando, Florida",
          "New York, New York",
          "Las Vegas, Nevada"
        ],
        answer: 2
      },
      {
        question: "Which town is the setting for the Disney movie The Love Bug (1968)?",
        options: [
          "San Francisco",
          "Los Angeles",
          "Sacramento",
          "San Jose"
        ],
        answer: 0
      },
      {
        question: "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
        options: [
          "Tricia Helfer",
          "Harry Stills",
          "William Adama",
          "Laura Roslin"
        ],
        answer: 3
      },
      {
        question: "What is Meg's full name in \"Family Guy\"?",
        options: [
          "Megatron Griffin",
          "Neil Griffin",
          "Who-Cares Griffin",
          "Megan Griffin"
        ],
        answer: 0
      },
      {
        question: "In the comedy series \"Trailer Park Boys\", which of the following characters takes care of stray cats?",
        options: [
          "Randy",
          "Ricky",
          "Bubbles",
          "Julian"
        ],
        answer: 2
      },
      {
        question: "In the Friday The 13th series, what is Jason's mother's first name?",
        options: [
          "Mary",
          "Angeline",
          "Pamela",
          "Christine"
        ],
        answer: 2
      },
      {
        question: "In what year was the movie \"Police Academy\" released?",
        options: [
          "1983",
          "1984",
          "1986",
          "1985"
        ],
        answer: 1
      },
      {
        question: "Which of these movies is NOT considered to be part of the Marvel Cinematic Universe?",
        options: [
          " Spider-Man: Homecoming (2017)",
          "Captain Marvel (2019)",
          "The Incredible Hulk (2008)",
          "Fantastic Four (2015)"
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
        question: "In Finding Nemo, what was the name of Nemo's mom?",
        options: [
          "Coral",
          "Shelly",
          "Sandy",
          "Pearl"
        ],
        answer: 0
      },
      {
        question: "In the Sci-Fi television show Doctor Who, who plays the Tenth Doctor?",
        options: [
          "Peter Davison",
          "David Tennant",
          "Peter Capaldi",
          "William Hartnell"
        ],
        answer: 1
      },
      {
        question: "What year did the television company BBC officially launch the channel BBC One?",
        options: [
          "1932",
          "1948",
          "1955",
          "1936"
        ],
        answer: 3
      },
      {
        question: "What were the Chilled Monkey Brains made from during Indiana Jones and the Temple of Doom?",
        options: [
          "Cherry Yogurt",
          "Strawberry Ice Cream",
          "Custard and Raspberry Sauce",
          "Raspberry Sorbet"
        ],
        answer: 2
      },
      {
        question: "Who was the winner of the 2016 WWE Royal Rumble?",
        options: [
          "Roman Reigns",
          "AJ Styles",
          "Dean Ambrose",
          "Triple H"
        ],
        answer: 3
      },
      {
        question: "Which 90's comedy cult classic features cameos appearances from Meat Loaf, Alice Cooper and Chris Farley?",
        options: [
          "Wayne's World",
          "Austin Powers: International Man of Mystery",
          "Bill & Ted's Excellent Adventure",
          "Dumb and Dumber"
        ],
        answer: 0
      },
      {
        question: "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
        options: [
          "Robby",
          "Box",
          "Gort",
          "Colossus"
        ],
        answer: 2
      },
      {
        question: "Who plays \"Bruce Wayne\" in the 2008 movie \"The Dark Knight\"?",
        options: [
          "Ron Dean",
          "Christian Bale",
          "Heath Ledger",
          "Michael Caine"
        ],
        answer: 1
      },
      {
        question: "How many seasons did the TV show \"Donkey Kong Country\" last?",
        options: [
          "4",
          "1",
          "2",
          "5"
        ],
        answer: 2
      },
      {
        question: "Who was Firestorm's rival during the original run of UK Robot Wars?",
        options: [
          "Chaos 2",
          "Panic Attack",
          "Hypno Disc",
          "Razer"
        ],
        answer: 1
      },
      {
        question: "Who played the Cenobite called \"Pinhead\" in the original Hellraiser films?",
        options: [
          "Doug Benson",
          "Doug Bradley",
          "Doug Savant",
          "Doug Jones"
        ],
        answer: 1
      },
      {
        question: "Which actor auditioned for the role of Luke Skywalker?",
        options: [
          "Christopher Lambert",
          "Kurt Russell",
          "James Remar",
          "Laurence Fishburne"
        ],
        answer: 1
      },
      {
        question: "In the Mad Max franchise, what type of car is the Pursuit Special driven by Max?",
        options: [
          "Chrysler Valiant Charger",
          "Pontiac Firebird",
          "Ford Falcon",
          "Holden Monaro"
        ],
        answer: 2
      },
      {
        question: "What is the name of the \"Flash\" and \"Arrow\" spinoff featuring a team of characters that have appeared on both shows?",
        options: [
          "Heroes of Tomorrow",
          "The Justice Society of America",
          "Legends of Tomorrow",
          "The Justice Society"
        ],
        answer: 2
      },
      {
        question: "What does TIE stand for in reference to the TIE Fighter in \"Star Wars\"?",
        options: [
          "Twin Ion Engine",
          "Twin Intercepter Engine",
          "Twin Inception Engine",
          "Twin Iron Engine"
        ],
        answer: 0
      },
      {
        question: "What is the name of the inspector in the series \"On the Buses\"?",
        options: [
          "Gally",
          "Blakey",
          "Naily",
          "Harper"
        ],
        answer: 1
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
        question: "Who is the director of the 1991 film \"Silence of the Lambs\"?",
        options: [
          "Michael Bay",
          "Frank Darabont",
          "Stanley Kubrick",
          "Jonathan Demme"
        ],
        answer: 3
      },
      {
        question: "In the movie \"Back to the Future,\" what speed does Doc Brown's DeLorean need to reach in order to travel through time?",
        options: [
          "77 mph",
          "100 mph",
          "70 mph",
          "88 mph"
        ],
        answer: 3
      },
      {
        question: "Brendan Fraser starred in the following movies, except which one?",
        options: [
          "Monkeybone",
          "Mrs. Winterbourne",
          "Titanic",
          "Encino Man"
        ],
        answer: 2
      },
      {
        question: "Which actor played the main character in the 1990 film \"Edward Scissorhands\"?",
        options: [
          "Leonardo DiCaprio",
          "Johnny Depp",
          "Ben Stiller",
          " Clint Eastwood"
        ],
        answer: 1
      },
      {
        question: "Which Marvel superhero did Chris Evans play prior to his role as Captain America?",
        options: [
          "Cyclops",
          "Daredevil",
          "Human Torch",
          "Iceman"
        ],
        answer: 2
      },
      {
        question: "Which of following is rude and dishonorable by Klingon standards?",
        options: [
          "Reaching over and taking his meal",
          "Taking his D'k tahg",
          "Insulting and laughing at him at the dinner table",
          "Punching him and taking his ship station position"
        ],
        answer: 1
      },
      {
        question: "Which former Star Trek actor directed Three Men and a Baby (1987)?",
        options: [
          "Leonard Nimoy",
          "James Doohan",
          "George Takei",
          "William Shatner"
        ],
        answer: 0
      },
      {
        question: "In Mulan (1998), who is the leader of the Huns?",
        options: [
          "Fa Zhou",
          "Li Shang",
          "Chien-Po",
          "Shan Yu"
        ],
        answer: 3
      },
      {
        question: "About how much money did it cost for Tommy Wiseau to make his masterpiece \"The Room\" (2003)?",
        options: [
          "$10 Million",
          "$6 Million",
          "$20,000",
          "$1 Million"
        ],
        answer: 1
      },
      {
        question: "In \"Jurassic World\", which company purchases InGen and creates Jurassic World?",
        options: [
          "Masrani Global Corporation ",
          "International Genetics Incorporated",
          "International Genetic Technologies",
          "Biology Synthetics Technologies"
        ],
        answer: 0
      },
      {
        question: "In what year did \"The Big Bang Theory\" debut on CBS?",
        options: [
          "2008",
          "2007",
          "2009",
          "2006"
        ],
        answer: 1
      },
      {
        question: "Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
        options: [
          "Alan Wake",
          "Hitman",
          "God Of War",
          "Max Payne"
        ],
        answer: 3
      },
      {
        question: "What is the name of the mad scientist who owns Planet Express in Futurama?",
        options: [
          "Rick Sanchez",
          "Ogden Wernstrom",
          "Philip J. Fry",
          "Hubert J. Farnsworth"
        ],
        answer: 3
      },
      {
        question: "Which of these Disney classics was released in 1970?",
        options: [
          "The Little Mermaid",
          "One Hundred and One Dalmatians",
          "The Fox and the Hound",
          "The Aristocats"
        ],
        answer: 3
      },
      {
        question: "Who was the star of the TV series \"24\"?",
        options: [
          "Kiefer Sutherland",
          "Hugh Laurie",
          "Rob Lowe",
          "Kevin Bacon"
        ],
        answer: 0
      },
      {
        question: "What American actor directed and co-starred alongside Emily Blunt in 2018's horror film \"A Quiet Place\"?",
        options: [
          "Josh Brolin",
          "John Krasinski",
          "Willem Dafoe",
          "Keanu Reeves"
        ],
        answer: 1
      },
      {
        question: "Who is revealed to be the villain at the end of the first live action Scooby Doo movie?",
        options: [
          "Scrappy Doo",
          "Old Man Mason",
          "Fred",
          "The Local News Team"
        ],
        answer: 0
      },
      {
        question: "What is the birth name of Michael Keaton?",
        options: [
          "Michael Fox",
          "Michael Kane",
          "Michael Richards",
          "Michael Douglas"
        ],
        answer: 3
      },
      {
        question: "Bela Lugosi was a Hungarian-American actor best known for his starring role of what 1931 horror film?",
        options: [
          "Count Dracula",
          "The Creature from the Black Lagoon",
          "Werewolf",
          "Dr Frankenstein"
        ],
        answer: 0
      },
      {
        question: "Which British writer wrote for both Doctor Who and Sherlock?",
        options: [
          "Steven Moffatt",
          "Phil Ford",
          "Toby Whithouse",
          "Russell T Davies"
        ],
        answer: 0
      },
      {
        question: "What is the surname of the character Daryl in AMC's show The Walking Dead?",
        options: [
          "Dicketson",
          "Grimes",
          "Dixon",
          "Dickinson"
        ],
        answer: 2
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
        question: "What mutated animals act as monsters in the movie 'Night of the Lepus'?",
        options: [
          "Dogs",
          "Rats",
          "Bats",
          "Rabbits"
        ],
        answer: 3
      },
      {
        question: "Which movie sequel had improved box office results compared to its original film?",
        options: [
          "Sin City: A Dame to Kill For",
          "Son of the Mask",
          "Toy Story 2",
          "Speed 2: Cruise Control"
        ],
        answer: 2
      },
      {
        question: "In Breaking Bad, the initials W.W. refer to which of the following?",
        options: [
          "Wally Walrus",
          "Willy Wonka",
          "Walter White",
          "William Wolf"
        ],
        answer: 2
      },
      {
        question: "From what show is the character \"James Doakes\"?",
        options: [
          "Marvel's Daredevil",
          "Dexter",
          "Boardwalk Empire",
          "The Walking Dead"
        ],
        answer: 1
      },
      {
        question: "What breed of dog is \"Scooby Doo\"?",
        options: [
          "Pit bull",
          "Doberman Pinscher",
          "Boxer",
          "Great Dane"
        ],
        answer: 3
      },
      {
        question: "What does Bart sell his soul for in The Simpsons episode 'Bart Sells His Soul'?",
        options: [
          "$5",
          "A Giant Gobstopper",
          "A Copy of Bonestorm 2",
          "$100"
        ],
        answer: 0
      },
      {
        question: "Which one of these actors is said to be cut from the film 'E.T. the Extra-Terrestrial'?",
        options: [
          "Arnold Schwarzenegger",
          "Harrison Ford",
          "Andy Kaufman",
          "Michael J. Fox"
        ],
        answer: 1
      },
      {
        question: "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
        options: [
          "Tyler Mane",
          "Gunnar Hansen",
          "Jackie Earle Haley",
          "Derek Mears"
        ],
        answer: 2
      },
      {
        question: "What year did the movie \"Napoleon Dynamite\" come out?",
        options: [
          "2003",
          "2004",
          "2002",
          "2005"
        ],
        answer: 1
      },
      {
        question: "In the 1971 film \"Willy Wonka & the Chocolate Factory\", who played Willy Wonka?",
        options: [
          "Shia LeBouf",
          "Gene Wilder",
          "Peter Ostrum",
          "Johnny Depp"
        ],
        answer: 1
      },
      {
        question: "In the 2002 film \"Kung Pow! Enter the Fist\", why was Wimp Lo purposely trained wrong?",
        options: [
          "To test him",
          "As a joke",
          "For cheating",
          "Revenge"
        ],
        answer: 1
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
        question: "According to \"Star Wars\" lore, which planet does Obi-Wan Kenobi come from?",
        options: [
          "Naboo",
          "Alderaan",
          "Stewjon",
          "Tatooine"
        ],
        answer: 2
      },
      {
        question: "In \"Star Trek\", what sauce is commonly used by Klingons on bregit lung?",
        options: [
          "Gazorpazorp pudding",
          "Grapok sauce",
          "Sweet chili sauce",
          "Grapork sauce"
        ],
        answer: 1
      },
      {
        question: "In what year does Jurassic World open in the \"Jurassic Park\" universe?",
        options: [
          "2005",
          "2015",
          "2007",
          "2020"
        ],
        answer: 0
      },
      {
        question: "Who was the winner of \"Big Brother\" Season 10?",
        options: [
          "Ryan Sutfin",
          "Chris Mundorf",
          "Dan Gheesling",
          "Bryce Kranyik"
        ],
        answer: 2
      },
      {
        question: "Which PBS station was the first station to air \"Monty Python's Flying Circus\" (1969-1974) in the United States?",
        options: [
          "WETA (Washington D.C.)",
          "KERA (Dallas-Fort Worth)",
          "KLCS (Los Angeles)",
          "WNET (New York City)"
        ],
        answer: 1
      },
      {
        question: "What was the wifi password given to Stephen Strange in Doctor Strange?",
        options: [
          "Shambala",
          "Ancient",
          "Chakra",
          "Peace"
        ],
        answer: 0
      },
      {
        question: "What was Humphrey Bogart's middle name?",
        options: [
          "Bryce",
          "Steven",
          "DeWinter",
          "DeForest"
        ],
        answer: 3
      },
      {
        question: "Which of these in the Star Trek series is NOT Klingon food?",
        options: [
          "Gagh",
          "Racht",
          "Bloodwine",
          "Hors d'oeuvre"
        ],
        answer: 3
      },
      {
        question: "Which actress portrayed Dr. Grace Augustine in the James Cameron movie \"Avatar\"?",
        options: [
          "Melissa Beckett",
          "Alyssa Monroe ",
          "Sigourney Weaver",
          "Jessica Chastain"
        ],
        answer: 2
      },
      {
        question: "Which sci-fi cult films plot concerns aliens attempting to prevent humans from creating a doomsday weapon?",
        options: [
          "It Came from Outer Space",
          "The Day The Earth Stood Still",
          "Plan 9 from Outer Space",
          "The Man from Planet X"
        ],
        answer: 2
      },
      {
        question: "In Youtuber Jerma985's 2014 film \"Rat Movie: Mystery of the Mayan Treasure,\" who is the man who tries to steal the Mayan Treasure?",
        options: [
          "Gabe \"The Glue Man\" Degrossi",
          "Bootleg Duck Dynasty Byeah Batman",
          "Dick Dastardly Richards",
          "Demon Lord Zeraxos"
        ],
        answer: 2
      },
      {
        question: "Which race enjoys a glass of warm baghol in \"Star Trek\"?",
        options: [
          "Human",
          "Vulcan",
          "Botha",
          "Klingon"
        ],
        answer: 3
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
        question: "Which movie did NOT feature the late actor John Candy?",
        options: [
          "Home Alone",
          "Planes Trains and Automobiles",
          "Ghostbusters",
          "Little Shop Of Horrors"
        ],
        answer: 2
      },
      {
        question: "In the film \"Interstellar\", how long did they spend on Miller's planet?",
        options: [
          "15 years, 2 months, and 15 days",
          "23 years, 4 months, and 8 days",
          "26 years, 4 months, and 10 days",
          "10 months and 6 days"
        ],
        answer: 1
      },
      {
        question: "In \"Donkey Kong Country\", why does Donkey Kong want to know the secret of the crystal coconut?",
        options: [
          "Because Diddy Kong forced him.",
          "He wants to punish brutes.",
          "He's the big kahuna.",
          "To find out where all the bananas are."
        ],
        answer: 2
      },
      {
        question: "What did the first moving picture depict?",
        options: [
          "A man walking",
          "A galloping horse",
          "A woman in a dress",
          "A crackling fire"
        ],
        answer: 1
      },
      {
        question: "What was the first movie to ever use a Wilhelm Scream?",
        options: [
          "Indiana Jones",
          "Treasure of the Sierra Madre",
          "Distant Drums",
          "The Charge at Feather River"
        ],
        answer: 2
      },
      {
        question: "Which country does the YouTuber \"SinowBeats\" originate from?",
        options: [
          "Germany",
          "England",
          "Scotland",
          "Sweden"
        ],
        answer: 2
      },
      {
        question: "How old was Laurence Fishburne when Francis Ford Coppola cast him in Apocalypse Now (1979)?",
        options: [
          "20",
          "16",
          "14",
          "18"
        ],
        answer: 2
      },
      {
        question: "Which of these voices wasn't a choice for the House AI in \"The Simpsons Treehouse of Horror\" short, House of Whacks?",
        options: [
          "Matthew Perry",
          "Dennis Miller",
          "Pierce Brosnan",
          "George Clooney"
        ],
        answer: 3
      },
      {
        question: "Which 1994 film did Roger Ebert famously despise, saying \"I hated hated hated hated hated this movie\".",
        options: [
          "The Santa Clause",
          "Richie Rich",
          "3 Ninjas Kick Back",
          "North"
        ],
        answer: 3
      },
      {
        question: "Which actors made up the trio in \"The Good, the Bad, and the Ugly\"?",
        options: [
          "Aldo Giuffrè, Mario Brega, and Luigi Pistilli",
          "Yul Brynner, Steve McQueen, and Charles Bronson",
          "Clint Eastwood, Eli Wallach, and Lee Van Cleef",
          "Sergio Leone, Ennio Morricone, and Tonino Delli Colli"
        ],
        answer: 2
      },
      {
        question: "Which of the following actors portrayed the Ninth Doctor in the British television show \"Doctor Who\"?",
        options: [
          "Christopher Eccleston",
          "Matt Smith",
          "David Tennant",
          "Tom Baker"
        ],
        answer: 0
      },
      {
        question: "In Star Trek, what is the name of Spock's father?",
        options: [
          "T'Pal",
          "Surak",
          "Sarek",
          "Tuvok"
        ],
        answer: 2
      },
      {
        question: "Who Voices the Devil on Devil's Flight in Final Destination 3?",
        options: [
          "Ian McKinley",
          "Kevin Fischer",
          "Tony Todd",
          "Wendy Christensen"
        ],
        answer: 2
      },
      {
        question: "Prior to working at Wizards of the Coast, \"Mark Rosewater\" was a writer for which show?",
        options: [
          "NYPD Blue",
          "The X-Files",
          "Boy Meets World",
          "Roseanne"
        ],
        answer: 3
      },
      {
        question: "In the Friday The 13th series, what year did Jason drown in?",
        options: [
          "1953",
          "1955",
          "1959",
          "1957"
        ],
        answer: 3
      },
      {
        question: "Which actor from The Young Ones also played Lord Flashheart in one episode of Blackadder II?",
        options: [
          "Nigel Planer",
          "Rik Mayall",
          "Christopher Ryan",
          "Adrian Edmondson"
        ],
        answer: 1
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
        question: "What is the capital city of the Indian state of West Bengal?",
        options: [
          "Dispur",
          "Raipur",
          "Chennai",
          "Kolkata"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Uttar Pradesh?",
        options: [
          "Hyderabad",
          "Dehradun",
          "Lucknow",
          "Mumbai"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Bihar?",
        options: [
          "Dispur",
          "Bhubaneswar",
          "Patna",
          "Jaipur"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Himachal Pradesh?",
        options: [
          "Kolkata",
          "Bhubaneswar",
          "Mumbai",
          "Shimla"
        ],
        answer: 3
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
        question: "Which of the following is the capital city of India?",
        options: [
          "Paris",
          "Tokyo",
          "Beijing",
          "New Delhi"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of France?",
        options: [
          "Tokyo",
          "Rome",
          "Washington, D.C.",
          "Paris"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of United Kingdom?",
        options: [
          "Canberra",
          "London",
          "Madrid",
          "New Delhi"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of United States?",
        options: [
          "Tokyo",
          "Washington, D.C.",
          "Moscow",
          "Cairo"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Japan?",
        options: [
          "Brasilia",
          "Kathmandu",
          "London",
          "Tokyo"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of China?",
        options: [
          "New Delhi",
          "Beijing",
          "Washington, D.C.",
          "Tokyo"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Italy?",
        options: [
          "Rome",
          "London",
          "Brasilia",
          "Thimphu"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Germany?",
        options: [
          "Dhaka",
          "Cairo",
          "Berlin",
          "Beijing"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Russia?",
        options: [
          "London",
          "Brasilia",
          "Moscow",
          "Beijing"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Australia?",
        options: [
          "Dhaka",
          "Tokyo",
          "Canberra",
          "Ottawa"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Egypt?",
        options: [
          "Sri Jayawardenepura Kotte",
          "Ottawa",
          "Cairo",
          "Rome"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Brazil?",
        options: [
          "Brasilia",
          "Ottawa",
          "Washington, D.C.",
          "Berlin"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Canada?",
        options: [
          "Ottawa",
          "Rome",
          "Sri Jayawardenepura Kotte",
          "Pretoria"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Spain?",
        options: [
          "Madrid",
          "Rome",
          "Moscow",
          "Tokyo"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of South Africa?",
        options: [
          "Dhaka",
          "Cairo",
          "Pretoria",
          "Kathmandu"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Nepal?",
        options: [
          "Beijing",
          "Dhaka",
          "Kathmandu",
          "Moscow"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Sri Lanka?",
        options: [
          "Sri Jayawardenepura Kotte",
          "Pretoria",
          "Ottawa",
          "Moscow"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Bhutan?",
        options: [
          "Sri Jayawardenepura Kotte",
          "Cairo",
          "Thimphu",
          "Ottawa"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Bangladesh?",
        options: [
          "New Delhi",
          "Tokyo",
          "Dhaka",
          "Berlin"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Telangana?",
        options: [
          "Hyderabad",
          "Raipur",
          "Chandigarh",
          "Lucknow"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Rajasthan?",
        options: [
          "Chandigarh",
          "Jaipur",
          "Thiruvananthapuram",
          "Chandigarh"
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
        question: "What is the capital city of the Indian state of Karnataka?",
        options: [
          "Kolkata",
          "Bengaluru",
          "Mumbai",
          "Chandigarh"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Madhya Pradesh?",
        options: [
          "Bhopal",
          "Jaipur",
          "Panaji",
          "Thiruvananthapuram"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Kerala?",
        options: [
          "Gandhinagar",
          "Kolkata",
          "Dispur",
          "Thiruvananthapuram"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Punjab?",
        options: [
          "Dehradun",
          "Bengaluru",
          "Chandigarh",
          "Chennai"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Haryana?",
        options: [
          "Dispur",
          "Jaipur",
          "Ranchi",
          "Chandigarh"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the Indian state of Jharkhand?",
        options: [
          "Patna",
          "Dehradun",
          "Panaji",
          "Ranchi"
        ],
        answer: 3
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
        question: "What is the capital city of the Indian state of Maharashtra?",
        options: [
          "Ranchi",
          "Mumbai",
          "Hyderabad",
          "Thiruvananthapuram"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Tamil Nadu?",
        options: [
          "Gandhinagar",
          "Chennai",
          "Chandigarh",
          "Mumbai"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the Indian state of Odisha?",
        options: [
          "Panaji",
          "Dehradun",
          "Bhubaneswar",
          "Hyderabad"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Goa?",
        options: [
          "Panaji",
          "Raipur",
          "Chandigarh",
          "Shimla"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Uttarakhand?",
        options: [
          "Raipur",
          "Ranchi",
          "Dehradun",
          "Gandhinagar"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the Indian state of Chhattisgarh?",
        options: [
          "Bengaluru",
          "Kolkata",
          "Ranchi",
          "Raipur"
        ],
        answer: 3
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
        question: "What is the capital city of the Indian state of Gujarat?",
        options: [
          "Gandhinagar",
          "Raipur",
          "Thiruvananthapuram",
          "Chennai"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the Indian state of Assam?",
        options: [
          "Dispur",
          "Gandhinagar",
          "Chandigarh",
          "Panaji"
        ],
        answer: 0
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
        question: "The country of Belize borders which country?",
        options: [
          "Laos",
          "Perú",
          "Kenya",
          "Guatemala"
        ],
        answer: 3
      },
      {
        question: "Harvard University is located in which city?",
        options: [
          "New York",
          "Cambridge",
          "Providence",
          "Washington D.C."
        ],
        answer: 1
      },
      {
        question: "What is the official language in Liechtenstein?",
        options: [
          "French",
          "German",
          "Italian",
          "English"
        ],
        answer: 1
      },
      {
        question: "How many federal states does Germany have?",
        options: [
          "13",
          "32",
          "16",
          "25"
        ],
        answer: 2
      },
      {
        question: "How many stars are featured on New Zealand's flag?",
        options: [
          "0",
          "2",
          "4",
          "5"
        ],
        answer: 2
      },
      {
        question: "Which country features a maple leaf on its flag?",
        options: [
          "India",
          "Canada",
          "Brazil",
          "Mexico"
        ],
        answer: 1
      },
      {
        question: "Which of the following former Yugoslavian states is landlocked?",
        options: [
          "Bosnia and Herzegovina",
          "Croatia",
          "Serbia",
          "Montenegro"
        ],
        answer: 2
      },
      {
        question: "Which Russian oblast forms a border with Poland?",
        options: [
          "Omsk",
          "Kaliningrad",
          "Nizhny Novgorod",
          "Samara"
        ],
        answer: 1
      },
      {
        question: "What name was historically used for the Turkish city currently known as Istanbul?",
        options: [
          "Söğüt",
          "Constantinople",
          "Adrianople",
          "Hüdavendigar"
        ],
        answer: 1
      },
      {
        question: "Which of the following geographic features is a ring-shaped coral reef, island, or series of islets?",
        options: [
          "Peninsula",
          "Atoll",
          "Delta",
          "Isthmus"
        ],
        answer: 1
      },
      {
        question: "Which country does Austria not border?",
        options: [
          "Slovenia",
          "France",
          "Slovakia",
          "Switzerland"
        ],
        answer: 1
      },
      {
        question: "What is the capital of Denmark?",
        options: [
          "Copenhagen",
          "Aalborg",
          "Aarhus",
          "Odense"
        ],
        answer: 0
      },
      {
        question: "The derisive acronym \"PIIGS\" refers to which of the following European countries and their economic statuses?",
        options: [
          "Portugal, Ireland, Italy, Greece, Spain",
          "Poland, Iceland, Italy, Greenland, Spain",
          "Poland, Iceland, Italy, Greece, Serbia",
          "Portugal, Iceland, Ireland, Greece, Serbia"
        ],
        answer: 0
      },
      {
        question: "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
        options: [
          "Scotland",
          "Bhutan",
          "Kiribati",
          "Sri Lanka"
        ],
        answer: 3
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
        question: "What is the capital city of the US state of Texas?",
        options: [
          "Olympia",
          "Austin",
          "Albany",
          "Raleigh"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Illinois?",
        options: [
          "Raleigh",
          "Sacramento",
          "Springfield",
          "Phoenix"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Georgia?",
        options: [
          "Albany",
          "Atlanta",
          "Columbus",
          "Phoenix"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of the US state of Arizona?",
        options: [
          "Albany",
          "Tallahassee",
          "Austin",
          "Phoenix"
        ],
        answer: 3
      },
      {
        question: "Which of these is NOT an Australian state or territory?",
        options: [
          "Queensland",
          "New South Wales",
          "Alberta",
          "Victoria"
        ],
        answer: 2
      },
      {
        question: "In which country is the city of Rio de Janeiro?",
        options: [
          "Chile",
          "Peru",
          "Brazil",
          "Venezuela"
        ],
        answer: 2
      },
      {
        question: "The body of the Egyptian Sphinx was based on which animal?",
        options: [
          "Bull",
          "Dog",
          "Lion",
          "Horse"
        ],
        answer: 2
      },
      {
        question: "Which of the following European languages is classified as a \"language isolate?\"",
        options: [
          "Galician",
          "Hungarian",
          "Basque",
          "Maltese"
        ],
        answer: 2
      },
      {
        question: "Which European city is known as the \"City of Light\"?",
        options: [
          "Madrid",
          "Paris",
          "Rome",
          "London"
        ],
        answer: 1
      },
      {
        question: "What is the capital of Scotland?",
        options: [
          "Edinburgh",
          "Dundee",
          "Glasgow",
          "London"
        ],
        answer: 0
      },
      {
        question: "Which UK country features a dragon on their flag?",
        options: [
          "Wales",
          "Scotland",
          "England",
          "North Ireland"
        ],
        answer: 0
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
        question: "What is the capital city of the US state of North Carolina?",
        options: [
          "Denver",
          "Phoenix",
          "Raleigh",
          "Olympia"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Washington?",
        options: [
          "Boston",
          "Albany",
          "Olympia",
          "Sacramento"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Nevada?",
        options: [
          "Raleigh",
          "Albany",
          "Columbus",
          "Carson City"
        ],
        answer: 3
      },
      {
        question: "What is the capital city of the US state of Hawaii?",
        options: [
          "Columbus",
          "Honolulu",
          "Tallahassee",
          "Raleigh"
        ],
        answer: 1
      },
      {
        question: "Which of these African regions does *not* directly border the Democratic Republic of The Congo?",
        options: [
          "Sudan",
          "Tanzania",
          "Zambia",
          "Central African Republic"
        ],
        answer: 0
      },
      {
        question: "Where would you find the \"Spanish Steps\"?",
        options: [
          "Rome, Italy",
          "London, England",
          "Barcelona, Spain",
          "Berlin, Germany"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Spain?",
        options: [
          "Madrid",
          "Barcelona",
          "Sevilla",
          "Toledo"
        ],
        answer: 0
      },
      {
        question: "What is the largest country in the world?",
        options: [
          "United States",
          "Canada",
          "Russia",
          "China"
        ],
        answer: 2
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
        question: "What is the capital city of the US state of California?",
        options: [
          "Sacramento",
          "Columbus",
          "Tallahassee",
          "Phoenix"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the US state of Massachusetts?",
        options: [
          "Boston",
          "Atlanta",
          "Olympia",
          "Austin"
        ],
        answer: 0
      },
      {
        question: "What Texas city is nicknamed \"The Yellow Rose of Texas\"?",
        options: [
          "Amarillo",
          "Houston",
          "Corpus Christi",
          "Frisco"
        ],
        answer: 0
      },
      {
        question: "Which of these countries is not a United Nations member state?",
        options: [
          "Montenegro",
          "Tuvalu",
          "Niue",
          "South Sudan"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of Slovenia?",
        options: [
          "Maribor",
          "Trbovlje",
          "Velenje",
          "Ljubljana"
        ],
        answer: 3
      },
      {
        question: "What was the African nation of Zimbabwe formerly known as?",
        options: [
          "Rhodesia",
          " Bulawayo",
          "Mozambique",
          "Zambia"
        ],
        answer: 0
      },
      {
        question: "How many countries does Spain have a land border with?",
        options: [
          "4",
          "3",
          "5",
          "2"
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
        question: "What is the capital city of the US state of New York?",
        options: [
          "Albany",
          "Denver",
          "Honolulu",
          "Austin"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the US state of Michigan?",
        options: [
          "Phoenix",
          "Denver",
          "Lansing",
          "Olympia"
        ],
        answer: 2
      },
      {
        question: "What is the capital city of the US state of Colorado?",
        options: [
          "Lansing",
          "Sacramento",
          "Carson City",
          "Denver"
        ],
        answer: 3
      },
      {
        question: "Which country has three capital cities?",
        options: [
          "Somalia",
          "United Kingdom",
          "China",
          "South Africa"
        ],
        answer: 3
      },
      {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
        options: [
          "Africa",
          "South America",
          "Europe",
          "Asia"
        ],
        answer: 0
      },
      {
        question: "How many time zones are in Russia?",
        options: [
          "2",
          "5",
          "8",
          "11"
        ],
        answer: 3
      },
      {
        question: "The towns of Brugelette, Arlon and Ath are located in which country?",
        options: [
          "Belgium",
          "Andorra",
          "Luxembourg",
          "France"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the U.S. state of Texas?",
        options: [
          "Houston",
          "Austin",
          "Dallas",
          "San Antonio"
        ],
        answer: 1
      },
      {
        question: "What event led to Liechenstein adding a crown to its flag?",
        options: [
          "Coronation of Prince Johann I Joseph in 1805",
          "Charles VI's decree in 1719",
          "Signing of the 1862 Constitution of Liechtenstein",
          "The 1936 Olympics"
        ],
        answer: 3
      },
      {
        question: "What continent is the country Lesotho in?",
        options: [
          "Europe",
          "Africa",
          "Asia",
          "South America"
        ],
        answer: 1
      },
      {
        question: "Which of the following countries is an island?",
        options: [
          "Djibouti",
          "El Salvador",
          "Cyprus",
          "Azerbaijan"
        ],
        answer: 2
      },
      {
        question: "What is the longest river in Europe?",
        options: [
          "Volga",
          "Rhine",
          "Thames",
          "Danube"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of New Zealand?",
        options: [
          "Auckland",
          "Christchurch",
          "Melbourne",
          "Wellington"
        ],
        answer: 3
      },
      {
        question: "What is the capital of Vietnam?",
        options: [
          "Hanoi",
          "Hai Phong",
          "Da Nang",
          "Ho Chi Minh City"
        ],
        answer: 0
      },
      {
        question: "How many countries are larger than Australia?",
        options: [
          "5",
          "6",
          "3",
          "4"
        ],
        answer: 0
      },
      {
        question: "Colchester Overpass, otherwise known as \"Bunny Man Bridge\", is located where?",
        options: [
          "Fairfax County, Virginia",
          "Lemon Grove, California",
          "Medford, Oregon",
          "Braxton County, Virgina"
        ],
        answer: 0
      },
      {
        question: "Which of these country's capitals starts with the letter B?",
        options: [
          "Lebanon",
          "Qatar",
          "Jordan",
          "Kuwait"
        ],
        answer: 0
      },
      {
        question: "What is the official language of Bhutan?",
        options: [
          "Ladakhi",
          "Dzongkha",
          "Karen",
          "Groma"
        ],
        answer: 1
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
        question: "Which of the following is the capital city of Mongolia?",
        options: [
          "Nairobi",
          "Monaco",
          "Asmara",
          "Ulaanbaatar"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Nigeria?",
        options: [
          "Valletta",
          "Havana",
          "Vaduz",
          "Abuja"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Iceland?",
        options: [
          "Asmara",
          "Reykjavik",
          "Lima",
          "Quito"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Kenya?",
        options: [
          "Tashkent",
          "Nicosia",
          "Valletta",
          "Nairobi"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Peru?",
        options: [
          "Nairobi",
          "Lima",
          "Asmara",
          "Suva"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Chile?",
        options: [
          "Monaco",
          "Tashkent",
          "Tegucigalpa",
          "Santiago"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Finland?",
        options: [
          "Kyiv",
          "Quito",
          "Asmara",
          "Helsinki"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Poland?",
        options: [
          "Warsaw",
          "Vaduz",
          "Abuja",
          "Monaco"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Ukraine?",
        options: [
          "Astana",
          "Belmopan",
          "Warsaw",
          "Kyiv"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Morocco?",
        options: [
          "Tashkent",
          "Rabat",
          "Nairobi",
          "Suva"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Ecuador?",
        options: [
          "Paramaribo",
          "Astana",
          "Quito",
          "Georgetown"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Cuba?",
        options: [
          "Havana",
          "Helsinki",
          "Reykjavik",
          "Suva"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Madagascar?",
        options: [
          "Antananarivo",
          "Havana",
          "Tegucigalpa",
          "Belmopan"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Uzbekistan?",
        options: [
          "Georgetown",
          "Tashkent",
          "Abuja",
          "Quito"
        ],
        answer: 1
      },
      {
        question: "Which of the following is the capital city of Kazakhstan?",
        options: [
          "Djibouti",
          "Lima",
          "Astana",
          "Antananarivo"
        ],
        answer: 2
      },
      {
        question: "Which of the following is the capital city of Liechtenstein?",
        options: [
          "Vaduz",
          "Astana",
          "Nairobi",
          "Helsinki"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Monaco?",
        options: [
          "Georgetown",
          "Warsaw",
          "Lima",
          "Monaco"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Fiji?",
        options: [
          "Suva",
          "Lima",
          "Nairobi",
          "Reykjavik"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Malta?",
        options: [
          "Djibouti",
          "Rabat",
          "Abuja",
          "Valletta"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Cyprus?",
        options: [
          "Nicosia",
          "Reykjavik",
          "Helsinki",
          "Warsaw"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Eritrea?",
        options: [
          "Havana",
          "Suva",
          "Abuja",
          "Asmara"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Djibouti?",
        options: [
          "Djibouti",
          "Vaduz",
          "Antananarivo",
          "Asmara"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Suriname?",
        options: [
          "Havana",
          "Djibouti",
          "Tashkent",
          "Paramaribo"
        ],
        answer: 3
      },
      {
        question: "Which of the following is the capital city of Guyana?",
        options: [
          "Georgetown",
          "Lima",
          "Nicosia",
          "Rabat"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Belize?",
        options: [
          "Belmopan",
          "Warsaw",
          "Rabat",
          "Monaco"
        ],
        answer: 0
      },
      {
        question: "Which of the following is the capital city of Honduras?",
        options: [
          "Tegucigalpa",
          "Vaduz",
          "Havana",
          "Ulaanbaatar"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the US state of Florida?",
        options: [
          "Tallahassee",
          "Carson City",
          "Boston",
          "Denver"
        ],
        answer: 0
      },
      {
        question: "What is the capital city of the US state of Ohio?",
        options: [
          "Springfield",
          "Olympia",
          "Carson City",
          "Columbus"
        ],
        answer: 3
      },
      {
        question: "The White Cliffs of Dover is located in which country?",
        options: [
          "Netherlands",
          "United States",
          "United Kingdom",
          "Sweden"
        ],
        answer: 2
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
        question: "The Japanese district Akihabara is also known by what nickname?",
        options: [
          "Big Eyes",
          "Otaku Central ",
          "Moon Walk River",
          "Electric Town"
        ],
        answer: 3
      },
      {
        question: "What city is the Terracotta Army located in?",
        options: [
          "Xi'an",
          "Beijing",
          "Shanghai",
          "Hong Kong"
        ],
        answer: 0
      },
      {
        question: "Bridgetown is the capital of which island country in the Carribean?",
        options: [
          "Dominica",
          "Barbados",
          "Cuba",
          "Jamaica‎"
        ],
        answer: 1
      },
      {
        question: "What's the first National Park designated in the United States?",
        options: [
          "Rocky Mountain",
          "Yosemite",
          "Sequoia ",
          "Yellowstone"
        ],
        answer: 3
      },
      {
        question: "What is the name of the only remaining Grand Duchy in the world ?",
        options: [
          "Luxembourg",
          "Liechtenstein",
          "Andorra",
          "Montenegro"
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
        question: "Which state of the United States is the smallest?",
        options: [
          "Rhode Island ",
          "Maine",
          "Vermont",
          "Massachusetts"
        ],
        answer: 0
      },
      {
        question: "What is the capital of the US state Nevada?",
        options: [
          "Henderson",
          "Carson City",
          "Las Vegas",
          "Reno"
        ],
        answer: 1
      },
      {
        question: "All of the following countries have official claims to territory in Antartica EXCEPT:",
        options: [
          "United States",
          "Chile",
          "Norway",
          "Australia"
        ],
        answer: 0
      },
      {
        question: "What is the capital of Lithuania?",
        options: [
          "Riga",
          "Helsinki",
          "Vilnius",
          "Tallinn"
        ],
        answer: 2
      },
      {
        question: "In which country is located the municipality of Arteijo?",
        options: [
          "Belgium",
          "France",
          "Spain",
          "Morocco"
        ],
        answer: 2
      },
      {
        question: "In which English county is Stonehenge?",
        options: [
          "Wiltshire",
          "Herefordshire",
          "Cumbria",
          "Somerset"
        ],
        answer: 0
      },
      {
        question: "Which of these is NOT an island that is part of the Philippines?",
        options: [
          "Luzon",
          "Palawan",
          "Java",
          "Mindanao"
        ],
        answer: 2
      },
      {
        question: "Which is the only US state located entirely within the Appalachia region?",
        options: [
          "Kentucky",
          "West Virginia",
          "Pennsylvania",
          "Alabama"
        ],
        answer: 1
      },
      {
        question: "Which of these American cities has fewer than 1,000,000 people?",
        options: [
          "Philadelphia, Pennsylvania",
          "San Antonio, Texas",
          "San Francisco, California",
          "Phoenix, Arizona"
        ],
        answer: 2
      },
      {
        question: "How many rivers are in Saudi Arabia?",
        options: [
          "1",
          "2",
          "0",
          "3"
        ],
        answer: 2
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
        question: "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
        options: [
          "Crown",
          "Bird",
          "Tree",
          "Sickle"
        ],
        answer: 0
      },
      {
        question: "What is Canada's largest island?",
        options: [
          "Prince Edward Island",
          "Newfoundland",
          "Vancouver Island",
          "Baffin Island"
        ],
        answer: 3
      },
      {
        question: "Which of these is an official currency of the Cook Islands?",
        options: [
          "United States Dollar",
          "British Pound",
          "New Zealand Dollar",
          "Australian Dollar"
        ],
        answer: 2
      },
      {
        question: "What city is known as the Rose Capital of the World?",
        options: [
          "San Diego, California",
          "Miami, Florida",
          "Tyler, Texas",
          "Anaheim, California"
        ],
        answer: 2
      },
      {
        question: "Santorini is an island belonging to what European Country?",
        options: [
          "Turkey",
          "Greece",
          "Italy",
          "Spain"
        ],
        answer: 1
      },
      {
        question: "What is the most common climbing route for the second highest mountain in the world, K2?",
        options: [
          "Cesen Route",
          "Polish Line",
          "Magic Line",
          "Abruzzi Spur"
        ],
        answer: 3
      },
      {
        question: "Where is the city of Haarlem located?",
        options: [
          "Switzerland",
          "The Netherlands",
          "Germany",
          "United States"
        ],
        answer: 1
      },
      {
        question: "Which is the largest freshwater lake in the world?",
        options: [
          "Lake Superior ",
          "Lake Huron",
          "Lake Michigan",
          "Caspian Sea"
        ],
        answer: 0
      },
      {
        question: "Which of these island countries is located in the Caribbean?",
        options: [
          "Fiji",
          "Seychelles",
          "Maldives",
          "Barbados"
        ],
        answer: 3
      },
      {
        question: "Which of the following is a castle?",
        options: [
          "Frank Castle",
          "Richard Castle",
          "Elizabeth Castle",
          "Olivia Castle"
        ],
        answer: 2
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
        question: "What is the administrative centre and largest settlement on the Norwegian archipelago of Svalbard?",
        options: [
          "Barentsburg",
          "Ny-Ålesund",
          "Sveagruva",
          "Longyearbyen"
        ],
        answer: 3
      },
      {
        question: "Which is not a country in Africa?",
        options: [
          "Senegal",
          "Somalia",
          "Guyana",
          "Liberia"
        ],
        answer: 2
      },
      {
        question: "With which country does France share its largest land border",
        options: [
          "Canada",
          "Germany",
          "Spain",
          "Brazil"
        ],
        answer: 3
      },
      {
        question: "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch is located on which Welsh island?",
        options: [
          "Bardsey",
          "Anglesey",
          "Caldey",
          "Barry"
        ],
        answer: 1
      },
      {
        question: "What is the capital city of Bermuda?",
        options: [
          "San Juan",
          "Santo Dominigo",
          "Hamilton",
          "Havana"
        ],
        answer: 2
      },
      {
        question: "Where is Fort Marlborough located?",
        options: [
          "London",
          "Bengkulu",
          "Dover",
          "Singapore"
        ],
        answer: 1
      },
      {
        question: "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
        options: [
          "Great Barrier Reef",
          "Hudson Bay",
          "Grand Banks",
          "Mariana Trench"
        ],
        answer: 2
      },
      {
        question: "What is the second-largest city in Lithuania?",
        options: [
          "Kaunas",
          "Panevėžys",
          "Vilnius",
          "Klaipėda"
        ],
        answer: 0
      },
      {
        question: "What is the county seat of King County, Washington?",
        options: [
          "Bellevue",
          "Enumclaw",
          "Skykomish",
          "Seattle"
        ],
        answer: 3
      },
      {
        question: "What is the largest city and commercial capital of Sri Lanka?",
        options: [
          "Kandy",
          "Colombo",
          "Negombo",
          "Moratuwa"
        ],
        answer: 1
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