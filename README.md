# 🛡️ FINDIT Core: Advanced MLBB AI Draft Simulator

![FINDIT Core Banner](https://img.shields.io/badge/Status-Live_on_Vercel-success?style=for-the-badge&logo=vercel)
![Hugging Face](https://img.shields.io/badge/AI_Engine-Hugging_Face-yellow?style=for-the-badge&logo=huggingface)
![Next.js](https://img.shields.io/badge/Frontend-Next.js_14-black?style=for-the-badge&logo=next.js)
![Python](https://img.shields.io/badge/Backend-Python_XGBoost-blue?style=for-the-badge&logo=python)

**FINDIT Core** is a cutting-edge, AI-powered draft simulation and analysis tool designed for Mobile Legends: Bang Bang (MLBB) competitive esports. Developed by **InFinnity Labs**, this application bridges the gap between raw statistical data and actionable tactical execution.

By leveraging an XGBoost Machine Learning model and a highly interactive, cinematic frontend, FINDIT processes draft telemetry (Picks and Bans) in real-time to forecast win probabilities and generate dynamic, situation-specific strategic insights.

## ✨ Core Features

* 🌍 **Global Cross-Region Matchups:** Simulate drafts between top-tier professional teams across multiple global regions (MPL ID, MPL PH, MPL MY, MENA, CIS, etc.) with real-time FlagCDN integration.
* 🧠 **AI-Driven Telemetry:** Powered by a Python-based Machine Learning backend hosted on Hugging Face Spaces, utilizing historical draft data to predict match outcomes with high precision.
* 📊 **Dynamic Tactical Insights:** Generates context-aware, UK English tactical recommendations and insights based on the mathematical margin of the draft probability.
* 🎨 **Premium Glassmorphism UI:** An "Apple-style" minimalist aesthetic featuring frosted glass panels, glowing accent telemetry, and seamless 60fps animations powered by Framer Motion.
* 🔄 **Cinematic Reboot Sequence:** A highly immersive loading state that simulates an AI core boot-up sequence during matchup configuration.

## 🛠️ Technology Stack

### Frontend (User Interface & State Management)
* **Framework:** Next.js (React)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (with complex custom gradients and shadow layering)
* **Animation:** Framer Motion
* **Deployment:** Vercel

### Backend (Machine Learning & API)
* **Language:** Python
* **Core Model:** Scikit-Learn / XGBoost Classifier
* **API Framework:** FastAPI / Flask (Served via REST)
* **Deployment:** Hugging Face Spaces

## 🚀 Getting Started (Local Development)

### Prerequisites
* Node.js (v18.x or later)
* Git

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/findit-draft-sim.git](https://github.com/yourusername/findit-draft-sim.git)
    cd findit-draft-sim/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:3000` in your preferred browser.

> **Note:** The frontend is configured to automatically communicate with the production Hugging Face AI backend. No local Python setup is strictly required to run the UI, unless modifying the ML model.

## 📂 Project Structure Highlights

* `/app/components`: Contains the modular UI components (`TeamSelector`, `HeroGrid`, `DraftSlot`, etc.).
* `/app/constants`: Houses the static database for global `teams.ts` and `heroes.ts`.
* `/app/simulator`: The main simulation engine and state manager for the Pick & Ban flow.

## 👨‍💻 Developed By

**FINDIT** *Architected and built from scratch by an independent software engineer and tech consultant.*

---
*If you find this project interesting, feel free to give it a ⭐️ on GitHub!*
