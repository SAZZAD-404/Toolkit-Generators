# 🚀 GitHub Push Guide

## Your Repository URL:
```
https://github.com/SAZZAD-404/Toolkit-Generators.git
```

---

## 📋 Step-by-Step Instructions

### Step 1: Install Git (if not installed)

Download and install Git from: https://git-scm.com/download/win

After installation, restart your terminal/command prompt.

---

### Step 2: Open Terminal in Project Folder

1. Open your project folder in File Explorer
2. Right-click in the folder
3. Select "Git Bash Here" or "Open in Terminal"

---

### Step 3: Run These Commands

Copy and paste these commands one by one:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Web Toolkit Generators - Gmail, User Agent, IP & Number Generator"

# Add your GitHub repository
git remote add origin https://github.com/SAZZAD-404/Toolkit-Generators.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 🔐 Authentication

If Git asks for authentication:

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy the token
5. Use token as password when Git asks

### Option 2: GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add your project folder
4. Commit and push from the GUI

---

## ✅ Verify Upload

After pushing, visit:
https://github.com/SAZZAD-404/Toolkit-Generators

You should see all your files there!

---

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# Add new changes
git add .

# Commit changes
git commit -m "Your message here"

# Push changes
git push

# Pull latest changes
git pull
```

---

## 🆘 Common Issues

### Issue 1: "git not recognized"
**Solution:** Install Git from https://git-scm.com/download/win

### Issue 2: "Permission denied"
**Solution:** Use Personal Access Token instead of password

### Issue 3: "Repository already exists"
**Solution:** Use `git remote set-url origin https://github.com/SAZZAD-404/Toolkit-Generators.git`

### Issue 4: "Failed to push"
**Solution:** Try `git pull origin main --allow-unrelated-histories` first, then push again

---

## 📱 Alternative: GitHub Desktop (Easiest)

1. Download: https://desktop.github.com/
2. Install and sign in
3. File → Add Local Repository → Select your project folder
4. Commit changes
5. Click "Push origin"

Done! ✅

---

## 🌐 Deploy to Vercel (Bonus)

After pushing to GitHub:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import your repository
4. Click Deploy
5. Your site will be live in 2 minutes!

---

Need help? Open an issue on GitHub! 🚀
