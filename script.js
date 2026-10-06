// KBC Game Logic - Premium Edition

// Game Constants
const WINNINGS_VALUES = [
    "₹0", 
    "₹1,000", 
    "₹2,000", 
    "₹3,000", 
    "₹5,000", 
    "₹10,000", // Padaav 1 (Index 5)
    "₹20,000", 
    "₹40,000", 
    "₹80,000", 
    "₹1,60,000", 
    "₹3,20,000", // Padaav 2 (Index 10)
    "₹6,40,000", 
    "₹12,50,000", 
    "₹25,00,000", 
    "₹50,00,000", 
    "₹1,00,00,000", // 1 Crore (Index 15)
    "₹7,00,00,000"  // 7 Crore (Index 16)
];

const SAFE_ZONE_LEVELS = [5, 10, 15, 16]; // Levels representing safe zone milestones

// Game State
let gameState = {
    currentLevel: 1, // 1 to 16
    selectedCategory: "general",
    currentQuestion: null,
    questionsUsed: new Set(), // Set of question texts already shown to prevent duplicates
    lifelinesUsed: {
        "50-50": false,
        "audience": false,
        "phone": false,
        "flip": false
    },
    timerLeft: 30,
    timerIntervalId: null,
    audioMuted: false,
    audioVolume: 1.0,
    isLocked: false,
    selectedOptionIdx: null,
    activeAudios: []
};

// Audio Tracks
const audioAssets = {
    intro: new Audio("assets/Intro.mp3"),
    amitabhIntro: new Audio("assets/AmitabhBachchanIntro.mp3"),
    correct: new Audio("assets/Kbc Correct Answer2.mp3"),
    wrong: new Audio("assets/amitabh-galat-jawab.mp3"),
    lock: new Audio("assets/Kbc Option Lock Tune.mp3"),
    tension: new Audio("assets/clock-sound.mp3"),
    questionAsk: new Audio("assets/Question.mp3"),
    jackpotWin: new Audio("assets/Millionairekbc.mp3"),
    jackpot7Crore: new Audio("assets/jackpot-win.mp3")
};

// Host commentary pool based on events
const HOST_SPEECH = {
    intro: [
        "Welcome to Kaun Banega Crorepati! Today, we test your intellect and courage.",
        "Adbhut! Let's start the game. May the power of knowledge guide you.",
        "Computer ji, please present the rules. Player, prepare your mind!"
    ],
    newQuestion: [
        "Here is the next question on your screen. Read it carefully.",
        "Let's look at the next question. Take your time.",
        "For the next milestone, here comes the question.",
        "Be extremely focused now. The stakes are rising."
    ],
    lock: [
        "Are you absolutely sure? Let's lock this option.",
        "Option locked. Let's see if this is the correct answer...",
        "Locking option. Take a deep breath..."
    ],
    correct: [
        "Sahi Jawab! Absolutely correct. Well played!",
        "Bilkul Sahi! Excellent decision.",
        "Fantastic! You have answered correctly and moved up the ladder."
    ],
    wrong: [
        "Afsos... That is the incorrect answer.",
        "Oh no! That was incorrect. Your journey ends here.",
        "Wrong answer. But you played a wonderful game."
    ],
    lifeline: [
        "A wise choice. Let's use a lifeline to help you.",
        "Using a lifeline is a sign of a smart player.",
        "Let's consult our lifeline to clarify this."
    ],
    timeOut: [
        "Time is up! You ran out of time.",
        "Tick tock... Time has run out. Your game ends here."
    ]
};

// Initialize DOM elements when script loads
document.addEventListener("DOMContentLoaded", () => {
    buildMoneyLadder();
    setupEventListeners();
    initAudioVolume();
});

