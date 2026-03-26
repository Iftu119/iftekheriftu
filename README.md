# iftekheriftu.com

Personal portfolio site for Mohammad Iftekher Ebne Jalal.  
Built with [Astro](https://astro.build) · Deployed on GitHub Pages.

---

## Setup (First Time)

1. Create a new **public** repo on GitHub: `iftekheriftu` (or any name you like)
2. Upload all these files to that repo (drag & drop via GitHub UI, or use Codespaces)
3. Go to repo **Settings → Pages → Source → GitHub Actions**
4. Push/commit any change — the site will build and deploy automatically

Live at: `https://iftu119.github.io/iftekheriftu` (until custom domain is connected)

---

## Connecting Your Custom Domain (after renewing on Namecheap)

### Step 1 — In GitHub
- Go to repo **Settings → Pages → Custom domain**
- Enter: `iftekheriftu.com` → Save

### Step 2 — In Namecheap DNS
Add these records in Namecheap → Domain List → Manage → Advanced DNS:

| Type  | Host | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | iftu119.github.io     |

DNS propagates in 10–30 min. GitHub will auto-provision HTTPS (Let's Encrypt).

---

## Adding a Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Use this frontmatter:

```md
---
title: "Your Post Title"
date: 2025-01-01
description: "One sentence summary."
lang: en          # or: bn (for Bengali)
tags: ["tag1", "tag2"]
---

Write your content here in Markdown.
```

3. Commit → site auto-rebuilds.

---

## Editing Content

All personal content is in `src/pages/index.astro`.  
Search for the section you want to edit (e.g. `EXPERIENCE`, `AWARDS`, `RESEARCH`) and update the text directly.
