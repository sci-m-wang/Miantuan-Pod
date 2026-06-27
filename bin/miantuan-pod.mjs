#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const command = args[0] || "help";

if (command === "install") {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "install.mjs"), ...(args.slice(1).length ? args.slice(1) : ["all"])], {
    stdio: "inherit",
  });
  process.exit(result.status ?? 1);
}

if (command === "validate") {
  const result = spawnSync(process.execPath, [path.join(root, "scripts", "validate-skills.mjs")], {
    stdio: "inherit",
  });
  process.exit(result.status ?? 1);
}

console.log(`Miantuan Pod

Usage:
  miantuan-pod install [all|skill-name] [--dest ~/.codex/skills]
  miantuan-pod validate
`);