// Build Sidebar Money Ladder UI Dynamically
function buildMoneyLadder() {
    const ladderContainer = document.getElementById("money-ladder");
    ladderContainer.innerHTML = ""; // Clear
    
    // Add levels from 1 to 16
    for (let i = 1; i <= 16; i++) {
        const item = document.createElement("div");
        item.className = "ladder-item";
        item.id = `ladder-level-${i}`;
        
        // Highlight safe zones
        if (SAFE_ZONE_LEVELS.includes(i)) {
            item.classList.add("safe-zone");
        }
        
        const numSpan = document.createElement("span");
        numSpan.className = "level-num";
        numSpan.innerText = i;
        
        const valSpan = document.createElement("span");
        valSpan.className = "level-value";
        valSpan.innerText = WINNINGS_VALUES[i];
        
        item.appendChild(numSpan);
        item.appendChild(valSpan);
        ladderContainer.appendChild(item);
    }
}

// Sound Management System
function initAudioVolume() {
    Object.values(audioAssets).forEach(audio => {
        audio.volume = gameState.audioVolume;
        // Hook for logging and memory cleanup
        audio.onplay = () => {
            if (!gameState.activeAudios.includes(audio)) {
                gameState.activeAudios.push(audio);
            }
        };
    });
    // Set wrong voice track to crisp, energetic 1.15x playback rate
    if (audioAssets.wrong) {
        audioAssets.wrong.playbackRate = 1.15;
    }
}

function playSound(trackName, loop = false) {
    if (gameState.audioMuted) return;
    
    const audio = audioAssets[trackName];
    if (!audio) return;
    
    try {
        audio.currentTime = 0;
        audio.loop = loop;
        audio.play().catch(e => console.log("Audio play blocked by browser policy:", e));
    } catch(err) {
        console.error("Audio playback error:", err);
    }
}

function stopAllSounds(keepWrong = false) {
    Object.entries(audioAssets).forEach(([key, audio]) => {
        if (keepWrong && key === "wrong") return;
        audio.pause();
        audio.currentTime = 0;
    });
    gameState.activeAudios = (keepWrong && audioAssets.wrong && !audioAssets.wrong.paused) ? [audioAssets.wrong] : [];
}

function updateVolume(val) {
    gameState.audioVolume = val;
    Object.values(audioAssets).forEach(audio => {
        audio.volume = val;
    });
}

