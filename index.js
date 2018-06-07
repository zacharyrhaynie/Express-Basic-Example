const express = require('express');
const app = express();
const db = require('monk')('mongodb://user:passw0rd@ds135540.mlab.com:35540/senator-lobbying-database');
const collection = db.get('senators');



app.get('/party/:party', async function(req, res){

    res.setHeader('Access-Control-Allow_Origin', '*');
    let filter = req.params.party;
    let sortedByParty = await collection.find({party: filter}).then((docs)=> docs);
    res.send(sortedByParty)
});
app.get('/gender/:gender', async function(req, res){

    res.setHeader('Access-Control-Allow_Origin', '*');
    let filter = req.params.gender;
    let sortedByGender = await collection.find({'person.gender': filter}).then((docs)=> docs);
    res.send(sortedByGender)
});
app.get('/*', async function(req, res){

    res.setHeader('Access-Control-Allow_Origin', '*');
    let home = await collection.find().then((docs)=> docs);
    res.send(home)
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
