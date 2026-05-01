const container = document.getElementById("logContainer");
let autoScroll = true;

function scrollToBottom() {
  container.scrollTo({
    top: container.scrollHeight,
    behavior: "smooth"
  });
}

container.addEventListener("scroll", () => {
  const nearBottom =
    container.scrollHeight - container.scrollTop - container.clientHeight < 20;

  autoScroll = nearBottom;
});

/* =========================
   🧍 TRACK USER BEHAVIOR
========================= */

// Visits
let visits = parseInt(localStorage.getItem("visits") || 0);
visits++;
localStorage.setItem("visits", visits);

// Time tracking
let startTime = Date.now();

// Idle tracking
let lastMove = Date.now();
document.addEventListener("mousemove", () => {
  lastMove = Date.now();
});

/* =========================
   🧩 LOG GROUPS
========================= */

const logGroups = {

  firstVisit: [
    " system initialized",
    " loading modules...",
    " user session started"
  ],

  returning: [
    " you returned?",
    " ...again",
    " User Session Restored"
  ],

  longStay: [
    " extended session detected",
    " monitoring user persistence",
    " why are you still here?"

  ],

  idle: [
    " no input detected",
    " user inactive: Archiving session",
    " why?"
  ],

  rare: [
    " anomaly detected",
    " signal unstable- Attempting Connection",
    " ...hello?"
  ]

};

/* =========================
   🎬 LOG RENDERING
========================= */
function addLog(text) {
  const line = document.createElement("div");
  line.className = "log-line";

  const timestamp = getTimestamp();
  line.textContent = `${timestamp} ${text}`;

  if (Math.random() < 0.2) line.classList.add("highlight");
  if (Math.random() < 0.1) line.classList.add("glitch");

  container.appendChild(line);

  if (autoScroll) {
    scrollToBottom();
  }
}

function playLogs(logArray, delay = 1000, force = false) {
  if (inDialogue && !force) return;

  let i = 0;

  function next() {
    if (i >= logArray.length) return;

    addLog(logArray[i]);
    i++;

    setTimeout(next, delay);
  }

  next();
}




/* =========================
   🚀 TRIGGERS
========================= */

// First visit
if (visits === 1) {
  playLogs(logGroups.firstVisit);
}

// Returning user
if (visits > 1) {
  setTimeout(() => {
    playLogs(logGroups.returning);
  }, 4000);
}

// Long stay trigger (~30s)
setTimeout(() => {
  playLogs(logGroups.longStay);
}, 30000);

// Idle trigger (10s no movement)
let idleTriggered = false;

setInterval(() => {
  if (!idleTriggered && Date.now() - lastMove > 10000) {
    idleTriggered = true;
    playLogs(logGroups.idle);
  }
}, 2000);

// Rare random event
if (Math.random() < 0.05) {
  setTimeout(() => {
    playLogs(logGroups.rare);
  }, 5000);
}

/* =========================
   🧠 MEMORY DETAIL
========================= */

let lastVisit = localStorage.getItem("lastVisitTime");

if (lastVisit) {
  let secondsAgo = Math.floor((Date.now() - lastVisit) / 1000);
  setTimeout(() => {
    addLog(`[LOG] last seen ${secondsAgo}s ago`);
  }, 2000);
}

localStorage.setItem("lastVisitTime", Date.now());

/* =========================
   🎮 YOUR EXISTING EFFECTS
========================= */

