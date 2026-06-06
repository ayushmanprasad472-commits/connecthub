# ⬡ ConnectHub — Social Demo App

A Facebook-inspired social network demo built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just drop it in a repo and deploy.

## ✨ Features

- **Account Creation** — Sign up with name, email, password, date of birth
- **Login / Logout** — Sessions stored in localStorage, persists across tabs
- **Demo Account** — Try instantly without creating an account
- **Social Feed** — View, create, and like posts
- **Stories Bar** — UI-ready stories strip
- **Sidebar Navigation** — Full left/right sidebars like Facebook
- **Friend Suggestions** — People you may know widget
- **Trending Topics** — Trending hashtags widget
- **Online Friends** — Friends online panel
- **Toast Notifications** — Feedback for every interaction
- **Password Strength Meter** — Real-time password quality indicator
- **Responsive** — Works on mobile and desktop

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1: Create the repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `connecthub` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Upload the files

**Option A — Drag & Drop (easiest)**
1. On the empty repo page, click **"uploading an existing file"**
2. Drag the entire project folder contents in
3. Commit to `main`

**Option B — Git CLI**
```bash
cd socialapp
git init
git add .
git commit -m "🚀 Initial ConnectHub deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/connecthub.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **GitHub Actions**
3. The workflow will auto-run on the next push

### Step 4: Visit your live site!

Your site will be live at:
```
https://YOUR_USERNAME.github.io/connecthub/
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment automatically on every push to `main`.

## 📁 Project Structure

```
connecthub/
├── index.html              # Login / Signup page
├── feed.html               # Main social feed
├── styles/
│   └── main.css            # All styles
├── scripts/
│   ├── auth.js             # Login, signup, session logic
│   └── feed.js             # Feed, posts, interactions
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
└── README.md
```

## 🔧 Customization

- **Colors**: Edit CSS variables in `styles/main.css` (`:root` block)
- **Seed posts**: Edit `SEED_POSTS` array in `scripts/feed.js`
- **App name**: Find/replace "ConnectHub" across files

## 📝 Notes

- All data is stored in the browser's `localStorage` — no backend required
- Accounts persist in the same browser only
- This is a **demo/prototype** — not production-ready (passwords stored in plain text in localStorage)
