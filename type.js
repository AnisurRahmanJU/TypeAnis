const englishWords = [
    "Anis", "Dhaka", "Bangladesh", "The", "Quick", "Brown", "Fox", "Jumps", "Over", "Lazy", 
    "Dog", "Javascript", "Monkeytype", "Keyboard", "Programming", "Computer", "Internet", "Software", "Developer", "Application"
];

const banglaWords = [
    "আনিস", "ঢাকা", "বাংলাদেশ", "আমাদের", "সোনার", "আমি", "তোমায়", "ভালোবাসি", "ভাষা", "আন্দোলন", 
    "শহীদ", "স্মৃতি", "সবাই", "একত্রে", "সুন্দর", "পদ্মা", "মেঘনা", "যমুনা", "নদী", "মাতৃক"
];

let currentWords = [];
let wordIndex = 0;
let charIndex = 0;
let startTime = null;
let timerInterval = null;
let errors = 0;
let totalTyped = 0;
let isBanglaMode = false;
let errorTracker = {};

const wordsDisplay = document.getElementById("words-display");
const hiddenInput = document.getElementById("hidden-input");
const keyboardWrapper = document.getElementById("keyboard");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const wordCountDisplay = document.getElementById("word-count");
const btnEn = document.getElementById("btn-en");
const btnBn = document.getElementById("btn-bn");
const restartBtn = document.getElementById("restart-btn");

function initTest(mode) {
    clearInterval(timerInterval);
    startTime = null;
    wordIndex = 0;
    charIndex = 0;
    errors = 0;
    totalTyped = 0;
    errorTracker = {};
    
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "100";
    
    isBanglaMode = mode === "bn";
    
    // Dynamically change layout configuration on the wrapper object
    keyboardWrapper.setAttribute("data-layout", mode);
    
    currentWords = isBanglaMode ? [...banglaWords] : [...englishWords];
    currentWords.sort(() => Math.random() - 0.5);
    
    wordCountDisplay.innerText = `0/${currentWords.length}`;
    renderWords();
    hiddenInput.value = "";
    hiddenInput.focus();
}

function renderWords() {
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

function updateSuggestedKey() {
    document.querySelectorAll(".key.suggest-orange").forEach(el => el.classList.remove("suggest-orange"));
    
    if (wordIndex >= currentWords.length) return;
    
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

hiddenInput.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        handleBackspace();
        e.preventDefault();
    }
});

hiddenInput.addEventListener("input", (e) => {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateStats, 1000);
    }

    const typedVal = e.target.value;
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
        wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
    } else {
        const expectedChar = currentWord[charIndex];
        const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        const trackingKey = `w-${wordIndex}-c-${charIndex}`;

        if (charEl) {
            if (typedChar === expectedChar) {
                charEl.classList.add("correct");
            } else {
                charEl.classList.add("incorrect");
                if(!errorTracker[trackingKey]) { errors++; errorTracker[trackingKey] = true; }
            }
            charIndex++;
        }
    }

    if (wordIndex >= currentWords.length) {
        clearInterval(timerInterval);
        updateStats();
        alert("Completed successfully!");
    } else {
        markCurrentChar();
    }
});

function handleBackspace() {
    if (charIndex > 0) {
        charIndex--;
        const charEl = document.getElementById(`w-${wordIndex}-c-${charIndex}`);
        if (charEl) charEl.classList.remove("correct", "incorrect");
        
        const currentTrackingKey = `w-${wordIndex}-c-${charIndex}`;
        if(errorTracker[currentTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[currentTrackingKey];
        }
    } else if (wordIndex > 0 && charIndex === 0) {
        wordIndex--;
        const prevWord = currentWords[wordIndex];
        charIndex = prevWord.length;
        
        const spaceEl = document.getElementById(`w-${wordIndex}-space`);
        if (spaceEl) spaceEl.classList.remove("correct", "incorrect");
        
        const spaceTrackingKey = `w-${wordIndex}-space`;
        if(errorTracker[spaceTrackingKey]) {
            errors = Math.max(0, errors - 1);
            delete errorTracker[spaceTrackingKey];
        }
        wordCountDisplay.innerText = `${wordIndex}/${currentWords.length}`;
    }
    
    hiddenInput.value = charIndex > 0 ? "x".repeat(charIndex) : ""; 
    markCurrentChar();
    updateStats();
}

function updateStats() {
    if (!startTime) return;
    const timeElapsed = (new Date() - startTime) / 1000 / 60;
    if (timeElapsed <= 0) return;

    const wpm = Math.round((totalTyped / 5) / timeElapsed);
    const accuracy = totalTyped > 0 ? Math.max(0, Math.round(((totalTyped - errors) / totalTyped) * 100)) : 100;

    wpmDisplay.innerText = wpm;
    accuracyDisplay.innerText = accuracy;
}

window.addEventListener("keydown", (e) => {
    let keyId = e.code;
    const targetKey = document.getElementById(keyId);
    if (!targetKey) return;

    if (wordIndex >= currentWords.length) {
        targetKey.classList.add("press-correct");
        return;
    }

    const currentWord = currentWords[wordIndex];
    let expectedChar = " ";
    if (charIndex < currentWord.length) {
        expectedChar = currentWord[charIndex];
    }

    const dataKeys = targetKey.getAttribute("data-key");
    
    if (e.key === "Backspace" || e.key === "Shift" || e.key === "CapsLock" || e.key === "Tab" || e.key === "Enter") {
        targetKey.classList.add("press-correct");
    } else if (dataKeys && dataKeys.split(" ").includes(expectedChar)) {
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

wordsDisplay.addEventListener("click", () => hiddenInput.focus());
btnEn.addEventListener("click", () => { btnEn.classList.add("active"); btnBn.classList.remove("active"); initTest("en"); });
btnBn.addEventListener("click", () => { btnBn.classList.add("active"); btnEn.classList.remove("active"); initTest("bn"); });
restartBtn.addEventListener("click", () => initTest(isBanglaMode ? "bn" : "en"));

initTest("en");