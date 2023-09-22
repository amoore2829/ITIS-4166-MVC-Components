// Require modules
const express = require('express');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');

// Create application
const app = express();

// Configure application
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// Mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('tiny'));

// Set up routes
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/stories', storyRoutes);

// Start the server
app.listen(port, host, () => {
    console.log('Server running at port', port);
});