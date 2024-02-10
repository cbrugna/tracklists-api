const express = require('express');
const app = express();
const PORT = 3000;

const tracklistRoutes = require('./api/tracklistRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world! The API is working.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/api', tracklistRoutes);
