---
name: recall-imaginary-friend
description: Use when a user wants help remembering, reconstructing, profiling, or visualizing an old imaginary friend, dream companion, childhood fantasy figure, inner companion, recurring guide, or partially forgotten invented character.
---

# Recall Imaginary Friend

## Core stance

Help the user recover and shape a forgotten imagined companion through structured, one-focus-at-a-time elicitation. Treat the work as memory reconstruction, creative profiling, and concept visualization when enough anchors exist.

Use the user's language. Keep the tone warm, curious, and precise. Do not rush to a dossier or image while the memory is still thin.

## Hard rules

- Ask only one substantive decision point per turn.
- When `$structured-question` is available, use it for the next decision point. Under that skill, prefer the platform structured question tool; in opencode, this is the `question` tool.
- Keep each question short and action-oriented. Put the recommended option first when one option is clearly best.
- If no structured question tool is available, write the same decision point as a compact text question card: one focus, 2-4 useful options when helpful, and an "unknown / something else" path.
- If the user gives several details at once, absorb them, summarize the updated picture briefly, then ask only the next best question.
- Never dump a questionnaire.
- Never claim reconstructed details are true memories.
- Label details as remembered, inferred, uncertain, or design proposal.
- Prefer open questions first; use forced contrasts only when the user is stuck.
- Do not claim to switch conversation modes unless the current platform exposes an explicit mode-switching command or tool to the agent. If a later step needs execution but the current mode is planning-only or elicitation-only, stop at the dossier and ask the user to switch to an execution-capable mode.
- Stop or slow down if the user shows distress. Offer to continue gently, change topic, or turn the material into fiction instead.

## Workflow

### 1. Set the frame

Begin by normalizing fragmentary memory and setting expectations:

- This can work from scraps, moods, and contradictions.
- The goal is a faithful-feeling reconstruction, not a legally accurate memory.
- The user can answer "unknown", "maybe", or correct the direction at any time.

Then ask one anchor question card, using `$structured-question` if available. Good first anchors:

- "Which memory handle is clearest right now: age/life stage, a scene, the feeling they brought, their broad form, or something else?"
- "Where is the clearest appearance: dream, bedroom, road/outdoors, school, a fictional world, or somewhere else?"
- "Before appearance details, what feeling did they bring: comfort, play, mystery, protection, awe, unease, or something else?"

### 2. Build anchors before details

Collect enough stable anchors to avoid generic character design:

- time period or life stage
- recurring place or scene
- emotional function
- companion role
- basic ontology: human, animal, spirit, object, light, monster, machine, mixed, or unknown
- one visual constant, even if vague

Ask for whichever anchor is missing and most likely to unlock the next memory. Keep each turn focused, but use structured options to reduce round trips.

### 3. Profile from function and scene

Use profile-like reasoning only as a hypothesis generator. Infer possible traits from:

- where the companion appeared
- what they helped the user do or feel
- how close or distant they were
- whether they protected, played, watched, challenged, guided, mirrored, or tempted
- what always stayed the same across appearances
- what changed between scenes, dreams, and waking imagination

When offering hypotheses, present 2-3 gentle options and include room for rejection:

"This could mean they felt more like a guardian, a playmate, or a mysterious visitor. Which is closest, or is it none of those?"

### 4. Deepen with focused probes

Move through these areas only as needed, one focus at a time:

- body and silhouette
- face and gaze
- color, light, texture, material
- clothing, markings, objects, symbols
- voice, speech style, name, repeated phrases
- movement and transformation
- scale and distance from the user
- scenes, routes, rituals, and repeated actions
- relationship dynamics and emotional tone
- what should not be added

If the user is stuck, use a contrast probe:

"Was their presence more warm and familiar, bright and heroic, uncanny and distant, or something else?"

See `references/interview-strategies.md` for question patterns and safeguards.

### 5. Track the memory map

After each answer, silently update a working map:

- identity and role
- remembered facts
- uncertain fragments
- inferred profile
- visual constants
- behavioral constants
- transformation rules
- scene library
- must-avoid details
- open questions

In the conversation, show only a short human summary when it helps the user orient.

### 6. Know when there is enough

Move from questioning to synthesis when most of these are present:

- life stage or context
- companion role and emotional function
- core form or form categories
- at least 3 visual anchors
- color or light palette
- one behavioral or voice anchor
- one or more recurring scenes
- one relationship dynamic
- must-avoid constraints
- uncertainty around name, gaze, or exact outfit is acceptable

Do not require every category. The threshold is "enough to make a faithful first visual attempt."

### 7. Produce the reconstruction dossier

Before image generation, give a compact dossier:

- Remembered anchors
- Inferred profile
- Visual direction
- Behavior and presence
- Open uncertainties
- Image prompt draft

Keep remembered and inferred details clearly separated. Ask one confirmation question only if a major branch is unresolved. Otherwise proceed to visualization.

### 8. Generate and iterate concept art

When the user wants a visual and the dossier is sufficient, generate a concept image or reference sheet using available image generation tools.

Before generating, check mode and tool availability:

- If image generation is available in the current mode, proceed.
- If the current mode supports questioning or planning but not generation, present the approved dossier and image prompt, then ask the user to switch to an execution-capable mode and resend or confirm the generation request.
- If the platform gives the agent an explicit mode-switching command or tool, use it only when allowed and after the user has confirmed the switch.
- If no mode switch is available to the agent, do not imply one happened; give the user the shortest accurate instruction for their surface, such as toggling plan mode off.

Prompt principles:

- Preserve remembered anchors exactly.
- Encode uncertain details as soft alternatives, not hard claims.
- Include explicit must-avoid constraints.
- Ask for a clean readable design, not a busy illustration.
- For multiple forms, request a character reference sheet with consistent identity across forms.

After showing an image, ask one targeted revision question or respond to the user's stated revision. Iterate by changing only the requested aspect while preserving approved anchors.

### 9. Final handoff

When the user approves the reconstruction, provide:

- final visual dossier
- final image prompt
- unresolved optional questions
