# Interview Strategies

Use this reference when the user is unsure, gives contradictory fragments, or needs a careful multi-turn recall process.

## Non-suggestive memory practice

- Treat memory as reconstructive. Say "this may be a reconstruction" rather than "this is what happened."
- Ask open questions before offering options.
- Avoid leading details the user has not introduced.
- Do not ask "Was she wearing white?" unless whiteness or femininity is already present. Ask "What color, if any, comes with them?"
- Let "unknown" stand. Do not fill every blank.
- When making an inference, label it: "My guess from the pattern is..."
- Preserve contradictions as data until the user resolves them.

## Structured question tool

When available, use `$structured-question` for the next decision point. That skill should call the platform's structured question tool when possible. In opencode, this means calling the `question` tool.

Use the tool when:

- the user needs to choose a memory entry point
- an answer can be narrowed by 2-4 plausible options
- the next step depends on a preference, branch, or confirmation
- a plain open question would likely cause slow back-and-forth

Keep tool questions short and action-oriented. Put the recommended option first when one option is clearly best. Do not use a tool call to ask a long questionnaire.

## Focused question cards

Default to a focused question card rather than a bare open question when it will reduce round trips. Use the same shape whether it is rendered through a tool or as plain text. Each turn should do three things at most:

1. Acknowledge or summarize one new detail.
2. Update the direction in one short sentence.
3. Ask exactly one next decision point.

A good card has:

- one focus only
- 2-4 concrete options when options help
- an "unknown", "maybe", or "something else" path
- optional free-text invitation for correction

Good:

"So they feel more like a bright companion than a distant guardian, and the sky scenes matter. What part of their silhouette do you remember first: head, wings, body shape, clothing, or just light?"

Bad:

"Tell me their age, height, colors, voice, name, powers, clothes, scenes, relationship, and symbols."

## Fast intake cards

Use these early when the user wants momentum:

- Clearest handle: "Which is clearest right now: life stage, scene, feeling, broad form, name/voice, or something else?"
- Place: "Where does the clearest appearance happen: dream, bedroom, road/outdoors, school, fictional world, sky/water/threshold, or somewhere else?"
- Role: "Were they mostly a playmate, protector, guide, witness, rival/challenge, mysterious visitor, or something else?"
- Form: "Were they closer to human, animal, spirit/light, object/machine, mixed form, shapeshifter, or unknown?"
- Constancy: "What stayed most constant: color/light, silhouette, gaze, voice, symbol/object, movement, role, or something else?"

Pick only one card per turn. Do not stack these cards in a list for the user to answer all at once.

## Choosing the next question

Prefer the question card that will reduce the largest ambiguity:

- If there is no scene, ask for the clearest scene.
- If there is no role, ask what they did for or with the user.
- If there is no silhouette, ask for broad form before details.
- If there are multiple forms, ask what stays constant across forms.
- If appearance is thin but emotion is strong, ask how the emotion would look as posture, distance, or light.
- If the user gives a visual correction, ask about the next most visible mismatch.
- If the user seems tired, summarize and offer a small next step.

## Useful probe families

### Scene reinstatement

Ask the user to re-enter one remembered scene:

- "Where are you in relation to them?"
- "What is behind them?"
- "Are they moving toward you, away from you, beside you, or above you?"
- "What is the lighting like?"

Use one focus per turn.

### Sensory edges

When the center is blurry, ask about the edges:

- outline or silhouette
- brightness around the body
- texture: fur, feathers, skin, cloth, metal, smoke, water, glass, light
- movement: float, walk, gallop, glide, blink, flicker, dissolve
- sound: voice, footsteps, wings, bells, wind, silence

### Contrast probes

Use when open recall stalls. Offer 2-4 options plus "something else":

- "More childlike, same-age, older-sibling, ancient, or hard to age?"
- "More animal, human, spirit, object, or mixed?"
- "More playful, protective, mysterious, strict, lonely, or something else?"
- "Did they feel close enough to touch, across the room, watching from above, or not spatially fixed?"

Do not treat the selected option as final. Ask for correction later.

### Constancy probes

Constancy is often more reliable than detail:

- "What always stayed the same, even when the form changed?"
- "What would make a drawing feel wrong immediately?"
- "If I changed one thing and it stopped being them, what would that be?"

### Negative-space probes

Ask what the companion was not:

- "What should I avoid adding?"
- "Was there anything that would feel too cute, too scary, too human, too animal, too ornate, or too plain?"

### Relationship probes

Good for profiling:

- "Were they there to play, protect, guide, witness, challenge, or simply be with you?"
- "Did you call them, did they arrive on their own, or were they just already there?"
- "Were they yours, independent, shared with a world, or hard to classify?"

## Profile-like synthesis

Build hypotheses from converging clues:

- A bedside or night scene plus calm light may suggest comfort, watchfulness, or threshold presence.
- Roads and travel scenes may suggest escort, companion, transformation, or growing autonomy.
- Sky scenes may suggest escape, transcendence, mastery, or a wish for expanded space.
- A companion who speaks but has no remembered words may be defined more by tone than content.
- Multiple forms often mean the identity is carried by constants: palette, gaze, aura, symbol, voice, or role.

Always phrase these as possibilities. Ask the user to accept, reject, or modify.

## Handling uncertainty

Use a confidence language:

- "clear"
- "likely"
- "maybe"
- "design proposal"
- "do not know yet"

In the final dossier, keep this separation visible.

## Synthesis template

Use after enough information exists:

```markdown
Here is the current reconstruction.

Remembered anchors:
- ...

Likely profile:
- ...

Visual direction:
- ...

Presence and behavior:
- ...

Open uncertainties:
- ...

Image prompt draft:
...
```

## Image prompt pattern

For a first concept:

```text
Character concept art / reference sheet of [companion summary]. Preserve these anchors: [remembered anchors]. Visual language: [palette, materials, silhouette, symbols]. Presence: [emotional function, posture, movement]. Include [forms or scenes if needed]. Avoid: [must-avoid]. Clean readable design, consistent identity, no text, no logo.
```

For revision:

```text
Revise the approved character concept. Keep unchanged: [approved anchors]. Change only: [user revision]. Avoid: [new constraints]. Clean readable design, consistent identity, no text, no logo.
```

## Mode handoff

Use structured questioning and synthesis in modes that support planning or elicitation. Before image generation, verify that the current mode exposes the needed image tool. If it does not, stop after the dossier and prompt, and ask the user to switch to a mode that can execute generation. Do not claim to switch modes unless a real platform command or tool is available to the agent.

## Scope

- Keep the work centered on the companion's remembered form, scenes, presence, and relationship to the user.
- Do not press for private or distressing details.
- When the reconstruction is approved, leave the user with a concise dossier and prompt that can be reused elsewhere.
