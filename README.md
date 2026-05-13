# 🎨 VINTAGE ✝ — Visual Portfolio

Digital art, AI image generation, and visual critique portfolio for xAI Image Tutor application.

## Structure

```
portfolio/
├── _config.yml          # Jekyll/GitHub Pages config
├── index.md             # Home / landing page
├── autodesk.md          # Autodesk digital art originals
├── ai-gen.md            # AI image gen (Grok, Flux, Sora) w/ critiques
├── critique.md          # Standalone visual critique pieces
├── assets/
│   └── images/
│       ├── autodesk/    # ← Drop your Autodesk work here
│       ├── ai-gen/      # ← Drop your AI generations here
│       └── critique/    # ← Drop critique source images here
├── _layouts/            # (optional) custom layouts
├── _includes/           # (optional) custom includes
└── README.md
```

## How to populate

1. Drop your images into the right folders under `assets/images/`
2. Update the markdown files to reference them (uncomment the `![image](path)` lines)
3. Fill in the annotation templates with your actual analysis
4. Push to GitHub Pages

## GitHub Pages setup

```bash
# After populating, push to GitHub:
cd ~/portfolio
git init
git add .
git commit -m "Initial portfolio"
gh repo create vintage-portfolio --public --source=. --push
```

Your site will be live at `https://kodark220.github.io/vintage-portfolio/`

## xAI Image Tutor

Portfolio prepared for: https://job-boards.greenhouse.io/xai/jobs/5047544007
