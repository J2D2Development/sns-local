
const express = require('express');
const app = express();

const PORT = '4455';

let subscribers = []; //store subs here (probably put this somewhere better)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/:topicName/:stage', (req, res) => {
    //check topic list (array of topic ids or names), if not found, return error
    res.send(`You requested topic: ${req.params.topicName} and stage ${req.params.stage}`);
    //here is where we will actually send the message being broadcast to all subscribers
});

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});