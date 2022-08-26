const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const Creatures = require('./models/Schema.js')
const monsterSeed = require('./models/monsterSeed.js')


app.use(express.json())
app.use(cors())



// Get
app.get('/creatures', (req, res)=>{
    Creatures.find({}, (err, foundCreatures)=>{
        res.json(foundCreatures);
    });
});

// Post
app.post('/creatures', (req, res) => {
    Creatures.create(req.body, (err, createdCreatures) => {
        res.json(createdCreatures);
    })
})

// Delete
app.delete('/creatures/:id', (req, res) => {
    Creatures.findByIdAndRemove(req.params.id, (err, deletedCreatures) => {
        res.json(deletedCreatures)
    } )
})

// Edit
app.put('/creatures/:id', (req, res)=>{
    Creatures.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCreatures)=>{
        res.json(updatedCreatures);
    });
});


/// LISTENING ////

app.listen(3000, () => {
    console.log('listening on 3000 homie...');
})

mongoose.connect('mongodb://localhost:27017/creaturecrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});