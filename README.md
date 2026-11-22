# PREPPROOF – Where Your Project Meets Your Preparation 🎓

A modern, professional frontend prototype built for the college major project demonstration.

---

## 🚀 Quick Start Instructions

To run the application locally on your computer:

```bash
# 1. Navigate to the project directory (if not already there)
cd c:\Users\PC\PrepProof

# 2. Start the development server
npm run dev
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 🛠️ Technology Stack

- **React.js (v18)** - Functional components and hooks (`useState`)
- **JavaScript (ES Modules)** - Clean, modern, beginner-friendly frontend logic
- **Tailwind CSS** - Modern SaaS styling, custom color system, and responsive grids
- **Lucide React** - Clean icons for navigation and status cards
- **Vite** - High-performance dev server and build tool

---

## 🎨 Design System

- **Background:** Soft light lavender (`#FAF9FF` & `#F4F2FF`)
- **Primary Color:** `#7C5CFC` (Accent hover: `#6A46EE`)
- **Cards & Shadows:** Rounded corners (`rounded-2xl`, `rounded-3xl`) with soft drop-shadows and subtle borders
- **Typography:** Inter sans-serif font family

---

## 📋 Features Implemented in Prototype

1. **Landing Page:**
   - PREPPROOF brand logo and prototype badge
   - Main tagline: *"Where Your Project Meets Your Preparation"*
   - Description tailored for technical interviews and college major project vivas
   - *"Get Started"* CTA button leading directly to the Dashboard

2. **Dashboard:**
   - Welcome banner: *"Welcome to PREPPROOF 👋"*
   - Collapsible & responsive **Sidebar** with 3 views:
     - **Dashboard**
     - **My Projects**
     - **Preparation**
   - Three summary cards:
     - **My Projects** (Dynamic count with navigation link)
     - **Preparation Progress** (Visual 75% progress bar)
     - **Recent Activity** (Timeline log of actions)
   - Sample project card: **Student Management System**

3. **My Projects Section:**
   - Project cards grid with technology badges
   - **"+ Add Project"** button with a modal dialog
   - State-driven project creation (adds projects in real-time)
   - Clickable cards that seamlessly navigate to the details view

4. **Project Details Section:**
   - Selected project title and overview
   - **Technologies Used** tags (`#React`, `#JavaScript`, `#MongoDB`, etc.)
   - Large interactive text area titled **"Explain Your Project"**
   - **Submit Explanation** button with instant feedback banner:  
     *“Project Explanation Submitted Successfully! Your project notes and architecture summary have been saved.”*

5. **Preparation Guide (Bonus Tab):**
   - Core technical questions for viva defense
   - Presentation readiness checklist
