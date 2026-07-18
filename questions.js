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
        options: ["5th September", "14th November", "2nd October", "26th January"],
        answer: 1
      },
      {
        question: "Which of these is the national flower of India?",
        options: ["Lotus", "Rose", "Marigold", "Jasmine"],
        answer: 0
      },
      {
        question: "How many months are there in a single calendar year?",
        options: ["10", "11", "12", "13"],
        answer: 2
      }
    ],
    2: [
      {
        question: "Who is known as the 'Iron Man of India'?",
        options: ["Subhash Chandra Bose", "Lal Bahadur Shastri", "Sardar Vallabhbhai Patel", "Bal Gangadhar Tilak"],
        answer: 2
      },
      {
        question: "Which Indian festival is known as the 'Festival of Lights'?",
        options: ["Holi", "Diwali", "Eid", "Navratri"],
        answer: 1
      },
      {
        question: "Which of the following is the national animal of India?",
        options: ["Lion", "Elephant", "Royal Bengal Tiger", "Leopard"],
        answer: 2
      }
    ],
    3: [
      {
        question: "What is the national currency of India?",
        options: ["Rupee", "Dinar", "Dollar", "Taka"],
        answer: 0
      },
      {
        question: "Which city is known as the 'Pink City' of India?",
        options: ["Jodhpur", "Udaipur", "Jaipur", "Bikaner"],
        answer: 2
      },
      {
        question: "How many days are there in a standard leap year?",
        options: ["364", "365", "366", "367"],
        answer: 2
      }
    ],
    4: [
      {
        question: "The word 'Satyameva Jayate' inscribed on the State Emblem of India is taken from which text?",
        options: ["Rigveda", "Bhagavad Gita", "Mundaka Upanishad", "Sama Veda"],
        answer: 2
      },
      {
        question: "How many colors are there in the National Flag of India (excluding the Ashoka Chakra)?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 1
      },
      {
        question: "Which is the largest state in India by geographical area?",
        options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
        answer: 2
      }
    ],
    5: [
      {
        question: "Who was the first President of independent India?",
        options: ["Dr. S. Radhakrishnan", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "V. V. Giri"],
        answer: 1
      },
      {
        question: "Which organ in the human body is primarily responsible for pumping blood?",
        options: ["Lungs", "Brain", "Kidneys", "Heart"],
        answer: 3
      },
      {
        question: "Which country shares the longest land border with India?",
        options: ["China", "Pakistan", "Bangladesh", "Nepal"],
        answer: 2
      }
    ],
    6: [
      {
        question: "Who composed the National Song of India, 'Vande Mataram'?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Sri Aurobindo"],
        answer: 1
      },
      {
        question: "Which of the following is the highest civilian award in India?",
        options: ["Padma Vibhushan", "Bharat Ratna", "Param Vir Chakra", "Sahitya Akademi Award"],
        answer: 1
      },
      {
        question: "Which state is known as the 'Spice Garden of India'?",
        options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
        answer: 2
      }
    ],
    7: [
      {
        question: "In which year did India celebrate its first Republic Day?",
        options: ["1947", "1950", "1952", "1948"],
        answer: 1
      },
      {
        question: "Who is the chief architect of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Sardar Patel"],
        answer: 2
      },
      {
        question: "The famous slogan 'Jai Jawan Jai Kisan' was coined by which Indian Prime Minister?",
        options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Atal Bihari Vajpayee"],
        answer: 1
      }
    ],
    8: [
      {
        question: "The legal voting age in India was reduced from 21 to 18 years by which Constitutional Amendment?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        answer: 2
      },
      {
        question: "Which of the following is the oldest mountain range in India?",
        options: ["Himalayas", "Aravalli Range", "Western Ghats", "Satpura Range"],
        answer: 1
      },
      {
        question: "Who was the first Indian to win a Nobel Prize?",
        options: ["C. V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
        answer: 1
      }
    ],
    9: [
      {
        question: "Which Viceroy of India partitioned Bengal in 1905?",
        options: ["Lord Dalhousie", "Lord Curzon", "Lord Mountbatten", "Lord Canning"],
        answer: 1
      },
      {
        question: "Which Indian state has the longest coastline?",
        options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
        answer: 2
      },
      {
        question: "Which monument was built by Emperor Shah Jahan to honor his wife?",
        options: ["Qutub Minar", "Red Fort", "Taj Mahal", "Jama Masjid"],
        answer: 2
      }
    ],
    10: [
      {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Pratibha Patil", "Sarojini Naidu", "Indira Gandhi", "Sucheta Kripalani"],
        answer: 2
      },
      {
        question: "The famous 'Quit India Movement' was launched by Mahatma Gandhi in which year?",
        options: ["1930", "1942", "1919", "1945"],
        answer: 1
      },
      {
        question: "Which commission was sent to India in 1928 to look into the constitutional system, leading to widespread boycotts?",
        options: ["Cripps Mission", "Cabinet Mission", "Simon Commission", "Hunter Commission"],
        answer: 2
      }
    ],
    11: [
      {
        question: "Who was the first Governor-General of independent India?",
        options: ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
        answer: 0
      },
      {
        question: "In the context of ancient Indian history, what does the term 'Dharma Chakra Pravartana' refer to?",
        options: ["The birth of Buddha", "Buddha's first sermon", "Buddha's death", "Buddha's renunciation"],
        answer: 1
      },
      {
        question: "Which treaty was signed in 1765 after the Battle of Buxar, granting diwani rights of Bengal to the British?",
        options: ["Treaty of Allahabad", "Treaty of Alinagar", "Treaty of Paris", "Treaty of Seringapatam"],
        answer: 0
      }
    ],
    12: [
      {
        question: "Which Article of the Indian Constitution provides for the declaration of a National Emergency?",
        options: ["Article 352", "Article 356", "Article 360", "Article 370"],
        answer: 0
      },
      {
        question: "Who was the English merchant who obtained a farman from Emperor Jahangir to trade in India?",
        options: ["Sir Thomas Roe", "Captain William Hawkins", "Job Charnock", "Robert Clive"],
        answer: 1
      },
      {
        question: "Which social reformer founded the 'Satyashodhak Samaj' in Maharashtra in 1873?",
        options: ["Jyotirao Phule", "Dr. B. R. Ambedkar", "Bal Gangadhar Tilak", "Mahadev Govind Ranade"],
        answer: 0
      }
    ],
    13: [
      {
        question: "The treaty of Srirangapatna was signed between Tipu Sultan and whom?",
        options: ["Robert Clive", "Warren Hastings", "Lord Cornwallis", "Lord Wellesley"],
        answer: 2
      },
      {
        question: "Which session of the Indian National Congress was presided over by Mahatma Gandhi?",
        options: ["Lahore Session 1929", "Belgaum Session 1924", "Haripura Session 1938", "Calcutta Session 1920"],
        answer: 1
      },
      {
        question: "Who was the founder of the Indian Association in 1876, one of the earliest political organizations?",
        options: ["Surendranath Banerjee", "Dadabhai Naoroji", "Womesh Chandra Bonnerjee", "Gopal Krishna Gokhale"],
        answer: 0
      }
    ],
    14: [
      {
        question: "Who among the following was the founder of the Brahmo Samaj in 1828?",
        options: ["Swami Vivekananda", "Ishwar Chandra Vidyasagar", "Raja Ram Mohan Roy", "Dayananda Saraswati"],
        answer: 2
      },
      {
        question: "During whose reign did the Chinese traveler Hiuen Tsang visit India?",
        options: ["Chandragupta Maurya", "Harshavardhana", "Samudragupta", "Ashoka"],
        answer: 1
      },
      {
        question: "Which Buddhist council was held during the reign of Emperor Ashoka at Pataliputra?",
        options: ["First Council", "Second Council", "Third Council", "Fourth Council"],
        answer: 2
      }
    ],
    15: [
      {
        question: "Which of the following books was written by the ancient Indian mathematician Aryabhata?",
        options: ["Siddhanta Shiromani", "Aryabhatiya", "Ganita Kaumudi", "Lilavati"],
        answer: 1
      },
      {
        question: "Who was the first woman to become the President of the Indian National Congress?",
        options: ["Sarojini Naidu", "Nellie Sengupta", "Annie Besant", "Aruna Asaf Ali"],
        answer: 2
      },
      {
        question: "Who was the leader of the Bardoli Satyagraha in 1928, receiving the title of 'Sardar'?",
        options: ["Mahatma Gandhi", "Vallabhbhai Patel", "Jawaharlal Nehru", "Mahadev Desai"],
        answer: 1
      }
    ],
    16: [
      {
        question: "Which Mughal Emperor was exiled to Rangoon by the British after the Revolt of 1857?",
        options: ["Bahadur Shah Zafar", "Shah Alam II", "Akbar Shah II", "Farrukhsiyar"],
        answer: 0
      },
      {
        question: "Which of the following Upanishads is the shortest, containing only 12 verses?",
        options: ["Katha Upanishad", "Isha Upanishad", "Mandukya Upanishad", "Kena Upanishad"],
        answer: 2
      },
      {
        question: "Who was the first Indian woman President of the United Nations General Assembly?",
        options: ["Vijayalakshmi Pandit", "Sarojini Naidu", "Indira Gandhi", "Rajkumari Amrit Kaur"],
        answer: 0
      }
    ]
  },
  science: {
    1: [
      {
        question: "Which planet in our solar system is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "O2", "H2O", "NaCl"],
        answer: 2
      },
      {
        question: "Which of these is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        answer: 3
      }
    ],
    2: [
      {
        question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2
      },
      {
        question: "Which force pulls objects toward the center of the Earth?",
        options: ["Magnetic Force", "Friction", "Gravity", "Centrifugal Force"],
        answer: 2
      },
      {
        question: "How many bones are there in an adult human skeleton?",
        options: ["180", "206", "214", "300"],
        answer: 1
      }
    ],
    3: [
      {
        question: "What is the closest star to the Earth?",
        options: ["Sirius", "Proxima Centauri", "The Sun", "Betelgeuse"],
        answer: 2
      },
      {
        question: "Which of these is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: 2
      },
      {
        question: "Which organ in the human body filters waste from the blood?",
        options: ["Liver", "Lungs", "Kidneys", "Stomach"],
        answer: 2
      }
    ],
    4: [
      {
        question: "What is the boiling point of pure water at standard atmospheric pressure?",
        options: ["90 °C", "100 °C", "120 °C", "80 °C"],
        answer: 1
      },
      {
        question: "Which instrument is used to measure body temperature?",
        options: ["Barometer", "Thermometer", "Lactometer", "Speedometer"],
        answer: 1
      },
      {
        question: "Which blood cells are responsible for carrying oxygen throughout the body?",
        options: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
        answer: 1
      }
    ],
    5: [
      {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: 2
      },
      {
        question: "Deficiency of Vitamin A in human diet leads to which disease?",
        options: ["Scurvy", "Rickets", "Night Blindness", "Beriberi"],
        answer: 2
      },
      {
        question: "What is the process by which liquid water turns into gas?",
        options: ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        answer: 1
      }
    ],
    6: [
      {
        question: "Which scientist proposed the Theory of Relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
        answer: 1
      },
      {
        question: "What is the primary source of energy for all living organisms on Earth?",
        options: ["The Earth's Core", "The Oceans", "The Sun", "Volcanoes"],
        answer: 2
      },
      {
        question: "Which of the following is a non-metal that remains liquid at room temperature?",
        options: ["Mercury", "Bromine", "Gallium", "Chlorine"],
        answer: 1
      }
    ],
    7: [
      {
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Fe", "Gd"],
        answer: 1
      },
      {
        question: "Which planet is the largest in our solar system?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        answer: 2
      },
      {
        question: "Which acid is present in lemons, giving them a sour taste?",
        options: ["Lactic Acid", "Citric Acid", "Acetic Acid", "Hydrochloric Acid"],
        answer: 1
      }
    ],
    8: [
      {
        question: "How many teeth does an adult human typically have?",
        options: ["28", "30", "32", "34"],
        answer: 2
      },
      {
        question: "Which part of the cell is known as the 'powerhouse of the cell'?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        answer: 1
      },
      {
        question: "What unit is used to measure electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: 2
      }
    ],
    9: [
      {
        question: "What is the speed of light in vacuum (approximate)?",
        options: ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: 1
      },
      {
        question: "Which part of the human eye is responsible for controlling the size of the pupil?",
        options: ["Retina", "Cornea", "Iris", "Lens"],
        answer: 2
      },
      {
        question: "Which chemical element has the highest melting point?",
        options: ["Tungsten", "Carbon", "Platinum", "Titanium"],
        answer: 0
      }
    ],
    10: [
      {
        question: "Who discovered Penicillin, the first effective antibiotic?",
        options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
        answer: 1
      },
      {
        question: "What is the chemical name for common table salt?",
        options: ["Sodium Bicarbonate", "Sodium Chloride", "Calcium Carbonate", "Potassium Hydroxide"],
        answer: 1
      },
      {
        question: "What type of lens is used to correct short-sightedness (Myopia)?",
        options: ["Convex Lens", "Concave Lens", "Bifocal Lens", "Cylindrical Lens"],
        answer: 1
      }
    ],
    11: [
      {
        question: "Which subatomic particle has a negative electrical charge?",
        options: ["Proton", "Neutron", "Electron", "Positron"],
        answer: 2
      },
      {
        question: "Which gas is used to inflate hot air balloons because it is lighter than air?",
        options: ["Helium", "Oxygen", "Carbon Dioxide", "Nitrogen"],
        answer: 0
      },
      {
        question: "What is the name of the process where gas turns directly into solid without passing through the liquid phase?",
        options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
        answer: 1
      }
    ],
    12: [
      {
        question: "What type of mirror is used as a rear-view mirror in vehicles?",
        options: ["Plane Mirror", "Concave Mirror", "Convex Mirror", "Double-convex Mirror"],
        answer: 2
      },
      {
        question: "Which endocrine gland is often referred to as the 'Master Gland' of the human body?",
        options: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pancreas"],
        answer: 2
      },
      {
        question: "In thermodynamics, what is absolute zero temperature in Celsius?",
        options: ["0 °C", "-100 °C", "-273.15 °C", "-312.45 °C"],
        answer: 2
      }
    ],
    13: [
      {
        question: "What is the escape velocity of Earth (approximate speed needed to break free from Earth's gravity)?",
        options: ["7.2 km/s", "9.8 km/s", "11.2 km/s", "15.4 km/s"],
        answer: 2
      },
      {
        question: "Which element has the atomic number 1 on the Periodic Table?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: 1
      },
      {
        question: "What is the chemical name for laughing gas?",
        options: ["Nitric Oxide", "Nitrous Oxide", "Nitrogen Dioxide", "Dinitrogen Pentoxide"],
        answer: 1
      }
    ],
    14: [
      {
        question: "Which layer of the Earth's atmosphere contains the ozone layer that protects us from UV rays?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        answer: 1
      },
      {
        question: "Dry ice is the solid form of which gas?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Methane"],
        answer: 2
      },
      {
        question: "Which alloy is composed of copper and zinc?",
        options: ["Bronze", "Steel", "Brass", "Solder"],
        answer: 2
      }
    ],
    15: [
      {
        question: "What is the primary fuel used in nuclear reactors?",
        options: ["Coal", "Uranium-235", "Helium-3", "Plutonium-238"],
        answer: 1
      },
      {
        question: "Who is known as the father of modern genetics?",
        options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"],
        answer: 1
      },
      {
        question: "Which component of the blood triggers clotting to stop bleeding?",
        options: ["Platelets", "Red Blood Cells", "Hemoglobin", "Plasma"],
        answer: 0
      }
    ],
    16: [
      {
        question: "Which elementary particle is considered the carrier of electromagnetic force?",
        options: ["Gluon", "Photon", "W Boson", "Graviton"],
        answer: 1
      },
      {
        question: "What is the approximate age of our Universe according to modern cosmology?",
        options: ["4.5 billion years", "13.8 billion years", "20.1 billion years", "8.2 billion years"],
        answer: 1
      },
      {
        question: "Which fundamental force of nature keeps protons and neutrons bound inside the atomic nucleus?",
        options: ["Gravity", "Electromagnetic Force", "Strong Nuclear Force", "Weak Nuclear Force"],
        answer: 2
      }
    ]
  },
  sports: {
    1: [
      {
        question: "How many players are there in a standard cricket team on the field?",
        options: ["9", "10", "11", "12"],
        answer: 2
      },
      {
        question: "Which sport is associated with the term 'Free Kick'?",
        options: ["Cricket", "Football", "Basketball", "Badminton"],
        answer: 1
      },
      {
        question: "How many colors are there in the rings of the Olympic flag?",
        options: ["3", "4", "5", "6"],
        answer: 2
      }
    ],
    2: [
      {
        question: "Who is widely referred to as the 'God of Cricket' in India?",
        options: ["Virat Kohli", "Mahendra Singh Dhoni", "Sachin Tendulkar", "Kapil Dev"],
        answer: 2
      },
      {
        question: "In which sport would you use a racket to hit a shuttlecock?",
        options: ["Tennis", "Table Tennis", "Badminton", "Squash"],
        answer: 2
      },
      {
        question: "What is the distance of a standard penalty kick in football from the goal line?",
        options: ["8 yards", "10 yards", "12 yards", "14 yards"],
        answer: 2
      }
    ],
    3: [
      {
        question: "How many rings are there on the official Olympic flag?",
        options: ["Four", "Five", "Six", "Seven"],
        answer: 1
      },
      {
        question: "Which country is the birthplace of the game of Chess?",
        options: ["China", "India", "Russia", "Persia"],
        answer: 1
      },
      {
        question: "Which country hosts the famous Grand Slam tennis tournament called Roland Garros?",
        options: ["United Kingdom", "United States", "France", "Australia"],
        answer: 2
      }
    ],
    4: [
      {
        question: "Who was the captain of the Indian cricket team that won the 1983 World Cup?",
        options: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Mohinder Amarnath"],
        answer: 1
      },
      {
        question: "What is the national game of India?",
        options: ["Cricket", "Kabaddi", "Field Hockey", "Football"],
        answer: 2
      },
      {
        question: "In which sport is the term 'Deuce' used?",
        options: ["Cricket", "Football", "Tennis", "Chess"],
        answer: 2
      }
    ],
    5: [
      {
        question: "Which of the following tennis tournaments is played on grass courts?",
        options: ["French Open", "US Open", "Australian Open", "Wimbledon"],
        answer: 3
      },
      {
        question: "How many squares are there on a standard chessboard?",
        options: ["32", "48", "64", "80"],
        answer: 2
      },
      {
        question: "What is the term for three consecutive strikes in the game of Bowling?",
        options: ["Turkey", "Triple", "Strike-Out", "Jackpot"],
        answer: 0
      }
    ],
    6: [
      {
        question: "Who was the first Indian woman to win an individual Olympic medal?",
        options: ["P. T. Usha", "Karnam Malleswari", "Saina Nehwal", "Mary Kom"],
        answer: 1
      },
      {
        question: "With which sport is the term 'Checkmate' associated?",
        options: ["Boxing", "Wrestling", "Chess", "Archery"],
        answer: 2
      },
      {
        question: "Which country has won the maximum number of Cricket World Cups (5 times)?",
        options: ["India", "West Indies", "Australia", "England"],
        answer: 2
      }
    ],
    7: [
      {
        question: "Who holds the world record for the fastest 100m sprint?",
        options: ["Tyson Gay", "Yohan Blake", "Usain Bolt", "Carl Lewis"],
        answer: 2
      },
      {
        question: "Which country has won the FIFA World Cup the most number of times?",
        options: ["Germany", "Italy", "Argentina", "Brazil"],
        answer: 3
      },
      {
        question: "Which international sport uses a light ball of diameter 40mm and weight 2.7g, hit across a table divided by a net?",
        options: ["Tennis", "Table Tennis", "Squash", "Badminton"],
        answer: 1
      }
    ],
    8: [
      {
        question: "Which Indian sportsperson is nicknamed the 'Haryana Hurricane'?",
        options: ["Kapil Dev", "Yuvraj Singh", "Sushil Kumar", "Virender Sehwag"],
        answer: 0
      },
      {
        question: "What is the maximum possible break (score) in a standard game of Snooker, without penalties?",
        options: ["140", "147", "155", "162"],
        answer: 1
      },
      {
        question: "How many players are on the court for a single team in a Basketball game?",
        options: ["5", "6", "7", "8"],
        answer: 0
      }
    ],
    9: [
      {
        question: "Who was the first batsman to score a double century in a Men's One Day International (ODI) cricket match?",
        options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "Martin Guptill"],
        answer: 2
      },
      {
        question: "In badminton, which cup is competed for by men's national teams?",
        options: ["Uber Cup", "Thomas Cup", "Sudirman Cup", "Davis Cup"],
        answer: 1
      },
      {
        question: "Which country won the first-ever T20 Cricket World Cup in 2007?",
        options: ["Pakistan", "India", "Australia", "Sri Lanka"],
        answer: 1
      }
    ],
    10: [
      {
        question: "The legendary sportsman Major Dhyan Chand was associated with which sport?",
        options: ["Wrestling", "Shooting", "Hockey", "Athletics"],
        answer: 2
      },
      {
        question: "Which Formula 1 driver has won the most World Drivers' Championship titles (tied with Michael Schumacher)?",
        options: ["Sebastian Vettel", "Lewis Hamilton", "Max Verstappen", "Fernando Alonso"],
        answer: 1
      },
      {
        question: "In boxing, which weight class is immediately above featherweight?",
        options: ["Flyweight", "Lightweight", "Welterweight", "Middleweight"],
        answer: 1
      }
    ],
    11: [
      {
        question: "Which country hosted the first modern Olympic Games in 1896?",
        options: ["France", "Greece", "United Kingdom", "United States"],
        answer: 1
      },
      {
        question: "Who is the first Indian fencer to qualify for the Olympic Games?",
        options: ["Kavitha Devi", "Bhavani Devi", "Radhika Prasad", "Ankita Raina"],
        answer: 1
      },
      {
        question: "In golf, what is the score called when you hit the ball into the hole in one stroke less than par?",
        options: ["Eagle", "Birdie", "Bogey", "Albatross"],
        answer: 1
      }
    ],
    12: [
      {
        question: "In golf, what is the term for scoring three strokes under par on a single hole?",
        options: ["Eagle", "Birdie", "Albatross", "Bogey"],
        answer: 2
      },
      {
        question: "Which of the following Grand Slam tournaments is held first in a calendar year?",
        options: ["French Open", "US Open", "Wimbledon", "Australian Open"],
        answer: 3
      },
      {
        question: "Which country did the legendary footballer Diego Maradona play for internationally?",
        options: ["Brazil", "Argentina", "Uruguay", "Spain"],
        answer: 1
      }
    ],
    13: [
      {
        question: "Who was the first Indian individual Olympic gold medalist?",
        options: ["Abhinav Bindra", "Neeraj Chopra", "Leander Paes", "Rajyavardhan Singh Rathore"],
        answer: 0
      },
      {
        question: "What is the duration of a standard professional football (soccer) match, excluding extra time?",
        options: ["80 minutes", "90 minutes", "100 minutes", "70 minutes"],
        answer: 1
      },
      {
        question: "Which country hosted the 1930 inaugural FIFA World Cup?",
        options: ["Argentina", "Uruguay", "Brazil", "Italy"],
        answer: 1
      }
    ],
    14: [
      {
        question: "In which year did India win its first Olympic Gold Medal in Hockey?",
        options: ["1928", "1932", "1936", "1948"],
        answer: 0
      },
      {
        question: "Which female boxer won six World Amateur Boxing Championship titles?",
        options: ["Mary Kom", "Sarita Devi", "Lovlina Borgohain", "Nikhat Zareen"],
        answer: 0
      },
      {
        question: "In which Olympic Games did Usain Bolt set his world record of 9.58 seconds for the 100 meters sprint?",
        options: ["Beijing 2008", "London 2012", "Rio 2016", "Berlin World Championship 2009"],
        answer: 3
      }
    ],
    15: [
      {
        question: "Who is the only tennis player to achieve the Golden Slam (all 4 Grand Slams + Olympic Gold) in a single calendar year?",
        options: ["Steffi Graf", "Serena Williams", "Roger Federer", "Rafael Nadal"],
        answer: 0
      },
      {
        question: "In which country are the headquarters of the International Olympic Committee (IOC) located?",
        options: ["Switzerland", "France", "Greece", "Germany"],
        answer: 0
      },
      {
        question: "Who was the first track and field athlete from independent India to win an Olympic gold medal?",
        options: ["Milkha Singh", "Neeraj Chopra", "Anju Bobby George", "Abhinav Bindra"],
        answer: 1
      }
    ],
    16: [
      {
        question: "Who was the first cricketer to be awarded the Rajiv Gandhi Khel Ratna (now Major Dhyan Chand Khel Ratna) Award?",
        options: ["Sachin Tendulkar", "Kapil Dev", "Mahendra Singh Dhoni", "Virat Kohli"],
        answer: 0
      },
      {
        question: "What is the distance of a standard marathon race in kilometers?",
        options: ["42.195 km", "40.000 km", "45.500 km", "38.250 km"],
        answer: 0
      },
      {
        question: "Which cyclist won seven Tour de France titles consecutively before being stripped of them for doping?",
        options: ["Lance Armstrong", "Eddy Merckx", "Miguel Indurain", "Chris Froome"],
        answer: 0
      }
    ]
  },
  entertainment: {
    1: [
      {
        question: "Which of the following movies stars Amitabh Bachchan in the lead role as 'Vijay'?",
        options: ["Sholay", "Deewaar", "Dilwale Dulhania Le Jayenge", "Lagaan"],
        answer: 1
      },
      {
        question: "Who is the lead actor in the iconic movie 'Dilwale Dulhania Le Jayenge' (DDLJ)?",
        options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Akshay Kumar"],
        answer: 2
      },
      {
        question: "Which cartoon character lives in a pineapple under the sea?",
        options: ["Mickey Mouse", "SpongeBob SquarePants", "Donald Duck", "Bugs Bunny"],
        answer: 1
      }
    ],
    2: [
      {
        question: "Which Bollywood film features the song 'Jai Ho', which won an Academy Award?",
        options: ["Lagaan", "Taare Zameen Par", "Slumdog Millionaire", "3 Idiots"],
        answer: 2
      },
      {
        question: "Who directed the highly acclaimed movie '3 Idiots'?",
        options: ["Sanjay Leela Bhansali", "Karan Johar", "Rajkumar Hirani", "Anurag Kashyap"],
        answer: 2
      },
      {
        question: "In the movie 'Harry Potter', which house does Harry belong to at Hogwarts?",
        options: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
        answer: 3
      }
    ],
    3: [
      {
        question: "Which Indian actor played the character of 'Bhuvan' in the Oscar-nominated movie 'Lagaan'?",
        options: ["Aamir Khan", "Shah Rukh Khan", "Salman Khan", "Hrithik Roshan"],
        answer: 0
      },
      {
        question: "Who is known as the 'Nightingale of India' for her contribution to music?",
        options: ["Asha Bhosle", "Lata Mangeshkar", "Alka Yagnik", "Shreya Ghoshal"],
        answer: 1
      },
      {
        question: "Which movie is famous for the dialogue, 'Mogambo khush hua'?",
        options: ["Sholay", "Mr. India", "Shaan", "Karan Arjun"],
        answer: 1
      }
    ],
    4: [
      {
        question: "In the film 'Sholay', what was the name of the iconic villain played by Amjad Khan?",
        options: ["Mogambo", "Kancha Cheena", "Gabbar Singh", "Shakaal"],
        answer: 2
      },
      {
        question: "Which of these movies won the National Film Award for Best Feature Film in 2023?",
        options: ["RRR", "Rocketry: The Nambi Effect", "The Kashmir Files", "Gangubai Kathiawadi"],
        answer: 1
      },
      {
        question: "Who played the role of 'Jack Dawson' in the blockbuster romantic drama film Titanic?",
        options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"],
        answer: 2
      }
    ],
    5: [
      {
        question: "Who is the music composer of the song 'Naatu Naatu' from the film RRR?",
        options: ["A. R. Rahman", "M. M. Keeravani", "Pritam", "Santhosh Narayanan"],
        answer: 1
      },
      {
        question: "Which Bollywood movie is based on the life of Indian cricket captain Mahendra Singh Dhoni?",
        options: ["83", "M.S. Dhoni: The Untold Story", "Azhar", "Sachin: A Billion Dreams"],
        answer: 1
      },
      {
        question: "Which of these is the first superhero movie in the Marvel Cinematic Universe (MCU) released in 2008?",
        options: ["The Incredible Hulk", "Captain America: The First Avenger", "Iron Man", "Thor"],
        answer: 2
      }
    ],
    6: [
      {
        question: "Who is the host of the popular TV quiz show 'Kaun Banega Crorepati'?",
        options: ["Shah Rukh Khan", "Amitabh Bachchan", "Salman Khan", "Aamir Khan"],
        answer: 1
      },
      {
        question: "Which Indian director is famous for his films like 'Pather Panchali' and won an Honorary Oscar?",
        options: ["Satyajit Ray", "Raj Kapoor", "Guru Dutt", "Bimal Roy"],
        answer: 0
      },
      {
        question: "In the sitcom 'Friends', how many times has Ross Geller been married?",
        options: ["Once", "Twice", "Three times", "Four times"],
        answer: 2
      }
    ],
    7: [
      {
        question: "Which Bollywood actor is popularly known as the 'Khiladi' of Bollywood?",
        options: ["Sanjay Dutt", "Sunny Deol", "Akshay Kumar", "Suniel Shetty"],
        answer: 2
      },
      {
        question: "In the movie 'Dangal', Aamir Khan plays the role of which real-life wrestler?",
        options: ["Mahavir Singh Phogat", "Sushil Kumar", "Yogeshwar Dutt", "Bajrang Punia"],
        answer: 0
      },
      {
        question: "Which actor played the role of the Joker in the 2008 film 'The Dark Knight'?",
        options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
        answer: 2
      }
    ],
    8: [
      {
        question: "Which of these movies was India's official entry for the Best International Feature Film category at the 96th Academy Awards (2024)?",
        options: ["RRR", "2018 - Everyone is a Hero", "Jawan", "Rocky Aur Rani Kii Prem Kahaani"],
        answer: 1
      },
      {
        question: "Who won the National Film Award for Best Actor for his performance in the film 'Pushpa: The Rise'?",
        options: ["Ram Charan", "Jr. NTR", "Allu Arjun", "Yash"],
        answer: 2
      },
      {
        question: "Which TV show is set in the fictional continents of Westeros and Essos and features dragons?",
        options: ["Vikings", "The Witcher", "Game of Thrones", "Lord of the Rings"],
        answer: 2
      }
    ],
    9: [
      {
        question: "Which legendary playback singer holds the Guinness World Record for the most studio recordings?",
        options: ["Lata Mangeshkar", "Asha Bhosle", "Kishore Kumar", "P. Susheela"],
        answer: 1
      },
      {
        question: "Which of the following movies is directed by Christopher Nolan?",
        options: ["Avatar", "Inception", "Titanic", "The Matrix"],
        answer: 1
      },
      {
        question: "What was Deepika Padukone's debut movie in Bollywood?",
        options: ["Om Shanti Om", "Bachna Ae Haseeno", "Love Aaj Kal", "Cocktail"],
        answer: 0
      }
    ],
    10: [
      {
        question: "What was the debut film of actress Deepika Padukone in Bollywood?",
        options: ["Om Shanti Om", "Bachna Ae Haseeno", "Chandni Chowk to China", "Love Aaj Kal"],
        answer: 0
      },
      {
        question: "Who composed the background score and songs for the movie 'Roja' (1992), marking his debut in cinema?",
        options: ["Illaiyaraaja", "A. R. Rahman", "Harris Jayaraj", "Yuvan Shankar Raja"],
        answer: 1
      },
      {
        question: "In the movie 'Gangs of Wasseypur', which city is the focal point of the coal mafia wars?",
        options: ["Ranchi", "Dhanbad", "Jamshedpur", "Patna"],
        answer: 1
      }
    ],
    11: [
      {
        question: "Who wrote the novel 'Devdas', which has been adapted into several Bollywood films?",
        options: ["Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Munshi Premchand", "Bankim Chandra Chattopadhyay"],
        answer: 1
      },
      {
        question: "Which movie is officially recognized as the first full-length Indian feature film?",
        options: ["Alam Ara", "Raja Harishchandra", "Keechaka Vadham", "Ayodhyecha Raja"],
        answer: 1
      },
      {
        question: "Which Hollywood movie won the Best Picture Oscar at the 96th Academy Awards (2024)?",
        options: ["Barbie", "Oppenheimer", "Poor Things", "Killers of the Flower Moon"],
        answer: 1
      }
    ],
    12: [
      {
        question: "Which was the first talkie (sound) film made in India?",
        options: ["Raja Harishchandra", "Alam Ara", "Kismet", "Devdas"],
        answer: 1
      },
      {
        question: "Who directed the landmark historical drama film 'Mughal-e-Azam' (1960)?",
        options: ["K. Asif", "Mehboob Khan", "Bimal Roy", "Raj Kapoor"],
        answer: 0
      },
      {
        question: "Who wrote the script for the landmark Bollywood movie 'Sholay'?",
        options: ["Javed Akhtar & Salim Khan", "Gulzar & R.D. Burman", "Kader Khan", "Satyajit Ray"],
        answer: 0
      }
    ],
    13: [
      {
        question: "Who is the only Indian to win two Academy Awards (Oscars) in a single night?",
        options: ["A. R. Rahman", "Satyajit Ray", "Gulzar", "Resul Pookutty"],
        answer: 0
      },
      {
        question: "Which actress played the role of 'Mother India' in the 1957 Oscar-nominated film of the same name?",
        options: ["Meena Kumari", "Nargis Dutt", "Madhubala", "Vyjayanthimala"],
        answer: 1
      },
      {
        question: "Which actor played the role of British colonial administrator 'Captain Russell' in the movie Lagaan?",
        options: ["Paul Blackthorne", "Toby Stephens", "Tom Alter", "Bob Christo"],
        answer: 0
      }
    ],
    14: [
      {
        question: "Which film holds the record for winning the highest number of Academy Awards (Oscars) at 11, tied with Ben-Hur and Titanic?",
        options: ["The Godfather", "The Lord of the Rings: The Return of the King", "Avatar", "Schindler's List"],
        answer: 1
      },
      {
        question: "Who directed the Telugu epic action film 'Baahubali: The Beginning'?",
        options: ["Prashanth Neel", "S. S. Rajamouli", "Sukumar", "Trivikram Srinivas"],
        answer: 1
      },
      {
        question: "Who is the only Indian director to be awarded an honorary Academy Award (Oscar) for lifetime achievement?",
        options: ["Satyajit Ray", "Raj Kapoor", "Guru Dutt", "A.R. Rahman"],
        answer: 0
      }
    ],
    15: [
      {
        question: "In which year was the Dadasaheb Phalke Award, India's highest award in cinema, instituted?",
        options: ["1969", "1954", "1972", "1960"],
        answer: 0
      },
      {
        question: "Who was the first recipient of the Dadasaheb Phalke Award?",
        options: ["Devika Rani", "Prithviraj Kapoor", "Kanan Devi", "Sohrab Modi"],
        answer: 0
      },
      {
        question: "Which of the following was India's first indigenously made color film, released in 1937?",
        options: ["Kisan Kanya", "Alam Ara", "Raja Harishchandra", "Sairandhri"],
        answer: 0
      }
    ],
    16: [
      {
        question: "Which actor holds the record for winning the most National Film Awards for Best Actor (3 times, tied with Amitabh Bachchan and Kamal Haasan)?",
        options: ["Mammootty", "Mohanlal", "Shah Rukh Khan", "Dilip Kumar"],
        answer: 0
      },
      {
        question: "Which was the first Indian film to be nominated for the Academy Award for Best Foreign Language Film?",
        options: ["Mother India", "Salaam Bombay!", "Lagaan", "Pather Panchali"],
        answer: 0
      },
      {
        question: "For which Hollywood film did Bhanu Athaiya win India's first-ever Academy Award (Oscar) for Best Costume Design?",
        options: ["Gandhi", "Amadeus", "Passage to India", "The Last Emperor"],
        answer: 0
      }
    ]
  },
  geography: {
    1: [
      {
        question: "Which is the highest mountain peak in the world?",
        options: ["Mount K2", "Mount Kangchenjunga", "Mount Everest", "Mount Lhotse"],
        answer: 2
      },
      {
        question: "What is the capital city of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
      },
      {
        question: "Which is the largest hot desert in the world?",
        options: ["Kalahari Desert", "Gobi Desert", "Sahara Desert", "Thar Desert"],
        answer: 2
      }
    ],
    2: [
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: 1
      },
      {
        question: "Which country is also known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1
      },
      {
        question: "Which is the smallest continent in the world by land area?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        answer: 2
      }
    ],
    3: [
      {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Australia"],
        answer: 1
      },
      {
        question: "Which river is considered sacred and is the longest flowing river within India?",
        options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
        answer: 2
      }
    ],
    4: [
      {
        question: "Which is the largest desert in the world (including polar deserts)?",
        options: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Thar Desert"],
        answer: 2
      },
      {
        question: "Which country shares the longest international land border with India?",
        options: ["Pakistan", "China", "Bangladesh", "Nepal"],
        answer: 2
      },
      {
        question: "What is the capital city of France?",
        options: ["Rome", "Berlin", "Paris", "Madrid"],
        answer: 2
      }
    ],
    5: [
      {
        question: "Which state is known as the 'Spice Garden of India'?",
        options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
        answer: 2
      },
      {
        question: "Which is the largest state in India by land area?",
        options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
        answer: 2
      },
      {
        question: "Which is the highest waterfall in India, located in Karnataka?",
        options: ["Dudhsagar Falls", "Jog Falls", "Nohkalikai Falls", "Athirappilly Falls"],
        answer: 1
      }
    ],
    6: [
      {
        question: "Through which of the following Indian states does the Tropic of Cancer NOT pass?",
        options: ["Gujarat", "Rajasthan", "Odisha", "Tripura"],
        answer: 2
      },
      {
        question: "Which is the smallest country in the world by land area?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        answer: 2
      },
      {
        question: "Which European country is shaped like a boot?",
        options: ["Greece", "Spain", "Italy", "Portugal"],
        answer: 2
      }
    ],
    7: [
      {
        question: "Which river is known as the 'Ganga of the South' (Dakshin Ganga)?",
        options: ["Krishna River", "Godavari River", "Cauvery River", "Narmada River"],
        answer: 1
      },
      {
        question: "Which is the deepest lake in the world?",
        options: ["Lake Superior", "Lake Baikal", "Lake Victoria", "Lake Tanganyika"],
        answer: 1
      },
      {
        question: "Which country is the largest in the world by land area?",
        options: ["Canada", "United States", "China", "Russia"],
        answer: 3
      }
    ],
    8: [
      {
        question: "Which strait separates India from Sri Lanka?",
        options: ["Malacca Strait", "Palk Strait", "Gibraltar Strait", "Hormuz Strait"],
        answer: 1
      },
      {
        question: "Which country has the highest population in the world?",
        options: ["China", "India", "United States", "Indonesia"],
        answer: 1
      },
      {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
      }
    ],
    9: [
      {
        question: "Which of the following cities is located on the banks of the river Thames?",
        options: ["Paris", "London", "New York", "Rome"],
        answer: 1
      },
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: 0
      },
      {
        question: "Which ocean is S-shaped and located between the Americas and Europe/Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        answer: 2
      }
    ],
    10: [
      {
        question: "What is the capital of Germany?",
        options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
        answer: 2
      },
      {
        question: "Which line separates India and China?",
        options: ["Radcliffe Line", "McMahon Line", "Durand Line", "Line of Control"],
        answer: 1
      },
      {
        question: "Which lake is the largest freshwater lake in India, located in Jammu & Kashmir?",
        options: ["Dal Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"],
        answer: 1
      }
    ],
    11: [
      {
        question: "Which is the largest hot desert in the world (excluding polar deserts)?",
        options: ["Arabian Desert", "Kalahari Desert", "Sahara Desert", "Gobi Desert"],
        answer: 2
      },
      {
        question: "In which country is the active volcano Mount Vesuvius located?",
        options: ["Japan", "Italy", "Greece", "Iceland"],
        answer: 1
      },
      {
        question: "Which is the highest and largest plateau in the world, often called the 'Roof of the World'?",
        options: ["Deccan Plateau", "Colorado Plateau", "Tibetan Plateau", "Anatolian Plateau"],
        answer: 2
      }
    ],
    12: [
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: 3
      },
      {
        question: "Which is the largest fresh water lake in India?",
        options: ["Wular Lake", "Chilika Lake", "Loktak Lake", "Dal Lake"],
        answer: 0
      },
      {
        question: "Which active volcano is known as the 'Lighthouse of the Mediterranean'?",
        options: ["Mount Etna", "Stromboli", "Mount Vesuvius", "Krakatoa"],
        answer: 1
      }
    ],
    13: [
      {
        question: "Which of the following rivers flows through the Grand Canyon in the United States?",
        options: ["Mississippi River", "Colorado River", "Missouri River", "Rio Grande"],
        answer: 1
      },
      {
        question: "Which city is known as the 'Venice of the East' in India?",
        options: ["Udaipur", "Srinagar", "Alappuzha", "Kochi"],
        answer: 2
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        answer: 2
      }
    ],
    14: [
      {
        question: "Which is the smallest state in India by land area?",
        options: ["Sikkim", "Goa", "Tripura", "Mizoram"],
        answer: 1
      },
      {
        question: "Which country is the largest landlocked country in the world?",
        options: ["Mongolia", "Kazakhstan", "Bolivia", "Chad"],
        answer: 1
      },
      {
        question: "Which island nation in the Indian Ocean is the smallest Asian country by both population and land area?",
        options: ["Sri Lanka", "Maldives", "Mauritius", "Seychelles"],
        answer: 1
      }
    ],
    15: [
      {
        question: "Which is the highest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        answer: 2
      },
      {
        question: "Which of the following seas is the saltiest water body in the world?",
        options: ["Red Sea", "Dead Sea", "Mediterranean Sea", "Caspian Sea"],
        answer: 1
      },
      {
        question: "Which cold ocean current flows along the western coast of South America?",
        options: ["Gulf Stream", "Humboldt Current", "Kuroshio Current", "Brazil Current"],
        answer: 1
      }
    ],
    16: [
      {
        question: "Which African country has three official capital cities (Pretoria, Bloemfontein, and Cape Town)?",
        options: ["South Africa", "Nigeria", "Kenya", "Egypt"],
        answer: 0
      },
      {
        question: "Which of the following islands is a territory of Ecuador and famous for its vast number of endemic species studied by Charles Darwin?",
        options: ["Galapagos Islands", "Hawaiian Islands", "Falkland Islands", "Easter Island"],
        answer: 0
      },
      {
        question: "Which is the lowest point on the dry land surface of the Earth, situated more than 400m below sea level?",
        options: ["Death Valley", "Dead Sea Shore", "Lake Assal", "Qattara Depression"],
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
