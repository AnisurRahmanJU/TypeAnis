/* ==========================================================================
   1. WORD & SENTENCE POOLS (Dynamic 1000 Word Generators)
   ========================================================================== */

const baseEnglishWords = [
    "The", "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "Practice", "makes", 
    "perfect", "aspect", "life", "Honesty", "best", "policy", "build", "great", "network", "Technology", 
    "changing", "world", "amazing", "software", "tools", "Keep", "your", "eyes", "stars", "feet", 
    "ground", "science", "future", "system", "device", "creative", "engine", "developer", "digital", "smart",
    "matrix", "cipher", "secret", "crypto", "quantum", "logical", "binary", "terminal", "keyboard", "rotor",
    "algorithm", "security", "password", "server", "database", "cloud", "internet", "website", "application",
    "compiler", "function", "variable", "constant", "syntax", "hacker", "firewall", "protocol", "packet", "signal",
    "voltage", "circuit", "resistor", "current", "display", "monitor", "memory", "storage", "backup", "recovery",
    "process", "thread", "kernel", "graphics", "interface", "hardware", "firmware", "sensor", "module", "library",
    "success", "journey", "achieve", "believe", "inspire", "imagine", "create", "discover", "explore", "connect",
    "together", "history", "culture", "nature", "weather", "climate", "energy", "planet", "galaxy", "universe",
    "freedom", "justice", "peace", "wisdom", "knowledge", "honour", "courage", "patience", "silence", "shadow",
    "morning", "sunset", "station", "railway", "airport", "highway", "traffic", "vehicle", "electric",
    "machine", "factory", "product", "quality", "service", "support", "message", "console", "channel", "stream",
    "frequent", "regular", "special", "central", "federal", "dynamic", "static", "virtual", "optical", "acoustic"
];

const baseBanglaWords = [
    "আমাদের", "ছোট", "নদীতে", "বংশী", "নদীর", "মাছ", "ভেসে", "ওঠে", "চাঁদের", "আলোয়",
    "বাংলাদেশ", "একটি", "নদী", "মাতৃক", "সুন্দর", "দেশ", "আমি", "তোমায়", "ভালোবাসি", "পরিশ্রম",
    "সৌভাগ্যের", "প্রসূতি", "তাই", "সবাই", "একত্রে", "কাজ", "করুন", "দুঃখ", "কষ্ট", "মানুষের",
    "জীবনকে", "স্মার্ট", "ও", "শক্তিশালী", "করে", "তোলে", "হাঁস", "এবং", "বিড়াল", "পাহাড়ের",
    "কাছে", "কাঁচের", "থালায়", "খাবার", "খায়", "সোনার", "বাংলা", "সবুজ", "श्यामল", "চিরদিন",
    "প্রযুক্তি", "সফটওয়্যার", "প্রোগ্রাম", "কোডিং", "চলক", "ধ্রুবক", "ফাংশন", "লজিক", "কীবোর্ড", "কনসোল",
    "আউটপুট", "ইনপুট", "মেমোরি", "সার্ভার", "নেটওয়ার্ক", "বার্তা", "ডিজিটাল", "ইঞ্জিন", "уন্নয়ন", "রোটর",
    "গোপন", "সংকেত", "গণিত", "বর্গ", "পার্থক্য", "গতিশীল", "স্থির", "বাস্তব", "স্বপ্ন", "সফলতা",
    "ইতিহাস", "সংস Culture", "প্রকৃতি", "আকাশ", "বাতাস", "সাগর", "পাহাড়", "অরণ্য", "সূর্য", "তারা",
    "সকাল", "সন্ধ্যা", "রাত্রি", "আলো", "ছায়া", "শান্তি", "স্বাধীনতা", "ধৈর্য", "জ্ঞান", "শিক্ষা",
    "স্মৃতি", "অনুভূতি", "গল্প", "কবিতা", "ভাষা", "ব্যাকরণ", "শব্দ", "বাক্য", "বই", "খাতা",
    "কলম", "বিদ্যালয়", "বিশ্ববিদ্যালয়", "শিক্ষক", "ছাত্র", "বন্ধু", "পরিবার", "সমাজ", "মানুষ", "জীবন",
    "সময়", "ভবিষ্যত", "অতীত", "বর্তমান", "পথ", "यात्रा", "স্টেশন", "শهر", "গ্রাম", "মাঠ",
    "ফসল", "গাছ", "ফুল", "ফল", "পাখি", "মেঘ", "বৃষ্টি", "শীত", "বসন্ত", "आनন্দ",
    "উৎসব", "মেলা", "খেলার", "বিজয়", "গৌরব", "শ্রদ্ধা", "নিয়মিত", "বিশেষ", "কেন্দ্রীয়"
];

