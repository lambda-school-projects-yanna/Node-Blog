require('dotenv').config();
const port = process.env.PORT || 4000;
const express = require('express');
const postsRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const server = express();

// ====== middleware
server.use(express.json());

server.use('/api/posts', postsRoutes);
server.use('/api/users', usersRoutes);

server.use('/', (req, res) => {
    res.send('API running!')
});

server.listen(port, () => {
    console.log(`API running on port ${port}`)
});