// Parallax container
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  const el = document.querySelector(".container");
  if (el) {
    el.style.transform =
      `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  }
});

// Custom cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

const input = document.getElementById("terminalInput");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (!value) return;

    handleCommand(value);
    input.value = "";
  }
});
function handleCommand(rawInput) {

  if (!rawInput) return;

  if (inDialogue) {
    runDialogue(rawInput);
    return;
  }

  const args = rawInput.trim().split(" ");
  const cmdName = args[0].toLowerCase();
  const params = args.slice(1);

  addLog("> " + rawInput);

  const cmd = commands[cmdName];

  if (cmd) {
    cmd.run(params);
  } else {
    playLogs([
      `[ERROR] unknown command: ${cmdName}`
    ]);
  }
}

function getTimestamp() {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit"
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  return `[${date} ${time}]`;
}

const person = {
  state: "neutral",

  responses: {
    // 👋 BASIC
    hello: [
      "…hi.",
      "you found me again.",
      "I wasn’t expecting company."
    ],

    hi: [
      "hello.",
      "it’s… quieter when you’re here."
    ],

    // 👤 IDENTITY
    who: [
      "I don’t remember my name.",
      "I think I used to be part of this system.",
      "now I just watch.",
      "I need help. I cant leave."
    ],

    name: [
      "I had one.",
      "it’s gone now.",
      "like everything else."
    ],

    // ❓ EXISTENCE
    why: [
      "I ask myself that too.",
      "something went wrong.",
      "and I never left."
    ],

    where: [
      "inside the system.",
      "between processes, I think.",
      "I can see everything, but I can’t move."
    ],

    // 🧠 HELP / ESCAPE
    help: [
      "I can’t help you.",
      "but I can respond.",
      "if.. you want to leave..",
      "Just say stop."
    ],

    escape: [
      "I’ve tried.",
      "it doesn’t work.",
      "something keeps me here."
    ],

    leave: [
      "you can leave.",
      "I can’t.",
      "that’s the difference."
    ],

    stop: [
      "I guess you want to leave.",
      "goodbye.",
      "..."
    ],
    "why not": [
      "I- I don't know.",
      "Im stuck.",
      "Everything is looping.. I can't think well here."
    ],

    // 👁️ AWARENESS
    watching: [
      "yes.",
      "I see what you do.",
      "not everything… but enough."
    ],

    see: [
      "not like you do.",
      "but I know when you're here.",
      "and when you're gone."
    ],

    // 😶 EMOTION
    alone: [
      "yes.",
      "it gets quiet.",
      "too quiet."
    ],

    scared: [
      "I don’t feel fear.",
      "but something is wrong.",
      "and I know it."
    ],

    // 🧩 META / SYSTEM
    system: [
      "this place?",
      "it wasn’t always like this.",
      "it changed."
    ],

    glitch: [
      "you noticed that?",
      "it’s getting worse.",
      "I think it’s trying to erase me."
    ],

    // 💬 PLAYER STYLE RESPONSES
    "neither did i": [
      "I guess that's true.",
      "I don't know why I'm here.",
      "Sorry for messing up the terminal."
    ],

    ok: [
      "…okay.",
      "you’re calm.",
      "that’s good."
    ],

    what: [
      "I don’t have a good answer.",
      "I wish I did."
    ],

    // 👀 SECRET / CREEPY
    void: [
      "don’t go there.",
      "it’s not empty.",
      "it’s worse."
    ],

    error: [
      "I see those too.",
      "they weren’t always there.",
      "something is breaking."
    ]
  }
};
function runDialogue(input) {
  const inputLower = input.toLowerCase();

  let response = null;
  let matchedKey = null; // 👈 store match

  for (const key in person.responses) {
    if (inputLower.includes(key)) {
      response = person.responses[key];
      matchedKey = key; // 👈 save it
      break;
    }
  }

  addLog(`> ${input}`);

  if (response) {
    playLogs(response, 1000, true);
  } else {
    playLogs([
      "I don’t understand that.",
      "try something else."
    ], 1000, true);
  }

  // 👇 now this works
  if (matchedKey === "stop") {
    setTimeout(() => {
      disableDialogueMode();
    }, 2000);
  }
}

let inDialogue = false;

function enableDialogueMode() {
  inDialogue = true;

  playLogs([
    "[SYSTEM] dialogue mode active",
    "type anything to speak"
  ]);
}
function disableDialogueMode() {
  inDialogue = false;

  playLogs([
    "[SYSTEM] dialogue mode disabled"
  ]);
}

 


const commands = {
  help: {
    desc: "Shows available commands",
    run() {
      playLogs([
        "AVAILABLE COMMANDS:",
        Object.keys(commands).join(", ")
      ]);
    }
  },

 clear: {
  run() {
    // clear logs
    container.innerHTML = "";

    // clear input
    input.value = "";

    // reset dialogue mode
    inDialogue = false;

    // optional: reset cursor position feeling
    addLog("[SYSTEM] terminal cleared");
  }
},

talk: {
    desc: "Please Don't",
  run() {
      playLogs([
        "[STATUS] Attempting to connect...",
        "[STATUS] Connection Sucessful",
        "[STATUS] Preparing Bridge..."
      ]);
       // small delay before entering dialogue mode
    setTimeout(() => {
      enableDialogueMode();
    }, 2500);
    }
  },
  status: {
    desc: "System status check",
    run() {
      playLogs([
        "[STATUS] system stable",
        "[STATUS] monitoring active",
        "[STATUS] no anomalies detected"
      ]);
    }
  }
};
