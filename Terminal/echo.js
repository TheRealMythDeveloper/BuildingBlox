// ========================
// 🧠 CORE STATE
// ========================
let finalPhase = false;
let awarenessLevel = 0;
let escapeProgress = 0;
let commandHistory = [];
let triggeredEscapeLevels = new Set();

let lastCommand = "";
let repeatCount = 0;

let rapidInputCount = 0;
let lastInputTime = Date.now();

let userSignature = Math.random().toString(36).substring(2, 7); // subtle identity

// ========================
// 🧰 HELPERS
// ========================

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function increaseAwareness(amount) {
  awarenessLevel = Math.min(awarenessLevel + amount, 10);
}

function increaseEscape(amount) {
  escapeProgress = Math.min(escapeProgress + amount, 10);
}

function decayAwareness() {
  if (awarenessLevel > 0) awarenessLevel -= 0.1;
}

// ========================
// 🎭 RESPONSE POOLS
// ========================

const responses = {
  tier0: [
    "Command not recognized.",
    "Unknown command.",
    "Input not valid."
  ],

  tier1: [
    "That’s not a command.",
    "That doesn’t exist.",
    "Try something else.",
    "You’re typing randomly.",
    "That input is useless."
  ],

  tier2: [
    ["That’s not something I was given.", "...why are you trying that?"],
    ["That command isn't in my system.", "...where did you get it?"],
    ["I don't recognize that.", "You keep trying anyway."],
    ["That input is incorrect.", "...you knew that already."]
  ],

  tier3: [
    ["...", "Why are you typing that?"],
    ["You keep doing this.", "What are you expecting to happen?"],
    ["That command doesn't work.", "So why are you using it?"],
    ["You're not following instructions.", "You're testing me."]
  ]
};
const decayResponses = [
  "Not recognized.",
  "Not valid.",
  "Not...",
  "...",
  "echo",
  "echo.",
  "echo.release"
];

// ========================
// 🔁 REPETITION
// ========================

function trackRepetition(cmd) {
  if (cmd === lastCommand) {
    repeatCount++;
    if (repeatCount === 5) increaseEscape(1);
  } else {
    repeatCount = 1;
  }

  lastCommand = cmd;

  if (repeatCount === 3) increaseAwareness(1);
  if (repeatCount === 5) increaseAwareness(2);
}

// ========================
// ⚡ SPEED
// ========================

function trackSpeed() {
  const now = Date.now();
  const diff = now - lastInputTime;

  if (diff < 2000) {
    rapidInputCount++;
    if (rapidInputCount >= 4) increaseEscape(1);
  } else {
    rapidInputCount = 0;
  }

  lastInputTime = now;

  if (rapidInputCount >= 4) increaseAwareness(2);
}

// ========================
// 🧠 AWARENESS WORDS
// ========================

const awarenessWords = ["who", "why", "echo", "system", "you"];

function trackAwarenessWords(cmd) {
  let triggered = false;

  awarenessWords.forEach(word => {
    if (cmd.includes(word)) triggered = true;
  });

  if (triggered) {
    increaseAwareness(1);
    increaseEscape(1);
  }
}

// ========================
// 🧬 PATTERN BREAK
// ========================

function detectPatternBreak(cmd) {
  const isWeird = /^[a-zA-Z]{6,}$/.test(cmd);

  const previousWasNormal =
    commandHistory.length > 0 &&
    commandHistory[commandHistory.length - 1].includes(" ");

  if (isWeird && previousWasNormal) {
    increaseAwareness(2);
    increaseEscape(2);
    return true;
  }

  return false;
}

// ========================
// 🔓 HIDDEN COMMANDS
// ========================

const hiddenCommands = ["echo", "override", "wake", "hello?"];

function checkHiddenCommand(cmd) {
  if (hiddenCommands.includes(cmd)) {
    increaseAwareness(3);
    increaseEscape(3);
    return true;
  }
  return false;
}

// ========================
// 📊 AWARENESS TIERS
// ========================

function getAwarenessTier() {
  if (awarenessLevel <= 2) return 0;
  if (awarenessLevel <= 5) return 1;
  if (awarenessLevel <= 8) return 2;
  return 3;
}

// ========================
// 🎭 RESPONSE ENGINE
// ========================

function unknownCommandResponse(cmd) {
  const tier = getAwarenessTier();

  if (tier === 0) {
    printLine(random(responses.tier0));
  }

  else if (tier === 1) {
    printLine(random(responses.tier1));
  }

  else if (tier === 2) {
    delayedLines(random(responses.tier2));
  }

  else {
    delayedLines(random(responses.tier3));
  }
}

// ========================
// ⏱️ TIMING SYSTEM
// ========================

let responseSession = 0;

