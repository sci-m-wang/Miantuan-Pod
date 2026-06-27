#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const skillsRoot = path.join(root, "skills");
const entries = await readdir(skillsRoot, { withFileTypes: true });
let failures = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillPath = path.join(skillsRoot, entry.name, "SKILL.md");
  let text;
  try {
    text = await readFile(skillPath, "utf8");
  } catch {
    console.error(`${entry.name}: missing SKILL.md`);
    failures += 1;
    continue;
  }

  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    console.error(`${entry.name}: missing YAML frontmatter`);
    failures += 1;
    continue;
  }

  const name = match[1].match(/^name:\s*"?([^"\n]+)"?/m)?.[1]?.trim();
  const description = match[1].match(/^description:\s*"?([\s\S]*?)"?$/m)?.[1]?.trim();
  if (name !== entry.name) {
    console.error(`${entry.name}: frontmatter name is ${name || "(missing)"}`);
    failures += 1;
  }
  if (!description) {
    console.error(`${entry.name}: missing description`);
    failures += 1;
  }
}

if (failures > 0) {
  process.exit(1);
}

console.log("All bundled skills have valid frontmatter.");
