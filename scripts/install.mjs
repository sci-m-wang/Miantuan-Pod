#!/usr/bin/env node
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const skillsDir = path.join(root, "skills");
const args = process.argv.slice(2);
const target = args[0] || "all";

function option(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] || fallback;
}

function expandHome(value) {
  return value.replace(/^~(?=$|\/)/, os.homedir());
}

const destRoot = expandHome(option("--dest", path.join(os.homedir(), ".codex", "skills")));
const dryRun = args.includes("--dry-run");

async function availableSkills() {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

const names = target === "all" ? await availableSkills() : [target];
await mkdir(destRoot, { recursive: true });

for (const name of names) {
  const src = path.join(skillsDir, name);
  const dest = path.join(destRoot, name);
  if (dryRun) {
    console.log(`[dry-run] ${src} -> ${dest}`);
    continue;
  }
  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });
  console.log(`Installed ${name} -> ${dest}`);
}