// Event Listeners setup
function setupEventListeners() {
    // Screen 1: Category selection
    const catBtns = document.querySelectorAll(".category-btn");
    catBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            catBtns.forEach(b => b.classList.remove("active"));
            const targetBtn = e.target.closest(".category-btn");
            targetBtn.classList.add("active");
            gameState.selectedCategory = targetBtn.dataset.category;
            
            // Play a small click / check sound
            playSound("lock");
        });
    });

    // Start Game
    document.getElementById("start-game-btn").addEventListener("click", () => {
        stopAllSounds();
        transitionToScreen("game-screen");
        startGame();
    });

    // Option Buttons
    const optionBtns = document.querySelectorAll(".option-btn");
    optionBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (gameState.isLocked) return;
            const targetBtn = e.target.closest(".option-btn");
            if (targetBtn.classList.contains("blanked")) return;

            const selectedIdx = parseInt(targetBtn.dataset.index);

            // Remove selected class from all option buttons
            optionBtns.forEach(b => b.classList.remove("selected"));

            // Add selected class to the clicked button
            targetBtn.classList.add("selected");
            gameState.selectedOptionIdx = selectedIdx;

            // Show the Confirm Lock button
            const confirmBtn = document.getElementById("confirm-lock-btn");
            confirmBtn.classList.remove("hidden");

            // Update host commentary bubble to prompt locking
            const optionLetters = ["A", "B", "C", "D"];
            document.getElementById("host-speech").innerText = `You have selected Option ${optionLetters[selectedIdx]}. Is this your final answer? Click 'Confirm Lock' to lock it!`;
            
            // Play a small click selection cue
            playSound("lock");
        });
    });

    // Confirm Lock Answer Button
    document.getElementById("confirm-lock-btn").addEventListener("click", () => {
        if (gameState.isLocked || gameState.selectedOptionIdx === null) return;
        
        // Hide the Confirm Lock button
        document.getElementById("confirm-lock-btn").classList.add("hidden");
        
        // Lock the option and proceed
        lockAnswer(gameState.selectedOptionIdx);
    });

    // Lifeline: 50-50
    document.getElementById("lifeline-50-50").addEventListener("click", () => {
        if (gameState.isLocked || gameState.lifelinesUsed["50-50"]) return;
        useLifeline5050();
    });

    // Lifeline: Audience Poll
    document.getElementById("lifeline-audience").addEventListener("click", () => {
        if (gameState.isLocked || gameState.lifelinesUsed["audience"]) return;
        useLifelineAudience();
    });

    // Lifeline: Phone a Friend
    document.getElementById("lifeline-phone").addEventListener("click", () => {
        if (gameState.isLocked || gameState.lifelinesUsed["phone"]) return;
        useLifelinePhone();
    });

    // Lifeline: Flip Question
    document.getElementById("lifeline-flip").addEventListener("click", () => {
        if (gameState.isLocked || gameState.lifelinesUsed["flip"]) return;
        useLifelineFlip();
    });

    // Quit / Walk Away
    document.getElementById("quit-game-btn").addEventListener("click", () => {
        if (gameState.isLocked) return;
        walkAway();
    });

    // Restart Game
    document.getElementById("restart-game-btn").addEventListener("click", () => {
        transitionToScreen("welcome-screen");
        stopAllSounds();
        // Play intro themes
        playSound("intro");
        playSound("amitabhIntro");
    });

    // Sidebar drawer toggle on mobile
    const sidebar = document.getElementById("money-sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    
    sidebarToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
    });

    // Close Money Sidebar via close button
    const closeSidebarBtn = document.getElementById("close-sidebar-btn");
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.remove("active");
        });
    }

    // Close Money Sidebar when tapping outside on mobile/tablet view
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("active")) {
            const isClickInside = sidebar.contains(e.target) || sidebarToggle.contains(e.target);
            if (!isClickInside) {
                sidebar.classList.remove("active");
            }
        }
    });

    // Close Modals
    const closeBtns = document.querySelectorAll(".close-modal-btn");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modal = e.target.closest(".modal-overlay");
            modal.classList.remove("active");
            // Resume timer if game screen is active and clock is ticking
            if (getTimerLimit() !== null && gameState.timerLeft > 0 && !gameState.isLocked) {
                startTimer();
            }
        });
    });

    // Phone Expert item selection hooks
    const expertBtns = document.querySelectorAll(".expert-item-btn");
    expertBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const expertType = e.target.closest(".expert-item-btn").dataset.expert;
            triggerPhoneCall(expertType);
        });
    });

    // Auto-trigger intro themes on window interaction (to handle auto-play block)
    window.addEventListener("click", () => {
        if (audioAssets.intro.paused && document.getElementById("welcome-screen").classList.contains("active")) {
            playSound("intro");
            playSound("amitabhIntro");
        }
    }, { once: true });
}

// Transitions between screens
function transitionToScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => {
        s.classList.remove("active");
        s.style.display = "none";
    });
    
    const target = document.getElementById(screenId);
    target.style.display = "flex";
    // Small timeout for opacity fade transition
    setTimeout(() => {
        target.classList.add("active");
    }, 50);
}

// Get timer duration based on question levels
function getTimerLimit() {
    if (gameState.currentLevel <= 5) return 30; // Levels 1 to 5: 30s
    if (gameState.currentLevel <= 10) return 45; // Levels 6 to 10: 45s
    return null; // Levels 11 to 16: No timer
}

