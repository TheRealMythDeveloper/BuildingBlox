const fs = require("fs");
const path = require("path");

const ROOT = "./files";

function scan(dir) {
    const result = {};

    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);

        if (fs.statSync(full).isDirectory()) {
            result[item] = scan(full);
        } else if (item.endsWith(".txt")) {
            result[item] = full.replace(/^files[\\/]/, "").replace(/\\/g, "/");
        }
    }

    return result;
}

const tree = scan(ROOT);

fs.writeFileSync(
    "files.json",
    JSON.stringify(tree, null, 4)
);

console.log("Generated files.json");