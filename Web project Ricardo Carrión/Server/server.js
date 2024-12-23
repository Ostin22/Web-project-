let express = require('express');
let cors = require('cors');

let app = express();
let port = 3000;

app.use(cors());

app.get('/', (req, res) =>{
    let numeroRandom = Math.floor(Math.random() * 100) + 1;
    res.send(numeroRandom.toString());
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