// Set host dialogue
function speakHost(bubbleKey) {
    const comments = HOST_SPEECH[bubbleKey];
    if (comments && comments.length > 0) {
        const randIdx = Math.floor(Math.random() * comments.length);
        document.getElementById("host-speech").innerText = comments[randIdx];
    }
}

// Start Game Setup
function startGame() {
    gameState.currentLevel = 1;
    gameState.questionsUsed.clear();
    gameState.isLocked = false;
    
    // Reset lifelines
    Object.keys(gameState.lifelinesUsed).forEach(key => {
        gameState.lifelinesUsed[key] = false;
        const btn = document.getElementById(`lifeline-${key}`);
        btn.classList.remove("used");
    });
    
    // Reset option states
    resetOptionButtons();
    
    // Set category display header
    const categoryNames = {
        general: "General Knowledge",
        science: "Science & Tech",
        sports: "Sports & Games",
        entertainment: "Entertainment",
        geography: "Geography & Nature",
        mix: "Mix Category"
    };
    document.getElementById("display-category").innerText = categoryNames[gameState.selectedCategory];

    // Load first question
    loadQuestion();
}

// Load current level question
function loadQuestion() {
    gameState.isLocked = false;
    gameState.selectedOptionIdx = null;
    document.getElementById("confirm-lock-btn").classList.add("hidden");
    resetOptionButtons();
    
    const levelQuestions = KBC_QUESTIONS[gameState.selectedCategory][gameState.currentLevel];
    if (!levelQuestions || levelQuestions.length === 0) {
        // Fallback to general category if level question is missing
        levelQuestions = KBC_QUESTIONS["general"][gameState.currentLevel];
    }
    
    // Filter out used questions to prevent repetition
    let availableQuestions = levelQuestions.filter(q => !gameState.questionsUsed.has(q.question));
    
    // If all are used, clear history for this tier and reuse
    if (availableQuestions.length === 0) {
        availableQuestions = levelQuestions;
    }
    
    // Choose random question from pool
    const selectedQ = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    gameState.currentQuestion = selectedQ;
    gameState.questionsUsed.add(selectedQ.question);

    // Populate question text
    document.getElementById("question-text").innerText = selectedQ.question;
    
    // Populate options text
    for (let i = 0; i < 4; i++) {
        document.getElementById(`option-${i}-text`).innerText = selectedQ.options[i];
    }

    // Update Money Ladder styling
    updateMoneyLadderDisplay();

    // Speak host commentary feedback
    speakHost("newQuestion");

    // Audio Cue
    playSound("questionAsk");

    // Setup and start timer
    const timeLimit = getTimerLimit();
    if (timeLimit !== null) {
        document.querySelector(".timer-area").style.display = "flex";
        gameState.timerLeft = timeLimit;
        updateTimerCircle(timeLimit, timeLimit);
        
        // Start tension music loop quickly after question loads (800ms)
        setTimeout(() => {
            if (!gameState.isLocked) {
                playSound("tension", true);
                startTimer();
            }
        }, 800);
    } else {
        // No timer for higher levels
        document.querySelector(".timer-area").style.display = "none";
        clearInterval(gameState.timerIntervalId);
    }
}

// Timer Logic
function startTimer() {
    clearInterval(gameState.timerIntervalId);
    const limit = getTimerLimit();
    
    gameState.timerIntervalId = setInterval(() => {
        gameState.timerLeft--;
        updateTimerCircle(gameState.timerLeft, limit);
        
        if (gameState.timerLeft <= 0) {
            clearInterval(gameState.timerIntervalId);
            timeOutLose();
        }
    }, 1000);
}

function updateTimerCircle(current, total) {
    const display = document.getElementById("timer-display");
    display.innerText = current;
    
    const wrapper = document.querySelector(".timer-circle-wrapper");
    wrapper.classList.remove("warn", "danger");
    
    if (current <= 5) {
        wrapper.classList.add("danger");
    } else if (current <= 10) {
        wrapper.classList.add("warn");
    }
    
    // SVG Progress Arc offset
    const progressArc = document.getElementById("timer-progress");
    const circumference = 283; // 2 * PI * r
    const offset = circumference - (current / total) * circumference;
    progressArc.style.strokeDashoffset = offset;
}

