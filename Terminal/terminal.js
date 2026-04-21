const input = document.getElementById("input");
const output = document.getElementById("output");
const bootScreen = document.getElementById("boot-screen");
const terminal = document.querySelector(".terminal");

let flickering = false;

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

      // Animate dots ONLY for loading-style lines
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

    // Remove previous dots at end
    bootScreen.innerHTML = bootScreen.innerHTML.replace(/\.*$/, "");

    // Add new dots
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
function runBootSequence() {
  if (index < bootLines.length) {

    let delay = 300 + Math.random() * 300;

    // Slower for important lines
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
        startTerminal();
      }, 200);

    }, 1000);
  }
}
runBootSequence();


// ======================
// TERMINAL SYSTEM
// ======================

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
  `,

  games: `
The Games page contains playable experiences
within the Mythos universe.
  `,

  creator: `
Created by Myth.
Expanding the universe, one page at a time.
  `,
};

// Output printer
function print(text) {
  output.innerHTML += text + "\n\n";
  output.scrollTop = output.scrollHeight;
}

// Command handler
function handleCommand(cmd) {
  const command = cmd.toLowerCase();

  print("> " + cmd);

  if (command === "clear") {
    output.innerHTML = "";
    return;
  }

  if (commands[command]) {
    print(commands[command]);
  } else {
    print("Command not recognized. Type 'help'.");
  }
}

// Input listener
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleCommand(input.value);
    input.value = "";
  }
});

// Terminal boot message
function startTerminal() {
  print("MYTHOS TERMINAL [v1.0]");
  print("Type 'help' to begin.");
}