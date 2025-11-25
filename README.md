# CV - Darren Ikinepule

A modern, responsive CV application built with React and Tailwind CSS.

## Features

- Clean, professional design
- Responsive layout that works on all devices
- Highlighted career transition section
- Interactive contact information
- Modern UI with Tailwind CSS styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Project Structure

```
cv-Darren/
├── src/
│   ├── App.jsx          # Main CV component
│   ├── index.jsx        # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

Edit the `cvData` object in `src/App.jsx` to update your personal information, skills, and work experience.