// Update sidebar level highlights
function updateMoneyLadderDisplay() {
    for (let i = 1; i <= 16; i++) {
        const item = document.getElementById(`ladder-level-${i}`);
        item.classList.remove("current-level", "passed");
        
        if (i === gameState.currentLevel) {
            item.classList.add("current-level");
            // Scroll sidebar element into view in case of overflow
            item.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else if (i < gameState.currentLevel) {
            item.classList.add("passed");
        }
    }
    
    // Update Safe Zone winnings value displays
    document.getElementById("current-safe-winnings").innerText = getSafeWinningsValue();
}

// Check safeZone payout value
function getSafeWinningsValue() {
    let lastSafeIndex = 0;
    for (let i = gameState.currentLevel - 1; i >= 1; i--) {
        if (SAFE_ZONE_LEVELS.includes(i)) {
            lastSafeIndex = i;
            break;
        }
    }
    return WINNINGS_VALUES[lastSafeIndex];
}

// Reset button visual classes
function resetOptionButtons() {
    for (let i = 0; i < 4; i++) {
        const btn = document.querySelector(`.option-btn[data-index="${i}"]`);
        btn.className = "option-btn";
        btn.disabled = false;
    }
}

// Option selection (Answer lock state)
function lockAnswer(selectedIdx) {
    gameState.isLocked = true;
    clearInterval(gameState.timerIntervalId);
    stopAllSounds();

    // Lock option button layout
    const btn = document.querySelector(`.option-btn[data-index="${selectedIdx}"]`);
    btn.classList.add("locked");

    speakHost("lock");
    playSound("lock");

    // Fast, responsive tension build-up before showing results (1.2 seconds)
    setTimeout(() => {
        revealAnswer(selectedIdx);
    }, 1200);
}

// Reveal correct/incorrect answer
function revealAnswer(selectedIdx) {
    const correctIdx = gameState.currentQuestion.answer;
    const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedIdx}"]`);
    const correctBtn = document.querySelector(`.option-btn[data-index="${correctIdx}"]`);

    selectedBtn.classList.remove("locked");

    if (selectedIdx === correctIdx) {
        // CORRECT ANSWER
        selectedBtn.classList.add("correct");
        playSound("correct");
        speakHost("correct");

        // Advance level quickly after celebration (1.6 seconds)
        setTimeout(() => {
            advanceLevel();
        }, 1600);
    } else {
        // WRONG ANSWER
        selectedBtn.classList.add("incorrect");
        correctBtn.classList.add("correct"); // Highlight correct answer in green
        playSound("wrong");
        speakHost("wrong");

        // Fast transition to Game Over (2.5 seconds) while audio finishes playing in background
        setTimeout(() => {
            endGame(false, "incorrect");
        }, 2500);
    }
}

// Move to next level or trigger victory
function advanceLevel() {
    if (gameState.currentLevel === 16) {
        // Jackpot Winner! (₹7 Crore)
        endGame(true, "jackpot");
    } else {
        gameState.currentLevel++;
        loadQuestion();
    }
}

// Out of time lose trigger
function timeOutLose() {
    gameState.isLocked = true;
    stopAllSounds(true);
    playSound("wrong");
    
    // Highlight correct option
    const correctIdx = gameState.currentQuestion.answer;
    const correctBtn = document.querySelector(`.option-btn[data-index="${correctIdx}"]`);
    correctBtn.classList.add("correct");
    
    document.getElementById("host-speech").innerText = HOST_SPEECH.timeOut[Math.floor(Math.random() * HOST_SPEECH.timeOut.length)];
    
    setTimeout(() => {
        endGame(false, "timeout");
    }, 2500);
}

