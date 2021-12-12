const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

dotenv.config()
const app = express();

//connect to database
connectDB();

// Init Middleware
app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('API Running!'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/admin', require('./routes/api/admin'));
app.use('/api/todos', require('./routes/api/todos'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));