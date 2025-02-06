const express = require('express');
const app = express();
const path = require('path');

// Set view engine to ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files

app.use(express.static(path.join(__dirname, 'public')));


// Render homepage

app.get('/', (req, res) => {
    res.render('index');
});

// Start server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