// Quit voluntarily (Walk away)
function walkAway() {
    gameState.isLocked = true;
    clearInterval(gameState.timerIntervalId);
    stopAllSounds();
    
    // Final winnings is the value of the last answered question
    const winningsIdx = gameState.currentLevel - 1;
    const finalAmount = WINNINGS_VALUES[winningsIdx];
    
    endGame(false, "quit", finalAmount);
}

// Game Over Screen controller
function endGame(isWin, reason, walkAwayAmount = null) {
    stopAllSounds(reason === "incorrect" || reason === "timeout");
    transitionToScreen("gameover-screen");

    const titleEl = document.getElementById("gameover-title");
    const winningsEl = document.getElementById("gameover-winnings");
    const detailEl = document.getElementById("gameover-detail");
    const msgEl = document.getElementById("gameover-message");

    // Populate game statistics
    document.getElementById("stat-level").innerText = `${gameState.currentLevel - (isWin ? 0 : 1)}/16`;
    document.getElementById("stat-questions").innerText = gameState.questionsUsed.size - (reason === "flip" ? 0 : 0); // approx count
    
    let lifelinesCount = 0;
    Object.values(gameState.lifelinesUsed).forEach(used => { if (used) lifelinesCount++; });
    document.getElementById("stat-lifelines").innerText = `${lifelinesCount}/4`;
    document.getElementById("stat-time").innerText = getTimerLimit() ? `${gameState.timerLeft}s remaining` : "N/A";

    if (isWin) {
        // Jackpot ₹7 Crore!
        titleEl.innerText = "CONGRATULATIONS!";
        titleEl.className = "game-title text-gold";
        winningsEl.innerText = "₹7,00,00,000";
        detailEl.innerText = "You have answered all 16 questions correctly and won the ultimate prize!";
        msgEl.innerText = "Adbhut! An extraordinary display of knowledge!";
        playSound("jackpot7Crore");
    } else {
        titleEl.innerText = "GAME OVER";
        titleEl.className = "game-title";

        if (reason === "quit") {
            winningsEl.innerText = walkAwayAmount;
            detailEl.innerText = "You chose to walk away with your accumulated winnings.";
            msgEl.innerText = "Smart play! You secured your prize money.";
            playSound("jackpotWin"); // Play celebration sound for voluntary walk away
        } else {
            // Incorrect answer or Timeout fallback zone
            const safeWinnings = getSafeWinningsValue();
            winningsEl.innerText = safeWinnings;
            
            if (reason === "timeout") {
                detailEl.innerText = "Time limit exceeded. You fell back to the last safe milestone.";
                msgEl.innerText = "Better luck with speed next time!";
            } else {
                detailEl.innerText = "Incorrect answer. You fell back to the last safe milestone.";
                msgEl.innerText = "A brave effort, but knowledge demands absolute certainty.";
            }
        }
    }
}

// LIFELINE: 50-50
function useLifeline5050() {
    gameState.lifelinesUsed["50-50"] = true;
    document.getElementById("lifeline-50-50").classList.add("used");
    speakHost("lifeline");
    playSound("lock");

    const correctIdx = gameState.currentQuestion.answer;
    
    // Choose 2 wrong options to hide
    let wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    
    // Randomly shuffle wrong options
    wrongIndices.sort(() => Math.random() - 0.5);
    
    // Hide the first 2 wrong options in the shuffled list
    const hide1 = wrongIndices[0];
    const hide2 = wrongIndices[1];

    document.querySelector(`.option-btn[data-index="${hide1}"]`).classList.add("blanked");
    document.querySelector(`.option-btn[data-index="${hide2}"]`).classList.add("blanked");
}

