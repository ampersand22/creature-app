const express = require('express')
const { default: mongoose } = require('mongoose')

const creatureSchema = new mongoose.Schema({
    name: String,
    age: String,
    location: String,
    image: String
});

const Creatures = mongoose.model('Creature', creatureSchema)

module.exports = Creatures;