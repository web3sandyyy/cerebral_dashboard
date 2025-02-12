
# Cerebral Dashboard

A responsive and dynamic dashboard built using Vite JS, Tailwind CSS, and TypeScript, with seamless data integration from Supabase and custom APIs. The project showcases custom data visualization components and a smooth, engaging user experience.

#### 🚀 Live Demo
**Note** : The application is currently not functional on Netlify as the provided APIs are not hosted on SSL. Please run the project locally for full functionality.
___

### 📚 Features

* **Fully Responsive Dashboard** – Designed to provide a seamless user experience across all devices.
* **Custom Data Visualizations** – Created custom Bar Graphs and Circle Progress Bars for unique and optimized performance.
 
* **Chart.js Integration** –  Utilized Chart.js for dynamic and animated Line Graphs

* **API Integration** –   Connected to external APIs for Blocks 1, 3, and 5 while building custom APIs for Blocks 2, 4, and 6 using Supabase with PostgreSQL.

* **Authentication System** – Custom login page with authentication using the provided credentials.

* **TypeScript Integration** – Defined types throughout the project for maintainable and error-free code.
* **Error Handling** – Robust error handling for all API calls to ensure a seamless user experience.

___

### ⚙️ Tech Stack

* **Frontend** – React, Vite JS, TypeScript, Tailwind CSS
* **Charts** –  Chart.js, Custom-built Bar Graph and Circle Progress Bar 
* **Backend** – Supabase with PostgreSQL
* **Deployment** – Netlify

#### Dependencies

	{
  	"@supabase/supabase-js": "^2.48.1",
  	"@tailwindcss/vite": "^4.0.6",
  	"axios": "^1.7.9",
 	 "chart.js": "^4.4.7",
 	 "react": "^19.0.0",
 	 "react-chartjs-2": "^5.3.0",
	  "react-router-dom": "^7.1.5",
 	 "tailwindcss": "^4.0.6"
	}

___

### 🗂️ Project Structure

> src
│   main.tsx         # Entry point
│   App.tsx          # Root component
│   api.ts           # API integration 
│   helper.ts        # Reusable utility functions
│
├── assets
│   └── icons
│       ├── logo.svg
│
├── components
│   ├── BarGraph.tsx
│   ├── CircleProgressBar.tsx
│   ├── LineChart.tsx
│   ├── Sidebar.tsx
│   └── Block1.tsx - Block6.tsx   # Dashboard blocks
│
└── pages
    ├── Auth.tsx        # Login and Authentication Page
    └── Dashboard.tsx   # Main Dashboard Page
	
### Design Decisions

* **Custom Components**: Created custom Bar Graphs and Circle Progress Bars instead of using pre-built libraries to maintain design consistency, enhance performance, and provide flexibility for future customizations.

* **Organized Folder Structure**: Clearly separated components, pages, and assets to maintain a scalable and maintainable project architecture.

* **TypeScript**: Used throughout the project to ensure type safety and prevent runtime errors, enhancing code maintainability.

___

### Getting Started

#### Prerequisites

* Node.js (v18.x.x or later)
* NPM or Yarn package manager

#### Installation
1.  Clone the repository:
		 
		git clone   https://github.com/web3sandyyy/cerebral_dashboard
		cd cerebral-dashboard

2. Install dependencies:

		npm install

####  Running Locally
	npm run dev

___
### 🚀 Deployment
The application is deployed on Netlify: https://cerebral-dashboard.netlify.app/
Note: The APIs are not working on Netlify as they are not hosted on SSL. Please run the application locally for full functionality. Please ping me on twitter/telegram @web3sandyyy for env.

___

### Screenshot

![image](https://github.com/user-attachments/assets/ff53a271-f45d-4d59-ad7a-5ddc3b644fba)



