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

### 4. Build & Deployment

To build the project for production:

```bash
npm run build
```

To deploy to GitHub Pages:

```bash
npm run deploy
```

## 📝 Note on Security

Telegram credentials are used on the client-side in this static application. For production use, it is recommended to use a backend proxy or a service like Formspree to keep your secrets fully secure.