// LIFELINE: Audience Poll
function useLifelineAudience() {
    gameState.lifelinesUsed["audience"] = true;
    document.getElementById("lifeline-audience").classList.add("used");
    speakHost("lifeline");
    playSound("lock");
    
    // Pause timer while modal is open
    clearInterval(gameState.timerIntervalId);

    const correctIdx = gameState.currentQuestion.answer;
    
    // Check if 50-50 was used (to only vote on visible options)
    const optionBtns = document.querySelectorAll(".option-btn");
    const activeIndices = [];
    for (let i = 0; i < 4; i++) {
        if (!optionBtns[i].classList.contains("blanked")) {
            activeIndices.push(i);
        }
    }

    let votes = [0, 0, 0, 0];
    
    // Calculate poll percentages: correct answer gets highest vote
    // Difficulty tier makes it harder at high levels
    let correctBias;
    if (gameState.currentLevel <= 5) {
        correctBias = 75; // Easy levels: 75% bias
    } else if (gameState.currentLevel <= 10) {
        correctBias = 55; // Medium levels: 55% bias
    } else {
        correctBias = 40; // Hard levels: 40% bias (audience is split/uncertain)
    }

    if (activeIndices.length === 2) {
        // If 50-50 used, divide 100% between the 2 active options
        const incorrectActiveIdx = activeIndices.find(idx => idx !== correctIdx);
        const correctVote = correctBias + Math.floor(Math.random() * 15); // e.g. 75 + rand(15) = 75-90%
        votes[correctIdx] = correctVote;
        votes[incorrectActiveIdx] = 100 - correctVote;
    } else {
        // Vote split across all 4 options
        let remaining = 100 - correctBias;
        votes[correctIdx] = correctBias;
        
        // Randomly distribute remaining votes to the other 3 options
        const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
        const v1 = Math.floor(Math.random() * (remaining - 10));
        remaining -= v1;
        const v2 = Math.floor(Math.random() * remaining);
        const v3 = remaining - v2;
        
        votes[wrongIndices[0]] = v1;
        votes[wrongIndices[1]] = v2;
        votes[wrongIndices[2]] = v3;
    }

    // Populate chart percentages and animations
    setTimeout(() => {
        document.getElementById("modal-audience").classList.add("active");
        
        const optionLetters = ["A", "B", "C", "D"];
        let maxVoteIdx = 0;
        let maxVoteVal = -1;

        for (let i = 0; i < 4; i++) {
            const barFill = document.getElementById(`poll-bar-${i}`);
            const percentLabel = document.getElementById(`poll-percent-${i}`);
            
            barFill.style.width = `${votes[i]}%`;
            percentLabel.innerText = `${votes[i]}%`;

            if (votes[i] > maxVoteVal) {
                maxVoteVal = votes[i];
                maxVoteIdx = i;
            }
        }

        document.getElementById("audience-consensus").innerText = optionLetters[maxVoteIdx];
    }, 500);
}

// LIFELINE: Phone A Friend
function useLifelinePhone() {
    gameState.lifelinesUsed["phone"] = true;
    document.getElementById("lifeline-phone").classList.add("used");
    speakHost("lifeline");
    playSound("lock");

    // Pause timer while modal is open
    clearInterval(gameState.timerIntervalId);

    // Reset phone modal view
    document.getElementById("phone-expert-selection").classList.remove("hidden");
    document.getElementById("phone-calling").classList.add("hidden");
    document.getElementById("phone-dialogue").classList.add("hidden");

    // Open Modal
    document.getElementById("modal-phone").classList.add("active");
}

function triggerPhoneCall(expertType) {
    const expertNames = {
        general: "Prof. Shastri",
        science: "Dr. Aditi Verma",
        sports: "Coach Sandeep",
        entertainment: "Sneha Kapoor"
    };

    // Transition to Calling Animation
    document.getElementById("phone-expert-selection").classList.add("hidden");
    document.getElementById("phone-calling").classList.remove("hidden");
    document.getElementById("calling-status").innerText = `Calling ${expertNames[expertType]}...`;

    // Ringing duration 2.5 seconds
    setTimeout(() => {
        document.getElementById("phone-calling").classList.add("hidden");
        document.getElementById("phone-dialogue").classList.remove("hidden");
        document.getElementById("active-friend-name").innerText = expertNames[expertType];
        
        generateFriendAdvice(expertType);
    }, 2500);
}

