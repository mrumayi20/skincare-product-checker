# Skincare Product Checker

A simple AI-powered **Skincare Product Checker** built with **React** and **Vite**.  
This project allows users to enter the name of a skincare product and receive an AI-generated summary of potentially harmful chemicals, possible side effects, and a general safety assessment.

It demonstrates frontend development skills, API integration, environment variable handling, and practical use of AI for consumer-focused health and beauty use cases.

## Overview

The application is designed to help users quickly check skincare products by entering a product name into a clean web interface.  
Once submitted, the app sends the product name to the Hugging Face Inference API and returns a structured response highlighting:

- Potentially harmful chemicals
- Side effects of those chemicals
- A general indication of whether the product is considered safe to use

The app includes a loading state while the AI response is being generated and displays the result in a scrollable details panel.

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **Hugging Face Inference API**
- **dotenv**
- **ESLint**

## Features

- Simple product search interface
- AI-generated skincare product analysis
- Highlights potentially harmful ingredients
- Displays possible side effects
- Provides a general product safety summary
- Loading spinner while processing results
- Environment variable support for API key configuration

## Project Structure

```bash
skincare-product-checker/
├── product_checker/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── connectAi.js
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
├── skin_checker_app_documentation.docx
└── .gitignore
```

## Folder and File Details
- App.jsx — Main UI component containing the product input form, submit handling, loading state, and result display
- connectAi.js — Handles communication with the Hugging Face Inference API
- App.css — Styles for the dashboard, form, loading spinner, and result section
- main.jsx — React entry point
- package.json — Dependencies and scripts for development and build

## How It Works
1. The user enters a skincare product name
2. The app sends the product name to the Hugging Face model
3. The model is prompted to:
   - identify harmful chemicals,
   - explain their side effects,
   - and provide a general safety summary
4. The response is displayed in the UI for the user

## Hugging Face Integration
The application uses @huggingface/inference and creates an InferenceClient using a Vite environment variable named VITE_HF_KEY.
The current implementation sends a chat completion request to the model:
- HuggingFaceH4/zephyr-7b-beta
The model is instructed to act like a skincare expert and return only the important points.

## Getting Started
### Prerequisites
Make sure you have installed:
- Node.js
- npm
You will also need a Hugging Face API key.

### Installation
Clone the repository:
```
git clone https://github.com/mrumayi20/skincare-product-checker.git
cd skincare-product-checker/product_checker
```
Install dependencies:
```
npm install
```
Create a .env file inside the product_checker folder and add your Hugging Face API key:
```
VITE_HF_KEY=your_huggingface_api_key_here
```
Start the development server:
```
npm run dev
```
Build for production:
```
npm run build
```
Preview the production build locally:
```
npm run preview
```

## Available Scripts
- npm run dev — Starts the Vite development server
- npm run build — Builds the app for production
- npm run lint — Runs ESLint
- npm run preview — Previews the production build locally

## Example Usage
1. Enter a product name such as:
   ```
    CeraVe Sunscreen
   ```
2. Click Get Details
3. The app will return an AI-generated response that may include:
   - harmful chemicals
   - side effects
   - general safety notes


## What This Project Demonstrates
This project highlights:
- Building interactive UIs with React
- Managing component state with hooks
- Integrating third-party AI APIs into frontend applications
- Using environment variables securely in Vite
- Creating consumer-friendly tools powered by AI
- Structuring a small React project cleanly and effectively

## Future Improvements
Possible enhancements for this project:

- Add ingredient-level validation using a verified skincare database
- Show structured responses using cards or bullet sections
- Add product brand and category filtering
- Add search history
- Add error handling for empty input and failed API requests
- Add responsive mobile optimization
- Add backend support for storing product checks
- Deploy the app using Vercel or Netlify