// শব্দ থেকে ১০০০ শব্দের পুলে কনভার্ট করার ইঞ্জিন
function generateWordPool(baseWords, totalTarget) {
    let pool = [...baseWords];
    let counter = 1;
    while (pool.length < totalTarget) {
        for (let i = 0; i < baseWords.length; i++) {
            if (pool.length >= totalTarget) break;
            pool.push(baseWords[i] + counter);
        }
        counter++;
    }
    return pool;
}

const englishWordPool = generateWordPool(baseEnglishWords, 1000);
const banglaWordPool = generateWordPool(baseBanglaWords, 1000);

// বাক্য তৈরি করার স্ট্রাকচার (১০টি করে শব্দের অর্থপূর্ণ অ্যারে)
const englishSentences = [];
const banglaSentences = [];

for (let i = 0; i < 1000; i += 10) {
    let engSlice = englishWordPool.slice(i, i + 10);
    if (engSlice.length > 0) {
        engSlice[engSlice.length - 1] = engSlice[engSlice.length - 1] + ".";
        englishSentences.push(engSlice);
    }
    let bngSlice = banglaWordPool.slice(i, i + 10);
    if (bngSlice.length > 0) {
        bngSlice[bngSlice.length - 1] = bngSlice[bngSlice.length - 1] + "।";
        banglaSentences.push(bngSlice);
    }
}

/* ==========================================================================
   2. STATE VARIABLES
   ========================================================================== */
let currentWords = [];
let wordIndex = 0;
let charIndex = 0;
let errors = 0;
let totalTyped = 0;
let isBanglaMode = false;
let errorTracker = {};

let timeLeft = 60; 
let timerInterval = null;
let isTestActive = false;
let hasStarted = false;
let expectedInputLength = 0;

/* ==========================================================================
   3. DOM ELEMENT REFERENCES
   ========================================================================== */
const wordsDisplay = document.getElementById("words-display");
const hiddenInput = document.getElementById("hidden-input");
const keyboardWrapper = document.getElementById("keyboard");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const wordCountDisplay = document.getElementById("word-count");
const timerDisplay = document.getElementById("timer-val");
const btnEn = document.getElementById("btn-en");
const btnBn = document.getElementById("btn-bn");
const restartBtn = document.getElementById("restart-btn");

