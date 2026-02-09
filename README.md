# Professional Developer Portfolio

A highly professional, dark-themed, interactive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

## ✨ Features

- **Modern UI**: Dark themed with elegant gradients and smooth animations.
- **3D Liquid Background**: Custom GLSL "Liquid Ether" shader background for a premium aesthetic.
- **Interactive Components**: Bento-style grid, scroll-synced 3D Icosahedrons, and dual-layered infinite tech marquees.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Project Showcase**: Beautifully cards for your latest work.
- **Functional Contact Form**: Integrated with Telegram for instant notifications.

## 🚀 Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Three.js / React Three Fiber** - 3D Graphics
- **Lucide React** - Icons

## 🛠️ Setup & Configuration

### 1. Installation

```bash
npm install
```

### 2. Environment Variables

To enable the contact form, you need to set up your Telegram bot credentials.

1. Create a `.env` file in the root directory (based on `.env.example`).
2. Add your Telegram Bot Token and Chat ID:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

### 3. Development

```bash
npm run dev
```

## 🚀 Deployment Guide (Step-by-Step)

To get your portfolio live on GitHub Pages, follow these steps:

### 1. Create a GitHub Repository
- Create a new repository on GitHub (e.g., `my-portfolio`).
- Push this code to the `main` branch of your new repository.

### 2. Configure GitHub Pages
- Go to your repository on GitHub.com.
- Click on **Settings** (top tab).
- Click on **Pages** (left sidebar).
- Under **Build and deployment > Source**, ensure it is set to **"Deploy from a branch"**.
- Under **Branch**, select `gh-pages` and the folder `/ (root)`. Click **Save**.
- *Note: The `gh-pages` branch will be created automatically after the first successful build.*

### 3. Setup Contact Form Secrets (Optional)
If you want the contact form to work in production:
- Go to **Settings > Secrets and variables > Actions**.
- Click **New repository secret**.
- Add `VITE_TELEGRAM_BOT_TOKEN` with your bot token.
- Add `VITE_TELEGRAM_CHAT_ID` with your chat ID.
- The GitHub Action will automatically inject these during the build process.

### 4. Automatic Deployment
Every time you push changes to the `main` branch, the included GitHub Action will:
1. Install dependencies.
2. Build the production-ready site.
3. Deploy it to the `gh-pages` branch.

Your site will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

## 🛠️ Local Development

### 1. Installation
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Manual Build/Deploy
If you prefer not to use GitHub Actions, you can deploy manually:
```bash
npm run deploy
```

## 📝 Note on Security
Telegram credentials used on the client-side are visible in the network tab. For high-security needs, consider using a dedicated backend or a service like Formspree.
