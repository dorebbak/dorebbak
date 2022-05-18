const express = require('express');
const app = express();

const server = app.listen(9808,() => {
    console.log('Start Server : localhost:9808');
});

app.get('/api/users/:type', async(req, res) =>{
    //res.send('connect.');
    let {type} = req.params;

    console.log(type);

    res.send('ok');
});