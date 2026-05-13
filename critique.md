---
layout: default
title: Visual Critique
---

# 🔍 Visual Critique

The core skill this role is built on: looking at an image and articulating exactly why it works or fails.

---

## Critique 1: An early generation that didn't land

<!--- Replace with your actual image --->
<!-- ![Failed Generation](./assets/images/critique/flop.jpg) -->

**🧠 Original prompt:**
```
[prompt that produced this]
```

### ❌ What breaks this image

| Issue | Details |
|---|---|
| **Composition** | [What's wrong with the framing] |
| **Lighting** | [Flat? Wrong direction? Bleaching?] |
| **Color** | [Clashing? Washed out? Wrong temperature?] |
| **Details** | [Anatomy issues? Weird artifacts?] |

### 🔧 What I'd change

**Revised prompt:**
```
[what the prompt should have been]
```

**Why this would fix it:**
> [Explain the specific prompt engineering change and why it addresses the issue]

---

## Critique 2: Someone else's AI image

<!--- Replace with a public domain AI image or one you have permission to critique --->
<!-- ![External Image](./assets/images/critique/external.jpg) -->

### What works

- [Specific element 1 that succeeds]
- [Specific element 2 that succeeds]

### What doesn't

- [Specific failure and why]
- [How it could be fixed with a better prompt, different model, or post-processing]

### What this teaches about training data

> [If I were annotating this for Grok's training data, the key labels would be...]

---

## My annotation philosophy

When I label image data for AI training, I focus on:

1. **Precision** — "The lighting is rim-lit from camera-right" not "the lighting is nice"
2. **Consistency** — Same terminology across annotations so the model learns clean mappings
3. **Actionable critique** — Every "this is bad" is paired with a "this is why and what would fix it"
4. **Style awareness** — Recognizing intentional stylistic choices vs. model failures

---

[*Back to home*](./index) | [*Autodesk Originals*](./autodesk) | [*AI Image Generation*](./ai-gen)
