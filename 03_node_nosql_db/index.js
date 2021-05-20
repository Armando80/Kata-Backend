require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 4020 || process.env.PORT;

mongoose.connect(process.env.MONGO_ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Database connected'))
.catch(() => console.log('Error connecting to database...'))

app.get('/prueba', (req, res) => {
    res.status(200).json({ messege: 'todo cool' });
});

app.use(require('./routers/UserRouter'));

app.listen( PORT, () => console.log("it's a live!"));