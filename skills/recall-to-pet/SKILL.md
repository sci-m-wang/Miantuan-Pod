---
name: recall-to-pet
description: Use when a user wants to remember or reconstruct an imaginary friend and then turn the approved companion concept into concept art, a Codex-compatible pet, or an optional Miantuan Pets gallery submission.
---

# Recall To Pet

## Purpose

Guide a user from an imaginary-friend recall session to an approved companion dossier, concept art, Codex pet package, and optional public gallery submission.

## Dependencies

Use these skills when the corresponding stage begins:

- `structured-question`: ask one focused question or decision at a time.
- `recall-imaginary-friend`: run the recall/profiling interview and produce the companion dossier.
- `hatch-pet`: create, validate, and package the Codex pet from the approved concept.
- `imagegen`: concept art generation, usually through the recall and hatch-pet workflows.
- `github:github` or `github:yeet`: only when the user explicitly wants a GitHub issue, branch, commit, push, or pull request.

If a dependency is unavailable, explain the missing dependency and continue as far as the current environment safely allows.

## Workflow

### 1. Recall

Start with `recall-imaginary-friend`.

- Ask one substantive question per turn.
- Prefer structured-question tooling when available.
- Keep remembered details, inferred details, uncertain details, and design proposals clearly separate.
- Do not claim reconstructed details are true memories.

Stop this stage when there is enough detail to make a compact companion dossier.

### 2. Dossier

Summarize the companion before making images:

- public name or working name
- remembered anchors
- uncertain areas
- personality and role
- visual traits
- forms or transformations
- voice/behavior
- avoidances

Ask for confirmation or correction before using the dossier as an art prompt.

### 3. Concept Art

Generate one concept image at a time, then ask for focused adjustments.

If the current mode cannot generate images or execute tools, stop at a clean handoff:

- approved dossier
- concept-art prompt
- next action needed from the user

### 4. Pet Handoff

Before invoking `hatch-pet`, prepare a concise pet design handoff:

- pet id and display name
- stable visual identity
- approved reference images
- style notes
- form/state mapping
- must-keep traits
- avoidances

For multi-form pets, state which form should appear in each Codex state. Keep the mapping practical and readable at pet size.

### 5. Hatch

Use `hatch-pet` for the actual pet workflow.

Validate the final package contains:

- `pet.json`
- `spritesheet.webp`
- the expected Codex states
- a quick visual QA artifact when available

### 6. Optional Gallery Submission

Only after the user approves the final pet, offer to prepare a Miantuan Pets gallery entry.

The public entry should contain:

- bilingual public introduction
- forms and state notes
- owner handle
- `pet.json`
- `spritesheet.webp`
- preview image

Do not include private interview transcripts, raw memory notes, or uncertain inferences unless the user explicitly rewrites them as public text.

If the user asks to submit through GitHub, use available GitHub skills or tools and follow the target gallery schema from `Miantuan-Pets`.
