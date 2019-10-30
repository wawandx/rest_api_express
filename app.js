const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
let uri = process.env.DB_URI;

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { useNewUrlParser: true });

//routes
const contacts = require('./routes/contacts');

app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my world');
});

app.use('/contacts/', contacts);

const port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
})