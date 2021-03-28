const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
//const db = require('./db')

const directoryRouter = require('./routes/directory-router');

app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', directoryRouter)

app.get('*', (req, res)=>{  res.sendFile(path.join(__dirname, '../build/index.html'));})

app.listen(port, () => console.log(`Server running on port ${port}`))