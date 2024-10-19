# Efficient Repair and Worker Allocation Platform (ERWAP)

ERWAP is a web application that connects users with skilled workers for various repair and maintenance services.

## Features

- Browse available services
- View skilled workers
- Book services
- Responsive design for mobile and desktop

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- State Management: React Hooks
- Routing: React Router
- API Requests: Axios

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/erwap.git
   cd erwap
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/erwap
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
erwap/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── server/
│   ├── models/
│   ├── routes/
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)