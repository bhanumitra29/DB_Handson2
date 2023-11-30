const express = require('express');

const app = express();
const port = 4004;
const cors = require('cors');

const { route } = require('./route');
const { connection } = require('./config/db');

app.use(express.json())
app.get('/', (req, res) => {
  res.send('default Home page');
});


app.use(cors({
    origin:"*"
}))


app.use('/api',route)


app.listen(port, async() => {
  try {
    await connection();
    console.log(`Server is running on port ${port}`);
}
catch (err) {
    console.log("error", err);
}
});