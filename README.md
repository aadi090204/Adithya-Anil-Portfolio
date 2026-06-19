# Adithya Anil — Portfolio Website

A static React portfolio website showcasing my work across AI Engineering, AI Cloud, MLOps, DevOps, RAG applications, full-stack development, and machine learning projects.

The portfolio is built with React and Vite, hosted on Firebase Hosting, and configured with GitHub Actions for automatic deployment whenever changes are pushed to the `main` branch.

---

## Overview

This portfolio presents my projects, skills, experience, publication, certifications, and contact links in one place.

My current career focus is:

* AI Engineer
* AI Backend Engineer
* AI Cloud Engineer
* MLOps Engineer
* DevOps Engineer
* Cloud Engineer
* Software Engineer

The site is designed to highlight my primary direction in AI Engineering while also showing my hands-on DevOps and software engineering foundation.

---

## Live Website

```text
https://adithya-anil-portfolio.web.app
```

Replace the above URL if your Firebase URL is different.

---

## Featured Projects

### Finance RAG Advisor

A full-stack RAG application that ingests finance PDFs, chunks document text, stores embeddings in ChromaDB, retrieves relevant context, and generates source-grounded answers using Gemini.

**Tech:** FastAPI, React, ChromaDB, Gemini, RAG, sentence-transformers

---

### AI DevOps Incident Assistant

An AI-powered incident analysis tool that combines rule-based log detection with Gemini to analyze Docker, Nginx, CI/CD, Linux, and deployment issues with safe debugging commands and resolution checklists.

**Tech:** FastAPI, React, Gemini, Python, Vite, Log Analysis

---

### DeepShield

A deep learning-based deepfake video detection system using NesT-Small, temporal transformers, MediaPipe, rPPG signal features, and gated visual-physiological fusion.

**Tech:** PyTorch, Django, MediaPipe, OpenCV, rPPG, NesT

---

### AI Resume Match Analyzer

A full-stack AI assistant that parses resume PDFs and compares them with job descriptions to generate match scores, ATS keywords, missing skills, and improved resume bullets.

**Tech:** FastAPI, React, Gemini, pypdf, Prompt Engineering

---

### Rudhirasena

A Django and MySQL blood donation platform with smart donor-recipient matching, Gemini chatbot, eligibility checking, admin verification, and PDF certificate generation.

**Tech:** Django, MySQL, Gemini, Tailwind CSS, ReportLab

---

### Hospital Management System

A Python Tkinter and MySQL desktop application for managing patients, doctors, appointments, departments, and authentication workflows.

**Tech:** Python, Tkinter, MySQL, CRUD, GUI

---

## Tech Stack

| Layer           | Technology       |
| --------------- | ---------------- |
| Frontend        | React            |
| Build Tool      | Vite             |
| Styling         | CSS              |
| Hosting         | Firebase Hosting |
| CI/CD           | GitHub Actions   |
| Version Control | Git and GitHub   |

---

## Portfolio Sections

* Hero / Introduction
* About
* Target Roles
* Experience
* Featured Projects
* Skills
* Publication
* Certifications
* Contact

---

## Skills Highlighted

### AI / ML

* Python
* PyTorch
* OpenCV
* MediaPipe
* Gemini API
* Prompt Engineering

### GenAI / RAG

* RAG
* ChromaDB
* sentence-transformers
* PDF Parsing
* Semantic Search

### Backend / Software

* FastAPI
* Django
* React
* Java
* MySQL
* MongoDB

### DevOps / Cloud

* Linux
* Docker
* Docker Compose
* Nginx
* GitHub Actions
* CI/CD
* AWS Fundamentals
* GCP Fundamentals

### Monitoring / Operations

* Prometheus
* Grafana
* cAdvisor
* Blackbox Exporter
* Production Debugging

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/aadi090204/Adithya-Anil-Portfolio.git
cd Adithya-Anil-Portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Firebase Hosting

This portfolio is deployed using Firebase Hosting.

Manual deploy:

```bash
npm run build
firebase deploy --only hosting
```

The Firebase configuration uses the Vite production output folder:

```text
dist
```

---

## GitHub Actions Deployment

The repository includes a GitHub Actions workflow that:

1. Checks out the repository
2. Installs Node.js
3. Installs npm dependencies
4. Builds the Vite app
5. Deploys the `dist` folder to Firebase Hosting

Future updates can be deployed by pushing to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## Project Structure

```text
Adithya-Anil-Portfolio/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .github/
│   └── workflows/
│       └── firebase-hosting.yml
│
├── firebase.json
├── .firebaserc
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Author

**Adithya Anil**
AI Engineer | AI Cloud / MLOps | DevOps Engineer

* GitHub: [aadi090204](https://github.com/aadi090204)
* LinkedIn: [Adithya Anil](https://www.linkedin.com/in/adithya-anil-8a247a255/)
* Email: [adithyaani135@gmail.com](mailto:adithyaani135@gmail.com)

---

## Purpose

This portfolio is built to support applications for AI Engineer, AI Backend Engineer, AI Cloud Engineer, MLOps Engineer, DevOps Engineer, Cloud Engineer, and Software Engineer roles.

It is intended as a central place to showcase my technical projects, practical DevOps experience, AI application development work, and learning journey.
