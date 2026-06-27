# Installing Miantuan Pod

## Requirements

- Codex or another agent environment that supports local skills.
- Node.js 18 or newer for the installer script.
- Optional: `hatch-pet`, `imagegen`, and GitHub skills for the combined pet workflow.

## Install All Skills

```bash
git clone https://github.com/sci-m-wang/Miantuan-Pod.git
cd Miantuan-Pod
node scripts/install.mjs all
```

## Install One Skill

```bash
node scripts/install.mjs recall-imaginary-friend
node scripts/install.mjs recall-to-pet
```

## Usage

```text
$recall-imaginary-friend help me remember an old imaginary companion
$recall-to-pet help me remember an imaginary friend and make it a Codex pet
```

Use a planning or question-friendly mode for the recall interview, then switch to an execution-capable mode for image generation and pet creation.
