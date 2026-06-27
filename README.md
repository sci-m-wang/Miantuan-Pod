# Miantuan Pod / 面团 Pod

Miantuan Pod is a skill pack for remembering, reconstructing, and shaping imaginary companions. It contains the focused recall skill, a structured-question helper, and a combined workflow that can turn a recalled companion into a Codex pet.

面团 Pod 是一个幻想朋友回忆与具像化技能包。它包含回忆幻想朋友的技能、结构化提问辅助技能，以及一个把回忆档案继续转成 Codex pet 的联合技能。

## Skills / 技能

| Skill | Purpose | Dependencies |
| --- | --- | --- |
| `structured-question` | Ask one focused decision or preference question at a time. | Platform question tool when available |
| `recall-imaginary-friend` | Help a user remember, reconstruct, profile, and visualize an old imaginary friend. | `structured-question`; optional `imagegen` |
| `recall-to-pet` | Combine recall, concept art, pet hatching, and optional gallery submission. | `structured-question`, `recall-imaginary-friend`, `hatch-pet`, optional GitHub skills |

## Install / 安装

Clone the repository:

```bash
git clone https://github.com/sci-m-wang/Miantuan-Pod.git
cd Miantuan-Pod
```

Install all bundled skills into Codex:

```bash
node scripts/install.mjs all
```

Or install one skill:

```bash
node scripts/install.mjs recall-imaginary-friend
node scripts/install.mjs recall-to-pet
```

默认安装到：

```text
~/.codex/skills
```

You can choose another destination:

```bash
node scripts/install.mjs all --dest ~/.agents/skills
```

## Usage / 使用

Recall only:

```text
$recall-imaginary-friend 帮我回忆一个小时候的幻想朋友
```

Recall and make a pet:

```text
$recall-to-pet 帮我回忆幻想朋友，然后做成 Codex pet
```

If your environment has a planning/question mode, use it for the recall interview. When image generation or pet hatching is needed, switch to a mode that can execute tools.

如果当前环境有计划/提问模式，适合用来做逐轮回忆访谈。需要生成效果图或制作 pet 时，请切换到能执行工具的模式。

## Gallery Pairing / 与 Gallery 配合

The paired gallery repository is:

```text
https://github.com/sci-m-wang/Miantuan-Pets
```

`recall-to-pet` can prepare a public gallery entry after the user approves the final pet. The public entry should include only the final introduction and pet files, not private interview transcripts or uncertain memory notes.

`recall-to-pet` 可以在用户确认最终 pet 后，整理可公开的 gallery 条目。公开条目只放最终介绍和宠物文件，不放访谈记录或未确认的推断。

## Validation / 校验

```bash
npm run validate
```

This checks that each bundled skill has a valid `SKILL.md` frontmatter and matching folder name.

## License / 许可证

MIT
