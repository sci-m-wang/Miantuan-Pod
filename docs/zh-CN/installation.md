# 安装面团 Pod

## 需求

- Codex 或其他支持本地 skills 的 agent 环境。
- Node.js 18 或更新版本，用于运行安装脚本。
- 可选：`hatch-pet`、`imagegen` 和 GitHub 相关技能，用于完整的幻想朋友宠物流程。

## 安装全部技能

```bash
git clone https://github.com/sci-m-wang/Miantuan-Pod.git
cd Miantuan-Pod
node scripts/install.mjs all
```

## 只安装一个技能

```bash
node scripts/install.mjs recall-imaginary-friend
node scripts/install.mjs recall-to-pet
```

## 使用

```text
$recall-imaginary-friend 帮我回忆一个小时候的幻想朋友
$recall-to-pet 帮我回忆幻想朋友，然后做成 Codex pet
```

回忆访谈适合在计划/提问模式中进行；生成效果图和制作 pet 时，需要切换到可执行工具的模式。