function generateFriendAdvice(expertType) {
    const correctIdx = gameState.currentQuestion.answer;
    const optionLetters = ["A", "B", "C", "D"];
    const optionText = gameState.currentQuestion.options[correctIdx];
    
    // Check if expert is in their matched field
    const isMatched = (expertType === gameState.selectedCategory);
    
    // Determine answer selection probability
    let selectCorrect;
    let confidence;
    
    if (isMatched) {
        // High confidence expert (90% correct probability at low levels, 75% at higher levels)
        const correctProb = gameState.currentLevel <= 8 ? 0.92 : 0.78;
        selectCorrect = Math.random() < correctProb;
        confidence = selectCorrect ? Math.floor(Math.random() * 20) + 75 : Math.floor(Math.random() * 20) + 40; // 75-95% vs 40-60%
    } else {
        // General expert (70% at low levels, 50% at higher levels)
        const correctProb = gameState.currentLevel <= 8 ? 0.70 : 0.48;
        selectCorrect = Math.random() < correctProb;
        confidence = selectCorrect ? Math.floor(Math.random() * 20) + 60 : Math.floor(Math.random() * 30) + 30; // 60-80% vs 30-60%
    }

    let recommendedIdx = correctIdx;
    if (!selectCorrect) {
        // Select a random wrong option that is NOT blanked (if 50-50 was used)
        const optionBtns = document.querySelectorAll(".option-btn");
        const availableWrongIdxs = [];
        for (let i = 0; i < 4; i++) {
            if (i !== correctIdx && !optionBtns[i].classList.contains("blanked")) {
                availableWrongIdxs.push(i);
            }
        }
        recommendedIdx = availableWrongIdxs.length > 0 ? 
            availableWrongIdxs[Math.floor(Math.random() * availableWrongIdxs.length)] : 
            ((correctIdx + 1) % 4);
    }

    const recLetter = optionLetters[recommendedIdx];
    const recText = gameState.currentQuestion.options[recommendedIdx];

    // Build dialogue text
    let dialogText = "";
    if (isMatched) {
        if (confidence >= 80) {
            dialogText = `Hey! Yes, I know this one. It's related to my research. The correct option is definitely **${recLetter}: ${recText}**. I am around ${confidence}% confident!`;
        } else {
            dialogText = `Hello! Interesting question. Based on what I read recently, it should be **${recLetter}: ${recText}**. I'd say I am ${confidence}% sure.`;
        }
    } else {
        if (confidence >= 65) {
            dialogText = `Hey, glad you called! I am not an expert in this, but I am fairly sure it is **${recLetter}: ${recText}** (${confidence}% confidence). Go with it!`;
        } else {
            dialogText = `Hi! Oh, this is a tricky one. I'm guessing here, but maybe it is **${recLetter}: ${recText}**? I am only about ${confidence}% sure though. Good luck!`;
        }
    }

    document.getElementById("friend-response-text").innerHTML = dialogText;
}

// LIFELINE: Flip Question
function useLifelineFlip() {
    gameState.lifelinesUsed["flip"] = true;
    document.getElementById("lifeline-flip").classList.add("used");
    speakHost("lifeline");
    playSound("lock");

    // Reset option hidden status in case 50-50 was used on previous question
    // Flip doesn't reset other lifelines, it just loads a new question for the same level.
    clearInterval(gameState.timerIntervalId);
    stopAllSounds();

    // Reload new question of the same level
    setTimeout(() => {
        loadQuestion();
    }, 800);
}
