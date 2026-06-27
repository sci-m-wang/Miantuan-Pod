---
name: structured-question
description: Use when a user decision, confirmation, preference, branch choice, or compact elicitation step is needed; when a task should ask one focused question with options instead of a long questionnaire or open-ended prompt.
---

# Structured Question

## Core rule

Ask one focused decision point at a time. Prefer the platform's structured question tool when available; otherwise write the same question as a compact plain-text card.

Use this skill when the next step depends on the user's choice, preference, approval, or memory/requirement branch. Do not use it when you can safely proceed with a reasonable assumption.

## Tool preference

- In opencode, call the `question` tool.
- In Codex-style environments, use the available structured user-input tool when it is exposed.
- If no such tool is available in the current mode, render the question in plain text using the same structure.

## Question shape

A good question has:

- one decision point only
- short, action-oriented wording
- 2-4 mutually exclusive options when options help
- the recommended option first when one is clearly best
- an "unknown", "not sure", or "something else" escape path when recall or preference may be fuzzy
- room for a brief free-form correction

Do not ask a checklist. Do not bundle unrelated decisions into one turn.

## Option design

Options should be concrete enough to reduce back-and-forth:

- Good: "scene", "feeling", "broad form", "name/voice"
- Weak: "more detail", "different direction", "other thoughts"

When using a UI that automatically adds an "Other" option, do not duplicate it. When using plain text, include the escape path yourself.

## Response pattern

Use at most three parts:

1. Acknowledge the current state in one short sentence.
2. State why this decision point is useful, if needed.
3. Ask the question with options.

## Plain-text card template

```markdown
[Short context sentence.]

Which direction should I use next?

- Recommended option
- Option 2
- Option 3
- Not sure / something else
```

## Examples

Memory elicitation:

```markdown
We need one stable entry point before filling details.

Which memory handle is clearest right now?

- A scene
- A feeling
- Broad form
- Name or voice
- Not sure / something else
```

Implementation choice:

```markdown
There are two reasonable ways to make this change.

Which path should I take?

- Small targeted patch
- Broader cleanup
- Show the tradeoff first
```
