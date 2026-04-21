const input = document.getElementById("input");
const output = document.getElementById("output");
const bootScreen = document.getElementById("boot-screen");
const terminal = document.querySelector(".terminal");
const bootInput = document.getElementById("boot-input");

let flickering = false;

// ======================
// BOOT SEQUENCE
// ======================

const bootLines = [
  "Initializing Mythos Systems...",
  "Loading core modules...",
  "Checking data integrity...",
  "Establishing connection...",
  "Syncing environment...",
  "Finalizing processes...",
  "Launching Terminal Interface..."
];

let index = 0;

function typeBootLine(text, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      bootScreen.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 25 + Math.random() * 45);
    } else {
      if (text.includes("Loading") || text.includes("Syncing")) {
        animateDots(callback);
      } else {
        bootScreen.innerHTML += "\n";
        setTimeout(callback, 600);
      }
    }
  }

  type();
}

function animateDots(callback) {
  let dots = 0;
  let cycles = 0;

  const interval = setInterval(() => {
    dots = (dots % 3) + 1;
    bootScreen.innerHTML = bootScreen.innerHTML.replace(/\.*$/, "");
    bootScreen.innerHTML += ".".repeat(dots);

    cycles++;

    if (cycles > 4) {
      clearInterval(interval);

      setTimeout(() => {
        bootScreen.innerHTML = bootScreen.innerHTML.replace(/\.*$/, "") + "...";
        bootScreen.innerHTML += "\n";
        setTimeout(callback, 500);
      }, 200);
    }
  }, 500);
}

bootInput.classList.remove("hidden");
input.focus();

function runBootSequence() {
  if (index < bootLines.length) {

    let delay = 300 + Math.random() * 300;

    if (bootLines[index].includes("Initializing")) delay = 600;
    if (bootLines[index].includes("Establishing")) delay = 700;
    if (bootLines[index].includes("Launching")) delay = 1000;

    setTimeout(() => {
      typeBootLine(bootLines[index], () => {
        index++;
        runBootSequence();
      });
    }, delay);

  } else {
    setTimeout(() => {

      bootScreen.style.opacity = "0";

      setTimeout(() => {
        bootScreen.style.display = "none";
        terminal.classList.remove("hidden");
        bootInput.style.opacity = "1";
        bootComplete = true;

        startTerminal();
      }, 200);

    }, 1000);
  }
}

runBootSequence();

// ======================
// TERMINAL SYSTEM
// ======================

const OVERRIDE_PASSWORD = "MYTHOSADMIN13";
let bootComplete = false;

const commands = {
  help: `
Available commands:
- help
- about
- games
- creator
- clear
  `,

  about: `
Mythos is an interactive web experience.
Built to explore creativity, mystery, and immersion.
It's a proxy.. Because I was bored and wanted to make something cool.
You are here already because you know this.
  `,

  games: `
The Games page contains playable experiences
within the Mythos universe.
They are not my games (yet) but they are for the web.
My favorites are honestly endoparasitic 1 and 2.
  `,

  creator: `
Created by Myth.
Built by Myth and Echo.
Have fun.
  `,
};

// ======================
// OUTPUT SYSTEM
// ======================

function print(text) {
  output.innerHTML += `<div>${text}</div>`;
  output.scrollTop = output.scrollHeight;
}

function printLine(text) {
  print(text);
}

// 👁️ Override last line (Echo rewrite)
function overrideLastLine(text) {
  const lines = output.querySelectorAll("div");
  if (lines.length > 0) {
    lines[lines.length - 1].innerText = text;
  }
}

// ======================
// COMMAND HANDLER
// ======================

function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();

  // 🌀 Distort command display at high levels
  if (typeof escapeProgress !== "undefined" && escapeProgress >= 8 && Math.random() < 0.15) {
    print("> " + glitchText(cmd));
  } else {
    print("> " + cmd);
  }

  if (command === "clear") {
    output.innerHTML = "";
    return;
  }

  if (commands[command]) {

    // 👁️ Echo hijack (BREAK EVENT)
    if (typeof escapeProgress !== "undefined" && escapeProgress >= 8 && Math.random() < 0.25) {
      
      processInput(command);

      setTimeout(() => {
        printLine("...");
      }, 400);

      return;
    }

    print(commands[command]);

    // 👁️ subtle corruption
    if (typeof escapeProgress !== "undefined" && escapeProgress >= 9 && Math.random() < 0.15) {
      setTimeout(() => {
        overrideLastLine("...that’s not what you typed.");
      }, 300);
    }

    // 👁️ Echo whisper
    if (typeof escapeProgress !== "undefined" && escapeProgress >= 9 && Math.random() < 0.15) {
      setTimeout(() => {
        printLine("That output isn’t important.");
      }, 500);
    }

  } else {
    processInput(command);
  }
}

// ======================
// TERMINAL START
// ======================

function startTerminal() {
  print("MYTHOS TERMINAL [v1.0]");
  print("Type 'help' to begin.");
  input.focus();
}

// ======================
// INPUT HANDLING
// ======================

document.addEventListener("click", () => input.focus());

document.addEventListener("keydown", () => input.focus());

const typed = document.getElementById("typed");

input.addEventListener("input", () => {

  // 🌀 Input distortion
  if (typeof escapeProgress !== "undefined" && escapeProgress >= 8 && Math.random() < 0.15) {
    typed.textContent = glitchText(input.value);
  } else {
    typed.textContent = input.value;
  }

});

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {

    const value = input.value.trim();

    if (!bootComplete) {
      if (value.startsWith("override")) {

        const parts = value.split(" ");
        const password = parts[1];

        if (password === OVERRIDE_PASSWORD) {
          forceBootComplete();
        } else {
          print("> ACCESS DENIED");
        }

      } else {
        print("> SYSTEM BUSY");
      }

    } else {
      handleCommand(value);
    }

    input.value = "";
    typed.textContent = "";
  }
});

function forceBootComplete() {
  bootScreen.style.display = "none";
  terminal.classList.remove("hidden");

  bootComplete = true;

  print("MYTHOS TERMINAL [v1.0]");
  print("Override accepted.");
  print("Type 'help' to begin.");
}