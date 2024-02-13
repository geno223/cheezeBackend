require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const CheeseRouter = require('./controller/cheese') //new

const app = express();

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/cheese', CheeseRouter);

app.get('/', (req, res) => {
    res.send('ello mate')
})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening to port ${PORT}`))