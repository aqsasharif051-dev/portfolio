# Aqsa Sharif — Portfolio

A fast, animated portfolio built with **React + Vite**. Data analyst first, frontend developer as the edge.

**Live site:** `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/`
**GitHub:** [aqsasharif051-dev](https://github.com/aqsasharif051-dev)  
**LinkedIn:** [aqsa-sharif](https://www.linkedin.com/in/aqsa-sharif-b78217435)

## Project structure

```
aqsa-portfolio/
├── .github/workflows/deploy.yml   # auto-deploys to GitHub Pages on every push
├── public/
│   ├── favicon.svg
│   └── images/                    # ← your photo + project screenshots go here
├── src/
│   ├── components/                # Navbar, Footer, ProjectCard, animations…
│   ├── data/site.js               # ← your email, links, projects, skills
│   ├── hooks/
│   ├── pages/                     # Home, About, Skills, Portfolio, Contact
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css                 # colours, animations, layout
├── index.html
├── package.json
└── vite.config.js
```

## Before you publish (1 minute)

Your photo and project screenshots are already in `public/images/`.

1. **Edit `src/data/site.js`** and set your real `email` (it is still a placeholder).
2. To show a **"View project"** button on a project card, add its GitHub repo or live link
   as `link` in the same file (for example, your PostgreSQL bookstore repo).

## Run it locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

1. Create a new repository on GitHub and push this folder to the `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push any change (or open the **Actions** tab and run *Deploy to GitHub Pages*).
   Your site goes live at `https://<username>.github.io/<repo-name>/` in about a minute.

## Change the colours

All colours live at the top of `src/styles.css` in the `:root` block
(`--primary`, `--cyan`, `--violet`, `--accent`, `--amber`).
