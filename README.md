# Knowledge Hub

A full-stack web application for managing and sharing educational resources, bookings, and testimonials. Built with a React frontend (Vite, Tailwind CSS) and a Node.js/Express backend with MongoDB.

## Features

- **Resource downloads:** Users can download curated PDF resources on AI topics.
- **Booking system:** Book appointments or sessions through an interactive form.
- **Testimonials:** View and submit testimonials from users.
- **Service listings:** Browse available services with detailed descriptions.
- **Responsive design:** Modern, mobile-friendly UI with dark mode support.

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Benjaminax/knowledge-hub.git
cd knowledge-hub
```

### 2. Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

### 3. Configure environment variables (if applicable)

If your backend requires environment variables, copy `.env.example` to `.env` and fill in real values.

```bash
cp .env.example .env
```

If you are on Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Required variables in `.env`:

```env
MONGODB_URI=your-mongodb-uri
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

### 4. Run the application

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend (in a new terminal)
```bash
cd frontend
npm run dev
```

### 5. Build for production (frontend)

```bash
cd frontend
npm run build
```

## API endpoints

- `GET /api/resources` -> Get list of downloadable resources
- `POST /api/bookings` -> Create a new booking
- `GET /api/testimonials` -> Get testimonials
- `POST /api/testimonials` -> Submit a testimonial

**Request body example (booking):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2026-05-12",
  "service": "AI Consultation"
}
```

## Dependencies

- **React:** Frontend UI library
- **Vite:** Fast frontend build tool
- **Tailwind CSS:** Utility-first CSS framework
- **Express:** Backend web framework
- **MongoDB/Mongoose:** Database and ODM
- **Framer Motion:** Animations in React

## Project structure

```
knowledge-hub/
├── backend/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── Components/
│   │   └── assets/
│   │       └── screenshots/
│   ├── index.html
│   ├── package.json
│   └── README.md
└── README.md
```

## Screenshots

![Home](frontend/src/assets/screenshots/Screenshot%202026-05-12%20204409.png)
![Booking](frontend/src/assets/screenshots/Screenshot%202026-05-12%20204424.png)
![Resources](frontend/src/assets/screenshots/Screenshot%202026-05-12%20204439.png)
![Testimonials](frontend/src/assets/screenshots/Screenshot%202026-05-12%20204453.png)

## Socials

If you have any questions, you can reach me here:

- **Instagram:** [@_.benjamin.a._](https://www.instagram.com/_.benjamin.a._/)
- **GitHub:** [Benjaminax](https://github.com/Benjaminax/)
- **Email:** kojoben29@gmail.com

In God we trust
