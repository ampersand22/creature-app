const express = require('express')
const { default: mongoose } = require('mongoose')

const creatureSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    location: String,
    image: String
});

const Creatures = mongoose.model('Creature', creatureSchema)

module.exports = Creatures;