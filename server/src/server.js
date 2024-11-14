// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');  // Import task routes

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (if needed, like images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define the base route (e.g., homepage or landing page)
app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
});

// Use taskRoutes for all task-related operations
app.use('/api/tasks', taskRoutes);  // All task-related routes will start with /api/tasks

// Error handling middleware (optional but recommended)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});