const resultModal = document.getElementById("result-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const resWpm = document.getElementById("res-wpm");
const resAcc = document.getElementById("res-acc");
const resTyped = document.getElementById("res-typed");
const resErrors = document.getElementById("res-errors");

/* ==========================================================================
   4. ENGINE CORE & INITIALIZATION
   ========================================================================== */
function initTest(mode) {
    clearInterval(timerInterval);
    timerInterval = null;
    
    timeLeft = 60;
    isTestActive = true;
    hasStarted = false;
    
    wordIndex = 0;
    charIndex = 0;
    errors = 0;
    totalTyped = 0;
    errorTracker = {};
    expectedInputLength = 0;
    
    if (timerDisplay) timerDisplay.innerText = "60s";
    if (wpmDisplay) wpmDisplay.innerText = "0";
    if (accuracyDisplay) accuracyDisplay.innerText = "0"; 
    
    isBanglaMode = mode === "bn";
    if (keyboardWrapper) keyboardWrapper.setAttribute("data-layout", mode);
    
    let sourcePool = isBanglaMode ? [...banglaSentences] : [...englishSentences];
    sourcePool.sort(() => Math.random() - 0.5);
    
    currentWords = [];
    let poolIndex = 0;
    
    while (currentWords.length < 40) {
        currentWords.push(...sourcePool[poolIndex % sourcePool.length]);
        poolIndex++;
    }
    
    if (wordCountDisplay) wordCountDisplay.innerText = `0/${currentWords.length}`;
    renderWords();
    
    if (hiddenInput) {
        hiddenInput.disabled = false;
        hiddenInput.value = "";
        hiddenInput.focus();
    }
}

function renderWords() {
    if (!wordsDisplay) return;
    wordsDisplay.innerHTML = "";
    currentWords.forEach((word, wIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";
        wordSpan.id = `w-${wIdx}`;
        
        word.split("").forEach((char, cIdx) => {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.id = `w-${wIdx}-c-${cIdx}`;
            charSpan.innerText = char;
            wordSpan.appendChild(charSpan);
        });
        
        if (wIdx < currentWords.length - 1) {
            const spaceSpan = document.createElement("span");
            spaceSpan.className = "char space-char";
            spaceSpan.id = `w-${wIdx}-space`;
            spaceSpan.innerHTML = "&nbsp;";
            wordSpan.appendChild(spaceSpan);
        }
        wordsDisplay.appendChild(wordSpan);
    });
    markCurrentChar();
}

/* ==========================================================================
   5. GAMEPLAY & TEXT INPUT PROCESSING
   ========================================================================== */
function updateSuggestedKey() {
    document.querySelectorAll(".key.suggest-orange").forEach(el => el.classList.remove("suggest-orange"));
    if (!isTestActive || wordIndex >= currentWords.length) return;
    
    const currentWord = currentWords[wordIndex];
    let targetChar = " ";
    if (charIndex < currentWord.length) {
        targetChar = currentWord[charIndex];
    }
    
    const keys = document.querySelectorAll(".key");
    for (let keyEl of keys) {
        const dataKeys = keyEl.getAttribute("data-key");
        if (dataKeys && dataKeys.split(" ").includes(targetChar)) {
            keyEl.classList.add("suggest-orange");
            break;
        }
    }
}

function markCurrentChar() {
    document.querySelectorAll(".char.current").forEach(el => el.classList.remove("current"));
    if (!isTestActive) return;

    let currentEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
    if (!currentEl && wordIndex < currentWords.length - 1) {
        currentEl = document.getElementById(`w-${wordIndex}-space`);
    }
    if (currentEl) {
        currentEl.classList.add("current");
        currentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    updateSuggestedKey();
}

function startTimer() {
    hasStarted = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerDisplay) timerDisplay.innerText = `${timeLeft}s`;
        updateStats();

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

if (hiddenInput) {
    hiddenInput.addEventListener("keydown", (e) => {
        if (!isTestActive) { e.preventDefault(); return; }
        if (e.key === "Backspace") {
            handleBackspace();
            e.preventDefault();
        }
    });

    hiddenInput.addEventListener("input", (e) => {
        if (!isTestActive) return;
        if (!hasStarted) {
            startTimer();
        }

        const typedVal = e.target.value;
        
        if (typedVal.length < expectedInputLength) {
            handleBackspace();
            return;
        }

        if (typedVal === "") return;
        
        const currentWord = currentWords[wordIndex];
        const typedChar = typedVal[typedVal.length - 1];
        totalTyped++;

        if (typedChar === " ") {
            let spaceEl = document.getElementById(`w-${wordIndex}-space`);
            if (spaceEl) {
                const trackingKey = `w-${wordIndex}-space`;
                if (charIndex >= currentWord.length) {
                    spaceEl.classList.add("correct");
                } else {
                    spaceEl.classList.add("incorrect");
                    if(!errorTracker[trackingKey]) { errors++; errorTracker[trackingKey] = true; }
                }
            }
            wordIndex++;
            charIndex = 0;
            e.target.value = "";
            expectedInputLength = 0;
            if (wordCountDisplay) wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
        } else {
            const expectedChar = currentWord[charIndex];
            const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
            const trackingKey = `w-${wordIndex}-c-${charIndex}`;

            if (charEl) {
                if (typedChar === expectedChar) {
                    charEl.classList.add("correct");
                    charEl.classList.remove("incorrect");
                } else {
                    charEl.classList.add("incorrect");
                    charEl.classList.remove("correct");
                    if(!errorTracker[trackingKey]) { errors++; errorTracker[trackingKey] = true; }
                }
                charIndex++;
                expectedInputLength = typedVal.length;
            }
        }

        if (wordIndex >= currentWords.length) {
            endTest();
        } else {
            markCurrentChar();
            updateStats();
        }
    });
}

/* ==========================================================================
   6. DEVICE-AGNOSTIC BACKSPACE LOGIC
   ========================================================================== */
function handleBackspace() {
    if (charIndex > 0) {
        charIndex--;
        const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        if (charEl) charEl.classList.remove("correct", "incorrect");
        
        const currentTrackingKey = `w-${wordIndex}-c-${charIndex}`;
        if (errorTracker[currentTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[currentTrackingKey];
        }
    } else if (wordIndex > 0 && charIndex === 0) {
        wordIndex--;
        const prevWord = currentWords[wordIndex];
        
        const spaceEl = document.getElementById(`w-${wordIndex}-space`);
        if (spaceEl) spaceEl.classList.remove("correct", "incorrect");
        
        const spaceTrackingKey = `w-${wordIndex}-space`;
        if (errorTracker[spaceTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[spaceTrackingKey];
        }

        charIndex = prevWord.length - 1;
        const lastCharEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        if (lastCharEl) lastCharEl.classList.remove("correct", "incorrect");

        const lastCharTrackingKey = `w-${wordIndex}-c-${charIndex}`;
        if (errorTracker[lastCharTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[lastCharTrackingKey];
        }

        if (wordCountDisplay) wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
    }
    
    const proxyText = charIndex > 0 ? "x".repeat(charIndex) : "";
    if (hiddenInput) {
        hiddenInput.value = proxyText; 
        expectedInputLength = proxyText.length;
    }
    
    markCurrentChar();
    updateStats();
}

/* ==========================================================================
   7. CALCULATIONS & MODAL ACTIONS
   ========================================================================== */
function updateStats() {
    const timeElapsed = (60 - timeLeft) / 60;
    if (timeElapsed <= 0 || totalTyped === 0) {
        if (wpmDisplay) wpmDisplay.innerText = "0";
        if (accuracyDisplay) accuracyDisplay.innerText = "0";
        return;
    }

    const wpm = Math.round((totalTyped / 5) / timeElapsed);
    const accuracy = Math.max(0, Math.round(((totalTyped - errors) / totalTyped) * 100));

    if (wpmDisplay) wpmDisplay.innerText = wpm;
    if (accuracyDisplay) accuracyDisplay.innerText = accuracy;
}

function endTest() {
    isTestActive = false;
    clearInterval(timerInterval);
    if (hiddenInput) hiddenInput.disabled = true;
    
    document.querySelectorAll(".char.current").forEach(el => el.classList.remove("current"));
    document.querySelectorAll(".key.suggest-orange").forEach(el => el.classList.remove("suggest-orange"));

    const finalWpm = wpmDisplay ? wpmDisplay.innerText : "0";
    const finalAcc = accuracyDisplay ? accuracyDisplay.innerText : "0";

    if (resWpm) resWpm.innerText = finalWpm;
    if (resAcc) resAcc.innerText = `${finalAcc}%`;
    if (resTyped) resTyped.innerText = totalTyped;
    if (resErrors) resErrors.innerText = errors;

    if (resultModal) resultModal.classList.add("active");
}

/* ==========================================================================
   8. VISUAL KEYBOARD SYNCHRONIZATION WITH SYMBOL PATTERNS
   ========================================================================== */
window.addEventListener("keydown", (e) => {
    let keyId = e.code;
    const targetKey = document.getElementById(keyId);
    if (!targetKey) return;

    if (!isTestActive) {
        targetKey.classList.add("press-correct");
        return;
    }

    const currentWord = currentWords[wordIndex];
    let expectedChar = " ";
    if (currentWord && charIndex < currentWord.length) {
        expectedChar = currentWord[charIndex];
    }

    const dataKeys = targetKey.getAttribute("data-key");
    
    let normalizeKey = e.key;
    if (keyId === "Period") normalizeKey = ".";
    if (keyId === "Comma") normalizeKey = ",";
    if (keyId === "Semicolon") normalizeKey = ";";

    if (e.key === "Backspace" || e.key === "Shift" || e.key === "CapsLock" || e.key === "Tab" || e.key === "Enter") {
        targetKey.classList.add("press-correct");
    } else if (dataKeys && (dataKeys.split(" ").includes(expectedChar) || normalizeKey === expectedChar)) {
        targetKey.classList.add("press-correct");
    } else {
        targetKey.classList.add("press-error");
    }
});

window.addEventListener("keyup", (e) => {
    let keyId = e.code;
    const targetKey = document.getElementById(keyId);
    if (targetKey) {
        targetKey.classList.remove("press-correct", "press-error");
    }
    updateSuggestedKey();
});

/* ==========================================================================
   9. GLOBAL APPLICATION EVENT HANDLERS
   ========================================================================== */
if (wordsDisplay) {
    wordsDisplay.addEventListener("click", () => { if(isTestActive && hiddenInput) hiddenInput.focus(); });
}
if (btnEn) {
    btnEn.addEventListener("click", () => { btnEn.classList.add("active"); if(btnBn) btnBn.classList.remove("active"); initTest("en"); });
}
if (btnBn) {
    btnBn.addEventListener("click", () => { btnBn.classList.add("active"); if(btnEn) btnEn.classList.remove("active"); initTest("bn"); });
}
if (restartBtn) {
    restartBtn.addEventListener("click", () => initTest(isBanglaMode ? "bn" : "en"));
}
if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
        if (resultModal) resultModal.classList.remove("active");
        initTest(isBanglaMode ? "bn" : "en");
    });
}

// প্রথমবার এপ্লিকেশন লোড করার ট্র্রিগার
document.addEventListener("DOMContentLoaded", () => {
    initTest("en");
});