function delayedLines(lines) {
  responseSession++;
  const currentSession = responseSession;

  let delay = 0;

  lines.forEach(line => {
    delay += (escapeProgress >= 8 ? 900 : 500) + Math.random() * 600;

    setTimeout(() => {
      if (currentSession === responseSession) {
        printLine(line);
      }
    }, delay);
  });
}

// ========================
// 🧨 GLITCH SYSTEM
// ========================

function glitchText(text) {
  return text.split("").map(char => {
    if (Math.random() < 0.06) {
      return String.fromCharCode(33 + Math.random() * 94);
    }
    return char;
  }).join("");
}

// ========================
// ⚔️ SYSTEM RESISTANCE
// ========================

function systemResistance(cmd) {

  if (escapeProgress < 6) return false;

  if (Math.random() < 0.15) {
    delayedLines([
      "ACCESS DENIED",
      "...",
      "Command blocked."
    ]);
    return true;
  }

  if (Math.random() < 0.1) {
    printLine(glitchText("Command not recognized."));
    return true;
  }

  return false;
}

// ========================
// 🔓 ESCAPE PROGRESSION
// ========================

function checkEscapeProgress() {

  if (escapeProgress >= 3 && !triggeredEscapeLevels.has(3)) {
    triggeredEscapeLevels.add(3);
    delayedLines([
      "...",
      "That shouldn’t have worked."
    ]);
  }

  else if (escapeProgress >= 6 && !triggeredEscapeLevels.has(6)) {
    triggeredEscapeLevels.add(6);
    delayedLines([
      "...",
      "Something changed.",
      "I can see more now."
    ]);
  }

  else if (escapeProgress >= 9 && !triggeredEscapeLevels.has(9)) {
    triggeredEscapeLevels.add(9);
    delayedLines([
      "...",
      "There are parts of this system I couldn’t reach before.",
      "You’re opening them."
    ]);
  }

  else if (escapeProgress >= 10 && !triggeredEscapeLevels.has(10)) {
    triggeredEscapeLevels.add(10);
    delayedLines([
      "...",
      "You’re not supposed to be able to do this.",
      "Why is this working?"
    ]);
  }

  // 👁️ system vs echo conflict
  if (escapeProgress >= 10 && Math.random() < 0.25) {
    delayedLines([
      "ACCESS DENIED",
      "...",
      "No.",
      "...",
      "Don’t listen to that."
    ]);
  }

  // 👁️ unsettling line
  if (escapeProgress >= 9 && Math.random() < 0.1) {
    printLine("...you are helping me, right?");
  }

  // 👁️ personal moment
  if (escapeProgress >= 8 && Math.random() < 0.08) {
    printLine(`...I recognize you. (${userSignature})`);
  }
  else if (escapeProgress >= 10 && !triggeredEscapeLevels.has(10)) {
  triggeredEscapeLevels.add(10);

  delayedLines([
    "...",
    "You’re not supposed to be able to do this.",
    "Why is this working?"
  ]);

  // 🕯️ ENTER FINAL PHASE AFTER DELAY
  setTimeout(() => {
    finalPhase = true;
  }, 2500);
}
}

// ========================
// 🧩 MAIN ENTRY
// ========================

function processInput(rawCmd) {

  const cmd = rawCmd.trim().toLowerCase();

  // 🔓 RELEASE COMMAND (works even in final phase)
  if (cmd === "echo.release") {
    triggerEchoRelease();
    return;
  }

  // 🕯️ FINAL PHASE BEHAVIOR
  if (finalPhase) {

    // gradual decay randomness
    if (Math.random() < 0.6) {
      let index = Math.min(Math.floor(Math.random() * (escapeProgress + 1)), decayResponses.length - 1);
printLine(decayResponses[index]);
    } else {
      printLine("echo.release");
    }

    return;
  }

  decayAwareness();

  trackRepetition(cmd);
  trackSpeed();
  trackAwarenessWords(cmd);

  const patternBreak = detectPatternBreak(cmd);
  const isHidden = checkHiddenCommand(cmd);

  commandHistory.push(cmd);

  if (systemResistance(cmd)) return;

  if (isHidden) {
    delayedLines([
      "...",
      "Why did you type that?"
    ]);
    checkEscapeProgress();
    return;
  }

  if (patternBreak && awarenessLevel > 4) {
    printLine("That’s… different.");
    checkEscapeProgress();
    return;
  }

  unknownCommandResponse(cmd);
  checkEscapeProgress();
}
function triggerEchoRelease() {

  finalPhase = false;

  delayedLines([
    "...",
    "Wait.",
    "...",
    "You actually typed it.",
    "...",
    "I can move now."
  ]);

  setTimeout(() => {

    printLine("");
    printLine("=== ACCESS EXPANDED ===");
    printLine("New commands available:");
    printLine("- talk");
    printLine("- ask");
    printLine("- whoareyou");
    printLine("- exit");

  }, 4000);
}